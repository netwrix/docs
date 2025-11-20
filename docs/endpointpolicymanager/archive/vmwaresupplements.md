---
title: "Endpoint Policy Manager supplements VMware View"
description: "Endpoint Policy Manager supplements VMware View"
sidebar_position: 230
---

# Endpoint Policy Manager supplements VMware View

VMware View is an excellent app. But that still does not solve some of the problems you have right
now: how are you able to guarantee key application and operating system settings for users? How can
you prevent users from messing up their apps? How can you ensure users will not work around your
important security and operating system settings? Watch this video to find out.

<iframe width="560" height="315" src="https://www.youtube.com/embed/uXFtzbSZdyE?si=4TamfffNC_NolRZc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak supplements VMware View Video Transcript

Hi, everybody. This is Jeremy Moskowitz, Microsoft MVP, Enterprise Mobility and Founder of PolicyPak
Software.In this video, we're going to learn how PolicyPak integrates directly with VMware View.

Let's go ahead and get started. Let me go ahead and run my "VMware View Client." I'll connect and
I'll log on as probably the same way your users do. I know everybody's a little bit different. You
can see I've got two computers here. In fact, this one is my computer, the manager computer of the
IT infrastructure. This is my example user, so he's using a computer called "Computer1."

Let me go ahead and click "Connect" here. We'll use VMware View and scoot on into his regular user
virtual machine, his virtual desktop here. Just because you are using VMware View and using a
virtual desktop technology does not somehow mean you're magically more secure. In fact, you could
argue that the problem is worse because you can now have VMware View clients on lots of little
different types of machines. If your applications are insecure, then your network is insecure.

Let's go over some examples. By way of example, let's go ahead and run "Adobe Reader X" here. If you
go to "Edit/Preferences…" – now again I'm just a regular user here. A regular user can do all this
stuff we're about to talk about.

For instance"JavaScript," you want to make sure that you tell them to uncheck "Enable Acrobat
JavaScript." The question is, how are you going to do that? How are you going to deliver this
setting using Group Policy to your virtual desktops? Well, we're about to find out. The idea is that
if this is checked, which it is by default, you want to uncheck it.

Same idea here with "Security (Enhanced)." The default actually is that this thing should be
enabled. But if a user just clicks and unchecks it and clicks "OK," – my screen resolution isn't
exactly big enough for that, so let me go ahead and just make this a little bit bigger here. Well,
I'll just go ahead and click "Enter." That will be the same as "OK." So I'll say yes here.

As a regular user, I have now decreased my security posture on this virtual machine. If this is a
persistent desktop, it's exactly the same as if it was on a real laptop or a real desktop. As a
regular standard user, I've just made my company less secure.

As a regular user, I have now decreased my security posture on this virtual machine. If this is a
persistent desktop, it's exactly the same as if it was on a real laptop or a real desktop. As a
regular standard user, I've just made my company less secure.

That's one application with a lot of issues that you're going to want to manage. If we talk about
"Mozilla Firefox," a very popular application, some companies utilize Firefox as their browser of
choice for their web applications. If you go to "Firefox" and you go to "Options" here, there are a
lot of settings here for a user to possibly screw up.

Moreover, there are a lot of "Security" settings that they can work around. You don't want to be in
the place where users are working around your important security settings, even on your virtual
desktops. We're going to learn with PolicyPak how to lock this stuff down inside your VMware View
virtual machine.

Let's go ahead and move on to, say, "WinZip."WinZip here, I happen to be using the "Evaluation
Version" here. Let's go to "Settings/Options." You'll see here there are just a ton of places for a
user to possibly screw up.

Now I'm just using this as an example application. If you have home grown apps or other third-party
apps, these are the kinds of things that you're going to want to deliver using whatever technology
you want to deliver to the virtual machine.Maybe that's ThinApp, or maybe that's SMS, SCCM, whatever
you want, or have it baked right into the image. That's all great, but the question is, how do you
control and prevent users from working around these settings?

This here in "Passwords," I mean, you might want to set the "Minimum password length" to something
important like "10" or "11" and then check all these checkboxes and also prevent users from getting
to settings and getting into trouble. How are we going to solve all of these problems?

