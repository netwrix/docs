---
title: ".NET Script Actions"
description: ".NET Script Actions"
sidebar_position: 20
---

# .NET Script Actions

A Visual Basic or C# script can be written and assigned to a policy by users or a Netwrix Engineer
via engaging Netwrix Professional Services. The script will be invoked by the Enterprise Manager for
an enabled policy.

Follow the steps to add a .NET Script action to a policy/template.

![Actions tab - Actions Configurations area](/images/threatprevention/7.4/admin/policies/actions/actionsconfigurationsarea.webp)

**Step 1 –** On a policy or template **Actions** tab, click **Add** (+) to open the Add Action
window.

**Step 2 –** In the left pane, select the radio button for **.NET Script**.

![Policy > Actions tab > Add Actions window for .Net Script](/images/threatprevention/7.4/admin/policies/actions/addactionwindowfornetscript.webp)

**Step 3 –** Configure the .NET Script action:

- Name – Provide a unique, descriptive name for this .NET Script action
- Check the box for **Enabled** to allow the policy to launch the script
- Description – Provide a clear and detailed description for this .NET Script action. This is
  optional but recommended.
- Select the radio button for the script language being used:
  - Visual Basic
  - C#
- Click **Edit…** to open the Threat Prevention Script Editor window and provide the script

![Script Editor for .Net Scripts](/images/threatprevention/7.4/admin/policies/actions/scripteditorfornet.webp)

