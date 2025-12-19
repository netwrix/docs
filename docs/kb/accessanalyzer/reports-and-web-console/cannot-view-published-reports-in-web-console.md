---
description: >-
  If you cannot access the Published Reports page in the Web Console, ensure the
  account running the Netwrix Access Analyzer Web Server service has permissions
  to the Access Analyzer database. This article explains how to verify and
  update the service logon account.
keywords:
  - published reports
  - web console
  - Netwrix Access Analyzer
  - service account
  - database access
  - Storage settings
  - Scheduled Task Profile
  - Access Information Center
products:
  - access-analyzer
sidebar_label: Cannot View Published Reports in Web Console
tags:
  - reports-and-web-console
title: "Cannot View Published Reports in Web Console"
knowledge_article_id: kA0Qk0000000Qs9KAE
---

# Cannot View Published Reports in Web Console

## Symptom

You cannot connect to the **Published Reports** page in the Web Console of Netwrix Access Analyzer.

## Cause

The account used to run the `Netwrix Access Analyzer Web Server` service does not have access to the Access Analyzer database.

## Resolution

> **NOTE:** If the SQL authentication method is implemented in your Access Analyzer instance to connect to the database, the **Local System** account can be used to run the `Netwrix Access Analyzer Web Server` service. To verify the authentication method, review the **Storage** settings node in Access Analyzer. Refer to the following article for additional information: https://docs.netwrix.com/docs/auditor/10_8 (Administration − Storage).

1. In the Access Analyzer server, open **Services**.
2. Locate the `Netwrix Access Analyzer Web Server` service, right-click it, and select **Properties**.
3. In the **Log On** tab, specify the account with permissions to access the Access Analyzer database. Save the changes, then restart the service.

> **TIP:** You can specify any account with permissions to access the Access Analyzer database. It is recommended to use either the Scheduled Task Profile account or the database service account used in Netwrix Access Information Center. Refer to the following articles for additional information: https://docs.netwrix.com/docs/auditor/10_8 Settings − Schedule) and https://docs.netwrix.com/docs/accessanalyzer/12_0 (Access Information Center − Database Page).

## Related Articles

- https://docs.netwrix.com/docs/auditor/10_8 (Administration − Storage)
- https://docs.netwrix.com/docs/auditor/10_8 Settings − Schedule)
- https://docs.netwrix.com/docs/accessanalyzer/12_0 (Access Information Center − Database Page)