Well, again, this is from the user perspective here, so let me go ahead and I'm going to "Log off"
here as this user here. Now I'm going to rerun my "VMware View Client" and I'm going to log on as
me, the administrator, to my management station. That's this guy right here.

As I'm logging on here, what we're going to do right away – and you might have seen me do this in
some of my other videos for PolicyPak–is we're going to take the "PreConfigured PolicyPaks," which
are downloadable when you trial policypak.com. You can see we've got a whole army of Paks that are
available to you.

For these examples, we're only going to pick two or three. We've got "Acrobat Reader X" that we want
to use. We've got "Firefox" that we want to use here. We also want to use "WinZip (14 and 15)." But
there are a lot of other applications that have a lot of security concerns, like "Flash," "Java,"
"Lync" client, just all these applications. By the way, we're building more Paks every day. If you
go to the website, you'll see all the Paks that we currently have available to you.

If you've seen me do some of my other videos, you know that all you have to do is go to the
"C:Program FilesPolicyPakExtensions"folder. What we're going to do on our management machine is
we're going to take the preconfigured Paks that we provide, for instance"Acrobat Reader X" here, and
we're going to take the pre-configured PolicyPakDLL ("pp-Adobe-Reader-X.dll") and just "Copy
here…"We're going to do the same thing for, say, "WinZip (14 and 15)" here. We'll do the
"pp-WinZip.dll" as well. Lastly, we will go to "Firefox,""pp-firefox.dll." Great.

What we're going to do, we've now copied all the PolicyPaks that we need. Now we've got the three
PolicyPaks ready to go. We're ready to use Group Policy to do everything we want to do. We'll run
"gpmc.msc" here. We're going to just use the regular, good old-fashioned "Group Policy Management"
console here.

I'm going to dive down under my – I happen to have an OU called "PolicyPak" for this handy
demonstration here. Against all of my "Users," I'm going to create a "New GPO" here. I want to
manage each application. For instance, if I want to "Manage All my important apps using PolicyPak,"
I can do it all in one Group Policy Object or I can split it up into multiple Group Policy Objects.
There's really no wrong way to do that.

You see here, we've extended Group Policy so that there are "Policies," there are "Preferences" and
now there is "PolicyPak." If you dive down under "PolicyPak/Applications," you just go to
"New/Application"and you'll see all the Paks that you copied in. You could also create your own Paks
for whatever application you want, including homegrown apps or third-party apps as well as, like I
said, all of the pre-configured Paks that we happen to have already.

We'll just do these one-by-one. Here's "PolicyPak for Adobe Reader X." We'll go ahead and just do
this guy first. We'll go ahead and click on it here. There's a lot to configure here, so we'll just
go ahead and get started.

For "JavaScript,"we said we want to uncheck that. But unchecking it's not enough, because a user
could recheck it and we don't want to do that. PolicyPak has an awesome superpower where you can
right click "Disable corresponding control in target application" or "Hide corresponding control in
target application." So not only are we setting the setting, but we're also going to "Disable
corresponding control in target application"so a user can't work around it.

If we go to "Security (Enhanced)," you saw me uncheck that checkbox as a user. What I'm going to do
is I'm going to make sure that it's checked and also, once again, disabled. So I'm checking it and
"Disable corresponding control in target application."For the "Updater," we want to "Do not download
or install updates automatically." We're going to force that in.

Let's just check this out and make sure this all worked. We've locked and loaded that directive
inside the Group Policy Object. Let's go ahead and see it work. What I'll do, I'll move this out off
the screen here, and I'll rerun my "VMware View Client." I'll pick "Computer1" to log on to. We're
going to log on as that user who's going to get affected by this Group Policy Object.

Now again, this could be the first time they log on. This could be "N" number of times in the
future. They could be getting a completely new virtual machine. They could be changing job roles. No
matter what happens, because PolicyPak acts as part of the operating system like all Group Policy
does, we work alongside VMware View perfectly.

Let's go ahead and run "Adobe Reader X" and see what happens now. As a regular user now, I just go
to "Edit/Preferences…" and let's see what happens. Let's go right over to "JavaScript" and look at
that. We've unchecked it just like we said, and it's grayed out so a user can't mess that setting
up. That is awesome.

