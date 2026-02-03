---
title: "Jira Forge Walkthrough"
description: "Jira Forge Walkthrough"
sidebar_position: 10
---

# Jira Forge Walkthrough

If you have reached this part it means that you have completed the ALL prerequisites found in the Jira Forge Setup page. If NOT, please go through the setup steps for a smooth walkthrough of the integeration's features.

This walkthrough is one example based on our test account. You must install and configure the Jira integration, including setting up the Jira Statuses prior to using this walkthrough.

### The walkthrough demonstrates these steps:

- Create a Jira Ticket
- Logging In and Connecting to a Netsuite Account
- Add or Remove Customizations
- Importing Customizations
- Perform Risk Assessment
- View Entity Relation Diagram
- Ready for Development
- Deploy Changes and Complete the Ticket
- Other notable features

### Create a Jira Ticket
1. Login to your Jira account.
2. Open a Project.
3. Click Create (+).
4. Fill the necessary fields and Click 'Create'

### Logging In and Connecting to a Netsuite Account
Before proceeding to this step, make sure you already have create a TBA record. If not please see [Set up Jira TBA Credentials](/docs/platgovnetsuite/ticketingintegrations/jiraforgeintegration/jira_forge_set_up#set-up-jira-tba-credentials) in Setup page.

1. In your issue ticket, you should see the 'Netwrix Netsuite Forge' tab in the issues tab. Click the tab.
    Two(2) possible displays:

        1.a If you have NOT executed [Set up Jira Project Keys](/docs/platgovnetsuite/ticketingintegrations/jiraforgeintegration/jira_forge_set_up#set-up-jira-project-keys) in the Setup Page, you will see this message displayed "Only projects defined in the Netwrix Settings page can use this integration". Please check if you have done that part.


        ![Jira Forge Issue No Project Key](/images/platgovnetsuite/integrations/jira_forge_issue_no_project_key.webp)

        1.b If you have, you should see the connect page where you can connect or log in to a Netsuite defined in [Set up Jira TBA Credentials](/docs/platgovnetsuite/ticketingintegrations/jiraforgeintegration/jira_forge_set_up#set-up-jira-tba-credentials) in Setup page.


        ![Jira Forge Issue Connect Form](/images/platgovnetsuite/integrations/jira_forge_issue_connect_form.webp)

2. If you are seeing the connect fields, you are in the right track. Please select a Netsuite account to connect to.
3. Upon selecting an account, the app loads. It is establishing the initial connection process. Once it is successful, the "Connect" button below should be enabled. Otherwise, please double check the TBA credentials that you have entered in [Set up Jira TBA Credentials](/docs/platgovnetsuite/ticketingintegrations/jiraforgeintegration/jira_forge_set_up#set-up-jira-tba-credentials) in Setup page.


![Jira Forge Issue Connect Form Successful](/images/platgovnetsuite/integrations/jira_forge_issue_connect_form_successful.webp)

4. Click "Connect" button.
5. You should see the ITGC Form for our Jira app. Change Request data is loaded, it also shows which account where you are currently connected.


![Jira Forge Issue Connect Form Successful ITGC](/images/platgovnetsuite/integrations/jira_forge_connect_itgc_form.webp)

### Add or Remove Customizations

Now that you are ready to attach customizations to your Jira ticket. This section shows you how to add and/or remove customizations in the Forge app.

To start adding or removing customizations, follow the steps below:

1. In the form, there should be a button named "Lookup Customization". This allows the user to add existing customization to the Jira ticket. Click the button. A modal should appear. This allows the user to filter an select a customization to attach to the change request.


Available filters:
- Name
- Script ID
- Type
- Bundle ID
- Modified By
- From
- To


![Jira Forge Lookup Customization Modal](/images/platgovnetsuite/integrations/jira_forge_lookup_customization_modal.webp)

2. Choose a filter to narrow down the selection of customizations. In this case, we will use the Name filter. Click the "Lookup" button.


![Jira Forge Lookup Customization Modal Name Filter](/images/platgovnetsuite/integrations/jira_forge_lookup_name_filter.webp)

3. Select a customization to attach by ticking the checkbox beside tha name. Once ticked, click the "Add Customizations" button at the botton part of the modal.
    - Below shows a flag with a message that the action is in progress.


    ![Jira Forge Add Customization Flag In Progress](/images/platgovnetsuite/integrations/jira_forge_add_customization_in_progress.webp)

    - Below shows a flag with a message that the action is successful.


    ![Jira Forge Add Customization Flag In Progress](/images/platgovnetsuite/integrations/jira_forge_successful_add_customization.webp)

4. You can also add customization that is yet to be created. This is what the "Proposed Customization" button is for. To add one, click the "Proposed Customization" button. A modal should appear with the following fields:
    - Type
    - ScriptID/Name


    ![Jira Forge Proposed Customization Modal](/images/platgovnetsuite/integrations/jira_forge_proposed_customization_modal.webp)

5. Select the Type for your proposed customization. In this case, we will select "Body Field" type. Notice that the Script ID/Name field is prepopulated with the prefix of the script ID, this allows the user ease of use and not mistakenly input the wrong script ID prefix for the type. Type the script ID of your choice.


    ![Jira Forge Proposed Customization Input](/images/platgovnetsuite/integrations/jira_forge_add_proposed_wth_input.webp)
6. Click the "Add Proposed Customization" button to add/attach it to the Jira ticket change request.
    - Below shows a flag with a message that the action is in progress.


    ![Jira Forge Proposed Customization Flag In Progress](/images/platgovnetsuite/integrations/jira_forge_add_proposed_in_progress.webp)    

    - Below shows a flag with a message that the action is successful.


    ![Jira Forge Proposed Customization Flag Successful](/images/platgovnetsuite/integrations/jira_forge_add_proposed_successful.webp) 

Below shows the existing and proposed customiations that were added in steps 1 through 6.


![Jira Forge Existing and Proposed Customizations](/images/platgovnetsuite/integrations/jira_forge_existing_and_proposed_customizations_added.webp)       

7. If you can add existing and/or proposed customizations, you also remove them from the Jira ticket change request. Simple click the "trash" icon located at the right side of the customization's name and will trigger the remove process.


![Jira Forge Remove Customizations Icon](/images/platgovnetsuite/integrations/jira_forge_remove_trash_icon.webp)   

    - Below shows a flag with a message that the action is in progress.


    ![Jira Forge Remove Customizations Flag In Progress](/images/platgovnetsuite/integrations/jira_forge_remove_customization_in_progress.webp)  

    - Below shows a flag with a message that the action is successful.


    ![Jira Forge Remove Customizations Flag Success](/images/platgovnetsuite/integrations/jira_forge_remove_customization_successful.webp)  

If you have reached this section, you were able to execute the following:
- Use the Lookup customization filter
- Add existing and proposed customizations
- Delete/remove a customization

### Importing Customizations

This feature is similar to the add customization process, the key difference is that the user can add customizations in bulk. Import customization only allows the user to upload files in XML and a SDF project in ZIP formats. 

You may contact your company's Netsuite Administrator for a sample of this files.

To use import feature follow the steps below:

1. Click the "Import Customization" button in the form. A modal will appear with the option to upload a file. As discussed above, only a SDF project in ZIP and XML file formats are accepted.


![Jira Forge Import Customization](/images/platgovnetsuite/integrations/jira_forge_import_customization_modal.webp)

2. Select a file to import.
- Importing XML file format


![Jira Forge Import Customization](/images/platgovnetsuite/integrations/jira_forge_import_xml_file.webp)  

- Importing SDF ZIP file format


![Jira Forge Import Customization](/images/platgovnetsuite/integrations/jira_forge_import_sdf_zip.webp)  

3. Click the "Import Customizations" button. You will see a flag message at the lower left side of your screen indicating that the importing process is In Progress.

4. Once the importing is successful, all valid objects will populate the Customization and Proposed Customization tables accordingly. You will also see a flag message indicating the importing process is successful.

If you have reach this section, you were able to execute the following:
- Use the Import Customization feature and add customizations in bulk.

### Perform Risk Assessment

This feature will show you Platform Governance's Impact Analysis tool. This tool reviews your customizations for dependencies or risks.

To use Impact Analysis follow the steps below:

1. Click the "Impact Analysis" button located at the bottom left section of the form.


![Jira Forge Impact Analysis Button](/images/platgovnetsuite/integrations/jira_forge_impact_analysis_button.webp)  
2. A modal will appear to start the risk assessment process.


![Jira Forge Impact Analysis Calculating](/images/platgovnetsuite/integrations/jira_forge_calculating_impact_analysis.webp) 

3. The modal populates with objects that are impacted. They are categorized as **Can Be Safely Deleted or Modified**, **Cannot Be Safely Deleted or Modified** and **Inactive Customizations (Already Deleted)**. Objects under the **Cannot Be Safely Deleted or Modified** will also show the Impacted Customizations.


![Jira Forge Impact Analysis Data](/images/platgovnetsuite/integrations/jira_forge_impact_analysis.webp) 

If you have reach this section, you were able to execute the following:
- Perform an impact analysis on the customization that are add/attached to the Jira ticket change request.

### View Entity Relation Diagram

The Entity Relationship Diagram (ERD) tool graphically displays your Customizations and all dependencies.

To use ERD follow the steps below:

1. Click the "View ERD" button located at the bottom left section of the form just beside the "Impact Analysis" button.


![Jira Forge View ERD Button](/images/platgovnetsuite/integrations/jira_forge_view_erd_button.webp) 

2. A modal will appear to start pulling ERD data.


![Jira Forge Pulling ERD Data](/images/platgovnetsuite/integrations/jira_forge_pulling_erd_data.webp) 

3. The modal populates with the customization and its corresponding hyperlink to the ERD.


![Jira Forge ERD Data](/images/platgovnetsuite/integrations/jira_forge_list_erd_data.webp) 

4. Click "View ERD" link to view the customization's ERD. It will open to a new tab within the same browser.


![Jira Forge ERD Data Netsuite](/images/platgovnetsuite/integrations/jira_forge_sample_erd.webp) 

If you have reach this section, you were able to execute the following:
- View the entity relation diagram of the customization that is add/attached to the Jira ticket change request.

### Ready for Development

Once you have resolved any risk or conflicts, your changes are ready for development:

1. Change the Jira status of your ticket to match the status set up for Jira Statuses for Pending Approval Status. For example, Selected for Development.

2. Click Push if you are not using Automatic Synchronization to push status changes. A confirmation your Change Request was Created/Updated is displayed.

- Below shows the "Push" button.


![Jira Forge Push Button](/images/platgovnetsuite/integrations/jira_forge_push_button.webp)

- Below shows a flag with a message that the action is in progress.


![Jira Forge Push In Prgoress](/images/platgovnetsuite/integrations/jira_forge_push_in_progress.webp) 

- Below shows a flag with a message that the action is successful.


![Jira Forge Push Successful](/images/platgovnetsuite/integrations/jira_forge_push_successful.webp) 

3. The Change Request Status field on the form will show the change request status in Netsuite. The status is now Pending Approval. It is also link to open the Change Request in NetSuite.


![Jira Forge Change Request Pending Approval](/images/platgovnetsuite/integrations/jira_forge_change_request_pending_approval_status.webp) 

If you have reach this section, you were able to execute the following:
- Push a change request from a Jira ticket.
- See the change request status from Jira.

### Deploy Changes and Complete the Ticket

When development is done, and the Change Request is approved according to your policy, the Jira ticket is ready to be updated.

1. The Change Request Status field on the form will show the change request status in Netsuite. The status is now Approved, this means the change request is now approved in Netsuite.


![Jira Forge Change Request Approved](/images/platgovnetsuite/integrations/jira_forge_approved_cr_status.webp) 

2. Change the Jira status of your ticket to match the status set up for Jira Statuses for Approved Status. In our example set up, we have two possible statuses: Ready for Deployment and Done. Setting up two statuses enables you to split up the deployment and the ticket closure if you want to monitor the deployment task separately. Both statuses are valid for Deployment, but only Done closes the Jira ticket and updates the Change Request to Completed.

3. Click Push if you are not using Automatic Synchronization to push status changes. A confirmation your Change Request was Created/Updated is displayed.
- Below shows a flag with a message that the action is in progress.


![Jira Forge Change Request Approved Flag In Progress](/images/platgovnetsuite/integrations/jira_forge_push_in_progress.webp) 

- Below shows a flag with a message that the action is successful.


![Jira Forge Change Request Approved Flag Sucessful](/images/platgovnetsuite/integrations/jira_forge_push_successful.webp) 

4. If you used Ready for Deployment, update your Jira status to Done once your deployment and verification activities are complete.

If you have reach this section, you were able to execute the following:
- Push a change request from a Jira ticket.
- See the Approved change request status from Jira.

#### If you open the Change Request in NetSuite:

- All Customizations added from Jira are displayed.
- Affected Bundle ID is added (if used).
- Change Overview is set to the Jira ticket description.
- Change Request is Approved and ready to be deployed.


![Jira Forge Change Request Netsuite 1](/images/platgovnetsuite/integrations/jira_forge_itgc_cr_1.webp) 
- Originated System, External Change Request Number and External Link to the Jira ticket are populated on the Related Change Records tab.


![Jira Forge Change Request Netsuite 2](/images/platgovnetsuite/integrations/jira_forge_itgc_cr_2.webp) 
- If the Jira status is Done, the Change Request shows as Completed.

### Other notable features

These are the other features whose actions are not that commonly used but are of equal importance in the integration app.

1. **Add Bundle ID** - The **+** button beside the Affected Bundle ID field. User will be able to add Netsuite bundle IDs to the change request. You can add one bundle ID at a time for this action. It is only an add functionality, removing a bundle ID in the change request would require the user to contact a Netsuite Administrator or user for this action.


![Jira Forge Add Bundle Button](/images/platgovnetsuite/integrations/jira_forge_add_bundle_button.webp) 



![Jira Forge Add Bundle Modal](/images/platgovnetsuite/integrations/jira_forge_add_bundle_modal.webp) 

2. **Push External** - This feature allows the user to "push" the Jira ticket change request and it's objects to an external Netsuite account. Pushing to an external Netsuite account save the user's time in creating an change request with the same objects in another Netsuite account. Push external can be executed by clicking the "Push External" button, a modal will appear prompting the user to select a Netsuite account that he/she wishes to push the Jira ticket change request. Netsuite accounts in the modal selection are the same accounts defined by the user in Netwrix Netsuite TBA Credentials page.


![Jira Forge Push External Button](/images/platgovnetsuite/integrations/jira_forge_push_external_button.webp) 



![Jira Forge Push External Modal](/images/platgovnetsuite/integrations/jira_forge_push_external_modal.webp) 

3. **Settings** - The Settings is a drop-down button, allows the user to switch Netsuite accounts to connect to. When "Settings" button is clicked, a "Change Account" option is shown. When the user clicks "Change Account", the session is disconnected and the connection to a Netsuite account has been stops. The connection form is then shown to allow the user to connect to another Netsuite account.


![Jira Forge Settings Button](/images/platgovnetsuite/integrations/jira_forge_settings_change_account.webp) 

You have successfully finished the step by step Jira Forge Walkthrough!

**Next Step:** [ Jira Forge FAQs](/docs/platgovnetsuite/ticketingintegrations/jiraforgeintegration/jira_forge_faq.md)
