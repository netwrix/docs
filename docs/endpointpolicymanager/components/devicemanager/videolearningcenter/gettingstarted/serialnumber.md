---
title: "Permit specific devices by serial number"
description: "Permit specific devices by serial number"
sidebar_position: 40
---
# Permit specific devices by serial number

Use Netwrix Endpoint Policy Manager (formerly PolicyPak) Device Manager to specify exactly which
users can use which serial numbers of USB sticks and DVD devices. This way, you issue the device,
and you know EXACTLY who has USB Read/ Read/Write or Full access.

<iframe width="560" height="315" src="https://www.youtube.com/embed/O8qGAIpor54" title="Endpoint Policy Device Manager (Complete): Permit specific devices by serial number" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

In a previous video, you saw me limit which USB sticks are allowed by USB vendor type. The problem,
however, even though it works great when you give the correct USB sticks to your end users, is that
if they do end up with a USB stick that's not theirs but does match the vendor type, like this one I
found in the parking lot, what happens then? It still lets me do naughty, naughty things that I
shouldn't be able to do because you said it was okay to open it up by vendor. Instead of opening up
by vendor, why don't we open it up only by serial number? Let's get rid of this rule. We'll say
goodbye to this rule for a second. Now we're putting the smackdown on absolutely everything. We'll
go back to our endpoint. We'll run gpupdate.

Now the smackdown should be on on all sticks, and let's stick in our – let's go ahead and stick in
our evil USB stick first and then our good USB stick second. This is the evil USB stick. When we do,
we see this evil USB stick, we can see that it – even though it matches the product and vendor, the
serial number is unique here. Let's go ahead and put in our good USB stick, the one that has – that
we've provided from the IT team. Let's go ahead and put that in. What do we see here? We see this
serial number ends in 611. That's the good one. The one that ends in 611 has all the good stuff in
it. What we're going to do is take this line, called the Device Instance Path. Let's go ahead and
copy that.

We'll go to the rule. We'll create a New Policy here and let's say Allow users to use specific
devices, not by Vendor ID, but if you opt into the Endpoint Policy Manager Device Manager COMPLETE
edition, that enables you to do this magic trick, which is to allow list by device serial numbers.
I'm going to paste it in, click Add, there's the serial number, 611, and now we can dictate who can
use this one. If I want a particular user or if you want to share it amongst a group, that might be
okay. Dictate the user or the group and what permission access they have. This is very particular.
This is saying this user has this access for this particular serial number, and that's it.

Let's go ahead and do an AB test. I'll go ahead and take out the good one. I'll run gpupdate.
Alright, I'll run gpupdate here. Give this a second to catch up. Now, I'll put in the evil USB
stick, the one I found in the parking lot. Let's see what happens. It's blocked. I can't do anything
here. Read No, Write No, Execute No. Just to prove a point here, you can see the serial number's
not 611. If I were to put in – just see what I can see here in Windows land here. If I were to take
a look and try to be evil and do some malware stuff, what happens? Not letting me do that. I can't
right-click and open it in Notepad. I'm blocked here, which is exactly what I want. This is not a
sanctioned device, but if I were to put in – if I were to put in the good USB stick that I did
sanction with the 611 as the serial number, what do we get? We don't get any pop-ups because it is
allowed, and if we want to do full control on it because those are the rights that we provided, it
just works the way we expect. There is my PDF. If I were to try to copy it to the desktop, I'm good
to go, and that's it.

With Endpoint Policy Manager Device Manager, you're in charge. You can let particular user do
whatever they want, you can hammer – put the hammer down based upon a device type, or you can really
put the screws it by dictating it by serial number. You can decide which is the most important way
for you to get the job accomplished, and hope this tool helps you out. Thank you very much. Talk to
you soon.


