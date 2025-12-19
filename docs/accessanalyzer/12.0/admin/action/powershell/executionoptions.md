---
title: "PowerShell Action: Execution Options"
description: "PowerShell Action: Execution Options"
sidebar_position: 20
---

# PowerShell Action: Execution Options

Specify the execution options for the PowerShell script using the Execution Options page.

![PowerShell Action Module Wizard Execution Options page](/images/accessanalyzer/12.0/admin/action/powershell/executionoptions.webp)

The options on the Execution Options page are:

- Execute script locally on the Access Analyzer server – Enable this to execute the PowerShell
  script on the Access Analyzer server

    - Use the same PowerShell session for each row – Select to enable using the same PowerShell
      session to run multiple rows

- Execute script remotely on a target server – Enable this to execute the PowerShell script on a
  remote target server

    - Use the **Remote host** dropdown to select the database column that will be used as the target
      server name or type in a network host name
    - Select the **Fall back to the local Access Analyzer server if the remote execution fails**
      option to use the Access Analyzer server if remote execution fails

- Use impersonation within server executable – Select this option to use impersonation when
  executing the PowerShell script
