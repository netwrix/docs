---
title: "File System"
description: "File System"
sidebar_position: 60
---

# File System

Use the Source configuration screen to set up the crawling and classification operations for content
stored in your file server. Netwrix Data Classification can process individual files or folders.
Select, respectively, **File** or **Folder** at the first screen of the Add content source wizard.

![add_source_wizard_thumb_0_0](/images/dataclassification/5.6.2/sources/add_source_wizard_thumb_0_0.webp)

## Add Folder source

Use Folder to add the following content sources:

- Windows folders
- SMB (CIFS) shares
- NFS shares

**IMPORTANT!** To add an NFS share, make sure you have configured it for crawling as described in
[Configure NFS File Share for Crawling](/docs/dataclassification/5.6.2/deployment/configinfrastructure/config_nfs_fs.md)

By default, configuration window displays basic configuration settings only. To configure advanced
settings, click the "wrench" icon in the bottom left corner.

**NOTE:** To configure advanced settings, your user account will need advanced privileges.
[See Users and Security Settings for more information.](/docs/dataclassification/5.6.2/systemconfigurationoverview/users/users.md)

Complete the following fields:

| Option                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Basic settings**          |                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Folder                      | Enter the UNC path of the root folder where collection is to start.                                                                                                                                                                                                                                                                                                                                                                        |
| Depth Limit                 | Specify how many levels the indexing should process. Possible options: - **Exclude Subfolders** - **All Subfolders** (default setting) - **Limit Subfolders** - if selected, specify the required subfolders depth (from 2 to 99)                                                                                                                                                                                                          |
| Write classifications       | Select if you wish to write classifications directly into the document properties, i.e. use tagging. This applies to DOC/DOCX/XLS/XLSX/PPT/PPTX/PDF. See also [File System](/docs/dataclassification/5.6.2/contentconfigurationoverview/sourcesintro/sourcesmanage/manage_file_system.md).                                                                                                                                                                       |
| Source Group                | Default value recommended.                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Pause source on creation    | Select if you want to make other configuration changes before collection of the source occurs.                                                                                                                                                                                                                                                                                                                                             |
| **Advanced settings**       |                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Username                    | Specify the account used to process the folder.                                                                                                                                                                                                                                                                                                                                                                                            |
| Password                    | Provide a password for the account specified above.                                                                                                                                                                                                                                                                                                                                                                                        |
| Text Patterns               | [See Text Processing for more information.](/docs/dataclassification/5.6.2/systemconfigurationoverview/configuration/text_handling.md)                                                                                                                                                                                                                                                                                                                   |
| Date Filter                 | Use this calendar control to instruct the program to only crawl the content that has been modified since the specified date. This can be useful for targeting data that is current - in situations where there is a huge volume of content (assuming that the most recent content has the highest risk).                                                                                                                                   |
| Anonymous Access Allowed    | Select this option to disable security filtering for the content source. If cleared, the indexing processes will collect Windows Access Control Lists (ACLs) for the files, and search results will be filtered based upon the end user's Windows identity.                                                                                                                                                                                |
| Duplicate Detection Enabled | Select to exclude duplicates (i.e. documents that contain the same text content) from the index.                                                                                                                                                                                                                                                                                                                                           |
| Re-Index Period             | Specifies how often the source should be checked for changes. Netwrix recommends using default values. Default is **7 days**. **NOTE:** Netwrix Data Classification monitors file shares to detect when a document is added/modified. These will then be queued for reprocessing. The source will still be checked for changes based on the re-index period in case any updates are not received. See Manage Sources for more information. |
| Priority                    | Netwrix recommends using default values.                                                                                                                                                                                                                                                                                                                                                                                                   |
| Document Type               | Specify a value that will be used to restrict queries when utilising the search index.                                                                                                                                                                                                                                                                                                                                                     |

When finished, click **Save**.

## Add Files source

Use the File section to crawl individual files.

![addfile](/images/dataclassification/5.6.2/sources/file_system/addfile.webp)

By default, configuration window displays basic configuration settings only. To configure advanced
settings, click the "wrench" icon in the bottom left corner.

**NOTE:** To configure advanced settings, your user account will need advanced privileges.
[See Users and Security Settings for more information.](/docs/dataclassification/5.6.2/systemconfigurationoverview/users/users.md)

| Option                   | Description                                                                                                                                                                                                                                                 |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Basic settings**       |                                                                                                                                                                                                                                                             |
| File Source              | Select how you wish to provide the file location: - **File** - enter file path - **Browse** - browse for the file you need                                                                                                                                  |
| Source Group             | Default value recommended.                                                                                                                                                                                                                                  |
| **Advanced settings**    |                                                                                                                                                                                                                                                             |
| Username                 | Specify the account used to process the file.                                                                                                                                                                                                               |
| Password                 | Provide a password for the account specified above.                                                                                                                                                                                                         |
| Anonymous Access Allowed | Select this option to disable security filtering for the content source. If cleared, the indexing processes will collect Windows Access Control Lists (ACLs) for the files, and search results will be filtered based upon the end user's Windows identity. |
| Upload                   | If selected, the file will be uploaded into the NDC SQL database. This will allow the program to present the file to users even if they do not have access to the original file location.                                                                   |
| Text Patterns            | [See Text Processing for more information.](/docs/dataclassification/5.6.2/systemconfigurationoverview/configuration/text_handling.md)                                                                                                                                    |
| Max Collector Retries    | Specify how many retries are attempted before automatically removing items from the index when incremental collection indicates that the file has been deleted. Default is **3** retries.                                                                   |
| Re-Index Period          | Specifies how often the source should be checked for changes. Netwrix recommends using default values. Default is **7 days**.                                                                                                                               |
| Priority                 | Netwrix recommends using default values.                                                                                                                                                                                                                    |
| Document Type            | Specify a value that will be used to restrict queries when utilising the search index.                                                                                                                                                                      |
