---
title: "Configure email notifications"
description: "Set the website URL used in email links and configure the SMTP server that sends approval, command restriction, and report emails."
sidebar_position: 30
---

# Configure email notifications

Privilege Secure sends email for approval requests, approval results, command restriction actions, and subscribed reports. Email needs two settings in two places:

| Setting | Where | Purpose |
|---|---|---|
| **Website URL** | **System Settings** > **Email** | The address that links in emails point to. |
| Simple Mail Transfer Protocol (SMTP) server | **Configuration** > **Service Nodes** > `<node>` > **Email Service** > **Email Settings** | The server that delivers the email. |

## Set the website URL

Links in emails, such as the link an approver clicks to review a request, start with the **Website URL**.

1. Select **System Settings** > **Email**.
1. In **Website URL**, enter the console address in the form `https://<nps-server>:<port>`. For example: `https://<nps-server-fqdn>:6500`.
1. Click **Save**.

{/* TODO screenshot: System Settings Email panel */}

The value must be a well-formed URL. The field is empty by default.

:::warning
If **Website URL** is empty, links in approval and command restriction emails start with `http://<host>:5000`, where `<host>` is the server's host name. That address is wrong for a standard installation. Set **Website URL** to the console address.
:::

## Configure the SMTP server

The Email Service sends mail through your SMTP server. Configure it on each service node that runs the Email Service.

1. Select **Configuration** > **Service Nodes**.
1. Select the node, then select **Email Service**.
1. On the **Email Settings** tab, complete the fields in the table.
1. Click **Test Settings** to check the connection to the SMTP server.
1. Click **Save**. The **Save** and **Cancel** buttons appear at the bottom of the page after you change a field.

| Field | Description |
|---|---|
| **From Address** | The address shown in the **From** field of each email. |
| **Hostname (FQDN or IP)** | The SMTP server. |
| **Port** | The SMTP port. The field is pre-filled with 25. |
| **Use TLS** | Select to encrypt the connection to the SMTP server. |
| **Use Auth** | Select if the SMTP server requires authentication. |
| **Credentials for Connection** | The service account that signs in to the SMTP server. |

For example, to send through an unauthenticated relay on port 25, enter the relay's name in **Hostname (FQDN or IP)**, enter `privilege-secure@example.com` in **From Address**, leave **Use TLS** and **Use Auth** cleared, and click **Test Settings**.

**Test Settings** is available after you complete the required fields.

The default port is 25, with **Use TLS** and **Use Auth** cleared.

When you click **Test Settings**, enter a recipient address and click **Send Email**. The dialog shows "Test email sent. It should arrive shortly." The message has the subject "Test from Netwrix Privilege Secure", comes from your **From Address**, and carries the text in the dialog as its body. The message also appears on the **Email Queue** tab.

{/* TODO verify: that the link in an approval email opens the console. The test email has no link. */}

## View queued email

The **Email Queue** tab on the Email Service page lists outgoing notifications. Search matches the **To Address** and **Subject** columns.

## Related topics

- [Configure approval workflows](/docs/privilegesecure/26.07/configuration/access-policies/approval-workflows.md)
- [Restrict SSH commands](/docs/privilegesecure/26.07/configuration/access-policies/command-restrictions.md)
