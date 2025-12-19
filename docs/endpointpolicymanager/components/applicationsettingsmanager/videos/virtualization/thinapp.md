---
title: "Manage ThinApp Packages on Physical or VDI machines using Endpoint Policy Manager"
description: "Manage ThinApp Packages on Physical or VDI machines using Endpoint Policy Manager"
sidebar_position: 40
---
# Manage ThinApp Packages on Physical or VDI machines using Endpoint Policy Manager

If you're using VMware ThinApp to deploy packages to users, you know the benefits of virtualized
applications.

But you still have some big problems:

- Once the application is deployed, how do you mange, change or configure that application?
- How do you prevent users from working around your important application settings?
- How can you maintain those settings even when the computer is offline?
- Good news for you: We've got that problem totally handled.

Watch this video (exclusively for VMware ThinApp administrators) to see exactly how to manage
ThinApp packages using Group Policy and Netwrix Endpoint Policy Manager (formerly PolicyPak):

<iframe width="560" height="315" src="https://www.youtube.com/embed/rNR-SriYen8?si=RxicLU3bl9Xy8iXb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

So, if you needed to tweak a configuration file, edit the package's registry, or otherwise configure
your ThinApp package, you've got a real problem.

You would have to:

- Re-open the package
- Make those settings
- Re-build and
- Redeploy

Then, if a user worked around your settings, what would you do next?

Instead, you can be smarter and have the right tool to manage those ThinApp packages – after those
packages are already deployed.

You can create your own PolicyPaks for your applications to manage all the application's settings,
or use one of our preconfigured Paks for lots of common applications like Firefox, WinZip, Office
2010 and more.

There's nothing extra to buy – this functionality is all included when you're a Endpoint Policy
Manager Professional customer.

