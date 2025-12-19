---
title: "Privacy Tab"
description: "Privacy Tab"
sidebar_position: 30
---

# Privacy Tab

Video: For a quick overview of how to manage the Privacy tab using Endpoint Policy Manager
Application Settings Manager, see the following video:
[https://www.policypak.com/video/endpointpolicymanager-manage-ie-privacy-tab.html](http://www.policypak.com/video/endpointpolicymanager-manage-ie-privacy-tab.html).

The Privacy tab, shown In the figure shown, lets you specify how cookies should be handled and which
websites are allowed and blocked.

![ie_appset_tab_by_tab_6](/images/endpointpolicymanager/applicationsettings/preconfigured/internetexplorer/tab/ie_appset_tab_by_tab_6.webp)

The figure shown. Cookie settings in the Privacy tab.

In the IE AppSet, the dropdown menu In the figure shown can be used to set how cookies are handled for the
Internet zone. It is important to read the note below the entry you select.

![ie_appset_tab_by_tab_7](/images/endpointpolicymanager/applicationsettings/preconfigured/internetexplorer/tab/ie_appset_tab_by_tab_7.webp)

The figure shown. Configuring cookie settings in the Privacy tab.

Additionally, the Per Site Privacy special section can also be set here. On the first line, you can
specify `MODE=REPLACE` or `MODE=MERGE`. If you don't specify, the default is` MODE=MERGE`. Next,
specify a web page followed by a comma and one of the following the words:

- allow
- block

This will place the site into the "Per Site Privacy Actions" list and will specify "Block" or
"Allow." You can also choose to turn on the Pop-Up Blocker within the IE Privacy tab, as shown
in >The figure shown.

![ie_appset_tab_by_tab_8](/images/endpointpolicymanager/applicationsettings/preconfigured/internetexplorer/tab/ie_appset_tab_by_tab_8.webp)

The figure shown. Pop-up Blocker settings can be found in the Privacy tab.

The corresponding dialog can be seen in the IE AppSet In the figure shown.

![ie_appset_tab_by_tab_9](/images/endpointpolicymanager/applicationsettings/preconfigured/internetexplorer/tab/ie_appset_tab_by_tab_9.webp)

The figure shown. Configuring the Pop-up Blocker settings in the Privacy tab.

To use this, you need to check the box for "Turn on Pop-up Blocker," then click the "Settings"
button. Next, specify a web page followed by a comma and the word "allow" or the word "remove" on
the exceptions list, as shown In the figure shown. This will add or remove the sites from Internet
Explorer's Pop-Up Blocker settings dialog.



