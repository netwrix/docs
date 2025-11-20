---
title: "How do I make the Grace Period licensing pop-up go away?"
description: "How do I make the Grace Period licensing pop-up go away?"
sidebar_position: 70
---

# How do I make the Grace Period licensing pop-up go away?

This article explains the Netwrix Endpoint Policy Manager (formerly PolicyPak) CSE Grace Period and
Grace Notification.

If your users are getting a pop-up saying “This computer’s license for Endpoint Policy Manager has
become unavailable” like what’s seen here, this means that your license has either:

- Expired
- Been removed
- Transitioned to a different / less-licensed configuration

However, there is a grace period put in place so policies don’t peel off and Endpoint Policy Manager
stops working across any Endpoint Policy Manager component.

You need to resolve or understand your licensing issue.

:::note
Please read this KB all the way through since the pop-up expression has changed in more
recent versions of PolicyPak CSE.
:::


![895_1_image001](/images/endpointpolicymanager/troubleshooting/license/895_1_image001.webp)

:::note
Endpoint Policy Manager plans to update this pop-up in future CSE versions to express what
the license concern is.
:::


Again, this pop-up could ALSO occur also if you transition from one type of licensed state to a
different type of licensed state. For instance, you may encounter the Grace Period or Grace Pop-Up
where a license file doesn’t contain the same components you did from your previous license file. Or
if you were using Endpoint Policy Manager Cloud and one component was unlicensed (on-purpose or
inadvertently.)

- For instance 1: LAST year you had Endpoint Policy Manager Enterprise Edition and THIS year you now
  have Endpoint Policy Manager Professional, and are only licensing, say, PolicyPak Least Privilege
  Manager.
- For instance 2: LAST year you were using all the components in Endpoint Policy Manager Cloud, but
  this year you asked us to turn off one or more components or otherwise didn’t renew the same as
  last year.
- For instance 3: DURING your trial period, you trialed Enterprise Full. However, you ended up
  purchasing just Endpoint Policy Manager Least Privilege Manager.

Typical resolution is to get an updated license file from Endpoint Policy Manager Support or
Renewals which covers the components you wish to cover and timeframe as per your agreement. Then
implement the license file.

- Here is how to implement a new
  license: [How to install UNIVERSAL licenses for NEW Customers (via GPO, SCCM or MDM)](/docs/endpointpolicymanager/licensing/videolearningcenter/installall/installuniversal.md)
- Here is how to troubleshoot a new
  license: [How can I tell how a machine is licensed (by GPO, MDM, or XML file), and also know for what components it is licensed?](/docs/endpointpolicymanager/licensing/knowledgebase/troubleshooting/components.md)

## How to change Pop-Up Behavior (previous CSE versions before 24.4)

In previous versions of the Endpoint Policy Manager CSE, the pop-up occurs automatically for all the
situations expressed earlier.

However, you can forcefully stop the pop-up from occurring with an ADMX setting which affects CSE
before 24.4. That being said, when you use this ADMX setting you also FORGO / Eliminate the grace
period for ALL UNLICENSED COMPONENTS.

Therefore you want to be sure a license file is in place, covers the time frame you expect, and all
the components you expect to be licensed, before performing this step.

The ADMX setting which applies to CSE versions BEFORE 24.4 is named "Explicitly turn off licensing
pop-up when Endpoint Policy Manager license transitions to expired."

:::note
This will immediately stop Unlicensed components from operating in CSE versions 24.4 and
earlier, thus forgoing the grace period for unlicensed components. For versions before 24.4 of the
CSE, there is NO METHOD where the GRACE PERIOD will continue WHILE turning off the Grace Period
NOTIFICATION.
:::


![895_2_image002_950x550](/images/endpointpolicymanager/troubleshooting/license/895_2_image002_950x550.webp)

## How to change Pop-Up Behavior (modern CSE versions equal or later to 24.4)

In recent versions of the Endpoint Policy Manager CSE, the pop-up will not occur automatically for
ANY of the situations expressed earlier.

