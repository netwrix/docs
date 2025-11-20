---
title: "Block and Allow USB and CD-ROMs with your MDM solution"
description: "Block and Allow USB and CD-ROMs with your MDM solution"
sidebar_position: 20
---
# Block and Allow USB and CD-ROMs with your MDM solution

Got Intune or another MDM service, and users plugging in USB sticks... walking out the door with
data, or worse, introducing malware? Specify exactly WHO can use WHAT USB sticks ... so you don't
have to fight fires everywhere around data and ransomware.

<iframe width="560" height="315" src="https://www.youtube.com/embed/JR3r_i7scrg" title="Endpoint Policy Device Manager: Block and Allow USB and CD-ROMs with your MDM solution" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz. In this video, I'm going to show you how you can use Netwrix Endpoint
Policy Manager (formerly PolicyPak) Device Manager to enable and restrict USB sticks using your MDM
service and Endpoint Policy Manager. How do you do that? This machine is MDM enrolled. You could be
enrolled into Intune or into Workspace ONE or to Citrix, whatever you want.

This is a good USB stick, one that I am sanctioning and allowing. For instance, maybe you want the
style that Endpoint Policy Manager can deliver, which is enable specific users to use specifically
sanctioned device types. For instance, if this device was always encrypted, you can sanction this
device type. You could say a particular user with a particular device and serial number. I've shown
that in previous videos. This is particularly just how to use it with MDM.

First things first is that you may want to get that USB stick in hand, and then you can see in
Device Manager if you were to go to Properties here, what you'll do is you'll go to details and go
to the device instance path. Device instance path has the vendor and the particular model and also
the serial number embedded into it. What we'll do is we'll copy this. Let's go over to our MMC
management station. This is my Azure and my Intune, which I'll get to in just a moment.

Here is where I'm going to take that string and paste it in. Here's where I need the vendor ID,
that's after the VEN*. I need that guy. Then I need the product ID, which is after PROD*. I'll go
ahead and take that right there. There's the revision also. I'm not going to worry about that. I'm
going to say any revision because I know that this particular USB stick is always encrypted.

What I'll do is then I'll go into my management station here. Using a group policy object just for
the sake of editing purposes, let me go ahead and create a new global settings policy here. I like
raising the number of impressions for bad USB sticks, so I'm going to raise that up pretty high.
Then I'm going to leave the rest the same, show notifications for new devices and policy changes and
so on.

If you want to change the default messages with customized messages, you can do that too. I'm not
going to worry about that now. That's the first thing, just turning it on. That puts the smack down
on all USB sticks.

Then I'm going to set a policy to open it up to something specific. I want to allow users to use
specific devices. What am I going to do? I'm going to take that vendor ID that I got earlier; that's
JETFLASH. I'll go ahead and copy and paste that in.

The product ID that we got earlier, that's TRANSCEND_32GB, this always encrypted drive by way of
example. Then I'm going to keep the product revision just like this. If you wanted to also use
serial numbers, that's fine. You would paste that entire string in. I'm not going to demo that here.

Then here is where you need to add a member by SID. How do you get the SID of a guy in Azure Active
Directory? Well, we have an article on that. For instance, here is the article, which is called _How
Do I Get Azure SIDs and Use Them with Item Level Targeting?_ This only works for individual users.
This will not work at a group level.

There is no such thing as an Azure group SID. There is such a thing as an Azure user SID, and you
have to be able to get it. The easiest way to do it is to be logged onto the guy and get whoami/user
and you can get that information. You can also do some additional magic, if you want to, with this
PowerShell script, which can take an Azure ID and convert it over. The PowerShell is in there
somewhere. That's an advanced technique.

What I'm going to do is just do the simple one here and go to whoami/all, get the guy's SID here.
I'm going to take this SID from Azure. Whoops, I didn't get it. Do it again. Get it from Azure.
There we go.

Then what I'm going to do is go back to my item here, add member by SID. The name doesn't matter.
You can call them Fred Flintstone. It doesn't matter. Then that's the guy's SID. That's what
matters.

What I'm going to say is let this person have read access. Once I go ahead and click OK here, click
Next, and that's it. We're done. We've done what we need to do.

The next thing is to right-click export this policy as XML here. I'm going to export collections as
XML. I'm then going to create a new folder here called EXP3. I'll call this PPDM-EXPORT1. Now that
I've got it exported, the next step is to use our Endpoint Policy Manager exporter tool.

The exporter tool is automatically installed when you install the MMC snap-in. Let's go ahead and
create a new MSI installer. We'll add an existing file here. We'll then pick our EXP3, our exporter.
There it is, device manager on the computer side.

It's got all the things we said, the global policy and the unique individual policy there as well.
We'll go ahead and call this PPDM123. We are done. I'll go ahead and call it PPDM123MSI.

Now that that's done, let's go into Intune. Now remember, in order to make this go, there's three
things that need to happen. The license files need to be delivered, the client-side extension needs
to be delivered, and now what we're going to do is we're going to add in this application, which is
a line of business app. We'll go ahead and click Select here. Select our app package file from the
desktop that we created earlier. That's on desktop EXP3. There's our MSI.

This is on the device side, very good. Go ahead and click Next. We need to give it a name. We'll
call this PP Company1. Any other things we need to do? No.

Now what we'll do is we're going to add this to – I'm just going to keep this simple and add it to
all devices. You can target it based upon device group. That's totally fine. Go ahead and click Next
and go ahead and click Create.

I've locked and loaded this in. If I go back to apps, remember the three things that need to make it
go. Let me go back to Windows apps here. The three things that need to make it go are the license
file, the client-side extension, and the final upload, here we are, of our settings. That's
automatically getting refreshed as we speak.

With that in mind, we'll go back over to our machine. We'll go ahead and click here, and we'll go to
info. Let's give this the little synchronize that we need to make this work. Now that this is done,
remember, this can take a variable amount of time, depending on how fast or slow your MDM service
wants to go. Let's go ahead and close all this out.

I'm going to take out the good USB stick. Let's put in an evil USB stick and see what happens. There
we go. It's being managed by Endpoint Policy Manager Device Manager. Read, write, and execute, no.
Why is that? It's different than what we said. This person can't do a thing.

If we were to go over here and take a look what's on this interesting USB stick, we don't know.
There's all sorts of weird stuff on here. Let's double-click it and see what happens. You can't do
that.

Let's try to copy this configuration file over to the desktop. No, we can't do that. If we were to
try to copy something in, we can't do that. We've blocked it. We've blocked that USB stick.

Let's go ahead and put in the good USB stick, the one that meets the correct vendor criteria. There
we go. We can see that we are being managed. We've got read access, which is exactly what we said we
wanted. If we were to try to read something off of here, we'll go ahead and double-click this guy.
What happens? You've got read access, so you're good to go.

If you try to write something from the desktop over to this USB stick, you've blocked it. This is
not something that you can do inside of Intune or other MDM services. This is an add-on superpower
only available to you with Endpoint Policy Manager. There you go. I hope this helps you out. Looking
forward to getting you started with Endpoint Policy Manager and your MDM service real soon. Thanks
so much.


