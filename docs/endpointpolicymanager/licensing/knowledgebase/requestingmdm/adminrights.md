---
title: "Why does the Endpoint Policy Manager Licensing Tool (LT.EXE) require admin rights to query for Intune / Azure data?"
description: "Why does the Endpoint Policy Manager Licensing Tool (LT.EXE) require admin rights to query for Intune / Azure data?"
sidebar_position: 80
---

# Why does the Endpoint Policy Manager Licensing Tool (LT.EXE) require admin rights to query for Intune / Azure data?

The short version is that Microsoft doesn't allow us to retrieve the count of devices from Intune /
Azure without admin consent.

The Netwrix Netwrix Endpoint Policy Manager (formerly PolicyPak) Licensing Tool` (LT.EXE)` uses the
Microsoft.Graph.Intune API to retrieve the number of devices from Azure AD. Unfortunately, this API
requires Admin Consent to count the number of computers in Azure.

Below are the technical details and references to Microsoft API documentation where it is specified
that these commands require admin consent: For LT we use the command Get-Organization. This command
requires one of the following permissions:

- `DeviceManagementServiceConfig.Read.All`
- `DeviceManagementConfiguration.Read.All`

See the
[Microsoft Graph permissions reference](https://learn.microsoft.com/en-us/graph/permissions-reference#microsoft-graph-permissions-reference)
article for additional information on the Get-Organization command and the permissions it needs (we
need this command to get the number of devices).

The table below is taken from the link above, where we can see that both of the commands used in LT
require admin consent:

Application permissions

| Permission                             | Display String                                          | Description                                                                                                                                       | Admin Consent Required |
| -------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| DeviceManagementServiceConfig.Read.All | Read Microsoft Intune configuration                     | Allows the app to read Intune service properties, including device enrollment and third party service connection configuration.                   | Yes                    |
| DeviceManagementConfiguration.Read.All | Read Microsoft Intune device configuration and policies | Allows the app to read properties of Microsoft Intune-managed device configuration and device compliance policies and their assignment to groups. | Yes                    |

