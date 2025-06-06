# Update Permissions

This action updates the file system permissions for the classified document. You can use this approach to automatically restrict access to sensitive documents or provide access permissions, based upon the document's classifications.

[![workflow_wizard_actions_update_permissions_thumb_0_0](/static/img/product_docs/dataclassification/ndc/admin/workflows/actions/workflow_wizard_actions_update_permissions_thumb_0_0.png)](/docs/product_docs/dataclassification/resources/images/workflows/workflow_wizard_actions_update_permissions.png)

Specify the following:

| Option | Description |
| --- | --- |
| Assign Permissions |  |
| Do you want to grant access to one or more users or groups? | Select Yes if you want the access rights to be granted automatically to the classified document upon workflow completion.  (missing or bad snippet) |
| Which permissions should be given to these users? | Select permission level you want to be granted automatically to the classified document upon workflow completion. Available options:   - __Read and Execute__ (default setting) - __Read, Execute, and Modify__ - __Full Control__ |
| Do you want to deny access to one or more users or groups? | Select Yes if you want to deny access to the classified document to a specific user in this group.  (missing or bad snippet) |
| Remove Permissions |  |
| Do you want to remove access from one or more users or groups? | Select Yes if you want to restrict access to the classified document: remove all explicit permissions, or remove access from specific users/groups.  Then select the necessary option under __Do you want to remove all explicit permissions, or remove specific users/group?__  __NOTE:__ Only applies to explicit permissions, not inherited permissions.   - All Users—Select to remove all explicit permissions for all users. - Specific Users—Select to remove all explicit permissions for specific users. Then under __Which users or groups should no longer have access?__ enter the user or group account in the textbox. Use the _domain\name format_, e.g. _CORP\Administrator_. To add multiple accounts, click + on the right. |
| Do you want to remove inherited permissions? | Select Yes to remove permissions inherited by the classified document from its parent folder. |

When finished, click __Next__ to proceed with the wizard.

To configure advanced actions or modify action settings, select the workflow and use the Advanced UI window. See [Advanced Actions for SharePoint](/docs/product_docs/dataclassification/ndc/admin/workflows/advancedwindow/sharepoint.md).
