---
title: "Customize FPolicy Policy Name"
description: "Customize FPolicy Policy Name"
sidebar_position: 40
---

# Customize FPolicy Policy Name

There may be situations when FPolicy needs to be named something other than StealthAUDIT. In those
cases it is necessary to manually add a parameter to the Activity Monitor agent’s `sbtfilemon.ini`
file. After the monitoring agent has been deployed, follow the steps.

**Step 1 –** Open to the `sbtfilemon.ini` file on the agent server in a text editor:

**…\STEALTHbits\StealthAUDIT\FSAC**

**Step 2 –** Add the following parameter:

```
FPOLICY_POLICY_NAME=[POLICY_NAME]
```

Example:

```
FPOLICY_POLICY_NAME=EnterpriseAuditor
```

**Step 3 –** Save and close the `sbtfilemon.ini` file.

When the Activity Agent is configured to monitor a NetApp device, it looks for the FPolicy named in
the parameter.
