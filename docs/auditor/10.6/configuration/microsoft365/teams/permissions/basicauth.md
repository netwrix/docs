---
title: "Using Basic Authentication with MS Teams"
description: "Using Basic Authentication with MS Teams"
sidebar_position: 10
---

# Using Basic Authentication with MS Teams

With basic authentication, your MS Teams organization will be accessed on behalf of a user. You will
need to provide user name and password in the monitored item properties. Auditor will use this
account to access the Microsoft Entra ID (formerly Azure AD) organization, automatically create a
Microsoft Entra ID app with required permissions, and perform initial data collection. For that, the
user account will need an administrative role in the cloud-based infrastructure.

## Required Roles and Permissions

| To...                                                                                                                 | Requirement                                                                                                                                                                                                                                  | Comment                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Create Microsoft Entra ID application, run initial data collection, and perform Auditor upgrade from previous version | Any of the following role combinations: - Application Administrator & Privileged Role Administrator & _Teams Administrator_ OR - Cloud Application Administrator & Privileged Role Administrator & _Teams Administrator_ OR - _Global Admin_ | Prepare a user account and specify it in the monitored item properties. See the [MS Teams](/docs/auditor/10.6/configuration/microsoft365/teams/overview.md) topic for additional information. |
| Collect activity data                                                                                                 | Any of the following roles: _Application Administrator_ & _Teams Administrator_ OR _Cloud Application Administrator_ & _Teams Administrator_ OR _Global Admin_                                                                               |                                                                                                                                                                                                                 |

## Assigning a Privileged Role for Microsoft Entra ID and Microsoft 365

When configuring a monitored item for Microsoft Entra ID (formerly Azure AD) or Microsoft 365
auditing with basic authentication, specify a data collecting account that has sufficient privileges
in Microsoft Entra ID. This account should be able to create a dedicated application in your
Microsoft Entra ID domain. Depending on your requirements and company policies, you can select one
of the following approaches:

- Assign a privileged role (for example, _Application Administrator_ & _Privileged Role
  Administrator_) to the account, then revoke it after the application creation and initial data
  collection, and assign a less-privileged role to this account (for example, _Security Reader_).
- Use the account with a privileged role on a regular basis. Any additional role assignments will
  not be necessary in this case. If you select this method, contact your security administrator to
  avoid violations of security policies in your organization.

**NOTE:** If you previously used a non-privileged account for Microsoft Entra ID data collection in
your Netwrix Auditor, consider that after the upgrade you will have to perform the role assignment
procedure again, selecting one of these approaches. Until then, data collection will not be
performed.

Follow the steps to assign a privileged role to the account.

**Step 1 –** Sign in to Microsoft Entra ID portal using your Microsoft account.

**Step 2 –** Select Microsoft Entra ID on the left.

**Step 3 –** Select the account that you want to use as data collecting account, or create a new
user.

**Step 4 –** Make sure you have disabled multi-factor authentication for this account.

**Step 5 –** Expand Directory role and select the role you need (for example, Global admin or any
other privileged role).

_Remember,_ In Microsoft Graph API, Microsoft Entra ID Graph API, and Microsoft Entra ID PowerShell,
the Global admin role is identified as Company Administrator.

**Step 6 –** Click OK.

**Step 7 –** In Auditor, create a monitoring plan for auditing Microsoft Entra ID and specify this
account with this privileged role on the Specify the account for collecting data step.

**Step 8 –** Wait until initial data collection completes.

**Step 9 –** Open Microsoft Entra ID portal and remove the privileged role from the account.

**Step 10 –** Assign a less-privileged role to this account.

A less privileged role has now been assigned to the account.

See the
[Permissions for Microsoft Entra ID Auditing](/docs/auditor/10.6/configuration/microsoft365/microsoftentraid/permissions/permissions.md#for-microsoft-entra-id-auditing)
topic for additional information.
