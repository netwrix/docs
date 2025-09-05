---
title: "Health Summary Email"
description: "Health Summary Email"
sidebar_position: 30
---

# Health Summary Email

Auditor Health Summary email includes all statistics on the product operations and health for the
last 24 hours; it also notifies you about license status. By default, this email is generated daily
at 7:00 AM and delivered to the recipient specified in the
[Notifications](/docs/auditor/10.8/admin/settings/notifications.md) settings. Email content is very similar to data
presented in the [Health Status Dashboard](/docs/auditor/10.8/admin/healthstatus/dashboard/overview.md).

For greater usability, to depict overall product health state, the email includes a color indicator
in the topmost section: green means Auditor had no issues while auditing your IT infrastructure, and
red means there were some problems that require your attention.

The email looks like shown below:

![email_thumb_0_0](/images/auditor/10.7/admin/healthstatus/email_thumb_0_0.webp)

The Monitoring Overview section of the email provides detail information only for the monitoring
plans with issues. Successfully completed monitoring plans are not included.
