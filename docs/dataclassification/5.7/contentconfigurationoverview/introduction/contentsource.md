---
title: "File System"
description: "File System"
sidebar_position: 30
---

# File System

There are two ways to add file system content: as individual files, as folders.

Review the following for additional information:

## Add Folders source

The Folders section can be used to add either Windows Directories, SAMBA, or NFS shares, to the
index.

Using NFS Shares requires additional Windows components to be installed. Full details / instructions
can be found within the Netwrix Data Classification Knowledge base. If you wish to make other
configuration changes before collection of the source occurs ensure you tick the checkbox Pause
source on creation.

Complete the following fields:

| Option                     | Description                                                                                                                                                                                                                                                   |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Folder                     | Enter the UNC path of the root folder where collection is to start. You can add either windows directories, or NetApp filer or EMC storage devices, to the index.                                                                                             |
| Username                   | Specify the account used to process the folder.                                                                                                                                                                                                               |
| Password                   | Provide a password for the account specified above.                                                                                                                                                                                                           |
| Include sub-folders        | Select if you want to process data in sub-folders and set depth limit.                                                                                                                                                                                        |
| Depth Limit                | Specify how many levels the indexing should process (if "include sub-folders" is checked).                                                                                                                                                                    |
| Allow anonymous access     | This option is used to disable security filtering for selected sources. If unselected, the indexing processes will collect Windows Access Control Lists (ACLs) for the files and search results will be filtered based upon the end user's Windows identity.  |
| Enable duplicate detection | Select to exclude documents that contain the same text content from the index.                                                                                                                                                                                |
| Write classifications      | Select if you wish to write classifications directly into the document properties (DOC/DOCX/XLS/XLSX/PPT/PPTX/PDF). The configuration of which classifications are to be written, as well as the write format, is detailed in the Manage File System section. |
| Text patterns              | [See Text Processing for more information.](/docs/dataclassification/5.7/systemconfigurationoverview/configuration/texthandling.md)                                                                                                                                                                           |
| Re-Index Period            | Specifies how often the source should be checked for changes. Netwrix recommends using default values.                                                                                                                                                        |
| Priority                   | Netwrix recommends using default values.                                                                                                                                                                                                                      |
| Max Collector Retries      | Specify how many retries are attempted before automatically removing items from the index when incremental collection indicates that the file has been deleted.                                                                                               |
| Document Type              | Specify a value that can be used to restrict queries when utilising the Netwrix Data Classification search index.                                                                                                                                             |
| Source Group               | Netwrix recommends using default values.                                                                                                                                                                                                                      |

## Add Files source

Alternatively, individual files can be added by using the Files section:

![addfile](/images/dataclassification/5.7/admin/sources/filesystem/addfile.webp)

When Upload Files is selected the file will be uploaded into the SQL database. This allows an
application to present the file to users even if they do not have access to the original file
location.
