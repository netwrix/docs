---
title: "Timeout Parameter for the Web Console"
description: "Timeout Parameter for the Web Console"
sidebar_position: 60
---

# Timeout Parameter for the Web Console

The Web Console is configured with a default timeout parameter of 15 minutes. This can be configured
within the **WebServer.exe.config** file in the Web folder of the Enterprise Auditor installation
directory:

**…\STEALTHbits\StealthAUDIT\Web**

Follow the steps to modify the timeout parameter for the Web Console.

**Step 1 –** Open the **WebServer.exe.config** file with a text editor, for example Notepad.

![WebServer.exe.config file in Notepad](/images/accessanalyzer/11.6/install/application/reports/webserverexeconfigtimeout.webp)

**Step 2 –** Change the value for the `SessionTimeout` parameter to the desired number of minutes:

```
<add key="SessionTimeout" value="15" />
```

**Step 3 –** Save and close the file.

The Web Console session will timeout after this many minutes of inactivity. This value will take
precedence over session timeout values set within the product consoles, for example the AIC, when
accessed through the Web Console.
