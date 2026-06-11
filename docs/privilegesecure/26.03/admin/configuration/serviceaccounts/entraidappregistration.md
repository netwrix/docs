---
title: "Microsoft Entra ID App Registration"
description: "Microsoft Entra ID App Registration"
sidebar_position: 20
---

# Microsoft Entra ID App Registration

To create a Microsoft Entra ID (formerly Azure AD) service account and add a Microsoft Entra ID
tenant to Privilege Secure, you need the following information:

- App ID (For service account)
- App Secret (For service account)
- Tenant ID (To add resource)

Log in to Microsoft Entra ID to generate the required information for Privilege
Secure.

## Create App Registration

Create an App Registration in Entra ID (Entra ID > App Registrations) as an admin in Entra ID.

**Step 1 –** Click **New Registration**.

**Step 2 –** Name it, keep all default settings, and click **Register**.

**Step 3 –** Expand the **Manage** menu, then click **API Permissions**.

**Step 4 –** Using this menu, grant the following Microsoft Graph API Application permissions:

- Directory.ReadWrite.All
- Group.ReadWrite.All
- GroupMember.ReadWrite.All
- RoleManagement.ReadWrite.Directory
- User-PasswordProfile.ReadWrite.All
- UserEnableDisableAccount.All
- User.ReadWrite.All
- UserAuthenticationMethod.ReadWrite.All

**Step 5 –** Click **Grant Admin Consent**.

Ensure the Grant Admin Consent was successful within the Configured permissions menu. The following
message appears at the top of the page: Sucessfully granted admin consent for the
requested permissions.

## Generate Secret

Generate a secret for the App Registration

**Step 1 –** In the App Registration section, click **Certificates & Secrets**.

**Step 2 –** Click **New Client Secret**.

**Step 3 –** Set any expiration date (your preference), and click **Add**.

**Step 4 –** Copy the Secret Value before leaving the page. The Secret Value, which is the App
Secret value required for adding an Entra ID Service Account to Netwrix Privilege Secure, never
appears again.

**Step 5 –** Return to the App Registration Overview page to get the following values:

- Application (client) ID, required for the Netwrix Privilege Secure Entra ID Service Account
- Directory (tenant) ID, required to add an Entra ID tenant resource to Netwrix Privilege Secure

## Add the App Registration to the User Administrator and Privileged Authentication Administrator roles.

:::note
User Administrator is the least privileged model and can't manage Global Administrator.
To manage the Global Administrator role, assign the Global Administrator role to the App
registration instead of User Administrator.
:::


**Step 1 –** Navigate to **Entra ID**.

**Step 2 –** Click **Roles and Administrators**.

**Step 3 –** Locate and click the **User Administrator** role name. Don't select the checkbox next to it.

**Step 4 –** Click **Add Assignments**.

**Step 5 –** Under Select Members, click the **No member selected** link to open the member selector.

**Step 6 –** Search for the name of the previously created App Registration, click it, and click
**Select**.

**Step 7 –** Click **Next*** to open the Setting tab. Set Assignment type to **Active** and Duration to **Permanently assigned**, provide justification text, then click **Assign**.

**Repeat steps 2 - 7** to add the **Privileged Authentication Administrator** role.

:::note
Microsoft requires the Privileged Authentication Administrator role for password rotation. Deployments before 2026 may not have needed this role.
:::

You can now add the service account to Privilege Secure using the Application (Client) ID and
Client Secret. See the [Service Accounts Page](/docs/privilegesecure/26.03/admin/configuration/serviceaccounts/serviceaccounts.md) topic for additional information.

Add the Microsoft Entra ID Tenant resource to Privilege Secure using the Tenant ID. See the
[Add New Microsoft Entra ID Tenant](/docs/privilegesecure/26.03/admin/resources/entraidtenant.md) topic for additional
information.

## Rotate a Microsoft Entra ID Account Password in a Hybrid Tenant

For Privilege Secure to rotate existing account passwords in hybrid Microsoft Entra
ID tenants, enable the Password Writeback feature in Microsoft Entra ID. When you enable Password
Writeback, you can update hybrid account passwords in either on-prem AD or Microsoft Entra
ID, and the change syncs to the other location. If you don't enable this functionality
in a hybrid Microsoft Entra ID tenant, all attempts to change an account's password fail.

Enabling Password Writeback isn't specific to Privilege Secure. See the
[Open Enable Entra ID password writeback](https://learn.microsoft.com/en-us/entra/identity/authentication/tutorial-enable-sspr-writeback)
Microsoft article for additional information.
