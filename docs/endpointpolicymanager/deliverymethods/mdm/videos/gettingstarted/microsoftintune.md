---
title: "Endpoint Policy Manager and Microsoft Intune"
description: "Endpoint Policy Manager and Microsoft Intune"
sidebar_position: 30
---
# Endpoint Policy Manager and Microsoft Intune

Windows Intune is awesome, but it doesn't have real group policy, or extra Windows 10 desktop
management features. Watch this video and learn how to use Netwrix Endpoint Policy Manager (formerly
PolicyPak) to deliver REAL Group Policy settings and Endpoint Policy Manager's extra settings to all
your Windows Intune joined Windows 10 machines.

<iframe width="560" height="315" src="https://www.youtube.com/embed/8u3bY9aqLPg" title="Endpoint Policy Manager and Intune: Use ANY Existing Group Policy or Endpoint Policy Manager Setting and deploy it with Intune." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz, founder and CTO of Endpoint Policy Manager software and Enterprise
Mobility MVP. In this video I'm going to show you how you can take your existing on-prem group
policy settings and get them over there to your endpoints that can be even not domain joined
alongside with Microsoft Endpoint Manager and Endpoint Policy Manager. How do we do it? Well, let's
go ahead and take a look at this example.

The idea here is that we've got a GPO chalk full of stuff. For instance, here's some computer side
security settings. Some of these items may be available in InTune land. Some of them aren't. For
instance, I'm manipulating the Rename Guest Account. You can see I've renamed that to ppGuest.

If I were to go dive down under, say, user side Preferences and head on over here, there's a bunch
of things you might want to do. You might want to set an arbitrary registry setting. In this case
I'm setting DoubleClickSpeed for the mouse to 604, where it's normal value is 500. This can be
anything. This can be for a third-party app or any app you want.

Not only that, Endpoint Policy Manager can also take advantage of the existing group policy
preferences item level targeting. If you specify that this particular item should only take effect
on portable machines or when the computer name is Lab Machines or a particular Mac address range or
a file exists, Endpoint Policy Manager will support all of this quickly and easily. No brain power
involved.

The same thing with a group policy preference or shortcut or really any other group policy
preferences; Endpoint Policy Manager supports all of these. For instance, in this example, I've got
a shortcut called www.policypak.com, and it's going to head on over to the desktop. We're going to
do that only when the machine has got the computer name with the NetBIOS name as "ndj" for not
domain joined in its machine name.

Another setting that I might want to set is a group policy preferences item for devices where I want
to kill my evil CD-ROMs, do a little bit of device control and do not enable my CD-ROMs. If it is
enabled, I'm going to disable it. We might also want to set an admin template setting, something
that just doesn't exist. Microsoft Endpoint Manager has a lot of new settings from time to time if
you go under Devices and you go to Windows and then you go to Configuration Profiles.

You'll see that Microsoft Endpoint Manager does get new features from time to time, but it's just
not the same kind of parody level that you find inside the box for admin templates for group policy.
For instance, if I wanted to look for control panel stuff and I go to Next here, I'm just using this
as an example. Look, you can see computer control panel, but under there there's only two settings
here for personalization. That's weird.

If I go to user side Configuration Control Panel, there's only Printers. There's only a couple
things here for Control Panel, not very much. However, if you look inside the Microsoft side
Policies Admin Templates under Control Panel, just doing an AB comparison, you'll see this is where
all the good stuff is, all sorts of interesting settings here by way of example. For instance, one
of the settings that I might want to do is this guy, Show Only Specified Control Panel Items. Maybe
I want to trim the Control Panel to just show Sound and Date and Time. This is just something that's
not available inside of InTune land at present.

Those are all group policy settings. You might want to also do Endpoint Policy Manager settings.
Let's go ahead and do that too. Let's use our very famous File Associations Manager for Windows 10.
Let's go ahead and create a New Policy here real quick.

