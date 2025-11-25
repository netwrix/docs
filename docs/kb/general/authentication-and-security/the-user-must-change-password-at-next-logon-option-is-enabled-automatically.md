---
description: >-
  Explains why the "User must change password at next logon" option can be
  enabled automatically when a password reset or change fails to meet the
  password policy, and how to prevent it.
keywords:
  - password reset
  - User must change password at next logon
  - password policy
  - Netwrix Password Manager
  - AD password policy
  - Admin Portal
  - Domains
  - Password Policy
products:
  - general
sidebar_label: The “User must change password at next logon" opti
tags:
  - authentication-and-security
title: The “User must change password at next logon\" option is enabled automatically
knowledge_article_id: kA00g000000PbdZCAS
---

# The “User must change password at next logon" option is enabled automatically

If you attempt to reset a user's password and the user fails to provide a password that complies with the password policy, the "User must change password at next logon" option will be automatically enabled for that user.

---

Due to the way it works, Netwrix Password Manager cannot reset a password to a new value directly, because this procedure requires the user's current password, and the software does not know it. Therefore, the Password Manager first resets the password to a random one and only after that changes it to a new value. This two-step procedure is required because the Security Policies apply only during a password change, not a password reset operation. Therefore, it is not possible to select some of the password policies, for example, password history.

The issue is replicated with the following scenario:

1. The **Use AD password policy settings** option is **enabled** in the **Admin Portal** -> **Domains** -> **Edit** Managed Domain.
2. A user performs a reset password operation. In Password Manager it's a 3-step procedure:
   - password is reset to a random value
   - new password is checked for AD password policy compliance
   - if the new password does not pass the check, it stays random and "User must change password at next logon" option is enabled automatically
3. The user fails to provide a password which complies with the password policy. According to the previous step, the user's old password is no longer valid (it was reset to a random value) and the new password was not applied.

Similar behavior occurs during the Change password procedure, but the password is not reset to a random one, so the "User must change password at next logon" checkbox is just enabled.

---

To prevent this issue, you can disable the **Use AD password policy settings** option (**Admin Portal** -> **Domains** -> **Edit**) and configure the password policy through Netwrix Password Manager (**Admin Portal** -> **Settings** -> **Password Policy** tab).
