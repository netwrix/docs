---
title: "SPAA: SharePoint Data Collection Settings"
description: "SPAA: SharePoint Data Collection Settings"
sidebar_position: 40
---

# SPAA: SharePoint Data Collection Settings

The SharePoint data collection settings page is where additional scan settings are configured. It is
a wizard page for the categories of:

- Scan SharePoint Access
- Scan For Sensitive Content

:::warning
Users should not change scans in a way that would result in less data being returned on
a subsequent scan (i.e. scanning fewer web applications, scanning fewer site collections, or a
shallower depth scan). Those resources not included in a subsequent scan are marked as deleted in
the Tier 2 database and subsequently removed from the Tier 1 database.
:::


![SharePoint data collection settings page](/images/accessanalyzer/12.0/admin/datacollector/spaa/datacollectionsettings.webp)

The Probable Owners section provides options for how probable ownership will be calculated:

- Limit maximum number of Probable Owners per resource: [number] – Return the maximum user supplied
  number of probable owners per resource

The Collect Personal Sites checkbox enables or disables collection during the scan of personal site
collections of individual users. Personal site collections are a SharePoint feature which gives
every user their own site collection, and which are used by Office 365 to store a user’s OneDrive
files. Personal sites are configured by default to only be accessible by the user to whom they
belong, and so it is likely that the Connection Profile that the data collector is assigned may not
have access to some users’ personal sites. There are three radio buttons for identifying how the
query treats personal sites to which it does not have access:

- Skip inaccessible personal sites – Inaccessible personal sites are not scanned
- Force scan account as admin of inaccessible personal sites – Make the Connection Profile
  credentials a Site Collection Administrator of any personal sites to which it does not have
  access:

    - The personal sites will be scanned
    - When the scan is complete, the permissions are restored to what they were prior to the scan,
      referring to those credentials made a Site Collection Administrator of personal sites in order
      to conduct the scan.
    - Requires the account used in the Connection Profile credentials to have the Global
      Administrator role for SharePoint Online or be a Farm Administrator for SharePoint on premise.
      This permission is required to facilitate altering the administrators of site collections.

        :::note
        The Microsoft SharePoint API employed to remove personal Site Collection
        Administrator is unreliable, and occasionally the scanning account is left as a Site
        Collection Administrator of personal sites. This may leave the scanning account visible to
        SharePoint users on the permissions of the files in their personal sites.
        :::


        :::info
        Only use this option if that account is clearly identifiable as an
        administrative account, and users are advised of the possibility that the account could
        appear on the permissions of their personal site collection documents.
        :::


- Force Company Administrator as admin of inaccessible personal sites – Make the special Company
  Administrator account an administrator of any personal sites to which it does not have access

    - The personal sites will be scanned
    - When the scan is complete, the Company Administrator account is left as an administrator of
      the users’ personal site collections
    - Requires the account used in the Connection Profile credentials to have the Global
      Administrator role for SharePoint Online or be a Farm Administrator for SharePoint on premise.
      This permission is required to facilitate altering the administrators of site collections.

        :::note
        The Company Administrator account is a special SharePoint Online and SharePoint
        2013 group which contains all accounts which have the Global Administrators role.
        :::


The **Extract Document Tags** option enables the collection of metadata tags from Microsoft Office
files in SharePoint. Since this option requires the retrieval and scanning of each document, it
results in a noticeable increase in scan time.

- Select a preferred zone – Use the drop-down list to select a preferred zone within the web
  application to target the scan. If a targeted web application does not have the selected preferred
  zone, the scan targets the default zone for that web application. Options include:

    - Default
    - Intranet
    - Internet
    - Custom
    - Extranet
