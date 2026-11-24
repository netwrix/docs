---
title: MIP labels
description: How Access Analyzer applies and reads Microsoft Information Protection sensitivity labels during Classification scans, and what it supports.
---

Microsoft Information Protection (MIP) sensitivity labels are the labels your organization defines in Microsoft Purview, such as **Confidential** or **Highly Confidential**. With MIP labeling on, a Classification scan can label the files where it finds sensitive data, so the label follows the file wherever Microsoft 365 enforces it.

MIP labeling adds three things to a Classification scan:

- **Apply labels.** Each classifier can name a label for each severity. When the classifier reports a finding at that severity, Access Analyzer applies the label to the file.
- **Read labels.** A scan can record the sensitivity label that's already on each file it classifies.
- **Classify protected files.** A scan can open files that a label encrypted and classify their content, once Azure Rights Management accepts the app registration.

MIP labeling is off by default. You need the Admin role to turn it on, change its settings, and choose labels in classifiers.

## How labeling works

1. You turn on MIP labeling and connect a Microsoft Purview account with the certificate of an app registration in your Microsoft Entra tenant. See [Connect to Microsoft Purview](connect-to-microsoft-purview.md).
2. You sync the labels from Purview, and then choose a label for a severity in one or more classifiers. See [Apply labels with classifiers](apply-labels-with-classifiers.md).
3. The next Classification scan classifies each file as usual. When a classifier with a label for the severity it found reports a finding, Access Analyzer applies that label to the file.
4. The **MIP labels** tab of the scan execution lists what happened to each file. See [MIP labels tab](../../admin/scans/scan-executions.md#mip-labels-tab).

:::warning
A label that doesn't encrypt is applied on the next scan, with no preview. Labels that encrypt are skipped until you choose otherwise, and you can preview them with a dry run first. See [Labels that encrypt](labels-that-encrypt.md).
:::

## Supported sources and file types

Access Analyzer applies labels on **File Server** and **SharePoint Online** sources. Classification scans of other source types don't read or apply labels.

| Source type | Files that get a label | How the label is written |
|---|---|---|
| **File Server** | Word, Excel, and PowerPoint files, including their macro-enabled and template variants | In place over SMB, with the source's service account. The file keeps its owner and permissions. |
| **SharePoint Online** | Word, Excel, and PowerPoint files by default. With the **Microsoft Graph** method, PDFs are labeled too. | As a new version of the file. See [Choose how labels are written to SharePoint](apply-labels-with-classifiers.md#choose-how-labels-are-written-to-sharepoint). |

Access Analyzer identifies an Office file by its content, not by its file extension. These files don't get a label:

- Files in any other format, including the older `.doc`, `.xls`, and `.ppt` formats. The **MIP labels** tab lists them as **Not an Office file**.
- Files larger than 256 MiB (about 268 MB).
- Office files that a password encrypts.

{/* TODO: confirm with the product team where a customer sees the labels that "Read MIP labels from files" records */}

## What you need

- The Admin role in Access Analyzer.
- An app registration in your Microsoft Entra tenant, with a certificate and the Microsoft Graph permissions that [Connect to Microsoft Purview](connect-to-microsoft-purview.md#before-you-begin) lists.
- For File Server sources, a service account that can modify the files. Access Analyzer writes each label with the source's own service account.
- For labels that encrypt, and to classify protected files, the Azure Rights Management requirements in [Labels that encrypt](labels-that-encrypt.md#requirements).

Access Analyzer connects to one Purview account for the whole installation.
