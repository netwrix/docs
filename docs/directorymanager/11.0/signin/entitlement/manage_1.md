---
title: "Manage SharePoint Sites for GroupID Entitlement"
description: "Add SharePoint sites to a Microsoft Entra ID identity store, exclude document libraries, change the service account, and replicate permissions."
keywords:
  - SharePoint entitlement
  - SharePoint admin URL
  - document library permissions
  - replicate SharePoint permissions
  - included SharePoint sites
sidebar_position: 20
---

# Manage SharePoint Sites for GroupID Entitlement

A Microsoft Entra ID user who is signed in to Admin Center and doesn't have multifactor
authentication (MFA) enabled can add and configure SharePoint sites in an Entra ID identity store to
replicate their entitlement data to Elasticsearch for GroupID. The user can then manage
permissions on the sites and the document libraries in those sites using GroupID.

The user can also manage certain settings for a site, such as changing the service account for
reading and managing permissions and excluding a document library in a site from entitlement
management.

What do you want to do?

- [Specify SharePoint Sites for Entitlement Management](#specify-sharepoint-sites-for-entitlement-management)
- [Include Future Sites for Entitlement Management](#include-future-sites-for-entitlement-management)
- [View the Document Libraries in a Site](#view-the-document-libraries-in-a-site)
- [Exclude a Document Library from Replication](#exclude-a-document-library-from-replication)
- [Connect to a Site Using a Different Account](#connect-to-a-site-using-a-different-account)
- [Replicate Permissions Manually](#replicate-permissions-manually)
- [Exclude a Site from Entitlement Management](#exclude-a-site-from-entitlement-management)
- [Restore a Site for Entitlement Management](#restore-a-site-for-entitlement-management)

## Specify SharePoint Sites for Entitlement Management

Provide the SharePoint admin URL and credentials to connect to SharePoint. GroupID fetches all the
sites under it to replicate the permissions on document libraries there.

To provide the SharePoint admin URL, do the following:

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the **Identity Stores** page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Entitlement** under **Settings** in the left pane. The **Entitlement** page is
displayed. When no SharePoint site is defined, the page is blank.

Step 4 – Click **Set up SharePoint Site** and then click **Configure New Site**.

Step 5 – On the **Configure New Site** dialog box:

- In the **Site URL** box, enter the **SharePoint admin URL** to fetch the sites.
- In the **User name** and **Password** boxes, provide the credentials of a service account to
  connect to the site for managing entitlements.
- In the **Application ID** box, provide the application ID assigned to the GroupID
  application when you registered it in Microsoft Entra Admin Center.
- Click **Add Site**.
  The URL of this site is displayed in the **SharePoint Admin URL** box on the **Entitlement** page.
  All sites under it are displayed in the **Included SharePoint Sites** area.

Step 6 – Click **Save**.

### SharePoint Site Details

The information displayed for a site in the **Included SharePoint Sites** area is the same as for a
file server in an Active Directory identity store. See the
[File Server Details](/docs/directorymanager/11.0/signin/entitlement/manage.md#file-server-details)
topic for more information. For a site, however, the **User Name** column displays the username of
the account used to connect to the site and is never blank.

### Search SharePoint Sites

Use the _Search Filters_ option in the **Included SharePoint Sites** area to search for a site in the
listing. The filters are the same as for a file server in an Active Directory identity
store. See the
[Search File Servers](/docs/directorymanager/11.0/signin/entitlement/manage.md#search-file-servers)
topic for how to perform a search.

## Include Future Sites for Entitlement Management

To include future sites for entitlement management:

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the **Identity Stores** page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Entitlement** under **Settings** in the left pane.

Step 4 – On the **Entitlement** page, select the **Include all Future Sites** checkbox to ensure
that any new site created under the SharePoint admin URL is automatically fetched and displayed in
the **Included SharePoint Sites** area for permission replication.

Step 5 – Click **Save**.

## View the Document Libraries in a Site

To view the document libraries in a site:

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the **Identity Stores** page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Entitlement** under **Settings** in the left pane.

Step 4 – In the **Included SharePoint Sites** area on the **Entitlement** page, click the ellipsis
button for a site and select **Edit**. On the **Edit Site** dialog box:

- The **Site Libraries** area displays the document libraries in the site.
- The name of the
  [Edit the GroupID Entitlement Schedule](/docs/directorymanager/11.0/signin/schedule/entitlement.md)
  that computes the permissions on document libraries in the site and replicates them to
  Elasticsearch is displayed next to **Job**.

## Exclude a Document Library from Replication

By default, GroupID computes and replicates permissions on all document libraries in the SharePoint
sites that fall under the admin URL. You can exclude a document library in a site from this
activity.

When a document library is excluded, its entitlement data replicated to date is also cleared.

To exclude a document library:

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the **Identity Stores** page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Entitlement** under **Settings** in the left pane.

Step 4 – In the **Included SharePoint Sites** area on the **Entitlement** page, click the ellipsis
button for a site and select **Edit**.

Step 5 – On the **Edit Site** dialog box, the **Site Libraries** area displays the document libraries in
the site. Clear the checkbox for a library to exclude it from replication and click **Apply
Changes**.

Step 6 – Click **Save** on the **Entitlement** page.

## Connect to a Site Using a Different Account

GroupID connects to a site using the service account specified while configuring the SharePoint
admin URL for reading and managing the effective permissions assigned to objects on the document
libraries. You can designate a different account for this activity.

To change the service account for a site:

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the **Identity Stores** page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Entitlement** under **Settings** in the left pane.

Step 4 – In the **Included SharePoint Sites** area on the **Entitlement** page, click the ellipsis
button for a site and select **Edit**.

Step 5 – On the **Edit Site** dialog box, you can change the service account used to connect to the
site for reading and updating permissions. The
[Edit the GroupID Entitlement Schedule](/docs/directorymanager/11.0/signin/schedule/entitlement.md),
[Edit the GroupID Entitlement Scope Schedule](/docs/directorymanager/11.0/signin/schedule/entitlementscope.md),
and
[Edit the Entitlement Temporary Permissions Schedule](/docs/directorymanager/11.0/signin/schedule/entitlementtemporarypermissions.md)
run in the context of the account specified here.

- The **User name** and **Password** boxes display the credentials of the account used to connect to the
  site. You can connect using a different account by providing the credentials of that account.

    Or

- Select the **Use Identity Store Service Account** checkbox to use the service account specified
  for the identity store to connect to the site.

The account must have elevated permissions to the Microsoft web applications that host the site in
order to read and manage the effective permissions on the document libraries in the site.
After you change the credentials, click **Reconnect** to test the connectivity and fetch the
document libraries again with the given credentials.

Step 6 – Click **Apply Changes**.

Step 7 – Click **Save** on the **Entitlement** page.

## Replicate Permissions Manually

After you add the SharePoint admin URL to manage entitlements for document libraries in the sites,
you must replicate object permissions from the SharePoint server to Elasticsearch.

The
[Edit the GroupID Entitlement Schedule](/docs/directorymanager/11.0/signin/schedule/entitlement.md)
runs on a set frequency to replicate the effective permissions on document libraries in the sites.
You can also run this schedule manually at any time for a site listed in the **Included SharePoint Sites**
area on the **Entitlement** page.

To replicate permissions manually:

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the **Identity Stores** page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Entitlement** under **Settings** in the left pane.

Step 4 – On the **Entitlement** page, you can manually replicate permissions for one or all sites.

- **To replicate permissions for a site:** Select a site in the **Included SharePoint Sites** area and
  click **Replicate**.
- **To replicate permissions for multiple sites:** Select the check boxes for the sites you want to
  replicate. To replicate all sites, select the checkbox in the header row. This displays the
  following icons:

    ![Replicate and Remove icons](/images/directorymanager/11.0/admincenter/entitlement/ad/replicate_permissions.webp)

    Either click the **Replicate** icon or the **Replicate** button.

This triggers the GroupID Entitlement schedule for the identity store, which computes and replicates
the effective permissions granted to directory objects on document libraries in the sites. This
process may take some time.

The **Last Replicated** column displays the date and time the GroupID Entitlement schedule last ran.

## Exclude a Site from Entitlement Management

You can exclude a SharePoint site from replication and entitlement management.

To exclude a site or subsite, do the following:

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the **Identity Stores** page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Entitlement** under **Settings** in the left pane.

Step 4 – On the **Entitlement** page, you can exclude one or more sites.

- **To exclude a site:**

    Click the ellipsis button for a site and select **Add to Exclude Site List**. The site is moved
    to the **Excluded SharePoint Sites** area.

- **To exclude multiple sites:**

    Select the checkboxes for the sites you don't want to replicate. To exclude all sites, select
    the checkbox in the header row. This displays the following icons:

    ![Replicate and Remove icons](/images/directorymanager/11.0/admincenter/entitlement/ad/replicate_permissions.webp)

    Click **Remove**. The sites are moved to the **Excluded SharePoint Sites** area.

Step 5 – Click **Save**.

## Restore a Site for Entitlement Management

You can restore an excluded SharePoint site for replication and entitlement management.

To restore an excluded site:

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the **Identity Stores** page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Entitlement** under **Settings** in the left pane.

Step 4 – On the **Entitlement** page, the **Excluded SharePoint Sites** area displays the sites excluded
from replication.
Click **Remove** for a site to move it to the **Included SharePoint Sites** area.

Step 5 – Click **Save**.

**See Also**

- [Entitlement Management in GroupID](/docs/directorymanager/11.0/signin/entitlement/overview.md)
- [Manage File Servers for GroupID Entitlement](/docs/directorymanager/11.0/signin/entitlement/manage.md)
