---
title: "Advanced Actions for Exchange"
description: "Advanced Actions for Exchange"
sidebar_position: 60
---

# Advanced Actions for Exchange

In addition to the **Email Alert** ,**Migrate Document** and additional classification, the
following actions are available for the **Exchange** content source type:

- **Delete email**
- **Move email**

To configure these actions, use the Advanced UI dialog window. See
[Configure a Workflow using Advanced dialog](/docs/dataclassification/5.8/contentconfigurationoverview/workflows/actions/availableactions/createworkflow.md) for details on how to invoke it.

## Delete Email

This action removes an email from Exchange mailbox.

![action_exchange_delete_email_thumb_0_0](/images/dataclassification/5.8/admin/workflows/advancedwindow/action_exchange_delete_email_thumb_0_0.webp)

Specify the following action parameters:

| Action parameter           | Description                                                                                                                                                                                                                                                                                                                             | Comments                                                                                                                                                            |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Delete Mode**            | Matches the native Microsoft Exchange **Delete Modes**: <ul><li>**Soft Delete** — You can recover the email from the _Deleted Items_ folder.</li><li>**Hard Delete** — You can't recover the email after deletion.</li><li>**Move to Deleted items** — The product moves the email to the _Deleted Items_ folder.</li></ul> | See [this Microsoft article](https://docs.microsoft.com/en-us/exchange/client-developer/exchange-web-services/deleting-items-by-using-ews-in-exchange) for details. |
| **Suppress Read Receipts** | With this option selected, the product doesn't send _Read receipts_ (if requested) for the item it deletes.                                                                                                                                                                                                                                  | Selected by default.                                                                                                                                                |


## Move Email

This action moves an email to the specified folder within the same mailbox.

Specify the following action parameters:

| Action parameter       | Description                                                                                                     | Comments                                                             |
| ---------------------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| **Target Folder Name** | The name of the folder to move the email to.                                                                   | For subfolders, only include the subfolder name (not the full path). |
| **Parent Folder Name** | If the target folder name isn't unique, specify the parent folder name — to ensure the product uses the correct folder. | Optional.                                                            |
