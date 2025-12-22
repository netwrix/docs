---
title: "Understanding Rings"
description: "Understanding Rings"
sidebar_position: 20
---

# Understanding Rings

The most important part of upgrading Netwrix Endpoint Policy Manager (formerly PolicyPak) is to
avoid updating of all your computers at once. You should be performing your updates and rollouts in
a controlled fashion. Endpoint Policy Manager acts as part of the operating system and helps you
manage important security and configuration items, but since no product is bug free, Endpoint Policy
Manager cannot guarantee that any updated client-side extension (CSE) will work 100% with what you
already have. As such, you should test newly provided CSEs on a small group first and verify that
they are working the way you expect before you deploy them out to all your machines.

What we want to avoid is a situation where you mass-deploy an untested CSE to 100% of your machines
and then find that you have some problem you need to back out of since, which can be very time
consuming and difficult to do. Instead, if you test the CSE before mass rollout you avoid these
potential issues and will have increased confidence to roll it out to all your machines.

Endpoint Policy Manager is not alone in wanting to ensure your confidence during updates. Indeed,
Microsoft also has this same concern and the same recommendation against upgrading all machines at
the same time. Ever since Windows 10 shipped, Microsoft has recommended a ring approach to updating
Windows. This is because Windows is constantly updated, every month for bug fixes and twice a year
for huge upgrades. When Windows itself gets updated, there are controls available to help you
segregate machines so you know in advance which machines will get which new software. These separate
groups are known as deployment rings, update rings, or just rings. We recommend you get familiar
with Microsoft's idea of rings using the following resources:

- Microsoft documentation:
  [Prepare a servicing strategy for Windows client updates](https://learn.microsoft.com/en-us/windows/deployment/update/waas-servicing-strategy-windows-10-updates)
- Endpoint Policy Manager's blog post:
  [Windows Update for Business (WuFB): A Simplified Guide](https://www.policypak.com/resources/pp-blog/windows-update-business/)
- Microsoft Ignite's talk about rings:
  [Strategic and tactical considerations for ring-based Windows 10 deployments](https://www.youtube.com/watch?v=omwelzp-Hlw)
- Jeremy's MDM book (Chapter 9): [MDMandGPanswers.com/book](https://www.mdmandgpanswers.com/books)

The basic idea behind rings is the following:

**Step 1 –** Allocate 2–5% of your computers to get the latest update (as soon as possible). If
something goes wrong, you will know about it now, and not later when you've rolled it out to your
whole estate.

**Step 2 –** If all goes well, increase the percentage of computers with the update to 10–50%.

**Step 3 –** If there are no issues, increase that to 51–100%.

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
update. Instead, our lifecycle is pretty simple.

- Every 4 to 6 weeks, Endpoint Policy Manager ships a new CSE with bug fixes and new features.
- That version goes into the Endpoint Policy Manager Portal and is also available for use within
  Endpoint Policy Manager Cloud.
- When the monthly update occurs, we notify all customers (primary and secondary technical
  contacts).
- If some known issue occurs within the month, we will occasionally release a hotfix build and
  generally make no announcement.
- Whichever is the latest CSE in the Portal or Endpoint Policy Manager Cloud, is the only version of
  the Endpoint Policy Manager CSE that is supported.

This means that you only need to keep one simple MSI up to date on your endpoints to be at the
latest build.

Remember that when you use Endpoint Policy Manager with Active Directory (SCCM or GPO) or with your
MDM service, the latest CSE isn't magically pushed from us to your PCs. For Endpoint Policy Manager
Cloud customers, the latest CSE isn't dictated to your endpoints either. In all cases it's an
admin's choice to opt-in to use the latest CSE and specify where exactly he or she wants to get
started using it.

In the follow sections, we'll provide our recommendations for various Endpoint Policy Manager
products on how to implement a ring policy for Endpoint Policy Manager CSE updates.

