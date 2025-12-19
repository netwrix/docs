---
title: "Rings with Endpoint Policy Manager and Active Directory"
description: "Rings with Endpoint Policy Manager and Active Directory"
sidebar_position: 30
---

# Rings with Endpoint Policy Manager and Active Directory

There are several ways to make rings when you have machines joined to Active Directory using a
third-party software installation mechanism, or the Endpoint Policy Manager built-in CSE updater. We
describe these options in the sections that follow.

## Third-Party Software Deployment Tools

The first option for using rings with Endpoint Policy Manager and Active Directory is to make rings
with third-party software deployment tools. This is the recommended method for using rings. Chances
are you already have some kind of on-prem software deployment system to perform your software
updates, like, for example:

- PDQ Deploy (recommended by us here at Endpoint Policy Manager for on-prem software installs)
- Microsoft SCCM
- KACE

Whichever software deployment tool you are using, we recommend you make the following three rings
for your CSE rollout:

- Allocate 2–5% of your computers to get the latest CSE update (as soon as possible). If something
  goes wrong, you will know about it now and can get support.
- If all goes well, increase the percentage of computers receiving the update to 10–50%.
- If there are no issues, increase that to 50–100%.

The idea of rings (or collections, groups, etc.) varies from tool to tool in the following ways:

- For SCCM, you use collections and make them act like rings. The rule you create would essentially
  look for no CSE or an earlier CSE version.For( more information on this, see the Microsoft article
  on
  [How to create collections in Configuration Manager](https://learn.microsoft.com/en-us/mem/configmgr/core/clients/manage/collections/create-collections)
- For PDQ Deploy, you use targets and make them act like rings. You can select Active Directory
  groups, text files with specific computers, PDQ Inventory groups, and other group lists. For more
  information on this, see PDQ's article
  [Optimizing Deployment](https://documentation.pdq.com/PDQDeploy/13.0.3.0/index.html?optimize-deploy.htm)
  for additional information.
- For other on-prem tools, see your corresponding documentation.

:::note
While it's possible to deploy the Endpoint Policy Manager CSE via Microsoft's Group Policy
software installation, it is not recommended. The best practice to deploy the Endpoint Policy
Manager CSE, should you have no on-prem software deployment tool, is the free version of PDQ Deploy.
For more information, see the video series at
[https://www.policypak.com/integration/endpointpolicymanager-and-pdq.html](https://www.policypak.com/integration/endpointpolicymanager-and-pdq.html).
:::


## Endpoint Policy Manager CSE Auto-Updater

The second way to use rings with Endpoint Policy Manager and Active Directory is by using the
built-in Endpoint Policy Manager CSE update mechanism. This is an excellent choice when using rings
since not everyone has a third-party software deployment tool.

:::note
While it is possible to deploy the Endpoint Policy Manager CSE via Microsoft's Group
Policy software installation, it is not recommended. Our official recommended way to deploy the
client is via a tool like PDQ Deploy, SCCM, etc.
:::


As an alternative, you can use the Endpoint Policy Manager CSE Auto-Updater. The general idea with
this process is that if you put the CSE in the Central Store, then the CSE will automatically look
for updates, perform the update, and optionally report on the update.

To implement the idea of rings, we have added this capability to the configurable options of the CSE
Auto-Updater. The CSE Auto-Updater will honor one of two types of rings procedures:

- Ring Type 1: Use specific dates and times to make rings and perform a rollout. With this type, you
  set specific dates and times for the machines to get the updates.
- Ring Type 2: Use a relative number of hours to make rings and perform a rollout. With this type,
  you separate your rings by the number of hours between updates.

See the
[How can I roll out the latest Endpoint Policy Manager CSE with Active Directory in a controlled manner using Rings ?](/docs/endpointpolicymanager/installation/knowledgebase/updating/ringsupgrade.md) topic
for additional information.

## Endpoint Policy Manager CSE Auto-Updater in Reverse

The third option for using rings with Active Directory is to use the built-in Endpoint Policy
Manager CSE update mechanism in an alternative manner. You can use a similar technique as Option 2,
which uses an `update.config` file, but in reverse.

**Step 1 –** Place the updated CSE in the Central Store.

**Step 2 –** Create the `update.config` file, and specify that the technique will be disabled and
always be off. You do this with the `Enabled=False` parameter.

**Step 3 –** Clients can only be upgraded when an admin (or system wide script) runs
`ppupdate /cseupdatenow /force`.

**Step 4 –** This command will override the `Enabled=False` parameter and force an update on clients
with the latest CSE from the Central Store.

**Step 5 –** You can automate this signal using a script, Endpoint Policy Manager Scripts &
Triggers, SCCM, or any other another technique, and the machine will upgrade.

## Endpoint Policy Manager Remote Work Delivery Manager

The last way to use rings with Active Directory is by using Endpoint Policy Manager Remote Work
Delivery Manager to specify an update. This is not strongly recommended, but could work, depending
on your situation. In this process you can create the rings using Active Directory groups or any
other targeting, and then sending a CSE update to specific machines as you see fit.

:::note
See the
[How do I use Endpoint Policy Manager Remote Work Delivery Manager to update the Client Side Extension?](/docs/endpointpolicymanager/components/remoteworkdeliverymanager/technotes/tipsandtricks/updateclientsideextension.md)
topic for additional information.
:::


See the
[Using Remote Work Delivery Manager to Update the Endpoint Policy Manager Client Side Extension](/docs/endpointpolicymanager/components/remoteworkdeliverymanager/videos/tipsandtricks/updateclientsideextension.md)video for
additional information.

