---
title: "ADM/X Files – why they cannot prevent user shenanigans"
description: "ADM/X Files – why they cannot prevent user shenanigans"
sidebar_position: 10
---

# ADM/X Files – why they cannot prevent user shenanigans

ADM and ADMX files seem like they would work, but that is not always the case. In this video, former
Group Policy MVP Jeremy Moskowitz shows how ADM and ADMX files do not perform the lockout you expect
them to. Jeremy demonstrates how a 3rd party tool like Netwrix Endpoint Policy Manager (formerly
PolicyPak) can actually deliver settings, plus perform lockdown so your settings are ensured.

<iframe width="560" height="315" src="https://www.youtube.com/embed/UK23JWVJm-c?si=3Yz1sgdu3OBnaN-k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Group Policy: ADM/X Files – why they cannot prevent user shenanigans video transcript

Hi, everybody. This is Jeremy Moskowitz, former Group Policy MVP. In this video, I want to talk to
you a little bit about ADM files and how they don't always work the way you expect.  
Let's go ahead and talk about any old application like "WinZip," by way of example. If you go to
"Options/Configuration…" here and you go to "Passwords," you might want to dictate these little
checkboxes here using ADM files.

Let's go ahead and experiment with that. I've got an ADM file over here ("Winzip.adm") that I'm
going to use. The technical term is "consume into a Group Policy Object." What I'm going to do is
I'm going to "Use WinZip ADM." I'll call that my Group Policy Object name. Click "Edit…" here.

Under "User Configuration/Policies/Administrative Templates," there is no WinZip stuff here by
default because it's not in the box. I'll right click and I'll "Add/Remove Templates…," click on
"Add…" and I'll get my "Winzip.adm" file.

As soon as I do this, you can see the little "Classic Administrative Templates (ADM)" shows up here.
You can see, I've got four little settings here. How are those settings generated? Inside this ADM
file, if I use "Notepad" here and I take a look at "Winzip.adm," you can see that I've got four
sections and each section modifies a value. This one is lowercase and uppercase and numeric and
symbol characters.  
Now that we've got these settings, let's go ahead and let's see how ADM files can help us. We'll go
ahead and click on "Enabled" here. We'll go ahead and do that for all these guys: "Next Setting,"
"Enabled," "Next Setting," "Enabled." Now we're delivering all four of these checkboxes.

Let's go ahead and go over to our target machine and run "gpupdate." As you might expect, when Group
Policy applies – either the very first time you log on or in the background – you're going to get
this Group Policy Object and therefore set your WinZip settings. Hold onto that thought for two
seconds.

Let's go ahead and watch "WinZip," "Options/Configuration…," "Passwords" and, sure enough, the ADM
file delivered those settings. You think to yourself, "Well, great." Now that they're delivered, if
a user goes to work around those settings and clicks "OK" and closes it, what happens the next time
you run "WinZip"? Well, the next time you run WinZip, a whole lot of nothing happens. That's the
first problem, because Group Policy itself only updates in the background and at log on time.

You think to yourself, "No problem. I'll just wait for Group Policy to refresh again in the
background." We'll simulate that with a "gpupdate" and we'll force Group Policy to download again
right here. As soon as it's done, you'll think, "I'll go over to ‘WinZip' and I'll run that again."
Go to "Options/Configuration…" and nothing changed.

Why did that not happen? It didn't happen because Group Policy with regards to ADM and ADMX files
will only deliver those setting exactly one time. I know, it's a brain burner. It only delivers
those settings exactly one time because what happens is that, internal, the version number of the
Group Policy Object hasn't changed.

People think, "I know, I'll just have the user log off and log back on again, and that will fix
everything up, won't it?" Well, let's see what happens. Let's run "WinZip" again as the user, go to
"Options/Configuration…" and it still doesn't work.

If you've seen this – this is your ADM file – you're delivering it to the user and it does work
because they get it the first and only time. Then the next time they want to work around it and
Group Policy updates, it doesn't update those settings. That is a big bummer. That is the problem
with ADM files. It can deliver settings, but it doesn't maintain those settings. As soon as a user
works around those settings, you are in the bad place.

Let's talk about PolicyPak. PolicyPak is a commercial utility that actually has a free mode and a
commercial mode. Let me go ahead and unlink this Group Policy Object (uncheck "Link Enabled"). I'll
"Create a GPO in this domain, and Link it here…" called "Lockdown WinZip using PolicyPak." Like I
said, there's a free version and a commercial version, and everything I'm actually showing here
should be part of the free version.  
If I go to "PolicyPak/Applications" here, then I'll right click and select "New/Application."
PolicyPak ships with a lot preconfigured Paks, really important things, things that store stuff in
the registry like "Acrobat" and "WinZip" and things that are a lot harder to configure like
"Firefox" and "Java" and "Flash."

