---
title: "Items That Use HKEY_Local_Machine"
description: "Items That Use HKEY_Local_Machine"
sidebar_position: 40
---

# Items That Use HKEY_Local_Machine

Endpoint Policy Manager Application Settings Manager has a facility to deploy registry keys to
`HKEY_Local_Machine`. This can come in handy if you are trying to manage an application that runs as
a service and has entries only in `HKEY_Local_Machine`. You set the project up as shown in Figure
213, then define the data root with a node within `HKEY_Local_Machine`.

![special_applications_and_project_13](/images/endpointpolicymanager/applicationsettings/designstudio/applicationsprojects/special_applications_and_project_13.webp)

The figure shown. Defining the data root as `HKEY_Local_Machine`.

However, when you do, you'll be prompted with a message suggesting that this might or might not work
as shown In the figure shown.

![special_applications_and_project_14](/images/endpointpolicymanager/applicationsettings/designstudio/applicationsprojects/special_applications_and_project_14.webp)

The figure shown. The warning when defining the data root as `HKEY_Local_Machine`.

If you are sure that the application's value is best suited for `HKEY_Local_Machine`, you can safely
ignore this warning.

:::note
You'll get the same message for applications that store most of their settings in
`HKEY_Current_User`, but have a handful of settings in `HKEY_Local_Machine`.
:::


Acrobat Reader is an example in which most settings are in
`HKEY_Current_User\Software\Adobe\Acrobat Reader\10.0`, but the updater settings are stored within
`HKEY_LOCAL_MACHINE\SOFTWARE\Adobe\Adobe ARM\1.0\ARM` in the iCheck setting.



