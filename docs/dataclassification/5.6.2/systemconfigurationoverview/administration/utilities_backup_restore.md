---
title: "Configuration Backup"
description: "Configuration Backup"
sidebar_position: 20
---

# Configuration Backup

**NOTE:** Only available for ‘Superusers’

The Backup utility allows for the migration of complex Netwrix Data Classification instance
configurations.

This allows a user to safely design and test a Netwrix Data Classification configuration within a development
environment and then copy the configuration, or specific parts of the configuration, to a different
environment (for example, production).

The tool supports text replacement to allow user-defined URLs to be replaced by the equivalent
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

![utilitiesbackup](/images/dataclassification/5.6.2/utilities/utilitiesbackup.webp)

To create a backup, select **Create Backup** and select the elements to include. You
must provide the backup password if you export a backup to XML and re-import it to a different
environment.

Upon import, the system skips items that already exist.
