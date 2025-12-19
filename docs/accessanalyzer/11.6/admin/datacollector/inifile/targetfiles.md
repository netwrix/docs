---
title: "INIFile: Target Files"
description: "INIFile: Target Files"
sidebar_position: 10
---

# INIFile: Target Files

The Target Files page identifies the location and name of the INI file from which to collect
information.

![INI File Data Collector Wizard Target Files page](/images/accessanalyzer/11.6/admin/datacollector/inifile/targetfiles.webp)

Configure the Target Files options:

- Fixed path – Path to the INI file. Fixed paths are typically entered using the following format:
  `drive:\filepath`
- Registry Lookup – Select this option to obtain a path from a registry key that exists on the
  target host in the environment. Click the ellipsis (**…**) to open the Enterprise Auditor Registry
  Browser and connect to a host to select a registry key and path to be used for the lookup.

    - Registry Value – This value is automatically populated from the registry key
    - Levels – The Levels slider can be used to truncate the path for the key value in the Adjust
      Path dialog box
    - Current value – Displays the current value for the registry key

- INI File Name – Name of the INI file
