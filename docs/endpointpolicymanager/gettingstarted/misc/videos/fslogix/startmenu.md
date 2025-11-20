---
title: "Endpoint Policy Manager + FSLogix: Manage the Windows 10 Start Menu"
description: "Endpoint Policy Manager + FSLogix: Manage the Windows 10 Start Menu"
sidebar_position: 30
---

# Endpoint Policy Manager + FSLogix: Manage the Windows 10 Start Menu

Managing the Windows 10 Start Menu after using FSLogix is a piece of cake with Netwrix Endpoint
Policy Manager (formerly PolicyPak). Use FSLogix to hide/expose apps, then use Endpoint Policy
Manager to manage those applications on the Start Menu and on the TaskBar. AWESOME!

<iframe width="560" height="315" src="https://www.youtube.com/embed/UyL7wJTCgGE" title="Endpoint Policy Manager+FSLogix: Manage the Windows 10 Start Menu" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak + FSLogix: Manage the Windows 10 Start Menu

Hi. This is Jeremy Moskowitz. In this video, I'm going to show you how you can tame the
[https://www.policypak.com/pp-blog/windows-10-start-screen](https://www.policypak.com/pp-blog/windows-10-start-screen)
with PolicyPak and FSLogix better together. In this example, I have a bunch of applications that are
installed on the machine, but I'm going to use FSLogix to hide or mask those applications. The
things is that you want to put them back with FSLogix for some users and put them into special Start
Menu groups.

That's exactly what I'm going to show you. Let me show you the lay of the land real fast. In fact,
if I were to "Switch user" and show you when I log on as "EastSalesUser1," FSLogix is exposing
"Google Chrome" and "WinZip." If I were to "Switch user" and log on as "WestSalesUser1" here,
FSLogix is exposing "Mozilla Firefox" and "7-Zip File Manager." Wouldn't it be great if, like I
said, you could have a singular group that had my important desktop apps and had just the apps that
were exposed to the user with FSLogix but the Start Menu was being controlled using PolicyPak.

It's drop-dead easy. Let's see how to do it. Here's my "Sales" team. I'm going to right click and
"Create a GPO in this domain, and link it here" and I'll call this PolicyPak Start Screen and
Taskbar Manager Demo ("PP SSM Demo") here. I'll then right click and click "Edit" in this Group
Policy Object. Now the best way to do this is on the user side, "PolicyPak." You'll go to the "Start
Screen Manager for Windows 10." My suggestion is that you would create two what's called collections
("New Collection").

A collection is going to evaluate when a certain condition is true, for instance, "When user is in
EastSales." And then there is some configuration here. "Partial" lets the user manage their own
groups. "Full" will obliterate what is already there by the user. So maybe I'll make "Partial" for
East Sales and obliterate it for West Sales. I want to make this collection work when the "Security
Group" is "EastSalesUsers." "OK."

We get a little folder there. I'll create another "New Collection" for "When user is in WestSales."
I'm going to make that "Full" and I'm going to change the "Item Level Targeting" for when "Security
Group" is "WestSalesUsers." There we go. So now we've got West Sales Users. Now in "EastSales"
users, we want to have a "New Group" and we'll call that group "Important Apps." There are a bunch
of different configuration items here. I'm not going to worry about that for the purposes of this
demo. In "Important Apps" we say for our East Sales Users we want to "Add/New Desktop Application
Tile," one for Chrome, one for WinZip. Let's go ahead and do that. We're going to select what's
called a "Registered application." This machine also has the application, so I'm going to go ahead
and pick "Google Chrome" first. We'll go ahead and pick a "Medium" "Tile Size" here and click
"Next." We'll call this "Chrome." It doesn't matter what it's called. Then we'll "Add/New Desktop
Application Tile" for WinZip. Let's go ahead and find WinZip all the way at the bottom.

There with go, "WinZip." Click "Next" and we'll make that one "Medium" also and we'll call this
"Winzip." There we go. We've created a little pocket for our East Sales Users that's going to create
a group for them. Let's just see if that works. Let me go ahead and "Switch user" to our
"EastSalesUser1" here and let's see some results. We can see results instantly. Just to prove I'm
not pulling a fast one on you here, if I were to go to the Start Menu of this machine, I don't have
that group ready to go.

That group doesn't exist here. Let me go ahead and run GP Update ("`gpupdate`") and give this a
second to finish up. Even while the user is logged on, there are the "Important Apps" right there
managing the Start Menu just the way you want. We'll come back to that. Let's go ahead and go back
to the "GPMC" here and let's create our second group, one for our "WestSales" users. We'll create a
"New Group" here. We'll call this Important Apps for West or "West Apps" or something like that. We
said we wanted to put Firefox and 7-Zip in there. Let's go ahead and do that. Right click, "Add/New
Desktop Application Tile." It's a "Registered application." We'll take "7-Zip File Manager" first
because it's right there. I'll make these icons "Small." Why not? We'll call this "7zip." I'll
create another one here for Firefox, which is under M for Mozilla.

I'll go ahead and find that guy. There we go, "Mozilla Firefox." We automatically figure out the
correct position for you. We'll call this "Firefox." Okay, great. Just like that, we're ready to go.
Let's go ahead and take a look. Let's "Switch user" here. We'll log on as our "WestSalesUser1" guy
now. Just to prove a point, this guy doesn't have the group you want. Let's go ahead log off and log
back on. I want to show you how fast this works.

Let's go ahead and "Sign out" and then sign back in. Here we are back in. If we go ahead and go to
the Start Menu, we took away all the applications because we made it Full and not Partial, and we
have the two applications for our "West Apps" and they run just like that. There's one more magic
trick up our sleeve here with regards to Start Menu and Taskbar, which is the Taskbar. The idea
behind the Taskbar is that you can add and pin items right here to the Taskbar. Let's go ahead do
that. This you can do right here under "Taskbar Manager for Windows 10." You just right click, "Add
Collection." You can give it any collection name you want.

I'll just give this "Coll 2." It doesn't matter what it's called. Then inside here, this is where
you're going to also add in your apps, either the desktop applications or your Windows universal
apps. It's okay if you even give it an application that FSLogix is hiding. It doesn't create some
kind of blank space or something weird. It just works the way you would expect. We'll click on
"Registered applications" here. I'll go ahead and pick "7-Zip File Manager" first. I'll call this
"7zip" here. I'll go ahead and "Add" another "New Desktop Application." I'm going to go ahead and
pick the next one we had, "Google Chrome." Pick that guy here, "chrome."

And I'm going to add in Firefox, which is under M for Mozilla again, "Firefox." Then I'm going to
add in WinZip as my last one here all the way at the bottom. Now you might be thinking, isn't this
going to hit every single person, both East and West? And it is, which is totally fine. Let's go
ahead and check it out and see it all work. In order to see this, you need to have GP Update
("`gpupdate`") run. You have to log off and log back on.

You only see the Task Manager change at logon time. We'll go ahead and GP Update ("gpupdate") here,
give this two seconds, and then we'll log off and log back on. We'll go ahead and "Sign out" and
sign back in. Here's our "WestSalesUser1." Let's take a look at the Taskbar now. We've added the
icons right here, and you can also see that the Start Menu is controlled. If we were to "Switch
user" to our "EastSalesUser1," let's just prove a point. Let's go ahead and just log off and log on.

At logon time, you're going to see the changes to the Taskbar. Let's go ahead and check that out.
There they are right there. So you have the Start Menu controlled. You have the Taskbar controlled.
Everything works just the way you would expect.

Applications hidden and exposed using FSLogix and the Start Menu and the Taskbar managed with
PolicyPak, great better together story. If you're looking to get started, hit us up and we'll get
you the bits and you can get started right away.

Thanks so much.

