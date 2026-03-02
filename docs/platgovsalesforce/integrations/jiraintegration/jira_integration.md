---
title: "Set Up the Jira Integration"
description: "Set Up the Jira Integration"
sidebar_position: 10
---

# Set Up the Jira Integration

Platform Governance for Salesforce's Change Enablement capabilities are integrated with Jira, one of
the most popular issue ticketing and development project management systems. Customers are able to
look for and include Salesforce Customizations, assess impacts for requested changes, and push Jira
change tickets into a Change Request. This enables easy management of changes, seamless tracking of
compliant changes and automating the reconciliation of change logs during an audit.

User benefits include:

- Avoid duplicate effort of creating tickets in two different systems.
- Perform impact analysis assessment.
- Navigate to DRD views.
- Enable automatic synchronization of Jira and Platform Governance for Salesforce change tickets.

:::note
Change Requests are not automatically created, as not all tickets result in a Change Request.
Tickets must be pushed to Platform Governance for Salesforce to begin the process. If Automatic
Synchronization is turned on, then changes to the Status and Customizations are synchronized between
Jira and Platform Governance for Salesforce without the need to keep manually pushing the changes.
:::

To set up the Jira integration:

1. Review Your Jira Statuses
2. Install the App
3. Set Up Jira Cloud Integration Credentials
4. Set Up Status Mapping

You can map custom fields between Change Requests and Jira. Refer to
[Jira Field Mapping](/docs/platgovsalesforce/integrations/jiraintegration/jira_field_map.md) for details.

## Review Your Jira Statuses

To take advantage of the automatic synchronization feature, we recommend reviewing your Jira
statuses to be mapped to the Change Request statuses. When a ticket status is updated to a mapped
status, Platform Governance for Salesforce handles the synchronization between Jira and Salesforce.

:::note
The mapping allows multiple Jira statuses to map to each Change Request status.
:::

