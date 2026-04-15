---
title: "Configure Exchange Online State-in-Time Modern Authentication Manually"
description: "Configure Exchange Online State-in-Time Modern Authentication Manually"
sidebar_position: 10
---

# Configure Exchange Online State-in-Time Modern Authentication Manually

This topic contains general requirements for Exchange Online State-in-Time and Auto Audit for
mailboxes Modern Authentication, configuration steps, including the ExchangeOnlineManagement
PowerShell module installation.

Review the following:

- Requirements for Exchange Online Modern Authentication
- Install the ExchangeOnlineManagement PowerShell Module

## Requirements for Exchange Online Modern Authentication

**General Requirements**

- Windows Management Framework for your OS:
  [Windows Management Framework 5.1](https://www.microsoft.com/en-us/download/details.aspx?id=54616)
- .NET Framework 4.7.1 and above:
  [Download .NET Framework 4.7.1](https://dotnet.microsoft.com/download/dotnet-framework/net471)


## Install the ExchangeOnlineManagement PowerShell Module

This section will be helpful for any case below:

- You encountered errors related to the ExchangeOnlineManagement PowerShell module
- You want to install the module manually

Follow the steps to install the module.

**Step 1 –** Install the Windows Management Framework for your OS:
[Windows Management Framework 5.1](https://www.microsoft.com/en-us/download/details.aspx?id=54616)

**Step 2 –** Install **Nuget Package Provider** version 3.1 and above. Open **Windows PowerShell**
and execute the following command:

```
Install-PackageProvider Nuget -MinimumVersion 2.8.5.201 -Scope AllUsers
```

**Step 3 –** Install the ExchangeOnlineManagement Powershell module. Open **Windows PowerShell** and
execute the following command:

```
Install-Module ExchangeOnlineManagement
```

Review the following Microsoft technical article for more information:
[About the Exchange Online PowerShell V2 module](https://docs.microsoft.com/en-us/powershell/exchange/exchange-online-powershell-v2?view=exchange-ps)


**NOTE:** If you encountered errors executing the `Install-PackageProvider` cmdlet try to force
PowerShell into TLS 1.2 mode and try again:

```
[System.Net.ServicePointManager]:SecurityProtocol = [System.Net.SecurityProtocolType] 'Ssl3 , Tls12'
```

**NOTE:** If you getting _"No match was found for the specified search criteria..."_ message on the
`Install-Module ExchangeOnlineManagement` execution, try to register default repository:

```
Register-PSRepository -Default
```

