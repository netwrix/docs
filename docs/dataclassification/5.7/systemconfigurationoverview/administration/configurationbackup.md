---
title: "Configuration Backup"
description: "Configuration Backup"
sidebar_position: 20
---

# Configuration Backup

:::note
Only available for ‘Superusers’
:::


The Backup utility allows for the migration of complex Netwrix Data Classification instance
configurations.

This allows a user to safely design and test a Netwrix Data Classification configuration within a
development environment and then copy the configuration, or specific parts of the configuration, to
a different environment (I.E production).

The tool supports text replacement to allow user defined URL's to be replaced by the equivalent
destination URL. The following configuration options are available for import / export:

- Source Registrations
- SharePoint Termset Registrations
- Workflow Configurations
- Core Configuration Options:

    - Files Excluded
    - Files Included
    - Mapped Metadata Fields
    - Mapped Metadata Values
    - Supported Languages
    - Pages Excluded
    - Pages Included
    - SharePoint Excluded
    - Text Patterns

Follow the steps to create configuration backup.

**Step 1 –** Go to **Settings** > **Config** > **Utilities**.

![utilitiesbackup](/images/dataclassification/5.7/admin/utilities/utilitiesbackup.webp)

**Step 2 –** From the navigation menu on the left, click **Backup/Restore.**

**Step 3 –** Click **Create Backup** and select the elements that you wish to include (sources,
SharePoint taxonomies, or workflows).

:::note
The backup password will be required if you export a backup to XML and re-import to a
different environment. This option is required on **Upload Backup** step.
:::


**Step 4 –** Click **Save**.

Upon import any items that already exist will be skipped.
