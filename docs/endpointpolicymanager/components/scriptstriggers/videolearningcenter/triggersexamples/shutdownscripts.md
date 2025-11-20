---
title: "Endpoint Policy Manager Scripts + Triggers: Shutdown scripts on computer side"
description: "Endpoint Policy Manager Scripts + Triggers: Shutdown scripts on computer side"
sidebar_position: 40
---
# Endpoint Policy Manager Scripts + Triggers: Shutdown scripts on computer side

Want to do ANY kind of shutdown script... with Group Policy, an MDM service like Intune, or
PolicyPak cloud? Here's how to do it, with PolicyPak Scripts and Triggers.... and Shutdown triggers
!

<iframe width="560" height="315" src="https://www.youtube.com/embed/8NjZNNXxFts" title="Endpoint Policy Manager Scripts + Triggers: Shutdown scripts on computer side" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz, and in this video we're going to use PolicyPak scripts and triggers to
do something at computer shutdown time. We're going to keep it simple in this video and we're going
to just simply delete everything in the Temp folder. Of course that command is going to be del
C:/temp/q. I like to pre-test things before I put them into scripts. There you go and if you take a
look at Temp, look at that, nothing in Temp. Let me copy a bunch of junk back here into Temp so I
have something to actually delete later. Here we go, so I've copied a bunch of stuff back into Temp.

Again, the point is the script that we have just verified as del C:/temp/q – here's all my stuff
now. Let's go ahead and go to PolicyPak Scripts and Triggers. I'm going to do this for all of my
computer in sales, so "Clean up Temp at computer shutdown time" with PolicyPak's Scripts and
Triggers. Go ahead and click Edit here and this one, we're going to do on the computer side. We'll
do computer side PolicyPak Scripts Manager and then we will right-click, Add a New Policy here. This
one we're going to do for the computer. This is the computer doing the work, not the user doing the
work. What we're doing to do here is say "run a batch script." It can be PowerShell or whatnot.
We're just going to run a batch script, del C:/temp/q, and that's it. There is no revert action on
trigger-based scripts. Then the trigger that we want is going to be on shutdown.

Let's go ahead and try this on for size. What I need to do first, just run GP Update here. Give this
a second to finish up. Alright, now that we're done – so one last time here that I have a bunch of
junk in Temp  and now, let's restart the computer, which is of course a shutdown and I'll come back
at log-on time and we'll see what happens in the Temp folder. We're ready to log on here. Go ahead
and do that, give this a second to log on. Now that we're logged on, let's see if the actual
activity worked. If we go to the Temp folder, there we go, all cleaned up. PolicyPak Scripts and
Triggers to the rescue.

Hope this helps you out. Remember doing this on the computer side because you can only do shutdown
on the computer side. Hope this helps you out. Thanks very much and talk to you soon.


