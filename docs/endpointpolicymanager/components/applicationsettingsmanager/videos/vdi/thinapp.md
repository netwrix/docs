---
title: "Endpoint Policy Manager and VMware Horizon View with ThinApp Assigned Packages"
description: "Endpoint Policy Manager and VMware Horizon View with ThinApp Assigned Packages"
sidebar_position: 50
---
# Endpoint Policy Manager and VMware Horizon View with ThinApp Assigned Packages

Using VMware Horizon View, administrators can assign ThinApp packages to pools or desktops.

When dynamically assigned in this way, users get the ThinApp packages when they log on to the
machine. However, users are instantly able to work around any pre-configured settings within the
package.

Critical IT and security settings can always simply be worked around by the user. That's where
Netwrix Endpoint Policy Manager (formerly PolicyPak) fits in and dynamically delivers important IT
and security settings and ensures they cannot be worked around.

To see a video of ThinApp assigned packages via VMware Horizon View and Endpoint Policy Manager
managing them, watch this video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/yEmivwu7YYw?si=nB_Ro39Fo5YWVqHO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager and VMware Horizon View with ThinApp Assigned Packages

Hello, everybody, and welcome. This is Jeremy Moskowitz, former Group Policy MVP and Founder of
PolicyPak Software. In this series of videos, we're talking about how PolicyPak is the missing tool
in the VMWare Horizon View Suite.

Specifically, in this video, we're going to learn about how you can deploy actual settings inside
your ThinApp packages when those applications, those ThinApp packages, are deployed using VMWare
Horizon View Administrator.

Now, there are actually three basic ways that you can deploy ThinApp packages. This is way number
two. In another video, we talked about how if you want to you can just put the application directly
into a VDI image or in a physical machine.

But in this particular demonstration, I'm going to show you how I'm going to take my ThinApp
packages the are registered in VMWare Horizon View, then I'm going to associate them with particular
pools, and then I'm going to use PolicyPak to deliver settings and lock those puppies down.

For starters, let me go ahead and go over to "Mozilla 21 Thinapp" here, and I want to double-click
on this guy. I want to assign this to a particular pool ("Assign Pools"). I'm going to pick my
"Floating16" pool and assign it there. This is a "Full" package, which the alternative is
"Streaming." I think one of the other packages is streaming, so I'll go ahead and try to find that.
We're assigning "Mozilla 21" over to our "Floating16" pool here.

Let me go back and let me go to "Adobe Reader XI Thinapp" here as well. I'm going to add the
assignment to the same pool ("Assign Pools"). There we go. This one is a "Streaming" type package,
and I'm going to add it again to my "Floating16" pool right here. That's it.

Let's just go ahead and just start right there and see what occurs. Let me go ahead and click on
over to my Group Policy Management Console. Let's do some things that affect the user so no matter
where the user goes he gets affected and some things that will affect the entire pool so whoever
hits any of the machines in the pool gets affected.

Let's start off with the user side. Let's do this, and we'll call this "Manage Acrobat XI (Real and
ThinApp)." Like I said, we're going to do this on the user side so everyone is going to be affected
by this. All these users, these West Sales Users, will be affected by this edict.

We'll go ahead and select "New/Application." PolicyPak ships with over 100 preconfigured Paks to
manage most applications. I happen to have a handful of them snapped in here like "Acrobat Reader X"
and "Adobe Reader XI" and "Mozilla Firefox" and "Lync 2013," but there are a zillion others. I'm
just going to go ahead and select "PolicyPak for Adobe Reader XI" for starters here.

Let's make sure that we can make this machine as secure as possible. We don't want "Enable Acrobat
JavaScript" selected. That's checked by default inside the app, and we don't want that. We're going
to uncheck that, and we'll also "Disable corresponding control in target application." We'll also go
to "Security (Enhanced)" and make sure that "Enable Enhanced Security" is in fact always on and also
users can't work around it.

Lastly, maybe somebody forgot inside the package to not have Acrobat auto update. Well, instead of
taking that package out of service, putting it back through the process and redeploying it,
necessarily taking computers offline during that process, instead you can simply just dynamically
inject the correction right into the package. For this application, I want to "Do not download or
install updates automatically." I'm going to also "Disable corresponding control in target
application."

Also while I'm here, we added a couple of extras here. It only took a second. If we want to, we can
also "Prevent EULA from appearing" automatically, which is nice. As soon as users log on, the EULA
is pre-accepted for them. And of course, we don't want to be asked to participate in the Adobe
Acrobat customer experience program ("Prevent being asked about participation program"). We'll go
ahead. We'll click "OK," and all those settings are locked and loaded on the user side.

Now for the pool itself, now let's also "Create a GPO in this domain, and Link it here…" that
"Manages Firefox (Real and ThinApp)." That is a very common situation where you might have embedded
one particular version of Firefox inside the VDI image, but then you have another version that you
have via ThinApp. In that way, you might want to ensure that some particular security settings or
look-and-feel settings are always the same for both versions.

I'm going to do this on the computer side. On "PolicyPak/Applications/New/Application," I'll select
"PolicyPak for Mozilla Firefox." Then for the "Home Page" I'll change this to "www.policypak.com."
While I'm here, I will also "Lockdown this setting using the system-wide config file." This is going
to guarantee that users can't work around this setting.

Same thing for these "Security" settings, these checkboxes here. I definitely want to make sure that
these checkmarks are checked and also "Lockdown this setting using the system-wide config file" so
users can't work around them.

Now that I've locked and loaded these directives – one on the user side, one on the computer side –
let's go over to my Horizon View client and log on as a guy called "westsalesuser3." We'll go ahead
and select "Floating Linked Clones" here, which is one of our pools. It's going to, of course, pick
one of the random VDI sessions in the pool.

