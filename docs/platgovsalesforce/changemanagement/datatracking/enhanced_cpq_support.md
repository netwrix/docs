---
title: "Data Tracking"
description: "Data Tracking"
sidebar_position: 100
---

# Data Tracking

Salesforce CPQ (Configure, Price, Quote) is a sales tool that provides accurate pricing for any
product configuration scenario. CPQ uses configuration data stored in
custom objects. Manually monitoring this configuration data is among the most demanding parts of
Sarbanes-Oxley Act (SOX) compliance. In the CPQ application, for example, important rules about
products, prices, discounts, and approvals are stored as data in custom objects. Gaining visibility
into these changes is time-consuming, and few options exist for preventing changes that put your
processes and compliance at risk.

This challenge isn't unique to CPQ. Billing and other applications that handle revenue-related data
are all potentially in scope for audit review.

Platform Governance for Salesforce solves this problem by treating configuration data with
the same scrutiny it applies to other Apex metadata in your org. You can create mitigating controls
to automatically block changes to critical CPQ rules. For example, you can designate the fields on
the **Discount Schedule** and **Discount Tier** objects to be under change control, and generate
compliance logs when the fields are changed.

As a result, you no longer have to use field history reports and manual review to ensure CPQ and
other configuration data is protected. Auditors have the documentation they need, audit costs
decrease, and IT leadership has full visibility into configuration changes.

You must have an Enterprise Compliance license to benefit from this feature.

The basic steps for CPQ data tracking:

1. Ensure your org has been [scanned](/docs/platgovsalesforce/installingstrongpoint/running_scanner.md) at least once.
2. [Set up data tracking](set_up_data_tracking.md) for each tracked customization.
3. [Add](set_up_data_tracking.md) the tracked customizations to a policy.
