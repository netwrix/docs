---
title: "History Rule"
description: "History Rule"
sidebar_position: 70
---

# History Rule

The History rule rejects passwords that are identical to recently used passwords. Password reuse
should be avoided because it defeats the purpose of regular password changes. Password Policy
Enforcer can stop users from reusing passwords for a specified number of password changes or a
number of days.

- Enable the **History** button to enable the History rule.

- Select one of the options:

- One of the last `<_number_>` of password – stop passwords from being reused for a specified number
  of password changes. Choose the number of password changes from the drop-down list.

- A password used in the last `<_number_>` of days – stop passwords from being reused for a
  specified number of days. Type the number of days in the text box.

- Hash function – Choose an item from the drop-down list.

    Argon2 is recommended for best security. The Argon2 option uses 100,000 times more computing
    power to create a hash, so an attacker needs 100,000 more computing power to crack Argon2
    hashes. Argon2 increases password change times by 400%, so a domain controller that can handle
    1,000 password changes a minute with SHA-256 can be expected to handle 250 password changes a
    minute with Argon2. All numbers are approximate. Use Argon2 if your domain controllers can
    handle the load.

    :::note
    Changing the **Hash function** does not modify existing history records. It sets the
    function to be used for new password history records. If a user has Argon2 and SHA-256 hashes in
    their password history, then Password Policy Enforcer calculates both the Argon2 and SHA-256
    hashes during a password change to ensure the new password is not in the password history.
    :::


- Enforce this rule when a password is reset – The History rule is normally not enforced when a
  password is reset. Select the check box to override the default behavior.
