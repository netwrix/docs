---
title: "Error: File Copies Freeze at Start of Copy"
description: "Troubleshoot file copies that freeze at the start of the copy and sign-in failures with Invalid Request, caused by Unicode passwords, SSO settings, or MTU."
sidebar_label: "Error: File Copies Freeze at Start of Copy"
keywords:
- file copies freeze
- DR copies freeze
- SCP
- MTU
- SSO
- SAML
- Unicode password
- EVP_EncryptFinal_ex
- Invalid Request
- NPS-D
- SecureONE
- Remediant SecureONE
products:
- privilegesecurediscovery
tags:
- kb
- troubleshooting-and-errors
knowledge_article_id: kA04u00000110qECAQ
---

## Symptom

One of the following symptoms occurs.

### Symptom 1

When you sign in through the web UI, the following message is displayed:

```text
Invalid Request
```

In the browser developer tools, the **Headers** status code is as follows:

```text
500 Internal Server Error
```

The response also includes the following error:

```text
error:0607F08A:digital envelope routines:EVP_EncryptFinal_ex:data not multiple of block length
```

### Symptom 2

When you sign in through the web UI, the following message is displayed:

```text
Invalid Request
```

In the browser developer tools, the **Headers** status code is as follows:

```text
500 Internal Server Error
```

The response also includes the following error:

```text
Missing attribute value for attribute Destination of element samlp:AuthnRequest
```

### Symptom 3

File copies between Netwrix Privilege Secure for Discovery nodes freeze at the start of the copy. This affects the copy of backup files from the production node to the disaster recovery (DR) node by using Secure Copy Protocol (SCP).

## Cause

Each symptom has a different cause.

### Cause 1

A domain user has a password that contains Unicode characters, for example a pound sign (`£`).

### Cause 2

Single sign-on (SSO) is enabled and misconfigured, or one or more SSO fields are set to `Empty`.

### Cause 3

The maximum transmission unit (MTU) is set below 1500 on a network device in the path to the receiving node, and set to 1500 or larger on the sending device.

## Resolution

### Resolution 1

Change the password of the domain user so that it contains no Unicode characters.

### Resolution 2

Fix or disable SSO. Go to **Configure** > **Server** > **SAML Configuration**.

### Resolution 3

Set the MTU to the standard size of 1500 or greater on the network devices in the path. Lowering the MTU on network adapters can allow copies and transfers to complete, but it slows those transfers and database replication considerably.
