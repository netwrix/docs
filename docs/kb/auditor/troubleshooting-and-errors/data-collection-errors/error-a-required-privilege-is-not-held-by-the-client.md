---
description: >-
  Describes the Event ID 2009 "A required privilege is not held by the client"
  error in the Netwrix Auditor System Health Log and steps to resolve it when
  monitoring domain controllers.
keywords:
  - Event ID 2009
  - A required privilege is not held by the client
  - event log
  - domain controller
  - Netwrix Auditor
  - permissions
  - collector Registry data provider
  - monitoring plan
  - data collecting account
products:
  - auditor
sidebar_label: 'Error: A Required Privilege is Not Held by the Cli'
tags: []
title: 'Error: A Required Privilege is Not Held by the Client'
knowledge_article_id: kA0Qk0000000PjBKAU
---

# Error: A Required Privilege is Not Held by the Client

## Symptoms

1. The **Netwrix Auditor System Health Log** contains the following error:

```
 
    Source:Windows Server Audit Service
    Event ID:2009
    The following error has occurred while processing %affected_domain_controller%:
    The collector Registry data provider failed while gathering data on the server %server_name% due to the following error: A required privilege is not held by the client.
```

2. Netwrix Auditor is installed in a child domain and the report contains the following error for the root domain controllers:

```
 
    Failed to process DC: %affected_domain_controller%:
    Failed to open the event log. Error details: A required privilege is not held by the client.
```

## Cause

- The error occurs due to insufficient permissions for the account specified in the monitoring plan settings or misconfiguration of the target source itself.

## Resolutions

Check the following (target system configuration and that the account used for the data collection meet the requirements):

- Data Source Configuration — v10.6
- Administration — Monitoring Plans — Data Collecting Account — v10.6