Now that the VDI session is launched and loaded, it looks like the user has access to multiple
versions of the same app, but actually that's not really true. This version of "Acrobat Reader X" is
prebaked into the gold image here. If I hover over it, you'll see that it shows you that it's
installed on "C:Program FilesAdobeReader 10.0Reader." This Firefox is actually the same way. It's
preinstalled into the gold image as "C:Program FilesMozilla Firefox." But this guy here, this is
"Adobe Reader XI (Thinapp)" and this is "Mozilla Firefox21 (ThinApp)."

For fun, let's go ahead and see PolicyPak do its magic once we run the ThinApp application ("Adobe
Reader XI"). First things first, no EULA because PolicyPak delivered the setting to say, "Thanks,
but no thanks," to the EULA. So right out of the gate, even if you might have forgotten to do that
inside your ThinApp package, the best part is we're dynamically delivering the settings on the fly
right at logon time.

If we go to "Edit/Preferences…" here, let's make sure that some of the other settings that we set
earlier are in effect. If we go down to "JavaScript," remember we wanted that unchecked and locked
down and that's exactly what we did. PolicyPak delivered uncheck and it locked it down.

If we go to "Security (Enhanced)," we deliver the checkmark of "Enable Enhanced Security" and also
lock it down. If you remember "Updater," well, once again somebody might have forgotten to do this
inside the package. Instead of taking the package offline, rejiggering it and putting it back into
production, PolicyPak is injecting the settings directly, dynamically, and also locking the settings
down so users don't get annoying popups or other weird behavior that you don't want them to have.

Let me go ahead and close out Adobe Reader here, and now let's take a look at Firefox. I want to
launch each version of Firefox and show you what's actually happening. Like I said, this one
("Mozilla Firefox") is prebaked in, and this is a really old version of Firefox. If I take a look at
"Help/About Firefox," this is version "6.0."

If I take a look at the one that's distributed through ThinApp and VMWare View – "Mozilla Firefox21
(ThinApp)" – this one is a lot newer, and this is version 21. If I go to "Help/About Firefox,"
that's version "21.0"

The key point is, let's take a look back at version 6 again. If I go to the "Options" here, right
there you can see that the "Home Page" is being set by "www.policypak.com" and it's locked down so
users can't work around it.

If we go to "Security," those settings again are being delivered. You saw me configure this
particular Group Policy Object with PolicyPak directives so that anyone in the pool will get exactly
the same settings.

The ultra-best part here and what I really am trying to show is that it doesn't matter if the
version is real or virtualized using ThinApp. PolicyPak is special, and we can get into the virtual
bubble and deliver the settings right into the ThinApp version or the real installed version. That's
it. That's how easy it is to get PolicyPak to deliver settings to your real applications or your
virtualized applications when you use VMWare View to inject your ThinApp applications.

Now I have one more thing to share with you before I say goodbye in this video, which is the
interaction between PolicyPak and VMWare View Persona Management. The idea is that if a user goes to
an application and they want to make a settings change themselves, for instance, in this example
I'll go to "Edit/Preferences…" here, and perhaps this user wants to change the "Units" from "Inches"
to "Centimeters."

OK, great, so they've changed that. Well, what's your expectation the next time they log on? Well,
it's VMWare View Persona Management that's going to preserve that setting. I'm going to go ahead and
"Log off" here. As soon as I do, I'll pick another machine to log onto here in the virtual pool
here. I'll log on as the same user. I'll get a different machine in the pool, and PolicyPak will be
delivering the IT administrator's desired settings. VMWare View Persona Management will be
preserving the user's requested preference style settings.

In this way, we have a fantastic better together story. The user's changes, anything they want to
make, that's great. That's preserved. And anything the IT administrator wants to dictate, that is
also ensured, maintained and automatically remediated in case a user tries to work around it.

Here's our new desktop. I think ThinApps are still installing. Some of them are streaming. Let's go
ahead and just run "Adobe Reader XI (Thinapp)." There we go. There was "Mozilla Firefox21 (ThinApp)"
popping in. Now let's go to "Edit/Preferences…" again and see what has occurred. Great. This is
exactly what we expect. VMWare View Persona Management maintained this setting for the user.

Now, you might be asking yourself, "What if there's a conflict between PolicyPak and VMWare View
Persona Management?" Let's actually show what that looks like here. In order to do this, I'm going
to go back over to my "DC" here. I'm going to go back over to "Manage Acrobat XI (Real and ThinApp)"
using PolicyPak, and I will dictate the exact same setting here.

What I'll do is I'll go into "Adobe Reader XI," go over to "Units" and I'm going to change this to
something. Maybe our corporate standard it "Millimeters" and we want to right click and also
"Disable corresponding control in target application" so users can't work around it. We'll go ahead.
We'll click "OK" here.

We'll go back to our example machine. Now, the user could simply log off and log back on and get a
new machine, or they could wait for Group Policy to kick in in the background, which is every 90
minutes or so. I just happen to be manually kicking off Group Policy Update with "gpupdate," and
this is built into the operating system.

Now that that has occurred, PolicyPak has actually set the setting. Even though the user had their
own desire, PolicyPak is for the administrator to put their desires on, and in that case we will
win.

Let's take a look. We'll go ahead and run "Adobe Reader XI (Thinapp)" and go to "Edit/Preferences…"
here. There it is. Our corporate standard of "Millimeters" is set and it's grayed out so users can't
change it, which is exactly what we wanted.

In this way, there is some interaction. The point is that VMWare View Persona Management enables
users to roam the settings that they want, but PolicyPak delivers and guarantees IT settings so
users can't work around them.

That's about it. If you have any other questions about this, I hope you watch some of the other
videos in this series. Get in touch if you're looking to get started with a trial.

Talk to you soon.


