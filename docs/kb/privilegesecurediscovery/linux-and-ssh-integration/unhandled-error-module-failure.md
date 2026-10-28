---
title: "Unhandled Error: Module Failure"
description: "Resolve the Unhandled error MODULE FAILURE (Code 1779) that occurs when you scan or manually register a Linux system."
sidebar_label: "Unhandled Error: Module Failure"
keywords:
- Unhandled error MODULE FAILURE
- MODULE FAILURE
- Code 1779
- updateCreds
- Linux registration
- SUSE sudoers
- visudo
- Defaults targetpw
- package update
- NPS-D
- SecureONE
- Remediant SecureONE
products:
- privilegesecurediscovery
tags:
- kb
- linux-and-ssh-integration
knowledge_article_id: kA04u00000110pLCAQ
---

## Symptom

When you scan a Linux system, or manually register a non-domain Linux system, the following error occurs:

```text
Unhandled error: MODULE FAILURE See stdout/stderr for the exact error
Type: updateCreds
Code: 1779
```

> **NOTE:** Domain-joined Linux systems are discovered in Active Directory (AD), and no registration is required.

## Cause

One of the following causes applies:

1. The SUSE Linux sudoers configuration prompts for the root password, not the password of the account registered with Netwrix Privilege Secure for Discovery.
2. A Python script fails because of an incomplete package update.

## Resolution

### Resolve a SUSE Sudoers Configuration Cause

1. Open the sudoers file:

   ```bash
   sudo visudo
   ```

2. Comment out the two lines that do not start with `##`, as shown in the following example:

   ```text
   ## In the default (unconfigured) configuration, sudo asks for the root password.
   ## This allows use of an ordinary user account for administration of a freshly
   ## installed system. When configuring sudo, delete the two
   ## following lines:
   Defaults targetpw   # ask for the password of the target user i.e. root
   ALL   ALL=(ALL) ALL   # WARNING! Only use this together with 'Defaults targetpw'!
   ```

3. Register the system again.

### Resolve an Incomplete Package Update Cause

Update the Linux packages, and restart the system if required. Use the command for your distribution:

- Red Hat:

  ```bash
  sudo yum update
  ```

- Debian:

  ```bash
  sudo apt update && sudo apt -y dist-upgrade
  ```

- SUSE:

  ```bash
  sudo zypper refresh && sudo zypper update
  ```
