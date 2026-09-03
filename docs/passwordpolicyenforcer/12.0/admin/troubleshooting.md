---
title: "Troubleshooting"
description: "Troubleshooting"
sidebar_position: 90
---

# Troubleshooting

This topic contains troubleshooting information for the most common support questions. Contact
Netwrix support with any questions.

PPE enforces a password policy assigned to some users for all users. Check the Default Policy in
the Password Policy Server (PPS) Properties page. Users must comply with the default policy if you
haven't assigned another policy to them. Select the first (blank) item in the dropdown list if you don't want a default policy.

#### Password policy not displayed during password change

Open the Programs and Features list in Control Panel on the computer where you change the password,
and check if the Password Policy Client is in the list of installed programs. If it isn't,
then install the Password Policy Client. See the [Password Policy Client](/docs/passwordpolicyenforcer/12.0/admin/password-policy-client/password_policy_client.md)
topic for additional information.

If Password Policy Enforcer is enforcing a domain policy, then search the Windows Application Event
Log on every domain controller for events from Password Policy Enforcer. If there are no events from
Password Policy Enforcer since the last restart on any domain controller, then ensure that
Password Policy Enforcer is installed on that domain controller and restart it. Check the Windows
Application Event Log again after the restart to ensure that Password Policy Enforcer started. For
local policies, search the Application Event Log on the local computer.

If there is a firewall between the client computer and the domain controllers (including Windows
Firewall), then you must create firewall rules to allow the Password Policy Client and Password
Policy Server to communicate. Windows Firewall runs by default on Windows Server 2008 and
later.

Use the Test Policies page to test a password for the user. Click the **Log** tab to see whether the
user has an assigned password policy.

Ensure that the Password Policy Server is enabled.

Ensure that the Password Policy Client is enabled. See
[Password Policy Client](/docs/passwordpolicyenforcer/12.0/admin/password-policy-client/password_policy_client.md) topic for additional information.

#### Accepting passwords that don't comply with the policy

If Password Policy Enforcer is enforcing a domain policy, then search the Windows Application Event
Log on every domain controller for events from Password Policy Enforcer. If there are no events from
Password Policy Enforcer since the last restart on any domain controller, then ensure that
Password Policy Enforcer is installed on that domain controller and restart it. Check the Windows
Application Event Log again after the restart to ensure that Password Policy Enforcer started. For
local policies, search the Application Event Log on the local computer.

Use the Test Policies page to test a password that Password Policy Enforcer is accepting. Examine
the test results and event log to determine why Password Policy Enforcer accepted the password. If
the Test Policies page rejects the password, you must configure the policy. See the
[Policy Testing vs. Password Changes](/docs/passwordpolicyenforcer/12.0/admin/manage-policies/testpolicy.md#policy-testing-vs-password-changes) topic for
additional information.

If you don't select the **Enforce policy when password is reset** checkbox in the PPS Properties
page, then Password Policy Enforcer won't enforce the password policy for passwords reset from the
Active Directory Users and Computers console, or the Local Users and Groups console.
You should select this option during testing, or test password changes from the Windows Change
Password screen.

#### Rejecting passwords that comply with the policy

Use the Test Policies page to test a password that Password Policy Enforcer is rejecting. Examine
the test results and event log to determine why Password Policy Enforcer rejected the password. If
the Test Policies page rejects the password, you must configure the policy. See the
[Policy Testing vs. Password Changes](/docs/passwordpolicyenforcer/12.0/admin/manage-policies/testpolicy.md#policy-testing-vs-password-changes) topic for
additional information.

Set **User must change password at next logon** for the user and repeat the password change test. If
Password Policy Enforcer accepts the password, then either Windows or Password Policy Enforcer is
enforcing a minimum password age. Disable the Minimum Age rule in Windows and Password Policy Enforcer to
facilitate testing. If you can't disable the Minimum Age rule, then set User must change password
at next logon before every password change test to bypass the rule.

#### Passwords that are accepted in the Test Policies page are rejected during a password change

See the [Policy Testing vs. Password Changes](/docs/passwordpolicyenforcer/12.0/admin/manage-policies/testpolicy.md#policy-testing-vs-password-changes)
topic for additional information.
