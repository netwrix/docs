---
title: "Resource Reviews Overview"
description: "Resource Reviews Overview"
sidebar_position: 60
---

# Resource Reviews Overview

The Resource Reviews interface is where users with either the Security Team or Administrator role
(to be referred to as Review Administrators) can manage reviews. The workflow provides a way for
business users or data custodians (to be referred to as Owners) to attest to the access and
privileges users have to their resources.

For the purpose of the Access Information Center, a “resource” refers to the file system shared
folders, SharePoint sites, Active Directory (AD) groups, AD distribution lists, and/or local
Administrators groups. All data available within the Access Information Center is collected by
Netwrix Access Analyzer (formerly Enterprise Auditor) according to the targeted environments.

:::tip
Remember, Owners are assigned to resources in the Resource Owners interface. Only resources with
assigned Owners can be included in a Resource Review.
:::


**Who Can Run Resource Reviews (Review Administrators)?**

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

**Who Participates in Resource Reviews?**

- Review Administrators — Create / start reviews and approve / process owner recommended changes
- Owners — Perform reviews and recommend changes

**Types of Resource Reviews**

There are four types of reviews:

- Access – Review user access rights to resources
- Membership – Review group membership
- Permissions – Review trustee permissions to resources
- Sensitive Data – Review files containing potentially sensitive data stored within resources

:::note
The Sensitive Data content within reports and reviews is visible to all users and roles.
The Matches table in the report will only be populated for Console User with Security Team and
Administrator roles. This is also required for Sensitive Data reviews.
:::


See the [Resource Reviews Interface](/docs/accessinformationcenter/12.0/resourcereviews/interface/interface.md) topic for additional information.

**Ignored Trustees**

Trustees added to the SA_AIC_ResourceReviewIgnoredTrustees database table are excluded from Access,
Membership, and Permissions reviews. For Membership and Permissions reviews, trustees must be
directly excluded on an individual basis. Any members of excluded groups not directly referenced
will still show in these reviews.

## Workflow of Resource Reviews

Prerequisites:

- Entitlement Reviews License
- The Access Information Center is configured to send Notifications. See the
  [Notifications Page](/docs/accessinformationcenter/12.0/admin/configuration/notifications.md) topic for additional information.

    :::note
    By default, the application is configured to send notifications only to the primary
    owner. However, this can be customized on the Configuration > Notifications page to send
    notifications to all assigned owners.
    :::


- Owners assigned to resources within the Resource Owners interface. See the
  [Resource Owners Overview](/docs/accessinformationcenter/12.0/resourceowners/overview.md) topic for additional information.
- Sensitive Data reviews have specific requirements for Access Analyzer configuration. See the
  [Data Collection Prerequisites](prerequisites.md#data-collection-prerequisites) topic for
  additional information.
- Optional: Access Information Center configured to commit AD changes. See the
  [Automation Prerequisites](prerequisites.md#automation-prerequisites) topic for additional
  information.

Workflow:

:::info
When deploying the Access Information Center in an organization to process
reviews, owners should be notified prior to launching the first set of reviews. See the
[Notification to Owners](/docs/accessinformationcenter/12.0/resourceowners/overview.md#notification-to-owners) topic for additional
information.
:::


**Step 1 –** Review Administrator creates a review or starts a new review instance. See the
[Create Review Wizard](/docs/accessinformationcenter/12.0/resourcereviews/create/create.md) topic for additional information.

**Step 2 –** Owner performs a review. See the
[Pending Reviews Page](/docs/accessinformationcenter/12.0/owneroverview/pendingreviews/pendingreviews.md#pending-reviews-page) topic for additional information.

**Step 3 –** Review Administrator approves owner recommendations. See the
[Approval Process](/docs/accessinformationcenter/12.0/resourcereviews/approvalprocess/approvalprocess.md) topic for additional information.

**Step 4 –** Implement approved changes in your organization:

- Automatically, if the Access Information Center is configured to commit AD changes and access
  groups are assigned to the resources (limited to Access Information Center functionality)
- Manually, export a list of approved changes and deliver it to your IT department

When desired, the Review Administrator runs another instance of the review and the workflow starts
again. See the [Review Instances](/docs/accessinformationcenter/12.0/resourcereviews/create/reviewinstances.md) topic for additional information.
