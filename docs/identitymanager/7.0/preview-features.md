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

### Multi-Certifier in Certification Campaigns

:::note
This feature is currently in preview. See [Activating Preview Features](#activating-preview-features) for setup instructions and safety guidance.
:::

#### Overview

Multi-certifier support allows multiple reviewers to be assigned to the same item during a certification campaign. All assigned certifiers receive the review request simultaneously, and can act on it.  The last certifier to make a decision and confirm it, will be recorded as the Reviewer.  Once a decision is confirmed, the item is automatically removed from the queues of all other assigned certifiers.

This behavior mirrors the existing multi-approver logic used in access requests and reconciliation tasks, bringing consistency to certification workflows.

#### Why Multi-Certifier?

Previously, only a single certifier could be assigned to a permission during a campaign. When multiple application owners existed, this created ambiguity about who was responsible, often resulting in:

- Bottlenecks and missed deadlines
- Unnecessary reassignment steps
- Lower campaign completion rates

With multi-certifier, all eligible reviewers can act immediately without waiting for a reassignment, improving both speed and clarity.

#### How It Works

##### Configuring the Reviewer Mode

The reviewer mode is configured at the campaign level. When creating a campaign, a **Reviewer Mode** field offers two options:

- **Single Reviewer**: The default behavior. NIM assigns the campaign item to the first eligible certifier it finds.
- **Multiple Reviewers**: All users with permission rights to certify the item are notified and can act on it simultaneously.

:::warning
The Reviewer Mode is set at the time of campaign creation and **cannot be modified once the campaign has launched**. Make sure to select the appropriate mode before starting the campaign.
:::

##### Review Workflow

1. **Notification**: All assigned certifiers receive a notification when a campaign item requires review.
2. **Decisions remain visible**: Even after an item has been reviewed, other certifiers can still find it by filtering on **Approved** or **Refused**. The name of the certifier who made the most recent decision is shown in the **Reviewer** column.
3. **Editing before confirmation**: As long as decisions have not been confirmed, any reviewer can edit and change a decision made by another certifier.
4. **Confirmation locks decisions**: Once a reviewer confirms decisions, the decision can no longer be modified.

:::note
**On simultaneous conflicting decisions**: In rare cases where two certifiers submit conflicting decisions at the same moment, the system resolves the conflict by applying the **last received decision**, consistent with how conflicts are handled in role reviews elsewhere in the product.
:::

##### Confirming Decisions

When a certifier clicks **Confirm Decisions**:

- Only the decisions **that the certifier has personally made** are finalized.
- Decisions made by other certifiers are confirmed independently when those certifiers confirm their own decisions.
- Confirmed decisions **cannot be modified**.

In the **Confirm Decisions** tab, each certifier can see a summary that includes:

- Items **approved by me**
- Items **approved by others**
- Items **refused by me**
- Items **refused by others**

##### Campaign Reports

Campaign reports show:

| Scenario | Reviewer Column |
|--|--|
| Item has not yet been reviewed | Blank   |
| Item has been confirmed        | Name of the certifier who acted  |


##### Audit Logs

All certification actions are recorded in the system database, including:

- The name of the certifier who made the decision
- The decision that was made (approved or refused)
- The date and time the decision was recorded

---

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

## Providing Feedback

Features in preview are in active development. If you encounter issues or have suggestions, please share your feedback with your Netwrix Identity Manager representative or through the support portal.

