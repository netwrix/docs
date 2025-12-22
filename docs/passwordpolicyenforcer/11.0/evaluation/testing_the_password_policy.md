---
title: "Test the Password Policy"
description: "Test the Password Policy"
sidebar_position: 50
---

# Test the Password Policy

You can test the policy from the policy settings right where you are in the policy settings. You can
also test it from the Password Policy Enforcer configuration console dashboard, the Windows Change
Password screen, or the Active Directory Users and Computers / Local Users and Groups consoles.

## Configuration Console

Test policy is available in the policy settings and on the configuration console dashboard. This
option shows you the most information about the policy.

**Step 1 –** Click **Test policy**.

**Step 2 –** Select the **PPETestUser** you created. The details pane displays the policy applied to
the selected user.

![Enter user name for the test](/images/passwordpolicyenforcer/11.0/evaluation/evaltestuser.webp)

**Step 3 –** Enter a password to test.

The Password Policy Enforcer configuration console tests the password by simulating a password
change, but it does not change the user's password. A green check mark indicates the password
complies, a red and white x indicates the password fails. Detailed test results appear in the
results pane.

**mypassword** fails two requirements. You can hover over the requirements to view the associated
rule.

![mypassword fails](/images/passwordpolicyenforcer/11.0/evaluation/evaltestuserfail.webp)

Click **View log** to expand Password Policy Enforcer's internal event log. The information in the
event log can help you to understand why Password Policy Enforcer accepted or rejected a password.

:::note
Policy testing simulates a password change, but it may not always reflect what happens
when a user changes their password. See the
[Policy Testing vs. Password Changes](/docs/passwordpolicyenforcer/11.0/admin/manage-policies/testpolicy.md#policy-testing-vs-password-changes)
topic for additional information.
:::


## Windows Change Password Screen

This is how most users change their password. Testing password policies from the Windows Change
Password screen is useful because it allows you to see what your users see.

From the Windows Change Password screen:

**Step 1 –** Press **CTRL + ALT + DEL**.

**Step 2 –** Click the **Change a password** option.

**Step 3 –** Enter a user name in the User name text box.

**Step 4 –** Enter passwords in the Old Password, New Password, and Confirm Password text boxes.

**Step 5 –** Click the **submit arrow**.

You may have noticed that the Change Password screen looks different after installing Password
Policy Enforcer. The Password Policy Enforcer password policy is shown during password changes if
the Password Policy Client is installed. This helps users to choose a compliant password. The
Password Policy Client also changes the message that users see when their password is rejected. Both
these messages are customizable.

![introduction_3](/images/passwordpolicyenforcer/11.0/evaluation/introduction_3.webp)

The Password Policy Client does not modify any Windows system files, and you do not have to install
it to enforce a Password Policy Enforcer password policy. Web browser based versions of the Password
Policy Enforcer Client are also available.

## Active Directory Users / Computers Console and local Users and Groups Console

Administrators often change domain passwords from the Active Directory Users and Computers console
and local passwords from the Local Users and Groups console. In fact, these consoles do not change
passwords; they reset them. This is an important distinction because a password reset is:

- Restricted to privileged users
- Performed without knowing the current password

Password Policy Enforcer can enforce the password policy for both password changes and password
resets. It does this by default, but you can configure it to only enforce the password policy for
password changes. The Minimum Age rule is never enforced when a password is reset.

Follow the steps below to test password policies from these consoles.

**Step 1 –** Open the appropriate console:

- If Password Policy Enforcer is enforcing a domain policy, open the Active Directory Users and
  Computers console
- If Password Policy Enforcer is enforcing a local policy, open the Local Users and Groups console

**Step 2 –** Right-click a user, then click **Reset Password**.

**Step 3 –** Enter a password in the **New password** and **Confirm password** text boxes.

**Step 4 –** Click **OK**.

:::note
These consoles do not explain why a password was rejected. Use the Password Policy
Enforcer configuration console, or the Change Password screen with the Password Policy Enforcer
Client installed to see this information.
:::


Here are some sample passwords and expected test results when the Users policy is enforced. Try to
change the password for the PPETestUser account to confirm that Password Policy Enforcer is
enforcing the password policy correctly.

| Password | Result   | Reason                                       |
| -------- | -------- | -------------------------------------------- |
| AbdF6    | Rejected | Does not contain at least 7 characters       |
| abd65fgo | Rejected | Does not contain an upper alpha character    |
| ABD65FGO | Rejected | Does not contain a lower alpha character     |
| PPETest1 | Rejected | Similar to user logon name                   |
| Aardvark | Rejected | Similar to common password (dictionary file) |
| tseTEPP  | Accepted | N/A                                          |
| kravdraA | Accepted | N/A                                          |
| Aardv@rk | Accepted | N/A                                          |

Password Policy Enforcer accepts the last three passwords in the table because they comply with the
password policy, but this highlights some weaknesses in this policy:

- tseTEPP is part of the user logon name with the characters reversed
- kravdraA is Aardvark with the characters reversed
- Aardv@rk is Aardvark with an @ substituting an "a."

These three passwords are only marginally stronger than the rejected passwords. The next section
shows you how to improve the password policy so Password Policy Enforcer rejects these passwords.

:::note
Contact Netwrix support[ ](mailto:support@anixis.com)if Password Policy Enforcer is not
working as expected. We can help you resolve the problem.

:::
