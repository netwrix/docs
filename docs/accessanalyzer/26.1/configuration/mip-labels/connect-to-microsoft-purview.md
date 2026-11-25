---
title: Connect to Microsoft Purview
description: Turn on MIP labeling, authenticate a Microsoft Purview account with an app registration's certificate, and sync your sensitivity labels.
sidebar_position: 1
---

Access Analyzer signs in to Microsoft Purview as an app registration in your Microsoft Entra tenant, with a certificate. It uses that account to read your sensitivity labels, to read and label SharePoint files, and to work with Azure Rights Management for labels that encrypt. This page turns on Microsoft Information Protection (MIP) labeling, authenticates the account, and syncs the labels.

You need the Admin role. Other roles don't see the **MIP labels** tab.

## Before you begin

Prepare an app registration in the Microsoft Entra tenant that holds your labels:

1. Register an application in Microsoft Entra, or pick an existing one. Note its **Application (client) ID** and your tenant ID or domain.
2. Grant the application these Microsoft Graph **application** permissions, and grant admin consent:

   | Permission | What Access Analyzer uses it for |
   |---|---|
   | `SensitivityLabels.Read.All` | List the labels |
   | `InformationProtectionPolicy.Read.All` | Label actions and protection templates |
   | `Files.ReadWrite.All` or `Sites.ReadWrite.All` | Read and label SharePoint files |

3. Create a certificate with an RSA key, and upload the certificate's public part to the app registration under **Certificates & secrets**.

Access Analyzer accepts the certificate and its private key as Privacy-Enhanced Mail (PEM) text. The private key must be an unencrypted RSA key. For example, this command creates a self-signed certificate and key that are valid for two years:

```bash
openssl req -x509 -newkey rsa:2048 -nodes -sha256 -days 730 \
  -subj "/CN=Access Analyzer MIP labeling" \
  -keyout mip-labeling.key -out mip-labeling.crt
```

Upload `mip-labeling.crt` to the app registration. You paste the contents of both files into Access Analyzer when you authenticate.

Labels that encrypt need more: two Azure Rights Management permissions and two tenant settings. See [Requirements](labels-that-encrypt.md#requirements).

## Turn on MIP labeling

1. Go to **Settings**, and under **Scanning**, click **Classification**.
2. Click the **MIP labels** tab.
3. Under **Microsoft Information Protection**, turn on **Enable MIP labeling**.

The switch saves as soon as you change it, and a message confirms **MIP labeling turned on**. The **Purview account**, **Labels that encrypt**, and **SharePoint labels** sections appear.

## Authenticate the Purview account

1. Under **Purview account**, click **Authenticate**. The **Authenticate your Purview account** dialog opens.
2. Under **Microsoft cloud**, keep **Commercial**, or select **US Government**.
3. In **Tenant ID or domain**, enter the tenant's ID or a domain name, such as `contoso.onmicrosoft.com`.
4. In **Application (client) ID**, enter the app registration's client ID.
5. In **Certificate (PEM)**, paste the certificate, including its `-----BEGIN CERTIFICATE-----` line.
6. In **Private key (PEM, unencrypted RSA)**, paste the private key, including its `-----BEGIN PRIVATE KEY-----` line.
7. Click **Authenticate**.

Access Analyzer signs in to Microsoft Entra with the certificate before it saves anything. When Microsoft Entra accepts it, a message confirms **Purview account authenticated**, and the section's status changes to **Authenticated**. The section then shows the **Tenant**, **Application (client) ID**, **Certificate thumbprint**, **Certificate expires**, and **Last authenticated** values. Compare **Certificate thumbprint** with the thumbprint Microsoft Entra shows for the certificate you uploaded.

Access Analyzer stores the certificate and its key as a secret and never shows them again.

{/* TODO: confirm that the government cloud is supported for labels that encrypt */}

## Sync the labels

Access Analyzer reads your labels only when you ask it to.

1. On the **MIP labels** tab, scroll to **Sensitivity labels**. The section appears after you authenticate the account.
2. Click **Sync labels**.

A message confirms how many labels synced, such as **Synced 12 labels**, and the section shows **Last synced** with the date and time. The table lists the labels from least to most sensitive:

| Column | What it shows |
|---|---|
| **Label** | The label's color and name. A sublabel shows as **`<parent>` / `<sublabel>`**. |
| **Scans can apply it** | **Yes**, or **No, it is not for files**. A label that has sublabels, or whose scope in Purview doesn't include files, can't be applied. |
| **Encrypts files** | **Yes** with a lock icon when the label encrypts the files it's applied to, otherwise **No**. |

You can't edit labels here. Sync again after you add, rename, or remove a label in Purview, because classifiers offer only the labels from the last sync. If a sync fails, the section reports **The last sync failed** with the reason, and keeps the labels from the previous sync.

## Replace the certificate

Replace the certificate before the date in **Certificate expires**.

1. Upload the new certificate's public part to the app registration.
2. Under **Purview account**, click **Replace credential**. The dialog opens with the cloud, tenant, and client ID filled in.
3. Paste the new certificate and private key, and then click **Authenticate**.

## Disconnect the account

1. Under **Purview account**, click **Disconnect**.
2. In **Disconnect the Purview account?**, click **Disconnect account**.

Disconnecting deletes the stored certificate and the synced labels. MIP labeling stays on, but scans can't read or apply labels until you authenticate again. The labels you chose in classifiers stay. After you authenticate again, click **Sync labels** before the next scan, because scans apply only labels that are synced.

## Troubleshooting

When Microsoft Entra or Access Analyzer refuses the credential, the dialog shows **Could not authenticate the account** with one of these reasons:

| Message | Cause and fix |
|---|---|
| "the credential was rejected by Microsoft Entra: `<error>`: `<description>`" | Microsoft Entra refused the sign-in, and the description is Microsoft's own. For example, error `AADSTS700027` means the certificate isn't registered on the application. Check that you uploaded the certificate to the app registration that **Application (client) ID** names, in the tenant you entered. |
| "tenantId must be a tenant GUID or a domain name" | **Tenant ID or domain** isn't a tenant ID or a domain name. |
| "clientId must be an application (client) ID GUID" | **Application (client) ID** isn't a client ID. Copy it from the app registration's overview. |
| "no certificate found in certificatePem" | **Certificate (PEM)** doesn't hold a PEM certificate. Paste the whole file, including the `BEGIN` and `END` lines. |
| "no private key found in privateKeyPem" | **Private key (PEM, unencrypted RSA)** doesn't hold a PEM private key. |
| "encrypted private keys are not supported; supply an unencrypted PEM key" | A passphrase protects the key. Export the key without a passphrase. |
| "the private key must be an RSA key" | The certificate or the key uses another algorithm, such as elliptic curve. Create an RSA certificate. |
| "the private key does not belong to the certificate" | The certificate and the key come from different pairs. |
| "the certificate has expired" or "the certificate is not valid yet" | The current date is outside the certificate's validity period. |
