---
title: "Usercube-Check-ExpressionsConsistency"
description: "Usercube-Check-ExpressionsConsistency"
sidebar_position: 390
---

# Usercube-Check-ExpressionsConsistency

This tool is used to check the C# expressions consistency.

## Examples

The following example checks the C# expressions compatibility with Identity Manager.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line.

```shell
.\Usercube-Check-ExpressionsConsistency.exe --database-connection-string "data source=.;Database=UsercubeV5demo;Integrated Security=SSPI;Min Pool Size=10;Encrypt=false" --output-path "C:\UsercubeDemo\Dump"
```

In case errors are found they will be displayed as:

```xml
In Custom/User/Directory User Connector.xml(12), Method "System.Linq.Enumerable.MaxBy" cannot be called on entities.
```

## Arguments

 | Argument Name | Type | Description | 
 | --- | --- | --- | 
 | --database-connection-string required | String | SQL database connection string. | 
 | --output-path | String | Full path of the folder in which the file containing expression compilation errors will be saved. | 
