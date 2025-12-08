---
description: >-
  Explains how to resolve the "Automatic user enrollment failed: Server
  certificate revocation check failed" error during the enrollment wizard,
  including causes and steps to disable certificate revocation checking if
  necessary.
keywords:
  - certificate revocation
  - enrollment wizard
  - SSL
  - Error 12057
  - pmserver
  - proxy
  - firewall
  - Internet Options
  - revocation check
products:
  - auditor
sidebar_label: 'Automatic user enrollment failed: Server certifica'
tags: []
title: 'Automatic user enrollment failed: Server certificate revocation check failed'
knowledge_article_id: kA00g000000H9bQCAS
---

# Automatic user enrollment failed: Server certificate revocation check failed

You see the following error when the enrollment wizard starts:

Automatic user enrollment failed: Server certificate revocation check failed. (Error Code:12057, URL: https://pmserver/gina_isprofilecreated.asp) Please contact your system administrator if this problem persists.

---

## Cause

The error means that the system was not able to check if the SSL certificate was revoked. In case of third-party certificates, it can be caused by firewall or anti-malware software blocking connections to revocation servers. Self-signed certificates are usually not checked for revocation, however the reason for the issue might be the same - the system cannot reach any certificate authority.

---

## Resolution

To address the issue:

1. Make sure firewall or other software is not blocking connection. Enable all connections and launch the wizard.
2. Also make sure that proxy server is not affecting connection.
3. If you use a self-signed certificate - try disabling the proxy and launch the wizard.
4. If the above does not work try disabling revocation check:

   - Open **Control Panel** → **Internet Options**.
   - Go to the **Advanced** tab.
   - Under the Security group of settings, disable the **Check server certificate for revocation** checkbox.
