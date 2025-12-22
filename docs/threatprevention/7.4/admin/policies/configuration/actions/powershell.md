---
title: "PowerShell 4.0 Actions"
description: "PowerShell 4.0 Actions"
sidebar_position: 30
---

# PowerShell 4.0 Actions

A PowerShell 4.0 script can be written and assigned to a policy by Threat Prevention users or a
Netwrix Engineer via engaging Netwrix Professional Services. The script will be invoked by the
Enterprise Manager for an enabled policy.

Follow the steps to add a PowerShell 4.0 action to a policy/template.

![Actions tab - Actions Configurations area](/images/threatprevention/7.4/admin/policies/actions/actionsconfigurationsarea.webp)

**Step 1 –** On a policy or template Actions tab, click **Add** (+) to open the Add Action window.

**Step 2 –** In the left pane, select the radio button for **PowerShell 4.0**.

![addactionwindowforpowershell](/images/threatprevention/7.4/admin/policies/actions/addactionwindowforpowershell.webp)

**Step 3 –** Configure the PowerShell 4.0 Script action:

- Name – Provide a unique, descriptive name for this PowerShell 4.0 action
- Check the box for **Enabled** to allow the policy to launch the script
- Description – Provide a clear and detailed description for this PowerShell 4.0 action. This is
  optional but recommended.
- Click **Edit…** to view the sample script. The Threat Prevention Script Editor opens

![Script Editor for PowerShell Scripts](/images/threatprevention/7.4/admin/policies/actions/scripteditorforps.webp)

**Step 4 –** Create or copy/paste the custom script in the Threat Prevention Script Editor. See the
[Threat Prevention Script Editor Tools](/docs/threatprevention/7.4/admin/policies/configuration/actions/netscript.md#threat-prevention-script-editor-tools)
topic for additional information, i.e. Run for testing and Encrypt functionality. See the
[Default PowerShell 4.0 Script](#default-powershell-40-script) topic for the default custom script.
Save and close.

**Step 5 –** On the Add Action window, the new script is displayed in the **Script Preview**
section. Check the **Enable compiler error logging** checkbox to enable Threat Prevention to log
information about the compiling of scripts.

**Step 6 –** Click Save to close the Add Action window and apply changes.

![Actions tab – PowerShell 4.0 Action Created](/images/threatprevention/7.4/admin/policies/actions/powershellaction.webp)

The Actions tab now displays the configured settings for the specified PowerShell 4.0 action. The
action configuration can be directly edited through this display as well.

## Default PowerShell 4.0 Script

The following PowerShell 4.0 script is configured as a default action. It will either create the
_c:\nveventdata.txt_ file or append the event data to it.

```
# Note: Powershell 4.0 or later is required for 
# Integration with StealthINTERCEPT variables 
# input parameters
# $event, $helper
function Write-Attributes ()
{
Param([System.IO.StreamWriter] $sw, [system.collections.hashtable] $attributes)
foreach ($key in $attributes.Keys)
{
$s = $key + ": "
$v = $attributes[$key]
# echo $v.GetType() 
if($v.GetType().FullName -eq 'SI.Common.Messages.NvMessageArray')
{
$sv = ""
$index = 0
$values = $v; 
foreach ($value in $values)
{
if ($index -gt 0)
{
$sv = $sv + ", "
} 
$sv = $sv + $value
$index = $index + 1
} 
$s = $s + $sv
} 
else 
{
$s = $s + $v
} 
$sw.WriteLine($s) 
}
} 
[System.IO.StreamWriter] $sw = $null
Try
{
$sw = New-Object System.IO.StreamWriter ("C:\si_eventdata.txt", $true)
$sw.WriteLine("===========================================")
$sw.WriteLine(("TimeLogged:  " + $helper.TimeLogged.ToString()
$sw.Flush()
$sw.WriteLine(("TimeLoggedUtc:  " + $helper.TimeLoggedUtc.ToString()
$sw.Flush()
$sw.WriteLine(("EventSourceType: " + $helper.EventSourceType))
$sw.Flush()
$sw.WriteLine(("EventSourceName: " + $helper.EventSourceName))
$sw.Flush()
$sw.WriteLine(("SettingName: " + $helper.SettingName))
$sw.WriteLine(("EventName: " + $helper.EventName))
$sw.WriteLine(("DN:  " + $helper.DN.ToString()
$sw.WriteLine(("ClassName: " + $helper.ClassName))
$sw.WriteLine(("Perpetrator: " + $helper.Perpetrator))
$sw.WriteLine(("OriginatingServer: " + $helper.OriginatingServer))
$sw.WriteLine(("OriginatingClient: " + $helper.OriginatingClient))
$sw.WriteLine(("Success: " + $helper.Success.ToString()
$sw.WriteLine(("Status: " + $helper.Status))
$sw.WriteLine(("BlockedEvent: " + $helper.BlockedEvent.ToString()
$sw.WriteLine(("EventsCount: " + $helper.EventsCount.ToString()
$sw.WriteLine(("OriginatingClientProtocol: " + $helper.OriginatingClientProtocol))
$sw.WriteLine(("FromHost: " + $helper.FromHost))
$sw.WriteLine(("FromHostIp: " + $helper.FromHostIp))
$sw.WriteLine(("ToHost: " + $helper.ToHost))
$sw.WriteLine(("ToHostIp: " + $helper.ToHostIp))
$sw.WriteLine(("LoginType: " + $helper.LoginType.ToString()
$sw.WriteLine(("AffectedObjectSid: " + $helper.AffectedObjectSid))
$sw.WriteLine(("OriginatingServerIp: " + $helper.OriginatingServerIp))
$sw.WriteLine(("PerpetratorName: " + $helper.PerpetratorName))
$sw.WriteLine(("PerpetratorSid: " + $helper.PerpetratorSid))
$sw.WriteLine(("EventNameTranslated: " + $helper.EventNameTranslated))
$sw.Flush() 
$sw.WriteLine("")
$sw.WriteLine("New Attributes:")
$sw.WriteLine("--------------")
Write-Attributes -sw $sw -attributes $helper.NewAttributes 
$sw.WriteLine("")
$sw.WriteLine("Old Attributes:")
$sw.WriteLine("--------------")
Write-Attributes -sw $sw -attributes $helper.OldAttributes 
$sw.WriteLine("")
$sw.WriteLine("Operations:")
$sw.WriteLine("--------------")
Write-Attributes -sw $sw -attributes $helper.Operations
$sw.WriteLine("===========================================")
$sw.WriteLine("") 
$sw.Flush()
$sw.Close()
}
Catch 
{
echo $_.Exception.GetType().FullName, $_.Exception.Message
if($sw)
{
$sw.WriteLine("Exception")
$sw.WriteLine($_.Exception.GetType().FullName, $_.Exception.Message) 
$sw.Flush()
$sw.Close()
}
}  
```
