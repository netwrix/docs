---
title: "Endpoint Policy Manager and VMWare Horizon View"
description: "Endpoint Policy Manager and VMWare Horizon View"
sidebar_position: 20
---
# Endpoint Policy Manager and VMWare Horizon View

You already know that VMware Horizon View enables your users to have their own unique "full desktop"
available to them, remotely or locally, and run any application they need to. Users really get their
"own operating system" and applications just "run perfectly" because they're really running on their
own operating system.

But you still have a major problem: Users get the apps they need, but you've got zero control over
how your users' applications are configured.

That's where Netwrix Endpoint Policy Manager (formerly PolicyPak) comes in. Once the application is
running inside VMware Horizon View, Endpoint Policy Manager ensures your applications' settings and
locks down the user's access.

Watch this video to see how Endpoint Policy Manager can lock down your applications inside of VMware
View (and keep your headaches and helpdesk calls to a minimum).

<iframe width="560" height="315" src="https://www.youtube.com/embed/ktIElriIIw4?si=GXxqB0QMNyMkXAm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager and VMware Horizon View Linked Clones with Persona Management

Hello, everybody, and welcome. This is Jeremy Moskowitz, former Group Policy MVP and Founder of
PolicyPak Software. In this series of videos, I'm going to show you the missing tool for VMWare
Horizon View Suite.

Now, VMWare Horizon View is all about offering systems and applications and getting those to your
end users. VMWare Horizon View does exceptionally well at getting those applications to the end
users, but it's actually missing something. The Suite is missing the ability to manage those
applications after they're made available to users. That's what PolicyPak does, and that's what I'm
going to show you in this series of videos.

Now, this video is regarding floating linked clones. We're going to have other videos for things
like PolicyPak with dedicated VDI and local mode, PolicyPak with ThinApp (kind of the old-school way
of doing things), PolicyPak with ThinApp and VMWare Horizon Workspace, plus videos about using
PolicyPak alongside your iPads at Horizon Workspace and also PolicyPak with Mirage. In this video
set, I'm going to show you in total where PolicyPak increases your management of your applications
whenever you use each piece of VMWare Horizon View.

Let's get started. I'm going to log on here as "westsalesuser1," I'm going to pick my VDI pool. For
this demonstration, again, we're talking about "Floating Linked" clones. For other videos, we'll
talk about dedicated and local mode.

I'll go ahead and click "Connect" here. Of course, I'm "preparing the desktop," "Connecting to the
desktop" and there it is. You might already be familiar with something that VMWare ships, which is
the "VMWare View Persona Management" as you can see it running right there. That is a great piece of
technology, but let's be clear about what it does and what it doesn't do.

Let's actually start off with a demonstration of that before we dip our toes into the PolicyPak
demonstration. I think that's an important place for us to start. The reason VMWare View Persona
Management exists is for when you have applications and you are utilizing them. If a user were to
make changes and get another floating linked clone, those changes would be maintained.

Let's go to "Options/Configuration…" here under WinZip and let's uncheck one, two, three, four
checkboxes. This is just me, standard user. His name is "westsalesuser1," and this user is making
some modifications and changes to a garden-variety application and clicking "OK" and clicking close.

Now I'm going to "Log off" just to show you the VMWare View Persona Management in action. Before we
do any kind of extra demonstration, let's just see this part working. What's happening now is that
user is logging off. What should be happening is that the next virtual machine in the pool should be
ready.

We'll go ahead and click on our "VMWare Horizon View Client" again. We'll log back on as that user,
and all the stuff the user has done will be flushed but those settings will be preserved by VMWare
View Persona Management. Let's go ahead and see that all first.

We'll log back on again as "westsalesuser1." We'll go ahead and pick our pool. We have no idea which
machine in the pool it's going to get, and because everything was flushed – any weird changes the
user has made – that's all great. Those are all gone. "VMWare View Persona Management" kicks in,
gets the settings that we know the user has performed.

When we run WinZip again, we should see just the user settings that he has made will be dictated
back to WinZip. Let's go ahead and check that out right now. We'll go to "Options/Configuration…"
here, and there we go. We can see that all four of those checkboxes are unchecked.

That is just VMWare View Persona Management inside your floating linked clones. Now, where PolicyPak
kicks in is where you have settings you want to dictate and guarantee. For instance, in this
application, you might want to dictate that the "Minimum password length" is "11" and all the
checkmarks are on and users can't work around the setting. Let's do just that.

In order to that, we're going to go over to our standard Group Policy management tools. We're going
to do this for all of our "West Sales Users." We will "Dictate Win-Zip Settings using PolicyPak."

Now, PolicyPak ships with over 100 preconfigured templates to manage just about every application
that you might already have. I only have some of the snap-ins ready to go here just by way of
example: "Adobe Reader" and "Chrome" and "Firefox" and "WinZip" and a bunch of other things here,
but there are over 100 preconfigured Paks.

Let's pick "PolicyPak for WinZip 14 and Later" just to kind of get us warmed up here. Let's go over
to "Passwords," and let's do those settings changes we just said we wanted to guarantee. We'll check
all four checkboxes, set "Minimum password length" to "11."

While we're here we can "Hide corresponding control in target application" or "Disable corresponding
control in target application." We can literally disable or remove the UI of certain items that are
in the application. I've hidden and disabled a bunch of them. For "Cameras," we can also "Disable
whole tab in target application." Let's go ahead and do that as well.

