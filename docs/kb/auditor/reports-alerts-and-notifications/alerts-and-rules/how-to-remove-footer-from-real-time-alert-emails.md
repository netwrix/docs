---
description: >-
  Shows how to remove the footer text from real-time alert emails by editing the
  registry and setting the ShowReportFooter DWORD value to 0.
keywords:
  - real-time alerts
  - footer
  - ShowReportFooter
  - registry
  - HKEY_LOCAL_MACHINE
  - Netwrix Event Log Manager
  - alert emails
  - regedit
products:
  - auditor
sidebar_label: How to remove footer from real-time alert emails
tags: []
title: "How to remove footer from real-time alert emails"
knowledge_article_id: kA00g000000H9TrCAK
---

# How to remove footer from real-time alert emails

How do I remove the following text from the real-time alert emails: '**This is an automatically generated message from Netwrix Event Log Manager. Please visit www.netwrix.com for more products and updates.**'?

---

To remove the text, perform the following:

1. Launch **Registry Editor** (**Start** -> **Run**, type `regedit`).
2. Navigate to `HKEY_LOCAL_MACHINESOFTWARENetWrixEvent Log Manager` in the left pane (use `HKEY_LOCAL_MACHINESOFTWAREWow6432NodeNetWrixEvent Log Manager` if you are running a 64-bit version of Windows).
3. In the right pane, modify the existing DWORD value (or create a new DWORD value: right-click the right pane, click **New**, select **DWORD value** from the drop-down list) with the following parameters:
   - Name: `ShowReportFooter`
   - Value: `0`
4. Save the changes.

The footer will no longer be shown in the real-time alert emails.
