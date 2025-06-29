# CommandLineUtility Data Collector

The CommandLineUtility Data Collector provides the ability to remotely spawn, execute, and extract
data provided by a Microsoft native or third-party command line utility. It allows users to easily
execute a command line utility and capture its output as Access Analyzer data. This data collector
is a core component of Access Analyzer and is available with all Access Analyzer licenses.

Protocols

- Remote Registry
- RPC

Ports

- TCP 135-139
- Randomly allocated high TCP ports

Permissions

- Member of the local Administrators group

## CommandLineUtility Query Configuration

The CommandLineUtility Data Collector executes a command line utility and captures the output. It is
configured through the Command Line Utility Data Collector Wizard, which contains the following
pages:

- Welcome
- [CLU: Profile Type](/docs/accessanalyzer/12.0/data-collection/command-line-utility/profile-type.md)
- [CLU: Profile Parameters](/docs/accessanalyzer/12.0/data-collection/command-line-utility/profile-parameters.md)
- [CLU: Execution Options](/docs/accessanalyzer/12.0/data-collection/command-line-utility/execution-options.md)
- [CLU: Define Fields](/docs/accessanalyzer/12.0/data-collection/command-line-utility/define-fields.md)
- [CLU: Script Editor](/docs/accessanalyzer/12.0/data-collection/command-line-utility/script-editor.md)
- [CLU: Results](/docs/accessanalyzer/12.0/data-collection/command-line-utility/results.md)
- [CLU: Summary](/docs/accessanalyzer/12.0/data-collection/command-line-utility/summary.md)

![Command Line Utility Data Collector Wizard Welcome page](/img/product_docs/activitymonitor/activitymonitor/install/welcome.webp)

The Welcome page can be hidden by selecting the **Do not display this page the next time** checkbox
when the wizard is open and configuration settings are saved.
