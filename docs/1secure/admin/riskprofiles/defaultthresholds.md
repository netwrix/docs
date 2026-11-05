---
title: "Default Risk Thresholds"
description: "Reference for the Medium and High thresholds that the Default Profile sets for Active Directory, Entra ID, SharePoint, and file metrics."
sidebar_position: 25
---

# Default Risk Thresholds

The Default Profile sets default thresholds for seeded risk metrics. This topic lists those
defaults. Values are shown as Medium / High.

## Active Directory metrics

All Active Directory metrics in this table are numeric.

| Metric | Medium / High |
|---|---|
| User Accounts with "Password Never Expires" | 1 / 6 users |
| User Accounts with "Password Not Required" | 1 / 3 users |
| Disabled Computer Accounts | 1% / 3% |
| Inactive User Accounts | 0.01% / 1% |
| Inactive Computer Accounts | 0.01% / 3% |
| User Accounts with Administrative Permissions | 2% / 3% |
| Administrative Groups | 2% / 3% |
| Empty Security Groups | 1% / 2% |

## PingCastle-based Active Directory metrics

1Secure seeds PingCastle-based Active Directory risk metrics with their own default thresholds. For
example, the primary-group, delegation, and AdminSDHolder checks use Medium 5 / High 10. Many of
these metrics are binary, and their High threshold is 1.

## Entra ID metrics

The seeded Entra ID risk metrics include these:

- Stale Guest Accounts
- User Accounts with "No MFA Configured"
- User Accounts Created via Email Verified Self-Service Creation

The Default Profile thresholds for these metrics are Medium 1 and High 5.

### Entra ID configuration checks

The seeded Entra ID configuration checks are binary. Each check is High when present.

- Dangerous Default Permissions
- Improper Number of Global Administrators
- Third-Party Applications Allowed
- "Unified Audit Log Search is Not Enabled"
- Conditional Access Policies and Microsoft Secure Defaults status
- Expired Domain Registrations Found
- "Self-Serve Password Reset is Not Enabled"
- Conditional Access Policy Disables Admin Token Persistence
- Two MS Graph Powershell Service Principal checks

## SharePoint metrics

| Metric | Medium / High |
|---|---|
| High Risk Permissions on Documents | 5% / 15% |
| Stale Direct User Permissions | 5% / 15% |
| Sites with Broken Permissions Inheritance | 60% / 100% |

## Sensitive data metrics

These metrics are percentages.

| Metric | Medium / High |
|---|---|
| Unlabeled Sensitive Files | 10% / 30% |
| External and Anonymous Sharing of Sensitive Data | 5% / 15% |
| Stale User Access to Sensitive Data | 5% / 15% |
| Open Access to Sensitive Data | 0% / 2% |
| High-Risk Permissions to Sensitive Data | 0% / 2% |

## File Server metrics

| Metric | Medium / High |
|---|---|
| Potentially harmful files | 1 / 2 files |
| Open Access | 1% / 5% |
