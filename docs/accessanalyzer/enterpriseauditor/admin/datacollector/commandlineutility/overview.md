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
- [CLU: Profile Type](profiletype.md)
- [CLU: Profile Parameters](profileparameters.md)
- [CLU: Execution Options](executionoptions.md)
- [CLU: Define Fields](definefields.md)
- [CLU: Script Editor](scripteditor.md)
- [CLU: Results](results.md)
- [CLU: Summary](summary.md)

![Command Line Utility Data Collector Wizard Welcome page](../../../../../../static/img/product_docs/activitymonitor/activitymonitor/install/welcome.webp)

The Welcome page can be hidden by selecting the **Do not display this page the next time** checkbox
when the wizard is open and configuration settings are saved.