Long story short, let's go down for the purposes of this talk let's talk about "WinZip 14 and Later"
again. We'll go ahead and click on that guy. You'll notice that it looks a lot like the actual
application itself. That part is really pretty cool. Under "Passwords," let's go ahead and check all
four of those checkboxes. This is now PolicyPak delivering these settings. We'll go ahead and click
"OK" here. We're delivering all four of the checkboxes.

We'll go back here. Because PolicyPak utilizes the Group Policy engine in the same way where ADM
files, ADMX files and Preferences use the Group Policy engine, as soon as Group Policy is delivered,
the PolicyPak directives ride right along with it. Here we go, "gpupdate" is finishing up.

We'll go ahead and run "WinZip," and let's see what happens. We'll go to "Options/Configuration…,"
go over to "Passwords" and look at that. PolicyPak has delivered all four of those settings.
Remember, when we used ADM files, we just said the user can just unclick all four of these guys and
just cheerfully work around the application. That's not good.

Let's see what happens with PolicyPak, because with PolicyPak it's actually very different. When you
rerun "WinZip" – no "gpupdate" required – you just go to "Options/Configuration…" again, and
PolicyPak puts back in the application's settings without Group Policy being involved. Let me say
that again because that's really important. Once the settings are on the machine, PolicyPak
redelivers the applications every single time the application is launched.

I can even go the extra mile to prove a point, and I'll disconnect the network cables. Let me go and
open up the "Network and Sharing Center," and I'll disconnect my network cables here. Actually, I'll
do this a different way, "Change adapter settings." Just to prove a point, I'll "Disable" my network
connection.

Now we can all agree there's no way on planet Earth that I am connected. You can see, Windows has
responded here. But with PolicyPak doing its thing, it doesn't matter. As soon as the application is
re-launched, because the settings have already been delivered, they are always redelivered, online
or offline. That is super awesome. Let me go ahead and re-"Enable" this.

Now what I just showed you is the delivery of the settings. Wouldn't it be great if you could also
not have user shenanigans in the first place? That is a cool PolicyPak superpower. Let me show you
what that looks like. Here, back in the Group Policy Object back on my management station, let's go
back over to "Passwords" and let's right click over this checkbox and "Disable corresponding control
in target application." Over here, we're going to "Hide corresponding control in target
application." I'm going to gray one out, and I'm going to hide the other one. That in and of itself
is pretty awesome.

Let's go ahead and see what we can do there. Run "gpupdate" on the target machine, and we'll wait
for this to finish. There we go. Let's head on over to "WinZip," go to "Options/Configuration…," go
over to "Passwords" and, yes, we're delivering all four checkboxes. But more important than that, if
we want to prevent user shenanigans in the first place, you can see that we've literally grayed out
the UI so the user can't work around it.

But there's even something more you can do. Inside the application itself, the user could still
uncheck the checkbox or move these items to someplace that maybe you don't want them to go at all.
While the app is running, it will actually maintain those settings. Wouldn't it be great if you
could actually ensure that when PolicyPak is delivering your settings, it's also locking down the
application's ACL, the actual entries themselves?

If we go over to "Passwords" here, we can right click over these and "Perform ACL Lockdown" for the
access control list. We'll literally lockdown the access control of the target application. Let's go
ahead and run "gpupdate" one last time to show that we want to ensure that those settings are always
going to be what we want. There we go.

Let's go over to "WinZip" here, go to "Options/Configuration…," go to "Passwords" and if a user does
some shenanigans that they shouldn't do – they uncheck values or change some settings – we make it
so that they are not even going to work while the application is running.

When it comes to setting your applications' settings, ADM files seem like a good idea but there's a
big downside. The big downside of using ADM files or ADMX files is that, yeah sure, it delivers the
setting, but then users can just cheerfully work around the setting. The settings are not reapplied,
and there's no magical lockout stuff.

Only PolicyPak, which hooks into the Group Policy engine, can take what you want with your
application and actually truly ensure that what you want to set is what they're going to get. The
idea here is that we've ensured that all four checkboxes are checked, or whatever your application
settings are, and even while the app is running no shenanigans can actually occur. That is the key
point of how PolicyPak works.  
With that in mind, if you're interested in learning more about this, you can come to one of the
webinars that we do at policypak.com. I hope to see you there.

Thanks so very much. Take care.


