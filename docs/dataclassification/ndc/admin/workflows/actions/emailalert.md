# Email Alert

This action sends an email to the list of provided email address(es). When running the Workflow wizard and having selected __Email Alert__ as an action, you will be prompted to configure the related settings.

[![wizard_action_email_thumb_0_0](/static/img/product_docs/dataclassification/ndc/admin/workflows/actions/wizard_action_email_thumb_0_0.png)](/docs/product_docs/dataclassification/resources/images/workflows/wizard_action_email.png)

In the case where the Workflow is configured against a SharePoint source / group (or, the generic “All Sources” for SharePoint) the action will optionally support a dynamic recipient selection against either the creator or last modifier of the document (provided by the SharePoint document metadata).

Specify the following:

| Field | Settings to specify |
| --- | --- |
| Specific recipients | Specify email address to send the alert to. To enter multiple recipient, click __+__ on the right. |
| Who should the email be sent from? | Specify email sender and SMTP server settings. You can select a pre-configured SMTP server (if any), or specify new connection parameters by clicking the + on the right — then in the __Email Server Details__ dialog enter the following:   - Host—Enter your SMTP server address. It can be your company's Exchange server or any public mail server (e.g., Gmail, Yahoo). - Port—Specify your SMTP server port number. - Use SSL—Select this checkbox if your SMTP server requires SSL to be enabled. - From Email—Enter the address that will appear in the From field. - Username—Enter a user name for the SMTP authentication. - Password—Enter a password for the SMTP authentication.   __NOTE:__ It is recommended to use Test Configuration Settings option. The system will send a test message to the specified email address and inform you if any problems are detected. |

[![action_email_smtp_thumb_0_0](/static/img/product_docs/dataclassification/ndc/admin/workflows/actions/action_email_smtp_thumb_0_0.png)](/docs/product_docs/dataclassification/resources/images/workflows/action_email_smtp.png)

When finished, slick __Save__ to close the dialog and return to email action settings.

| Field | Settings to specify |
| --- | --- |
| Email Subject | Specify the template for email subject.  The template can contain dynamic values that will be obtained from the crawled content (e.g. _[cs:PageUrl]_).  __TIP:__ You can select the corresponding fields from __Add a Merge Field__ list on the right. |
| Email Body Template | Specify the template for email body.  The template can contain dynamic values that will be obtained from the crawled content (e.g. _[cs:PageUrl]_).  __TIP:__ You can select the corresponding fields from __Add a Merge Field__ list on the right. |

To modify action settings for the certain workflow, select the workflow and use the Advanced UI window, as described in the [Modify Email Alert action settings](/docs/product_docs/dataclassification/ndc/admin/workflows/advancedwindow/modifyemailalertaction.md#Modify-Email-Alert-action-settings) section.
