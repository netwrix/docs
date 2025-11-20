---
title: "Enforcement Modes"
description: "Enforcement Modes"
sidebar_position: 20
---

# Enforcement Modes

When actions are set for an element (using Endpoint Policy Manager DesignStudio), enforcement modes
become available after right-clicking on them in the Endpoint Policy Manager Application Settings
Manager Group Policy interface.

:::note
If you click directly on a setting, the first enforcement mode, "Always reapply this
setting," is automatically engaged.
:::


The enforcement mode dictates what happens at logon or when you refresh Group Policy. One of the
following options must be configured, or the configuration will not be processed on the target
machine.

- "Always reapply this setting." This is the default. This setting ensures that if a user changes
  the application's value from what you dictate (e.g., unchecks a checkbox, types in a different
  value, or selects a different radio button), Endpoint Policy Manager Application Settings Manager
  will automatically reapply your desired setting to the user on logon, background update, or when
  running `GPupdate.exe`.
- "Apply once and do not reapply in the background. Only reapply with GPupdate/force." This will
  only apply the setting one time. The setting will not be reapplied again at the next logon, during
  the background refresh, or when running `GPupdate.exe`. It will, however, be reapplied when the
  `GPupdate` command is run with the `/force `switch. This can be useful if an administrator wants
  to manually reset a user's configuration. Note that the value will be initially set whenever a
  user uses a new machine.
- "Apply once and do not reapply. Ignore GPupdate/force." This will only apply the setting one time.
  The setting will not be reapplied again at the next logon, during the background refresh, or when
  running `GPupdate.exe` or `GPupdate.exe` with the `/force` switch.

If no enforcement mode option is selected, the known value is maintained on the application when the
GPO falls out of scope. Users are then free to change the setting, and Endpoint Policy Manager will
not deploy or update the values you set.

:::note
If you make a mistake and don't wish to have a value take effect (that is, you want to
undo an underline), you can also right-click the area and deselect "Always reapply this setting."
Alternatively, you can CTRL+click the setting to remove an enforcement mode. If no policy
enforcement options are set, the value is not applied to the client. When the underline is absent,
the value will not be set.

:::



