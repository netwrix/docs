---
title: "How to make a GPO backup for us to use at Endpoint Policy Manager"
description: "How to make a GPO backup for us to use at Endpoint Policy Manager"
sidebar_position: 40
---

# How to make a GPO backup for us to use at Endpoint Policy Manager

If we need a full GPO backup for troubleshooting, here is the CORRECT process for what we need from
you.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Fek8lHd_CIE" title="How to make a GPO backup for us to use at PolicyPak" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz. If you're watching this video, it means we've asked you for GPO
backup. Here's a Group Policy object that has a bunch of stuff in it. Maybe there's something we
need about the GPO itself. That's fine. I'm going to show you two things.

The first thing I'm going to show you, I'm actually going to do two things about what not to do and
then finally what to do. The reason I'm asking you to watch this video is that what we don't need is
an export of some setting. We may need that also, so provide that if you're asked. This isn't really
considered a backup. This is just considered an export.

If you take a look at any given setting in PolicyPak land, here's a collection. You can right-click
over that and export that as an XML. If we ask for an export, this is what we're talking about of
either a collection or if there's any particular setting in here. You can export those as well.

What I want to show you is how to make a backup of a Group Policy object that we can then import in
our world and see the guts of the Group Policy object. This comes up from time to time. How do you
take a backup of the entire GPO? You simply right-click and back it up.

I'm going to put this on the desktop here. I'm going to put it in a folder that doesn't exist. I'm
going to create a new folder called – and I'm going to hit F2 to rename this folder called
BACKUP2-DEMO. In BACKUP2-DEMO here, I'm then going to just hit Back Up.

You might think that this is what we need, and it generally is. However, inside here is a secret
hidden folder that we need as well. Very often when we ask for somebody to give us a backup, we
don't get the hidden secret folder. Let's go ahead and take a look at that BACKUP2 folder here.

It looks like everything is here. What people do is they right-click over this. You can see that
there's contents in here. You can see that there's a bunch of stuff in here. They're like oh, that
must be what we need.

What people do then is they right-click – don't do this. This is what not to do. They right-click
and save it as a zip file or send to zip here. This isn't enough. This isn't really what we need.

The reason why is that we need one level back. I'll show you why. If we take a look, I'm going to do
this from the command line because I'm a geek and that's where I want to go here.

There's a hidden system file there that we need. Let me go ahead and get to this folder. If we take
a look here, there it is, the secret manifested XML. I got to that file by doing a dir/ah. You can
see manifested XML here.

If you were to just send us this folder with the contents in it, that's not enough. I don't have
what we need. Instead, what I want you to do is to take the backup of the actual folder. Here's the
backup to demo folder that we backed up into. Here if you then send to a compressed file, that's
good enough. Then that gives us enough to go on.

You can double check that by double-clicking inside the zip and making sure that inside here that
manifested XML is present. Without that, I can't do a backup of this group policy object to see
what's going on. I hope this gives you enough to go on.

If you're watching this video, that means we need you to back up a Group Policy object, get it to us
as a zip in this format with the contents of the backup and the manifested XML file. That way we can
take the steps we need to help you out. Thank you very much. Talk to you soon.

