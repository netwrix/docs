---
title: "Specify Account Window"
description: "Specify Account Window"
sidebar_position: 10
---

# Specify Account Window

The Specify account window is opened from a field where a SharePoint account is needed.

![Specify Account popup window](/images/activitymonitor/8.0/admin/outputs/window/sharepointspecifyaccount.webp)

There are two options for specifying an account:

- SharePoint System Accounts – Check the boxes for the desired system accounts: SHAREPOINT\system,
  -1, S-1-0-0 (Null SID)
- Custom – Enter the account in the textbox. Multiple accounts can be added using a semicolon (;).

    - For System Service Accounts – Enter the SID for system service accounts
    - For Local User Accounts – Enter either the user name or SID for the local account

Click **OK**. The Specify account window closes, and the account is added to the field where the
window was opened.
