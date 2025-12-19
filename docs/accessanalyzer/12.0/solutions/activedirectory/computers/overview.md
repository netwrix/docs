---
title: "3.Computers Job Group"
description: "3.Computers Job Group"
sidebar_position: 30
---

# 3.Computers Job Group

The 3.Computers Job Group help to pinpoint potential areas of administrative concern related to
computer accounts, including stale computers and computers that have been trusted for delegation.

![3.Computers Job Group in the Jobs Tree](/images/accessanalyzer/12.0/solutions/activedirectory/computers/jobstree.webp)

The following jobs comprise the 3.Computers Job Group:

- [AD_ComputerDelegation Job](/docs/accessanalyzer/12.0/solutions/activedirectory/computers/ad_computerdelegation.md) – Provides details on computer accounts that
  have been trusted for delegation. Once this configuration is enabled for a computer, any time an
  account connects to the computer for any reason, their ticket-granting ticket (TGT) is stored in
  memory so it can be used later by the computer for impersonation, which exposes a significant
  security risk in cases where privileged accounts access the computer.  See the
  [What Is Kerberos Delegation?](https://blog.netwrix.com/2021/11/30/what-is-kerberos-delegation-an-overview-of-kerberos-delegation/) Netwrix
  blog article for more information about this configuration and the related security risks.
- [AD_StaleComputers Job](/docs/accessanalyzer/12.0/solutions/activedirectory/computers/ad_stalecomputers.md) – Provides details on stale computers that may be
  candidates for cleanup
