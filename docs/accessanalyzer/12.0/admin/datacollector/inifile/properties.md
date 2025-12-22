---
title: "INIFile: Properties"
description: "INIFile: Properties"
sidebar_position: 20
---

# INIFile: Properties

The Properties page identifies data about the INI file for auditing.

![INI File Data Collector Wizard Properties page](/images/accessanalyzer/12.0/admin/datacollector/inifile/properties.webp)

Use the following options to determine which data to adult:

- All contents – Collect all contents from the INI file

    :::note
    `*` can be used for matching wildcard or single characters.
    :::


    - Section name – Collect data matching section name from the INI file
    - Key name – Collect data matching key name from the INI file

- Differences from standard – Select a master control file to compare the current target against

    - Click the ellipses (**…**) to open a file explorer window
    - Select an appropriate .INI file

- Properties – Select a checkbox next to any desired properties. **Select All** or **Clear All** can
  also be used.

    If **Differences from standard** is selected, all properties are selected and cannot be altered.
