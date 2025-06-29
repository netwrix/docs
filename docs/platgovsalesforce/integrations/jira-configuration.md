# Jira Field Mapping

The Jira Field Mapping tool maps a Jira field to a Netwrix Change Request. To access the Field
Mapping tool:

1. Open Netwrix Dashboard.
2. Click **Configuration and Stats** in the **Resources** section, or open **Settings** >
   **Configuration and Stats**.
3. Open the **Jira Configuration** tab.
4. Select **Field Mapping**.

## Field Mapping Process

1. Identify Fields to Map
2. Verify Field Creation
3. Add Fields to Page Layouts
4. Update Values
5. Access Mapping Configuration
6. Create Mapping Record
7. Verify the Change Request

### Identify Fields to Map

Determine the fields you want to map from Jira in the current Netwrix change request. Open the form
where you added the custom fields to get the field names. This example maps the **Strongpoint
Version** and **Salesforce Version Number** fields, using the fields from the **Details** section in
Jira.

![Identify fields to map](/img/product_docs/platgovsalesforce/integrations/field_map_id_fields.webp)

### Verify Field Creation

Ensure the fields are created in Salesforce.

1. Open **Salesforce Setup** > **Object Manager** > **Change Request**
2. Open **Fields & Relationships**

If your fields are not in the list, use the **New** button to add them.

For this example, the **Strongpoint Version** and **SF Version Number** fields have been added.

**NOTE:** You need the Salesforce API names when you create the mapping record. For this example,
**Strongpoint Version** is **Strongpoint_Version**c** and **SF Version Number** is
**Salesforce_Version_Number**c**.

![Verify fields exist](/img/product_docs/platgovsalesforce/integrations/field_map_verify_fields.webp)

### Add Fields to Page Layouts

Add the fields to the Page Layouts.

1. Open **Salesforce Setup** > **Object Manager** > **Change Request**.
2. Open **Page Layouts**.
3. Select your layout. If your fields are not in the layout, add them. For this example, the
   **Strongpoint Version** and **SF Version Number** fields have been added to the **Customizations
   Layout**.

   ![Add to layouts](/img/product_docs/platgovsalesforce/integrations/field_map_layouts.webp)

4. Open **Setup** > **Lightning App Builder**.
5. Open your Record Page. This example shows the **Customizations Record** page. Make sure your
   fields are in the record page and set to visible.

   ![Check record page for fields and visibility](/img/product_docs/platgovsalesforce/integrations/field_map_record.webp)

### Update Values

In Jira, update the details for the fields. This example sets the **Strongpoint Version** field to
**2.2800** and the **Salesforce Version** to **6.1**.

![Update the values](/img/product_docs/platgovsalesforce/integrations/field_map_set_values.webp)

### Access Mapping Configuration

**NOTE:** Make sure your custom fields have values before you start the mapping. The Jira API names
are in the format _customfield_#####\_. You need to know the value to locate the Jira API name in
the list.

Open the Field Mapping tool:

1. Open Netwrix Dashboard > **Settings** > **Configuration and Stats**.
2. Open the **Jira Configuration** tab.
3. Select **Field Mapping**.
4. Enter the **Jira Ticket Id**.
5. Click **Get Fields**.

   ![Get Fields for mapping](/img/product_docs/platgovsalesforce/integrations/field_map_get_fields.webp)

6. Review values in each field to locate the Jira API names. In this example, **Salesforce Version
   Number** is **6.1**, corresponding to **customfield_10071**. **Strongpoint Version** is
   **2.2800** corresponding to **customfield_10052**.

The Jira API names are required to create the mapping record.

### Create Mapping Record

1. Open the App Launcher.
2. Navigate to **CR CustomFields Mapping**. It is added as a tab on the navigation bar. You can
   click on the down arrow on the tab and add it to your navigation bar.

   ![Launch CR CustomFields Mapping](/img/product_docs/platgovsalesforce/integrations/field_map_launcher.webp)

3. Click **New** to create the record.

   ![Create a new mapping record](/img/product_docs/platgovsalesforce/integrations/field_map_new_record.webp)

