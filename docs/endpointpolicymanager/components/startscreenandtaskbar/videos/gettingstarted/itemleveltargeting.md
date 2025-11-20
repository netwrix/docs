---
title: "Endpoint Policy Manager Start Screen Manager: Using Item Level Targeting"
description: "Endpoint Policy Manager Start Screen Manager: Using Item Level Targeting"
sidebar_position: 40
---
# Endpoint Policy Manager Start Screen Manager: Using Item Level Targeting

Automatically specify "who should get what" settings based upon conditions like security group,
Laptop vs. Not laptop and so on.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Y9CIdIDhAZQ" title="Endpoint Policy Manager Start Screen Manager: Using Item Level Targeting" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak Start Screen Manager: Using Item Level Targeting

In a previous video, you saw me use Netwrix Endpoint Policy Manager (formerly PolicyPak) Start
Screen Manager to dictate a group called My Important Apps to everybody on the machine. But what if
you wanted to have different people get different groups? That's easy enough to do, and I'll show
you how to do it with Endpoint Policy Manager.

This is East Sales User 1 who is currently logged on, and he's getting "My Important Apps." Let's
maintain that for East Sales Users, so what we'll do is we'll go over to "Collection 1" over here.
Let's rename that. Let's "Edit Collection" and call it "East Sales Users." While we're here, we'll
change the
"[https://www.policypak.com/pp-blog/item-level-targeting](https://www.policypak.com/pp-blog/item-level-targeting)"
and specify that this stuff will only work when the "Security Group" is our "EastSalesUsers."What
we're doing is we're marrying using item-level targeting and saying do this stuff called "My
Important Apps" when the guys are "East Sales Users."

Let's go ahead and "Add Collection" and we'll call this "West Sales Users." We'll click on "Item
Level Targeting" and we will specify the "Security Group" being "WestSalesUsers." Now we have a
collection called "West Sales Users" here. We're going to for our West Sales Users create another
group ("Add/New Group"). Let's call it "West Apps."

We'll just add two things here. Let's go ahead and add WinZip and we'll add Firefox. We'll go ahead
and "Add/New Desktop Application Tile," "Registered application" and we'll go ahead and pick
"Mozilla Firefox" as the first one. There we go. We'll make that "Medium," and we'll go ahead and
call this "Firefox."

We'll create another one. "Add/New Desktop Application Tile," "Registered application" and we'll
pick "WinZip." Here we go. Now that we've done that, I'll also make that "Medium" here and call that
"Winzip." That's all there is to do, so actually I'll go ahead and close this for now.

I just want to make sure. Right, so this GPO is linked over to all of my "Sales" team. Let me go
ahead and rename that to call this "PPSSM Sales Demo." So this GPO is hitting all the "Sales" and
therefore the guys in "East Sales" and "West Sales" are going to get this Group Policy Object.

Let's go over to our machine here. I'll run GP Update, but I don't expect any changes. If I go right
here ("Command Prompt") and type "gpupdate," the goal is that we've tied the original settings down
to East Sales Users. Then when we change user over to West Sales User, that's where we're going to
see the change. So on the same system, we'll have two different Start Menus: one for the East Sales
Users and one for the West Sales Users.

Let's close this out, and let's check it out. We shouldn't see any change, and we don't. That's
exactly what we wanted. Let's go ahead and "Sign out." We'll go ahead and sign in this time as
"westsalesuser1." This is where we want to see the West Sales User Start Menu be different than the
East Sales User. Let's go ahead and take a look at the Start Menu here, and he just gets "West
Apps."

So with one Group Policy Object here that we created, we have different collections. The collections
are using item-level targeting and they're doing different things based upon different Active
Directory group membership. You don't have to use Active Directory group membership. You can say
when I'm on a desktop do this, when I'm on a laptop do that. When I have this application do this,
when I have that application do that. It's incredibly flexible.

I just wanted to give you a quick taste of how that would work. One policy to rule them all. You
don't have to be stuck with one fixed policy. Just as simple as that. I hope this helps you out.
We're looking to get you started soon with Endpoint Policy Manager Start Screen Manager.


