---
title: "Service account security"
description: "Reduce the risk of credential exposure for the Privilege Secure for Discovery service accounts that manage Windows systems."
sidebar_position: 90
---

This page explains the risks and best practices that reduce the threat of exposing the credentials of the service accounts that Netwrix Privilege Secure for Discovery uses to manage Windows systems.

## Service account exposure risk

Some organizations question the security of using a single Active Directory (AD) domain user account to administer all the domain computers that the product manages. The concern is that if an attacker obtains the account credentials on one endpoint, the attacker can compromise every computer where the account has administrator privileges. The product is designed so that the service account credentials aren't exposed on managed endpoints.

## Best practices

- The service accounts don't require interactive logon. As a result, the systems that the product manages don't cache the NTLM hashes of these accounts. Without cached hashes, an attacker can't use pass-the-hash attacks or Net-NTLMv2 hashes to reach other managed systems.
- Configure the LDAP bind, scan, and protect accounts as follows:
  1. In Active Directory Users and Computers, open the account properties and select the **Account** tab.
  2. Select **Account is sensitive and cannot be delegated**, so that the account credentials are never cached on a computer.
  3. In Group Policy, go to **Computer Configuration** > **Policies** > **Windows Settings** > **Security Settings** > **Local Policies** > **User Rights Assignment**.
  4. Add the accounts to **Deny log on locally**.
  5. Add the accounts to **Deny log on through Remote Desktop Services**. On older versions of Windows, this policy is named **Deny log on through Terminal Services**.

![The User Rights Assignment policies in Group Policy, with the deny log on policies for the service accounts](/images/privilegesecure/4.2/discovery/5773725444759_image__18__746x366.webp)

## Kerberos authentication to Windows systems

Kerberos authentication makes sure that using a service account outside the product doesn't expose its credentials on any Windows system. If you change from NTLM to Kerberos, restart the worker and scanner services. You can restart them in the web interface or from the terminal. For configuration steps, see [SASL Kerberos](../configuration/authentication-and-sso/sasl-kerberos.md).

## Managed service accounts

Some organizations ask whether AD managed service accounts (MSAs) or group managed service accounts (gMSAs) can reduce the exposure of the service account credentials. These accounts aren't supported, because the product services run on Linux, which doesn't support them. For background, see the Microsoft documentation on [managed service accounts](https://techcommunity.microsoft.com/t5/ask-the-directory-services-team/managed-service-accounts-understanding-implementing-best/ba-p/397009) and [group managed service accounts](https://learn.microsoft.com/en-us/windows-server/security/group-managed-service-accounts/group-managed-service-accounts-overview).

## Protected Users group

Don't use the AD Protected Users group for these service accounts. The group is available at the Windows Server 2012 R2 domain functional level, and it blocks NTLM authentication, which the product can need. Protected Users membership also affects Kerberos, delegation, and ticket lifetime. For details, see the Microsoft documentation on [Protected Users security group](https://learn.microsoft.com/en-us/windows-server/security/credentials-protection-and-management/protected-users-security-group).
