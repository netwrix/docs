---
title: "Endpoint Policy Manager and VMware Horizon Workspace Applications and ThinApp Entitled Packages"
description: "Endpoint Policy Manager and VMware Horizon Workspace Applications and ThinApp Entitled Packages"
sidebar_position: 60
---
# Endpoint Policy Manager and VMware Horizon Workspace Applications and ThinApp Entitled Packages

VMware Horizon Workspace can make available and enforce who has access to ThinApp applications, when
computers have the VMware Horizon Workspace agent installed.  
VMware Horizon Workspace's delivers and entitles the applications' useage.

Netwrix Endpoint Policy Manager (formerly PolicyPak) adds to that the ability to manage the actual
applications' settings and keep those settings consistently enforced and automatically remediated.

In this way, you can now provision the ThinApp (with VMware Horizon Workspace) and now manage the
application itself. Endpoint Policy Manager dynamically delivers IT's desired application settings
based upon the user's circumstances, and ensures those settings on the computer.  
Video: To see a video of VMware Horizon Workspace ThinApp applications' settings managed by Endpoint
Policy Manager, watch this video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/OkN8tc9L8aI?si=yGSd_Rm5LJjNLKHo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager and VMware Horizon Workspace Applications and ThinApp Entitled Packages

Hello, everybody, and welcome. This is Jeremy Moskowitz, former Group Policy MVP and Founder of
PolicyPak Software. In this series of videos, we're describing how PolicyPak is the missing tool for
VMWare Horizon administrators.

In the last couple of videos, we've been demonstrating how PolicyPak works perfectly with ThinApp
applications. The one video, we talked about if you've got your ThinApp applications embedded in
your image or on physical machines. In the second video about ThinApp, we talked about how it works
perfectly if you're using VMWare View to assign those applications. In this video, we're
demonstrating how if you're using VMWare Horizon Workspace – particularly the applications part of
it where you can sling VMWare ThinApps to your members – then we also work perfectly there as well.

Let's go ahead and get started. Let's take a look at my configuration. We'll start over here, I
guess. We're using the "VMWare Horizon Configurator" here. We've got "ThinApp Packages," and those
ThinApp packages have been allocated accordingly and uploaded to the VMWare Horizon Workspace
server. Then they are entitled to the particular users that we want. That's all done. The next thing
you can see here is what it looks like to the user. You can see this is "WestSalesUser1." He's
logged on, and he can see the ThinApp applications that he wants.

In the last video actually, we already created a Group Policy Object with PolicyPak directives in
it. You can see one of them is right here. We said that we wanted to "Manage Acrobat XI (Real and
ThinApp)." Let's review how we did that. All we did was we went to the user side
"PolicyPak/Applications/New/Application" and picked the application off the list. PolicyPak ships
with over 100 preconfigured Paks, and you can create your own if you want to.

Then we configured Acrobat Reader. We did some things like setting "Enable Acrobat JavaScript" to
disable it actually, so we're unchecking that. We went to "Security (Enhanced)" and we delivered
that setting and also locked it down. We also went to "Updater" and we set it to "Do not download or
install updates automatically." Again, we did this in the last video.

The result actually is exactly the same. Let me say that again. I'm not changing anything from the
last video to this video. It's just linked over to our "West Sales Users" using Group Policy the way
administrators already know how to do.

Let's go ahead and run "Adobe Reader XI" from VMWare Horizon Workspace, and let's see what happens.
OK, we can see "Adobe Reader" popping up running, and here we go. At this point now, PolicyPak has
dynamically injected the directives that you want to manage this application. PolicyPak will
continue to work even if this computer goes offline, which is awesome for situations like this.

If we go to "Edit/Preferences…" and we go to "JavaScript," this is PolicyPak delivering the setting
of uncheck for "Enable Acrobat JavaScript" and we've grayed out the setting so users can't work
around it. If we go to "Security (Enhanced)" right here, "Enable Enhanced Security," PolicyPak has
delivered the checkmark and once again ensured that users can't work around it.

Same thing for "Updater." If somebody forgot inside the package to configure "Do not download or
install updates automatically," they would have to take the package offline, tweak it and then
redeploy it. But then there's still nothing that prevents the user from actually making the changes
except for PolicyPak. That's what we're doing here. We're delivering the setting dynamically into
the ThinApp package and ensuring users can't work around it.

Now the other thing I want to show you is "Mozilla Firefox." By default, Firefox really doesn't have
any configuration. Let's go ahead and run "Mozilla Firefox" here, and let's take a look at the
default configuration here. There we go. "Firefox" is launching.

The kinds of things that people would want to set using Group Policy and ensure that these things
are maintained are, for instance, items like the "Home Page," "Security" settings and even
"about:config" settings. These are all settable using PolicyPak and Group Policy.

To do that, we'll go over back to the GPMC. Actually, we've already got a Group Policy Object that
we set earlier for our "VMWare Floating VDI," and it's called "Manages Firefox (Real and ThinApp)."
Why don't we just go over to our "West Sales Desktops," and we will "Link an Existing GPO…" and
we'll select "Manages Firefox (Real and ThinApp)." We're just utilizing the Group Policy Object that
we created the last time.

If we just take a look at the "Settings" report here, we'll see that we've got settings on the
"General Tab." We're delivering "www.policypak.com," and we're also delivering some important
"Security" settings. We can see that if we right click, click "Edit…" and take a look at the
computer side "PolicyPak/Applications/New/Application" and just dive in there and see our changes.

The "Home Page" is set, and it's also locked down. We can go to the "Security" settings, and we can
see that we've delivered these settings and also locked them down. We can go to "About:Config" and
put in very important settings, for instance, for these about:config options. These are all
available to us if that's what we want to do.

Now that that's done, we'll go over to our target machine. Because PolicyPak uses Group Policy,
running "gpupdate" will embrace the latest, greatest PolicyPak Group Policy changes. Once those are
locked and loaded, because this computer is in the right OU, it will get those directives. PolicyPak
can be used either on the user side as we saw earlier when we were talking about "Adobe Reader XI"
and also on the computer side as we're doing now with "Mozilla Firefox."

That's it. We'll just go ahead and run "Mozilla Firefox" here, and what we should see is PolicyPak
delivering your IT managed settings into your VMWare Horizon applications slung by VMWare Horizon
Workspace. There we can see "Firefox" launching. Already, PolicyPak has dynamically injected the
settings when we ran gpupdate.

That's it. Let's take a look. Let's go to "Firefox/Options" here. There we go. We left off on the
"Security" tab, and we can see that PolicyPak has dynamically injected the settings and locked them
down here. If we go to "General," you can see also the "Home Page" has been set accordingly and
dynamically and locked down. If we go to "about:config" settings here, there we go. We can see that
the one that we set – this "network.negotiate-auth.trusted-uris" – is set accordingly as we want.

That's it. PolicyPak is really the missing piece for Horizon in terms of slinging applications
whenever you want to use ThinApp. That's why we have three videos on it. If you've got them deployed
into physical or virtual machines, if you're using VMWare View to dynamically inject them or you're
using the Horizon Workspace, you can quickly and easily get your applications out there plus manage
those applications dynamically and perform lock out and insurance that users can't work around your
settings.

OK. That's it. Thanks so much for watching. If you're looking to get started with a trial, we're
here for you.

Thank you so much for watching, and talk to you soon.


