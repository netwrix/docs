---
title: "Testing the Password Policy"
description: "Testing the Password Policy"
sidebar_position: 50
---

# Testing the Password Policy

The Users policy is now being enforced for all users. You can test the policy from the Password
Policy Enforcer management console, the Windows Change Password screen, or the Active Directory
Users and Computers / Local Users and Groups consoles.

## Management Console

This is often the best way to test password policies because it shows you the most information.
Follow the steps below to test password policies from the Password Policy Enforcer management
console.

**Step 1 –** Click the Policies item in the left pane of the management console, then click Test
Policies in the right pane.

![testing_the_password_policy](/images/passwordpolicyenforcer/10.2/evaluation/testing_the_password_policy.webp)

**Step 2 –** Enter a user name in the User name text box.

**Step 3 –** Enter a password in the Old Password and New Password text boxes.

The Password Policy Enforcer management console tests the password by simulating a password change,
but it does not change the user's password. It displays a green check mark below the Test button if
the new password complies with the Password Policy Enforcer password policy, or a red cross if it
does not comply. Detailed test results appear in the results panel below the New Password text box.

The Results tab shows the test results for each rule. The check boxes show which rules the new
password complied with.

| Rule                                                                                                                                                    | Status of Password Compliance with Rule           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| ![testing_the_password_policy_1](/images/passwordpolicyenforcer/10.2/evaluation/testing_the_password_policy_1.webp) | Rule disabled or not tested.                      |
| ![testing_the_password_policy_2](/images/passwordpolicyenforcer/10.2/evaluation/testing_the_password_policy_2.webp) | Rule enabled, password complies with rule         |
| ![testing_the_password_policy_3](/images/passwordpolicyenforcer/10.2/evaluation/testing_the_password_policy_3.webp) | Rule enabled, password does not comply with rule. |

Click the Log tab to view Password Policy Enforcer's internal event log. The information in the
event log can help you to understand why Password Policy Enforcer accepted or rejected a password.

:::note
Policy testing simulates a password change, but it may not always reflect what happens
when a user changes their password. See the
[Managing Policies](/docs/passwordpolicyenforcer/10.2/administration/managingpolicies/managing_policies.md)
topic for more information.
:::


## Windows Change Password Screen

This is how most users change their password. Testing password policies from the Windows Change
Password screen is useful because it allows you to see what your users see.

Follow the steps below to test password policies from the Windows Change Password screen.

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

![introduction_3](/images/passwordpolicyenforcer/10.2/evaluation/introduction_3.webp)

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
Enforcer management console, or the Change Password screen with the Password Policy Enforcer Client
installed to see this information.
:::


The table below contains some sample passwords and expected test results when the Users policy is
enforced. Try to change the password for the PPETestUser account to confirm that Password Policy
Enforcer is enforcing the password policy correctly.

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
shows you how to improve the password policy so Password Policy Enforcer will reject these
passwords.

:::note
Contact Netwrix support[ ](mailto:support@anixis.com)if Password Policy Enforcer is not
working as expected, and we will help you to resolve the problem.

:::
