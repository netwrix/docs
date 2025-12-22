---
title: "Creating a Password Policy"
description: "Creating a Password Policy"
sidebar_position: 30
---

# Creating a Password Policy

There are no password policies defined when Password Policy Enforcer is first installed. You can now
create your first Password Policy Enforcer password policy. Password Policy Enforcer accepts all
passwords in this state, so users only need to comply with the Windows password policy rules (if
enabled).

Follow the steps below to create a Password Policy Enforcer password policy.

**Step 1 –** Click **Start** > **Password Policy Enforcer 10** > **PPE Configuration** to open the
Password Policy Enforcer management console.

Click **Yes** when asked if you would like to create a new Password Policy Enforcer configuration.

**Step 2 –** Click the **Policies** item in the left pane of the management console, then click
**New Policy** in the right pane. This opens the New Policy page.

![managing_policies](/images/passwordpolicyenforcer/10.2/evaluation/managing_policies.webp)

**Step 3 –** Enter a unique policy name in the **New policy name** text box.

- If the new policy should inherit its default configuration from an existing policy, choose a
  policy from the **Copy settings from** drop-down list.
- If the new policy should inherit settings from commonly used frameworks, select a Policy Template
  from the drop-down list. For a list of policies see
  [Policy Templates ](/docs/passwordpolicyenforcer/10.2/evaluation/creatingapasswordpolicy/policy_templates.md).

**Step 4 –** Click **OK**.

**Step 5 –** Click **No** when asked if you would like to assign users to the policy.

![creating_a_password_policy_2](/images/passwordpolicyenforcer/10.2/evaluation/creating_a_password_policy_2.webp)

**Step 6 –** Click the **Password Policy Server** item in the left pane of the management console,
and then click **PPS Properties** in the right pane.

**Step 7 –** Choose the new **Users** (in step 3) policy from the Default Policy drop-down, then
click **OK**.

**Step 8 –** Click **Yes** when asked to confirm the choice of Default Policy.
