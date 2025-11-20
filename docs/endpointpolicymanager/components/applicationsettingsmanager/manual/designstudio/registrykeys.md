---
title: "Applying Settings within Multiple Registry Keys"
description: "Applying Settings within Multiple Registry Keys"
sidebar_position: 110
---

# Applying Settings within Multiple Registry Keys

The Configuration Wizard will discover where settings are stored when you perform a before and after
capture. In the example In the figure shown, the "Mute Yahoo! Games" setting is discovered within the
application's registry keys of the specific user (JeremyM) where the capture was performed. The
discovered key is within `\Profiles\JeremyM\Games`.

![applying_settings_within_multiple](/images/endpointpolicymanager/applicationsettings/designstudio/applying_settings_within_multiple.webp)

The figure shown. Capturing a setting.

If you were to compile and deploy this setup to your users, it would work perfectly if everyone in
the company used the "JeremyM" profile for this application. But since everyone uses a different
username for this application, you need a way to teach DesignStudio to globally replace "JeremyM"
with whatever is found in `\Profiles\<something>\Games`. In the figure shown, you can see the live
registry with another user, JeremyM200, logged in using this application. This user's path for the
new setting would be `\Profiles\JeremyM200\Games\`. The original path would be
`\Profiles\JeremyM\Games`.

![applying_settings_within_multiple_1](/images/endpointpolicymanager/applicationsettings/designstudio/applying_settings_within_multiple_1.webp)

The figure shown. The user's path to the mute setting.

To teach DesignStudio to globally replace "JeremyM" with whatever is inside "profiles," substitute
an asterisk for the username, as shown In the figure shown. This will perform a special global replace
operation on all subkeys within this application's "profiles" key.

![applying_settings_within_multiple_2](/images/endpointpolicymanager/applicationsettings/designstudio/applying_settings_within_multiple_2.webp)

The figure shown. Replacing the username with an asterisk.

This means that any subkey within `Pager\Profiles `is automatically substituted correctly. Now,
whoever uses this application will get the setting properly delivered because the substitution will
happen automatically.

:::note
You can use the Endpoint Policy Manager DesignStudio "Global Search and Replace" function,
which we'll discuss in a later section.

:::



