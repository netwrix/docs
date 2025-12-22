---
title: "Preparing the Computer"
description: "Preparing the Computer"
sidebar_position: 10
---

# Preparing the Computer

You only need one computer for the evaluation. A Windows Server 2016, 2019, or 2022 domain
controller in its own domain is recommended. You can also use Windows 8, 10 or 11 if you only need
to enforce policies for local accounts.

## Disable the Windows Password Policy Rules

If the Password Policy Enforcer and Windows password policies are both enabled, then users will have
to comply with both policies. This is not recommended for the evaluation because the Windows policy
may stop users from reusing recent passwords, or from changing their password more than once a day.
These restrictions can make it difficult to evaluate Password Policy Enforcer.

Follow the steps below to disable the Windows password policy.

**Step 1 –** Open the appropriate policy management tool:

- If you are evaluating Password Policy Enforcer on a domain, use the Group Policy Management
  Console (gmpc.msc) to display the GPOs linked at the domain level. Right-click the **Default
  Domain Policy GPO** (or whichever GPO you use to set the password policy), then click the
  **Edit...** button.
- If you are evaluating Password Policy Enforcer on a standalone server or workstation, open the
  **Local Group Policy Editor** (gpedit.msc).

**Step 2 –** Expand the following items:

- Computer Configuration
- Policies (if it exists)
- Windows Settings
- Security Settings
- Account Policies
- Password Policy

**Step 3 –** Double-click **Enforce password history** in the right pane of the GPO Editor.

**Step 4 –** Enter **0** in the text box, then click **OK**.

**Step 5 –** Repeat the step above for the Maximum Password Age and Minimum Password Length
policies.

**Step 6 –** Double-click the **Group Policy Management Editor**.

**Step 7 –** Close the **Group Policy Management Editor**.

![preparing_the_computer](/images/passwordpolicyenforcer/10.2/evaluation/preparing_the_computer.webp)

**Step 8 –** Execute the `gpupdate/target:computer` command to refresh the Group Policy.

## Create Test Accounts

Create two user accounts for the evaluation, PPETestUser and PPETestAdmin.

![preparing_the_computer_1](/images/passwordpolicyenforcer/10.2/evaluation/preparing_the_computer_1.webp)

Make PPETestAdmin a member of the Domain Admins group if you are evaluating Password Policy Enforcer
on a domain controller.
