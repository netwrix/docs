---
title: "Compilation"
description: "Compilation"
sidebar_position: 40
---

# Compilation

The Compilation tab enables you to set your project's DLL name, as shown In the figure shown. It also
enables you to save your current work and compile your AppSet to be used in Group Policy, as shown
In the figure shown.

![getting_around_7](/images/endpointpolicymanager/applicationsettings/designstudio/navigation/tab/getting_around_7.webp)

The figure shown. Setting the DLL name.

![getting_around_8_624x155](/images/endpointpolicymanager/applicationsettings/designstudio/navigation/tab/getting_around_8_624x155.webp)

The figure shown. Compiling the AppSet.

In the figure shown, you can see that you can do the following:

- Compile to standard location (default): This will compile to what is set in `Tools | Options`.
  Usually, this is the Endpoint Policy Manager local store or

  `c:\program files (x86)\PolicyPak\Extensions`.

- Compile to same location as XML file: This will not copy to the local store, and instead will only
  compile directly where the existing AppSet is located.
- Compile to both standard location and location as XML file: This will compile and save in the
  local store and also make a copy where the AppSet XML file is located (overwriting any previous
  DLL).

You can also see a test preview of your AppSet after compiling. This can be useful if you want to
tweak, test, and re-tweak your application without having to launch the Group Policy editor.



