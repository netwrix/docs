---
sidebar_position: 1
sidebar_label: Email delivery
description: Send PingCastle reports by email over SMTP.
---
# Email Delivery

PingCastle can automatically send reports via SMTP. If you enable encryption, PingCastle encrypts reports before sending.

**SMTP Configuration**:

Configure SMTP settings in `appsettings.console.json`:
```json
{
  "Smtp": {
    "From": "pingcastle@your.domain",
    "DeliveryMethod": "Network",
    "Host": "localhost",
    "Port": 25,
    "UserName": null,
    "Password": null
  }
}
```

For authenticated SMTP, provide values for `UserName` and `Password`. For TLS/SSL connections, use the `--smtptls` command line flag.

**Command Line Options**:

| Option | Description |
|--------|-------------|
| `--sendXmlTo <emails>` | Send only the XML report. Accepts comma-separated email addresses |
| `--sendHtmlTo <emails>` | Send only the HTML report. Accepts comma-separated email addresses |
| `--sendAllTo <emails>` | Send both HTML and XML reports. Accepts comma-separated email addresses |
| `--notifyMail <emails>` | Send notification when reports are received |
| `--smtplogin <user>` | Specify SMTP username via command line (overrides config) |
| `--smtppass <password>` | Specify SMTP password via command line (overrides config) |
| `--smtptls` | Enable TLS/SSL for SMTP (for ports other than 465 and 587) |

:::tip
If you're using PingCastle Enterprise or Pro, sending reports this way (via `PingCastle.exe`) produces a report without exclusions applied, since exclusions run server-side. Scores in the emailed report likely differ from scores in the web UI.
:::

**Example**:
```powershell
.\PingCastle.exe --healthcheck --server domain.local --sendAllTo admin@company.com,security@company.com
```
