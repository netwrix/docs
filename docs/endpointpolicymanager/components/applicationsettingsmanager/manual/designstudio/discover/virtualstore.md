---
title: "Configuration Data in VirtualStore"
description: "Configuration Data in VirtualStore"
sidebar_position: 20
---

# Configuration Data in VirtualStore

Sometimes, programs don't know that they are not allowed to store data in the protected Windows
locations. When a standard user runs the application and tries to change configuration data, the
application's configurations are not written to these protected Windows locations. They are
redirected or virtualized instead. In the figure shown, we can see that when the application tried to write
its data to `c:\Program Files`, it was actually redirected to

`%LocalAppData%\VirtualStore\Program Files (x86)\Foxit Software\Foxit Reader`.

![discovering_configuration_4](/images/endpointpolicymanager/applicationsettings/designstudio/configurationdata/discover/discovering_configuration_4.webp)

The figure shown. Application data that has been redirected.

This is a safety mechanism that Windows uses to allow applications to think that they've written
data to the desired location (`\Program Files`), when in actuality, the application's data was
really written to

`%appdata%\local\virtualstore\Program Files (x86)\Foxit Software\Foxit Reader`. However, there is
one problem with this: both 32-bit and 64-bit client machines could possibly be our targets. Because
of this, even though we're finding the file in

`%LocalAppData%\VirtualStore\Program Files (x86)\Foxit Software\Foxit Reader` (as shown in Figure
92), the data file could also be found on 32-bit machines in
`%LocalAppData%\VirtualStore\Program Files\Foxit Software\Foxit Reader` (as shown In the figure shown).

![discovering_configuration_5](/images/endpointpolicymanager/applicationsettings/designstudio/configurationdata/discover/discovering_configuration_5.webp)

The figure shown. The location for 64-bit machines is `%LocalAppData%\VirtualStore\Program Files (x86).`

![discovering_configuration_6](/images/endpointpolicymanager/applicationsettings/designstudio/configurationdata/discover/discovering_configuration_6.webp)

The figure shown. The location for 32-bit machiens is `%LocalAppData%\VirtualStore\Program Files.`

If you select a file within the VirtualStore directory, Endpoint Policy Manager DesignStudio
recognizes this and provides two features to ensure proper delivery to clients. First, as shown in
Figure 94, Endpoint Policy Manager DesignStudio will substitute the correct variable so it will work
on client machines of the same type.

![discovering_configuration_7](/images/endpointpolicymanager/applicationsettings/designstudio/configurationdata/discover/discovering_configuration_7.webp)

The figure shown. Endpoint Policy Manager DesignStudio substituting the correct variable.

To account for the possibility that you might have both 32-bit and 64-bit machines as targets,
Endpoint Policy Manager Application Settings Manager, by default, will always try to write to both
locations on the target machine. That way, you're ensured that both 32-bit and 64-bit machines will
get your directives. Note that this behavior is controllable within Endpoint Policy Manager
`DesignStudio in Tools|Options `in the VirtualStore tab, as shown In the figure shown. It is recommended
that you keep this checkbox checked.

![discovering_configuration_8_624x322](/images/endpointpolicymanager/applicationsettings/designstudio/configurationdata/discover/discovering_configuration_8_624x322.webp)

The figure shown. The VirtualStore tab.

If you want to see both actions, you can click on the element's "Advanced" button, as shown in
Figure 96, and see the two actions created.

![discovering_configuration_9_312x592](/images/endpointpolicymanager/applicationsettings/designstudio/configurationdata/discover/discovering_configuration_9_312x592.webp)

The figure shown. The element's "Advanced" button.

If you were to hover the mouse over each "File" location, you would see that the actions are set
against each possible file location automatically (`\Program Files(x86)` and `\Program Files`), one
for the first action and another for the second action, as shown In the figure shown and The figure shown.

![discovering_configuration_10](/images/endpointpolicymanager/applicationsettings/designstudio/configurationdata/discover/discovering_configuration_10.webp)

The figure shown. The file location for the first action.

![discovering_configuration_11_624x79](/images/endpointpolicymanager/applicationsettings/designstudio/configurationdata/discover/discovering_configuration_11_624x79.webp)

The figure shown. The file location for the second action.

Therefore, there's really no downside in leaving the "Always create additional action when target
files utilize Windows 7 "VirtualStore" directories (recommended)" turned on. It will mean that your
64-bit and 32-bit applications will read the right file and be correctly configured.

For more information on the idea of how an application uses file virtualization, see the following
resources:

- Video and example app for testing:
  [http://www.msigeek.com/328/video-file-registry-virtualization-in-windows-7](http://www.msigeek.com/328/video-file-registry-virtualization-in-windows-7)
- [http://msdn.microsoft.com/en-us/library/bb756960.aspx](http://msdn.microsoft.com/en-us/library/bb756960.aspx).
  Look for "Virtualization" about halfway down the page.
- [http://www.thewindowsclub.com/file-registry-virtualization-in-windows-7](http://www.thewindowsclub.com/file-registry-virtualization-in-windows-7).
- Group Policy: Fundamentals, Security and the Managed Desktop by Jeremy Moskowitz Page 561–562.
  Available at [www.GPanswers.com/book](http://www.GPanswers.com/book).



