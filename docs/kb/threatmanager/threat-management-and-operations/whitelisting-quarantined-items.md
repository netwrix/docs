---
description: 'Explains how to handle a file quarantined by CrowdStrike that originates from Netwrix Threat Prevention components, including the detection details and a PowerShell hash comparison used for submission to CrowdStrike for whitelisting.'
keywords:
- CrowdStrike
- quarantine
- whitelist
- hash comparison
- PowerShell
- Netwrix Threat Prevention
- StealthDEFEND
- STEALTHbits
products:
- threat-manager
title: 'Whitelisting Quarantined Items'
knowledge_article_id: kA04u000000wnnDCAQ
---

# Whitelisting Quarantined Items

## Question

A file was quarantined and flagged as a high severity by CrowdStrike (file location: `E:\Program Files\STEALTHbits\StealthDEFEND\ActionService\PowerShell`). How can I fix it?

## Answer

CrowdStrike quarantined and flagged the Description as a high severity:

```text
ACTIONS TAKEN
Operation blocked
File quarantined
SEVERITY
High
OBJECTIVE
Follow Through
TACTIC & TECHNIQUE
Execution via Command and Scripting Interpreter
TECHNIQUE ID
T1059
IOA NAME
ScriptReverseShell
IOA DESCRIPTION
A script launched that appears to be related to a reverse shell established with a remote system. Review the script and investigate the process tree.
```

Based on the following details, this will be submitted to CrowdStrike for whitelisting:

```powershell
Clear-Host
$string1 = '97025086755692615c76db942a6cc51ed99b7715faad3090307b23af5c3d26ef' #Hash noted in Crowdstrike
$string2 = '97025086755692615c76db942a6cc51ed99b7715faad3090307b23af5c3d26ef'
<# $string2 Hash from my 2.7.1865 lab via Get-FileHash "C:\Program Files\STEALTHbits\StealthDEFEND\ActionService\PowerShell\StealthDEFEND.psm1"
Algorithm       Hash                                                                   Path
---------       ----                                                                   ----
SHA256          97025086755692615C76DB942A6CC51ED99B7715FAAD3090307B23AF5C3D26EF       C:\Program Files\STEALTHbits\StealthDEFEND\ActionService\PowerShell\StealthDEFEND.psm1
#>
# Compare the two strings
if ($string1 -eq $string2) {
Write-Host "The two strings are equal."
} else {
Write-Host "The two strings are not equal."
}
```