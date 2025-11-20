---
title: "Allow ONE user (or group) access to USB and/or CD-ROM and DVDs"
description: "Allow ONE user (or group) access to USB and/or CD-ROM and DVDs"
sidebar_position: 20
---
# Allow ONE user (or group) access to USB and/or CD-ROM and DVDs

If you trust one person, like a doctor or consultant, etc. then you can grant the one person (or
group) READ, READ/WRITE, FULL access to all device.

<iframe width="560" height="315" src="https://www.youtube.com/embed/sSb0M1trCrA" title="Endpoint Policy Device Manager: Allow ONE user (or group) access to USB and/or CD-ROM and DVDs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

In a previous video, you saw me put the smackdown on CD-ROMs and USB sticks. This blanket is going
to hit every user on this computer, but what if you had one user that you trusted, like a doctor or
somebody on your sales team that you said look, we know and recognize that you need to use USB
sticks. In fact, you should use any USB stick you want. You can do that. Let's go ahead and show –
this is the USB stick I found in the parking lot. Let me go ahead and unplug that. Now I'm going to
plug in a USB stick that they own or that you provided for them, either one. When that happens, of
course, we're going to get the block message because we've blocked everything.

This is a different USB stick, but let's go ahead and take a look at – we can see it here in
Windows. This is an IT encrypted USB stick. If we take a look, what's on here? A bunch of PDFs,
PowerPoints, some graphics and cool stuff. The problem is that there's no way for them to read it
because you go ahead and – that doesn't work because you've blocked everything, or if you try to
copy to the desktop, that's not going to work because, again, you've blocked everything. In this
video what I want to show you how to do is to trust one user to do the right thing. How do we do
that?

Right-click Add a New Policy here. The item that you're after here is Allow specific users to use
all devices. If you think that's too wide open, then just watch the next video where I'm going to
show you how to allow users to use specific devices. This one is allow users to use all devices. I'm
going to add a domain member here, that guy who's currently logged on, he's EastSalesUser1. You can
pick a user or a group here, so I'm going to pick EastSalesUser1 can do – you pick the access level.
This is the real superpower of Netwrix Endpoint Policy Manager (formerly PolicyPak) Device Manager,
smacking it down and opening it up just the least amount of privileges required to do their job. If
they only need read access to this USB stick, let's go ahead and do that. Go ahead and click Next.
Now they can read anything on any USB stick that they have, either ones that they have or ones that
they find.

If you want something more intense than that, that's the next video. I'm just showing you how you
can trust one person for that. Again, I have the pop-up showing up every time a policy changes just
for demonstrations here. You can see that we have agreed now to let this – to let the person get to
the CD-ROM, right, because that counts as a device, and same thing for the USB stick. Here we go.
They've got read for the CD-ROM and read for the USB stick. On the USB stick now, I didn't have to
unplug it or do anything. Let's just go ahead and double-click that same item. What do we get? Boom.
Now we have read access to the USB stick just the way we wanted to. If you want to take an item from
the USB stick and drag it over to the desktop, there we go. That succeeds. If you want to try to
copy it back to make another one, we didn't say you could do that, so that's going to be – that's
going to be blocked.

If you want to change the behavior and give the person more access, you're welcome to do that. You
just go to the user and group settings, change the permission for the particular user for what they
can do. We can do Read & write, or Execute, or Full Access. I'll just use Full Access just for fun.
Go ahead and click Save there, and we'll do another quick gpupdate, and when this is all caught up,
you should be able to take any item and copy it to the USB stick, and you're off to the races. This
is opening up the doggy door saying one person is sanctioned to do all the things with USB sticks
and CD-ROMs. Now that that's all done, let's go ahead and – if I were to copy this, and it should
just make another copy just like it would regular in Windows. Yep, let's do that. It can replace
that file, or I can take a file from the desktop just copy it into my USB stick. Oh, I already have
that file, so I'll just do one more thing. Try this guy. Here we go. There we go. I've copied stuff
back and forth. I've given myself full access. If I want to be able to delete something, I can
certainly do that too. I'll go ahead and delete this file. I've given myself full – I've given this
particular user full access.

If you think that is too much access, go ahead and check out the next video where I'm going to show
you how you can allow one user to have specific access to a specific USB stick by serial number.
That's even more cranking it down. Hope this video helps you out. Looking forward to getting you
started with Endpoint Policy Manager real soon. Thanks.


