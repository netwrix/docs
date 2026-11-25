---
title: "Create and Manage Workflows in Directory Manager"
description: "Create, edit, enable, disable, and delete identity store workflows, and set up objects, events, fields, filters, and approvers."
keywords:
  - create workflow
  - workflow approvers
  - workflow filters
  - Directory Manager workflows
  - Power Automate link
  - mail approval
sidebar_position: 10
---

# Create and Manage Workflows in Directory Manager

A workflow sends a change request to an approver before Directory Manager applies the change. To create a workflow, specify the following:

- **Object** - the objects (user, contact, group) to apply the workflow to.
- **Event** - a create, edit, or delete event that triggers the workflow when it happens to the objects.
- **Field** - one or more fields (attributes) that the workflow applies to. When the values of these attributes change for the object, an approval request is triggered.
- **Filter** - a condition that prevents the workflow from triggering, even when the object, event, and field criteria are met.
- **Approver** - the object to send the workflow request to for approval.

You can also enable workflow approver acceleration and link a workflow to a Microsoft Power Automate flow.

**Workflow example:**

Consider a workflow with these settings:

- Object: Group
- Event: Edit
- Field: criteria
- Approver: Group owner

When a user edits the values stored in the criteria attribute of a group, Directory Manager sends a workflow request to the group owner, who is the workflow approver. Directory Manager applies the changes after the approver approves the request.

Now add the following filter:

|               |            |         |
| ------------- | ---------- | ------- |
| Field         | Condition  | Value   |
| employee Type | Not Equals | manager |

When a manager edits the value of the criteria attribute, the change takes effect immediately and this workflow doesn't apply. When a non-manager user changes the value of the attribute, the workflow triggers.

## View the workflows

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Workflows** under **Settings** in the left pane. On the **Configure Workflows** tab of the **Workflows** page, the following information appears for each workflow:

    | Label       | Description                                                                                                                                                                                  |
    | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Enable      | Shows whether a workflow is enabled or disabled. Use the toggle button next to a workflow to enable or disable it.                                                                            |
    | Type        | A workflow has one of these types: <br /><ul><li>**System:** workflows that are defined by default for an identity store.</li><li>**User Defined:** workflows that are defined by users for an identity store.</li></ul> |
    | Name        | A descriptive name that identifies the action the workflow audits                                                                                                             |
    | Objects   | The directory objects the workflow applies to                                                                                                                                              |
    | Approvers | The approvers specified for a workflow. Approvers are responsible for approving or denying the requests generated for the workflow.                                                      |
    | Event       | The event that triggers a workflow                                                                                                                                                           |

4. Take one of these actions:

    - Click **Add Workflow** to create a workflow for the identity store.
    - Click the ellipsis button for a workflow and select **Edit** to update details such as approvers, filters, and fields.

## Create a new workflow

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Workflows** under **Settings** in the left pane.
4. On the **Configure Workflows** tab of the **Workflows** page, click **Add Workflow** in the top right corner.
5. On the **Create Workflow** page, enter a name for the workflow in the **Name** box.
6. Select one or more objects (User, Contact, Group) to apply the workflow to.
7. In the **Events** dropdown list, select the event (Create, Edit, Delete) that triggers the workflow.

    :::note
    (1) For the Create event, you can define only one workflow for an object.  
    (2) A workflow for the Group object with the Delete event triggers when the group is manually deleted.
    :::

8. Select the **Mail Approval** checkbox to let the approver approve or deny a workflow request from the workflow email notification. These notifications contain the **Accept** and **Deny** buttons. When the approver clicks either button, Directory Manager redirects and auto-authenticates the approver to the Directory Manager portal, where the approver can approve or deny the request.

    When this checkbox isn't selected, the **Accept** and **Deny** buttons aren't available in the email notifications. Approvers have to sign in to the Directory Manager portal to manage workflow requests.
