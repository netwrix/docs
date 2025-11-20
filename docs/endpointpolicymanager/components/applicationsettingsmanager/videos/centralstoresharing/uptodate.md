---
title: "Keeping Application Settings Manager and Paks up to date"
description: "Keeping Application Settings Manager and Paks up to date"
sidebar_position: 40
---
# Keeping Application Settings Manager and Paks up to date

Upgrading from a previous version of Netwrix Endpoint Policy Manager (formerly PolicyPak) is easy.
Here are the basic steps involved.

<iframe width="560" height="315" src="https://www.youtube.com/embed/DvjjDh38_7Y" title="Endpoint Policy Manager: Upgrading from a previous version of PolicyPak" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak: Upgrading from a previous version of PolicyPak video transcript

Hi, everyone. This is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software.In
this video, I'm going to show you how to generally upgrade from any older version of PolicyPak to
the current version. It doesn't really matter what version you have or where you're going to. These
are, in general, the steps that you will do. We have this fully documented in the QuickStart and
User Guide in Appendix B. I recommend you also read that, but this is an overview video to help you
see the process end-to-end.

First things first is, of course, you'll get a bunch of things that are part of the download and
also the "PreCongfigured PolicyPaks." We always precompile the preconfigured Paks for you, and
they're ready to go. But you may have your own Paks. In this example here, I've got some Paks that
I've just been plunking around with, and I've called them "My Paks." You probably have a couple of
your own Paks by now, as well.

First things first, what you're going to do is you're going to update your own "PolicyPak Design
Studio" on whatever machine your Design Studio has. That is very important, because the Design
Studio not only updates itself but it also comes with two little side utilities that are also
updated. One is called "PolicyPak Exporter" and the other one is the "PolicyPakGPO Touch Utility,"
which we'll talk about in just a minute.

To get started, I want to show you something called Batch Compile for the PolicyPak Design Studio
here. It's easy to use. What I'm going to do – I'll just hit escape here at the introduction screen
– and I can go to "Tools/Batch Compile…" and I can "Add Folder…" like, for instance, the "My Paks"
folder that has two folders in it right now that I've been plunking around with.

What I'm going to do is batch recompile these guys all at once. If I have 20 Paks that I use, I can
batch recompile those. I'm not going to "Perform compile in a background" just so I can see it go.
You can see it's compiling the "Mouse Properties" one, and now it's moving on to "Region and
Language" and that's it. I've now recompiled all my Paks. That's step one is to make sure that
you've got the latest, greatest Paks that we've precompiled for you plus your Paks are now
recompiled, ready to go. We'll assume you've done that.

The next step is optional, which is you can do if you want to, you can make a backup copy of all
your "Group Policy Objects" in the GPMC. Here's the GPMC. I'm going to right click and go to "Back
Up All…" and back up every Group Policy Object that I have just to have a backup. Not a bad idea,
couldn't hurt.

While I'm also here, again, this is totally optional if you're extra neurotic and you want to have a
double backup of stuff. For instance, this "Mozilla Firefox" might be configured to have very
important settings in it. Simply go into the Pak, and then click on the "PolicyPak" button and
"Export XML Settings Data." If you want to, you can preserve these in some folder called "XML SAVED
DATA,"something like that. We'll call this "firefox1." Completely optional, not required. It's just
if you are looking for a  little extra safety, that couldn't hurt.

The next thing you're going to do – again, I'm already assuming that you've updated your "PolicyPak
Design Studio" – and now we're going to update the "PolicyPak Admin Console." Again, that's the GPMC
update here. I've actually already done that, so I'm going to assume that at this point you will
double click that and you're good to go. I've already done that part.

The next piece you can do manually or automatically. We suggest you do it automatically. This is
where the "PolicyPakGPO Touch Utility" comes in. When you click the "PolicyPakGPO Touch Utility," it
asks you, you've got your Paks that are precompiled here and also the new Paks that you've now
updated for the latest, greatest version. How do you get them into the Central Store, just the ones
you're using, and touch every GPO so that you're using the latest, greatest Paks?

We make this easy for you. You can "Upgrade both DLLs and Group Policy Objects" in one click, or you
can "Upgrade only GPOs" if you've manually updated the Central Store, or there's a third option that
we're not going to talk about right now called "Find & Repair Orphaned Paks within GPOs." We'll save
that for another day.

For now, we're just going to "Upgrade both DLLs and Group Policy Objects." We'll click "Next" here,
we'll "Choose Directory…" and we'll assume that I've moved all of my Paks into one directory here.
I'll pick this guy, the "PreConfigured PolicyPaks" right here.

What it's going to do is just make sure that it can see them, and it can. Again, these are the
source. These are the ones that I've now selected. Look what it discovered. It discovered I've got
three Paks that need updating. I've got one in "Local Storage" and two in "Central Storage" that are
old and that we're about to copy them over and make them new.

In one click, we can just click "Next," it will update all the ones that are checked and that's it.
All the source ones are now copied into the local and the Central Store as needed. When we click
"Next," we're now going to cycle through all of the Group Policy Objects we have looking for those
old Paks and touching all the Group Policy Objects. We can see we've got "524," "529," "531." When
this is over, it's going to take the latest version –  this recording is 533, it doesn't really
matter what version you're using by the time you look at this recording – it will touch all the
Group Policy Objects.

The very next time we click "Edit…" on a Group Policy Object like this "Firefox Citrix" one we
looked at earlier, when I look back in "PolicyPak/Applications" it has now updated the old version
to "533," which is the version of this recording. That's exactly what we would expect here.

The last step is updating the client side extension for all your target computers. We have other
videos for that, so be sure to see how to do that, but in short you can use anything you want using
Group Policy or SCCM or you can hand install it if you're so inclined. Once the client side
extensions are out there, all the latest features we have are going to be embraced.

By way of example, in this version we have a feature called item-level targeting. If you try to
"Enable item-level targeting," you get a little warning here that says make sure the latest CSE is
out there: "This feature requires CSE of at least version 3.7.530." In other words, this feature
won't work unless the client side extension is version "530" or later. With that in mind, I hope
that makes sense.

If you do have any questions, we're here for you.

Happy PolicyPaking! Take care.


