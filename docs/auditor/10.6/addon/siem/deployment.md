---
title: "Choose Appropriate Execution Scenario"
description: "Choose Appropriate Execution Scenario"
sidebar_position: 20
---

# Choose Appropriate Execution Scenario

## Netwrix Auditor Activity Records to Event Log Add-on

Auditor Add-on for the SIEM solution runs on any computer in your environment. For example, you can
run the add-on on the computer where Auditor is installed or on a remote server. Depending on the
execution scenario you choose, you have to define a different set of parameters. See the
[Configuration](/docs/auditor/10.6/addon/siem/configure.md) topic for additional
information.

Netwrix suggests the following execution scenarios:

| Scenario                                                                                                                                    | Example                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The add-on runs on the Auditor Server with the current user credentials. Activity Records are exported to a local event log.                | C:\Add-ons\Netwrix_Auditor_Activity_Records_to_Event_Log_Add-on.ps1                                                                                                                |
| The add-on runs on the Auditor Server with explicitly defined credentials. Activity Records are exported to a local event log.              | C:\Add-ons\Netwrix_Auditor_Activity_Records_to_Event_Log_Add-on.ps1 -NetwrixAuditorUserName enterprise\NAuser -NetwrixAuditorPassword NetwrixIsCool                                |
| The add-on exports Activity Records from a remote Auditor Server using current user credentials and writes data to a local event log.       | C:\Add-ons\Netwrix_Auditor_Activity_Records_to_Event_Log_Add-on.ps1 Netwrix Auditor add-on for SIEM                                                                                |
| The add-on exports Activity Records from a remote Auditor server using explicitly defined credentials and writes data to a local event log. | C:\Add-ons\Netwrix_Auditor_Activity_Records_to_Event_Log_Add-on.ps1 Netwrix Auditor add-on for SIEM-NetwrixAuditorUserName enterprise\NAuser -NetwrixAuditorPassword NetwrixIsCool |

For security reasons, Netwrix recommends running the script with current user credentials (skipping
user credentials). Create a special user account with permissions to both Auditor data and event log
and use it for running the script.

## Alerts to Event Log Add-on

The script will be executed on Auditor Server.

By default, Auditor uses the _LocalSystem_ account to run PowerShell scripts. If you want to use
another account, in the alert settings go to **Response Action**, select the **Use custom
credentials** checkbox and specify user name and password. Make sure this account has **Log on as
batch job** privilege. See the
[Configure a Response Action for Alert](/docs/auditor/10.6/admin/alertsettings/responseaction.md)
topic for additional information.
