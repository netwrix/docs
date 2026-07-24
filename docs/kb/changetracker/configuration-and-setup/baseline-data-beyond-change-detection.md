---
description: >-
  Explains additional uses for baseline data in Netwrix Change Tracker beyond
  individual file change detection, including retaining full configuration
  records for network devices and firewalls, and points to the Baseline Center
  documentation for building and running a Baseline Policy.
keywords:
  - baseline data
  - Netwrix Change Tracker
  - Baseline Policy
  - Baseline Center
  - network devices
  - firewall configuration
  - configuration record
  - build standard
products:
  - changetracker
knowledge_article_id: kA04u0000000JUrCAM
sidebar_label: Using Baseline Data Beyond Change Detection
tags: [kb, configuration-and-setup]
title: Using Baseline Data Beyond Change Detection
---

# Using Baseline Data Beyond Change Detection

## Overview

This article explains additional uses for baseline data beyond change detection and points to the Baseline Center documentation for building and running a Baseline Policy.

Netwrix Change Tracker uses baseline data to detect changes, but the same data has uses beyond change detection for an individual host. Enabling **Send Baseline Events** on a tracker gives you a full, retained record of a device's configuration that you can use to:

- Retain a record of a device's configuration, such as a router configuration, a firewall rule set, or a full software inventory.
- Compare one host's build standard against another. Built-in Center for Internet Security (CIS) Benchmark compliance reports assess a host's configuration against a hardened build standard, but other configuration attributes may also need comparison, such as:
  - Installed software and updates
  - Open ports
  - Folder and file system structure
  - Specific file versions
  - Service and process lists
- Search a device's captured configuration for specific items, such as the hash value of a known-bad file version.

> **NOTE:** For instructions on enabling the **Send Baseline Events** option and reviewing individual baseline events for file- and folder-based trackers, refer to [Enabling Baseline Events on Monitored Folders](../audit-and-logging/enable-baseline-events-on-monitored-folders.md).

### Baseline Data for Non-File Trackers

For a tracker that captures text output rather than individual files, such as the Network Ports tracker, the baseline data is the tracker's full scan output at the time of the baseline. For a firewall or router tracked through a proxied device, the baseline captures the full configuration record, and later Device Events capture the interim changes made to that configuration. You can use a device configured with one of these trackers as the source device when building a Baseline Policy, the same as any other tracked device.

## Instructions

Build and run a Baseline Policy using the Baseline Policy Wizard, described in [Baseline Tab](pathname:///docs/changetracker/8_2/baseline/baselintab). The wizard walks through selecting a source device, harvesting configuration items into baseline rules, setting up member device groups, and scheduling the Baseline Report. For reviewing report results and promoting configuration changes into the baseline, refer to [Baseline Overview Tab](pathname:///docs/changetracker/8_2/baseline/overviewtab) and [Manage Tab](pathname:///docs/changetracker/8_2/baseline/managetab).

## Related Links

- [Enabling Baseline Events on Monitored Folders](../audit-and-logging/enable-baseline-events-on-monitored-folders.md)
- [Baseline Tab](pathname:///docs/changetracker/8_2/baseline/baselintab)
- [Baseline Overview Tab](pathname:///docs/changetracker/8_2/baseline/overviewtab)
- [Manage Tab](pathname:///docs/changetracker/8_2/baseline/managetab)
