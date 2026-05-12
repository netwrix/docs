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
  - accessanalyzer
sidebar_label: Upgrade and Migration FAQ
tags:
  - kb
  - installation-and-upgrades
title: "Upgrade and Migration FAQ"
knowledge_article_id: kA0Qk0000001hHRKAY
---

# Upgrade and Migration FAQ

## Questions

1. Can I perform an in-place operating system upgrade on the Netwrix Access Analyzer host server?
2. When migrating Access Analyzer to a new server, should I upgrade Access Analyzer before or after migrating?
3. Should the Access Analyzer database be in Simple Recovery Mode or Full Recovery Mode?

## Answers

1. Netwrix does not recommend in-place Operating System upgrades for the Access Analyzer host server. In-place upgrades have caused issues. Instead, deploy a new server with the target OS and migrate Access Analyzer to it.
2. Netwrix recommends migrating Access Analyzer to the new server first. After confirming everything is working as expected on the new server, upgrade to the latest version.
3. Keep all Netwrix databases in Simple Recovery Mode. For more information, see the following article: SQL Server Requirements.

## Related Articles

- SQL Server Requirements
