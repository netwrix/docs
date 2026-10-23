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
  - SA_EX_ExchangeMetrics_InternetTraffic
  - HUB Metrics
products:
  - accessanalyzer
sidebar_label: How Exchange Traffic Is Labeled Internal vs. Internet
tags:
  - kb
  - exchange-integration
title: "How Does Access Analyzer Determine If Exchange Traffic Is Internal vs. Internet Traffic?"
---

# How Does Access Analyzer Determine If Exchange Traffic Is Internal vs. Internet Traffic?

## Overview

This article explains how Netwrix Access Analyzer decides whether Exchange Metrics traffic is internal or Internet traffic, which domains it treats as local, and why mail for a domain can appear as Internet traffic.

> **NOTE:** This article applies to on-premises Exchange only. Exchange Metrics collection (1. HUB Metrics) supports Exchange 2010, 2013, 2016, and 2019. It does not support Exchange Online. See [Exchange Support and Permissions Explained](/docs/accessanalyzer/12_0/requirements/exchange/support).

At the start of each Exchange Metrics collection run, Access Analyzer builds a list of local domains. It compares the sender and recipient domains of each message against that list. Access Analyzer reports a domain that is not on the list as Internet traffic.

Access Analyzer builds the list from two sources:

- The domains in the address templates of your Exchange recipient policies (also called email address policies), stored in the `gatewayProxy` attribute
- Subdomains of those domains that appear in the `mail` attribute of Active Directory users. A subdomain that does not appear in any user's `mail` attribute is not treated as local.

Access Analyzer does not use the accepted domains configured in Exchange. A domain with active mailboxes and the `Authoritative` type in `Get-AcceptedDomain` is still reported as Internet traffic unless it appears in a recipient policy.

The most common cause is a domain that mailboxes use but that no recipient policy includes in its `gatewayProxy` attribute. This is typical for a secondary SMTP domain, for example a subsidiary or acquired company domain, whose addresses administrators assign outside the email address policies.

## Instructions

### How to Check Which Domains Access Analyzer Treats as Local

Run the following on a domain-joined system to see what the recipient policies contain. This reads the same attribute Access Analyzer uses.

```powershell
$cfg = (Get-ADRootDSE).configurationNamingContext
Get-ADObject -SearchBase $cfg -LDAPFilter "(objectClass=msExchRecipientPolicy)" -Properties gatewayProxy | ForEach-Object { "$($_.Name): " + ($_.gatewayProxy -join ', ') }
```

Access Analyzer reports domains that do not appear in the output of any policy as Internet traffic.

### How to Get a Domain Reported as Internal Traffic

1. Add the domain to one of your Exchange recipient policies so that it appears in the policy's `gatewayProxy` attribute.

1. Run the [EX_MetricsCollection Job](/docs/accessanalyzer/12_0/solutions/exchange/hubmetrics/collection/ex_metricscollection) again (**Exchange** > **1. HUB Metrics** > **0. Collection**).

After the job runs, new traffic for the domain stops appearing in the `SA_EX_ExchangeMetrics_InternetTraffic` table and starts appearing in the `SA_EX_ExchangeMetrics_UserTraffic` table, so it shows in the related Exchange reports. The change applies only to data collected after the rerun. Access Analyzer does not reclassify traffic it already collected.

> **IMPORTANT:** Changing a recipient policy can affect the email addresses of mailboxes in the policy's scope. Review the scope with your Exchange administrator before making the change.
