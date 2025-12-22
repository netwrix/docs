---
title: "Manage an Identity Store"
description: "Manage an Identity Store"
sidebar_position: 20
---

# Manage an Identity Store

Once you create and configure an identity store, you can perform group and identity management
operations in the identity provider using GroupID.

What do you want to do?

- [View Identity Store Details](#view-identity-store-details)
- [Enable or Disable an Identity Store](#enable-or-disable-an-identity-store)
- [Update General Info for an Identity Store](#update-general-info-for-an-identity-store)
- [Exclude an Active Directory Domain from Replication](#exclude-an-active-directory-domain-from-replication)
- [Set DC Priority for an Active Directory Identity Store](#set-dc-priority-for-an-active-directory-identity-store)
- [Delete an Identity Store](#delete-an-identity-store)

## View Identity Store Details

In Admin Center, click **Identity Stores** in the left pane. The **Identity Stores** page displays
the identity stores created in GroupID.

The card for an identity store displays the following information:

| Info                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Basic info                     | The display name of the identity store and the identity provider it is built on, such as Active Directory.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Identity store status          | The status is displayed on the top right corner of the card. An identity store has one of the following statuses: - **Healthy:** Indicates that the identity store is fully functional. Hover the mouse over the status to view the factors used to determine health. - **Errors:** Indicates that the identity store has run into one or both of the following errors: - It cannot connect to the identity provider using the service account provided on the **Identity Store Details** page. - Data from the provider is not replicated to Elasticsearch within the required time interval. The last replication time and date is displayed at the bottom of the card. Hover the mouse over the status to view the reason for the _Errors_ status.                                                                                                                                                                                                                                                                                                                                                                                                                 |
| History                        | Indicates whether history tracking for the identity store is enabled or disabled. See the [Configure History Tracking](/docs/directorymanager/11.0/signin/identitystore/configure/historytracking.md) topic to enable or disable history tracking.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| MFA                            | Indicates whether second factor authentication is enabled for security roles in the identity store. See the [Configure Second Factor Authentication](/docs/directorymanager/11.0/signin/authpolicy/sfa.md) topic. One of the following is displayed for MFA: - **Available for x/x roles:** Indicates the number of security roles that second factor authentication is enabled for, out of the total security roles in the identity store. For example, 1/3 indicates that there are 3 security roles defined for the identity store and second factor authentication is enabled for one of those roles. - **Not Available:** Indicates that second factor authentication is not enabled for any security role in the identity store.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Last replication date and time | The last run date and time of the Replication service. If the service does not run at the specified interval, the identity store status changes to **Errors**.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Ellipsis                       | Click it to launch a shortcut menu with the following options: - **Edit:** launches the identity store properties page, where you can manage identity store settings, workflows, security roles, replication attributes, and more. See the [Configure an Identity Store](/docs/directorymanager/11.0/signin/identitystore/configure/configure.md) topic. - **Disable:** disables the identity store. - **Replicate Objects:** runs the Replication service to replicate object data in the identity store. See the [Force Run the Replication Service (for Object Replication)](/docs/directorymanager/11.0/signin/identitystore/replication.md#force-run-the-replication-service-for-object-replication) topic. - **Replicate Deleted Objects:** runs the Replication service to remove those objects from Elasticsearch that have been deleted from the identity provider. See the [Force Run the Replication Service (for Deleting Objects)](/docs/directorymanager/11.0/signin/identitystore/replication.md#force-run-the-replication-service-for-deleting-objects) topic. - **Delete:** deletes the identity store from GroupID. |

## Enable or Disable an Identity Store

When you disable an identity store, all users logged into GroupID with that store are logged out,
and the identity store is unavailable for operations.

You can disable an identity store in any of the following ways. However, a disabled identity store
can be enabled using **Method 1** only.

**Method 1: Enable or disable an identity store**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Enable** or **Disable**.

**Method 2: Disable an identity store**

1. In Admin Center, click Identity Stores in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. On the **Identity Store Details** page, use the toggle button in the top right to disable the
   identity store.
4. Click **Save**.

## Update General Info for an Identity Store

You can change the display name for an identity store, add a description for it, change the service
account credentials to connect to the identity provider, and update any other information you
provided while creating it.

**To update the info:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. On the **Identity Store Details** page, update the required information on the **General** tab.  
   This page differs by provider. Refer to the steps for creating the respective provider in the
   [Create an Identity Store](/docs/directorymanager/11.0/signin/identitystore/create.md)
   topic for more information.
4. Click **Save**.

## Exclude an Active Directory Domain from Replication

By default, GroupID replicates the domain specified for the identity store and its child domains.
You can exclude a domain or a child domain from replication, in which case the Replication service
will not replicate it. See the
[Elasticsearch and Replication ](/docs/directorymanager/11.0/signin/replication/overview.md)
topic.

You can still create and manage objects in an excluded domain using GroupID.

**To exclude a domain:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. On the **Identity Store Details** page, click the **Connection** tab.
4. In the **Excluded Domains** areas, select the check boxes for the domains you want to exclude
   from replication.  
   To select all domains, select the check box in the header area.
5. Click **Save**.

## Set DC Priority for an Active Directory Identity Store

You can select a domain controller in an Active Directory domain to work with GroupID. Data service
and Replication service will connect to this domain controller to perform their respective
operations in the domain. In this way, you can ensure that the selected domain controller is always
available with minimum downtime.

To understand how the DC priority function works, let’s assume the following:

- gene.local is your parent domain with two child domains.
- You have four domain controllers in the parent domain: DC_N, DC_S, DC_E, and DC_W.
- You also have two domain controllers in each of the two child domains.

You can set a separate DC priority list for the parent domain and each of the child domains.

To create a DC priority list for a domain, list the domain controllers in the order of priority.
Let’s say you set priority for the parent domain as:

Priority 1:     DC_E  
Priority 2:    DC_S  
DC_N and DC_W are not included in your priority list.

When the Data service restarts for reasons such as IIS restart, it does the following:

- The Data service attempts to connect to the first domain controller in the priority list, i.e.,
  DC_E.
- If DC_E is not available, the Data service attempts to connect to the second domain controller in
  the priority list, i.e., DC_S.
- If DC_S is not available either, the Data service will resort to the normal lookup process.

Normal lookup process for Data service

Data service makes a connection with a domain controller through the System.DirectoryServices API.
It sends a request to the API, which, in turn, connects to any domain controller in the domain. In
this way, Data Service communicates with the domain controller to perform the required function.

System.DirectoryServices does not evaluate the domain controller in the DC priority list for
creating a connection. Hence, in the above example, the API will connect to DC_N or DC_W.

“Server Not Operational” error

When Data service connects to a domain controller (say DC_E), it caches the domain logon information
and uses it to create all subsequent sessions with the domain controller. Hence it does not iterate
on the DC priority list every time it has to create a session.

In case DC_E is down, the ‘Server Not Operational” error will be displayed in GroupID. It indicates
that Data service has lost connection with the domain and needs to re-establish a connection.

To resolve the error, restart IIS. In this way, Data service will make a connection again using the
process discussed above. It will connect to a different domain controller and cache the domain logon
information (and continue to make a session with this domain controller unless Data service is
restarted).

DC priority and Replication

Every time the Replication service is triggered, it consults the DC priority list to connect to a
domain controller for replication. If it is unable to connect to any domain controller in the
priority list, it reverts to the normal lookup process to connect to a domain controller in the
domain.

In a nutshell

- If DC priority is defined for a domain, Data service and Replication service will connect to a
  domain controller in the domain using the defined DC priority list. If no domain controller in the
  list is available, the services will rely on the normal lookup process to connect to a domain
  controller in the domain.
- If DC priority is not defined for a domain, Data service and Replication service will connect to
  it using the normal lookup process.

**To set DC priority for a domain:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. On the **Identity Store Details** page, click the **Connection** tab. The **DC Priority** area
   displays two options:

    - **Set default priority:** This tile is selected by default and indicates that no DC priority
      is set for the identity store domain. As a result, Data service and Replication service will
      connect to it using the normal lookup process.
    - **Choose my own priority:** Select this tile to set a DC priority list for the identity store
      domain and its child domains, if any.

4. On selecting the **Choose my own priority** tile, the following fields are displayed:

    1. **Select Domain:** This drop-down list displays the identity store domain and its child
       domains, if any. Excluded domains are not listed. Select a domain to define a DC priority
       list for it.  
       Note that each domain in the list has either _Priority set_ or _Default Priority_ displayed
       next to it.

        - _Priority set:_ indicates that DC priority has been defined for the domain, even if it is
          set for one DC and not for all DCs in the domain.
        - _Default Priority:_ indicates that priority has not been set for any DC in the domain.

    2. The table displays the domain controllers in the selected domain. The **DC Name** column
       displays the name of the DC while the **Priority** column displays the priority assigned to
       it, with ‘1’ being the highest priority. When no priority is assigned to a DC, _Not set_ is
       displayed for it.  
       You can choose to assign priority to selected DCs in the domain. For example, if a domain has
       4 DCs, you can set priority for two and leave the rest.

        - To assign priority to a domain controller, click **Set priority** for it. The **Priority**
          column displays the priority assigned to it. To revoke priority, click **Reset priority**.
        - To change the priority for a DC, click in the row, hold down the left mouse button, and
          drag to change its position in the list. By default, "1" is assigned as priority to the
          first DC in the list, followed by '2' to the second DC in the list, and so on.
        - To revoke priority for all DCs in the domain, click **Reset all to default**. With this,
          _Default Priority_ is displayed next to the domain in name in the **Select Domain**
          drop-down list.

5. Click **Save**.

NOTE: When you change the DC priority for a domain or a child domain, it takes effect instantly.
Data service reestablishes a connection with a DC based on new priority.

## Delete an Identity Store

You can delete an identity store with all its configurations. As a result, GroupID cannot be
connected to that identity store, nor can it be used in a Synchronize job.

NOTE: You cannot delete an identity store that has been linked to another identity store. You must
first delete the link(s) before deleting the identity store.

**To delete an identity store:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Delete**.

**See Also**

- [Identity Stores](/docs/directorymanager/11.0/signin/identitystore/overview.md)
- [Configure an Identity Store](/docs/directorymanager/11.0/signin/identitystore/configure/configure.md)
- [Replication Service](/docs/directorymanager/11.0/signin/service/replicationservice.md)
