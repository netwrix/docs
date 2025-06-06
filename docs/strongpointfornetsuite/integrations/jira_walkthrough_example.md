# Jira Walkthrough Example

This walkthrough is one example based on our test account. You must [install and configure](/docs/product_docs/strongpointfornetsuite/integrations/jira_integration.md) the Jira integration, including setting up the __[Jira Statuses](/docs/product_docs/strongpointfornetsuite/integrations/jira_integration.md#Jira-Statuses)__ prior to using this walkthrough.

The walkthrough demonstrates these steps:

- [Create a Jira Ticket](#Create-a-Jira-Ticket)
- [Enter your Credentials](#Enter-your-Credentials)
- [Add Customizations](#Add-Customizations)
- [Perform Risk Assessment](#Perform-Risk-Assessment)
- [Ready for Development](#Ready-for-Development)
- [Deploy Changes and Complete the Ticket](#Deploy-Changes-and-Complete-the-Ticket)

## Create a Jira Ticket

1. Login to your Jira account.
2. Open a Project.
3. Click __Create__ (__+__).

   ![jira_example_create_issue](/static/img/product_docs/strongpointfornetsuite/integrations/jira_example_create_issue.png)
4. Enter your information on the __Create issue__ form:

   - __Project__: Select your Project. __NS & SF Jira Demo (SJD)__ is selected for this example.
   - __Issue Type__: Select your Jira type. __Task__ is selected for this example.
   - __Summary__: Add a name
   - __Description__ (optional)
5. Click __Create__.

Alerts and notifications may occur during this walkthrough, and are not included in these steps. For example, override alert, notifications for approvers, and notification for the change request.

## Enter your Credentials

1. Open your new Jira ticket. If you look at the __Open Change Request__, the status is __Not logged in your account__.
2. Expand __Comments__ and select __Strongpoint NetSuite__.

   ![jira_example_credentials](/static/img/product_docs/strongpointfornetsuite/integrations/jira_example_credentials.png)
3. Select your NetSuite __Account__ and enter your __Consumer Key__/__Secret__ and __Token ID__/__Secret__. If your account has an optional _[Integration User](/docs/product_docs/strongpointfornetsuite/integrations/jira_integration.md#Integration-User)_ role, enter the Email and Password credentials supplied by your administrator

   ![Check Token Based Authentication](/static/img/product_docs/strongpointfornetsuite/integrations/jira_token_authentication.png)
4. Click __Connect__. If the connection is successful, the form is displayed (see [Add Customizations](#Add-Customizations) section). The __Synchronized with__status displays the account you are logged into for NetSuite.

You cannot login if you do not have the __appropriate role permissions to create a Change Request__.

If you do not enter the correct email or password, an error is displayed. After six unsuccessful consecutive attempts to login, your account is suspended for 30 minutes.

![jira_example_credentials_error](/static/img/product_docs/strongpointfornetsuite/integrations/jira_example_credentials_error.png)

## Add Customizations

Once you have logged in, the form is displayed.  
![Jira Strongpoint form](/static/img/product_docs/strongpointfornetsuite/release_notes/jira_strongpoint_form.png)

- __Synchronized with__ displays the connected account. Click __Change Account__ to switch to a different Account.
- __Policy__ is blank until Customizations have been added. The Policy is determined by the Customization with the strictest policy.
- __Affected Bundle ID__ can be added to the ticket. Enter the ID in the __Add Bundle ID__ entry box and click (__+__) to add it. You can delete an Affected Bundle ID with the ![delete](/static/img/product_docs/strongpointfornetsuite/integrations/delete.png)icon.
- __Change Level Required__ is __Log Changes Only__ until Customizations have been added. If there are multiple change levels, the most stringent one is applied.
- Specify the Customizations you are changing or adding.
  - __Lookup Customization__ search for a customization. If the Customization exists in your account, it is added to the __Existing Customizations__ list.
  - __Import Customization__ if you have either an __xml__ file generated from an existing ticket, or an __SDF zip__ file created in your Sandbox account, you can import the customizations. Click __Import Customization__, navigate to your file, and click __Import__.  
    Modified customizations are added to the __Existing Customizations__ list, new customizations are added to the __Proposed Customizations__ list.
  - __Add Proposed Customization__ adds a new customizations are added to the __Proposed Customizations__ list. You can delete added Customizations with the ![delete](/static/img/product_docs/strongpointfornetsuite/integrations/delete.png)icon.
- __Push__ creates the Change Request in NetSuite. __Push__ is also used to manually update your Change Request if you are not using the [Automatic Synchronization](/docs/product_docs/strongpointfornetsuite/integrations/jira_integration.md#Automatic-Synchronization) feature.
- __Push External__ same as __Push__ except you can specify a different Jira account.
- __Impact Analysis__ and __View ERD__ are tools to [Perform Risk Assessment](#Perform-Risk-Assessment).

### Add Existing Customizations by Name or Script ID

1. Click __Lookup Customization__.
2. Enter all or part of a Name.. For this example, enter __new__.
3. Click __+__ to search for matching Customizations. __View__ displays the __Type__ and __Script ID__ for a Customization.

   ![Add a Customization by Name](/static/img/product_docs/strongpointfornetsuite/integrations/jira_example_add_name.png)
4. Select one or more Customizations. For this example, select __New Opportunities Created (Search)__.
5. Click __Add Selected Customizations__. The selected Customization is added to the __Existing Customizations__ list.

   ![New Opportunities Created (Search) added to Existing Customizations](/static/img/product_docs/strongpointfornetsuite/integrations/jira_example_new_opp.png)
6. Enter the Script ID __custentity\_fmt\_cust\_credit\_on\_hold__ in __Add Customizations__ and click __+__.
7. The __Set Customer Credit on Hold (Entity Field)__ is displayed. Select it, and click __Add Selected Customizations__. The selected Customization is added to the __Existing Customizations__ list. The __Change Level Required__ changes from __Log Changes Only__ to __Change Request__, which is the policy for the __Set Customer Credit on Hold__ field.

### Add Proposed Customizations

In this procedure, we are adding a new Customization.

1. Enter a new, valid Script ID in the __Add Customizations__ field. For this example, enter __customlist\_customer\_priorities__.
2. Click (__+__) to add it. If the Script ID is valid, and does not match an existing Script ID, the new Customization is added to the __Proposed Customizations__ list.

   ![Customization added to Proposed Customization list](/static/img/product_docs/strongpointfornetsuite/integrations/jira_example_proposed_customization.png)

### Create the Change Request

If you expand the __Change Request__ field on the right, the status is __Not Synced with Strongpoint__.

1. Change the Jira status of your ticket to match the status set up for __Jira Statuses for In Progress Status__. For example, __In Progress__.
2. Click __Push__ to create the Change Request. This step is required for both manual and automatic synchronization. A confirmation your Change Request was Created/Updated is displayed. The change request is created in NetSuite with the __In Progress__ status. If you mapped some of your Jira statuses, then __Push__ is only available those mapped statuses.
3. Expand the __Change Request__ field on the right. The status is now __In Progress__. There is a link to open the Change Request in NetSuite.

   ![Change Request set to In Progress](/static/img/product_docs/strongpointfornetsuite/integrations/jira_example_in_progress.png)

### Import Customizations from Jira

In this procedure, we are adding customizations exported into an xml file. This is not required, but is an alternative if you have a lot of customizations.

1. Click __Import Customization__.

   ![Import customizations from an xml file.](/static/img/product_docs/strongpointfornetsuite/integrations/jira_import_cust.png)
2. Click __Choose File__, navigate to your xml file and click __Open__.
3. Click __Import__. The customizations appear in the __Existing Customizations__ list.

   ![The customizations appear in the Existing Customizations list.](/static/img/product_docs/strongpointfornetsuite/integrations/jira_import_cust2.png)

## Perform Risk Assessment

### Impact Analysis

The impact analysis tool reviews your customizations for dependencies or risks. Click __Impact Analysis__ to run the tool. Here is an example report:

![Impact analysis report](/static/img/product_docs/strongpointfornetsuite/integrations/jira_example_impact_analysis.png)

Before proceeding with your changes, review each warning to ensure your change does not break something. Dependencies can easily be reviewed with the ERD tool.

### View ERD

The Entity Relationship Diagram (ERD) tool graphically displays your Customizations and all dependencies.

1. Click __View ERD__.
2. Select the Customization to view from the list. For this example, select __Set Customer Credit on Hold (Entity Field)__.
3. When the diagram opens, you can explore the dependencies to evaluate the effect of your intended changes.

   ![Run the ERD to view dependencies](/static/img/product_docs/strongpointfornetsuite/integrations/jira_example_erd.png)

## Ready for Development

Once you have resolved any risk or conflicts, your changes are ready for development:

1. Change the Jira status of your ticket to match the status set up for __Jira Statuses for Pending Approval Status__. For example, __Selected for Development__.
2. Click __Push__ if you are not using [Automatic Synchronization](/docs/product_docs/strongpointfornetsuite/integrations/jira_integration.md#Automatic-Synchronization) to push status changes. A confirmation your Change Request was Created/Updated is displayed.
3. Expand the __Change Request__ field on the right. The status is now __Pending Approval__. There is a link to open the Change Request in NetSuite.

   ![Change Request is set to Pending Approval](/static/img/product_docs/strongpointfornetsuite/integrations/jira_example_pending_approval.png)
4. Click the __Go To Record__ link to view the Change Request.

   ![Change Request is Pending Approval](/static/img/product_docs/strongpointfornetsuite/integrations/jira_example_change_request.png)

## Deploy Changes and Complete the Ticket

When development is done, and the Change Request is approved according to your policy, the Jira ticket is ready to be updated.

1. Expand the __Change Request__ field on the right. The status is __Approved__.  
   ![Change Request is now Approved](/static/img/product_docs/strongpointfornetsuite/integrations/jira_example_approved.png)
2. Change the Jira status of your ticket to match the status set up for __Jira Statuses for Approved Status__. In our example set up, we have two possible statuses: __Ready for Deployment__ and __Done__. Setting up two statuses enables you to split up the deployment and the ticket closure if you want to monitor the deployment task separately. Both statuses are valid for Deployment, but only __Done__ closes the Jira ticket and updates the Change Request to __Completed__.
3. Click __Push__ if you are not using [Automatic Synchronization](/docs/product_docs/strongpointfornetsuite/integrations/jira_integration.md#Automatic-Synchronization) to push status changes. A confirmation your Change Request was Created/Updated is displayed.
4. If you used __Ready for Deployment__, update your Jira status to __Done__ once your deployment and verification activities are complete.

If you open the Change Request in NetSuite:

- All Customizations added from Jira are displayed.
- __Affected Bundle ID__ is added (if used).
- __Change Overview__ is set to the Jira ticket description.
- Change Request is __Approved__ and ready to be deployed.
- __Originated System__, __External Change Request Number__ and __External Link__ to the Jira ticket are populated on the __Related Change Records__ tab.
- If the Jira status is __Done__, the Change Request shows as __Completed__.

  ![The completed change request](/static/img/product_docs/strongpointfornetsuite/integrations/jira_example_completed.png)
