---
title: "Execute PS Script"
description: "Execute PS Script"
sidebar_position: 30
---

# Execute PS Script

The Execute PS script right-click option in the Recent Events tab of a policy opens a Windows
Explorer window to the scripts folder within the Threat Preventionfile system.

**…\ Netwrix\Netwrix Threat Prevention\SIWinConsole\scripts**

You can execute Windows PowerShell scripts stored in this folder for the selected event. Select a
script to execute it.

An example script has been placed in this folder. The example PowerShell script creates or appends
the _si_eventdata.txt_ file on the C:\ drive. The example script also contains all the parameters
needed for working with the selected event data.

:::note
For a PowerShell script to reference the selected event data, it is necessary to use the
_$helper.[class]_ with the data parameter. This is Threat Prevention specific. For example:
:::


```
$sw.WriteLine(("EventName: " + $helper.EventName))
```

See the [Default PowerShell 4.0 Script](/docs/threatprevention/8.0/admin/policies/configuration/actions/powershell.md#default-powershell-40-script) topic
for the full example script.
