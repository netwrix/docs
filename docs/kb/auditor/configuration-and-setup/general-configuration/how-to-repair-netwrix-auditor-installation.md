---
description: >-
  This article explains how to repair a Netwrix Auditor installation by running
  the installer and choosing the Repair option. It includes a PowerShell command
  to stop Netwrix services before repair.
keywords:
  - repair
  - installation
  - Netwrix Auditor
  - Stop-Service
  - My Products
  - troubleshooting
  - installer
products:
  - auditor
sidebar_label: How to Repair Netwrix Auditor Installation
tags: []
title: "How to Repair Netwrix Auditor Installation"
knowledge_article_id: kA04u000001119QCAQ
---

# How to Repair Netwrix Auditor Installation

## Question

How to repair a Netwrix Auditor installation in our environment?

## Answer

> **IMPORTANT:** Before proceeding, run the following command in elevated PowerShell to stop all Netwrix Services and prevent any possible complications during the repair process:
>
> ```powershell
> Stop-Service -Displayname Netwrix*
> ```

1. Establish the Netwrix Auditor version and build you're currently running in your environment. Refer to the following article for additional information: [How to Find Out My Netwrix Auditor Version](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/how-to-find-out-my-netwrix-auditor-version).
2. Proceed to your **My Products** page to download the executable for the corresponding version. Refer to the following link: [Netwrix — My Products](https://www.netwrix.com/my_products.html).
3. Run the downloaded executable. Once the files are extracted, a setup screen will be prompted.

   ![Install Netwrix Auditor setup screen]./../0-images/ka04u00000117fh_0EM4u000008MBTP.png)

4. Select **Install** under **Install Netwrix Auditor**.
5. Click **Next**, and select **Repair**.
6. Confirm the selection by clicking **Repair**.
7. Allow the repair process to complete.
8. Restart your Netwrix Auditor server to complete the repair.

## Related articles

- [How to Find Out My Netwrix Auditor Version](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/how-to-find-out-my-netwrix-auditor-version)



