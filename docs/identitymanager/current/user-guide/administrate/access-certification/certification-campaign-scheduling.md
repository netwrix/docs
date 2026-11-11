---
title: "Schedule a Certification Campaign"
description: "Schedule a Certification Campaign"
sidebar_position: 10
---

# Schedule a Certification Campaign

Learn how to create and schedule access certification campaigns, and how to define their scope.

## Overview

A certification campaign reviews specific access permissions and entitlements for specific identities. Its goal is to certify that access remains appropriate and to record an audit opinion justifying each identity's continued need for it.

Scheduling a campaign means defining:

- **Scope** — which permissions, roles, or entitlements are in scope.
- **Reviewers** — who reviews them.
- **Time window** — when the review takes place.

Once scheduled and launched, the campaign appears to its reviewers on their **Access Certification** screen, where they approve or reject each item. Depending on the **Reviewer Mode**, a campaign can be reviewed by a single reviewer per item or by multiple reviewers. Single-reviewer campaigns can also allow delegation — see [Allowed Actions](#allowed-actions).

This topic explains how to create and schedule a campaign, and how to define its scope using filters that determine who reviews the access (the reviewers) and what gets reviewed (the items).

## Participants and Artifacts

Set up certification campaigns together with your auditing team — they're best positioned to know which entitlements need review.

| | |
|---|---|
| **Inputs** | Identity Repository *(required)* <br/> [Roles created in the Role Catalog](../../../user-guide/set-up/single-roles-catalog-creation) *(optional)* <br/> [Managed risks](../../../user-guide/optimize/risk-management) *(optional)* |
| **Output** | One or more scheduled certification campaigns |

For details on setting up the Identity Repository, see [Create the Workforce Repository](../../../user-guide/set-up/initial-identities-loading).

## Create a Certification Campaign

### Step 1: Open the Access Certification Campaigns page

From the home page, click **Access Certification Campaigns** in the **Administration** section.

### Step 2: Add a new campaign

Click the **+** button in the top right, then fill in the campaign details.

![New Certification Campaign](/images/identitymanager/certifcampaign_newcertificationcampaign_v720.webp)

**Configure the campaign**

| Field | Description |
|---|---|
| **Identifier** | A unique code for the campaign. Must not contain whitespace. |
| **Name** | The display name shown to reviewers in the UI. |
| **Description** | Additional context about the campaign, included in the email notifications sent to reviewers and delegatees. |
| **Start Date** | The date the campaign becomes visible to reviewers on their **Access Certification** screen. The campaign reviews access as it existed at this date and time — any access granted afterward is excluded. After you pick a date, a time picker appears so you can refine the cutoff to an exact time. |
| **End Date** | The date the campaign closes. |
| **Target Entity Type** | The type of entity the campaign will review. |
| **Target Reviewers** | The identities responsible for performing the review. Reviewers are configured separately via [Access Certification policies](../../../integration-guide/governance/accesscertification). |
| **Reviewer Mode** | Determines how reviewers act on each certification item. For the available modes, see the following **Reviewer Mode** list. |
| **Allowed Actions** | The actions reviewers can take on a certification item besides approving or refusing it: **Delegate**, **Forward**, **Indicate "Not for me"** and **Apply bulk**. See [Allowed Actions](#allowed-actions). |

**Reviewer Mode**

- **Single** — each item is reviewed by exactly one reviewer.
- **Multiple** — several reviewers can act on the same item. Any of them can approve or refuse it, and decisions stay editable until confirmed. "Delegation", "Forward" and "Not for me" actions aren't available in this mode. **Apply bulk** is the only additional allowed action available.

#### Multiple Reviewer Mode

##### Review Workflow

1. **Notification** — all assigned reviewers receive a notification when a campaign item requires review.
2. **Decisions remain visible** — even after an item has been reviewed, other reviewers can still find it by filtering on `Approved` or `Refused`. The **Reviewer** column shows the name of the reviewer who made the most recent decision.
3. **Editing before confirmation** — as long as decisions have not been confirmed, any authorized reviewer can edit and change a decision made by another reviewer.
4. **Confirmation locks decisions** — once a reviewer confirms decisions, the decision can no longer be modified.

:::note
**On simultaneous conflicting decisions:** in rare cases where two reviewers submit conflicting decisions at the same moment, the system resolves the conflict by applying the last received decision, consistent with how conflicts are handled in role reviews elsewhere in the product.
:::

##### Confirming Decisions

When a reviewer clicks **Confirm Decisions**:

- Only the decisions that the reviewer has personally made are finalized.
- Decisions made by other reviewers are confirmed independently when those reviewers confirm their own decisions.
- Confirmed decisions can't be modified.

In the **Confirm Decisions** tab, each reviewer can see a summary that includes:

- Items approved by me
- Items approved by others
- Items refused by me
- Items refused by others

#### Allowed Actions

This section groups the optional actions that can be enabled for a campaign. Reviewers can use them on a certification item in addition to approving or refusing it.

| Action | Description |
|---|---|
| **Delegate** | Asks another user for input as a recommendation. Responsibility stays with the original reviewer. See [Delegation](#delegation) for more details. |
| **Forward** | Transfers certification responsibility to another reviewer, who then owns the decision. This action is irreversible, and an item can be forwarded to only one person. |
| **Indicate "Not for me"** | Lets the reviewer flag an item as not relevant to them. Once confirmed, the item is removed from the reviewer's scope and can't be forwarded or delegated afterward. |
| **Apply bulk** | Lets the reviewer apply any of the other enabled actions to several items at once. |

In **Multiple** reviewer mode, only **Apply bulk** is available.

##### Bulk Actions

When **Apply bulk** is selected, reviewers can apply an enabled action to several certification items at once during the review. Bulk actions don't require a specific permission.

###### Audit

Bulk actions are audited as follows:

- **Per-item history:** forwarding, delegating, revoking a delegation and indicating "Not for me" each add an entry to the **Activity History** of every item they change, as when the action is performed on a single item.
- **Comment:** the entry's comment states the action followed by `by bulk action`, for example `Forwarded by bulk action`. A comment entered by the reviewer is appended after a dash.
- **Campaign report:** bulk actions are also recorded in the campaign's Certification Report.
- **Result summary:** when the action completes, the reviewer sees how many items were changed and how many were skipped. Items that already have the requested state are skipped.
- **Failures:** if a bulk action fails, the reviewer sees a generic error message. The technical details are written to the server log only.

##### Delegation

For campaigns using `Single` reviewer mode, the **Delegation** checkbox is available under **Allowed Actions** during campaign creation. This lets reviewers hand off individual items to another reviewer.

:::note
- This setting can't be changed after the campaign is created.
- It isn't available for `Multiple` reviewer mode campaigns.
- To make this checkbox available, the **Delegation** feature must first be activated in the **Features** section of the settings.
:::

###### Reviewer Experience

When delegation is enabled, reviewers see a tab on the **Access Certification** screen: **Delegated to Me**. If they have delegated items to other reviewers, they will also see a **Delegated to Others** tab. 

| Tab | Contents |
|---|---|
| **My Items** | The standard certification tab. |
| **Delegated to Me** | Items delegated to the logged-in user by another reviewer. |
| **Delegated to Others** | Items the logged-in user has delegated to someone else. |

A **Delegate** action is available on any undelegated item in **My Items** (items with an active delegation or a recorded decision don't show this action). Clicking **Delegate** opens a side panel to select a recipient and add an optional comment; the item then moves to **Delegated to Others**.

An item is in **Delegated to Others** while it has a delegatee and the reviewer hasn't recorded a decision on it. After the reviewer decides, the item moves back to **My Items**. The delegatee and their recommendation are kept and appear in the Certification Report. Bulk actions use the same rule: **Revoke Delegation** applies only to items in **Delegated to Others**.

To revoke a delegation, use **Revoke Delegation** on an item in **Delegated to Others**. This returns the item to **My Items**, removes it from the delegatee's view, and clears the delegatee's comment and decision.

###### Delegatee Experience

The delegatee gets an immediate email notification with the campaign name and description, and the item appears in their **Delegated to Me** tab. The delegatee can record:

- **Approve** or **Refuse** — a recommendation visible to the reviewer in **Delegated to Others**.
- **Not For Me** — sends the item back to the reviewer's **My Items** tab with an activity indicator; the delegatee's comment is preserved in the audit trail.

Delegatees can't delegate or transfer items further.

###### Confirming Delegated Decisions

When a reviewer clicks **Confirm Decisions** and delegated items have recorded recommendations, a confirmation popup appears with two options:

- **Confirm All Decisions**
- **Cancel**, to review **Delegated to Others** first.

If the reviewer overrides a delegatee's recommendation, the reviewer's decision is the one that's used. In the campaign summary, the **Unconfirmed** section counts a delegated item once: under **By me** when the reviewer has decided it, and under **Delegated to others** (by the delegatee's recommendation) while the reviewer hasn't. Delegated items with no recorded recommendation are treated as undecided.

###### Audit Trail

The Certification Report includes two columns for delegated items:

| Column | Contents |
|---|---|
| **DelegatedTo** | The delegatee's display name. |
| **DelegateeRecommendation** | The delegatee's recorded decision (`Approve`, `Refuse`, `Not For Me`, or blank if none recorded). |

If a reviewer overrides a delegatee's recommendation, both decisions are captured. Revoking a delegation clears both columns.

The **Activity History** popup includes an **Action** column distinguishing `Forwarded` and `Delegated` events.

**Defining the scope**

Two more filter groups control exactly what gets reviewed. Understanding how they combine matters, because it changes what actually shows up in the campaign:

| Filter | What it does | How multiple values combine |
|---|---|---|
| **Target Specificities** | An [AccessCertificationDataFilter](../../../integration-guide/toolkit/xml-configuration/access-certification/accesscertificationdatafilter) defining the campaign's scope by object type, category, approval state, etc. | Multiple specificities are combined with **OR** (the campaign includes the union of all of them). Within a single specificity, criteria are combined with **AND**. Role tags are the exception: listing several tags matches roles with **any** of them (OR). |
| **Target Owners** | Filters based on identity attributes, to select whose access gets reviewed. | Multiple owner filters are combined with **AND** (an identity must match all of them to be included). |

![Target Specificities](/images/identitymanager/certifcampaign_targetspecificities_v602.webp)

![Target Owner Filters](/images/identitymanager/certifcampaign_targetowners_v602.webp)

Depending on the target entity type you chose, extra filters may appear here as well.

**Other targeting options**

- **Individual Owner** — target a single specific identity whose access should be certified.
- **Active Target** — target identities whose properties (from `Directory_UserRecord`) have changed since a given date.

  > For this filter, use only properties that Identity Manager doesn't calculate itself.

![Target Owner Additional Filters](/images/identitymanager/certifcampaign_targetownersadditional_v603.webp)

**Example:** the following campaign targets all assigned single roles for two specific users.

![Campaign Example](/images/identitymanager/certifcampaign_example_v720.webp)

### Step 3: Save the campaign

Click **Create** to add the campaign to the list.

### Step 4: Launch the campaign

Click **Launch** to run the access certification job and apply your changes.

![Campaigns Page](/images/identitymanager/certifcampaign_newlycreated_v603.webp)

You can check the job's progress and results via the **Job Results** button.

> Example:
>
> ![Execute Access Reviews Job](/images/identitymanager/certifcampaign_job_v522.webp)

## Impact of Modifications

- **Before the start date:** any field of a campaign can be edited.
- **After the start date:** only the name, identifier, and end date can still be changed.
- **At any time:** a campaign can be deleted.

## Verify Campaign Scheduling

To confirm everything was set up correctly, open the **Access Certification Campaigns** page and check that the new campaign's parameters match what you configured.
