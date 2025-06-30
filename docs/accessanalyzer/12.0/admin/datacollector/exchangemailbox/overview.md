# ExchangeMailbox Data Collector

The ExchangeMailbox Data Collector extracts configuration details from the Exchange Store to provide
statistical, content, permission, and sensitive data reporting on mailboxes. This is a MAPI-based
data collector which requires the **Settings** > **Exchange** node to be enabled and configured. See
the [Exchange](/docs/accessanalyzer/12.0/admin/settings/exchange.md) topic for additional information.

The ExchangeMailbox Data Collector is available with a special Access Analyzer license. See the
[Exchange Solution](/docs/accessanalyzer/12.0/solutions/exchange/overview.md) topic for additional information.

Protocols

- MAPI
- RPC

Ports

- TCP 135
- Randomly allocated high TCP ports

Permissions

- Member of the Exchange Administrator group
- Organization Management
- Discovery Management

Sensitive Data Discovery Considerations

If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the minimum amount
of RAM. Each thread requires a minimum of 2 additional GB of RAM per host. For example, if the job
is configured to scan 8 hosts at a time , then an extra 16 GB of RAM are required (8x2=16).

## ExchangeMailbox Query Configuration

The ExchangeMailbox Data Collector is configured through the Exchange Mailbox Data Collector Wizard,
which contains the following wizard pages:

- Welcome
- [ExchangeMailbox: Category](/docs/accessanalyzer/12.0/admin/datacollector/exchangemailbox/category.md)
- [ExchangeMailbox: Scope](/docs/accessanalyzer/12.0/admin/datacollector/exchangemailbox/scope.md)
- [ExchangeMailbox: Properties](/docs/accessanalyzer/12.0/admin/datacollector/exchangemailbox/properties.md)
- [ExchangeMailbox: SDD Criteria](/docs/accessanalyzer/12.0/admin/datacollector/exchangemailbox/sddcriteria.md)
- [ExchangeMailbox: Options](/docs/accessanalyzer/12.0/admin/datacollector/exchangemailbox/options.md)
- [ExchangeMailbox: Summary](/docs/accessanalyzer/12.0/admin/datacollector/exchangemailbox/summary.md)

The query requires special permissions to connect to target Exchange servers. Assign these
permissions on the Welcome page.

![Exchange Mailbox Data Collector Wizard Welcome page](/img/product_docs/accessanalyzer/12.0/admin/datacollector/exchangemailbox/welcome.webp)

Connection Setting

Select one of the following options for the connection setting:

- Use Global setting – The configured Global Setting is displayed next to this checkbox. Select the
  checkbox to use the global setting.
- System Attendant (2003 & 2007) – Enabled when the **Use Global Setting** checkbox is not selected.
  Select this option to use System Attendant (2003 & 2007) for the connection.
- Use the mailbox associated with the Windows account that Access Analyzer is run with – Enabled
  when the **Use Global Setting** checkbox is not selected. Select this option to use the mailbox
  associated with the Windows account that Access Analyzer is run with for the connection.
- Exchange Mailbox (2010 and newer) – Enabled when the **Use Global Setting** checkbox is not
  selected. Select this option to use an Exchange Mailbox (2010 and newer) for the connection. The
  Client Access Server must be entered unless specified in the Global Settings.

    - Client Access Server – A private store server is needed if the Exchange server only has public
      stores

Test Connection Setting

Enter a server to test the connection string:

- Exchange Server – Enter the Exchange Mailbox Server to use to test the connection setting to make
  sure that there is access to the server entered
- Test – Click **Test** to test the connection to the Exchange server

The box at the bottom of the page displays information regarding the test connection in progress.
