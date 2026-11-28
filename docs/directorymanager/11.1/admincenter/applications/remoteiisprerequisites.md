---
title: "Prerequisites for Deploying Directory Manager in Remote IIS"
description: "Install the required software, create and secure an IIS site, and generate an access key to deploy Directory Manager in remote IIS."
keywords:
  - remote IIS
  - ASP.NET Core Hosting Bundle
  - Microsoft IIS Administration API
  - IIS_IUSRS permissions
  - access key
sidebar_position: 30
---

# Prerequisites for Deploying Directory Manager in Remote IIS

To deploy Directory Manager portals and services (Data service and Security service) in remote IIS,
set up these prerequisites:

- Install the required software.
- Create a site in remote IIS for deploying the Directory Manager portal and services, and assign
  permissions.
- Generate an access key for the Microsoft IIS Administration API.

## Prerequisite software

Before you deploy Directory Manager portals and services in remote IIS, install the following
software on the remote IIS machine, in this order:

1. ASP.NET Core Runtime 6.0.30 (Hosting Bundle)
   [Download ASP.NET Core Runtime 6.0.30 (Hosting Bundle)](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-aspnetcore-6.0.30-windows-hosting-bundle-installer).
2. .NET Desktop Runtime 6.0.30
   [Download .NET Desktop Runtime 6.0.30](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-desktop-6.0.30-windows-x64-installer).
3. ASP.NET Core Runtime 2.1.25 (Hosting Bundle)
   [Download ASP.NET Core Runtime 2.1.25](https://dotnet.microsoft.com/download/dotnet/2.1).
4. Microsoft IIS Administration 2.3.0
   [Download Microsoft IIS Administration 2.3.0](https://github.com/microsoft/IIS.Administration/releases/tag/v2.3.0).

## Create a site in remote IIS

Before you deploy a Directory Manager application in remote IIS, create a site there and assign
appropriate permissions to it. Create Directory Manager portals and services within this site.

**To create a site in remote IIS:**

1. Open Internet Information Services (IIS) Manager. See
   [Opening IIS Manager](https://learn.microsoft.com/en-us/previous-versions/iis/6.0-sdk/ms525920(v=vs.90)).
2. In the left pane, right-click **Sites** and select **Add Website**.

   ![Right-click menu on Sites in IIS Manager with Add Website selected](/images/directorymanager/11.1/admincenter/portal/addsite.webp)

3. Enter the following information and click **OK**:

   ![Add Website window with site name, physical path, and binding fields](/images/directorymanager/11.1/admincenter/portal/addwebsite.webp)

   1. Enter a name for the site in the **Site name** box.
   2. Create a new folder on the remote machine and bind this site to that folder. Enter the
      physical path of the new folder in the **Physical path** box. When you create a Directory
      Manager application in the site, Directory Manager creates a subfolder within this folder and
      copies the application files to it.
   3. Enter binding information in the **Binding** section:

      - Type: HTTPS
      - Port: any available port

   4. Select an SSL certificate from the **SSL certificate** dropdown list.

### Assign permissions

Next, assign permissions on the physical folder that binds to your site in remote IIS.

1. Go to the physical path of your IIS site folder and grant Full Control to the local group
   IIS_IUSRS on this folder. To assign these permissions:

   1. Right-click the group you created and select **Properties**.
   2. Select the **Security** tab.
   3. Click **Edit**.
   4. Click **Add**.
   5. Click **Locations**.
   6. Select your machine name from the list in the **Locations** box. Click **OK**.
   7. In the **Enter the object names** box, enter `IIS_IUSRS` and click the **Check Names** button.
      The group name appears as follows:

      ```
      `<your machine name>`\IIS_IUSRS
      ```

   8. Click **OK**.
   9. Allow Full Control to the `IIS_IUSRS` group.
   10. Click **Apply** and then click **OK**.
   11. Click **OK** to close the **Permissions for `<folder name>`** dialog box.
   12. Click **OK** to close the **`<folder name>` Properties** dialog box.

   The required permissions are now assigned to the folder.

2. After you assign the permissions, go to the following path:

   ```
      C:\Program Files\IIS Administration\2.3.0\Microsoft.IIS.Administration\config\
   ```

3. Open the **appsettings.json** file and add the highlighted script at the end of the file:

   ![appsettings.json file with the highlighted script added at the end](/images/directorymanager/11.1/admincenter/portal/appsettings-full.webp)

4. Add the following script:

    ```
       },
       "files": {
           "locations": [
             {
               "alias": "<site_name>",
               "path": "<site_folder_name>",
               "claims": [
                 "read",
                 "write"
               ]
             }
           ]
         }

    ```

   :::tip
   Provide values for the alias ("site name") and the path ("physical folder location of the
   site") that you created in the Create a Site in Remote IIS section.
   :::

## Generate an access key

Admin Center uses the
[Microsoft IIS Administration API](https://docs.microsoft.com/en-us/iis-administration/) to
communicate with remote IIS. Install this API as a Windows service on the remote IIS machine.

To connect to the API, you need an access key.

1. Go to _https://localhost:55539/_ to open the Microsoft IIS Administration API interface.

   :::note
   This is the default URL. It might change, for example when you use a different port.
   :::

2. Click **ACCESS KEYS**.

   ![Microsoft IIS Administration API page with the Access Keys tab](/images/directorymanager/11.1/admincenter/portal/accesskeys.webp)

3. Click **Create Access Key** to generate an access key and provide the following information:

   ![Create Access Key window with the purpose field](/images/directorymanager/11.1/admincenter/portal/accesskeyspurpose.webp)

4. Click **Create** to generate the access key.

   ![Access token window showing the generated access key](/images/directorymanager/11.1/admincenter/portal/accesstoken.webp)
