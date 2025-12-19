---
title: "Request History Page"
description: "Request History Page"
sidebar_position: 20
---

# Request History Page

The Request History page in the Your Access portal is where you can view the status of previously
submitted requests, both pending and processed.

![Your Access portal Request History page](/images/accessinformationcenter/12.0/accessrequests/youraccessportal/requesthistory.webp)

The information displayed in the table includes:

- Request Time – Date timestamp when the request was submitted
- Source – Origin of the request or change:

    - User means you submitted the request
    - Owner means the resource owner made the change outside of the Self-Service Access Requests
      workflow

- Access – Level of access requested. Possible values include:

    - For file system and SharePoint resources: Full Control, Modify, or Read
    - For groups and distribution lists: Membership

- Expiration – If the access is temporary, shows the expiration date:

    - When a user has temporary access already granted to a resource, and then requests a different
      type of access to the same resource with a different expiration date, once the new access is
      granted, the new expiration date supersedes the old date.

- Expired – If the access is temporary, shows when the access is expired:

    - If an expiration date is superseded by another request, the previous access type will show a
      different icon (purple ticket), the tooltip indicates that another request changed the access.
      In the case that an owner removes a user’s access through ad hoc changes before the expiration
      date, the removed access will show the superseded icon.

- Notes – Icon indicates a Note has been added. Click on the icon to read the attached note(s).
- Resource Name – The icon indicates the type of resource. The resource name includes its location,
  such as the UNC path for a file system resource, the URL for SharePoint resource, or Group name
  (e.g., [Domain]\[Group]).
- Resource Description – Description or explanation of the resource as supplied by either the
  Ownership Administrator or the assigned owner
- Response Time – Date timestamp when the request was processed
- Decision – Decision made by the owner on the request: Accepted (green check mark), Declined (red
  x), or Canceled (orange circle with slash). A clock icon indicates the request is still pending.
- Reviewer Name – Name of the owner who processed the request, as read from Active Directory
- Reviewer Title – Position in the company for the owner who processed the request, as read from
  Active Directory
- Reviewer E-Mail – Email address for the owner who processed the request, as read from Active
  Directory
- Reviewer Department – Department in the company of the owner who processed the request, as read
  from Active Directory

The buttons below the table enable you to perform the following actions:

![Request History page buttons](/images/accessinformationcenter/12.0/accessrequests/youraccessportal/requesthistorybuttons.webp)

| Button     | Description                                                                                                                                                                                 |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cancel     | Opens the Cancel Request window. This button is only enabled for a selected pending requests. See the [Cancel Request Window](/docs/accessinformationcenter/12.0/youraccessportal/requesthistory/cancelrequest.md) topic for additional information. |
| View Notes | Opens the View Notes window for the selected request. Clicking on the Notes icon in the table will also open the View Notes window. Click **OK** to close the window.                       |
