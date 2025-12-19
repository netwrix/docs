---
title: "Timeout Parameter"
description: "Timeout Parameter"
sidebar_position: 20
---

# Timeout Parameter

A user session will end when the timeout parameter for inactivity has been reached, and the user
will be logged out. By default this is set to 15 minutes.

The timeout parameter is configured within the `AccessInformationCenter.Service.exe.Config` file in
the Access Reviews installation directory:

...\Netwrix\Access Reviews

Follow the steps to modify the timeout parameter.

**Step 1 –** Open the `AccessInformationCenter.Service.exe.Config` file with a text editor, e.g.
Notepad.

![Notepad showing the AccessInformationCenter.Service.exe.Config file](/images/auditor/10.6/access/reviews/admin/additionalconfig/timeout.webp)

**Step 2 –** Change the value for the `AuthSessionTimeout` parameter to the desired number of
minutes. For example:

<add key="AuthSessionTimeout" value="20"/>

**Step 3 –** Save and close the file.

A user session times out after the number of minutes specified for inactivity, for example after 20
minutes.
