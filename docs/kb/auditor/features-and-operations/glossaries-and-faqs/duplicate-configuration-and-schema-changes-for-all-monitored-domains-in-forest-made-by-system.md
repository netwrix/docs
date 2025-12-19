---
description: >-
  Explains why configuration and schema changes in an Active Directory forest
  generate change reports for all monitored domains and why the WHO field may
  show System in some reports. Describes Active Directory replication behavior
  and how Netwrix Auditor collects change and security events.
keywords:
  - Active Directory
  - configuration
  - schema
  - replication
  - domain controllers
  - WHO
  - System
  - Netwrix Auditor
  - change reports
products:
  - auditor
sidebar_label: Duplicate Configuration and Schema Changes for All
tags: []
title: "Duplicate Configuration and Schema Changes for All Monitored Domains in Forest Made by System"
knowledge_article_id: kA00g000000H9dhCAC
---

# Duplicate Configuration and Schema Changes for All Monitored Domains in Forest
  Made by System

## Symptom

1. You have Netwrix Auditor set to monitor several domains in the same forest, for example one root and several child domains.
2. The configuration or schema has been changed for one of the child domains. Netwrix Auditor reported several types of configuration changes in separate change reports for each of the monitored domains.

   - Only one report indicates the specific `WHO` that changed the configuration, while other reports state **System** in the `WHO` field.

## Cause and Resolution

This behavior is expected due to the Active Directory architecture. Configuration and Schema partitions are shared between all domains in the forest. Changes made to these partitions in one domain are replicated to other domains.

Security log events that Netwrix Auditor uses to establish the `WHO` value are only generated in the domain where the changes were actually made. For all other domains the reports will show **System**.

Netwrix Auditor exclusively collects events from domain controllers in domains specified for data collection (in addition to domain controllers in the root domain) and ignores domain controllers in the domains that are not audited. Netwrix Auditor collects changes and security events separately and independently for each managed domain. In the example above, each domain had configuration changes due to replication, but only one had corresponding security events which Netwrix Auditor used to collect the `WHO` value.
