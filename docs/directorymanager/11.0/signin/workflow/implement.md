---
title: "Implement Workflows"
description: "Implement Workflows"
sidebar_position: 10
---

# Implement Workflows

To create a workflow, you have to specify the following:

- **Object** - the object(s) - user, contact, group - to apply the workflow to.
- **Event** - a create, edit, or delete event that, when performed for the object(s), would trigger
  the workflow.
- **Field** - one or more fields (attributes) that the workflow would apply to. When the values of
  these attributes change for the object, an approval request is triggered.
- **Filter** - a condition that prevents the workflow from triggering, even when the _object_,
  _event_, and _field_ criterion is met.
- **Approver** - the object to send the workflow request for approval.

As additional workflow features, you can also:

- Enable workflow approver acceleration
- Link a workflow with a Microsoft Power Automate flow

**Workflow example:**

Consider a workflow where:

- Object: Group
- Event: Edit
- Field: criteria
- Approver: Group owner

It implies that when a user edits the values stored in the _criteria_ attribute of a group, a
workflow request is sent to the group owner, who is the workflow approver. Changes are applied after
the request is approved.

But if you add a filter as:

|               |            |         |
| ------------- | ---------- | ------- |
| Field         | Condition  | Value   |
| employee Type | Not Equals | manager |

It implies that when a manager edits the value of the _criteria_ attribute, the change is effective
immediately and this workflow does not apply. When a non-manager user changes the value of the
attribute, it triggers the workflow.

What do you want to do?

