---
title: "Maximum Age Rule"
description: "Maximum Age Rule"
sidebar_position: 10
---

# Maximum Age Rule

The Maximum Age rule forces users to change their passwords regularly. This decreases the likelihood
of an attacker discovering a password before it changes. This rule can only be enforced by domain
policies.

![ppe_rules](/images/passwordpolicyenforcer/10.2/administration/ppe_rules.webp)

## Settings Tab

Configure the Settings tab to ensure that passwords are changed regularly to increase their
effectiveness.

Select the **Enabled** check box to enable the Maximum Age rule.

Choose a value from the first days drop-down list to specify how many days must elapse before
passwords expire.

You can encourage users to choose longer passwords by extending the lifetime of their password if it
exceeds a certain length. To enable this feature, choose a higher value from the second days
drop-down list and a minimum length from the contains drop-down list. Passwords that contain the
required number of characters will not expire until the second (higher) days value. If both days
values are identical, then passwords will expire after the specified number of days, irrespective of
length.

:::note
When the Maximum Age rule is configured to delay the expiry of longer passwords, it
creates an Active Directory security group called "PPE Extended Maximum Age Users". Password Policy
Enforcer uses this group to identify which users are eligible for a delayed password expiry. Users
are added and removed from the group automatically. You can move and rename this group, but do not
change the pre-Windows 2000 name. Contact Netwrix support if you must change the pre-Windows 2000
name. Change a Password Policy Enforcer configuration setting (any setting) after moving or renaming
the group to trigger a cache update in Password Policy Enforcer. Password Policy Enforcer recreates
this group if you delete it. To stop creating a group, make the two days values equal in all
policies.
:::


Optionally, check the **Log Event...** box to have Password Policy Enforcer log an event each time a
password expires. Password Policy Enforcer expires passwords 1:00 AM daily on the server holding the
PDC emulator operations master role. With this optional feature enabled Password Policy Enforcer
will log an event for every password that expires. Events are logged to the Windows Application
Event Log.

Choose a value from the Mode drop-down list to specify how Password Policy Enforcer handles expired
passwords. The Standard mode forces all users with expired passwords to change their password during
logon. The Transitional modes force a percentage of users with expired passwords to change their
password during logon. The Warning mode warns users that their password has expired without forcing
them to change it.

Click the Email tab to configure the e-mail message options. See the
[Mailer](/docs/passwordpolicyenforcer/10.2/administration/mailer/mailer.md)
topic for additional information.

Use the Warning and Transitional modes to gradually introduce a new password policy. These modes
reduce the number of forced password changes, allowing the help desk to deal with any extra calls
relating to the new policy. Switch to the Standard mode after most users have had a chance to change
their password.

It takes approximately 50 days for all users with expired passwords to be forced to change them in
the 2% Transitional mode (2% every day). The 5% Transitional mode reduces this to 20 days, and the
10% Transitional mode further reduces it to 10 days. The selection algorithm is randomized, so these
are estimates only. You must switch to the Standard mode to ensure that all old passwords will
expire.

Users with expired passwords are always prompted to change their password, even in the Transitional
and Warning modes. Users can ignore the prompt to change their password unless they are being forced
to change it.

:::note
The password expiry prompt is a Windows client feature, and is displayed even if the
Password Policy Client is not installed. Windows clients display the prompt 5 days before passwords
expire by default. You can alter this behavior in the Windows Group Policy security settings. See
the
[Interactive logon: Prompt user to change password before expiration](https://docs.microsoft.com/en-us/windows/security/threat-protection/security-policy-settings/interactive-logon-prompt-user-to-change-password-before-expiration)
Microsoft article for additional information.
:::


Password Policy Enforcer expires passwords at 1:00 AM every day on the domain controller holding the
PDC emulator operations master role. It sets "User must change password at next logon" for users
whose password has expired, or is due to expire on that day. Password Policy Enforcer does not
expire passwords if the Maximum Age rule is in Warning mode, or for users with "Password never
expires" set in Active Directory. Some passwords will not expire immediately when the Maximum Age
rule is in a Transitional mode.
