---
description: 'Describes causes and resolutions for the UnprocessableEntityError: "SSH connection error: encountered RSA key, expected OPENSSH key" that can occur during registration in Netwrix Privilege Secure Discovery.'
keywords: ['UnprocessableEntityError', 'SSH connection error', 'RSA key', 'OPENSSH key', 'sshd_config', 'PubkeyAcceptedKeyTypes', 'AllowUsers', 'Netwrix Privilege Secure Discovery']
products:
- privilege-secure-discovery
sfdc_migration:
  article_id: ka04u00000116bAAAQ
  article_owner: Anna Evdokimova-Glinskaia
  article_reviewer: null
  article_sme: null
  created_date: '2023-07-11'
  knowledge_article_id: kA04u00000110pVCAQ
  last_modified_date: '2023-07-11'
  original_categories:
  - privilege_secure_discovery
  visibility: public
sidebar_label: 'UnprocessableEntityError: SSH Connection Error: En'
tags: []
title: 'UnprocessableEntityError: SSH Connection Error: Encountered RSA Key, Expected
  OPENSSH Key'
knowledge_article_id: kA04u00000110pVCAQ
---

Formerly SecureONE

# UnprocessableEntityError: SSH Connection Error: Encountered RSA Key, Expected OPENSSH Key

## Symptom

Example of error when running registration via Postman:

```json
{
    "name": "UnprocessableEntityError",
    "message": "SSH connection error: encountered RSA key, expected OPENSSH key",
    "code": 9999
}
```

## Causes

### Cause 1
This error can occur if SSH access is being limited to specific accounts. Example is having account specified in `/etc/ssh/sshd_config` file using options parameters like `AllowUsers` or `AllowGroups`. Go to Resolution 1.

### Cause 2
This registration error can happen when a system was already registered in Netwrix Privilege Secure Discovery and a user was removed from the system (even if the user is manually added back in). Go to Resolution 2.

### Cause 3
The use of Ubuntu 22.04+ and RSA SSH keys which are not allowed. Go to Resolution 3.

## Resolutions

<a id="R1" name="R1"></a>
### Resolution 1
Either change configuration to allow SSH to all users, or add the service account, default name is `"secureone"`, to necessary line(s) to allow SSH connectivity. And then restart the sshd service.

<a id="R2" name="R2"></a>
### Resolution 2

1. Remove the user and home directory from the system:
   ```bash
   sudo deluser --remove-home secureone
   ```
   If the user was remove but the home directory remains, please remove home directory **manually**:

   ```bash
   sudo rm -r /home/secureone
   ```
2. Remove the system from the Netwrix Privilege Secure Discovery database.
   1. SSH into a node and log into the database:
      - For cluster deployment, use `s1 db`
      - For a single node deployment: ` s1 --single-node db`
   2. Locate the systems, ip-10-100-11-115 is used as an example hostname:
      ```js
      db.ldap_store.find({ "cn" : "ip-10-100-11-115"}).count()
      ```
   3. Remove all ldap_store record of that system:
      ```js
      db.ldap_store.deleteMany({ "cn" : "ip-10-100-11-115"})
      ```

<a id="R3" name="R3"></a>
### Resolution 3

1. Add the following line:
   ```text
   PubkeyAcceptedKeyTypes +ssh-rsa
   ```
2. To the bottom of: `/etc/ssh/sshd_config`
3. Restart sshd:
   ```bash
   sudo systemctl restart sshd
   ```