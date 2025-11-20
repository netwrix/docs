---
title: "Endpoint Policy Manager + WVD: Manage the Start Screen and Taskbar"
description: "Endpoint Policy Manager + WVD: Manage the Start Screen and Taskbar"
sidebar_position: 40
---

# Endpoint Policy Manager + WVD: Manage the Start Screen and Taskbar

WVD is great. But finding the icons to run applications can be hard. Use Netwrix Endpoint Policy
Manager (formerly PolicyPak) to add visibility to your icons on the Start Screen and Taskbar!

<iframe width="560" height="315" src="https://www.youtube.com/embed/3I1M9kFznYk" title="Endpoint Policy Manager + WVD: Manage the Start Screen and Taskbar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi. This is Jeremy Moskowitz, former 15-year Group Policy MVP and Founder of Endpoint Policy Manager
Software. In this video, we're going to take the Windows Virtual Desktop icons and put them into a
very nice place in the Start Screen.

Now they are here in the Start Screen already hanging out under "F" for me for "Fabrikam." But what
I know that people want to do is to actually get the right icons on the correct side on the right
side at the right time. That's what the Endpoint Policy Manager Start Screen & Taskbar Manager does.

Not only can we put icons here on the right side, we can also put icons on the Taskbar ready to use.
So instead of having to have your users know the secret sauce of the "Remote Desktop" or having them
have to know where to find them on the left side, we're going to plant them squarely where they need
to be on the right side and squarely into the Taskbar.

How do we do that? To make things go a little bit faster for this video, I'm doing something that's
a little unusual. I'm having the guy who is on this machine—and this machine is going to represent
your laptop or this person's laptop—just for the sake of this demonstration this person is a Group
Policy editor.

This person, EastSalesUser1, has created a GPO called "PP Start Screen for WVD," and here's the GPO
itself. We're going to do this in the "Endpoint Policy Manager" node in the "Start Screen Manager
for Windows 10" first. We're going to "Add" a "New Collection."

The collection describes the style you want to use. I'm going to use "PARTIAL (PRESERVE)" which is
going to leave what the user already has in place and add my own stuff. I could also do "FULL
(REPLACE)" which would nuke what they have, but I'm just get leave what they have in place.

The next thing I want to do here is to create the actual group name, so I'm going to "Add" a "New
Group" called "WVD Apps." There we go. You can have multiple groups if that's what you want to show
on the Start Screen. Then I'm going to "Add" a "New Desktop Application Tile," and I'm going to add
what's called a "Custom application."

Now what's happening in Windows Virtual Desktop land is, if we take a look here at all the icons,
let's take a look at "Firefox," for instance. If we right click and go to "More/Open file location,"
the icons are all hanging out here on the "Start Menu" and that's great. We're going to leverage
this information right now.

We're going to right click over here and go to "Properties." We're going to take this "Target"
location, and we're going to paste it in place here and click on "Next" and that's going to open up
more items.

The thing, however, is that you can see that it's referencing a specific user here, which is not
great because you don't everybody who gets this particular policy setting to try to use these
credentials. You want them to be using their credentials all the time. So we have to do a little bit
of replacement therapy here. We're going to exchange this with "`%username%@%userDNSdomain%.`" That
is how we're going to replace the username.

The other thing we need to replace here is you can see what happens is the "msrdc" is calling a
particular user's "rdp" document here. You can see all that. That's not good, so we need to replace
that as well. We're going to take this "`C:\Users\EastSalesUser1.FABRIKAM4000\AppData\Local`" stuff
and replace all that with "`%localappdata%.`"

So what we're doing is we're going to evaluate this. For every single person who gets this policy,
we're going to run the "msrdc" application against that particular person's "localappdata" and feed
in the correct "username" and "userDNSdomain" for them to log on. That's the secret sauce here.

The next thing we want to do is give it a "Shortcut Name," so I'll call this "WVD Firefox." You can
give it any name you want. Let me go ahead and also "Change icon." The way we'll do this is that we
will go here, click on "Change icon," and we'll capture the icon information from WVD and click into
it and we're off to the races. That's all there is to it, and we'll go ahead and click "Next."

We can make it a "Medium" icon or a "Small" icon and we can change exactly what "Column" and "Row"
it's in. If you don't do that, we'll make a decision for you. And that's it. You're off to the
races.

Why don't we do one more, or actually we can do two more since we're here. I'll "Add" another "New
Desktop Application Tile." I'll do a "Custom application." And then once again let me go ahead and
find the Windows Virtual Desktop icons. The one that I want this time is "Google Chrome."

Now for some reason when we published this application in Windows Virtual Desktop, the Chrome icon
didn't shine through. I'm not exactly sure why. Maybe that's just a preview thing. But long story
short is that's going to be a little bit problematic if you want to put an icon in there. So let's
go ahead and fix that problem.

So the first thing we want to do is change the "Target Application." Like I said, we're going to go
ahead and change the username over to "`%username%@%userDNSdomain%.`" Okay, we've got that guy. And
then we'll, like I said, find the reference to the particular user and local app data and change
that to "`%localappdata%.`" And you're off to the races. We'll go ahead and click "Next."

