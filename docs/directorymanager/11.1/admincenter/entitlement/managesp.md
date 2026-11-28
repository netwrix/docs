---
title: "Manage SharePoint Sites for Directory Manager Entitlement"
description: "Add SharePoint sites to a Microsoft Entra ID identity store, replicate their permissions to Elasticsearch, and manage the service account and libraries."
keywords:
  - SharePoint entitlement
  - SharePoint admin URL
  - document library permissions
  - Elasticsearch replication
  - Microsoft Entra ID identity store
sidebar_position: 20
---

# Manage SharePoint Sites for Directory Manager Entitlement

An Entra ID user who is signed in to Admin Center and isn't a multifactor authentication (MFA) user can add and configure SharePoint sites in an Entra ID identity store. Directory Manager then replicates the entitlement data of those sites to Elasticsearch. The user can manage permissions on the sites and on the document libraries in those sites using Directory Manager.

The user can also manage certain settings for a site. For example, the user can change the service account that reads and manages permissions, or exclude a document library in a site from entitlement management.

## Specify SharePoint sites for entitlement management

Provide the SharePoint admin URL and credentials to connect to SharePoint. Directory Manager fetches all the sites under it to replicate the permissions on document libraries there.

To provide the SharePoint admin URL:

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the Identity Stores page, click the ellipsis button for an identity store and select **Edit**.
3. Click **Entitlement** under **Settings** in the left pane. The Entitlement page appears. When no SharePoint site is defined, the page is blank.
4. Click **Set up SharePoint Site** and then click **Configure New Site**.
5. On the Configure New Site dialog box:

    - In the Site URL box, enter the **SharePoint admin URL** to fetch the sites.
    - In the User name and Password boxes, provide the credentials of a service account. Directory Manager uses it to connect to the site and manage entitlements.
    - In the Application ID box, provide the application ID assigned to the Directory Manager application when you registered it in Microsoft Entra Admin Center.
    - Click **Add Site**.

    The URL of this site appears in the SharePoint Admin URL box on the Entitlement page. All sites under it appear in the Included SharePoint sites area.

6. Click **Save**.

### SharePoint site details