We'll just do PDFs to Acrobat Reader, very simple. We'll then go ahead and create a File Type of
PDF. Then we'll specify the program we want itself is going to be Acrobat Reader. That has to exist
on the endpoint, and that's it. We've made our file association just like that.

Now that we've got everything locked and loaded inside of a GPO, what does it take to get it lifted
and shifted over to Microsoft Endpoint Manager and over to our endpoint? Well, it's pretty easy. All
you need to do is do a quick export of each of the things.

I've got a folder here called Out1 that I'm going to go ahead and use here. I'll go ahead and close
this out. I've got this folder here called Out1. This is where I'm going to stuff all the XML files
I need.

What I can do is I can take this and just rip it and drag it there. There's my first one. I'll go
ahead and do the same thing for my group policy Preferences items that I mentioned earlier, my
arbitrary Registry setting. I'll go ahead and drag that guy over.

I'll take my Shortcut item that I made earlier. I'll drag that guy over. I'll take my Devices item
that's a group policy Preferences item and drag that over. Again, we could do this for any group
policy Preferences item as well.

To deal with the security Setting, that's a little bit different. There's no way to drag and drop
that. What we do is we give you a little exporter routine that's called the Security Settings
Manager Wizard. We're just going to read what's inside the GPO.

We find it. We then let you export it, and we'll go ahead and chuck it right into that same exact
folder here. We'll call it PPSEC-OUT1. That will show up there in that folder too. We're just
building the collection of settings that we want.

The last thing we want to do is that admin template, that Control Panel admin template item. In
order to get to that, we have a little external exporter utility that we have on our download. That
is called the Group Policy Merge Utility. This has a couple of different functions. It will help you
merge GPOs on-prem to have less total GPOs, very advantageous for very large and medium-size
organizations. What we can do as well is export those admin template settings.

I'm going to manually select that one GPO that I created earlier, my demo GPO. If you had lots of
GPOs you wanted to export with the admin template settings to Microsoft Endpoint Manager, you could
do that really easily too. I'm going to export that Show Only Specified Control Panel Items type,
and I'm going to export those selected policies, and drop it right into that little out box that I
created earlier, PPATM-EXPORT1.

Now that I've got my real group policies settings, my real group policy preferences settings, and my
real Endpoint Policy Manager settings all in one place, it's time to get them over to my Microsoft
Endpoint Manager. How am I going to do that? Well, you have to wrap it up into a little MSI, and we
give you this utility called the Endpoint Policy Manager Exporter utility. We're going to create a
new MSI installer here.

We're going to Add Existing Files from the out folder that we just created earlier. Let's just suck
them all in. Then we can sort and take a look at what's going on here. We can see there's our
registry item in Preferences Manager. There's our kill the CD-ROMs preferences item.

There is my shortcut preferences item. There is my control panel item that needs to go to the
computers and not the users. There is my Endpoint Policy Manager file associations items. Said
another way, you take any item you want in group policy land, Microsoft, security, group policy
preferences, or admin templates, plus all of Endpoint Policy Manager's magical settings, you drop
them to XML, you wrap them up as an MSI, which we're about to do, and we'll call this PPMDM-123. Now
we've got it ready to go. We've got this MSI ready to go.

Now let's go over to Microsoft Endpoint Manager and see what's next. What we'll do is we'll go over
to Apps here. We'll go over to Windows, and let's take a look at our Windows Apps. In order to make
the magic happen, there's three things that need to get deployed on the client.

Thing number one, the Endpoint Policy Manager client side extension; the Endpoint Policy Manager
client side extension is the thing that makes it go. I've already got this pre-assigned to all of my
computers that are Windows 10. The second thing to make it go is the MDM Licenses. There's a license
per MDM environment, and in this case I'm already licensed and wired up and ready to go.

If I were to click Add here, this is where I'm going to then take my Windows 10 Line of Business
App. We're going to select the MSI we created together earlier, select the App Package File. Go
ahead and select this guy. This is going to be my PPMDM-123. I'll go ahead and put that here, so
Endpoint Policy Manager GP and PP Settings.

