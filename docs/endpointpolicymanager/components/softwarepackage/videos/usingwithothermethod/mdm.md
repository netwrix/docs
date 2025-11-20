---
title: "Endpoint Policy Package Manager (AppX Policies): Add or Remove Microsoft Store using your MDM service."
description: "Endpoint Policy Package Manager (AppX Policies): Add or Remove Microsoft Store using your MDM service."
sidebar_position: 10
---
# Endpoint Policy Package Manager (AppX Policies): Add or Remove Microsoft Store using your MDM service.

Once you've rolled out a machine using Autopilot, how can you REMOVE unwanted applications and ADD
important Windows 10 Store applications? With Netwrix Endpoint Policy Manager (formerly PolicyPak)
Package Manager (AppX) policies of course! Use your Intune (or any other MDM service) to remove
"junkware" but then add important business related Windows 10 Store applications!

<iframe width="560" height="315" src="https://www.youtube.com/embed/tjoNyqcvWRU" title="Endpoint Policy Package Manager (AppX Policies): Add or Remove Microsoft Store using your MDM service." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz. In this video I'm going to show you how you can use Endpoint Policy
Manager Software Package Manager to deliver AppX settings and also remove AppX settings from your
machines that are managed by, say, an MDM service like InTune or if you're using Autopilot when
you've got your machines automatically rolled out. The thing is that even though modern machines
have a pretty clean initial start menu, it turns out that there are some things that are deployed
that you don't want from the Windows Store or there's stuff that's in the Microsoft Store and you
don't to deploy them.

The good news is as you saw in the previous videos, we can deploy any kind of Microsoft Store app
and also remove stuff. I'm going to how you how to do that with your MDM service. To get started,
this one app came with the operating system, and you don't want it there. Here's Skype. I've already
got its package ID and also its publisher, so I'm going to take its package ID and remove this
puppy.

I'm going to Copy this over here. I'm going to back in my Group Policy Editor, and I'm going to Add
a New AppX Policy. I'm going to Remove Skype, and I'm going to remove the Package by Name. I could
just match by the Name. I could do Match Wildcard \*Skype\*. That actually would be good enough.
That's going to remove it.

Now the only question is how do I get this gaggle of settings here that will remove Candy Crush,
remove everything by that manufacturer, remove Duolingo if it's there, install Slack, install Power
BI, also deliver Netflix, which I did in a previous demonstration, and also now remove Skype? How do
I take these items from my Group Policy Editor and get them over to my MDM service? Well, if you've
seen any of our other videos, it's actually really easy to do. What are we going to do?

We're going to take these settings, right-click, and Export a XML as a Collection. I'm going to put
them on the Desktop here. I'll just call them XML Examples. I'll call this PPPACMAN-EXPORT1. I've
got my settings exported.

The next thing I want to do is I want to go to my Endpoint Policy Manager Export utility. I'm going
to Create a New MSI Installer. I'm going to Add Existing File I just created, which is
PACMAN-EXPORT1. There it is. I'm going to deliver it to the computer.

I'm going to take those settings and deliver it to the computer. Then that will affect all users.
I'll call this file EXPORTED-GPOS. Now that I've got it exported, I'm ready to flip into InTune.

Here in InTune we're already deploying the Endpoint Policy Manager Client Side Extension, that's the
moving part, the License file, and now it's time to simply add the EXPORTED-GPOS we created ten
seconds ago. That's it. We're off to the races, and we're ready to synchronize this on our MDM
Machine over out in the field.

Now that we're back on our endpoint, we can see that this machine is being managed by our MDM
service, which happens to be InTune. It could be any MDM service you want. What we'll do next is we
will go ahead and click on Sync, and we'll give this a minute to catch up.

Before it catches up, let's go ahead and reestablish where we're at. We still have Skype, which is
preinstalled in the operating system. We don't have Slack, and we don't have Microsoft Power BI.
We'll give this a second to catch up, and then let's see if we can catch it in real time. Yeah,
there we go. There's Slack getting installed as we speak.

If we patiently wait, we should also see Microsoft Power BI also get installed, and then Skype will
be uninstalled all in the same time. We're doing this all through InTune. These are Microsoft
Windows Store Applications that we are dictating exactly what we want to install and what we want to
remove.

Let's go back and check on it now. Bang, there we go. We can see we got all three of our softwares
deployed, Slack, Power BI Desktop, and Netflix. We also said goodbye to Skype that came in the box
even with the latest edition of Windows 10.

I hope this helps you out, giving you the power to deploy and remove applications from the Microsoft
Store using Endpoint Policy Manager and your MDM service. I hope this helps you out. Looking forward
to getting you started with Endpoint Policy Manager real soon. Thanks.


