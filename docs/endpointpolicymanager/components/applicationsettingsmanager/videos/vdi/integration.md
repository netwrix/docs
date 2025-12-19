---
title: "Endpoint Policy Manager and Microsoft VDI – Better Together to Manage Applications' settings"
description: "Endpoint Policy Manager and Microsoft VDI – Better Together to Manage Applications' settings"
sidebar_position: 10
---
# Endpoint Policy Manager and Microsoft VDI – Better Together to Manage Applications' settings

Microsoft's VDI solution is great. It's easy to set up, and just "works."

Now when users can take their desktop anywhere, virtually. They'll have the applications you give
them within the VDI image, and have a "clean" experience the next time they log on.

How great is that?

But there's still a problem. If you need to make a settings change to your image's application
settings, what are you going to do? Take the image offline, open it up, make the change and sysprep
it again?

Even then, you're only pre-baking in that setting and not enforcing it. That means that users can
cheerfully work around your security settings, within the VDI session. That's bad for support calls,
and definitely bad for your company's security.

So watch this video to see how Netwrix Endpoint Policy Manager (formerly PolicyPak) Application
Manager can ensure that users' applications within VDI sessions have the properly delivered
settings, plus ensure those key settings are enforced.

Add more value to your Microsoft VDI investment.

Tip: After you watch the video, please download our free whitepaper "What Most IT admins don't know
about
VDI": [https://www.policypak.com/integration/solutions/why-vdi-admin-need-endpointpolicymanager.html](https://www.policypak.com/integration/solutions/why-vdi-admin-need-endpointpolicymanager.html)

<iframe width="560" height="315" src="https://www.youtube.com/embed/ay1Llyn46Mg?si=vzWeY08Wu0xUnplS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

You might be wondering about how Windows Server 2012's personal "User Profile" fits in with Endpoint
Policy Manager Application Manager.

Here's the deal: Windows Server 2012 VDI's Personal Profile feature is really great, because it will
maintain any settings the user himselfchanges and ensure those settings are "there again" when he
roams changes Microsoft VDI sessions.

Great stuff. Really great stuff. Good job Microsoft!

But that still doesn't solve big problems you still have right now:

- How are you able to deliver and guarantee key application and operating system settings for users?
- How can you prevent users from messing up their apps or misconfigure the operating system?
- How can you ensure users won't work around your important security and operating system settings?
- How do you prevent "application popups" when applications want to self-update?

Microsoft's personal user profile disks simply cannot redeploy, adjust, lockdown or guarantee
application or operating system settings.

Only Endpoint Policy Manager Application Manager can.

No matter what device your users are using with Microsoft VDI, no matter what applications you've
got set – if you're not managing the application (or operating system) settings you've got a ticking
time bomb on your hands. When users work around that application or operating system setting, that's
a support call for you, and an immediate cost to fix it, and downtime for the user (on every device
they own.)

These kinds of costs are easily preventable. Because Endpoint Policy Manager Application Manager is
always ensuring the application's settings – within Microsoft VDI sessions.

Endpoint Policy Manager Application Manager prevents users from manipulating important settings, but
also quietly reapplies misconfigured settings if a user or application happens to work around them.

In short, Endpoint Policy Manager Application Manager protects your Microsoft VDI investment. And it
protects your users from themselves.

Microsoft's VDI is awesome. And Microsoft's personal user profile disks is awesome.

But neither prevents users from working around your important operating system or application
settings. It doesn't make your VDI solution more secure or prevent user-generated problems.

Only Endpoint Policy Manager Application Manager does that.

Endpoint Policy Manager Application Manager was designed by former Group Policy MVP Jeremy Moskowitz
– who "wrote the book" on Group Policy and desktop management, runs GPanswers.com, and lives and
breathes enterprise software deployments and desktop lockdown.

If you're ready to protect your Microsoft VDI investment we're here for you. Call 800-883-8002 and
let us know you're like a free trial of Endpoint Policy Manager Application Manager.

### Endpoint Policy Manager and Microsoft VDI – Better Together to Manage Applications' settings video transcript

Hi, everyone. This is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software.
In this video, I'm going to show you how to leverage Microsoft's VDI alongside PolicyPak.

To get started, let me show you my quick demo station computers here. What I've got on the screen
right now is my Server 2012 VDI machine. We've got five VDI possible target computers. If we look in
"Active Directory Users and Computers," we'll see them here as well because every computer must be
registered in Active Directory. There we go; there are the five guys.

Let me also walk over to this machine. This machine is called a "ThinPC." If you've never seen a
Microsoft "Windows ThinPC," it's actually sort of the equivalent of as if you were to buy a Dell
Wyse terminal or one of those kinds of guys that can get you connected quickly using RDP. Microsoft
gives you these Windows ThinPCs for essay customers specifically to do just what I'm about to do
here.

Let me go ahead and log on here. I'll use "fabrikamwestsalesuser2." I'll put my password in here.
Where it's going to take me first is the collection. I actually have a collection of Windows 8
computers. You could be using Windows 7 computers or Windows 8. I just happen to be using Windows 8
as my collection.

