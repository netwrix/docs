---
title: "Active Directory domains"
description: "Add an Active Directory domain to Privilege Secure, schedule synchronization, and manage the domain's users, groups, and computers."
sidebar_position: 50
---

# Active Directory domains

A domain resource connects Netwrix Privilege Secure for Access Management (Privilege Secure) to an Active Directory domain. After you add a domain, Privilege Secure synchronizes its users, groups, and computers. You can then give domain users and groups access to Privilege Secure, manage domain accounts, and onboard domain computers as resources.

For how synchronization reads the directory, see [How Active Directory synchronization works](/docs/privilegesecure/26.07/resources/ad-sync.md).

## Prerequisites

- A service account for the domain with the Active Directory platform. See [Service accounts](/docs/privilegesecure/26.07/configuration/service-accounts/service-accounts.md) for the permissions it needs.
- Network access from the application server to a domain controller.

## Add a domain

1. Select **Resources** in the left navigation.
1. Select **Add** and select **New Domain**.
1. Enter the fully qualified domain name in the first field, for example `corp.example.com`.
1. In **Service Account**, select the Active Directory service account for the domain.

   :::warning
   **Service Account** defaults to the internal **Netwrix Password Secure** account. Replace it with your Active Directory service account before you test or save. The internal account can't connect to the domain.
   :::

   {/* TODO verify: whether the internal Netwrix Password Secure account fails the connection test or only lacks directory permissions. */}

1. Select **Use TLS** to connect to the domain over a Transport Layer Security (TLS) connection.
1. Select **Test** to check the connection.
1. Select **Save**. The **Save** button is available after the test succeeds.

{/* TODO screenshot: New Domain page with the domain name entered, the Active Directory service account selected, and Use TLS selected. */}

The new domain opens on its details page. The page is empty until the first synchronization finishes. To start it right away, select **Sync**.

{/* TODO verify: the label of the domain name field on the New Domain page. The console shows a raw placeholder label; describe the field by its purpose only. */}

## Schedule synchronization

Set how often Privilege Secure synchronizes the domain in the schedule row on the domain's details page.

| Setting | Description |
| --- | --- |
| **Frequency** | **Never**, **Hourly**, **Daily**, or **Weekly**. The choice adds more fields. |
| **Every** | For **Hourly**, how many hours between synchronizations. |
| **At** | For **Daily** and **Weekly**, the start time. |
| **On** | For **Weekly**, the day of the week. |
| **Last Synchronized** | The date and time of the last synchronization. This value is read-only. |

{/* TODO verify: the field labels and layout that each Frequency option adds (Every, At, On). They come from the 26.03 page, and the 26.07 lab showed only Frequency and At. */}

Select **Save** after you change a setting. Select **Cancel** to discard the change.

## Run a synchronization

The **Sync** button is a split button. Select the main part of the button to start a normal synchronization. Open the menu on the button to see **Full Sync**.

- Use **Sync** for routine updates. After the first synchronization, it reads only the objects that changed.
- **Full Sync** is in the button menu. {/* TODO verify: what Full Sync does in 26.07.3. The 26.07 code removed the full-scan option from the synchronization input, but the console still shows Full Sync in the Sync menu. */}

While a synchronization runs, a **Cancel** button replaces **Sync** so you can stop it. {/* TODO verify: whether the Cancel button and the Status values (Complete, Processing, Failed, Cancelled) from 26.03 still appear in 26.07.3. The lab didn't show them. */}

Track progress on the **History** tab. A completed run ends with an entry such as "Domain corp.example.com sync complete."

{/* TODO screenshot: Domain details page with the Sync split button open to show Full Sync, and the schedule row. */}

## Domain details

The details page header shows the domain name, the **Service Account** list, the **Use TLS** option, and these buttons:

| Button | Action |
| --- | --- |
| **Test** | Checks the connection to the domain with the current settings. |
| **Delete** | Removes the domain from Privilege Secure. A confirmation window opens. |
| **Sync** | Synchronizes the domain. The menu holds **Full Sync**. |

