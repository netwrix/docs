---
title: "Process Monitor 101"
description: "Process Monitor 101"
sidebar_position: 30
---

# Process Monitor 101

Need to show us some details of a problem? If we ask you to use Process Monitor, here's how to
download and use it.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Q-PljXDTTIw" title="Process Monitor 101" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Process Monitor 101

Hi. This is Jeremy Moskowitz. In this video, you're going to learn how to use Process Monitor. If
you're watching this video, it means we've asked you to do something with Process Monitor and maybe
you don't have a lot of experience in that. No problem.

First things first, you've got to download Process Monitor: "process monitor download." Once you
have it downloaded from the Microsoft website – don't get it from some unusual website – always try
to get the latest version. Once you're on this webpage, you've made it to the right place.

I've already unpacked the tool to "`C:\PROCMON`" and it's ready to go. When you launch it the first
time, you're going to get a UAC prompt. Actually, every time you run it, you're going to have to
give it admin credentials. Admin credentials are now going to make Procmon start. You can see that
it's started down here. You'll have to "Agree" to the "SOFTWARE LICENSE TERMS."

It starts immediately going for events. I actually don't want that right now. What I want you to do
is to actually turn off "Capture Events." Get lined up to the demonstration of what you need to show
us. Now that you've stopped the capturing of events, let's actually go to "Edit/Clear Display." The
idea is that now it's not recording and old history is not preserved.

Let's, for instance, say I need you to capture the running of "Google Chrome." What will you do? Now
is the time you'll go to "File/Capture Events." Now it's doing its thing. You'll then run "Google
Chrome." Chrome will then do its thing. It's currently recording tons of events while Chrome is
running.

You would reproduce the problem that we're asking you to do, whatever you want to show us. Maybe you
go do something inside Chrome and it flips out or whatever. That's fine. When you're done, close out
the application. Then at that point, go to "File/Capture Events" and stop it.

During that time, what Process Monitor has done if we go toward the end, we're going to see a
billion things that happened in Chrome land. We're going to see all the stuff that happened while
Chrome was running. You're setting yourself up for success turning on the capture, turning off the
capture.

Then finally, what you're going to then do is go to "File/Save." You're going to save "Events
displayed using current filter," and you're going to "Also include profiling events" in the "Native
Process Monitor Format (PML)." You can save it right here. If you have an SRX, that's even better.
Like if you have a support case with us, "`C:\PROCMON\SRX12345-Procmon-trace.pml`." And you're off
to the races.

What you don't want to do is have this thing running for 17 hours or whatever because we don't need
those kinds of events. We can do the filtering from there. What we will do here in-house is create a
"Filter" and look for when the "Process Name" "contains" "chrome" and click "Add." Then we're going
to look just to see what happened during the thing we asked you to check out.

That should give you enough to go on in order to get us a very simple Process Monitor capture, and
then we can go from there and see if we can address your concern.

Thank you very much. Talk to you soon.

