---
title: "Creating a Change Request"
description: "Creating a Change Request"
sidebar_position: 40
---

# Creating a Change Request

Change requests are the method to plan, analyze, track and approve changes. You can create different
types of Change Requests to match the change you want to manage. Here are two options:

- **Customization** Change request is used for Metadata changes, such as
  [Customizations](/docs/platgovsalesforce/customizations/customizations_overview.md).
- **Data Record** - Change request is used for Data Changes to Revenue Cloud/
  [CPQ](/docs/platgovsalesforce/changemanagement/enhanced_cpq_support.md).

:::note
Data Record Change Requests are only available with an Enterprise Compliance license.
:::

1. Open the **Change Requests** tab.
2. Click **New**.

    ![New Change Request](/images/platgovsalesforce/change_management/change_request_new_light.webp)

3. Enter information as needed.

    - **Change Request Name**: add a meaningful name to the change request.
    - **Change Request Type**: Customizations for metadata changes and Data Records for data.
    - **Parent Change Request**: enter an optional parent change request if this is part of a bigger
      change.
    - **Change Overview**: add a summary of the desired changes.
    - **Change Type**: select the type from the list. **Minor** is the default.
    - **Is Release**: check if this change request represents a release. The customizations from all
      the child change requests are rolled into this release for deployment.

4. Optionally, on this screen you can enter **Existing Customizations**.

    - Click **Add** button in the Customizations panel to add **Existing Customizations** to the Change Request.

        ![Add an existing customization to a change request](/images/platgovsalesforce/change_management/change_request_new4_light.webp)

    - To search for existing Customizations, you can use different filters such as **Salesforce Type**, **Package**, **Last Modified By**, or search directly by **Name**.

        ![Enter filters to search for customizations](/images/platgovsalesforce/change_management/change_request_new5_light.webp)

    - User can search and select multiple customizations from the list.
    - Once finished, click **Confirm Selection**.


5. You can also enter the **Proposed Customizations** at this point.

    - Click **Add** button in the Proposed panel to add **Proposed Customizations** to the change request.

        ![Add Proposed Customizations to the Change Request](/images/platgovsalesforce/change_management/change_request_new6_light.webp)

        - Enter the **API Name** and **Salesforce Metadata Type**. Click **+** to add additional
      proposed customizations. This can be used in conjunction with customizations that already exist.
      All **Customizations** and **Proposed Customizations** are evaluated to determine the change
      level. The highest change level is used for the change request.
    - Once finished, click **Confirm Selection**.

    :::tip Troubleshooting: Incorrect API Name Format in Proposed Customizations

    **Issue**

    When creating Proposed Customizations, the system may return a validation error due to an incorrect API Name format.

    **Cause**

    The API Name format varies depending on the Salesforce Type. Each type follows a specific naming structure.

    Examples:

    - **CustomField**  
      `Object_Name__c.Custom_Field_Name__c`

    - **ValidationRule**  
      `Object_Name__c.Validation_Rule_Name`

    Validations are implemented for multiple Salesforce Types, so using an incorrect format will cause the request to fail.

    **Workaround**

    If you are unsure about the correct API Name format for a specific Salesforce Type:

    - Navigate to the **Customizations** tab.

    - Filter an existing List View or create a new one.

    - Select the desired Salesforce Type.

    - Add the **API Name** column to the view.

    - Review existing customizations to identify the correct format.

    This allows you to reference real examples from your account and ensure the API Name follows the correct structure.

    :::

6. **Save** the **Change Request**. A confirmation is displayed when the change request is saved and the user is redirected to the record view page.

    ![Continue with the Change Request](/images/platgovsalesforce/change_management/change_request_new2_light.webp)

7. Add or change information as needed:

    You can edit available fields by clicking the pencil icon. The following sections are available for editing, provided that the Change Request status is **In Progress**:

    ### Details

    Edit basic information about the Change Request.
    
    ![Detail Section](/images/platgovsalesforce/change_management/change_request_detail_section_light.webp)

    ### Customizations

    Add or remove **Existing Customizations** from the Customizations tab. 
    
    ![Customizations section](/images/platgovsalesforce/change_management/change_request_customizations_section_light.webp)

    ### Proposed Customizations

    Add or remove **Proposed Customizations** from the Proposed Customizations tab. 
    
    ![Proposed Customizations section](/images/platgovsalesforce/change_management/change_request_proposed_section_light.webp)

    ### Release & Deployment

    Manage release-related settings and deployment information.
    
    ![Release and Deployment section](/images/platgovsalesforce/change_management/change_request_release_section_light.webp)


## Preparing the Change Request for Approval

Review the change request:

- Run Impact Analysis
- View the DRD
- Submit the Change Request for Approval

### Run Impact Analysis

Open the **Impact Analysis** tab and review the information on the tabs: **Can Be Safely Deleted or Modified**, 
**Cannot Be Safely Deleted or Modified**, and **Inactive Customizations**.

Here is an example of items on the **Cannot Be Safely Deleted or Modified** tab. The Customizations
and Impacted Customizations are links to each customization record.

![Impact Analysis Cannot Be Safely Deleted or Modified tab](/images/platgovsalesforce/change_management/change_request_impact_analysis_light.webp)

### View the DRD

Open the **DRD** tab to review the dependency diagram.

![Open the DRD tab to view the dependency diagram](/images/platgovsalesforce/change_management/change_request_drd_light.webp)

### Submit the Change Request for Approval

Change request approvers are automatically assigned based on the policy. In this section, you can
add additional approvers, approver notes and begin the approval process.

  ![Expand Approval section](/images/platgovsalesforce/change_management/change_request_approvals_light.webp)

1. Add the approval information:

    - **Additional Approvers**: Add any additional approvers. Mandated approvers are set by the policy.
      Click **Add/Remove** and select approvers.

    - **Approver Notes**: optional notes about the change request.

2. Click **Save**.

3. Click **Submit for Approval** on the path to start the approval process. Approval notifications are sent to the
   approvers.

   ![Change Request Pending Approval](/images/platgovsalesforce/change_management/change_request_submit_approval.webp)


:::note
For new objects that do not yet exist in Production, edit the Change Request and enter the full API
Names of these objects into the Proposed Customization fields in the Scope Section. You can add
multiple API Names by using the Add button. Save the Change Request when complete.