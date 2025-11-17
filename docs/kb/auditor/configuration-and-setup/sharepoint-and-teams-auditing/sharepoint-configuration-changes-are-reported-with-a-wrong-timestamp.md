---
description: >-
  Reports and Change Summaries for SharePoint configuration changes may display
  the time when the daily Change Summary was generated rather than the exact
  date and time the change occurred. This affects several SharePoint
  configuration change types such as farm topology, web applications, site
  collections, and customizations.
keywords:
  - SharePoint
  - timestamp
  - Change Summary
  - reports
  - configuration changes
  - daily summary
  - Netwrix Auditor
  - site collection
  - web application
products:
  - auditor
sidebar_label: SharePoint configuration changes are reported with
tags: []
title: "SharePoint configuration changes are reported with a wrong timestamp"
knowledge_article_id: kA00g000000H9dLCAS
---

# SharePoint configuration changes are reported with a wrong timestamp

The timestamp shown in the reports and Change Summaries for the SharePoint configuration changes may represent not the exact date and time when the change was made, but the time when the daily Change Summary was generated. The following configuration changes are affected:

- Farm physical topology: addition and removal of servers, changes to service status
- Web application creation or deletion, changes to key web application settings
- Changes to web application security policies: anonymous access policy, user policy, security policy levels
- Creation and deletion of site collections, changes to key site collection settings
- Customizations: addition/removal and deployment of SharePoint solutions; addition/removal and activation/deactivation of farm-wide features
