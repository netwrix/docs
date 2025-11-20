---
title: "If I have both Azure joined and Hybrid Azure AD joined machines, how do I count the exact number of licenses I need?"
description: "If I have both Azure joined and Hybrid Azure AD joined machines, how do I count the exact number of licenses I need?"
sidebar_position: 20
---

# If I have both Azure joined and Hybrid Azure AD joined machines, how do I count the exact number of licenses I need?

First of all, we here at Netwrix Endpoint Policy Manager (formerly PolicyPak) do not want to charge
you twice. If a machine is joined to On-Prem AD and also joined to Azure AD (called Hybrid Azure AD
joined), then you should only have to pay for the machine one time. Here is a Microsoft's diagram
below (borrowed from
[https://docs.microsoft.com/en-us/azure/active-directory/devices/concept-azure-ad-join-hybrid](https://docs.microsoft.com/en-us/azure/active-directory/devices/concept-azure-ad-join-hybrid)
).

![200_1_image-20200723102952-1](/images/endpointpolicymanager/license/mdm/200_1_image-20200723102952-1.webp)

In this case, if you had exactly one machine like this ,you would need to:

- Pay for one license (remember, you only need to pay once.) But…
- Engage both PolicyPak licensing mechanisms for this computer: Endpoint Policy Manager Group Policy
  and Endpoint Policy Manager MDM.

We recommend you do not deliver the same Endpoint Policy Manager settings from both Group Policy or
MDM. But you might want to enable the ability to get those licenses from both sources, then
transition away from Group Policy to MDM over time.

Knowing you will have some machines:

- Joined to on-prem AD & GPO (but not in Azure)
- Joined to Azure AD (but not on-prem AD) and
- Hybrid Azure AD Joined (dual enrolled to both)

How do you dial in exactly how many computers to license? We will go over this same math again at
the end, but here is the gist. Let us pretend you had the following numbers (which we will explain
more below):

- Part 1 (On-Prem AD & GPO machines): 1000
- Part 2 (Azure AD joined only): 250
- Part 3 (Hybrid AD joined): 150

To correctly pay for each computer one time you would pay for:

- Azure AD joined only: 250
- Hybrid AD joined: 150
- AD & GPO machines : 1000
- SUBTRACT the number of Hybrid AD joined: MINUS 150

Final number for purchase, where each machine is licensed once:

- 250 +
- 150 +
- 1000 MINUS
- 150

Grand total: 1,250 computers

There is no easy button for this, but it is a straightforward procedure.

## Step 1: Counting your on-prem AD & GPO machines

Typically, you do this with the Endpoint Policy Manager on-prem licensing tool (preferred), or if
you need to, you can use PowerShell.
See[My organization doesn't permit me to run the LT (Endpoint Policy Manager Licensing Tool) or provide the XML information it produces. What are my other options?](/docs/endpointpolicymanager/licensing/knowledgebase/activedirectorygposccm/options.md)

![200_3_image-20200723102952-2](/images/endpointpolicymanager/license/mdm/200_3_image-20200723102952-2.webp)

### Preparing for Steps 2 and 3: Before we count the Azure only, machines and before we count the Hybrid Azure AD joined machines

In Azure you can go to Devices > All Devices, then look at the Join Type. You should see four
possible fields:

- Azure AD registered —This is not required for aEndpoint Policy Manager license, as this is not
  Azure or MDM enrolled.
- Azure AD joined — This means the machine is joined directly to Azure AD and is not Hybrid (that
  is, it is not also joined to on-prem AD).
- Hybrid Azure AD Joined — This means the machine is joined both to Azure AD and to on-prem AD.
- Blank: Unknown.

![200_5_image-20200723102952-3](/images/endpointpolicymanager/license/mdm/200_5_image-20200723102952-3.webp)

The problem is that you cannot count each type with this interface unless you have just a few
machines. Instead you need to use Powershell and have it do the counting for you.

## Next: Using PowerShell to connect to Azure AD

Start out by installing the Azure AD module. See the Microsoft article on
[How to install Azure PowerShell](https://learn.microsoft.com/en-us/powershell/azure/install-azure-powershell?view=azps-13.1.0&viewFallbackFrom=azps-4.4.0)
for additional information.

Here is a copy of the command:

```
if ($PSVersionTable.PSEdition -eq 'Desktop' -and (Get-Module
                -Name AzureRM -ListAvailable)) {   Write-Warning -Message
                ('Az module not installed. Having both the AzureRM and ' +
                'Az modules installed at the same time is not supported.')}
        else {   Install-Module -Name Az -AllowClobber -Scope CurrentUser}
```

Here is the result.

![200_7_image-20200723102952-4](/images/endpointpolicymanager/license/mdm/200_7_image-20200723102952-4.webp)

Start out with the Connect-AZAccount cmdlet (not shown). You will get prompted for credentials the
first time.

![200_9_image-20200724004807-5](/images/endpointpolicymanager/license/mdm/200_9_image-20200724004807-5.webp)

The command should finish and return you with a result like this:

![200_11_image-20200724004807-6](/images/endpointpolicymanager/license/mdm/200_11_image-20200724004807-6.webp)

Then use the connect-azuread command and provide credentials again, for a second time.

![200_13_image-20200723102952-5](/images/endpointpolicymanager/license/mdm/200_13_image-20200723102952-5.webp)

Results of connection are then seen here:

![200_15_image-20200723102952-6](/images/endpointpolicymanager/license/mdm/200_15_image-20200723102952-6.webp)

You can then list all Windows 10 devices with the following command:

```
Get-AzureADDevice -all $true | select displayname, DeviceOSType, DeviceTrustType
```

![200_17_image-20200723102952-7](/images/endpointpolicymanager/license/mdm/200_17_image-20200723102952-7.webp)

## Step 2: Count your Joined to Azure AD only (but not on-prem domain joined machines)

To count Azure AD joined machines, run the first command:

```
Get-AzureADDevice -All $true | Where-Object {$_.DeviceTrustType -eq "AzureAd"} | measure 
```

## Step 3: Count Hybrid Azure AD joined machines (those joined to on-prem AD and also Azure AD)

To count your Hybrid Azure AD joined machines, run this command.

```
Get-AzureADDevice -All $true | Where-Object {$_.DeviceTrustType -eq "ServerAd"} | measure
```

# Results of your counting:

Results examples are seen here:

![200_19_image-20200723102952-8](/images/endpointpolicymanager/license/mdm/200_19_image-20200723102952-8.webp)

## A final example with Math

Let's pretend you got the following numbers:

- Part 1 (On-Prem AD & GPO machines): 1000
- Part 2 (Azure AD joined only): 250
- Part 3 (Hybrid AD joined): 150

To correctly pay for each computer one time you would pay for:

- Azure AD joined only: 250
- Hybrid AD joined: 150
- AD & GPO machines : 1000
- SUBTRACT the number of Hybrid AD joined: MINUS 150

Final number for purchase, where each machine is licensed once:

- 250 +
- 150 +
- 1000 MINUS
- 150

Grand total: 1,250 computers

