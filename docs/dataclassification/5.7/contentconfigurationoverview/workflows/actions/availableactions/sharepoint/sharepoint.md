---
title: "Advanced Actions for SharePoint"
description: "Advanced Actions for SharePoint"
sidebar_position: 80
---

# Advanced Actions for SharePoint

In addition to the **Email Alert**, **Migrate Document** and additional classification, the
following actions are available for the **SharePoint** content source type:

- [Migrate Document](/docs/dataclassification/5.7/contentconfigurationoverview/workflows/actions/availableactions/migratedocument/migratedocument.md) including copy and move operations
- Document property field (metadata) update, including:

    - **Send fixed value**, **send crawled value** — these actions apply new metadata value entered
      by user or retrieved from the related NDC database field, respectively.
    - **Send classification value** — this action writes classification metadata (**Taxonomy**) into
      the selected property field (**Field Name**). If multiple classification values are applied,
      they will be written using delimiters.
    - **Write O365 Label**, **Remove O365 Label** — use these actions to write or remove Office 365
      retention label as document metadata. These labels are typically used to automatically apply
      data protection policies to your documents.

    :::note
    These actions require Microsoft Office 365 retention labels to be configured. See
    [this Microsoft article](https://docs.microsoft.com/en-us/microsoft-365/compliance/labels) for
    details.
    :::


    - **Filtered Targeted Meta Update** — this advanced action can be used to update a SharePoint
      property based on rules embedded in the taxonomy clues. Enter the document property to update
      in the **Update Field**, then select the required **Taxonomy** and enter **Match Field**, i.e.
      the field name/clue to match on.

- Apply MIP Label, Remove MIP Label — these actions, respectively, apply and remove sensitivity
  label to/from a document stored on a file system, using Microsoft Information Protection (MIP).
  This helps to automate protection policies application. See Modify MIP Label for details.

To configure actions for SharePoint documents using the Advanced interface:

1. In administrative web console, navigate to Workflows and select the workflow you want to
   configure action for.
2. Click the workflow, then click Add next to Rule Actions.
3. In the Add Action dialog, select the action you need from the **SharePoint** section in the
   Action Type list.

![action_advanced_sp_update_field_thumb_0_0](/images/dataclassification/5.7/admin/workflows/advancedwindow/action_advanced_sp_update_field_thumb_0_0.webp)
