---
description: >-
  When adding box.com as a source in Netwrix Data Classification, you may
  receive the "END ENCRYPTED PRIVATE KEY not found" error due to incorrect
  private key formatting in the JSON file. This article explains the cause and
  shows how to fix the key by replacing `\n` sequences with actual line breaks.
keywords:
  - encrypted private key
  - box.com
  - JSON
  - Netwrix Data Classification
  - private key formatting
  - END ENCRYPTED PRIVATE KEY
  - error
  - keypair
products:
  - data-classification
sidebar_label: 'Error: END ENCRYPTED PRIVATE KEY Not Found'
tags:
  - troubleshooting-and-errors
title: 'Error: END ENCRYPTED PRIVATE KEY Not Found'
knowledge_article_id: kA00g000000PbcrCAC
---

# Error: END ENCRYPTED PRIVATE KEY Not Found

## Symptom

When you add box.com as a source in Netwrix Data Classification, you generate a public/private keypair for your app. When you fill in all of the required fields and click **Save**, you receive the following error:

```text
System.Exception: Error validating source:
-----END ENCRYPTED PRIVATE KEY not found --->
System.IO.IOException:
-----END ENCRYPTED PRIVATE KEY not found
```

## Cause

The formatting of the private key in the JSON file is incorrect. Refer to the following example:

![private key example](./../0-images/ka0Qk0000005chN_0EMQk000007eSHh.png)

The private key contains multiple `\n` entries that represent line breaks.

## Resolution

Replace the `\n` entries with carriage returns symbols. Refer to the code block below for an example:

```text
-----BEGIN ENCRYPTED PRIVATE KEY-----
MIIFHDBOBgkqhkiG9w0BBQ0wQTApBgkqhkiG9w0BBQwwHAQI/iZkymGz+4ECAggA
MAwGCCqGSIb3DQIJBQAwFAYIKoZIhvcNAwcECD4Y7asdVSJXBIIEyOcarDTHINB9
qmPZrv3W966rOBD1Cxi9+CnfvDNazkJsKcFYz51OM585smhKqTNLcC0WVuCPLUfj
xODTlJ2gotlK41vtGQpTaPdJYNHhR5NzkxJ1o1WbYQNicOkXJaRyyXcAzQQIdnvH
JEZJlMRBSzcFmEzZNemhWRyFbnXO0oqU5UcqUxsSXXzea6s6wAcNKSEYRBwvaDAZ
yBRYPv6v5Zw/jx3V6lAgylWMDUexPxy+gVoHv3hrtUfPMo+vxBC1UTE/XLaEtFPY
FxjPuR7+SoQ1uu4sBBWTSYwGRxlFktap58pOyeC8PL4jTP7q5Zpb8A+MtUD46jw0
PFrFd2Pn+f5X6qoERfjkDNSPIk823Hb85MgjF87hqr8RTZlsRekwqIMtLIUutPIk
QbEscKp8zJ2/nsHr5XxrDv2jLmWlxdpTC4uj4vh1aiNUWMXvJBfMRWDZq4TVjo9G
9vIldfYjDdRTrKVuQK141EKiY6TKljMURVhRmkgdTtN8fN1gz6GWiDKG8jU8PFDj
uvFYqMdtKPgn06sxHvUCkKM93BKvvk9ASrnUEW2EhohHxFJS1xbzqWw8bPhvQz7J
DUMJw5mLU8hZWlOclh/xEG0pYM6QogmYGTbnqUHsbX4UF9vpzpJIx/ESF25T5kTK
S2BzDOksd6ZPELLksavJSLDevM1fK5iFWR8CBGP+o5MRBOhaNBR0wkIFE+K+uCim
N9IcvTLGWNeS6iNO6pnaRajt2GjCXU/gjMMkKeZ3ZFpUGHGzLwCWDCX3VCMWBndq
GhdbNlD5RXIA+DakIdXTKyZ4Ecm9unH8DfRcwgzaWByzyIEwhHPU/Kf7vSdRLVVi
4+GT+LH3XTZplWYFy2RhhgFci/vpDWINHl5bckzhrrtQp0Khak4+tkQkM1l/Cta3
BFNoJCBqTLKies7AMqtgWvG0oc/RCWvQsEhKSJmVKzmO227NKBA7ZOmlTs8g5lx7
/soEwm0HtFYWkzNBbaMT7U21LfSwGZ7afU3stj898eVh0xEA+IpH/WuaMpHtkdI4
yAEJegf+VyZUfNHKo3sztvx8wmhSyrcfhludcVT26VH63LkhPfFd8Cvzs9903IH0
S0cr9Nk6KACTpDbZpiQ8zgktKBau5nCwd7voa9UBaEMXXF/j50oWhMubrHEmlbmY
7ZkhjNv+1qKfCh0u5L/LF6s5qgAV9ooODCpr8fA5Jf1bOlJ8+8KwcXKeUyZVi1r/
NWdAwifNUdLlr7nngwjP2uVe6mE5BoQL/Vr9pugKthcxcCMcZje4Sb1OWvdu8fve
fVSlXjer4+HTa1h8zT/QOywrQf00Pqm4CmM5baGdVwP7eVeG7kpAvATxhOOLSj0/
Df2e6ybPusoDB4/NPg2x4Q5zK9JLHU8ZAMcE3N9FkZVP5c8FgSpJwJ3HGJ7shTwL
HR0gU4Bzob9AIK+EHARfL+JlR/l1qWPNur7JV69SJm2Vt09ixCTejLJEHqrOBp1B
RDKV0PyZWLKmKe4fMFrJX+ktsEWlRcvIqQ0yW2aN2sdYER+HiFv+NDIyERF8lXT3
YKQfIMQfYsS7WbqzbDnK3KQnrc7v7zRH3efohP4xpJUzJv6mAxhZruAkpCRDVrwZ
Vqpu4Jo+HuQbz9moqbhWCQ==
-----END ENCRYPTED PRIVATE KEY-----</pre>
```

 
