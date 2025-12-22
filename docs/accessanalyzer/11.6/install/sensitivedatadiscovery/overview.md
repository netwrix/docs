---
title: "Sensitive Data Discovery Add-On Installation"
description: "Sensitive Data Discovery Add-On Installation"
sidebar_position: 40
---

# Sensitive Data Discovery Add-On Installation

The Sensitive Data Discovery Add-On enables Enterprise Auditor to scan files for criteria matches
which indicate the existence of sensitive data. Sensitive Data Discovery scans can be run against
Windows file system servers, Network Attached Storage (NAS) devices, SharePoint on-premises,
SharePoint Online, OneDrive for Business, DropBox for Business, SQL Server databases, and Exchange
mailboxes.

This topic provides information on the installation and upgrade processes of the Sensitive Data
Discovery Add-On. For information on the required prerequisites, see the Server Requirements topic.

The version of the SharePoint Agent must also match the major version of Enterprise Auditor.

## Supported Platforms

The Sensitive Data Discovery Add-On can be installed on the following servers:

- Windows Server 2016 through Windows Server 2022
    - On the Enterprise Auditor Console Server
    - On the Windows proxy server hosting the File System Proxy service
        - See the
          [File System Proxy as a Service Overview](/docs/accessanalyzer/11.6/install/filesystemproxy/overview.md)
          topic for additional information
    - Install the Sensitive Data Add-on – FSAA & SPAA Agentless (or x86) version of the Sensitive
      Data Discovery Add-On
- SharePoint 2013+
    - On the SharePoint server hosting the SharePoint Agent
        - See the
          [SharePoint Agent Installation](/docs/accessanalyzer/11.6/install/sharepointagent/overview.md)
          topic for additional information
    - Install the Sensitive Data Add-on – SPAA Agent (or x64) version of the Sensitive Data
      Discovery Add-On
