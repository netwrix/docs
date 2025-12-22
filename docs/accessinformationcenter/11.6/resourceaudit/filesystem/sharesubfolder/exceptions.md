---
title: "Exceptions Report"
description: "Exceptions Report"
sidebar_position: 40
---

# Exceptions Report

The Exceptions report at the share and subfolder levels provides a list of all trustees with access
that are causing exceptions on the selected resource. This report includes a Permission Source
table.

![Exceptions report at the share and subfolder levels](/images/accessinformationcenter/11.6/resourceaudit/filesystem/sharesubfolder/shareexceptions.webp)

An exception is defined as a problem or risk to data governance security. Exceptions include open
shares and permissions granted to stale or disabled users. This table is blank unless an Exception
icon is attached to the resource in the Resources pane, indicating exceptions were found. See the
[Resources Pane](/docs/accessinformationcenter/11.6/resourceaudit/navigate/resource.md#resources-pane)
topic for additional information.

This report is comprised of the following columns:

- Trustee Name – Owner of the trustee account
- Name – Type of exception found
- Path – Original location where the operation occurred

There is one table at the bottom displaying Permission Source for the select trustee. It contains
all of the ways the selected trustee has been granted rights to the selected resource.

![Permission Source table](/images/accessinformationcenter/11.6/resourceaudit/filesystem/sharesubfolder/shareexceptionstable.webp)

The number of rows for this table indicates the number of ways this trustee has been granted access.
This table is comprised of the following columns:

- Source Path – Location for which the trustee was granted rights to the selected resource, which
  can be represented two ways:

    - Directly Applied – Rights granted directly to the selected trustee
    - Access through another trustee, path starts with trustee assigned the direct rights and shows
      all nested groups leading to the selected trustee

- Source Type – Share or folder source of the permission
- Source Name – Name of the share or folder where the permission is assigned

The following rights are a normalized representation of the Share and NTFS permissions granted to
the trustee:

- List – Right to view list of files and subfolders
- Read – Right to view/read files and subfolders
- Write – Right to add or modify files and subfolders
- Delete – Right to delete files and subfolders
- Manage – Equivalent to full control over files and subfolders

The following columns display the combined direct and inherited rights:

- Allow Mask – Bitmask corresponding to Windows ACE permission bits for combined direct and
  inherited allow rights
- Deny Mask – Bitmask corresponding to Windows ACE permission bits for combined direct inherited
  deny rights
