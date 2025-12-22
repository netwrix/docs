---
title: "Scan Settings Tab"
description: "Scan Settings Tab"
sidebar_position: 10
---

# Scan Settings Tab

The Scan Settings tab allows configuration of data collection settings.

![FSAA Data Collector Wizard Default Scoping Options page Scan Settings tab](/images/accessanalyzer/12.0/admin/datacollector/fsaa/scansettings.webp)

The Scan Settings tab has the following configurable options:

- Limit returned subfolder depth to: [number] level – Value indicates the depth of the scan

    - Higher numbers increases scan time but return more thorough data

- Exclude snapshot directories on NetApp server – Excludes folders on NetApp Filers that begin with
  ~snapshot
- Exclude system shares – Part of the OS that most users don’t have access to so its hidden by
  Microsoft
- Exclude hidden shares – Excludes shares with names ending with $
- Last Access Time (LAT) preservation – Preserves Data Access timestamp attribute on files that are
  scanned for Metadata tags and sensitive data

    - Warn if unable to preserve Last Access Time – Scan throws a warning if the LAT cannot be
      preserved. The file is still scanned unless the Skip file if unable to preserve Last Access
      Time checkbox is also selected.
    - Skip file if unable to preserve Last Access Time – Scan skips the file if the LAT cannot be
      preserved

Selecting the **Last Access Time (LAT) preservation** checkbox enables the **Action on failure to
enable LAT preservation** and **Action on changed LAT after scan** dropdown menus.

![Action on failure to enable LAT preservation dropdown options](/images/accessanalyzer/12.0/admin/datacollector/fsaa/defaultscopingoptions/actionlatpreservationfailure.webp)

- Action on failure to enable LAT Preservation – Before scanning each file, FSAA attempts to enable
  an operating system feature to preserve the LAT when accessing the file. This operation may fail
  for a variety of reasons, which include but are not limited to: the operating system or file
  system where the file is located does not support LAT preservation, or insufficient permissions
  from the service account trying to access the file. The following configuration addresses a
  failure to enable the LAT preservation mode:

    - Continue to scan file silently – FSAA scans the file with the possibility that LAT
      preservation is not possible. No warning will be shown.
    - Continue to scan file with warning – FSAA scans the file with the possibility that LAT will
      not be preserved. A warning will be shown for this file.
    - Skip file silently – FSAA will not scan the file. No warning will be shown.
    - Skip file with warning – FSAA will not scan the file. A warning will be shown indicating the
      file was skipped.
    - Abort the scan – FSAA will abort the scan. No further files will be processed.

![Action on changed LAT after scan dropdown options](/images/accessanalyzer/12.0/admin/datacollector/fsaa/defaultscopingoptions/actionchangedlat.webp)

- Action on changed LAT After scan – Before scanning each file, the LAT of the current file is
  recorded. After scanning, it is verified whether the LAT has changed since then (likely scenarios
  are either that the LAT preservation mechanism failed to function as intended, or that the file
  was accessed by someone while the scan was occurring). The following configuration addresses a
  changed LAT:

    - Continue scan silently – The scan will move on to the next file while updating the LAT for the
      processed file. No warning will be shown.
    - Continue scan with warning – The scan will continue on to the next file. LAT will be updated
      for the processed file. A warning will be shown.
    - Force-reset file LAT silently – The scan will reset the file's LAT to its original state
      before processing. No warning will be shown. The scan will proceed to the next file.
    - Force-reset file LAT with warning – The scan will Reset the file's LAT to its original state
      before processing. A warning will be shown. The scan will proceed to the next file.
    - Abort the scan – FSAA will abort the scan. LAT will be updated for the processed file. No
      other files will be processed
