---
title: "Action Recommended Endpoint Policy Manager Customers to transition from \"Enterprise\" Licenses to \"Enterprise Full\" licenses."
description: "Action Recommended Endpoint Policy Manager Customers to transition from \"Enterprise\" Licenses to \"Enterprise Full\" licenses."
sidebar_position: 80
---

# Action Recommended Endpoint Policy Manager Customers to transition from "Enterprise" Licenses to "Enterprise Full" licenses.

## What is happening:

- The latest Endpoint Policy Manager CSE (endpoint piece CSE 23.6.3557) and later now honors a new
  license type which is called Enterprise Full. The difference between Enterprise and Enterprise
  Full licenses is that there is no longer a need to expressly define every component and capability
  within the license file.
- When Endpoint Policy Manager releases new features, customers who have implemented the Enterprise
  Full license will NOT have to request updated license keys every time Endpoint Policy Manager
  comes out with a new component or enhances an existing component.

Here's an example Enterprise license:

![935_1_image-20230713042924-1_950x533](/images/endpointpolicymanager/troubleshooting/license/935_1_image-20230713042924-1_950x533.webp)

Example Enterprise Full License:

![935_2_image-20230713042924-2_950x359](/images/endpointpolicymanager/troubleshooting/license/935_2_image-20230713042924-2_950x359.webp)

## Why is this happening:

- From time-to-time Endpoint Policy Manager would ship new features and components, requiring
  customers to open a support case specifically to generate keys for new components. When these new
  Enterprise Full keys are implemented, this will eliminate the need for customers to have to
  request new keys just because we implemented new software in the CSE.
- This change is optional; but if you request an Enterprise Full key now, and spend a little time
  up-front now, then you don’t have to worry about licensing GPOs and files again until the end of
  your term.

## Who is NOT affected by this:

- If you are using CLOUD licensing, you are not affected.
- If you are using Endpoint Policy Manager Professional licensing, you are not affected.

## Are there extra benefits to requesting an Enterprise Full license?

- Yes. When you request an Enterprise Full license (and you are an Enterprise customer), we will
  return you an Enterprise Full key which is keyed to the length of the licensed term period.
- In previous years, even if you were, say, a three year customer, we would provide only one year of
  keys at a time. Thus change now, and you can request your Enterprise Full key for the full term of
  your deal.
- Therefore, your Enterprise Full key will operate until your final renewal date AND not require you
  to come back for keys if we add another component.

## Must I upgrade from Enterprise to Enterprise full?

- No. We recommend you transition to Enterprise Full license keys so you don’t have to worry about
  licensing again until the end of your term.

## Must I re-run the LT (on-prem / MDM license tool) to re-count my computers today?

- No. We have the last License Request key on file, and will attempt to use that for you.
- However, when you get your Enterprise Full key back in return it is up to you to verify that the
  file contains all the things your existing (older) Enterprise key has.
- See below for what to investigate in a key returned to you, versus a key you already have.

![935_3_image-20230713042924-3_950x346](/images/endpointpolicymanager/troubleshooting/license/935_3_image-20230713042924-3_950x346.webp)

## Must I re-run the LT (on-prem / MDM license tool) to re-count my computers at the end of each term year?

- Yes. Running LT and is still required for you to perform and provide your updated year upon year
  counts and overage.
- You must still pay for any overage incurred between the previous year's term and this year's term.

## After I implement Enterprise Full license keys, would I still need to request new keys and implement them?

There are a few cases where you might still need to request updated keys, even after you implement
Enterprise Full license keys.

- Case 1: If you are licensed for SPECIFIC OUs and re-structure your OUs or domain, you will still
  need to request updated mid-year keys.  Keys are specific per domain and/or specific OUs.
- Case 2: If you ADD a domain, you will still need to request updated mid-year keys.
- Case 3: If you transition from Enterprise to Professional you will need to request new keys.

## Are there any prerequisites for Enterprise Full licenses?

- Yes; endpoints need to be at least on version CSE 23.6.3557.
- As for the GPMC MMC editor, it's ideal, but not required to be updated with MMC 23.6.3557 or
  later. It will, however, work fine without it.

:::note
See screen shot below where MMC expresses "Enterprise Universal Product Component" which
is the same as what we are calling "Enterprise Full" here.
:::


![935_4_image-20230713042924-4_950x469](/images/endpointpolicymanager/troubleshooting/license/935_4_image-20230713042924-4_950x469.webp)

## How do I create a new Group Policy Object and import the Enterprise Full key (or deploy via MDM, SCCM, etc?)

- Upgrade your MMC snap-in to the latest version first.
- Perform these steps:
  [How to install UNIVERSAL licenses for NEW Customers (via GPO, SCCM or MDM)](/docs/endpointpolicymanager/licensing/videolearningcenter/installall/installuniversal.md)

  :::note
  Using the Endpoint Policy Manager "LT" tool to install licenses is not recommended,
  but it should work.
  :::


## What if some of my endpoints are using OLDER and NEWER CSE versions?

