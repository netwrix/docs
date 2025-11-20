---
title: "Endpoint Policy Manager Admin Templates: Collections and Item Level Targeting"
description: "Endpoint Policy Manager Admin Templates: Collections and Item Level Targeting"
sidebar_position: 10
---
# Endpoint Policy Manager Admin Templates: Collections and Item Level Targeting

Are you driven to despair by the sheer number of GPOs in your environment? Do you wish you could
consolidate them into something more manageable? Your dreams have come true--Netwrix Endpoint Policy
Manager (formerly PolicyPak)'s Admin Templates Manager allows you to do exactly that, with the power
of Item Level Targeting.

<iframe width="560" height="315" src="https://www.youtube.com/embed/i2EUI7wU0aY" title="Endpoint Policy Manager Admin Templates: Collections and Item Level Targeting" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Whitney with Endpoint Policy Manager Software. Have you ever looked at your list of GPOs
and been driven to despair by the sheer number of them? Don't you wish you could somehow consolidate
them but still have all the policies do what they were doing before? Don't despair. We have the
solution with Endpoint Policy Manager's Admin Templates Manager. I'm going to show you how to use
item level targeting to give our GPOs some brains and target your admin templates based on the
criteria of your choice. Let's get to it.

Over here on my currently unmanaged machine, we're going to take a look at the Windows Settings
page. Right now, I can see and access everything here from System all the way down to Gaming, a
ridiculous setting to have at all. What I'm going to do with the Admin Templates Manager is trim
these settings, but hey, maybe different people need different settings available. In this video,
I'm going to be working with my East Sales users, my West Sales users, and my North Sales users.
Yikes. That's three GPOs I have to create, right? Wrong.

Let's take a look. Over here on my management station, I have my sales OU here, and under that my
East Sales, North Sales, West Sales users, and these OUs underneath that. Normally, I'd have to make
one GPO for North Sales, one for East, one for West and so on, but in this case, I'm going to flex
my superpower and create one GPO right here against the whole sales OU, and I'm going to call it
Trimming Windows Settings. Now let's get in there and start making some magic.

Since I'm going to be targeting OUs with users in them, we're going to work over here on the user
side, so let's go to Endpoint Policy Manager, Admin Templates Manager, and we're going to start by
creating a collection. That's effectively a folder that will hold the policy that we're going to
create in just a few minutes, and it's where we're going to put our item-level targeting. First of
all, I'm going to create a collection for my East Sales users. Now, notice when I click OK, the icon
is black. This means that we haven't put the special sauce on it to target the collection
specifically to East Sales users, and anything in that collection currently will hit anything that
the GPO hits.

However, if we right click and choose Change Item Level Targeting, then we get the targeting editor,
and we can choose to target that collection based on, well, any of a number of different criteria.
You could go by Computer Name or IP Address Range. You could go by Site or Terminal Session. In this
particular case, I'm going to be limiting it by Organizational Unit, by OU, and this is my East
Sales collection, so I'm going to click those three dots, come down and find my East Sales users –
there we are – and make sure they're direct member and OK. Now notice that the icon changed from
black to orange, and that's just a really quick and easy visual reference for you to know that item
level targeting is on this collection.

Let's go ahead and create two more collections, one for my North Sales – and we'll go ahead and
throw that item level targeting on there right now. I don't have to go back and do it after the
fact, so let's go and find my North Sales users. There we are. OK and OK. Notice it went ahead and
just created it on an orange folder there, so let's add one more collection for our West Sales, add
our item level targeting one more time. Let's go down and find our OU, grab those three dots, and
find our West Sales users. Alright. There we go. Alright, now let's get in there and start creating
policy.

I'm going to choose Add a New Policy, and you may notice as I move around in here that this is
looking really familiar. That's because we are pulling from the same ADMX files that group policy is
pulling from as well. We're not reinventing the wheel. Let's go to Settings Page Visibility and
let's enable it, and you have the option on your syntax to do a hide or a show only. Now since I
want to limit this pretty extremely, I'm going to do show only, and I've already got the syntax in
here already, but I'm going to have my East Sales users only able to access the Display settings and
Bluetooth settings. There we go. OK.

Let's close this editor, move into North Sales, and we're going to do the same thing. In any other
situation, this would absolutely be conflicting, but again, we've put item level targeting on those
collections, which means each one of these policies is only going to the place we targeted it. North
Sales, we're only going to get to see the Network Status and Apps & features, so we'll go ahead and
say OK there, close out. Go to West Sales, and we'll go ahead and put them in there as well.
Settings Page Visibility, let's enable, and I'll copy and paste from here as well. Alright. There we
go.

What I'm going to do now, we've done the work, let's come over here and see the results. I'm going
to run a gpupdate just to move the hands of time forward a little bit, and just for good measure,
I'm also going to restart the machine, but don't worry. I'll use movie magic just to shorten that
sequence. Alright, let's do a restart just for good measure, and we are back. Let's check out that
Settings page now. There we go. We can only see the Display and the Bluetooth settings. Perfect.
Just what we wanted to see. Now let's log off and log back on as a North Sales user and see those
changes happening there. Alright, let's check out these settings. My North Sales users has access to
the Network Status only and Apps & features just like we told it to. Finally, let's log back off,
and we'll log back on as a West Sales user and see their settings. Alright, let's go check out our
West Sales settings. There we go. West Sales only has access to the Phone and Time & Date, just like
we said. There you go.

We were able to deliver three different versions of the same setting to three different OUs in the
same GPO. Again, with item level targeting, you can choose any of a number of different criteria. We
use OU in this video, and we saw it all working, and the best part is you can do all of this with
every ADMX file you have. If this superpower blows you away too, then sign up for our webinar, and
then we'll get you started on your free 30-day trial as soon as possible. Thanks so much.


