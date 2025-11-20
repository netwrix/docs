---
title: "Endpoint Policy Manager Start Screen Manager: Manage Windows 10 Start Screen & Taskbar with your MDM (Advanced scenarios with ILT)"
description: "Endpoint Policy Manager Start Screen Manager: Manage Windows 10 Start Screen & Taskbar with your MDM (Advanced scenarios with ILT)"
sidebar_position: 30
---
# Endpoint Policy Manager Start Screen Manager: Manage Windows 10 Start Screen & Taskbar with your MDM (Advanced scenarios with ILT)

Making an MDM policy to manage the Start Menu and Taskbar can be a NIGHTMARE. But not with Netwrix
Endpoint Policy Manager (formerly PolicyPak) Start Screen Manager. With us you can have ONE policy
which can be used again and again. See how it's done.

<iframe width="560" height="315" src="https://www.youtube.com/embed/amWoU2LMiBk" title="Endpoint Policy Manager Start Screen Manager and MDM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak Start Screen Manager and MDM

Hi. This is Jeremy Moskowitz. In this video, I'm going to show you how you can use Endpoint Policy
Manager Start Screen Manager to manage your machines out in the field with your own MDM service.

Let me set up the scenario here. You can pretend that this machine is my traveling sales guys. My
traveling sales guys always use "Mozilla Firefox" and they of course use "WinZip." We want to get
that on the Start Menu here.This is a different computer here. My traveling marketing guys are going
to use "Google Chrome" and "WinZip." So sales guys: "Mozilla Firefox" and "WinZip." Marketing guys:
"Google Chrome" and "WinZip."

We want to get that over to our machines out in the field with our MDM service. How do we do that?
I've already create the policy just to make things go a little bit faster here, but let me show you
what I did. I created two collections: one for "Traveling Sales" and one for "Traveling Marketing."

We just said that the "Traveling Sales" guys only use "Firefox," so this is going to hit them only
when we see that Firefox "exists." We're using item-level targeting and saying if Firefox exists,
then do these things.

What are these things? Create a group called "Super Traveling Sales Apps" and WinZip ("winzip") and
Firefox ("FF") to it. For marketing, we know the marketing guys only use Chrome. So with that in
mind, we're saying look and see if "chrome" "exists." If it does exist, then create a group called
"Super Traveling Marketing Apps" and then deliver "Chrome" and "winzip" to the Start Menu.

The next step would be for you to right click over the root node here and "Export Collections as
XML." We're going to go ahead and call this "PPSSM-MDM-Demo." I've exported all that, and we now
need to wrap it up into an MSI. Endpoint Policy Manager comes with a little utility to help you with
that the "Endpoint Policy Manager Exporter Tool."

We're going to "Create a new MSI installer" for you here, "Add Existing Files" and that's the
"PPSSM-MDM-Demo" we just created ten seconds ago. We want to do this for the entire "Computer,"
which will affect every user on that computer. We're just going to say everybody blanket is going to
get this and then autosense based on the conditions we just talked about: do they have Chrome or do
they have Firefox?

We'll go ahead and click "Next" here, and we'll call this "PPSSM-MDM-DEMO.MSI." Now that we've done
that, we can click "Finish." Now it's time to go to our MDM service. I happen to have "AirWatch" up
here, but you could use InTune, MobileIron or some other MDM service.

At this point, you would "Add Application," you would "Upload" that MSI. I'm going to pause the
video while I do this and by the time it's over we'll see a thing called "Packaged Endpoint Policy
Manager Settings" just like we have here. Then like I said, when I come back to the video we're
going to see the results on our endpoint after they download that from the MDM service. Go ahead and
hang tight.

Okay, and we're back. The computers have gone out to the MDM service and downloaded that MSI which
contained that Start Menu layout XML that we've created, and here we go. We might as well start on
the traveling sales guys. On the traveling sales guys, you can see they have "WinZip" and "Mozilla
Firefox." I'll go ahead and click that there. On the traveling marketing guys, you can see that they
have their own unique Start Menu with "Google Chrome" and "WinZip."

It's just that simple. You don't have to figure out one big policy that's going to affect absolutely
everybody. With Endpoint Policy Manager you can autosense and figure out what people should get what
groups based on what conditions, upload that and use your MDM service to deliver the Endpoint Policy
Manager Start Screen Manager settings.

I hope that helps you out. Looking forward to getting started with you soon.  
Take care.


