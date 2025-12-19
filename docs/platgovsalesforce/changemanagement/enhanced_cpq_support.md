---
title: "Data Tracking"
description: "Data Tracking"
sidebar_position: 90
---

# Data Tracking

Salesforce CPQ (Configure, Price, Quote Software) sales tool provides accurate pricing with any
given product configuration scenario. Behind the scenes, CPQ uses configuration data stored in
custom objects. Manually monitoring this configuration data is the hardest part of SOX compliance.
In the CPQ application, for example, important rules about products, prices, discounts, and
approvals are stored as data in custom objects. Getting visibility into these changes is incredibly
time-consuming, and there are few options for preventing changes that can put your processes and
compliance in jeopardy.

This is not unique to CPQ. Billing and other applications that touch revenue related data are all
potentially in scope and in your auditor's sights.

Platform Governance for Salesforce solves this major pain point by treating configuration data with
the same scrutiny it applies to other Apex metadata in your Org. It is the only native solution to
give you visibility into these changes. You can create mitigating controls to automatically block
changes to critical CPQ rules. For example, you can now designate the fields on the **Discount
Schedule** and **Discount Tier** objects to be under change control, and generate compliance logs if
the fields are changed.

As a result, you no longer have to rely on field history reports and manual review to ensure CPQ and
other configuration data is protected. Auditors are satisfied, audit costs go down and IT leadership
can rest easy knowing there are no surprises.

You must have an Enterprise Compliance license to benefit from this feature.

The basic steps for CPQ data tracking:

1. Ensure your org has been [scanned](/docs/platgovsalesforce/installingstrongpoint/running_scanner.md) at least once.
2. [Set up data tracking](/docs/platgovsalesforce/changemanagement/set_up_data_tracking.md) for each tracked customization.
3. [Add](/docs/platgovsalesforce/changemanagement/set_up_data_tracking.md) the tracked customizations to a policy.
