---
title: "Export Real GPO settings for use with PP Cloud or any MDM Service."
description: "Export Real GPO settings for use with PP Cloud or any MDM Service."
sidebar_position: 10
---
# Export Real GPO settings for use with PP Cloud or any MDM Service.

You've got GPOs, but you want to get them to work with Netwrix Endpoint Policy Manager (formerly
PolicyPak) cloud or your own MDM service. Here's how to take real GPOs and get them working with
whatever you already have.

<iframe width="560" height="315" src="https://www.youtube.com/embed/UH5GAP42LDc" title="Endpoint Policy Export Manager: Export Real GPO settings for use with PP Cloud or any MDM Service." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz, and in this demonstration, I'm going to show you how you can take your
existing Group Policy settings with Microsoft and export them for use with Endpoint Policy Manager
Cloud or your own MDM service like Intune or VMware Workspace ONE. Here's an existing GPO linked to
my sales team, and it's doing three things in Microsoft Group Policy land. It's renaming the guest
account, a security setting. I have a preferences item here under Preferences, Shortcuts that I'm
delivering the Endpoint Policy Manager shortcut icon on the desktop. I also have a ADMX setting for
Control Panel going to Show only specified Control Panel items, so I'm going to reduce what's
available in the Control Panel.

Let's just see this working in regular Group Policy land before we export it for use in non-Group
Policy land. How are we going to do that? I've already got it linked over to the right place. Let's
just go ahead and run gpupdate and just verify that Group Policy is working the way we expect. The
first thing we should see is that icon will come from Group Policy Preferences right on the desktop,
and we'll know Group Policy is working the way we expect. There we go. That's just what we wanted.
Then the second thing I wanted to check out, if I were to go to Control Panel, I should see only the
two icons that we said we wanted, Date and Time and Sound. That's correct. Then the last thing we
said we wanted to do was take a look at the renamed guest account. Let's verify that that actually
worked. If I were to run gpedit.msc, let's just make sure that that worked here. If I go to Windows
Settings and go to Security and go to Local Policies, Security Options, we can see I've renamed the
guest account, so you can see group policies working the way we expect.

How do we get ourselves ready to take those existing settings and export them? We make that super
easy for you. Here in the GPO under Endpoint Policy Manager, we have our GPO reduction and
Transition Pak folder here with our Export Manager. The Export Manager's job is to help you quickly
export stuff to make it very easy for you to use. What we'll do is we'll go ahead and export one by
one. The first thing we want to do is on the computer side export our Security Settings. We'll go
ahead and tell you what we can and can't do, and then we'll go ahead and get that policy that we
have, and we'll go to export it, and I'm going to put it in a folder on the desktop here called
EXPORT1. Okay, and this is my GP-SEC settings. There we go. I've exported that.

Next, I'm going to run the same thing on the user side because one of those settings was on the
computer side and two were on the user side. Next, I'm going to export my Preferences items here.
There we go. If I had drive maps, shortcuts, printers, whatever, great. Endpoint Policy Manager can
export them all, so we'll go ahead and take those. Go ahead and click Next, and we'll click Next
again, and I'm going to put it in the same exact location, which is my EXPORT1 location. Go ahead
and click Finish here, and then I'm going to export my Admin Template settings. If you have one or a
million Admin Template settings, it's super easy for us to look inside the GPO and export them here.
We also have other utility that will help you migrate them across multiple GPOS, but I'm showing you
the one for inside this particular GPO. I want to export the Show only specified Control Panel items
here, and I want to set it for that same exact location, EXPORT1, and I'll call this PP-ATM-EXPORT1,
and that's it.

We've taken our existing Group Policy settings, all three types, and exported them for use in
Endpoint Policy Manager Cloud or Endpoint Policy Manager MDM. In the next few videos, you'll see how
to take these exported settings, wrap them up, and get them deployed using your tool of choice. Hope
this video helps this out. Looking forward to having you watch one of the other videos on this page
and continuing your journey. Thanks so much.


