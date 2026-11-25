---
title: "Set Up Password Policy Enforcer Messages"
description: "Edit the message templates that tell users about the password policy, live rule feedback, and why a password was rejected."
keywords:
  - Password Policy Enforcer messages
  - PPE message templates
  - password rejection message
  - live policy feedback
  - message language
sidebar_position: 50
---

# Set Up Password Policy Enforcer Messages

Each Password Policy Enforcer password policy has multiple message templates, one for each of the
Password Policy messages:

- Password Policy – Displays the password policy guidelines to users where Netwrix Password Policy
  Enforcer is installed.
- [POLICY] – Customize the text for the active rules.
- [LIVE_POLICY] – You can configure Password Policy messages to display live feedback for the active
  rules to users as they reset or change their passwords. Use this feature to see whether passwords
  meet the requirements of the organization's policy.
- Rejection Reason – Displays why an intended password was rejected.
- Generic Rejection – Displays when Password Policy Enforcer doesn't have a specific reason for the
  rejection, generally because the password doesn't comply with the Windows password policy.

## Set Up Message Templates for Active Rules

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the **ellipsis** button for an identity store and select
**Edit**.

Step 3 – Click **Configurations** under Settings in the left pane. Then click **PPE Policies**. The
PPE Policies page is displayed.

Step 4 – Click the **three vertical dots** icon next to the policy and click **Edit**.

**Or**

Click a policy name to open the policy configuration page.

Step 5 – Open the **Messages** tab.

Step 6 – Select the message language from the dropdown list. You can set messages for multiple
languages.

Step 7 – Edit the message templates in the Password Policy, [POLICY], [LIVE_POLICY], Rejection
Reason, and Generic Rejection messages.
