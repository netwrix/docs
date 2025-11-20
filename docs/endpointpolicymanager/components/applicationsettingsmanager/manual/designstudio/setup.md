---
title: "Setting Up Application Configuration Data"
description: "Setting Up Application Configuration Data"
sidebar_position: 40
---

# Setting Up Application Configuration Data

When you create a new project (see the Application Settings Manager documentation), you'll find that in the
initial wizard windows, you can choose how the capture process occurs, as shown In the figure shown.

![setting_up_application_configuration](/images/endpointpolicymanager/applicationsettings/designstudio/configurationdata/setting_up_application_configuration.webp)

The figure shown. Choosing how to capture the application.

Choose to start a new project using the Capture Wizard. Then, select your project type, as shown in
The figure shown.

![setting_up_application_configuration_1](/images/endpointpolicymanager/applicationsettings/designstudio/configurationdata/setting_up_application_configuration_1.webp)

The figure shown. Selecting your project type.

The following project types are currently supported, and more project types may be available in the
future.

- Registry: This is the most common project type. Most applications store their configuration data
  inside the registry. Most applications (like WinZip, Acrobat Reader, etc.) store their data per
  user somewhere inside `HKEY_Local_User\Software`.
- Registry (service): Some applications store their information in `HKEY_Local_Machine`. This is not
  very common, but it can happen. If in doubt, use "Registry" instead. You can learn more about this
  project type in the section called "Special Applications and Project Types."
- `.INI` file: Many files store their configuration data in INI files. This is an older Windows
  format, but is still widely supported.
- `.XML` file: A wide variety of applications use XML for their configurations. Not all XML types
  are supported, and the wizard will indicate if the XML file you've selected is not supported.
- Mozilla-specific config file: The Mozilla Corporation has a variety of applications which all work
  similarly, including Firefox, Thunderbird, and SeaMonkey. These applications from the Mozilla
  Corporation all use this file type. There's no need to use Netwrix Endpoint Policy Manager
  (formerly PolicyPak) DesignStudio to create your own Firefox or Thunderbird AppSets; we've already
  done that for you. This Mozilla-specific file format is captured and handled somewhat differently
  than the others, and is specifically discussed in the section called "Special Applications and
  Project Types."
- `.js` file (Firefox-style config file): This is a JavaScript style file, in the common
  Firefox-style format.
- .properties file (`Java-style config` file): This is a less common file format; however, some
  applications do use .properties files to configure their data. Usually these are Java
  applications, but could be other kinds of applications as well.
- OpenOffice and LibreOffice config file (\*`.xcu`): This file type is used to configure OpenOffice
  and LibreOffice.
- Remote Desktop Settings file (\*`.rdp config `file): Configured Microsoft Remote Desktop Services
  files.
- JSON: This is a common file format for many applications.
- Firefox Plugin Registry: This is for Firefox plugins that support a specific standard.

:::note
Endpoint Policy Manager DesignStudio will create new data files for all file types if they
don't already exist on the client computer. This is true for every file type Endpoint Policy Manager
:::


DesignStudio supports, except RDP files. RDP files are not created on the client machine, and they
must already be present to be modified by Endpoint Policy Manager

DesignStudio. Additionally, it is now recommended that if you wish to deliver and maintain `.rdp`
files, you do so with Endpoint Policy Manager Remote Desktop Protocol Manager
([https://www.policypak.com/policies/remote-desktop-protocol-manager/](https://www.policypak.com/policies/remote-desktop-protocol-manager/)).



