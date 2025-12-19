---
title: "Discovering IDs for Firefox Add-Ons"
description: "Discovering IDs for Firefox Add-Ons"
sidebar_position: 40
---

# Discovering IDs for Firefox Add-Ons

**Step 1 –** Finding add-on IDs requires a little bit of work. To discover them, you need to click
on "Add-ons" in Firefox on an example computer, as shown In the figure shown.

![add_ons](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/addons/add_ons.webp)

The figure shown. The Add-ons tab in Firefox.

**Step 2 –** Then, click one of the four categories below:

- Extensions
- Appearance
- Plugins
- Services

**Step 3 –** Then, press F12 for developer tools. In the lowest row, paste the snippet of code
supplied below, as shown In the figure shown.

![add_ons_3](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/addons/add_ons_3.webp)

The figure shown. The Console tab.

:::note
You may get a warning saying you cannot paste until you say it's okay. To permit pasting,
type allow pasting," as shown In the figure shown.
:::


![add_ons_4](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/addons/add_ons_4.webp)

The figure shown. Allowing pasting to occur.

**Step 4 –** You can use this snippet to discover IDs for extensions, appearance, plugins, and
services:

```
var addonElements = window.document.getElementsByClassName("addon");
for (var i = 0; i < addonElements.length; ++i) {
var addonElement = addonElements[i];
console.log(addonElement.attributes["name"].value + " = " + addonElement.value);
}
```

**Step 5 –** Paste the snippet into the lowest place on the page, as shown In the figure shown.

![add_ons_5](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/addons/add_ons_5.webp)

The figure shown. Copying the snippet to the Console tab.

The result you will get (which is to the right of the equal sign within quotes) will be the name of
the GUID or friendly name, as shown In the figure shown and The figure shown.

![add_ons_6](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/addons/add_ons_6.webp)

The figure shown. Example 1 showing only GUIDs.

![add_ons_7](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/addons/add_ons_7.webp)

The figure shown. Example 2 showing the friendly name and GUID.

**Step 6 –** Then, inside the Endpoint Policy Manager MMC console, you will add the ID you want
(without quotes), as shown In the figure shown.

![add_ons_8](/images/endpointpolicymanager/applicationsettings/preconfigured/firefox/addons/add_ons_8.webp)

The figure shown. Adding the ID within the Endpoint Policy Manager MMC console.