We changed this behavior to avoid very large customers getting end-user pop-ups if the license
transitions from licensed to partially-licensed (for instance, dropping a particular component from
use.)

Therefore the new implementation is:

- The Grace Period automatically starts if a machine transitions to unlicensed or partially
  licensed. Grace period remains at 30 days and is non-configurable.
- The Pop-Up is NEVER shown to end-users unless the new ADMX is Enabled (opted-in) and configured
  and number of days value is set to show the pop-up.
- Non-Licensed and Partially-licensed state will ONLY be noted in Windows Events. (And, of course,
  the output of the PPUPDATE command.)
- Events will be written to the local event log explaining what is occurring.

To configure the ADMX setting to ENABLE the broadcast of a pop-up, locate the “Show licensing
warning pop-up when any/all Endpoint Policy Manager license transitions to expired” like what’s seen
here.

![1250_3_68f28861b1bed10b6c283416f9581bae](/images/endpointpolicymanager/troubleshooting/license/1250_3_68f28861b1bed10b6c283416f9581bae.webp)

Then, once the policy setting is configured to Enabled (meaning that the Pop-Up is now possible to
be shown), after that, your options are:

- Days: How many days to show the pop-up before grace period ends. (Must be set to >=1 day to make
  pop-up possible.)
- License Usage: When should the pop-up be shown?

  - If set to ALL LICENSES, the pop-up only appears when ALL the licenses have expired (and ALL
    components transition from LICENSED to UNLICENSED.)
  - If set to ANY LICENSES, the pop-up appears when there is a least ONE expired license among all
    other valid licenses (and a component transitions from LICENSED to UNLICENSED.)

:::note
This setting doesn’t need to be configured for all end-computers if you don’t want to. You
could craft delivery of the policy setting, for instance, such that only a sub-set of computers were
enabled for a pop-up if desired. So instead of getting 100% of users informing you of a licensing
concern, maybe you configure and target the Enable pop-up policy for 10% of your computers.
:::


## Expected Events due to licensing concerns

All versions of the CSE which have the Grace Period will also produce Events to the local event log.

Those events are:

- Event 230: Licenses found on the machine are all valid.
- Event 231: Licenses found on the machine are not all valid.
- Event 232: There is No Endpoint Policy Manager license found on this machine
- Event 233: License has become unavailable or has become unlicensed (only available in CSE versions
  equal or later to 24.4)

Therefore, a Endpoint Policy Manager admin must make a decision if to show the pop-up (automatic for
older CSEs) or opt-in to a pop-up (for newer CSEs). Or you can rely only upon Events which you can
forward to some kind of processing system and take action upon.

:::note
There is not yet an Event ID specifically for when a machine transitions to a
less-licensed state. That will be coming soon.
:::


The event IDs to expect on end-point systems and specific examples can be seen here.

Event 230: Licenses found on the machine are all valid.

![1250_4_fbcfc42bce254fe8c965ed49c6fcac3d](/images/endpointpolicymanager/troubleshooting/license/1250_4_fbcfc42bce254fe8c965ed49c6fcac3d.webp)

Event 231: Licenses found on the machine are not all valid.

![1250_5_c27ed7d3265c2c5dcd31d75b1bb214e4](/images/endpointpolicymanager/troubleshooting/license/1250_5_c27ed7d3265c2c5dcd31d75b1bb214e4.webp)

Event 232: There is No PolicyPak license found on this machine

![1250_6_4ac0430c173949359e8fe2fa8fff569d](/images/endpointpolicymanager/troubleshooting/license/1250_6_4ac0430c173949359e8fe2fa8fff569d.webp)

Event 233: License has become unavailable or has become unlicensed (only available in in modern CSE
versions equal or later to 24.4)

![1250_7_e85476dc329c7942430a995eb0548beb](/images/endpointpolicymanager/troubleshooting/license/1250_7_e85476dc329c7942430a995eb0548beb.webp)

