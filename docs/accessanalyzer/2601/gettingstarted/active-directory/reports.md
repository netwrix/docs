---
title: "Reports"
description: "Pre-built dashboard available for Active Directory source groups in Access Analyzer"
sidebar_position: 50
---

# Reports

After the first Active Directory scan completes, the **AD Scan Summary** dashboard becomes available under **Dashboards**. Use the **Domain** filter at the top of the dashboard to focus on a specific domain.

## AD Scan Summary

The dashboard is organized into four sections: a summary row at the top, a **Users** section, a **Groups** section, and an **All Risks** section.

### Summary row

| Card | Description |
|------|-------------|
| **Domains** | Number of domains scanned in this source group. |
| **Users** | Total number of user objects collected. |
| **Enabled Users** | Number of enabled user accounts. |
| **Groups** | Total number of group objects collected. |
| **Direct Memberships** | Total number of direct group membership relationships. |

### Users

| Card | Description |
|------|-------------|
| **Administrator Accounts** | Number of accounts with a non-zero `adminCount` attribute, indicating current or past AdminSDHolder protection. |
| **New Users** | Number of user accounts created in the past 7 days. |
| **Users with Associated Risks** | Number of users who have at least one detected risk. |
| **User Risks** | Table listing each user with associated risks, including the user name, domain, and risk count. |

### Groups

| Card | Description |
|------|-------------|
| **Security Groups** | Number of security groups collected. |
| **DLs** | Number of distribution lists (DLs) collected. |
| **Groups with Associated Risks** | Number of groups that have at least one detected risk. |
| **Group Risks** | Table listing each group with associated risks, including the group name, domain, and risk count. |

### All Risks

| Card | Description |
|------|-------------|
| **Risks by Level** | Pie chart showing the distribution of detected risks by severity level (High, Medium, Low). |
| **Riskiest Objects** | Table ranking users and groups by the number of associated risks. |
| **Active Directory Risks** | Full table of all detected risks. Columns include risk type, entity name, domain, detection timestamp, risk level, risk category, and risk description. |