I can give this a name, call it Your Company. That's fine. Then you are off to the races. Go ahead
and click Next. The assignments, I'm going to assign this for all devices just to make it easy on
myself for the sake of this demonstration. Of course, you can assign it to groups. Then that's it.

Now that we are done here, this takes a minute to sort of do its thing. Here we are on our endpoint.
Let's go ahead and take a look around before we download all these items from our InTune
environment. The before picture would be let's go ahead and start off in Control Panel land.

We can see lots and lots of icons. Remember, when this is over, we're going to be trimming this to a
very small subset with our admin templates item. Let's go ahead and open a Command Prompt. Let's
take a look at the group policy security settings.

We said that the guest account, we're going to have that renamed. We run gpedit.msc here. Let's go
ahead and take a look at what it is beforehand, Windows. We go ahead and take a look at Security
Settings under Local Policies. We can see the guest account not renamed yet. We'll go ahead and
leave this window open over here.

Let's also create another Command Prompt here. Whoops, just a regular Command Prompt. Let's do a
regedit. I said I wanted to have an arbitrary registry setting. Go for HKEY_CURRENT_USER, Control
Panel, Mouse. I wanted to set this value of DoubleClickSpeed from 500 to 604.

We also said we didn't want any evil CD-ROMs, so let's make sure we don't – oh, we can see our evil
CD-ROMs. That's fine right now. After the fact, that should go away. Lastly, we said that when we
open up a PDF, maybe we don't want it to open up in Edge, although I think Edge is a perfectly find
PDF reader. If you don't want to open it up in Edge, we told earlier that we want to open it up in
Acrobat Reader.

I'm going to click on my MDM environment. I'm going to click Sync. Then I'm going to wait for
everything to install. Remember, we're installing three things, the Endpoint Policy Manager client
side extension, the Endpoint Policy Manager licenses, and the Endpoint Policy Manager bundle of
settings that comes down to actually perform the work that has both group policy, group policy
preferences, and group policy security settings in them. I'll pause the video and come back as soon
as this is done.

We're back. Now that InTune has deployed the three moving pieces, we can see some things have
changed. First, we can see the icon here on the desktop, this group policy preferences item on the
desktop going to policypak.com, of course, and opening up Edge as the browser. Next, we said to use
Endpoint Policy Manager to open up PDFs in Acrobat Reader. Sure enough, we're able to do that. Go
ahead and just see this white paper called Why Am Microsoft Endpoint Manager Admins Need Endpoint
Policy Manager, available at our website policypak.com.

Then let's go ahead and take a look at some other items. We said don't show me Mr. Evil CD-ROM
anymore. You can see no more D drive. No CD-ROM. That's not a thing anymore.

Let's go ahead from the admin side, go to gpedit.msc. We said to rename the guest account of very
important security setting. Let's go to local policy Security Options and bam. Using InTune and
Endpoint Policy Manager, we're able to take pretty much any security setting and get that delivered.

We also said to any kind of arbitrary registry setting, regedit. You saw me earlier, I had 500 for
my DoubleClickSpeed. Now it's 604. All these values are being delivered. All the things, group
policy preferences items, group policy items.

I didn't show you the Control Panel. Here we go. The limited Control Panel. I know I just covered a
lot of things. I covered a lot of different areas in group policy. I covered admin templates here. I
covered group policy preferences here.

I covered group policy security settings when I renamed the guest account, and I covered Endpoint
Policy Manager settings. It's all exactly the same. You're going to take your existing on-prem group
policy settings, group policy preferences settings, and group policy security settings, plus your
Endpoint Policy Manager settings, export them, get them into XML format, wrap them up as an MSI, and
then use your InTune to do the magic.

Endpoint Policy Manager can help you immediately close the gap between what you need to do on your
endpoints and what's capable with Microsoft Endpoint Manager. I hope this video helps you out. I'm
looking forward to getting you started with Endpoint Policy Manager real soon. Thank you very much.