Now we can also give this a name. We can call this "WVD Chrome," and then we'll "Change icon." Now
again, because the icon didn't shine through for some reason, we have a couple choices. Choice
number one is to point to an application that exists locally on the Desktop. That would work, and
then you can pull the icons from there. Another choice is to "Look for icons in Shell32" because we
know that's going to be on every machine. Then you can pick an icon like this little star guy here
or something like that. And we'll go ahead and click "Medium" as well.

Why don't I do one more, and the thing I want to do is a full Desktop here. So maybe I'll pick this
guy here: "Win10 on Hostpool1." I'll go and get these "Properties" here. So we're really just doing
the same thing again and again. So we'll go ahead and click on "Add" a "New Desktop Application
Tile," "Custom application." We're going to paste that in and click "Next."

We're going to change the username part over to "`%username%@%userDNSdomain%.`" Okay, and then the
last mile again is to find the reference to local app data for that guy and then move it to
"`%localappdata%.`"

All right, so then we'll call this "Full WVD Desktop," and then we'll change the icon. And we can
use that icon. It came out fine, so we'll go ahead and click on "Change icon here." Copy that guy.
Paste it in here. And there we go. We're off to the races. We'll go ahead and click "Next." We'll
make this a "Small" icon, do something a little different.

Now here's the thing. You probably want this particular "WVD Apps" group to only hit when you're on
your real machines. You probably don't want this same Start Screen layout to show up when you're in
a virtual desktop. So how do I do that? Well, we need some criteria to know what our machines are.

Now this machine I'm actually on, if I type "hostname," this machine I'm actually on is
"Computer10." All my real machines start with the word "Computer" in it. Okay, well, if I know that,
I can say only deliver the "WVD Apps" group when a certain condition is true. That's called
item-level targeting.

What I'm going to do is I'm going to select "Change Group Level Targeting" and say when the
"Computer Name" matches "\*computer\*"—only when it matches that—then it lights up orange which
means only do this stuff when that condition is true. So that's pretty nifty.

The last thing I want to do is to take some work that I already did here in Firefox, take this
"Target Application," and we're going to recycle that and also shove that into the "Taskbar Manager
for Windows 10."

So we'll create a new Taskbar collection ("Add Collection") and we'll "Merge" it with whatever is
already there. Then we'll create a new item here. So "Add" a "New Desktop Application." Again, we'll
make it a "Custom application," and this is on the Taskbar. We've already done the work. We've
already replaced everything we need to for Firefox. We've already got the username there and the
local app data. We're ready to rock.

We'll just go ahead and put the right icon in here. It doesn't really matter what this is called:
"WVD FF." "Change icon" to the correct "Firefox" icon. Right click, "Properties," "Change icon."
Grab that, paste that in here. Okay, so that's it. That's how you plant an icon on the Taskbar.
That's it. That's all there is to it.

So what I'm going to do now is I'm going to close all this out, and now let's go ahead and run GP
Update ("gpupdate") on this machine. That's going to get us the latest, greatest settings here to
verify that we got what we wanted. And then after this, we'll see our results when we log off and
log back on. That's when we're going to see the activity happen. So we'll do this first. We'll log
off and log back on. And then we'll log on as EastSalesUser2 and see what happens there as well.

Now let's log back on. Now that we're logged on, we can see that the Firefox icon is here on the
Taskbar, and we can also see it just the way we expected. We've created our group called "WVD Apps."
We can see that we have "WVD Firefox" and "WVD Chrome" our itty bitty full WVD Desktop.

If I go ahead and click on "WVD Firefox," you can see it's connecting to the remote session and will
start momentarily and be available to us just like that. That's exactly what we expect. And you can
also run it from the Taskbar and when you do, you'll see it launch exactly the same way right there.
You can see the little icon is available to note that it's there from WVD.

Let's go ahead and also just for fun "Sign out" here. We'll go ahead and log on as "EastSalesUser2"
here. He's going to get a very similar experience to EastSalesUser1. You should see the Firefox icon
in the Taskbar and the same items in the Start Menu. Although, we could have had a different
experience for EastSalesUser2 if we wanted, but we didn't do that.

Anyway, you can see there's the Firefox icon in the Taskbar and there are the "WVD Apps" here as
well. Now what's happening when we click on it, remember it's pushing through this person's username
which is EastSalesUser2@Fabrikam4000.com. So it's doing a little substitution for us which is pretty
nice. And there we go. There's Firefox WVD doing its thing.

And if we wanted to also—we didn't do it earlier, so let's go ahead and do it now—if we were to
click on the "Full WVD Desktop" experience, it's going to push that all the way through because it
knows that person's username because you substituted it when we were creating the icon. So if we
were to ask, "Who am I?" here, it's a little hard to tell. But if we were to go to a "Command
Prompt" and ask "whoami," there you go. There's "EastSalesUser2."

So all said and done, getting the icons on the Start Menu for your real machines or even inside your
Windows Virtual Desktops is super easy to do, and we'll have another video for that. So I'll go
ahead and "Sign out" of this.

I hope this helps you out and gets you started. The whole goal for this video, once again, is to
enable your real machines instead of them trying to find the icons they want on the left side or
have to know the magical application in order to launch Windows Virtual Desktop, just plant the
applications they need either on the Start Screen or on the Taskbar using Endpoint Policy Manager
Start Screen & Taskbar Manager.

I hope this video helps you out. Looking forward to helping you get started real soon.

Thanks a bunch.