The mapping is part of the [Set Up Status Mapping](#set-up-status-mapping) procedure.

Refer to the Atlassian documentation for instructions on
[Defining status field values](https://confluence.atlassian.com/adminjiraserver070/defining-status-field-values-749382903.html?_ga=2.262596428.1900070949.1572132057-2138500458.1540834491).

## Install the App

Use the Jira Cloud Installation, then complete the Access Data with API Integration or Set Up Jira
Cloud Integration Credentials after installing the app.

### Jira Cloud Installation

:::note
You must be a Jira system administrator to install the **Netwrix for Salesforce** app. Contact
your Jira system administrator if you do not have administrative permissions.
:::

1. Open your **Jira Software Dashboard**.
2. Select **Apps** > **Explore more Apps >**
3. Search for **Netwrix**.

    ![Strongpoint apps in the Jira Marketplace](/images/platgovsalesforce/integrations/jiraForge/jira_marketplace_forge.webp)

4. Click **Netwrix for Salesforce** to install the app.

#### Access Data with API Integration

You can use a connected app to request access to Salesforce data. These steps connect your Jira
Cloud app to your Salesforce instance.

:::note
For a connected app to request access, it must be integrated with the Salesforce API using the OAuth
2.0 protocol. OAuth 2.0 is an open protocol that authorizes secure data sharing between applications
through the exchange of tokens.
:::

Configure the connected app:

1. Log in to your Salesforce org.
2. Open the Connected App:
   **Setup** > **Apps** > **App Manager** > **Strongpoint** (where **App Type** = **Connected**)

    ![Open the Strongpoint Connected App](/images/platgovsalesforce/integrations/connected_app.webp)

3. Click the drop down arrow on the right side and select **Edit**.
4. Set the **Callback URL** to **https://spjira.my.salesforce-sites.com/SpHandleJiraAuth**
5. These **Oauth Scopes** must be selected:
   **Full access (full)**
   **Perform requests at any time (refresh_token, offline_access)**
6. Click **Save**.

    :::note
    Your connected app requires 2-10 minutes after you save before it is available.
    :::

7. Click **Manage Consumer Details**.

    ![Click Manage Consumer Details](/images/platgovsalesforce/integrations/manage_consumer_details.webp)

8. Copy the Consumer Key and the Consumer Secret codes to a clipboard. You are prompted for this
   information when you use the app.

If you do not use a connected app, you can set up Jira Cloud Integration Credentials as an
alternative.

:::note
You can use either Connected Apps or External Client Apps.
The option you use depends on whether the app already exists or if you are creating a new version.
:::

Configure the External Client Apps (new version of connected apps):

1. Log in to your Salesforce org.
2. Open the Connected App:
   **Setup** > **Apps** > **External Client Apps** > **Netwrix Pg Jira** (Netwrix Pg Jira is just an example; it doesn't need to have that exact name.)

    ![Open the Strongpoint Connected App](/images/platgovsalesforce/integrations/externalClientAppSearch.webp)

3. Click the drop down arrow on the right side and select **Edit Settings**.
4. Set the **Callback URL** to **https://spjira.my.salesforce-sites.com/SpHandleJiraAuth** under the Oauth Settings Section
5. These **Oauth Scopes** must be selected:
   **Full access (full)**
   **Perform requests at any time (refresh_token, offline_access)**
6. Click **Save**.

    :::note
    Your connected app requires 2-10 minutes after you save before it is available.
    :::

7. Click **Consumer Key and Secret**.

    ![Click Manage Consumer Details](/images/platgovsalesforce/integrations/consumerKeyAndSecretExternalClientApp.webp)

8. Copy the Consumer Key and the Consumer Secret codes to a clipboard. You are prompted for this
   information when you use the app.

#### Set Up Jira Cloud Integration Credentials

1. From the Netwrix Dashboard: click **Configuration and Stats** in the **Resources** section, or
   open **Settings** > **Configuration and Stats**.
2. Open the **Jira Configuration** tab.

    ![Open the credentials](/images/platgovsalesforce/integrations/jira_sp_credentials.webp)

3. Enter your credentials:

    - **Jira Username** is your Jira login email associated with your Jira API token.
    - **Jira Token** is your Jira API token. If you do not have your token, follow the steps in the
      [Atlassian](https://confluence.atlassian.com/cloud/api-tokens-938839638.html) documentation.
    - **Jira Account Name** is the _company specific part_ of the Jira site URL
      (**https://\_**JiraAccountName**\_.atlassian.net**). Only enter the _JiraAccountName_, not the
      entire URL.
    - **Site URL** is **https://site.force.secure.com**

4. Click **Save**.

#### Restricting Access to a Project

By default, all projects are visible for the Jira Platform Governance for Salesforce integration.
You can restrict this by project or profile.

Users opening a restricted project receive a information message, instructions for enabling access,
and a link to this topic.

> _The Strongpoint Salesforce Integration is not supported for this project._

Follow the instructions for Restricting Access to a Project or Setting Groups/Profiles Visibility to grant the user appropriate access.

1. Open a Jira project.

    ![Open a project](/images/platgovsalesforce/integrations/jira_restrict_access1.webp)

2. Select **Strongpoint Sf Settings**.
3. Select the **Project Visibility Settings** tab.
4. Enter the name of the project in the **Visibility Settings**. The specified project is the only
   one that is available to the Platform Governance for Salesforce integration. Leave **Visibility
   Settings** blank to allow all projects access.
5. Click **Save**.

Only the specified project has access to the Platform Governance for Salesforce Jira installation.
If **Visibility Settings** is blank, all projects have access.

#### Setting Groups/Profiles Visibility

Access to the Jira Platform Governance for Salesforce integration can also be performed with Profile
groups.

Users opening a restricted project receive a information message, instructions for enabling access,
and a link to this topic.

> _The Strongpoint Salesforce Integration is not supported for this project._

Follow the instructions for Restricting Access to a Project or Setting Groups/Profiles Visibility to grant the user appropriate access.

1. Open a Jira project.
2. Select **Strongpoint Sf Settings**.
3. Select the **Profile Visibility Settings** tab. There are two lists:
   **Existing Groups** are all of the current groups in Jira
   **Selected Groups** are groups that can see the Platform Governance for Salesforce Jira
   integration. If **Selected Groups** is blank, all groups have access to the integration.

    ![Profile Visibility Settings](/images/platgovsalesforce/integrations/profile_visability1.webp)

4. Select an existing group and click **Add** to include it as a **Selected Group**. To remove a
   group from the selected list, select it and click **Remove**. If **Selected Groups** is blank,
   all groups have access to the integration. If there are one or more groups, then access is
   restricted to the specified group.

## Set Up Status Mapping

1. From the Netwrix Dashboard: click **Configuration and Stats** in the **Resources** section, or
   open **Settings** > **Configuration and Stats**.
2. Open the **Jira Configuration** tab.
3. Open the **Status Mapping** tab.

    ![Set up the Jira status mappings for Change Request status](/images/platgovsalesforce/integrations/jira_status_settings.webp)

4. Enter the mappings between your Jira statuses and the Change Request statuses. You must define
   your Jira statuses prior to this step. You can enter multiple Jira statuses for each Change
   Request status, separated by commas. For example, **In Progress, Backlog**. Assign your mapping
   for each of the Change Request statuses:

    - **Approved Values**
    - **Complete Values**
    - **In Progress Values**
    - **Pending Approval Values**
    - **Rejected Values**

5. Check **Is Automatic Sync** to enable Platform Governance for Salesforce to handle the
   synchronization between Jira and Salesforce when a Ticket status is updated to a mapped status.
   without having to click **Push**. If you are using an org where you do not want to create a
   Change Request, leave this unchecked so you can do your research or testing without generating
   Change Requests.

   :::note
   Change Requests are not automatically created, as not all tickets result in a Change Request.
   Tickets must be pushed to Platform Governance for Salesforce to begin the process. If Automatic
   Synchronization is turned on, then changes to the Status and Customizations are synchronized
   between Jira and Platform Governance for Salesforce without the need to keep manually pushing the
   changes.
   :::

6. Click **Save**.
