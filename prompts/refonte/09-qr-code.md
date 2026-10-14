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
| Flyer, zone WO1 | `https://radialec.be/f/WO1` | `/offre?utm_source=flyer&utm_medium=imprime&utm_campaign=entretien-149&utm_content=WO1` |
| Flyer, autre zone | `https://radialec.be/f/KR1` (un code par zone : lettres, chiffres, tiret, 12 caractères max) | idem, `utm_content=KR1` |
| Flyer sans zone | `https://radialec.be/f` | idem, sans `utm_content` |
| Autocollant chaudière | `https://radialec.be/s` | `/ma-chaudiere?utm_source=autocollant&utm_medium=imprime&utm_campaign=autocollant-chaudiere` |
| Carte de visite | `https://radialec.be/c` | `/?utm_source=carte&utm_medium=imprime&utm_campaign=carte-visite` |

- **Domaine :** `radialec.be` sans « www » est plus court, donc le QR est plus simple. Vercel ajoute le « www » en gardant le chemin (vérifié le 14/10).
- **Codes zone :** n'importe quel code fonctionne sans rien changer sur le site. Tenir la liste des codes à côté de la liste des communes du flyer.
- **`utm_medium` = `imprime`, sans accent :** un accent dans une URL devient `imprim%C3%A9` et se lit mal dans les rapports.

### Les deux pages d'arrivée (non indexées, hors menus, hors plan du site)

- **`/offre` (flyer).** La page ne montre que l'offre :
  - le prix ;
  - ce qui est compris (liste validée de la page entretien) ;
  - l'appel, « Prendre rendez-vous » (agenda en ligne de l'entretien) et WhatsApp ;
  - un formulaire court (prénom + téléphone, rappel sous 2 h) ;
  - 3 avis sur l'entretien, puis le CTA final.

  Contenu : `app/data/offre.ts`.

- **`/ma-chaudiere` (autocollant).** Pour quelqu'un qui veut appeler, pas lire :
  - l'appel en grand et WhatsApp (« Envoyer une photo ») ;
  - « Reprogrammer l'entretien » et « Être rappelé » ;
  - le prix du dépannage ;
  - les consignes « odeur de gaz » (texte validé, inchangé).

  L'autocollant est posé sur la chaudière : c'est là qu'on les cherche.

Dans les deux cas, les tags arrivent dans Google Analytics. Ils sont aussi joints à chaque demande de devis ou de rappel envoyée depuis la visite (ligne « Origine du client » de l'e-mail et de l'alerte Telegram) : on sait quel flyer et quelle zone ont amené le client.

### ⚠️ À décider avant d'imprimer le flyer : le prix

- **Le problème :** ce brief annonce l'entretien à **129 €**, mais le site affiche **149 €** depuis le 08/10/2026. C'est le prix normal de l'entretien gaz, et le prix de lancement à 129 € est terminé.
- **Ce que montre la page `/offre` aujourd'hui :** le prix normal (149 €). La campagne s'appelle donc `entretien-149`.
- **Pour une offre flyer à 129 € :**
  - la renseigner dans `app/data/pricing.ts` (`flyerOffer`) : `amount: 129` **et** une date de fin `validUntil` (ex. « 31 décembre 2026 ») ;
  - la page affiche alors 129 € et « Offre valable jusqu'au… », sans prix barré ;
  - la campagne devient `entretien-129` ;
  - le reste du site garde 149 €.
- **Règle :** le flyer et la page doivent annoncer le même prix.

### Les autres canaux (pas de lien court nécessaire)

- **Google Ads :**
  - l'auto-marquage (`gclid`) suffit, ne pas ajouter d'UTM ;
  - une page par campagne : `/chauffage/entretien-chaudiere`, `/chauffage/remplacement-chaudiere`, `/chauffage/depannage-chaudiere` ;
  - mise en route : `07-suivi-ads-clarity.md`.
- **Fiche Google (champ « Site web ») :** `https://www.radialec.be/?utm_source=fiche-google&utm_medium=organique&utm_campaign=fiche-google`
- **Facebook :** `https://www.radialec.be/<page>?utm_source=facebook&utm_medium=organique&utm_campaign=<nom-de-la-publication>`. Choisir la page selon la publication ; pour une publicité payante, `utm_medium=pub`.
