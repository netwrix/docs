---
description: >-
  Answers common questions about upgrading and migrating Netwrix Access
  Analyzer, including in-place OS upgrades, migration order, and SQL Server
  recovery mode recommendations.
keywords:
  - access analyzer
  - upgrade
  - migration
  - SQL Server
  - recovery mode
  - in-place upgrade
  - server migration
  - database recovery mode
  - Netwrix
products:
  - access-analyzer
sidebar_label: Access Analyzer Upgrade FAQ
tags:
  - installation-and-upgrades
title: "Access Analyzer Upgrade FAQ"
knowledge_article_id: kA0Qk0000001hHRKAY
---

# Access Analyzer Upgrade FAQ

## Questions

1. Can I perform an in-place operating system upgrade on the Netwrix Access Analyzer host server?
2. When migrating Access Analyzer to a new server, should I upgrade Access Analyzer before or after migrating?
3. Should the Access Analyzer database be in Simple Recovery Mode or Full Recovery Mode?

## Answers

1. We do not recommend performing an in-place upgrade for the Netwrix Application server's Operation System. It has been known to cause issues. We suggest spinning up a new server with the new OS and migrating Netwrix to the new server.
2. We recommend migrating Access Analyzer to the new server first. Then, after confirming everything is working as expected on the new server, upgrade to the latest version.
3. You should keep all of Netwrix's databases on simple recovery mode. For mor information, please see the following article: SQL Server Requirements.

## Related Articles

- SQL Server Requirements
