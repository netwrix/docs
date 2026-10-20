---
title: "SAML Assertion Not Yet Valid Error"
description: "Resolve the SAML assertion not yet valid error that appears when you sign in through AD FS by adding NotBeforeSkew to the relying party trust."
sidebar_label: "SAML Assertion Not Yet Valid Error"
keywords:
- SAML assertion not yet valid
- SAML
- ADFS
- AD FS
- NotBeforeSkew
- NotBeforeValue
- Set-ADFSRelyingPartyTrust
- NPS-D
- SecureONE
- Remediant SecureONE
- clock skew
- SSO
products:
- privilegesecurediscovery
tags:
- kb
- authentication-and-access
knowledge_article_id: kA04u00000110p6CAA
---

## Symptom

When you sign in to the Netwrix Privilege Secure for Discovery UI by using Active Directory Federation Services (AD FS) as the identity provider, you receive the following error:

```text
SAML assertion not yet valid
```

## Cause

The assertion has a `NotBefore` time that is later than the current time on the product server. This typically happens because of a clock difference between the AD FS server and the product server.

## Resolution

Add the `NotBeforeSkew` value to the relying party trust on the AD FS server. The number that follows `NotBeforeSkew` is the number of minutes to skew the `NotBefore` value. For example, a value of 3 results in a `NotBefore` time of 3 minutes earlier.

Run the following PowerShell command on the AD FS server, replacing `<relying-party-name>` with the name of the relying party trust for the product:

```powershell
Set-ADFSRelyingPartyTrust -TargetName "<relying-party-name>" -NotBeforeSkew 3
```
