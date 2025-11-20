---
title: "Do I need the Group Policy Compliance Reporter product if I use Endpoint Policy ManagerCloud or Endpoint Policy Manager MDM? (Or, how do I get delivery reports for Group Policy, Cloud or MDM directives?)"
description: "Do I need the Group Policy Compliance Reporter product if I use Endpoint Policy ManagerCloud or Endpoint Policy Manager MDM? (Or, how do I get delivery reports for Group Policy, Cloud or MDM directives?)"
sidebar_position: 20
---

# Do I need the Group Policy Compliance Reporter product if I use Endpoint Policy ManagerCloud or Endpoint Policy Manager MDM? (Or, how do I get delivery reports for Group Policy, Cloud or MDM directives?)

As a review… The Group Policy Compliance Reporter (PPGPCR) tells you when your on-prem Group Policy
objects (GPOs) and related settings "made it" to your endpoints, and tells you if those GPOs
contents matches a desired state.

What customers typically want to know is:

1. Did my (Group Policy and Netwrix Endpoint Policy Manager (formerly PolicyPak) ) settings from
   Group Policy "make it there?"
2. Did my (Group Policy and Endpoint Policy Manager ) settings from Endpoint Policy Manager Cloud
   "make it there?"
3. Did my (Group Policy and Endpoint Policy Manager ) settings from my MDM system "make it there?"

To answer question #1: Use Endpoint Policy Manager Group Policy Compliance Reporter. PPGPCR can tell
you "Did your Group Policy & Endpoint Policy Manager settings make it there when using Group Policy
as the settings delivery
mechanism." [https://www.policypak.com/products/endpointpolicymanager-compliance-reporter.html](https://www.policypak.com/products/endpointpolicymanager-compliance-reporter.html)

To answer question #2: Use the free Endpoint Policy Manager Cloud reporting tool. The Endpoint
Policy Manager Cloud reporting tool can tell you "Did your Endpoint Policy Manager cloud directives
make it there, when using Endpoint Policy Manager Cloud as the settings deliver
mechanism." [Endpoint Policy Manager Cloud Reporting Demo](/docs/endpointpolicymanager/deliverymethods/cloud/videos/upkeepanddailyuse/reports.md)

To answer question #3: Use your MDM service to tell you if your MSI package made it
there. [https://techcommunity.microsoft.com/t5/Intune-Customer-Success/Support-Tip-Troubleshooting-MSI-App-deployments-in-Microsoft/ba-p/359125](https://techcommunity.microsoft.com/t5/Intune-Customer-Success/Support-Tip-Troubleshooting-MSI-App-deployments-in-Microsoft/ba-p/359125)

So, when MIGHT you need both Endpoint Policy Manager Cloud \*AND\* Endpoint Policy Manager Group
Policy Compliance reporter?

When you acquire a Endpoint Policy Manager Cloud license, you can get directives from Endpoint
Policy Manager Cloud -or- Group Policy (or both.)
[[Can I use both Endpoint Policy ManagerOn Premise mode and Endpoint Policy Manager Cloud simultaneously? Do they clash?](/docs/endpointpolicymanager/gettingstarted/misc/knowledgebase/tipstricksandfaqs/onpremisecloud.md)]

As such, you might want to deliver some settings via Endpoint Policy Manager Cloud and other
settings using Group
Policy.[Endpoint Policy ManagerCloud and Endpoint Policy Manager OnPremise – Together using PPCloud Licenses](/docs/endpointpolicymanager/deliverymethods/cloud/videos/usingwithothermethods/onpremise.md)

In this scenario:

- You have ON-PREM / Group Policy-based licensing, and are doing ALL OF YOUR LICENSING using
  Endpoint Policy Manager Cloud. but then
- You are sometimes DELIVERING settings with both Group Policy
- You are sometimes DELIVERING settings with Endpoint Policy Manager Cloud.

If you want to know "If your Group Policy delivered settings made it there" you would need to
purchase and license PPGPCR for the on-prem machines.

But because you have no on-prem licenses at all, you can use Endpoint Policy Manager Cloud as the
LICENSING mechanism to enable the endpoints for Endpoint Policy Manager Group Policy Compliance
reporter… To report on the Group Policy delivered GPOs.

In Endpoint Policy Manager Cloud, the on-prem Endpoint Policy Manager Group Policy Compliance
Reporter license will look like this… and this is a paid extra for Endpoint Policy Manager Cloud.

![684_1_gpcr-faq-2-img-1](/images/endpointpolicymanager/grouppolicycompliancereporter/684_1_gpcr-faq-2-img-1.webp)

