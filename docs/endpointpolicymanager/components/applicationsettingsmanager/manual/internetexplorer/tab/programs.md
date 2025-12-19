---
title: "Programs Tab"
description: "Programs Tab"
sidebar_position: 60
---

# Programs Tab

Video: For a quick overview of how to manage the Programs tab using Endpoint Policy Manager
Application Settings Manager, see the following video:
[Manage IE Programs Tab](/docs/endpointpolicymanager/components/applicationsettingsmanager/videos/internetexplorer/programstab.md).

The Internet Explorer Programs tab is where you can specify to enable or disable plugins, toolbars,
extensions, accelerators, and search providers. An example of add-ons that you can manage in
Internet Explorer 11 under Programs|Manage add-ons is shown In the figure shown.

![ie_appset_tab_by_tab_16](/images/endpointpolicymanager/applicationsettings/preconfigured/internetexplorer/tab/ie_appset_tab_by_tab_16.webp)

The figure shown. Managing add-ons in Internet Explorer.

The corresponding Endpoint Policy Manager dialog is shown In the figure shown.

![ie_appset_tab_by_tab_17](/images/endpointpolicymanager/applicationsettings/preconfigured/internetexplorer/tab/ie_appset_tab_by_tab_17.webp)

The figure shown. Managing IE add-ons in Endpoint Policy Manager.

To manage toolbars and extensions, you need the Class ID (GUID) of the extension, as shown in
The figure shown. Click "Copy" to copy the whole text. Then cut and paste the corresponding Class ID,
insert a comma, and specify "enable" or "disable," as shown in the lines of text below.

`{04c37f46-d9df-473c-943c-efa8d69854b9}`, disable

`{620ef192-a795-4f9d-9a6d-9da2adf95213}`, enable

Additionally, on this page you can:

- Add a default search provider
- Set up a default search provider
- Enable or disable accelerators

:::note
These items are more configurable using the Endpoint Policy Manager DesignStudio if you
need to add more entries.

:::



