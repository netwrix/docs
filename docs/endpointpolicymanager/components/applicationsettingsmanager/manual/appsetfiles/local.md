---
title: "Local Storage for Endpoint Policy Manager Extension DLLs"
description: "Local Storage for Endpoint Policy Manager Extension DLLs"
sidebar_position: 10
---

# Local Storage for Endpoint Policy Manager Extension DLLs

When you compiled your AppSet, the output (the extension DLL) was placed in one of three
directories.

- `%ProgramFiles%\PolicyPak\Extensions`
- `%ProgramFiles%\PolicyPak\Design Studio\Extensions`
- `%appdata%\PolicyPak\Extensions`

In the figure shown, you can see the`%ProgramFiles%\PolicyPak\Extensions`directory and the compiled AppSets
within it.

![policypak_application_settings_3_1](/images/endpointpolicymanager/applicationsettings/appsetfiles/storage/endpointpolicymanager_application_settings_3_1.webp)

The figure shown. The files that are contained in the` %ProgramFiles%\PolicyPak\Extensions` directory.

Note that each compiled AppSet has a specific name: `PP-{name of file that you saved}.dll`.

In our Quickstart guide, we used Endpoint Policy Manager DesignStudio and saved the file
as` Winzip 14 to 17.XML`. When the AppSet was compiled, the resulting file became
`PP-WinZip 14 to 17.dll` (or something similar).

All compiled AppSets must have a name starting with "PP-". This is to prevent errant DLLs from being
placed into the Extensions directory and, consequently, the Endpoint Policy Manager MMC snap-in
trying to load them, which could cause an error.

In the figure shown, you can see the extension DLL is being leveraged from Local Storage.

![policypak_application_settings_3_2](/images/endpointpolicymanager/applicationsettings/appsetfiles/storage/endpointpolicymanager_application_settings_3_2.webp)

The figure shown. The Local Storage is being leveraged by the extension DLL.

Local Storage is fine if you only have one administrator in the domain. However, you should always
make backup copies of your original pXML files (XML files) and your compiled extension DLLs. This is
because, if you followed the Quickstart guide, these files are likely only stored in one place right
now—your Endpoint Policy Manager management station/PolicyPak Creation Station (which is likely the
same computer).

In practice, however, you would

- create your pXML file on your Endpoint Policy Manager Creation Station,
- compile the pXML file on your Endpoint Policy Manager Creation Station into an extension DLL, and
- copy your compiled extension DLL from your Endpoint Policy Manager Creation Station to your
  Endpoint Policy Manager management station (where you use the GPMC).

In this case, you would have created a copy of the extension DLL in the process. But if you're a
solo administrator, be sure to keep both the original pXML files and the compiled DLL files in a
handy backed-up place.

:::note
Solo administrators might choose to leverage another option, which we'll discuss next,
called Endpoint Policy Manager Central Storage. It can help you maintain your extension DLLs
centrally and easily.
:::


The biggest issue with using Local Storage for the DLL occurs when you decide to use another
Endpoint Policy Manager management station to deploy new GPOs or manage existing GPOs. Below is a
common example of this issue.

On Computer Admin1, an administrator creates a GPO that deploys Endpoint Policy Manager directives
for WinZip. The Endpoint Policy Manager WinZip extension DLL is located only on the Admin1 computer
in the `c:\Program Files\PolicyPak\Extensions` directory.

The administrator then roams to a new computer named Admin3. The Admin3 computer already has the
GPMC installed. The administrator knows that in order to see the Endpoint Policy Manager node in the
Group Policy Editor, he or she must install the included Endpoint Policy Manager Admin `Console.msi`
(32-bit or 64-bit) to extend the GPMC to provide the Endpoint Policy Manager node.

Once he or she has done that, the administrator edits the existing GPO and Endpoint Policy Manager
directive that contains WinZip directives and receives a message similar to what is shown in
The figure shown.

:::note
If you use the Group Policy Editor and don't see the Endpoint Policy Manager node while
editing a GPO, you need to install Endpoint Policy Manager Admin Console.msi on machines that use
the GPMC.
:::


![policypak_application_settings_3_3](/images/endpointpolicymanager/applicationsettings/appsetfiles/storage/endpointpolicymanager_application_settings_3_3.webp)

The figure shown. This message informs the adminstrator that they need to set up
`c:\Program Files\PolicyPak\Extensions` directory on this computer.

When the administrator is on the Admin3 machine, the Endpoint Policy Manager MMC console simply
cannot find the DLL inside its own`c:\Program Files\PolicyPak\Extensions`directory. That's because
it only exists on the Admin1 computer.

In order for the administrator to be able to utilize Endpoint Policy Manager for WinZip, he or she
needs to copy the extension DLL from the Admin1 computer's `c:\Program Files\PolicyPak\Extensions`
directory to the Admin3 computer's `c:\Program Files\PolicyPak\Extensions` directory.

Additionally, since the DLL isn't on the local machine, there is no way for that administrator to
create a new GPO that contains Endpoint Policy Manager directives, as seen In the figure shown. If there
are no Endpoint Policy Manager extension DLLs on the machine that is running the GPMC, then there is
no way to define an AppSet item.

![policypak_application_settings_3_4](/images/endpointpolicymanager/applicationsettings/appsetfiles/storage/endpointpolicymanager_application_settings_3_4.webp)

The figure shown. The application is unavailable because there is no way for the administrator to create a
new GPO if the DLL isn't on the local machine.

Ensuring that these DLLs are always available wherever an administrator might roam can be a real
nuisance. With that in mind, Endpoint Policy Manager will honor Endpoint Policy Manager Central
Storage and Endpoint Policy Manager Share-Based Storage, as explored in the next sections.



