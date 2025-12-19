---
title: "Manage SMS Gateway Accounts"
description: "Manage SMS Gateway Accounts"
sidebar_position: 10
---

# Manage SMS Gateway Accounts

You can create one or more SMS gateway accounts in GroupID and link an account with an identity
store. You can also set an account as the default account, so that it is automatically linked to an
identity store created thereafter.

GroupID supports several SMS gateway providers. You can also use the Custom Gateway API to integrate
with an unsupported provider.

What do you want to do?

- [Create an SMS Gateway Account](#create-an-sms-gateway-account)
- [Modify an SMS Gateway Account](#modify-an-sms-gateway-account)
- [Set an SMS Gateway Account as Default](#set-an-sms-gateway-account-as-default)
- [Test SMS Gateway Account Connection](#test-sms-gateway-account-connection)
- [Link an SMS Gateway Account to an Identity Store](#link-an-sms-gateway-account-to-an-identity-store)
- [Delete an SMS Gateway Account](#delete-an-sms-gateway-account)

## Create an SMS Gateway Account

1. In Admin Center, click **SMS Gateway** at the bottom of the left navigation pane.
2. On the **SMS Gateways** page, do either of the following:

    - Click **Setup SMS Gateway** - This button is displayed when no gateway account exists in
      GroupID.
    - Click **Create SMS Gateway** - This button is displayed when one or more gateway accounts have
      been created in GroupID.

    The **Create SMS Gateway** page is displayed.

3. Enter a name for the gateway account in the **Name** box.
4. In the **Gateway Type** drop-down list, select an SMS gateway provider.  
   The list includes the gateways that GroupID supports and any custom SMS gateways that you have
   written. Selecting a gateway type displays the gateway URL, which is the web service address the
   SMS gateway uses for sending text messages.
5. Enter an account ID for the gateway type in the **Account ID** box.
6. Enter the username and password for the account in the **User Name** and **Password** boxes.
7. To communicate with the SMS gateway through a proxy server, click **Show Proxy Options**. This
   displays some additional fields for entering proxy settings. Enter the following proxy
   information:

    - **Proxy User Name** - the proxy user name, if required by the proxy server.
    - **Proxy Password** - the password for the user name.
    - **Description** - a description of the proxy connection.
    - **Proxy Domain** - the domain name or IP address of the proxy server.
    - **Proxy Host Name** - the host name of the proxy server.
    - **Proxy Port** - the port number the proxy uses.

8. Test the account settings:

    1. Click **Test Connection**.
    2. In the **Test SMS Gateway Connection** dialog box, enter a mobile phone number for receiving
       a test message. Use International format, with no spaces or special characters. For example:
       18588123169, 447079692712, 923225867987.
    3. Click **OK** to send the message to the mobile number.

9. Select the **Set as default account** check box to link this gateway account with the identity
   stores created from this point forward.
10. Click **Create SMS Gateway** to create the gateway account.

## Modify an SMS Gateway Account

You can update the details of an SMS gateway account, such as its name and the credentials used to
connect to the gateway.

**To modify an account:**

1. In Admin Center, click **SMS Gateway** at the bottom of the left navigation pane.  
   The **SMS Gateways** page is displayed with a list of the SMS gateway accounts that you have
   created.
2. To update a gateway account, click **Edit** for it in the **Actions** column.
3. On the **Edit SMS Gateway** page, update the required details. Refer to step 3 and onwards in the
   [Create an SMS Gateway Account](#create-an-sms-gateway-account) topic for details.

## Set an SMS Gateway Account as Default

1. In Admin Center, click **SMS Gateway** at the bottom of the left navigation pane.  
   The **SMS Gateways** page is displayed with a list of the SMS gateway accounts that you have
   created.
2. Click **Edit** for a gateway account in the **Actions** column.
3. On the **Edit SMS Gateway** page, select the **Set as default account** check box to set this
   gateway account as default, which means that it will be linked with the identity stores created
   hereafter.
4. Click **Save SMS Gateway**.

## Test SMS Gateway Account Connection

1. In Admin Center, click **SMS Gateway** at the bottom of the left navigation pane.  
   The **SMS Gateways** page is displayed with a list of the SMS gateway accounts that you have
   created.
2. Click **Test Connection** for a gateway to test whether GroupID can successfully send text
   messages through it.
3. In the **Test SMS Gateway Connection** dialog box, enter a mobile phone number for receiving a
   test message. Use International format, with no spaces or special characters. For example:
   18588123169, 447079692712, 923225867987.
4. Click **OK** to send the message to the mobile number.

## Link an SMS Gateway Account to an Identity Store

See the
[Link an SMS Gateway Account to an Identity Store](/docs/directorymanager/11.0/signin/identitystore/configure/smsauthentication.md#link-an-sms-gateway-account-to-an-identity-store)
topic.

## Delete an SMS Gateway Account

You can delete an SMS gateway account that is not linked with any identity store.

**To delete an account:**

1. In Admin Center, click **SMS Gateway** at the bottom of the left navigation pane.
2. On the **SMS Gateways** page, click **Delete** for a gateway account to delete it.
3. One of the following happens:

    - If the gateway account is not linked with an identity store, a message is displayed, asking
      you to confirm its deletion. Clicking **Delete** will delete the account.
    - If the gateway account is linked with an identity store, GroupID will not allow you to delete
      it.

See Also

- [SMS Gateway](/docs/directorymanager/11.0/signin/smsgateway/overview.md)
- [Implement and Deploy a Custom SMS Gateway](/docs/directorymanager/11.0/signin/smsgateway/implementcustom.md)
