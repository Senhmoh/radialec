Principe : un QR par support, une destination adaptée à l’intention, un tag unique

Chaque QR pointe vers une URL courte de ton domaine qui redirige vers la bonne page avec les tags. Ainsi, tu peux changer la destination sans réimprimer. Le QR n’est jamais un lien long.

Support	URL courte dans le QR	Page d’arrivée	Pourquoi
Flyer	radialec.be/f	/offre (entretien 129 €, formulaire court, boutons appel et WhatsApp)	Le lecteur est froid. Il doit voir l’offre qui l’a fait scanner, rien d’autre.
Autocollant chaudière	radialec.be/s	Page dépannage/contact, bouton d’appel en grand	Le client a un problème ou veut reprogrammer. Il veut appeler vite, pas lire.
Carte de visite	radialec.be/c	/acceuil	Remis après un échange, donc public chaud qui veut voir services ou tarifs.
Google Ads	clic pub (gclid automatique)	Une page par campagne (entretien, remplacement, dépannage)	Message identique à l’annonce.
Fiche Google	lien “site web” avec tag	Accueil ou /contact	Pour isoler le trafic de la fiche.
Facebook	lien avec tag	Selon la publication	Idem.

Tags (standard UTM, que GA4 sait lire) : utm_source = flyer, autocollant, carte, google-ads, fiche-google, facebook. utm_medium = imprimé, pub, organique. utm_campaign = l’offre (ex. entretien-129). utm_content = le code zone du flyer (WO1, KR1...), pour savoir quelle commune rapporte.

Un point à arbitrer : les services de QR dynamiques payants peuvent désactiver le lien à la fin de l’abonnement, et tes 20 000 flyers seraient morts. Fais donc les redirections sur ton propre site (une tâche simple pour Claude Code).

---

## Mise en place sur le site (Claude Code, 14/10/2026)

Les redirections sont servies par le site lui-même : aucun service de QR payant, les liens ne meurent jamais.
- **Où ça se règle :** `app/data/short-links.ts`, lu par `next.config.ts`.
- **Type de redirection :** temporaire (307). On peut donc changer la destination ou les tags sans réimprimer.

### Ce qu'il faut mettre dans les QR codes (QR à créer, pas encore faits)

| Support | Contenu du QR | Arrive sur |
|---|---|---|
| Flyer, zone WO1 | `https://radialec.be/f/WO1` | `/offre?utm_source=flyer&utm_medium=imprime&utm_campaign=entretien-129&utm_content=WO1` |
| Flyer, autre zone | `https://radialec.be/f/KR1` (un code par zone : lettres, chiffres, tiret, 12 caractères max) | idem, `utm_content=KR1` |
| Flyer sans zone | `https://radialec.be/f` | idem, sans `utm_content` |
| Flyer en néerlandais, zone WO1 | `https://radialec.be/fn/WO1` | `/nl/aanbod?utm_source=flyer&utm_medium=imprime&utm_campaign=entretien-129-nl&utm_content=WO1` |
| Flyer en néerlandais sans zone | `https://radialec.be/fn` | idem, sans `utm_content` |
| Autocollant chaudière | `https://radialec.be/s` | `/ma-chaudiere?utm_source=autocollant&utm_medium=imprime&utm_campaign=autocollant-chaudiere` |
| Carte de visite | `https://radialec.be/c` | `/?utm_source=carte&utm_medium=imprime&utm_campaign=carte-visite` |

- **Domaine :** `radialec.be` sans « www » est plus court, donc le QR est plus simple. Vercel ajoute le « www » en gardant le chemin (vérifié le 14/10).
- **Codes zone :** n'importe quel code fonctionne sans rien changer sur le site. Tenir la liste des codes à côté de la liste des communes du flyer.
- **`utm_medium` = `imprime`, sans accent :** un accent dans une URL devient `imprim%C3%A9` et se lit mal dans les rapports.

### Les pages d'arrivée (non indexées, hors menus, hors plan du site)

**Version néerlandaise (15/10/2026).** `/nl/aanbod` est la même page que `/offre`, en néerlandais. QR : `radialec.be/fn`.
- **Contenu :** `app/data/nl/offre.ts` ; gabarit commun : `app/sections/OfferPage.tsx`.
- **Seule page néerlandaise en ligne** (`nlLiveSegments`, `app/data/visibility.ts`).
- **Ses liens** (menu, pied de page, confidentialité, cookies) mènent aux pages françaises, jusqu'à la publication du site néerlandais.
- **Les demandes** arrivent avec « 🟠 FLYER WO1 » et « 🇳🇱 NL ». Le client reçoit sa confirmation en néerlandais, avec « Uw aanbod : … 129 € ».


- **`/offre` (flyer).** Une page d'offre, de haut en bas :
  - le prix en grand ;
  - l'appel et WhatsApp ;
  - le formulaire « Je réserve » ;
  - « comment ça se passe » en 3 étapes, sans rien payer d'avance ;
  - ce qui est compris (liste validée de la page entretien) ;
  - 3 avis sur l'entretien ;
  - les questions sur l'offre ;
  - le CTA final, qui ramène au formulaire.

  Contenu : `app/data/offre.ts` ; formulaire : `app/sections/offre/OfferForm.tsx`.

