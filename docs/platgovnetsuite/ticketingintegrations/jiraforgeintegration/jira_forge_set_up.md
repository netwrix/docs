---
title: "Jira Forge Set Up"
description: "Jira Forge Set Up"
sidebar_position: 2
---

# Jira Forge Set Up

The steps below show detailed instructions and prerequisites on how to set up Platform Governance Jira Integration.

## Prerequisites

- Install the latest Netwrix Platform Governance(Strongpoint) bundle
- Install the latest Netwrix Platform Governance Jira bundle
- Install the latest version of the Netwrix Platform Governance Jira Forge app
- Set up NetSuite Token-based Authentication Credentials
- Set up Jira Credentials
- Set up Jira Status Mapping
- Set up Jira Project Keys
- Set up Jira TBA Credentials

### Install the latest Netwrix Platform Governance(Strongpoint) bundle

Netwrix Platform Governance(Strongpoint) bundle is a key prerequisite for Jira Forge to work. It is required that your NetSuite account is installed with the latest version or at least **7.7.5** or above. 

For installation details you may refer to the installation guide found in [Installing Platform Governance for NetSuite](/docs/platgovnetsuite/installation/installing_strongpoint).

#### NOTE: 
If the latest version of the bundle is already installed, you may skip this part.

### Install the latest Netwrix Platform Governance Jira bundle

This step will require a user to have NetSuite account access and an Administrator role to that account. This bundle must be version **2.0** or higher to work properly. The Netwrix Platform Governance Jira bundle is a non-managed bundle, please check for community update regularly for announcements. 

#### NOTE:
If the latest version of the bundle is already installed, you may skip this part.

1. Log in to the NetSuite account and navigate to Search & Install Bundles page.
    - In the Dashboard main menu: **Customization > SuiteBundler > Search & Install Bundles**
2. In the KEYWORDS field, search for **311231**. This is the bundle ID for Netwrix Platform Governance Jira bundle


![Jira Forge Bundle Search](/images/platgovnetsuite/integrations/jira_forge_jira_bundle_search.webp)

3. Click on Netwrix Platform Governance Jira bundle in the search results.
4. Click Install when the Bundle Details opens.
5. Click Install Bundle on the Preview Bundle Install page.

### Install the latest version of the Netwrix Platform Governance Jira Forge app

This process will require a user to access to Atlassian Marketplace and an Administrator role to the Jira instance where the app will be installed.

