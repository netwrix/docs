---
title: "Unix: Settings"
description: "Unix: Settings"
sidebar_position: 10
---

# Unix: Settings

The Settings page configures the Unix Data Collector settings.

![Unix Data Collector Wizard Settings page](/images/accessanalyzer/12.0/admin/datacollector/unix/settings.webp)

The configurable options are:

- Time Out Settings

    - Connection Timeout – Set the connection timeout
    - Processing Timeout – Set the processing timeout

- Pre-Execution File Copy

    The Unix Data Collector can use SCP to copy a file from the Access Analyzer console to the
    target system before running the script command.

    - Enable pre-execution file copy – Select the checkbox to enable

        - Source File – Enter a file path or click the ellipsis (…) to browse to the file location
        - Target Location – Enter the file path to copy the file to

- Credential Selection Settings

    - Only use Unix Account type credentials from connection profile
    - Use both Unix Account and Active Directory Account type credentials from connection profile

        - AD Account user name format – Select from the dropdown the format of the user name from
          the following:

            - username
            - domain\username
            - username@domain

Click **Next** to continue the setup, or **Back** to return to the previous page.
