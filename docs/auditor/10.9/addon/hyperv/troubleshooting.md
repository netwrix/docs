---
title: "Maintenance and Troubleshooting"
description: "Maintenance and Troubleshooting"
sidebar_position: 60
---

# Maintenance and Troubleshooting

If you cannot see collected data in Auditor, check the following:

- Add-on account has sufficient rights to access SCVMM and Auditor.
- In Netwrix Auditor settings, go to the **Integrations** section and make sure the **Leverage
  Integration API** is switched to **ON**. Check the communication port number – default is
  **9699**.
- If you configured a dedicated monitoring plan, make sure data source monitoring is enabled.
- Verify the parameters you provided in **settings.xml**.

## Monitor Several SCVMM

Follow the steps If you need to monitor more than one SCVMM:

**Step 1 –** Deploy one more add-on instance to the server where the first add-on instance is
already installed. Be sure to use a different installation folder.

**Step 2 –** Open the **settings.xml** file and configure the new add-on instance to work with the
second SCVMM server.

**Step 3 –** Open the **install.ps1** file for the new add-on for edit.

**Step 4 –** Modify the default scheduled task name:

`$name = "NetwrixAuditor Add-on for Microsoft SCVMM"`

**Step 5 –** Save and then launch the updated **install.ps1** file.

## Modify Task Schedule

Follow the steps if you need to modify the task schedule:

**Step 1 –** Open **install.ps1** for edit.

**Step 2 –** Modify the default scheduled task schedule:

`$task.Triggers.Repetition.Interval = "PT15M"`

**Step 3 –** Save and then launch the updated **install.ps1** file.

Alternatively, you can use **Windows Task Scheduler**.

- If the solution was deployed using the third scenario (that is, SCVMM server and add-on are
  running on different machines), then the following error may be written in the solution log:

The WinRM client cannot process the request.

See the [Deployment Scenarios](/docs/auditor/10.9/addon/hyperv/deployment.md)topic for additional information.

If the authentication scheme is different from Kerberos, or if the client computer is not joined to
a domain, then HTTPS transport must be used or the destination machine must be added to the
**TrustedHosts** list. To configure this list, use **winrm.cmd**.

Computers included in the **TrustedHosts** list might not be authenticated. To get more information
about their settings, you can run the following command:

`winrm help config`

For details on remote troubleshooting and authentication issues, see the following Microsoft
article:
[about_Remote_Troubleshooting](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_remote_troubleshooting?view=powershell-6).

To work around, add the remote SCVMM server to the **TrustedHosts** list on the machine were the
add-on runs. For that, use the following commands:

`winrm quickconfig`

`Set-Item WSMan:\localhost\Client\TrustedHosts -Value "ServerNameOrIP"`

here:

`ServerNameOrIP` – SCVMM server name or IP address.
