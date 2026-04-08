---
title: "PP Cloud + File Info Viewer: Get file info, without the MMC console"
description: "PP Cloud + File Info Viewer: Get file info, without the MMC console"
sidebar_position: 30
---
# PP Cloud + File Info Viewer: Get file info, without the MMC console

Instead of having to use your on-prem MMC snap in to create your Least Priv policies, use the File
Information Viewer instead. This lightweight utility enables you to get information about your
application and then copy/paste into PP Cloud editors !

<iframe width="560" height="315" src="https://www.youtube.com/embed/X65ajrbab-U" title="PP Cloud + File Info Viewer: Get file info, without the MMC console" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz and in this video, I'm going to show you how you can use the File
Information Viewer in conjunction with PolicyPak Cloud to set policies without needing to use the
on-prem editor. By way of example, let's pretend you wanted to create a new policy here for your
roaming computers. Okay, that's fine, so you go ahead and create and link a new policy here, and
we're talking about lease privilege manager, so if you go to PolicyPak Settings, Lease Privilege
Manager here, you can see we have the same policy types that you might see with the on-prem MMC
product.

What I'm going to show you here in this video is how to actually fill in most of these things
without having to use the on-prem editors first. By way of example, if you wanted to do, say, a new
executable policy here, go ahead and click on that. This wizard looks pretty much similar to what
you've seen before. We typically recommend that you do elevation and other things with a combo rule
like signature and file info. That's a very strong combination rule, and when you click Next here,
you then have to fill in a signature and the file information for your applications.

How are you going to do that? Again, traditionally what you would have to do is go to your on-prem
group policy editor, click Edit, consume and suck in an existing policy, then spit it back out. You
don't have to do that anymore. What we have now is a little utility. I'll go ahead and show it to
you here. In the downloadable bits, so when you go to download stuff in the PolicyPak Extras folder,
we now have this program that's a little helper utility called the File Information Viewer. Be sure
to click on the actual application and not the XML configuration and when you do, a little program
will launch. This gives you the opportunity to click on any application and get a whole lot of
information about it.

I have a bunch of stuff in my folder called Share, and in Share here, let's say I wanted to do
Ring-central meetings. I wanted to let that install elevated or something. If I double-click
RingCentral Meetings, hey, look at that, I get all the information I want. Here's the signature
block. I'll just copy that out of there, and I'll paste it, bang, right in there. There's my
signature piece and if I go to my file info piece, I need the name, the file info name and the
product info name. Let's go ahead and take a look. That's going to be under the Executable tab here.
Here's the file name, so you can go ahead and take this piece and just copy it one by one. Here's
the file name piece, bing, bang, boom. The version number would be copy and paste, so we can say
higher than or equal to that version. Then if I were to do product info Ring-central meetings, paste
that, and say higher than or equal to what we have here, that's really it. As of this recording,
this has a little bug in it. It should be fixed by the time you see this, so we're going to replace
the commas with periods here. That takes a second here.

Then that's it. You can then run that with elevated privileges and same stuff as usual, and you're
off to the races. You can do similar item if you want to with, say, Windows Installer policy. Here,
once again, if you need the signature and product info, that's going to require an MSI. If we go
ahead and use the same tool, click on an MSI. Let's click on here. We'll go ahead and find a demo
app and here's Skype setup. You can see here's an MSI. In doing so, you can get the digital
signature. We'll go ahead and copy and paste that in. Then we can go to Product Info Condition.
Here, we're looking for a product code or an upgrade code. Let's pick those if you want to, so if
you wanted to, say, take the product code is this. You could say it's got to match that exact
product code. Then you're off to the races. Now you can run with elevated privileges, and you've now
got all the information you need without having to use the on-prem editor to create your policy.

The File Information Viewer is very, very handy. Like I said, we're going to get that little comma
to period bug fixed, but this should get you enough information off to the races to start using the
in-cloud editors for all of the things you need to do your policies.

Alright, hope this helps you out. Thanks so very much and talk to you soon.
