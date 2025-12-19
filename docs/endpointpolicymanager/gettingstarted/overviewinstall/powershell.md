---
title: "Endpoint Policy Manager and PowerShell"
description: "Endpoint Policy Manager and PowerShell"
sidebar_position: 50
---

# Endpoint Policy Manager and PowerShell

Netwrix Endpoint Policy Manager (formerly PolicyPak) has a PowerShell module that can perform some
key tasks. As of the writing of this manual, the PowerShell cmdlets can perform licensing steps and
discover Endpoint Policy Manager items within a Group Policy Object (GPO). The Endpoint Policy
Manager PowerShell module is located in the Endpoint Policy Manager Extras folder you downloaded.

![policypak_and_powershell_1200x787](/images/endpointpolicymanager/install/endpointpolicymanager_and_powershell_1200x787.webp)

Run the Endpoint Policy Manager PowerShell Tools installer. The Endpoint Policy Manager PowerShell
modules will be installed to `>c:\Program Files\PolicyPak1\Tools\Modules\PolicyPak`.

At a Powershell prompt run the command `>Import-Module endpointpolicymanager.psd1.` If you add the
`>-verbose `command you will see all of the available cmdlets.

![policypak_and_powershell_1_1200x974](/images/endpointpolicymanager/install/endpointpolicymanager_and_powershell_1_1200x974.webp)

## Endpoint Policy Manager PowerShell and Licensing Endpoint Policy Manager

To import a module, you need to call `>Import-Module Endpoint Policy Manager `in PowerShell. At the
time of the publication of this manual, all Endpoint Policy Manager cmdlets are for a licensing
component that requires the following commands:

- Importing cmdlet '`Get-PPCses`'
- Importing cmdlet '`Get-PPGPOs`'
- Importing cmdlet '`Get-RegisteredCses`'
- Importing cmdlet '`Register-PPLicenses`'
- Importing cmdlet '`Test-PPLicense`'
- Importing cmdlet '`Disable-InactiveComputers`'
- Importing cmdlet '`Get-InactiveComputers`'
- Importing cmdlet '`Get-PPLicenses`'
- Importing cmdlet '`Register-PPLicense`'
- Importing cmdlet '`New-PPLicenseRequestFile`'

To generate a new Endpoint Policy Manager license request, there are two methods. Method 1 requires
using the existing Microsoft cmdlet Get-ADOrganizationalUnit as shown below.

`># New-PPLicenseRequest`

`>Import-Module ActiveDirectory`

`>Import-Module PolicyPak`

`>$scope = Get-ADOrganizationalUnit -Filter {(name -eq "OU2") -or (name -like "Domain*") -or (name -like "Real*")} -Property * | FT DistinguishedName -A -HideTableHeaders | Out-String`

`>$som = Get-ADOrganizationalUnit -Filter {(name -like "Real*") -or (name -like "Domain*")} -Property * | FT DistinguishedName -A -HideTableHeaders | Out-String`

`>New-PPLicenseRequestfile "C:\Temp\request1.xml" -Scope $scope -Som $som -Verbose `

The request output is shownbelow.

![policypak_and_powershell_2](/images/endpointpolicymanager/install/endpointpolicymanager_and_powershell_2.webp)

:::note
To understand scope versus SOM, see
[Why does License Tool ask Who am I and Where do I want to use Endpoint Policy Manager?](/docs/endpointpolicymanager/licensing/knowledgebase/faqactivedirectory/scope.md).
:::


Method 2 requires indicating specific organizational units (OUs), as shown below. In this example,
the scope is the whole domain, but the SOM is the Sales OU within the Fabrikam.com domain. Below is
an example script which requests a new license file from a specific SOM and scope.

`># New-PPLicenseRequest`

`>Import-Module ActiveDirectory`

`>Import-Module PolicyPak`

`>$scope = "DC=Fabrikam, DC=com" `

`>$som = "OU=Sales, DC=Fabrikam, DC=com"`

`>New-PPLicenseRequestFile "E:\Downloads\adcomputer.text.new.xml" -scope $scope -som $som -Verbose`

`>#---`

![policypak_and_powershell_3_1200x833](/images/endpointpolicymanager/install/endpointpolicymanager_and_powershell_3_1200x833.webp)

