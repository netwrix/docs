---
title: "Endpoint Policy Manager Scripts + Triggers: Perform actions at LOCK and UNLOCK of session"
description: "Endpoint Policy Manager Scripts + Triggers: Perform actions at LOCK and UNLOCK of session"
sidebar_position: 30
---
# Endpoint Policy Manager Scripts + Triggers: Perform actions at LOCK and UNLOCK of session

In this demo you'll see how to use Session Lock and Session Unlock trigger types with Netwrix
Endpoint Policy Manager (formerly PolicyPak) Scripts. It's easy to do ! Pre-test your script first,
then you're off to the races. Remember which processes require RUN INTERACTIVE though!

<iframe width="560" height="315" src="https://www.youtube.com/embed/p00SeWdMn7U" title="Endpoint Policy Manager Scripts + Triggers: Perform actions at LOCK and UNLOCK of session" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz, and in this video, I'm going to show you how you can use Endpoint
Policy Manager scripts and triggers to fire off activities when the session is locked and unlocked.
Now you should practice what you're doing to do before you jump into Endpoint Policy Manager scripts
and triggers. In this simple example, I'm going to start a process, Notepad, when I unlock the
computer, and I'm going to kill all Notepads when I lock the computer. I'm going to start when I
unlock and I'm going to kill all Notepads when I unlock.

Let's try this out one by one. If I were to have a Notepad already running here – in fact, if I were
to have multiple Notepads here just to prove a point, I can run PowerShell as a standard user here.
It doesn't have to be PowerShell, by the way; you can do the same thing with Batch Files or
whatever. If you wanted to see what happens if you stop the – if you were to run the PowerShell
command stopprocessnotepadforce, bang, you can see that that worked. If you wanted to see that
starting a process, Notepads works with this script, startprocess, C windowsnotepad. Bang, you can
see that that works.

Now that you've pretested your scripts, you're ready to go into group policy land and of course,
this works as well, perfectly well, in MDM or Endpoint Policy Manager Cloud. I'm just using group
policy in my example here. I do "PP scripts and triggers with lock and unlock." If I were to dive in
here and click Edit, what I'll do is I'll go to the users side here and then you could go to Scripts
Manager, and then right-click Add a New Policy here. What we'll do – again, I'm using PowerShell
scripts but you don't have to. You can use Batch or VB for Javascript. I'm going to use PowerShell
here and I've got the same script hanging out right here.

What I'm going to do is kill all Notepads on lock, so bang. This script does not have to be run
interactively because soon as you hit lock – there's no output to the screen, so it doesn't have to
be run interactively. There's no revert action here required for scripts. Then the trigger that we
said that we want is going to be at session locked. That's when we're going to nuke these things.
Session lock trigger policy, that's good enough for now.

Now let's create another policy here for the other guy, so let's go to PowerShell script, and now
we're going to start process on unlock. There's the start process for Notepad. Now this does have to
be run interactively because this is going to throw something out on the screen. Now this is going
to throw a little micro PowerShell blue for a second. If you don't like that, you can probably get
away with Batch script or one of the other scripts. I'm just using PowerShell for whatever reason.

There's no revert action here and again, this is going to be on the trigger of the unlock. That's
it. We're ready to rock, and we're ready to test it out. Let's go back over here. We'll run GP
Update, give this a second to catch up. Alright, now that we've got all this, let's go ahead and run
a couple of Notepads just to get started and we'll go ahead and get another one up and running here,
bing, bing, bing. Alright, so again, we're just testing out the trigger mechanism.

What we want to do is hit Control-Alt-Delete and lock and when we do that, what do we expect? We
expect that those two Notepads are obliterated and now let's go ahead and unlock and what should we
see? We should see that one new Notepad show up here. There we go. We can see we've only got the one
Notepad session here and if we were to lock again – okay, lock, bang, it's obliterated in the
background. Of course, we can't see it. Now if we unlock, bang, we put it back on.

Endpoint Policy Manager scripts and triggers enables you to at session lock or unlock time, do some
superpower magic and hopefully this example will give you some great stuff for your imagination.
Hope this helps you out. Looking forward to helping you get started real soon.


