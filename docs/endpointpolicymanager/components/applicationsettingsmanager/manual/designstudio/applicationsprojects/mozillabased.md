---
title: "Mozilla-Based Applications"
description: "Mozilla-Based Applications"
sidebar_position: 30
---

# Mozilla-Based Applications

Mozilla-based applications are different than all other project types. All Mozilla-based
applications have the following characteristics in common:

- They store configuration data in one (or two) files:`prefs.js`and `user.js `
- Those data files are stored within a randomly generated folder name in
  `%appdata%\<application directory>\Profiles`
- That folder name is pointed to by the file named profiles.ini which lives in
  `%appdata%\<application directory>`

For instance, on this computer with Firefox installed (Figure 205), we can open the
`%appdata%\Mozilla\FireFox\ folder`, open the Profiles.ini file, and learn that this specific
machine will store user `settings within \Profiles\edk2qe8w.default`.

![special_applications_and_project_5](/images/endpointpolicymanager/applicationsettings/designstudio/applicationsprojects/special_applications_and_project_5.webp)

The figure shown. The location where using settings will be stored.

Every machine on your network will have a storage location, meaning Firefox (or Thunderbird,
Seamonkey, or Evergreen profiles) is stored in a unique directory on each computer. You can see in
Figure 206 the random directory name, and inside it, the` prefs.js` file, which defines the Firefox
settings.

![special_applications_and_project_6](/images/endpointpolicymanager/applicationsettings/designstudio/applicationsprojects/special_applications_and_project_6.webp)

The figure shown. The `prefs.js` file location.

The good news is Endpoint Policy Manager DesignStudio and the Endpoint Policy Manager Application
Settings Manager CSE can handle this problem. Endpoint Policy Manager Application Settings Manager
can deliver Firefox settings (or Thunderbird, Seamonkey, or any Mozilla-based application's
settings) to that unique directory, regardless of where it lives. To do this, we have to understand
the following three files:

- `profile.ini`: This file lives within the Mozilla application name. It points to the random
  directory where the user data is to be stored.
- `prefs.js`: This is the baseline configuration for an application and is usually auto-populated by
  the application.
- `user.js`: This file is not normally present. If it is present, the settings here override
  the` prefs.js` settings. This is to be stored in the same directory as `prefs.js `and takes the
  same form as `prefs.js`.

To control Mozilla-based applications using Endpoint Policy Manager Application Settings Manager and
Endpoint Policy Manager DesignStudio, we only need to teach DesignStudio where the profiles.ini file
lives. This file is not the file that contains our user settings. This is the file that points us to
where the user settings (`prefs.js`) are stored (See the figure here).

![special_applications_and_project_7](/images/endpointpolicymanager/applicationsettings/designstudio/applicationsprojects/special_applications_and_project_7.webp)

The figure shown. The `profiles.ini `file.

In Endpoint Policy Manager DesignStudio, for all other file-based project types (INI, XML,
.properties, .js-type, etc.), you can select the specific file you want to manage. But with Mozilla
project type files, you must always point to the profiles.ini file of the Mozilla application. For
example, with Firefox, you will likely want to specify what's shown In the figure shown. This is because
the `profiles.ini` file for Firefox lives in `%appdata%\Mozilla\Firefox`.

![special_applications_and_project_8](/images/endpointpolicymanager/applicationsettings/designstudio/applicationsprojects/special_applications_and_project_8.webp)

The figure shown. Pointing to the profiles.ini file location.

Note also that the "Application name (optional)" field is filled in as "Mozilla Firefox." The
"Application name (optional)" field is different than the project name. "Project name" is the
Endpoint Policy Manager Application Settings Manager "displayname." This is what's shown in the MMC
when you indicate you want to use a new AppSet.

The "Application name (optional)" field is what is used to perform the Firefox-style UI lockout.
Endpoint Policy Manager Application Settings Manager looks in the MSI installed table for a match
like `*{string}*`. Therefore, its best to make the "Application name (optional)" field text more
generic.

So, in the example In the figure shown, it is specified as "Mozilla Firefox," which will be generic enough
to cover all versions of Mozilla Firefox.

