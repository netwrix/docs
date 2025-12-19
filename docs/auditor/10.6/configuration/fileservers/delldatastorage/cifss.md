---
title: "Configure Audit Settings for CIFS File Shares on Dell Data Storage"
description: "Configure Audit Settings for CIFS File Shares on Dell Data Storage"
sidebar_position: 40
---

# Configure Audit Settings for CIFS File Shares on Dell Data Storage

Dell VNX, VNXe, Celerra, and Unity NAS devices are collectively referred to as Dell Data Storage.

Auditor  can be configured to audit all access types, review the table below and select options that
you want to track:

| Option      |                                                                                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                                                                                                                    |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Changes     | Successful                                                                                                                                                                                                                                                                                          | Use this option to track changes to your data. Helps find out who made changes to your files, including their creation and deletion.                                                                                                                                                                                                           |
| Failed      | Use this option to detect suspicious activity on your file server. Helps identify potential intruders who tried to modify or delete files, etc., but failed to do it.                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                |
| Read access | Successful                                                                                                                                                                                                                                                                                          | Use this option to supervise access to files containing confidential data intended for privileged users. Helps identify who accessed important files besides your trusted users. Enabling this option on public shares will result in high number of events generated on your file server and the amount of data written to the Audit Archive. |
| Failed      | Use this option to track suspicious activity. Helps find out who was trying to access your private data without proper justification. Enabling this option on public shares will result in high number of events generated on your file server and the amount of data written to the Audit Archive. |                                                                                                                                                                                                                                                                                                                                                |

Actions reported by Auditor vary depending on the file server type and the audited object (file,
folder, or share). The changes include creation, modification, deletion, moving, renaming, and
copying. See the
[Dell Data Storage](/docs/auditor/10.6/configuration/fileservers/delldatastorage/overview.md)
topic for additional information.

## Configure Audit Settings for the CIFS File Shares Pre-Windows Server 2012

Perform the following steps:

**Step 1 –** Navigate to the target file share, right-click it and select **Properties**.

**Step 2 –** In the **`<Share_Name>` Properties** dialog, select the **Security** tab and click
**Advanced**.

**Step 3 –** In the **Advanced Security Settings for `<Share_Name>`** dialog, navigate to the
**Auditing** tab, click Edit.

**Step 4 –** In a separate **Advanced Security Settings for `<Share_Name>`** dialog, click Add to
add a principal. You can select **Everyone** (or another user-defined group containing users that
are granted special permissions) and click **Edit**.

**Step 5 –** You can specify any other user group, but in this case Netwrix Auditor will send emails
with errors on incorrect audit configuration. This will not affect the reports or data searches
performed in the Auditor client and the product will only audit user accounts that belong to the
selected group.

**Step 6 –** Apply settings to your Auditing Entries depending on the access types that you want to
audit. If you want to audit all access types (successful reads and changes as well as failed read
and change attempts), you need to add separate Auditing Entries for each file share. Otherwise,
reports will contain limited data and warning messages. Review the following for additional
information:

- Successful reads
- Successful changes
- Failed read attempts
- Failed change attempts

| Auditing Entry                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Successful reads**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| The Auditing Entry below shows Advanced Permissions for auditing successful reads only: - Apply onto—Select _"Files only"_. - Check _"Successful"_ and _"Failed"_ next to List folder / read data. - Make sure that the **Apply these auditing entries to objects and/or containers within this container only** checkbox is cleared.                                                                                                                                                                                 |
| **Successful changes**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| The Auditing Entry below shows Advanced Permissions for auditing successful changes only: - Apply onto—Select _"This folder, subfolders and files"_. - Check _"Successful"_ next to the following permissions: - Create files / write data - Create folders / append data - Write extended attributes - Delete subfolders and files - Delete - Change permissions - Take ownership - Make sure that the **Apply these auditing entries to objects and/or containers within this container only** checkbox is cleared. |
| **Failed read attempts**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| The Auditing Entry below shows Advanced Permissions for auditing failed read attempts only: - Apply onto—Select _"This folder, subfolders and files"_. - Check _"Failed"_ next to List folder / read data. - Make sure that the **Apply these auditing entries to objects and/or containers within this container only** checkbox is cleared.                                                                                                                                                                         |
| **Failed change attempts**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| The Auditing Entry below shows Advanced Permissions for auditing failed change attempts only: - Apply onto—Select _"This folder, subfolders and files"_. - Check _"Failed"_ next to the following permissions: - Create files / write data - Create folders / append data - Write extended attributes - Delete subfolders and files - Delete - Change permissions - Take ownership - Make sure that the **Apply these auditing entries to objects and/or containers within this container only** checkbox is cleared. |

## Configure Audit Settings for the CIFS File Shares Windows Server 2012 and Above

Follow the steps to configure audit settings.

**Step 7 –** Navigate to the target file share, right-click it and select **Properties**.

