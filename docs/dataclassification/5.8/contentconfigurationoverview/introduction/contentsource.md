---
title: "File System"
description: "File System"
sidebar_position: 30
---

# File System

You can add file system content as individual files or as folders.

Review the following for additional information:

## Add Folders source

Use the Folders section to add either Windows Directories, SAMBA, or NFS shares, to the
index.

Using NFS Shares requires you to install additional Windows components. The Netwrix Data
Classification Knowledge base provides full details and instructions. To make other
configuration changes before collection of the source occurs, select the **Pause source on
creation** checkbox.

Complete the following fields:

| Option                     | Description                                                                                                                                                                                                                                                   |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Folder                     | Enter the UNC path of the root folder where collection starts. You can add either windows directories, or NetApp filer or EMC storage devices, to the index.                                                                                             |
| Username                   | Specify the account used to process the folder.                                                                                                                                                                                                               |
| Password                   | Provide a password for the account specified in **Username**.                                                                                                                                                                                                           |
| Include sub-folders        | Select if you want to process data in sub-folders and set depth limit.                                                                                                                                                                                        |
| Depth Limit                | Specify how many levels the indexing should process (if you select **Include sub-folders**).                                                                                                                                                                    |
| Allow anonymous access     | Use this option to disable security filtering for selected sources. If unselected, the indexing processes collect Windows Access Control Lists (ACLs) for the files, and the product filters search results based on the end user's Windows identity.  |
| Enable duplicate detection | Select to exclude documents that contain the same text content from the index.                                                                                                                                                                                |
| Write classifications      | Select if you want to write classifications directly into the document properties (DOC/DOCX/XLS/XLSX/PPT/PPTX/PDF). The Manage File System section details which classifications to write, as well as the write format. |
| Text patterns              | [See Text Processing for more information.](/docs/dataclassification/5.8/systemconfigurationoverview/configuration/texthandling.md)                                                                                                                                                                           |
| Re-Index Period            | Specifies how often the product checks the source for changes. Netwrix recommends using default values.                                                                                                                                                        |
| Priority                   | Netwrix recommends using default values.                                                                                                                                                                                                                      |
| Max Collector Retries      | Specify how many retries the collector attempts before automatically removing items from the index when incremental collection indicates that the file no longer exists.                                                                                               |
| Document Type              | Specify a value to restrict queries when using the Netwrix Data Classification search index.                                                                                                                                             |
| Source Group               | Netwrix recommends using default values.                                                                                                                                                                                                                      |

## Add Files source

Alternatively, you can add individual files by using the Files section:

![addfile](/images/dataclassification/5.8/admin/sources/filesystem/addfile.webp)

When you select Upload Files, the program uploads the file into the SQL database. This allows an
application to present the file to users even if they don't have access to the original file
location.
