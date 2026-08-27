---
title: "Timeout Parameter"
description: "Timeout Parameter"
sidebar_position: 20
---

# Timeout Parameter

A user session ends when the timeout parameter for inactivity is reached, and Access Reviews logs
out the user. By default, this is set to 15 minutes.

You configure the timeout parameter in the `AccessInformationCenter.Service.exe.Config` file in
the Access Reviews installation directory:

...\Netwrix\Access Reviews

To modify the timeout parameter:

**Step 1 –** Open the `AccessInformationCenter.Service.exe.Config` file with a text editor, e.g.
Notepad.

![Notepad showing the AccessInformationCenter.Service.exe.Config file](/images/auditor/10.7/access/reviews/admin/additionalconfig/timeout.webp)

**Step 2 –** Change the value for the `AuthSessionTimeout` parameter to the number of minutes you
want. For example:

<add key="AuthSessionTimeout" value="20"/>

**Step 3 –** Save and close the file.

A user session times out after the number of minutes specified for inactivity, for example after 20
minutes.
