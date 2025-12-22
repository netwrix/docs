---
title: "FSAA: Scoping Options"
description: "FSAA: Scoping Options"
sidebar_position: 90
---

# FSAA: Scoping Options

The Scoping Options page is where scan settings, file details, and file properties settings can be
configured for a specified resource in the targeted environment. It is a wizard page for the
following categories:

- File System Access/Permission Auditing Scan
- Sensitive Data

![FSAA Data Collector Wizard Scoping Options page](/images/accessanalyzer/11.6/admin/datacollector/fsaa/scopingoptions.webp)

The Scoping Options buttons have the following:

- Add – Add a resource to be included or excluded in the scan. Opens the Scoping Configuration
  window.
- View/Edit – Make changes to a previously added resource. Opens the Scoping Configuration window.
- Remove – Deletes the resource from the table and therefore the scan
- Increase Priority – Sets a lower numerical value to the resource, which sets a higher priority
  when conflicting settings occur with one resource
- Decrease Priority – Sets a higher value to the resource, which sets a lower priority when
  conflicting settings occur with one resource
- Import – Import scoping options from a `.fsaascope` file.

    - If a conflict arises between an existing configured scoping option and an option that is being
      imported, the user will be prompted to resolve the conflict by either keeping the existing
      configuration or importing the new one, which will overwrite the scoping option.

- Export – Take the currently configured scoping options in the job and export it to a `.fsaascope`
  file

