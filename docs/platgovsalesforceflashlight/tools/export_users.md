---
title: "Export Users"
description: "Export Users"
sidebar_position: 60
---

# Export Users

Exports user information to an XLS file.

Administrators can use this tool to export all user information into a single view for easy review
and management. The export is done in the background to avoid timing out or exceeding the Salesforce
Governor Limits. You receive an email with a link to the
[Export Object Attachment](/docs/platgovsalesforceflashlight/tools/export_object_attachment_records.md) record, where you can download your
file.

1. Open **Flashlight** > **Tools** > **Export Objects**
2. Open the **Users**
   tab.![export_users_800x397](/images/platgovsalesforceflashlight/tools/export_users_800x397.webp)
3. Scroll through the **Select User to be Exported** or enter all of part .of a user name in the
   **Filter** field.
4. Select one or more objects in the scroll box. Use **Shift** or **Ctrl** to select multiple
   objects.
5. Click the right arrow to move the items to the **Selected Users** list. To remove an item from
   the **Selected Users** list, select it and click the left arrow.
6. Select the **Settings to be exported**.
   ![export_users_settings](/images/platgovsalesforce/tools/export_users_settings.webp)
7. Click **Download XLS**. The file _UserExport.xls_ is created.

#### UserExport.xls File

When you open an exported file, this message may be displayed, as the exported _UserExport.xls_ file
is in XML instead of the Excel format. Click **Yes** to load the file.

![Excel error message - Click Yes to continue.](/images/platgovsalesforce/tools/export_excel_error_msg.webp)

The _UserExport.xls_ file contains a **Summary** tab and a separate tab for each selected user.

The **Summary** tab shows who created the export, the creation date and time, and the list of
selected
users.![export_users_summary_800x252](/images/platgovsalesforceflashlight/tools/export_users_summary_800x252.webp)

The **User** tabs contain all of the requested information for each exported
user.![export_users_user_800x675](/images/platgovsalesforceflashlight/tools/export_users_user_800x675.webp)
