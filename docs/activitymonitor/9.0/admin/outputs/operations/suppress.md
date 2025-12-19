---
title: "Suppress Windows Explorer Activity"
description: "Suppress Windows Explorer Activity"
sidebar_position: 10
---

# Suppress Windows Explorer Activity

Not all file operations are deliberate. Operating systems and third-party software have the
capability to execute operations on files without explicit user action. While this functionality can
improve user experience, it also presents a challenge to IT teams as it generates a record of
actions that have not been explicitly triggered by users.

One of the most prominent examples is the Windows File Explorer - the standard application for file
system browsing on the Windows family of operating systems. Over the years, File Explorer has had a
number of improvements and new features. File Explorer displays various information about files to
provide a better user experience. This allows users to view file content without having to open
them.

File Explorer displays icons for certain file types like executable (.exe) files. Depending on the
View mode, it can display thumbnails of various file formats and meta-data with things like author,
number of pages, image dimensions, etc. Hovering a mouse cursor over a file also provides detailed
information about a file in a tool tip. When working with sub-folders, File Explorer may display a
thumbnail of the files contained within the sub-folder on top of the sub-folder icon. This
additional functionality is executed automatically, mostly without the user's explicit action or
intention.

As an example, a user may wish to open the MySampleReport.docx document located in the
MyTestDepartment folder. The user opens the folder, locates the file and double-clicks to open it.
From the user's perspective, only two actions were performed:

1. Open MyTestMyDepartment folder.
2. Open MySampleReport.docx.

However, File Explorer performs a number of additional operations on behalf of the user:

- It reads and displays icons for certain files types in MyTestMyDepartment folder.
- It reads the meta-data of the files or sub-folders under the mouse cursor while the user is
  locating the document.
- It reads the meta-data and preview if the user accidentally selects an incorrect file.
- It lists the content of all sub-folders and generates thumbnails to be displayed on top of the
  sub-folder icon.
- It may create or update Thumbs.db file - a cache of thumbnail images.

None of these additional file operations, which can be called Preview Reads, are explicitly
initiated by the user. However, the audit log records all of them as originating from the user.

Preview Reads and similar unintentional automatic operations pose a significant challenge for IT
teams and IT auditing software. At the file system level, preview reads are perceived as normal read
operations, like file copying or opening a file in an application. There exists no distinguishing
factor between explicit user activity and implicit actions by File Explorer. Whether it is a preview
read, opening the file in Notepad, or copying the file, all these operations are perceived as the
same Read operation at the file system level. Therefore, it is not possible to reliably filter
unintentional activity without the risk of suppressing genuine user actions.

The Activity Monitor employs various techniques to minimize noise. These methods all rely on
identifying patterns in the sequence of events. However, their effectiveness is severely limited, as
research has shown that clear patterns of preview reads activity in File Explorer are lacking. For
the Windows Server, the effectiveness is slightly higher since theActivity Monitor's file system
driver can observe all the low-level details about operations.

The product provides the following filtering options to reduce File Explorer preview reads:

- Suppress reporting of File Explorer’s excessive directory traversal activity - This option aims to
  identify and suppress preview reads of sub-folders that occur immediately after the parent folder
  is opened.
- Suppress reporting of File Explorer’s excessive file read activity - This option attempts to
  identify and suppress preview reads of files that occur immediately after the parent folder is
  opened.

Both filtering options prioritize the accuracy of audit data over noise reduction. In other words,
they will report a noise event rather than suppress a genuine user action.
