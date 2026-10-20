---
title: "How does PolicyPak handle STIGs and/or CIS Benchmarks and/or other 3rd party Advice?"
description: "How does PolicyPak handle STIGs and/or CIS Benchmarks and/or other 3rd party Advice?"
sidebar_position: 130
---

# How does PolicyPak handle STIGs and/or CIS Benchmarks and/or other 3rd party Advice?

## PolicyPak and STIGS

STIGS (Security Technical Implementation Guides) are downloadable 3rd party advice from the USA
Department of Defense DoD Cyber Exchange. As a courtesy, we at Netwrix PolicyPak will routinely look for newly recommended STIG settings, and convert those
recommendations into a consumable format for PolicyPak Application Manager.

Below, find a portion of the download of what PolicyPak provides as pre-converted STIG
guidance.

:::note
That note all STIG guidance is convertible into PolicyPak Application
Manager format, so we only convert the ones that make sense.
:::


![539_1_image-20200219201318-1_950x682](/images/policypak/tips/539_1_image-20200219201318-1_950x682.webp)

You can investigate this whole process end-to-end by watching
[Import STIG files to make your applications more secure](/docs/policypak/gpcompliancereporter/videos/using/importstig.md)
on how to consume the converted STIG information:

Then, you can also use PolicyPak Group Policy Compliance Reporter (Free version) to
verify that your settings delivered via PolicyPak Application Manager were delivered
correctly.[PolicyPak GP Compliance Reporter: Using an Existing GPO as a test](/docs/policypak/gpcompliancereporter/videos/using/existinggpos.md)
on that process.

As already explained though, STIG conversion from its downloadable form from the DoD into PolicyPak Application Manager consumable format is a courtesy only to PolicyPak
customers. While we do our best, it is not warranted, nor is it guaranteed to be up to date at any
time and customers assume any risk in using any of the advice.

More details about STIGs can be found in the PolicyPak Application Manager PDF manual.

## PolicyPak and CIS Benchmarks

CIS Benchmarks are also non-PolicyPak advice from the non-profit Center for Internet
Security (CIS). CIS Benchmarks are available in two formats:

- Free, downloadable PDFs to be used by individuals or corporations; but the advice must be
  implemented manually.
- Pay, downloadable GPOs called CIS Build Kits, which are available when you buy into the CIS
  SecureSuiteMembership. Pricing for these pre-build GPOs vary based upon the kind of organization
  you are. More information available at the CIS website.

That being said, if you are a paid SecureSuiteMembership member and you are legally able to use the
CIS benchmarks as downloadable GPOs, then you can use parts of PolicyPak to help
enhance that investment.

### PolicyPak + CIS Benchmarks Item #1: Use PolicyPak Group Policy Compliance Reporter (Paid Version) to report on CIS Benchmark GPO settings.

In this scenario, you are importing the CIS Benchmarks. Then you can verify that those settings
within the GPOs actually made it there. Since the settings are in Microsoft Group Policy Security,
Group Policy Preferences and Group Policy ADMX format, you need the PolicyPak Group
Policy Compliance Reporter (Paid Version) to ensure those settings are reported upon.

#### Basic steps:

**Step 1 –** Import the CIS Benchmarks as GPOs into your Active Directory.

**Step 2 –** Use PolicyPak Group Policy Compliance Reporter make "Tests" from those
existing GPOs.

**Step 3 –** Use PolicyPak Group Policy Compliance Reporter (Paid version) to report
if endpoints got the contents of the CIS Benchmarks you expect.

:::note
View
[https://www.policypak.com/products/compliance-reporter.html](https://www.policypak.com/products/compliance-reporter.html)
to get the general feel for how you would do this.
:::


### PolicyPak + CIS Benchmarks Item #2: Use PolicyPak Group Policy Compliance Reporter (Free Version) to report on CIS Benchmark GPO settings (for converted ADMX settings.)

In this scenario, you are converting CIS Benchmark GPOs which contain ADMX settings for use within
PolicyPak Admin Templates Manager. Once in PolicyPak Admin Templates
Manager format you can use PolicyPak Group Policy Compliance Reporter (Free Version)
to report on those (now) PolicyPak Admin Templates Manager settings within the GPOs to
see if those settings actually applied.

#### Basic steps:

**Step 1 –** Use the PolicyPak Merge Utility to locate CIS Benchmark GPOs with ADMX
settings, and converting them to PolicyPak Admin Templates Manager format.
([Reduce GPOs (and/or export them for use with PolicyPak Cloud or with MDM)](/docs/policypak/components/admintemplatesmanager/videolearningcenter/admintemplatesmethods/reducegpos.md))

**Step 2 –** Once in PolicyPak Admin Templates Manager format, use the PolicyPak Group Policy Compliance Reporter (Free Version) to report on those converted settings.

### PolicyPak + CIS Benchmarks Item #3: Use PolicyPak Admin Templates Manager plus Item Level Targeting to dictate specifically where ADMX (Admin Template) settings from CIS Benchmarks will be delivered.

In this scenario, you have the CIS Benchmarks GPOs already imported. But you want to dictate
specifically where specific ADMX settings will take affect (For instance, Desktops vs. Laptops, to
specific Users or Groups, on specific IP addresses, etc etc.).

#### Basic steps:

**Step 1 –** Use the PolicyPak Merge Utility to locate CIS Benchmark GPOs with ADMX
settings, and converting them to PolicyPak Admin Templates Manager format.
([Reduce GPOs (and/or export them for use with PolicyPak Cloud or with MDM)](/docs/policypak/components/admintemplatesmanager/videolearningcenter/admintemplatesmethods/reducegpos.md))

**Step 2 –** Once in PolicyPak Admin Templates Manager format, take advantage of Item
Level Targeting to specifically dictate where settings should be used
([PolicyPak Admin Templates: Collections and Item Level Targeting](/docs/policypak/components/admintemplatesmanager/videolearningcenter/admintemplatesmanager/collections.md))

### PolicyPak + CIS Benchmarks Item #4: Export CIS Benchmarks for use with PolicyPak Cloud or PolicyPak MDM (for domain joined or non-domain joined machines.)

In this scenario, you want to use CIS Benchmarks advice alongside PolicyPak Cloud or
PolicyPak MDM. To do this, you need to first have the CIS Benchmarks imported as GPOs.
After that, here are the Basic steps:

**Step 1 –** Export the Group Policy Security Settings using the PolicyPak MMC.

**Step 2 –** Export the Group Policy Preferences settings using the PolicyPak MMC.

**Step 3 –** Export the Group Policy ADMX settings using the ADMX Merge tool.

**Step 4 –** Then deploy the settings using PolicyPak Cloud or PolicyPak
MDM.

The basics for how to take existing Group Policy settings (from CIS Benchmarks or any source) and
use with PolicyPak Cloud
[PolicyPakCloud: How to deploy Microsoft Group Policy Settings using PolicyPak Cloud](/docs/policypak/deliverymethods/cloud/videos/gettingstarted/grouppolicysettings.md).

The basics for how to take existing Group Policy settings (from CIS Benchmarks or any source) and
use with PolicyPak MDM can be found
[Reduce GPOs (and/or export them for use with PolicyPak Cloud or with MDM)](/docs/policypak/deliverymethods/grouppolicy/videos/tipsandtricks/exportgpos.md)
and [PolicyPak and Microsoft Intune](/docs/policypak/deliverymethods/mdm/videos/gettingstarted/microsoftintune.md).

