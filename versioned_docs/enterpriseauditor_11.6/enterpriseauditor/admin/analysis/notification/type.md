# Notification: Type

Use the Notification Type page to specify one or more notification types.

![Notification Data Analysis Module wizard Notification Type page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/analysis/notification/type.png)

The following options are available:

- Email – Sends a notification email to specified addresses defined on the SMTP page. See the
  [Notification: SMTP](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/analysis/notification/smtp.md) topic
  for additional information.
- Command-line Executable – Runs a command-line program such as a batch file. On the Command Line
  page, define the specific application to run and any flags or arguments that must be set at
  runtime. See the
  [Notification: Command Line](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/analysis/notification/commandline.md) topic
  for additional information.
- Event Log – Creates a Windows Event Log item on the Enterprise Auditor Event Log. On the Event Log
  page, define the following:

    - Type of event (Information, Warning, Error, SuccessAudit, FailureAudit)
    - Event ID
    - Description of the event

    See the
    [Notification: Event Log](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/analysis/notification/eventlog.md) topic
    for additional information.