Once I see the collection, I'll go ahead and click on it. I'll say "Connect" to the things I can
redirect, and I'll give it my credentials again, which is "fabrikamwestsalesuser2." I'll wait for it
to spin up the VDI connection, the full virtual desktop, and then I'll be in the club. There we go.
We're getting warmed up. Windows is running. When we get to the Start screen, this is where we can
start launching some applications.

Now that my desktop is started here, you can see I've got three applications that are prebaked into
the VDI. If you didn't want to prebake them in, if you wanted to use something like App-V, you could
do that and stream the applications in. I'm not going to show that in this demonstration. We do have
other demonstrations on the PolicyPak website specifically with PolicyPak and App-V.

To get started, let's go ahead and launch any of these three apps. Let's start with "WinZip." Right
away, it gets confusing. The user doesn't know what to click on. They don't know if they should say
yes or no to certain things. That's not useful. You want to make it instantly available to them. Not
to mention, if an application has built-in security settings like in this case "Passwords," you want
to be able to dynamically deliver your changing IT settings as they occur.

We'll go ahead and we'll close out WinZip. We'll go over to "Adobe Reader X." When you run "Adobe
Reader" the first time, it asks you to accept the EULA. Now, you're probably thinking, "Of course,
Jeremy. I've got the EULA pre-agreed upon inside the image." That's true; that's great. You might
have that pre-agreed, but the thing is what about these other settings here?

You might have some key settings pre-allocated and preset inside your VDI image, but that doesn't
mean that a user can't cheerfully work around your settings. They could click on any of these 900 or
so settings and work around your important security settings like this one: "Enable Acrobat
JavaScript." You might have it unchecked in the image, but there's nothing saying that a user with
standard rights can't just click on it again and be insecure.

I'll give you another example. If you go to "Edit/Preferences…" here and you go to "Security
(Enhanced)," sure, it's great that it's checked on inside the prebaked in image, but if they just
unclick it and click "OK" and close the app, you're now insecure. That's not good.

What we're about to do is we're going to deliver these settings and lock them down so users can't
work around them. We'll also deal with "Updater." Now, of course, you might have turned this off
inside your VDI image, and that's great. But there could be a case where you forgot to do it, and
then you have to re-get the image, reopen it back up, re-Sysprep it, redeliver it. Boy, what a pain
in the neck. Instead, you can use PolicyPak to simply dynamically deliver the right settings at the
right time for the right people.

Lastly, let's talk about an application like "Mozilla Firefox." If you've got Firefox inside your
VDI and you want to ensure that the settings inside Firefox are secure all the time, let's go to
"Firefox/Options" here. Again, there's nothing preventing a standard user from just unchecking these
three important "Security" items and clicking "OK." You're now less secure.

How are we going to solve all these problems? Let's go ahead and go over to the Group Policy Editor.
We'll go to "Sales/East Sales." You can do what I'm about to do for both the user side and the
computer side. Maybe I'll do some on the user side, some on the computer side. Actually, I meant my
"West Sales/West Sales Users."

If I go to West Sales Users and say, "Lock down WinZip and Acrobat," I've now got a Group Policy
Object that's linked over to my West Sales Users, of which the person is logged on. On the user
side, you just go to "PolicyPak/Applications/New/Application" and you pick the Pak you want to
manage. We've got "Adobe," "Chrome," "Firefox," "Lync," "Java." We have actually about 100 Paks. I'm
only showing some of my top favorites here in this example here.

Let's go ahead and pick "PolicyPak for WinZip 14 and Later" first. Inside WinZip, we'll go ahead and
check all four checkboxes, set the "Minimum password length" up to "11." We'll do some PolicyPak
superpowers where we can "Hide corresponding control in target application" and "Disable
corresponding control in target application," literally gray and remove them so users can't work
around them. If we go to "Cameras," we can "Disable whole tab in target application." Now that's it.
You've locked and loaded your directive.

Another thing that PolicyPak has in common with Microsoft's Group Policy Preferences is that we have
this idea called "item-level targeting." Item-level targeting lets you, if you want to, dictate
specifically when these settings will take effect.

If you want to hit it when it's a particular "Terminal Session" or when it's a particular "IP
Address Range" or a particular "User" or group or a particular application is installed, you can set
up the targeting criteria and it will sense which things are true and if it's true, it will do all
those for you. Long story short: we have videos on item-level targeting on the PolicyPak website if
you want to check that out.

Click "OK." Now let's continue onward and do "PolicyPak for Adobe Reader X." Let's dynamically set
our important IT security settings for Acrobat ("Adobe Reader X"). Let's uncheck "Enable Acrobat
JavaScript." We'll right click over that guy and "Disable corresponding control in target
application," so we're unchecking it and graying it out.

If we go over to "Security (Enhanced)" we want to send the setting of "Enable Enhanced Security."
You saw me as a user work around it. I'm going to make sure that it's in fact embraced. While I'm
here, I also want to "Disable corresponding control in target application."

"Updater," it turns out I forgot to set that correctly inside my VDI image. No problem. No reason to
re-take it back in and take all that time to fix it. We'll just simply set it to "Do not download or
install updates automatically." Let me go ahead and might as well hit "Disable corresponding control
in target application" there as well. That's it. We'll go ahead and set those guys.

