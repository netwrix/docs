---
title: "Deliver GPPrefs items without using loopback mode"
description: "Deliver GPPrefs items without using loopback mode"
sidebar_position: 10
---
# Deliver GPPrefs items without using loopback mode

Not every GPPrefs item can be used on the Computer side. In this demonstration learn how to use
Printers, Drive Maps and Internet settings… and deploy them to an OU of computers… regardless of
where the user resides.

<iframe width="560" height="315" src="https://www.youtube.com/embed/9XpPQUJ9Zm4" title="Endpoint Policy Manager:  Deliver GPPrefs items without using loopback mode" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### GPprefs without loopback

Hi. This is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software. In this
demonstration, I'm going to show you how you can deploy Group Policy Preferences items that would
only normally apply on the user side to any computer you want.

This is kind of an advanced under-the-hood technique, but you're an advanced under-the-hood
technique kind of guy, so I'm going to show you how this works. Basically, we're going to do some
magic with Group Policy Preferences without
[https://www.policypak.com/pp-blog/group-policy-loopback](https://www.policypak.com/pp-blog/group-policy-loopback),
but it does require that you're licensed for the PolicyPak On-Prem Suite or the PolicyPak Cloud
Suite.

To set the stage here, you can see I have "West Sales Desktops." Inside my "West Sales Desktops," I
have a bunch of computers here. Here are three of those four computers – one, two, and three. For
this example, I'm going to be deploying a shared printer to all three of these computers.

If we take a look at that, if we try to do this by hand in "West Sales Desktops" here, if we try to
do this with Group Policy Preferences, "Deploy Shared Printer to all these desktops," you would have
to do this on the computer side. If we go over to computer side, "Preferences" and go to
"Printers/New," there is no Shared Printer. What are you going to do?

That's the whole point of this demonstration. There's no way to actually get Shared Printers to be
eaten by computers unless you're using PolicyPak and you don't want to use loopback. We'll do this
on the user side. What we'll do is we'll just go to "Printers" and we'll create a "New" "Shared
Printer" item. I happen to have a printer already set up, "`\dcprinter1`." That's all you're going
to do.

But this isn't going to work. You know that because you'd have to have a user in this OU, and there
are no users in this OU. What I'm going to do now is I'm going to take this item and just drag it to
the desktop here. I'm going to save it for later. I'm going to put it into` C:share`. I already have
a "share" set up. I'm just going to drag that file called "printer1.xml" into that share. That's it.

Now going back to the Group Policy Object, this isn't going to work. So what we're going to do is
just "Delete" this. That doesn't really help us very much. We're just going to now use Group Policy
"Preferences/Files," and we're going to copy in that file which is in "`\dcshare`." It's called
"printer1."

We have to copy that to a very special location inside PolicyPak land. What I'm going to do is show
you what this special location is. It's "`%programdata%PolicyPakXmlDataComputer`." That's a folder,
so you're putting it to the computer.

The trick is that you also must give it an actual file name. You can call it the same name
"printer1.xml" or else it's not going to work. This is just the way Group Policy Preferences work.
You have to give it the "Source" and give it the entire "Destination." The secret location is
"`%programdata%PolicyPakXmlDataComputer`" and then give it a name like whatever.xml.

What we're doing is we're taking this Group Policy Preferences item and we're jamming it into every
computer by means of delivery using Group Policy Preferences. No loopback involved, I promise.

Let's take a look. I'm logged on as a guy called "eastsalesuser1," so no loopback required. If I
just go here and run "`GP Update`," we should get that file delivered using Group Policy
Preferences. It's getting delivered to the secret PolicyPak location, and that is saying zap that
printer down even though it's a user side only thing. There it is. Perfect. Excellent.

Let's go to the next guy here. No printer. This is "westsalesuser1," so not in this OU either. If we
run "`GP Update`" on this guy, let's take a look and see if we get that printer the way we expect.
Alright, let's give it a second or two here. Bingo! Just like that.

If we go over to the third machine, you're getting the picture, I'm sure. We'll run "`GP Update`"
and we'll wait for this to happen. This is a totally different guy. He's an "Admin," so he's not in
this OU either. What I'm showing you here is that you're able to deliver Group Policy Preferences
items in a unique way using not loopback if you're willing to copy the file in.

This should also work for Internet settings and drive maps and other things that are only on the
user side, but I figured I would show you Shared Printers because I think it's the most interesting
of the three.

Okay, thanks so very much, and I hope this helps you out.

Talk to you soon.


