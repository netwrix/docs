---
title: "What is the difference if I license my MDM machines' CSE using COMPANY NAME vs. UPN name?"
description: "What is the difference if I license my MDM machines' CSE using COMPANY NAME vs. UPN name?"
sidebar_position: 70
---

# What is the difference if I license my MDM machines' CSE using COMPANY NAME vs. UPN name?

When you run the Licensing Tool (LT) to interrogate Intune to the number of computers you have, you
might see that there are two ways to license Intune Company Name

- Intune Company Name
- UPN Name

OlderNetwrix Endpoint Policy Manager (formerly PolicyPak) CSEs were licensed only via UPN name.
Modern Endpoint Policy Manager CSEs can be licensed by either UPN or company name. We recommend that
you use Azure / Intune Company name.

![662_1_1_950x815](/images/endpointpolicymanager/license/mdm/662_1_1_950x815.webp)

Company name equates to this value in Azure, which Intune also uses.

![662_2_2_950x687](/images/endpointpolicymanager/license/mdm/662_2_2_950x687.webp)

When you license theEndpoint Policy Manager CSE by company name, it doesn't matter how the Windows
10 device was enrolled.

On the other hand, you could use UPN names (aka Custom domain names) to license Endpoint Policy
Manager with Intune, but this isn't recommended.

![662_3_3_950x448](/images/endpointpolicymanager/license/mdm/662_3_3_950x448.webp)

When you use UPN name, then the UPN suffix of the person enrolling the computer must match what we
license.

![662_4_4_950x740](/images/endpointpolicymanager/license/mdm/662_4_4_950x740.webp)

Since someone's email and UPN can change, but typically the Intune / Azure Company name does not, we
recommend:

- Using new LT to count the number of computers in Intune and produce a new License File which shows
  Company Name.
- We issue you new keys based upon Company Name.
- You use the latest CSE which understands how to process your license via Company Name

Then use ppupdate to verify that your computers are correctly licensed by company name. This is the
preferred state for all Endpoint Policy Manager customers using Intune.

![662_5_5_950x747](/images/endpointpolicymanager/license/mdm/662_5_5_950x747.webp)

In this example you can see an attempt to use a license using UPN name, but the name of the person
who enrolled the machine does not match what is in the license file.

![662_6_6_950x694](/images/endpointpolicymanager/license/mdm/662_6_6_950x694.webp)

See the Microsoft article on how to
[Plan and troubleshoot User Principal Name changes in Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity/hybrid/connect/howto-troubleshoot-upn-changes)
for additional information regarding UPN names in Azure.

