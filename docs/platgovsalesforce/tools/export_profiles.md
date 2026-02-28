---
title: "Export Profiles and Permission Sets"
description: "Export Profiles and Permission Sets"
sidebar_position: 40
---

# Export Profiles and Permission Sets

Administrators can use this tool to export all user permissions into a single view for easy review
and management. The export is done in the background to avoid timing out or exceeding the Salesforce
Governor Limits. You will receive an email with a link to the
[Export Object Attachment](/docs/platgovsalesforce/tools/export_object_attachment_records.md) record, where you can download your
file.

Open **Netwrix Dashboard** > **Tools** > **Export Objects**.
Open the **Profiles & Permission Sets** tab.

![export_profile_ui](/images/platgovsalesforce/tools/export_profile_ui.webp)

**Profiles**

Search for an Profile by entering all or part of its name in **Search Profile**.

Select one or more profiles from the Available list and use the arrow buttons to move them to Selected.
To remove profiles, select them in the Selected list and use the left arrow to move them back to Available.

![export_object_profiles](/images/platgovsalesforce/tools/export_profile_sel_profile.webp)

**Permission Sets**

Search for a Permission Set by entering all or part of its name in **Search PermissionSet**.

Select one or more permission sets from the Available list and use the arrow buttons to move them to Selected.
To remove permission sets, select them in the Selected list and use the left arrow to move them back to Available.

![export_object_permissions](/images/platgovsalesforce/tools/export_profile_sel_ps.webp)

**Download XLS**

Click **Download XLS** to export your selections. An email is sent with a link to the file
_ProfilesExport.xls_.

**Download Files**

Click **Download Files** to see a list of generated files. The file does not appear in the list
until it is complete.

![Download files](/images/platgovsalesforce/tools/export_profiles_download.webp)

Click on the export name. The Export Attachments tab is opened, showing the attachment detail for
your file. Click **View file** to download it to your Downloads folder.

### ProfilesExport.xls File

When you open an exported file, this message may be displayed, as the exported _ProfilesExport.xls_
file is in XML instead of the Excel format. Click **Yes** to load the file.

![Excel error message - Click Yes to continue.](/images/platgovsalesforce/tools/export_excel_error_msg.webp)

The _ProfilesExport.xls_ file contains a **Summary** tab and a separate tab for each selected
profile.

The **Summary** tab shows who created the export, the creation date and time, and the list of
selected profiles.

![export_profile_summary](/images/platgovsalesforce/tools/export_profile_summary.webp)

The **Profile** tabs contain all of the requested information for each profile.

![export_profile_profile](/images/platgovsalesforce/tools/export_profile_profile.webp)
