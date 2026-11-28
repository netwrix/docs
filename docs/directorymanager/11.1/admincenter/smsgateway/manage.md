---
title: "Manage SMS Gateway Accounts in Directory Manager"
description: "Create, edit, test, set as default, link, and delete SMS gateway accounts in Admin Center so Directory Manager can send text messages."
keywords:
  - SMS gateway account
  - Admin Center
  - default SMS gateway
  - test SMS gateway connection
  - identity store
sidebar_position: 10
---

# Manage SMS Gateway Accounts in Directory Manager

You can create one or more SMS gateway accounts in Directory Manager and link an account with an identity store. You can also set an account as the default account. Directory Manager then links it automatically to each identity store you create afterward.

Directory Manager supports several SMS gateway providers. To integrate with an unsupported provider, use the Custom Gateway API.

## Create an SMS gateway account

1. In Admin Center, click **SMS Gateway** at the bottom of the left navigation pane.
2. On the **SMS Gateways** page, do either of the following:

   - Click **Setup SMS Gateway**. This button appears when no gateway account exists in Directory Manager.
   - Click **Create SMS Gateway**. This button appears when one or more gateway accounts exist in Directory Manager.

   The **Create SMS Gateway** page appears.

3. Enter a name for the gateway account in the **Name** box.
4. In the **Gateway Type** dropdown list, select an SMS gateway provider.

   The list includes the gateways that Directory Manager supports and any custom SMS gateways that you have written. Selecting a gateway type displays the gateway URL, which is the web service address the SMS gateway uses for sending text messages.

5. Enter an account ID for the gateway type in the **Account ID** box.
6. Enter the username and password for the account in the **User Name** and **Password** boxes.
7. To communicate with the SMS gateway through a proxy server, click **Show Proxy Options**. Additional fields for proxy settings appear. Enter the following proxy information:

   - **Proxy User Name** - the proxy user name, if required by the proxy server.
   - **Proxy Password** - the password for the user name.
   - **Description** - a description of the proxy connection.
   - **Proxy Domain** - the domain name or IP address of the proxy server.
   - **Proxy Host Name** - the host name of the proxy server.
   - **Proxy Port** - the port number the proxy uses.

8. Test the account settings:

   1. Click **Test Connection**.
   2. In the **Test SMS Gateway Connection** dialog box, enter a mobile phone number for receiving a test message. Use international format, with no spaces or special characters. For example: 18588123169, 447079692712, 923225867987.
   3. Click **OK** to send the message to the mobile number.

9. Select the **Set as default account** checkbox to link this gateway account with the identity stores created from this point forward.
10. Click **Create SMS Gateway** to create the gateway account.

## Modify an SMS gateway account

You can update the details of an SMS gateway account, such as its name and the credentials used to connect to the gateway.

**To modify an account:**

1. In Admin Center, click **SMS Gateway** at the bottom of the left navigation pane.

   The **SMS Gateways** page appears with a list of the SMS gateway accounts that you have created.

2. To update a gateway account, click **Edit** for it in the **Actions** column.
3. On the **Edit SMS Gateway** page, update the required details. For details, refer to step 3 and onward in [Create an SMS gateway account](#create-an-sms-gateway-account).

## Set an SMS gateway account as default

1. In Admin Center, click **SMS Gateway** at the bottom of the left navigation pane.

   The **SMS Gateways** page appears with a list of the SMS gateway accounts that you have created.

2. Click **Edit** for a gateway account in the **Actions** column.
3. On the **Edit SMS Gateway** page, select the **Set as default account** checkbox. Directory Manager then links this gateway account with identity stores created afterward.
4. Click **Save SMS Gateway**.

## Test an SMS gateway account connection

1. In Admin Center, click **SMS Gateway** at the bottom of the left navigation pane.

   The **SMS Gateways** page appears with a list of the SMS gateway accounts that you have created.

2. Click **Test Connection** for a gateway to test whether Directory Manager can send text messages through it.
3. In the **Test SMS Gateway Connection** dialog box, enter a mobile phone number for receiving a test message. Use international format, with no spaces or special characters. For example: 18588123169, 447079692712, 923225867987.
4. Click **OK** to send the message to the mobile number.

## Link an SMS gateway account to an identity store

See the [Link an SMS Gateway Account to an Identity Store](/docs/directorymanager/11.1/admincenter/identitystore/configure/smsauthentication.md#link-an-sms-gateway-account-to-an-identity-store) topic.

## Delete an SMS gateway account

You can delete an SMS gateway account that isn't linked with any identity store.

**To delete an account:**

1. In Admin Center, click **SMS Gateway** at the bottom of the left navigation pane.
2. On the **SMS Gateways** page, click **Delete** for a gateway account to delete it.
3. One of the following happens:

   - If the gateway account isn't linked with an identity store, a message asks you to confirm its deletion. Click **Delete** to delete the account.
   - If the gateway account is linked with an identity store, Directory Manager blocks the deletion.
