---
title: "Using Rings to Test and Update the Endpoint Policy Manager Client-Side Extension and/or Cloud Client (And How to Stay Supported)"
description: "Using Rings to Test and Update the Endpoint Policy Manager Client-Side Extension and/or Cloud Client (And How to Stay Supported)"
sidebar_position: 10
---

# Using Rings to Test and Update the Endpoint Policy Manager Client-Side Extension and/or Cloud Client (And How to Stay Supported)

This topic will cover how to best pre-test a Client-Side Extension (CSE) roll-out (with or without
the Cloud Client), before deploying it to all end-computers. It is not recommended to deploy the
latest CSE to all your machines at once whenever a new version is released.

## Definitions

CSE (Client Side Extension) — This is the client-side component that must be installed on all
endpoints for the product to function.

Cloud Client — Available only within the Endpoint Policy Manager Cloud portal, it connects the
machine to Endpoint Policy Manager Cloud, downloads licenses, communicates with the cloud, downloads
policies, and uploads event log files. On-Prem or MDM customers typically need only the CSE.
Endpoint Policy Manager Cloud users need both.

## Importance of Using the Latest Version

Only the latest CSE and Cloud Client are officially supported to ensure access to the latest
features and bug fixes, which minimizes the risk of encountering untested upgrade paths or outdated
behaviors. Maintaining updated systems ensures optimal performance and security.

Endpoint Policy Manager acts as part of the operating system and helps you manage important security
and configuration items, but since no product is bug free, Endpoint Policy Manager cannot guarantee
that any updated client-side extension (CSE) will work completely with what you already have. It is
recommended to test a newly provided CSE and/or Cloud Client on a small group first and verify that
they are working the way you expect before you deploy them out to all your machines.

Avoid a situation where you mass-deploy an untested CSE and/or Cloud Client to 100% of your
machines. Only to find that you have some problem you need to back out of. This can be very time
consuming and difficult to do. Instead, if you test the CSE and/or Cloud Client before a mass
roll-out, you avoid these potential issues and will have increased confidence to roll it out to all
your machines.

## Understanding the Microsoft Ring Model for Rollouts

Endpoint Policy Manager is not alone in wanting to ensure your confidence during updates. Indeed,
Microsoft also has this same concern and the same recommendation against upgrading all machines at
the same time. Ever since Windows 10 shipped, Microsoft has recommended a "Ring Model" approach to
updating Windows. This is because Windows is constantly updated, every month for bug fixes and twice
a year for huge upgrades. When Windows itself gets updated, there are controls available to help you
segregate machines so you know in advance which machines will get which new software. These separate
groups are known as "deployment rings," "update rings," or just "rings."

The basic idea behind rings is the following:

**Step 1 –** Allocate 2–5% of your computers to get the latest update (as soon as possible). If
something goes wrong, you will know about it now, and not later when you've rolled it out to your
whole estate.

**Step 2 –** If all goes well, increase the percentage of computers with the update to 10–50%.

**Step 3 –** If there are no issues, increase that to 51–100%.

It is recommend to become familiar with Microsoft's idea of rings using the following resources:

