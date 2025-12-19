---
title: "Endpoint Policy Manager Start Screen & Taskbar Manager: Manage Windows 10 Start Screen & Taskbar with your MDM service (Basics with MDM)"
description: "Endpoint Policy Manager Start Screen & Taskbar Manager: Manage Windows 10 Start Screen & Taskbar with your MDM service (Basics with MDM)"
sidebar_position: 20
---
# Endpoint Policy Manager Start Screen & Taskbar Manager: Manage Windows 10 Start Screen & Taskbar with your MDM service (Basics with MDM)

The Windows 10 Start Menu is a beast to configure, and once configured, it's not at all dynamic.
Instead of leaving the Start Menu to users, YOU be in charge. See this video to get the basics down
in minutes, then deploy your settings using the MDM service of your choice!

<iframe width="560" height="315" src="https://www.youtube.com/embed/2PJdBeDKdFg" title="Endpoint Policy Manager MDM: Manage the Windows 10 Start Screen Like a Boss" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak MDM: Manage the Windows 10 Start Screen Like a Boss

Hi, this is Whitney with Netwrix Endpoint Policy Manager (formerly PolicyPak) Software. In this
video, we're going to learn how you can use Endpoint Policy Manager Start Screen Manager to manage
your users' start menus in Windows 10. We're then going to take those directives, wrap them up in an
MSI and deploy them using the MDM solution of our choice. In this video, I'll be using AirWatch, but
you can use whatever MDM solution you have, such as Intune or MobileIron.

When you first roll out Windows 10, you'll notice on the Start Screen it has kind of a lot of junk
in here. Maybe you want it; maybe you don't. Either way, it can be really tedious to manage this
using the in-the-box Microsoft method. It involves golden images, XML, PowerShell. The problem is in
addition to being tedious, it also isn't particularly dynamic. If you want to change anything, you
have to go through that whole golden image business all over again. We're going to use the Endpoint
Policy Manager method and then deploy it using an MDM solution.

To start off with, let's note that I am not domain joined right here. I could be and it wouldn't
change anything, but for this component that is not a necessity. We're also going to see that I am
indeed "Connected to AirWatchMDM MDM" service. Once again, I'm using AirWatch, but you can use your
solution of choice.

Finally, I want to point out that I do have the "Endpoint Policy Manager Client-Side Extension" and
the "Endpoint Policy Manager MDM Licenses for Endpoint Policy Manager" already installed on my
machine here. This is my endpoint, and I have to have those two moving parts to be able to make any
of the future directives work.

So we've figured out what the problem is; now let's figure out how to fix it. I'm going to go over
to my management station here, and I'm going to go ahead and open up my "Console" here, my GPMC. I'm
going to create a "New GPO." It doesn't have to be in any particular OU. I'm just going to call it
"SSM Settings." I'm going to go "Edit" this bad boy.

This can be done on the computer side or the user side. It's up to you. Whatever is best for your
environment. I'm just going to go over to the computer side for now. I'm going to go choose the
"Start Screen Manager for Windows 10" right here. The "Start Screen Manager" you have to start with
"ADD NEW COLLECTION." Right now, I'm going to just leave it being called "Collection 1" since we're
only doing the one.

You have some choices to make here. You can either use "PARTIAL" or "FULL." "PARTIAL" means that it
will merge your settings with the settings that already exist on the machine and users can still
create their own groups and pin their own tiles. "FULL" means that you're going to completely blow
away what is already there and the user can no longer pin their own tiles. I'm going to go ahead and
choose "PARTIAL" for this demo today.

I'm going to go ahead and create that collection. Within that collection, I'm going to create a
group. The group is what's going to contain my pinned tiles. I'm going to "ADD NEW GROUP." I'm just
going to call this "Important Apps." I'm going to leave all of this as it is set already, and I'll
tell it "OK."

Within that group, I can start pinning tiles. I can pin three different types of tiles. I can do a
universal app, a desktop application or an Edge tile. Let's go ahead and pin all three. I'll start
by clicking the "ADD UNIVERSAL APP" button, and we'll get a wizard that we'll just work our through.
We'll click "Next."

Now we'll decide which application we want. I think "Calculator" is a pretty important app. We'll
click "Next." Let's go big or go home. Let's make it "Large." Universal apps get three different
tile sizes, and so we're going to choose "Large." I'm just going to call it "Big Calculator," and
we'll "Finish" that out.

