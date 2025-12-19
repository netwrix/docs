---
title: "Endpoint Policy Manager Exporter and SCCM: Deploy real GPOs via SCCM"
description: "Endpoint Policy Manager Exporter and SCCM: Deploy real GPOs via SCCM"
sidebar_position: 40
---
# Endpoint Policy Manager Exporter and SCCM: Deploy real GPOs via SCCM

If you want to deploy real Microsoft GPO settings via SCCM this is how to do it. Export with Netwrix
Endpoint Policy Manager (formerly PolicyPak) Export manager then wrap up and deploy using SCCM.

<iframe width="560" height="315" src="https://www.youtube.com/embed/H9rMyRF1VVQ" title="Endpoint Policy Manager Exporter and SCCM: Deploy real GPOs via SCCM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

In a previous video, you saw me export my real Microsoft group policy settings and export them to
XMLs. Now we're going to wrap them up and use it with our SCCM service. How do we do that? Well,
super-duper easy. We're simply going to run our Endpoint Policy Manager Exporter tool.

The Endpoint Policy Manager Exporter tool takes the things that you exported using the Endpoint
Policy Manager Export Manager and lets you create an MSI for use to deploy using SCCM. We're simply
going to add the existing files, the things that we exported earlier. You can also inject here any
kind of Endpoint Policy Manager settings as well if you wanted to augment your existing group policy
settings. I'm setting these all up for computer or you can do computer or user and specify exactly
which user should get it if you're domain joined. I'm going to go and say everybody on the computer
gets exactly the same settings.

Then I'm going to call this Endpoint Policy Manager -Exports-Demo1. Now I've got this ready to go.
Here's where you have to use your imagination because I don't have SCCM. It's really easy to do.

Simply take the MSI that we just created together and deploy it like any other application. It's
going to get to your machines just like that. We're going to go ahead and do a simulation, no SCCM
involved. Now that we're back over here, let's go ahead and jump over to our endpoint.

To make things go a little faster, I've taken the MSI file that SCCM would deploy and I've just got
it here locally. Again, I'm going to run it interactively, but SCCM would have no prompts. Nothing
would happen. You would just see a whole lot of nothing. Just pay attention right here.

You're going to see the group policy preferences item just kick in. Boom, there we go. We can see
the group policy preferences item. Let's take a look at the control panel as well where we said we
wanted to limit what was in the control panel. If we take a look at the number of icons here, sure
enough just the two ones that we said.

Then the last thing is the group policy security item. Let's go ahead and run this as admin here.
Let's take a look at our last group policy setting. Let's go to gpedit.msc here. We'll take a look.

We're going to go over to Windows settings, security, local policy security options, and the last
thing we said to do was rename the guest account. That's it. Remember, it's super easy to take your
existing group policy settings, anything that you've got in group policy land or Endpoint Policy
Manager land, export them with the exporter, drop them into XMLs, wrap them up as an MSI, and use
the know-how you already have with SCCM to get those deployed over using SCCM. Hope this video helps
you out. Looking forward to getting you started with Endpoint Policy Manager Exporter real soon.
Thanks so much.


