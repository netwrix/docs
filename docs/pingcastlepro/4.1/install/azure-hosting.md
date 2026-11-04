---
title: "Azure hosting"
description: "Host PingCastle Pro in an Azure App Service: create the web app and database, deploy the files, set the application settings, and debug startup."
sidebar_position: 80
---

# Azure hosting

PingCastle Pro runs in an Azure App Service. To host it in Azure, you create a web app and a database, deploy the PingCastle Pro files to the web app, and copy the application settings into the web app's **Configuration** page.

## Create the App Service

1. In the Azure portal, create an App Service.

   ![Azure App Service creation interface](/images/pingcastleenterprise/3.5/install/image70.webp)

   You can use an Azure template to create the web app and the database together.

   ![Azure template selection for web app and database](/images/pingcastleenterprise/3.5/install/image71.webp)

   ![Azure template configuration details](/images/pingcastleenterprise/3.5/install/image72.webp)

2. If you create the web app as a Docker container, set the application settings on the server in the next section. Azure doesn't copy the settings from `appsettings.Production.json` into the image. It shows them as environment variables instead.

## Deploy the files

1. Install the [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli-windows).
2. Run the following command to deploy the PingCastle Pro zip package to the web app:

   ```bash
   az webapp deploy --resource-group <group-name> --name <app-name> --src-path <zip-package-path>
   ```

   {/* TODO: confirm which zip package to pass as --src-path (see Custom installation) */}

3. Run `az webapp` commands to view the web app you created. For deployment options, see [Deploy files to App Service](https://learn.microsoft.com/en-us/azure/app-service/deploy-zip?tabs=cli).

:::note
Your Azure configuration may require additional steps.
:::

## Set the application settings

In the web app, select **Configuration**, then add the following settings. These replace the values you set in `appsettings.Production.json` for an on-premises installation. See [Custom installation](custom-installation.md#configure-appsettingsproductionjson).

![Azure App Service Configuration page showing the database and license application settings and the DefaultConnection connection string](/images/pingcastlepro/4.1/proinstall/image50.webp)

| Where | Name | Value |
|---|---|---|
| **Application settings** | `database` | `sqlserver` or `postgres` |
| **Application settings** | `license` | The license key |
| **Connection strings** | `DefaultConnection` | The database connection string. For Azure SQL, set **Type** to **SQLAzure**. |

To send email notifications, add the email settings as application settings. Azure uses a double underscore (`__`) for each level of a nested setting:

| Name | Value |
|---|---|
| `Email__Email` | The address PingCastle Pro sends email from |
| `Email__Host` | The SMTP server address |
| `Email__Port` | The SMTP server port |
| `Email__Login` | The SMTP user name. Optional. |
| `Email__Password` | The SMTP password. Optional. |

Select **Save**, then restart the web app.

## Debug startup issues

If the web app doesn't start, turn on App Service logs and read the log stream.

1. In the web app, enable **App Service Logs**.

   ![Enabling App Service Logs in Azure](/images/pingcastleenterprise/3.5/install/image75.webp)

2. Open the log stream.

   ![App Service log stream view](/images/pingcastleenterprise/3.5/install/image76.webp)

A common cause is a missing connection string. In the following example, the application couldn't find the connection string because Docker doesn't forward it. Add `DefaultConnection` in **Configuration** before the application can start.

![Connection string error displayed in log stream](/images/pingcastleenterprise/3.5/install/image77.webp)

