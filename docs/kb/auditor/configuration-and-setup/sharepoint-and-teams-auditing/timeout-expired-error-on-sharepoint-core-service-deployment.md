---
description: >-
  This article explains causes and resolutions for the `Timeout Expired` error
  that occurs when deploying Netwrix Auditor for SharePoint Core Service. It
  lists common causes and step-by-step actions to resolve the issue.
keywords:
  - Timeout Expired
  - SharePoint Core Service
  - Netwrix Auditor
  - SharePoint
  - deployment
  - SPAdminV4
  - timeout
  - software requirements
products:
  - auditor
sidebar_label: Timeout Expired Error on SharePoint Core Service D
tags: []
title: "Timeout Expired Error on SharePoint Core Service D"
knowledge_article_id: kA00g000000H9YfCAK
---

# Timeout Expired Error on SharePoint Core Service D

## Symptom

The `Timeout Expired` error is prompted during the deployment of **Netwrix Auditor for SharePoint Core Service**.

## Causes

1. One or several servers are unreachable.
2. The SharePoint Administration (`SPAdminV4`) service is not started in any of the servers.
3. Your SharePoint farm exceeds the recommended capacity limits.
4. The .NET Framework instance installed in the SharePoint Central Administration host of the audited SharePoint farm is outdated.

## Resolutions

1. Make sure the servers within your SharePoint farm are available.
2. Enable SharePoint Administration Service in your SharePoint farm servers − refer to the following article for additional information: Configuration − SharePoint · v10.6.
3. Review the boundaries and limits applicable to the SharePoint instance set up in your environment − learn more in [Software Boundaries and Limits for SharePoint Servers 2016 and 2019 ⸱ Microsoft 🤝](https://learn.microsoft.com/en-us/sharepoint/install/software-boundaries-limits-2019).
4. Refer to the following article to learn more about software requirements for SharePoint monitoring: Requirements − Software Requirements · v10.6.

For additional information on manual deployment of SharePoint Core Service, refer to the following article: Installation − Install for SharePoint Core Service · v10.6.

## Related articles

- Configuration − SharePoint · v10.6
- [Software Boundaries and Limits for SharePoint Servers 2016 and 2019 ⸱ Microsoft 🤝](https://learn.microsoft.com/en-us/sharepoint/install/software-boundaries-limits-2019)
- Requirements − Software Requirements · v10.6
- Installation − Install for SharePoint Core Service · v10.6