- As stated, endpoints can only understand Enterprise Full licenses if they are on at least version
  CSE 23.6.3557.
- Best practice is to install the new license in a NEW Group Policy Object even though technically
  you COULD import and install both licenses in the same Group Policy Object, side by side.
- This is so that when one of your licenses expires, you avoid confusion and it's easy to determine
  which Group Policy Object is performing what licensing.
- An example of that can be seen here.

![935_5_image-20230713042924-5](/images/endpointpolicymanager/troubleshooting/license/935_5_image-20230713042924-5.webp)

## How can I tell if the computer is licensed by Enterprise or Enterprise full license keys?

- We have an extensive KB article which will help you. Please refer
  here:[How can I tell how a machine is licensed (by GPO, MDM, or XML file), and also know for what components it is licensed?](/docs/endpointpolicymanager/licensing/knowledgebase/troubleshooting/components.md)
- The key takeaway though is on an endpoint, run `PPupdate `then look for Enterprise Full expressly
  listed as seen below, including an Expiry date in the future and seeing that all components are
  expressed as Complete.

:::tip
Remember, Only computers with CSE 23.6.3557 and later can show Enterprise Full when `PPupdate `is
run.
:::


![935_6_image-20230713042924-6_950x735](/images/endpointpolicymanager/troubleshooting/license/935_6_image-20230713042924-6_950x735.webp)

## If Enterprise Full means "License all components" how do I expressly disable a component (like Endpoint Policy Manager Browser Router, or Endpoint Policy Manager Application Settings Manager) if they are always licensed?

- Recommended method is to use a Endpoint Policy Manager ADMX setting to specifically unlicense a
  component:[What if I want to unlicense specific components via ADMX or Endpoint Policy Manager Cloud?](/docs/endpointpolicymanager/licensing/knowledgebase/activedirectorygposccm/componentscloud.md)
- Note that Endpoint Policy Manager Preferences 1.0 will still always be "force disabled" by default
  until specifically licensed as per this
  article:[Why is Endpoint Policy Manager Preferences (original version) "forced disabled" by default?](/docs/endpointpolicymanager/licensing/knowledgebase/activedirectorygposccm/forceddisabled.md)
- You can still "hard unlicense" a component inside the XML licensing file. The techniques here
  still work:
  - [How do I specifically exclude or prevent a component from performing processing by modifying the license file?](/docs/endpointpolicymanager/licensing/knowledgebase/activedirectorygposccm/componentsexclude.md)

:::note
Only the updated MMC will nicely show this and have it formatted correctly; which is why
we recommend updating to the latest MMC snap-in.
:::


- Get the GUIDs for a license you wish to expressly unlicensed here:
  [What CSEs are contained within Endpoint Policy Manager, what are their CSE GUIDs, and in what release did they appear?](/docs/endpointpolicymanager/gettingstarted/misc/knowledgebase/troubleshooting/guids.md)

## How can I request Enterprise Full keys (which will also have an Expiry date until the end of my term?)

- You will need to open a support ticket at
  [Netwrix Support](https://www.netwrix.com/sign_in.html?rf=tickets.html#netwrix-support) and
  request the new Key.
- Subject line should be: Enterprise Full Key Request for `<your company name>`
- We will ask you if you understand a few points about Enterprise Full keys. Specifically:
  - That you need to have CSE 23.6.3557 on your endpoints for them to be accepted and
  - That you are okay with creating a new licensing Group Policy Object and placing the new
    Enterprise Full license XML in the new Group Policy Object.
- When you get the keys in return, you are in charge of validating it as per other sections of this
  article.

## Any tips for updating the CSE?

- Please honor the philosophy of RINGS and don't "blast out" an upgrade CSE to all of your computers
  at once, so you can control a rollout or a rollback. Use
  this guidance: [Using Rings to Test and Update the Endpoint Policy Manager Client-Side Extension and/or Cloud Client (And How to Stay Supported)](/docs/endpointpolicymanager/upgrademaintenance/bestpractices/rings.md)

## What will happen if I do nothing?

- The Enterprise keys you have likely last for one year maximum. If you do nothing, you will go
  through the normal renewal process.
- You may or may not be handed back an Enterprise or Enterprise Full key during the formal renewal
  process.
- Therefore, you are encouraged to take advantage to use the support mechanism to request an
  Enterprise Full key now which will last all of your term.

## Anything else I should know?

- Yes. We expect a lot of customers to request Enterprise Full keys. We will process them in the
  order the requests are received.
- Some customer licensing scenarios are trickier than others, and we'll likely just have one person
  coordinating this effort to get your updated keys in return. Please be patient as your request is
  being processed; but you're welcome to check in on its progress and/or if you think we dropped the
  ball.
- _Remember,_ There is no emergency to upgrade; this is a new feature enabling you to spend a little
  time up-front now, then to not worry about licensing again until the end of your term.
- _Remember,_ You are still required to run the LT after each term year and pay for true-ups, even
  though the keys you will get back in return are now for the duration of the term, and not one year
  keys as we issued in the past.

