---
description: >-
  Describes how to resolve SI Agents that cannot self-upgrade due to missing
  certificates, with manual and GPO-based certificate installation steps.
keywords:
  - SI Agent
  - upgrade
  - certificates
  - DigiCert
  - Trusted Root
  - GPO
  - mmc
  - import
products:
  - threat-prevention
sidebar_label: Unable to Upgrade SI Agents
tags: []
title: "Unable to Upgrade SI Agents"
knowledge_article_id: kA04u000000wnqgCAA
---

# Unable to Upgrade SI Agents

## Symptoms

- When attempting to upgrade a SI Agent, no updates are available.
- The message `You're using the latest version` is prompted while an upgrade is expected to occur.

## Cause

The upgrade will fail for previous versions of SI Agents in servers without required certificates.

## Resolution

Refer to the following steps to allow SI Agents to self-upgrade to future versions:

1. Uninstall the previous version of installed SI Agent.
2. Install the latest SI Agent.
3. Install required certificates.

### Install required certificates − Preparation

1. Download the following certificates:

```
https://cacerts.digicert.com/DigiCertAssuredIDRootCA.crt.pem
https://cacerts.digicert.com/DigiCertTrustedRootG4.crt.pem
https://cacerts.digicert.com/DigiCertTrustedG4CodeSigningRSA4096SHA3842021CA1.crt.pem
```

2. Put the certificates in a shared folder.

### Install required certificates − Manually import certificates to the local certificate store

1. Launch Microsoft Management Console (e.g., via **Run** > **mmc.exe**).
2. Select **File** > **Add/Remove Snap-ins**.
3. Select **Certificates** > **Add**.
4. Select **Computer account** > **Local computer** > **Finish** > **OK**.
5. Expand the **Certificates (Local Computer)** node in the left pane.
6. Right-click **Trusted Root Certification Authorities** > **All tasks** > **Import...**.
7. Click **Next** > **Browse** to locate the certificates downloaded previously, and select the appropriate certificate.

> IMPORTANT: In case the certificates are not showing in the target folder, switch the extension filter to show **All files**, and select the certificate.

8. Select the **Place all certificates in the following store** option with the certificate store being **Trusted Root Certification Authorities**. Click **Next** > **Finish**.
9. Wait for the **The import was successful** message to pop up.
10. Repeat the steps for all certificates in all servers.

### Install required certificates − GPO

1. In your domain controller, launch the **Group Policy Management** snap-in.
2. Locate an existing Group Policy Object (GPO) or create a new GPO to specify the certificate settings.
3. Right-click the GPO, and click **Edit**.
4. In the left pane, locate **Computer Configuration** > **Policies** > **Windows Settings** > **Security Settings** > **Public Key Policies**.
5. Right-click **Trusted Root Certification Authorities**, and click **Import...**.
6. Click **Next** > **Browse** to locate the certificates downloaded previously, and select the appropriate certificate.

> IMPORTANT: In case the certificates are not showing in the target folder, switch the extension filter to show **All files**, and select the certificate.

7. Select the **Place all certificates in the following store** option with the certificate store being **Trusted Root Certification Authorities**. Click **Next** > **Finish**.
8. Wait for the **The import was successful** message to pop up.
9. Repeat the steps for all certificates.

> TIP: Force GPO update in remote servers using the GPO Management console or scripts.
