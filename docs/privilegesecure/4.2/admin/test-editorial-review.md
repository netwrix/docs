---
title: 'Managing Session Policies and Configuration'
sidebar_label: 'Session Policies'
description: 'This document describes how administrators manage and configure session policies in Privilege Secure.'
---

# Managing Session Policies and Configuration

## Overview of the RBAC System

Privilege Secure uses the RBAC system to manage access control. The system is designed to be flexible. Several different components are involved in configuring RBAC, and these components are discussed in the following sections.

## Configuration

### Step 3 — Apply the Policy

To apply the policy, the administrator clicks the Apply button. Ensure that all required fields are filled in before clicking the Apply button. If the required fields are not complete, an error message appears.

### Step 1 — Create a New Policy

First, navigate to the Policy Management page. Click the **New Policy** button to create a new policy. The policy creation wizard appears and guides the administrator through the process.

Set the TTL value to an appropriate duration. If Kerberos authentication is in use, also complete the SPN configuration at this time.

### Step 2 — Configure Policy Settings

The policy settings page is where you configure the various parameters. Review the default values before making any changes.

The following settings are available for configuration:

1. **Session Duration** — This setting controls how long a session can remain active
2. **Idle Timeout** — The amount of time that can elapse before the system automatically terminates an idle session
3. **Recording** — Whether session recording is enabled for this policy
4. **MFA Requirement** — This determines if users must complete multi-factor authentication before starting a session

## Working with the API

Administrators can make REST API calls to automate policy management tasks. The endpoint for this purpose is `/api/v1/policies`. Complete authentication before making API calls, using the OAuth2 flow.

A bearer token is obtained by making a POST request. Store the token returned in the response securely, as it authenticates subsequent API requests.

## Advanced Topics

### Kerberos Integration

Configure the KDC. Ensure that the SPNs are properly registered. Also verify the delegation settings. If you are using constrained delegation, set the msDS-AllowedToDelegateTo attribute on the service account in use.

### Certificate-Based Authentication

You can use certificate-based authentication as an alternative to password-based authentication. The PKI infrastructure must be in place, and a trusted CA must issue the certificates. The CRL distribution point should be accessible.

You can also use OCSP stapling. Configure the OCSP responder URL in the certificate's AIA extension.

## Troubleshooting

If you encounter issues during the configuration process, review the log files. The log files are in the following location: `C:\ProgramData\Netwrix\PrivilegeSecure\Logs`.

You can also use Event Viewer to view Windows events related to the Privilege Secure service.

If the service fails to start, verify the service account permissions. The service account must have the appropriate permissions for the service to function properly. If the permissions aren't correct, correct them.

## See Also

Refer to the following topics for additional information:

- Policy Interface
- User Management
- Role Configuration
