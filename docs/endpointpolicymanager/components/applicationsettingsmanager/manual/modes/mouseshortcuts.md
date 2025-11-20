---
title: "Special Mouse Shortcuts for Quick Enforcement of Modes"
description: "Special Mouse Shortcuts for Quick Enforcement of Modes"
sidebar_position: 60
---

# Special Mouse Shortcuts for Quick Enforcement of Modes

The Endpoint Policy Manager Application Settings Manager user interface has several shortcuts to
help you quickly configure each tab. To discover the mouse shortcuts, right-click the whitespace
(i.e., not on any specific element like a checkbox or dropdown menu). You should see the flyout
menu, shown In the figure shown.

![policypak_application_settings_1_17](/images/endpointpolicymanager/applicationsettings/modes/endpointpolicymanager_application_settings_1_17.webp)

The figure shown. Application Settings Manager flyout menu.

This menu reveals several shortcuts.

- "Disable whole tab in target application." See the section "Applock Modes" for figures which
  demonstrate this feature. With this mode you can prevent users from accessing an entire tab within
  an application.
- "Force display of whole tab in target application." This is the opposite of the "Disable whole tab
  in target application" setting. It is to be used by upper-level administrators who want to ensure
  that the whole tab is always displayed. Use in conjunction with the enforce property on a GPO
  itself.
- "Always reapply all settings (for this tab)." This enables the default enforcement mode for all
  settings on the tab (provided there is configuration data contained inside the setting). Choosing
  this option causes all settings to be underlined, and the corresponding values will be delivered.
- "Prevent applying and additional changes (for this tab)." This will stop enforcement of all items
  for the tab (if there is configuration data contained inside the setting). All settings will have
  the underline removed, thus stopping their delivery.
- "Revert default values to all settings (for this tab)." This is the equivalent of right-clicking
  each element in the tab and selecting "Revert this policy setting to the default value when it is
  no longer applied." When the GPO falls out of scope, the original application value (as defined
  within the AppSet) is applied to the application. This only works if the element on the tab has
  configuration data defined from Endpoint Policy Manager DesignStudio.
- "Do not re-apply default values (all policy settings on this tab)." This is the equivalent of
  right-clicking each element in the tab and unchecking "Revert this policy setting to the default
  value when it is no longer applied." Once this option is selected, if the GPO falls out of scope,
  the last set value will remain in the client for all items in the tab. This only works if the
  element on the tab has configuration data defined from Endpoint Policy Manager DesignStudio.
- "Hide all controls in target application (for this tab)." This is the equivalent of right-clicking
  each element in the tab and checking "Hide corresponding control in target application." This only
  works if the element on the tab has Endpoint Policy Manager Application Settings Manager AppLock™
  data captured using the Endpoint Policy Manager Capture Wizard tool.
- "Disable all controls in target application (for this tab)." This is the equivalent of
  right-clicking each element in the tab and checking "Disable corresponding control in target
  application." This only works if the element on the tab has Endpoint Policy Manager Application
  Settings Manager AppLock™ data captured using the Endpoint Policy Manager Capture Wizard tool.
- "Remove Endpoint Policy Manager Application Settings Manager AppLock™ for all controls (for this
  tab)." This is the equivalent of right-clicking each element in the tab and removing any AppLock™
  features (like Hide or Disable).

Note that if there are no values in any of the elements on a tab, the first two sets of shortcuts
will not be available, as seen In the figure shown.

![policypak_application_settings_1_18](/images/endpointpolicymanager/applicationsettings/modes/endpointpolicymanager_application_settings_1_18.webp)

The figure shown. The visible options when there are no values in any of the elements on a tab.