- Microsoft documentation:
  [Prepare a servicing strategy for Windows client updates](https://learn.microsoft.com/en-us/windows/deployment/update/waas-servicing-strategy-windows-10-updates)
- Endpoint Policy Manager's blog post:
  [Windows Update for Business (WuFB): A Simplified Guide](https://www.policypak.com/resources/pp-blog/windows-update-business/)
- Microsoft Ignite's talk about rings:
  [Strategic and tactical considerations for ring-based Windows 10 deployments](https://www.youtube.com/watch?v=omwelzp-Hlw)
- Jeremy's MDM book (Chapter 9): [MDMandGPanswers.com/book](https://www.mdmandgpanswers.com/books)

These segmentation blocks are what is referred to as rings. An example of this process is described
in this Microsoft's article
[Use CSPs and MDMs to configure Windows Update for Business](https://learn.microsoft.com/en-us/windows/deployment/update/waas-wufb-csp-mdm).
The basic idea is that you put a delay between your rings.

- Initial Pilots (2-5%): No delay; machines get the Microsoft updates immediately.
- Fast Ring (10-50%): 5-day delay.
- Slow Ring (51-100%): 10-day delay.

![71_1_hfkb-1094-img-01](/images/endpointpolicymanager/install/71_1_hfkb-1094-img-01.webp)

Microsoft updates can be a little complicated because they also deal with channels, or the types of
versions you want to install. Additionally, Microsoft's model is more complex than Endpoint Policy
Manager's model, because the updates are required and forced. Microsoft Quality Updates (i.e.,
bugfixes) are required to be performed within 30 days (or they will be installed automatically) and
Microsoft Upgrades (i.e., new versions of Windows) are required to be performed within 365 days (or
they will be installed automatically).

However, Endpoint Policy Manager doesn't have any of those requirements or any method to force an
update. Instead, our life cycle is pretty simple:

- Every 4 to 8 weeks, Endpoint Policy Manager ships a new CSE and/or Cloud Client with bug fixes and
  new features.
- That version goes into the Endpoint Policy Manager Portal (for CSE) and that CSE is also available
  for use within Endpoint Policy Manager Cloud. Typically Endpoint Policy Manager Cloud client is
  updated about the same time (same day, or close to it.)
- When the update occurs, we notify all customers (primary and secondary technical contacts).
  Customers are also encouraged to subscribe to Netwrix community for all announcements. See the
  [Netwrix PolicyPak Community](https://community.netwrix.com/c/endpointpolicymanager/28) for additional
  information.
- If some known issue occurs within the month, we will occasionally release a hotfix build and
  generally make no announcement (if low impact, and doesn't affect many customers.).
- Whichever is the latest CSE and/or Cloud Client in the Portal or Endpoint Policy Manager Cloud, is
  the only version of the Endpoint Policy Manager that is supported.

This means that you only need to keep one simple MSI up to date for CSEs and one simple MSI up to
date for Cloud Client on your endpoints to be at the latest build.

Remember that when you use Endpoint Policy Manager with Active Directory (SCCM or GPO) or with your
MDM service, the latest CSE isn't automatically pushed to your PCs. For Endpoint Policy Manager
Cloud customers, the latest CSE isn't dictated to your endpoints either. In all cases it's an
admin's choice to opt-in to use the latest CSE and specify where exactly he or she wants to get
started using it.

In the follow sections, we'll provide our recommendations for various Endpoint Policy Manager
products on how to implement a ring policy for Endpoint Policy Manager CSE updates.

## Recommendations when using Endpoint Policy Manager Cloud: Rings and Rollouts

In Endpoint Policy Manager Cloud, because the concept of "groups" is baked in, you can use a
Endpoint Policy Manager Cloud Group like a ring. Simply choose a group and manually specify the use
a particular version of the CSE on that group. You can also specify the use a particular version of
the CSE everywhere (using the special ALL groups).

Therefore, our advice would be to do the following:

**Step 1 –** Set up a group of 2–5% of your computers. When a new CSE and/or Cloud Client is
released, you should opt in and use this group to start testing and verify success. If there's a
problem you can raise it to the Endpoint Policy Manager support team and we'll work with you.

**Step 2 –** If all goes well, you can roll out the latest CSE and/or Cloud Client to more Endpoint
Policy Manager Cloud Groups. It only takes one click within the group to select the CSE and/or Cloud
Client. Your target rollout for the new CSE should be around 30–50% of your Windows 10 machines.
Again, at this point if there's a problem, you can raise it to support and we'll work with you.

**Step 3 –** After you've rolled out to 50% of your machines, you should be confident enough to roll
it out to all machines.

**Step 4 –** When ready, simply pick the remaining Endpoint Policy Manager Cloud Groups and select
the latest CSE and/or Cloud Client to opt-in more groups.

**Step 5 –** Alternatively, use the special All group to finish your upgrade and mass upgrade the
remaining PCs all at once (again, after you've done some pre-testing.)

See the
[Endpoint Policy Manager Cloud Groups CSE and Cloud Client Small-Scale Testing and Updates](/docs/endpointpolicymanager/deliverymethods/cloud/videos/upkeepanddailyuse/groups.md) topic
for additional information and a video on this process.

## Recommendations when using Endpoint Policy Manager with your Active Directory: Rings and Rollouts

When you're using Endpoint Policy Manager with Active Directory, you typically only need to update
the CSE (and not the Cloud Client).

There are two ways to make rings when you have machines joined to Active Directory:

- Use some 3rd party software installation mechanism
- Use the Endpoint Policy Manager built-in CSE updater.

### Active Directory Option 1: Making Rings with 3rd Party software deployment tools (recommended)

Chances are you already have some kind of on-prem software deployment system to perform your
software updates, such as:

- PDQ Deploy (recommended by us here at Endpoint Policy Manager for on-prem software installs)
- Microsoft SCCM
- KACE
- Many, many others.

Whichever software deployment tool you are using, we recommend you use the three ring method
mentioned above for your CSE rollout.

The idea of rings (or collections, groups, etc.) varies from tool to tool in the following ways:

- For SCCM, you use collections and make them act like rings. The rule you create would essentially
  look for no CSE or an earlier CSE version. See the Microsoft article on
  [How to create collections in Configuration Manager](https://learn.microsoft.com/en-us/mem/configmgr/core/clients/manage/collections/create-collections)
  for additional information.
- For PDQ Deploy, you use targets and make them act like rings. You can select Active Directory
  groups, text files with specific computers, PDQ Inventory groups, and other group lists. See this
  article on
  [Optimizing Deployment](https://documentation.pdq.com/PDQDeploy/13.0.3.0/index.html?optimize-deploy.htm)
  for additional information.
- For other on-prem tools, see your corresponding documentation.

:::note
While it's possible to deploy the Endpoint Policy Manager CSE via Microsoft's Group Policy
software installation, it is not recommended. The best practice to deploy the Endpoint Policy
Manager CSE, should you have no on-prem software deployment tool, is the free version of PDQ Deploy.
For more information, see the video
series[PolicyPak and PDQ](https://www.policypak.com/integration/endpointpolicymanager-and-pdq.html).
:::


### Active Directory Option 2: Using the Built-in Endpoint Policy Manager CSE Update mechanism

Not everyone has a 3rd party software deployment tool.

:::note
While it's possible to deploy the Endpoint Policy Manager CSE via Microsoft's Group Policy
Software Installation, it is not recommended. Our official recommended way to deploy the client is,
again, via a tool like PDQ Deploy, SCCM, etc.
:::


As an alternative, you can use the Endpoint Policy Manager CSE Auto-Updater.  The general idea is
that if you put the CSE in the Central Store, then the CSE will automatically look for updates,
perform the update, and optionally report on the update.

To be consistent with the idea of Rings, we have added this capability to the configurable options
of the CSE Auto-Updater. The CSE Auto-Updater will honor one of two types of rings:

- Ring Type 1: Using specific dates and times to make rings and perform a roll-out. In this style
  you will set specific dates and times for the machines to get the updates.
- Ring Type 2: Using relative number of hours to make rings and perform a roll-out. In this style
  you will set your rings apart with number of hours between updates.

See the
[How can I roll out the latest Endpoint Policy Manager CSE with Active Directory in a controlled manner using Rings ?](/docs/endpointpolicymanager/installation/knowledgebase/updating/ringsupgrade.md) topic
for additional information.

### Active Directory Option 3: Using the Built-in Endpoint Policy Manager CSE Update mechanism in an alternate manner.

You can use a similar technique as Option 2 which uses an `update.config` file, but in reverse.
Here's the outline of the process:

- Place the updated CSE in the central store
- Create the `update.config` file, but specify that the functionwill be disabled and always be off.
  You would do this with the `Enabled=False` parameter.
- Clients can only be upgraded when an admin (or system wide script) runs a special command: 
  `ppupdate /cseupdatenow /force`
- This command will override the `Enabled=False` parameter and force-update the client with the
  latest CSE from the Central Store
- You can automate this "signal" to them using a script, Endpoint Policy Manager Scripts & Triggers,
  SCCM or any other another technique and the machine will upgrade

### Active Directory Option 4: Using Endpoint Policy Manager Remote Work Delivery Manager to specify an update

:::note
This is not a best practice, but could work for your situation.
:::


Another way to make rings would be to use Group Policy to deliver a CSE update via Endpoint Policy
Manager Remote Work Delivery Manager. You could create the rings using Active Directory groups or
any other targeting, then, shoot down a CSE update to specific machines as you saw fit.

See the
[How do I use Endpoint Policy Manager Remote Work Delivery Manager to update the Client Side Extension?](/docs/endpointpolicymanager/components/remoteworkdeliverymanager/technotes/tipsandtricks/updateclientsideextension.md)
and
[Using Remote Work Delivery Manager to Update the Endpoint Policy Manager Client Side Extension](/docs/endpointpolicymanager/components/remoteworkdeliverymanager/videos/tipsandtricks/updateclientsideextension.md) topics
for additional information.

## Recommendations when using Endpoint Policy Manager with your MDM: Rings and Rollouts

The concept of rings with regard to Windows 10 updates and upgrades is built into Microsoft Intune
(and perhaps other MDM services). See How To Manage Device's article
 [Microsoft use of rings](https://www.anoopcnair.com/software-update-patching-options-with-intune/) for
additional information..

But the specific idea of using rings to deploy other software (any software), like the Endpoint
Policy Manager CSE, is not something native in an MDM service. Therefore, you will need to create
computer groups, then assign software to those groups.

In Intune (and most other MDM services), groups can be simple or dynamic. You might want to create
three groups like this:

- Simple group — Hand-picked machines which represent 2–5% of your estate
- Dynamic group at 30% — A group you define with 30% of your Windows 10 computers
- Dynamic group at the remainder (31-100%) — A group you define with the remainder of your Windows
  10 computers

By making the groups dynamic, as computers get enrolled into your MDM service they will
automatically be part of the first or second dynamic group. But because the first group is a simple
group with hand-specified machines, those machines are the only ones that will get the initial
rollout of a new CSE. Then, because the Endpoint Policy Manager CSE is an MSI, you can use the MSI
deployment method with your MDM service to target to these groups.

## How to Stay Supported

Earlier we stated that the **latest** CSE and/or Cloud Client in the Portal or Endpoint Policy
Manager Cloud is the only supported version. This is because the latest version is the one with the
most fixes and features.

You might be wondering if only the very latest CSE version is supported, does that mean that you
lose support if you are unable to stay current (or nearly current) with the Endpoint Policy Manager
CSE and/or Cloud Client rollouts?

The answer in summary is no; you are always supported, regardless of the CSE version you have on
your machine. You are always welcome to ask questions and open support tickets.

However, if you find a bug, problem, inconsistency, or other issue, then Endpoint Policy Manager
support will direct you to update (at least) one machine with the very latest CSE and/or Cloud
Client on it for investigation. And we will ask for log files from that machine after you have
reproduced the issue. In other words, as a general rule, we will typically not begin to investigate
your issue unless you can reproduce it on a machine with the latest CSE and/or Cloud Client. There
is simply no value in investigating old CSE behavior because the problem could already be fixed in
the latest version. Logging improvements could be present in the latest CSEs and/or Cloud Client.
Additionally, if your request involves us investigating the log files, similarly, we will not ask
for nor investigate any log files unless the problem is reproducible on the latest CSE and/or Cloud
Client.

From a practical perspective though, you should attempt to have your Windows machines on a Client
Side Extension which was shipped at least within the last full year (six months is better, and three
months is even better.) For the Cloud Client, it is recommend you fall no further behind than every
3 months.

Upgrades **should go smoothly** from any Client Side Extension to any other Client Side Extension
(or Cloud Client to Cloud Client), but those are not expressly or exhaustively tested. We really
only test the "previous Client Side Extension to current Client Side Extension" upgrade path.
Therefore, when you stay as close to our currently shipping Client Side Extension as possible,
you're likely going to get the best experience and latest testing and fewest problems overall.

Furthermore, because corporate PCs are typically full of applications, system software, and possibly
other unusual circumstances, we strongly recommend you have at least one very clean machine for
ongoing small-scale initial testing when we release the CSE and/or Cloud Client.

Such a machine would have:

- Latest version of Windows
- Latest version of Microsoft Edge
- Latest version of Chrome or other browsers
- Only software which Endpoint Policy Manager might be controlling, such as required with Endpoint
  Policy Manager Application Manager, Endpoint Policy Manager Least Privilege Manager, Endpoint
  Policy Manager Start Screen & Taskbar Manager, etc.
- Not much else, and most specifically, no 3rd party system software or A/V software other than
  Endpoint Policy Manager

:::note
Minimize the exposure to third party problems and you're working cleanly like we are in
our testing. You can just hand-install the latest Endpoint Policy Manager CSE and/or Cloud Client,
and do some pre-flight testing before you even get to your rings. Then if you encounter a bug, you
can quickly validate your bug report, and collect logs from a machine that's close to you and
available whenever you need it, not just when the user is available.
:::


## Final Thoughts and Recap

A Windows roll-out incorporates the concepts of rings so you can confidently roll out Windows as new
versions come out, month after month and year after year. Endpoint Policy Manager encourages you to
utilize the same concept of rings when rolling out the Endpoint Policy Manager CSE either for the
first time or at update time.

Use your software deployment mechanism (either an on-prem system, or via MDM or Endpoint Policy
Manager Cloud) to make the rings you need. Keep in mind that you typically want to update 2– 5% of
your computers for a quick check, then feather it out to about 30%. Finally, after ensuring that
everything is working properly, you can roll it out to the remainder.

If you fall behind, Endpoint Policy Manager has no force update mechanism. You can stay behind and
out of date for the Endpoint Policy Manager CSE and/or Cloud Client as long as you want (again, the
practical outside length in this is about a year). Again this is not recommended, because you
specifically lose out on new features and fixes in latest CSE.

Even if you fall out of date with the latest Endpoint Policy Manager CSE, you are still entitled to
support.

Just remember that you will have to reproduce the issue on a machine with the latest CSE and/or
Cloud Client and be prepared to get logs from a very clean machine.

