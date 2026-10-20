---
title: "UnprocessableEntityError: Missing Result for Task checkAdminPrivilege (Code 9999)"
description: "Resolve the Missing result for task checkAdminPrivilege error (code 9999) when you register a rebuilt Linux system by removing its database records."
sidebar_label: "UnprocessableEntityError: Missing Result for Task checkAdminPrivilege (Code 9999)"
keywords:
- UnprocessableEntityError
- Missing result for task checkAdminPrivilege
- code 9999
- checkAdminPrivilege
- registration error
- known_hosts
- REMOTE HOST IDENTIFICATION HAS CHANGED
- ssh host key
- NPS-D
- SecureONE
- Remediant SecureONE
products:
- privilegesecurediscovery
tags:
- kb
- linux-and-ssh-integration
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm that s1 --single-node db is the correct command for opening the database shell on a single-node deployment at 26.09.1, and that s1 db works for a cluster. Evidence: none.
:::

## Symptom

When you register a Linux system with the Quickstart reporting tool, the following error is displayed. The host names and addresses in the example are placeholders:

```text
[*] Registering Linux system: linux01.example.com
  [!] Error submitting request:
  Url: https://nps.example.com/api/v1/computers/register
  Response Code: 422

  Response Body: {"name":"UnprocessableEntityError","message":"'Missing result for task checkAdminPrivilege'","code":9999}
```

When you click **Rescan** in the UI, a red pop-up message is displayed for a few seconds with an error similar to the following:

```text
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@ WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED! @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY! Someone
could be eavesdropping on you right now (man-in-the-middle
attack)! It is also possible that a host key has just been
changed. The fingerprint for the ECDSA key sent by the remote
host is <fingerprint>.
Please contact your system administrator. Add correct host
key in /root/.ssh/known_hosts to get rid of this message.
Offending ECDSA key in /root/.ssh/known_hosts:1 remove with:
ssh-keygen -f "/root/.ssh/known_hosts" -R 192.0.2.10
Password authentication is disabled to avoid man-in-the-middle
attacks. Keyboard-interactive authentication is disabled to
avoid man-in-the-middle attacks. Permission denied (publickey,
gssapi-keyex,gssapi-with-mic,password).
```

## Cause

This registration error can occur when a system is rebuilt with the same IP address and host name.

## Resolution

Remove the system from the product database, and then restart the worker and scanner services to clear the `known_hosts` entries on those services.

> **IMPORTANT:** This procedure deletes data from the product database. Back up the database before you continue, and confirm the system name before you run the delete command.

1. Connect to a node over SSH, and open the database shell:

   - For a cluster deployment, run `s1 db`.
   - For a single-node deployment, run `s1 --single-node db`.

2. Find the system records. In this example, `linux01` is the system name:

   ```javascript
   db.ldap_store.find({ "cn" : "linux01" }).count()
   ```

3. Remove all `ldap_store` records of the system:

   ```javascript
   db.ldap_store.deleteMany({ "cn" : "linux01" })
   ```

4. Restart the worker and scanner services from the UI or with the following command:

   ```bash
   s1 restart scanner worker
   ```

5. Register the system again.
