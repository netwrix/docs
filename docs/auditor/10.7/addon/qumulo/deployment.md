---
title: "Deployment Scenarios"
description: "Deployment Scenarios"
sidebar_position: 10
---

# Deployment Scenarios

The Add-On can run on any computer in your environment. For example, you can run the add-on on the
computer where Auditor is installed, or on a remote server. Depending on the deployment scenario you
choose, you will need to define a different set of parameters

Netwrix suggests the following scenarios:

| Scenario                                                                                                                                     | Example: Parameters updated in default settings.xml                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The add-on runs on the Netwrix Auditor Server with the current user credentials.                                                             | `<Address>172.28.4.15</Address>` `<Address>172.28.3.18</Address>`                                                                                                                                                                                                                      |
| The add-on runs on the Netwrix Auditor Server with the explicitly specified user credentials.                                                | `<NetwrixAuditorUserName>SecurityOfficer` `</NetwrixAuditorUserName>` `<NetwrixAuditorPassword>NetwrixUser` `</NetwrixAuditorPassword>` `<Address>172.28.4.15</Address>`                                                                                                               |
| The add-on runs on a remote computer. Data is written to a remote Netwrix Auditor repository with the current user credentials.              | ` <NetwrixAuditorEndpoint>   https://172.28.6.19:9699/netwrix/api/v1/activity_records</NetwrixAuditorEndpoint>` `<Address>172.28.4.15</Address>`                                                                                                                                       |
| The add-on runs on a remote computer. Data is written to a remote Netwrix Auditor repository with the explicitly specified user credentials. | ` <NetwrixAuditorEndpoint>   https://172.28.6.19:9699/netwrix/api/v1/activity_records</NetwrixAuditorEndpoint>` `<NetwrixAuditorUserName>NetwrixUser` `</NetwrixAuditorUserName>` `<NetwrixAuditorPassword>NetwrixIsCool` `</NetwrixAuditorPassword>` `<Address>172.28.4.15</Address>` |

For security reasons, Netwrix recommends running the script with current user credentials (skipping
user credentials). Create a special user account with permissions to both Auditor data and event log
and use it for running the script.
