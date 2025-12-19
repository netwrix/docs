---
title: "Access Requests Overview"
description: "Access Requests Overview"
sidebar_position: 70
---

# Access Requests Overview

The Access Requests interface is where Access Information Center users with either the Security Team
or Administrator role (to be referred to as Request Administrators) can manage the Self-Service
Access Requests workflow through the Access Information Center. This workflow provides a way for
domain users to request access to resources or membership in groups being managed through the Access
Information Center. It also enables the assigned owners to respond to those requests directly,
granting or denying the request without involving an IT Team member.

For the purpose of the Access Information Center, a “resource” refers to the file system shared
folders, SharePoint sites, Active Directory (AD) groups, AD distribution lists, and/or local
Administrators groups.All data available within the Access Information Center is collected by
Netwrix Access Analyzer (formerly Enterprise Auditor) according to the targeted environments.

:::tip
Remember, owners are assigned to resources in the Resource Owners interface. Only resources with
assigned owners can be included in the Self-Service Access Requests workflow. These resources must
also have the Allow access requests option selected.
:::


:::info
When deploying the Access Information Center in an organization to enable
Self-Service Access Requests, notifications should be sent to assigned owners as well as domain
users. See the [Owner Confirmation Request Email](/docs/accessinformationcenter/12.0/owneroverview/confirmationrequest.md)
topic for additional information.
:::


The Your Access portal provides domain users with the ability to view current access to managed
resources, request access to resources, and view the request status for pending and processed
requests. The Your Access portal is accessible to all domain users for the domain where the Access
Information Center is located. Domain users with an Access Information Center user role navigate to
the Your Access portal by clicking the **Manage Your Access** link in the Your Links section of the
Home page. Domain users without an Access Information Center user role who are assigned as resource
owners navigate to the Your Access portal with the My Access link in the Owner portal. Domain users
without an Access Information Center role and who are not assigned resource ownership are directed
to the Your Access portal at login. See the
[Your Access Portal Overview](/docs/accessinformationcenter/12.0/youraccessportal/overview.md) topic for additional information.

**Who Can Manage Self-Service Access Requests (Request Administrators)?**

- Access Information Center Administrators
- Access Information Center Security Team Members

**Who Participates in Self-Service Access Requests?**

- Domain Users — Submit requests for access to resources or membership in groups
- Owners — Approve or deny access requests
- Request Administrators — Manage requests and nudge owners to respond to pending requests

See the [Access Requests Interface](/docs/accessinformationcenter/12.0/accessrequests/interface/interface.md) section for information.

## Workflow of Self-Service Access Requests

Prerequisites:

- Self-Service Access License
- Access Information Center configured to send Notifications. See the
  [Notifications Page](/docs/accessinformationcenter/12.0/admin/configuration/notifications.md) topic for additional information.

    :::note
    By default, the Access Information Center is configured to send notifications only to
    the primary owner. However, this can be customized to send notifications to all assigned owners.
    See the [Notifications Page](/docs/accessinformationcenter/12.0/admin/configuration/notifications.md) topic for additional
    information.
    :::


- Access Information Center configured to commit AD changes
- Resources and groups must be known to the Access Information Center, having been audited by Access
  Analyzer
- Owners assigned to resources within the Resource Owners interface. See the
  [Resource Owners Overview](/docs/accessinformationcenter/12.0/resourceowners/overview.md) topic for additional information.
- Resource is configured to Allow access requests when it is assigned an owner. See the
  [Add New Resource Wizard](/docs/accessinformationcenter/12.0/resourceowners/interface/add.md) and
  [Update Resource Wizard](/docs/accessinformationcenter/12.0/resourceowners/interface/update.md) topics for additional information.
- Access groups configured within the environment for resources to be managed through the Access
  Information Center. See the [Access Groups](/docs/accessinformationcenter/12.0/resourceowners/accessgroups.md) topic for
  additional information.

Workflow:

**Step 1 –** Notify owners of their responsibilities prior to enabling Self-Service Access Requests.

**Step 2 –** Notify domain users of the Your Access portal for submitting Self-Service Access
Requests.

**Step 3 –** Domain users submit requests.

**Step 4 –** Owners process requests.

**Step 5 –** Request Administrators monitor pending requests and send reminders to owners.

## Notification to Domain Users

Let your domain users know how to request access to your organization's resources or membership in
groups. Netwrix recommends notifying them with the following information:

- Why your organization is enabling self-service access requests with the Access Information Center
- How to log into the Access Information Center, specifically what URL and credentials to use.

    - You will need to decide if you are sending domain users via the Access Analyzer Web Console or
      directly to the Access Information Center website.

- How to access the instructions on how to submit access requests. You can link to the
  [Your Access Portal Overview](/docs/accessinformationcenter/12.0/youraccessportal/overview.md) topic or download that topic and its
  subtopics as a PDF and make it available within your corporate resources
