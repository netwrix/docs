---
description: >-
  Resolve the 'Domain could not be reached' error during an AD sync with Use TLS enabled by checking LDAP ports and domain controller certificates.
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
  - privilegesecure
sidebar_label: Domain Could Not Be Reached Error
tags:
  - kb
  - resource-management
title: "Domain Could Not Be Reached Error"
knowledge_article_id: kA0Qk0000000XFJKA2
---

# Domain Could Not Be Reached Error

## Symptom

Netwrix Privilege Secure for Access Management generates the following error when running an Active Directory (AD) sync with the **Use TLS** option enabled:

```text
AD Sync [ERR] 'Unable to connect to %domain% with credential %affected_account% with SSL:
'Domain could not be reached. Check logs for details.'
```

If the **Use TLS** option is disabled, the AD sync completes with no errors.

## Cause

- Firewall exclusions for Lightweight Directory Access Protocol (LDAP) and LDAP over SSL (LDAPS) ports are misconfigured in your environment.
- The domain name cannot be resolved to any domain controller (DC) in your environment.

## Resolution

- Verify the LDAP and LDAPS ports are open in your environment. See the following article for additional information on ports required for Privilege Secure: https://docs.netwrix.com/docs/privilegesecure/26_07/requirements/ports
- Issue Kerberos authentication certificates to domain controllers in your environment.

> **NOTE:** The **Use TLS** feature is optional—it is not required to perform AD syncs. When the feature is enabled, the LDAPS protocol is used. It requires the ability to resolve both domain names and fully qualified domain names (FQDNs).
>
> When the **Use TLS** feature is disabled, only the ability to resolve domain names in your environment is required.

## Related Links

- Requirements − Ports Requirements · v26.03: https://docs.netwrix.com/docs/privilegesecure/26_07/requirements/ports
