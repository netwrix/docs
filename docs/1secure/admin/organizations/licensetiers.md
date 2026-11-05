---
title: "License Tiers"
description: "License tier names in Netwrix 1Secure and the connectors each tier licenses, including the legacy tier codes the interface shows."
sidebar_position: 35
---

# License Tiers

The license tier of an organization determines which connectors the organization can use. This
topic lists the tier names that 1Secure shows and the connectors each tier licenses. For the
connectors themselves, see the
[Sources and Connectors](/docs/1secure/admin/organizations/sourcesandconnectors/overview.md) topic.

## Tier names

1Secure shows these license tier names:

- Trial
- Self-Service Trial
- 1Secure Pro Identity
- 1Secure Pro Data
- 1Secure Pro Complete
- Platform-0
- Legacy tiers: `DSPM1`, `DSPM3`, `ITDR0`, `ITDR1`, `ITDR3`, `MSP1`, and `MSP3`

The license tier is a flags value, so a tier can combine other tiers:

| Tier | Combines |
| --- | --- |
| MSP1 | DSPM1 and ITDR1 |
| MSP3 | DSPM1, DSPM3, ITDR1, and ITDR3 |

## Connector licensing by tier

| Connectors | Licensed on |
| --- | --- |
| All identity, data, and classification connectors | Trial and Self-Service Trial |
| Active Directory and Entra ID activity and logon connectors | All tiers except Platform-0, ITDR0, and 1Secure Pro Data |
| Active Directory and Entra ID state connectors | All tiers except ITDR0 and Platform-0 |
| PingCastle (Active Directory) | Trial, ITDR, 1Secure Pro Identity, and 1Secure Pro Complete |
| File Server, SQL Server, Exchange Online, and SharePoint Online connectors | Trial, DSPM, 1Secure Pro Data, and 1Secure Pro Complete |
| Windows Server activity and state connectors | All tiers except ITDR0, Platform-0, and 1Secure Pro Identity |
| Data classification | DSPM3, 1Secure Pro Complete, and Trial |
