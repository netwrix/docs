---
description: >-
  A monitoring plan shows the Take Action status and Netwrix Auditor logs
  EventID 2009 indicating the Compression Service could not be updated on the
  target server. This article explains causes and step-by-step resolutions,
  including manually installing the Compression Service MSI.
keywords:
  - compression service
  - Windows Server
  - monitoring plan
  - EventID 2009
  - Data Collecting Account
  - ports
  - Netwrix Auditor
  - Netwrix.WSA.CompressionService.Setup.msi
  - installation
  - Update
products:
  - auditor
visibility: public
sidebar_label: Unable to Update the Compression Service
tags: []
title: "Unable to Update the Compression Service"
knowledge_article_id: kA04u000001114BCAQ
---

# Unable to Update the Compression Service

## Symptom

A monitoring plan in Netwrix Auditor has the **Take Action** status, and the Netwrix Auditor Health Log contains `EventID 2009`:

```
The Compression Service has encountered an internal error:
Unable to update the Compression Service on the following server (%affected_server_name%).
```

## Causes

One of the following causes may lead to this error:

- The Windows Server Compression Service was not installed on the target server.
- The Windows Server Compression Service cannot be updated on the target server.

## Resolutions

- Verify the rights and permissions for the Data Collecting Account in the affected Windows Server monitoring plan. For additional information on the rights and permissions of Data Collecting Accounts, refer to the following article: https://docs.netwrix.com/docs/auditor/10_8 Server – Permissions for Windows Server Auditing ⸱ v10.6).

- Verify that the ports required to audit the target server are open. For additional information on required ports and protocols, refer to the following article: https://docs.netwrix.com/docs/auditor/10_8 Server – Windows Server Ports ⸱ v10.6).

- Install the Windows Server Compression Service manually on the affected server. Refer to the following steps:

  1. On the Auditor server, navigate to `C:\Program Files (x86)\Netwrix Auditor\Windows Server Auditing`.
  2. Locate the `Netwrix.WSA.CompressionService.Setup.msi` installation file.
  3. Copy the file to the affected target server (the server referenced in the error message).
  4. Run the installation on the target server and follow the installation prompts.
  5. When done, click the **Update** button beside the required monitoring plan.

## Related Articles

- https://docs.netwrix.com/docs/auditor/10_8 Server – Permissions for Windows Server Auditing ⸱ v10.6)  
- https://docs.netwrix.com/docs/auditor/10_8 Server – Windows Server Ports ⸱ v10.6)
