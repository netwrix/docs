---
title: "Update Smart Group and Dynasty Membership"
description: "Modify a Smart Group or Dynasty query, schedule membership updates, run a manual update, and check Smart Group Update job status in the portal."
keywords:
  - Smart Group update
  - Dynasty update
  - Query Designer policy
  - scheduled job
  - Out of Bounds
  - Background Tasks
sidebar_position: 70
---

# Update Smart Group and Dynasty Membership

When a scheduled job updates a Smart Group or Dynasty, it does the following:

- It runs the query defined for the group. The query retrieves records from the directory, and the group membership is updated with these records.

  If the administrator has defined a Query Designer policy for your role, the group membership is updated as the policy defines. See the [Configure a Query Designer Policy for a Security Role](/docs/directorymanager/11.2/admincenter/securityrole/policy/querydesigner.md) topic for additional information.

  :::note
  Regardless of the records the query returns, the membership of an Office 365 group is updated with user objects only.
  :::

- It updates the values of certain attributes.

  - For a Smart Group, for example, the value of the managedBy attribute is updated for nested groups. These nested groups are created when the Out of Bounds settings are applied at the identity store level.
  - For Dynasties, the administrator can specify certain attributes in Dynasty Settings for an identity store. Values for the selected attributes are passed on from parent to child Dynasties.

    The values of these attributes are updated for child Dynasties on update, depending on the inheritance option set for each Dynasty.

## Update methods

Directory Manager portal provides two methods to update Smart Groups and Dynasties:

- Manual update
- Scheduled update

In both methods, the query defined for the group runs to update membership. In a manual update, you can run the query at any time. Scheduled updates run automatically at a specified frequency.

In Directory Manager portal, you can perform the following functions for Smart Groups and Dynasties.

## Modify the query for a Smart Group/Dynasty

1. In Directory Manager portal, click **Groups** in the left navigation pane, and select **My Groups**.

   The Groups page appears with the **My Groups** tab in view.

   **Or**

   [Search Directory Objects in the Directory Manager Portal](/docs/directorymanager/11.2/portal/generalfeatures/search.md) the group you want to modify the query for.

2. Select the required Smart Group or Dynasty and click **Properties** on the toolbar.
3. Use the [Group properties - Smart Group/Query Designer tab](/docs/directorymanager/11.2/portal/group/properties/smartgroup.md) to view the query defined for the group.

   Click the **Query Designer** button to open the **Query Designer** dialog box, where you can modify the query.

4. Save the changes.

:::note
For an Office 365 group in a Microsoft Entra ID based identity store, group membership is updated with user objects only.
:::

## Schedule periodic membership updates for Smart Groups/Dynasties

You can associate a scheduled Smart Group Update job with a Smart Group/Dynasty. This job runs on a set frequency and updates the group's membership with records fetched by the respective group's query.

Membership update settings defined for the identity store also affect Smart Group and Dynasty membership updates.

1. In Directory Manager portal, click **Groups** in the left navigation pane, and select **My Groups**.

   The Groups page appears with the **My Groups** tab in view.

   **Or**

   [Search Directory Objects in the Directory Manager Portal](/docs/directorymanager/11.2/portal/generalfeatures/search.md) the group you want to associate a Smart Group Update job with.

2. Select the required Smart Group or Dynasty and click **Properties** on the toolbar.

   The group's [View and Edit Group Properties in Directory Manager](/docs/directorymanager/11.2/portal/group/properties/overview.md) page appears.

3. On the **Smart Group/Query Designer** tab, select a Smart Group Update job from the **Scheduled Job** list.

   When this job runs, it updates the group's membership.

   :::note
   The scheduled job updates the group, taking into account the Query Designer policy of the group owner role, if defined.
   :::

4. Save the changes.

## Update the membership of a Smart Group/Dynasty using the Update command

You can manually update a Smart Group or Dynasty at any time by selecting the group and clicking **Update** on the toolbar. This runs the query defined for the group and updates its membership.

Membership update settings defined for the identity store also affect Smart Group and Dynasty membership updates.

1. In Directory Manager portal, click **Groups** in the left navigation pane, and select **My Groups**.
2. On the Groups page, click the **My Groups**, **My Memberships**, or **My Expiring Groups** tab.
3. On the page that appears, select the groups for manual membership update and click **Update** on the toolbar.

   A dialog box shows the progress of the Smart Group Update job.

4. Optional: Click the **Run in Background** button on this dialog box to run the update job in the background.

## View Smart Group Update job status

Use the **Background Tasks** icon in the top right corner to view the status of the Smart Group Update jobs.

- Jobs that are running in the background appear under **In Progress**.
- All jobs that have completed successfully, failed, or been canceled are listed under **Other**.

## Modify the query for a Smart Group/Dynasty created by other role members

If you have the permission to manage any group, you can view and modify the query of an existing or a new Smart Group/Dynasty created by another role member according to the policy defined for your role. You can only modify the group if there is no conflict between your policies and the other role's policies.

Say the administrator has defined the following Query Designer policy for the Administrator role:

- Start In Containers: Entire Directory containers
- Objects: Users, Groups, Contacts
- Default Filter Criteria: None

The administrator has defined the following Query Designer policy for the User role of which you are a member:

- Start In Containers: Users
- Objects: Users
- Default Filter Criteria: Company is Exactly ABC

A member of administrator role has created a Smart Group named QDGroup1.

1. In Directory Manager portal, search for the group whose query you want to view or modify.
2. On the **Properties** page, select the **Smart Group** tab.
3. Click the **Query Designer** button to open the Query Designer dialog box.

   All the options that the administrator has restricted for your role appear as disabled. You can modify the query using the options allowed for your role.

   :::note
   In case of a conflict in the role policies, you can't modify the group. For example:

   - The administrator role member who created the group has defined some settings on the Database tab, but in your role policy the Database tab is hidden. In this case, you can't modify the query of the group.
   - Similarly, if the group was created using the user object and in your role policy the user object isn't available, an error appears upon group update.
   :::
