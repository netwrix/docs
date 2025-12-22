---
title: "Access Requests Interface"
description: "Access Requests Interface"
sidebar_position: 10
---

# Access Requests Interface

The Access Requests interface opened by the **Access Requests** button on the Access Information
Center Home page is where Request Administrators manage the Self-Service Access Requests workflow.
The interface has two tabs:

- Pending Requests Tab – View pending requests and send reminders to owners
- Request History Tab – View the audit trail of processed requests

For both tabs the interface also includes:

- Daily Requests line graph
- Resource Types Status donut graph

## Pending Requests Tab

The Pending Requests tab in the Access Requests interface displays information for pending requests
that are awaiting an owner response.

![Access Requests interface Pending Requests tab](/images/accessinformationcenter/12.0/accessrequests/interfacepending.webp)

The information displayed in the table includes:

- Request Time – Date timestamp when the request was submitted
- Request ID – Numerical sequential identifier for the request
- Trustee Name – Name of the domain user requesting access
- Trustee Account – sAMAccountName associated with the domain user who is requesting access, as read
  from Active Directory
- User Title – Position in the company for the domain user who is requesting access, as read from
  Active Directory
- User E-Mail – Email address for the domain user who is requesting access, as read from Active
  Directory
- User Department – Company department for the domain user who is requesting access, as read from
  Active Directory
- User Employee ID – Unique identifier for the domain user who is requesting access, as read from
  Active Directory
- Access – Level of access requested. Possible values include:

    - For file system and SharePoint resources: Full Control, Modify, or Read
    - For groups and distribution lists: Membership

- Expiration – If the access is temporary, shows the expiration date:

    - When a user has temporary access already granted to a resource, and then requests a different
      type of access to the same resource with a different expiration date, once the new access is
      granted, the new expiration date supersedes the old date.

- Notes – Icon indicates a Note has been added. Click on the icon to read the attached note(s).
- Resource Name – The icon indicates the type of resource. The resource name includes its location,
  such as the UNC path for a file system resource, the URL for SharePoint resource, or Group name
  (e.g., [Domain]\[Group]).
- Resource Description – Description or explanation of the resource as supplied by either the
  Ownership Administrator or the assigned owner
- Request Status – Icon indicating the status of the request
- Reviewer Name – Name of the owner who has a pending request, as read from Active Directory
- Reviewer Account – sAMAccountName associated with the owner who has a pending request, as read
  from Active Directory
- Reviewer Title – Position in the company for the owner who has a pending request, as read from
  Active Directory
- Reviewer E-Mail – Email address for the owner who has a pending request, as read from Active
  Directory
- Reviewer Department – Department in the company of the owner who has a pending request, as read
  from Active Directory
- Reviewer Employee ID – Unique identifier for the owner who has a pending request, as read from
  Active Directory

The table data grid functions the same way as other table grids. See the
[Data Grid Features](/docs/accessinformationcenter/12.0/admin/navigate/datagrid.md) topic for additional information.

The buttons at the bottom enable you to perform the following actions:

![Pending Requests tab buttons](/images/accessinformationcenter/12.0/accessrequests/interfacependingbuttons.webp)

| Button         | Description                                                                                                                                                                                                              |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Send Reminders | Opens the Sending Reminder window, which displays the status of the notification action. The action sends email reminders to owners with pending requests. Click **OK** to close the window once the status is complete. |
| View Notes     | Opens the View Notes window for the selected request. Clicking on the Notes icon in the table will also open the View Notes window. Click **OK** to close the window.                                                    |
| Cancel         | Opens the Cancel Request wizard. See the [Cancel Request Wizard](/docs/accessinformationcenter/12.0/accessrequests/interface/cancel.md) topic for additional information.                                                                                                     |

## Request History Tab

The Request History tab in the Access Requests interface displays information for processed
requests.

![Access Requests interface Request History tab](/images/accessinformationcenter/12.0/accessrequests/interfacehistory.webp)

The information displayed in the table includes:

- Request Time – Date timestamp when the request was submitted
- Request ID – Numerical sequential identifier for the request
- Trustee Name – Name of the domain user who requested access
- Trustee Account – sAMAccountName associated with the domain user who requested access, as read
  from Active Directory
- User Title – Position in the company for the domain user who requested access, as read from Active
  Directory
- User E-Mail – Email address for the domain user who requested access, as read from Active
  Directory
- User Department – Company department for the domain user who requested access, as read from Active
  Directory
- User Employee ID – Unique identifier for the domain user who requested access, as read from Active
  Directory
- Source – Origin of the request or change:
    - Owner means access was changed by the owner through ad hoc changes
    - User means a request was submitted by a domain user
- Access – Level of access requested. Possible values include:

    - For file system and SharePoint resources: Full Control, Modify, or Read
    - For groups and distribution lists: Membership

- Expired – If the access is temporary, shows when the access is expired:

    - If an expiration date is superseded by another request, the previous access type will show a
      different icon (purple ticket), the tooltip indicates that another request changed the access.
      In the case that an owner removes a user’s access through ad hoc changes before the expiration
      date, the removed access will show the superseded icon.

- Expiration – If the access is temporary, shows the expiration date:

    - When a user has temporary access already granted to a resource, and then requests a different
      type of access to the same resource with a different expiration date, once the new access is
      granted, the new expiration date supersedes the old date.

- Notes – Icon indicates a Note has been added. Click on the icon to read the attached note(s).
- Resource Name – The icon indicates the type of resource. The resource name includes its location,
  such as the UNC path for a file system resource, the URL for SharePoint resource, or Group name
  (e.g., [Domain]\[Group]).
- Resource Description – Description or explanation of the resource as supplied by either the
  Ownership Administrator or the assigned owner
- Response Time – Date timestamp when the request was processed
- Decision – Decision made by the owner on the request: Accepted (green check mark), Declined (red
  x), or Canceled (orange circle with slash)
- Reviewer Name – Name of the owner who processed the request, as read from Active Directory
- Reviewer Account – sAMAccountName associated with the owner who processed the request, as read
  from Active Directory
- Reviewer Title – Position in the company for the owner Position in the company for the owner
- Reviewer E-Mail – Email address for the owner who processed the request, as read from Active
  Directory
- Reviewer Department – Department in the company of the owner who processed the request, as read
  from Active Directory
- Reviewer Employee ID – Unique identifier for the owner who processed the request, as read from
  Active Directory

The table data grid functions the same way as other table grids. See the
[Data Grid Features](/docs/accessinformationcenter/12.0/admin/navigate/datagrid.md) topic for additional information.

The buttons at the bottom enable you to perform the following actions:

![Request History tab buttons](/images/accessinformationcenter/12.0/accessrequests/interfacehistorybuttons.webp)

| Button       | Description                                                                                                                                                           |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| View Changes | Opens the Changes window to view all access changes for the selected trustee. See the [Changes Window](/docs/accessinformationcenter/12.0/accessrequests/interface/changes.md) topic for additional information.           |
| View Notes   | Opens the View Notes window for the selected request. Clicking on the Notes icon in the table will also open the View Notes window. Click **OK** to close the window. |
