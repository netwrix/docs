---
title: "Configuration Data in %appdata%"
description: "Configuration Data in %appdata%"
sidebar_position: 30
---

# Configuration Data in %appdata%

If an application writes its configuration data to `c:\`, `c:\program files`, or

`c:\program files (x86)` then do the following:

**Step 1 –** Log in as a standard user.

**Step 2 –** Run the application.

**Step 3 –** Look for configuration data in the three likely locations:

1. `c:\Users\<username>\AppData\Local\<app>`
2. `c:\Users\<username>\AppData\Roaming\<app>`
3. `c:\Users\<username>\AppData\Local\VirtualStore\Program Files (x86)\<app>`

**Step 4 –** Continue to run PolicyPak DesignStudio as a standard user and perform all
your configurations.

**Step 5 –** When you run PolicyPak DesignStudio as a standard user, you can select
the application's data file within `%appdata%`, even if you browse using the full path, starting
with `C:\`. PolicyPak DesignStudio will automatically detect if you are within
`%appdata%` or `%localappdata%` and substitute the

`%appdata%` or `%localappdata%` variables for you as needed, as shown In the figure shown and The figure shown.

![discovering_configuration_12](/images/policypak/applicationsettings/designstudio/configurationdata/discover/discovering_configuration_12.webp)

The figure shown. DesignStudio detecting the data location.

![discovering_configuration_13](/images/policypak/applicationsettings/designstudio/configurationdata/discover/discovering_configuration_13.webp)

The figure shown. DesignStudio detecting the data location.

:::note
You will not be able to compile your AppSet to a DLL as standard user unless you change
the location using Tools | Options. In the Compilation tab, select a writeable location for "Path
for compiled dlls." By default, PolicyPak DesignStudio writes its compiled AppSets to
`c:\Program Files\PolicyPak` by design so non-administrators cannot utilize PolicyPak
Application Settings Manager .dlls on machines.
:::


Therefore, capture all the data from your application first as a standard user, then test your
compiling as a standard user. You can see the preview of your AppSet by selecting "Show test
PolicyPak when complete" within the Compilation tab, as shown In the figure shown

![discovering_configuration_14](/images/policypak/applicationsettings/designstudio/configurationdata/discover/discovering_configuration_14.webp)

The figure shown. Choosing to preview the AppSet.

Then, when ready, switch to an administrative user to move the compiled PolicyPak DLL
to

`c:\Program Files\PolicyPak\Extensions`

(or `c:\Program Files(x86)\PolicyPak\Extensions` on 64-bit machines) and use the Group Policy Editor
to see your completed AppSet.



