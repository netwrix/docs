---
title: "Health Summary Email"
description: "Health Summary Email"
sidebar_position: 30
---

# Health Summary Email

Auditor Health Summary email includes all statistics on the product operations and health for the
last 24 hours; it also notifies you about license status. By default, Auditor generates this email
daily at 7:00 AM and delivers it to the recipient specified in the
[Notifications](/docs/auditor/10.9/admin/settings/notifications.md) settings. Email content is very similar to data
presented in the [Health Status Dashboard](/docs/auditor/10.9/admin/healthstatus/dashboard/overview.md).

For greater usability, to depict overall product health state, the email includes a color indicator
in the topmost section: green means Auditor had no issues while auditing your IT infrastructure, and
red means there were some problems that require your attention.

The following example shows what the email looks like:

![email_thumb_0_0](/images/auditor/10.9/admin/healthstatus/email_thumb_0_0.webp)

The Monitoring Overview section of the email provides detailed information only for the monitoring
plans with issues; it doesn't include successfully completed monitoring plans.
