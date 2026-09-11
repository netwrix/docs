---
title: "Jira Forge Walkthrough"
description: "Jira Forge Walkthrough"
sidebar_position: 3
---

# Jira Forge Walkthrough

Complete all prerequisites in the Jira Forge Setup page before using this walkthrough.

This walkthrough is one example based on a test account. You must install and configure the Jira integration, including setting up the Jira Statuses before using this walkthrough.

### The walkthrough demonstrates these steps:

- Create a Jira Ticket
- Logging In and Connecting to a NetSuite Account
- Add or Remove Customizations
- Importing Customizations
- Perform Risk Assessment
- View Entity Relation Diagram
- Ready for Development
- Deploy Changes and Complete the Ticket
- Change Request Status Bar Transitions
- Other notable features

### Create a Jira Ticket
1. Log in to your Jira account.
2. Open a Project.
3. Click Create (+).
4. Fill the necessary fields and Click 'Create'

### Logging In and Connecting to a NetSuite Account
Before proceeding to this step, ensure you already have created a Token Based Authentication (TBA) record. If not   see [Set up Jira TBA Credentials](/docs/platgovnetsuite/ticketingintegrations/jiraforgeintegration/jira_forge_set_up#set-up-jira-tba-credentials) in Setup page.

1. In your issue ticket, click the **Netwrix NetSuite Forge** tab.
    Two possible displays:

        1. If you have NOT executed [Set up Jira Project Keys](/docs/platgovnetsuite/ticketingintegrations/jiraforgeintegration/jira_forge_set_up#set-up-jira-project-keys) in the Setup Page, this message displays: "Only projects defined in the Netwrix Settings page can use this integration." Complete the [Set up Jira Project Keys](/docs/platgovnetsuite/ticketingintegrations/jiraforgeintegration/jira_forge_set_up#set-up-jira-project-keys) step first.


        ![Jira Forge Issue No Project Key](/images/platgovnetsuite/integrations/jira_forge_issue_no_project_key.webp)

        2. If you have, the connect page appears, where you can connect or log in to a NetSuite defined in [Set up Jira TBA Credentials](/docs/platgovnetsuite/ticketingintegrations/jiraforgeintegration/jira_forge_set_up#set-up-jira-tba-credentials) in Setup page.


        ![Jira Forge Issue Connect Form](/images/platgovnetsuite/integrations/jira_forge_issue_connect_form.webp)

2. Select a NetSuite account to connect to.
3. Upon selecting an account, the app loads and establishes the initial connection. After the connection succeeds, the **Connect** button becomes available. If it doesn't, verify the TBA credentials in [Set up Jira TBA Credentials](/docs/platgovnetsuite/ticketingintegrations/jiraforgeintegration/jira_forge_set_up#set-up-jira-tba-credentials) in Setup page.


![Jira Forge Issue Connect Form Successful](/images/platgovnetsuite/integrations/jira_forge_issue_connect_form_successful.webp)

4. Click "Connect" button.
5. The ITGC Form for the Jira app appears. The form loads the Change Request data and shows which account the app is connected to.


![Jira Forge Issue Connect Form Successful ITGC](/images/platgovnetsuite/integrations/jira_forge_connect_itgc_form.webp)

### Add or Remove Customizations

This section shows you how to add and remove customizations in the Forge app.

To start adding or removing customizations, follow these steps:

1. Click the **Lookup Customization** button to add existing customizations to the Jira ticket. A modal opens, letting you filter and select a customization to attach to the change request.


Available filters:
- Name
- Script ID
- Type
- Bundle ID
- Modified By
- From
- To


![Jira Forge Lookup Customization Modal](/images/platgovnetsuite/integrations/jira_forge_lookup_customization_modal.webp)

2. Choose a filter to narrow down the selection of customizations. Use the Name filter. Click the "Lookup" button.


![Jira Forge Lookup Customization Modal Name Filter](/images/platgovnetsuite/integrations/jira_forge_lookup_name_filter.webp)

3. Select a customization to attach by ticking the checkbox beside the name. After ticking it, click the "Add Customizations" button at the bottom of the modal.
    - A flag appears with a message that the action is in progress.


    ![Jira Forge Add Customization Flag In Progress](/images/platgovnetsuite/integrations/jira_forge_add_customization_in_progress.webp)

    - A flag appears with a message that the action is successful.


    ![Jira Forge Add Customization Flag In Progress](/images/platgovnetsuite/integrations/jira_forge_successful_add_customization.webp)

4. You can also add a customization that doesn't exist yet. To add one, click the "Proposed Customization" button. A modal opens with the following fields:
    - Type
    - ScriptID/Name


    ![Jira Forge Proposed Customization Modal](/images/platgovnetsuite/integrations/jira_forge_proposed_customization_modal.webp)

5. Select the Type for your proposed customization. Select the "Body Field" type. Notice that the Script ID/Name field already contains the script ID prefix, which prevents accidentally entering the wrong prefix for the type. Enter the script ID of your choice.


    ![Jira Forge Proposed Customization Input](/images/platgovnetsuite/integrations/jira_forge_add_proposed_wth_input.webp)
6. Click the "Add Proposed Customization" button to add/attach it to the Jira ticket change request.
    - A flag appears with a message that the action is in progress.


    ![Jira Forge Proposed Customization Flag In Progress](/images/platgovnetsuite/integrations/jira_forge_add_proposed_in_progress.webp)    

    - A flag appears with a message that the action is successful.


    ![Jira Forge Proposed Customization Flag Successful](/images/platgovnetsuite/integrations/jira_forge_add_proposed_successful.webp) 

The following image shows the existing and proposed customizations added in steps 1 through 6.


![Jira Forge Existing and Proposed Customizations](/images/platgovnetsuite/integrations/jira_forge_existing_and_proposed_customizations_added.webp)       

7. You can also remove existing and proposed customizations from the Jira ticket change request. Click the "trash" icon at the right side of the customization's name to trigger the remove process.


![Jira Forge Remove Customizations Icon](/images/platgovnetsuite/integrations/jira_forge_remove_trash_icon.webp)   

    - A flag appears with a message that the action is in progress.


    ![Jira Forge Remove Customizations Flag In Progress](/images/platgovnetsuite/integrations/jira_forge_remove_customization_in_progress.webp)  

    - A flag appears with a message that the action is successful.


    ![Jira Forge Remove Customizations Flag Success](/images/platgovnetsuite/integrations/jira_forge_remove_customization_successful.webp)  

After completing this section, you can:
- Use the Lookup customization filter
- Add existing and proposed customizations
- Delete/remove a customization

### Importing Customizations

This feature is similar to the add customization process, except that you can add customizations in bulk. Import customization accepts only XML files and SuiteCloud Development Framework (SDF) projects in ZIP format.

Contact your company's NetSuite Administrator for samples of these files.

To use the import feature, follow these steps:

1. Click the **Import Customization** button in the form. A modal appears with the option to upload a file. As noted earlier, the modal accepts only SDF projects in ZIP format and XML files.


![Jira Forge Import Customization](/images/platgovnetsuite/integrations/jira_forge_import_customization_modal.webp)

2. Select a file to import.
- Importing XML file format


![Jira Forge Import Customization](/images/platgovnetsuite/integrations/jira_forge_import_xml_file.webp)  

- Importing SDF ZIP file format


![Jira Forge Import Customization](/images/platgovnetsuite/integrations/jira_forge_import_sdf_zip.webp)  

3. Click the **Import Customizations** button. A flag message at the lower left of your screen indicates that the import is in progress.

4. After the import succeeds, all valid objects populate the Customization and Proposed Customization tables. A flag message indicates the import succeeded.

After completing this section, you can:
- Use the Import Customization feature and add customizations in bulk.

### Perform Risk Assessment

This feature uses Platform Governance's Impact Analysis tool to review your customizations for dependencies or risks.

To use Impact Analysis, follow these steps:

1. Click the "Impact Analysis" button at the bottom left of the form.


![Jira Forge Impact Analysis Button](/images/platgovnetsuite/integrations/jira_forge_impact_analysis_button.webp)  
2. A modal appears to start the risk assessment process.


![Jira Forge Impact Analysis Calculating](/images/platgovnetsuite/integrations/jira_forge_calculating_impact_analysis.webp) 

3. The modal populates with the impacted objects, categorized as **Can Be Safely Deleted or Modified**, **Can't Be Safely Deleted or Modified**, and **Inactive Customizations (Already Deleted)**. Objects under **Can't Be Safely Deleted or Modified** also show the Impacted Customizations.


![Jira Forge Impact Analysis Data](/images/platgovnetsuite/integrations/jira_forge_impact_analysis.webp) 

After completing this section, you can:
- Perform an impact analysis on the customizations attached to the Jira ticket change request.

### View Entity Relation Diagram

The Entity Relationship Diagram (ERD) tool graphically displays your Customizations and all dependencies.

To use ERD, follow these steps:

1. Click the "View ERD" button at the bottom left of the form, beside the "Impact Analysis" button.


![Jira Forge View ERD Button](/images/platgovnetsuite/integrations/jira_forge_view_erd_button.webp) 

2. A modal appears to start pulling ERD data.


![Jira Forge Pulling ERD Data](/images/platgovnetsuite/integrations/jira_forge_pulling_erd_data.webp) 

3. The modal populates with the customization and its corresponding hyperlink to the ERD.


![Jira Forge ERD Data](/images/platgovnetsuite/integrations/jira_forge_list_erd_data.webp) 

4. Click **View ERD** to view the customization ERD. It opens in a new browser tab.


![Jira Forge ERD Data NetSuite](/images/platgovnetsuite/integrations/jira_forge_sample_erd.webp) 

After completing this section, you can:
- View the entity relationship diagram of the customization attached to the Jira ticket change request.

### Ready for Development

After you resolve any risks or conflicts, your changes are ready for development:

1. Change the Jira status of your ticket to match the status set up for Jira Statuses for Pending Approval Status. For example, Selected for Development.

2. Click Push if you aren't using Automatic Synchronization to push status changes. A confirmation appears that your Change Request was Created/Updated.

- The following image shows the "Push" button.


![Jira Forge Push Button](/images/platgovnetsuite/integrations/jira_forge_push_button.webp)

- A flag appears with a message that the action is in progress.


![Jira Forge Push In Prgoress](/images/platgovnetsuite/integrations/jira_forge_push_in_progress.webp) 

- A flag appears with a message that the action is successful.


![Jira Forge Push Successful](/images/platgovnetsuite/integrations/jira_forge_push_successful.webp) 

3. The Change Request Status field on the form shows the change request status in NetSuite. The status is now Pending Approval, with a link to open the Change Request in NetSuite.


![Jira Forge Change Request Pending Approval](/images/platgovnetsuite/integrations/jira_forge_change_request_pending_approval_status.webp) 

After completing this section, you can:
- Push a change request from a Jira ticket.
- View the change request status from Jira.

### Deploy Changes and Complete the Ticket

When development is done and the Change Request is approved according to your policy, you can update the Jira ticket.

1. The Change Request Status field on the form shows the change request status in NetSuite. The status is now Approved, indicating the change request is approved in NetSuite.


![Jira Forge Change Request Approved](/images/platgovnetsuite/integrations/jira_forge_approved_cr_status.webp) 

2. Change the Jira status of your ticket to match the status set up for Jira Statuses for Approved Status. In this example, there are two possible statuses: Ready for Deployment and Done. Two statuses let you split the deployment and the ticket closure if you want to monitor the deployment task separately. Both statuses are valid for Deployment, but only Done closes the Jira ticket and updates the Change Request to Completed.

3. Click Push if you aren't using Automatic Synchronization to push status changes. A confirmation appears that your Change Request was Created/Updated.
- A flag appears with a message that the action is in progress.


![Jira Forge Change Request Approved Flag In Progress](/images/platgovnetsuite/integrations/jira_forge_push_in_progress.webp) 

- A flag appears with a message that the action is successful.


![Jira Forge Change Request Approved Flag Sucessful](/images/platgovnetsuite/integrations/jira_forge_push_successful.webp) 

4. If you used Ready for Deployment, update your Jira status to Done once your deployment and verification activities are complete.

After completing this section, you can:
- Push a change request from a Jira ticket.
- View the Approved change request status from Jira.

#### If you open the Change Request in NetSuite:

- The Change Request displays all Customizations added from Jira.
- The Affected Bundle ID appears (if used).
- Change Overview matches the Jira ticket description.
- The Change Request is Approved and ready for deployment.


![Jira Forge Change Request NetSuite 1](/images/platgovnetsuite/integrations/jira_forge_itgc_cr_1.webp) 
- The Related Change Records tab shows the Originated System, External Change Request Number, and External Link to the Jira ticket.


![Jira Forge Change Request NetSuite 2](/images/platgovnetsuite/integrations/jira_forge_itgc_cr_2.webp) 
- If the Jira status is Done, the Change Request shows as Completed.

### Change Request Status Bar Transitions

The Change Request status transitions can be dynamic based on the current status of the Change Request record. The current status can transition to any of the statuses defined in the following status matrix:

- If the Change Request status is **Not Started**, it can transition to: **In Progress, Pending Approval, Completed, Cancelled**

- If the Change Request status is **In Progress**, it can transition to: **Not Started, Pending Approval, Completed, Cancelled**

- If the Change Request status is **Pending Approval**, it can transition to: **Not Started, In Progress, Approved, Rejected, Completed, Cancelled**

- If the Change Request status is **Approved**, it can transition to: **Not Started, In Progress, Pending Approval, Completed, Cancelled**

- If the Change Request status is **Rejected**, it can transition to: **Not started, In Progress, Pending Approval, Complete, Cancelled**

- If the Change Request status is **Completed**, it can transition to: **Not Started, In Progress, Pending Approval, Approved, Cancelled**

- If the Change Request status is **Cancelled**, it can transition to: **Not Started, In Progress, Pending Approval, Completed**

- If the Change Request status is **Approved Override**, it can transition to: **Not Started, In Progress, Pending Approval, Completed, Cancelled**

:::note
If these statuses aren't mapped as defined in [Set up Jira Status Mapping](/docs/platgovnetsuite/ticketingintegrations/jiraforgeintegration/jira_forge_set_up#set-up-jira-status-mapping), the transition can't proceed. Review the status mapping carefully.
:::


### Other notable features

These features come up less often but are equally important in the integration app.

1. **Add Bundle ID** - The **+** button beside the Affected Bundle ID field. Use it to add NetSuite bundle IDs to the change request. You can add one bundle ID at a time. To remove a bundle ID from the change request, contact a NetSuite Administrator.


![Jira Forge Add Bundle Button](/images/platgovnetsuite/integrations/jira_forge_add_bundle_button.webp) 



![Jira Forge Add Bundle Modal](/images/platgovnetsuite/integrations/jira_forge_add_bundle_modal.webp) 

2. **Push External** - Use this feature to push the Jira ticket change request and its objects to an external NetSuite account. Pushing to an external NetSuite account saves time when creating a change request with the same objects in another NetSuite account. To use Push External, click the **Push External** button. A modal appears to select the NetSuite account to push to. The modal lists the same accounts you defined in the Netwrix NetSuite TBA Credentials page.


![Jira Forge Push External Button](/images/platgovnetsuite/integrations/jira_forge_push_external_button.webp) 



![Jira Forge Push External Modal](/images/platgovnetsuite/integrations/jira_forge_push_external_modal.webp) 

3. **Settings** - The Settings dropdown button lets you switch the NetSuite account to connect to. When you click the "Settings" button, a "Change Account" option appears. When you click "Change Account", the app disconnects the session and stops the connection to the NetSuite account. The connection form then appears so you can connect to another NetSuite account.


![Jira Forge Settings Button](/images/platgovnetsuite/integrations/jira_forge_settings_change_account.webp) 

You have completed the Jira Forge Walkthrough.

**Next Step:** [Jira Forge FAQs](/docs/platgovnetsuite/ticketingintegrations/jiraforgeintegration/jira_forge_faq)
