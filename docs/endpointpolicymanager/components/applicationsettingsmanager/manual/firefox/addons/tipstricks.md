---
title: "Tips and Tricks"
description: "Tips and Tricks"
sidebar_position: 50
---

# Tips and Tricks

Endpoint Policy Manager has some extra powers to prevent users from managing and installing
additional add-ons. First, if Endpoint Policy Manager is set to disable an add-on (or a whole
category of add-ons), those add-ons are AUTOMATICALLY hidden from the user so they cannot re-enable
them.

:::warning
It is possible that a particularly clever user could temporarily re-enable the add-on.
:::


The Add-ons section in the Firefox AppSet has the following extra special checkboxes:

- Disable the installation of Firefox extensions: This will disable installation from all sources
  EXCEPT Add-ons Manager.
- Hide Firefox UI for installing extensions: This removes some elements from the Add-ons Manager
  user interface (UI) to make it harder for users to work around your settings.
- Hide about:addons page UI: This completely blanks out the add-ons page.

You can see these checkboxes below In the figure shown.

![add_ons_9](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/addons/add_ons_9.webp)

The figure shown. Disabling and hiding add-ons.

:::note
If you select "Disable the installation of Firefox extensions" you must right-click the
setting and specify "Lockdown this setting using the system-wide config file" or it will not
function. The "Lockdown this setting using the system-wide config file" flag is only available when
the AppSet is used on the Computer side. This effectively means that ALL users on the computer are
blocked from installing Firefox extensions manually.
:::


The result of selecting "Disable the installation of Firefox extensions" is that when users attempt
to install any extension, in any manner, they are blocked, as shown In the figure shown.

![add_ons_10](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/addons/add_ons_10.webp)

The figure shown. A disabled add-on.

The result of selecting the checkbox, "Hide Firefox UI for installing extensions," is shown in
Figure 27 below. This makes it more difficult for user to use the Add-ons Manager and manipulate
settings.

![add_ons_11](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/addons/add_ons_11.webp)

The figure shown. Before (above) and after (below) hiding the Firefox UI for installing extensions.



