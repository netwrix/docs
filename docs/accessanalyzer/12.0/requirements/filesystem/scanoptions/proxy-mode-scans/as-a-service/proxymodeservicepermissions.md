---
title: "Proxy Mode as a Service Permissions"
description: "Proxy Mode as a Service Permissions"
sidebar_position: 10
---

# Proxy Mode as a Service Permissions

When File System scans are run in proxy mode as a service, there are two methods available for
deploying the service:

- Pre-Installed File System Proxy Service – File System Proxy Service installation package must be
  installed on the Windows proxy servers prior to executing the scans. This is the recommended
  method.
- Ad Hoc File System Proxy Service Deployment – File System Proxy Service is installed on the
  Windows proxy server when the job is executed

The data collection processing is conducted by the proxy server where the service is running and
leverages a local mode-type scan to each of the target hosts. The final step in data collection is
to compress and transfer the data collected in the SQLite databases, or Tier 2 databases, back to
the Access Analyzer Console server.

The secure communication is configured during the installation of the service on the proxy server.
The credential provided for the secure communications in the installation wizard is also added to
the Access Analyzer Connection Profile assigned to the File System Solution.

**File System Proxy Service Credentials**

The service can be run either as LocalSystem or with a domain account supplied during the
installation of the File System Proxy Service with the following permission on the proxy server:

- Membership in the local Administrators group
- Granted the Log on as a service privilege (**Local Security Policies** > **Local Policies** >
  **User Rights Assignment** > **Log on as a service**)
- If running FSAC, the service account in the credential profile requires access to the admin share
  (for example, `C$`) where the `sbtfilemon.ini` file exists

Additionally, the credential must have `WRITE` access to the `…\StealthAUDIT\FSAA` folder in the
installation directory.

**Windows File Server Target Host Credentials**

Configure the credential(s) with the following rights on the Windows host(s):

- Group membership in both of the following local groups:
    - Power Users
    - Backup Operators
- Granted the “Backup files and directories” local policy privilege

For Windows Server target hosts, the credential also requires:

- Granted the "Network access: Restrict clients allowed to make remote calls to SAM" Local
  Policies > Security Options privilege

In order to collect data on administrative shares and local policies (logon policies) for a Windows
target, the credential must have group membership in the local Administrators group.

**Sensitive Data Discovery Auditing Consideration**

Sensitive Data Discovery Auditing scans require .NET Framework 4.7.2 or later. If running Sensitive
Data Discovery (SDD) scans, it will be necessary to increase the minimum amount of RAM. Each thread
requires a minimum of 2 additional GB of RAM per host.. By default, SDD scans are configured to run
two concurrent threads. For example, if the job is configured to scan 8 hosts at a time with two
concurrent SDD threads, then an extra 32 GB of RAM are required (8x2x2=32).

**Secure Proxy Communication Considerations**

For secure proxy communication via https, a credential is supplied during installation to provide
secure communications between the Access Analyzer server and the proxy server. This credential must
be a domain account, but no additional permissions are required. It is recommended to use the same
domain account configured to run the proxy service as a credential in the Connection Profile to be
used by the File System Solution

**Secure Proxy Communication and Certificate Exchange**

For Proxy Mode as a Service Scans, the certificate exchange mechanism and certificate exchange port
must be configured via the File System Access Auditing Data Collector Wizard prior to executing a
scan. See the
[FSAA Applet Certificate Management Overview](/docs/accessanalyzer/12.0/admin/datacollector/fsaa/certificatemanagement/certificatemanagement.md)
topic for additional information.

**Access Analyzer Connection Profile**

When running Access Auditing (FSAA) and/or Sensitive Data Discovery Auditing scans, the credentials
within the Connection Profile assigned to the File System scans must be properly configured as
explained above. Also the firewall rules must be configured to allow for communication between the
applicable servers.

See the [Proxy Mode as a Service Port Requirements](/docs/accessanalyzer/12.0/requirements/filesystem/scanoptions/proxy-mode-scans/as-a-service/proxymodeserviceports.md) topic for firewall
rule information.