**Step 4 –** Create or copy/paste a custom script in the Threat Prevention Script Editor. See the
[Threat Prevention Script Editor Tools](#threat-prevention-script-editor-tools) topic for additional
information, i.e. Run for testing and Encrypt functionality. See the
[Default Visual Basic Script](#default-visual-basic-script) and
[Default C# Script](#default-c-script) topics for default custom scripts. Save and close.

**Step 5 –** On the Add Action window, the new script is displayed in the **Script Preview**
section. Check the **Enable compiler error logging** checkbox to enable Threat Prevention to log
information about the compiling of scripts.

**Step 6 –** Click Save to close the Add Action window and apply changes.

![Actions tab - .Net Script Action Created](/images/threatprevention/7.4/admin/policies/actions/netscriptaction.webp)

The Actions tab now displays the configured settings for the specified .NET Script action. The
action configuration can be directly edited through this display as well.

## Threat Prevention Script Editor Tools

On the Add Action window, the **Edit...** button opens the Threat Prevention Script Editor. The top
bar includes the Tools dropdown menu that provides several useful tools.

![Tools Menu in the Script Editor](/images/threatprevention/7.4/admin/policies/actions/toolsmenu.webp)

The Tools menu contains the following options:

- Assembly Manager – Applies to Visual Basic and C# scripts only. It displays a list of assemblies
  that support exposing Threat Prevention data in the VB or C# runtime environments.
- Compile (Ctrl+F6) – Applies to Visual Basic and C# scripts only. It compiles the script to find
  and fix syntax errors.
- Run (F5) – Executes the script on the machine where the Administration Console is installed. It
  launches the script from the Administration Console, allowing the user to test the script. When
  running a .NET Script action, there are no prerequisites.
- Reset to Default Script – Replaces the existing script with the default script that is shipped
  with Threat Prevention.
- Encrypt – Encrypts selected portions of the script to an encrypted string with a decrypt command
  for run time. See note below explaining why only a plain text string, information in thae script
  between quote marks (“), should be encrypted.

:::tip
Remember, when testing a script in the Script Editor, the **Run** option executes the script in
the context of the user logged into the Administration Console. In production, when this script is
run as part of a policy, it will run in the context of the account configured for the Enterprise
Manager. If the script depends on specific user/account rights, then that should be taken into
account when using the **Run** option to test the script.
:::


:::warning
The Tools > Encrypt option is used to obfuscate plain text strings, e.g. credentials,
within the script. Encrypting functions or other commands result in the script not working. Only a
literal string should be encrypted, between the quote marks (“). The quote marks themselves should
not be included in the encryption.
:::


## Default Visual Basic Script

The following Visual Basic script is configured as a default action. It will either create the
c:\nveventdata.txt file or append the event data to it.

```
Imports Microsoft.VisualBasic
Imports System
Imports System.Collections
Imports System.IO
Imports System.Text
Imports SI.Common.Messages
Imports SI.SIMonitor.ConsoleMessages.Helpers 
Namespace ScriptNamespace 
Public Class ScriptClass 
Private helper As EventConsumerHelper = Nothing 
'''Required class constructor
Public Sub New(ByVal ecHelper As EventConsumerHelper)
MyBase.New
Me.helper = ecHelper
End Sub 
'Public Read-Only Properties of EventConsumerHelper are as follows:
'  public DateTime TimeLogged
'  public DateTime TimeLoggedUtc
'  public string EventSourceType
'  public string EventSourceName
'  public string SettingName
'  public string EventName
'  public string DN
'  public string ClassName
'  public string Perpetrator
'  public string OriginatingServer
'  public string OriginatingClient
'  public string Success
'  public string Status
'  public Hashtable NewAttributes
'  public Hashtable OldAttributes
'  public Hashtable Operations
'  public string BlockedEvent
'  public string EventsCount
'  public string OriginatingClientProtocol
'  public string FromHost
'  public string FromHostIp
'  public string ToHost
'  public string ToHostIp
'  public string LoginType
'  public string AffectedObjectSid
'  public string OriginatingServerIp
'  public string PerpetratorName
'  public string PerpetratorSid
'  public string EventNameTranslated
'Enter code in method ScriptMain below:
' new attributes
' old attributes
' operations
Public Overridable Sub ScriptMain() 
Dim sw As System.IO.StreamWriter = Nothing
Try 
sw = New System.IO.StreamWriter("c:\si_eventdata.txt", true)
sw.WriteLine("===========================================")
sw.WriteLine(("TimeLogged:  " + helper.TimeLogged.ToString))
sw.WriteLine(("TimeLoggedUtc:  " + helper.TimeLoggedUtc.ToString))
sw.WriteLine(("EventSourceType: " + helper.EventSourceType))
sw.WriteLine(("EventSourceName: " + helper.EventSourceName))
sw.WriteLine(("SettingName: " + helper.SettingName))
sw.WriteLine(("EventName: " + helper.EventName))
sw.WriteLine(("DN:  " + helper.DN.ToString))
sw.WriteLine(("ClassName: " + helper.ClassName))
sw.WriteLine(("Perpetrator: " + helper.Perpetrator))
sw.WriteLine(("OriginatingServer: " + helper.OriginatingServer))
sw.WriteLine(("OriginatingClient: " + helper.OriginatingClient))
sw.WriteLine(("Success: " + helper.Success.ToString))
sw.WriteLine(("Status: " + helper.Status))
sw.WriteLine(("BlockedEvent: " + helper.BlockedEvent.ToString))
sw.WriteLine(("EventsCount: " + helper.EventsCount.ToString))
sw.WriteLine(("OriginatingClientProtocol: " + helper.OriginatingClientProtocol))
sw.WriteLine(("FromHost: " + helper.FromHost))
sw.WriteLine(("FromHostIp: " + helper.FromHostIp))
sw.WriteLine(("ToHost: " + helper.ToHost))
sw.WriteLine(("ToHostIp: " + helper.ToHostIp))
sw.WriteLine(("LoginType: " + helper.LoginType.ToString))
sw.WriteLine(("AffectedObjectSid: " + helper.AffectedObjectSid))
sw.WriteLine(("OriginatingServerIp: " + helper.OriginatingServerIp))
sw.WriteLine(("PerpetratorName: " + helper.PerpetratorName))
sw.WriteLine(("PerpetratorSid: " + helper.PerpetratorSid))
sw.WriteLine(("EventNameTranslated: " + helper.EventNameTranslated)) 
sw.WriteLine("")
sw.WriteLine("New Attributes:")
sw.WriteLine("--------------")
sw.WriteLine(Me.GetAttributes(helper.NewAttributes)) 
sw.WriteLine("")
sw.WriteLine("Old Attributes:")
sw.WriteLine("--------------")
sw.WriteLine(Me.GetAttributes(helper.OldAttributes)) 
sw.WriteLine("")
sw.WriteLine("Operations:")
sw.WriteLine("--------------")
sw.WriteLine(Me.GetAttributes(helper.Operations))
sw.WriteLine("===========================================")
sw.WriteLine("")
sw.Flush
Catch e As System.Exception
Finally
sw.Close
End Try
End Sub 
Private Function GetAttributes(ByVal attributes As System.Collections.Hashtable) As String
Dim sb As System.Text.StringBuilder = New System.Text.StringBuilder()
Dim enumerator As System.Collections.IEnumerator = attributes.GetEnumerator 
Do While enumerator.MoveNext
Dim attrName As String = Nothing
Dim de As System.Collections.DictionaryEntry = CType(enumerator.Current,System.Collections.DictionaryEntry)
If (de.Key <> Nothing) Then
attrName = de.Key.ToString
Else
attrName = ""
End If
sb.Append(attrName)
sb.Append(": ")
If Not (de.Value Is Nothing) Then
If (de.Value.GetType Is GetType(SI.Common.Messages.NvMessageArray)) Then
Dim values As SI.Common.Messages.NvMessageArray = CType(de.Value,SI.Common.Messages.NvMessageArray)
If (values.Count > 0) Then
Dim valueCount As Integer = values.Count
Dim valueEnumerator As System.Collections.IEnumerator = values.GetEnumerator
Do While valueEnumerator.MoveNext
Dim o As Object = valueEnumerator.Current
If (o <> Nothing) Then
sb.Append(o.ToString)
valueCount = (valueCount - 1)
If (valueCount > 0) Then
sb.Append(", ")
Else
sb.Append(""&Global.Microsoft.VisualBasic.ChrW(13)&Global.Microsoft.VisualBasic.ChrW(10))
End If
End If 
Loop
End If
Else
sb.Append(de.Value.ToString)
sb.Append(""&Global.Microsoft.VisualBasic.ChrW(13)&Global.Microsoft.VisualBasic.ChrW(10))
End If
End If 
Loop
Return sb.ToString
End Function
End Class
End Namespace
```

## Default C# Script

The following C# script is configured as a default action. It will either create the
c:\nveventdata.txt file or append the event data to it.

```
namespace ScriptNamespace
{
using System;
using System.Collections;
using System.IO;
using System.Text;
using SI.Common.Messages;
using SI.SIMonitor.ConsoleMessages.Helpers; 
public class ScriptClass
{ 
private EventConsumerHelper helper = null; 
/// Required class constructor
public ScriptClass(EventConsumerHelper ecHelper)
{
this.helper = ecHelper;
} 
// Public Read-Only Properties of EventConsumerHelper are as follows:
//   public DateTime TimeLogged
//   public DateTime TimeLoggedUtc
//   public string EventSourceType
//   public string EventSourceName
//   public string SettingName
//   public string EventName
//   public string DN
//   public string ClassName
//   public string Perpetrator
//   public string OriginatingServer
//   public string OriginatingClient
//   public string Success
//   public string Status
//   public Hashtable NewAttributes
//   public Hashtable OldAttributes
//   public Hashtable Operations
//   public string BlockedEvent
//   public string EventsCount
//   public string OriginatingClientProtocol
//   public string FromHost
//   public string FromHostIp
//   public string ToHost
//   public string ToHostIp
//   public string LoginType
//   public string AffectedObjectSid
//   public string OriginatingServerIp
//   public string PerpetratorName
//   public string PerpetratorSid
//   public string EventNameTranslated
// Enter code in method ScriptMain below:
//  new attributes
//  old attributes
//  operations
public virtual void ScriptMain()
{ 
System.IO.StreamWriter sw = null;
try
{
sw = new System.IO.StreamWriter("c:\\si_eventdata.txt", true);
sw.WriteLine("===========================================");
sw.WriteLine(("TimeLogged:  " + helper.TimeLogged.ToString();
sw.WriteLine(("TimeLoggedUtc:  " + helper.TimeLoggedUtc.ToString();
sw.WriteLine(("EventSourceType: " + helper.EventSourceType));
sw.WriteLine(("EventSourceName: " + helper.EventSourceName));
sw.WriteLine(("SettingName: " + helper.SettingName));
sw.WriteLine(("EventName: " + helper.EventName));
sw.WriteLine(("DN:  " + helper.DN.ToString();
sw.WriteLine(("ClassName: " + helper.ClassName));
sw.WriteLine(("Perpetrator: " + helper.Perpetrator));
sw.WriteLine(("OriginatingServer: " + helper.OriginatingServer));
sw.WriteLine(("OriginatingClient: " + helper.OriginatingClient));
sw.WriteLine(("Success: " + helper.Success.ToString();
sw.WriteLine(("Status: " + helper.Status));
sw.WriteLine(("BlockedEvent: " + helper.BlockedEvent.ToString();
sw.WriteLine(("EventsCount: " + helper.EventsCount.ToString();
sw.WriteLine(("OriginatingClientProtocol: " + helper.OriginatingClientProtocol));
sw.WriteLine(("FromHost: " + helper.FromHost));
sw.WriteLine(("FromHostIp: " + helper.FromHostIp));
sw.WriteLine(("ToHost: " + helper.ToHost));
sw.WriteLine(("ToHostIp: " + helper.ToHostIp));
sw.WriteLine(("LoginType: " + helper.LoginType.ToString();
sw.WriteLine(("AffectedObjectSid: " + helper.AffectedObjectSid));
sw.WriteLine(("OriginatingServerIp: " + helper.OriginatingServerIp));
sw.WriteLine(("PerpetratorName: " + helper.PerpetratorName));
sw.WriteLine(("PerpetratorSid: " + helper.PerpetratorSid));
sw.WriteLine(("EventNameTranslated: " + helper.EventNameTranslated)); 
sw.WriteLine("");
sw.WriteLine("New Attributes:");
sw.WriteLine("--------------");
sw.WriteLine(this.GetAttributes(helper.NewAttributes)); 
sw.WriteLine("");
sw.WriteLine("Old Attributes:");
sw.WriteLine("--------------");
sw.WriteLine(this.GetAttributes(helper.OldAttributes)); 
sw.WriteLine("");
sw.WriteLine("Operations:");
sw.WriteLine("--------------");
sw.WriteLine(this.GetAttributes(helper.Operations));
sw.WriteLine("===========================================");
sw.WriteLine("");
sw.Flush();
}
catch (System.Exception e)
{
}
finally
{
sw.Close();
}
} 
private string GetAttributes(System.Collections.Hashtable attributes)
{
System.Text.StringBuilder sb = new System.Text.StringBuilder();
System.Collections.IEnumerator enumerator = attributes.GetEnumerator();
for (
; enumerator.MoveNext(); 
)
{
string attrName = null;
System.Collections.DictionaryEntry de = ((System.Collections.DictionaryEntry)(enumerator.Current));
if ((de.Key != null))
{
attrName = de.Key.ToString();
}
else
{
attrName = "";
}
sb.Append(attrName);
sb.Append(": ");
if ((de.Value != null))
{
if ((de.Value.GetType() == typeof(SI.Common.Messages.NvMessageArray)
{
SI.Common.Messages.NvMessageArray values = ((SI.Common.Messages.NvMessageArray)(de.Value));
if ((values.Count > 0))
{
int valueCount = values.Count;
System.Collections.IEnumerator valueEnumerator = values.GetEnumerator();
for (
; valueEnumerator.MoveNext(); 
)
{
object o = valueEnumerator.Current;
if ((o != null))
{
sb.Append(o.ToString());
valueCount = (valueCount - 1);
if ((valueCount > 0))
{
sb.Append(", ");
}
else
{
sb.Append("\r\n");
}
}
}
}
}
else
{
sb.Append(de.Value.ToString());
sb.Append("\r\n");
}
}
}
return sb.ToString();
}
}
}
```
