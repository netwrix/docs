# Health Summary Email

Auditor Health Summary email includes all statistics on the product operations and health for the
last 24 hours; it also notifies you about license status. By default, this email is generated daily
at 7:00 AM and delivered to the recipient specified in the
[Notifications](/versioned_docs/auditor_10.6/auditor/admin/settings/notifications.md) settings.
Email content is very similar to data presented in the
[Health Status Dashboard](/versioned_docs/auditor_10.6/auditor/admin/healthstatus/dashboard/overview.md).

For greater usability, to depict overall product health state, the email includes a color indicator
in the topmost section: green means Auditor had no issues while auditing your IT infrastructure, and
red means there were some problems that require your attention.

The email looks like shown below:

![email](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/settings/email.png)

The Monitoring Overview section of the email provides detail information only for the monitoring
plans with issues. Successfully completed monitoring plans are not included.