The Included SharePoint Sites area shows the same information for a site as for a file server in an Active Directory identity store. See [File Server Details](/docs/directorymanager/11.1/admincenter/entitlement/managefs.md#file-server-details) for more information. The User name column isn't blank here. It shows the username of the account used to connect to the site.

### Search SharePoint sites

Use the _Search Filters_ option in the Included SharePoint Sites area to search for a site in the listing. The filters are the same as for a file server in an Active Directory identity store. See [Search File Servers](/docs/directorymanager/11.1/admincenter/entitlement/managefs.md#search-file-servers) to perform a search.

## Include future sites for entitlement management

To include future sites for entitlement management:

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select **Edit**.
3. Click **Entitlement** under **Settings** in the left pane.
4. On the **Entitlement** page, select the **Include all future Site** checkbox. Directory Manager then fetches any new site created under the SharePoint admin URL and displays it in the **Included SharePoint Sites** area for permission replication.
5. Click **Save**.

## View the document libraries in a site

To view the document libraries in a site:

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the Identity Stores page, click the ellipsis button for an identity store and select **Edit**.
3. Click **Entitlement** under Settings in the left pane.
4. In the Included SharePoint Sites area on the **Entitlement** page, click the ellipsis button for a site and select **Edit**. On the **Edit Site** dialog box:

    - The Site Libraries area displays the document libraries in the site.
    - Next to **Job**, the name of the [Edit the Directory Manager Entitlement Schedule](/docs/directorymanager/11.1/admincenter/schedule/entitlement.md) appears. This schedule computes the permissions on document libraries in the site and replicates them to Elasticsearch.

## Exclude a document library from replication

By default, Directory Manager computes and replicates permissions on all document libraries in the SharePoint sites that fall under the admin URL. You can exclude a document library in a site from this activity.

When you exclude a document library, Directory Manager also clears the entitlement data replicated for it to date.

To exclude a document library:

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the Identity Stores page, click the ellipsis button for an identity store and select **Edit**.
3. Click **Entitlement** under Settings in the left pane.
4. In the Included SharePoint Sites area on the **Entitlement** page, click the ellipsis button for a site and select **Edit**.
5. On the Edit Site dialog box, the **Site Libraries** area displays the document libraries in the site. Clear the checkbox for a library to exclude it from replication and click **Apply Changes**.
6. Click **Save** on the Entitlement page.

## Connect to a site using a different account

Directory Manager connects to a site using the service account specified while configuring the SharePoint admin URL. It uses this account to read and manage the effective permissions assigned to objects on the document libraries. You can designate a different account for this activity.

To change the service account for a site:

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select **Edit**.
3. Click **Entitlement** under **Settings** in the left pane.
4. In the **Included SharePoint Sites** area on the **Entitlement** page, click the ellipsis button for a site and select **Edit**.
5. On the **Edit Site** dialog box, change the service account used to connect to the site for reading and updating permissions. The following schedules run in the context of the account specified here:

    - [Edit the Directory Manager Entitlement Schedule](/docs/directorymanager/11.1/admincenter/schedule/entitlement.md)
    - [Edit the Directory Manager Entitlement Scope Schedule](/docs/directorymanager/11.1/admincenter/schedule/entitlementscope.md)
    - [Edit the Entitlement Temporary Permissions Schedule](/docs/directorymanager/11.1/admincenter/schedule/entitlementtemporarypermissions.md)

    Choose one of the following:

    - The User name and Password boxes display the credentials of the account used to connect to the site. To connect using a different account, provide the credentials of that account.

    **Or**

    - Select the **Use Identity Store Service Account** checkbox to use the service account specified for the identity store to connect to the site.

    The account must have elevated permissions to the Microsoft web applications that host the site. This lets it read and manage the effective permissions on the document libraries in the site. After you change the credentials, use the **Reconnect** button to test the connectivity and fetch the document libraries again with the given credentials.

6. Click **Apply Changes**.
7. Click **Save** on the Entitlement page.

## Replicate permissions manually

After you add the SharePoint admin URL to manage entitlements for document libraries in the sites, replicate object permissions from the SharePoint server to Elasticsearch.

The [Edit the Directory Manager Entitlement Schedule](/docs/directorymanager/11.1/admincenter/schedule/entitlement.md) runs on a set frequency to replicate the effective permissions on document libraries in the sites. You can also run this schedule manually at any time for a site listed in the Included SharePoint sites area on the Entitlement page.

To replicate permissions manually:

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the Identity Stores page, click the ellipsis button for an identity store and select **Edit**.
3. Click **Entitlement** under **Settings** in the left pane.
4. On the Entitlement page, replicate permissions for one or all sites:

    - To replicate permissions for a site – Select a site in the **Included SharePoint Sites** area and click **Replicate**.
    - To replicate permissions for multiple sites – Select the checkboxes for the sites you want to replicate. To replicate all sites, select the checkbox in the header row. The following icons appear:

        ![Toolbar icons shown when sites are selected](/images/directorymanager/11.1/admincenter/entitlement/ad/replicate_permissions.webp)

        Click the **Replicate** icon or the **Replicate** button.

This triggers the Directory Manager Entitlement schedule for the identity store. The schedule computes and replicates the effective permissions granted to directory objects on document libraries in the sites. This process can take some time. The Last Replicated column displays the date and time the Directory Manager Entitlement schedule last ran.

## Exclude a site from entitlement management

You can exclude a SharePoint site from replication and entitlement management.

To exclude a site or subsite:

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select **Edit**.
3. Click **Entitlement** under **Settings** in the left pane.
4. On the **Entitlement** page, exclude one or more sites:

    - **To exclude a site:**

        Click the ellipsis button for a site and select **Add to Exclude Site List**. The site moves to the **Excluded SharePoint Sites** area.

    - **To exclude multiple sites:**

        Select the checkboxes for the sites you don't want to replicate. To exclude all sites, select the checkbox in the header row. The following icons appear:

        ![Toolbar icons shown when sites are selected](/images/directorymanager/11.1/admincenter/entitlement/ad/replicate_permissions.webp)

        Click **Remove**. The sites move to the **Excluded SharePoint Sites** area.

5. Click **Save**.

## Restore a site for entitlement management

You can restore an excluded SharePoint site for replication and entitlement management.

To restore an excluded site:

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the Identity Stores page, click the ellipsis button for an identity store and select **Edit**.
3. Click **Entitlement** under Settings in the left pane.
4. On the Entitlement page, the **Excluded SharePoint Sites** area displays the sites excluded from replication. Click **Remove** for a site to move it to the **Included SharePoint Sites** area.
5. Click **Save**.
