---
title: "Prerequisites for Deployments in Remote IIS"
description: "Prerequisites for Deployments in Remote IIS"
sidebar_position: 30
---

# Prerequisites for Deployments in Remote IIS

To deploy GroupID portals and services (Data service, Security service, and Mobile service) in
remote IIS, you must set up the following prerequisites:

- Install the required software
- Create a site in remote IIS for deploying the GroupID portal and services, and assign permissions
- Generate an access key for the Microsoft IIS Administration API

## Prerequisite Software

Before you can deploy GroupID portals and services in remote IIS, make sure the following
prerequisite software is installed on the remote IIS machine. Install them in the following order:

1. ASP.NET Core Runtime 6.0.30 (Hosting Bundle)
   Click [here](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-aspnetcore-6.0.30-windows-hosting-bundle-installer)
   to download.
2. .NET Desktop Runtime 6.0.30
   Click [here](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-desktop-6.0.30-windows-x64-installer)
   to download.
3. ASP.NET Core Runtime 2.1.25 (Hosting Bundle)
   Click [here](https://dotnet.microsoft.com/download/dotnet/2.1) to download.
4. Microsoft IIS Administration 2.3.0
   Click [here](https://github.com/microsoft/IIS.Administration/releases/tag/v2.3.0) to download.

## Create a Site in Remote IIS

As a prerequisite to deploying a GroupID application in remote IIS, you need to create a site there
and assign appropriate permissions to it. GroupID portals and services should be created within this
site.

**To create a site in remote IIS:**

1. Launch Internet Information Services (IIS) Manager (see
   [Opening IIS Manager](https://docs.microsoft.com/en-us/previous-versions/iis/6.0-sdk/ms525920(v=vs.90).
2. In the left pane, right-click **Sites** and select **Add Website**.

    ![Add a website in IIS](/images/directorymanager/11.0/admincenter/portal/addsite.webp)

3. Enter the information as shown below and click **OK**:

    ![Add Website window](/images/directorymanager/11.0/admincenter/portal/addwebsite.webp)

    1. Enter a name for the site in the **Site name** box.
    2. Create a new folder on the remote machine and bind this site to that folder. Provide the
       physical path of the newly created folder in the **Physical path** box. When you create a
       GroupID application in the site, a sub-folder will be created within this folder and
       application files will be copied to it.
    3. Provide binding information in the **Binding** section.

        - Type: HTTPS
        - Port: any available port

    4. Select an SSL certificate from the **SSL certificate** dropdown list.

### Assign Permissions

The next step is to assign permissions on the physical folder that binds to your site in remote IIS.

1. Go to the physical path of your IIS site folder and provide the full control to a local group
   IIS_IUSRS on this folder.
   To assign these permissions:

    1. Right click the group you created and select **Properties**.
    2. Select the **Security** tab.
    3. Click **Edit**.
    4. Click **Add**.
    5. Click **Locations**.
    6. Select your machine name from the list in the **Locations** box. Click **OK**.
    7. In the **Enter the object names** box type _IIS_IUSRS_ and click the **Check Names** button.
       The group name should appear as follows:

        ```
        <your machine name>\IIS_IUSRS
        ```

    8. Click **OK**.
    9. Allow Full Control to _IIS_IUSRS_ group.
    10. Click **Apply** and then click **OK**.
    11. Click **OK** to close the **Permissions for `<folder name>`** dialog box.
    12. Click **OK** to close the **`<folder name>` Properties** dialog box.
    13. The required permissions have been assigned to the folder.

2. After assigning the permissions, go to the following path

    ```
       C:\Program Files\IIS Administration\2.3.0\Microsoft.IIS.Administration\config\
    ```

3. Open the **appsettings.json** file and add the highlighted script at the end of the file:

    ![Script for appsettings.json file](/images/directorymanager/11.0/admincenter/portal/appsettings-full.webp)

4. The script to be added is given below:

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

    Remember, to provide values for alias "site name" and path "physical folder location of the
    site", created in the section [Create a Site in Remote IIS](#create-a-site-in-remote-iis).

## Generate an Access Key

Admin Center uses the
[Microsoft IIS Administration API](https://docs.microsoft.com/en-us/iis-administration/) to
communicate with remote IIS. Make sure this API is instphysical folder location of the site",
created in the section [Create a Site in Remote IIS](#create-a-site-in-remote-iis)alled as a Windows
service on the remote IIS machine.

To connect to the API, an access key is required. Follow the steps below to generate it.

1. Go to _https://localhost:55539/_ to launch the Microsoft Administration API interface.
   Note that this is the default URL. It may change for reasons such as when a different port is
   used.
2. Click **ACCESS KEYS**.

    ![Access Keys](/images/directorymanager/11.0/admincenter/portal/accesskeys.webp)

3. Click **Create Access Key** to generate an access key and provide the following information:

    ![Access Key Purpose window](/images/directorymanager/11.0/admincenter/portal/accesskeyspurpose.webp)

4. On clicking **Create**, the access key is generated.

    ![Access Token window](/images/directorymanager/11.0/admincenter/portal/accesstoken.webp)

**See Also**

- [GroupID Applications](/docs/directorymanager/11.0/signin/applications/applications.md)
- [GroupID Portal](/docs/directorymanager/11.0/signin/applications/portal/overview.md)
