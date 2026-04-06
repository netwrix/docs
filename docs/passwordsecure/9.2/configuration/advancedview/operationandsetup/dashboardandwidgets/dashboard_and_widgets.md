---
Title: "Dashboard and widgets"
Description: "Dashboard and widgets"
Sidebar_position: 80
---

# Dashboard and widgets

## Dashboards and widgets overview

In case of large installations, the amount of information provided by Netwrix Password Secure may
Seem overwhelming. Dashboards expand the existing filter possibilities by an arbitrarily
Customizable info area, which visually prepares important events or facts

![Dashboard](/images/passwordsecure/9.2/configuration/advanced_view/operation_and_setup/dashboard_and_widgets/installation_with_parameters_50-en.webp)

Dashboards are available in almost all [Client Module](/docs/passwordsecure/9.2/configuration/advancedview/clientmodule/client_module.md)s. A
Separate dashboard can be set for each individual module. **Widgets** correspond to the individual
Modules of the dashboard. There are various widgets, which can be individually defined and can be
Configured separately. In the above example, three widgets are enabled and provide information about
Current notifications, password quality, and user activity. The **maximum number of possible
Widgets** is managed in the[User settings](/docs/passwordsecure/9.2/configuration/advancedview/mainmenufc/usersettings/user_settings.md).

:::note
You can close the dashboard using the button in the tab. You can open it again via **View** >
**Show dashboard** in the ribbon.
:::

:::note
The display of the dashboard is basically uncritical since the user can only see the data on
Which he is also entitled.
:::

#### Relevant settings

The following options are available in combination with the dashboard and widgets.

**Settings**

- Display dashboard on startup
- Display module names on dashboard
- Number of allowed widgets
- Display remaining amount of data in the widget

#### Adding and removing widgets

If the dashboard tab is enabled, you can enable the dashboard editing mode via the ribbon. Adding
And editing widgets is only possible in this mode.

![Adding and removing widgets](/images/passwordsecure/9.2/configuration/advanced_view/operation_and_setup/dashboard_and_widgets/installation_with_parameters_51-en.webp)

Use the dropdown menu to select the widget to be added \* (1) . **Then add the widget to the
Dashboard using the corresponding button in the ribbon** (2). The maximum number of widgets that can
Be added can be configured in the user settings. In editing mode, any widget can be directly removed
From the dashboard via the button on the upper right edge. The processing mode is ended by saving
Via the ribbon.

![Adding widgets](/images/passwordsecure/9.2/configuration/advanced_view/operation_and_setup/dashboard_and_widgets/installation_with_parameters_52-en.webp)

## Customizing widgets

In the editing mode, you can customize each widget separately. To do this, select the widget and
Switch to the \* widget content tab \* in the ribbon.

![Customizing widgets](/images/passwordsecure/9.2/configuration/advanced_view/operation_and_setup/dashboard_and_widgets/installation_with_parameters_53-en.webp)

Separate variables can be customized for each widget. This example shows how often users have had
Passwords displayed. The variables are distinct for each widget since other information
Could be relevant.

Widget event

You can select the **Widget Event** option in the ribbon. This activates the interaction of the
Widgets. In the following example, this feature was enabled for the Activity widget. As a result,
The dashboard not only displays all activities, but also filters them according to the user selected
In the **Team List** widget. It therefore concerns all activities of the user “Moore”. These are
Filtered “live” and displayed in real-time.

![Widget event](/images/passwordsecure/9.2/configuration/advanced_view/operation_and_setup/dashboard_and_widgets/installation_with_parameters_54-en.webp)

## Arranging widgets

In the edit mode, the layout of the widgets is user-defined. Drag & drop lets you place a
Widget in the corresponding position on the dashboard (left, right, top, or bottom).

![Arranging widgets](/images/passwordsecure/9.2/configuration/advanced_view/operation_and_setup/dashboard_and_widgets/installation_with_parameters_55-en.webp)
