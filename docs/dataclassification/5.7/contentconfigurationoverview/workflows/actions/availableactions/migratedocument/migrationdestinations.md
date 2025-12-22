---
title: "Configure destinations for Migration action"
description: "Configure destinations for Migration action"
sidebar_position: 10
---

# Configure destinations for Migration action

To use **Migration** as a workflow automated action, make sure you have migration sources and
destinations properly configured.

Currently, the product supports migration for the following sources:

- Databases
- Exchange (_.eml_ items)
- File Systems
- Google Drive
- SharePoint (2010+)

The following targets are supported as destinations:

- Box
- CMIS
- Content Server
- File System
- Google Drive
- SharePoint

Supported migration options are described in the table below.

| Source Type    | Source | Update Source Item | Move | Mark source Read Only | Structured Migration | Destination | Migration Config Type |
| -------------- | ------ | ------------------ | ---- | --------------------- | -------------------- | ----------- | --------------------- |
| Box            |        |                    |      |                       |                      |             |                       |
| CMIS           |        |                    |      |                       |                      |             |                       |
| Content Server |        |                    |      |                       |                      |             |                       |
| Dropbox        |        |                    |      |                       |                      |             |                       |
| Exchange       |        |                    |      |                       |                      |             |                       |
| File System    |        |                    |      |                       |                      |             |                       |
| Google Drive   |        |                    |      |                       |                      |             |                       |
| Http           |        |                    |      |                       |                      |             |                       |
| Salesforce     |        |                    |      |                       |                      |             |                       |
| SharePoint     |        |                    |      |                       |                      |             |                       |
| Sql            |        |                    |      |                       |                      |             |                       |

location to migrate to must be added as a source

**To configure migration destination**

Under the **Workflows** menu click **Configs**, then click **Migration Configs** on the right.

Migration providers that already have contain configured destinations are indicated with the
three-gears icon in the tab header:

![migration_destination_ready_thumb_0_48](/images/dataclassification/5.7/admin/workflows/migration_destination_ready_thumb_0_48.webp)

Click the tab for the migration destination you need.

To add a new configuration, click Add.

To modify existing configuration, click Edit.

To remove a configuration from the list, click Delete.

Type is ‘Source’ the location to migrate to must be added as a source to be included. Custom configs
allow a location to be specified without adding it as a source
