---
title: "Manage SharePoint Sites"
description: "Manage SharePoint Sites"
sidebar_position: 20
---

# Manage SharePoint Sites

An Entra ID user, who is:

- logged-in to the Admin Center

- a non-MFA user (i.e. multifactor authentication is not enabled for the user)

An Entra ID user can add and configure SharePoint sites in an Entra ID identity store to replicate
their entitlement data to Elasticsearch for Directory Manager. The user can then manage permissions
on the sites and the document libraries in those sites using Directory Manager.

The user can also manage certain settings for a site, such as change the service account for reading
and managing permissions and exclude a document library in a site from entitlement management.

## Specify SharePoint Sites for Entitlement Management

Provide the SharePoint admin URL and credentials to connect to SharePoint. Directory Manager fetches
all the sites under it to replicate the permissions on document libraries there.

Follow the steps to provide the SharePoint Admin URL.

In Admin Center, click **Identity Stores** in the left pane.

Step 1 – On the Identify Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 2 – Click **Entitlement** under **Settings** in the left pane. The Entitlement page is
displayed. When no SharePoint site is defined, the page is blank.

Step 3 – Click **Set up SharePoint Site** and then click **Configure New Site**.

Step 4 – On the Configure New Site dialog box:

- In the Site URLox, enter the **SharePoint admin URL** to fetch the sites.

- In the User name and Password boxes, provide the credentials of a service account to connect to
  the site for managing entitlements.
- In the Application ID box, provide the application ID assigned to the Directory Manager
  application when you registered it in Microsoft Entra Admin Center.
- Click **Add Site**.
  The URL of this site is displayed in the SharePoint Admin URL box on the Entitlement page. All
  sites under it are displayed in the Included SharePoint sites area.

Step 5 – Click **Save**.

#### SharePoint Site Details

