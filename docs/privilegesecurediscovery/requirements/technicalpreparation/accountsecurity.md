---
title: "System & Service Account Security"
description: "System & Service Account Security"
sidebar_position: 10
---

# System & Service Account Security

System & Service Account Security

# System & Service Account Security

## Overview

This document is intended to provide a more complete explanation of the risks and best practices
that mitigate the threat of exposing the credentials of Privilege Secure service accounts used to
manage Windows systems.

## Main Document

Customers often challenge the security of our approach using a single AD domain user account to
administer all the computers in the domain managed by Privilege Secure. Their typical concern is
that compromising the account credentials on an endpoint would allow an attacker to compromise all
computers where the account is configured to have admin privilege.
However, Privilege Secure is designed to ensure service account credentials can not be compromised
on managed endpoints.

## Best Practices

- Privilege Secure’s service accounts do not require interactive logons. This is important since
  NTLM hashes won’t be cached on the systems being managed which stops pass the hash attacks
  Net-NTLMv2 hashes from being use to access other managed systems
- Configure the Privilege Secure service accounts (LDAP Bind, Scan, Protect): as follows:
    - Use AD users and groups, go to the Account properties tab for each account:
        - “Account is sensitive and cannot be delegated” to ensure that its credentials are never
          cached on a computer.
    - Use AD Group Policy to set:
        - computer configuration\policies\windows settings\security settings\user rights assignment
            - Deny log on locally
            - Deny log on through remote desktop services **or in older** Deny log on through
              terminal service

![image__18_.webp](/images/privilegesecure/4.2/discovery/5773725444759_image__18__746x366.webp)

## Appendix

Kerberos Authentication to Windows Systems

- Ensure that unintended use of the Privilege Secure service account outside Privilege Secure does
  not result in credential exposure on any Windows system.
    - If you change from NTLM to Kerberos restart both the worker and scanner service. This can be
      accomplished in the UI or terminal.

AD Managed Service Accounts

**CAUTION:** Customers inquire about using **AD Managed Service Accounts (MSA’s) or AD Group Managed
Service** Accounts as a means to reduce exposure of Privilege Secure service account credentials.
MSA’s are not supported on Linux operating systems, and Privilege Secure services run on Linux
operating systems.

MSA’s are not supported on Linux operating systems, and Privilege Secure services run on Linux
operating systems.

- MSA’s:
  [https://techcommunity.microsoft.com/t5/ask-the-directory-services-team/managed-service-accounts-understanding-implementing-best/ba-p/397009](https://techcommunity.microsoft.com/t5/ask-the-directory-services-team/managed-service-accounts-understanding-implementing-best/ba-p/397009)
- Group MSA’s:
  [https://docs.microsoft.com/en-us/windows-server/security/group-managed-service-accounts/group-managed-service-accounts-overview](https://docs.microsoft.com/en-us/windows-server/security/group-managed-service-accounts/group-managed-service-accounts-overview)

AD "Protected Users" Group

**CAUTION:** The **AD “Protected Users” group** available on Windows Server 2012 R2 Domain
Functional Level can not be used since it disallows NTLM authentication

_from: “Mitigating Pass-the-Hash and Other Credential Theft, version 2” document by Microsoft_

- Members of the Protected Users group cannot authenticate using NTLM, Digest Authentication, or
  CredSSP. Users joined to this group will not use cached logon password verifiers causing a logon
  event on the domain controller for every interactive authentication. For more information on using
  events for detection, see ”Detect PtH and related attacks.”
- Members of this group are also restricted to strong encryption types during the Kerberos
  pre-authentication process and cannot use the weaker DES and RC4 encryption types. In addition,
  members of this group cannot be delegated using constrained or unconstrained delegation of
  authentication.
- The ticket lifetime for Protected Users is set by default to four hours, but authentication
  policies can increase or decrease this lifetime. After the TGT lifetime expires, users need to
  authenticate to renew the TGT.
- Customers can use the Protected Users group to identify NTLM dependencies in their networks when
  considering a move to a Kerberos-authentication-only environment. Although retiring NTLM is
  currently only possible in very specific environments and is not advised for most customers, this
  feature could assist the transition for customers exploring this approach. This feature helps
  prevent credential theft.