The next cmdlet enables you to determine how many computers are not active.

`># Get-InactiveComputers`

`>Import-Module PolicyPak`

`>Get-InactiveComputers -LastLoginTime 90 -inu -Verbose`

`>#---`

The result from this cmdlet is shown below.

![policypak_and_powershell_4_950x333](/images/endpointpolicymanager/install/endpointpolicymanager_and_powershell_4_950x333.webp)

```
>The next cmdlet disables inactive computers.># Disable-InactiveComputers
>Import-Module PolicyPak
>Disable-InactiveComputers -LastLoginTime 900 -Verbose
>#---
```

You can then see the machines are disabled:

![policypak_and_powershell_5_1200x561](/images/endpointpolicymanager/install/endpointpolicymanager_and_powershell_5_1200x561.webp)

When the next cmdlet is run, you can see if the license file you got from Endpoint Policy Manager
was valid. Note that you might have to run the cmdlet on each Endpoint Policy Manager license file
you get.

```
># Test-PPlicense>Import-Module PolicyPak
>Test-PPlicense 
>"C:\Users\server\Desktop_licenses\license_1.xml" -verbose
>Test-PPlicense 
>"C:\Users\server\Desktop_licenses\license1.xml" -verbose
>Test-PPlicense 
>"C:\Users\server\Desktop_licenses\license2.xml" -verbose
>Test-PPlicense 
>"C:\Users\server\Desktop_licenses\FIRSTLicense-Request-Key.xml" -verbose
>#---
```

You can then see that the license is valid:

![policypak_and_powershell_6_950x148](/images/endpointpolicymanager/install/endpointpolicymanager_and_powershell_6_950x148.webp)

When the next cmdlet is run, you can create a new GPO and link it to the scope.

```
># Register-PPlicense>Import-Module PolicyPak
>Register-PPlicense 
>"C:\Users\server\Desktop_licenses\license1.xml" -e $True -verbose 
```

You can then see the successful installation:

![policypak_and_powershell_7_1200x328](/images/endpointpolicymanager/install/endpointpolicymanager_and_powershell_7_1200x328.webp)

The next cmdlet will specify a GPO by GUID.

```
>#Register-PPlicense >"C:\Users\server\Desktop_licenses\license1.xml" -e $True -mgpo "96A61654-8363-444B-97AC-47D466FE12EE" -verbose 
>#---
># Get-PPlicenses
>Import-Module PolicyPak
>Get-PPlicenses -Verbose
>#---
```

The result is shown below. You can see the GPO name, scope, expiration date of the license, Endpoint
Policy Manager license version type, and validation status of the license.

![policypak_and_powershell_8_1200x803](/images/endpointpolicymanager/install/endpointpolicymanager_and_powershell_8_1200x803.webp)

## Endpoint Policy Manager PowerShell and Discovery

Endpoint Policy Manager can help you discover which GPOs contain Endpoint Policy Manager directives.
After you have performed the import of the Endpoint Policy Manager module with Import-Module
PolicyPak, you can use cmdlets like the following examples:

- `>Get-PPCses`: shows Endpoint Policy Manager client-side extension (CSE) names and guids
- `>Get-PPGPOs -cse "Security"`: same as above, but searches for CSEs with "security" in the name
  (case insensitive)
- `>Get-RegisteredCses`: shows CSEs registered in the system
- `>Get-PPGPOs | Format-Table -wrap`: shows all GPOs with any Endpoint Policy Manager product as a
  table (You can see this in Figure 26 below.)
- `>Get-PPGPOs | Select -ExpandProperty "GPO"`:  shows all GPOs with Endpoint Policy Manager
  products as names only
- `>Get-PPGPOs -cse "Security" | Select -ExpandProperty "GPO"`: shows all GPOs with any Endpoint
  Policy Manager products with "security" in the title
- `>Get-PPGPOs -cse "E0088A46-AB54-4FBD-A733-303C58244C5E"`: shows all GPOs based on CSE GUID

![Text

Description automatically
generated](/images/endpointpolicymanager/install/endpointpolicymanager_and_powershell_9_850x594.webp)

