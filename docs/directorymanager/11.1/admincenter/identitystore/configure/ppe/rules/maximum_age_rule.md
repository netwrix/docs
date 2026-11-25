---
title: "Configure the Age (Max) Rule in Directory Manager"
description: "Force users to change passwords regularly, delay expiration for longer passwords, and set expiry mode, email, and logging options."
keywords:
  - Age (Max) rule
  - maximum password age
  - password expiration
  - PPE policies
  - Password Policy Enforcer
sidebar_position: 10
---

# Configure the Age (Max) Rule in Directory Manager

The Maximum Age rule forces users to change their passwords regularly. This decreases the likelihood that an attacker discovers a password before it changes. Only PPE policies can enforce this rule.

To configure the Age (Max) rule:

1. Enable the **Age (Max)** button.
2. In **Users must change password after days**, choose how many days must elapse before passwords expire.
3. Optional: To delay expiration for longer passwords, set **Delay expiration by `<_number of days_>` if the password contains `<_number of characters_>` or more characters**.

    You can encourage users to choose longer passwords by extending the lifetime of passwords that exceed a certain length. Choose a higher value from the number of days dropdown list and a minimum length from the number of characters dropdown list. Passwords that contain the required number of characters don't expire until the higher number of days.

    If both days values are identical, passwords expire after the specified number of days, regardless of length. The two values are the days in **Users must change password after days** and the days in this field.

    :::note
    When the Maximum Age rule is configured to delay the expiry of longer passwords, it creates an Active Directory security group called "PPE Extended Maximum Age Users". Password Policy Enforcer uses this group to identify which users are eligible for a delayed password expiry. Users are added to and removed from the group automatically.

    You can move and rename this group, but don't change the pre-Windows 2000 name. Contact Netwrix support if you must change the pre-Windows 2000 name. After you move or rename the group, change any Password Policy Enforcer configuration setting to trigger a cache update.

    Password Policy Enforcer recreates this group if you delete it. To stop creating a group, make the two days values equal in all policies.
    :::

4. From the **Mode** dropdown list, choose how Password Policy Enforcer handles expired passwords.

    - Standard mode forces all users with expired passwords to change their password during logon.
    - Transitional modes force a percentage of users with expired passwords to change their password during logon.
    - Warning mode warns users that their password has expired without forcing them to change it.

    Use the Warning and Transitional modes to gradually introduce a new password policy. These modes reduce the number of forced password changes. This allows the help desk to deal with any extra calls relating to the new policy. Switch to the Standard mode after most users have had a chance to change their password.

    It takes approximately 50 days for all users with expired passwords to be forced to change them in the 2% Transitional mode (2% every day). The 5% Transitional mode reduces this to 20 days. The 10% Transitional mode further reduces it to 10 days. The selection algorithm is randomized, so these are estimates only. You must switch to the Standard mode to ensure that all old passwords expire.

    Users with expired passwords are always prompted to change their password, even in the Transitional and Warning modes. Users can ignore the prompt unless they are being forced to change their password.

    :::note
    The password expiry prompt is a Windows client feature. It is displayed even if the Password Policy Client isn't installed. By default, Windows clients display the prompt 5 days before passwords expire. You can alter this behavior in the Windows Group Policy security settings. See the [Interactive logon: Prompt user to change password before expiration](https://docs.microsoft.com/en-us/windows/security/threat-protection/security-policy-settings/interactive-logon-prompt-user-to-change-password-before-expiration) Microsoft article for additional information.
    :::

    Password Policy Enforcer expires passwords at 1:00 AM every day on the domain controller holding the PDC emulator operations master role. It sets "User must change password at next logon" for users whose password has expired or is due to expire on that day. Password Policy Enforcer doesn't expire passwords if the Maximum Age rule is in Warning mode, or for users with "Password never expires" set in Active Directory. Some passwords don't expire immediately when the Maximum Age rule is in a Transitional mode.

## Set up email

Click **Set up Email** to configure the email message options.

1. In the From text box, enter the name and email address you want to appear in the From field of the email. Use the format "Display Name" `<mailbox@domain.com>`.
2. In the Subject text box, enter the text for the **Subject** field of the email.
3. In the large text box, enter the body of the email.

### Set up SMTP

Not supported.

## Log expired passwords

To record every expired password event in a log, select the Log event for every expired password checkbox. It records the event in a log at the following path.
