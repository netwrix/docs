---
title: "Usercube-Upgrade-ConfigurationVersion"
description: "Usercube-Upgrade-ConfigurationVersion"
sidebar_position: 370
---

# Usercube-Upgrade-ConfigurationVersion

This tool is used to upgrade your configuration from your current version entered in settings to the latest version.

## Examples

```
**./Usercube-Upgrade-ConfigurationVersion.exe --version "5.1.0" --xml-path "C:/identitymanagerDemo/Conf" --output "C:/identitymanagerDemo/Conf2"**
```

In this example, the configuration files are in the folder "C:/identitymanagerDemo/Conf" and at version "5.1.0". This tools will upgrade all the xml files to the latest version and save them in the folder "C:/identitymanagerDemo/Conf2".

## Arguments

 | Argument Name | Details | 
 | --- | --- | 
 | --version required | **Type** String **Description** Current version. | 
 | --xml-path required | **Type** String **Description** Current xml configuration folder to migrate. | 
 | --- | --- | 
 | --- | --- | 
 | --output required | **Type** String **Description** Path of the folder where the result will be saved. | 
 | --- | --- | 
 | --- | --- | 
 | --log-level optional | **Type** LogLevel **Description** Level of log information among: `Verbose`; `Debug`; `Information`; `Warning`; `Error`; `Fatal`. | 
