---
title: "Choose Appropriate Execution Scenario"
description: "Choose Appropriate Execution Scenario"
sidebar_position: 20
---

# Choose Appropriate Execution Scenario

The Add-on runs on any computer in your environment. For example, you can run the add-on on the
computer where Auditor is installed or on a remote server. Depending on the execution scenario you
choose, you have to define a different set of parameters. See the [Amazon Web Services](/docs/auditor/10.7/addon/amazonwebservices/overview.md)
topic for additional information.

Netwrix suggests the following execution scenarios:

| Scenario                                                                                                                                                      | Example                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The add-on runs on the Auditor Server with the current user credentials.                                                                                      | C:\Add-ons\Netwrix*Auditor_Add-on_for* Amazon_Web_Services.ps1                                                                                                                                                  |
| The add-on runs on the Auditor Server with the explicitly specified user credentials.                                                                         | C:\Add-ons\Netwrix*Auditor_Add-on_for* Amazon_Web_Services.ps1 -NetwrixAuditorUserName enterprise\NAuser -NetwrixAuditorPassword NetwrixIsCool                                                                  |
| The add-on runs on a remote computer. Data is written to a remote Auditor repository with the current user credentials.                                       | C:\Add-ons\Netwrix*Auditor_Add-on_for* Amazon_Web_Services.ps1 -NetwrixAuditorHost 172.28.6.15                                                                                                                  |
| The add-on runs on a remote computer. Data is written to a remote Auditor repository with the explicitly specified user credentials and monitoring plan name. | C:\Add-ons\Netwrix*Auditor_Add-on_for* Amazon_Web_Services.ps1 -NetwrixAuditorHost 172.28.6.15 -NetwrixAuditorUserName enterprise\NAuser -NetwrixAuditorPassword NetwrixIsCool -NetwrixAuditorPlan Integrations |

For security reasons, Netwrix recommends running the script with current user credentials (skipping
user credentials). Create a special user account with permissions to both Auditor data and event log
and use it for running the script.
