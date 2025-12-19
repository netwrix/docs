---
title: "Dashboard and widgets"
description: "Dashboard and widgets"
sidebar_position: 80
---

# Dashboard and widgets

## What are dashboards and widgets?

In case of large installations, the amount of information provided by Netwrix Password Secure may
seem overwhelming. Dashboards expand the existing filter possibilities by an arbitrarily
customizable info area, which visually prepares important events or facts

![Dashboard](/images/passwordsecure/9.2/configuration/advanced_view/operation_and_setup/dashboard_and_widgets/installation_with_parameters_50-en.webp)

Dashboards are available in almost all [Client Module](/docs/passwordsecure/9.2/configuration/advancedview/clientmodule/client_module.md)s. A
separate dashboard can be set for each individual module. **Widgets** correspond to the individual
modules of the dashboard. There are various widgets, which can be individually defined and can be
configured separately. In the above example, three widgets are enabled and provide information about
current notifications, password quality, and user activity. The **maximum number of possible
widgets** is managed in the[User settings](/docs/passwordsecure/9.2/configuration/advancedview/mainmenufc/usersettings/user_settings.md).

NOTE: You can close the dashboard using the button in the tab. You can open it again via **View** >
**Show dashboard** in the ribbon.

NOTE: The display of the dashboard is basically uncritical since the user can only see the data on
which he is also entitled.

#### Relevant settings

The following options are available in combination with the dashboard and widgets.

**Settings**

- Display dashboard on startup
- Display module names on dashboard
- Number of allowed widgets
- Display remaining amount of data in the widget

#### Adding and removing widgets

If the dashboard tab is enabled, you can enable the dashboard editing mode via the ribbon. Adding
and editing widgets is only possible in this mode.

![Adding and removing widgets](/images/passwordsecure/9.2/configuration/advanced_view/operation_and_setup/dashboard_and_widgets/installation_with_parameters_51-en.webp)

Use the drop-down menu to select the widget to be added \* (1) . **Then add the widget to the
dashboard using the corresponding button in the ribbon** (2). The maximum number of widgets that can
be added can be configured in the user settings. In editing mode, any widget can be directly removed
from the dashboard via the button on the upper right edge. The processing mode is ended by saving
via the ribbon.

![Adding widgets](/images/passwordsecure/9.2/configuration/advanced_view/operation_and_setup/dashboard_and_widgets/installation_with_parameters_52-en.webp)

## Customizing widgets

In the editing mode, you can customize each widget separately. To do this, select the widget and
switch to the \* widget content tab \* in the ribbon.

![Customizing widgets](/images/passwordsecure/9.2/configuration/advanced_view/operation_and_setup/dashboard_and_widgets/installation_with_parameters_53-en.webp)

Separate variables can be customized for each widget. This example shows how often users have had
passwords displayed. Naturally, the variables are distinct for each widget since other information
could be relevant.

Widget event

You can select the **Widget Event** option in the ribbon. This activates the interaction of the
widgets. In the following example, this feature was enabled for the Activity widget. As a result,
the dashboard not only displays all activities, but also filters them according to the user selected
in the **Team List** widget. It therefore concerns all activities of the user “Moore”. These are
filtered “live” and displayed in real-time.

![Widget event](/images/passwordsecure/9.2/configuration/advanced_view/operation_and_setup/dashboard_and_widgets/installation_with_parameters_54-en.webp)

## Arranging widgets

In the edit mode, the layout of the widgets is user-defined. Drag & drop allows you to place a
widget in the corresponding position on the dashboard (left, right, top, or bottom).

![Arranging widgets](/images/passwordsecure/9.2/configuration/advanced_view/operation_and_setup/dashboard_and_widgets/installation_with_parameters_55-en.webp)
