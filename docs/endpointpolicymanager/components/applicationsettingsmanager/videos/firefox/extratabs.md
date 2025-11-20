---
title: "Remove Firefox's Extra Tabs at First Launch"
description: "Remove Firefox's Extra Tabs at First Launch"
sidebar_position: 60
---
# Remove Firefox's Extra Tabs at First Launch

When Firefox runs the first time, it shows extra tabs. But using Netwrix Endpoint Policy Manager
(formerly PolicyPak) you can remove these extra tabs on both Windows 7 and Windows 10. This video
shows you how.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Dmlqk1NDzLs?si=Jppctaoy5yME6H8Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager: Remove Firefox's Extra Tabs at First Launch

Hi. This is Jeremy Moskowitz and in this video I'm going to show you what happens in Firefox when a
user logs on for the first time. They get two extra annoying tabs and that's two more annoying tabs
than you want. So I'm going to show you what happens without PolicyPak and then how you can fix that
with PolicyPak.

So here we are logging on for the very first time on our Win 7 machine and also on our Windows 10
machine. We're logging on as the same user for the very first time. I'm going to go ahead and wait
for this to finish. And remember, this guy has never logged on before. Let's go ahead and run
Firefox for the first time and see what happens. This: three tabs, one for the Start page, which has
got nothing in there, and then two kinds of commercials from Firefox. And on Windows 10, if we go
and take a look at experience, well, not only do we get the "do you want to import stuff", but by
the time that's over you also get these annoying tabs, the Start page tab, which is fine, but then
this kind of commercial-ly thing. "So how do we make this stop?" I hear you cry.

All we're going to do is use PolicyPak to the rescue. We'll go ahead and close all this stuff out.
Actually, it's too late for these guys, right? If we were going to do it the second time for these
guys, they've already done that one-time action. So, we're trying to save the next generation, or if
people get a new machine, or things like that. Let's go ahead and log off here. Sign out of both of
those guys. And let's use PolicyPak to fix this.

So for all of our sales people, we could do it on the computer or the user side. We will stop
Firefox's annoying two extra tabs. Right-click, hit "edit" here. And I'll do this on the computer
side. We'll go to computer side PolicyPak, application settings manager here, right-click "new
application" and we'll do Firefox 23, which is really 23 and later. And right here on the "general"
tab, let's go ahead and set the homepage to policypak.com and we'll right-click it and lock it down
so users can't work around it.

And then here are how to stop the launch tabs. So we'll just click all these guys. And you can
choose to lock them or not lock them. That's fine. Once that's done, we'll click "okay" and that's
about it.

Let's go over to our machines. We can't log on as this guy. It's too late for him, but we can log on
as East Sales User 3 over here. We'll go over to our Windows 10 machine and we will log on as East
Sales User 3 over here. We'll go ahead and wait for this to finish. Okay, now that that's finished,
let's go and first run for this guy for Firefox. Let's see what we get this time. Boom, just the one
tab, just the one thing we expect, not two annoying tabs. And if we were to go over to the "options"
here in Firefox land, we will see also that it is locked and the user can't work around it.

Let's go over to our Windows 10 machine here and we'll run Firefox for the first time as this guy.
And boom, his experience is exactly the same. He gets the singular tab, the homepage set, the right
homepage, of course. And if on Windows 10 he were to go to "options" here, he is also locked down.

So that's it. It's easy as pie to use PolicyPak to remove the first run experience on Firefox and
make it the way you intended. Hope this helps you out and talk to you soon.


