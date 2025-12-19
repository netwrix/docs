---
title: "Endpoint Policy Manager Admin Templates Manager: Switched Policies (without Loopback)"
description: "Endpoint Policy Manager Admin Templates Manager: Switched Policies (without Loopback)"
sidebar_position: 20
---
# Endpoint Policy Manager Admin Templates Manager: Switched Policies (without Loopback)

Deliver user side settings on the computer side, but get rid of Loopback!

<iframe width="560" height="315" src="https://www.youtube.com/embed/GRJBVV7yr8U" title="Endpoint Policy Manager Admin Templates Manager: Switched Policies (without Loopback)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Whitney with Netwrix Endpoint Policy Manager (formerly PolicyPak) Software. In this
video, I'm going to show you how you can get out of the dirty, dirty business of using group policy
loopback. Let me set the stage for you. I'm sure you have situations just like this. You have
gaggles of computers and OUs already. The boss walks into your office and says, "For East Sales
desktops, I need you to kill the Control Panel for everybody." So you decide you're going to create
a GPO and you're going to call it Kill Control Panel. You get it linked over to your East Sales
desktops like I've done here, and you start poking around inside Microsoft admin templates.

You're going to find out in a hurry that prohibit access to Control Panel in PC settings is nowhere
to be found on the computer side. That's actually a user side setting. What are you going to do? Ah,
loop that policy processing, you think. Now, while loopback may have its use cases, it can be pretty
tricky. It's hard to troubleshoot, it can drive in way more user side settings than you expected,
and it's really hard to tell if it's on or off.

Let's use Endpoint Policy Manager's Admin Template Manager to put the loopback issue to rest once
and for all. Our goal is to make sure that the user side setting prohibit access to the Control
Panel and PC settings makes it onto the computer side. Impossible, you say? Not so. We're going to
edit this GPO here, and we're not going to try to accomplish this in group policy land because that
involves loopback, and we're getting out of that business.

Over here on the computer side, we're going to go to Endpoint Policy Manager and then Admin
Templates Manager. Since I'm only adding one policy, I'm going to click on New Policy here and if I
go here to Control Panel and poke around in here, we're going to find that the Kill the Control
Panel policy just isn't here. Not to worry; we're looking on the computer side. We know it's not
here. However, if we come up here to the Scope filter, you can see that we have the option to select
User Policy. Nope, that is not a mistake. We can actually select all of the user side policies right
here on the computer side.

Let's go find Prohibit Access to Control Panel and PC Settings. It's actually pretty easy to find;
it's right here under Control Panel. Let's enable this setting, say Okay, and close this out. It
pops up so that I can keep adding policies, but we're just doing the one for today.

Now let's move over to my endpoint. Before this setting takes effect, let's go ahead and look at the
Control Panel just to prove that we can currently get into it. I can access it by going to the tile
that I just went to, or I can get to Control Panel Settings by going to, say, the lock screen. So
let me close this out and let's just run a GP update just to move the hands of time forward just a
bit and we'll see what we've managed.

Alright, so if I come up where and try to get to Control Panel, ooh, nope, we've been blocked. If we
try to do something sneaky like go in here and go to Personalize, no, we are blocked again. Maybe I
try to check out the lock screen. Nope, we are still blocked. You can't get to the Control Panel
anymore. So just to prove that we're actually able to drive that user side setting into the computer
side, I'm going to log out of my East Sales user here, and I'm going to log back in as West Sales
account.

I'm going to use movie magic to shorten the log-in sequence, and here we are. Let's try to get to
the Control Panel once again. No, we are blocked. Let's try to sneak in t he back way. No, we're
still blocked.

There you have it, the ability to drive user side settings into the computer side in a granular and
controlled way avoiding loopback altogether an keeping your sanity intact. If this super power blows
you away, too, sign up for our webinar and we'll get you started on your 30-day free trial right
away. Thanks so much.


