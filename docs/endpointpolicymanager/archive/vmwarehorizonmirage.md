---
title: "Endpoint Policy Manager and VMware Horizon Mirage"
description: "Endpoint Policy Manager and VMware Horizon Mirage"
sidebar_position: 150
---

# Endpoint Policy Manager and VMware Horizon Mirage

You are using VMware Horizon Mirage to manage your physical and virtual desktops. But how are you
managing your applications' settings? When you use Netwrix Endpoint Policy Manager (formerly
PolicyPak) with VMware Horizon Mirage, you will see instant results. When you implement a layer to
your desktops, Endpoint Policy Manager can manage that layer. Check out this video to see exactly
how it is done:

<iframe width="560" height="315" src="https://www.youtube.com/embed/toDL5Z2G37Q?si=0GQO5z8JyHkDG_Fl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak and VMware Horizon Mirage Video Transcript

Hello, everybody. This is Jeremy Moskowitz, Microsoft MVP, Enterprise Mobility and Founder of
PolicyPak Software. In this series of videos, we're demonstrating how PolicyPak is the missing tool
for VMWare's suite of end user computing products. In this demonstration, we're going to see how
PolicyPak and VMWare Horizon Mirage make an awesome better together story.

Let me set the stage here. I've got my "VMWare Horizon Mirage Console" here, and I've got three
application layers and a base layer. I've got a target machine here that has absolutely nothing
installed on it. You can see here I'm logged on as a guy called "westasalesuser1." If I go to
"Control Panel," you can see I've got a whole lot of almost nothing installed – just some baseline
things like the "VMWare Horizon Mirage Client."

Then I'm going to use PolicyPak and actually dictate some settings to the user and the application,
but the applications aren't actually installed yet. That' going to be the magic trick. If I go over
to my "West Sales Users" and I "Create a GPO in this domain, and Link it here…" and I call this
"Manage Winzip via PolicyPak," we're going to dictate settings to our target applications. Then when
Mirage gets the application over there, we will have the setting pre on the machine and ready to go.

We're going to go ahead and pick "PolicyPak for WinZip 14 and Later." You can see that PolicyPak
snaps right into the Group Policy management console just like that. We select our application, and
we've got all sorts of settings for the application.

For purposes of this demonstration, I'll pick all four of these checkboxes here in "Passwords." I'll
do some PolicyPak superpowers like "Hide corresponding control in target application" and "Disable
corresponding control in target application." I'm hiding and graying things out. I'm checking all
four check boxes. I'll set some very important password lengths and strengths here, and I'll also
"Disable whole tab in target application" as well just to prove a point.

That's on the user side. On the computer side, maybe for every desktop in West Sales ("West Sales
Desktops") we will "Manage Firefox via PolicyPak." Now again, the applications don't exist yet
because we haven't gotten them there using Mirage.

On the computer side, under "PolicyPak/Applications/New/Application" we'll pick
[https://www.policypak.com/products/manage-mozilla-firefox-with-group-policy.html](https://www.policypak.com/products/manage-mozilla-firefox-with-group-policy.html)
Now remember, PolicyPak isn't delivering the application. That's what Mirage is going to do.
PolicyPak is going to deliver and enforce the application's settings.

If we pick "www.vmware.com" as the [https://policypak.com/](https://policypak.com/) we can
also right click and "Lockdown this setting using the system-wide config file" so now the users
can't work around it. Under "Security," we'll make sure that these checkboxes are always checked and
also "Lockdown this setting using the system-wide config file." I'll go ahead and lockdown two out
of the three of them.

Okay, now that those are locked and loaded, let me go ahead and run "gpupdate" on this machine.
Again, I don't have the applications, but PolicyPak will have downloaded the directives using Group
Policy, but we don't have the moving parts yet on the machine. That's what we're going to do right
now..

Now that we're done with that, let's go over to "Mirage (123)." We'll go to our "All CVDs," and
we'll right click and we'll specify that we want to "Update App Layers." I want to deliver "Mozilla
Firefox," I want to deliver "WinZip" and the PolicyPak moving parts ("PolicyPak Client Side
Extension"). I'm putting all three things, which are all three completely different layers in
Mirage, over to our target machine. Passed validation. Ready to go, and click "Finish."

Let's go over to our "Task Monitoring," and we'll see that it's "In Progress" here. Let's go over to
my target machine here, and we'll take a look at the Mirage client and it's doing its thing. This is
going to take a little while, so I'm going to pause the demonstration and I'll come back when we're
all set.

OK, now that we're all done, we get the "Restart Now" message. Let's go ahead and do that. Once
again, I'll pause the video, and we'll come back when it's done rebooting. OK, so we're back. Let's
go ahead and log back in as "westsalesuser1." This time, if you look really quick, you'll see
"Applying PolicyPak policy." That was it. You missed it. It went by superfast.

PolicyPak delivered its settings to both "Mozilla Firefox" and "WinZip." Let's go ahead and see what
happens when we run "WinZip" now. By the way, you can see the Mirage message over there. If we go to
"Options/Configuration…" and go to "Passwords," you can see PolicyPak delivered the settings of "11"
and all four checkboxes plus grayed out the settings plus grayed out the "Cameras" tab in this case.

If a user were to try to work around the settings, PolicyPak is always working. This computer could
be taken offline, and this would continue to function. PolicyPak is always working, even in the
background.

If we go over to "Mozilla Firefox" and run Firefox now, we saw that Firefox was delivered, but
PolicyPak delivers the "Home Page" as you saw here and locked down the settings plus delivered those
three checkboxes. You saw when I was in the Group Policy Management Console, I checked all three
checkboxes but grayed out just two of them, and that's the key point.

To recap what we've seen here, what we saw is that the VMWare Horizon Mirage client embraced the
layers, PolicyPak itself. The moving part of PolicyPak is and can be a layer along with other
applications. Then as soon as the Group Policy settings are delivered either on reboot or with a
GPUpdate, those settings are instantly delivered to those client machines. That is the better
together story with PolicyPak and VMWare Horizon Mirage.

If you have any questions or want to get started with your trial of PolicyPak, we're here for you.

Thanks so very much, and we'll talk to you soon.

