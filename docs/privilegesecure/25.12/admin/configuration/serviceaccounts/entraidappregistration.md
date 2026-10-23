---
title: "Microsoft Entra ID App Registration"
description: "Create a Microsoft Entra ID app registration, secret, and role assignments for a Privilege Secure service account."
keywords:
  - Microsoft Entra ID
  - App Registration
  - Tenant ID
  - Grant Admin Consent
  - User Administrator
  - Password Writeback
sidebar_position: 20
---

# Microsoft Entra ID App Registration

To create a Microsoft Entra ID (formerly Azure AD) service account and add a Microsoft Entra ID
tenant to Privilege Secure, the following information is required:

- App ID (For service account)
- App Secret (For service account)
- Tenant ID (To add resource)

Log in to Microsoft Entra ID to generate the required information for Privilege
Secure.

## Create App Registration

Create an App Registration in Entra ID (**Entra ID** > **App Registrations**) as an admin in Entra ID.

1. Click **New Registration**.
2. Name it, keep all default settings, and click **Register**.
3. Expand the **Manage** menu, then click **API Permissions**.
4. Using this menu, grant the following Microsoft Graph API permissions:

   - Application Permissions:
     - `Directory.ReadWrite.All`
     - `Group.ReadWrite.All`
     - `User.ReadWrite.All`
     - `RoleManagement.ReadWrite.Directory`
   - Delegated Permissions:
     - `User.Read`

5. Click **Grant Admin Consent**.

Ensure that **Grant Admin Consent** was successful within the Configured permissions menu. The following message
appears at the top of the page: Successfully granted admin consent for the
requested permissions.

## Generate Secret

Generate a secret for the App Registration.

1. In the App Registration section, click **Certificates & Secrets**.
2. Click **New Client Secret**.
3. Set any expiration date (your preference), and click **Add**.
4. Copy the Secret Value before leaving the page. The Secret Value, which is the App
   Secret value required for adding an Entra ID Service Account to Netwrix Privilege Secure, is never
   displayed again.
5. Return to the App Registration Overview page to get the following values:

   - Application (client) ID, required for the Netwrix Privilege Secure Entra ID Service Account
   - Directory (tenant) ID, required to add an Entra ID tenant resource to Netwrix Privilege Secure

## Add the App Registration to the User Administrator role

Add the App Registration to the User Administrators role.

:::note
User Administrator is the least privileged model and can't manage Global Administrator.
To manage the Global Administrator role, assign the Global Administrator role to the App
registration instead of User Administrator.
:::

1. Navigate to **Entra ID**.
2. Click **Roles and Administrators**.
3. Locate and click the **User Administrator** role.
4. Click **Add Assignments**.
5. Search for the name of the previously created App Registration, click it, and click
   **Select**.
6. Click **Next**, then select the **Setting** tab and provide justification text before
   clicking **Assign**.

The service account can now be added to Privilege Secure, using the Application (Client) ID and
Client Secret. See the [Service Accounts Page](/docs/privilegesecure/25.12/admin/configuration/serviceaccounts/serviceaccounts.md) topic for additional
information.

Add the Microsoft Entra ID Tenant resource to Privilege Secure using the Tenant ID. See the
[Add New Microsoft Entra ID Tenant](/docs/privilegesecure/25.12/admin/interface/resources/entraidtenant.md) topic for additional
information.

## Rotate a Microsoft Entra ID Account Password in a Hybrid Tenant

For Privilege Secure to rotate existing account passwords in hybrid Microsoft Entra
ID tenants, enable the Password Writeback feature in Microsoft Entra ID. Enabling Password
Writeback allows hybrid account passwords to be updated either in on-prem AD or in Microsoft Entra
ID, and the result is synced to the other location. Without having this functionality enabled
in a hybrid Microsoft Entra ID tenant, all attempts to change an account's password will fail.

Enabling Password Writeback isn't specific to Privilege Secure. See the
[Enable Entra ID password writeback](https://learn.microsoft.com/en-us/entra/identity/authentication/tutorial-enable-sspr-writeback)
Microsoft article for additional information.
