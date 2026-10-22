---
title: "Password Expired Error"
description: "Resolve the Password Expired message in the web UI or API by checking and updating the password of the Active Directory account the product binds with."
sidebar_label: "Password Expired Error"
keywords:
- Password Expired
- password expired error
- NPS-D
- SecureONE
- Remediant SecureONE
- Active Directory
- bind account
- domain controller
- net user
- Password Expires
- Domain Configuration
products:
- privilegesecurediscovery
tags:
- kb
- authentication-and-access
knowledge_article_id: kA04u00000110omCAA
---

## Symptom

When you use the web UI or the API, the following message is displayed:

```text
Password Expired
```

## Cause

Netwrix Privilege Secure for Discovery received a response from the Active Directory (AD) server indicating that the password has expired. Specifically, the AD account that the product uses to bind to the AD server has a password that the directory server considers expired.

- Set the account that the product uses to bind to the AD server so that its password does not expire. This is a recommended best practice.
- If multiple domains are configured, each domain can use a different account to bind to the domain controller of that domain.

## Resolution

> **IMPORTANT:** To perform these troubleshooting steps, you must be an administrator in the product.

1. Confirm whether the password of the account used to bind to the domain controller has expired. Open a command prompt, and run the following command with the name of the bind account:

   ```text
   net user <bind-account-name> /domain
   ```

2. In the output, find the line that begins with `Password expires`. If the date is in the past, the password has expired.
3. Change the password of the account in AD.
4. Update the password of the account in the domain configuration. Go to **Configure** > **Server**, and expand **Domain Configuration**.
