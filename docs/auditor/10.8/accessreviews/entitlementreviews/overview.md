---
title: "Reviews Overview"
description: "Reviews Overview"
sidebar_position: 40
---

# Reviews Overview

The Entitlement Reviews interface is where users with either the Security Team or Administrator role
(to be referred to as Review Administrators) can manage reviews. The workflow provides a way for
business users or data custodians (to be referred to as Owners) to attest to the access and
privileges users have to their resources.

For the purpose of the Access Reviewsapplication, a “resource” refers to the file system shared
folders, SharePoint Online site collections, and Active Directory (AD) groups. All data available
within the Access Reviews application is collected by Netwrix Auditor according to the synchronized
monitoring plans.

_Remember,_ Owners are assigned to resources in the Resource Owners interface. Only resources with
assigned Owners can be included in a reviews.

Who Can Run Reviews (Review Administrators)?

- Console Users with Administrator role

    - Can complete the Review Administrator's approval process without impacting the visibility into
      the review created by a Review Administrator with the Security Team role

        **CAUTION:** Visibility into a review created by a Review Administrator with the Security
        Team role is blocked if a Review Administrator with the Administrator role starts a new
        instance.

- Console Users with Security Team role

    - Visibility into only those reviews personally created

Who Participates in Reviews?

- Review Administrators — Create / start reviews and approve / process owner recommended changes
- Owners — Perform reviews and recommend changes

Types of Reviews

There are two types of reviews:

- Access – Review user access rights to resources
- Membership – Review group membership

See the [Entitlement Reviews Interface](/docs/auditor/10.8/accessreviews/entitlementreviews/interface/interface.md) topic for additional information.

## Workflow of Reviews

Prerequisite:

- The Access Reviews application is configured to send Notifications. See the
  [Notifications Page](/docs/auditor/10.8/accessreviews/admin/configuration/notifications.md) topic for additional information.

    **NOTE:** By default, the application is configured to send notifications only to the primary
    owner. However, this can be customized on the Configuration > Notifications page to send
    notifications to all assigned owners.

- Owners assigned to resources within the Resource Owners interface. See the
  [Resource Owners Overview](/docs/auditor/10.8/accessreviews/resourceowners/overview.md) topic for additional information.

Workflow:

**_RECOMMENDED:_** When deploying the Access Reviews application in an organization to process
reviews, owners should be notified prior to launching the first set of reviews. See the
[Notification to Owners](/docs/auditor/10.8/accessreviews/resourceowners/overview.md#notification-to-owners) topic for additional
information.

1. Review Administrator creates a review or starts a new review instance. See the
   [Create Review Wizard](/docs/auditor/10.8/accessreviews/entitlementreviews/create/create.md) topic for additional information.
2. Owner performs a review. See the [Pending Reviews](/docs/auditor/10.8/accessreviews/owneroverview/pendingreviews/pendingreviews.md) topic for additional
   information.
3. Review Administrator approves owner recommendations. See the
   [Approval Process](/docs/auditor/10.8/accessreviews/entitlementreviews/approvalprocess/approvalprocess.md) topic for additional information.
4. Implement approved changes in your organization. Manually, export a list of approved changes and
   deliver it to your IT department.

When desired, the Review Administrator runs another instance of the review and the workflow starts
again. See the [Review Instances](/docs/auditor/10.8/accessreviews/entitlementreviews/create/reviewinstances.md) topic for additional information.
