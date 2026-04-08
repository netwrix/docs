---
title: "Netwrix Integrations Page"
description: "Netwrix Integrations Page"
sidebar_position: 40
---

# Netwrix Integrations Page

The Netwrix Integrations page provides the ability to configure access to the data in other Netwrix
products. At present, only Netwrix Threat Prevention is supported. This enables Identity Recovery to
pull object data from the integrated product and tie it with that same object's data in
Identity Recovery. Users can then view the audit history and activity data coming from
Threat Prevention for objects on the [Active Directory Page](/docs/identityrecovery/3.1/admin/activedirectory/overview.md).

Click **Configuration** in the left pane. Then click the **Netwrix Integrations** tab on the
Configuration page to open the Netwrix Integrations page.

![Netwrix Integrations page](/images/identityrecovery/3.1/product/configuration/integrations/integrations_configuration.png)

Follow the steps to configure access to the data of a Netwrix product.

**Step 1 –** On the Netwrix Integrations page, use the Auditing Product Integration drop-down menu
to select a product for integration. The menu displays the supported Netwrix products, namely
Netwrix Threat Prevention.

**Step 2 –** In the SQL Server field, enter the IP address or the server name of the SQL server
where the Threat Prevention database resides.

**Step 3 –** Select the option button for **Windows authentication** or **SQL authentication** to
set the authentication mode.

- Windows authentication uses the credentials provided on the Netwrix Recovery Server Configuration
  page of the Identity Recovery Setup wizard. See the
  [Install the Application](/docs/identityrecovery/3.1/install/application.md) topic for additional information.
- For SQL Server authentication, provide SQL credentials in the Account and Password fields. The
  account requires Read permissions on the Threat Prevention database.

**Step 4 –** Click **Test** to test the connection. A message is displayed to indicate if the test
succeeded or failed.

**Step 5 –** Identity Recovery users do not have access to audit data in Threat Prevention;
hence they cannot view it in Identity Recovery. For this reason, you must specify the account(s)
that have access to Threat Prevention. Only the users that log into Identity Recovery with any of the specified accounts will be able to fetch and view audit and activity data from Threat Prevention for domain objects.

- Click the Add account access button to add an account. The Add Account Access wizard is displayed.

    ![Add Account Access wizard - Account page](/images/identityrecovery/3.1/product/configuration/integrations/integrations_configuration_page1.png)

- Enter a user's first or last name, display name, sAMAccountName, or group name in the **Search**
  field. As you type, the system will find matches in Active Directory and display the results.
  Select the desired user and click **Next**.

    ![Add Account Access wizard - Confirm page](/images/identityrecovery/3.1/product/configuration/integrations/integrations_configuration_page2.png)

- The Confirm page displays a summary of the settings you provided on the pages of the wizard. Use
  the Back button to return to a previous page and change any setting. Click **Done** to finish
  the wizard.

The added account is displayed under Account on the Netwrix Integrations page. See the
[Integration with Threat Prevention](/docs/identityrecovery/3.1/admin/activedirectory/overview.md#integration-with-threat-prevention) topic for additional information.

**Step 6 –** Click **Save**.

Integration settings with a Netwrix product are now configured.
