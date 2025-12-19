---
title: "Workflow Actions"
description: "Workflow Actions"
sidebar_position: 30
---

# Workflow Actions

Actions are automated operation to be performed with the documents when rule conditions are
triggered. There are two types of workflow actions:

- Generic actions available for any type of document. These are:

    - [Email Alert](/docs/dataclassification/5.7/contentconfigurationoverview/workflows/actions/availableactions/emailalert/emailalert.md)
    - Migration
    - [Apply Additional Classification](/docs/dataclassification/5.7/contentconfigurationoverview/workflows/actions/availableactions/classification.md)

- Source-specific actions

Workflow actions are executed at the final stage of the document processing.

## Available Actions by Source

This table lists workflow actions available for the certain content source types.

| Content source type     | Available actions                                                                                                                                                                                                                                                                                                      |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Exchange                | [Email Alert](/docs/dataclassification/5.7/contentconfigurationoverview/workflows/actions/availableactions/emailalert/emailalert.md) [Migrate Document](/docs/dataclassification/5.7/contentconfigurationoverview/workflows/actions/availableactions/migratedocument/migratedocument.md) [Apply Additional Classification](/docs/dataclassification/5.7/contentconfigurationoverview/workflows/actions/availableactions/classification.md) [Advanced Actions for Exchange](/docs/dataclassification/5.7/contentconfigurationoverview/workflows/actions/availableactions/exchange.md)\*: delete email, move email                                                                                  |
| File System             | [Email Alert](/docs/dataclassification/5.7/contentconfigurationoverview/workflows/actions/availableactions/emailalert/emailalert.md) [Migrate Document](/docs/dataclassification/5.7/contentconfigurationoverview/workflows/actions/availableactions/migratedocument/migratedocument.md) [Apply Additional Classification](/docs/dataclassification/5.7/contentconfigurationoverview/workflows/actions/availableactions/classification.md) [Advanced Actions for File System](/docs/dataclassification/5.7/contentconfigurationoverview/workflows/actions/availableactions/files/files.md)\*: update permissions, add/remove MIP label                                                                  |
| Google Drive            | [Email Alert](/docs/dataclassification/5.7/contentconfigurationoverview/workflows/actions/availableactions/emailalert/emailalert.md) [Migrate Document](/docs/dataclassification/5.7/contentconfigurationoverview/workflows/actions/availableactions/migratedocument/migratedocument.md) [Apply Additional Classification](/docs/dataclassification/5.7/contentconfigurationoverview/workflows/actions/availableactions/classification.md)                                                                                                                                                                             |
| SharePoint              | [Email Alert](/docs/dataclassification/5.7/contentconfigurationoverview/workflows/actions/availableactions/emailalert/emailalert.md) [Migrate Document](/docs/dataclassification/5.7/contentconfigurationoverview/workflows/actions/availableactions/migratedocument/migratedocument.md) [Apply Additional Classification](/docs/dataclassification/5.7/contentconfigurationoverview/workflows/actions/availableactions/classification.md) [Advanced Actions for SharePoint](/docs/dataclassification/5.7/contentconfigurationoverview/workflows/actions/availableactions/sharepoint/sharepoint.md)\*: send classification value, filtered targeted meta update, write/remove O365 label, copy/move document |
| SQL and other databases | [Email Alert](/docs/dataclassification/5.7/contentconfigurationoverview/workflows/actions/availableactions/emailalert/emailalert.md) [Migrate Document](/docs/dataclassification/5.7/contentconfigurationoverview/workflows/actions/availableactions/migratedocument/migratedocument.md) [Apply Additional Classification](/docs/dataclassification/5.7/contentconfigurationoverview/workflows/actions/availableactions/classification.md)                                                                                                                                                                             |

\* — these actions can be only configured using the Advanced UI dialog window.
