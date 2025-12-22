---
title: "Create Review Wizard"
description: "Create Review Wizard"
sidebar_position: 20
---

# Create Review Wizard

The Create Review wizard is opened with the **Create** button on the Entitlement Reviews interface.
See the [Manage Reviews Page](/docs/auditor/10.8/accessreviews/entitlementreviews/interface/interface.md#manage-reviews-page) topic for additional information.

![Create Review wizard](/images/auditor/10.7/access/reviews/entitlementreviews/wizard/createreviewreviewtype.webp)

It contains three pages:

-   1. Review Type

    - Review Name — Visible only to Review Administrators
    - Select the type of review to be created:

        - Membership – Review group membership
        - Access – Review user access rights to resources

-   2. Resources — Select resources to be included in the review
-   3. Summary

    - Preview of the review selections
    - Provides a status of the action being committed. Action includes creating the review and
      sending notifications to owners.

See the Create a Review topic for additional information.

## Create a Review

Follow the steps to create a review.

**Step 1 –** On the Manage Reviews page, click Create. The Create Review wizard opens.

![Create Review wizard showing the Review Type page](/images/auditor/10.7/access/reviews/entitlementreviews/wizard/createreviewreviewtype.webp)

**Step 2 –** On the Review Type page, provide the following information and click **Next**:

- Review Name — Enter a unique, descriptive name for the review. The review name is only visible to
  Review Administrators.
- Select Type — Reviews are limited to one type. Select the type of review from the buttons
  provided:

    - Membership – Review group membership
    - Access – Review user access rights to resources

![Create Review wizrd showing the Resources page](/images/auditor/10.7/access/reviews/entitlementreviews/wizard/createreviewresources.webp)

**Step 3 –** On the Resources page, select the resources to be included in the review. The Search
feature is available to filter the list of available resource that match the type of review being
created.

- The table displays the following information:

    - Resources — The icon indicates the type of resource. The resource name includes its location,
      such as the UNC path for a file system resource, the URL for SharePoint resource, or Group
      name (e.g., [Domain]\[Group]).
    - Description — Description or explanation of the resource as supplied by either the Ownership
      Administrator or the assigned owner
    - Reviewer — Primary owner assigned to the resource
    - Confirmed — Indicates whether or not the assigned owner has confirmed ownership of that
      resource. Tool-tips display when hovering over the icons indicating whether the resource
      ownership has been confirmed, declined, pending response, or that a confirmation has not been
      requested.
    - Scan Data — A checkmark indicates the resource has been scanned. Only resources with scan data
      can be included in a review.

- Select the desired resource(s) and click **Add**. The **View Selections** button indicates how
  many resources have been selected. Click the button to open the Selected Resources window, where
  you can view and modify the selections. See the
  [Selected Resources Window](/docs/auditor/10.8/accessreviews/entitlementreviews/interface/selectedresources.md) topic for additional information.
- Once the desired resources have been selected, click **Next**.

![Create Review wizard showing the Summary page](/images/auditor/10.7/access/reviews/entitlementreviews/wizard/createreviewsummary.webp)

**Step 4 –** On the Summary page, review the settings and click Finish. The Access Reviews begins to
create the review. Action status displays on the page. When the update has completed (100%), click
Close. The Create Review wizard closes.

The new review displays in the table on the Manage Reviews page. An email was sent to the primary
owner assigned to the resource(s) in this review. By default, the application is configured to send
notifications only to the primary owner. However, this can be customized on the Configuration >
Notifications page to send notifications to all assigned owners. See the
[Notifications Page](/docs/auditor/10.8/accessreviews/admin/configuration/notifications.md) topic for additional information.
