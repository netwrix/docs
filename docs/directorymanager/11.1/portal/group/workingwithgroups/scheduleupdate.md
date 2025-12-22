---
title: "Scheduled Updates Functions"
description: "Scheduled Updates Functions"
sidebar_position: 70
---

# Scheduled Updates Functions

When a Smart Group or Dynasty is updated using a scheduled job, it involves the following:

- Each Smart Group and Dynasty has a query defined for it. On update, the query retrieves records
  from the directory and group membership is updated with these records.

    If the administrator has defined a Query Designer policy for your role, group membership is
    updated as per the defined policy. See the
    [ Query Designer Policy](/docs/directorymanager/11.1/admincenter/securityrole/policy/querydesigner.md)topic for
    additional information.

    :::note
    Whatever the records returned by the query, the membership of an Office 365 group is
    updated with user objects only.
    :::


- The values of certain attribute(s) is updated.

    - For a Smart Group, for example, the value of the managedBy attribute is updated for nested
      groups. These nested groups are created when the Out of Bounds settings are applied at the
      identity store level.
    - For Dynasties, the administrator can specify certain attributes in Dynasty Settings for an
      identity store. Values for the selected attributes are passed on from parent to child
      Dynasties.

        These attributes’ values are updated for child Dynasties on update, depending on the
        inheritance option set for each Dynasty.

## Update Methods

Directory Manager portal provides different methods to update Smart Groups and Dynasties, namely:

- Manual update
- Scheduled update

In both methods, the query defined for the group is executed to update membership; the difference
being that in manual update, you can execute the query manually any time while scheduled updates run
automatically at a specified frequency.

In Directory Manager portal, you can perform the following functions for Smart Groups and Dynasties.

## Modify the query for a Smart Group/Dynasty

1. In Directory Manager portal, click **Groups** in the left navigation pane, select **My Groups**.

    The Groups page is displayed with the **My Groups** tab in view.

**Or**

    [Directory Search](/docs/directorymanager/11.1/portal/generalfeatures/search.md) the group you want to modify the query for.

2. Select the required Smart Group or Dynasty and click **Properties** on the toolbar.
3. Use the [Group properties - Smart Group/Query Designer tab](/docs/directorymanager/11.1/portal/group/properties/smartgroup.md) to view
   the query defined for the group.

    Click the **Query Designer** button to launch the **Query Designer** dialog box, where you can
    modify the query.

4. Save the changes.

:::note
For an Office 365 group in a Microsoft Entra ID based identity store, group membership is
updated with user objects only.
:::


## Schedule periodic membership updates for Smart Groups/Dynasties

You can associate a scheduled Smart Group Update job with a Smart Group/Dynasty. This job runs on a
set frequency and updates the group's membership with records fetched by the respective group's
query.

Membership update settings defined for the identity store also impact Smart Group and Dynasty
membership update.

1. In Directory Manager portal, click **Groups** in the left navigation pane, select **My Groups**.

    The Groups page is displayed with the **My Groups** tab in view.

**Or**

    [Directory Search](/docs/directorymanager/11.1/portal/generalfeatures/search.md) the group you want to associate a Smart Group Update
    job with.

2. Select the required Smart Group or Dynasty and click **Properties** on the toolbar.

    The group's [Group Properties](/docs/directorymanager/11.1/portal/group/properties/overview.md) page is displayed.

3. On the **Smart Group/Query Designer** tab, select a Smart Group Update job from the **Scheduled
   Job** list.

    When this job runs, it updates the group's membership.

    :::note
    The schedule job will update the group taking into account Query Designer policy of group
    owner role, if defined.
    :::


4. Save the changes.

## Update the membership of a Smart Group/Dynasty using the Update command

You can manually update a Smart Group or Dynasty any time by selecting the group and clicking
**Update** on the toolbar. This executes the query defined for the group and updates its membership.

Membership update settings defined for the identity store also impact Smart Group and Dynasty
membership update.

1. In Directory Manager portal, click **Groups** in the left navigation pane, select **My Groups**
2. On the Groups page, click **My Groups**/**My Memberships**/**My Expiring Groups** tab.
3. On the page displayed, select the groups for manual membership update and click **Update** on the
   toolbar.

    A dialog box is displayed, that shows the progress of the Smart Group Update job.

4. You can click the **Run in Background** button on this dialog box to run the update job in the
   background.

## View Smart Group Update job status

Use the **Background Tasks** icon in the top right corner to view the status of the Smart Group
Update jobs.

- Jobs that are currently running in the background are displayed under **In Progress**.
- All jobs that have completed successfully, failed or canceled are listed under **Other**.

## Modify the query for a Smart Group/Dynasty created by other role members

If you have the permission to manage any group, you can view and modify the query of an existing or
a new Smart Group/Dynasty created by other role member according to the policy defined for your
role. You can only modify the group if there is no conflict between yours and other role's policies.

Let’s say the administrator has defined the following Query Designer policy for the Administrator
role:

- Start In Containers: Entire Directory containers
- Objects: Users, Groups, Contacts
- Default Filter Criteria: None

The administrator has defined the following Query Designer Policy for the User role of which you are
a member of:

- Start In Containers: Users
- Objects: Users
- Default Filter Criteria: Company is Exactly ABC

A member of administrator role has created a Smart Group named QDGroup1.

1. In Directory Manager portal, you search this group query of which you want to view or modify.
2. On the **Properties** page, select the **Smart Group** tab.
3. Click the **Query Designer** button to open the Query Designer dialog box.

    All the options that the administrator has restricted for your role appear as disabled. You can
    modify the query using the options allowed for your role.

    Please note in case of a conflict in the role policies, you cannot modify the group. For
    example:

    - the administrator role member who created the group has defined some settings on the Database
      tab but in your role policy the Database tab is hidden, in this case, you will not be able to
      modify the query of the group.
    - Similarly, if the group has been created using the user object and in your role policy the
      user object is not available, upon group update an error will be displayed.
