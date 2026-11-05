---
title: "Error: Invalid SSH Credentials Authentication Failed"
description: "Resolve the Invalid SSH Credentials Authentication Failed error when you register a Linux endpoint by verifying the registration account and sudoers entry."
sidebar_label: "Error: Invalid SSH Credentials Authentication Failed"
keywords:
- Invalid SSH Credentials Authentication Failed
- SSH
- authentication failed
- Linux registration
- sudoers
- registration account
- useradd
- passwd
- NPS-D
- SecureONE
- Remediant SecureONE
products:
- privilegesecurediscovery
tags:
- kb
- linux-and-ssh-integration
knowledge_article_id: kA04u00000110pCCAQ
---

## Symptom

When you register a Linux endpoint, the following error occurs:

```text
Invalid SSH Credentials Authentication Failed
```

## Cause

Either the registration account is not in the `/etc/sudoers` file on the endpoint, or the password for that account does not match the password you use in the registration process. You register endpoints by using the Quickstart reporting tool or the API.

## Resolution

1. Log in to the Linux endpoint over SSH with an account that has sudo privileges.

2. Confirm that the registration account is in the `/etc/passwd` file, which lists all users that have basic access to the Linux system. The output of the following command displays the contents of the file:

   ```bash
   cat /etc/passwd
   ```

   - If the registration account is in the output, go to step 4 to test its password.
   - If the registration account is not in the output, create it. Replace `<registration-account>` with the name of the account that you use for the one-time registration of systems. The command can vary depending on the Linux operating system. For example, for an account named `secureone`, run `sudo useradd secureone`.

     ```bash
     sudo useradd <registration-account>
     ```

3. If you created the account, set its password. The command can vary depending on the Linux operating system.

   ```bash
   sudo passwd <registration-account>
   ```

4. Test the password for the account:

   ```bash
   su <registration-account>
   ```

5. Confirm that the registration account is in the `/etc/sudoers` file. The output of the following command displays the contents of the file, which must list the registration account:

   ```bash
   sudo cat /etc/sudoers
   ```
