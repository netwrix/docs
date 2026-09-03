---
title: "Operations Job Group"
description: "Operations Job Group"
sidebar_position: 70
---

# Operations Job Group

The Operations Job Group reports on Active Directory activity events related to operational
activity. This group can help report on probable machine owners based on authentications, domain
controller traffic and activity, and authentication protocols being used in the environment.

![Operations Job Group in the Jobs Tree](/images/accessanalyzer/12.0/solutions/activedirectory/activity/operations/jobstree.webp)

The following Jobs make up the Operations Job Group:

:::info
Schedule these jobs to run with the 0.Collection job group.
:::


- [AD_AuthenticationProtocol Job](/docs/accessanalyzer/12.0/solutions/activedirectory/activity/operations/ad_authenticationprotocol.md) – Shows what protocols are being
  used to authenticate across the environment and will help to identify what services and computers
  may be affected if you disable NTLM
- [AD_DomainControllerTraffic Job](/docs/accessanalyzer/12.0/solutions/activedirectory/activity/operations/ad_domaincontrollertraffic.md) – Provides a summary of the amount
  of traffic for Changes, Authentication, Replication, and LDAP Queries for each domain controller.
  Use this summary to identify issues with load balancing. If you've run the AD_DCSummary job,
  the report includes the roles for each DC.
- [AD_HardcodedDCs Job](/docs/accessanalyzer/12.0/solutions/activedirectory/activity/operations/ad_hardcodeddcs.md) – Highlight machines that have communicated with only
  one DC
- [AD_LoadBalancing Job](/docs/accessanalyzer/12.0/solutions/activedirectory/activity/operations/ad_loadbalancing.md) – Analyzes each domain controller's traffic to show
  what percent of all LDAP, Replication, Authentication, and Changes traffic that particular machine
  handles. This helps you identify domain controllers that are overused relative to others in the
  domain, or unused domain controllers that you can decommission.
- [AD_MachineOwners Job](/docs/accessanalyzer/12.0/solutions/activedirectory/activity/operations/ad_machineowners.md) – Helps to identify the owner of a particular host
