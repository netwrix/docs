# Mailbox Action Module

The Mailbox action module allows you to perform bulk operations on Microsoft Exchange mailboxes, for example deleting mailbox content and modifying permissions and delegates.

__CAUTION:__ This action module can add, change, or remove permissions and delegates from an environment. Always verify the data and target mailboxes prior to executing any action.

## Mailbox Action Source Table Configuration

All data tables used in Access Analyzer action modules require the presence of certain data columns. In addition, individual action modules including Mailbox may have their own column requirements. The Mailbox action module requires a column containing mailbox names.

## Configuration

Use the New Mailbox Action Wizard to target mailboxes or folders and to define the operation to perform against the selected objects. The wizard has the following pages:

- Welcome
- [Mailbox: Operations](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/action/mailbox/operations.md)
- [Mailbox: Criteria Selection](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/action/mailbox/criteriaselection.md)
- [Mailbox: Sampling Host](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/action/mailbox/samplinghost.md)
- [Mailbox: Mailbox Identification](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/action/mailbox/identification.md)
- [Mailbox: Folder Identification](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/action/mailbox/folderidentification.md)
- [Mailbox: Folder Conditions](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/action/mailbox/folderconditions.md)
- [Mailbox: Message Conditions](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/action/mailbox/messageconditions.md)
- [Mailbox: Message Actions](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/action/mailbox/messageactions.md)
- [Mailbox: Permissions](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/action/mailbox/permissions.md)
- [Mailbox: Affected Mailboxes](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/action/mailbox/affectedmailboxes.md)
- [Mailbox: Trusted Users](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/action/mailbox/trustedusers.md)
- [Mailbox: Delegate Rights](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/action/mailbox/delegaterights.md)
- [Mailbox: Summary](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/action/mailbox/summary.md)

The Welcome page gives an overview of the action module. The steps navigation pane contains links to the pages in the wizard, which change based on the operation selected on the Operations page.

![New Mailbox Action Wizard Welcome page](/static/img/product_docs/activitymonitor/activitymonitor/install/welcome.png)

To proceed, click __Next__ or use the Steps navigation pane to open another page in the wizard.
