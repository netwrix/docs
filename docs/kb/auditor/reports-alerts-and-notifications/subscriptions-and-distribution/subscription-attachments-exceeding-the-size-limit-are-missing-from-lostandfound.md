---
description: >-
  Explains why subscription attachments larger than 50MB may not appear in the
  LostAndFound folder and provides steps to resolve the issue.
keywords:
  - subscription
  - attachments
  - LostAndFound
  - Netwrix Auditor
  - 50MB
  - share permissions
  - working folder
  - mail server
products:
  - auditor
sidebar_label: 'Subscription Attachments Exceeding the Size Limit '
tags: []
title: "Subscription Attachments Exceeding the Size Limit Are Missing from LostAndFound"
knowledge_article_id: kA04u00000111CUCAY
---

# Subscription Attachments Exceeding the Size Limit Are Missing from LostAndFound

## Symptom

Subscription attachments exceeding the 50MB size are missing from your `\<NAservername>\Netwrix_Auditor_Subscriptions$\LostAndFound` folder.

## Causes

- Misconfigured permissions for the service account.
- Misconfigured share path.
- Maximum attachment size limitation defined in your mail server conflicts with the maximum attachment size defined by Netwrix Auditor.

## Resolutions

- Review the share access permissions for the data collecting account.

> **NOTE:** If you have multiple data collecting accounts set up, review the affected subscription to establish the corresponding monitoring plan and data collecting account.

1. Open the **Computer Management** tool.
2. In the left pane, expand the **System Tools** tree. Expand the **Shared Folders** folder, and click **Shares**.
3. Select the **Netwrix_Auditor_Subscriptions$** share, right-click it, and select **Properties**.
4. In the **Share Permissions** tab, review the users added. Make sure the serivce account for the affected monitoring plan is included with **Full Control** permissions.
5. Apply the changes, and close the window.

- Review the share folder path.

> **NOTE:** The location of your **Working Folder** can be established by following main Netwrix Auditor menu > **Health Status** > clicking **Open diagnostic logs folder** button under **Working Folder** tab > switching to the parent folder.

1. Open the **Computer Management** tool.
2. In the left pane, expand the **System Tools** tree. Expand the **Shared Folders** folder, and click **Shares**.
3. Select the **Netwrix_Auditor_Subscriptions$** share, right-click it, and select **Properties**.
4. In the **General** tab, review the **Folder path** field. It should point to `%Working Folder%\Data\Subscriptions`.
5. Apply the changes, and close the window.

- Review the maximum attachment size defined by your mail server. The maximum attachment size defined by Netwrix Auditor is 50MB. In case the maximum attachment size setting for your mail server is less than 50MB, your subscription reports may be rejected by the mail server with no reports saved to the share folder.

## Related articles

- Subscriptions — Create Subscriptions ⸱ v10.6
