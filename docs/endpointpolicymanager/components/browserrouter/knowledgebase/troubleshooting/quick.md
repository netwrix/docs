---
title: "How to quickly troubleshoot Endpoint Policy Manager Browser Router"
description: "How to quickly troubleshoot Endpoint Policy Manager Browser Router"
sidebar_position: 280
---

# How to quickly troubleshoot Endpoint Policy Manager Browser Router

**Step 1 –** Are you licensed? And did you reboot the endpoint?

Each component of Netwrix Endpoint Policy Manager (formerly PolicyPak) On-Prem is licensed
separately.

Endpoint Policy Manager Browser Router is licensed with a license key, and that license key is
typically inside a GPO.

To understand how / where your license keys might live, please check this video:

[https://docs.netwrix.com/docs/endpointpolicymanager/licensing/knowledgebase/miscquestions/licensingmethods](https://docs.netwrix.com/docs/endpointpolicymanager/licensing/knowledgebase/miscquestions/licensingmethods)

Also, before continuing, reboot the endpoint with the Endpoint Policy Manager CSE / Endpoint Policy
Manager Browser Router installed upon it.

Endpoint Policy Manager Browser Router may need a reboot the first time for all features.

**Step 2 –** Are you getting the GPO?

You need a GPO to make the routes. Make sure the following is true:

- You have a GPO.
- GPO is linked to either USER or COMPUTER OU.
- The GPO has data / routes in it for the correct side.

In this example, the GPO has data / routes on the user side and is correctly linked to where users
reside (West Sales Users.)

![55_1_image007](/images/endpointpolicymanager/troubleshooting/browserrouter/55_1_image007.webp)

**Step 3 –** Verifying you GOT the GPOs… one for licensing and one for the routes.

Run `GPresult /R `two times:

- AS an ADMIN and verify that you got the LICENSING GPO.
- As the USER and verify you got the GPO with the Endpoint Policy Manager Browser Router data.

![55_2_image008-1024x395](/images/endpointpolicymanager/troubleshooting/browserrouter/55_2_image008-1024x395.webp)

**Step 4 –** Is Endpoint Policy Manager Browser Router the "default browser" ?

In DEFAULT PROGRAMS, verify that PPBRAgent is the Default Browser for HTTP and HTTPs.

(Will be PPBRAgent32 on 32-bit and PPBRAgent64 on 64-bit).

:::warning
For Non-Domain Joined machines, we (PolicyPak) cannot set this automatically. For more
information on this
problem, [Which Endpoint Policy Manager items will not work when the computer is non-domain joined (or the computer is NEVER connected to the Internet)?](/docs/endpointpolicymanager/gettingstarted/misc/knowledgebase/nondomainjoined/limitations.md)
:::


For Domain joined Windows 10, Look at Default Programs here,

![55_3_image](/images/endpointpolicymanager/troubleshooting/browserrouter/55_3_image.webp)

For Domain Joined Windows 7, check Default Programs as seen here,

![55_4_image013](/images/endpointpolicymanager/troubleshooting/browserrouter/55_4_image013.webp)

![55_5_image014](/images/endpointpolicymanager/troubleshooting/browserrouter/55_5_image014.webp)

CHECKPOINT: If PPBRAGENT is not the default for HTTP and HTTPS then, run `GPupdate /force` then
REBOOT the computer.

Then verify that it took. If it didn't, stop here and figure out why.

Common reasons:

- Computer doesn't have Endpoint Policy Manager CSE installed.
- Computer isn't licensed.
- User/ Computer didn't get the GPO.
- No Endpoint Policy Manager Browser Router routes at all.
- Again: For NON-Domain Joined machines, you must set Endpoint Policy Manager as the default browser
  MANUALLY. There is no workaround.

**Step 5 –** Check Endpoint Policy Manager Browser Router logs

As the USER, go to `Appdata\Local\PolicyPak\PolicyPak Browser Router` and verify that ANY logs exist
as seen here.

![55_6_image009](/images/endpointpolicymanager/troubleshooting/browserrouter/55_6_image009.webp)

Open the LATEST-created file (by date) for inspection.

![55_7_image010](/images/endpointpolicymanager/troubleshooting/browserrouter/55_7_image010.webp)

**Step 6 –** Checking what Endpoint Policy Manager Browser Router thinks are your routes. Endpoint
Policy Manager Browser Router can take routes from various sources and multiple GPOs and/or files
and/or Endpoint Policy Manager Cloud.

Ultimately those rules are boiled down to one file: `ppBRresults.xml.`

You should manually inspect this to verify that routes are generated as expected.

![55_8_image011-1024x487](/images/endpointpolicymanager/troubleshooting/browserrouter/55_8_image011-1024x487.webp)

**Step 7 –** Getting more help (exactly what to do and attach THREE THINGS).

- To get MORE help with Endpoint Policy Manager Browser Router, first export your Endpoint Policy
  Manager Browser Router collection as seen here.
- It’s good to take a screen shot too, so we can see what you’re trying to; computer or user side.
- Attach / send both your SCREEN SHOT and your XML EXPORT file to your support case.

![55_9_image001-1](/images/endpointpolicymanager/troubleshooting/browserrouter/55_9_image001-1.webp)

Then, run `PPLOGS` twice:

- Use an ADMIN command prompt and run `PPLOGS`. Rename to `ppLogs-as-Admin.zip`. Attach to your
  support case.
- Use a NORMAL command prompt and run `PPLOGS`. Rename to` ppLogs-as-USER.zip`. Attach to your
  support case.

![55_10_image0012-1024x593](/images/endpointpolicymanager/troubleshooting/browserrouter/55_10_image0012-1024x593.webp)

:::note
If your email system strips ZIP files, rename it to `.ZIPP` or `.TXT` or whatever you
want.

:::


