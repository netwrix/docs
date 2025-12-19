---
title: "Trim the MMC console for OU admins"
description: "Trim the MMC console for OU admins"
sidebar_position: 40
---
# Trim the MMC console for OU admins

If you want to hide some of the PolicyPak MMC items for your OU admins, this is how to do it.

<iframe width="560" height="315" src="https://www.youtube.com/embed/5mJe4XBghFY" title="Endpoint Policy Manager: Trim the MMC console for OU admins" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi. This is Jeremy Moskowitz, former 15-year Group Policy MVP and Founder of PolicyPak Software. In
this vid, I'm going to show you how you can trim what you see in the PolicyPak Management Console.

We're going to play pretend here. This is you on this machine on your management station, and this
is your buddy Eddie. When you click "Edit" on any given Group Policy Object maybe you want to see
all the things PolicyPak can do. Let me show you what I'm talking about. For instance, inside the
MMC console here when you click on "PolicyPak" you see all the nodes here.

Maybe for Eddie you don't want to do that. Maybe for Eddie what you want to do is say for Group
Policy Objects that Eddie creates that Eddie can only see some of the PolicyPak nodes. So you can
see that right now he has all of them.

Let's say I wanted to remove his ability to do "Java Rules Manager." How would I do that? We have
ADMX templates that will control this. We have another video on how to manage our ADMX templates,
but it's as quick as downloading them from the bits, taking the policy definitions, and putting them
in your Microsoft central store. That's all there is to it.

The other side note is that the target machine doesn't need the PolicyPak client-side extension.
That's the moving part. We don't need that on the endpoint. The MMC console is just looking at all
times to see if the flag is set to receive this policy, and it will do the work.

I'll show you what we're talking about. Again, now we're back on your machine and we're going to
modify Eddie's behavior. How do we do that? We know that Eddie is in "West Sales Admins." So we're
going to "Create a GPO in this domain, and link it here" and call it "West Sales Admins cannot use
PP JRM." Then we click "Edit" on this Group Policy Object.

This, again, is not a PolicyPak function. You're going to go to user or computer side, "Policies /
Administrative Templates / PolicyPak / Snap-ins." If you want to "Hide Java Rules Manager snap-in,"
you go ahead and set "Enabled" and click "OK." Now provided, again, that Eddie's account is in fact
in "West Sales Admins," he's going to pick up this policy setting and it will affect him.

Let's go ahead and see if that's true. We'll go ahead and run GP Update ("gpupdate") here. We'll
give this a second to finish up. As soon as this is over, the next time he edits a Group Policy
Object the PolicyPak MMC snap-in will see that that's there and will not give him the ability to do
Java Rules Manager. Let's go ahead and check that out. Right click and click "Edit" here. We'll go
to "PolicyPak" node and no more Java Rules Manager. So that's basically it.

Now another thing you could do is also do it on the computer. If you knew that Eddie's computer or
all of your administrators for West Sales were in some OU like "West Sales Desktops," you could do
that. I actually think Eddie's computer is in a weird place. Let's take a look where it is. Eddie's
computer is currently in "East Sales Desktops," so that's sort of a weird place.

Let's go ahead and affect this computer. When we do that, it will be additive. So he'll get the
user-based things and the computer-based things. So let's say we want to say goodbye to "Browser
Router" or something like that. What we'll do is we'll do this on the computer side for "East Sales
Desktops." We'll "Create a GPO in this domain, and link it here" and call it "Computers in this OU
cannot use PP BR."

We'll go ahead and click on this guy, click "Edit" here. Then we'll dive down on the computer side.
Again, this is you doing this. We'll go to "Policies / Administrative Templates / PolicyPak /
Snap-ins." You want to "Hide Browser Router snap-in." You just go ahead and click "Enabled" and "OK"
and you're off to the races.

This computer is in this OU, and we're going to get the GP Update ("gpupdate") here. Again, we don't
need the PolicyPak moving part on here. The admin stations don't need the moving part in order to
create policy settings. The next time we run Group Policy, let's go ahead and go back to "gpmc.msc"
here, and then we'll go back to that same Group Policy Object from before. Click "Edit" and now
we'll look and see. If we go to "PolicyPak," we can see Browser Router has been annihilated, exactly
what we want to have happen.

Here is a key point though. Just because you've removed the items here doesn't mean that they are
shut out from seeing the reporting in there. If I were to as you, now this is you going into the
Group Policy Object here. If I were to find that Eddie Group Policy Object, and this is you doing
this. If you were to create some Browser Router stuff or create some Java Rules Manager stuff, he
can see that without even having the ability to edit it.

So if you were to "Add" a "New Collection" and you were to just put a single policy in here, right
click "Add" a "New Policy" here and just give it some dummy data for right this second here, if you
were to look at it here in the Group Policy console and look at the "Settings" report, you will see
the details here come on up. So you can see that you've configured some "Browser Router" stuff.

What about Eddie? Well, we know he can't edit it, but can he see it? Let's go ahead and go click on
it here. Now if he goes into the "Settings" report and he clicks on "Administrative Templates" for
"Browser Router," he can see it but he can't edit it. So that's important.

I do want to say that this is not considered a security boundary. So just because you've removed the
ability to edit it in the Group Policy editor, this is not considered a security boundary. If
somebody really knew what they were doing, they could edit the Group Policy Object directly if they
have rights. Eddie does have the rights. And then he could actually put XML data directly into the
Group Policy Object even if he doesn't have the ability to have the nice editor for it. So, again,
don't consider this a security boundary. Consider this light electric fencing.

All right, well, I hope this helps you out and helps you get started.

Thank you very much and talk to you soon.


