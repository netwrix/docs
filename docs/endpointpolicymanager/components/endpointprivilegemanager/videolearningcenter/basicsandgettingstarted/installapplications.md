---
title: "Installing applications-and-Preconfigured-Rules"
description: "Installing applications-and-Preconfigured-Rules"
sidebar_position: 40
---
# Installing applications-and-Preconfigured-Rules

Need Standard Users to install their own applications? We've got some preconfigured knowledge for
that, and it's a simple drag and drop to get started. Let users install iTunes or any software you
like.. using PP
[https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html](https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html).

<iframe width="560" height="315" src="https://www.youtube.com/embed/vo2TF48DLX4" title="PPLPM: Installing applications-and-Preconfigured-Rules" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PPLPM: Installing applications-and-Preconfigured-Rules Hi. This is Jeremy Moskowitz. In this video, I'm going to show you how you can use Netwrix Endpoint Policy Manager (formerly PolicyPak) Least Privilege Manager to let users that are standard users install their own applications. By way of example, here's "iTunes." They may need to install iTunes. That's too bad for them because there's the UAC prompt and they get rejected.

It won't let them run. What we're going to do instead is use "PolicyPak Least Privilege Manager."
Actually, we provide some preconfigured knowledge to help you out in this case. Let me go ahead and
get my Group Policy editor here. We've got the preconfigured knowledge over here. We have a bunch of
situations that you might already be in. You could make it yourself. You saw some previous videos
where you could make your own rules. But if you just want to get up and go, for instance you want to
"Install iTunes as admin" (really it's system), that's it.

No thought involved. Let's actually see what's happening underneath the hood in case your curious.
What we're doing is we're saying if the name is "iTunes" or "SetupAdmin" (which is happening
actually within iTunes) and only if it's signed by "Apple," then it's good to be elevated. Okay, so
let's check it out. Let's go back over to our endpoint here. We'll go ahead and run GP Update. We'll
go ahead and wait for this to finish.

Now remember, Group Policy kicks in at logon time and when you roam from computer to computer. I'm
just running GP Update to accelerate the hands of time here. That's it. We'll go ahead and close it
out. Now let's see what happens.

Again, standard user, I'm just a regular guy called EastSalesUser1 here. Ten seconds ago, I couldn't
install "iTunes." With our preconfigured knowledge, iTunes is installing. It takes a couple minutes,
but there you go. It's going to do its thing.

That's it. We have all this preconfigured advice ready to go for you in case you are in some of the
situations that we have. If you want to take a look at some of these things, it's "Install" various
utilities, let some things auto update, "Run" some various objects as "admin" (really it's system)
and so on.

Long story short, we give you a wide variety of things that you're probably already doing as
examples for you to use if you don't want to write your own rules. I hope this helps you out. We're
looking forward to getting you started with a trial of Endpoint Policy Manager Least Privilege
Manager.

Thanks.


