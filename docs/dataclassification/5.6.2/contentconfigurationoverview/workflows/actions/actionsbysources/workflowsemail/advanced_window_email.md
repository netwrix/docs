---
title: "Modify Email Alert action settings"
description: "Modify Email Alert action settings"
sidebar_position: 10
---

# Modify Email Alert action settings

To modify Email Alert action settings using the **Advanced** interface:

1. In administrative web console, navigate to Workflows and select the workflow you want to
   configure email alert for.
2. Click the workflow, then click Add next to Rule Actions.
3. In the Add Action dialog, select **Email Alert** section in the Action Type list.

Specify the following settings:

| Field                   | Setting to specify                                                                                                                                                                                                                                                  |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Email Address**       | Specify email recipients. You can enter multiple static email addresses. **NOTE:** Dynamic configurations will use the '_Document Modified/Created By_' metadata value, looking up the user's email address from Active Directory where appropriate.                |
| **SMTP Config**         | Choose a preconfigured SMTP server to use when sending the email. This also defines who the email will show as being sent from. For more information, see [Email Alert](/docs/dataclassification/5.6.2/contentconfigurationoverview/workflows/actions/actionsbysources/workflowsemail/workflows_email.md) section. |
| **Subject**             | Specify the template for email subject. The template can contain dynamic values that will be obtained from the crawled content (e.g. _[cs:PageUrl]_). **TIP:** To get the list of available fields, click the **details** link.                                     |
| **Email Body Template** | Specify the template for email body. The template can contain dynamic values that will be obtained from the crawled content (e.g. _[cs:PageUrl]_). **TIP:** To get the list of available fields, click the **details** link.                                        |
