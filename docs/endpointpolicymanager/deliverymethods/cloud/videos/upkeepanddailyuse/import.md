---
title: "How to import GPOs to Endpoint Policy Manager Cloud"
description: "How to import GPOs to Endpoint Policy Manager Cloud"
sidebar_position: 50
---
# How to import GPOs to Endpoint Policy Manager Cloud

Backup your GPOs, and then quickly upload them to Netwrix Endpoint Policy Manager (formerly
PolicyPak) Cloud. Use our wizard-driven UI to take GPO contents for Group Policy ADMX, Security,
GPPreferences and/or Endpoint Policy Manager settings and quickly upload them. When you want the
FASTEST onramp from GPO to the Cloud... this is it !

<iframe width="560" height="315" src="https://www.youtube.com/embed/hovqVVeekU8" title="Endpoint Policy Manager Cloud: Instantly import existing real GPOs to Endpoint Policy Manager Cloud" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz. In this video I want to show you how you can take an existing GPO or
multiple GPOs and quickly import them into PolicyPak Cloud. Here's a GPO that's called DEMO GPO.
It's chalk full of stuff. Let me show you what I've got in this GPO.

To get started, if we were to go to Windows Settings, Security Settings, and take a look at Local
Policies, Security Options, you can see I've Renamed the Guest Account. I've got some Security
Settings in here. If I were to dive down under, say, user side and take a look at Preferences, I've
got a bunch of stuff here. I've got a Shortcut item here that puts something on the desktop.

I've got a Registry item here, and I've got a Devices item here. All the Preferences are here too.
Then if I were also to take a look at PolicyPak File Associations Manager, I've got some PoliyPak
stuff here.

The point is that no matter what your GPO's content contains, we're going to be able to take an
existing GPO backup or multiple GPO backups and then consume them right in the PolicyPak Cloud. Let
me show you how to do that. What we'll do is we'll go back here into – this is the GPMC. What we're
going to do is find the GPO or GPOs you want and right click and back them up.

When you back them up, I recommend that you put them right in a folder you can't miss. I'm going to
go to C:/, Make a New Folder, and call this DEMOBACK1. When you do this, you could put more than one
GPO in here. You can back up one, two, three, four GPOs in here. I'm just going to do – maybe I'll
just do two just to make it easy.

I'll do this other one too. Right click, and I will Back Up. I'll put it right here also in
DEMOBACK. I'm taking two different GPOs and backing them up. This one also is just chalk full of
goodies in here.

Now what we'll do, once we have it backed up, what we need is to find that folder, C:/, DEMOBACK1.
There's a bunch of stuff in here, including some hidden files that you can't see. Because you can't
see them, we want to make it so that you kind of can't make a mistake. We're going to ask you to
Send to a Zipped Folder.

When you do that, now you've got DEMOBACK1.zip. We know those hidden files are in there. Now in C:/,
DEMOBACK1, this contains our two backed up GPOs.

Now let's go into PolicyPak Cloud. The import routine lives in XML Data Files here. This is where
all of your policies live in PolicyPak Cloud. What we're going to do is Import Policies from GPO
Backup. We'll Select File here. Back in C:/ we said we're looking for that DEMOBACK1 Zip that we
created earlier. Here we go.

Let's go ahead and Upload it. Bing, bing, bing. We're going to see what's going on inside and give
you some give you some statistics. We know there's 2 GPOs and 13 Policies that we can consume right
there.

Once you've got this, you can pick the GPO that you want. The one that I really want to do is DEMO
GPO because that's the one I started with. You can also see the other one that I put here as well.
If you want to, you can put multiple GPOs in. I recommend you just do one at a time, but we force
you at this point to make some choices. I'm just going to import this one here.

If you don't know what the contents are here, let's say this shortcut item, we give you a little
brief overview of what's going on here. Oh, yeah, that's the shortcut to policypak.com. The point is
that we kind of give you the XML view of what's happening here. I'll show you another one here. This
is some items that manage the Control Panel. It will kind of give you like a brief overview of
what's happening here.

I've selected that I want this GPO to go forward. I'll then go ahead and click Next here. Now I'm
ready to rock. I can give each GPO's contents a name. If I want to call this LIVE-DEMO-123, this is
going to be the prefix. I hit Apply. Boom, that's going to be the prefix to each of these items that
I'm about to move forward.

What's that? You really don't want to move forward the Devices item? Then don't. Then you just don't
import the one content of the GPO that you don't want. You just leave the ones selected that you do
want. This really couldn't be any easier.

Once you're off to the races, you click Import. You just successfully imported five policies. If you
want, you can import anything else. You can go back around again if you want to and pick another GPO
and do it again. I don't want to do that. I feel like I've shown you what I need to show you here.

I'll exit the Wizard. Now what you'll see is that the bottom of your list – here we go – now
imported as items that you can use. If you wanted to do that shortcut item that you just did, the
LIVE-DEMO-123 shortcut, no problem. Time to go to Computer Groups, and you can go to your All group
or one of your special groups that you already have, your Roaming Computers group.

You can then link an XML file here. You can then look for available policies. You can look for the
one that has the word LIVE in it because that's what we just created earlier. Here we go, LIVE
Shortcuts. Go ahead and click that item and click Add. That's it. You're done.

If you want to make sure that that setting is the way you want here, you can go ahead and select
that. Go to the LIVE item here, and now you can actually also show the policy settings here in this
viewer. You are off to the races. You have now taken a real live GPO with tons and tons of stuff in
it, uploaded it, broken out its constituent XML parts.

They're now hanging out in XML data files, and you're ready to link them over to your beautiful
places in Computer Groups. Couldn't be easier to take existing GPO contents and get them into
PolicyPak Cloud. I think this is just amazing. I hope you do too. I hope this helps you out. Looking
forward to getting you started with PolicyPak Cloud real soon. Thanks.