Then I'm going to "ADD NEW DESKTOP APPLICATION." Now it's recommended that when you're doing these
pinnings that you pin from a management station that has the same applications as your endpoints
will. If that's not possible, we have a helper utility that will make that work for you but we'll
have to go over that in a different video.

We're going to choose our "Registered application" here, and I'm going to wait for it to find all
the applications on this machine that I'm working on. I'm going to pin "Adobe Acrobat Reader DC." I
know that is on my endpoint as well, so I'm going to choose to pin that one. The desktop
applications only get two tile sizes. I see no reason to be "Small," so let's go "Medium." We'll
click "Next," and we'll just call this "Acrobat" and that's that.

Finally, an Edge tile is basically a link so that when you click on it, it opens Edge and opens the
link of your choice. So we will choose "ADD EDGE TILE." We'll give it a "Display name." I'll just go
with "Endpoint Policy Manager." The "URL" you can "Select from favorites" here if you want to, but
I'm just going to type it in here and click "Next." I can do "Small," "Medium" or "Wide." I'm going
to choose to make a "Wide" tile and click "Next." We'll give it the "Policy Name" "Endpoint Policy
Manager Link" and "Finish."

Great. Now we've created a group, and we've pinned three different tiles. We need to be able to wrap
that in an MSI somehow and send it over to our non-domain joined MDM enrolled machine. To do that,
what we're going to do is start by going back to "Collection 1" here. I'm going to right click and
choose "Export Collection as XML." I'm just going to put it right on the "Desktop." I'll just call
it "SSM Settings." It will pop up right there on the desktop in just a moment. There it is.

Now what we need to do is use the Endpoint Policy Manager Exporter Tool in order to wrap that XML up
in that MSI so we can deploy it to our MDM enrolled machines. Let's go to the "Endpoint Policy
Manager Exporter Tool" which installs alongside the admin console MSI. We're going to use it to
"Create a new MSI installer." We'll choose "Next."

We're going to "Add Existing Files." We will choose our "SSM Settings." It's going to "Install For"
"Computer" with a "Target" of "All Users." We'll choose "Next." We can give it a "Product Name,"
which is what's going to show up on "Uninstall or change a program" in your Control Panel. We'll
call it "PPSSM Settings." It will ask us where we want to save it. We'll just call it the same thing
and save it right on the "Desktop." It will pop up right here. There we go, and we're done.

The next thing I need to do is go log in to my AirWatch Console and upload it so that it can then
get deployed to my endpoint. However, since that takes a little while, I'm going to go ahead and
pause the video before I upload and deploy. Then we'll come right back as soon as that's done.

Now I do just want to point out once again that we already have deployed the "Endpoint Policy
Manager Client-Side Extension" and the "Endpoint Policy Manager MDM Licenses." We mentioned that
earlier in the video. Just pointing it out again. Those are what needs to be deployed in order to
make anything else work. We'll pause the video, and we'll come back once we have everything
deployed.

And we're back. I'm showing you right here that we do indeed have those Start Screen Manager
settings ("PPSSM Settings") installed on our machine. Once we close that out, we can go look at our
Start Screen. There we go. We have the "Important Apps" just like we directed.

If I click on any of these, it takes me just exactly where it's supposed to. The "Calculator" works.
"Adobe Acrobat Reader DC" opens right up. If I go to the Edge tile, then we'll go to
"www.policypak.com." So they all are there and they all work.

Now notice that there are still the original groups still there and the original pins. That is
because when we created the collection, we chose the PARTIAL (PRESERVE) option. That is why we
preserved what was already there. If we had gone FULL (REPLACE), then it would have knocked
everything out of here and it would have made it so that users could not change their Start Screen
anymore. One is a little looser; one is little more strict. It's up to you to decide which one you
want.

One other thing before we go, I just want to point out if I want to try to drag a tile over here, I
can't. This is a "Locked group." Even though I can decide that I don't want the "Xbox" anymore to be
there, I can't change the group that you dictated using Endpoint Policy Manager.

So there we are. If that's interesting for you, then let us know. We'll be happy to get you started
with a free trial right away.

Look forward to seeing you in the next video. Thanks.