Endpoint Policy Manager was designed by former Group Policy MVP Jeremy Moskowitz – who "wrote the
book" on Group Policy
([https://www.mdmandgpanswers.com/books](https://www.mdmandgpanswers.com/books)),
runs MDMandGPanswers.com ([https://www.mdmandgpanswers.com/](https://www.mdmandgpanswers.com/)), and
lives and breathes Group Policy and enterprise software deployments and desktop lockdown.

When you're ready to manage your ThinApp packages using Group Policy, Endpoint Policy Manager is
here for you.

Click on Webinar
([https://www.policypak.com/video/support-sharing/webinar-2.html](https://www.policypak.com/video/support-sharing/webinar-2.html))
to get the software and try it out for yourself.

### Manage ThinApp Packages on Physical or VDI machines Video Transcript

Hi. This is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software. In this
video, I'm going to show you how you can use PolicyPak Application Manager to dictate, lockdown,
enforce and automatically remediate settings that are real installed and applications that you've
performed the ThinApp on.

You can see I've got ThinApp's version 4 for some popular applications here, and I've also got
version 5 of those same applications. Just to show you something that's kind of neat, if you go
inside WinZip inside of a ThinApp application, if you go to an entry point and you type
"-thinstallversion" you can see that it actually tells you what version it's running. I'm actually
just showing you this because it's kind of fun, but just to prove a point I've got version 4 and
version 5 of ThinApp apps ready to go.

With that in mind, let's go over to our Group Policy management console and for our "West Sales
Users" let's "Manage WinZip for Real and Thinapp Applications." Now what I'm showing you here will
work no matter how you're using ThinApp. If you're using ThinApp as a standalone product or if
you're using it with VMWare Horizon View, what I'm showing you here will work exactly the same way.
If you've got pooled desktops or linked clones – any kind of VDI at all – PolicyPak's going to work
with it.

To quickly demonstrate, I'm going to go to "PolicyPak/Applications/New/Application" and pick the
application that I want right here. As you can see, I've got a bunch of popular applications snapped
in. PolicyPak ships with over 150 application Paks, and you can create your own using our own
PolicyPak Design Studio.

You can see I've got things for "Acrobat," "Chrome," Flash, "Firefox," "Java" and, like I said,
about 150 other apps. To get started here, I'm going to go to "PolicyPak for WinZip International
LLC WinZip 14 to 17." Good old WinZip. You can double-click it and get started to manage your
application settings.

I'll click on "Passwords" here, and I'm going to make sure we're more secure with "11" and check all
four checkboxes. This is PolicyPak dictating the settings into the target application. We can also
right click and "Disable corresponding control in target application" or "Hide corresponding control
in target application." This will make sure that users can't be naughty and they can't work around
it. If I were also to click on "Cameras" here, I can right click and "Disable whole tab in target
application." We'll click "OK" to finish.

Next, I'll go over to "PolicyPak for Adobe Systems Inc Acrobat Reader X." in Acrobat Reader land, I
want to make things more secure. I want to make my "JavaScript" actually disabled because if your
JavaScript is disabled, that actually makes you more secure. I'll once again right click and
"Disable corresponding control in target application."

I'll go to "Security (Enhanced)" and make it actually ensured so users can't work around the setting
in real or ThinApp applications. For "Updater," sometimes you forget to disable the updates. Now you
don't have to repackage your app. You can simply "Do not download or install updates automatically."
While we're here, we'll also "Disable corresponding control in target application" so users can't
work around it.

Let's just try these on for size and see if they work. Let's go over to our target machine. We'll go
ahead, we'll run "gpupdate" here. Remember, the Group Policy Object is affecting our West Sales
Users. This guy is a West Sales User, and we'll go ahead and see if Acrobat Reader and WinZip got
the settings and if the ThinApp versions also get the settings as well.

Let's start by taking a look at the real app. Let's go ahead and run "WinZip" here, go to
"Options/Configuration…" and you can see PolicyPak with your desired IT settings have been delivered
into the application. If a user tries to be naughty and work around those settings, the very next
time the application is launched – let me go ahead and do that, go to "Options/Configuration…" –
PolicyPak is redelivering those settings back in again and again so users can't be naughty.

Let's take a look at the ThinApp version. In fact, let me start with ThinApp version 4 "WinZip 14."
If I go ahead and click on it, you'll see it pops right up there. And here's the idea: it's checking
for updates. If you wanted to deliver the don't ask for updates, you can deliver that using
PolicyPak.

If I go to "Options/Configuration…" here, go to "Passwords," PolicyPak treats ThinApp 4 and ThinApp
5 applications as first-class citizens. There's nothing you need to configure, nothing you need to
do. It's just automatically working because you've got the PolicyPak client side extension installed
inside your image.

If I click to be naughty again as a standard user here, the very next time I go to click on "WinZip"
and go to "Options/Configuration…," those settings are redelivered, enforced and automatically
remediated every single time.

If I take a look at the version 5 of the same application here, we go to "Options/Configuration…,"
we're delivering those settings into the application to keep you more secure.

Let's take a look at what happened in Acrobat land. If we go to "Adobe Reader X" – this is on the
real machine – go to "Edit/Preferences…." If we go to "JavaScript," look at what we've done.
PolicyPak has delivered the setting and performed UI lockdown. Users can't be naughty here. You've
ensured that.

If you click on "Security (Enhanced), " you've delivered the enhanced security and users can't work
around it there. For "Updater," you've driven in "Do not download or install updates automatically."

Now again, if you forgot to do something like that in your package, that's fine. PolicyPak can
handle that. If we take a look at "Acrobat Reader 10" and we click on the App-V4 version of "Adobe
Reader X," let's see PolicyPak deliver those same settings right into your application.

If we go to "JavaScript," it's delivered and locked down. Go to "Security (Enhanced)," we've
delivered the setting and users can't work around it. If you forgot to try to make it so users can't
update, you don't have to worry about it. You don't have to repackage your application. PolicyPak
has you covered.

That's the key takeaway: a) you don't have to redo your application, and b) the other piece of the
puzzle is that PolicyPak will remove the UI so users can't work around it.

Let's switch gears and talk about Firefox. Firefox, I want to set these configuration options upon
the entire computer. If I want to "Manage Firefox for Real and Thinapp applications," I'm doing this
on the computer side. I'll click "Edit" here, and I'll dive down under the computer side
"PolicyPak/Applications/New/Application." I'm going to pick on "PolicyPak for Mozilla Firefox 23.0."
Now this version of Firefox says it's 23, but it will work for pretty much every version you have.

If I click over here, let me go ahead and deliver a "Home Page." I'll go to "www.policypak.com." I
also want to right click and "Lockdown this setting using the system-wide config file." This is
going to ensure these settings can't be worked around.

For "Security," these three checkboxes are really important to me, so I'm going to check them and
also "Lockdown this setting using the system-wide config file." Make sure users can't work around
it.

If I go to "About: Config," there are some important settings there that you might want to set up.
We have a separate Pak just for all of the about:config settings. But in this example Pak, I have
some of those important settings here. If I put "123" and if I put "456" and "789" in here, I'm
going to "Lockdown this setting using the system-wide config file." I'll lock two of the three of
them down just to prove a point here.

That's the key takeaway. PolicyPak will deliver these settings to your real or ThinApp applications
all as first-class citizens.

Let's go ahead and click "OK" here. Now that we're locked and loaded, we'll go back to our target
machine. We'll run "gpupdate" here. We're delivering all the settings all at once at logon or in the
background either using Group Policy or a tool like SCCM or LANDesk or whatever software management
tool you have. I just happen to be using Group Policy in this case.

Let's start off with the real application. We'll go to "Mozilla Firefox" here.  We'll go to 
"Firefox/Options" and you can see we've driven the "www.policypak.com" "Home Page" in there. The
"Security" checkboxes are delivered and checked on. If we go to "about:config" here and we look for
those three settings that I manipulated – there they are – these three settings were in the Pak
configuration, and I've delivered those in.

Just to prove a point here, this version that's really installed is Firefox "6.0." If we were to
take a look at the ThinApp version that I've got here for Firefox, it's "21." If I go ahead and run
"Mozilla Firefox" 21 here as a ThinApp application using ThinApp 4 and go to "Options," we've
delivered those settings in guaranteeing them so users can't work around it ensuring your IT
settings are delivered and secure.

And again, the last piece was the "about:config" here, and those settings are also driven in here.
There they go – 1, 2, 3. I "locked" two of them, and I let one of them be "user set."

If I were to go finally to ThinApp version 5 for "Mozilla Firefox" version 27, our Pak will keep
working for that as well. We do make updates as needed when applications are enhanced. But if I go
to "Options" here, PolicyPak is continually delivering the setting in, locking them down so users
can't work around it so your IT settings are secure. I do have one more thing. Let me just finish
this up here. There you go. You can see those two are "locked" and that one we specified not to be
locked.

I do want to show you one more thing, which is on the PolicyPak website. There are lots of other
opportunities for you to take a look at our "Integration" for "PolicyPak and VMWare." We actually
have a lot of different ways that you can take a look to understand how PolicyPak works with "VMWare
Persona" and "Linked Clones." Understanding "VMWare Horizon View" and "Dedicated VDI," how PolicyPak
can deliver settings into those scenarios. With "Horizon View" and "Local Mode."

This video, "Manage ThinApp Packages with Group Policy and PolicyPak," I'm updating this video right
now. Then you can also see "PolicyPak and VMWare Horizon View with ThinApp Assigned Packages," a
very advanced scenario. We cover that as well. Same thing with "VMWare Horizon Workspace
Applications and ThinApp Entitled Packages." All scenarios with ThinApp are covered. "PolicyPak and
VMWare Horizon Mirage" and, not to mention, we have a Pak to manage "VMWare Workstation" as well.

So long story short, if you are a VMWare customer and you've got the scenario where you want to
ensure that your Firefox, Java, Flash, Acrobat Reader, any of over 150 applications settings are
guaranteed to make it so that what you set is what they get, then PolicyPak is the right choice for
you to start investigating.

We're here when you are ready to get started. Just go ahead and make contact with us. We typically
recommend that folks attend a webinar, and then we'll hand over the bits. Then you can try it out
and see if it's right for you.

Thanks so much for watching, and we'll talk to you soon.


