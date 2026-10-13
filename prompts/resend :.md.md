resend : 
Domain
Domain name and region for your sending and receiving.

Ireland
radialec.com
Fill in your DNS Records
Add the following DNS records in your domain provider.
Domain Verification
DKIM
Type	Name	Content	TTL
TXT	
resend._domainkey
p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDjH7KuYHZliTuXk1kmcMxQ16dCol+AkiNGFNN76UFmkMyuwHJ8r81Qn+wmPHI3FjYdLXNMqsOzuV8gt8ofPdtddKQFt9UkkaLLuItmemTP3JMj2M81jLUP6qHlvWLJaTWdX8TuiXTz7no7A2/OKMXhEgQ8xDrfQ8Ix+96xxf0ucwIDAQAB
Auto
Enable Sending


SPF
Type	Name	Content	TTL
CNAME	
rsend
rsend-euw1.forge.rmta.net
Auto
CNAME	
send
send.forge.rmta.net
Auto
DMARC
(Optional)
Type	Name	Content	TTL	Priority
TXT	
_dmarc
v=DMARC1; p=none;
Auto


hostinger :

	
Type
Nom
Priorité
Contenu
TTL
actions

TXT	
zmail._domainkey	
0	
"v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCl9AlK2c6rCfQqJw9lGZ/FSSVWbPawBoRzfAWaUbA6SadNt3FQeSKkMM2yYjg+nXTh+r/UE4Nwh8stMEW7iRe3SaFuvNkuibzl5eS9D1x3TzXV7gGtREPmNOwIZjdXxCA/E51ITVqFpxT4RW29JAzkH9a2p2CwGryHHxCAk61nmwIDAQAB"	
3600	


TXT	
resend._domainkey	
0	
"p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDjH7KuYHZliTuXk1kmcMxQ16dCol+AkiNGFNN76UFmkMyuwHJ8r81Qn+wmPHI3FjYdLXNMqsOzuV8gt8ofPdtddKQFt9UkkaLLuItmemTP3JMj2M81jLUP6qHlvWLJaTWdX8TuiXTz7no7A2/OKMXhEgQ8xDrfQ8Ix+96xxf0ucwIDAQAB"	
3600	


CNAME	
www	
0	
9e034e7e4939db23.vercel-dns-017.com	
3600	


TXT	
_vercel	
0	
"vc-domain-verify=www.radialec.be,98c0f60aad8e38f01d4c"	
3600	


TXT	
_vercel	
0	
"vc-domain-verify=radialec.be,117c88a3565274807fcc"	
3600	


TXT	
send	
0	
"v=spf1 include:amazonses.com ~all"	
3600	


MX	
send	
10	
feedback-smtp.eu-west-1.amazonses.com	
3600	


TXT	
_dmarc	
0	
"v=DMARC1; p=none; rua=mailto:info@radialec.be"	
3600	


TXT	
_dmarc	
0	
"v=DMARC1; p=none"	
3600	


TXT	
@	
0	
"google-site-verification=S0Lpaw1CC63SlmeCNXX4fZ5Zmhnn8rPh9agEFLq2Wdw"	
3600	


TXT	
@	
0	
"google-site-verification=dKYpGGWZX7RwMVGLhzsJbo3yCFlPOspvm3evs2G_pmY"	
3600	


TXT	
@	
0	
"zoho-verification=zb77093540.zmverify.zoho.eu"	
3600	


TXT	
@	
0	
"v=spf1 include:zohomail.eu ~all"	
3600	


MX	
@	
50	
mx3.zoho.eu	
3600	


MX	
@	
20	
mx2.zoho.eu	
3600	


MX	
@	
10	
mx.zoho.eu	
3600	


A	
@	
0	
216.198.79.1	
3600	

