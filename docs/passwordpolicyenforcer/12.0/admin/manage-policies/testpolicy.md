---
title: "Test Policy"
description: "Test Policy"
sidebar_position: 60
---

# Test Policy

You can test your Password Policy Enforcer configuration by simulating a password change.
Click **Test Policy** from the Configuration Console dashboard or when setting up a policy.
Test policy opens in a separate window. Remember to **Save** your rules and changes before
testing.

Test policy opens on the **By user** tab.

## By User

Policy testing simulates a password change, but it doesn't change the password.

**Step 1 –** Click **Test policy** from the Configuration Console dashboard or when setting up a
policy.

**Step 2 –** Select a **user**.

**Step 3 –** **Type in a password to simulate its change**.

As you type, Password Policy Enforcer evaluates the password against the policy in real time. For example, typing a short password like ThisIs causes the password to fail the policy overall. The requirements list shows that the password doesn't meet the minimum length. Hovering over a requirement gives you the rule name.

When you enter a password that addresses the minimum length requirement — for example, ThisIsNewSecurityCode — it passes the check.

Expand the **View log** for details:

- The computer from which Password Policy Enforcer read the configuration.
- The policy Password Policy Enforcer assigned to the user, and why.
- Dictionary word or keyboard pattern matched with the password.
- Errors or warnings occurred during testing.

Turn on **Verbose Logging** to view the tests that Password Policy Enforcer performed and their results.

## Bulk Password Test

The Bulk Password Test feature lets you check a large number of passwords against a selected policy and get a report of the accepted and rejected passwords.

**Step 1 –** Click **Test policy** from the Configuration Console dashboard or when setting up a
policy.

**Step 2 –** Open the **Password bulk test** tab.

**Step 3 –** Select a policy for the test.

**Step 4 –** **Browse** to the text file containing the passwords to test. Processing is faster if
the file isn't on a shared drive.

**Step 5 –** Click **Test passwords**. The **Statistics** appear.

| Statistics of the Bulk Password Testing |                                                                                         |
| --------------------------------------- | --------------------------------------------------------------------------------------- |
| Status                                  | Shows whether the operation is ready for scanning, processing, terminated, or finished. |
| Tested                                  | Number of tested passwords.                                                             |
| Accepted                                | Number of accepted passwords.                                                           |
| Rejected                                | Number of rejected passwords.                                                           |
| Number of lines                         | Number of lines within the file.                                                        |
| Lines processed                         | Number of processed lines.                                                              |

Click **Show full report** to view the test details.

You can use the **Report settings** to customize the report:

- Result report folder. Processing is faster if this isn't a shared drive.
- Show accepted passwords
- Show rejected passwords

## Policy Testing vs. Password Changes

- Policy testing simulates a password change, but it may not always reflect what happens when a user
  changes their password. A password change may yield different results to a policy test because:
- Policy testing doesn't simulate the Windows password policy rules. If you enable the Windows
  password rules, then Windows may reject a password even though it complies with all the Password
  Policy Enforcer rules.
- Policy testing doesn't enforce the Minimum Age rule.
- Policy testing doesn't enforce the History rule.
- Policy testing enforces the password policy even if you disable Password Policy Enforcer or the
  assigned policy. Use this to test your configuration before enabling Password Policy
  Enforcer, or a new password policy.
- Policy testing occurs on the computer that the Configuration Console is running on. If the Configuration Console
  is connected to a remote domain configuration, then it may not find the dictionary file on
  the local computer, or the local dictionary file may be different to the one on the domain
  controller. Copy the dictionary file onto the local computer (in the same path) to avoid this
  problem.
- If the Configuration Console is connected to a domain configuration and you recently modified the Password Policy Enforcer
  configuration, then Active Directory may still be propagating the new
  configuration to the other domain controllers.
