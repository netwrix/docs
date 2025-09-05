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
- Configure Exchange Online Modern Authentication Manually

## Requirements for Exchange Online Modern Authentication

General Requirements

- Windows Management Framework for your OS:
  [Windows Management Framework 5.1](https://www.microsoft.com/en-us/download/details.aspx?id=54616)
- .NET Framework 4.7.1 and above:
  [Download .NET Framework 4.7.1](https://dotnet.microsoft.com/download/dotnet-framework/net471)

**NOTE:** If you have the FIPS option enabled you should proceed to Manual Exchange Online
pre-configuration. See the Configure Exchange Online Modern Authentication Manuallysection for
additional information.

Follow the steps to enable Exchange Online Auto Audit for mailboxes with Modern Authentication
(automatic mode).

**Step 1 –** Install the ExchangeOnlineManagement Powershell module and dependencies (Nget package
provider). Refer to the following Microsoft article for more information:
[About the Exchange Online PowerShell V2 module](https://docs.microsoft.com/en-us/powershell/exchange/exchange-online-powershell-v2?view=exchange-ps).

**Step 2 –** Generate the self-signed certificate.

**Step 3 –** Install the certificate to the _CurrentUser/My certificate_ folder for the Local System
account.

**Step 4 –** Install the certificate to the Microsoft Entra ID cloud application

## Install the ExchangeOnlineManagement PowerShell Module

This section will be helpful for any case below:

- You encountered errors related to the ExchangeOnlineManagement PowerShell module
- You have the FIPS policy enabled
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

See next: Configure Exchange Online Modern Authentication Manually

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

## Configure Exchange Online Modern Authentication Manually

If you encountered errors from Netwrix Auditor during the automatic configuration of the
certificate, complete the following steps.

**Step 1 –** In Netwrix Auditor, find your Exchange Online monitoring plan.

**Step 2 –** Click Update to force data collection.

If the error still persists, or you want to pre-configure the work with certificate, follow the
instructions below:

Follow the steps to install a certificate.

**Step 1 –** Get your certificate or generate a self-signed certificate. The name must be
_`Netwrix_Auditor_MFA_<your*tenant_name>`*

**Step 2 –** Save the certificate to the _CurrentUser/My certificate_ folder for the Local System
account.

**Step 3 –** Upload the certificate to the application selected in your monitoring plan or configure
it automatically with Netwrix Auditor.

Follow the steps to generate a self-signed certificate.

**Step 1 –** Open Windows PowerShell as an Administrator and run the following commands:

```
# Create certificate
$mycert = New-SelfSignedCertificate -DnsName "example.com" -CertStoreLocation "cert:\LocalMachine\My" -NotAfter (Get-Date).AddYears(1) -KeySpec KeyExchange
# Export certificate to .pfx file
$mycert | Export-PfxCertificate -FilePath mycert.pfx -Password $(ConvertTo-SecureString -String "your_password" -Force -AsPlainText)
# Export certificate to .cer file
$mycert | Export-Certificate -FilePath mycert.cer
```

**Step 2 –** Replace the `DnsName `parameter value with your certificate name
(`Netwrix_Auditor_MFA_<your_tenant_name>`).

Follow the steps to install the certificate to the CurrentUser/My certificate folder.

**Step 1 –** Download [PsExec](https://docs.microsoft.com/en-us/sysinternals/downloads/psexec) to
run Windows PowerShell session under the LocalSystem account;

**Step 2 –** Run Windows PowerShell as an Administrator, navigate to to PsExec.exe installation
directory (use the 'CD' command), if necessary, and run the following command:

```
.\PsExec.exe -i -s powershell.exe
```

**Step 3 –** Verify that you are logged in as a Local System account. Run the following command:

```
whoami
```

**Step 4 –** Import the certificate. Run the following command:

```
Import-PfxCertificate -FilePath <path to your certificate> -CertStoreLocation 
'Cert:\CurrentUser\My' -Password (ConvertTo-SecureString -String "your_password" -AsPlainText -Force)
```

Where `path_to_certificate` is the full path to the certificate file.

You can also install the certificate with the '.cer' extension to the Microsoft Entra ID Portal or
Netwrix Auditor will set it automatically during establishing a PowerShell connection with Exchange
Online.