A common mistake is to add a string in this field that is too specific. For instance, putting
"Mozilla Firefox 23.0" in this field means that this AppSet's Firefox-specific lockdown features
will apply only when a product matching \*Mozilla Firefox 23.0\* is found on the machine.

This same idea applies to Thunderbird, Chatzilla, and all other Firefox-type applications. For
Thunderbird, the right data file location is `%appdata%\Thunderbird\profiles.ini`, as shown in
The figure shown. This is because the Thunderbird profiles.ini file lives in `%appdata%\Thunderbird`.
(Note that

Thunderbird does not contain a "Mozilla" subdirectory like Firefox). Note also that the "Application
name (optional)" field should be generic enough for all version of Mozilla Thunderbird.

![special_applications_and_project_9](/images/endpointpolicymanager/applicationsettings/designstudio/applicationsprojects/special_applications_and_project_9.webp)

The figure shown. Filling in the "Application name" field for Mozilla Thunderbird.

For Sunbird, the location is `%appdata%\Mozilla\Sunbird\profiles.ini`, as shown In the figure shown. This
is because the Sunbird profiles.ini file lives in `%appdata%\Mozilla\Sunbird` (similar to Firefox).
The "Application name (optional)" field should be "Mozilla Sunbird" (not shown in this screenshot).

![special_applications_and_project_10](/images/endpointpolicymanager/applicationsettings/designstudio/applicationsprojects/special_applications_and_project_10.webp)

The figure shown. The location of the Sunbird `profiles.ini` file.

:::note
Evergreen is a popular system for managing libraries. This application has been verified
to be a Mozilla-style application and has a `profiles.ini` file that you would point to.
:::


Once Endpoint Policy Manager DesignStudio is pointing toward the profiles.ini file (and not
the` prefs.js` file), we are ready to perform our normal work in Endpoint Policy Manager
DesignStudio. Endpoint Policy Manager DesignStudio will use the `prefs.js` file on the machine you
perform the work on.

Once the AppSet is done and compiled, it's ready for use. However, when the Mozilla-based
application's AppSet is deployed to the target machine, the target machine's` prefs.js` is not
modified. Instead, Endpoint Policy Manager Application Settings Manager will create a new file (or
modify an existing file), named `user.js`. The file `user.js` will contain your Mozilla-based
application's settings, and will not modify the existing `prefs.js`.

For example, before a Mozilla-based AppSet is written to a machine, the application's folder will
usually only have a `prefs.js` file describing the user experience, as shown In the figure shown.

![special_applications_and_project_11](/images/endpointpolicymanager/applicationsettings/designstudio/applicationsprojects/special_applications_and_project_11.webp)

The figure shown. The `prefs.js` file.

After the AppSet successfully applies, Endpoint Policy Manager Application Settings Manager will
write a new file, `user.js`, instead of changing the `prefs.js` file directly. You can see the
new` user.js` file after the AppSet settings are deployed to Firefox on the machine In the figure shown.

![special_applications_and_project_12](/images/endpointpolicymanager/applicationsettings/designstudio/applicationsprojects/special_applications_and_project_12.webp)

The figure shown. The `user.js `file.

Note again that `prefs.js` is not touched during the delivery of the settings. The Mozilla-based
applications will treat `user.js` as special file that has two very important characteristics:

- If there is a conflict between the `prefs.js` and the `user.js`, `user.js` wins.
- If there is a setting defined in `user.js`, and a user modifies any preference dialogs within the
  Mozilla-based application, they will be overwritten by the `user.js` setting.

This is perfect for Endpoint Policy Manager Application Settings Manager because you can define the
settings using Group Policy. Those settings are always written to `user.js` by Endpoint Policy
Manager Application Settings Manager.

If a user makes any configuration changes to Firefox, Thunderbird, etc., those changes are thrown
out if the setting is defined within `user.js`. For instance, if you use Endpoint Policy Manager
Application Settings Manager to define the Firefox home page, and the user changes the home page
inside Firefox, those changes are thrown away for next time.

For more information on `user.js` files you can check out the following web article:
`http://kb.mozillazine.org/User.js_file`



