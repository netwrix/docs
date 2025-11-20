---
title: "Using PP SCRIPTS to Revert Start Menu"
description: "Using PP SCRIPTS to Revert Start Menu"
sidebar_position: 20
---
# Using PP SCRIPTS to Revert Start Menu

If your Start Menu is a little unhappy, use these scripts to make it right.

<iframe width="560" height="315" src="https://www.youtube.com/embed/u59dI77JP8M?si=nOUK4FTUtGTghTG5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Using PP SCRIPTS to Revert Start Menu

Hi. This is Jeremy Moskowitz, Founder and CTO of PolicyPak. In this video, I'm going to show you how
you can get out of Start Screen madness. If your Start Screen has gone a little crazy, I'm going to
show you how you can get out of it and give something back to your users. There's a variety pack of
choices. In all circumstances, we're going to be using PolicyPak Scripts to get it back to normal.

What I've done here is sort of set the stage for an irregular looking Start Screen. Your Start
Screen may look even more irregular or less, but whatever. The point is that I'm going to show you
how you can get to a specific back to normal kind of screen.

How are you going to do this? We use PP Scripts. When you download the "PolicyPak Guidance" from the
portal, the guidance has a bunch of preconfigured XML that will help you for various situations. In
the "PolicyPak Script Manager Example Scripts," we've got "XMLs and not XMLs"). What you're going
for are the "XMLs."

We actually have some preconfigured scripts to help you get out of some jams here. I want to go
through them and show you how they all work. Actually, they're all pretty simple to use. The first
one we want to do is "PP-SCRIPTS-USER-SIDE-RESTORE-START-SCREEN." This is going to get you to the
default of what Microsoft would be laying down new as if you were doing it today.

Let's pretend your "East Sales Users" are flipped out. What are you going to do? You're going to
"Create a GPO in this domain, and link it here" called "PP Scripts Start Screen Helper." Then we'll
"Edit" this GPO here. We're going to be doing this on the user side. So we'll do this on the user
side, "PolicyPak" and go to Scripts Manager."

All you're going to do is take the script that we're talking about here. We're going to do this one
first. Just drag it in there. If drag-and-drop doesn't want to work for you for some reason, just
right click and "Import from XML."

Let's go ahead and briefly take a look at what this is going to do before we actually run it. It's
going to do a one-line "PowerShell script," which is delete our registry key and then stop Explorer.
That's all it's going to do. This script is going to be "Run as User," and we're doing it on the
user side. We also have this script running exactly "Once." You don't want to keep this running over
and over again. That would be kind of weird. We're just going to do it "Once."

Let's go ahead and see the result of when we do this. What we're going to do is take a look at our
Start Menu right now. It's unusual on purpose. Now if we were to go to run GP Update ("gpupdate") to
get the latest policy settings, what you're going to see is PolicyPak Scripts doing its thing. That
little flash is us killing Explorer because that's part of the script, and we just deleted that
registry entry.

When you do that, here's what the result is. You then get Microsoft's items back here. See what it
did? It just found the items that you had and didn't have. This would be what a standard screen
would look like right out of the gate new sitting today. So that's one way.

Let me go ahead and mess it up again just so we can get a feel for another messed up screen. There
we go. So that's script number one. Script number two is actually pretty similar except it actually
deletes a little bit more content. So if that first script doesn't want to work, you can use this
second script as well ("option2b").

This is going to also perform a "REVERT" here. So it's a little bit bigger. It has some more steps
in it. But the basic gist is that it's going to only do it "Once." It's going to do it on the user
side, but this time this script is going to run as the System. So it's doing a little bit more
stuff, and you're welcome to paw through it.

By the time this is done, let's go ahead and see the result of this second script here. We're going
to see another flash. That's us killing Explorer, and that will have laid down the newly rectified
Start Menu. Let's go ahead and see what we got out of that. Basically, the same results. We want you
to do it in this order. If for some reason the first one doesn't work, then go ahead and do the
second one.

Now let's talk about the third one, which is actually my favorite one. The third one enables you to
lay down a very specific start layout. Now how do you get a specific start layout? Well, you can
either use the one that I put together, or you can make your own. If you have a very specific start
layout that you want and you love this start layout, that's totally fine.

You can go to "powershell" and then you can do "Export-StartLayout." Then you can call it "out1.xml"
or something like that. Then if you take a look at "notepad .\out1.xml," what you're going to see
here is basically the Start Menu all laid out nicely in XML. That's cool. Keep that in your mind for
a quick second.

What you're then going to do is take this final script that I want to show you here which is
"PP-SCRIPTS-User-side-FORCE-specific-Start-Layout." If you take a look at the actual "Apply action,"
what you'll see here is right here is the my start layout, the one that I put together. You've got
to keep going, and there it ends. This is the one that I put together for you.

Now if you want to use yours and substitute it for that, that's great. You can totally do that.
That's the point of this script. You can substitute your start layout instead of mine, and you can
get whichever one you want. If you do nothing and you just drag mine in, that's great. It will look
pretty good. But making you want yours based upon something you're already doing.

You can see this script is going to drive in this particular layout. This script is on the user
side, but the script is being run as admin. So the script is not being run as user. And we're only
going to do it "Once." We don't want to do it "Always." We just want to do it one time. So we'll go
ahead and click "Save" here, and then we'll see what happens next.

Let me show you the before picture. And now here is the after picture. We'll run GP Update
("gpupdate"). PolicyPak Scripts will do that magic here. Let's go ahead and see what happens. That
flash says we drove it in.

Now it should lay it down the way you expect, and if it doesn't, a simple log off and log on should
show you the final result. Let's see what we've got here. You can see actually the Start Menu became
inactive. Now again, I've seen that, but I've also seen it work perfectly.

Let me go ahead and "Sign out" here, and let me log back on. Now that we're logged back on, there's
the Start Menu, the one that I put together. It's all laid out and ready to go. At this point,
everything is movable. You can do whatever you want, change it around. You're all set and ready to
rock.

I hope that these three scripts will help get you out of any jam that you could be in. With that in
mind, if you have any questions, please ask on the forums in the Start Screen and Taskbar Manager
forum.

Thank you very much, and talk to you soon.


