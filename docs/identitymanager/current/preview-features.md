---
title: "Preview Features"
description: "Preview Features"
sidebar_position: 40
---

# Preview Features

Preview features are available so you can explore upcoming functionality early and share feedback before general availability. See [Providing Feedback](#providing-feedback) to share your experience.

:::important
Preview features aren't recommended for use in production environments. They may be incomplete, subject to change, or behave unexpectedly. Activate preview features in preproduction environments only.
:::

## Activating Preview Features

### SaaS

The preview section is activated by default in preproduction environments. To enable a specific feature, navigate to **Settings → Preview** in the NIM UI and activate the feature you want to test.

:::note
Preview features aren't activated in production.
:::

### On-Premises

1. In the "FeatureFlags" section of your `appsettings.json` file, add the following:

```json
"FeatureFlags": {
  "EnablePreviews": true
}
```
2. Restart the server.
3. Navigate to **Settings → Preview** in the NIM UI and activate the features you want to enable.

---

## What's currently in Preview Mode?

### New Homepage Dashboard

#### Overview

The new homepage dashboard replaces the legacy homepage. It is built from widgets that show the tasks assigned to you and let you act on them directly:

- **My tasks**: your most recent pending workflow requests and approvals.
- **Review roles and risks**: approve or deny access requests, including risk-flagged ones, without leaving the dashboard.
- **Reconcile non-conforming roles**: keep or delete access detected outside policy.
- **Access certification**: open campaigns with pending items, with links straight into each campaign.

Widgets are displayed only for the features the user has access to.

#### How It Works

Activating the preview pages in **Settings → Preview** adds a **Preview / Legacy** switch at the top of the homepage. The new dashboard is displayed by default for all users with access to the dashboard widgets.

To return to the legacy homepage, individual users can select **Legacy** in the switch. Select **Preview** to go back to the new dashboard.

:::note
- The switch is displayed only on the homepage, and only to users who have access to at least one of the dashboard widgets. Other users see the legacy homepage.
- The selection is stored in the user's browser and applies to that user only.
- Deactivating the preview pages restores the legacy homepage for all users.
:::

---

### Right-to-Left Language Support

#### Overview

Netwrix Identity Manager doesn't natively include any right-to-left (RTL) languages. However, with this preview feature activated, the NIM UI is capable of rendering in RTL layout when the appropriate translation files are provided.

This allows organizations that operate in RTL languages, such as Arabic or Hebrew, to experience a correctly oriented interface without waiting for native language support to be added to the product.

#### How It Works

RTL support requires:

1. **Provide your own translation files** for the RTL language you want to support. NIM doesn't supply these files, so your team or a localization partner will need to prepare them.
2. **Activate the RTL preview feature** in the Preview section of the Settings in the UI, following the steps in the [Activating Preview Features](#activating-preview-features) section above.

Once activated, the UI will adapt its layout to support right-to-left reading direction based on the language defined in your translation files.

---

### Filter Role in Access Certification Reviews

#### Overview

With this preview feature activated, reviewers can filter by role when certifying permissions in an Access Certification campaign, making it faster to focus a review on the roles that matter.

#### How It Works

The role filter is applied against the entire role catalogue, not just the roles visible in the active campaign. Reviewers select a role from the filter to narrow the certification list to permissions granted through that role.

---

## Providing Feedback

Features in preview are in active development. If you encounter issues or have suggestions, share your feedback with your Netwrix Identity Manager representative or through the support portal.

