---
title: "Deploy any script via the Cloud to domain joined and non-domain joined machines"
description: "Deploy any script via the Cloud to domain joined and non-domain joined machines"
sidebar_position: 20
---
# Deploy any script via the Cloud to domain joined and non-domain joined machines

Use Netwrix Endpoint Policy Manager (formerly PolicyPak) Scripts whenever you need to deliver
something that in-box Policy, Preference or Endpoint Policy Manager cannot normally do. Find your
scripting superpowers and manage those non-domain joined machines!

<iframe width="560" height="315" src="https://www.youtube.com/embed/1j-_J0FTh50" title="Endpoint Policy Manager Scripts .. Deploy Software via VPN or with Endpoint Policy Manager Cloud" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak Scripts-Deploy any script via the Cloud to domain joined and non-domain joined machines

In a previous video, you saw me use Endpoint Policy Manager "Scripts Manager" to create a "User Side
Script Policy" that will deliver a shortcut. Just a simple little base hit thing for us to hang our
hat on. In this video, I'm now going to take the same exact policy that we have. Just to quickly
review it, the first thing it's going to do is when the policy applies, it's going to drive in a
shortcut, and when the policy doesn't apply anymore, it's going to drive in a script that will
delete a shortcut. Pretty simple.

In order to use this in Endpoint Policy Manager Cloud land, all you're going to do is take the item,
you can either right click and "Export as XML" or you can just drag and drop it right into a folder,
which is what I'm going to do. Now it should live right there in the folder. We'll get to that guy
in a second.

The second thing I want to do for all my Endpoint Policy Manager Cloud people here is maybe I want
to do something on the system side. I want to rename the "Ethernet" adapter. If you try to do this
as a standard user and you try to "Rename" this, you kind of think it let's you but then you get
prompted. You're not allowed to do this, but you could do this if you were system context as a
systemwide script.

How would we do that? I found this little handy-dandy script off the Intertubes right here. We're
going to "Get" the "NetAdapter," the one that is called "Ether\*," and then "Rename" it to a
"NewName" that I'm going to call "AwayNet." It doesn't matter. It's just a simple script for us to
use for this demonstration.

This time, I'm going to go on the computer side, go to "Scripts Manager," right click, "Add/New
Policy" here. I'm not going to do the thing I did earlier. I don't want to "Apply this policy to all
users who log on to the computer." No, this time I want to "Apply this policy to computer." This is
a systemwide policy that's going to affect everybody on the system.

I'm going to just make an on script. This is a "PowerShell script." I'm going to paste in my little
script here. It's going to find the ones called "Ether\*" and "Rename" them to "AwayNet." Just
something simple just for you to see it work. I don't need a "revert action." When this thing hits,
I just want to do it. I don't care if it ever peels back. I just want to set it and forget it and
not think about it anymore.

That's it. I can make it "Always," "Once" or "Once or when forced." I'll just do it one time. I
don't see any reason to do it more than once, so I'll go ahead and just do it "Once." I will say "PP
Scripts Computer System script."

You could also wrap this whole thing up in "Item Level Targeting" if you wanted. You could say only
do this thing when it's a laptop ("Portable Computer") or it's Windows 10 ("Operating System") or
I'm on this "IP Address Range" or whatever. I'm not going to do that. I'm just going to hit it for
everybody and be ready to go. Now that I've got that script here, I'm going to drag and drop this
guy into my Endpoint Policy Manager Scripts XML folder ("PPSCRIPTS XML") for safekeeping.

Now I'm ready to go into Endpoint Policy Manager Cloud, which is right here. If you'll remember,
Endpoint Policy Manager Cloud has this idea of the special "All" group where every computer will get
this or your "Company Groups" so you can dictate which computers are going to get these settings.
I'm going to go whole hog and I'm going to put these both into "All."

I'm going to "Upload and link a new XML here." I'm going to "Browse" for the first one. This is the
user side one that's going to create a shortcut, so "PPSCRIPTS: Shortcut Create." I'll go ahead and
"Add" this guy. Then I'll go ahead and add my second one, "Upload and link a new XML here." This one
is going to be the one for the computer side, so "PPSCRIPTS: Rename NIC." There we go. So I'm ready
to go. I'll go ahead and click there, and we should be ready to rock.

At this point now, I'll go over to my endpoint. I'm going to install the "Endpoint Policy Manager
Cloud Client." Now in your world, you might already have the Endpoint Policy Manager Cloud Client
already installed. This does require admin rights, so I'm going to get prompted here. But I'm doing
this as a standard user, so we can see that two things will happen after I join Endpoint Policy
Manager Cloud and get placed into the All group. The first thing is I should see the script
generated shortcut here, and the second thing is that I should see the Ethernet get renamed from
"Ethernet0" to I think it was called AwayNet.

You can see here's the "All" group. There we go. The shortcut just showed up here. Let's go ahead
and "Close" that. I'm just going to refresh this. Let's see what happens. There we go. As soon as I
hit F5, it came right in. We're ready to go.

With that in mind, now what I could also do is I could maybe make this shortcut go away. How do I do
that? Go back to Endpoint Policy Manager Cloud. Let's say goodbye to that shortcut here. Here we go,
"Shortcut Create." Then we'll go ahead and "Unlink XML Data file from Computer Group" so it's no
longer applying to that computer anymore, or all the computers. Go back to Endpoint Policy Manager
Cloud.

We could either just wait a little while if we wanted to. Endpoint Policy Manager will sync
naturally every 60 minutes or so. Or we can run "ppcloud /sync" and this will note that the PP
Script item isn't there anymore. Watch the little birdie here. If all goes well, just like that it
gets automagically deleted just like that.

That's the beauty of Endpoint Policy Manager Cloud and Endpoint Policy Manager Scripts. You can set
an on script and an off script. You can wrap it all up with item-level targeting and say only do
this thing when it's true and peel it back when it's not true. You can do things on the user side
for users to see, and you can do things on the system side that will affect the entire computer.

With that in mind, don't forget Endpoint Policy Manager Cloud is amazing not just for domain joined
but also for non-domain joined machines, computers that may never come back into the office and
never check in. Now you have an extra way to manage the heck out of them.

I hope this helps you out. Looking forward to getting you started with Endpoint Policy Manager Cloud
real soon.  
See ya.


