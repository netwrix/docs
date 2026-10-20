---
title: "UnprocessableEntityError: SSH Connection Error: Encountered RSA Key, Expected OPENSSH Key"
description: "Resolve the SSH connection error that reports an RSA key where an OPENSSH key is expected by checking SSH access limits, removed users, and RSA key support."
sidebar_label: "UnprocessableEntityError: SSH Connection Error: Encountered RSA Key, Expected OPENSSH Key"
keywords:
- UnprocessableEntityError
- SSH connection error
- encountered RSA key, expected OPENSSH key
- RSA key
- OPENSSH key
- sshd_config
- PubkeyAcceptedKeyTypes
- AllowUsers
- Ubuntu 22.04
- NPS-D
- SecureONE
- Remediant SecureONE
products:
- privilegesecurediscovery
tags:
- kb
- linux-and-ssh-integration
knowledge_article_id: kA04u00000110pVCAQ
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm that s1 --single-node db is the correct command for opening the database shell on a single-node deployment at 26.09.1. Evidence: none.
:::

## Symptom

When you register a Linux system through the API, the registration returns the following error:

```json
{
    "name": "UnprocessableEntityError",
    "message": "SSH connection error: encountered RSA key, expected OPENSSH key",
    "code": 9999
}
```

## Cause

One of the following causes applies:

1. SSH access is limited to specific accounts. For example, the `/etc/ssh/sshd_config` file specifies the `AllowUsers` or `AllowGroups` option.
2. The system was already registered in Netwrix Privilege Secure for Discovery, and a user was removed from the system. This applies even if the user was added back manually.
3. The system runs Ubuntu 22.04 or later, which does not allow RSA SSH keys by default.

## Resolution

### Allow SSH Access for the Service Account

Either change the configuration to allow SSH access for all users, or add the service account to the relevant `AllowUsers` or `AllowGroups` lines. The default service account name is `secureone`. Then restart the `sshd` service.

### Remove the User and the Database Record

> **IMPORTANT:** This procedure deletes data from the product database. Back up the database before you continue, and confirm the system name before you run the delete command.

1. Remove the user and the home directory from the system:

   ```bash
   sudo deluser --remove-home secureone
   ```

2. If the user was removed but the home directory remains, remove the home directory manually:

   ```bash
   sudo rm -r /home/secureone
   ```

3. Connect to a node over SSH, and open the database shell:

   - For a cluster deployment, run `s1 db`.
   - For a single-node deployment, run `s1 --single-node db`.

4. Find the system records. In this example, `linux01` is the system name:

   ```javascript
   db.ldap_store.find({ "cn" : "linux01" }).count()
   ```

5. Remove all `ldap_store` records of the system:

   ```javascript
   db.ldap_store.deleteMany({ "cn" : "linux01" })
   ```

### Allow RSA Keys on Ubuntu 22.04 or Later

1. Add the following line to the bottom of the `/etc/ssh/sshd_config` file:

   ```text
   PubkeyAcceptedKeyTypes +ssh-rsa
   ```

2. Restart `sshd`:

   ```bash
   sudo systemctl restart sshd
   ```
