---
title: "Authentication Job Group"
description: "Authentication Job Group"
sidebar_position: 30
---

# Authentication Job Group

The Authentication job group provides information on authentication settings within audited systems
to help identify potential security vulnerabilities and reduce risk within the environment.

![Authentication Job Group in the Jobs Tree](/images/accessanalyzer/12.0/solutions/windows/authentication/jobstree.webp)

The jobs in the Authentication job group are:

- [SG_LSASettings Job](/docs/accessanalyzer/12.0/solutions/windows/authentication/sg_lsasettings.md) – This job lists LSA settings on all targeted hosts. In
  particular, the RunAsPPL, RestrictAnonymous, and ValidateKdcPacSignature keys are examined. If
  these keys are not set to 1, a host is vulnerable to mimikatz and other exploitation tools. See
  the Microsoft
  [Configuring Additional LSA Protection](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-R2-and-2012/dn408187(v=ws.11))
  article for additional ininformation.
- [SG_SecuritySupportProviders Job](/docs/accessanalyzer/12.0/solutions/windows/authentication/sg_securitysupportproviders.md) – This job identifies security
  support providers on all targeted hosts, highlighting potentially malicious SSPs
- [SG_WDigestSettings Job](/docs/accessanalyzer/12.0/solutions/windows/authentication/sg_wdigestsettings.md) – This job lists WDigest settings on all targeted
  hosts. In particular, the UseLogonCredentials key is examined. If the KB is not installed, and
  this key is not set properly for a given host, cleartext passwords will be stored in memory. See
  the
  [Microsoft Security Advisory](https://support.microsoft.com/en-us/help/2871997/microsoft-security-advisory-update-to-improve-credentials-protection-a)
  article for more information.
