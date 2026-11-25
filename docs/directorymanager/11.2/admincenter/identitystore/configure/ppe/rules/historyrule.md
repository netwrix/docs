---
title: "Configure the History Rule in Directory Manager"
description: "Stop users from reusing recent passwords by enabling the Password Policy Enforcer History rule and choosing a hash function."
keywords:
  - History rule
  - password reuse
  - password history
  - Argon2
  - hash function
  - Password Policy Enforcer
sidebar_position: 70
---

# Configure the History Rule in Directory Manager

The History rule rejects passwords that are identical to recently used passwords. Avoid password reuse because it defeats the purpose of regular password changes. Password Policy Enforcer can stop users from reusing passwords for a specified number of password changes or a number of days.

To configure the History rule:

1. Enable the **History** button to turn on the History rule.

2. Select one of the options:

   - One of the last `<_number_>` of passwords – Stop passwords from being reused for a specified number of password changes. Choose the number of password changes from the dropdown list.
   - A password used in the last `<_number_>` of days – Stop passwords from being reused for a specified number of days. Enter the number of days in the text box.

3. In the Hash function dropdown list, choose a hash function.

   Argon2 is recommended for best security. The Argon2 option uses 100,000 times more computing power to create a hash, so an attacker needs 100,000 times more computing power to crack Argon2 hashes. Argon2 increases password change times by 400%. A domain controller that can handle 1,000 password changes a minute with SHA-256 can handle about 250 password changes a minute with Argon2. All numbers are approximate. Use Argon2 if your domain controllers can handle the load.

   :::note
   Changing the **Hash function** doesn't modify existing history records. It sets the function to use for new password history records. If a user has Argon2 and SHA-256 hashes in their password history, Password Policy Enforcer calculates both the Argon2 and SHA-256 hashes during a password change. This ensures the new password isn't in the password history.
   :::

4. Optionally, select the Enforce this rule when a password is reset checkbox. The History rule is normally not enforced when a password is reset. Select the checkbox to override the default behavior.
