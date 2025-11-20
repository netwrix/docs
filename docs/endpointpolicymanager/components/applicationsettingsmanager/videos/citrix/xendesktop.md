---
title: "Endpoint Policy Manager & Citrix XenDesktop"
description: "Endpoint Policy Manager & Citrix XenDesktop"
sidebar_position: 60
---
# Endpoint Policy Manager & Citrix XenDesktop

If you're using XenDesktop, you "get it." You want your Windows apps to run everywhere on every
device.

Awesome. So when Ivan uses his iPad, or Mary uses her MacBook, or Paul uses his PC, or Bob on his
Blackberry or … okay – I'll stop now.

You get the picture… they just have their Windows apps, on whatever device they use.

But there's still a problem. Now that people have their apps everywhere, there's even more
opportunity to mess up any application's settings and cause a support call.

So watch this video to see how Netwrix Endpoint Policy Manager (formerly PolicyPak) can ensure that
users' desktops and applications are locked down and help add more value to your XenDesktop
investment.

<iframe width="560" height="315" src="https://www.youtube.com/embed/RaRemLGCEMM?si=sjQy7hJxn826AePj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

You might know that some licensed Citrix customers get to take advantage of some Citrix addons:

- Citrix Profile Management: This speeds up user logons with "Profile Streaming" and prevents the
  "Last writer wins" problem.  This enables the user to feel like their profile is fully loaded
  (even if it isn't yet.)
- Citrix Personal vDisk: Citrix Personal vDisk will maintain any settings the user changes and
  ensure they're "there again" when the user changes desktops of VDI sessions.

Great stuff. Really great stuff. Good job Citrix !

But even if you're licensed for Citrix Profile Management or Citrix Personal vDisk, it still doesn't
solve big problems you still have right now:

- How are you able to guarantee key application and operating system settings for users?
- How can you prevent users from messing up their apps?
- How can you ensure users won't work around your important security and operating system settings?
- How do you prevent "application popups" when applications want to self-update?

Neither Citrix Profile Management or Citrix Personal vDisk can redeploy, adjust, lockdown or
guarantee application or operating system settings.

Only Endpoint Policy Manager can.

No matter what device your users are using with XenDestop, no matter what applications you've got
set – if you're not managing the application (or operating system) settings you've got a ticking
time bomb on your hands. When users work around that application or operating system setting, that's
a support call for you, and an immediate cost to fix it, and downtime for the user (on every device
they own.)

These kinds of costs are easily preventable. Because Endpoint Policy Manager is always ensuring the
application's settings – within XenDesktop. Endpoint Policy Manager works when users are connected
to a live session from the server or it works when using a XenDesktop offline.

Endpoint Policy Manager prevents users from manipulating important settings, but also quietly
reapplies misconfigured settings if a user or application happens to work around them.

In short, Endpoint Policy Manager protects your XenDesktop investment. And it protects your users
from themselves.

XenDesktop is awesome. And XenDesktop's Citrix Profile Manager add-on is awesome.

But it doesn't perform application lockdown or prevent users from working around your important
operating system or application settings. It doesn't make your XenDesktop more secure and prevent
user-generated problems.

Only Endpoint Policy Manager does that.

Endpoint Policy Manager was designed by former Group Policy MVP Jeremy Moskowitz – who "wrote the
book" on Group Policy
([https://www.mdmandgpanswers.com/book](https://www.mdmandgpanswers.com/book)),
runs MDMandGPanswers.com ([https://www.mdmandgpanswers.com/](https://www.mdmandgpanswers.com/)), and
lives and breathes Group Policy and enterprise software deployments and desktop lockdown.

If you're ready to protect your Citrix XenDesktop investment we're here for you. Call 800-883-8002
and let us know you're like a free trial of Endpoint Policy Manager.

### Endpoint Policy Manager expands Citrix XenDesktop Video Transcript

Hi, everybody. This is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software.
In this video, I'm going to show you how PolicyPak integrates with XenDesktop.

What we're going to do first is let's get logged on to my XenDesktop here. I'll just do what
probably a lot of your users do. I know every environment's a little bit different, but here's my
XenDesktop here. I'll log on with my user name and my password and my domain name, and I'll get the
same thing your users probably get.

OK, here in this case, I've got two machines. The one on the right is my admin workstation. The one
on my left is my user workstation. Let's go and let's first configure, actually, why don't we start
off with what the user experience looks like.

We'll go ahead and log on to this machine first. This is without PolicyPak engaged. Let's go ahead
and run this here. You can see I'm "Connecting" to my XenDesktop here. Again, this is just a regular
user's desktop.

OK, here we are. You can see I've got my regular XenDesktop with my little XenDesktop "Welcome"
screen here. I'll go ahead and close that here. You can see I've got all these applications that
users might have on their XenDesktop. Again, the promise of XenDesktop is that their desktop can be
anywhere and so can their applications. That's yet another opportunity for users to mess things up
and to make your life very difficult.

Let me go ahead and we'll run "WinZip" here on this XenDesktop here. Again, you can see here that
PolicyPak is not engaged, but there are a lot of places for users to make mistakes and to possibly
screw things up. That's the first application that we'll configure.

Then let's go ahead and run "Mozilla Firefox" here.Firefox, yet another very popular application for
a user to use. We can just go and see that the user can go ahead and manipulate anything they want
and screw up the settings that are very important to them on all of their XenDesktops.

"Adobe Reader X," let's go ahead and click on that guy here. We'll go to "Edit/Preferences." Once
again, you want to make sure that "Security" is always guaranteed on, on these applications. Perhaps
in a lot of cases you want to turn off the "Updater" functions. As you can see here, it's got
"Automatically install updates," which you probably don't want.

We'll go ahead and close this out. Let's switch gears, and let me go ahead and log on to my machine,
the administrator console, and start applying some PolicyPak settings to this user on this computer
and some settings within them. Let's go ahead and do that now.

Alright, so to show you that, I'm going to have to close this guy out just for now. We'll come back
to him in a second. Go ahead and click "Disconnect." Alright, so I'll go ahead and click on my
computer, the one that runs the GPMC here. You can see it's connecting through XenDesktop right
here.

OK, so here we are on my machine. What we'll do is we'll take, well, we'll do what we do in a lot of
our other PolicyPak videos. We'll take our "PreConfigured PolicyPaks" for the example here. We've
got a lot of them. The ones that I've isolated here are "Acrobat 10" and "Firefox" and "WinZip (14
and 15)."

Again, on your own machine or in the Central Store, you'll go to "C:Program
FilesPolicyPakExtensions." You've probably seen me do this in other videos. In the "Extensions"
folder – I'll go ahead and just move that over there, and I'll take this guy and move it over here
like they do in those fun Windows commercials.

I'll go ahead and take "Acrobat 10." What we're looking for is the DLL. We'll go ahead and take the
"pp-Adobe-Reader-X.dll," and we'll copy it over to our machine. So we'll go ahead and "Copy here"
for that guy. Yep, that's cool. Then we'll go ahead and take the "Firefox" DLL, "pp-Firefox.dll."

These are the "PreConfigured PolicyPaks" that we already have. Again, you can create the ones that
you need to using our own PolicyPak Design Studio, if that's interesting for you.

We'll also take "WinZip (14 and 15)," and we'll take it's DLL, "pp-WinZip.dll." OK, there we go. So
we've got the three PolicyPaks that we want to configure here. We'll go ahead and close those out,
and we're ready to go.

I'll go ahead and, under my "Group Policy Objects" node, I'll go ahead and create a "New GPO" called
"Lock down Xendesktops." This could be an existing Group Policy Object or one that you've just
created new like I have here.

I'll go ahead and right click "Lock down Xendesktops," click "Edit" here. Like in our other
PolicyPak videos, you just dive down under the user side or computer side "PolicyPak/Applications."
Let's go ahead and make those changes happen. We'll go to "New/Application."

Look at all the ones we've got here. I forgot I already had pushed a couple of these PolicyPaks into
the Central Store, and I also have some that are local. So I've got PolicyPaks available to me from
two places now, which is super nice.

I'll go ahead and pick "PolicyPak for Adobe ReaderX" here. We'll do that one first. We'll go ahead,
we'll use the one I just copied in from the local store. That's fine. We'll go ahead and click
there. Let's see. What do we want to configure? I think the first thing, of course, that we want to
configure is that "Updater." Let's turn that thing off. Let's "Do not download or install updates
automatically." Let's go ahead and do that guy.

While we're here, we'll also "Disable corresponding control in target application." Let's go ahead
and do that so a user can't possibly screw that up. We'll also for "JavaScript," we want to uncheck
"Enable Acrobat JavaScript." We also want to "Disable corresponding control in target
application."We'll go ahead and do that. So we'll do two things in Acrobat Reader.

We'll go to another application here. We'll go to "New/Application," and we'll go ahead and pick
"PolicyPak for WinZip 14 and 15" here. Yep, I already had that one in the Central Store too, but
we'll go ahead and use the local storage one as well.

We'll go ahead and we'll do some things you've seen me probably do in some other videos. I'll click
on these guys. I'll move this guy up to "11," making password strength 11. I will "Disable
corresponding control in target application" this one, and I'll "Hide corresponding control in
target application" for that setting. For "Cameras," I will right click and "Disable whole tab in
target application" in Cameras. I've gone ahead and done that.

Now for Firefox, we're just going to right click, "New/Application" and we'll pick "PolicyPak for
Mozilla Firefox" as well. We'll go ahead and also pick the local storage one. We're just going to go
ahead and set up the "Home Page." We'll just do "www.policypak.com." We'll go ahead and just set
that up. We can set "Security" options the way we want to. We can guarantee various security options
if that's important to us. We'll go ahead and click "OK." That's it.

The next thing I want to do is simply link this GPO over to where my XenDesktop users or computers
are. I'm going to go ahead and do that. I'm going to right click over my "XEN_Desktop_POC." I'm
going to "Link an Existing GPO" here. This one, we called it "Lock down Xendesktops." There we go.
That's it. We can see we've got "Lock down Xendesktops." That's it.

Let me go ahead. I'm done here. I'll go ahead and disconnect from my own machine here, and we'll
head on over to the client now, back to the client machine. OK, we'll go back to our client machine
here. We'll launch his XenDesktop session here.

Now that we're logged in here, let's go ahead and run a command prompt. We could be logging in for
the very first time, or we could already be logged on and just get a Group Policy update like we're
about to do or just wait 90 minutes in the background. Any of these things is going to cause a Group
Policy refresh, and when Group Policy refreshes so does endpointpolicymanager.You can see we get the "User
Policy update has completed successfully" and "Computer Policy update has completed successfully."

Now we're ready to test out our apps. In no particular order, let's go over to "Mozilla Firefox"
first. We'll go to "Options" and "General." There we go. We got "www.policypak.com" as the "Home
Page," just as we told it to do. That's good news. If we were to look at "Security," it would
guarantee those settings. That's one application that we just did inside of XenDesktop.

We'll go into "WinZip" next. We'll go to "Options/Configuration…" here. We'll go to the "Passwords"
tab. Sure enough, we've increased the "Maximum password length" to "11" characters, and we've
unchecked these checkboxes and checked other ones as well. "Cameras," you can see we've totally
locked out the "Cameras" tab, no way to do anything in there as a user.

Again, that's important. If you're extending XenDesktop to a variety of alternate devices, you want
to make sure that the settings that you deliver are going to be on all devices. Therefore, that's
why you have XenDesktop.

Last but not least, we'll go and we'll check out "Adobe Reader X." We'll go to "Edit/Preferences…"
here. Let's take a look. There's "Updater." You can see we've set it to "Do not download or install
updates automatically." Before it was set up to "Automatically install updates." We've locked it
down, so a user can't work around it.I think we also changed the "JavaScript" one. Yep, sure enough,
no way for a user to enable that Adobe Acrobat JavaScript security hole.

With that in mind, as you can see, PolicyPak works perfectly with XenDesktop. We are part of the
operating system. We just install as a client side extension. You would install that inside your
base image. Then whenever you wanted to, you could create a new GPO, link it over to either your
users or computers, and you'll be fully locked down inside both XenDesktop and also your real live
installed desktops and laptops.

I hope this explains how PolicyPak works with XenDesktop. If you have any questions, I'm here to
help. This is, again, Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software.

I'll talk to you soon. Thanks.


