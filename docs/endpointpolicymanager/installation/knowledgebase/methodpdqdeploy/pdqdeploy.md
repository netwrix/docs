---
title: "Managing Group Policy using Endpoint Policy Manager and PDQ Deploy"
description: "Managing Group Policy using Endpoint Policy Manager and PDQ Deploy"
sidebar_position: 10
---

# Managing Group Policy using Endpoint Policy Manager and PDQ Deploy

Microsoft MVP Jeremy Moskowitz and Shane from Admin Arsenal demonstrate the setup and advantages of
using Netwrix Endpoint Policy Manager (formerly PolicyPak) and PDQ Deploy together to manage the
heck out of your group policy.

### Managing Group Policy using PolicyPak and PDQ Deploy

Shane: Hey, I'm Shane from Admin Arsenal. Today, we have Jeremy Moskowitz. You probably already know
of this man: GPanswers, the founder of Endpoint Policy Manager, Microsoft MVP, Enterprise Mobility.
This guy is the bee's knees. We're going to talk about how you've already got Active Directory, now
let's add some muscle to it. This is the guy that we're going to talk to.

Jeremy: Thank you. What we're going to do is we're going to show you a better together story. In
this video, we're going to do a setup of getting Endpoint Policy Manager ready. If you decide that
you like what you see in this series of videos and you want to try Endpoint Policy Manager and/or
PDQ Deploy better together, this is video number one in order for you to get started.

Let me give you the lash-up of where we're at with our setup here. We have "Active Directory" and
"Group Policy" ready to go. I just want to show how we have our setup here. In "Active Directory"
we've already got our "Users and Computers." Let me show you where they live just so you can see how
to follow along.

For instance, our users are hanging out under "Standard Users." We have "User1" and "User2." If we
look at "Deadwood Computers/Workstations/Standard Computers," we've got "COMPUTER1" and "COMPUTER2."
We try to make it very complicated. We've got these two computers and two users, and these are who
we're going to manage.

The first thing we want to do is show you a before shot before we show you an after shot. If you
take any given "Group Policy Object," it doesn't really matter. We'll call it "aaa." If we look
inside, you've seen this a million times. You know there's the user side and computer side. There's
"Policies" and "Preferences."

What we just said is we're going to add a little muscle to this by adding the Endpoint Policy
Manager node. This is super easy. You probably want to do this step by hand. You could use PDQ
Deploy to do it, but just to make things easier for this demonstration, I just want to go to the
downloaded Endpoint Policy Manager, which you get my contacting Endpoint Policy Manager first of
all. Then you go to the "Admin Console MSI for all On-Prem
[https://policypak.com/products/](https://policypak.com/products/)," and you just install
the admin.

I'm pretty sure this machine is x86, right?.

Shane: No, it's x64.

Jeremy: Oh, it's x64. Okay, great. It doesn't matter. Whichever on you have, it will work. This step
takes a moment or two. Once this is done, you've increased your ability to create new directives
inside your Group Policy editor. We'll go ahead and wait for this to finish. That's it. It just
takes a moment, and we're ready to go.

We'll go ahead and "Close" that. Now let's look at the after shot. We'll go ahead and take a look.
We now have a new node here in the Group Policy editor enabling you to do more stuff. We're going to
cover what that stuff is in this series of videos. We're not super concerned about the stuff right
now. We're just getting set up. That's thing number one. I'll go ahead and close this.

Step number two is one of the superpowers that Endpoint Policy Manager has is the ability to manage
Flash, Firefox, Java, Internet Explorer. You name it, we have a way to manage it. We have these
definitions or Pak files that there's a handful of ways to do it, but the best way is to get them on
one domain controller which is to say your Central Store for Endpoint Policy Manager.

What we're going to do here is we're going to take the Endpoint Policy Manager stuff, and I've
already got all the Paks listed here. You can see we have over 400.

Shane: Wow.

Jeremy: We have "430" Paks as of this recording. We're going to…

Shane: There's your "SYSVOL" in "venice." We're going to use "venice."

Jeremy:That's the one, "venice." I'll move this one to the left, this one to the right. I'll just
pick a couple of guys just to show you how quick and easy it is. Let's say you want to do "Java
Version 8 u 77." I'm just pulling this one out of my ear here. We'll go ahead and go to "SYSVOL,"
domain name, "Policies."

You might already have an existing what's called "PolicyDefinitions" folder. Now that's Microsoft.
Endpoint Policy Manager is going to be – I know, wait for it, this is super complicated – "Endpoint
Policy Manager."

Shane:If you're lost by creating a folder, you probably need a couple of other videos.

Jeremy: Yeah, this is not the tool for you. We'll go ahead and create the "Endpoint Policy Manager"
folder and drag-and-drop in one of our Pak definition files. Now look at that. You're going to be
able to manage the heck out of "Java Version 8 u 77.".

If you want to take WinZip, let me go ahead and find it. "WinZip 14 to 17" is a good one. We'll go
ahead and copy that guy right there. That's it. If you want to pick and choose the ones you want,
it's super easy to do.

Let's go ahead and go back to the after shot again. We'll go to "aaa" and take a look at that one
more time. If we take a look, we can go to user or computer, "Endpoint Policy Manager." Take a look
at "Application Settings Manager," which is the thing we're going to spend some time on in our first
videos. Right click, "New Application," there we are. Those are the Paks we just dragged in, ready
to go.

If we want to manage the heck out of "WinZip" which we'll probably do in our next video, you just
double click it. We'll cover this in the next video, but we've now officially set up a handful of
Paks. If you want to do Flash, Firefox, Java, etc., you just drag the right Pak file in and you're
ready to go.

That's it. There's one more step, and that's where he's going to come in. You need to deploy our
moving part, that client side extension, to enhance your Group Policy experience on your endpoints.
You're going to cover how to get that deployed..

Shane: Yeah, we'll get that out there. We're going to use "PDQ Deploy." It's a free download. We're
going to show you using the Enterprise level version.

Jeremy: " You can close that right out. We're done with that.

Shane: Okay. But if you're using the free version, you're just going to need to do two packages if
you have both 64-bit and 32-bit targets. I'm just going to create a "New Package" here. We'll call
this "Endpoint Policy Manager CSE," the client side extensions, perfect.

Then our "Step 1" is an install step. This is where you choose your MSI or your EXE files or your
batch files, etc. We are going to go out to, I'll put this on a file share somewhere. There we go.
We'll do the 64-bit for right now. It's an MSI, so there are no other properties that you need to
add. We're just going to hit "Save" on that.

There's our "Endpoint Policy Manager CSE," and we'll go ahead and deploy. Obviously, you could
choose targets from your Active Directory OU or etc., but since we know the names of these computers
we'll just do it for the sake of this.

Jeremy: But you could pick your entire domain. You could cherry pick OUs.

Shane: Yes, you can choose targets from "Active Directory," "PDQ Inventory," "Spiceworks," etc.
We'll hit "Deploy Now." I didn't name that step, but it's okay. You can see that it's kicking off
the client side extension install right away. Jeremy has got those. The MSI is ready to go. It's
sweet.

Jeremy: The best part is no reboot required. Once you get it deployed out there, Endpoint Policy
Manager is automatically working, ready to rock from moment zero. You don't have to wait for a
reboot or schedule a reboot. We're just ready to rock since it's installed. That's it. Endpoint
Policy Manager is fully deployed. We have it all ready to go, and we're ready to actually do some
work with Endpoint Policy Manager and PDQ.

Shane: So see us on the next video. We'll talk to you later.

Jeremy: Bye.
