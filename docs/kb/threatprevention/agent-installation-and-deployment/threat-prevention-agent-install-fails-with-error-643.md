---
description: >-
  Agent deployment from the Netwrix Threat Prevention Console fails with
  "Installer error 643" due to TLS/connection failures during certificate
  retrieval. This article shows verbose log examples, verification steps, and
  the recommended resolution.
keywords:
  - installer error 643
  - agent install
  - Netwrix Threat Prevention
  - port 3741
  - OpenSSL
  - SSL inspection
  - firewall
products:
  - threat-prevention
sidebar_label: Threat Prevention Agent Install Fails With Error 6
tags: []
title: "Threat Prevention Agent Install Fails With Error 643"
knowledge_article_id: kA04u0000000HvvCAE
---

# Threat Prevention Agent Install Fails With Error 643

## Symptom
Agent deployment from the Netwrix Threat Prevention Console fails with "Installer error 643".

Error 643 information found in the verbose installer log on the agent (`C:\Windows\Temp\SIAenbt-install-{date}_MainPackage64.log`) will show the following error if the installer is set to verbose logging:

```
RequestCertsCA:  Getting root cert from EM
RequestCertsCA: Exception:  System.IO.IOException: Unable to read data from the transport connection: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond. ---> System.Net.Sockets.SocketException: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond
   at System.Net.Sockets.NetworkStream.Read(Byte[] buffer, Int32 offset, Int32 size)
   --- End of inner exception stack trace ---
   at Org.BouncyCastle.Crypto.Tls.TlsProtocol.SafeReadRecord()
   at Org.BouncyCastle.Crypto.Tls.TlsProtocol.BlockForHandshake()
   at SI_Agent_CustomActions.Certificates.RemoteTlsCertificateRetrieval.RetrieveCertificatesFromTlsHost(String serverHostName, Int32 serverPort)
   at SI_Agent_CustomActions.CustomActions.RetrieveCertificates(String serverHostName, Int32 serverPort)
   at SI_Agent_CustomActions.CustomActions.RequestCertsCA(Session session)
RequestCertsCA: Ended
```

## Further Verification Steps

- Use `telnet` or `Test-NetConnection` to confirm port `3741` is accessible from the host where the Agent is being installed.
- Run the following OpenSSL command to test TLS connectivity (execute as a command, preserve the placeholder):
  - `OpenSSL.exe s_client -connect \{INTERCEPT IP ADDRESS\} -port 3741`
  - Notes:
    - This works from another machine but not on the one with the error.
    - On the failing host, OpenSSL does not connect to the server and shows output similar to the following:

```
CONNECTED(0000011C)
write:errno=10060
---
no peer certificate available
---
No client certificate CA names sent
---
SSL handshake has read 0 bytes and written 293 bytes
Verification: OK
---
New, (NONE), Cipher is (NONE)
Secure Renegotiation IS NOT supported
No ALPN negotiated
Early data was not sent
Verify return code: 0 (ok)
```

## Resolution
Contact your network/firewall team. This issue most commonly results from a firewall blocking communication on port `3741` from the host where the Agent is being installed to the Netwrix Threat Prevention host. It may also be caused by SSL inspection between the Netwrix Threat Prevention host and the host where the Agent is being installed.
