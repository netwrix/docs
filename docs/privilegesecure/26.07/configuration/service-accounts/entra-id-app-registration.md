---
title: "Register an app in Microsoft Entra ID"
description: "Create the Microsoft Entra ID app registration, permissions, secret, and role assignments that let Privilege Secure manage an Entra ID tenant."
sidebar_position: 20
---

# Register an app in Microsoft Entra ID

Privilege Secure manages a Microsoft Entra ID tenant through an app registration. You create the registration in the Microsoft Entra admin center, then enter its values in Privilege Secure as a service account and a tenant resource.

This task needs three values from Entra ID:

| Value | Used for |
| --- | --- |
| Application (client) ID | The **App ID** of the Entra ID service account. |
| Client secret value | The **App Secret** of the Entra ID service account. |
| Directory (tenant) ID | The **Tenant ID** when you add the tenant as a resource. |

## Prerequisites

- You can sign in to Microsoft Entra ID as an administrator who can register applications, grant admin consent, and assign directory roles.
- You have the Administrator role in Privilege Secure.

## Create the app registration

1. In the Microsoft Entra admin center, go to **Entra ID** > **App registrations**.
1. Click **New registration**.
1. Enter a name, for example `Privilege Secure`. Keep the default settings, and click **Register**.
1. Under **Manage**, click **API permissions**.
1. Add these Microsoft Graph **Application** permissions:

   - `Directory.ReadWrite.All`
   - `Group.ReadWrite.All`
   - `GroupMember.ReadWrite.All`
   - `RoleManagement.ReadWrite.Directory`
   - `User-PasswordProfile.ReadWrite.All`
   - `UserEnableDisableAccount.All`
   - `User.ReadWrite.All`
   - `UserAuthenticationMethod.ReadWrite.All`

1. Click **Grant admin consent**.

After consent succeeds, the **Configured permissions** page shows the message "Successfully granted admin consent for the requested permissions".

{/* TODO verify: the exact permission names, especially UserEnableDisableAccount.All (the Microsoft Graph name may be User.EnableDisableAccount.All), and why the requirements table lists a shorter set plus the delegated permission User.Read. Reconcile this list with requirements/target-environments.md. */}

## Create a client secret

1. In the app registration, click **Certificates & secrets**.
1. Click **New client secret**.
1. Enter a description, choose an expiration date, and click **Add**.
1. Copy the secret **Value** before you leave the page. Entra ID doesn't show it again.
1. Open the **Overview** page, and copy the **Application (client) ID** and the **Directory (tenant) ID**.

Note the expiration date. Before the secret expires, create a new secret and enter it in **App Secret** on the service account.

## Assign directory roles to the app

Assign the app registration to two Entra roles. Repeat these steps for each role.

1. Go to **Entra ID** > **Roles & administrators**.
1. Click the role name, **User Administrator** or **Privileged Authentication Administrator**. Don't select the checkbox next to the name.
1. Click **Add assignments**.
1. Under **Select members**, click **No member selected**, search for the app registration, click it, and click **Select**.
1. Click **Next**. Set **Assignment type** to **Active** and **Duration** to **Permanently assigned**, enter a justification, and click **Assign**.

:::note
**User Administrator** is the least privileged option and can't manage Global Administrator accounts. To manage the Global Administrator role, assign the **Global Administrator** role to the app registration instead of **User Administrator**.
:::

Microsoft requires the **Privileged Authentication Administrator** role for password rotation. Deployments set up before 2026 may not have needed it, so add it to older registrations.

:::note
The 26.03.0 to 26.03.2 release notes list a known issue: Entra ID password rotation requires the Password Administrator role. If rotation fails with a permissions error, check the roles assigned to the app registration.
:::

{/* TODO verify: Entra ID password rotation was a known issue in 26.03.0 to 26.03.2 that named the Password Administrator role. Confirm with the SME which roles password rotation needs in 26.07.3 and whether Password Administrator is also required. */}

## Add the service account and the tenant

1. In Privilege Secure, select **Configuration** > **Service Accounts**, and click **+**.
1. Set **Platform** to **Entra ID**.
1. Enter the **App ID** (the application client ID) and the **App Secret** (the client secret value), and click **Save**. See [Service accounts](/docs/privilegesecure/26.07/configuration/service-accounts/service-accounts.md).
1. Add the tenant as a resource with the **Tenant ID** and this service account. See [Microsoft Entra ID tenants](/docs/privilegesecure/26.07/resources/entra-id-tenants.md).

## Rotate passwords in a hybrid tenant

To rotate the passwords of accounts in a hybrid Entra ID tenant, turn on password writeback in Microsoft Entra ID. With writeback on, a password change in either on-premises Active Directory or Entra ID syncs to the other. Without it, every password change for a hybrid account fails.

Password writeback isn't specific to Privilege Secure. See [Tutorial: Enable Microsoft Entra self-service password reset writeback to an on-premises environment](https://learn.microsoft.com/en-us/entra/identity/authentication/tutorial-enable-sspr-writeback) in the Microsoft documentation.