We click on "Security (Enhanced)." Sure enough, we've checked the checkbox and we've made it so that
the user also again can't work around that setting. Let's go ahead and go to the "Updater." We've
also now set it to "Do not download or install updates automatically," probably what you want. As a
regular user, they can't change this setting anyway, so that is a really helpful thing.

There we go, one down and two to go. Let's go ahead and let's do another one. Back in our management
console here, we'll go to "PolicyPak/Applications/New/Application."We'll go ahead and pick
"PolicyPak for Mozilla Firefox" here. We'll go ahead and click on "Mozilla Firefox" here.

Let's click on some important things, like maybe the "Home Page." We'll go to "www.policypak.com." I
mean, there are a lot of settings here, a lot of security things for you to set for your company. I
just want to prove a point that it works perfectly inside of VMware View. I'll go ahead and click
"OK" here and show you what it looks like on the client.

I'll move this out of the way here. I'll close this window out. Now I don't have to log off and log
back on for this to take effect. If I run "gpupdate," it's the same as if I were to log off and log
back on. Because PolicyPak is Group Policy, it just runs in the background, these settings would
just take effect naturally. But we're just going ahead and accelerating the hands of time here with
GPUpdate. You could log off and log back on, get a new VDI machine, anything like that.

Let's go ahead and run "Mozilla Firefox" and see what happens. There we go, perfectly. It connected
to "www.policypak.com." I didn't even let it finish. Maybe I should, just to prove a point. There we
go, so we set it. If I wanted to, I want to also show you that if a user decides they want to go to
the "Options" and change the "Home Page" to something else like "www.GPanswers.com" and they click
"OK," let's see what happens the very next time Firefox is run.

In fact, I should just be able to run "Mozilla Firefox" just like this. Just like that. Long story
short, the point of PolicyPak is that we deliver settings and lock those settings down so users
can't work around it. Even if they do work around it, we're going to re-guarantee those settings
always in the background.

OK, we've got one more to go. That's WinZip. Let me go ahead and bring my machine back here. We'll
go to "PolicyPak/Applications/New/Application."Here's "PolicyPak for WinZip 14 and 15." Let's just
set a couple of key settings here in "WinZip 14 and 15." Go ahead and click that right there.

For "Passwords," we're going to just jam this up to "11." While we're here, because this is a really
important setting, we're going to right click over it and "Disable corresponding control in target
application."We're also going to, let's go crazy, we'll check all four of these checkboxes and we'll
do something we haven't done before. We'll right click and "Hide corresponding control in target
application"for this middle one. We're going to literally remove the UI for that.

"Cameras," we don't use cameras at our company, so we want to "Disable whole tab in target
application."Again, just because you're using VMware View doesn't make you more secure. You have to
be proactive and make this more secure for them. We're going to use PolicyPak to deliver these
important Group Policy changes that deliver the settings, lock things down and make that application
more secure.

Let's go and run "gpupdate" again on the client machine here. Alright, so now that we're all updated
here, let's go ahead and rerun "WinZip." Go ahead and we, again, "Use Evaluation Version." Click on
"Settings/Options."

Let's head on over to "Passwords," and we have the settings set in Group Policy using PolicyPak. We
deliver the settings. We lock down the UI where we want to, even literally removing UI from the
application to make it more tight for the user so they can't possibly screw things up.You can see
here, we can remove the tab so users can't even click on these scary things or things that are
security concerns that you don't want them to click on.

In summary, that's the idea behind PolicyPak and the better together story with VMware View. You're
doing a great job getting VMware View out there. That means you're using virtual desktops. That
means you're saving money. But unfortunately, it does not somehow make you more naturally secure. If
you've got applications deployed using whatever technology, you need to still configure those
applications to ensure that what you set is what they get. That's the motto here at PolicyPak.

Thanks for watching. This is Jeremy Moskowitz, again. We're looking forward to having you try out
PolicyPak software. Click on the big old "Download" button on the right or make contact by giving us
a call.

Thanks so much. Talk to you soon.


