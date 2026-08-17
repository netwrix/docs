---
title: "Choose Appropriate Execution Scenario"
description: "Choose Appropriate Execution Scenario"
sidebar_position: 20
---

# Choose Appropriate Execution Scenario

The Add-on runs on any computer in your environment. For example, you can run the add-on on the
computer where Auditor is installed or on a remote server. Depending on the execution scenario you
choose, you have to define a different set of parameters.

Netwrix suggests the following execution scenarios:

| Scenario                                                                                                                                                                  | Example                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The add-on runs on the Auditor Server with the current user credentials. Data is written a remote ArcSight through UDP protocol.                                          | C:\Add-ons\Netwrix*Auditor_Add-on_for_HPE* ArcSight.ps1 -ArcSightHost 172.28.6.18                                                                                                                  |
| The add-on runs on the Auditor Server with the current user credentials. Data is written a remote ArcSight through TCP protocol.                                          | C:\Add-ons\Netwrix*Auditor_Add-on_for_HPE* ArcSight.ps1 -TCP -ArcSightHost 172.28.6.18                                                                                                             |
| The add-on runs on the Auditor Server with the explicitly specified user credentials. Data is written a remote ArcSight with a non-default UDP port.                      | C:\Add-ons\Netwrix*Auditor_Add-on_for_HPE* ArcSight.ps1 -ArcSightHost 172.28.6.18:9999 -NetwrixAuditorUserName enterprise\NAuser - NetwrixAuditorPassword NetwrixIsCool                            |
| The add-on runs on a remote computer with the current user credentials. Data is retrieved from a remote Auditor repository and written to a remote ArcSight.              | C:\Add-ons\Netwrix*Auditor_Add-on_for_HPE* ArcSight.ps1 -ArcSightHost 172.28.6.24 - NetwrixAuditorHost 172.28.6.15                                                                                 |
| The add-on runs on a remote computer. Data is retrieved from a remote Auditor repository with the explicitly specified user credentials and written to a remote ArcSight. | C:\Add-ons\Netwrix*Auditor_Add-on_for_HPE* ArcSight.ps1 -ArcSightHost 172.28.6.24 - NetwrixAuditorHost 172.28.6.15 -NetwrixAuditorUserName enterprise\NAuser -NetwrixAuditorPassword NetwrixIsCool |

For security reasons, Netwrix recommends running the script with current user credentials (skipping
user credentials). Create a special user account with permissions to both Auditor data and event log
and use it for running the script.
