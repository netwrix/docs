---
title: "Content Tab"
description: "Content Tab"
sidebar_position: 40
---

# Content Tab

Video: For a quick overview of how to manage the Content tab using Endpoint Policy Manager
Application Settings Manager see the following video:
[https://www.policypak.com/video/endpointpolicymanager-manage-ie-content-tab.html](http://www.policypak.com/video/endpointpolicymanager-manage-ie-content-tab.html).

The Content tab lets you specify various restrictions. The IE AppSet now has content advisor
settings, as shown In the figure shown.

![ie_appset_tab_by_tab_10](/images/endpointpolicymanager/applicationsettings/preconfigured/internetexplorer/tab/ie_appset_tab_by_tab_10.webp)

The figure shown. Configuring IE content advisor settings.

The Content tab has a section for "Content Advisor," which can specify the web pages that are
allowed or blocked. In order to use this, you must select "Turn on Content Advisor for IE 8 and 9"
(if your target is IE 8 or 9). Then you must set a password and specify the websites. The first line
can be `MODE=REPLACE` or `MODE=MERGE`. If the mode is not specified, the behavior is MERGE. Next,
you can specify a website with a comma then the word "allow," "block," or "remove," as shown in
The figure shown.

![ie_appset_tab_by_tab_11](/images/endpointpolicymanager/applicationsettings/preconfigured/internetexplorer/tab/ie_appset_tab_by_tab_11.webp)

The figure shown. The content advisor settings.

This Endpoint Policy Manager dialog corresponds to the following IE 8 dialog as shown In the figure shown.
Note IE 10 and 11 don't have this dialog, but the settings can be delivered anyway.

![ie_appset_tab_by_tab_12](/images/endpointpolicymanager/applicationsettings/preconfigured/internetexplorer/tab/ie_appset_tab_by_tab_12.webp)

The figure shown. The IE 8 dialog box.

A certificates section is seen here, but in the AppSet, it's been moved to a tab called "Extras" and
will be described later. You can, however, disable or hide the certificates buttons using Endpoint
Policy Manager, as shown In the figure shown.

![ie_appset_tab_by_tab_13](/images/endpointpolicymanager/applicationsettings/preconfigured/internetexplorer/tab/ie_appset_tab_by_tab_13.webp)

The figure shown. Disabling the Certificates button.



