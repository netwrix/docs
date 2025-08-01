---
title: "All Requests"
description: "All Requests"
sidebar_position: 20
---

# All Requests

Use **All Requests** node to view workflow requests generated by enterprise users. The view displays
pending requests only.

You can click a column header to sort the requests by that attribute. For each request, you can view
the description, approver(s), requester name, the target to change, status, date the request was
made on, and the reason why that request was denied. Expand a request to view more details, such as
the field changed along with its old and new value.

What do you want to do?

- [Approve a request](#approve-a-request)
- [Deny a request](#deny-a-request)
- [ReRoute a request ](#reroute-a-request)
- [Filter requests](#filter-requests)

## Approve a request

1. On the left navigation bar, click **Requests**. Then click the **All Requests** tab to view the
   workflow requests that are pending for approval.

    You can expand a request to view its details.

2. Select a request and click **Approve Requests** to approve it.

    GroupID will process the request and execute the changes.

## Deny a request

1. On the left navigation bar, click **Requests**. Then click the **All Requests** tab to view the
   workflow requests that are pending for approval.

    You can expand a request to view its details.

2. Select the request you want to deny, type the reason for denial and click **Deny Request**.

    GroupID will not perform any action and no changes will be made.

## ReRoute a request

To reroute a request to a different approver, follow these steps:

1. On the left navigation bar, click **Requests**. Then click the **All Requests** tab to view the
   workflow requests that are pending for approval.

    You can expand a request to view its details.

2. Select the request you want to reroute, click **ReRoute**.
3. On the **Reroute Workflow Request** wizard, select one of the following:

    - Manager of User
    - Manager and Additional Manager of User
    - Other

        Search the any user and select them from the search list.

4. Click **Reroute** to close the wizard.

## Filter requests

1. On the **Requests** page, use the following areas to specify a criterion for filtering the
   requests' list.

    - Requesters
    - Approvers
    - Date
    - Actual Approver / Denier
    - Target Object
    - Request Status

2. From **Requesters** list, select an option:

    - **All:** view requests requested by all the users.
    - **Custom:** view requests requested by specific users mentioned in **Custom Requesters** box.

3. From **Approvers** list, select an option:

    - **All:** view requests approved by all the users.
    - **Custom:** view requests approved by specific users mentioned in **Custom Approvers** box.

4. Use the **Date** list to specify the duration you want to view the requests for.

    - All
    - Today
    - Yesterday
    - Last 7 Days
    - Last 30 Days
    - Last 90 Days

        Requests that are initiated in the given period will be displayed.

5. From **Actual Approver/Denier** list, select an option:

    - **All:** view requests approved/denied by all the users.
    - **Custom:** view requests approved/denied by specific users mentioned in **Custom Actual
      Approvers/Deniers** box.

6. From **Target Object** list, select an option:

    - **All:** view requests related to all types of objects.
    - **Custom:** view requests related to specific objects mentioned in **Custom Target Object**
      box.

7. From the **Request status** list, select an option:

    - **Pending**: view requests that are pending for you to approve or deny.
    - **Approved**: view requests that you have approved.
    - **Denied**: view requests that you have denied.
    - **All**: view all pending, approved, and denied requests.

8. To add more filters, click **Add Filter**.
9. From the **Select a filter** list, select any of the following to search relevant requests:

    - Description
    - Workflow Event
    - Workflow Type

10. Two more boxes get displayed next to **Select a filter** box upon selecting a filter.

    - **Select an Operator**: select the operator from that is relevant to your filter.
    - **Select a Value**: Specify the value for the selected operator in the first box.

11. Click **Apply**.

    Workflow requests matching the specified criteria are displayed.

12. Click **Reset Filter** to remove the filters that you have added.

    All the workflow request will be displayed below.

**See Also**

- [Requests](/docs/directorymanager/11.0/welcome/request/overview.md)
- [My Requests](/docs/directorymanager/11.0/welcome/request/myrequest.md)
- [Request Inbox](/docs/directorymanager/11.0/welcome/request/pending.md)
