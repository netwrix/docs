---
description: >-
  If SharePoint application pools stop after installing or uninstalling the
  Netwrix Auditor Core Service for SharePoint, follow the steps below to restart
  them using IIS Manager. This article explains the scenario and provides the
  exact steps to start the pools.
keywords:
  - SharePoint
  - application pools
  - IIS
  - Netwrix Auditor
  - Timeout Expired
  - installation
  - reinstallation
  - core service
  - start application pools
products:
  - auditor
sidebar_label: The SharePoint application pools are stopped after
tags: []
title: "The SharePoint application pools are stopped after the Netwrix Auditor Agent for SharePoint installation/uninstallation."
knowledge_article_id: kA00g000000H9ZnCAK
---

# The SharePoint application pools are stopped after the Netwrix Auditor Agent for SharePoint installation/uninstallation.

When trying to deploy Netwrix Auditor Core Service for SharePoint on large farms with more than 10 application pools, you may get the "Timeout Expired" error.

After successful re-installation of the core service, the SharePoint application pools may appear stopped.

To start your SharePoint application pools, perform the following steps:

1. On your SharePoint servers, navigate to **Start → Control Panel → System and Security → Administrative Tools**.
2. Launch **Internet Information Services (IIS) Manager**.
3. In **Internet Information Services (IIS) Manager**, expand your server and navigate to the **Application Pools** node.
4. Select your SharePoint application pools and click **Start**.
