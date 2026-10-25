---
title: "Microsoft Entra ID tenants"
description: "Add a Microsoft Entra ID tenant to Privilege Secure, choose its service account, collect group memberships, and review the tenant's users and groups."
sidebar_position: 70
---

# Microsoft Entra ID tenants

A Microsoft Entra ID tenant resource connects Netwrix Privilege Secure for Access Management (Privilege Secure) to a Microsoft Entra ID tenant through Microsoft Graph. Privilege Secure can then manage the tenant's accounts and grant roles and group memberships during sessions.

## Prerequisites

- An app registration in Microsoft Entra ID, with the permissions and roles Privilege Secure needs. See [Register an app in Microsoft Entra ID](/docs/privilegesecure/26.07/configuration/service-accounts/entra-id-app-registration.md).
- A service account with the **Entra ID** platform that holds the application ID and secret. See [Service accounts](/docs/privilegesecure/26.07/configuration/service-accounts/service-accounts.md).
- The tenant ID, found in the Microsoft Entra admin center.

## Add a tenant

1. Select **Resources** in the left navigation.
1. Select **Add** and select **New Entra ID Tenant**.
1. In **Enter Entra ID Name**, enter a name, for example `Contoso Entra ID`.
1. Enter the **Tenant ID**, the globally unique identifier of the tenant.
1. Check **Logon URL**. It defaults to the Azure portal address. Change it only if your users sign in at a different address.
1. Enter the **Email Domain**, for example `contoso.com`. Privilege Secure adds it to a user name to build the user principal name. It's required, and it must be unique across your tenants. Privilege Secure also adds the domain to the tenant's sign-in URLs on the **URLs** tab.
1. For a hybrid environment, select the on-premises Active Directory domain that synchronizes with the tenant in **Associated Domain**. Otherwise leave it set to **None**.
1. To collect group memberships, select **Process Group Memberships**. The option is off by default.
1. In **Service Account**, select the Entra ID service account.

   :::warning
   **Service Account** defaults to the internal **Netwrix Password Secure** account. Replace it with the Entra ID service account before you save.
   :::

   {/* TODO verify: how a synchronization behaves when the internal Netwrix Password Secure account stays selected. The code only checks that a service account is selected, and the result depends on a live Entra ID tenant. */}

1. Select **Save**.

The **Platform** field shows **Entra ID** and can't be changed.

{/* TODO screenshot: New Entra ID Tenant page with the fields filled in. Blur the tenant ID and domain. */}

## Synchronize the tenant

Select **Synchronize Now** on the tenant's details page to read the tenant's users and groups. You can also schedule the scan on the Entra ID platform. See [Platforms](/docs/privilegesecure/26.07/resources/platforms/platforms.md).

Synchronization reads the tenant's users, groups, and applications through Microsoft Graph. When **Process Group Memberships** is selected, it also collects group membership information.

While a synchronization runs, a **Cancel** button appears next to **Synchronize Now**. Select it to stop the run.

## Tenant details

The details page shows the settings from the add page. Change a setting and select **Save**, or select **Cancel** to discard the change.

The tenant has seven tabs.

| Tab | What it shows |
| --- | --- |
| **URLs** | The sign-in URLs the browser extension accepts for the tenant. Select **Add**, **Edit**, or **Remove** to change them. If a site isn't listed, an activity sign-in can fail. The **Match Type** values are the same as for websites. See [Websites](/docs/privilegesecure/26.07/resources/websites.md). |
| **Users** | Users in the tenant. The columns are **Name**, **User Principal Name**, **Password Last Set**, **Age**, **Managed**, **Rotate Start \| End**, **Keep Enabled**, **Status**, and **Last Checked**. Use **Manage**, **Unmanage**, **Rotate**, **Verify**, **View History**, and **Password Reset Options** to manage their credentials. |
| **Groups** | Cloud-only groups in the tenant. The table shows **Group Name**, and also **Members** when **Process Group Memberships** is selected. |
| **Sessions** | Sessions on the tenant. |
| **Access Policies** | Access policies that include the tenant. |
| **History** | Session history for the tenant. |
| **Applications** | Applications in the tenant. The table shows **Application Name** and **Description**. |

When you select an **Associated Domain**, the **Users** tab leaves out accounts that synchronize from on-premises Active Directory. The **Groups** tab always leaves out groups that synchronize from on-premises Active Directory. Those accounts and groups appear under the domain.

Select **Remove this Entra ID Tenant** next to the tenant name to delete the tenant. A confirmation window opens.

Privilege Secure rotates passwords and disables accounts for users who hold Entra ID directory roles through a group, without changing their role assignments.

For the roles and API permissions that rotation and provisioning need, see [Register an app in Microsoft Entra ID](/docs/privilegesecure/26.07/configuration/service-accounts/entra-id-app-registration.md).
