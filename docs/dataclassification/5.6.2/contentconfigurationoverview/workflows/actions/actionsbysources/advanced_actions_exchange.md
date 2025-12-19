---
title: "Advanced Actions for Exchange"
description: "Advanced Actions for Exchange"
sidebar_position: 50
---

# Advanced Actions for Exchange

In addition to the **Email Alert** ,**Migrate Document** and additional classification, the
following actions are available for the **Exchange** content source type:

- **Delete email**
- **Move email**

To configure these actions, use the Advanced UI dialog window. See Configure a Workflow using
Advanced dialog for details on how to invoke it.

## Delete Email

This action will remove an email from Exchange mailbox.

![action_exchange_delete_email_thumb_0_0](/images/dataclassification/5.6.2/workflows/advanced_window/action_exchange_delete_email_thumb_0_0.webp)

Specify the following action parameters:

| Action parameter           | Description                                                                                                                                                                                                                                                                                                 | Comments                                                                                                                                                            |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Delete Mode**            | Matches the native Microsoft Exchange **Delete Modes**: - **Soft Delete** — Email will be available for recovery from the _Deleted Items_ folder. - **Hard Delete** — Email will not be available for recovery after deletion. - **Move to Deleted items** — Email will be moved to _Deleted Items_ folder. | See [this Microsoft article](https://docs.microsoft.com/en-us/exchange/client-developer/exchange-web-services/deleting-items-by-using-ews-in-exchange) for details. |
| **Suppress Read Receipts** | With this option selected, _Read receipts_ will not be sent (if requested) for the item being deleted.                                                                                                                                                                                                      | Selected by default.                                                                                                                                                |

## Move Email

This action will move an email to the specified folder within the same mailbox.

Specify the following action parameters:

| Action parameter       | Description                                                                                                     | Comments                                                             |
| ---------------------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| **Target Folder Name** | The name of the folder the move the email to.                                                                   | For subfolders, only include the subfolder name (not the full path). |
| **Parent Folder Name** | If the target folder name is not unique, specify the parent folder name — to ensure the correct folder is used. | Optional.                                                            |
