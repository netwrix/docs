---
title: "REST API"
description: "REST API"
sidebar_position: 60
---

# REST API

## Overview

Netwrix Activity Monitor API gives you access to the most information and functionality available in
the console. You can manage agents, monitored hosts, AD monitoring.

The API Server feature, a component of the Activity Monitor Agent (Windows only), provides the
REST-style API. It comes preinstalled with the Agent and is disabled by default.

Like the console, a single API Server can manage many agents. A single API Server can manage the
whole organization. However, one capability — HTTPS access to the log files — requires running the
API Server on every Activity Monitor Agent.

## Schema

The 7.1 API model consists of the following resources:

**Agent**

- Represents an Activity Monitor Agent. Use the API to view existing agents and their statuses,
  register, modify, or remove agents. There is no way to install, upgrade, or uninstall agents in the
  6.0 API. You can list all the agents or the agents of a **Domain** (i.e. AD-monitoring agents on
  the domain controllers).

**Children: Host, Domain**

- Host – Represents a host or platform monitored by the product (Windows, NetApp, SharePoint, SQL
  Server, etc). It is a Monitored Host in the Console. You can list all the Hosts of the **Agent**,
  or just all the Hosts. The API provides access to the host's settings and status, and lets you
  create, modify, enable, disable, or delete existing hosts. Typical properties include
  a hostname, credentials to access API, connection settings. A **Host** has at least one
  **Output**.

**Children: Output**

- Domain – A Monitored Domain in the Console. The API provides summary information about each
  monitored domain.

**Children: Output, Agent**

- Output – A log file or Syslog or AMQP (DEFEND) destination for the activity data.

Each host has one or more outputs. Each output has its own filtering settings.

Like a host, a domain also has one or more outputs. These outputs are common for all
AD-monitoring agents of the domain. That is, each domain controller has the same log file settings,
syslog, and AMQP.

Typical properties of the Output include log file settings (path, retention, ...), syslog settings
(server, UDP/TCP, message template, ...), path filtering (include C:, exclude C:\temp), operations
(Write File, Create File, Delete File, Create Share, ...), account filtering (exclude
DOMAIN\service-account1), protocol (CIFS, NFS), etc.

**Children: File**

- File – Information about the actual .TSV, .JSON, and .ZIP files stored on the agent. You can
  download a file.
- Policy – Represents an Active Directory monitoring policy. Use the API to create new policies and
  to list, modify, and delete existing ones.

The API sends and receives data as JSON objects, or as JSON Merge Patch for PATCH requests. It
reports blank fields as `null` instead of omitting them. Dates are in UTC, in
`YYYY-MM-DDTHH:MM:SSZ` format.

See the following topics for additional information about REST API:

- [Security and Access Control](/docs/activitymonitor/7.1/restapi/security.md)
- [Resources](/docs/activitymonitor/7.1/restapi/resources.md)
