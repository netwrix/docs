# SMARTLog Data Collector

The SMARTLog Data Collector provides search and extraction of details from Windows Event Logs
(online or offline) and Microsoft Exchange Internet Information Server (IIS) logs.

The SMARTLog Data Collector is a core component of Enterprise Auditor, but it has been preconfigured
within the Active Directory Solution, Exchange Solution, SQL Solution, and the Windows Solution.
While the data collector is available with all Enterprise Auditor license options, these solutions
are only available with a special Enterprise Auditor licenses. See following sections for additional
information:

- [Active Directory Solution](/docs/accessanalyzer/11.6/accessanalyzer/solutions/activedirectory/overview.md)
- [Exchange Solution](/docs/accessanalyzer/11.6/accessanalyzer/solutions/exchange/overview.md)
- [SQL Job Group](/docs/accessanalyzer/11.6/accessanalyzer/solutions/databases/sql/overview.md)
- [Windows Solution](/docs/accessanalyzer/11.6/accessanalyzer/solutions/windows/overview.md)

Protocols

- Log
- Remote Event
- RPC

Ports

- TCP 135
- TCP 445
- Randomly allocated high TCP ports

Permissions

- Member of the Domain Administrators group (if targeting domain controllers)
- Member of the local Administrators group

See the
[Exchange Remote Connections Permissions](/docs/accessanalyzer/11.6/accessanalyzer/requirements/solutions/exchange/remoteconnections.md)
topic for additional information related to permissions required for targeting Exchange servers.

## SMARTLog Query Configuration

The SMARTLog Data Collector is configured through the SMART Log DC Wizard, which contains the
following wizard pages:

- Welcome
- [SMARTLog: Log Type](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/smartlog/logtype.md)
- [SMARTLog: Sample Host](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/smartlog/samplehost.md)
- [SMARTLog: Target Log](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/smartlog/targetlog.md)
- [SMARTLog: Results](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/smartlog/results.md)
- [SMARTLog: Criteria](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/smartlog/criteria.md)
- [SMARTLog: Collection Method](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/smartlog/collectionmethod.md)
- [SMARTLog: Log State](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/smartlog/logstate.md)
- [SMARTLog: Event Log Options](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/smartlog/eventlogoptions.md)
- [SMARTLog: Summary](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/smartlog/summary.md)

![SMART Log DC Wizard Welcome page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/welcome.webp)

There are no configurable settings on the Welcome page. Click **Next** to proceed to the Log Type
page.
