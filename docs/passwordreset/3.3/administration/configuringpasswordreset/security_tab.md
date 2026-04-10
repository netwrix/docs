---
title: "Security Tab"
description: "Security Tab"
sidebar_position: 50
---

# Security Tab

Use the **Security** tab to configure the inactivity timeout, password reset policies, and the
lockout threshold.

![configuring_npr_8](/images/passwordpolicyenforcer/11.0/passwordreset/administration/configuring_npr_8.webp)

### Inactivity Timeout

Users should remain at their computer while resetting their password or unlocking their account.
Their account could be compromised if they leave their computer after answering the first question.
NPR protects user accounts by expiring sessions if users take too long to respond. Select the
inactivity timeout from the **Expire idle sessions after...** dropdown list. Set it to 0 seconds to
disable the inactivity timeout.

### Reset Policies

Select the **Enforce the AD password history and minimum age policies for resets** checkbox to
enforce these Active Directory password policies during a reset. Older Windows versions can't
enforce these policies for password resets. This capability was added as a hotfix for Windows 2008
and 2008 R2. See the [KB2386717](http://support.microsoft.com/kb/2386717) Microsoft knowledge base
article for additional information. The hotfix is included with SP1 for Windows 2008 R2, and is a
standard feature on later Windows versions.

Users are more likely to forget a password shortly after changing it. Enforcing a minimum age for
password resets may increase the number of help desk calls because users can't reset
recently changed passwords. One solution is to clear the **Enforce the AD password history and minimum age policies for resets** checkbox, and select the **Require
users to change their password after a reset** checkbox instead. Active Directory doesn't
enforce the password history policy for the password reset, but does enforce it for the password
change when the user logs on. This stops users from reusing a recent password, but doesn't stop
them from resetting a recently changed password.

Users whose passwords are set to never expire in Active Directory aren't forced to change their
password during logon, even if this checkbox is selected.

:::note
Password Policy Enforcer's History rule is enforced for password resets if the **Enforce
policy when password is reset** checkbox is selected in the PPS properties page, and if the
**Enforce this rule when a password is reset** checkbox is selected in the History rule's
properties page. Netwrix Password Policy Enforcer doesn't enforce the Minimum Age rule for password
resets. See the Security Tab topic for additional information.
:::


Users may try to evade the password history policy by resetting their password several times in
quick succession to push a password off the password history list. Select a value from the
**Passwords can only be reset if they are at least...** dropdown list to stop users from doing
this. Set it to 0 days to disable this feature. If the Active Directory minimum password age policy
is also enforced for password resets, then the effective minimum age is the greater of the AD and
NPR minimum ages.

### Lockout

Password Reset's lockout shouldn't be confused with the Windows lockout policy. A Windows lockout
stops users from logging on, whereas an Password Reset lockout stops users from resetting their
password and unlocking their account. Windows locks out users when they enter too many incorrect
passwords. Password Reset locks out users when they enter too many incorrect answers or verification
codes.

Select a value from the **Lockout user after...** dropdown list to specify how many incorrect
answers Password Reset accepts before locking out a user. Set it to 0 incorrect answers to disable
the lockout feature. Password Reset counts incorrect verification codes as incorrect answers if the **Lockout
users if they enter too many incorrect verification codes** checkbox is selected on the
**Verification** tab.

:::note
Locked out users must re-enroll before they can use Password Reset to reset their password
or unlock their account. Password Reset resets the incorrect answer count when a user enrolls, or answers all
questions during a reset or unlock.

:::