A domain has five tabs: **Users**, **Groups**, **Computers**, **History**, and **Sync Errors**. A domain has no **Sessions** or **Access Policies** tab.

{/* TODO verify: that Delete removes only the Privilege Secure resource and doesn't change the domain. */}

### Users tab

The **Users** tab lists the domain's user accounts. Use **Search** and the **Type** filter to find accounts.

| Button | Action |
| --- | --- |
| **Add to NPS User Role** | Gives the selected account access to Privilege Secure with the User role. |
| **Remove NPS Role** | Removes the selected account's access to the console. |
| **Manage** | Sets the selected account to be managed by Privilege Secure. |
| **Unmanage** | Stops Privilege Secure from managing the selected account. |
| **Rotate** | Queues a credential rotation for the selected account. |
| **Verify** | Checks that the account's credential matches the one Privilege Secure stores. |
| **View History** | Opens the password history for the account. |
| **Password Reset Options** | Sets when the password rotates, such as **Rotate on Session Start** and **Rotate on Session End**. |

{/* TODO verify: the Type filter values on the domain Users tab (26.03 listed Users, Admin, Managed, and Not Onboarded), and whether Manage applies only to Standard and Internal accounts. */}

The table includes these columns, among others: **Name**, **User Name**, **Privilege**, **Last Login**, **Password Changed**, **Age**, **NPS Role**, **Managed**, **Rotate Start | End**, **Keep Enabled**, **Dependents**, and **Status**. **Status** shows the result of the last credential verification. For managed accounts, see [Credentials](/docs/privilegesecure/26.07/admin/credentials/overview.md).

To give a domain user console access without leaving this page, select the user and select **Add to NPS User Role**. You can also add users from the Users & Groups page. See [Add users and groups](/docs/privilegesecure/26.07/admin/users-groups/add-users-groups.md).

### Groups tab

The **Groups** tab lists the domain's groups. The **Type** filter narrows the list, and **Search** finds a group by name.

- **Add to NPS User Role** gives the selected group access to Privilege Secure. Members of the group sign in with the group's role.
- **Remove NPS Role** removes that access.

The table shows **Name**, **NPS Role** (**Not Enrolled** until you add the group), **Group Name (Pre-Windows 2000)**, and **Description**.

{/* TODO verify: the Type filter values on the Groups tab (26.03 listed Not Enrolled, Can Log In, and Admin). */}

### Computers tab

The **Computers** tab lists the domain's computer objects. The table shows **Name**, **NPS Managed**, **Operating System**, **DC**, **DNS Host Name**, **Distinguished Name**, and **Service Account**.

To onboard computers as resources:

1. Open the **Computers** tab.
1. Select one or more computers.
1. Select **Add as NPS Managed Resource**.
1. In the window that opens, select the service account Privilege Secure uses to connect to the computers.
1. Select **Okay**.

The computers appear on the Resources page as hosts. To stop managing a computer, select it and select **Remove as NPS Managed Resource**.

{/* TODO verify: the title and field labels of the window that Add as NPS Managed Resource opens. The 26.03 page called the field Use Service Account. */}
{/* TODO verify: the customer-facing behavior of the 26.07.3 fix that reports the real error when adding domain computers. */}
{/* TODO screenshot: the window that opens from Add as NPS Managed Resource. */}

### History tab

The **History** tab lists synchronization events for the domain. Filter by status (**Information**, **Warning**, **Error**), event type (such as **AD Sync**), and service type. The table shows **Occurred**, **Status**, **Event Type**, **Service Type**, and **Message**.

### Sync Errors tab

The **Sync Errors** tab lists the errors from synchronization. The table shows **Time** and **Message**. The tab shows **None** when no errors are logged.

## Troubleshoot a synchronization that shows Failed

If the **Sync AD** scheduled task shows **Failed** while the domain still synchronizes, see [Active Directory sync and scan problems](/docs/privilegesecure/26.07/troubleshooting/ad-sync-and-scans.md).