By default, priority is assigned in the order it is added to the table. Priority can also be
manually assigned with the Increase Priority and Decrease Priority buttons or in the
[Scoping Configuration Window](#scoping-configuration-window). If there is a conflict between an
inclusion scoping option and an exclusion scoping option with the same priority, the inclusion takes
precedence.

See the [Common Scoping Scenarios](#common-scoping-scenarios) section for example configurations of
scoping options and the expected results.

## Scoping Configuration Window

The Scoping Configuration Window allows a specific share or folder to be included or excluded from
the scan. Only included resources require additional scoping. Remember, these settings override the
default scoping settings for the selected resource.

![Scoping Configuration Window](/images/accessanalyzer/11.6/admin/datacollector/fsaa/scopingconfigurationwindow.webp)

Set the Resource Name and Host Name:

- Resource Name – Specify a local path or individual share to the target folder or the share name
- Host Name – Apply scoping options to a specific target host. If a host name is not supplied, all
  hosts targeted by the job have the scoping options applied.

Both the Resource Name and Host Name textboxes support regular expressions and pattern matching.

- For wildcards – Use the `?` or `*` as the share or folder name. Example of Wildcard Support: You
  have three shares named `Share1`, `Share2`, and `MyShare`. You want to include `Share1` and
  `Share2`. You can enter into this field:

    - `share*`
    - `share?`
    - `Share*`
    - `SHARE?`

- For regular expressions – Use the prefix `RE:` and escape the backslash characters. Example of
  Regular Expression: To provide an expression that would include all shares or files that start
  with the letter `A`:

    :::note
    This option is case sensitive.
    :::


    - `RE:\\\\[^\\[+\\A`

Then set Scoping Type and Priority:

- Scoping Type – Choose from the dropdown menu the type of resource to scan:

    - Share Include – Provided share name is included in the scan. All scoping options must match or
      it is excluded.
    - Share Exclude – Provided share is excluded from the scan
    - Folder Include – Provided folder name is included in the scan. All scoping options must match
      or the scan ignores the resource.
    - Folder Exclude – Provided folder is excluded from the scan. All scoping options must match or
      it is excluded.

    :::note
    Any included files or folders inherit all options previously checked in the
    [FSAA: Default Scoping Options](/docs/accessanalyzer/11.6/admin/datacollector/fsaa/defaultscopingoptions/defaultscopingoptions.md)
    page. Manually apply new options if the default ones are not desired in this scan.
    :::


- Priority – Numerical value that determines which options are used in the case of more than one
  scoping option overlaps for a particular resource. Lower numerical values have a higher priority
  for this scan. When multiple scoping options are added to a single resource, and there is no
  conflict, the scoping options are merged. However, in some instances, the settings conflict. Below
  are some known conflicts and their results:
    - Conflict between two options for a single resource – Higher priority takes precedence
    - Folder scoping option conflicts with a share scoping option – Folder takes precedence
    - Conflict between two scoping options with the same priority – Path determines which option is
      used. The scoping option with the child takes precedence over the parent.
- Enable Button – Adds the scoping option to the scan criteria

See the
[Scan Settings Tab](/docs/accessanalyzer/11.6/admin/datacollector/fsaa/defaultscopingoptions/scansettings.md),
[File Details Tab](/docs/accessanalyzer/11.6/admin/datacollector/fsaa/defaultscopingoptions/filedetails.md),
and
[File Properties (Folder Summary) Tab](/docs/accessanalyzer/11.6/admin/datacollector/fsaa/defaultscopingoptions/fileproperties.md)
tabs for more detail on these scoping options.

## Common Scoping Scenarios

The following examples show some common configurations of scoping options and the expected results.

**Scenario 1**

Scan for all shares except one.

![Common Scoping Options example Scenario 1](/images/accessanalyzer/11.6/admin/datacollector/fsaa/commonscopingoptionsscenario1.webp)

All shares included except for the ProbableOwner share.

**Scenario 2**

Scan for one share and exclude all others.

![Common Scoping Options example Scenario 2](/images/accessanalyzer/11.6/admin/datacollector/fsaa/commonscopingoptionsscenario2.webp)

The ProbableOwner Share is included. All other shares are excluded. Share Inclusion must have a
priority that is greater than or equal to the Share Exclusion.

**Scenario 3**

Scan all folders except one.

![Common Scoping Options example Scenario 3](/images/accessanalyzer/11.6/admin/datacollector/fsaa/commonscopingoptionsscenario3.webp)

All Shares are scanned and all folders are included except for C:\ProbableOwner\DifferentOwner.

**Scenario 4**

Scan one folder and exclude all others.

![Common Scoping Options example Scenario 4](/images/accessanalyzer/11.6/admin/datacollector/fsaa/commonscopingoptionsscenario4.webp)

The ProbableOwner Share is included and all other shares are excluded. Within the ProbableOwner
Share, Folder path C:\ProbableOwner\DifferentOwner is included. All other folder paths are excluded.

**Scenario 5**

Scan one folder and all of its children and exclude all others.

![Common Scoping Options example Scenario 5](/images/accessanalyzer/11.6/admin/datacollector/fsaa/commonscopingoptionsscenario5.webp)

The ProbableOwner Share is included and all other shares are excluded. Within the ProbableOwner
Share, Folder path C:\ProbableOwner\DifferentOwner is included along with all of its children
(Notice the \\\* at the end of folder include path). All other folder paths are excluded.

**Scenario 6**

Scan for all content within a folder except one sub-folder.

![Common Scoping Options example Scenario 6](/images/accessanalyzer/11.6/admin/datacollector/fsaa/commonscopingoptionsscenario6.webp)

The ProbableOwner Share is included and all other shares are excluded. Within the ProbableOwner
Share, Folder path C:\ProbableOwner\DifferentOwner is included along with all of its children
(Notice the \\\* at the end of folder include path). Within the DifferentOwner folder the path
C:\ProbableOwner\DifferentOwner\Test2 is excluded (Notice the higher priority for the exclusion).
All other folder paths are excluded.

**Additional Considerations**

The scoping options listed above can be used to scope for SMB shares and NFS exports but NFS exports
are enumerated differently. The include/exclude logic outlined above should be the same for both,
but when scoping for NFS exports the Resource Name should be the full path to the export.

For example, in the scenario below, the NFS export named NFS_Export is included. All other exports
are excluded. Within the NFS_Export export, folder path \ifs\NFS_Export\Test_Folder is included. All
other folder paths are excluded.

![FSAA Scoping Options NFS export example](/images/accessanalyzer/11.6/admin/datacollector/fsaa/commonscopingoptionsnfsexports.webp)

Note the different slash types for exports compared to folders.