**Step 8 –** In the **`<Share_Name>` Properties** dialog, select the **Security** tab and click
**Advanced**.

**Step 9 –** In the **Advanced Security Settings for `<Share_Name>`** dialog, navigate to the
**Auditing** tab.

![auditing_entries_netapp_2016](/images/auditor/10.6/configuration/fileservers/netappcmode/auditing_entries_netapp_2016.webp)

**Step 10 –** Click Add to add a new principal. You can select Everyone (or another user-defined
group containing users that are granted special permissions) and click Edit.

**Step 11 –** In the Auditing Entry for `<Folder_Name>` dialog, click the Select a principal link
and specify Everyone.

**Step 12 –** You can specify any other user group, but in this case Netwrix Auditor will send
emails with warnings on incorrect audit configuration. The product will audit only user accounts
that belong to the selected group.

**Step 13 –** Apply settings to your Auditing Entries depending on the access types that you want to
audit. If you want to audit all access types (successful reads, modification as well as failed read
and modification attempts), you need to add separate Auditing Entries for each file share.
Otherwise, reports will contain limited data and warning messages. Review the following for
additional information:

- Successful reads
- Successful changes
- Failed read attempts
- Failed change attempts

| Auditing Entry                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ------------------------ | -------------------- | ----------------------------- | --- | --- | --- | --- | --- | --- | ---------- | --- | --- | --- | --- | ---------- | --------------------------------- | --------------------------------- | --------------------------------- | --- | ---- | --- | --- | --- | --- | ------- | ------- | ---- | ---- | --- | -------------------- | --- | --- | --- | --- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | --- |
| **Successful reads**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |                  |
| The Auditing Entry below shows Advanced Permissions for auditing successful reads only: ![manualconfig_fileserver_auditingentry_1_2016](/images/auditor/10.6/configuration/fileservers/netappcmode/manualconfig_fileserver_auditingentry_1_2016.webp) - Type—Set to _"Success"_. - Applies to—Set to _"Files only"_. - Advanced permissions—Select List folder / read data. - Make sure that the Only apply these auditing settings to objects and/or containers within this container checkbox is cleared.                                                                                                                                                                                      |                  |
| **Successful changes**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                  |
| The Auditing Entry below shows Advanced Permissions for auditing successful changes only: ![manualconfig_fileserver_emc_auditingentry](/images/auditor/10.6/configuration/fileservers/delldatastorage/manualconfig_fileserver_emc_auditingentry.webp) - Type—Set to _"Success"_. - Applies to—Set to _"This folder, subfolders and files"_. - Advanced permissions: - Create files / write data - Create folders / append data - Write attributes - Write extended attributes - Delete subfolders and files - Delete - Change permissions - Take ownership - Make sure that the Only apply these auditing settings to objects and/or containers within this container checkbox is cleared.       |                  |
| **Failed read attempts**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                  |
| The Auditing Entry below shows Advanced Permissions for auditing failed read attempts: ![manualconfig_fileserver_auditingentry_3_2016](/images/auditor/10.6/configuration/fileservers/netappcmode/manualconfig_fileserver_auditingentry_3_2016.webp) - Type—Set to _"Fail"_. - Applies to—Set to _"This folder, subfolders and files"_. - Advanced permissions—Select List folder / read data. - Make sure that the Only apply these auditing settings to objects and/or containers within this container checkbox is cleared.                                                                                                                                                                   |                  |
| **Failed change attempts**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |                  |
| The Auditing Entry below shows Advanced Permissions for auditing failed change attempts: ![manualconfig_fileserver_emc_auditingentry_fail](/images/auditor/10.6/configuration/fileservers/delldatastorage/manualconfig_fileserver_emc_auditingentry_fail.webp) - Type—Set to _"Fail"_. - Applies to—Set to _"This folder, subfolders and files"_. - Advanced permissions: - Create files / write data - Create folders / append data - Write attributes - Write extended attributes - Delete subfolders and files - Delete - Change permissions - Take ownership - Make sure that the Only apply these auditing settings to objects and/or containers within this container checkbox is cleared. | Successful reads | Successful modifications | Failed read attempts | Failed modifications attempts |     | --- | --- | --- | --- |     | Applies to |     |     |     |     | Files only | This folder, subfolders and files | This folder, subfolders and files | This folder, subfolders and files |     | Type |     |     |     |     | Success | Success | Fail | Fail |     | Advanced permissions |     |     |     |     | - List Folder / Read Data | - Create Files / Write Data - Create Folders / Append Data - Write Attributes - Write Extended Attributes - Delete Subfolders and Files - Delete - Change Permissions - Take Ownership | - List Folder / Read Data | - Create Files / Write Data - Create Folders / Append Data - Write Attributes - Write Extended Attributes - Delete Subfolders and Files - Delete - Change Permissions - Take Ownership |     |     |
