---
title: "How do I transition from PolicyPakCloud to PolicyPak Group Policy Edition?"
description: "How do I transition from PolicyPakCloud to PolicyPak Group Policy Edition?"
sidebar_position: 40
---

# How do I transition from PolicyPakCloud to PolicyPak Group Policy Edition?

**Step 1 –** Uninstall the Netwrix PolicyPak Cloud Client on the
endpoints.  This will MAINTAIN the PolicyPak Client Side Extension .

![585_1_jm-1_900x536](/images/policypak/troubleshooting/cloud/585_1_jm-1_900x536.webp)

**Step 2 –** Leave in place -or- Upgrade to the LATEST PolicyPak Client Side Extension
using SCCM or PDQ Deploy Example:
[https://www.policypak.com/video/managing-group-policy-using-PolicyPak-and-pdq-deploy.html ](https://www.policypak.com/video/managing-group-policy-using-endpointpolicymanager-and-pdq-deploy.html)

**Step 3 –** In PolicyPak Cloud, you will already have some POLICIES. You can DOWNLOAD
the policies from PolicyPak Cloud like this. (see below.)

**Step 4 –** Then in new GPOs, IMPORT the XML policies to the right node in a PolicyPak on-prem GPO.

Note that some items might be restricted to COMPUTER or USER side, and may be actively prohibited on
the "wrong" side. For those, you will have to recreate the policies.

![585_2_jm-2_900x438](/images/policypak/troubleshooting/cloud/585_2_jm-2_900x438.webp)


