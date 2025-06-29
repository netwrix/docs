# Sensitive Data Discovery Add-On Installation

The Sensitive Data Discovery Add-On enables Enterprise Auditor to scan files for criteria matches
which indicate the existence of sensitive data. Sensitive Data Discovery scans can be run against
Windows file system servers, Network Attached Storage (NAS) devices, SharePoint on-premises,
SharePoint Online, OneDrive for Business, DropBox for Business, SQL Server databases, and Exchange
mailboxes.

This topic provides information on the installation and upgrade processes of the Sensitive Data
Discovery Add-On. For information on the required prerequisites, see the Server Requirements topic.

The version of the SharePoint Agent must also match the major version of Enterprise Auditor. See the
[What's New](/docs/accessanalyzer/11.6/getting-started/whats-new.md) topic for release
information.

## Supported Platforms

The Sensitive Data Discovery Add-On can be installed on the following servers:

- Windows Server 2016 through Windows Server 2022
  - On the Enterprise Auditor Console Server
  - On the Windows proxy server hosting the File System Proxy service
    - See the
      [File System Proxy as a Service Overview](/docs/accessanalyzer/11.6/installation/filesystem-proxy/install.md)
      topic for additional information
  - Install the Sensitive Data Add-on – FSAA & SPAA Agentless (or x86) version of the Sensitive
    Data Discovery Add-On
- SharePoint 2013+
  - On the SharePoint server hosting the SharePoint Agent
    - See the
      [SharePoint Agent Installation](/docs/accessanalyzer/11.6/installation/sharepoint-agent/install.md)
      topic for additional information
  - Install the Sensitive Data Add-on – SPAA Agent (or x64) version of the Sensitive Data
    Discovery Add-On

# Installing the Sensitive Data Discovery Add-On

Remember, the following additional considerations:

- File System Considerations:
  - To run the **FileSystem** Job Group in Applet Mode or Proxy Mode with Applet, the targeted
    file servers also need .NET Framework 4.7.2 or later to be installed in order for Sensitive
    Data Discovery collections to successfully occur.
  - To run the **FileSystem** Job Group in File System Proxy Mode as a Service, the Sensitive Data
    Discovery Add-On (32-bit `SensitiveDataAddon.msi`) also needs to be installed on the proxy
    server. The proxy server also requires the .NET Framework 4.7.2 or later. The Enterprise
    Auditor license file will need to be accessible locally for this installation. See the
    [File System Proxy as a Service Overview](/docs/accessanalyzer/11.6/installation/filesystem-proxy/install.md)
    topic for additional information.
- SharePoint Consideration – To use the SharePoint Agent to scan for sensitive data, the Sensitive
  Data Discovery Add-On (64-bit `SensitiveDataAddon.msi`) will also need to be installed on the
  application server which hosts the Central Administration component of the targeted SharePoint
  farms after the Enterprise Auditor SharePoint Agent has been installed on that server. The
  SharePoint server also requires .NET Framework 4.7.2 or later. The Enterprise Auditor license file
  will need to be accessible locally for this installation. See the
  [SharePoint Agent Installation](/docs/accessanalyzer/11.6/installation/sharepoint-agent/install.md)
  topic for additional information.

**NOTE:** Before running the installation package, please close the Enterprise Auditor application.

The Enterprise Auditor license file is needed during installation. It can be imported from the
Enterprise Auditor installation directory when the add-on is installed on the Enterprise Auditor
Console server. Follow the steps to install the Sensitive Data Discovery Add-On.

**Step 1 –** Run the `SensitiveDataAddon.exe` executable.

_Remember,_

- Install the Sensitive Data Add-on – FSAA & SPAA Agentless (or x86) version of the Sensitive Data
  Discovery Add-On on the Enterprise Auditor Console Server.
- Install the Sensitive Data Add-on – FSAA & SPAA Agentless (or x86) version of the Sensitive Data
  Discovery Add-On on the File System Proxy server when using the File System Proxy Mode as a
  Service scan mode.
- Install the Sensitive Data Add-on – SPAA Agent (or x64) version of the Sensitive Data Discovery
  Add-On on the SharePoint server hosting the SharePoint Agent.
  - Select the SPAA Agent for SP 2013 and newer

![SDD Add-on Setup Wizard Welcome page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/welcome.webp)

**Step 2 –** On the Welcome page, click **Next** to begin the installation.

![SDD Add-on Setup Wizard End-User License Agreement page](/img/versioned_docs/changetracker_8.0/changetracker/install/eula.webp)

**Step 3 –** Check the **I accept the terms in the License Agreement** box and click **Next**.

![SDD Add-on Setup Wizard License File page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/agent/license.webp)

**Step 4 –** Click **Browse** to select the license file to use for installation. By default, this
will target the license key within the Enterprise Auditor installation directory. If installing on
the SharePoint Agent server or the File System Proxy server, use the Browse button to navigate to
the license file. Click **Next**.

**NOTE:** The Enterprise Auditor license file needs to be locally accessible during the installation
process.

![SDD Add-on Setup Wizard Ready to install page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/ready.webp)

**Step 5 –** Click **Install** to begin the installation.

![Completed the SDD Add-on Setup Wizard page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/sensitivedatadiscovery/completed.webp)

**Step 6 –** When the installation has completed, click **Finish** to exit the wizard.

The Enterprise Auditor Console is now ready to run Sensitive Data Discovery jobs for the following
solutions, according to the organization’s license:

- AWS
- Dropbox
- Exchange
- File System
- PostgreSQL
- MongoDB
- MySQL
- Oracle
- SharePoint
- SQL

Prior to job execution, ensure the desired criteria have been properly configured for each job. See
the
[Sensitive Data Discovery Add-On Installation](/docs/accessanalyzer/11.6/installation/sensitive-data-discovery/install.md)
topic for additional information.
