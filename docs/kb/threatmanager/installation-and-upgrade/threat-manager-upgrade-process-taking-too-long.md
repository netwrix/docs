---
description: "Explains why the Netwrix Threat Manager upgrade may take a long time and whether you should interrupt it."
keywords:
- threat manager upgrade
- upgrade stuck
- postgresql
- database conversion
- installation v2.8
- downtime
- upgrade time
- troubleshooting
products:
- threat-manager
title: 'Threat Manager Upgrade Process Taking Too Long'
knowledge_article_id: kA04u000000wnkiCAA
---

# Threat Manager Upgrade Process Taking Too Long

## Question

The Netwrix Threat Manager upgrade process is stuck. Is it safe to interrupt and run it again?

## Answer

Depending on the size and version of the PostgreSQL database, the upgrade process can take longer because it may include the database conversion process. The database size and version directly affect the upgrade time and can result in an upgrade that takes up to 24 hours. This behavior is expected — allow the upgrade process to finish.

> **IMPORTANT:** You can skip the database conversion to avoid the downtime − you can deploy a new Netwrix Threat Manager server with a new PostgreSQL database. See the following article for additional information: Installation ⸱ v2.8.

## Related articles

Installation ⸱ v2.8