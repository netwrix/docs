---
title: "Endpoint Policy Manager and VMware Horizon View – Dedicated VDI"
description: "Endpoint Policy Manager and VMware Horizon View – Dedicated VDI"
sidebar_position: 30
---
# Endpoint Policy Manager and VMware Horizon View – Dedicated VDI

You already know that VMware Horizon View enables your users to have their own unique "full desktop"
available to them, remotely or locally, and run any application they need to. Users really get their
"own operating system" and applications just "run perfectly" because they're really running on their
own operating system.

But you still have a major problem: Users get the apps they need, but you've got zero control over
how your users' applications are configured.

That's where Netwrix Endpoint Policy Manager (formerly PolicyPak) comes in.

In this demonstration see Endpoint Policy Manager working inside your dedicated VDI sessions
ensuring that your application settings are set dynamically and always ensured.

<iframe width="560" height="315" src="https://www.youtube.com/embed/FoAH2LRZpBw?si=t2hnjADcFsx8_OnL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager and VMware Horizon View – Dedicated VDI

Hello, everybody, and welcome. This is Jeremy Moskowitz, former Group Policy MVP and Founder of
PolicyPak Software. In this series of videos, I'm demonstrating how PolicyPak is the missing tool
for your VMWare Horizon Suite implementation.

Now in this particular video, we're going to be talking about how PolicyPak can help you manage the
applications when you're using dedicated pools. I'm going to log on as a guy called
"westsalesuser8." In doing so, I'll be able to pick a pool that he has access to. In this video, I'm
going with my "Dedicated" pools. We have other videos for the floating linked clones, but in this
one I want to talk about dedicated pools.

When it comes to having dedicated VDI machines, you are at a distinct disadvantage because when a
user makes a settings change, that settings change will stay with them for the end of time. Until
you've refreshed the machine, and then they're very frustrated with that refresh experience. When
you add PolicyPak to the mix, you're able to dictate precise settings for your applications and
guarantee them so you know users won't get into hot water.

Here we are at a user's dedicated VDI desktop. When they're on their VDI desktop, there's really a
huge variety of things that they can do to get themselves a) into hot water but b) you might want to
ensure that particular IT settings are guaranteed and dictated.

For instance, say in "WinZip" you might want to guarantee a particular set of configuration. You
might want to guarantee "Minimum password length" is "11" instead of leaving it up to chance or
letting them do things like this, and now they've worked around your settings. Just to prove a
point, a user unchecks some checkboxes, lowers the security on a particular application, and that
stuff is maintained. There's nothing in the box that VMWare provides that will enable this to be
maintained.

Same thing for settings like "Mozilla Firefox." If you want to dictate particular settings from
Firefox or any of your other applications. This is where PolicyPak kicks in. By way of example, if
we go to "Options" here, you might want to set a universal "Home Page" or guarantee particular
"Security" settings. Again, there's nothing preventing a user from just working around your
settings, and now you're less secure.

This is where PolicyPak kicks in. Let's go ahead and go to our Group Policy management station. For
all of our "West Sales Users," we can "Use PolicyPak to Dictate Winzip Settings." We'll do WinZip
here on the user side. I'll go to user side "PolicyPak/Applications/New/Application." PolicyPak
ships with over 100 preconfigured applications. I'm just going to be using "PolicyPak for WinZip 14
and Later" for now. I've got a bunch of the other snap-ins snapped in here, but I'm going to just
pick WinZip here and go right for it.

I'm going to set this to "16" character passwords. While I'm here, I'm going to check all four of
these checkboxes. I'm going to "Hide corresponding control in target application" and "Disable
corresponding control in target application" for user configuration changes. You can also right
click over tabs and "Disable whole tab in target application."

For an extra set of security, you can also "Perform ACL Lockdown," which will prevent even registry
savvy users from being naughty and working around your settings in the registry, or if it's a
file-based application, where the file lives.

