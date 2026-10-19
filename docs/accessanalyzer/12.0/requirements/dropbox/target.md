---
title: "Target Dropbox Requirements, Permissions, and Ports"
description: "Target Dropbox Requirements, Permissions, and Ports"
sidebar_position: 10
---

# Target Dropbox Requirements, Permissions, and Ports

The Access Analyzer for AWS Solution lets you audit Dropbox. It scans:

- Dropbox

**Data Collector**

This solution employs the following data collector to scan the target environment:

- [DropboxAccess Data Collector](/docs/accessanalyzer/12.0/admin/datacollector/dropboxaccess/overview.md)

## Permissions

- Dropbox Team Administrator

The DropboxAccess Data Collector requires generating an access token to configure the Connection
Profile for Dropbox. You generate the access token from within the Dropbox Access Auditor Data
Collector Wizard on the Scan Options page. After you copy the access token into a Connection
Profile for Dropbox, Access Analyzer saves it and you don't need to generate it again. See the
[DropboxAccess: Scan Options](/docs/accessanalyzer/12.0/admin/datacollector/dropboxaccess/scanoptions.md) topic for
additional information.

## Ports

The following firewall ports are needed:

**For DropboxAccess Data Collector**

- TCP 80
- TCP443
