---
title: "Authorize USB Sticks by VENDOR type"
description: "Authorize USB Sticks by VENDOR type"
sidebar_position: 30
---
# Authorize USB Sticks by VENDOR type

If you have a specific USB device vendor you trust, and those devices are always encrypted, use
Netwrix Endpoint Policy Manager (formerly PolicyPak) Device Manager to restrict device use to THOSE
vendor IDs only!

<iframe width="560" height="315" src="https://www.youtube.com/embed/78p9CKfdJdU" title="Endpoint Policy Device Manager: Authorize USB Sticks by VENDOR type" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

In our first video, we put the smackdown on all evil CD-ROMs and USB sticks. Then we opened it up
for one trusted user to either just read or maybe full access if we really trust them. The thing,
however, is that that's great for when they're doing good things with the USB sticks that you give
them. However, if they fall off the wagon and they put in a naughty USB stick, like this one, the
one I found in the parking lot – remember, you said that it's okay for them to do whatever they want
on all USB sticks, and that's a problem because that could've been malware. What are we going to do?
There's two ways to handle this problem.

What I'm going to do first is I'm going to just take away this rule just to make it less confusing.
Then let's run gpupdate and put in the evil USB stick again and see what happens. We'll just give
this a second to catch up. Alright, so we'll start off by putting the evil one in, and what do we
get? We get no access. If we put in the good USB stick, what do we get? We get no access, but maybe
we know that the USB sticks that we provide for the customer by a particular vendor, okay, by
JetFlash Transcend_32GB, maybe we know that these are always encrypted, and if they're always
encrypted, then they could be sanctioned, so let's go ahead and create a new rule. We'll leave this
up for a second.

We'll just right-click Add a New Policy here. We want to allow users to use specific devices, and
this is – comes with the standard edition. You can plug in the Vendor and the Product ID and the
Product Revision, and if it's on your sanctioned list, you can let users do it. Let's go ahead and
do that. We'll take the Vendor ID, which is JetFlash, paste that guy in here. We'll take the Product
ID, which is this Transcend_32GB – go ahead and copy that guy in. Then when it comes to the Product
Revision, sometimes items will have a revision number, sometimes they won't. You can decide if you
want to use it or not. We let you put a \* there, which says JetFlash Transcend_32GB with any
Product Revision is good to go. Alright?

Let's go ahead and say this particular user, EastSalesUser1 or group, we want to give them access,
Full Access could be fine if you know that it's – that the vendor that you're providing is always
encrypted, so let's go ahead and do that, Full Access here. Go ahead and click Next and click
Finish. Now we're saying let EastSalesUser1 use the USB sticks we provide because we know that they
are always going to be okay. Let's go ahead and run – go back over here to – I'll unplug it just to
– just for fun. I'll go ahead and click gpupdate, give this a second to catch up. Now that that's
done, we'll go ahead and re-plug in our good USB stick here, the one that's always encrypted, and we
don't get any pop-up or anything because it is, in fact, allowed. Now we can see our encrypted USB
stick enables us to do what we said. In this case, we said Full Access.

The only downside to this is that if somebody picks up a USB stick that maybe they shouldn't, like
once again picking up the evil USB stick and putting it in, the one I found in the parking lot, if
it is in fact exactly the same version that you've sanctioned, that's going to let them do things
that maybe you don't want to do, like read from the device or to run stuff that maybe they shouldn't
be running. If that is super important to you, and I can see where it would be, you can dictate that
particular USB sticks are allowed and controlled because of serial number. Go ahead and take a look
at that video. That's the next one on the list. Thanks so much.


