---
description: >-
  Explains the "TS collection failed: Can't open output file" permission denied
  warning for Windows Server 2008 domain controllers and provides steps to
  resolve it for Netwrix Auditor.
keywords:
  - TS collection failed
  - permission denied
  - .ts files
  - UAC
  - Windows Server 2008
  - Netwrix Auditor
  - ADCR_Agent
  - domain controller
products:
  - auditor
sidebar_label: TS collection failed warning
tags: []
title: "TS collection failed warning"
knowledge_article_id: kA00g000000H9baCAC
---

# TS collection failed warning

Netwrix Auditor includes the "**Failed to process DC: %domain controller name% The error is: TS collection failed: Can't open output file: `C:WindowsADCR_Agent%domain contoller name%.ts.` Permission denied**" warning for Windows Server 2008 domain controllers in summary reports.

---

*.ts files are being used by Netwrix Auditor to collect time stamps of when Active Directory objects were changed, these files are being created by the Netwrix Auditor agent, which is running under the Local System account but being collected by the main Netwrix Auditor process which is running under the specified service account. The error appear when User Account Control (UAC) (http://technet.microsoft.com/en-us/library/cc709691(v=ws.10).aspx) considers this difference as a potential security issue and blocks access to the *.ts file for the service account Netwrix Auditor is being run under.

---

## Resolution

To resolve this issue, you need to disable User Account Control (UAC) on the problematic domain controller and delete the *.ts file Netwrix Auditor was able to access:

1. Log on the problematic domain controller
2. Disable User Account Control (UAC)
   - Click **Start**, and then click **Control Panel**.
   - In Control Panel, click **User Accounts**.
   - In the User Accounts window, click **User Accounts**.
   - In the User Accounts tasks window, click **Turn User Account Control on or off**.
   - If UAC is currently configured in Admin Approval Mode, then the User Account Control message appears. Click **Continue**.
   - Clear the **Use User Account Control (UAC) to help protect your computer** check box, and then click **OK**.
   - Restart domain controller
3. Once the domain controller is restarted, log onto it and delete the *.ts file Netwrix Auditor was able to access:
   - Navigate to `C:WindowsADCR_Agent`
   - Find the file listed in the error (`%domain contoller name%.ts`) and delete it
   - Do not enable User Account Control (UAC) back.
