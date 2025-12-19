---
title: "Instantly Put the smackdown on USB sticks and CD-ROMs"
description: "Instantly Put the smackdown on USB sticks and CD-ROMs"
sidebar_position: 10
---
# Instantly Put the smackdown on USB sticks and CD-ROMs

With Netwrix Endpoint Policy Manager (formerly PolicyPak) Device Manager, it takes one policy to
immediately put the smackdown on USB sticks and CD-ROMs. Yep, it's that easy.

<iframe width="560" height="315" src="https://www.youtube.com/embed/eOroAq0Wakg" title="Endpoint Policy Device Manager: Instantly Put the smackdown on USB sticks and CD-ROMs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz, founder and CTO of Endpoint Policy Manager Software. Hey, look, I just
found this USB stick in the parking lot. Let me go ahead and double click on it and see what's
inside. Remember, this is exactly what your users are doing. They find a USB stick or they have
something at home or they got it at a trade show. They just start clicking on stuff... Here's some
malware that could take over your machine. Here's something more sophisticated like a ransomware
simulator. That's not bueno. That's now taking over the network. PowerShell Malware or JAVA Malware,
who knows what's on the USB stick. Your job is to try to block both USB stuff and evil CD-ROMs.
Here's a CD-ROM that I've put in the CD-ROM drive. In this first video, I'm just going to show you
how to put the smackdown on all CD-ROMs and USB sticks just like that. Then in other videos I'm
going to show you the real power of Device Manager – Endpoint Policy Manager Device Manager, which
enables you to open it up for specific use cases.

This video I'm showing you how to use the Group Policy method to deploy your settings. Again, in
other videos, I'm going to show you how to use your MDM service like InTune or our cloud service to
do so. We're going to create a new Global Settings policy here, and I'm going to just Block all
USB/DVD devices. This is the master on switch. We have a couple little extra flags here to help you
along the way. One of my favorites is show how many times somebody puts in a USB stick. I'm going to
jack this up to five, so if I keep taking – putting in and unplugging a USB stick, they'll see this
five times. You can also change the default messages. I'm going to leave those here. You can
customize it with variables and so on. I'm just going to keep it simple. One policy. Boom. You are
done.

Let's go over to the endpoint machine. Go ahead and run gpupdate. Give this a second to catch up.
There we go. You can see that because we set the flag for let users know when policy changed, you
can see we've got the JetFlash Transcend drive, Volume E and others. What's happening here? No Read.
No Write. No Execute. Let's go ahead and click OK here. USB stick is still in the drive. Let's go
ahead and go to that one first. Here's the USB in the parking lot. If we were to go to that JAVA -
Malware. Let's go find that JAVA - Malware again. Does that run? Nope. Can't do that. Let's try to
open up one of these files by right-clicking and going to Notepad++. What're we going to get here?
Not that file. You can't access that. That's not available to you. If you were to try to take a look
or try to run anything else, let's try to install some application. What do we get from that? That's
going to be blocked. What if we try to copy something from there to the desktop? What do we get from
there? We're not allowed to do that. What if we try to copy something from the desktop over to the
USB stick? Can't do that. That is it. We put the smackdown on it.

Let's go ahead and take a look at the CD-ROM as well. If we were to try to take a look at this text
file here – same idea on the CD-ROM – what do we get? That's blocked. All the same exact activities.
You try to copy to and from, try to execute, read and write, you can't do anything. It's all
blocked, okay? In the next video, I'm going to show yo how you can open up the doggy door for some
specific cases. For instance, the next videos are going to show you how you can allow one user to do
whatever they want with any USB sticks, one trusted user. In another video, I'm going to show you
how you can open up one user for specific USB sticks by serial, and then I'll also show you some
other magic tricks with exporting to MDM and our cloud service. Go ahead and watch the rest of the
videos. Looking forward to getting you started with Endpoint Policy Manager Device Manager real
soon.


