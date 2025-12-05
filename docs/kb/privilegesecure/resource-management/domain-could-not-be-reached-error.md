---
description: >-
  Netwrix Privilege Secure may report a 'Domain could not be reached' error when
  running an Active Directory sync with **Use TLS** enabled. This article
  describes causes and steps to resolve the issue.
keywords:
  - Active Directory
  - AD sync
  - LDAPS
  - TLS
  - domain could not be reached
  - Netwrix Privilege Secure
  - LDAP ports
  - Kerberos
  - domain resolution
  - troubleshooting
products:
  - privilege-secure-access-management
sidebar_label: Domain Could Not Be Reached Error
tags: []
title: "Domain Could Not Be Reached Error"
knowledge_article_id: kA0Qk0000000XFJKA2
---

# Domain Could Not Be Reached Error

## Symptom

Netwrix Privilege Secure generates the following error when running an Active Directory (AD) sync with the **Use TLS** option enabled:

```text
AD Sync [ERR] 'Unable to connect to %domain% with credential %affected_account% with SSL:
'Domain could not be reached. Check logs for details.'
```

If the **Use TLS** option is disabled, the AD sync completes with no errors.

## Causes

1. Firewall exclusions for LDAP/LDAPS ports are misconfigured in your environment.
2. The domain name cannot be resolved to any DC in your environment.

## Resolutions

- Verify the LDAP/LDAPS ports are open in your environment. Refer to the following article for additional information on ports required for Netwrix Privilege Secure: https://docs.netwrix.com/docs/privilegesecure/4_2
- Issue Kerberos authentication certificates to domain controllers in your environment.

> **TIP:** The **Use TLS** feature is optional—it is not required to perform AD syncs. When the feature is enabled, the LDAPS protocol is used. It requires the ability to resolve both domain names and FQDNs.
>
> When the **Use TLS** feature is disabled, only the ability to resolve domain names in your environment is required.

## Related articles

- Requirements − Ports Requirements · v4.1: https://docs.netwrix.com/docs/privilegesecure/4_2