Let's just stop right there and see if we got those settings. We'll go ahead and go to the target
machine. We'll run "gpupdate" over here. Now, that's the thing. This is just part of normal Group
Policy. As long as you get the latest, greatest Group Policy stuff, you'll see the settings. You
could also go over to another machine and log on for the very first time or to a different VDI
session and see it there as well.

Let's just see if we get the WinZip settings first. "Options/Configuration…" sure enough, we get the
settings we're looking for here absolutely right. Let's go to "Adobe Reader X," go over to
"Edit/Preferences…" and sure, there we go. "Updater" is set to "Do not download or install updates
automatically." We'll go over to "Security (Enhanced)." That guy is set the way we want to as well,
and over to "JavaScript," the "Enable Adobe JavaScript" is now unchecked, exactly what we wanted.

Let me go ahead and close all these guys out now. Just to prove a point, let's go over to our second
ThinPC ("ThinPC2"). Let's log on as a completely different guy. Let's go ahead and this time select
"fabrikamwestsalesuser3," somebody who has never logged on before. As soon the VM has started, what
we're going to see is that the settings are dynamically injected into the VDI session using Group
Policy and PolicyPak.

There we go. We're logging on. Everything is great. Click on "Desktop" here. We'll go to
"Options/Configuration…" go over to "Passwords" and you can see that we've delivered the settings
properly as you would expect using PolicyPak. "Cameras" is locked down as well. Let's close that
out.

Let's go over to "Adobe Reader X," go to "Edit/Preferences…" over there, and there you go. "Updater"
is locked down. "JavaScript" is locked down correctly and "Security (Enhanced)." The settings are
all delivered and locked down the way you would expect. Let's go ahead and "Sign out" here. I'll
also log out of our other machine here. There we go.

Last but not least, we want to manage the Firefox settings. In order to do that, let's do that on
the computer side. What we'll do is say for all of our "VDI" machines, we'll "Create a GPO in this
domain, and Link it here…" and we'll call this "Firefox Lockdown and settings delivery using
PolicyPak."

I'll right click. I'll click "Edit" here. On the computer side, under
"PolicyPak/Applications/New/Application," I'm going to pick "PolicyPak for Mozilla Firefox." Think
about what I'm about to do here. For any collection of computers you have, you're about to guarantee
that anybody who logs on to those machines regardless of who they are is going to get the same
settings. That's very powerful.

I'm going to use "Mozilla Firefox" in this example. Let me set the "Home Page" to
"www.policypak.com." I'll lock it down with "Revert the policy setting to the default value when it
is no longer applied," a superpower from PolicyPak. I'll go to "Security." You saw me work around
these settings. I want to make sure users can't work around these settings, so I'm going to "lock
down this setting using the system-wide config file." I'm going to lock down each of these settings
as well. Let's go ahead and click "OK."

I'll log on to "ThinPC1" as "fabrikamwestsalesuser2." We've used him before. We'll log on here.
While he's logging on, we'll go over to this other machine here and we'll log on as our other
friend, "fabrikamwestsalesuser3." We'll log on as him over here. Alright, so now we're logging on to
each of our ThinPCs as two completely different users. Here we are. We're logged on on this computer
as "westsalesuser2." I'm logged on to this other computer as "westsalesuser3."

Now that we're both logged on to each of these computers here, we'll go over to "Desktop" and let's
head on over to "Mozilla Firefox." Let's take a look. If we go over to "Options" here, remember
those "Security" settings that the user worked around earlier are now locked down and general [?] is
delivered the "Home Page."

Let's go over to our other user, and let's go ahead and see if we have the same results over there.
Of course, we do because every user who logs on gets exactly the same settings, and that is a
superpower that PolicyPak has, delivering settings to a collection of computers where any user on
that collection is going to get exactly the same settings.

I want to give you one last reference here before we say goodbye, which is that this is the
PolicyPak website. Under "Integration" under "PolicyPak & Microsoft," I do want to point out
additional videos that will help you out. If you have "AGPM" in place with check-in and check-out
workflow management and you want to see how PolicyPak works in that scenario, we've got a video for
that.

If you want to see how we work with "SCCM," you can see that. If you want to see how we work with
"App-V" in case you are using VDI and App-V together, we have a fantastic better together story
there. This story I just showed you was with VDI, and this story is with App-V. You put them
together, you've got VDI and App-V – two stories, but two different videos.

Lastly, we also have another video on PolicyPak with "UE-V, Microsoft User Experience
Virtualization," which to be super clear, they don't do what we do and we don't do what they do.
User Experience Virtualization, what that would do is that if you made a settings change as a user,
it would remember that and roam it with you as you move from session to session.

PolicyPak on the other hand does the opposite. PolicyPak says that an important setting that you
have as an IT administrator is dictated to either your users or your computers regardless of the
session that they're on or filtered based on the session that you have because of item-level
targeting.

That's it for PolicyPak and Microsoft VDI. If you have any questions or you want to get started with
a trial, we're here for you.

Thanks so very much, and we'll talk to you soon.


