---
title: "Endpoint Policy Manager and Symantec Workspace Streaming and Virtualization"
description: "Endpoint Policy Manager and Symantec Workspace Streaming and Virtualization"
sidebar_position: 260
---

# Endpoint Policy Manager and Symantec Workspace Streaming and Virtualization

Picking up SWS and SWV to make application deployment easier was a smart choice. Now you manage,
lock down and re-mediate those applications too.

Whenever you need to change a setting, you don't have to re-open and edit that package. And even if
you did, there's literally nothing you can do to prevent users from messing with your settings. That
is, unless you have Netwrix Endpoint Policy Manager (formerly PolicyPak).

You will be managing your SWV applications settings dynamically using Group Policy, Altiris or SCCM
— quickly and easily.

<iframe width="560" height="315" src="https://www.youtube.com/embed/7nJZCHYn3To?si=ex83I-3q8EpBoAAB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Manage Symantec Workspace Streaming and Virtualization with Group Policy

Hi, everyone. This is Jeremy Moskowitz, Microsoft MVP, Enterprise Mobility and Founder of PolicyPak
Software.In this video, I want to show you the integration of how to manage Symantec Workspace
Streaming and Virtualization applications using PolicyPak.

To get started, I've got three applications here, but I want to prove a point. Let me go to "Control
Panel" and "Uninstall a program" here and show you that these applications aren't actually really
installed. No, of course, they're coming down from the "Symantec Workspace Streaming Agent" and
will, of course, be processed by the "Symantec Workspace Virtualization Agent." They're not really
installed; they're virtualized.

When I go ahead and run "WinZip" here for the first time, as you might expect, it's streamed down
from the Symantec Workspace Streaming server and, as we can see, processed by the Symantec Workspace
Virtualization server.

When this occurs, well, there are some problems – and there they are – which is that users are right
away prompted for settings that maybe they don't know what to do. Should it check for updates?
Should it not check for updates? What about the security settings about the application and all
that?

By way of example here, if I say "And don't ask me again," right away that's a problem for the user.
You don't want to be in that situation. Additionally, if you go to "Options/Configuration…"here and
"Passwords,"maybe you want to make sure that the password strength or any other important security
settings are actually delivered dynamically using Group Policy or Altiris or SCCM or whatever
management technology you have. PolicyPakis the magic. It can be deployed using, like I said, either
Group Policy or Altiris or SCCM, anything like that..

For instance, here we go. We've got "Passwords" here. We want to make these settings configuration
changes. Maybe we want to lock out "Cameras." You can't do any of these things using normal Group
Policy, but you can using PolicyPak.

Let's go ahead and see that work end-to-end here. Here, this is my Group Policy console. Again, I
happen to be using Group Policy in these examples. You don't have to. You can use a full deployment
tool like SCCM, like Altiris if you want to.

I'm going to call this "WinZip and other apps Lockdown." I'll right click over here. I'll click
"Edit," and I'll dive down under "User Configuration." You can see I've got
"PolicyPak/Applications."We've got over 50 Paks for you to use, preconfigured out of the box.

I've only got a handful of them copied to my management station here. You can see that they're
listed here, things like "Acrobat Reader,""Acrobat Pro,""Flash,""Java,""Office,""Firefox" and tons
of other important applications. If you are virtualizing them and streaming them using the Symantec
products, you can now manage those products using PolicyPak.

Let's go right to"WinZip" here, because that's the one we're talking about here. We'll go ahead and
double click it. The first thing you should notice is that our Pak looks just like the application.
If we head on over to "Passwords" here, we want to check all these important checkboxes and maybe
update "Minimum password length" to "11."

That's great, but that's not enough. Let's really ensure that user is locked down. We're going to
right click over that setting, and we're going to "Disable corresponding control in target
application."We're literally going to gray it out so the user can't make any settings changes.

