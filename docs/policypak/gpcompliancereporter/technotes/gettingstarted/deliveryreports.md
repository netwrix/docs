---
title: "Do I need the Group Policy Compliance Reporter product if I use PolicyPakCloud or PolicyPak MDM? (Or, how do I get delivery reports for Group Policy, Cloud or MDM directives?)"
description: "Do I need the Group Policy Compliance Reporter product if I use PolicyPakCloud or PolicyPak MDM? (Or, how do I get delivery reports for Group Policy, Cloud or MDM directives?)"
sidebar_position: 20
---

# Do I need the Group Policy Compliance Reporter product if I use PolicyPakCloud or PolicyPak MDM? (Or, how do I get delivery reports for Group Policy, Cloud or MDM directives?)

As a review… The Group Policy Compliance Reporter (PPGPCR) tells you when your on-prem Group Policy
objects (GPOs) and related settings "made it" to your endpoints, and tells you if those GPOs
contents matches a desired state.

What customers typically want to know is:

1. Did my (Group Policy and Netwrix PolicyPak ) settings from
   Group Policy "make it there?"
2. Did my (Group Policy and PolicyPak ) settings from PolicyPak Cloud
   "make it there?"
3. Did my (Group Policy and PolicyPak ) settings from my MDM system "make it there?"

To answer question #1: Use PolicyPak Group Policy Compliance Reporter. PPGPCR can tell
you "Did your Group Policy & PolicyPak settings make it there when using Group Policy
as the settings delivery
mechanism." [https://www.policypak.com/products/endpointpolicymanager-compliance-reporter.html](https://www.policypak.com/products/endpointpolicymanager-compliance-reporter.html)

To answer question #2: Use the free PolicyPak Cloud reporting tool. The PolicyPak Cloud reporting tool can tell you "Did your PolicyPak cloud directives
make it there, when using PolicyPak Cloud as the settings deliver
mechanism." [PolicyPak Cloud Reporting Demo](/docs/policypak/deliverymethods/cloud/videos/upkeepanddailyuse/reports.md)

To answer question #3: Use your MDM service to tell you if your MSI package made it
there. [https://techcommunity.microsoft.com/t5/Intune-Customer-Success/Support-Tip-Troubleshooting-MSI-App-deployments-in-Microsoft/ba-p/359125](https://techcommunity.microsoft.com/t5/Intune-Customer-Success/Support-Tip-Troubleshooting-MSI-App-deployments-in-Microsoft/ba-p/359125)

So, when MIGHT you need both PolicyPak Cloud \*AND\* PolicyPak Group
Policy Compliance reporter?

When you acquire a PolicyPak Cloud license, you can get directives from PolicyPak Cloud -or- Group Policy (or both.)
[[Can I use both PolicyPakOn Premise mode and PolicyPak Cloud simultaneously? Do they clash?](/docs/policypak/gettingstarted/misc/knowledgebase/tipstricksandfaqs/onpremisecloud.md)]

As such, you might want to deliver some settings via PolicyPak Cloud and other
settings using Group
Policy.[PolicyPakCloud and PolicyPak OnPremise – Together using PPCloud Licenses](/docs/policypak/deliverymethods/cloud/videos/usingwithothermethods/onpremise.md)

In this scenario:

- You have ON-PREM / Group Policy-based licensing, and are doing ALL OF YOUR LICENSING using
  PolicyPak Cloud. but then
- You are sometimes DELIVERING settings with both Group Policy
- You are sometimes DELIVERING settings with PolicyPak Cloud.

If you want to know "If your Group Policy delivered settings made it there" you would need to
purchase and license PPGPCR for the on-prem machines.

But because you have no on-prem licenses at all, you can use PolicyPak Cloud as the
LICENSING mechanism to enable the endpoints for PolicyPak Group Policy Compliance
reporter… To report on the Group Policy delivered GPOs.

In PolicyPak Cloud, the on-prem PolicyPak Group Policy Compliance
Reporter license will look like this… and this is a paid extra for PolicyPak Cloud.

![684_1_gpcr-faq-2-img-1](/images/policypak/grouppolicycompliancereporter/684_1_gpcr-faq-2-img-1.webp)