1. Go to the [Atlassian Marketplace](https://marketplace.atlassian.com/).
2. In the search bar, type in either of the keywords: **Netwrix Platform Governance** or **Strongpoint**(this is the product's previous name).
3. You should see a number of products displayed, select **Netwrix NS Platform Governance (formerly Strongpoint)-Forge**.


![Jira Forge Marketplace Search](/images/platgovnetsuite/integrations/jira_forge_marketplace_search_results.webp)

4. After selecting, you should be redirected to the product's overview page.


![Jira Forge Marketplace Overview](/images/platgovnetsuite/integrations/jira_forge_marketplace_overview.webp)

5. Click the **Get it now** button found at the upper-right part of the page.
6. You will now be redirected to the installation process. Select the Jira instance where you want to install Netwrix Platform Governance Forge


![Jira Forge Marketplace Select Site](/images/platgovnetsuite/integrations/jira_forge_marketplace_select_site.webp)

7. Click **Review**
8. You are now in the last step where you can review the app's Permissions and Data management. All of these have been strictly reviewed by the Atlassian team and adhere to their security policies. When ready, click **Get it now** button.


![Jira Forge Marketplace Review](/images/platgovnetsuite/integrations/jira_forge_marketplace_review_install.webp)

### Set up NetSuite Token-based Authentication Credentials

This step will require a user to have NetSuite account access and an Administrator role to that account.

Token Based Authentication is set up through NetSuite. Here is the basic process:

1. NetSuite Administrator creates an Integration Record for the Platform Governance for NetSuite application. This only needs to be performed once per account. Open **Setup > Integration > Integration Management > Manage Integrations > New**. For more information, refer to the NetSuite help article Create Integration Records for Applications to Use TBA. To view a list of integration records in this account, open **Setup > Integration > Integration Management > Manage Integrations**.

    #### NOTE: 
    Please take note and keep these values to yourself.

2. Each user creates their token in NetSuite. Refer to the NetSuite help Manage TBA Tokens in the NetSuite UI for details. Once you have created your tokens, add them to Jira.
3. Create an Access Token by navigating to main menu, **Setup > Users/Roles > Access Tokens > New**.
4. Fill the fields with the following values:
    - Application Name: The Integration Record that was created in Step 1.
    - User: Select yourself (Employee Record).
    - Role: STRONGPOINT DEVELOPER ROLE
    - Token Name: ***Token name of your choice***
    - Skip checking Inactive checkbox
5. Click 'Save'.

    #### NOTE: 
    You can also create a Token Based Authentication for you NetSuite Administration role. Follow the steps below:
    1. Login as an **Administrator** role in NetSuite.
    2. In your NetSuite account dashboard, navigate to the bottom left part of the page. Under **Settings**, you should see **Manage Access Tokens** and be able to click the link.


    ![Jira Forge NetSuite Admin TBA](/images/platgovnetsuite/integrations/jira_forge_netsuite_tba_admin.webp)

    3. You should be redirected to **My Access Tokens** page. Click the **New My Access Token** button, this allows you to create a TBA record for your Administrator role.
    4. Select an Application Name(Integration record) for this token.
    5. Click **Save**.
    
    **IMPORTANT:** Please take note and keep these values to yourself.

### Set up Jira Credentials

This step will require a user to have Jira instance access and a user to have NetSuite account access.

1. Create a Jira token via this URL: https://id.atlassian.com/manage-profile/security/api-tokens
    - Take note of the token value as this will be associated with you email address that is used to login to the Atlassian/Jira ecosystem. Refer to the Atlassian documentation to obtain a Token.
2. In this step, you should have the following credentials on hand
    - Jira user email address
    - Jira token generated above.
3. In NetSuite, go to Netwrix Configuration and Stats by navigating in the main menu, **Netwrix > Netwrix Support > Installation Settings**. There should only be **ONE(1)** record displayed. Click 'Edit' and it should open the Configuration and Stats page.
4. Click 'Jira Integration' tab. You should be able to see a number of fields. Turn your attention to Jira User and Jira Token fields.
5. Populate these fields with the following values:
    - Jira User - Jira user email address in step 2.
    - Jira token - Jira token generated in step 1.
Click 'Save'.

### Set up Jira Status Mapping

To take advantage of the automatic synchronization feature, we recommend reviewing your Jira statuses to be mapped to the Change Management statuses. When a ticket status is updated to a mapped status, Platform Governance for NetSuite handles the synchronization between Jira and NetSuite.

The mapping allows multiple Jira statuses to map to each Change Request status. The mapping is part of the Configure NetSuite and Jira procedure.

Refer to the Atlassian documentation for instructions on
[Defining status field values](https://confluence.atlassian.com/adminjiraserver070/defining-status-field-values-749382903.html?_ga=2.262596428.1900070949.1572132057-2138500458.1540834491).

1. In NetSuite, go to Netwrix Configuration and Stats by navigating in the main menu, **Netwrix > Netwrix Support > Installation Settings**. There should only be **ONE(1)** record displayed. Click 'Edit' and it should open the Configuration and Stats page.

Enter the mappings between your Jira statuses and the Change Request statuses. For best practice, define your Jira statuses prior to this step. You can enter multiple Jira statuses for each Change Request status, separated by commas. For example, Ready for Deployment,Done. Assign your relevant mapping for each of the Change Request statuses:

**Jira Statuses for In Progress Status**

**Jira Statuses for Pending Approval Status**

**Jira Statuses for Approved Status**

**Jira Statuses for Complete Status**

**Jira Statuses for Rejected Status**

**Jira Statuses for Canceled Status**

2. Check Automatic Synchronization to enable Platform Governance for NetSuite to handle the synchronization between Jira and NetSuite when a Ticket status is updated to a mapped status, without having to click Push. If you are using an account where you do not want to create a Change Request, leave this unchecked so you can do your research or testing without generating Change Requests.

3. Check Allow NS to Jira Push to enable pushing NetSuite change requests into Jira. Otherwise, you can leave it as unchecked if you do not need to enable this feature.

Click 'Save'

### Set up Jira Project Keys

This step will require a user to have Jira instance access where Netwrix Platform Governance for NetSuite Jira Forge app is installed. You are now closer to using the integration app.

1. In your browser, open your Jira application.
2. In the left part of the page, there is a sidebar that lists shortcuts and apps that are installed in this Jira instance. Under 'Your Apps', there should be an app that is titled 'Netwrix NetSuite Settings'. Click it and it should display the Netwrix NetSuite Settings page.


![Jira Forge Netwrix NetSuite Settings Menu](/images/platgovnetsuite/integrations/jira_forge_netwrix_netsuite_settings_menu.webp)

3. The page has 2 tabs, Netwrix NetSuite TBA Credentials and Netwrix NetSuite Project Keys. Let's focus on 'Netwrix NetSuite Project Keys' tab. Click the tab.


![Jira Forge Netwrix NetSuite Settings Project Keys](/images/platgovnetsuite/integrations/jira_forge_netwrix_netsuite_project_keys_menu.webp)

4. 'New Project Key' button should be displayed. Click the button and a modal should pop-out for you to add a Project Key in the field.
    - By defining a Project Key, the Platform Governance app can only be displayed and used within the project.


![Jira Forge Netwrix NetSuite Settings Project Keys Modal](/images/platgovnetsuite/integrations/jira_forge_project_key_modal.webp)

5. Click 'Create' and the newly added/created project key should be listed in the page.

### Set up Jira TBA Credentials

This step will require a user to have Jira instance access where Netwrix Platform Governance for NetSuite Jira Forge app is installed. You are now closer to using the integration app.

1. In your browser, open your Jira application.
2. In the left part of the page, there is a sidebar that lists shortcuts and apps that are installed in this Jira instance. Under 'Your Apps', there should be an app that is titled 'Netwrix NetSuite Settings'. Click it and it should display the Netwrix NetSuite Settings page.


![Jira Forge Netwrix NetSuite Settings Menu](/images/platgovnetsuite/integrations/jira_forge_netwrix_netsuite_settings_menu.webp)

3. The page has 2 tabs, Netwrix NetSuite TBA Credentials and Netwrix NetSuite Project Keys. Let's focus on 'Netwrix NetSuite TBA Credentials' tab. Click the tab.


![Jira Forge Netwrix NetSuite Settings Menu TBA](/images/platgovnetsuite/integrations/jira_forge_netwrix_netsuite_settings_tba.webp)

4. 'New Token Based Authentication' button should be displayed. Click the button and a modal should pop-out for you to add a new TBA record to be used to connect to a NetSuite account.


![Jira Forge Netwrix NetSuite Settings Menu TBA Modal](/images/platgovnetsuite/integrations/jira_forge_netwrix_netsuite_settings_tba_modal.webp)

    - Populate the fields.
    - A 'Test Connection' button (yellow) can be found inside the modal, this button is used to test or check if the credentials and account you have are valid.


![Jira Forge Netwrix NetSuite Settings TBA Test Connection](/images/platgovnetsuite/integrations/jira_forge_tba_test_connection_successful.webp)

5. Click 'Create' and the newly added/created TBA record should be listed in the page.

Additionally, 'Update' and 'Delete' buttons are found at the right part of your record. These buttons allow you to update or delete the record, respectively.


![Jira Forge Netwrix NetSuite Settings TBA List](/images/platgovnetsuite/integrations/jira_forge_tba_list.webp)

If you have followed the step by step guide in this page, you are good to go and is ready to use the integration app. 

The next page, Jira Forge Walkthrough will show you how the app works!

**Next Step:** [ Jira Forge Walkthrough Example](/docs/platgovnetsuite/ticketingintegrations/jiraforgeintegration/jira_forge_walkthrough)
