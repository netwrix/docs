---
title: "Proxy Mode with Applet Permissions"
description: "Proxy Mode with Applet Permissions"
sidebar_position: 10
---

# Proxy Mode with Applet Permissions

When File System scans are run in proxy mode with applet, it means the File System applet is
deployed to the Windows proxy server when the job is executed to conduct data collection. The data
collection processing is initiated by the proxy server where the applet is deployed and leverages a
local mode-type scan to each of the target hosts. The final step in data collection is to compress
and transfer the data collected in the SQLite databases, or Tier 2 databases, back to the Access
Analyzer Console server.

Configure the credential(s) with the following rights on the proxy server(s):

- Group membership in the local Administrators group
- Granted the Backup files and directories local policy privilege
- Granted the Log on as a batch privilege
- If the applet is deployed as a service, the service account requires the Log on as a service
  privilege

    - See the [FSAA: Applet Settings](/docs/accessanalyzer/12.0/admin/datacollector/fsaa/appletsettings.md) topic for
      additional information on the applet launch mechanism

- If running FSAC, the service account in the credential profile requires access to the admin share
  (e.g. `C$`) where the `sbtfilemon.ini` file exists

Additionally, the credential must have `WRITE` access to the `…\StealthAUDIT\FSAA` folder in the
installation directory on the proxy server as well as on the Access Analyzer Console server. This is
required by either the user account running the Access Analyzer application, when manually executing
jobs within the console, or the Schedule Service Account assigned within Access Analyzer, when
running jobs as a scheduled tasks.

:::tip
Remember, Remote Registry Service must be enabled on the host where the applet is deployed (for
Applet Mode or Proxy Mode with Applet scans) to determine the system platform and where to deploy
the applet.
:::


:::warning
The local policy, “Network access: Do not allow storage of passwords and credentials
for network authentication” must be disabled in order for the applet to start.
:::


Configure the credential(s) with the following rights on the Windows host(s):

- Group membership in both of the following local groups:
    - Power Users
    - Backup Operators
- Granted the “Backup files and directories” local policy privilege

For Windows Server target hosts, the credential also requires:

- Granted the "Network access: Restrict clients allowed to make remote calls to SAM" Local
  Policies > Security Options privilege

Sensitive Data Discovery Auditing scans require .NET Framework 4.7.2 or later to be installed on the
server where the applet is to be deployed in order for Sensitive Data Discovery collections to
successfully occur.

When running Access Auditing (FSAA) and/or Sensitive Data Discovery Auditing scans, the credentials
within the Connection Profile assigned to the File System scans must be properly configured as
explained above. Also the firewall rules must be configured to allow for communication between the
applicable servers.

See the [Proxy Mode with Applet Port Requirements](/docs/accessanalyzer/12.0/requirements/filesystem/scanoptions/proxy-mode-scans/with-applet/proxymodeappletports.md) topic for firewall rule
information.

**Secure Proxy Communication Considerations**

For Proxy Mode with Applet scans, the certificate exchange mechanism and certificate exchange port
must be configured via the File System Access Auditing Data Collector Wizard prior to executing a
scan. See the
[FSAA Applet Certificate Management Overview](/docs/accessanalyzer/12.0/admin/datacollector/fsaa/certificatemanagement/certificatemanagement.md)
topic for additional information.
