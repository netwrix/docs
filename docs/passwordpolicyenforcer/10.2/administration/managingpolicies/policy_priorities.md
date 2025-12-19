---
title: "Policy Priorities"
description: "Policy Priorities"
sidebar_position: 50
---

# Policy Priorities

Policy priorities help Password Policy Enforcer to resolve policy assignment conflicts. If more than
one policy is assigned to a user, and Password Policy Enforcer cannot decide which policy to enforce
using the other conflict resolution rules, then Password Policy Enforcer always enforces the policy
with the highest priority.

Follow the steps to set a policy's priority.

**Step 1 –** Click the Policies item to display the Policies view.

**Step 2 –** Click Set Priorities in the right pane of the management console. This option is only
visible when there is more than one password policy.

![managing_policies_6_363x434](/images/passwordpolicyenforcer/10.2/administration/managing_policies_6_363x434.webp)

**Step 3 –** Select the desired policy.

**Step 4 –** Click the arrow buttons to increase or decrease the priority of the policy.

**Step 5 –** Click OK to close the Policy Priorities page.

## Policy Selection Flowchart

This flowchart shows how Password Policy Enforcer chooses a policy for each user. Use the Test
Policies page to quickly determine which policy Password Policy Enforcer will enforce for a
particular user.

![managing_policies](/images/passwordpolicyenforcer/10.2/administration/managing_policies.webp)