- [View the Workflows](#view-the-workflows)
- [Create a New Workflow](#create-a-new-workflow)
- [Link a Workflow to a Power Automate Flow](#link-a-workflow-to-a-power-automate-flow)
- [Modify a Workflow](#modify-a-workflow)
- [Enable or Disable a Workflow](#enable-or-disable-a-workflow)
- [Delete a User-defined Workflow](#delete-a-user-defined-workflow)

## View the Workflows

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Workflows** under **Settings** in the left pane. On the **Configure Workflows** tab of
   the **Workflows** page, the following information is displayed for a workflow:

    | Label       | Description                                                                                                                                                                                  |
    | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Enable      | Shows whether a workflow is enabled or disabled. Use the toggle button next to a workflow to enable or disable it.                                                                           |
    | Type        | A workflow has one of these types: - **System:** workflows that are defined by default for an identity store. - **User Defined:** workflows that are defined by users for an identity store. |
    | Name        | A descriptive name for a workflow that identifies the action the workflow audits.                                                                                                            |
    | Object(s)   | The directory object(s) the workflow applies to.                                                                                                                                             |
    | Approver(s) | The approver(s) specified for a workflow. Approver(s) are responsible for approving or denying the requests generated for the workflow.                                                      |
    | Event       | The event that triggers a workflow.                                                                                                                                                          |

4. You can perform the following actions:

    - Click **Add Workflow** to create a new workflow for the identity store.
    - Click the ellipsis button for a workflow and select **Edit** to update workflow details, such
      as approvers, filters, and fields.

## Create a New Workflow

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Workflows** under **Settings** in the left pane.
4. On the **Configure Workflows** tab of the **Workflows** page, click **Add Workflow** in the top
   right corner.
5. On the **Create Workflow** page, enter a name for the workflow In the **Name** box.
6. Select one or more objects (User, Contact, Group) to apply the workflow to.
7. In the **Events** drop-down list, select the event (Create, Edit, Delete) that will trigger the
   workflow.

    NOTE: (1) For the Create event, you can define only one workflow for an object.  
     (2) A workflow for the Group object with the Delete event will be triggered when the group is
    manually deleted.

8. Select the **Mail Approval** check box to enable the approver to approve or deny a workflow
   request from within the workflow email notification. These notifications contain the **Accept**
   and **Deny** buttons. On clicking any of these, the approver is redirected and auto-authenticated
   on the GroupID portal, where he or she can approve or deny the request.  
   When this check box is not selected, the **Accept** and **Deny** buttons are not available in the
   email notifications. Approvers have to sign into the GroupID portal or the GroupID mobile app to
   manage workflow requests.
9. The **Approver Acceleration** check box applies if approver acceleration is enabled for the
   identity store. See the
   [Apply Approver Acceleration](/docs/directorymanager/11.0/signin/workflow/approveracceleration.md#apply-approver-acceleration)
   topic.

    - To apply approver acceleration to this workflow, select the **Approver Acceleration** check
      box.
    - To exempt this workflow from approver acceleration, clear this check box.

10. Enter a brief description for the workflow in the **Description** box.
11. In the **Portal URL** drop-down list, select a GroupID portal URL to include in the workflow
    email notifications. The URL will redirect the recipients to the portal for taking action on a
    request, such as approve or deny it.  
    The list contains URLs of GroupID portals linked with the identity store.
12. Click **Add Approver(s)** in the **Approver(s)** section to select the users and groups to
    approve the requests generated for this workflow: The **Add Approver(s)** dialog box is
    displayed.

    1. Fields on the **Add Approver(s)** dialog box vary, depending on the object and event
       selected. Then select one or more of the available options:

        | Option                                             | Available For                                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
        | -------------------------------------------------- | -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
        | Owner of the Group                                 | _Edit_ and _delete_ events of the _Group_ object               | Select it to specify the group’s primary owner as the request approver.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
        | Owner and Additional Owner of the Group            | _Edit_ and _delete_ events of the _Group_ object               | Select it to specify the group’s primary and additional owners as the request approvers.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
        | Manager of User                                    | _Edit_ and _Delete_ events of the _User_ and _Contact_ objects | Select it to specify the user’s or contact’s primary manager as the request approver.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
        | Manager and Additional Manager of User             | _Edit_ and _Delete_ events of the _User_ and _Contact_ objects | Select it to specify the user’s/contact’s primary and additional managers as the request approvers.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
        | Search Container Include Sub-Containers Search box | For all objects and events                                     | You can specify one or more users and groups as approvers. In case of a group, all its members are set as approvers. Specify a container to search for the desired object(s); then perform a search to locate and select the object. - Click the down arrow in the **Search Container** box and select a container to limit the search scope to it. - Select the **Include Sub-Containers** check box to include the sub-containers within the selected container to search for the object. - Enter a search string in the search box; objects starting with the string are displayed as you type. Click **Add** for an object to select it. You can also perform an advanced search to locate the object. Click **Advanced** in the search box and use the search fields to enter a search string. On clicking **Search**, objects matching the string are displayed. Select the user or group you want to add as approver. |

    2. Click **Add** to close the **Add Approver(s)** dialog box.

13. Use the **Filters** section to specify a criterion; anything beyond that criterion will not
    trigger the workflow. For example, when you define the following filter:

    Object: Group  
    Event: Delete  
    Filter: groupType = Security  
    This workflow will trigger when a security group is deleted. However, when a group object with
    type other than ‘Security’ is deleted, this workflow will not trigger.

    1. In the **Filter(s)** section, click **Add Filter(s)**. The **Add Filter** dialog box is
       displayed.
    2. Select a schema attribute from the _field_ list.
    3. Select an operator to evaluate the attribute from the _operator_ list.

        - **Present** - returns objects that have a value specified for the attribute.
        - **Not Present** - returns objects that do not have a value specified for the attribute.
        - **Equals** - returns objects when the attribute value exactly matches the text you specify
          in the value box.
        - **Not Equals** - returns objects when the attribute value does not match the text you
          specify in the value box.

    4. Enter a value in the _value_ box (not case-sensitive). This box is not available for the
       _Present_ and _Not Present_ operators, which are not comparison operators.
    5. Click **Add** to close the **Add Filter** dialog box.

14. Use the **Field(s)** section to specify the fields (attributes) that you want to apply the
    workflow to. For example, when you define a workflow as:

    Object: User  
    Event: Edit  
    Filter: Department = IT  
    Field: Email  
    This workflow will trigger when the Email field for a user object with department set to IT is
    edited. It will not be triggered when the Email field is edited for a user that does not belong
    to the IT department, or when a field other than Email is edited for a user in the IT
    department.

    1. To add a field, click **Add Field(s)** in the **Field(s)** section.
    2. On the **Add Fields** dialog box, select the check box for a field to add it to the workflow
       and click **Add**.

    NOTE: The **Field(s)** section is not available when _Create_ is selected in the **Events**
    drop-down list.

15. By default, the workflow is enabled, as indicated by the **Enabled** toggle button at the top of
    the page. If required, use the toggle button to disable it.
16. Click the **Create Workflow** button on the **Create Workflow** page to create the workflow.
17. Click **Save** on the **Workflows** page.

## Link a Workflow to a Power Automate Flow

You can define Power-Automate settings for a workflow to link that workflow to a Power Automate
flow.

These settings enable you to connect to Power Automate from within a workflow (say Workflow1) and
create a basic flow template there. On providing the URL of the flow template in Workflow1, the two
are linked. As a result, the flow auto triggers when the GroupID workflow is triggered.

For details on linking a workflow to a flow, see the
[Trigger a Flow from GroupID](/docs/directorymanager/11.0/signin/workflow/integrate.md#trigger-a-flow-from-groupid)
topic.

## Modify a Workflow

Workflows for an identity store are differentiated by their type. Predefined workflows (also called
system workflows), by default, are displayed at the top; user-defined workflows follow.

You can update all details for a user-defined workflow. A system workflow, however, can be modified
to a limited extent. You can only update the approvers, enable/disable mail approval, enable/disable
approver acceleration, and link it to a Power Automate flow.

**To modify a workflow:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Workflows** under **Settings** in the left pane.
4. On the **Configure Workflows** tab of the **Workflows** page, click the ellipsis button for a
   workflow and select **Edit**.
5. The **Edit Workflow** page is displayed. Follow steps 5-15 in the
   [Create a New Workflow](#create-a-new-workflow) topic to update the required information.
6. To link this workflow to a Power Automate flow, click **Power Automate Settings** in the top
   right corner; the **Power Automate Settings** dialog box is displayed. Follow step 6 and onwards
   in the
   [Link an Identity Store Workflow to a Flow](/docs/directorymanager/11.0/signin/workflow/integrate.md#link-an-identity-store-workflow-to-a-flow)
   topic to complete the task.
7. After making the required changes, click **Update Workflow** on the **Edit Workflow** page to
   save the settings.
8. Click **Save** on the **Workflows** page.

## Enable or Disable a Workflow

Workflows in an identity store can be disabled to prevent them from triggering.

You can enable or disable a workflow in any of the following ways.

**Method 1:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Workflows** under **Settings** in the left pane.
4. On the **Configure Workflows** tab of the **Workflows** page, use the **Enable** toggle button
   for a workflow to enable or disable it.
5. Click **Save**.

**Method 2:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Workflows** under **Settings** in the left pane.
4. On the **Configure Workflows** tab of the **Workflows** page, click the ellipsis button for a
   workflow and select **Edit**.
5. On the **Edit Workflow** dialog box, use the toggle button in the top left to enable or disable
   the workflow. Then click **Update Workflow**.
6. On the **Workflows** page, click **Save**.

## Delete a User-defined Workflow

Workflows in an identity store can have their type as _System_ or _User Defined_. You can delete
user-defined workflows; system workflows cannot be deleted.

**To delete a workflow:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Workflows** under **Settings** in the left pane.
4. On the **Configure Workflows** tab of the **Workflows** page, click the ellipsis button for a
   user-defined workflow and select **Delete Workflow**.
5. Click **Delete** on the confirmation dialog box.
6. Click **Save**.

**See Also**

- [Workflows](/docs/directorymanager/11.0/signin/workflow/overview.md)
- [Manage Advanced Workflow Settings](/docs/directorymanager/11.0/signin/workflow/advancedsettings.md)
- [Workflow Approver Acceleration](/docs/directorymanager/11.0/signin/workflow/approveracceleration.md)
- [Integrate with Power Automate](/docs/directorymanager/11.0/signin/workflow/integrate.md)
