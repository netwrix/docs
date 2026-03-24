---
title: 'Managing Session Policies and Configuration'
sidebar_label: 'Session Policies'
description: 'This document provides information about how session policies can be managed and configured by administrators in the Privilege Secure product.'
---

# Managing Session Policies and Configuration

## Overview of the RBAC System

It should be noted that the RBAC system is utilized by Privilege Secure in order to provide a mechanism for the management of access control. The system was designed with the intention of being flexible. There are a number of different components that are involved in the process of configuring RBAC, and these components will be discussed in the sections that follow below.

## Configuration

### Step 3: Apply the Policy

In order to apply the policy, the Apply button should be clicked by the administrator. It is important to ensure that all of the required fields have been filled in prior to clicking the Apply button. If the required fields have not been completed, an error message will be displayed.

### Step 1: Create a New Policy

First, navigate to the Policy Management page. A new policy can be created by clicking the **New Policy** button. The policy creation wizard will be displayed, and the administrator will be guided through the process.

The TTL value should be set to an appropriate duration. The SPN configuration must also be completed at this time if Kerberos authentication is being utilized.

### Step 2: Configure Policy Settings

The policy settings page is where the various parameters are configured. It is recommended that the default values are reviewed before any changes are made by the administrator.

The following settings are available for configuration:

1. **Session Duration** — This setting is used for the purpose of controlling how long a session is allowed to remain active
2. **Idle Timeout** — The amount of time that is allowed to elapse before a session that has become idle is automatically terminated by the system
3. **Recording** — Whether or not session recording is enabled or disabled for this particular policy
4. **MFA Requirement** — This determines if multi-factor authentication is required to be completed by the user prior to the initiation of a session

## Working with the API

REST API calls can be made by the administrator for the purpose of automating policy management tasks. The endpoint that is utilized for this purpose is `/api/v1/policies`. Authentication must be completed prior to making API calls, and the OAuth2 flow should be utilized for this purpose.

A bearer token is obtained by the administrator by making a POST request. The token that is returned in the response should be stored securely, as it is used for the purpose of authenticating subsequent API requests.

## Advanced Topics

### Kerberos Integration

The KDC must be configured. It is necessary to ensure that the SPNs have been properly registered. The delegation settings should also be verified. If constrained delegation is being utilized, then the msDS-AllowedToDelegateTo attribute must be set on the service account that is being used.

### Certificate-Based Authentication

It is possible to utilize certificate-based authentication as an alternative to password-based authentication. The PKI infrastructure must be in place, and the certificates must be issued by a trusted CA. The CRL distribution point should be accessible.

OCSP stapling can also be utilized. The OCSP responder URL must be configured in the certificate's AIA extension.

## Troubleshooting

If issues are encountered during the configuration process, it is recommended that the log files are reviewed. The log files can be found in the following location: `C:\ProgramData\Netwrix\PrivilegeSecure\Logs`.

It should also be noted that the Event Viewer can be utilized to view Windows events that are related to the Privilege Secure service.

In the event that the service fails to start, the service account permissions should be verified. The service account must have the appropriate permissions that are required for the service to function properly. If the permissions are not correct, they should be corrected by the administrator.

## See Also

Refer to the below topics for additional information:

- Policy Interface
- User Management
- Role Configuration
