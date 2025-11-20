---
title: "Endpoint Policy Manager Scripts & Triggers: Events !"
description: "Endpoint Policy Manager Scripts & Triggers: Events !"
sidebar_position: 70
---
# Endpoint Policy Manager Scripts & Triggers: Events !

Use the Event Log to trigger when any kind of scriptable event should occur.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ibHKk9frET4" title="Endpoint Policy Manager Scripts &amp; Triggers: Events !" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz. In this video I'm going to show you how you can use Netwrix Endpoint
Policy Manager (formerly PolicyPak)'s Scripts & Triggers Manager to set off any kind of script you
want when any kind of event happens in the Event Viewer. I'm going to do kind of a goofy example.
I'm going to say when you run GP Update and it's successful on the user side, then open Notepad. Not
a great example, but good for our learning.

In real life, you might have an event that writes the event log when your VPN connects. When you do
that, then you can run a log on script or something like that. We can also do that if we have
support of VPN. If you don't, this is a good option.

You can also do it any time anything else happens in the event log. I'm just going to use mine as an
example. Again, my example is when I look at the system events and I look for Event 1503, that means
user was processed successfully in Group Policy land, and I want to kick off Notepad. We need to
keep a few things in our head.

We need to know that it's Event 1503, that it's the system log, and it's the Microsoft Windows Group
Policy Source. What we'll do is we'll create a new – we're here in the Group Policy Editor. Go to
Desktop Automation Pack and Scripts & Triggers Manager. We'll go to New Policy here.

I'm going to have a new Batch Script, which is going to start Notepad.exe. I want to do it as the
user and interactively. Start Notepad. Then what I'm going to do is say my Trigger is the Event Log.
The Event Log I want, the source is going to be the Windows System Log. Then you click out.

Then you pick the type, which is Microsoft Group Policy. You're going to go Microsoft Windows Group
Policy. Then you click out. We're saying this log, this source. You don't pick the [01:46] button
here. You pick the first log and then you pick the source second.

Then if any of these fire off, that would do the thing, or you can pick the Event ID, which is in my
case 1503. It's the only event that I want. We'll go ahead and click Next here. This is the query
that we're establishing. Then we will check it out. That's all there is to it.

We'll leave the Event Viewer open just for a second. I'll go ahead and close out these guys here,
just doing some sample test before. Now we can just run GP Update here. Let's go ahead and see what
happens. On Group Policy Update, provided the user side completes, there we go, Notepad.

With that in mind, this gives you the opportunity to look for any kind of event you're looking for
in any Event Log. When it happens on the client machine, do a complex action or a simple action. I
hope this video helps you out. Looking forward to getting you started with Endpoint Policy Manager
Scripts & Triggers real soon. Thanks so much.


