# Notification: Type

Use the Notification Type page to specify one or more notification types.

![Notification Data Analysis Module wizard Notification Type page](../../../../../../static/img/product_docs/threatprevention/threatprevention/reportingmodule/configuration/integrations/authenticationprovider/type.webp)

The following options are available:

- Email – Sends a notification email to specified addresses defined on the SMTP page. See the
  [Notification: SMTP](smtp.md) topic for additional information.
- Command-line Executable – Runs a command-line program such as a batch file. On the Command Line
  page, define the specific application to run and any flags or arguments that must be set at
  runtime. See the [Notification: Command Line](commandline.md) topic for additional information.
- Event Log – Creates a Windows Event Log item on the Access Analyzer Event Log. On the Event Log
  page, define the following:

    - Type of event (Information, Warning, Error, SuccessAudit, FailureAudit)
    - Event ID
    - Description of the event

    See the [Notification: Event Log](eventlog.md) topic for additional information.
