---
title: "Website Details Page"
description: "Website Details Page"
sidebar_position: 30
---

# Website Details Page

The Website Details page shows additional information for the selected website resource. This page
is opened from any linked resource within the various interfaces.

![Website Resource details page](/images/privilegesecure/4.2/accessmanagement/admin/policy/page/details/websitedetails.webp)

The details page shows the following information:

- Name — Displays the name of the resource
- Trashcan icon — Removes the selected resource from being managed by the application. A
  confirmation window will display.
- Platform — Displays the type of platform, which defines the resource
- Logon URL — Displays the primary logon page. This is only used if no URL is specified when
  defining a website activity.
- Associated Resource — If the website is hosted on a server that is also managed by Privilege
  Secure, it may be associated to the website management. This ensures that AD account operations
  are performed on the domain controller the website resource is bound to.
- Associated Domain Controller — A specific domain controller may be associated to the website
  management. This ensures that AD account operations are performed on a domain controller the
  website will reference for authentication.
- Service Account — Displays the service account associated with the resource
- Blue arrow button — Opens the Service Account details page. See the
  [Service Accounts Page](/docs/privilegesecure/4.2/admin/configuration/serviceaccounts/serviceaccounts.md) topic for additional
  information.
- Green plus button — Opens the Add New Service Account window. See the
  [Add New Service Account Window](/docs/privilegesecure/4.2/admin/interface/resources/addandchange/addnewserviceaccount.md) topic for
  additional information.

If any of these settings are modified, Save and Cancel buttons are displayed. Click **Save** to
commit the modifications. Click **Cancel** to discard the modifications.

The details page has the following tabs:

- [URLs Tab for Website](/docs/privilegesecure/4.2/admin/interface/resources/detailspages/website/urlswebsite/urlswebsite.md)
- [Users Tab for Website](/docs/privilegesecure/4.2/admin/interface/resources/detailspages/website/userswebsite/userswebsite.md)
- [Sessions Tab for Website](/docs/privilegesecure/4.2/admin/interface/resources/detailspages/website/sessionswebsite.md)
- [Access Policies Tab for Website](/docs/privilegesecure/4.2/admin/interface/resources/detailspages/website/accesspolicieswebsite.md)
- [History Tab for Website](/docs/privilegesecure/4.2/admin/interface/resources/detailspages/website/historywebsite.md)
