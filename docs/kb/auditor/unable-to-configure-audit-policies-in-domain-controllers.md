---
description: >-
  Describes the error "Event ID:1016" that appears when creating a monitoring
  plan for Domain Controllers and explains why it occurs and how to resolve it
  by configuring audit policies via Group Policy.
keywords:
  - audit policies
  - domain controller
  - Group Policy
  - Windows Server
  - Netwrix Auditor
  - Event ID 1016
  - monitoring plan
  - local policy
products:
  - auditor
sidebar_label: Unable to Configure Audit Policies in Domain Contr
tags: []
title: "Unable to Configure Audit Policies in Domain Controllers"
knowledge_article_id: kA04u0000011196CAA
---

# Unable to Configure Audit Policies in Domain Controllers

## Symptom

When trying to create a monitoring plan for Windows Servers explicitely for Domain Controllers, the following error appears:

```
Event ID:1016: Unable to configure the following audit policies on this computer because it is a domain controller.
```

## Cause

Netwrix Auditor configures target servers for auditing by applying local audit policies that can be overwritten by domain (group) policies. Domain Controllers do not have local policies that makes it difficult for the product to configure audit automatically.

## Resolution

Open the **Group Policies** snap-in on the target Domain Controller and configure audit policies.

For the full list of audit policies to be configured, refer to the following article: https://docs.netwrix.com/docs/auditor/10_8 Server Configuration — Configuration via Group Policy · v10.6)
