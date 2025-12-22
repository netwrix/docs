---
title: "Test Policy"
description: "Test Policy"
sidebar_position: 60
---

# Test Policy

You can quickly test your Password Policy Enforcer configuration by simulating a password change.
Click **Test Policy** from the Configuration Console dashboard or when you are setting up a policy.
Test policy opens in a separate window. Remember to **Save** your rules and changes prior to
testing.

Test policy opens on the **By user** tab.

![Test by User](/images/passwordpolicyenforcer/11.0/administration/testuser.webp)

## By User

Policy testing simulates a password change, but it does not change the password.

**Step 1 –** Click **Test policy** from the Configuration Console dashboard or when you are setting
up a policy.

**Step 2 –** Select a **user**.

**Step 3 –** **Type in a password to simulate its change**. As you type, the new password is
evaluated and the results are displayed.

![Failing Password](/images/passwordpolicyenforcer/11.0/administration/testuserfail.webp)

The entered password is failing in this example, due to not meeting the length requirement. There is
a red x indicating the failure. You can hover over the requirements to see the rule name.

In this example, the password passes. Notice the green check beside the entered password.

![Passing password](/images/passwordpolicyenforcer/11.0/administration/testuserpass.webp)

Expand the **View log** for details:

- Computer the configuration was read from.
- Policy was assigned to the user, and why.
- Dictionary word or keyboard pattern matched with the password.
- Errors or warnings occurred during testing.

Turn on **Verbose Logging** to view the performed tests and results.

![Verbose logging](/images/passwordpolicyenforcer/11.0/administration/testuserverbose.webp)

## Bulk Password Test

Bulk Password Test feature allows to check a large number of passwords against a selected policy and
a get a report of the accepted and rejected passwords.

**Step 1 –** Click **Test policy** from the Configuration Console dashboard or when you are setting
up a policy.

**Step 2 –** Open the **Password bulk test** tab.

![Password bulk test](/images/passwordpolicyenforcer/11.0/administration/testbulk.webp)

**Step 3 –** Select a policy for the test.

**Step 4 –** **Browse** to the text file containing the passwords to test. Processing is faster if
the file is not on a shared drive.

**Step 5 –** Click **Test passwords**. The **Statistics** are displayed.

![Test results](/images/passwordpolicyenforcer/11.0/administration/testbulkresult.webp)

| Statistics of the Bulk Password Testing |                                                                                         |
| --------------------------------------- | --------------------------------------------------------------------------------------- |
| Status                                  | Shows whether the operation is ready for scanning, processing, terminated, or finished. |
| Tested                                  | Number of tested passwords.                                                             |
| Accepted                                | Number of accepted passwords.                                                           |
| Rejected                                | Number of rejected passwords.                                                           |
| Number of lines                         | Number of lines within the file.                                                        |
| Lines processed                         | Shows the number of the processed lines.                                                |

Click **Show full report** to view the test details.

![Test Bulk Report](/images/passwordpolicyenforcer/11.0/administration/testbulkreport.webp)

You can use the **Report settings** to customize the report:

- Result report folder. Processing is faster if this is not a shared drive.
- Show accepted passwords
- Show rejected passwords

## Policy Testing vs. Password Changes

- Policy testing simulates a password change, but it may not always reflect what happens when a user
  changes their password. A password change may yield different results to a policy test because:
- Policy testing does not simulate the Windows password policy rules. If the Windows password rules
  are enabled, then Windows may reject a password even though it complies with all the Password
  Policy Enforcer rules.
- Policy testing does not enforce the Minimum Age rule.
- Policy testing does not enforce the History rule.
- Policy testing enforces the password policy even if Password Policy Enforcer or the assigned
  policy is disabled. This allows you to test your configuration before enabling Password Policy
  Enforcer, or a new password policy.
- Policy testing occurs on the computer that the management console is running on. If the management
  console is connected to a remote domain configuration, then it may not find the dictionary file on
  the local computer, or the local dictionary file may be different to the one on the domain
  controller. Copy the dictionary file onto the local computer (in the same path) to avoid this
  problem.
- If the management console is connected to a domain configuration and the Password Policy Enforcer
  configuration was modified recently, then Active Directory may still be propagating the new
  configuration to the other domain controllers.
