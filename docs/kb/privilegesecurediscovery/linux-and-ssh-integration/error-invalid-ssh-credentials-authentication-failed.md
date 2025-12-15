---
description: 'This article explains how to resolve the "Invalid SSH Credentials Authentication Failed" error when registering Linux endpoints into Netwrix Privilege Secure Discovery. It describes causes and provides step-by-step instructions to verify the registration account and sudoers configuration.'
keywords:
- SSH
- authentication
- Linux
- sudoers
- registration
- Netwrix Privilege Secure Discovery
- Invalid SSH Credentials
- passwd
- useradd
products:
- privilege-secure-discovery
sfdc_migration:
  article_id: ka04u00000116bFAAQ
  article_owner: Anna Evdokimova-Glinskaia
  article_reviewer: null
  article_sme: null
  created_date: '2023-07-11'
  knowledge_article_id: kA04u00000110pCCAQ
  last_modified_date: '2023-07-11'
  original_categories:
  - privilege_secure_discovery
  visibility: public
sidebar_label: "Error: Invalid SSH Credentials Authentication Failed"
tags: []
title: 'Error: Invalid SSH Credentials Authentication Failed'
knowledge_article_id: kA04u00000110pCCAQ
---

# Error: Invalid SSH Credentials Authentication Failed

Netwrix Privilege Secure Discovery (formerly SecureONE)

## Symptom

When you try to register a Linux endpoint the following error occurs:

```
Invalid SSH Credentials Authentication Failed
```

## Cause

Windows Command Prompt occurrence: this happens when you try to register a new Linux endpoint and either the Registration account is not on the endpoint in the `/etc/sudoers` file or the password for that account doesn't match what you are using in the registration process (via the QuickStart or Postman).

## Resolution

1. **Step 1.** Log into the Linux endpoint via SSH with a sudoer's account.

2. **Step 2.** Confirm the Registration account is within the `/etc/passwd` file (which lists all users that have basic access to the Linux system) with the below command. The output from this command will display the contents of the passwd file, which should have the Registration account listed.

   ```
   cat /etc/passwd
   ```

   1. If the Registration account is not in the output (aka the `/etc/passwd` file), it will need to be created with the command below; replace the `REGISTER-ACCOUNT` string with the actual name of the account being used for the one-time registration of systems into Netwrix Privilege Secure Discovery. If it is in the output, continue on to Step 3 and test the password being used.
      
      The command may vary depending on the Linux operating system:

      ```bash
      sudo useradd REGISTER-ACCOUNT
      ```

      Example: for a user named "secureone" the command would be `sudo useradd secureone`

   2. Once the above `useradd` process has been completed, set the password for that account with the command below; again replace the `REGISTER-ACCOUNT` string with the actual name.

      The command may vary depending on the Linux operating system:

      ```bash
      sudo passwd REGISTER-ACCOUNT
      ```

      Example: for a user named "secureone" the command would be `sudo passwd secureone`

   3. Test the password for the account with the command below. Remember to replace the `REGISTER-ACCOUNT` string with the actual name of the account:

      ```
      su REGISTER-ACCOUNT
      ```

3. **Step 3.** Confirm the Registration account is within the `/etc/sudoers` file with the command below. The output from this command will display the contents of the sudoers file, which should have the "registration account" listed:

   ```
   sudo cat /etc/sudoers
   ```