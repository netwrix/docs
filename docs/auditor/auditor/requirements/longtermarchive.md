# File-Based Repository for Long-Term Archive

Long-Term Archive is a file-based repository for keeping activity records collected by Auditor.

## Location

Long-Term Archive can be located on the same computer with Auditor Server, or separately - in this case ensure that the Auditor Server can access the remote machine. By default, the Long-Term Archive (repository) and Auditor working folder are stored on the system drive. Default path to the Long-Term Archive is _%ProgramData%\NetwrixAuditor\Data_.

To reduce the impact on the system drive in large and extra-large environments, it is recommended to move Long-Term Archive to another disk. For that, you should estimate the required capacity using recommendations in the next section.

Then you should prepare the new folder for repository, target Netwrix Auditor at that folder, and, if necessary, move repository data from the old to the new location.

Follow the steps to modify Long-Term Archive location and other settings.

__Step 1 –__ In Auditor client, click Settings > Long-Term Archive; alternatively, if you are viewing the Long-Term Archive widget of the Health Status dashboard, click Open settings.

__Step 2 –__ Click Modify.

[![archive_modify_settings_thumb_0_0](/static/img/product_docs/auditor/auditor/requirements/archive_modify_settings_thumb_0_0.png)](/docs/product_docs/auditor/resources/images/auditor/deploymentplan/archive_modify_settings.png)

__Step 3 –__ Enter new path or browse for the required folder.

__Step 4 –__ Provide retention settings and access credentials.

__Step 5 –__ To move data from the old repository to the new location, take the steps described in the following Netwrix knowledge base article: [How to Move Long-Term Archive to a New Location](https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA00g000000H9SSCA0.html).

Auditor client will start writing data to the new location right after you complete data moving procedure.

## Retention

Default retention period for repository data is __120 months__. You can specify the value you need in the Long-Term Archive settings. When retention period is over, data will be deleted automatically.

If the retention period is set to __0__, the following logic will be applied:

- __Audit data for SQL Server, file servers, Windows Server:__ only data stored by the last __2__ data collection sessions will be preserved.
- __User activity data:__ only data stored by the last __7__ data collection sessions will be preserved.
- __Other data sources:__ only data stored by the last __4__ data collection sessions will be preserved.

## Capacity

To examine the repository capacity and daily growth, use the Long-Term Archive Capacity of the Health Status dashboard.

[![healthstatusdashboard_thumb_0_0](/static/img/product_docs/auditor/auditor/admin/healthstatus/dashboard/healthstatusdashboard_thumb_0_0.png)](/docs/product_docs/auditor/resources/images/auditor/health/healthstatusdashboard.png)

To estimate the amount of activity records collected and stored to the repository day by day, use the [Activity Records Statistics](/docs/product_docs/auditor/auditor/admin/healthstatus/dashboard/activityrecordstatistics.md) widget. Click View details to see how many activity records were produced by each data source, collected and saved to the Long-Term Archive and to the database.

Netwrix Auditor will inform you if you are running out of space on a system disk where the repository is stored by default — you will see this information in the Health Status dashboard, in the health summary email, and also in the events in the Netwrix Auditor health log.

When free disk space is less than __3 GB__, the Netwrix services responsible for audit data collection will be stopped.

## Configure Long-Term Archive Account

An account used to write data to the Long-term Archive and upload report subscriptions to shared folders. By default, the LocalSystem account is used for the archive stored locally and the computer account is used for archive stored on a file share.

If you want to store the Long-term Archive on a file share, you can specify custom account in Settings>__Long-Term Archive__ in Auditor.

Starting with version 9.96, you can use Group Managed Service Account (gMSA) as the account for accessing Long-term Archive.

The custom account must be granted the following rights and permissions:

- Advanced permissions on the folder where the Long-term Archive is stored:
  - List folder / read data
  - Read attributes
  - Read extended attributes
  - Create files / write data
  - Create folders / append data
  - Write attributes
  - Write extended attributes
  - Delete subfolders and files
  - Read permissions
- On the file shares where report subscriptions are saved:

  - Change share permission
  - Create files / write data folder permission

  Subscriptions created in the Auditor client  are uploaded to file servers under the Long-Term Archive service account as well. See the [Subscriptions](/docs/product_docs/auditor/auditor/admin/subscriptions/overview.md) topic for additional information.

### Assign Permissions on the Long-Term Archive Folder

The procedure below applies to Windows Server 2012 R2 and above and may vary slightly depending on your OS.

Follow the steps to assign permissions on the Long-Term Archive folder:

__Step 1 –__ Navigate to a folder where the Long-Term Archive will be stored, right-click it and select Properties.

__Step 2 –__ In the __<Folder\_name> Properties__ dialog, select the __Security__ tab and click __Advanced__.

__Step 3 –__ In the Advanced Security dialog, select the Permissions tab and click Add.

__Step 4 –__ In the Permission Entry for <Folder\_Name> dialog, apply the following settings:

- Specify an account as principal.
- Set Type to _"Allow"_.
- Set Applies to to _"This folder, subfolders and files"_.
- Switch to the Advanced permissions section.
- Check the following permissions:
  - List folder / read data
  - Read attributes
  - Read extended attributes
  - Create files / write data
  - Create folders / append data
  - Write attributes
  - Write extended attributes
  - Delete subfolders and files
  - Read permissions

### Assign Change and Create Files/Write Data Permissions to Upload Subscriptions to File Shares

The procedure below applies to Windows Server 2012 R2 and above and may vary slightly depending on your OS.

Follow the steps to assign the __Change__ and __Create Files/Write Data__ permissions to upload subscriptions to file shares:

__Step 1 –__ Navigate to a folder where report subscriptions will be stored, right-click it and select Properties.

__Step 2 –__ In the __<Share\_Name> Properties__ dialog, select the __Sharing__ tab and click __Advanced Sharing__.

__Step 3 –__ In the Advanced Sharing dialog, click Permissions.

__Step 4 –__ In the Permissions for <Share\_Name> dialog, select a principal or add a new, then check the Allow flag next to Change.

__Step 5 –__ Apply settings and return to the __<Share\_Name> Properties__ dialog.

__Step 6 –__ In the __<Share\_Name> Properties__ dialog, select the __Security__ tab and click __Advanced__.

__Step 7 –__ In the __Advanced Security Settings for <Share\_Name>__ dialog, navigate to the __Permissions__ tab, select a principal and click Edit, or click Add to add a new one.

__Step 8 –__ Apply the following settings to your Permission Entry.

- Specify a Netwrix Auditor user as principal.
- Set Type to _"Allow"_.
- Set Applies to to _"This folder, subfolders and files"_.
- Check Create files / write data in the Advanced permissions section.

The users who are going to access report subscriptions must be granted read access to these shares. Netwrix recommends you to create a dedicated folder and grant access to the entire Netwrix Auditor Client Users group or any other group assigned the Global reviewer role in Auditor.

## System Health

Long-Term Archive is a file-based storage where Auditor saves the collected activity records. By default, it is located on the system drive at _%PROGRAMDATA%\Netwrix Auditor\Data_ and keeps data for 120 months. You may want to modify these settings, for example, move the storage from the system drive to another location. The Long-Term Archive widget will help you to monitor the Long-Term Archive capacity. The widget displays the current size and daily increase of the Long-Term Archive, and the remaining free space on the target drive.

To open the Long-Term Archive settings, click the corresponding link. Then you will be able to adjust the settings as necessary. See the [Long-Term Archive](/docs/product_docs/auditor/auditor/admin/settings/longtermarchive.md) topic for additional information.
