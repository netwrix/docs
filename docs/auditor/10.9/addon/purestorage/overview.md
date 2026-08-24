---
title: "Pure Storage"
description: "Pure Storage"
sidebar_position: 175
---

# Pure Storage

Netwrix Auditor is a visibility platform for user behavior analysis and risk mitigation that enables
control over changes, configurations, and access in hybrid IT environments to protect data regardless
of its location. The platform provides security analytics to detect anomalies in user behavior and
investigate threat patterns before a data breach occurs.

Pure Storage FlashArray supports **File Auditing** — a native feature that logs file and folder
access over SMB and NFS. The **Netwrix Auditor Add-on for Pure Storage** receives these audit events
and feeds them into Netwrix Auditor, giving you a unified, searchable audit trail of who accessed,
changed, renamed, or deleted files and folders on your FlashArray alongside the rest of your
monitored IT infrastructure.

The FlashArray pushes JSON audit events to the add-on over a TLS syslog connection, with no
additional share access required.

See the [Deploy the Add-On](/docs/auditor/10.9/addon/purestorage/install.md) topic for details.

## Prerequisites at a Glance

Before deploying the add-on, make sure the following is in place:

- FlashArray with a File Auditing policy configured and a SACL set on the paths you want audited —
  auditing produces no events at all until a SACL is applied.
- A Windows Server host for the add-on, with the syslog listener port open on the firewall.
- Netwrix Auditor Integration API enabled and reachable from the add-on host.

## Add-on Delivery Package

The add-on is delivered as an MSI installer that deploys the add-on Windows service together with a
browser-based configuration **Wizard**, which you use to connect the add-on to Netwrix Auditor and to
your FlashArray syslog source.
