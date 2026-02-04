---
title: "Resource Owners Overview"
description: "Resource Owners Overview"
sidebar_position: 30
---

# Resource Owners Overview

The Resource Owners interface is where Access Reviews Console users with either the Security Team or
Administrator role (to be referred to as Ownership Administrators) can assign ownership of resources
to be managed through the application. Assigned owners do not require a console user role. Resources
to be included in the Access Reviews workflow must first be assigned owners within the Resource
Owners interface.

**_RECOMMENDED:_** The Access Reviews application is configured to send Notifications.

_Remember,_ a “resource” refers to the file system shared folders, SharePoint Online site
collections, and Active Directory (AD) groups. All data available within the Access Reviews
application is collected by Netwrix Auditor according to the synchronized monitoring plans.

“Owners” are the users who are responsible for reviewing access to the resources to which they are
assigned.

The My Reviews interface provides owners with access to historical and pending reviews. The My
Reviews interface is only accessible to users who have been assigned ownership of at least one
resource. Owners without a console user role are directed to the My Reviews interface at login.
Owners with a console user role access the pending and historical reviews for their resources by
clicking the My Reviews tab. See the [Pending Reviews](/docs/auditor/10.9/accessreviews/owneroverview/pendingreviews/pendingreviews.md)
topic for additional information.

Who Can Assign Ownership (Ownership Administrators)?

- Console Users with Administrator role

    - Can complete the Review Administrator's approval process without impacting the visibility into
      the review created by a Review Administrator with the Security Team role

        **CAUTION:** Visibility into a review created by a Review Administrator with the Security
        Team role is blocked if a Review Administrator with the Administrator role starts a new
        instance.

- Console Users with Security Team role

    - Visibility into only those reviews personally created

What Can Resource Owners Do?

- Perform an access review (when there is a pending review)
- View historical information on access reviews

See the [Resource Owners Interface](/docs/auditor/10.9/accessreviews/resourceowners/interface/interface.md) topic for additional information.

## Workflow of Ownership Assignment

Prerequisite:

- Optional: The Access Reviews application is configured to send Notifications. See the
  [Notifications Page](/docs/auditor/10.9/accessreviews/admin/configuration/notifications.md) topic for additional information.

    **NOTE:** By default, the application is configured to send notifications only to the primary
    owner. However, this can be customized on the Configuration > Notifications page to send
    notifications to all assigned owners.

- Owners assigned to resources must have:

    - Email address to receive notifications
    - Credentials for a domain known to the application

- Resources and groups must be known to the application

Workflow:

**NOTE:** This workflow is not numbered because the Notification piece can occur at any time in the
workflow.

- Add resources to be managed by associating a business data owner with a resource. See the
  [Add New Resource Wizard](/docs/auditor/10.9/accessreviews/resourceowners/interface/add.md) topic for additional information.
- Confirm resource ownership. See the [Ownership Confirmation](/docs/auditor/10.9/accessreviews/resourceowners/confirmation/confirmation.md) topic for additional
  information.
- Notify owners of their responsibilities. See the Notification to Owners topic for additional
  information.

## Notification to Owners

Let your owners know what their responsibilities are by notifying them with the following
information:

- An explanation of what a review is and why your organization is conducting them through the
  Netwrix Auditor Access Reviews application.
- How owners should log into the application console, specifically what URL and credentials to use.
- Expectation on response times
- How to access instructions on how to complete a review. You can link to the
  [Owners & Access Reviews](/docs/auditor/10.9/accessreviews/owneroverview/owneroverview.md) topic or download that topic and its subtopics as a
  PDF and make it available within your corporate resources.
