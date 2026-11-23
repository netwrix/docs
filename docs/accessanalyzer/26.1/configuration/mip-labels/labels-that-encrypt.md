---
title: Labels that encrypt
description: Set up Azure Rights Management for labels that encrypt, preview encryption with a dry run, and let scans classify protected files.
sidebar_position: 3
---

Some Microsoft Information Protection (MIP) sensitivity labels encrypt the files they're applied to, so only the people the label allows can open them. Access Analyzer treats these labels with more care than labels that only mark a file. It skips them until you choose otherwise, it can preview the result with a dry run, and it needs Azure Rights Management to accept the app registration first.

The same setup lets a Classification scan open files that a label already encrypted and classify their content.

You manage these settings in the **Labels that encrypt** section. Go to **Settings > Classification**, and then click the **MIP labels** tab. You need the Admin role.

## Requirements

On top of the Microsoft Graph permissions in [Connect to Microsoft Purview](connect-to-microsoft-purview.md#before-you-begin), Azure Rights Management needs the following. The **Requirements** list in the **Labels that encrypt** section shows the same items.

| Requirement | Details |
|---|---|
| Azure Rights Management Services application permission `Content.Writer` | Lets the app protect files. |
| Azure Rights Management Services application permission `Content.SuperUser` | Lets the app read protected files. |
| Rights Management activated for the tenant | Run `Enable-AipService`. |
| The app registration added as a super user | Run `Enable-AipServiceSuperUserFeature`, and then `Add-AipServiceSuperUser -ServicePrincipalId <client-id>`. |

A tenant administrator runs these commands in PowerShell, with the `AIPService` module installed. After you authenticate the Purview account, the **Requirements** list shows the `Add-AipServiceSuperUser` command with your app registration's client ID filled in.

:::warning
A super user can open every file that Azure Rights Management protects for your tenant. Protect the app registration's certificate accordingly.
:::

## Check that encryption is ready

Access Analyzer checks whether Azure Rights Management accepts the app registration when you authenticate the Purview account. To check again after you change a permission or a tenant setting:

1. In the **Labels that encrypt** section, click **Check now**.
2. Read the status line.

| Status | Meaning |
|---|---|
| **Encryption is ready. Checked `<when>`.** | Scans can apply labels that encrypt and read protected files. |
| **Encryption is not ready. Checked `<when>`.** | Azure Rights Management refused the app. A **Rights Management did not accept this app** warning gives the reason. |
| **Encryption readiness has not been checked yet.** | Click **Check now**. |
| **Authenticate a Purview account to check whether encryption is ready.** | No Purview account is connected. |

The warning shows one of these reasons:

| Reason | Fix |
|---|---|
| "Rights Management is not active for the tenant" | Activate Rights Management with `Enable-AipService`. |
| "the app has no Azure Rights Management permission (Content.Writer/Content.SuperUser)" | Grant both permissions to the app registration, and grant admin consent. |
| "Azure Rights Management refused the app: `<message>`" | Read Microsoft's message. Check the super user steps in [Requirements](#requirements). |
| "the Rights Management endpoint is not an https address of Microsoft's service; change it or clear it" | Clear **Rights Management endpoint**, or correct it. See [Rights Management endpoint](#rights-management-endpoint). |
| "the Rights Management endpoint asked for a token for another service, so none was sent; check the endpoint" | Clear **Rights Management endpoint**, or correct it. |

While encryption isn't ready, a classifier shows this warning under a label that encrypts: "Encryption is not ready: check the Purview connection in Settings, under Classification, on the MIP labels tab". Access Analyzer refuses to save that label choice until the check passes.

## Choose what scans do with labels that encrypt

1. In the **Labels that encrypt** section, under **When a classifier chooses a label that encrypts**, select a mode:

   | Mode | What scans do |
   |---|---|
   | **Off** | Skip labels that encrypt and record each one. Other labels are still applied. This is the default. |
   | **Dry run** | List the files that would be encrypted, and with which label, without changing them. |
   | **Apply** | Encrypt files in place. On SharePoint the previous version stays in version history. |

2. Click **Save**. A message confirms **Labels that encrypt saved**.

The mode affects only labels that encrypt. A label that doesn't encrypt is applied in every mode.

:::warning
A file server has no version history to go back to. Review a dry run before you select **Apply**.
:::

A change between **Dry run** and **Apply** applies to files that scans classify after the change. A change to **Off** also stops the encryption that's already waiting to run.

## Preview encryption with a dry run

A dry run runs every check and lists the files a scan would encrypt, without changing them. Purview calls this simulation mode.

1. Select **Dry run**, and then click **Save**.
2. Choose a label that encrypts for a severity in a classifier. See [Choose a label for a severity](apply-labels-with-classifiers.md#choose-a-label-for-a-severity).
3. Run a Classification scan that uses the classifier.
4. Open the scan execution, and then click the **MIP labels** tab. The tab opens on the files that would be encrypted.
5. Review the list. To encrypt the files, click **Encrypt all `<N>` files in this run**, or select rows and click **Encrypt `<N>` files**.
6. In the confirmation, click **Encrypt `<N>` files**.

For example, after a dry run of a scan with 42 matching files, the tab reads **42 files would be encrypted with Highly Confidential. This was a dry run: no file was encrypted.**

Encrypting from the tab works while the mode is **Dry run** or **Apply**, and it leaves the mode as it is. [MIP labels tab](../../admin/scans/scan-executions.md#mip-labels-tab) describes every outcome the tab lists.

## What encryption changes

- Access Analyzer encrypts Word, Excel, and PowerPoint files only. A label that encrypts is never applied to another format.
- On a File Server source, the file is encrypted in place. On a SharePoint Online source, the encrypted file becomes a new version.
- After encryption, only the people the label allows can open the file.
- To replace the label on a file that's already encrypted, Access Analyzer opens the file first, which needs the super user requirement.

## Protected files in Classification scans

Without MIP labeling, a Classification scan can't read a file that a label encrypted. The file's row on the **Files** tab reads "File is protected by Microsoft Purview rights management; text extraction not possible".

When MIP labeling is on, a Purview account is authenticated, and the app registration is a super user, the scan opens protected files and classifies their content. This covers protected Office files, protected PDFs, and files in the protected `.pfile` family, such as `.ptxt`. The file itself stays where it is, and stays encrypted.

- Protected files larger than 64 MiB (about 67 MB) aren't opened.
- A protected file whose text needs optical character recognition (OCR) isn't classified. Its row reads "Protected file decrypted, but its text needs OCR, which is not available for protected files".
- When the app registration isn't a super user, the row reads "protected file: the Purview app lacks the super-user right".
- When a scan opens a protected file, Access Analyzer records it in the audit log: "A sensitive data scan was given the content key of a protected file".

## Rights Management endpoint

Access Analyzer reaches Microsoft's Rights Management service at its default address. Change the address only if Microsoft gives your tenant a different one.

1. In the **Labels that encrypt** section, expand **Advanced**.
2. In **Rights Management endpoint**, enter the address, such as `https://api.aadrm.com`. Leave the field empty for Microsoft's service.
3. Click **Save**, and then click **Check now**.

The address must be an `https` address of the Azure Rights Management service, on a host under `aadrm.com` or `aadrm.us`, with no path. Changing it clears the readiness result, so labels that encrypt aren't applied until the check passes again.
