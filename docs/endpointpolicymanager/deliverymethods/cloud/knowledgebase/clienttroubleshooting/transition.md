---
title: "How do I transition from Endpoint Policy ManagerCloud to Endpoint Policy Manager Group Policy Edition?"
description: "How do I transition from Endpoint Policy ManagerCloud to Endpoint Policy Manager Group Policy Edition?"
sidebar_position: 40
---

# How do I transition from Endpoint Policy ManagerCloud to Endpoint Policy Manager Group Policy Edition?

**Step 1 –** Uninstall the Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud Client on the
endpoints.  This will MAINTAIN the Endpoint Policy Manager Client Side Extension .

![585_1_jm-1_900x536](/images/endpointpolicymanager/troubleshooting/cloud/585_1_jm-1_900x536.webp)

**Step 2 –** Leave in place -or- Upgrade to the LATEST Endpoint Policy Manager Client Side Extension
using SCCM or PDQ Deploy Example:
[https://www.policypak.com/video/managing-group-policy-using-Endpoint Policy Manager-and-pdq-deploy.html ](https://www.policypak.com/video/managing-group-policy-using-endpointpolicymanager-and-pdq-deploy.html)

**Step 3 –** In Endpoint Policy Manager Cloud, you will already have some POLICIES. You can DOWNLOAD
the policies from Endpoint Policy Manager Cloud like this. (see below.)

**Step 4 –** Then in new GPOs, IMPORT the XML policies to the right node in a Endpoint Policy
Manager on-prem GPO.

Note that some items might be restricted to COMPUTER or USER side, and may be actively prohibited on
the "wrong" side. For those, you will have to recreate the policies.

![585_2_jm-2_900x438](/images/endpointpolicymanager/troubleshooting/cloud/585_2_jm-2_900x438.webp)


