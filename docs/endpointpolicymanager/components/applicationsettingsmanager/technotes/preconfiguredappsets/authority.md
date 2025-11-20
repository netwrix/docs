---
title: "Firefox: How can I deliver Certificates to \"Certificate Authority\" store and select \"websites\", \"mail users\" and \"software makers\"?"
description: "Firefox: How can I deliver Certificates to \"Certificate Authority\" store and select \"websites\", \"mail users\" and \"software makers\"?"
sidebar_position: 110
---

# Firefox: How can I deliver Certificates to "Certificate Authority" store and select "websites", "mail users" and "software makers"?

When using Netwrix Endpoint Policy Manager (formerly PolicyPak), you can deliver Certificates to
various Firefox stores.

If you deliver a certificate to the ROOT store, then the following checkboxes are always pre-checked
upon delivery by Endpoint Policy Manager.

![212_1_image00](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/certificate/212_1_image00.webp)

However, if you deliver a certificate to the CERTIFICATE AUTHORITY (CA) store, then NONE of these
checkboxes are checked for you.

The standard syntax to deliver a cert to the CA store using Endpoint Policy Manager would be:

\CA-DC1DataFF.cer,ca,add

But, as stated, this does not check the three checkboxes for selecting:

- "websites",
- "mail users" and
- "software makers."

You can do this with the CA store using a different syntax. The modified syntax would be as follows,
and please note there are comas and semi colons and the syntax must be exact (and the cert must
still be in BINARY DER format).

```
\\ServerShareFF.cer,1,C;C;C,add
```

Here is the explanation:

## Syntax:

Server & Share, Cert, Number of Days to check.. then…

[websites-trust];[mail-users-trust];[software-makers-trust]

Where websites-trust, mail-users-trust and software-makers-trust can be null or one of the following
letters:

p    prohibited (explicitly distrusted)

P    Trusted

c    Valid CA

T    Trusted CA to issue client certificates (implies c)

C    Trusted CA to issue server certificates (SSL only) (implies c)

u    Certificate can be used for authentication or signing

w    Send warning (use with other attributes to include a warning when the certificate is used in
that context)

## Some examples:

C;C;C – Root CAs for websites, mail users and software makes

C;;C – Root CA for websites and software makers. Note, this specifically does NOT specify a flag for
"mail users."

C;; – Root CA for websites only

;;c – CA for software makers only

P;; – a trusted certificate for websites


