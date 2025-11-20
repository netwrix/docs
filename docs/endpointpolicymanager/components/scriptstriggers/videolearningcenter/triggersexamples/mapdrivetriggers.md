---
title: "Endpoint Policy Manager Scripts + Triggers: Map a printer or drive when a process runs and un-map it when closed."
description: "Endpoint Policy Manager Scripts + Triggers: Map a printer or drive when a process runs and un-map it when closed."
sidebar_position: 20
---
# Endpoint Policy Manager Scripts + Triggers: Map a printer or drive when a process runs and un-map it when closed.

How do you map a printer or drive when you launch an application like Acrobat Reader ? Using Netwrix
Endpoint Policy Manager (formerly PolicyPak) Scripts + Triggers of course. Its easy to do... just
pre-try your script first, then use Endpoint Policy Manager Scripts + Triggers to do the magic. Its
easy!

<iframe width="560" height="315" src="https://www.youtube.com/embed/5tOXS2buwKU" title="Endpoint Policy Manager Scripts + Triggers: Map a printer or drive when a process runs and un-map it when closed." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz, and in this video, I'm going to show you how you can use Endpoint
Policy Manager scripts and triggers to map a drive, or map a printer, or do some other exciting
thing when you launch a process. Wouldn't it be neat if you double-click on, say, Acrobat Reader and
when you do and when Acrobat Reader launches, then bingo. You either get a printer or you get a
drive map or whatever you want.

Before we run through this, let's do a little walking here. The way you're going to walk is to test
this out first on a machine or two with the script you're going to actually use. I've already done
this in advance, and there's two ways to map a printer with a script. One way is through PowerShell.
I found that this doesn't always kick in a hundred percent of the time, but it does work sometimes,
so I can just show you right here. If I were to Add Printer, Dash Connection Name,
wak-wak-server-wak-printer1 here. It may or may not decide to kick in. We're going to find out
together and give this a second to catch up. Yeah, see, that decided not to work, and it should
work. There's absolutely nothing wrong with this command. That should work in PowerShell land.

Instead, we're going to fall back to this old-school method called run dllprintui against the print
UI entry input. Then we're going to give it the server and printer name, so let's go ahead and try
this one on for size. Let's go ahead and see that, and look at that, magically delicious. We can see
we got a little run there, and now we're just waiting for the printer to kick in and there we go. I
mean, each one of these could actually work and it could take a little bit of time the first time.
Don't panic if when you try this technique out it doesn't kick in the very first time. It's just an
affect of the Windows 10 and the printer script.

Now the removal script is remove-printername. This generally works pretty fast, so we'll go ahead
and give this a shot here and then boom, there we go. There's the printer removal. How do we take
what we just learned and use Endpoint Policy Manager scripts and triggers?

Here are the exact same commands here, and what we'll do is – what we'll say is hey, let's create a
new GPO for all of our east sales users. "When we run Acrobat, then map our special printer." That's
what we'll call that, and then we'll click on Edit here. What we're going to do is create two
different scripts with triggers. What we'll do is we'll go to Scripts Manager here. You can do this
on either the user or the computer side. I'm going to do this on the user side, so go to Add Policy
here and what we're going to do is add in that script. Now that first script, like I said, that
PowerShell one gives me a little bit of fits, so what I'm going to do is take the old-school run
dll32printer guy here. Bang, so I'm copying that in. There's the bad script.

Now there is no revert script when you use triggers, so we'll just go ahead and click Next and then
on the trigger, what we want to do is on a process start. On process start, we want to run this
thing. What's the process? Well, let's go ahead and – well, let's run Acrobat Reader. If we run
Acrobat Reader on this machine, you can see that it's running here and we can just select that
process from the actual running process right here. Let's go ahead and pick that guy. Thank you for
popping up, Acrobat Reader. Here we go. Here's Acrobat Reader. When we see Acrobat Reader run as the
process, then perform the work. Policy start trigger, so we'll call this "Acro Map Printer."

Now we actually have to do another one when the process stops. We'll create a new policy here. This
one will be the PowerShell script because we saw that one worked out pretty well, so we'll go ahead
and pick that guy. Remove Printer Name, so PowerShell script this time. Remove the printer name and
then no revert script there. This time what we'll do is we'll say "On trigger when it's a process
close," and we'll pick the process again. We'll select from the process here. We'll go ahead and
pick Acrobat Reader, and we're off to the races.

Again, if you didn't have the process running, you can just pick it by the file and so no. go ahead
and click Next and now we'll say unmap printer. Here we go, unmap printer. You can put any number of
things in here, but I'm just doing this nifty printer mapping thing. Now that we're all set and
ready to go here, let me go ahead and run GP update to just get the signal that we're doing this new
thing. Give this a second to finish up. Alright, now let's take it for a test drive. Let's go ahead
and just leave that window down there and let's run Acrobat Reader. I'm going to move this out of
the way so we can actually see it. There we go. You can see the printer 2016 is actually mapped
automatically. When we close this process here, watch what happens to the printer. It's going to get
nuked.

Alright, let's do it one more time just for good measure. Double-click on Acrobat Reader. What
happens? Boom, the printer's installed. When we uncheck or when we close Acrobat Reader, the printer
is automatically nuked because of Endpoint Policy Manager scripts.

Don't get dismayed if this doesn't work the very first time. Again, it's some kind of affect around
how the printer takes a couple seconds the very first time to probably get that driver in and
rocking and rolling. After that, you can see it actually happens really, really quickly. I hope this
helps you out and you're ready to use Endpoint Policy Manager scripts and triggers. Thanks very
much.


