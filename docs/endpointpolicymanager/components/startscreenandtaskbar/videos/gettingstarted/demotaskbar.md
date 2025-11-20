---
title: "Endpoint Policy Taskbar Manager: Quick Demo"
description: "Endpoint Policy Taskbar Manager: Quick Demo"
sidebar_position: 30
---
# Endpoint Policy Taskbar Manager: Quick Demo

Quickly and easily manage what icons are pinned to the Windows 10 Taskbar. Use Group Policy, SCCM or
your MDM service. It couldn't be easier.

<iframe width="560" height="315" src="https://www.youtube.com/embed/JPLm1OCqKpo" title="Endpoint Policy Taskbar Manager: Quick Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak Taskbar Manager: Quick Demo

In a previous demonstration, you saw me use the Netwrix Endpoint Policy Manager (formerly PolicyPak)
Start Screen Manager to manage the Windows 10 Start Screen and get rid of the other groups that a
user might have created or that come in the default and also dictate tiles inside a group called "My
Important Apps." In this demonstration, you're going to see me deliver applications icons to the
Taskbar, and they can be applications that live inside your groups or ones that are just strewn here
across the whole universe.

How are we going to do this? We're going to go over to our "GPMC," and you can do this either on the
computer side or the user side. I'm going to do this on the user side. I already have a GPO that I
created previously. You can create a new GPO or use the same one. Here I am. For my "East Sales
Users," I have this GPO I created in my previous demonstration.

I'm just going to go to the "Taskbar Manager for Windows 10" location. I'm going to "Add/New
Collection," and I'll just call this "Coll 1." It doesn't really matter what it's called. The point
here is that there are two choices: "Merge" or "Replace." "Merge" says keep what the user already
has and just add your two or whatever icons on top of it. "Replace" says get rid of all these icons
here on the Taskbar and put your own. I'm going to show you "Merge" first and "Replace" second.

We'll start off with "Merge" and we'll go ahead and click "OK" here. Inside the "Taskbar Manager,"
we're going to "Add" either a "New Desktop Application" or a "New Universal Application." I'll go
ahead and pick a "New Desktop Application." I'll go ahead and start with good old "Adobe Reader." I
happen to have it installed on this machine, so it makes it a little easier. I'll go ahead and click
"Next," and I'll call this "Acro Pin" and I've done it.

If I want to add a "New Universal Application," again this machine that I'm on happens to be a
server and server doesn't have a bunch of Windows universal applications. So I'm going to "Import
from" a list I've already got from my other machine. I'm going to "Import from" and "XML file" I've
already got here called my "PPSSM-apps-export-from-Win10" from my target Windows 10 machine. Here we
go.

If I wanted to pin "Alarms & Clock" – why not? Let's do something a little bit different. "Alarms &
Clock," so we'll go ahead and say "Alarm pin." So we have these two icons here. I'll go ahead and
run a "Command Prompt" and run GP Update ("gpupdate"). Here's the thing. This won't take effect
until the guy logs off and logs back on. So actually, GP Update really doesn't matter in this case.
I could have just logged off and logged back on, but I'll show you what it looks like. Taskbar stuff
doesn't happen until you log off and log back on, so let's go ahead and do that. I'll "Sign out" and
then I'll sign back on.

Now remember, we said Merge mode. So it should leave in place the application icons we already have
there. And just like that, we've added our "Adobe Reader" icon and also our "Alarms & Clock."
Fantastic.If we decide we want to change our mind here and we want to get rid of the icons that are
already here on the Taskbar, we're going to just change our method on the collection. We'll "Edit
Collection" and change the method to "Replace" mode.

Like I said, stuff doesn't happen in Taskbar land until you log off and log back on, so let's go
ahead and show that. We'll "Sign out." Let's go ahead and log back on here. Now in the last
demonstration, we showed Merge. In this demonstration, we're going to show Replace. There we go.
Those are our icons. We've gotten rid of all the items that were standardized there.

Now we have our Start Screen Manager managed and our Taskbar managed just like that. If this doesn't
knock your socks off, I don't know what will. I hope this makes you as happy as it makes me. If
you're looking to get started soon, just join us for the webinar and you can get started right away.

Thanks so very much, and talk to you soon.