4. Enter a name for **CR CustomField Mapping Name**. **Strongpoint Version** is used in this
   example.
5. Enter the **CR External Field APIName**. This is the Jira API name obtained from the Field
   Mapping tab for the Jira Configuration tool. Refer to the Verify Field Creation section for
   details. **customfield_10052** is used in this example.
6. Enter the **CR SF Field APIName**. This is the Salesforce API name obtained from **Salesforce
   Setup** > **Object Manager** > **Change Request** > **Fields & Relationships**. Refer to the
   Verify Field Creation section for details. **Strongpoint_Version**c\_\_ is used in this example.
7. Click **Save** or **Save & New** if you have additional mappings.

The mapping is now complete. In the next update, the information is populated in the fields and
shows in the Netwrix Change Request.

![Field Map complete](/img/product_docs/platgovsalesforce/integrations/field_map_complete.webp)

### Verify the Change Request

Open the Change Request that contains your mapped fields. Verify the information is correct. Here is
the example showing the **Strongpoint Version** and **SF Version Number** fields and data appear on
the Change Request.

![Verify the Change Request](/img/product_docs/platgovsalesforce/integrations/field_map_change_request.webp)

# Jira Walkthrough Example

This walkthrough is one example based on our test account. You must
[install and configure](/docs/platgovsalesforce/integrations/jira-integration.md) the Platform Governance for Salesforce Salesforce Jira
integration, including setting up the **[Jira Statuses](/docs/platgovsalesforce/integrations/jira-integration.md)** prior to using this
walkthrough.

The walkthrough demonstrates these steps:

- Create a Jira Ticket
- Connect to the App
- Add Customizations
- Perform Risk Assessment
- Ready for Development
- Deploy Changes and Complete the Ticket

## Create a Jira Ticket

1. Login in to your Jira account.
2. Open a Project.
3. Click **Create** (**+**).

   ![Create a Jira ticket](/img/product_docs/platgovnetsuite/integrations/jira_example_create_issue.webp)

4. Enter your information on the **Create issue** form:

   - **Project**: Select your Project. **NS & SF Jira Demo (SJD)** is selected for this example.
   - **Issue Type**: Select your Jira type. **Task** is selected for this example.
   - **Summary**: Add a name
   - **Description** (optional)

5. Click **Create**.
6. Alerts and notifications may occur during this walkthrough, and are not included in these steps.
   For example, override alert, notifications for approvers, and notification for the change
   request.

## Connect to the App

1. Open the **Comments** tab and select **Strongpoint Salesforce**.

   ![Accessing the Strongpoint Salesforce app](/img/product_docs/platgovsalesforce/integrations/jira_comments_open_app.webp)

2. There are two ways to connect: **Login User** or **Connected App** tabs.

   ![Connection options](/img/product_docs/platgovsalesforce/integrations/connection_options.webp)

### Connected App

