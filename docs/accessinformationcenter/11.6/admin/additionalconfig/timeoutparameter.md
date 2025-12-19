---
title: "Timeout Parameter"
description: "Timeout Parameter"
sidebar_position: 50
---

# Timeout Parameter

A user session will end when the timeout parameter for inactivity has been reached, and the user
will be logged out. By default this is set to 15 minutes.

:::note
When accessing the Access Information Center through the Web Console, its timeout
parameter value takes precedence over the Access Information Center timeout parameter value. See the
Timeout Parameter for the Web Console topic of the
[Netwrix Enterprise Auditor Documentation](https://helpcenter.netwrix.com/category/accessanalyzer)
for instructions on modifying its timeout parameter value.
:::


The timeout parameter is configured within the `AccessInformationCenter.Service.exe.config` file in
the Access Information Center installation directory:

**…\STEALTHbits\Access Information Center**

Follow the steps to modify the timeout parameter.

**Step 1 –** Open the `AccessInformationCenter.Service.exe.config` file with a text editor, for
example Notepad.

![Timeout Parameter in the config file](/images/accessinformationcenter/11.6/admin/additionalconfig/configfiletimeoutparameter.webp)

**Step 2 –** Change the value for the `AuthSessionTimeout` parameter to the desired number of
minutes. For example:

```
<add key="AuthSessionTimeout" value="20"/>
```

**Step 3 –** Save and close the file.

A user session times out after the number of minutes specified for inactivity, for example after 20
minutes.
