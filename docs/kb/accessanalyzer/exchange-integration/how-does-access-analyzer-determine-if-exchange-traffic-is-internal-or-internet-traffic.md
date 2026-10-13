---
description: >-
  This article explains how Netwrix Access Analyzer decides whether Exchange Metrics traffic is internal or Internet traffic, which domains it treats as local, and why mail for a domain can show up as Internet traffic.
keywords:
  - Exchange Metrics
  - Internet Traffic
  - internal traffic
  - local domains
  - recipient policy
  - email address policy
  - gatewayProxy
  - accepted domain
  - SA_EX_ExchangeMetrics_UserTraffic
  - SA_EX_ExchangeMetricsInternetTraffic
  - HUB Metrics
products:
  - accessanalyzer
sidebar_label: How Exchange Traffic Is Labeled Internal vs. Internet
tags:
  - exchange-auditing
title: "How Does Access Analyzer Determine if Exchange traffic is Internal vs. Internet Traffic?"
---

# How Does Access Analyzer Determine if Exchange traffic is Internal vs. Internet Traffic?

## Question

How Does Access Analyzer Determine if Exchange traffic is Internal vs. Internet Traffic?

## Answer

At the start of each Exchange Metrics collection run, Access Analyzer builds a list of local domains. It compares the sender and recipient domains of each message against that list. A domain that is not on the list is reported as **Internet traffic**.

Access Analyzer builds the list from two sources:

- The `gatewayProxy` attribute of your Exchange recipient policies (also called email address policies). Each address template in a policy registers its domain as local.
- Subdomains of those domains that appear in users' mail attributes.

The accepted domain configuration in Exchange does not determine this. A domain can be listed as **Authoritative** in `Get-AcceptedDomain`, have active mailboxes, and still be reported as Internet traffic if it is not in any recipient policy.

## Details

### Why a domain might be labeled Internet traffic

The most common cause is a domain that is in use by mailboxes but not included in the `gatewayProxy` attribute of any recipient policy. This is typical for a secondary SMTP domain, for example a subsidiary or acquired company domain, whose addresses are applied outside the email address policies.

The domain is then missing from the local domains list, even though the mail is flowing and Access Analyzer is collecting it.

### How to check which domains Access Analyzer treats as local

Run the following on a domain-joined system to see what the recipient policies contain. This reads the same attribute Access Analyzer uses.

```powershell
$cfg = (Get-ADRootDSE).configurationNamingContext
Get-ADObject -SearchBase $cfg -LDAPFilter "(objectClass=msExchRecipientPolicy)" -Properties gatewayProxy | ForEach-Object { "$($_.Name): " + ($_.gatewayProxy -join ', ') }
```

Domains that do not appear in the output of any policy are reported as Internet traffic.

### How to get a domain reported as internal traffic

Add the domain to one of your Exchange recipient policies so that it appears in the policy's `gatewayProxy` attribute, then run the Exchange Metrics collection jobs again (**Exchange > 1. HUB Metrics > 0. Collection**).

> **NOTE:** Changing a recipient policy can affect the email addresses of mailboxes in the policy's scope. Review the scope with your Exchange administrator before making the change.

## Related Articles

- [EX_MetricsDetails Job](https://docs.netwrix.com/docs/accessanalyzer/12_0/solutions/exchange/hubmetrics/collection/ex_metricsdetails)