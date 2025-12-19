---
title: "Enforcing Multiple Policies"
description: "Enforcing Multiple Policies"
sidebar_position: 70
---

# Enforcing Multiple Policies

Password Policy Enforcer can enforce up to 256 password policies on each domain or computer. You can
assign policies to users directly, or indirectly through Active Directory security groups and
containers (Organizational Units).

### Create Additional Password Policy

Follow the steps to create an additional password policy.

**Step 1 –** Click the **Policies** item in the left pane of the management console, then click
**New Policy** in the right pane.

![managing_policies](/images/passwordpolicyenforcer/10.2/evaluation/managing_policies.webp)

**Step 2 –** Enter **Admins** in the New Policy name text box, then choose the **Users** policy from
the **Copy Settings From:** drop-down.

**Step 3 –** Click **OK** to create the policy, then click the **Assigned To** tab.

![enforcing_multiple_policies_1](/images/passwordpolicyenforcer/10.2/evaluation/enforcing_multiple_policies_1.webp)

**Step 4 –** Click the **Add...** button beside the Groups list and type "**domain admins**" in the
provided field.

- If the test computer is not a domain controller, click the **Add...** button and type
  "**PPETestAdmin**" in the provided field.

**Step 5 –** Click OK.

![enforcing_multiple_policies_2](/images/passwordpolicyenforcer/10.2/evaluation/enforcing_multiple_policies_2.webp)

**Step 6 –** Click **OK** to close the Policy Properties page.

- Members of the Domain Admins group (or the PPETestAdmin user, if not using a domain controller)
  must now comply with the Administrators policy. All other users must comply with the Users policy.
  Users will not notice any difference at this point because the two polices are enforcing identical
  rules.

### Differentiate Password Policies

The example below instructs how to change the minimum password length for the Admins policy from
seven to nine characters. To differentiate the policies, change the minimum password length for the
Admins policy from seven to nine characters.

Follow the steps below to differentiate password policies.

**Step 1 –** Click the **Admins** policy in the left pane of the management console.

**Step 2 –** Double-click the **Length** rule.

**Step 3 –** Choose **9** from the At Least drop-down list, then click **OK**.

Use the Password Policy Enforcer management console, the Windows Change Password screen, the Active
Directory Users and Computers console, or the Local Users and Groups console to test password
changes and resets for the PPETestUser and PPETestAdmin accounts. Password Policy Enforcer should
enforce the Users policy for PPETestUser, and the Admins policy for PPETestAdmin.

:::note
The
[Administration](/docs/passwordpolicyenforcer/10.2/administration/administration_overview.md)
topic contains more information about policy assignments, and how Password Policy Enforcer resolves
policy assignment conflicts that occur when more than one policy is assigned to a user.

:::
