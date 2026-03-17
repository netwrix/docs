---
title: "Add a Certificate Authority to the Ubuntu Trusted Authorities Repository"
description: "Add a Certificate Authority to the Ubuntu Trusted Authorities Repository"
sidebar_position: 100
---

# Add a Certificate Authority to the Ubuntu Trusted Authorities Repository

Add a Certificate Authority to the Ubuntu Trusted Authorities Repository

# Add a Certificate Authority to the Ubuntu Trusted Authorities Repository

In environments where SSL Inspection/Decryption is used, it may be necessary to include the
Certificate Authority’s public cert in the “ca-certificates” repo on Ubuntu. This will enable
downloads (for upgrades and so on) to transpire without receiving SSL Handshake errors.

# command to output the Certificate Authority

**NOTE:** This example uses a fake proxy at “192.168.0.3”. Please replace with the real proxy, or,
if no explicit proxy is used, remove the proxy argument altogether:

echo -n | openssl s_client -proxy 192.168.0.3:8080 -showcerts -connect google.com:443 | sed -ne
'/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p’

# Save output as MyCA.crt

# copy bottom certificate in the output (from "BEGIN_CERTIFICATE" to "END_CERTIFICATE") into MyCA.crt in "/usr/share/ca-certificates"

# check the cert

openssl x509 -in MyCA.crt -text -noout

# test to google using self signed cert (should fail)

"ERROR: cannot verify google.com's certificate, issued by 'O=mitmproxy,CN=mitmproxy': " Self-signed
certificate encountered.

get --delete-after [https://google.com](https://google.com/) -e use_proxy=on -e
https_proxy=192.168.0.3:8080

# gui to add the MyCA.crt cert

sudo dpkg-reconfigure ca-certificates

# test should pass now

wget --delete-after [https://google.com](https://google.com/) -e use_proxy=on -e
https_proxy=192.168.0.3:8080

Proxy request sent, awaiting response... 301 Moved Permanently

- # Location: [https://www.google.com/](https://www.google.com/) [following]
- # --2021-01-29 09:54:44-- [https://www.google.com/](https://www.google.com/)
- # Connecting to 192.168.0.3:8080... connected.
- # Proxy request sent, awaiting response... 200 OK wget --delete-after [https://google.com](https://google.com/) -e use_proxy=on -e https_proxy=192.168.0.3:8080