9. The **Approver Acceleration** checkbox applies if approver acceleration is enabled for the identity store. See the [Apply Approver Acceleration](approveracceleration.md#apply-approver-acceleration) topic.

    - To apply approver acceleration to this workflow, select the **Approver Acceleration** checkbox.
    - To exempt this workflow from approver acceleration, clear this checkbox.

10. Enter a brief description for the workflow in the **Description** box.
11. In the **Portal URL** dropdown list, select a Directory Manager portal URL to include in the workflow email notifications. The URL redirects the recipients to the portal to take action on a request, such as approving or denying it.

    The list contains URLs of Directory Manager portals linked with the identity store.
12. Click **Add Approvers** in the **Approvers** section to select the users and groups that approve the requests for this workflow. The **Add Approvers** dialog box appears.

    1. The fields on the **Add Approvers** dialog box vary with the object and event you selected. Select one or more of the available options:

        | Option | Available For | Description |
        | --- | --- | --- |
        | Owner of the Group | Edit and delete events of the Group object | Select it to set the group’s primary owner as the request approver. |
        | Owner and Additional Owner of the Group | Edit and delete events of the Group object | Select it to set the group’s primary and additional owners as the request approvers. |
        | Manager of User | Edit and Delete events of the User and Contact objects | Select it to set the user’s or contact’s primary manager as the request approver. |
        | Manager and Additional Manager of User | Edit and Delete events of the User and Contact objects | Select it to set the user’s/contact’s primary and additional managers as the request approvers. |
        | Search Container Include Sub-Containers Search box | For all objects and events | You can specify one or more users and groups as approvers. For a group, all its members become approvers. Specify a container to search, then run a search to locate and select the object. <br /><ul><li>Click the down arrow in the **Search Container** box and select a container to limit the search scope to it.</li><li>Select the **Include Sub-Containers** checkbox to include the sub-containers within the selected container to search for the object.</li><li>Enter a search string in the search box. Objects that start with the string appear as you type. Click **Add** for an object to select it. <br />You can also run an advanced search to locate the object. Click **Advanced** in the search box and use the search fields to enter a search string. When you click **Search**, objects that match the string appear. Select the user or group you want to add as approver.</li></ul> |

    2. Click **Add** to close the **Add Approvers** dialog box.

13. Use the **Filters** section to specify a criterion. Anything beyond that criterion doesn't trigger the workflow. For example, define the following settings:

    Object: Group  
    Event: Delete  
    Filter: groupType = Security  

    This workflow triggers when a security group is deleted. When a group with a type other than ‘Security’ is deleted, the workflow doesn't trigger.

    1. In the **Filters** section, click **Add Filters**. The **Add Filter** dialog box appears.
    2. Select a schema attribute from the field list.
    3. Select an operator to evaluate the attribute from the operator list.

        - **Present** - returns objects that have a value specified for the attribute.
        - **Not Present** - returns objects that don't have a value specified for the attribute.
        - **Equals** - returns objects when the attribute value exactly matches the text you specify in the value box.
        - **Not Equals** - returns objects when the attribute value doesn't match the text you specify in the value box.

    4. Enter a value in the value box (not case-sensitive). This box isn't available for the Present and Not Present operators, which aren't comparison operators.
    5. Click **Add** to close the **Add Filter** dialog box.

14. Use the **Fields** section to specify the fields (attributes) to apply the workflow to. For example, define a workflow with these settings:

    Object: User  
    Event: Edit  
    Filter: Department = IT  
    Field: Email  

    This workflow triggers when the Email field is edited for a user object with the department set to IT. It doesn't trigger when the Email field is edited for a user outside the IT department, or when a field other than Email is edited for a user in the IT department.

    1. To add a field, click **Add Fields** in the **Fields** section.
    2. On the **Add Fields** dialog box, select the checkbox for a field to add it to the workflow and click **Add**.

    :::note
    The **Fields** section isn't available when Create is selected in the **Events** dropdown list.
    :::

15. By default, the workflow is enabled, as the **Enabled** toggle button at the top of the page shows. To disable it, use the toggle button.
16. Click the **Create Workflow** button on the **Create Workflow** page to create the workflow.
17. Click **Save** on the **Workflows** page.

## Link a workflow to a Power Automate flow

You can define Power Automate settings for a workflow to link it to a Power Automate flow.

Use these settings to connect to Power Automate from within a workflow (for example, Workflow1) and create a basic flow template there. When you provide the URL of the flow template in Workflow1, Directory Manager links the two. The flow then triggers automatically when the Directory Manager workflow triggers.

For details, see the [Trigger a Flow from Directory Manager](powerautomate/integrate.md#trigger-a-flow-from-directory-manager) topic.

## Modify a workflow

Workflows for an identity store differ by type. Predefined workflows (also called system workflows) appear at the top by default, and user-defined workflows follow.

You can update all details for a user-defined workflow. For a system workflow, you can only update the approvers, turn mail approval on or off, turn approver acceleration on or off, and link it to a Power Automate flow.

**To modify a workflow:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Workflows** under **Settings** in the left pane.
4. On the **Configure Workflows** tab of the **Workflows** page, click the ellipsis button for a
   workflow and select **Edit**.
5. The **Edit Workflow** page appears. Follow steps 5-15 in the Create a new workflow topic to update the required information.
6. To link this workflow to a Power Automate flow, click **Power Automate Settings** in the top right corner. The **Power Automate Settings** dialog box appears. Follow step [6](/docs/directorymanager/11.1/admincenter/workflow/powerautomate/integrate.md) and onwards in the [Link an Identity Store Workflow to a Flow](powerautomate/integrate.md#link-an-identity-store-workflow-to-a-flow) topic to complete the task.
7. After you make the changes, click **Update Workflow** on the **Edit Workflow** page to save the settings.
8. Click **Save** on the **Workflows** page.

## Enable or disable a workflow

Disable a workflow in an identity store to prevent it from triggering. You can enable or disable a workflow in either of these ways.

**Method 1:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Workflows** under **Settings** in the left pane.
4. On the **Configure Workflows** tab of the **Workflows** page, use the **Enable** toggle button
   for a workflow to enable or disable it.
5. Click **Save**.

**Method 2:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Workflows** under **Settings** in the left pane.
4. On the **Configure Workflows** tab of the **Workflows** page, click the ellipsis button for a
   workflow and select **Edit**.
5. On the **Edit Workflow** dialog box, use the toggle button in the top left to enable or disable the workflow. Then click **Update Workflow**.
6. On the **Workflows** page, click **Save**.

## Delete a user-defined workflow

Workflows in an identity store have the type System or User Defined. You can delete user-defined workflows. You can't delete system workflows.

**To delete a workflow:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Workflows** under **Settings** in the left pane.
4. On the **Configure Workflows** tab of the **Workflows** page, click the ellipsis button for a
   user-defined workflow and select **Delete Workflow**.
5. Click **Delete** on the confirmation dialog box.
6. Click **Save**.
