---
title: "Working with Others and using the Central Store"
description: "Working with Others and using the Central Store"
sidebar_position: 20
---
# Working with Others and using the Central Store

Netwrix Endpoint Policy Manager (formerly PolicyPak) enables you to work with other administrators —
quickly. Just put the Paks into the central store, and everyone has a copy. Watch this video to see
how it's done!

<iframe width="560" height="315" src="https://www.youtube.com/embed/SPH1IrHpgDM" title="Endpoint Policy Manager: Working with Others and using the Central Store" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak: Working with Others and using the Central Store video transcript

Hi, again. This is Jeremy Moskowitz, and in this video we're going to learn how to share the
PolicyPaks that we've created which we did in previous videos with our other administrators. So
let's get started.

Like I said in previous videos, we've already created our PolicyPaks. In this case, we've got a
"WinZip" PolicyPak that manipulated and created, and it only took us a couple of minutes. But if we
want to share that and utilize that with other administrators, let's see how we do that.

In this demonstration here, this is my PolicyPak Creation Station and also my management machine
where I am creating PolicyPaks from and also delivering it through the "Group Policy Management
Editor."

If I were to use another machine, let's call up this machine here, when we go to our second machine
here we're going to log on as another user. Or you can imagine this is you on another machine that's
never used PolicyPak before. In either case, the scenario is pretty much the same.

Imagine you wanted to either manipulate an existing GPO that has a PolicyPak inside it, or you want
to create a new GPO with PolicyPak information. If you go to the Group Policy Editor, the
"`gpmc.msc`" here, and you fire it up and you decide you want to check out an existing PolicyPak
here. If we go down over to our "Sales/East Sales/East Sales Users," here are our "WinZip Settings."

We know that there's PolicyPak information inside it, because if we click on WinZip "Settings"
details, the GPO that we created in an earlier video, we can see here that we've got these various
items checked and manipulated. We've set the "Minimum password length" to "10." We've checked "at
least one &symbol character" and "at least one &numeric character (0-9)."

Now we know that there are items in there. So if we click "Edit…" inside that Group Policy Object,
well, first things first because we don't even have the PolicyPak node. So we need to get the
PolicyPak node on this new machine. How do we do that? Very simply. We have our own add-on to the
GPMC, our own snap-in. You're just going to double click on the "PolicyPak Admin Console" link here.
This only takes a second to install here, so we'll click that we're going to install it here.

When it's done, we'll click "Close." Then the very next time we go and click inside any Group Policy
Object, we'll now have the PolicyPak node. Well, excellent. So we can see the "PolicyPak" node, and
we can see here "WinZip" "DLL not found." Now remember, in previous videos when we created a
PolicyPak, we needed to compile into a WinZip DLL in order to see the WinZip settings here.

So where is this DLL? Well, it doesn't exist on this machine. It actually only exists on our
PolicyPak Creation Station, this other machine. Specifically, it lives in
"`C:Program FilesPolicyPakExtensions`." When you compile PolicyPaks, they get compiled here to your
local PolicyPak Extensions directory on your PolicyPak Creation Station.

Now how is that other administrator going to get to this file? That is why we introduced this
concept called the PolicyPak Central Store. The PolicyPak Central Store is a simple location that
lives on a domain controller such that when you copy up the DLLs that you create into the Central
Store, other administrators over here don't get a DLL not found message. Instead, they get no error
message at all. They just get the ability to utilize it from the Central Store.

Again, this administrator doesn't have a problem. When they go to click "Edit…" in the Group Policy
editor, they don't see any problem at all because that DLL is in fact local to this computer. So,
again, the challenge is how do we take this local DLL that only lives on this machine and get it
into that Central Store so that other administrators on this computer, for instance, can get to that
DLL?

To answer that question, we need to go over to our domain controller. On our domain controller, we
have a folder called "SYSVOL." Now for most administrators on their domain controllers, this SYSVOL
folder lives in "`C:WindowsSYSVOLsysvoldomainname.comPolicies`." Now all we need you to do to
utilize the Central Store for PolicyPak is to create "New/Folder" and call it "Policypak." It lives
inside the "Policies" folder. This is where all the GPOs live.

All you need to do next is to get that DLL into this "Policypak" folder. Now there are any number of
ways to do that. What I'm going to do is I'm going to map a network drive from my PolicyPak Creation
Station over to the Central Store. Then I'm going to drag and drop the file right into the folder.
Let's go ahead and check out how I do that.

Now, again, like I said there are any number of ways to do that. I'm going to "net use \* dcc$temp."
I'm going to put it in a temp directory here. I'm going to now copy this folder "z:" so I now can
"Move here" or "Copy here" the DLL from my local machine into the domain controller's "temp" drive.
I'll go ahead and move it there so it no longer lives on my local machine. It now only lives in the
temp directory on the domain controller.

Now I need to just go from the domain controller's "`C:temp`" directory and once again move it from
the "temp" folder here into the "Policypak" Central Store. That's it; we're done.

Just to review what we've done so far: all we did was we took the DLL that only lived on one place,
which was our PolicyPak Creation Station, and we got it into the PolicyPak Central Store. The
PolicyPak Central Store lives in the "Policies" folder in a new folder that you're going to create
called "Policypak," and drop your DLL right in there.

Now the very next time you do that, your existing system, the next time you click "Edit…" on here –
remember it doesn't exist locally anymore; it's now in the Central Store – we immediately recognize
that we have the ability to see it in the Central Store.

All of your new machines where it used to say "DLL not found," well, that problem goes away again as
well when we click "Edit…" here on our new machine. We no longer have that problem. We can see the
information right there. We see the WinZip configuration possibilities because the DLL is now in the
Central Store.

If we wanted to utilize or create other Group Policy Objects here, for instance if I wanted to
"Create a GPO" called "West Test" and click "Edit…" here, again the very next time we go to
"PolicyPak/Applications/New/Application/PolicyPak for WinZip" is right there, and it comes right out
of the "Central storage."

So we don't have to worry about getting our compiled PolicyPak DLLs around to everybody's
administrative machines. We just simply put it in the Central Store, and all the administrators can
utilize the PolicyPak DLLs in the Central Store. So that's it, super easy.

All you need to do once again is to get the PolicyPak node on your administration station and then
also get the PolicyPaks into the Central Store. Again that Central Store location is simply the
"SYSVOL" in the "Policies" folder. Create a new directory called "Policypak" and move your DLLs up
there. It's easy as pie.

Well, that's it for this video. Thanks so much, and we'll see you on the next one.


