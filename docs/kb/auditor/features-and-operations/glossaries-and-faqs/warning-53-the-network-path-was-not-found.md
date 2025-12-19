---
description: >-
  Shows how to resolve the "(53) The network path was not found" warning from
  Netwrix Auditor by granting the local System account proper permissions or
  ensuring the scheduled task account has required rights.
keywords:
  - network path not found
  - 53
  - network traffic compression
  - SYSTEM account
  - shared folder permissions
  - Netwrix Auditor
  - scheduled task
products:
  - auditor
sidebar_label: 'Warning: "(53) The network path was not found"'
tags: []
title: 'Warning: "(53) The network path was not found"'
knowledge_article_id: kA00g000000H9XtCAK
---

# Warning: "(53) The network path was not found"

The audit report from Netwrix Auditor contains the following warning: "(53) The network path was not found. Path: `servershare`"

If you have the `Network traffic compression` option enabled, grant the local System account the appropriate permissions:

1. Select the required shared folder and right-click it.
2. In the pop-up menu, select **Properties** and open the **Security** tab.
3. On the **Security** tab, click the **Advanced** button.
4. In the **Advanced Security Settings for `<shared_folder_name>`** dialog, select the `SYSTEM` permission entry and click **Change Permissions**.
5. In the next dialog, select the `SYSTEM` permission entry and click **Edit**.
6. In the **Permission Entry for `<shared_folder_name>`** dialog, allow the following permissions:
   - `Traverse folder / execute file`
   - `Read attributes`
   - `Read extended attributes`
   - `Read permissions`

   In the **Advanced Security Settings for `<shared_folder_name>`** dialog, open the **Effective Permissions** tab and check all the permissions for the `SYSTEM` service account. Click **OK**.
7. In the **`<shared_folder_name>` Properties** dialog, open the **Sharing** tab and click **Share**.
8. In the **File Sharing** dialog, add the `SYSTEM` service account and select the `Read/Write` permission level for it.
9. To save the changes, click **Share** and then **Done**.

If you do not use the `Network traffic compression` option, make sure that the account configured to run the Netwrix Auditor scheduled task has the following rights and permissions on the monitored file server:

- The local administrator rights
- Read access to the monitored shared folder

If the steps provided do not resolve your issue, please [contact Netwrix Technical Support](https://www.netwrix.com/support_ticket.html).
