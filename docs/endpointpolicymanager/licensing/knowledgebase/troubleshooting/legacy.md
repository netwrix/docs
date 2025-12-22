---
title: "Action Required for Endpoint Policy Manager Customers using Legacy Licenses"
description: "Action Required for Endpoint Policy Manager Customers using Legacy Licenses"
sidebar_position: 60
---

# Action Required for Endpoint Policy Manager Customers using Legacy Licenses

## What is happening:

- The Netwrix Endpoint Policy Manager (formerly PolicyPak) CSE (endpoint piece) is hardcoded to stop
  honoring Legacy licenses on Feb 28, 2023… even if you have a Valid Legacy license hitting the
  machine.

## Why is this happening:

- We started delivering Universal licenses in Jan 2021 thus giving customers two years to upgrade to
  make the switch. This is your three-month (and likely final) warning of the impending requirement.

## Who is NOT affected by this:

- If you are using CLOUD licensing, you are not affected.
- If you already have Universal licenses in place and no Legacy licenses in place, you are not
  affected.

## Who IS affected by this:

- If you are using GPO or MDM / XML licensing with Legacy licenses only and...
- You are using CSE version 2687 (21.1.2687.802) or later.

… Then you are affected.

## Is this a security concern?

- No. This is not a security concern.

## How do I know if I'm using LEGACY licenses, UNIVERSAL licenses, or both?

- Please watch this video to help you determine your position and situation plus some advice on what
  to do.
- Video: [Legacy License Retirement Guidance (for Feb 28, 2023)](/docs/endpointpolicymanager/licensing/videolearningcenter/troubleshooting/legacy.md)

## Where can I get UNIVERSAL licenses?

- When we cut keys for new customers who started after 2021, chances are you got only Universal keys
  in the first place.
- When we cut keys for existing customers (who started before 2021) we always provided Universal
  keys and sometimes provided Legacy keys.
- Therefore: You should be able to pick up your existing keys at portal.policypak.com. Example of
  how to find existing keys:

  ![840_1_1](/images/endpointpolicymanager/troubleshooting/license/840_1_1.webp)

