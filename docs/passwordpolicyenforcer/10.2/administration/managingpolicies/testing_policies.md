---
title: "Testing Policies"
description: "Testing Policies"
sidebar_position: 70
---

# Testing Policies

You can quickly test your Password Policy Enforcer configuration by simulating a password change
from the Password Policy Enforcer management console.

## Password Test

Follow the steps below to test your configuration.

**Step 1 –** Click the **Policies** item to display the Policies view.

**Step 2 –** Click **Test Policies** in the right pane of the management console.

![passwordtest](/images/passwordpolicyenforcer/10.2/administration/passwordtest.webp)

**Step 3 –** Select the **Password** Test tab.

**Step 4 –** Type a **user name** in the User name text box, and a password in the Old Password and
New Password text boxes.

**Step 5 –** Click **Test**, or wait a few seconds if Test passwords as I type is selected.

:::note
Policy testing simulates a password change, but it does not change the password. As it is
only a simulation, you do not have to enter the correct password in the Old Password text box.
:::


The Password Policy Enforcer management console displays a green check mark below the Test button if
the new password complies with the Password Policy Enforcer password policy, or a red cross if it
does not comply. Detailed test results appear in the results panel.

**Step 6 –** Click the **Results** tab to view the test results for each rule. The check boxes show
which rules the new password complied with.

| Rule                                                                                                                                                    | Status of Password Compliance with Rule           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| ![testing_the_password_policy_1](/images/passwordpolicyenforcer/10.2/evaluation/testing_the_password_policy_1.webp) | Rule disabled or not tested.                      |
| ![testing_the_password_policy_2](/images/passwordpolicyenforcer/10.2/evaluation/testing_the_password_policy_2.webp) | Rule enabled, password complies with rule         |
| ![testing_the_password_policy_3](/images/passwordpolicyenforcer/10.2/evaluation/testing_the_password_policy_3.webp) | Rule enabled, password does not comply with rule. |

![managing_policies_12](/images/passwordpolicyenforcer/10.2/administration/managing_policies_12.webp)

**Step 7 –** Click the **Log** tab to view Password Policy Enforcer's internal event log. The event
log can help you to understand why Password Policy Enforcer accepted or rejected a password. For
example, you can use the event log to see which:

- Computer the configuration was read from.
- Policy was assigned to the user, and why.
- Dictionary word or keyboard pattern matched with the password.
- Errors or warnings occurred during testing.

## Bulk Password Test

Bulk Password Test feature allows to check a large number of passwords against a selected policy and
a get a report of the accepted and rejected passwords.

![bulkpasswordtest](/images/passwordpolicyenforcer/10.2/administration/bulkpasswordtest.webp)

Follow the steps below to test your configuration.

**Step 1 –** Click the **Policies** item to display the Policies view.

**Step 2 –** Click **Test Policies** in the right pane of the management console.

**Step 3 –** Select the location of the password file.

**Step 4 –** Select the location of the folder where you want to upload the result.

:::note
It is recommended that the Password File and Result folder are not located on a shared
drive, so the processing can be done faster.
:::


**Step 5 –** Select a desired policy from the drop down list.

**Step 6 –** If you want to receive a list of unacceptable passwords, you should use the following
filters:

- Show compliant passwords – the compliant passwords will be displayed.
- Show rejected passwords – the rejected passwords will be displayed.

**Step 7 –** Click the **Run** button.

Statistics allows you to see the file line size, the number of passwords processed, and the result
of processing each line. Click on the desired filters to show compliant and/or rejected passwords.

| Statistics of the Bulk Password Testing |                                                                                                         |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Status                                  | Shows whether the operation is ready for scanning, processing, or whether the scan has been terminated. |
| Accepted                                | Shows the number of the accepted passwords.                                                             |
| Number of lines                         | Shows the number of lines within the password.                                                          |
| Checked                                 | Shows the number of the checked passwords.                                                              |
| Rejected                                | Shows the number of the rejected passwords.                                                             |
| Lines processed                         | Shows the number of the processed lines.                                                                |

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
