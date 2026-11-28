---
title: "Manage an Identity Store in Directory Manager"
description: "View, enable, disable, update, and delete an identity store, exclude domains from replication, and set domain controller priority."
keywords:
  - manage identity store
  - DC priority
  - disable identity store
  - exclude domain from replication
  - identity store status
sidebar_position: 20
---

# Manage an Identity Store in Directory Manager

After you create and configure an identity store, you can run group and identity management operations in the identity provider through Directory Manager. This page covers how to view, enable, disable, update, and delete an identity store, exclude domains from replication, and set domain controller (DC) priority.

**What do you want to do?**

- [View identity store details](#view-identity-store-details)
- [Enable or disable an identity store](#enable-or-disable-an-identity-store)
- [Update general info for an identity store](#update-general-info-for-an-identity-store)
- [Exclude an Active Directory domain from replication](#exclude-an-active-directory-domain-from-replication)
- [Set DC priority for an Active Directory identity store](#set-dc-priority-for-an-active-directory-identity-store)
- [Delete an identity store](#delete-an-identity-store)

## View identity store details

In Admin Center, click **Identity Stores** in the left pane. The **Identity Stores** page displays the identity stores created in Directory Manager.

The card for an identity store displays the following information:

| Info  | Description |
| --- | --- |
| Basic info | The display name of the identity store and the identity provider it is built on, such as Active Directory. |
| Identity store status | The status appears in the top right corner of the card. An identity store has one of the following statuses: <br /><ul><li>**Healthy:** The identity store is fully functional. Hover over the status to view the factors that determine health.</li><li>**Errors:** The identity store has run into one or both of the following errors: <br /><ul><li>It can't connect to the identity provider using the service account provided on the **Identity Store Details** page.</li><li>Data from the provider isn't replicated to Elasticsearch within the required time interval. The last replication date and time appear at the bottom of the card.</li></ul></li></ul> Hover over the status to view the reason for the **Errors** status. |
| History | Shows whether history tracking for the identity store is enabled or disabled. <br />To enable or disable history tracking, see [Configure History Tracking in Directory Manager](/docs/directorymanager/11.2/admincenter/identitystore/configure/historytracking.md). |
| MFA | Shows whether second-factor authentication is enabled for security roles in the identity store. See [Configure Second Factor Authentication in Directory Manager](/docs/directorymanager/11.2/admincenter/authpolicy/sfa.md). MFA shows one of the following: <br /><ul><li>**Available for x/x roles:** The number of security roles that have second-factor authentication enabled, out of the total security roles in the identity store. For example, 1/3 means that the identity store has 3 security roles and second-factor authentication is enabled for one of them.</li><li>**Not Available:** Second-factor authentication isn't enabled for any security role in the identity store.</li></ul> |
| Last replication date and time | The last run date and time of the Replication service. If the service doesn't run at the specified interval, the identity store status changes to **Errors**.  |
| Ellipsis | Click it to open a shortcut menu with the following options: <br /><ul><li>**Edit:** Opens the identity store properties page, where you can manage identity store settings, workflows, security roles, replication attributes, and more. See [Configure an Identity Store in Directory Manager](/docs/directorymanager/11.2/admincenter/identitystore/configure/configure.md).</li><li>**Disable:** Disables the identity store.</li><li>**Replicate Objects:** Runs the Replication service to replicate object data in the identity store. See [Force Run the Replication Service (for Object Replication)](replication.md#force-run-the-replication-service-for-object-replication).</li><li>**Replicate Deleted Objects:** Runs the Replication service to remove objects from Elasticsearch that were deleted from the identity provider. See [Force Run the Replication Service (for Deleting Objects)](replication.md#force-run-the-replication-service-for-deleting-objects).</li><li>**Delete:** Deletes the identity store from Directory Manager.</li></ul> |

## Enable or disable an identity store

When you disable an identity store, all users signed in to Directory Manager with that store are signed out. The identity store is unavailable for operations.

You can disable an identity store with either of the following methods. You can enable a disabled identity store with **Method 1** only.

**Method 1: Enable or disable an identity store**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select **Enable** or **Disable**.

**Method 2: Disable an identity store**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select **Edit**.
3. On the **Identity Store Details** page, use the toggle button in the top right to disable the identity store.
4. Click **Save**.

## Update general info for an identity store

You can change the display name for an identity store and add a description for it. You can also change the service account credentials that connect to the identity provider, and update any other information you provided while creating the identity store.

**To update the info:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select **Edit**.
3. On the **Identity Store Details** page, update the information you need on the **General** tab.

   This page differs by provider. For more information, see the steps for creating the respective provider in [Create an Identity Store in Directory Manager](/docs/directorymanager/11.2/admincenter/identitystore/create.md).

4. Click **Save**.

## Exclude an Active Directory domain from replication

By default, Directory Manager replicates the domain specified for the identity store and its child domains. You can exclude a domain or a child domain from replication. The Replication service then doesn't replicate it. See [Elasticsearch and Replication Service in Directory Manager](/docs/directorymanager/11.2/admincenter/replication/overview.md).

You can still create and manage objects in an excluded domain using Directory Manager.

**To exclude a domain:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select **Edit**.
3. On the **Identity Store Details** page, click the **Connection** tab.
4. In the **Excluded Domains** area, select the checkboxes for the domains you want to exclude from replication.

   To select all domains, select the checkbox in the header area.

5. Click **Save**.

## Set DC priority for an Active Directory identity store

You can select a domain controller in an Active Directory domain to work with Directory Manager. The Data service and the Replication service connect to this domain controller to perform their operations in the domain. This keeps the selected domain controller available with minimum downtime.

To understand how DC priority works, assume the following:

- gene.local is your parent domain with two child domains.
- You have four domain controllers in the parent domain: DC_N, DC_S, DC_E, and DC_W.
- You also have two domain controllers in each of the two child domains.

You can set a separate DC priority list for the parent domain and each of the child domains.

To create a DC priority list for a domain, list the domain controllers in the order of priority. For example, you set the priority for the parent domain as:

- Priority 1: DC_E
- Priority 2: DC_S

DC_N and DC_W aren't included in your priority list.

When the Data service restarts for reasons such as an IIS restart, it does the following:

- The Data service attempts to connect to the first domain controller in the priority list, DC_E.
- If DC_E isn't available, the Data service attempts to connect to the second domain controller in the priority list, DC_S.
- If DC_S isn't available either, the Data service uses the normal lookup process.

**Normal lookup process for Data service**

The Data service makes a connection with a domain controller through the System.DirectoryServices API. It sends a request to the API, which connects to any domain controller in the domain. In this way, the Data service communicates with the domain controller to perform the required function.

System.DirectoryServices doesn't evaluate the domain controllers in the DC priority list when it creates a connection. Therefore, in the preceding example, the API connects to DC_N or DC_W.

**"Server Not Operational" error**

When the Data service connects to a domain controller (say DC_E), it caches the domain logon information. It uses that information to create all later sessions with the domain controller. Therefore, it doesn't iterate on the DC priority list every time it creates a session.

If DC_E is down, Directory Manager displays the "Server Not Operational" error. The error means that the Data service has lost connection with the domain and needs to re-establish a connection.

To resolve the error, restart IIS. The Data service then makes a connection again using the process described earlier. It connects to a different domain controller and caches the domain logon information. It continues to make sessions with this domain controller unless the Data service is restarted.

**DC priority and Replication**

Every time the Replication service is triggered, it consults the DC priority list to connect to a domain controller for replication. If it can't connect to any domain controller in the priority list, it reverts to the normal lookup process to connect to a domain controller in the domain.

**Summary**

- If DC priority is defined for a domain, the Data service and the Replication service connect to a domain controller in the domain using the defined DC priority list. If no domain controller in the list is available, the services use the normal lookup process to connect to a domain controller in the domain.
- If DC priority isn't defined for a domain, the Data service and the Replication service connect to it using the normal lookup process.

**To set DC priority for a domain:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select **Edit**.
3. On the **Identity Store Details** page, click the **Connection** tab. The **DC Priority** area displays two options:

    - **Set default priority:** This tile is selected by default. It means that no DC priority is set for the identity store domain. The Data service and the Replication service connect to it using the normal lookup process.
    - **Choose custom priority:** Select this tile to set a DC priority list for the identity store domain and its child domains, if any.

4. Select the **Choose custom priority** tile. The following fields appear:

    - **Select Domain:** This dropdown list displays the identity store domain and its child domains, if any. Excluded domains aren't listed. Select a domain to define a DC priority list for it.

      Each domain in the list displays either **Priority set** or **Default Priority** next to it:

        - **Priority set:** DC priority is defined for the domain, even if it is set for one DC and not for all DCs in the domain.
        - **Default Priority:** Priority isn't set for any DC in the domain.

    - The table displays the domain controllers in the selected domain. The **DC Name** column displays the name of the DC. The **Priority** column displays the priority assigned to it, with "1" being the highest priority. When no priority is assigned to a DC, **Not set** is displayed for it.

      You can assign priority to selected DCs in the domain. For example, if a domain has 4 DCs, you can set priority for two and leave the rest.

        - To assign priority to a domain controller, click **Set priority** for it. The **Priority** column displays the priority assigned to it. To revoke priority, click **Reset priority**.
        - To change the priority for a DC, click in the row, hold down the left mouse button, and drag to change its position in the list. By default, "1" is assigned as priority to the first DC in the list, "2" to the second DC, and so on.
        - To revoke priority for all DCs in the domain, click **Reset all to default**. **Default Priority** then appears next to the domain name in the **Select Domain** dropdown list.

5. Click **Save**.

:::note
When you change the DC priority for a domain or a child domain, it takes effect instantly. The Data service reestablishes a connection with a DC based on the new priority.
:::

## Delete an identity store

You can delete an identity store with all its configurations. Directory Manager then can't connect to that identity store, and the identity store can't be used in a Synchronize job.

:::note
You can't delete an identity store that has been linked to another identity store. You must first delete any links before deleting the identity store.
:::

**To delete an identity store:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select **Delete**.
