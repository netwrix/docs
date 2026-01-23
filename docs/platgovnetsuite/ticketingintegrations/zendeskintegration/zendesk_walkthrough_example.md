---
title: "Zendesk Walkthrough Example"
description: "Zendesk Walkthrough Example"
sidebar_position: 10
---

# Zendesk Walkthrough Example

This walkthrough is one example based on our test account. You must
[install and configure](/docs/platgovnetsuite/ticketingintegrations/zendeskintegration/zendesk_integration.md) the Zendesk integration, prior to using this
walkthrough.

:::note
Alerts and notifications may occur during this walkthrough, and are not included in these steps. For
example, override alert, notifications for approvers, and notification for the change request.
:::

The walkthrough demonstrates these steps:

- Create a Zendesk Ticket
- Create the Change Request

## Create a Zendesk Ticket

1. Login in to your Zendesk dashboard.
2. Open your **Views**.

    ![Open the Zendesk Views](/images/platgovnetsuite/integrations/zendesk_views.webp)

3. Click **+ Add** > **Ticket**.

    ![Add a ticket](/images/platgovnetsuite/integrations/zendesk_add_ticket.webp)

4. Enter your information for the **Ticket**:

    - **Requester**: start typing the name of the requester. Matching names are displayed. Click **+
      Add user** to add a new user.
    - **Select Assignee**: assignees are added as users or groups.
        - Click **take it** to assign it to yourself.
        - Start typing a user name and pick from one of the matches. User names are listed by group.
        - Expand the drop down and open a group. Select a user or assign it to the group.
    - **Followers**: add users to follow this ticket.
        - Click **follow** to add yourself.
        - Start typing a user name and pick from one of the matches.
    - **Tags**: enter any tags, separated by commas.

5. Enter the ticket **Subject** and details. You can set either **Public reply** and send email to
   other users, or select **Internal note** to add the info to the ticket without sending email. You
   can also **Apply macro** if applicable.

:::note
The app information is not available until the ticket is created.
:::

6. Click **Submit as New**.

    ![New ticket in the Ticket view](/images/platgovnetsuite/integrations/zendesk_ticket_view.webp)

## Create the Change Request

Open your new Zendesk ticket. **Test Ticket** in this example.

:::note
If you do not see the app, make sure the Apps are toggled on using the Apps icon
![Zendesk Apps visibility icon](/images/platgovnetsuite/integrations/zendesk_apps_icon.webp)
and verify you are a member of a group or role
[authorized to access the app](/docs/platgovnetsuite/ticketingintegrations/zendeskintegration/zendesk_integration.md).
:::

![The Platform Governance app is available after you create the ticket.](/images/platgovnetsuite/integrations/zendesk_platform_governance_app_ticket.webp)

### Use Bundles for the Scope of Change

Specify a Bundle to use a bundle for the scope of change. This is optional.

1. Expand the drop down.
2. Enter the Bundle ID.
3. Click + to add the bundle. 232111 in this example. You can remove a bundle using the drop down
   toggle.

    ![Specify an optional Bundle ID](/images/platgovnetsuite/integrations/zendesk_bundleid.webp)

Once you have made a change, the **Request Approval** button is available if you are a member of a
group with the [Set up Approvals](zendesk_integration.md#set-up-approvals) permission.

![Request Approval button appears when a change has been made.](/images/platgovnetsuite/integrations/zendesk_request_approval.webp)

### Add Existing Customizations

Existing Customizations can be added to the change request with the **Look up Customization**
feature.

1. Click **Look up Customization**.

    ![Add customizations to the Change Request](/images/platgovnetsuite/integrations/zendesk_lookup_customization.webp)

2. Enter the search information in one or more of the available filters. For example, enter **new**
   for **Name** and select **Body Field** for **Type** to search for all body fields containing the
   word **new**.
3. Click **Lookup**.
4. Select one or more customizations to attach to the change request.

    ![Select one or more customizations.](/images/platgovnetsuite/integrations/zendesk_select_customizations.webp)

5. Click **Add selected Customizations**.

There is an options menu available for each added customization. Options include **Remove** and
**ERD**. Selecting **ERD** launches the
[Entity Relationship Diagram](/docs/platgovnetsuite/customization/using_erd.md) for the customization.

### Add Proposed Customizations

1. Click **Add Proposed Customization**.

    ![Add a Proposed Customization](/images/platgovnetsuite/integrations/zendesk_proposed_customization.webp)

2. Select a **Type** and input your proposed customization's script ID.
3. Click **Add Proposed Customization**.

    ![Proposed Customizations](/images/platgovnetsuite/integrations/zendesk_proposed_custs_sample.webp)

There is an options menu available for each added proposed customization. Click options to **Remove**
the customization.

### Need Help?

If you encounter any issues or need assistance, contact 
support at this [link](https://www.netwrix.com/support.html).
