---
title: "Create a Directory Manager Portal"
description: "Create, deploy, copy, and launch a Directory Manager portal in native or remote IIS, including Self-Service Password Reset portals."
keywords:
  - Directory Manager portal
  - native IIS
  - remote IIS
  - Self-Service Password Reset portal
  - deployment instance
sidebar_position: 10
---

# Create a Directory Manager Portal

Admin Center lets you quickly build and deploy a web-based portal named Directory Manager portal, for end users to carry out user, group, and entitlement management tasks. Users can also view detailed reports on the current state and health of the directory.

You can create multiple Directory Manager portals and multiple instances of a portal. You can also create a Self-Service Password Reset (SSPR) portal, which is a kind of Directory Manager portal that only facilitates password-related functions.

## Host a portal

A portal is hosted on a web server, with native IIS and remote IIS as the supported servers.

- IIS Deployment - Your Directory Manager portal is hosted within a site in IIS. To launch IIS, see [Opening IIS Manager](https://learn.microsoft.com/en-us/previous-versions/iis/6.0-sdk/ms525920(v=vs.90)).

  ![IIS Manager showing the Directory Manager portal hosted in an IIS site](/images/directorymanager/11.1/admincenter/portal/in_iis.webp)

## Deploy multiple instances of a portal

For load balancing and high availability, Directory Manager lets you create multiple Directory Manager portals, and even create multiple instances of the same portal. You can host different instances on different web servers. For example, you can create two instances of a portal while hosting one in native IIS and another in remote IIS.

Multiple instances of a portal share the same design settings and the same server settings, except that each instance has its own deployment settings. A change to the shared settings propagates to all deployment instances.

Because you can create multiple Data services and Security services in Directory Manager, you can bind a different Data service and Security service with each deployment instance of a portal. In this way, different instances use different services for improved response times and load balancing.

## Create a portal in native IIS

When you create a portal in native IIS, Directory Manager does the following:

- It creates a directory with the portal's name at the following physical path on the Directory Manager server, and copies the portal files from its template directory to the new portal directory: `X:\Program Files\Imanami\GroupID 11.0\GroupIDPortal\Inetpub\`. `X` represents the Directory Manager installation drive.
- It also creates a virtual directory for the portal in your desired IIS site.

The portal runs within a virtual directory in native IIS while the portal files are physically located on disk.

**To create a portal:**

1. In Admin Center, click **Applications** in the left pane.
2. Click **Add Application**.
3. On the next page, select **GroupID Portal** and click **Next step**.
4. On the **Create GroupID Application** page, ensure the **IIS** tile is selected.
5. In the **Application Name** box, enter a unique name for the portal or use the default name. The portal is displayed with this name in Directory Manager.
6. In the **Deployment Name** box, enter a deployment name for the portal. This name indicates the deployment instance for the portal in Directory Manager.

   A portal can have multiple deployments, for example, one in native IIS and another in remote IIS. The application name and deployment name are displayed on the portal card on the **GroupID Portal** tab.

   ![Portal card showing the application name and deployment name](/images/directorymanager/11.1/admincenter/portal/portal_card.webp)

7. In the **IIS Application Name** box, enter an IIS deployment name for the portal. This name should be unique for each portal deployed in IIS.

   - The IIS application name names the portal's directory in IIS and its physical directory under **X:\Program Files\Imanami\GroupID 11.0\GroupIDPortal\Inetpub** on the Directory Manager server. (X represents the Directory Manager installation drive.)
   - Directory Manager also appends this IIS application name to the web server address to construct the URL that users click to access this deployment instance of the portal. For example: `https://web-server-name:port/IIS-application-name`. Hence, a different URL is constructed for each deployment of a portal in IIS.

8. In the **IIS Site** dropdown list, select a website to host the portal files. The list displays the websites defined on the native IIS server. `GroupIDSite11` is the default selection.
9. In the **Service Endpoints** area, bind a Data service and a Security service with the portal.

   1. In the **Data Service** dropdown list, select a Data service for the portal to use. The list contains all Data services defined in Directory Manager.
   2. In the **Security Service** dropdown list, select a Security service for the portal to use. The list contains all Security services defined in Directory Manager.

10. In the **Support Information** area, enter internal contact information and resource links for the portal's users to obtain help while using the portal.

    A portal includes a **Contact** link and a **Help** icon on its web interface. The **Contact** link launches an email application to send an email to a user or helpdesk for inquiries or support. The **Help** icon launches the online help for the portal in a new browser window. Both links are customizable, and you specify their target email address or web address in the **Support Information** area.

    1. In the **Support group or administrator's email address** box, enter the email address of a group or user to redirect user queries to. This email address is mapped to the **Contact** link in the portal.
    2. In the **Help URL** box, specify the address of your company's internal support website or the portal's help page, where portal users can find support material or report a problem. By default, this box displays the URL of the portal's help published by Netwrix. This URL is mapped to the **Help** icon in the portal.

11. (Optional) Select the **Password Center Mode** checkbox to create this portal as a Self-Service Password Reset portal (SSPR).

    An SSPR portal doesn't offer the standard functions of a Directory Manager portal, such as group management, user management, or entitlement management. It is exclusively dedicated to password-related activities. Use this portal to manage your directory account passwords, meaning the password for the account you use to access your workstations and other Microsoft services. You can change and reset your passwords, as well as unlock your accounts. You can also enroll your accounts in Directory Manager and link accounts in different identity stores.

    The SSPR portal doesn't have design settings and advanced settings, like a standard Directory Manager portal has. For this reason, the following configurations aren't available when you select the **Password Center Mode** checkbox:

    - The **Import Design** option for identity stores in the Select Identity Stores area
    - The Advanced Settings area

    :::note
    Directory Manager doesn't support the upgrade of a Password Center portal (from a previous version) to an SSPR portal. You have to create the SSPR portal as a new portal.
    :::

12. In the **Select Identity Stores** area, select the checkboxes for the identity stores you want to associate with the portal. Users in the associated identity stores can sign in to the portal to manage directory objects, their directory profiles, and more.

    While you associate identity stores, you may get the following message:

    ![Message prompting you to associate the second identity store in a linked pair with the portal](/images/directorymanager/11.1/admincenter/portal/linked_message.webp)

    This message relates to the scenario when identity stores in Directory Manager have been linked, as discussed in the [Linked Identity Stores and the Directory Manager Portal](/docs/directorymanager/11.1/admincenter/identitystore/link/overview.md#linked-identity-stores-and-the-directory-manager-portal) topic. Hence, when two identity stores (IdentityStoreA and IdentityStoreB) are linked and you associate IdentityStoreA with the portal, Directory Manager displays this message. It alerts you to associate the second identity store in the linked pair (IdentityStoreB) with the portal too, to benefit from the linking.

13. Each identity store associated with a portal has its own set of design settings, as listed in the [Design a Directory Manager Portal with Display Types](/docs/directorymanager/11.1/admincenter/applications/portal/displaytype/overview.md) topic.

    If you are upgrading to Directory Manager 11 from GroupID 9 or GroupID 10, you can import the design settings for an identity store from a Self-Service portal in a previous version, as an alternative to manually defining these settings. The following are the details of the file containing identity store design settings for a Self-Service portal in GroupID 9 and 10:

    **Design file name:** `<Identity store name>.xml`

    For example: `ADStore.xml`. A separate design file exists for each identity store linked with a Self-Service portal.

    **File location in GroupID 9/10:** [GroupID installation drive]:\Program Files\Imanami\GroupID `version`\SelfService\Inetpub\&lt;portal name&gt;\Design\

    For example: `C:\Program Files\Imanami\GroupID 10.0\SelfService\Inetpub\TestPortal\Design\`

    Similarly, a separate file exists for each linked combo created in the Self-Service portal.

    **Linked combo file name:** The file has the same name as that of the linked combo in the portal. For example: `Country-State.xml`

    **File location in GroupID 9/10:** All linked combo files, regardless of the identity store they are used for, are available at the following path: [GroupID installation drive]:\Program Files\Imanami\GroupID `version`\SelfService\Inetpub\&lt;portal name&gt;\Web\LinkedCombo\

    For example: `C:\Program Files\Imanami\GroupID 10.0\SelfService\Inetpub\TestPortal\Web\LinkedCombo\`

    **To import the design file and linked combo files, do the following:**

    1. As a prerequisite to the Directory Manager 11 upgrade, the folder structure for the source version was copied to the Directory Manager 11 server. In this case, the design and linked combo files for all portals in the previous version are already available on the machine. Otherwise, copy the previously mentioned files for the respective identity stores associated with the Self-Service portal, and place them on your local machine or a shared network location.
    2. In the **Select Identity Stores** area, click **Import Design** next to an identity store name to import the design file for it.
    3. Browse for the file to select and import it. The import process takes a while.

       Each identity store associated with a Self-Service portal has its own design file, so ensure you import the correct file. For example, if Identity Store A is associated with two Self-Service portals, then these are two different design files for the same identity store, though at different locations.

    4. After the file is uploaded, a message is displayed, showing the number of linked combos defined in the imported design settings and prompting you to import the respective linked combo files.

       Browse to the location of the linked combo files and import those that represent the linked combos defined in the design settings.

14. A portal has certain advanced settings defined for it, as discussed in the [Manage Advanced Portal Settings in Directory Manager](/docs/directorymanager/11.1/admincenter/applications/portal/server/advanced.md) topic.

    If you are upgrading to Directory Manager 11 from GroupID 9 or GroupID 10, you can import the advanced settings of a Self-Service portal from a previous version as an alternative to defining settings manually. The following are the details of the file containing advanced settings for a Self-Service portal in GroupID 9 and 10:

    **File name:** server.xml. A separate file exists for each Self-Service portal.

    **File location in GroupID 9/10:** [GroupID installation drive]:\Program Files\Imanami\GroupID `version`\SelfService\Inetpub\&lt;portal name&gt;\

    For example: `C:\Program Files\Imanami\GroupID 10.0\SelfService\Inetpub\TestPortal\`

    **To import the file, do the following:**

    1. As a prerequisite to the Directory Manager 11 upgrade, the folder structure for the source version was copied to the Directory Manager 11 server. In this case, the server.xml file for all portals in the previous version is already available on the machine. Otherwise, copy the server.xml file for the Self-Service portal whose advanced settings you want to import, and place it on your local machine or a shared network location.
    2. On the **Create GroupID Application** page, click **Import Settings** in the **Advanced Settings** area.
    3. Browse for the file to select and import it. The import process takes a while.

15. Click **Create Application**.

    The new portal is displayed on the **GroupID Portal** tab. You can differentiate between a standard Directory Manager portal and an SSPR portal from the portal logo, as each portal type has its own logo.

## Create a portal in remote IIS

You can host a portal within a site in remote IIS. For this, you need to connect with the Microsoft IIS Administration API running on the remote IIS machine.

When you create a portal in remote IIS, Directory Manager does the following:

- It creates a virtual directory for the portal in a preconfigured site in remote IIS.
- It creates a physical directory for the portal in the folder that is mapped to this preconfigured site.

The portal runs within a virtual directory in remote IIS while the portal files are physically located on disk.

To learn about the remote IIS settings and configurations before hosting a portal, see the [Prerequisites for Deploying Directory Manager in Remote IIS](/docs/directorymanager/11.1/admincenter/applications/remoteiisprerequisites.md) topic.

**To create a portal:**

1. In Admin Center, click **Applications** in the left pane.
2. Click **Add Application**.
3. On the next page, select **GroupID Portal** and click **Next step**.
4. On the **Create GroupID Application** page, select the **Remote IIS** tile.
5. In the **Application Name** box, enter a unique name for the portal or use the default name. The portal is displayed in Directory Manager with this name.
6. In the **Deployment Name** box, enter a deployment name for the portal. This name indicates the deployment instance for the portal in Directory Manager. A portal can have multiple deployments, for example, one in native IIS and another in remote IIS.

   The application name and deployment name are displayed on the portal card on the **GroupID Portal** tab.

7. In the **API URL** box, enter the URL of the API to use for communicating with the remote IIS server.

   Ensure the [Microsoft IIS Administration API](https://learn.microsoft.com/en-us/iis-administration/) is installed as a Windows service on the remote IIS machine. Fetch the URL of this API from remote IIS and provide it here to enable communication.

8. In the **Access Token** box, enter the access token to allow Admin Center to access the Microsoft IIS Administration API. You generate this access token from the Microsoft IIS Administration API's interface.
9. In the **Username** and **Password** boxes, enter the credentials of a Windows account to communicate with the API. This account must have access to the remote IIS machine, with sufficient permissions to create and manipulate objects in IIS.
10. In the **IIS Application Name** box, enter an IIS deployment name for the portal. This name should be unique for each portal deployed within the same site in remote IIS.

    - The IIS application name names the portal's directory in the IIS site and its physical directory on the remote IIS machine. Directory Manager creates the physical directory within the folder that is mapped to the preconfigured site, and copies portal files to it.
    - Directory Manager also appends this IIS application name to the web server address to construct the URL that users click to access this deployment instance of the portal. For example: `https://web-server-name:port/IIS-application-name`. Hence, a different URL is constructed for each deployment of a portal in remote IIS.

11. After you provide the preceding information, the **Website** dropdown list displays the sites defined on the remote IIS server. Select the site that you configured with the appropriate permissions for Directory Manager.
12. To enter information in the **Service Endpoints**, **Support Information**, **Password Center
    Mode**, **Select Identity Stores**, and **Advanced Settings** areas and create the portal, follow the steps in the [Create a portal in native IIS](#create-a-portal-in-native-iis) topic, starting at Step 9.

## Create a Self-Service Password Reset portal

You can create a Directory Manager portal as a Self-Service Password Reset portal (SSPR) in native IIS and remote IIS. An SSPR portal only provides password management functions to end users.

Creating an SSPR portal is similar to creating a standard Directory Manager portal. You only have to select the **Password Center Mode** checkbox on the **Create GroupID Application** page. For details, see Step 11 in the [Create a portal in native IIS](#create-a-portal-in-native-iis) topic.

:::note
Directory Manager doesn't support the upgrade of a Password Center portal (from a previous version) to an SSPR portal. You have to create the SSPR portal as a new portal.
:::

## Deploy another instance of a portal

You can deploy more than one instance of a portal. You can deploy instances on different web servers, for example, one in native IIS and another in remote IIS. For more on how instances work, see the [Deploy multiple instances of a portal](#deploy-multiple-instances-of-a-portal) topic.

To deploy a new instance, you have to provide deployment details only. All instances share the same server and design configurations, while only deployment details differ. For example, all instances serve the same identity stores and have the same display and search-related configurations. Changing a shared setting propagates to all deployment instances of the portal.

:::note
An SSPR portal doesn't have design settings. Hence, only server settings are shared across multiple instances.
:::

**To deploy an instance:**

1. In Admin Center, select **Applications** in the left pane.
2. On the **GroupID Portal** tab, click the ellipsis button for a portal and select **Deploy Another Instance**.
3. On the **Deploy Another Instance** page, select the **IIS** or **Remote IIS** tile to indicate the web server where you want to deploy the instance.

   The **Application Name** field displays the name of the portal as read-only.

4. Fill in the fields on the page. The fields vary, depending on the web server selected. In any case, the **Support
   Information**, **Select Identity Stores**, and **Advanced Settings** areas aren't available, as they remain the same for all instances.

   - To deploy an instance in native IIS, follow steps 6-9 in the [Create a portal in native IIS](#create-a-portal-in-native-iis) topic.
   - To deploy an instance in remote IIS, follow steps 6-12 in the [Create a portal in remote IIS](#create-a-portal-in-remote-iis) topic.

5. After entering the required information, click **Deploy Instance**.

   The new instance is displayed on the portal's card.

## Create a portal by copying an existing portal

You can create a new portal by copying an existing portal. All server and design configurations of the template portal are duplicated to the new portal. Deployment details aren't duplicated, so you can choose to deploy the new portal in any of the supported web servers. Consider the following:

- You can create an SSPR portal by copying a standard Directory Manager portal. In this case, the design settings of the base portal aren't duplicated as the SSPR portal doesn't have design settings.
- You can create a standard Directory Manager portal by copying an SSPR portal. As the SSPR portal doesn't have design settings, the new portal is created with the default design settings. You can modify them as needed.

**To create a portal:**

1. In Admin Center, select **Applications** in the left pane.
2. On the **GroupID Portal** tab, click the ellipsis button for a portal and select **Copy**.

   The **Copy GroupID Application** page opens, populated with the following settings of the copied portal:

   - The Data service and Security service linked to the portal
   - The support information for the portal, meaning the admin or helpdesk contact email address and the portal's help URL
   - The identity stores associated with the portal

3. Deploy the new portal in native IIS or remote IIS.

   - To specify settings for a native IIS deployment, follow the instructions in the [Create a portal in native IIS](#create-a-portal-in-native-iis) topic, beginning at Step 4.
   - To specify settings for a remote IIS deployment, follow the instructions in the [Create a portal in remote IIS](#create-a-portal-in-remote-iis) topic, beginning at Step 4.

## View the details of a portal

1. In Admin Center, click **Applications** in the left pane.

   The **GroupID Portal** tab displays the portals that you created.

2. View the card for a portal. It displays the following information:

    | Info                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
    | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Name                 | The name given to the portal. Next to the portal name is the portal logo, which you can use to differentiate between a standard Directory Manager portal and an SSPR portal, as each portal type has its own logo.                                                                                                                                                                                                                                                                                                                                                                                                                |
    | Identity Stores      | The names of the identity stores the portal serves.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
    | Deployment Instances | Displays the deployment instances of the portal as tiles. A tile shows the deployment name of the instance and the web server where it is deployed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
    | Status               | A portal has one of the following statuses: - **Running:** Indicates that the portal is running. - **Stopped:** Indicates that Directory Manager is unable to communicate with the portal. To troubleshoot, go to the web server where the portal is deployed and ensure the portal is running. - **Error:** Any issue other than stopped is categorized as error. In this case, contact your system administrator.                                                                                                                                                                                                |
    | Launch Application   | Click the **Launch Application** link to launch the portal. When multiple deployments of a portal are available, select the tile for a deployment instance and click **Launch Application** to launch that instance.                                                                                                                                                                                                                                                                                                                                                                                                                                                |
    | Ellipsis             | Click it to launch a shortcut menu with the following options: - **Settings:** Launches the portal settings page, where you can manage server and design settings. - **Server Settings:** Includes the deployment details of each portal instance, the help URL for the portal, the identity stores linked with the portal, and more. - **Design settings:** These settings relate to the portal's user interface. - **Deploy Another Instance:** Deploy another instance of the portal. - **Copy:** Create a new portal by copying the settings of this portal. - **Delete:** Deletes the portal. |

You may notice a portal with an orange card and an orange icon on the card. When you hover the mouse over the icon, the tooltip says "linked mode will not be allowed". This relates to the scenario when identity stores in Directory Manager have been linked, as discussed in the [Linked Identity Stores and the Directory Manager Portal](/docs/directorymanager/11.1/admincenter/identitystore/link/overview.md#linked-identity-stores-and-the-directory-manager-portal) topic. Hence, when two identity stores (IdentityStoreA and IdentityStoreB) are linked and you associate IdentityStoreA with the portal, the portal card appears in orange. It informs you to associate the second identity store in the linked pair (IdentityStoreB) with the portal too, to benefit from the linking.

## Launch a portal

1. In Admin Center, select **Applications** in the left pane.
2. On the **GroupID Portal** tab, click **Launch Application** on a portal's card to launch it.

   When multiple deployments of a portal are available, select a deployment instance on the card and click **Launch Application** to launch that instance.

   Provide the URL of an instance to your users so they can access the portal. You can either copy the URL from the address bar or from a portal's deployment settings. See the [View the Launch URL for an Instance](server/nativeiis.md#view-the-launch-url-for-an-instance) topic.
