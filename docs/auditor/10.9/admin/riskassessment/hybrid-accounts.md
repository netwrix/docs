---
title: "Hybrid Account Data for Inactive User Risks"
description: "How Netwrix Auditor collects and merges Active Directory and Entra ID data to assess inactive hybrid user accounts."
sidebar_position: 30
---

# Hybrid Account Data for Inactive User Risks

Two risk metrics in the **Users and computers** category track inactive user accounts:

- **Inactive user accounts (hybrid + on-premises)** — covers on-premises AD accounts and hybrid accounts, using the most recent logon across AD and Entra ID.
- **Inactive user accounts (hybrid + cloud)** — covers cloud-only Entra ID accounts and hybrid accounts, using the most recent logon across Entra ID and AD.

For both metrics, a hybrid account (an AD account synchronized to Entra ID via Microsoft Entra Connect) is only counted as inactive when there has been no sign-in activity in **either** directory for 35 or more days. This prevents false positives for users who log in through one directory but not the other.

## What You Need to Configure

To get full hybrid data for either metric, you need two monitoring plans:

- **An Active Directory monitoring plan** with at least one AD domain item added.
- **A Microsoft Entra ID monitoring plan** with at least one tenant item added.

Both plans must have **Collect data for state-in-time reports** switched on. For instructions on verifying this setting, see [IT Risk Assessment Overview](/docs/auditor/10.9/admin/riskassessment/overview.md).

If only one plan is configured:

- **Entra ID plan only** — AD last logon data is absent. The **Last logon (AD)** column in the drill-down report shows **No data** for all accounts. The risk calculation uses only Entra ID sign-in timestamps.
- **AD plan only** — Hybrid accounts are treated as on-premises-only accounts. The **Last logon (Entra ID)** column shows **No data**. The risk calculation uses only the AD last logon timestamp.

## Entra ID License Requirement

Entra ID sign-in activity (the `lastSuccessfulSignInDateTime` and `lastNonInteractiveSignInDateTime` fields) requires a **Microsoft Entra ID Premium P1 or P2** license on the tenant. Without it, the Entra ID collector cannot retrieve sign-in timestamps, and the risk metric for cloud and hybrid accounts won't reflect actual Entra sign-in history.

If the license check fails, AD-based data collection continues normally and the **Inactive user accounts (hybrid + on-premises)** metric remains unaffected.

## How Last Logon Is Determined

For a hybrid account, Netwrix Auditor records three timestamps:

| Timestamp | Source |
|---|---|
| Last logon (AD) | AD `lastLogonTimestamp` attribute |
| Last logon (Entra ID) | Most recent of `lastSuccessfulSignInDateTime` and `lastNonInteractiveSignInDateTime` from Microsoft Graph |

The account is considered inactive only when **all available timestamps** are older than 35 days. The drill-down report shows each timestamp separately so you can see where activity last occurred.

An account is identified as hybrid when Microsoft Entra ID reports it as synchronized from on-premises (`onPremisesSyncEnabled = true`) and includes an on-premises domain name.

## When Data Appears and How Often

Data for these metrics is collected as part of the state-in-time snapshot. The first data may take up to 24 hours to appear, depending on when the snapshot collection runs after the monitoring plan is configured. After the initial collection, data is updated once a day by default.