- **`/ma-chaudiere` (autocollant).** Pour quelqu'un qui veut appeler, pas lire :
  - l'appel en grand et WhatsApp (« Envoyer une photo ») ;
  - « Reprogrammer l'entretien » et « Être rappelé » ;
  - le prix du dépannage ;
  - les consignes « odeur de gaz » (texte validé, inchangé).

  L'autocollant est posé sur la chaudière : c'est là qu'on les cherche.

Dans les deux cas, les tags arrivent dans Google Analytics. Ils sont aussi joints à chaque demande de devis ou de rappel envoyée depuis la visite (ligne « Origine du client » de l'e-mail et de l'alerte Telegram) : on sait quel flyer et quelle zone ont amené le client.

### Offre du flyer (décidée le 15/10/2026 : 5 000 flyers)

**Le prix et la date**
- **Entretien de chaudière gaz à 129 € TVAC, jusqu'au 31 décembre 2026 inclus.** Le reste du site reste à 149 €. Réglage : `flyerOffer` dans `app/data/pricing.ts`.
- **À imprimer sur le flyer, à l'identique de la page :**
  - le prix (129 €) ;
  - la date (« jusqu'au 31 décembre 2026 ») ;
  - le code zone, près du prix (« Code WO1 »).
- **Pas de prix barré ni de « au lieu de 149 € ».** Le prix normal est remonté à 149 € le 08/10 ; une réduction annoncée devrait se référer au prix le plus bas des 30 derniers jours, qui était 129 €.
- **Gaz seulement.** L'offre porte sur l'entretien gaz, le mazout reste à 219 €. La page le dit.
- **Après le 31/12 :**
  - `/offre` repasse seule au prix normal, avec « offre terminée le 31 décembre 2026 » (page régénérée toutes les heures, rien à redéployer) ;
  - les demandes portent « offre flyer terminée : prix normal ».
- **Campagne :** les liens `/f` portent `utm_campaign=entretien-129`.

**Le parcours des clients du flyer.** Même circuit que les autres demandes, mais le client est reconnaissable à chaque étape :
1. **Sur `/offre`.**
   - Le prix est en grand, avec le formulaire « Je réserve mon entretien à 129 € » : prénom et nom, téléphone, moment du rappel, e-mail facultatif (« pour recevoir votre prix par écrit »).
   - Avec un code dans le lien (`/f/WO1`), le formulaire affiche « Code flyer WO1 : 129 € TVAC appliqué ».
   - Sous le bouton d'appel : « Au téléphone, donnez le code WO1 ».
2. **À la réception d'une demande.**
   - L'e-mail interne et l'alerte Telegram commencent par **« 🟠 FLYER WO1 »**, suivi du prix à appliquer.
   - Même chose pour un devis ou un rappel envoyé depuis une autre page pendant une visite arrivée par le flyer.
3. **Le client reçoit son prix par écrit** dans l'e-mail de confirmation : « Votre offre : entretien de chaudière gaz à 129 € TVAC (offre flyer jusqu'au 31 décembre 2026) ».
4. **Au téléphone** (appels directs, invisibles pour les statistiques), le technicien demande ou reçoit le code, applique 129 € et **note la zone**. C'est la seule façon de compter les appels venus du flyer.
5. **Bilan mensuel par zone :**
   - appels avec code ;
   - demandes « FLYER » (e-mail / Telegram) ;
   - Google Analytics (`utm_content`).

   Il sert à décider où réimprimer.

**Réservation en ligne**
- **À faire :** créer sur Cal.com un type de rendez-vous « Entretien chaudière, offre flyer » (même durée, 129 € dans la description). Me donner son lien : il se branche dans `onlineBooking.flyerEvent` (`app/data/company.ts`).
- **Tant qu'il n'existe pas :** `/offre` ne propose pas l'agenda, pour éviter que le client tombe sur l'agenda au prix normal. La barre mobile de `/offre` mène au formulaire de l'offre.

### Les autres canaux (pas de lien court nécessaire)

- **Google Ads :**
  - l'auto-marquage (`gclid`) suffit, ne pas ajouter d'UTM ;
  - une page par campagne : `/chauffage/entretien-chaudiere`, `/chauffage/remplacement-chaudiere`, `/chauffage/depannage-chaudiere` ;
  - mise en route : `07-suivi-ads-clarity.md`.
- **Fiche Google (champ « Site web ») :** `https://www.radialec.be/?utm_source=fiche-google&utm_medium=organique&utm_campaign=fiche-google`
- **Facebook :** `https://www.radialec.be/<page>?utm_source=facebook&utm_medium=organique&utm_campaign=<nom-de-la-publication>`. Choisir la page selon la publication ; pour une publicité payante, `utm_medium=pub`.
