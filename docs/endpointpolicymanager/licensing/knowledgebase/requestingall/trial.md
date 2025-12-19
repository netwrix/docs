---
title: "What is the fastest way to get started in an Endpoint Policy Manager trial, without running the License Request Tool?"
description: "What is the fastest way to get started in an Endpoint Policy Manager trial, without running the License Request Tool?"
sidebar_position: 10
---

# What is the fastest way to get started in an Endpoint Policy Manager trial, without running the License Request Tool?

We know you want to get started with a Netwrix Endpoint Policy Manager (formerly PolicyPak) trial
fast.

Good news, we only need a few pieces of information to get started. Typically we can get started
with only:

- Your domain name (for GPO/AD Method)
- Your Intune company name (for Intune method)
- Or, nothing at all, which works for all methods:Just rename a computer.

:::warning
The details in this article get you started without having to count the number of
computers, which means we cannot get you a formal quote. Only when you count the computers are we
able to provide you a formal quote. This process is slower and optional, but does mean we can get
you a formal quote.
See [How to Request Licenses from Endpoint Policy Manager by Creating a "License Request Key"](/docs/endpointpolicymanager/licensing/videolearningcenter/requestall/licenserequestkey.md)
for additional information. Then send your License Request Key XML to your sales person to get a
formal quote generated.
:::


So, here's the rundown of how you can get a trial license quickly.. You need to pick just one:

- Option 1 — On-Prem or MDM: No license at all, by renaming a computer to have Computer in the
  name(recommended).
- Option 2 — Licenses coming automatically from Endpoint Policy Manager Cloud.
- Option 3 — On-Prem / GPO Method: You give us your domain name, we give you back a Trial License
  File.
- Option 4 — Intune-specific method: You give us your INTUNE company name,, and we give you back a
  Trial License File.
- Option 5 — Non-Intune/Other-MDM Method: You give us your UPN name, and we give you back a Trial
  License File.

## Option 1: On-Prem or MDM: No license at all, by renaming a computer to have Computer in the name(recommended)

With Endpoint Policy Manager, you don't even need a license file from us to get started.

:::note
This is the recommended  way to get going quickly with Endpoint Policy Manager.
:::


Simply rename a computer to have Computer in the name, and that's it. You're done. Here are the two
methods of how to do that in Windows.

Here's a video showing what happens when you rename a computer and how Endpoint Policy Manager
reacts:[Testing and Troubleshooting By Renaming an endpoint Computer](/docs/endpointpolicymanager/deliverymethods/cloud/videos/testlabbestpractices/renameendpoint.md)

![812_1_image001](/images/endpointpolicymanager/license/812_1_image001.webp)

After you rename your computer to have Computer in the name, then:

- Follow these directions to get started with on-Prem Active Directory/ Group Policy: Getting
  Started with Group Policy > [Knowledge Base](/docs/endpointpolicymanager/) and/or
- Follow these directions to get started with Endpoint Policy Manager and Intune or another MDM
  (making sure to follow the "Walk Before You Run" video): Getting Started with MDM >
  [Video Learning Center](/docs/endpointpolicymanager/deliverymethods/mdm/videos/videolearningcenter.md)

## Option 2: Licenses coming automatically from PolicyPak Cloud

If you're trying our Endpoint Policy Manager Enterprise, Endpoint Policy Manager Professional or
Endpoint Policy Manager SaaS, they all come with an included Endpoint Policy Manager Cloud license. 
Your trial should automatically generate credentials
to [cloud.policypak.com](https://cloud.policypak.com/) (aka the Endpoint Policy Manager Cloud
Service.)

When you install the Endpoint Policy Manager Cloud client, a license is automatically taken from
Endpoint Policy Manager Cloud (and also the Endpoint Policy Manager Client Side Extension is
installed.) You install a new machine into Endpoint Policy Manager cloud by installing the Endpoint
Policy Manager Cloud Client, as shown below.

![812_2_image002](/images/endpointpolicymanager/license/812_2_image002.webp)

To get started immediately with Endpoint Policy Manager Cloud, check out the Getting Started with
Cloud > [Video Learning Center](/docs/endpointpolicymanager/deliverymethods/cloud/videos/videolearningcenter.md).

## Option 3: On-Prem / GPO Method: You give us your domain name, we give you back a Trial License File.

If you want to use Active Directory / GPO method to deliver Endpoint Policy Manager settings, we
need your domain name. And if you have multiple domains, that's fine. We can make you one key which
contains all your domain names.

The best way to get the domain name would be to run this simple Powershell command:

```
$env:userdnsdomain
```

It will then produce the output of the domain name, which is the minimum requirement to make you a
license key.

![812_3_get-fqdn-with-powershell](/images/endpointpolicymanager/license/812_3_get-fqdn-with-powershell.webp)

Once we generate the key, it will be in the Endpoint Policy Manager
Portal.[How to install UNIVERSAL licenses for NEW Customers (via GPO, SCCM or MDM)](/docs/endpointpolicymanager/licensing/videolearningcenter/installall/installuniversal.md)Then
follow these directions to get started with on-Prem Active Directory/ Group Policy: Group
Policy > [Knowledge Base](/docs/endpointpolicymanager/)

## Option 4: Intune-specific method: You give us your INTUNE company name, and we give you back a Trial License File.

If you're using Intune specifically, we can turn on Endpoint Policy Manager for your Intune
instance. We need the Intune Company name. Run this PowerShell script, which will return
`INTUNECOMPANYNAME.TXT`, and send it to your sales person.

```
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
Install-PackageProvider -Name NuGet -Scope CurrentUser -Force
Install-Module -Name Microsoft.Graph.Intune -Repository PSGallery -Scope CurrentUser -Force
Connect-MSGraph -AdminConsent
Get-Organization | Select @{N = 'CompanyName'; E = { $_.displayName } } | out-file INTUNECOMPANYNAME.TXT
```

Once we generate the key, it will be in the Endpoint Policy Manager Portal. Download the key and
install it using theinstructions found
here: [How to install UNIVERSAL licenses for NEW Customers (via GPO, SCCM or MDM)](/docs/endpointpolicymanager/licensing/videolearningcenter/installall/installuniversal.md)

Then follow these directions to get started with Endpoint Policy Manager and Intune (making sure to
follow the "Walk Before You Run" video): Getting Started with MDM >
[Video Learning Center](/docs/endpointpolicymanager/deliverymethods/mdm/videos/videolearningcenter.md)

## Option 5: Non-Intune/Other-MDM Method: You give us your UPN name, and we give you back a Trial License File.

When you enroll machines into your MDM, you do so with a UPN name. Start out by noting which UPN
name you use, such as [\*@fabrikam.com,](mailto:*@fabrikam.com) or whatever yours is. We recommend
you take a screenshot of this page from an enrolled Windows 10 machine, and then continue.

![812_4_sdfg](/images/endpointpolicymanager/license/812_4_sdfg.webp)

Once we generate the key, it will be in the Endpoint Policy Manager Portal. Download the key and
install it using these
instructions: [How to install UNIVERSAL licenses for NEW Customers (via GPO, SCCM or MDM)](/docs/endpointpolicymanager/licensing/videolearningcenter/installall/installuniversal.md)

Then follow these directions to get started with Endpoint Policy Manager and your MDM service,
making sure to follow the "Walk Before You Run" video: Getting Started with MDM >
[Video Learning Center](/docs/endpointpolicymanager/deliverymethods/mdm/videos/videolearningcenter.md)