The information displayed for a site in the Included SharePoint Sites area is the same as displayed
for a file server in an Active Directory identity store. Refer to the
[File Server Details ](/docs/directorymanager/11.1/admincenter/entitlement/managefs.md#file-server-details) topic for more info. Though in this
case, the User namecolumn displays the username of the account used to connect to the site, and it
is not blank.

#### Search SharePoint Sites

Use the _Search Filters_ option in the Included SharePoint Sites area to search for a site in the
listing. The filters are the same as displayed for a file server in an Active Directory identity
store. Refer to the [Search File Servers ](/docs/directorymanager/11.1/admincenter/entitlement/managefs.md#search-file-servers) topic for performing
a search.

## Include Future Sites for Entitlement Management

Follow the steps to include future sites for entitlement management.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the **Identity Stores** page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Entitlement** under **Settings** in the left pane.

Step 4 – On the **Entitlement** page, select the **Include all Future Sites** check box to ensure
that any new site created under the SharePoint admin URL is automatically fetched and displayed in
the **Included SharePoint Sites** area for permission replication.

Step 5 – Click **Save**.

## View the Document Libraries in a Site

Follow the steps to view the document libraries in a site.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identify Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Entitlement** under Settings in the left pane.

Step 4 – In the Included SharePoint Sites area on the **Entitlement** page, click the ellipsis
button for a site and select **Edit**. On the **Edit Site** dialog box:

- The Site Libraries area displays the document libraries in the site.
- The name of the [GroupID Entitlement Schedule](/docs/directorymanager/11.1/admincenter/schedule/entitlement.md) that computes the
  permissions on document libraries in the site and replicates them to Elasticsearch, is displayed
  next to **Job**.

## Exclude a Document Library from Replication

By default, Directory Manager computes and replicates permissions on all document libraries in the
SharePoint sites that fall under the admin URL. You can exclude a document library in a site from
this activity.

When a document library is excluded, its entitlement data replicated to-date is also cleared.

Follow the steps to exclude a document library.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identify Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Entitlement** under Settings in the left pane.

Step 4 – In the Included SharePoint Sites area on the **Entitlement** page, click the ellipsis
button for a site and select **Edit**.

Step 5 – On the Edit Site dialog box, the **Site Libraries** area displays the document libraries in
the site. Clear the check box for a library to exclude it from replication and click **Apply
Changes**.

Step 6 – Click **Save** on the Entitlement page.

## Connect to a Site Using a Different Account

Directory Manager connects to a site using the service account specified while configuring the
SharePoint admin URL for reading and managing the effective permissions assigned to objects on the
document libraries. You can designate a different account for this activity.

Follow the steps to change the service account for a site.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the **Identity Stores** page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Entitlement** under **Settings** in the left pane.

Step 4 – In the **Included SharePoint Sites** area on the **Entitlement** page, click the ellipsis
button for a site and select **Edit**.

Step 5 – On the **Edit Site** dialog box, you can change the service account used to connect to the
site for reading and updating permissions. The
[GroupID Entitlement Schedule](/docs/directorymanager/11.1/admincenter/schedule/entitlement.md),
[Entitlement Scope Schedule](/docs/directorymanager/11.1/admincenter/schedule/entitlementscope.md), and
[Entitlement Temporary Permissions Schedule](/docs/directorymanager/11.1/admincenter/schedule/entitlementtemporarypermissions.md) run
in the context of the account specified here.

- The User name and Password boxes display the credentials of the account used to connect to the
  site. You can connect using a different account by providing the credentials of that account.

**Or**

- Select the **Use Identity Store Service Account** check box to use the service account specified
  for the identity store to connect to the site.

The account must have elevated permissions to the Microsoft web applications that host the site in
order to read and manage the effective permissions on the document libraries in the site.
On changing the credentials, use the **Reconnect** button to test the connectivity and fetch the
document libraries again with the given credentials.

Step 1 – Click **Apply Changes**.

Step 2 – Click **Save** on the Entitlement page.

## Replicate Permissions Manually

After adding the SharePoint admin URL to manage entitlements for document libraries in the sites, it
is essential to replicate object permissions from the SharePoint server to Elasticsearch.

The [GroupID Entitlement Schedule](/docs/directorymanager/11.1/admincenter/schedule/entitlement.md) runs on a set frequency to
replicate the effective permissions on document libraries in the sites. You can also run this
schedule any time manually for a site listed in the Included SharePoint sites area on the
Entitlementpage.

Follow the steps to replicate permissions manually.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Entitlement** under **Settings** in the left pane.

Step 4 – On the Entitlement page, you can manually replicate permissions for one or all sites.

- To replicate permissions for a site – Select a site in the **Included SharePoint Sites** area and
  click **Replicate**.
- To replicate permissions for multiple sites – Select the check boxes for the sites you want to
  replicate. To replicate all sites, select the check box in the header row. This displays the
  following icons:

    ![replicate_permissions](/images/directorymanager/11.1/admincenter/entitlement/ad/replicate_permissions.webp)

    Either click the **Replicate** icon or the **Replicate** button.

This triggers the GroupID Entitlement schedule for the identity store, which computes and replicates
the effective permissions granted to directory objects on document libraries in the site(s). This
process may take some time.
The Last Replicated column displays the date and time the GroupID Entitlement schedule last ran.

## Exclude a Site from Entitlement Management

You can exclude a SharePoint site from replication and entitlement management.

Follow the steps to exclude a site or subsite. **To exclude a site or subsite:**

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the **Identity Stores** page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Entitlement** under **Settings** in the left pane.

Step 4 – On the **Entitlement** page, you can exclude one or more sites.

- **To exclude a site:**

    Click the ellipsis button for a site and select **Add to Exclude Site List**. The site is moved
    to the **Excluded SharePoint Sites** area.

- **To exclude multiple sites:**

    Select the check boxes for the sites you do not want to replicate. To exclude all sites, select
    the check box in the header row. This displays the following icons:

    ![replicate_permissions](/images/directorymanager/11.1/admincenter/entitlement/ad/replicate_permissions.webp)

    Click **Remove**. The sites are moved to the **Excluded SharePoint Sites** area.

Step 5 – Click **Save**.

## Restore a Site for Entitlement Management

You can restore an excluded SharePoint site for replication and entitlement management.

Follow the steps to restore an excluded site.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identify Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Entitlement** under Settings in the left pane.

Step 4 – On the Entitlement page, the **Excluded SharePoint Sites** area displays the sites excluded
from replication.
Click **Remove** for a site to move it to the **Included SharePoint Sites** area.

Step 5 – Click **Save**.
