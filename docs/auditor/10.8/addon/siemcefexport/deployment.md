---
title: "deployment"
description: "deployment"
sidebar_position: 20
---

## Choose Appropriate Execution Scenario

Netwrix Auditor Netwrix Risk Insights runs on any computer in your environment. For example, you can
run the add-on on the computer where Netwrix Auditor is installed or on a remote server. Depending
on the execution scenario you choose, you have to define a different set of parameters. See the
[Define Parameters](/docs/auditor/10.8/addon/siemcefexport/parameters.md) topic for additional information.

Netwrix suggests the following execution scenarios:

| Scenario                                                                                                                                 | Example                                                                                                                                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The add-on runs on the Auditor Server with the current user credentials. Activity Records are exported to a local folder.                | C:\Add-ons\Netwrix_Auditor_CEF_Export_Addon.ps1 -OutputFolder C:\CEF_Export -OutputFolder C:\CEF_Export                                                                                         |
| The add-on runs on the Auditor Server with explicitly defined credentials. Activity Records are exported to a local folder.              | C:\Add-ons\Netwrix_Auditor_CEF_Export_Addon.ps1 -OutputFolder C:\CEF_Export -NetwrixAuditorUserName enterprise\NAuser -NetwrixAuditorPassword NetwrixIsCool                                     |
| The add-on exports Activity Records from a remote Auditor Server using current user credentials and writes data to a local folder.       | C:\Add-ons\Netwrix_Auditor_CEF_Export_Addon.ps1 -OutputFolder C:\CEF_Export -NetwrixAuditorHost 172.28.6.15                                                                                     |
| The add-on exports Activity Records from a remote Auditor Server using explicitly defined credentials and writes data to a local folder. | C:\Add-ons\Netwrix_Auditor_CEF_Export_Addon. ps1 -OutputFolder C:\CEF_Export - NetwrixAuditorHost 172.28.6.15 - NetwrixAuditorUserName enterprise\NAuser - NetwrixAuditorPassword NetwrixIsCool |

For security reasons, Netwrix recommends running the script with current user credentials (skipping
user credentials). Create a special user account with permissions to both Auditor data and event log
and use it for running the script.
