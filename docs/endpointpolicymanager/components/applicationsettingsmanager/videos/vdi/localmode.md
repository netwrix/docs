---
title: "Endpoint Policy Manager and VMware Horizon View – Local Mode VDI"
description: "Endpoint Policy Manager and VMware Horizon View – Local Mode VDI"
sidebar_position: 40
---
# Endpoint Policy Manager and VMware Horizon View – Local Mode VDI

When your users are away, you can guarantee that they'll play … play around with their desktop
settings. With Netwrix Endpoint Policy Manager (formerly PolicyPak) in use with your VMware Local
Mode clients, you'll have the advatage.

Endpoint Policy Manager ensures that your required IT settings are always adhered to, even when the
user is 100% offline using Vmware Horizon View Local Mode.

Watch this video to check it out.

<iframe width="560" height="315" src="https://www.youtube.com/embed/MEIuC5DcA7I?si=inVb6tE1R24wQ_0r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager and VMware Horizon View – Dedicated VDI

Hello, everybody. This is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak
Software. In this video series, I'm going to be demonstrating why PolicyPak is the missing tool in
the VMWare Horizon View Suite.

In this particular video, we're going to be talking about how PolicyPak really helps manage
applications if you make them available to your dedicated VDI machines when running in local mode.

Let's just set the stage. Let's take a step back, and let's actually use PolicyPak inside the Group
Policy Editor and manage our users. I'm going to "Create a GPO in this domain, and Link it here…"
and we're going to "Manage Winzip via PolicyPak."

We're going to right click over this guy and click "Edit" here. PolicyPak snaps right into the Group
Policy Editor administrators know and love. There are over 100 preconfigured Paks to manage your
existing applications. I happen to have some of them already ready to go here, but they're easily
swapped in and out.

For the purposes of this demonstration, I'm using "PolicyPak for WinZip 14 and Later." I'm going to
go ahead and click on this guy and select some settings that I want to dictate to my users. In the
first video, I demonstrated how Persona Management helped maintain users' desired changes, but
PolicyPak's major job is to guarantee your desired changes. If you want to dictate particular
settings changes, this is how you do it. You use PolicyPak to do this.

You can also right click over individual settings and "Hide corresponding control in target
application" or "Disable corresponding control in target application" as well as "Perform ACL
Lockdown." What this will do is guarantee these settings cannot be worked around even if the user is
very savvy and knows exactly where to go in the registry.

I'm going to go ahead and select the settings here, and I'm also going to "Hide corresponding
control in target application" and "Disable corresponding control in target application" for some of
these settings. I'm also, while I'm here, I'm going to "Disable whole tab in target application" for
the "Cameras" tab in WinZip.

If we go over to my real machine if this were my laptop here, then I wanted to use my "VMWare
Horizon View" client and pick my "Dedicated with Local" machine. I'm going to log on as a guy called
westsalesuser9. When westsalesuser9 logs on for the first time, he's going to get all of the
settings that are dictated from PolicyPak.

We'll log on as this guy "westsalesuser9" here, and we'll pick his dedicated pool that he has access
to. That's right here, "Dedicated with Local." PolicyPak kicks in the first time somebody logs on
and also in the background. We work with "VMWare View Persona Management." You just saw that run
just there. That helps with users' changes when they make their own changes, and PolicyPak is what
dictates your (the administrator) changes.

We're going to see as soon as we log on when we take a look at "WinZip" here, we should see the
settings we just dictated to WinZip. Again, PolicyPak ships with about 100 preconfigured
applications for you to manage like Firefox, Flash, WinZip and tons of other stuff.

Here you go. You can see we've dictated "17." We've checked all four checkboxes. I've grayed this
checkbox out so there's nothing that the user can do to click on that. We've definitely let users do
some preference things but also some policy things. PolicyPak can be used in both of those fashions
to either guarantee things or to let users work around settings as needed. You can see "Cameras" is
completely grayed out.

Now while we're here, let's go ahead and take the VMWare Horizon View client and let's set it up for
"Check Out Desktop." When we check out the desktop, we're saying we want to go completely offline.
Actually, before I do that, let me create a "New" "Text Document" called "hello world 3." "Hi 3!"

