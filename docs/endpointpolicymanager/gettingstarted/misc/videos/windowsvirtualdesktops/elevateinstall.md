---
title: "Endpoint Policy Manager + WVD: Elevate the installation of the Remote Deskop app"
description: "Endpoint Policy Manager + WVD: Elevate the installation of the Remote Deskop app"
sidebar_position: 20
---

# Endpoint Policy Manager + WVD: Elevate the installation of the Remote Deskop app

Users cannot auto-update the Remote Desktop app for Windows Virtual Desktop. With Netwrix Endpoint
Policy Manager (formerly PolicyPak) though, this is a slam-dunk. See how users on their own laptops
can keep the WVD Remote Desktop app updated themsevles.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Q_LEsCNQlQg" title="Endpoint Policy Manager + WVD: Elevate the installation of the Remote Deskop app" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Users cannot auto-update the Remote Desktop app for Windows Virtual Desktop. With Netwrix Endpoint
Policy Manager (formerly PolicyPak) though, this is a slam-dunk. See how users on their own laptops
can keep the WVD Remote Desktop app updated themsevles.

Hi. This is Jeremy Moskowitz, former 15-year Group Policy MVP and Founder of PolicyPak Software. In
this video, we're going to learn how to keep the "Remote Desktop" MSI upgraded.

In a previous video, this machine here represents my laptop. Maybe it's a Surface Pro or maybe it's
a desktop, whatever. That's fine. This is a machine that we're going to use to connect using WVD's
client called Remote Desktop.

The very first time I ran it here—in fact, let me go ahead and show you here—if I run "Remote
Desktop," it works fine. We saw that I was able to get access to some of my applications. But look,
it says, "There's a new version available, click here to install."

Now I'm logged on as a standard user. When you go ahead and click "Next," "I accept the terms in the
License Agreement," and "Install," you're going to get prompted for a UAC prompt which is not good.
Said another way, standard users have no way to upgrade this themselves even when there's an update
to be had.

But using PolicyPak Least Privilege Manager, this becomes very easy to do. Now in a previous video,
you saw me install the PolicyPak moving part called the client-side extension on the endpoint over
here. The endpoint meaning my real laptop that's going to be connecting to WVD. I also have the
PolicyPak client-side extension inside my WVD virtual machines as well, but that's actually not
really involved here.

The other thing I have to get this demo going is a copy of the "RemoteDesktop.msi." What I'm going
to do is create a PolicyPak Least Privilege Manager rule that says whenever a standard user needs
to, have them automatically elevate that so that way they can do this themselves.

I'm going to do this for my entire "Sales" team. I can do this on the user or the computer side. I'm
going to do this on my "East Sales Users" side. So whenever any of my "East Sales Users" log on, I'm
going to "Create a GPO in this domain, and link it here" that says "Let Standard Users update their
own WVD Client."

I'm going to right click over here and click "Edit" here. Remember, this is my on-prem domain
controller, although it doesn't have to be a domain controller. This could be just any machine that
has the GPMC installed on it. When you do that, you have the "PolicyPak" node here and the
"PolicyPak" node is what gives you the ability to create PolicyPak directives.

What we'll do here at this point is hustle on down to the "Least Privilege Manager" node. This is
what gives us the ability to bypass and overcome UAC prompts. I'm going to "Add" a "New Windows
Installer Policy."

I'm going to create what's called a combo rule ("Use combo rule"). A combo rule is very secure.
We're going to say if the "Signature" is by Microsoft and the internal "Product info" matches
certain characteristics, then it's clear for takeoff.

I'm going to "Select windows installer." Now remember, I pre-downloaded it before I got started
here. It asks, "Do you want to automatically fill the values from the selected file for product
conditions?" Select "Yes." You can see it's signed by "Microsoft" and the internal product info has
the following items.

We want to make this "Higher or Equals." The idea is that whenever any new version comes out, we're
just clear for takeoff. So if a higher version comes out than this, we're off to the races. We'll go
ahead and click "Next."

We're going to "Run with elevated privileges," not the application itself, just the installer. We're
going to go ahead and let this thing do its thing and go ahead and click "Finish." That's all there
is to it.

We'll go back over to our real machine here and we'll run GP Update ("`gpupdate`"). Let's go ahead
and do that now. We'll give this a second to catch up. And then again, this is just getting the
Group Policy

Object from the domain controller, hitting my real machine, and then we're going to see some magic
happen. All right, that's all there is to it.

Now if we were to go back to our Windows Virtual Desktop launcher application, the one that
Microsoft supplies, "Remote Desktop," we'll still get the ability to select, "There's a new version
available, click here to install." Now we're just a standard user and we're off to the races just
like that. No more UAC prompt. It just installs, no brain power involved. The user does not need to
be a local admin or anything like that.

They're just off to the races.

And that's it. Let me go ahead and relaunch it just for fun. The user has then actually successfully
completed the goal of keeping their own "Remote Desktop" up to date just like that.

All right, hope this video helps you out, and continue onward to the next video.

