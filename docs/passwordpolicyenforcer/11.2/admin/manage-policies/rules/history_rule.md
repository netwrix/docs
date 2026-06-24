---
title: "History"
description: "History"
sidebar_position: 70
---

# History Rule

The History rule rejects passwords that are identical to recently used passwords. Avoid password
reuse because it defeats the purpose of regular password changes. Password Policy
Enforcer can stop users from reusing passwords for a specified number of password changes or a
number of days.

![History rule](/images/passwordpolicyenforcer/11.2/administration/history.webp)

Select the **History** checkbox to enable the History rule.

Select one of the options:

**One of the last** option to stop passwords from being reused for a specified number of password
changes. Choose the number of password changes from the dropdown list.

**A password used in the last** option to stop passwords from being reused for a specified number of
days. Enter the number of days in the text box.

Choose an item from the **Hash function** dropdown list. Netwrix recommends Argon2 for best security.
The Argon2 option uses 100,000 times more computing power to create a hash, so an attacker needs
100,000 more computing power to crack Argon2 hashes. Argon2 increases password change times by 400%,
so a domain controller that can handle 1,000 password changes a minute with SHA-256 can
handle about 250 password changes a minute with Argon2. All numbers are approximate. Use Argon2 if your
domain controllers can handle the load.

:::note
Changing the **Hash function** doesn't modify existing history records. It sets the
function for new password history records. If a user has Argon2 and SHA-256 hashes in
their password history, then Password Policy Enforcer calculates both the Argon2 and SHA-256 hashes
during a password change to ensure the new password isn't in the password history.
:::


Password Policy Enforcer normally doesn't enforce the History rule during a password reset. Select the **Enforce this rule
when a password is reset** checkbox to override the default behavior. You must also select the
**Enforce policy when password is reset** option in the PPS Properties page to enforce this rule
when a password is reset.

Click the **Messages** tab to customize the Password Policy Client rule inserts.

:::note
Password Policy Enforcer doesn't enforce the History rule when you test passwords from the Test Policies page.
:::


Password Policy Enforcer updates a user's password history whenever their password changes. Password
Policy Enforcer updates the password history even if PPE or the assigned policy is disabled. Password
Policy Enforcer deletes a user's password history if the user doesn't have an assigned policy, or if
the History rule is disabled at the time of the password change.

Password Policy Enforcer stores its password history in Active Directory for domain user accounts,
and in the registry for local user accounts. You can create a new Active Directory attribute for the
password history, or configure Password Policy Enforcer to use an existing attribute.

Disable Password Policy Enforcer's History rule if you don't want Password Policy Enforcer to store
the password history.

:::note
Password Policy Enforcer stores only the Argon2 or SHA-256 hashes in the password history,
not the passwords themselves. A salt protects the hashes from precomputed attacks, including rainbow
tables. If you don't want Password Policy Enforcer to store a password history, then leave the
History rule disabled. You can use the Windows History rule together with Password Policy Enforcer's
other rules to enforce your password policy.
:::


Password Policy Enforcer can store up to 100 password hashes for each user, but it only stores the
minimum needed to enforce the current password policy. For example, if you configure Password Policy
Enforcer to reject the last 24 passwords, then PPE stores only the last 24 password hashes.
Reconfiguring Password Policy Enforcer to reject the last 30 passwords won't have an immediate effect because PPE stores only 24 password hashes. The new configuration takes full effect after users change their passwords six more times, at which point Password Policy Enforcer has 30 stored password hashes for each user.

Leave both the Windows and Password Policy Enforcer History rules enabled when transitioning from
one to the other. This allows the old rule to enforce the policy until the new rule has built up its
password history. You can disable the old rule after users have completed the required number of
password changes to enforce the new rule.

As Password Policy Enforcer is limited to storing the last 100 password hashes, the History rule
might run out of storage space before the specified number of days. Use the Minimum
Age rule to avoid this problem. For example, if you configure the History rule to not allow password
reuse for 365 days, then set the minimum password age to four or more days. Even if a user changes
their password every four days, they can only perform 91 password changes in 365 days.

## Creating a New Attribute for the Password History

Windows stores a domain user's password history in two Active Directory attributes, but other
applications can't use these attributes. Password Policy Enforcer can store the password
history in a new or existing attribute. Netwrix recommends a new attribute, but you can use an existing
attribute if you don't want to extend the AD schema. PPE only needs an AD attribute for domain user
accounts because it stores the password history for local user accounts in the registry.

:::warning
Password Policy Enforcer's password history attribute is confidential to stop
authenticated users from accessing the password history of other users. See the Microsoft Article
[Mark an attribute as confidential in Windows Server 2003 Service Pack 1](http://support.microsoft.com/kb/922836)
Microsoft article for additional information. Confidential attributes have additional protection in
Active Directory, but they aren't as well protected as the Windows password history attributes.
There is a higher risk of unauthorized access to the password history if you store it outside the
Windows password history attributes.
:::


Follow these steps to create a new Active Directory attribute for the password history.

**Step 1 –** Log on to the server holding the Schema Operations Master role with an account that is
a member of the Schema Admins group.

**Step 2 –** Open a Command Prompt window to the Password Policy Enforcer installation folder.

**(\Program Files (x86)\Password Policy Enforcer\)**

**Step 3 –** Enter the following command:

**: ldifde -i -f History.ldf -c "DC=X" "DC=yourdomain,DC=yourdomain"**

Replacing the last parameter with your domain's DN.

**Step 4 –** Press **ENTER** and check the output for errors.

![ppe_rules_8](/images/passwordpolicyenforcer/11.2/administration/ppe_rules_8.webp)

## Using an Existing Attribute for the Password History

Password Policy Enforcer can store the password history in an existing attribute. The desktopProfile
attribute is well suited because Windows doesn't use it. Other attributes are also suitable if
they aren't in use. Contact [Netwrix Support](https://www.netwrix.com/support.html) if you
would like to use an existing attribute for the password history.

## Password Histories for Local User Accounts

Password Policy Enforcer stores the password histories of local user accounts in the HKLM\SECURITY\PPE Password History\
registry key. Windows doesn't grant users access to the HKLM\SECURITY\ registry key by default, so a user
can't read the password history of any user (including themselves). This is also true for members
of the Administrators group, but administrators can change the default permissions. If an
administrator accesses the password history they might be able to extract the hashes for cracking,
but they can't extract the passwords directly because the password history doesn't contain any
passwords.

:::warning
Password Policy Enforcer doesn't automatically delete the password history of a local user account when you delete the user
account. If you delete a local user account, then create another local user account
on the same computer with the same username, the new user will inherit the deleted user's password
history. The default registry permissions stop users from accessing their own password history, so
it is difficult for the new user to use this information. They could try to guess the deleted user's
password during a password change to see if the History rule rejects it, but they would only
have a few attempts to guess correctly before new hashes overwrite the old hashes. Password
Policy Enforcer validates the user's current password and enforces the Windows Minimum Age rule
before checking the password history, so every compliant and incorrect password guessed will
overwrite one hash in the password history. This information applies only to local user accounts. Password Policy Enforcer deletes the password
history for domain user accounts when you delete users.

:::
