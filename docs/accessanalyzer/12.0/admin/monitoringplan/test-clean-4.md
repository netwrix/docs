# Configure Email Notifications

Email notifications alert your team when Access Analyzer detects a security event that matches a monitoring rule.

## Prerequisites

Before you configure email notifications, verify the following:

- You have administrative privileges.
- You have a configured, active monitoring plan with at least one alert rule.
- Your organization's SMTP server is reachable from the Access Analyzer server.

## Connect to the SMTP Server

1. Navigate to **Settings** > **Notifications** > **Email**.
2. Enter the SMTP server address in the **Server** field.
3. Enter the port number in the **Port** field. The default is `587` for TLS connections.
4. Enter the sender address in the **From** field. Access Analyzer sends all notification emails from this address.
5. If your SMTP server requires authentication, select the **Use authentication** checkbox and enter the credentials.
6. Click **Test Connection** to verify that Access Analyzer can reach the SMTP server.
7. Click **Save**.

## Add Notification Recipients

After you connect to the SMTP server, add the recipients who receive alert emails:

1. Navigate to **Settings** > **Notifications** > **Recipients**.
2. Click **Add Recipient**.
3. Enter the recipient's email address.
4. Select one or more alert categories from the **Categories** dropdown. Each category corresponds to a type of security event, such as **Unauthorized Access** or **Policy Violation**.
5. Click **Save**.

Repeat these steps for each additional recipient.

:::tip
Create a distribution list on your mail server and add it as a single recipient. This approach simplifies management when team members change.
:::

## Test the Configuration

After you add recipients, verify that notifications work:

1. Navigate to **Settings** > **Notifications** > **Email**.
2. Click **Send Test Email**.
3. Check the inbox of each recipient for the test message.

:::warning
If the test email doesn't arrive, verify the settings in the **Connect to the SMTP Server** section and check your mail server's spam or quarantine folder. Access Analyzer logs SMTP errors in **Settings** > **Logs** > **Notifications**.
:::
