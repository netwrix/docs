---
description: >-
  Explains why Netwrix Auditor Event Log Manager (ELM) reports "Failed to copy
  remote distributed modules" when the same server is audited twice and provides
  options to resolve duplicate audit logs.
keywords:
  - Netwrix Auditor
  - Event Log Manager
  - ELM
  - failed to copy remote distributed modules
  - duplicate logs
  - OU
  - IP range
  - monitoring
products:
  - auditor
sidebar_label: 'Error: Failed to Copy Remote Distributed Modules'
tags: []
title: 'Error: Failed to Copy Remote Distributed Modules'
knowledge_article_id: kA0Qk0000001OQ5KAM
---

# Error: Failed to Copy Remote Distributed Modules

## Symptoms

Both of the following symptoms are present in your Netwrix Auditor Event Log Manager (ELM) environment:

- The **Health Log** prompts the following error message:

```registry
Failed to copy remote distributed modules.  
Error details: The process cannot access the file because it is being used by another process.
```

- ELM is set to audit both a domain OU and the servers within that OU by IP address.

## Cause

ELM audits the same server twice. This causes duplicates of the audit logs in the Netwrix Auditor ELM monitoring plan.

## Resolution

Refer to one of the following options to resolve the issue:

- Review the list of monitored computers. Remove the IP ranges and only audit OUs.

- Review the list of monitored computers. Remove the OU and only audit target IP address ranges.
