---
title: "Show Elements List"
description: "Show Elements List"
sidebar_position: 20
---

# Show Elements List

If your project gets to be sufficiently large with multiple tabs and elements, you might want to be
able to quickly identify the following information about your project:

- Which elements work in Endpoint Policy Manager Application Settings Manager Community Edition (if
  not in Trial or Licensed Mode)
- Where a specific element is (by name or ID number)
- If any elements are un-configured
- If any elements need label links to be added

To that end, Endpoint Policy Manager DesignStudio has a "Show Elements List" feature (also known as
"List All Elements"), which is found by selecting `Tools|Show Element List`. You can also use the
keyboard shortcut Ctrl+F to go to this list, as shown In the figure shown.

![using_designstudio_tools_7_624x330](/images/endpointpolicymanager/applicationsettings/designstudio/tools/using_designstudio_tools_7_624x330.webp)

The figure shown. Selecting the "Show Elements List" feature.

The List All Elements box shows you which elements will work in Endpoint Policy Manager Application
Settings Manager Community Edition and which ones will only work when fully licensed (or in Trial
Mode). Additionally, you can focus your search by text (which searches the Description field). In
Figure 172, you can see the search for the word "pass," and every result has the word "pass" in the
results in the Description field. You can also select the type of element, or search specifically on
a specific Tab within your project.

![using_designstudio_tools_8](/images/endpointpolicymanager/applicationsettings/designstudio/tools/using_designstudio_tools_8.webp)

The figure shown. Searching by text in the "List All Elements" box.

You can also use the "List All Elements" dialog to help determine which elements are not yet
configured inside the AppSet. To do this, sort on the Configured column, then look for items that
have "No" in that column, as shown In the figure shown. Double-click the item to zoom to the item, then
right-click to run the Configuration Wizard to configure it.

![using_designstudio_tools_9](/images/endpointpolicymanager/applicationsettings/designstudio/tools/using_designstudio_tools_9.webp)

The figure shown. Determining which elements have not been configured.

:::note
Items with N/A in the Configured column cannot be configured, like labels, frames, and
tabs. Items with N/A in the Label Link column do not need to be labeled, as they are self-labeling,
like checkboxes, etc.
:::


Lastly, in the rare instances when compiling your AppSet fails, you may be able to help
troubleshooting efforts by locating the ID number of the element that is causing problems. In Figure
174, you can see compiler error list at the bottom showing an ID number with a problem. By sorting
the "List all Elements" items by ID number, this element can be quickly found.

![using_designstudio_tools_10](/images/endpointpolicymanager/applicationsettings/designstudio/tools/using_designstudio_tools_10.webp)

The figure shown. Sorting elements by ID number.

:::note
The color coding is only to express if the element will work in Community Edition or
Licensed Mode and Trial Mode.
:::


:::note
Sometimes disabling the item can help you continue to compile the AppSet. You should [open a support ticket](https://www.netwrix.com/tickets.html#/open-a-ticket) and send
any failed compiles along with your pXML
file for inspection.

:::