Use the **Connected App** tab if you set up the connected app using the procedure:
[Access Data with API Integration](/docs/platgovsalesforce/integrations/jira-integration.md#access-data-with-apiintegration)

1. Open the **Connected App** tab.

   ![Using the connected app](/img/product_docs/platgovsalesforce/integrations/connection_options_app.webp)

2. Enter the **Consumer Key** and **Consumer Secret**.
3. Click **Is Sandbox account?** if you are logging in to a sandbox.
4. Click **Connect**. If this is the first time you are using the connected app, you are prompted to
   select your username. The connected app is configured for you. Once finished, click **Close** on
   the confirmation screen. The Strongpoint form is displayed. Your connection persists unless you
   click **Change Account** on the integration page.

If the configuration fails, an error message is displayed. For example,

> **error=redirect_uri_mismatch**
>
> - The 10 minutes timing slot from Salesforce is not completed yet. Please wait
> - If the error persists, check the [Callback URL](/docs/platgovsalesforce/integrations/jira-integration.md).
>
>   - You may have left a space between the two Callback URLs
>   - You may have an error in the newly added Callback URL it should be:  
>     **https://spjira.my.salesforce-sites.com/SpHandleJiraAuth**

### Login User

Enter your Salesforce **Username**, **Password** and **Security Token**. If you are using MFA or
SSO: use your SSO Password. The Security token is the changing 6 digit code from your SSO or MFA
app.

![Enter your Jira credentials](/img/product_docs/platgovsalesforce/integrations/jira_credentials.webp)

If you do not have your security token, you can use these steps to reset your token:

1. Log in to your Salesforce account.
2. Open **View Profile** > **Settings**.  
   ![Open your Salesforce Profile settings](/img/product_docs/platgovsalesforce/integrations/jira_example_settings.webp)
3. Select **Reset My Security Token** from the menu.
4. Click **Reset Security Token**. Check your email for your new token.
5. Click **Sandbox Account?** if you are using your sandbox.
6. Click **Connect**. If the connection is successful, the form is displayed (see Add Customizations
   section). The **Synchronized with** status displays the org you are logged into for Salesforce.

You cannot login if you do not have the **appropriate role permissions to create a change request**.

If you do not enter the correct credentials, an error is displayed. After six unsuccessful
consecutive attempts to login, your account is suspended for 30 minutes.

## Add Customizations

Once you have logged in, the form is displayed.

![Connection details for the ticket](/img/product_docs/platgovsalesforce/integrations/jira_connection.webp)

- **Synchronized with** displays the connected Org. Click **Change Account** if you need to switch
  Orgs.
- **Policy** is blank until Customizations have been added. The Policy is determined by the
  Customization with the strictest policy.
- **Change Level Req** is blank until Customizations have been added. If there are multiple change
  levels, the most stringent one is applied.
- **Select Customizations** is where you specify the Customizations you are changing or adding. If
  the Customization exists in your account, it is added to the **Select Customizations** list. **Add
  Proposed Customizations** are added to the **Proposed Customizations** list. You can delete added
  Customizations with the
  ![delete](/img/product_docs/platgovnetsuite/integrations/delete.webp) icon.
- **View DRD** and **Impact Analysis** are tools to Perform Risk Assessment.
- **Push** creates the Change Request in Salesforce. **Push** is also used to manually update your
  Change Request if you are not using the [Automatic Synchronization](/docs/platgovsalesforce/integrations/jira-integration.md) feature.

### Add Existing Customizations by Name or API Name

1. Enter all or part of a Name in **Add customization** for **Existing Customizations**. This
   example uses **maintenance** as the search string.
2. Click **+** to search for matching Customizations. Hover over **View** to display the **Type**
   and **API Name** for a Customization.

   ![Add an existing customization](/img/product_docs/platgovsalesforce/integrations/jira_customization_add.webp)

3. Select one or more Customizations. This example uses **Maintenance Type (Parent: Account)**, a
   customization in the _Strongpoint Demo Org_.
4. Click **Add Selected Customizations**. The selected Customization is added to the **Existing
   Customizations** list.

   ![Add an existing customization](/img/product_docs/platgovsalesforce/integrations/jira_example_add_existing.webp)

5. Enter an **API Name** in **Add customization** for **Existing Customizations** and click **+**.
   This example uses **UpsellOpportunities**, an API in the _Strongpoint Demo Org_.
6. The **API Name** is displayed. Select it, and click **Add Selected Customizations**. The selected
   Customization is added to the **Existing Customizations** list. This example shows
   **UpsellOpportunities (ApexClass)**, an API in the _Strongpoint Demo Org_.

   ![Add an existing customization by API Name](/img/product_docs/platgovsalesforce/integrations/jira_example_add_existing_api.webp)

### Add Proposed Customizations

In this procedure, we are adding a new Customization.

1. Enter a new, valid API Name in the **Add Customization** for **Proposed Customizations** field.
   For this example, enter **CustomerPriorities**.
2. Click (**+**) to add it. If the API Name is valid, and does not match an existing API Name, the
   new Customization is added to the **Proposed Customizations** list.

   ![Add a proposed customization](/img/product_docs/platgovsalesforce/integrations/jira_example_proposed.webp)

### Create the Change Request

Using the Platform Governance for Salesforce Jira integration, your Change Requests are created
automatically when you add a Customization. To setup or update the status mapping, refer to setting
up the **[Jira Statuses](/docs/platgovsalesforce/integrations/jira-integration.md)** procedure.

1. Change the Jira status of your ticket to match the status set up for **CR In Progress**. For
   example, **In Progress**. Refer to setting up the **[Jira Statuses](/docs/platgovsalesforce/integrations/jira-integration.md)**
   procedure.
2. Click **Push** to create the Change Request if you are not using the
   [Automatic Synchronization](/docs/platgovsalesforce/integrations/jira-integration.md) feature. The change request is created in
   Salesforce with the **In Progress** status.
3. Expand the **Change Request** field on the right. The status is now **None/In Progress**. There
   is a link to open the Change Request in Salesforce.

   ![Change Request is In Progress](/img/product_docs/platgovsalesforce/integrations/jira_example_in_progress_status.webp)

Note the **Policy** and **Change Level Req** reflect the most stringent requirement for your
selected customizations, in this example, **Change Request**.

![Policy and Change Level Req have been updated](/img/product_docs/platgovsalesforce/integrations/jira_example_policy.webp)

## Perform Risk Assessment

### Impact Analysis

The impact analysis tool reviews your customizations for dependencies or risks. Click **Impact
Analysis** to run the tool. Here is an example report showing the Customizations that **Cannot be
Safely Deleted or Modified** tab:

![Impact analysis report](/img/product_docs/platgovnetsuite/integrations/jira_example_impact_analysis.webp)

Before proceeding with your changes, review each warning to ensure your change does not break
something. Dependencies can easily be reviewed with the DRD tool.

### View DRD

The [Dependency Relationship Diagram](/docs/platgovsalesforce/tools-and-utilities/analysis-tools.md) (DRD) tool graphically displays your
Customizations and all dependencies.

1. Click **View DRD**.
2. When the diagram opens, you can explore the dependencies to evaluate the effect of your intended
   changes.

![Use the DRD to explore dependencies](/img/product_docs/platgovsalesforce/integrations/jira_example_drd.webp)

## Ready for Development

Once you have resolved any risk or conflicts, your changes are ready for development:

1. Change the Jira status of your ticket to match the status set up for **CR Pending Approval**. For
   example, **Selected for Development**.
2. Click **Push** if you are not using [Automatic Synchronization](/docs/platgovsalesforce/integrations/jira-integration.md) to push
   status changes.
3. Expand the **Change Request** field on the right. The status is now **Pending Approval / In
   Progress**. There is a link to open the Change Request in Salesforce.

   ![Change Request in Pending Approval](/img/product_docs/platgovsalesforce/integrations/jira_example_pending_approval_status.webp)

4. Click the **Go To Record** link to view the Change Request.

   ![Change Request is In Progress / Pending Approval](/img/product_docs/platgovsalesforce/integrations/jira_example_pending_approval_change_request.webp)

## Deploy Changes and Complete the Ticket

When development is done, and the Change Request is approved according to your policy, the Jira
ticket is ready to be updated.

1. Expand the **Change Request** field on the right. The status is **Approved / In Progress**.

   ![Change Request is approved](/img/product_docs/platgovsalesforce/integrations/jira_example_approved_status.webp)

2. Change the Jira status of your ticket to match the status set up for **CR Approved**. For
   example, **Ready for Deployment**.
3. Click **Push** if you are not using [Automatic Synchronization](/docs/platgovsalesforce/integrations/jira-integration.md) to push
   status changes.
4. Once your deployment and verification activities are complete, change the Jira status of your
   ticket to match the status set up **CR Complete**. For example, **Done**.

If you open the Change Request in Salesforce:

- All Customizations added from Jira are displayed.
- **Change Overview** is set to the Jira ticket description.
- **Change Type** is **Jira**, and **External Change Request Number** is the Ticket number.
- Change Request shows as **Completed**.
- **External Created By**: is the user that created the Jira ticket .
- **External last Modified by**: is the last user who modified the Jira ticket.

  ![user_guide_example](/img/product_docs/platgovsalesforce/integrations/user_guide_example.webp)