I'm going to do that on the user side. On the computer side, you see here I've got my dedicated VDI
machines in their own OU. This is perfect. I'm going to right click over that and "Create a GPO in
this domain, and Link it here…" called "Manage Firefox for my Dedicated Pool."

If you want to, what I'm driving at is that on the user side they could have their user settings
roam with them to virtual machines or real machines. And here, because I'm associating this
particular Group Policy Object with just this particular OU that contains the machine accounts for
the VDI session, you can dictate settings just for when they're in the VDI.

We'll just go over to computer side, go over to "PolicyPak/Applications/New/Application" and we'll
go ahead and pick "PolicyPak for Mozilla Firefox." If we want to set the "Home Page" to
"www.dedicated.com," and we'll right click over and we'll "Lockdown this setting using the
system-wide config file." We'll go over to "Security" here, and we'll "Lockdown this setting using
the system-wide config file" these guys as well, make sure that these are set. You saw me work
around these as a user, but with PolicyPak I'm going to dictate those settings.

Let me go back to my dedicated desktop here. Before I run GPUpdate, I'm just going to show you
before picture and after picture. We'll go over to "WinZip" here. We'll see the before picture shows
that the user has been naughty and they've worked around your configuration changes and things are
really low security.

Then if we go to "Mozilla Firefox," well, there's nothing really set here yet. If we go to
"Firefox/Options," they've worked around those security settings too. I guess they've been naughty
there, and there is no "Home Page" set.

Now because PolicyPak works alongside Windows and Group Policy, the next time Group Policy refreshes
either when they log on or when Group Policy is updated in the background, that's when this kicks
in. Because of that, it's always ensuring that these settings are consistently refreshed over and
over again.

Let's go ahead and run "WinZip" here for starters. Go to "Options/Configuration…" here, go to
"Passwords" and there we go. We've dictated the settings. In fact, you can see I've ensured that
some settings are guaranteed as policy, but I've made others as preference. When I click "OK" here,
it's guaranteed to reapply however when the application is rerun. So PolicyPak is consistently
working, and you're going to see this in the next video again when we make the machine offline with
local mode. So PolicyPak is always working.

Regardless, you can also go to "regedit" here as a standard user. Again, I'm not an admin; I'm just
some standard guy. If he goes to "HKEY_CURRENT_USER/Software/Nico Mak Computing/WinZip/Policies"
here, you can see PolicyPak is locking this down. Because of that, a user tries to be naughty and
tries to really, truly inadvertently work around your setting or there's a script or some other
nasty thing happening and it tries to change that portion of the registry, PolicyPak is always
working and locking it down so users can't work around it.

Let's go ahead and go over to my "Mozilla Firefox" here. What we're going to do is we go to
"Firefox/Options." There it is, "www.dedicated.com" as we expected, and the settings are set there
as well. Just to prove a point, I really want to prove that this is dedicated, so I'm going to
create a "New" "Rich Text Document" here called "Hello World 2." "Hi!"

Now what I'm going to do is I'm logged on as the guy "westsalesuser8." What I want to do is I want
to log off and I want to log back in as westsalesuser8 and show you that the PolicyPak settings will
work with both what we saw in the last video which is floating linked clones and in this video which
is dedicated VDI machines.

We'll go ahead. We will pick our "Dedicated" machine here. Broker is doing its thing, "Welcome."
"Persona Management" as we saw in the last video will do a fantastic job for the settings that the
user has made their own, but PolicyPak runs and will ensure that any setting that you want to change
dynamically will always be set and changed dynamically.

There it is, "Hello World 2." We'll go ahead and run "WinZip" here, and we shall see. Go ahead and
go to the "Options" here, and you can see the settings are set there just the way we expect. If we
go to "Mozilla Firefox" here, we will also see that the Firefox settings are dictated using
PolicyPak.

That's it. That gives you an example of how to use PolicyPak alongside your VMWare Horizon View
dedicated VDI machines. If you have any questions about this, we're happy to help and look forward
to getting you into a trial soon.

Thanks so much.


