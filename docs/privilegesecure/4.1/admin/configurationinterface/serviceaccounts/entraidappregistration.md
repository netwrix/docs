---
title: "Microsoft Entra ID App Registration"
description: "Microsoft Entra ID App Registration"
sidebar_position: 30
---

# Microsoft Entra ID App Registration

To create a Microsoft Entra ID (formerly Azure AD) service account and add an Microsoft Entra ID
tenant to Privilege Secure, the following information is required:

- App ID (For service account)
- App Secret (For service account)
- Tenant ID (To add resource)

Log in to Microsoft Entra ID and follow the steps to generate the required information for Privilege
Secure.

## Create App Registration

Create an App Registration in Azure (Azure Active Directory > App Registrations) as an admin in
Azure.

**Step 1 –** Click **New Registration**.

**Step 2 –** Name it, keep all default settings, and click **Register**.

**Step 3 –** Click **API Permissions**.

**Step 4 –** Using this menu, grant the following Microsoft Graph API permissions:

- Application Permissions:
    - Directory.ReadWrite.All
    - Group.ReadWrite.All
    - User.ReadWrite.All
    - RoleManagement.ReadWrite.Directory
- Delegated Permissions:
    - User.Read

**Step 5 –** Click **Grant Admin Consent**.

## Generate Secret

**Generate a secret for the App Registration**

**Step 1 –** In the App Registration, click **Certificates & Secrets**.

**Step 2 –** Click **New Client Secret**.

**Step 3 –** Set any expiration date (your preference), and click **Add**.

**Step 4 –** Copy the Secret Value before leaving the page. The Secret Value, which is the App
Secret value required for adding an Azure Service Account to Netwrix Privilege Secure, is never
displayed again.

**Step 5 –** Return to the App Registration Overview page to get the following values:

- Application (client) ID, required for the Netwrix Privilege Secure Azure Service Account
- Directory (tenant) ID, required to add an Azure tenant resource to Netwrix Privilege Secure

## Add App Registration to Admin Role

Add the App Registration to the User Administrators role.

:::note
User Administrator is the least privileged model and cannot manage Global Administrator.
To manage the Global Administrator role, assign the Global Administrator role to the App
registration instead of User Administrator.
:::


**Step 1 –** Navigate to **Azure Active Directory**.

**Step 2 –** Click **Roles and Administrators**.

**Step 3 –** Locate and click on the **User Administrators** role.

**Step 4 –** Click **Add Assignments**.

**Step 5 –** Search for the name of the previously created App Registration, click on it, and click
**Add**.

The service account can now be added to Privilege Secure, using the Application (Client) ID and
Client Secret. See the
[Service Accounts Page](/docs/privilegesecure/4.1/admin/configurationinterface/serviceaccounts/serviceaccounts.md)
topic for additional information.

Add the Microsoft Entra ID Tenant resource to Privilege Secure using the Tenant ID. See the
[Add New Microsoft Entra ID Tenant](/docs/privilegesecure/4.1/admin/interface/resources/addandchange/entraidtenant.md)
topic for additional information.

## Rotate a Microsoft Entra ID Account Password in a Hybrid Tenant

In order for existing account passwords to be rotated by Privilege Secure in hybrid Microsoft Entra
ID tenants, the Password Writeback feature in Microsoft Entra ID must be enabled. Enabling Password
Writeback allows hybrid account passwords to be updated either in on-prem AD or in Microsoft Entra
ID, and the result will be synced to the other location. Without having this functionality enabled
in a hybrid Microsoft Entra ID tenant, all attempts to change an account's password will fail.

Enabling Password Writeback is not specific to Privilege Secure. See the
[Open Enable Azure Active Directory password writeback](https://docs.microsoft.com/en-us/azure/active-directory/authentication/tutorial-enable-sspr-writeback)
Microsoft article for additional information.
