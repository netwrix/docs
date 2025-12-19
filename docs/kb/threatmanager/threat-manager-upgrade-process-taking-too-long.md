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

The Netwrix Threat Manager upgrade process is stuck, should I interrupt it and run it again?

## Answer

Depending on the size and version of the PostgreSQL database, the upgrade process might take longer since it may include the database conversion process. The database size and version directly affect the upgrade time and may lead to the 24-hour long upgrade process. This behavior is expected − allow the upgrade process to finish.

> **IMPORTANT:** It is possible to skip the database conversion to avoid the downtime − you can deploy a new Netwrix Threat Manager server with a new PostgreSQL database. Refer to the following article for additional information: Installation ⸱ v2.8.

## Related articles

Installation ⸱ v2.8