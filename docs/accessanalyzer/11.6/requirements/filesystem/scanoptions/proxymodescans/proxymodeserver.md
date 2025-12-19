---
title: "Proxy Mode Server Requirements"
description: "Proxy Mode Server Requirements"
sidebar_position: 10
---

# Proxy Mode Server Requirements

The Enterprise Auditor File System Proxy requirements apply for servers where either the service is
installed or the applet will be deployed unless otherwise stated.

:::note
Align the proxy server requirements to match the environment size the proxy server will be
handling.
:::


The server can be physical or virtual. The requirements for Enterprise Auditor are:

- Windows Server 2016 through Windows Server 2022

    - US English language installation
    - Domain member

**RAM, CPU, and Disk Space**

RAM, CPU, and Disk Space are dependent upon the size of the target environment:

:::warning
If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the
minimum amount of RAM. Each thread requires a minimum of 2 additional GB of RAM per host. By
default, SDD scans are configured to run two concurrent threads. For example, if the job is
configured to scan 8 hosts at a time with two concurrent SDD threads, then an extra 32 GB of RAM are
required (8x2x2=32).
:::


- Enterprise Environment (800 million+ files and folders)

    - 24 GB RAM
    - 8 CPU Cores
    - 1.5 TB Disk Space

- Extra-Large Environment (Up to 800 million files and folders)

    - 24 GB RAM
    - 8 CPU Cores
    - 770 GB Disk Space

- Large Environment (Up to 500 million files and folders)

    - 16 GB RAM
    - 8 CPU Cores
    - 470 GB Disk Space

- Medium Environment (Up to 200 million files and folders)

    - 12 GB RAM
    - 4 CPU Cores
    - 270 GB Disk Space

- Small Environment (Up to 100 million files and folders)

    - 4 GB RAM
    - 2 CPU Cores
    - 130 GB Disk Space

The above recommended disk space sizing information is based on the needs of Enterprise Auditor as
well as the File System solution for running Permission scans with out of the box configuration (500
MB per million files and folders), that means no tag collection, file-level scanning, activity, or
sensitive data.

- For tag collection, add 125 MB per million documents to the totals above
- For activity collection, add 250 MB per million files and folders and another 125 MB per million
  activity events to the totals above
- For sensitive data collection, add 500 MB per million files and folders and another 1%-10% of the
  total size of the documents scanned for sensitive data (depending on targeted document types and
  selected criteria) to the totals above

For example, in order to scan 200 million files and folders, of which 10 million files will be
scanned for tag collection and sensitive data with a total size of 6 TB, you would need: 160 GB for
permission collection + 1.25 GB for tag collection (10x125 MB) + 100 GB for sensitive data
collection (200x500 MB) + 600 GB additional for sensitive data collection (10% of 6 TB) = 861.25 GB
Disk Space.

**Additional Server Requirements**

The following are additional requirements for the server:

- .NET Framework 4.7.2 Installed

    :::note
    .NET Framework 4.7.2 can be downloaded from the link in the Microsoft
    [.NET Framework 4.7.2 offline installer for Windows](https://support.microsoft.com/en-us/topic/microsoft-net-framework-4-7-2-offline-installer-for-windows-05a72734-2127-a15d-50cf-daf56d5faec2)
    article.
    :::


- Remote Registry Service enabled

    :::note
    The Remote Registry Service only needs to be enabled when running Applet Mode or Proxy
    Mode with Applet scans.
    :::


**Sensitive Data Discovery Auditing**

The following is required to run Sensitive Data Discovery scans:

- Sensitive Data Discovery Add-On installed on the proxy server

:::note
The Sensitive Data Discovery Add-on installation package installs the appropriate JDK
(Java) version on the server. The JDK deployed is prepackaged and does not require any
configuration. It will not conflict with other JDKs or Java Runtimes in the same environment.
:::


See the following topics for additional information, based on the type of proxy mode you plan to
use:

- Proxy Mode with Applet

    - [Proxy Mode with Applet Permissions](/docs/accessanalyzer/11.6/requirements/filesystem/scanoptions/proxymodescans/withapplet/proxymodeappletpermissions.md)
    - [Proxy Mode with Applet Port Requirements](/docs/accessanalyzer/11.6/requirements/filesystem/scanoptions/proxymodescans/withapplet/proxymodeappletports.md)

- Proxy Mode as a Service

    - [Proxy Mode as a Service Permissions](/docs/accessanalyzer/11.6/requirements/filesystem/scanoptions/proxymodescans/asaservice/proxymodeservicepermissions.md)
    - [Proxy Mode as a Service Port Requirements](/docs/accessanalyzer/11.6/requirements/filesystem/scanoptions/proxymodescans/asaservice/proxymodeserviceports.md)
