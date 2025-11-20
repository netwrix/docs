---
title: "Hiding Preferences Pages and Other Special Elements"
description: "Hiding Preferences Pages and Other Special Elements"
sidebar_position: 50
---

# Hiding Preferences Pages and Other Special Elements

Netwrix Endpoint Policy Manager (formerly PolicyPak) is able to hide many Firefox elements,
sometimes with only one click.

Video: To see a video of Endpoint Policy Manager disabling various Firefox user interface (UI) pages
see
[Disable the following about:config, about:addons, pages, Developer Menu, and any Preferences in one click](/docs/endpointpolicymanager/components/applicationsettingsmanager/videos/firefox/disable.md).

For instance, you can select "Hide about:config UI" in the About:Config tab, as shown In the figure shown.

![hiding_preferences_pages_and](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/hiding_preferences_pages_and.webp)

The figure shown. Hiding the about:config page.

Endpoint Policy Manager can hide the about:addons page UI with a checkbox in the Add-Ons:
Extensions, Appearance, Plugins, and Service page, as shown In the figure shown.

![hiding_preferences_pages_and_1](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/hiding_preferences_pages_and_1.webp)

The figure shown. Hiding the about:addons page.

Endpoint Policy Manager can allow you to hide the Australis menu in FireFox (seen In the figure shown) by
clicking the "Hide Australis button" in the Extras tab, as shown In the figure shown. Endpoint Policy
Manager can also provide you with the ability to disable the web developer menu and many other
special pages, as shown In the figure shown.

![hiding_preferences_pages_and_2](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/hiding_preferences_pages_and_2.webp)

The figure shown. The Australis menu.

![hiding_preferences_pages_and_3](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/hiding_preferences_pages_and_3.webp)

The figure shown. Disabling the web developer menu and other special pages.

Note that some of the options specifically require that the settings be right-clicked and locked in
order to work. This means they must be deployed on the Computer side, because only Group Policy
Objects (GPOs) based on the Computer side can be locked with the Firefox AppSet.

Lastly, Endpoint Policy Manager has another huge array of special things that can be hidden within
the About:Preferences tab, as shown In the figure shown.

![hiding_preferences_pages_and_4](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/hiding_preferences_pages_and_4.webp)

The figure shown. Hiding preferences.

The items on the left only require one click to get the expected response in Firefox. The special
box on the right can remove nearly every element in Firefox, but you need to know the special
element ID.

Video: To see a video of Endpoint Policy Manager removing elements in about:prefrences, go to
[Firefox Remove Specific Elements from about:preferences panel](/docs/endpointpolicymanager/components/applicationsettingsmanager/videos/firefox/removeelements.md).

For instance, let's imagine you wanted to hide the element "Play DRM-controlled content" in the
Content section, as shown In the figure shown. In this example, we did a search for DRM rather than
navigate to it through the menus.

![hiding_preferences_pages_and_5](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/hiding_preferences_pages_and_5.webp)

The figure shown. Hiding DRM-controlled content.

Start by opening the Firefox web developer tools (press Ctrl + Shift + I) or select Options |
Developer | Toggle Tools, as shown In the figure shown.

![hiding_preferences_pages_and_6](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/hiding_preferences_pages_and_6.webp)

The figure shown. Web developer menu.

Then, as shown In the figure shown, click the selector icon all the way on the left side, then click the
"Play DRM content" element. The element will light up with a red dotted box, and in the Inspector
pane, you'll see the element ID.

![hiding_preferences_pages_and_7](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/hiding_preferences_pages_and_7.webp)

The figure shown. Selecting the "Play DRM content" element.

In this case, `checkbox id=" playDRMContent"`. Copy its value into the textbox in Firefox 23.0
AppSet, as shown In the figure shown. You can also see another value, useMasterPassword, there as well to
show how multiple values are separated by commas.

![hiding_preferences_pages_and_8](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/hiding_preferences_pages_and_8.webp)

The figure shown. Copying the value to the Firefox 23.0 textbox.

:::warning
All values are comma separated instead of being one per line.
:::


The result once Group Policy applies and Firefox is restarted is that the element is hidden.

![hiding_preferences_pages_and_9](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/hiding_preferences_pages_and_9.webp)

The figure shown. The DRM content setting is now hidden.

Later, if the element ID is removed from the MMC, it will return back.



