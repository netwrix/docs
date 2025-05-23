---
sidebar_position: 6572
title: Enforce Multiple Policies
---

# Enforce Multiple Policies

Password Policy Enforcer can enforce up to 256 password policies on each domain or computer. You can assign policies to users directly, or indirectly through Active Directory security groups and containers (Organizational Units).

### Create Additional Password Policy

If you are in the settings for your first policy, click the left arrow beside the policy name to return to the Configuration Console dashboard.

![Return to the dashboard](../../../../../static/images/PasswordPolicyEnforcer_11.0/Content/Resources/Images/PasswordPolicyEnforcer/Eval/evalDashboard.png "Return to the dashboard")

Create an additional password policy.

**Step 1 –** Click the context menu beside your first policy and select **Make copy**.

**Step 2 –** Enter **Admins Policy** for the Policy duplication.

![Enter Admins Policy](../../../../../static/images/PasswordPolicyEnforcer_11.0/Content/Resources/Images/PasswordPolicyEnforcer/Eval/evalCopyPolicy2.png "Enter Admins Policy")

**Step 3 –** Click **Make copy**.

**Step 4 –** Open the **Users & Groups** tab.

![Open the Users & Groups tab](../../../../../static/images/PasswordPolicyEnforcer_11.0/Content/Resources/Images/PasswordPolicyEnforcer/Eval/evalUserGroups.png "Open the Users & Groups tab")

**Step 5 –** Click the **+** in the **Groups** list and enter **Domain Admins**. Specify a Domain or local **Location** depending on your evaluation set up.

**Step 6 –** Click **OK**. Domain Admins are added to the **Groups**.

![Domain Admins added](../../../../../static/images/PasswordPolicyEnforcer_11.0/Content/Resources/Images/PasswordPolicyEnforcer/Eval/evalDomainAdmins.png "Domain Admins added")

* Members of the Domain Admins group (or the PPETestAdmin user, if not using a domain controller) must now comply with the Administrators policy. All other users must comply with the Users policy. Users will not notice any difference at this point because the two polices are enforcing identical rules.

### Differentiate Password Policies

To differentiate the policies, change the minimum password length for the Admins policy from seven to nine characters.

**Step 1 –** Open the **Rules** tab.

**Step 2 –** Open the **Length** rule.

**Step 3 –** Select **9** from the **At Least** drop-down list.

![Set the length to 9](../../../../../static/images/PasswordPolicyEnforcer_11.0/Content/Resources/Images/PasswordPolicyEnforcer/Eval/evalLength9.png "Set the length to 9")

**Step 4 –** Click **Save**.

**Step 5 –** Click **Test policy**.

**Step 6 –** Select the **PPETestAdmin** user. The results pane shows the **Admins Policy** is being applied, and the password must **contain at least 9 characters**.

![Admins policy is being tested](../../../../../static/images/PasswordPolicyEnforcer_11.0/Content/Resources/Images/PasswordPolicyEnforcer/Eval/evalAdmin.png "Admins policy is being tested")

Use the Password Policy Enforcer configuration console, the Windows Change Password screen, the Active Directory Users and Computers console, or the Local Users and Groups console to test password changes and resets for the **PPETestUser** and **PPETestAdmin** accounts. Password Policy Enforcer should enforce the Eval policy for **PPETestUser**, and the Admins policy for **PPETestAdmin**.

**NOTE:** The [Set Priorities](../Administration/Manage Policies#Set "Administration") topic contains more information about policy assignments, and how Password Policy Enforcer resolves policy assignment conflicts that occur when more than one policy is assigned to a user.