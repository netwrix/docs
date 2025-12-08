---
description: >-
  Learn how to count the number of mailbox licenses required for auditing a
  Microsoft Office 365 tenant with Netwrix Auditor, for both MFA and non-MFA
  accounts.
keywords:
  - Office 365
  - O365
  - licenses
  - mailbox
  - Netwrix Auditor
  - PowerShell
  - MFA
  - Exchange Online
products:
  - general
sidebar_label: How to count number of licenses required for audit
tags: []
title: "How to count number of licenses required for auditing a Microsoft Office 365 tenant?"
knowledge_article_id: kA00g000000H9T4CAK
---

# How to count number of licenses required for auditing a Microsoft Office 365 tenant?

In Microsoft Office 365, you can create different types of mail accounts for different purposes. However, Netwrix Auditor requires purchasing licenses only for **Mailbox accounts**; there is no charge for accounts of any other types:

- Mailbox — requires license
- Group — free
- Resource — free
- Contact — free
- Shared — free

To determine the actual number of licenses you need to purchase from Netwrix, do one of the following, depending on your Office 365 account type.

## For Non-MFA-enabled account

1. Download the ZIP file with the shell script provided by Netwrix and extract it:
   - https://www.netwrix.com/download/countO365_licenses.zip
   - This script counts the number of mailbox accounts in your Office 365 tenant.

   Note: You can run the script on any computer where Windows PowerShell is installed. The computer must be connected to the Internet.

2. Run **Windows PowerShell** as Administrator and then invoke the `countO365_licenses.ps1` script.
3. Enter your Office 365 account credentials when prompted and click **OK**.
4. When the script completes, you will see the number of mailbox accounts for which you need to purchase licenses:

![User-added image]./../0-images/ka04u000000HcMr_0EM0g000000hNsh.png)

## For MFA-enabled account

1. Connect to **Exchange Online** as described in the Microsoft article:
   - https://docs.microsoft.com/en-us/powershell/exchange/exchange-online/connect-to-exchange-online-powershell/mfa-connect-to-exchange-online-powershell?view=exchange-ps

2. Execute the following commands:
```powershell
$userMailboxes = Get-Mailbox -RecipientTypeDetails UserMailbox -ResultSize Unlimited
$userMailboxes.count
```

3. The displayed number represents how many mailbox accounts you need to purchase licenses for.

Original KB Article 2082



