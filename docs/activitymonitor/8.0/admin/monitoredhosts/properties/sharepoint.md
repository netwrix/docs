---
title: "SharePoint Tab"
description: "SharePoint Tab"
sidebar_position: 140
---

# SharePoint Tab

The SharePoint tab on a host’s Properties window allows users to modify settings that are populated
with the information entered when the SharePoint host is added.

![SharePoint Tab](/images/activitymonitor/8.0/admin/monitoredhosts/properties/sharepointtab.webp)

The configurable options are:

- Enable auditing on selected site collections - Check the box to enable auditing on selected site
  collections. Enabling this option will ensure that auditing is enabled for all monitored site
  collections with periodic checks.
- Choose to audit all sites or scope the monitoring to specific site(s):

    - Audit all sites – Leave textbox for URLs blank
    - Scope to specific sites – List URLs for sites to be monitored in the textbox. List should be
      semicolon separated. For example:

**http://sharpoint.local/sites/marketing; http://sharepoint.local/sites/personal/user1**

- Audit polling interval – Select the interval for how often the activity agent will request new
  events from SharePoint. Number of seconds between polling request, set to 15 seconds by default
- User name - Enter the user name for the domain account with local admin permissions
- User password - Enter the password for the user name

- Connect – Click Connect to validate the connection with SharePoint
