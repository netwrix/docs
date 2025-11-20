---
title: "What does it mean when Endpoint Policy Manager Browser Router gives a pop-up saying to contact support to my end-users?"
description: "What does it mean when Endpoint Policy Manager Browser Router gives a pop-up saying to contact support to my end-users?"
sidebar_position: 120
---

# What does it mean when Endpoint Policy Manager Browser Router gives a pop-up saying to contact support to my end-users?

If you see a message like what's seen below…

"Please contact your support personnel who can gather logs and work with Netwrix Endpoint Policy
Manager (formerly PolicyPak) support."

![206_1_image](/images/endpointpolicymanager/troubleshooting/error/browserrouter/206_1_image.webp)

This could happen for a variety of reasons.

**Step 1 –** Please make sure you are using the ABSOLUTE latest Endpoint Policy Manager Client Side
Extension and then attempt to reproduce. Even if Endpoint Policy Manager Browser Router has had no
changes in a previous build, it's possible that another part of Endpoint Policy Manager has caused
the issue, we know about it, and have possibly fixed it in the latest Client Side Extension.

After that.. there are the following likely causes of problems:

**Step 2 –** Some other security software like: McAfee, Carbon Black, Ivanti LES (HEAT), etc.
Sometimes an upgrade in THESE kinds of software will break and "beat up" on Endpoint Policy Manager.
So everything was working yesterday, but then stopped working AFTER you made an upgrade to one of
these pieces of software. A good test would be to remove or roll it backward or exclude Endpoint
Policy Manager from these specific pieces of software.

Tips:

- Ivanti LES (HEAT) workarounds:
  [https://community.ivanti.com/docs/DOC-59389](https://community.ivanti.com/docs/DOC-59389)
- For your AV / other software, see your own vendor's exclusions.
- Endpoint Policy Manager AV Exclusions:
  [How must I configure my Anti-virus or system-level software to work with Endpoint Policy Manager CSE?](/docs/endpointpolicymanager/upgrademaintenance/antivirussystemsoftware/antivirus.md)
- If you have a FEW or ONE machine showing the issue: FAQ.

**Step 3 –** After that, it could still be a bug. But it would typically appear on MANY machines and
not just a SINGLE or a FEW machines. That being said, if you would like for us to check out your
logs, in these cases, we need AT LEAST TWO machines to see a PATTERN in the logs. So be prepared to
get logs from multiple machines showing the issue so we can do some deeper investigation.

[What must I send to Endpoint Policy Manager support in order to get the FASTEST support?](/docs/endpointpolicymanager/gettingstarted/misc/knowledgebase/troubleshooting/fastsupport.md)

:::tip
Remember, We need AT LEAST two machines of logs to check in this case.
:::


