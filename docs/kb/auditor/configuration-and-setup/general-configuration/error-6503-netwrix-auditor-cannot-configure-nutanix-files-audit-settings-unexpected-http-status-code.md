---
description: >-
  After creating a Nutanix Files monitoring plan, Netwrix Auditor may report
  Event ID 6503 indicating an unexpected HTTP status because the Netwrix server
  is already registered as a Nutanix partner server. This article describes
  causes and manual removal steps using the Nutanix File Server REST API
  Explorer.
keywords:
  - Nutanix Files
  - Event ID 6503
  - partner server
  - notification policy
  - REST API Explorer
  - UUID
  - Netwrix Auditor
  - SMB port
products:
  - auditor
sidebar_label: 'Error 6503: Netwrix Auditor cannot configure Nutan'
tags: []
title: "Error 6503: Netwrix Auditor cannot configure Nutanix files audit settings: Unexpected HTTP status code (Host name or IP already present)"
knowledge_article_id: kA00g000000PbcjCAC
---

# Error 6503: Netwrix Auditor cannot configure Nutanix files audit settings: Unexpected HTTP status code (Host name or IP already present)

## Symptoms
After you created a Nutanix Files monitoring plan, you receive the following error:

Event ID 6503 Netwrix Auditor cannot configure Nutanix Files audit settings:  Unexpected HTTP status code (Host name or ip already present.)

## Cause
The likely cause: you used to have the Netwrix Auditor add-on for Nutanix Files installed on the Netwrix server and the Netwrix server had already been configured as a partner server for Nutanix Files.

## Resolution
To address the issue, you can either:

- Specify another port for incoming connections in the item (`Nutanix SMB shares`).
- If the add-on's installation folder has not been removed, unregister the partner server as described in item 5.7 of the Nutanix Quick-Start Guide: https://www.netwrix.com/download/QuickStart/Netwrix_Auditor_Add-on_for_Nutanix_Files_Quick_Start_Guide.pdf
- Remove the partner server and notification policy from Nutanix manually.

### Remove the partner server and notification policy manually
1. Open the File Server REST API Explorer REST API: `https://<fileserver_ip>:9440/api/nutanix/v3/api_explorer/index.html`
2. Find the **partner server** node and click **Show/Hide**.
3. Expand the **POST /partner_servers/list** node, specify `{}` in the **get_entities_request** field and click **Try it out** to get the list of partner servers.
4. Find the IP address of the Netwrix server and its corresponding UUID.
5. Expand the **DELETE /partner_servers/** node, insert the UUID and click **Try it out**.
6. You will receive an error: "Delete/Modify notification policy `<UUID>` before deleting `<UUID>` partner server". Note the UUID of the notification policy.
7. Scroll up, find the **notification_policy** node and click **Show/Hide**.
8. Expand the **DELETE /notification_policies/** node, insert the notification's policy UUID and click **Try it out** to remove the notification policy.
9. Scroll down back to the **DELETE /partner_servers/** node, the UUID of the partner server should still be there, click **Try it out** to remove the partner server.
