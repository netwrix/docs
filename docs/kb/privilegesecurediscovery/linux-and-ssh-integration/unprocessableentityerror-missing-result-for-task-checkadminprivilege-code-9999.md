---
description: 'Explains how to resolve the UnprocessableEntityError: Missing Result for Task checkAdminPrivilege (code 9999) when registering a rebuilt system. Provides the exact database removal steps and service restarts required to clear the issue.'
keywords:
- UnprocessableEntityError
- checkAdminPrivilege
- registration error
- known_hosts
- ssh host key
- Netwrix Privilege Secure Discovery
- scanner worker restart
products:
- privilege-secure-discovery
sfdc_migration:
  article_id: ka04u00000116YVAAY
  article_owner: Anna Evdokimova-Glinskaia
  article_reviewer: null
  article_sme: null
  created_date: '2023-07-07'
  knowledge_article_id: kA04u00000110pQCAQ
  last_modified_date: '2023-07-07'
  original_categories:
  - privilege_secure_discovery
  visibility: public
sidebar_label: "UnprocessableEntityError: Missing Result for Task checkAdminPrivilege (code 9999)"
tags: []
title: 'UnprocessableEntityError: Missing Result for Task checkAdminPrivilege. Code:
  9999'
---

# UnprocessableEntityError: Missing Result for Task checkAdminPrivilege. Code:  9999

Formerly SecureONE

## Symptom

Example of error when running registration via QuickStart:

```
C:\secureone>reports_2.5.py --insecure --linux-reg-file LinuxReg1.xlsx

    [+] API key loaded from secure storage
    [*] Registering Linux system: linux_1.cstest.com
      [!] Error submitting request:
      Url: https://secureone.cstest.com/api/v1/computers/register
      Response Code: 422
    
      Response Body: {"name":"UnprocessableEntityError","message":"'Missing result for task checkAdminPrivilege'","code":9999}
```

And when attempting to **Rescan** in UI, a red pop-up displays for a few seconds with an error like the following:

```
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
    @ WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED! @ 
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
    IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY! Someone
     could be eavesdropping on you right now (man-in-the-middle 
    attack)! It is also possible that a host key has just been 
    changed. The fingerprint for the ECDSA key sent by the remote 
    host is 14:09:16:4b:aa:da:3c:38:04:97:f0:09:88:03:ba:d6. 
    Please contact your system administrator. Add correct host 
    key in /root/.ssh/known_hosts to get rid of this message. 
    Offending ECDSA key in /root/.ssh/known_hosts:1 remove with:
    ssh-keygen -f "/root/.ssh/known_hosts" -R 10.100.11.115 
    Password authentication is disabled to avoid man-in-the-middle
    attacks. Keyboard-interactive authentication is disabled to 
    avoid man-in-the-middle attacks. Permission denied (publickey,
    gssapi-keyex,gssapi-with-mic,password).
```

## Cause

This registration error can happen when a system was rebuilt with the same IP and hostname.

## Resolution

Restart the worker and scanner services to clear the `know_hosts` on those services:

1. Remove the system from the Netwrix Privilege Secure for Discovery database:
   1. SSH into a node and log into the database:
      - For cluster deployment, use: `s1 db`
      - For a single node deployment: `s1 --single-node db`
   2. Locate the systems, `ip-10-100-11-115` is used as an example hostname:
      ```js
      db.ldap_store.find({ "cn" : "ip-10-100-11-115"}).count()
      ```
   3. Remove all ldap_store record of that system:
      ```js
      db.ldap_store.deleteMany({ "cn" : "ip-10-100-11-115"})
      ```

2. Restart the worker and scanner services from the UI or with CLI:
   ```bash
   s1 restart scanner worker
   ```

3. Register the system.