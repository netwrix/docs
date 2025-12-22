---
title: "Migrate Document"
description: "Migrate Document"
sidebar_position: 20
---

# Migrate Document

This action can be used to copy or move a document between content sources (from 'source' to
'destination'). Simple migration copies the file and any document properties and is supported by all
content source types. Migration action properties specific for different content source types are
listed in the table below.

| Type                    | As 'source' | As 'destination' | Migration Config Type              | Supports structured migration? | Move? | Update source item? | Mark source 'read-only'? |
| ----------------------- | ----------- | ---------------- | ---------------------------------- | ------------------------------ | ----- | ------------------- | ------------------------ |
| Exchange                | Yes         | No               |                                    | Yes                            | No    | No                  | No                       |
| File System             | Yes         | Yes              | Custom -File Share                 | Yes                            | Yes   | Yes                 | Yes                      |
| Google Drive            | Yes         | Yes              | Source (Google Drive account)      | Yes                            | No    | No                  | No                       |
| SharePoint              | Yes         | Yes              | Custom -SharePoint Site Collection | Yes                            | Yes   | Yes                 | No                       |
| SQL and other databases | Yes         | No               |                                    | Yes                            | No    | No                  | No                       |

**IMPORTANT!** Before you add the **Migration** action to your workflow, you should configure
migration destinations. See
[Configure destinations for Migration action](/docs/dataclassification/5.7/contentconfigurationoverview/workflows/actions/availableactions/migratedocument/migrationdestinations.md).

When running the Workflow wizard and having selected **Migration** as action, you will be prompted
to configure related settings.

[](#)To configure migration using Workflow wizard:

On the What do you want to do step, select Migrate Document action. do the following:

1. Specify migration source and folder:

    - Select migration destination under Which type of repository should the document be migrated
      to?. You can add migration destination directly from wizard:

        ![migration_destination_thumb_0_0](/images/dataclassification/5.7/admin/workflows/actions/migration_destination_thumb_0_0.webp)

    - If you created several sources for migration destinations, select on one in the under Where
      should the document be migrated to?
    - For Google Drive, you need to specify subfolder to save your files in the Where in the
      destination should the files be saved? field.

2. Configure migration options:

    | Option                                                                        | Description                                                                                                                                                                                                                                                               |
    | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Replicate folder structure                                                    | If supported by the source system, subfolders will be created in the migration destination to match the relative path in the source. In the case of Exchange this will also include a folder for the mailbox name (I.E: \\MigrationDestination\User@domain.com\Inbox\HR). |
    | Copy or Move the document                                                     | Select one of the following: - Copy - Move                                                                                                                                                                                                                                |
    | Mark Source as Read-only                                                      | The original item can be marked as read only.                                                                                                                                                                                                                             |
    | What action should be taken if the document already exists at the destination | Select action to perform: - Replace - Append Counter - Append Migration Date                                                                                                                                                                                              |
    | Create a stub file?                                                           | - Do not create - Create a stub file                                                                                                                                                                                                                                      |
    | What should the stub file contain?                                            | When you move a file, you can optionally create a file in it's original location stating where the file has been moved to. This allows you to configure the content of that file.                                                                                         |
    | Redact the document                                                           | If update of the source item is supported by the source system, then using this option will instruct the program to apply the redaction plan to the source document after its successful migration. **NOTE:** This option is only available when performing a copy.       |

## Creating a stub file

In NDC, when moving a file from one storage to another a stub file is created in .txt format. It
would have a note, that a file has been transferred to a certain location.

While creating a stub file, you can leave a message where the document is migrated to and the
reasons. You can use the drop-down list to add metadata from the document to the stub file message.
Please see below:

![workflow_stubfile](/images/dataclassification/5.7/admin/workflows/actions/workflow_stubfile.webp)

## Applying the redaction

When you configure a workflow to migrate content from one location to another, you can opt to redact
specific content from those documents. Redaction might be required by your security policy or a
compliance regulation. For example, you may need to remove SSN from your file.

To use redaction in a workflow, you need to set up one or more redaction plans. You can choose to
redact the predefined entities by selecting the plans from the drop-down list on the screenshot
below or create custom groups of entities first.

![workflow_redaction](/images/dataclassification/5.7/admin/workflows/actions/workflow_redaction.webp)

If the redaction has failed for such files as PDF, that had OCR with images and cannot be fully
recognized, these files will get quarantined, leaving a stub file, instead of a redacted file.

To modify action settings for the certain workflow, select the workflow and use the Advanced UI
window. See [Modify Migration action settings](/docs/dataclassification/5.7/contentconfigurationoverview/workflows/actions/availableactions/migratedocument/migration.md) for more information.
