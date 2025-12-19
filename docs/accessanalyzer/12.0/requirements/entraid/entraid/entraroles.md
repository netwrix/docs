---
title: "Microsoft Entra Roles Auditing Configuration"
description: "Microsoft Entra Roles Auditing Configuration"
sidebar_position: 20
---

# Microsoft Entra Roles Auditing Configuration

Access Analyzer can scan for Microsoft Entra roles information. It scans:

- Microsoft Entra ID (formerly Azure AD)

:::note
A user account with the Global Administrator role is required to register an app with
Microsoft Entra ID.
:::


**Data Collector**

- [Entra Data Collector](/docs/accessanalyzer/12.0/admin/datacollector/entra/overview.md)

**Configuration Settings from the Registered Application**

The following settings are needed from your tenant once you have registered the application:

- Client ID – This is the Application (client) ID for the registered application
- Key – This is the Client Secret Value generated when a new secret is created

    :::warning
    It is not possible to retrieve the value after saving the new key. It must be
    copied first.
    :::


:::note
It is recommended to use the same registered application for the Access and Entra roles
auditing configurations. In this case, these values are only needed once for the tenant. See the
[Microsoft Entra ID Registered Application](#microsoft-entra-id-registered-application) topic for
additional information.
:::


## Permissions

The following permissions are required for Microsoft Entra Roles auditing:

- Microsoft Graph API Application permissions:

    - RoleManagement.Read.Directory

- Resource Manager permissions:

    - Microsoft.Authorization/roleAssignments/read
    - Microsoft.Authorization/roleDefinitions/read
    - Microsoft.Resources/resources/read
    - Microsoft.Resources/subscriptions/read
    - Microsoft.Resources/subscriptions/resources/read
    - Microsoft.Resources/subscriptions/resourceGroups/read
    - Microsoft.Authorization/providerOperations/read
    - Microsoft.Management/managementGroups/read

## Microsoft Entra ID Registered Application

You must have a registered application to assign the required permissions to. It is recommended to
use the same registered application that is used for access auditing using the AzureADInventory data
collector. See the
[Register a Microsoft Entra ID Application](/docs/accessanalyzer/12.0/requirements/entraid/entraid/access.md#register-a-microsoft-entra-id-application)
topic for additional information on registering an application.

The Client ID and Key for the registered application are required for the Access Analyzer connection
profile. If, as recommended, you are using a single registered application for the tenant, then you
do not need to add an additional user credential in the connection profile. If you create a separate
registered application for Entra roles auditing, then the Client ID and Key for this must be added
to the connection profile as an additional Azure Active Directory user credential. See the
[Microsoft Entra ID Connection Profile & Host List](/docs/accessanalyzer/12.0/admin/datacollector/azureadinventory/configurejob.md)
topic for additional information.

Once you have the registered application, the next step is to grant it the required permissions for
the Entra data collector.

## Grant Permissions to the Registered Application

Follow the steps to grant the required permissions to the registered application.

**Step 1 –** Log in to [Azure Portal](https://portal.azure.com/).

**Step 2 –** Navigate to the **App registrations** > **All applications** list for your tenant, and
select your registered application.

**Step 3 –** On the registered app blade, click **API permissions** in the Manage section.

**Step 4 –** In the top toolbar, click **Add a permission**.

**Step 5 –** On the Request API permissions blade, select **Microsoft Graph** on the Microsoft APIs
tab. Select the following permissions:

- Under Application Permissions, select:

    - RoleManagement.Read.Directory

**Step 6 –** At the bottom of the page, click **Add Permissions**.

**Step 7 –** Click **Grant Admin Consent for [tenant]**. Then click **Yes** in the confirmation
window.

The permissions have been granted to the registered application. Next, you need to create a custom
role and assign the necessary resource manager permissions.

## Create Custom Role with Resource Manager Permissions

Follow the steps to create the required custom role and assign the necessary permissions.

**Step 1 –** In Azure portal, navigate to **Management groups** within the Microsoft Entra tenant.

- You can either use the search bar or select **All services** on the navigation menu to find the
  Management groups dashboard.

**Step 2 –** Select the **Tenant Root Group** to navigate to the Overview page of the management
group.

:::info
It is recommended to create this custom role at the root management group level.
This ensures that all of necessary information on the Microsoft Entra environment is collected.
Creating the custom role on a lower level management group can result in missing data.
:::


**Step 3 –** Navigate to **Access Control (IAM)** on the left side menu.

**Step 4 –** On the Access Control (IAM) panel, click **Add** and then select **Add custom role**.

**Step 5 –** On the Create a custom role page, enter a role name. Optionally, add a description for
the custom role.

**Step 6 –** Select the Permissions tab, then click **Add permissions** and assign the following
permissions:

- Microsoft.Authorization/roleAssignments/read
- Microsoft.Authorization/roleDefinitions/read
- Microsoft.Resources/resources/read
- Microsoft.Resources/subscriptions/read
- Microsoft.Resources/subscriptions/resources/read
- Microsoft.Resources/subscriptions/resourceGroups/read
- Microsoft.Authorization/providerOperations/read
- Microsoft.Management/managementGroups/read

Alternatively, you can edit the JSON to assign the permissions. To do so, go to the JSON tab and
edit the permissions section of the JSON to be the following:

```json
"permissions": [
    {
        "actions": [
            "Microsoft.Authorization/roleAssignments/read",
            "Microsoft.Authorization/roleDefinitions/read",
            "Microsoft.Resources/resources/read",
            "Microsoft.Resources/subscriptions/read",
            "Microsoft.Resources/subscriptions/resources/read",
            "Microsoft.Resources/subscriptions/resourceGroups/read",
            "Microsoft.Authorization/providerOperations/read",
            "Microsoft.Management/managementGroups/read"
        ],
        "notActions": [],
        "dataActions": [],
        "notDataActions": []
    }
```

:::info
After editing the JSON, go back to the Permissions tab and verify the list of
permissions.
:::


**Step 7 –** Once the permissions are configured, click **Create** on the Review + create tab to
finish creating the custom role.

Now that you have created the custom role with the necessary permissions, you must assign this
custom role to the registered application.

## Assign the Custom Role to the App Registration

Follow the steps to assign the custom role to your registered application.

**Step 1 –** Navigate back to Access Control (IAM) in the Tenant Root Group.

**Step 2 –** On the Access control (IAM) panel, click **Add** and select **Add role assignment**.

**Step 3 –** On the Add role assignment page, select the newly created role and click **Next**.

- You can use the search bar to easily find the custom role.

**Step 4 –** On the Members tab, select the Assign access to option as **User, group, or service
principal**. Then, click **Select members** and search for your registered application. Select the
application from the list and click **Select**.

**Step 5 –** On the Review + assign tab, click **Review + assign** to complete the role assignment.

The registered application has now been configured with all the necessary permissions for Entra
roles scans.
