---
title: "Endpoint Policy Manager Start Screen and Taskbar Manager Helper Utility"
description: "Endpoint Policy Manager Start Screen and Taskbar Manager Helper Utility"
sidebar_position: 10
---
# Endpoint Policy Manager Start Screen and Taskbar Manager Helper Utility

If you don't have the application already installed on your management station, then use this
utility to grab application IDs. It's easy. Check it out!

<iframe width="560" height="315" src="https://www.youtube.com/embed/WD4OaEoM6KQ" title="Endpoint Policy Manager Start Screen and Taskbar Manager Helper Utility" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak Start Screen and Taskbar Manager Helper Utility

Hi. This is Jeremy Moskowitz, former Group Policy MVP and Founder of Netwrix Endpoint Policy Manager
(formerly PolicyPak) Software. In this video, I'm going to show you how you can use Endpoint Policy
Manager Start Screen Manager Helper utility to take applications that are installed on one machine
and get them deployed to other machines.

What I mean by that is on your own management station, the one where you create Group Policy from,
you might not have an application. Like I don't have FileZilla, some application I want to pin to
the Taskbar or the Start Menu. I just don't have it, and you see this machine does have it.

What you can do is take our little sidecar utility here. This is the download that you get from
Endpoint Policy Manager. In the "Endpoint Policy Manager Extras" folder, you're looking for the
"Endpoint Policy Manager StartScreen and TaskBar Manager Helper" utility.

What this puppy is going to do is take all the applications that you have – the Desktop/registered
applications and the universal applications – and let you export all of their IDs. Let me show you.
This is all the stuff that's on this machine. There you go. You can see I have "FileZilla" on this
machine. I don't have it on my GPMC machine.

I'll go ahead and click "Next" here. I'll also take all the Windows universal apps. If you have
something special like some unique developer app or some unique Windows universal application,
that's great. We're going to detect it here on this machine, and you can export all things that are
some end user's machine.

We'll go ahead and click "Next" here, and we'll go ahead and "Browse." I'm going to just store this
on the server here under "\dc2016share." I'm going to call this "Registered and UWP apps on" this
machine. We make it easy for you to just know that's this file. We'll go ahead and save it and
"Finish."

Now that we've got that set, let's go over back to our GPMC machine. Here's our group. We're
delivering all this stuff already: "Acro Reader tile," "big calc," "Chrome icon" and "Get Help for
PP website." Let's just see that here. Yes, we sure are. We're doing all that great stuff.

Now we want to add FileZilla. If we were to right click, "Add/New Universal Application Tile,"
remember my machine doesn't have FileZilla. So when I go down, there is no F and FileZilla. But I
can "Import from" "XML file" and pick the application XML that I just exported ten seconds ago and
click "Open." What I should see is that the list changes. There it is, "FileZilla," just like
that.We'll double click that guy, click "Next" and we'll give it the size here. Click "Next," and
we'll call this "Filezilla."

And that's it. Now "FileZilla" is here under "Recently added." We want it to jump over to "My
Important Apps." Let's go ahead and run GP Update ("gpupdate") and let's see this go ahead and take
effect. Now that that's done, we'll go ahead and close this out. Let's check out the Start Menu, and
just like that, exactly the way we would expect.

In this way, if you don't have an application on your own management station but you do have it on
an endpoint, if it's a standard desktop app or a windows universal app, you can use our little
sidecar utility and export.

There's actually one additional little magic trick I want to show you with this little sidecar
utility here. You can run the "Endpoint Policy Manager StartScreen and TaskBar Manager Helper" here,
and let's just take a look at the universal ones for a second.

What you might want to do is let's say you want to get this "Code Writer" application ID. You can
simply literally "Right-click Application ID to auto-copy it to clipboard." So When you type
"Notepad" here, you see there's that ID. Why is that interesting? Because instead of going through
the entire process like I just showed you, you may want to simply right click, "Add/New Universal
Application Tile" and click on "Custom Universal Windows Platform application."

Because you know the ID, you can just paste it in just like that. Does that make sense? You grabbed
it over here, and you go ahead and lay that custom app in there. We can pick the icon, and we'll
call this "Code Writer." So we have that guy in there. Now we don't need to export at all. We just
grabbed the ID just the way we wanted to.

Let's take a look at the before picture. We don't have the app. Let's look at the after picture by
running GP Update ("`gpupdate`"). Give this a couple seconds to finish up. We'll go ahead and close
this out. Check it out, and "Code Writer" is there. So again, this machine has Code Writer. The
other machine didn't have Code Writer. All I did was I grabbed the ID and threw it in there just the
way I wanted to.

That's all we have for now. I hope this helps you out. Looking forward to getting you started real
soon.  
Thanks.