Now let's go ahead and check this out. I will "Check Out Desktop." Save my unsaved work here. At
this point now, I'm saying that I do want to check out the desktop, which means that this VDI
session can now go completely offline and a user is able to work and do whatever they want and make
whatever changes they feel are important to them.

The best part of what I'm about to show you is that PolicyPak keeps working even when the user is
offline. If a user makes a particular settings change and it's not part of your compliance regimen,
PolicyPak is continually and always working even when the user is offline. I'm going to go ahead and
pause the video here, and we'll wait until this is done checking out. Then we'll go ahead and
continue up in local mode, so hang on.

Now that that's completed, what I want to do next is actually thoroughly disconnect the network
cables. Let me go ahead and show you that I'm going to do that. Just to prove a point, I'm going to
"ping dc." Here I am pinging the DC away.

I'm going to disconnect the network cables off camera. You won't see me do that, but now that the
network cables are disconnected let me go ahead and rerun that ping. I'll just rerun "ping dc" and
utter failure on purpose because now I'm thoroughly offline. I just want to show you that my VM is
completely offline.

Now I'll go ahead and click on "Connect" this time, and it's going to "run desktop locally." Here we
are "Starting Windows." You can see we're using the VMWare player basically with our "Dedicated with
Local" mode VM.

Let's go ahead. We'll "Send Ctrl-Alt-Delete" here. We'll log on as our "westsalesuser9." The first
thing you're going to see is the "VMWare View Persona Management" fly by – the VMWare View Persona
Management first. Here we are.

Now the first thing is that you can see that there's a little pop up that says: "VMWare View Persona
Management – Local Mode is not a supported configuration." That's OK because, remember, PolicyPak
and VMWare View Persona Management don't try to accomplish the same goal.

Remember, what VMWare View Persona Management is trying to do is it says if users make a change,
then those changes are preserved. PolicyPak is saying that what you, the administrator, dictates,
that is what is going to be guaranteed.

You saw me dictate WinZip settings. Here we are completely offline. Let's go ahead and see what
happens if we go to "Options/Configuration…" here in WinZip. We'll go to "Passwords," and you can
see the configuration changes that we wanted are still there. If the user tries to do something
naughty like change these settings and click "OK," the next time they rerun the application those
settings are guaranteed to be there again.

Additionally, let's go ahead and close this out. Let's go back to the registry. Again, we're just a
standard user here, no admin rights. If we go to "HKEY_CURRENT_USER/Software/Nico Mak
Computing/WinZip/Policies" here, PolicyPak has locked down these particular registry settings. If
some out of control process or virus or just a very savvy user knows what they're doing and they try
to change these things and be naughty inside the registry, they are prevented and not allowed to do
that.

The point of the story is PolicyPak continues to dictate, enforce and automatically remediate and
continuously lockdown your applications even if the machine is offline. If we want to, we can modify
files like here: "Hello again!" Now we're offline, and the user does everything they want to do and
when they're ready to connect back to the network and check it back in – well, let's go ahead and do
that.

I'm going to go ahead and "Log off" here. I'm then going to reconnect the network cables. I'm doing
this off camera. You won't be able to see me do that, but I'm reconnecting the network cables here.
You can see on my real machine here, I can now "ping dc." Here we are. We're back online at this
point.

Now what I'm going to do is I'm going to check back in my desktop. I'm going to "Shut Down Guest"
here. Now you can see that I was logged in with a local desktop. I'm now ready to "Check In."
Checking it back in is no big deal because the user has done their work and we're ready to get back
online and get it back on the server for another round of this.

The point is that PolicyPak continues to work both online, as we saw earlier, and offline. It works
for floating linked clones and also dedicated machines with local mode. Remember, PolicyPak's job
doesn't compete with what VMWare View Persona Management does. VMWare View Persona Management's job
is to make sure that when users change their own settings that that stuff is preserved.

That's great, but if you the administrator have settings for your applications and you want to
guarantee those settings, only PolicyPak is going to be able to dictate those settings and
continually ensure that those settings are delivered, enforced, secured and automatically remediated
even when the computer is offline.

I hope this has been a helpful video for you. Go ahead and check out the other videos in our VMWare
missing tools series.

Thanks so much, and talk to you soon.


