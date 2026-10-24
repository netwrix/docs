---
title: "Microsoft Entra ID tenants"
description: "Add a Microsoft Entra ID tenant to Privilege Secure, choose its service account, collect group memberships, and review the tenant's users and groups."
sidebar_position: 70
---

# Microsoft Entra ID tenants

A Microsoft Entra ID tenant resource connects Netwrix Privilege Secure for Access Management (Privilege Secure) to a Microsoft Entra ID tenant through Microsoft Graph. Privilege Secure can then manage the tenant's accounts and grant roles and group memberships during sessions.

## Prerequisites

- An app registration in Microsoft Entra ID, with the permissions and roles Privilege Secure needs. See [Register an app in Microsoft Entra ID](/docs/privilegesecure/26_07/configuration/service-accounts/entra-id-app-registration).
- A service account with the **Entra ID** platform that holds the application ID and secret. See [Service accounts](/docs/privilegesecure/26_07/configuration/service-accounts).
- The tenant ID, found in the Microsoft Entra admin center.

## Add a tenant

1. Select **Resources** in the left navigation.
1. Select **Add** and select **New Entra ID Tenant**.
1. In **Enter Entra ID Name**, enter a name, for example `Contoso Entra ID`.
1. Enter the **Tenant ID**, the globally unique identifier of the tenant.
1. Check **Logon URL**. It defaults to the Azure portal address. Change it only if your users sign in at a different address.
1. Enter the **Email Domain**, the domain part of the user principal name that the tenant uses, for example `contoso.com`.
1. For a hybrid environment, select the on-premises Active Directory domain that synchronizes with the tenant in **Associated Domain**. Otherwise leave it set to **None**.
1. To collect group memberships, select **Process Group Memberships**. The option is off by default.
1. In **Service Account**, select the Entra ID service account.

   :::warning
   **Service Account** defaults to the internal **Netwrix Password Secure** account. Replace it with the Entra ID service account before you save. The internal account can't connect to the tenant.
   :::

   {/* TODO verify: how the tenant behaves when the internal Netwrix Password Secure account is left selected. */}

1. Select **Save**.

The **Platform** field shows **Entra ID** and can't be changed.

{/* TODO screenshot: New Entra ID Tenant page with the fields filled in. Blur the tenant ID and domain. */}
{/* TODO verify: the field order and the exact meaning of Email Domain. These come from the 26.03 page and the empty 26.07 form. The lab had no tenant to test with. */}

## Synchronize the tenant

Select **Synchronize Now** on the tenant's details page to read the tenant's users and groups. You can also schedule the scan on the Entra ID platform. See [Platforms](/docs/privilegesecure/26_07/resources/platforms).

When **Process Group Memberships** is selected, synchronization also collects group membership information.

{/* TODO verify: what Synchronize Now reads from a tenant, and whether a Cancel button appears while it runs. The 26.03 page described the domain scan. */}

## Tenant details

The details page shows the settings from the add page. Change a setting and select **Save**, or select **Cancel** to discard the change.

The tenant has seven tabs.

| Tab | What it shows |
| --- | --- |
| **URLs** | The sign-in URLs the browser extension accepts for the tenant. Select **Add**, **Edit**, or **Remove** to change them. If a site isn't listed, an activity sign-in can fail. The **Match Type** values are the same as for websites. See [Websites](/docs/privilegesecure/26_07/resources/websites). |
| **Users** | Cloud-only users in the tenant. Use **Manage**, **Unmanage**, **Rotate**, **Verify**, **View History**, and **Password Reset Options** to manage their credentials. |
| **Groups** | Cloud-only groups in the tenant. |
| **Sessions** | Sessions on the tenant. |
| **Access Policies** | Access policies that include the tenant. |
| **History** | Session history for the tenant. |
| **Applications** | Applications in the tenant. |

In a hybrid environment, the associated Active Directory domain lists the users and groups instead of these tabs.

Release 26.03.2 added support for nested groups and inherited directory roles when Privilege Secure removes access from Entra ID accounts.

{/* TODO verify: 437991 (26.03.2 nested groups and inherited roles on deprovision) is in 26.07.3; not found by number in the history */}

{/* TODO verify: every tab description on this page, and that a trash can icon on the details page removes the tenant after confirmation. They come from 26.03. The lab had no tenant, so only the empty-form tab strip was confirmed. */}
{/* TODO verify: columns on the Users, Groups, and Applications tabs in 26.07.3. */}

For the roles and API permissions that rotation and provisioning need, see [Register an app in Microsoft Entra ID](/docs/privilegesecure/26_07/configuration/service-accounts/entra-id-app-registration).
