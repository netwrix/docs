---
title: "Upgrading the CSE using GPSI"
description: "Upgrading the CSE using GPSI"
sidebar_position: 40
---

# Upgrading the CSE using GPSI

Here is how to take any version of Netwrix Endpoint Policy Manager (formerly PolicyPak) CSE and
update it on all your client computers at the same time. You can use the built-in Group Policy
software distribution mechanism of Group Policy.

<iframe width="560" height="315" src="https://www.youtube.com/embed/GvgnnIbhXfY?si=ZhyU1JiQZAXz8kzq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak: Upgrading the CSE using GPSI Transcript

Hi, this is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software. In this
video, I'm going to show you how you can upgrade your client side extension across all your
machines, provided you already used something like Group Policy Software Installation.

For instance, here you can see on this machine, this is a 64-bit machine. It's running Build 511.
This is an XP. It's running Build 511. On this Windows 7 computer, it is also running Build 511.
Guess what? Build 515 just came out. What I'm going to do is I'm going to create a new folder for it
in "SOFTWARE" and call this "Build515."

Actually, I'm assuming you saw the other video on how to use Group Policy to mass deploy it. This is
kind of part two of that video. We'll take the latest, greatest client side extensions – "PolicyPak
CSE Setup x32" and "PolicyPak CSE Setup x64" – right here that come on the ISO that you downloaded
from us. You're going to "Copy here" into your "Build515" folder that is a share called "SOFTWARE"
and now a folder called "Build515." I just put those two guys in there. Excellent.

Now what we're going to do is head over to the exact Group Policy Object that we used to already
deploy our software, which I have here under "East Sales Desktops." We will right click over "Deploy
PolicyPak CSE" and click "Edit…" here. Then we'll dive down under computer side "Policies" and take
a look at "Software Settings."

We'll see we've got our two client side extensions here. As you saw in the last video, I named one
of them "PolicyPak Client Side Extension – 64bit" and the other one is called "PolicyPak Client Side
Extension" and it is 32-bit.

What we're going to do is in the exact same Group Policy Object go to "New/Package…" and then
instead of picking "Build511," I also suggest you go to the server name, which is "dcSOFTWARE."You
have to do this over the network. You see how we're coming in over the "Network." That's why I used
"dcSOFTWARE." When you do that, you come in over the "Network."

So "Build515," and we'll pick the "PolicyPak CSE Setup x32" first. I'm going to go right to
"Advanced." When you go to "Advanced," sometimes this takes a minute or two for it to figure out
what's going on. Once it's there, this is when we're going to say, "If you've seen the previous
version, then make it an upgrade." Again, don't panic if this window takes a minute or two to come
up.

I'll call this"PolicyPak Client Side Extension – 32 – 515" for 32-bit and Build 515. Here's the
trick. The trick is you're going to click on "Upgrades" and specify "Packages that this package will
upgrade." You're going to "Add" – and see here this is in the "Current Group Policy Object (GPO)"
–you're going to pick the previous one that matches. This is the one that matches, the 32-bit
"PolicyPak Client Side Extension."

What you want to do is also select that the "Package can upgrade over the existing package." In the
current Group Policy Object, pick the client side extension version and "Package can upgrade over
the existing package." We go ahead and do that and click "OK." We've done that for the first one
just like that.

We'll also go to "New/Package…" and we'll specify the "PolicyPak Client Side Extension – 64bit." Go
to "Advanced" and we'll do the same thing for the 64-bit. Again, this window does take a minute or
two to come up.

Now that that window is up, we'll go ahead and call this "PolicyPak Client Side Extension – 64 –
515" for 64-bit and Build 515. We'll go to "Upgrades" and click "Add." In the "Current Group Policy
Object (GPO)," we're going to pick the "PolicyPak Client Side Extension – 64bit" that's the old one.
We want to make it "Package can upgrade over the existing package" and click "OK" on both of these
guys.

Actually, I forgot a quick step which is for the 32-bit ones, there is a checkbox that we want to
uncheck as well. I unchecked it in a previous video, and I also want to uncheck it here. Just for
the "PolicyPak Client Side Extension – 32 – 515," the one we just specified here, we'll double click
this guy and make the window come up.

Under "Deployment," under "Advanced," we want to uncheck this little checkbox that says, "Make this
32-bit X86 application available to Win64 machines." We don't want this to be available to 64-bit
machines. It won't work anyway. We've hard coded the MSI not to allow an install to 64-bit machines,
but what the heck? Let's just make sure that we're nice and perfect all around.

Even though it looks like you've got four things here, you really don't. Actually, these two upgrade
packages are going to upgrade these two guys right there. Let's go over to each of our machines.
Group Policy Software Installation doesn't work until you restart each of our client machines here,
so I'll "Restart"them one-by-one.

What you should see is the software getting upgraded on the fly. Then because PolicyPak requires a
reboot after install, it should instantly reboot. Let's go ahead and see if that actually
occurs."Applying computer settings…," there we go. You can see "Installing managed software
PolicyPak Client Side Extension – 32 – 515." That's it. It's done. It's rebooting. It will come
right back, and we're done.

Let's go ahead and move on to our XP machine. It's currently running 511 here. We'll go ahead and
reboot it. Go ahead and do a "Restart" here. Now by the way, it may take you one or sometimes two
reboots in order for this to occur. I've turned off asynchronous policy processing, and therefore
all the things I will be doing will happen on the next reboot.

There we go, "Installing managed software PolicyPak Client Side Extension – 32 – 515" on this
machine and rebooting right after that. I'll go ahead and move over to the 64-bit machine, and I'll
go ahead and restart it.

While that's restarting, let's go over to each of our machines. We'll then go to "Control Panel" on
each machine, and we shall see that the latest version is the only version that's there. So "32 –
515" is now there, and you can see that "515" is installed here.

If we go to our XP machine as well, we can go to "Control Panel" and "Add or Remove Programs" and
you can see there it is, "32 – 515" and that's Build "515."

Let's go over to 64. There we go. It's still restarting right now. There we go. It's coming back up.
"Applying computer settings…," and we're done. Let's go ahead and take a look at its "Control
Panel." We'll head over there, go to "Uninstall a program" and there we go. PolicyPak version "64 –
515."

That's it. This really, again, is a two-part video. Part one was how to get the first client side
extension out there if you've never installed PolicyPak using GPSI, and this is video two if you
have installed it before and you want to do an upgrade.

I happen to be doing upgrades between Builds 511 and 515, but even if you watch this video way in
the future and you get started later with us and we're up to Build 9000 and you're going from 9000
to 9005, that's OK too. The same principles apply if you want to use Group Policy Software
Installation.

Hope this has been helpful. Thanks so much, and we'll talk.


