---
title: "Export Users"
description: "Export Users"
sidebar_position: 50
---

# Export Users

Exports user information to an XLS file.

Administrators can use this tool to export all user information into a single view for easy review
and management. The export is done in the background to avoid timing out or exceeding the Salesforce
Governor Limits. You receive an email with a link to the
[Export Object Attachment](/docs/platgovsalesforce/tools/export_object_attachment_records.md) record, where you can download your
file.

Open **Netwrix Dashboard** > **Tools** > **Export Objects**
Open the **Users** tab.

    ![export_users](/images/platgovsalesforce/tools/export_users.webp)

**Users**

Search for a user by entering all or part of the name in **Search Users**.

Select one or more users from the Available list and use the arrow buttons to move them to Selected.
To remove users, select them in the Selected list and use the left arrow to move them back to Available.

![export_users_selection](/images/platgovsalesforce/tools/export_users_selection.webp)


**Settings to be Exported**

Click the toggles to activate or inactivate the settings you want to export.

    ![export_users_settings](/images/platgovsalesforce/tools/export_users_settings.webp)

**Download XLS**

Click **Download XLS** to export your selections. An email is sent with a link to the file
_User_Export.xls_.

**Download Files**

Click **Download Files** to see a list of generated files. The file does not appear in the list
until it is complete.

![Download files](/images/platgovsalesforce/tools/export_users_download.webp)

Click on the export name. The Export Attachments tab is opened, showing the attachment detail for
your file. Click **View file** to download it to your Downloads folder.

#### UserExport.xls File

When you open an exported file, this message may be displayed, as the exported _UserExport.xls_ file
is in XML instead of the Excel format. Click **Yes** to load the file.

![Excel error message - Click Yes to continue.](/images/platgovsalesforce/tools/export_excel_error_msg.webp)

The _UserExport.xls_ file contains a **Summary** tab and a separate tab for each selected user.

The **Summary** tab shows who created the export, the creation date and time, and the list of
selected users.

![export_users_summary](/images/platgovsalesforce/tools/export_users_summary.webp)

The **User** tabs contain all of the requested information for each exported user.

![export_users_user](/images/platgovsalesforce/tools/export_users_user.webp)
