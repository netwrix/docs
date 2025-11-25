---
description: >-
  Explains why Netwrix Auditor health summary emails fail with an SSL Exception
  and how to verify TLS/SSL certificate expiration.
keywords:
  - ssl
  - tls
  - certificate
  - health summary
  - email
  - Netwrix Auditor
  - Event ID 5302
  - SSL Exception
  - SSRS
products:
  - auditor
sidebar_label: 'SSL Exception — Failed to Deliver Netwrix Auditor '
tags: []
title: "SSL Exception — Failed to Deliver Netwrix Auditor Health Summary Email"
knowledge_article_id: kA04u00000110qJCAQ
---

# SSL Exception — Failed to Deliver Netwrix Auditor Health Summary Email

## Symptom and Cause

Regular emailed reports are missing. Netwrix Auditor Health Log contains the following error:

```text
Event ID: 5302
Description:Netwrix Auditor was unable to deliver the health summary email for YYYY/MM/DD due to the following error:
'Failed to deliver the Netwrix Auditor health summary email. Reason: Cannot send an email: SSL Exception'
```

Your TLS\SSL certificate has expired — Netwrix Auditor stops generating reports on SSL\TLS certificate expiration.

## Resolution

To establish whether your certificate has expired, check the Microsoft Management Console (MMC) Certificates Snap-in (your certificate store). For additional information on setting up the SSL\TLS channel communication, refer to the following article: [Set Up Secure Connection Between Auditor and SSRS via SSL/TLS Channel](/docs/kb/auditor/troubleshooting-and-errors/ssl-tls-certificate-issues/set_up_secure_connection_between_auditor_and_ssrs_via_ssltls_channel)
