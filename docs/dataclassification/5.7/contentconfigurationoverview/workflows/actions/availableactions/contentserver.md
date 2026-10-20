---
title: "Advanced Actions for Content Server"
description: "Advanced Actions for Content Server"
sidebar_position: 50
---

# Advanced Actions for Content Server

In addition to the **Email Alert**, **Migrate Document**, and additional classification actions, you can configure the system to update the document
property field (metadata) with the values you specify for documents stored on your Content Server.

To do this, configure **Update Field** as the automated action using the Advanced UI window:

1. In the administrative web console, navigate to Workflows and select the workflow to configure.
2. Click the workflow, then click Add next to Rule Actions.
3. In the Add Action dialog, from the Action Type list select **Update Field** in the **Content
   Server**.

**Then specify the following action parameters**

| Action parameter | Description                                                                                       | Comments                                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Field Name**   | Provide the internal name or ID of the document property field (metadata) you want to update. | This can be, for example, DocType, URL, Last modified date, etc.                                         |
| **Value**        | Select the source of the new field value.                                         | You can use a static or crawled value, similar to SharePoint (as described in the Update Field section). |

![action_advanced_cs_update_field_thumb_0_0](/images/dataclassification/5.7/admin/workflows/advancedwindow/action_advanced_cs_update_field_thumb_0_0.webp)
