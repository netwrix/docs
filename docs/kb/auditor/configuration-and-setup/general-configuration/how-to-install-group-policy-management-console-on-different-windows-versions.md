---
description: >-
  Instructions to install Group Policy Management Console (GPMC) on various
  Windows versions so you can audit Group Policy changes with Netwrix Auditor.
keywords:
  - Group Policy
  - GPMC
  - Group Policy Management Console
  - Netwrix Auditor
  - RSAT
  - Windows Server 2008
  - Windows 10
  - installation
products:
  - auditor
sidebar_label: "How to install Group Policy Management Console on different Windows versions"
tags: []
title: "How to install Group Policy Management Console on different Windows versions"
knowledge_article_id: kA00g000000H9VqCAK
---

# How to install Group Policy Management Console on different Windows versions

- Should I install Group Policy Management Console to audit Group Policy changes with Netwrix Auditor?
- How can I install Group Policy Management Console on different Windows versions?

---

Group Policy Management Console is an administrative tool for managing Group Policy across the enterprise. If you want to audit Group Policy, you must install Group Policy Management Console on the computer where Netwrix Auditor resides. To install Group Policy Management Console manually, perform the following steps depending on the Windows version your Netwrix Auditor server is running:

## To install GPMC on Windows Server 2008 and Windows Server 2008 R2

1. Navigate to **Start → Control Panel → Programs and Features → Turn Windows features on or off**.  
2. In the **Server Manager** dialog, select **Features** in the left pane, click **Add Features** and select **Group Policy Management**.  
3. Click **Install** to enable it.

## To install GPMC on Windows Server 2012 and above

1. Navigate to **Start → Control Panel → Programs and Features → Turn Windows features on or off**.  
2. In the **Add Roles and Features Wizard** dialog that opens, proceed to the **Features** tab in the left pane, and then select **Group Policy Management**.  
3. Click **Next** to proceed to the confirmation page.  
4. Click **Install** to enable it.

## To install GPMC on Windows 7

1. [Download](http://www.microsoft.com/en-us/download/details.aspx?id=7887) and install Remote Server Administration Tools that include Group Policy Management Console.  
2. Navigate to **Start → Control Panel → Programs and Features → Turn Windows features on or off**.  
3. Navigate to **Remote Server Administration Tools → Feature Administration Tools** and select **Group Policy Management Tools**.  
4. Click **Install**.

## To install GPMC on Windows 8

1. [Download](http://www.microsoft.com/en-us/download/details.aspx?id=28972) and install Remote Server Administration Tools that include Group Policy Management Console.  
2. Navigate to **Start → Control Panel → Programs and Features → Turn Windows features on or off**.  
3. Navigate to **Remote Server Administration Tools → Feature Administration Tools** and select **Group Policy Management Tools**.

## To install GPMC on Windows 8.1

1. [Download](http://www.microsoft.com/en-us/download/details.aspx?id=39296) and install Remote Server Administration Tools that include Group Policy Management Console.
2. Navigate to **Start → Control Panel → Programs and Features → Turn Windows features on or off**.  
3. Navigate to **Remote Server Administration Tools → Feature Administration Tools** and select **Group Policy Management Tools**.

## To install GPMC on Windows 10

1. Open or search for **Settings**.  
2. Go to **Manage optional features** and click **Add a feature**.  
3. Select and install the specific Remote Server Administration Tools needed.  
4. To see installation progress, click the **Back** button and view the status on the **Manage optional features** page.