We'll also go ahead and "Hide corresponding control in target application"for some of these
configuration options as well, so users can't mess with those settings.Under "Cameras," we can right
click and "Disable whole tab in target application."

Now that we've done that, the directive is locked and loaded into Group Policy. Let's go ahead and
run "gpupdate" here. Now again, if you're using a management utility like SCCM or Altiris, that's
perfectly fine. You can deploy your directives using those utilities. You don't have to be dependent
upon Group Policy if you don't want to. We just happen to work with Group Policy if that's what you
do want to.

Alright, now that GPUpdate is completed, let's go ahead and rerun "WinZip" here. Now let's head on
over to "Options/Configuration…,"go over to "Passwords" and there we go. PolicyPak is the magic. It
has delivered these directives plus performed the UI lockdown here under this setting, these
settings, checked all four checkboxes and eliminated the ability to use the "Cameras" tab.

Now if we uncheck these checkmarks and click "OK," you might wonder what happens if a user goes
offline or it doesn't have contact to a domain controller or anything like that. Well, PolicyPak has
the ability to reapply those settings at application launch time. Even if a user is offline or in a
subway or in Alaska or wherever, no problem. The next time the application is run, those settings
are instantly redelivered just like that.

Let's do another one. Let's go ahead and go to "Mozilla Firefox," a very common application. Let's
go ahead and run Firefox. Let's just see it real fast come down through the Symantec Workspace
Streaming and then utilized using Symantec Workspace Virtualization. As soon as this is done,
though, the question is, how are you going to actually configure and manage the application using
either Group Policy or your systems management utility? The answer without PolicyPak is, impossible
practically.

What we'll do is we'll go ahead and take a look inside Firefox for some key configuration settings.
Let's just go to "Firefox/Options." Let's take a look at some things that users typically like to
mess up. The "Home Page,"maybe you want to configure a homepage for the users. Under "Security,"
let's say the user unchecks all three of these important checkboxes. That's not good. They can just
click "OK," work around your settings.

Even if you imbed them into the corporate image, there's really no way for you to dynamically manage
these settings afterward and also optionally lock it down. That's what PolicyPak does.

If we go back to our Group Policy Object here, we can go to "New Application" and we'll pick
"PolicyPak for Mozilla Firefox" here. We'll go ahead and double click it, and we'll set the "Home
Page" – notice again that our Pak looks pretty much exactly like the app – "www.policypak.com."
While we're here, for "Security" we will check all of these checkboxes and really ensure that those
settings are going to be dynamically delivered.

All we've got to do once again is run "gpupdate," or if you don't want to use GPUpdate, you want to
use SCCM or Altiris or some other management utility, that's perfectly fine. We have other videos to
show you how to do that.

Alright, now that that's done, I'll go ahead and close that out. Let's go ahead and run "Mozilla
Firefox" and see if our settings were set dynamically using PolicyPak. We'll go to
"Firefox/Options." There we go. The "Security" tab shows that all three settings were set, and the
"General" tab shows that "www.policypak.com" is the now "Home Page."

If they change this to "www.oops.com" and they do something they shouldn't do, click "OK" and click
close, well the next time Firefox is run, whether or not they're online or offline, those settings
are in fact redelivered.Like I said, you can if you want to, lock these settings down if you're so
inclined. I just happen not to be showing that in this demonstration.

That's it. The best part about PolicyPakis that it doesn't matter if your applications are real
installed or virtual installed. Once you set it using Group Policy or inside your systems management
utility like SCCM or Altiris, it's always working for you consistently, whether or not the
applications are virtualized and or streamed or locally installed. It's exactly the same as far as
PolicyPak concerned.

I hope this help you understand our integration with PolicyPak and Symantec Workspace Streaming and
Virtualization. If you're looking to get a trial or an eval copy of PolicyPak, come to one of our
webinars and as soon as we see you there we'll hand over the bits.

Thanks so much, and I'll talk to you soon.


