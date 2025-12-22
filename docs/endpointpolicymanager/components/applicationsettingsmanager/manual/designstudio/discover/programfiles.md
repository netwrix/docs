---
title: "Configuration Data in Program Files"
description: "Configuration Data in Program Files"
sidebar_position: 10
---

# Configuration Data in Program Files

Using Windows Explorer, you can look for INI files (expressed as "Configuration settings" in the
file type in Explorer), XML files, and other file types. In the figure shown, you can see an INI file for
an application within Program Files (x86).

![discovering_configuration_1_624x213](/images/endpointpolicymanager/applicationsettings/designstudio/configurationdata/discover/discovering_configuration_1_624x213.webp)

The figure shown. Example of INI files.

However, if you try to select this file using Netwrix Endpoint Policy Manager (formerly PolicyPak)
DesignStudio, you will be provided a warning message, as shown In the figure shown.

![discovering_configuration_2](/images/endpointpolicymanager/applicationsettings/designstudio/configurationdata/discover/discovering_configuration_2.webp)

The figure shown. Warning message when selecting an INI file.

The warning indicates a problem not with where this application's data was found (right now), but
actually where that data is likely to be stored (on the client machine).

Starting with Windows Vista (and continuing through Windows 7, etc.), only administrators can write
configuration data to:

- `C:\`
- `C:\Program Files\`
- `C:\Program Files (x86)\`

If you are seeing an application's data files inside one of these directories, that indicates that
you've run this application at some point with administrator credentials. Then, the application
wrote configuration data to Program Files, as administrators are allowed to do this. However, when
this application is run as a standard user (that is, without local administrator credentials) those
settings will not be stored here. When the application is run as a standard user, Windows will
redirect the storage of this application data to somewhere within `%appdata%`. Therefore, it is not
recommended to proceed using a hardcoded path with Program Files in the name because the file might
exist on this machine, but it's unlikely to exist on the client machines in that same path.

Applications running within Windows will do one of two things when run as standard users:

- They will recognize they are running with standard user rights and store their files somewhere
  within `%appdata%` or `%localappdata%`.
- They will not recognize they are running with standard user rights, and Windows will forcefully
  store their files in what is known as the VirtualStore (`%localappdata%\VirtualStore`)

When this application is run as a standard user, the configuration data is within
`%appdata%\roaming` as shown In the figure shown(in this case, `%appdata%\roaming\Qualcomm\Eudora`). That's
because this application was smart enough to know to use
`%appdata% as its data store when run as a standard user.`

![discovering_configuration_3](/images/endpointpolicymanager/applicationsettings/designstudio/configurationdata/discover/discovering_configuration_3.webp)

`The figure shown. Configuration data stored within %appdata%\roaming.`

Let's continue onward and examine another case of where user data might be stored.