- If you cannot locate your Universal license because it should already be in the Portal at portal.policypak.com, please [open a support ticket](https://www.netwrix.com/tickets.html#/open-a-ticket).

## In the portal, after I download my license keys, how can I tell which are UNIVERSAL and which are LEGACY keys?

- Example download of valid dates with both Universal and Legacy keys, but only Universal keys will
  be honored past Feb 28, 2023:

  ![840_2_2_950x572](/images/endpointpolicymanager/troubleshooting/license/840_2_2_950x572.webp)

## What must I do to keep PolicyPak working if I am affected?:

- There are a few strategies you can pursue to keep Endpoint Policy Manager working as expected.
- BEST:
  - Import the Universal license and make sure it hits your endpoints. If you do not have a
    universal license, you may request one by opening a case at
    [Netwrix support](https://www.netwrix.com/sign_in.html?rf=tickets.html#netwrix-support).
    Please do not wait until the last minute to get your license as we could have many requests to
    field.
  - Upgrade the CSE to something recent; hopefully the latest version.
- GOOD, but not as good as BEST:
  - Keep using your Legacy licenses which will  naturally expire Feb 28, 2023.
  - Update the CSE to the latest version (3421 or later) on your endpoints.
  - Use a Endpoint Policy Manager ADMX setting which will give you +90 days to implement the
    Universal license. See screen shot below:

![1231_licenseadmxsetting](/images/endpointpolicymanager/troubleshooting/license/1231_licenseadmxsetting.webp)

:::note
This ADMX setting only affects CSE 3421 and later is only a stopgap measure if you
literally have no way to transition from Legacy XML to Universal XML, but you do have some way to
update your CSE.
:::


- Please honor the philosophy of Rings and don't "blast out" an upgrade CSE to all of your computers
  at once so you can control a rollout or a rollback. Use
  this guidance: [Using Rings to Test and Update the Endpoint Policy Manager Client-Side Extension and/or Cloud Client (And How to Stay Supported)](/docs/endpointpolicymanager/upgrademaintenance/bestpractices/rings.md)

## How can I install UNIVERSAL licenses once I have downloaded them?

- First, upgrade your Admin Console MMC snap in with the latest download from the portal. Only the
  latest Admin Consoles can import Universal licenses.
- Video:
  [How to install UNIVERSAL licenses for NEW Customers (via GPO, SCCM or MDM)](/docs/endpointpolicymanager/licensing/videolearningcenter/installall/installuniversal.md)

  :::note
    You cannot import both Legacy and Universal licenses into the same GPO. You need
  separate GPOs for both license types. If you try to put both licenses into the same GPO you will
  get the error: "Sorry but you can't install GP and Enterprise licenses into the same GPO, please
  install them to different GPOs or select licenses with the same type."
  :::


## What will happen if I do nothing?:

- If you are using LEGACY licenses and/or very old CSEs which ONLY process LEGACY licenses (so CSEs
  before 21.1.2687.802), then Endpoint Policy Manager will keep working because CSEs before
  21.1.2687.802 don't understand Universal licenses anyway.
- If you're using LEGACY licenses and NEWER CSEs (21.1.2687.802 or later), you can expect Endpoint
  Policy Manager to stop processing and stop working as if your license file expired on Feb
  28, 2023.

  :::note
  Exact behavior when licenses expire can be seen here:
  [What happens to each component when Endpoint Policy Manager gets unlicensed or the GPO or policy no longer applies?](/docs/endpointpolicymanager/licensing/knowledgebase/activedirectorygposccm/components_2.md)
  :::


## What if I'm applying both Universal and Legacy licenses to an endpoint?

- If a computer receives both Legacy and Universal licenses, then you should be all set, provided
  you are using a CSE (build 2687 and later) on the endpoint.

  :::note
  More modern CSEs on the endpoints are preferred.
  :::


## How can I validate on a few endpoints that I am Valid and won't expire?

- Use the `PPUPDATE` command which will always show if you are Valid and licensing type.
- Example of a machine getting Universal licenses successfully:

  ![840_3_3_950x610](/images/endpointpolicymanager/troubleshooting/license/840_3_3_950x610.webp)

- FAQ on error conditions:
  [How can I tell how a machine is licensed (by GPO, MDM, or XML file), and also know for what components it is licensed?](/docs/endpointpolicymanager/licensing/knowledgebase/troubleshooting/components.md).
- **NOTE:** The Latest CSE in the portal (build 3375) will also express Invalid licenses if any are
  applying to the machine. Example:

  ![840_4_4_950x675](/images/endpointpolicymanager/troubleshooting/license/840_4_4_950x675.webp)

## Anything else I should know / Bugs & Known Issues?

Item 1: `PPupdate` may show "Computers with ‘Computer' in the name" while actually being licensed
(CSE 3375 only.)

This bug exists only in 3375 and doesn't exist in later version of the CSE, such as 3421 and later.

In build 3375, you might see something like this when you test `PPUPDATE`.

![840_5_image-20230126194031-1](/images/endpointpolicymanager/troubleshooting/license/840_5_image-20230126194031-1.webp)

:::tip
Remember, this is a display bug in 3375 which has been removed in the latest CSE version. This
message can safely be ignored.
:::


As long as you can see you ARE getting licensed by the Universal key method (see section above
entitled “How can I validate on a few endpoints that I am VALID and won’t expire?”) then you are
free to ignore this bug.

Item 2: `PolicyPak` Update might show a statement which is a little misleading in CSE 3375 or
earlier. The message is updated for clarity in CSE 3421 and later.

The message in CSE 3375 and earlier says: “The license is valid. WARNING: GP licenses will no longer
be accepted after Feb 28th, 2023.”

Example:

![840_6_image-20230126194031-2_950x764](/images/endpointpolicymanager/troubleshooting/license/840_6_image-20230126194031-2_950x764.webp)

What it is trying to say is that Legacy XML licenses are not honored beyond Feb 28, 2022.

You can still use Universal licenses via GPO and/or MDM/XML method. The updated messaging from
latest CSEs is as follows:

![840_7_image_950x724](/images/endpointpolicymanager/troubleshooting/license/840_7_image_950x724.webp)

