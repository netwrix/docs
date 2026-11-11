---
sidebar_position: 2
sidebar_label: Risk scoring
description: Understand how PingCastle calculates the overall security score from four risk categories.
---
# Risk Scoring

PingCastle calculates an overall security score based on four categories. The **maximum** score across these categories determines the overall score (maximum 100 points per category):

| Category | Description |
|----------|-------------|
| **Privileged Accounts** | Security issues related to administrator accounts and privileged access |
| **Trusts** | Risks associated with trust relationships between Active Directory domains (one AD can compromise another via trusts) |
| **Stale Objects** | Issues with AD object lifecycle management, including inactive computers, users, and delegations |
| **Security Anomalies** | Additional security checks that don't fit into the other categories |

Each triggered rule displays its severity level and point value. Clicking on a rule reveals a detailed explanation of the issue and remediation steps.
