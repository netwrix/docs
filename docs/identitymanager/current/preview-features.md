---
title: "Preview Features"
description: "Preview Features"
sidebar_position: 40
---

# Preview Features

Preview features are available so you can explore upcoming functionality early and share feedback before general availability. See [Providing Feedback](#providing-feedback) to share your experience.

:::important
Preview features are not recommended for use in production environments. They may be incomplete, subject to change, or behave unexpectedly. Activate preview features in preproduction environments only.
:::

## Activating Preview Features

### SaaS

The preview section is activated by default in preproduction environments. To enable a specific feature, navigate to **Settings → Preview** in the NIM UI and activate the feature you want to test.

:::note
Preview features are not activated in production.
:::

### On-Premises

1. In the "FeatureFlags" section of your `appsettings.json` file, add the following:

```json
"FeatureFlags": {
  "EnablePreviews": true
}
```
2. Restart the server.
3. Navigate to **Settings → Preview** in the NIM UI and activate the feature(s) you want to enable.

---

## What's currently in Preview Mode?

### Right-to-Left Language Support

:::note
This feature is currently in preview. See [Activating Preview Features](#activating-preview-features) for setup instructions and safety guidance.
:::

#### Overview

Netwrix Identity Manager does not natively include any right-to-left (RTL) languages. However, with this preview feature activated, the NIM UI is capable of rendering in RTL layout when the appropriate translation files are provided.

This allows organizations that operate in RTL languages, such as Arabic or Hebrew, to experience a correctly oriented interface without waiting for native language support to be added to the product.

#### How It Works

RTL support requires:

1. **Provide your own translation files** for the RTL language you want to support. NIM does not supply these files, so your team or a localization partner will need to prepare them.
2. **Activate the RTL preview feature** in the Preview section of the Settings in the UI, following the steps in the [Activating Preview Features](#activating-preview-features) section above.

Once activated, the UI will adapt its layout to support right-to-left reading direction based on the language defined in your translation files.

---

### Filter Role in Access Certification Reviews

:::note
This feature is currently in preview. See [Activating Preview Features](#activating-preview-features) for setup instructions and safety guidance.
:::

#### Overview

With this preview feature activated, reviewers can filter by role when certifying permissions in an Access Certification campaign, making it faster to focus a review on the roles that matter.

#### How It Works

The role filter is applied against the entire role catalogue, not just the roles visible in the active campaign. Reviewers select a role from the filter to narrow the certification list to permissions granted through that role.

---

## Providing Feedback

Features in preview are in active development. If you encounter issues or have suggestions, please share your feedback with your Netwrix Identity Manager representative or through the support portal.

