---
description: >-
  Describes how to renew the self-signed Imanami GroupID Certificate SSL
  certificate for Netwrix Directory Manager 10 and 11 and bind it to the
  Directory Manager site in IIS without rerunning the configuration tool.
keywords:
  - Imanami GroupID Certificate
  - SSL certificate
  - self-signed certificate
  - certificate renewal
  - certificate expiration
  - selfssl.exe
  - IIS Manager
  - HTTPS binding
  - iisreset
  - Netwrix Directory Manager
products:
  - directorymanager
sidebar_label: Renewing the Imanami GroupID Certificate
tags:
  - kb
  - system-administration-and-maintenance
title: "Renewing the Imanami GroupID Certificate"
knowledge_article_id: kA0Qk0000003wgzKAA
---

# Renewing the Imanami GroupID Certificate

## Related Queries

- "How to: Renew SSL certificate for Directory Manager v.10 and v.11"
- "Imanami GroupID Certificate is going to expire."
- "Renew self-signed certificate for Directory Manager."

## Overview

This article describes how to renew the self-signed "Imanami GroupID Certificate" SSL certificate for Netwrix Directory Manager 10 and 11. Directory Manager uses the certificate for HTTPS bindings in IIS, and the certificate expires one year after installation. The procedure generates a new certificate and binds it to the Directory Manager site without rerunning the configuration tool, which avoids downtime.

## Instructions

### Generate a New Self-Signed Certificate

1. On the Directory Manager server, open **File Explorer**, and go to the installation directory (for example, `C:\Program Files\Imanami\GroupID10` or `C:\Program Files\Imanami\GroupID11`).
2. In the address bar, type `cmd` and press Enter to open **Command Prompt** in that directory.
3. Run the following command to generate a new certificate with 5 years (1825 days) of validity:

    ```batch
    selfssl.exe /N:CN=Imanami_GroupID_Certificate /V:1825 /T /Q /K:2048
    ```

### Bind the New Certificate in IIS Manager

1. Open **IIS Manager**.
2. Go to **Server Node** > **Sites**, and locate **GroupIDSite10** or **GroupIDSite11**.
3. Right-click the site, and select **Edit Bindings**.
4. Select the **HTTPS** binding, and click **Edit**.
5. In the **Certificate** dropdown, select the newly created certificate, and click **OK** to save the changes.
6. Open **Command Prompt** as an administrator, type `iisreset`, and press Enter.

> **NOTE:** The "Imanami GroupID Certificate" is a demo certificate created during installation, and users may see browser warnings when you use a self-signed certificate. For production environments, Netwrix recommends replacing it with a CA-signed or enterprise certificate.
