---
title: "Create and update .RDP files for end-users for Remote Work and VDI scenarios"
description: "Create and update .RDP files for end-users for Remote Work and VDI scenarios"
sidebar_position: 10
---

# Create and update .RDP files for end-users for Remote Work and VDI scenarios

How do you create an RDP file on the desktop? You could just "copy it there" but then it's not kept
up to date if a user changes it. Welcome Netwrix Endpoint Policy Manager (formerly PolicyPak) RDP
Manager. Endpoint Policy Manager RDP manager enables you to deliver .RDP files and dictate
connections as YOU want them defined. Don't leave it up to end users... you set it for them!

<iframe width="560" height="315" src="https://www.youtube.com/embed/Xa4BkblshUY" title="Endpoint Policy RDP Manager: Create and update .RDP files for end-users for Remote Work and VDI scenarios" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz and in this video, we're going to learn how to use Endpoint Policy
Manager RDP Manager. The basic gist is that users, if they knew what they were doing, which they
often don't, they could go to the Remote Desktop Connection app, type in a server name, and try to
put in all these very particular options for audio, for keyboard, for resources, for the experience,
the advanced settings. Man alive, there's a lot of settings. Just to prove that I can actually make
my remote connection if I didn't know what I was doing here, I can go ahead and click Connect. I can
go ahead and log on and hey, look at that. Like is good.

I'm already pinging over to a server over there, and that's all working great. What we're going to
see in Endpoint Policy Manager RDP Manager is the ability for us to create these RDP files, put them
wherever we want; for instance, put them on the desktop and so on. If I were to go ahead – I'm going
to go ahead and just sign out here. We're going to head over to our group policy station here and
again, what you do here you can export later for use in MDM or Endpoint Policy Manager Cloud. I'm
going to create a GPO here and I'm going to call this PPRDP Session. Then if I were to right-click
and click Edit here – you can do this on the user or the computer side. I'm going to do this on the
user side, so going to go over to Endpoint Policy Manager and head on over to RDP Manager. This is
where you get to put in a new configuration item.

Now if you already have an RDP file, you can just consume it and suck it in. If you already have
that perfect RDP file, we can go ahead and recognize that. I'm just going to create a new policy
here from scratch, and I'm going to give it a file path. Now the file path I want to give it is to
make sure it goes right on the desktop, and typically that's going to just be percent user profile,
percent backslash desktop, so I'll go ahead and do that. Then I'll just call it Server 1.rdp. That's
going to be the actual name of the file.

You've got a couple of action item types here, Create and Replace, Update, Delete. Typically you're
going to want to either do create or replace. You can read the little help about that will explain
more detail what happens. Typically update is the best mode because that way, it'll create what – if
it doesn't exist, then it'll update if you make any changes. This is the actual policy name we want
to give this, so we can call this Policy 123, doesn't really matter. That's the internal name here.
Then here's the log-on setting. If we want to, we can specify a computer that's on our network right
now. If I specify DC here, it's going to look for computers that match. There we go,
[DC2016@fabrikam.com](mailto:DC2016@fabrikam.com). Let's you pre-populate the user name like percent
domain name, percent user name. Or if you wanted to specify something specific, you could do that
there, too.

Here's where you get into the nitty-gritty. The idea is that now you can dial in exactly what
configuration you want. Why don't we start off with 1280x800, and then in – I'll change it later
just to show you that we can change. You want to change the color depth to, say, 16 colors or let's
do 24 colors first, and then we can do local resources. We can play on this computer and do not
record. If you change your mind later, the UI's pretty easy. What you do is just right-click and
just uncheck this little guy and bang. You're not going to do that thing anymore, so let me show you
that again.

Underline means do the thing and then right-click and Leave will say don't do the thing anymore. You
can specify what happens on the keyboard and what local remote devices are here and so on. If you
want the device, it'll be checked. If you don't want the device, it would be unchecked. If you want
to say goodbye that you don't want to do the setting at all anymore, you would just leave the
setting on the PC and it goes to the square. You can check the experiences, and you can optimize for
performance and so on. All these things are available to you. These are all the kinds of settings
that are traditionally very difficult for a user to have to think about. You're just going to set it
and forget it. User doesn't have to think about it.

We'll go ahead and click OK here, and there you go. There's your policy. One last and very important
thing, you can say deliver this RDP file when and only when something is true like when the machine
is a laptop or when it's on the corporate network or when it's on a work-from-home network. The idea
is that you can specify to create this RDP file, and you can also remove this RDP file when the
policy no longer applies. For instance, when you're in the office, you get a variety of RDP files.
When you're working from home, you get a variety of files. You would remove the RDP file when the
policy no longer applies and create multiple configuration items, some for your on-prem, some for
your remote.

Let's go ahead and see it in action. Now what we'll do is we'll go over to our target machine here
and we're ready to just run GP Update. Let's go ahead and do that. We'll just run GP Update here,
give this a second to finish up, and boom, we can see we've got the – so now let's give it a go
here. We'll double-click it, and this is perfectly normal because it's unsigned, so you can just go
ahead and click Connect here and there you go, domain name, East Sales User 1, so if we go ahead and
put our password in here, it should evaluate. Does its thing and it's off to the races. Look at the
size of the screen. It's exactly what we said it's going to be. If we were to go bananas and try to
look at this file manually by opening up remote desktop connection here by hand and opening up this
file here, if we were to take a look at it on the desktop here, we can see that what we set is
actually inside there. There's the 1280x800. There's the TruColor 24-bit. Now if we want to update
these things, that's easy-peasy, lemon squeezie. Let's go ahead and do that.

We'll just go over back here. We'll go back to the policy here, and let's just make two changes here
to display just something for us to see. I'll do 1400x900, and then I'll do highest quality 32-bit I
think just for something for us to see. Then we'll go back over here and run GP Update. Now again,
I'm showing you here in group policy land. If you're using MDM or Endpoint Policy Manager Cloud, you
know the drill. You just right-click and export and then in MDM land, you wrap it up as an MSI. In
the Endpoint Policy Manager Cloud land, you can either use the in-cloud editors or you can just copy
the details.

Now next time I run server here, what do we get? Well, again, you don't have to ask to see that
anymore. We can go ahead and click OK, put our password in here and the next connection is going to,
we said, be bigger, stronger, badder in every way. Let's go check that out. We can go ahead and go
to remote desktop connection here, and we can open the file. We need to open that file here, go back
to desktop, and let's check it out by hand because users don't know how to do this but you can. If
you click on Display, boom, you can see we've got the larger display and the color quality exactly
the way we want.

All these things are available to you to keep updated. You can dictate the remote work and
work-from-home scenarios that you're after using Endpoint Policy Manager RDP link manager. I hope
this video helps you out. Looking forward to getting you started real soon. Thanks so much.


