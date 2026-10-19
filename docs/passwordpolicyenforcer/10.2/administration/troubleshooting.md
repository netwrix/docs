---
title: "Troubleshooting"
description: "Fix common Password Policy Enforcer problems, such as policies applied to the wrong users or unexpected password results."
sidebar_position: 150
---

# Troubleshooting

This topic contains troubleshooting information for the most common support questions. Contact
Netwrix support with any questions.

## A password policy assigned to some users applies to all users

Check the Default Policy in the Password Policy Server (PPS) Properties page. Users must comply with the default policy if
you haven't assigned another policy to them. Select the first (blank) item in the dropdown list if
you don't want a default policy.

## Password policy not displayed during password change

Open the Programs and Features list in Control Panel on the computer you are changing the password
from, and check if the Password Policy Client is in the list of installed programs. If it isn't,
install the Password Policy Client. See
[Password Policy Client](/docs/passwordpolicyenforcer/10.2/administration/passwordpolicyclient/password_policy_client.md)
for additional information.

If Password Policy Enforcer is enforcing a domain policy, search the Windows Application Event Log
on every domain controller for events from Password Policy Enforcer. If there are no events from
Password Policy Enforcer since the last restart on any domain controller, ensure that the domain controller has Password Policy Enforcer installed, and restart it. Check the Windows
Application Event Log again after the restart to ensure that Password Policy Enforcer started. For
local policies, search the Application Event Log on the local computer.

If there is a firewall between the client computer and the domain controllers (including Windows
Firewall), you must create firewall rules to allow the Password Policy Client and Password Policy
Server to communicate. Windows Server 2008 and later enable Windows Firewall by default.

Use the Test Policies page to test a password for the user. Click the **Log** tab to see if the user
has an assigned password policy.

Enable the Password Policy Server if you haven't already. See
[Management Console](/docs/passwordpolicyenforcer/10.2/administration/managementconsole/management_console.md)
for additional information.

Enable the Password Policy Client if you haven't already. See
[Password Policy Client](/docs/passwordpolicyenforcer/10.2/administration/passwordpolicyclient/password_policy_client.md)
for additional information.

## Accepting passwords that don't comply with the policy

If Password Policy Enforcer is enforcing a domain policy, search the Windows Application Event Log
on every domain controller for events from Password Policy Enforcer. If there are no events from
Password Policy Enforcer since the last restart on any domain controller, ensure that the domain controller has Password Policy Enforcer installed, and restart it. Check the Windows
Application Event Log again after the restart to ensure that Password Policy Enforcer started. For
local policies, search the Application Event Log on the local computer.

Use the Test Policies page to test a password that Password Policy Enforcer is accepting. Examine
the test results and event log to determine why Password Policy Enforcer accepted the password. If
the Test Policies page rejects the password, you must configure the policy. See
[Managing Policies](/docs/passwordpolicyenforcer/10.2/administration/managingpolicies/managing_policies.md)
for additional information.

If the **Enforce policy when password is reset** checkbox is clear in the PPS Properties page,
Password Policy Enforcer won't enforce the password policy when you reset a password from the
Active Directory Users and Computers console or the Local Users and Groups console. Select this
option during testing, or test password changes from the Windows Change Password screen.

## Rejecting passwords that comply with the policy

Use the Test Policies page to test a password that Password Policy Enforcer is rejecting. Examine
the test results and event log to determine why Password Policy Enforcer rejected the password. If
the Test Policies page rejects the password, you must configure the policy. See
[Managing Policies](/docs/passwordpolicyenforcer/10.2/administration/managingpolicies/managing_policies.md)
for additional information.

Set **User must change password at next logon** for the user and repeat the password change test.
If the test accepts the password, either Windows or Password Policy Enforcer enforces a minimum
password age. Disable the Minimum Age rule in Windows and Password Policy Enforcer to facilitate
testing. If you can't disable the Minimum Age rule, set **User must change password at next logon**
before every password change test to bypass the rule.

## Passwords that are accepted in the Test Policies page are rejected during a password change

See [Managing Policies](/docs/passwordpolicyenforcer/10.2/administration/managingpolicies/managing_policies.md)
for additional information.