We've locked and loaded these directives and when normal Group Policy applies, which is just in the
background or when the user logs on, they will get these settings. To prove a point, I'm going to
get these settings right now and we should see them kick in. I'm also going to log off, get another
linked clone and during log on time I will guarantee these settings to the user.

Let's go ahead. We'll run "WinZip" here, go to "Options/Configuration…" and these are the changes
the user made and now these are the changes that I made. Now, as the administrator, I can dictate
and guarantee that these settings can't be worked around. I've checked all four checkboxes, and you
can see I've grayed out and removed the UI of certain settings.

I've also left certain settings. You can make settings either policy if you want to and guarantee
them and lock them down or make them preference so a user can choose to work around them. You can
see I've also eliminated the ability to use the "Cameras" tab.

PolicyPak is always working so if a user does change one of your preference settings, the next time
that the application runs it is automatically refreshed. If you don't want that, it's certainly easy
enough to ensure that those settings are, in fact, guaranteed. Like I said, right click and "Disable
corresponding control in target application."

We can also right click and "Perform ACL Lockdown." When you run ACL Lockdown, what this does is
that it literally locks down the setting itself in the registry so a registry-savvy user can't even
work around the application setting even if they knew what they were doing.

I'm going to run "gpupdate" here just to refresh Group Policy here. Let's look at this from two
angles. I'm going to run "regedit" as a standard user. Let's go over here, and we'll go to
"HKEY_CURRENT_USER/Software/Nico Mak Computing/WinZip/Policies" here. I'll go ahead and run "WinZip"
here.

Just to prove a point, user settings that VMWare View Persona Management is handling, those are
fine. Over here, the settings that PolicyPak is dictating are over here. We're literally dictating
the settings, and users can't work around it. Even if they're super smart and they try to go to
"passwordlength" and change it to "2," they are locked out and thwarted. They are not allowed to do
that.

Now that you see how PolicyPak works in conjunction with VMWare Linked Clones and Persona
Management, just to prove one more point, let me go ahead and I'm going to "Log off." I'm going to
pick another machine in the pool. Therefore, I'm logging on for what would appear to be the very
first time because I'm getting a totally refreshed machine each time in my floating linked clone. At
log on time, you'll see PolicyPak running alongside the Persona Management, and the two
functionalities from VMWare and also from PolicyPak go hand-in-hand and work together.

I'll log on as our guy here. We'll go ahead and pick once again our "Floating Linked" clone
desktops, getting a brand new clean machine again. Watch what happens. We're going to see the
"VMWare View Persona Management" kick in first. That was fast. You'll see also PolicyPak kick in
("Applying PolicyPak policy"). That flew by equally fast.

At that point now, the settings that the user wants are there and the settings that you want as the
administrator are also there. That's the point: dynamically delivering the settings that the user
needs from their perspective and also that you need from the administrative perspective. That is
basically PolicyPak in a nutshell.

Let's also see how we can use PolicyPak to lockdown and manage settings not just at a user level but
also at a computer level. If we wanted to, we could manage all of the machines that are in a
particular clone set. These are typically stored in a particular OU in Active Directory so we can
use PolicyPak in conjunction with Group Policy and dictate the settings to the entire pool. For
instance, if you wanted to set the "Home Page" and lock it down for an entire pool, that's super
easy to do.

Let's head over to my "Group Policy Management" console again, and you can see I've got an OU called
"West Sales vMware Floating VDI." This is where all the Active Directory accounts automatically go
for this pool. If I want to "Create a GPO in this domain, and Link it here…" and call it "Manage
Firefox for my VMware Floating Pool," right click, "Edit" here and PolicyPak on the computer side
now has the same Paks.

Again, I only have a handful of them ready to go here. There are, again, over 100 preconfigured
Paks. Let's go ahead and pick "PolicyPak for Mozilla Firefox," and we'll pick a new "Home Page."
We'll go to "www.floating.com." I have no idea if that's a real website or not. While I'm here, I'll
right click and "Lockdown this setting using the system-wide config file."

For "Security," we don't want users to be able to work around these very important security
settings, so I'll dictate those settings and also "Lockdown this setting using the system-wide
config file."

Now again, it's great that the VMWare View Persona Management is available for when users make the
changes that they want to make those will roam with them, but for everything else – anything you
want to dictate – that's what PolicyPak does.

We'll go back to our machine here. We'll go ahead and run "gpupdate" here, or as you saw you've got
to log off and log back on. Either one, you're going to get PolicyPak dictating the settings when
Group Policy applies, which is in the background or at log on time.

When that occurs and we're done, we're then ready to go ahead and check out Firefox here. We'll go
ahead and run "Mozilla Firefox." We'll go to "Options" here, and there you go. There's
"www.floating.com," and over at "Security" those checkmarks are now checked and guaranteed on.

I hope this makes sense and you can see where it's totally great best practice to try to put as many
important settings as you want to inside your golden image, but you can't get everything. Even if
you do get most things, it doesn't mean that users can't work around your settings.

If you want to guarantee those settings plus enable users to be able to change the settings that are
important to them and roam with them, that's great. That's where VMWare View Persona Management
comes in, but PolicyPak is the last mile which will dictate the application settings and lock things
down so users can't work around them.

Thanks so very much. If you're looking to get started, we hope to hear from you and you can try it
out.

Thanks so much. Talk to you soon.


