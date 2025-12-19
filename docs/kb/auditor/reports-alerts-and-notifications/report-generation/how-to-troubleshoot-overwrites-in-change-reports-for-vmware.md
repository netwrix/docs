---
description: >-
  Learn how to troubleshoot overwrite warnings in VMware change reports by
  retrieving audit events with VMware PowerCLI and collecting logs to provide to
  support.
keywords:
  - VMware
  - Netwrix Auditor
  - overwrite
  - change report
  - PowerCLI
  - Get-VIEvent
  - vCenter
  - ESX
  - audit events
  - troubleshooting
products:
  - auditor
sidebar_label: How to troubleshoot overwrites in change reports f
tags: []
title: "How to troubleshoot overwrites in change reports for VMWare"
knowledge_article_id: kA00g000000H9SdCAK
---

# How to troubleshoot overwrites in change reports for VMWare

Refer to the KB article for details about how Netwrix Auditor for VMware works: https://kb.netwrix.com/258. Overwrites warnings occur because there is some gap between the last collected and the oldest of newly received events. Try running collections more frequently by changing the notifications frequency under **Monitoring Plan** settings. If this doesn't help, perform the following steps to troubleshoot this and localize the problematic place.

After receiving a change report for VMware with event overwrites warning and changes which, as a result of event overwrites, were reported as made by `system`, retrieve audit events using VMware PowerCLI cmdlets by connecting to vCenter and ESX hosts:

## Prerequisites

1. Download and install VMware PowerCLI; this package contains a set of PowerShell cmdlets which you can use to retrieve audit events from an ESX server or vCenter.

## Steps to retrieve events

1. Install the VMware PowerCLI module for the current user:
   ```powershell
   Install-Module -Name VMware.PowerCLI -Scope CurrentUser
   ```

2. Import the VMware PowerCLI module:
   ```powershell
   Import-Module VMware.PowerCLI
   ```

3. Set the PowerCLI configuration to ignore invalid certificates:
   ```powershell
   Set-PowerCLIConfiguration -InvalidCertificateAction Ignore
   ```

4. Connect to the VMware host by running the `Connect-VIServer` cmdlet. See https://www.vmware.com/support/developer/windowstoolkit/wintk40u1/html/Connect-VIServer.html for details. Example:
   ```powershell
   Connect-VIServer "ESX hostname"
   ```
   - A credentials window will appear. Enter the account that will read data from the vCenter.

5. Run the `Get-VIEvent` cmdlet to retrieve events. See https://www.vmware.com/support/developer/windowstoolkit/wintk40u1/html/Get-VIEvent.html for details.

   - To get all events for the last 24 hours and redirect output to a file:
     ```powershell
     Get-VIEvent -Entity * -Start (Get-Date).AddDays(-1) >> C:%ESX_host_name%.txt
     ```

   - If the cmdlet returns a timeout error, reduce the timeframe of requested events. For the last hour:
     ```powershell
     Get-VIEvent -Entity * -Start (Get-Date).AddHours(-1) >> C:%ESX_host_name%.txt
     ```

   - For the last 10 minutes:
     ```powershell
     Get-VIEvent -Entity * -Start (Get-Date).AddMinutes(-10) >> C:%ESX_host_name%.txt
     ```

Perform these steps for every ESX host that is managed with the vCenter specified in Netwrix Auditor for VMware.

## Submit a support ticket

1. Submit a ticket at: https://www.netwrix.com/support.html?source=sitemenu and provide the following information:

   - Events retrieved with VMware PowerCLI cmdlets from vCenter and ESX hosts (files created during the steps described in the section above).
   - The change report for VMware that you received (after receiving which the event files were generated) and the inventory report.
   - Events (file with `.events` extension) from the following directory after receiving the change report of Netwrix Auditor for VMware:
     - `C:ProgramDataNetwrix AuditorShortTermVMAGUID`

Archive these files and provide them within the support ticket to the Technical Support team.
