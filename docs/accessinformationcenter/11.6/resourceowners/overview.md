---
title: "Resource Owners Overview"
description: "Resource Owners Overview"
sidebar_position: 50
---

# Resource Owners Overview

The Resource Owners interface is where Access Information Center users with either the Security Team
or Administrator role (to be referred to as Ownership Administrators) can assign ownership of
resources to be managed through the application. Assigned owners do not require an Access
Information Center user role, as they manage their resources through the Owner portal. Resource
management options are controlled by the configuration for each resource within the Resource Owners
interface. Resources to be included in either the Resource Review or the Self-Service Access
Requests workflows must first be assigned owners within the Resource Owners interface. The Access
Information Center must be configured to commit changes in Active Directory in order for Owners to
make ad hoc changes to access. It is also required for the Self-Service Access Requests workflow.

:::info
The Access Information Center is configured to send Notifications.
:::


:::tip
Remember, for the purposes of the Access Information Center, a “resource” refers to the file
system shared folders, SharePoint sites, Active Directory (AD) groups, AD distribution lists, and/or
local Administrators groups. All data available within the Access Information Center is collected by
Netwrix Enterprise Auditor according to the targeted environments.
:::


“Owners” are the users who are responsible for reviewing access to the resources to which they are
assigned. The Access Information Center provides the means to assign resource owners manually or
based on a calculation of the “Probable Owner.”

The Owner portal provides access to resource reports, historical and pending access requests, and
historical and pending entitlement reviews. Owners can also make ad hoc changes to access if that
feature has been enabled for the resource. The Owner portal is only accessible to users who have
been assigned ownership of at least one resource. Owners without an Access Information Center user
role are directed to the Owner portal at login. Owners with an Access Information Center user role
access the Owner portal by clicking the **Manage Your Resources** link in the Your Links section of
the Home page. See the
[Owner Portal Overview](/docs/accessinformationcenter/11.6/owneroverview/ownerportal/overview.md)
topic for additional information.

**Who Can Assign Ownership (Ownership Administrators)?**

- Console Users with Administrator role

    - Can complete the Review Administrator's approval process without impacting the visibility into
      the review created by a Review Administrator with the Security Team role

        :::warning
        Visibility into a review created by a Review Administrator with the Security
        Team role is blocked if a Review Administrator with the Administrator role starts a new
        instance.
        :::


- Console Users with Security Team role

    - Visibility into only those reviews personally created

**What Can Resource Owners Do?**

- View reports on their resources
- Perform a resource review (when there is a pending review)
- Process an access request (when a request is pending approval)
- View historical information on entitlement reviews
- View historical access request information
- Make ad hoc changes to resource access/membership (when this feature is enabled)

:::note
The Sensitive Data content within reports and reviews is visible to all users and roles.
The Matches table in the report will only be populated for Console User with Security Team and
Administrator roles.
:::


See the
[Resource Owners Interface](/docs/accessinformationcenter/11.6/resourceowners/interface/interface.md)
topic for additional information.

## Workflow of Ownership Assignment

Prerequisites:

- Entitlement Reviews License or Self-Service Access License
- Optional: The Access Information Center is configured to send Notifications. See the
  [Notifications Page](/docs/accessinformationcenter/11.6/admin/configuration/notifications.md)
  topic for additional information.

    :::note
    By default, the application is configured to send notifications only to the primary
    owner. However, this can be customized on the Configuration > Notifications page to send
    notifications to all assigned owners.
    :::


- Optional: Access Information Center configured to commit AD changes
- Owners assigned to resources must have:

    - Email address to receive notifications
    - Credentials for a domain known to the application

- Resources and groups must be known to the application
- Optional: Access groups configured within the environment for resources to be managed through the
  application, which requires the Access Information Center to be configured to commit AD changes.
  See the
  [Access Groups](/docs/accessinformationcenter/11.6/resourceowners/accessgroups.md)
  topic for additional information.

Workflow:

:::note
This workflow is not numbered because the Notification piece can occur at any time in the
workflow.
:::


- Add resources to be managed by associating a business data owner with a resource.
    - See the
      [Add New Resource Wizard](/docs/accessinformationcenter/11.6/resourceowners/interface/add.md)
      topic for additional information about adding individual resources.
    - See the
      [Import Owners Wizard](/docs/accessinformationcenter/11.6/resourceowners/interface/import.md)
      topic for additional information about adding resources with a bulk import.
- Confirm resource ownership. See the
  [Ownership Confirmation](/docs/accessinformationcenter/11.6/resourceowners/confirmation/confirmation.md)
  topic for additional information.
- Notify owners of their responsibilities. See the [Notification to Owners](#notification-to-owners)
  topic for additional information.

## Notification to Owners

Let your owners know what their responsibilities are by notifying them with the following
information:

- Why your organization is using the Access Information Center
- How owners should log into the application console, specifically what URL and credentials to use.
    - You will need to decide if you are sending owners to the Web Console or directly to the Access
      Information Center.
- How to access instructions on how to complete a review. You can link to the
  [Resource Ownership with the Access Information Center](/docs/accessinformationcenter/11.6/owneroverview/owneroverview.md)
  topic or download that topic and its subtopics as a PDF and make it available within your
  corporate resources.
- If you plan to enable the Resource Reviews workflow, also include:
    - An explanation of what a Resource Review is and why your organization is conducting them
    - Expectation on response times
- If you plan to enable the Self-Service Access Requests workflow, also include:
    - An explanation of the Your Access portal and why your organization is enabling self-service
      access requests
    - Expectation on response times
