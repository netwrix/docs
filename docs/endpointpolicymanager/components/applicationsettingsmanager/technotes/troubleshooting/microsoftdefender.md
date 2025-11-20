---
title: "Why does Microsoft 365 Defender report suspicious encoded content in Endpoint Policy Manager Application Settings Manager values?"
description: "Why does Microsoft 365 Defender report suspicious encoded content in Endpoint Policy Manager Application Settings Manager values?"
sidebar_position: 200
---

# Why does Microsoft 365 Defender report suspicious encoded content in Endpoint Policy Manager Application Settings Manager values?

The following Netwrix Endpoint Policy Manager (formerly PolicyPak) registry value' data may be
flagged as suspicious encoded content.

Location:

```
HKEY_CURRENT_USER\S-1-5-21-...\Software\Policies\PolicyPak\{26E3A6CB-3C62-47B7-960D-7662766E4C6A}\Name-of-the-AppSet\
```

Value:

```
(XmlReport)
```

We have reports that it is reported under Microsoft Defender's category MITRE ATT&CK Techniques, and
suspicious activity classified as T1001:Data Obfuscation.

The data in this reg value is in base64 encoding format and it's responsible to store information
for XML reporting purposes. Its classification as a high severity issue can be ignored.

More information about T1001:Data Obfuscation is at this link:

[https://attack.mitre.org/techniques/T1001/](https://attack.mitre.org/techniques/T1001/)


