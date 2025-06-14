# Workflow Actions

Actions are automated operation to be performed with the documents when rule conditions are
triggered. There are two types of workflow actions:

- Generic actions available for any type of document. These are:

    - [Email Alert](/versioned_docs/dataclassification_5.6.2/ndc/workflows/actions/workflows_email.md)
    - Migration
    - [Apply Additional Classification](/versioned_docs/dataclassification_5.6.2/ndc/workflows/advanced_window/advanced_actions_classification.md)

- Source-specific actions

Workflow actions are executed at the final stage of the document processing.

## Available Actions by Source

This table lists workflow actions available for the certain content source types.

| Content source type     | Available actions                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Exchange                | [Email Alert](/versioned_docs/dataclassification_5.6.2/ndc/workflows/actions/workflows_email.md) [Migrate Document](/versioned_docs/dataclassification_5.6.2/ndc/workflows/actions/workflows_migration.md) [Apply Additional Classification](/versioned_docs/dataclassification_5.6.2/ndc/workflows/advanced_window/advanced_actions_classification.md) [Advanced Actions for Exchange](/versioned_docs/dataclassification_5.6.2/ndc/workflows/advanced_window/advanced_actions_exchange.md)\*: delete email, move email                                                                                  |
| File System             | [Email Alert](/versioned_docs/dataclassification_5.6.2/ndc/workflows/actions/workflows_email.md) [Migrate Document](/versioned_docs/dataclassification_5.6.2/ndc/workflows/actions/workflows_migration.md) [Apply Additional Classification](/versioned_docs/dataclassification_5.6.2/ndc/workflows/advanced_window/advanced_actions_classification.md) [Advanced Actions for File System](/versioned_docs/dataclassification_5.6.2/ndc/workflows/advanced_window/advanced_actions_files.md)\*: update permissions, add/remove MIP label                                                                  |
| Google Drive            | [Email Alert](/versioned_docs/dataclassification_5.6.2/ndc/workflows/actions/workflows_email.md) [Migrate Document](/versioned_docs/dataclassification_5.6.2/ndc/workflows/actions/workflows_migration.md) [Apply Additional Classification](/versioned_docs/dataclassification_5.6.2/ndc/workflows/advanced_window/advanced_actions_classification.md)                                                                                                                                                                                                                                                   |
| SharePoint              | [Email Alert](/versioned_docs/dataclassification_5.6.2/ndc/workflows/actions/workflows_email.md) [Migrate Document](/versioned_docs/dataclassification_5.6.2/ndc/workflows/actions/workflows_migration.md) [Apply Additional Classification](/versioned_docs/dataclassification_5.6.2/ndc/workflows/advanced_window/advanced_actions_classification.md) [Advanced Actions for SharePoint](/versioned_docs/dataclassification_5.6.2/ndc/workflows/advanced_window/advanced_actions_sharepoint.md)\*: send classification value, filtered targeted meta update, write/remove O365 label, copy/move document |
| SQL and other databases | [Email Alert](/versioned_docs/dataclassification_5.6.2/ndc/workflows/actions/workflows_email.md) [Migrate Document](/versioned_docs/dataclassification_5.6.2/ndc/workflows/actions/workflows_migration.md) [Apply Additional Classification](/versioned_docs/dataclassification_5.6.2/ndc/workflows/advanced_window/advanced_actions_classification.md)                                                                                                                                                                                                                                                   |

\* — these actions can be only configured using the Advanced UI dialog window.
