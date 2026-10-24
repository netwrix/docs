---
title: "Troubleshooting"
description: "Start here when Privilege Secure misbehaves: find the right log, run diagnostics, and go to the page for services, sessions, sync, or known issues."
sidebar_position: 10
---

# Troubleshooting

Use this section when Netwrix Privilege Secure for Access Management (Privilege Secure) doesn't behave as expected. Start with the symptom, find the matching page, and follow the fix.

## Find the right page

| Symptom | Page |
|---|---|
| The installer or an upgrade fails, or the product misbehaves right after an upgrade | [Troubleshoot installation and upgrade](/docs/privilegesecure/26.07/install/troubleshoot-installation.md) |
| The console shows "Action Service is not running or registered.", or a service shows as offline | [Services not running or not registered](/docs/privilegesecure/26.07/troubleshooting/services.md) |
| A session won't provision, stays in Provisioning, or doesn't end | [Sessions fail or get stuck](/docs/privilegesecure/26.07/troubleshooting/sessions.md) |
| A domain sync fails or shows stale status, a host isn't scanned, or AD accounts lock out | [Active Directory sync and scan problems](/docs/privilegesecure/26.07/troubleshooting/ad-sync-and-scans.md) |
| Users can't connect through the Remote Access Gateway | [Troubleshoot the Remote Access Gateway](/docs/privilegesecure/26.07/remote-access-gateway/troubleshooting.md) |
| You need to test connectivity to a host, or collect diagnostics for support | [Run diagnostics with the Enablement Toolkit](/docs/privilegesecure/26.07/troubleshooting/enablement-toolkit.md) |
| You suspect a defect | [Known issues in 26.07](/docs/privilegesecure/26.07/troubleshooting/known-issues.md) |

## Start with the logs

Each Privilege Secure service writes its own log file. Logs are in `C:\ProgramData\Stealthbits\PAM\Log` on the server that runs the service. The folder name is `Log`, singular. A sibling folder named `Logs` can exist on the same server. It isn't the folder that holds the service logs.

Files are named `PAM-<Service><yyyymmdd>.log`. For example, `PAM-HostScanService20261023.log` is the Host Scan service log for one day.

To read the logs without signing in to the server, select **Auditing & Reporting** > **Log Files** in the console. See [Log files](/docs/privilegesecure/26.07/admin/audit-reporting/log-files.md) for the list of logs, the log levels, and how to change them.

The Remote Access Gateway and Portal write logs on their own hosts. See [Troubleshoot the Remote Access Gateway](/docs/privilegesecure/26.07/remote-access-gateway/troubleshooting.md).

## Check the basics

Before you dig into a specific page, check these items:

1. Select **Configuration** > **Service Nodes**, and confirm that every service on every node shows **Online**. See [Service nodes](/docs/privilegesecure/26.07/admin/service-nodes/service-nodes.md).
1. Open **System Settings** > **Services** and confirm that **NPS Rest URL** uses the form `https://<nps-server>:6500` with no trailing slash. See [Set the NPS REST URL and register services](/docs/privilegesecure/26.07/configuration/system-settings/services-url.md).
1. Open **Auditing & Reporting** > **Events** and look for recent warnings, such as a service that stopped.
1. Open the log for the service that handles the failing task and look for warning and error lines around the time of the failure.

## Collect information for support

If you can't resolve the problem, collect these items before you contact [Netwrix Support](https://www.netwrix.com/support.html):

- The version of Privilege Secure, and the page or action where the problem occurs.
- The exact error text.
- The time of the failure, so support can match it to log lines.
- The diagnostics export from the Enablement Toolkit. See [Run diagnostics with the Enablement Toolkit](/docs/privilegesecure/26.07/troubleshooting/enablement-toolkit.md).

Set a more detailed log level only when support asks you to, and set it back to **Information** afterward.

## Knowledge Base

The Netwrix Knowledge Base has articles on specific Privilege Secure problems in its Troubleshooting and errors category, such as [Logs Location](/docs/kb/privilegesecure/troubleshooting-and-errors/logs-location) and [services that aren't running](/docs/kb/privilegesecure/troubleshooting-and-errors/services-are-not-running). See the [Privilege Secure Knowledge Base](../kb/index.md).
