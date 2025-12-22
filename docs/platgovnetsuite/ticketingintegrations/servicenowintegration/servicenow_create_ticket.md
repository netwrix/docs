---
title: "Creating a Ticket and Change Request for ServiceNow"
description: "Creating a Ticket and Change Request for ServiceNow"
sidebar_position: 20
---

# Creating a Ticket and Change Request for ServiceNow

The [ServiceNow integration](/docs/platgovnetsuite/ticketingintegrations/servicenowintegration/servicenow_install_configure_netsuite.md) must be installed and
configured prior to use.

1. Open **ServiceNow**.
2. Select **Manage** > **Instance**.
3. Enter your ServiceNow **User Name** and **Password**.
4. Click **Change** > **Create New** in the menu to begin a new ticket.

    ![servicenow_create_new](/images/platgovnetsuite/integrations/servicenow_create_new.webp)

5. Open the **Strongpoint NetSuite** tab.
6. Click **Select Account** from the menu bar.

    ![servicenow_menu_bar](/images/platgovnetsuite/integrations/servicenow_menu_bar.webp)

7. Enter your NetSuite credentials. You must set up Token-based authentication.
   Check if you are using a **Sandbox Account**. Click **Connect**.

    ![servicenow_sp_login](/images/platgovnetsuite/integrations/servicenow_sp_login.webp)

8. Click **Select Customizations**.

    ![servicenow_select_customizations](/images/platgovnetsuite/integrations/servicenow_select_customizations.webp)

9. Enter one or more filters and click **Lookup Customization** to bring up a matching list. For
   example, entering **test** brings up the list of customizations containing _test_.

    ![servicenow_select_customizations_add](/images/platgovnetsuite/integrations/servicenow_select_customizations_add.webp)

10. Check one or more customizations. Click **Add Customization**.
11. Click **Add Proposed Customization** to add a new customization:

    ![Add a Proposed Customization](/images/platgovnetsuite/integrations/servicenow_add_proposed_customization.webp)

    1. Select the customization **Type**.
    2. Enter a Script ID for the proposed customization.
    3. Click **Add Proposed Customization**.

12. Click **Impact Analysis** in the menu bar. The impact analysis runs and displays any warnings.

    ![servicenow_impact_analysis](/images/platgovnetsuite/integrations/servicenow_impact_analysis.webp)

    Click on the links to open the record in NetSuite for further research.

    ![servicenow_impact_analysis_ns](/images/platgovnetsuite/integrations/servicenow_impact_analysis_ns.webp)

13. Click **ERD** in the menu bar. The list is populated with the customizations added to the
    ticket. Select a customization to view the ERDs as needed.

    ![servicenow_erd](/images/platgovnetsuite/integrations/servicenow_erd.webp)

14. Click **Submit**. The list of change requests is displayed.
15. Once the change request is moved to the Authorize state, click **Push Deployment Record** in the
    menu bar to complete the change request.
