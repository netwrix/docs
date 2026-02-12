---
title: "Proxy Mode as a Service Permissions"
description: "Proxy Mode as a Service Permissions"
sidebar_position: 10
---

# Proxy Mode as a Service Permissions

When File System scans are run in proxy mode as a service, there are two methods available for deploying the service:

* Pre-Installed File System Proxy Service – File System Proxy Service installation package must be installed on the Windows proxy servers prior to executing the scans. This is the recommended method.
* Ad Hoc File System Proxy Service Deployment – File System Proxy Service is installed on the Windows proxy server when the job is executed

The data collection processing is conducted by the proxy server where the service is running and leverages a local mode-type scan to each of the target hosts. The final step in data collection is to compress and transfer the data collected in the SQLite databases, or Tier 2 databases, back to the Access Analyzer Console server.


**File System Proxy Service Credentials**

The service can be run either as LocalSystem or with a domain account supplied during the installation of the File System Proxy Service with the following permission on the proxy server:

* Membership in the local Administrators group
* Granted the Log on as a service privilege (**Local Security Policies** > **Local Policies** > **User Rights Assignment** > **Log on as a service**)

Additionally, the credential must have `WRITE` access to the `…\StealthAUDIT\FSAA` folder in the installation directory.


**Sensitive Data Discovery Auditing Consideration**

Sensitive Data Discovery Auditing scans require .NET Framework 4.7.2 or later. If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the minimum amount of RAM. Each thread requires a minimum of 2 additional GB of RAM per host.. By default, SDD scans are configured to run two concurrent threads. For example, if the job is configured to scan 8 hosts at a time with two concurrent SDD threads, then an extra 32 GB of RAM are required (8x2x2=32).

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
[FSAA Applet Certificate Management Overview](/docs/accessanalyzer/11.6/admin/datacollector/fsaa/certificatemanagement/certificatemanagement.md)
topic for additional information.

See the [Proxy Mode as a Service Port Requirements](https://docs.netwrix.com/docs/accessanalyzer/11_6/requirements/filesystem/scanoptions/proxy-mode-scans/as-a-service/proxymodeserviceports) topic for firewall
rule information.

## Accounts Used

- **Job Execution:** Scheduled Task or Console User (launches the job)
- Console ↔ Proxy: **NAA** **Computer Account (Kerberos)**
- Target Access (Proxy ↔ Targets): Connection Profile Account
:::note
If the service is deployed by the File System Scan job (as opposed to manually installed), the account used by the connection profile will be used to run the FSAA Proxy Service unless **Run service as Local System** is checked on the Applet Settings page of the job query. Alternatively, a credential added to the connection profile using either **Task (Local)** or **Task (Domain)** can be used to run the service.

## How do I determine if I’m using Proxy Mode with Service scanning?

The best way to verify if you’re using Proxy Mode with Service scanning is via the FSAA Data Collector Query Settings::

### Pre-Install File System Proxy Service
1. [Applet Settings](https://docs.netwrix.com/docs/accessanalyzer/11_6/admin/datacollector/fsaa/appletsettings) > Applet Launch Mechanism: Require applet to be running as a service on target
2. [Scan Server Selection](https://docs.netwrix.com/docs/accessanalyzer/11_6/admin/datacollector/fsaa/scanserverselection) > “Specific Remote Server: “ **OR** “Specific Remote Servers by Host List”

**_OR_**

### Deploy Service on Scan
1. [Applet Settings](https://docs.netwrix.com/docs/accessanalyzer/11_6/admin/datacollector/fsaa/appletsettings) > Applet Launch Mechanism: Windows Service
2. [Scan Server Selection](https://docs.netwrix.com/docs/accessanalyzer/11_6/admin/datacollector/fsaa/scanserverselection) > “Specific Remote Server: “ **OR** “Specific Remote Servers by Host List”
