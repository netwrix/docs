---
title: "SoD Testing Mode"
description: "SoD Testing Mode"
sidebar_position: 100
---

# SoD Testing Mode

Testing Mode helps you implement a new SoD solution, or to clean up your existing account. By
creating and running rules in a test mode, you can identify and resolve potential issues with a rule
without creating SoD incidents.

Testing Mode provides two ways to test a rule without generating SoD incidents:

- Test on Roles: checks to see if there are any roles violating the rule.
- Test on Employees: checks to see if any employees are violating the rule.

The violations list in Employee or Role customizations are updated during testing.

To access Testing Mode:

1. Create a new Rule or edit an existing Rule:
   **SoD** > **SoD Rule Library** > **New** or **Search**
2. Open the **SoD Rule Processing Status** tab.
3. Select **Test on Roles** or **Test on Employees**.
4. Click **Run SoD** to run the test. It can take over an hour to evaluate large accounts.

Any of these events require a role to be re-evaluated:

**Trigger Role Job**

- Anytime Role(s) are added/updated
- Anytime the Rules are added/updated
- Manual trigger on the Role

**Trigger Role Assignment**

- Anytime Role(s) are added/updated
- Anytime the Rules are added/updated
- Anytime Role Assignments on an Employee are added/updated
- Anytime Global Permissions are added/updated
- Also triggered when the Manual trigger on the Role is selected
- Manual Trigger on the Employee

You can manually start the evaluation process, or wait until the Spider runs overnight. To manually
run the process:

1. Open **SoD** > **SoD Processing Status** > **Run SoD on User Roles**
2. Select all of the roles you have modified.
3. Click **Run SoD**

## Test Reports

Test Reports are available for both **User Role Test Violations** and **Employee Test Violations**:

1. Open **SoD** > **SoD Testing** and select one of the Reports:

    - **User Role Test Violations Summary**
    - **Employee Test Violations Summary**
    - **User Role Test Violation Detailed**: displays User Role Name link, SoD Violation, Base
      Permissions, Conflicting Permissions and User Role link. Report can be exported to Excel.
    - **Employee Test Violation Detailed**: displays a list with Employee Name link, SoD Violation,
      Non-compliant Roles, Non-compliant Global Permissions, Base Permissions, and Conflicting
      Permissions. Report can be exported to Excel.

2. Click **View** for the Rule you want to see.
3. Open the **SoD** tab.
4. Select **SoD Testing** and one of the tabs:. There are links to **View Violation Details** and to
   open the Role Record.

    ![SoD Test Report](/images/platgovnetsuite/sod/sod_test_report.webp)

    Details can be exported in an Excel format.
