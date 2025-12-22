---
title: "Choose Appropriate Execution Scenario"
description: "Choose Appropriate Execution Scenario"
sidebar_position: 20
---

# Choose Appropriate Execution Scenario

Auditor Add-on for RADIUS Server runs on any computer in your environment. For example, you can run
the add-on on the computer where Auditor is installed or on your RADIUS server.

Depending on the execution scenario you choose, you have to define a different set of script
parameters. See the [Define Parameters](/docs/auditor/10.8/addon/radius/parameters.md) topic for additional information.

Netwrixsuggests the following execution scenarios:

| Scenario                                                                                                                                                                                   | Example                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The add-on runs on theAuditor Server with the current user credentials. Data is collected from a remote RADIUS server and written to a local repository.                                   | C:\Add-ons\Netwrix_Auditor_Add-on_for_RADIUS_Server.ps1 -RADIUSHost 172.28.6.16                                                                                                                                                                                         |
| The add-on runs on the Auditor Server with explicitly defined credentials. Collected data is written to a remote Auditor Server.                                                           | C:\Add-ons\Netwrix*Auditor_Add-on_for* RADIUS_Server.ps1 -NetwrixAuditorHost 172.28.6.15                                                                                                                                                                                |
| The add-on runs on the Auditor Server with the current user credentials. Data is collected from a remote RADIUS server with explicitly defined credentials.                                | C:\Add-ons\Netwrix*Auditor_Add-on_for* RADIUS_Server.ps1 -RADIUSHost 172.28.6.16 -RADIUSUserName enterprise\NSPuser -RADIUSPassword SuperStrictPassword                                                                                                                 |
| The add-on runs on a remote computer with the current user credentials. Data is collected from a remote RADIUS server and written to a remote Auditor repository.                          | C:\Add-ons\Netwrix*Auditor_Add-on_for* RADIUS_Server.ps1 -NetwrixAuditorHost 172.28.6.15 -RADIUSHost 172.28.6.16                                                                                                                                                        |
| The add-on runs on a remote computer. Data is collected from a remote RADIUS server with RADIUS server credentials and is written to a remote Auditor repository with Auditor credentials. | C:\Add-ons\Netwrix*Auditor_Add-on_for* RADIUS_Server.ps1 -NetwrixAuditorHost 172.28.6.15 -NetwrixAuditorUserName enterprise\NAuser -NetwrixAuditorPassword NetwrixIsCool -RADIUSHost 172.28.6.16 -RADIUSUserName enterprise\NSPuser -RADIUSPassword SuperStrictPassword |

For security reasons, Netwrix recommends running the script with current user credentials (skipping
user credentials). Create a special user account with permissions to both Auditor data and event log
and use it for running the script.
