---
title: "Managing Teams Settings"
description: "Managing Teams Settings"
sidebar_position: 20
---
# Managing Teams Settings

Want to manage the settings WITHIN Microsoft Teams? Like Auto-start application, Open in background,
On close keep the application running, Register Teams as chat app, and other various settings? Then
use Netwrix Endpoint Policy Manager (formerly PolicyPak) Application Settings Manager .... like this!

<iframe width="560" height="315" src="https://www.youtube.com/embed/namIG4Br1Kw" title="Endpoint Policy Manager Application Settings Manager: Managing Teams Settings" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz and in this video, we're going to learn how to use PolicyPak
Application Settings Manager to dictate some key settings for Microsoft Teams. This is the default
behavior of Teams, and a user could go out of their way to know how to make sure auto-start is
enabled. They could know to go to open application in the background. They can know how to do these
things, or you can dictate it for them.

What we'll do is let's go ahead and why don't we flip all the bits. Instead of this being on, we'll
set it off. This instead of off, being on, and so on. We'll go ahead and do that using PolicyPak
Application Settings Manager. Now in order to do this, you can see that Teams is still running, so
I'm going to make sure Teams is actually closed and now it's time we can go over to our management
station here.

I've already got the Teams pack ready to go. I'm just sort of showing it in use. I go to PPAM Teams.
You can do this on the user or the computer side. I just happen to be doing this on the user side
but if you wanted to do it for a gaggle of computers, you could do that, as well. I'll go over here
go to User Side. I'll go to Application Settings Manager here. Right-click New Application and there
it is, Microsoft Teams. Again, I've already slid this in. This is coming from the central store. You
can just double-click it here, and now it's time to do the work you want to do.

You can see the defaults are here on the screen, and we're going to flip every other one. We're
going to say we don't want to auto-start; we do want to open the background; we don't want to
unclose; we want to uncheck Keep the Application Running; we do want to check GPU and Hardware
Acceleration; we do want to register Teams as the chat app; we don't want to turn on new meetings
and call any experiences; and we don't want to enable spell check. We're inverting all these things.
Let's go ahead and click Okay.

Now that we've done the items that we wanted to do here, let's go over back to our target machine.
We'll run GP Update. We'll go ahead and give this a second to catch up. Okay, now that we're done
here, let's go ahead and rerun Teams. Give this a second to catch up. Now it's time to go over as us
here and we'll go to Settings and there we go. We flipped all the bits. If we want to go ahead and
reflip them on or off or whatever, but you can see that PolicyPak will do things you want to do here
and will also keep it up-to-date.

For instance, let's go ahead and check all the check boxes here. Let's check all the check boxes.
What's going to happen the next time PolicyPak does its magic? Well, let's go ahead and and find out
here. Okay, so nothing's happened yet, so in order for these settings to actually be refreshed,
let's just go ahead and log off. I'm actually going to accelerate the log off and log on process
with a little movie magic here. Now let's go ahead and run Teams. We'll go back as us and go to
Settings and boom, set the way you wanted. You can see all the things you said are – that you wanted
set are set and all the things are not set are unset.

There you go. With that in mind, I hope PolicyPak helps you out with your Teams journey and looking
forward to helping you get started real soon. Thanks so much.


