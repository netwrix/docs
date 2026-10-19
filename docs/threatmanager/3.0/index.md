---
title: "Netwrix Threat Manager v3.0 Documentation"
description: "Netwrix Threat Manager v3.0"
sidebar_position: 1
---

# Netwrix Threat Manager v3.0 Documentation

Threat Manager detects and responds to abnormal behavior and advanced attacks against Active
Directory and File Systems with unprecedented accuracy and speed. Threat Manager provides
programmatic and automated response options when threats are identified. In addition to an extensive
catalog of preconfigured response actions, Threat Manager can be configured to integrate with you
own business processes using integrated PowerShell or webhook facilities.

Threat Manager can also deliver threat data to administrators in their preferred applications,
including Microsoft Teams, Slack, ServiceNow, and a wide variety of SIEM platforms.

## Architecture

The following diagram is a visual representation of Threat Manager architecture. It maps out the
physical implementation of Threat Manager components.

![Netwrix Threat Manager Architecture diagram](/images/threatmanager/3.0/tmarch.webp)

## Administration

The volume of file access events and Active Directory events occurring within an environment on any given day is too large for organizations to evaluate manually. Threat Manager provides built-in threat analytics to highlight the most unusual behaviors that occur within an organization each day. Threat Manager also provides a method to look deeper into activity data using a series of customizable filters to discover threats unique to their organization.

## Supported Platforms

Supported platforms include the Active Directory and File system platforms supported for monitoring
by either Netwrix Threat Prevention or Netwrix Activity Monitor. See the following product
documentation for additional information:

- [Netwrix Threat Prevention Documentation](https://helpcenter.netwrix.com/category/threatprevention)
- [Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)

## Threat Manager Threats

Threat Manager monitors the following threats. See each section for information on monitored threat
types.

- [Active Directory Threats](/docs/threatmanager/3.0/threats/activedirectory.md)
- [Entra ID Threats](/docs/threatmanager/3.0/threats/entraid.md)
- [File System Threats](/docs/threatmanager/3.0/threats/filesystem.md)
- [General Threats](/docs/threatmanager/3.0/threats/general.md)
