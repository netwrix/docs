---
title: "Endpoint Policy Manager Integrates with Specops Deploy"
description: "Endpoint Policy Manager Integrates with Specops Deploy"
sidebar_position: 30
---
# Endpoint Policy Manager Integrates with Specops Deploy

Specops Deploy is great because it hooks right into your existing Group Policy infrastructure and
lets you deploy your software.

Netwrix Endpoint Policy Manager (formerly PolicyPak) is great because it hooks right into your
existing Group Policy infrastructure and lets you manage your software.

In this video, you can see the "one – two combo" of:

- Deploying software with Specops Deploy
- Managing that same software using Endpoint Policy Manager

and as a bonus…

- See Specops Deploy deliver App-V applications (without any infrastructure) and
- See Endpoint Policy Manager manage those applications (just like your real applications.)

Here's the video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/L9UegtnAmb8?si=357tSljTRc2zRNuW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

When users work around that application's settings, that's a support call for you, and an immediate
cost to fix it, and downtime for the user (on every device they own.)

These kinds of costs are easily preventable. Endpoint Policy Manager is always ensuring the
application's settings – if the client machine is online or offline.

In short, Endpoint Policy Manager enhances your Specops Deploy investment. And it protects your
users from themselves.

Endpoint Policy Manager was designed by Microsoft MVP Jeremy Moskowitz – who "wrote the book" on
desktop management and lives and breathes enterprise software deployments and desktop lockdown.

If you'd like to trial Endpoint Policy Manager, we're here for you. Call 800-883-8002 or click on
download button ([https://policypak.com/webinar/](https://policypak.com/webinar/)).

### Endpoint Policy Manager and Specops Deploy Video Transcript

Hello, everybody and welcome. This is Jeremy Moskowitz, Microsoft MVP, Enterprise Mobility and
Founder of PolicyPak Software. In this video, I'm going to show you how Specops Deploy can be
benefited by PolicyPak in a cool better together story.

To set the stage here, Specops Deploy is a great piece of software that enables you to actually
deliver software, where PolicyPak helps you deliver application settings. Let's see a cool better
together story right out of the gate. Let's "Create a GPO in this domain, and Link it here…" here,
and we'll call this "Deploy WinZip using SpecDeploy."

Let's go ahead and let me show you how these guys do their thing. I'm a big fan of this software
because it just works so well. Under user side under "Policies," we'll go to "Software Settings" and
go to "Specops Deploy / App" here.

There are a couple ways to use this. I'm going to right to "Deployments" here, and I'm going to
create a "New deployment." I'm going to specify a "New package…" here, which is a regular,
garden-variety "Windows Installer package."

I'm going to pick my "dcsoftwareWinZip-MSI." I'm picking my WinZip MSI here. What's cool about
Specops Deploy is that you can target specific users based on conditions. PolicyPak actually has
something similar as well, and it's called item-level targeting.

But here in the next screen, I'll go ahead and select that first. We'll select the "Target." The
default target is "All users." They have a really great little interface here that lets you specify
different "Target criteria." We're not going to go and do any of that right now, but the point of
the story is that's available.

We'll go ahead and we'll deploy "WinZip 14.0" to "All users" here. This is a real package. We're
really deploying this package. Let's go ahead and close this out, and we'll "Create a GPO in this
domain, and Link it here…" called manage "Manage WinZip using PolicyPak."

What I'm going to do here first is I'm going to deploy Specops first, and that would be item number
"2" actually – so deploy first. In Group Policy ordering, the first thing that happens is number 2,
and the last thing that happens is number 1. Then we'll manage it using PolicyPak.

Next, we're going to go to user side "PolicyPak/Applications/New/Application" and go ahead and pick
our Pak. Now PolicyPak ships with over 100 preconfigured Paks. I've only got a handful of them here
just to show you a quick example. This is my standard one, "PolicyPak for WinZip14 and Later," to
get started here.

Next, we're going to go to user side "PolicyPak/Applications/New/Application" and go ahead and pick
our Pak. Now PolicyPak ships with over 100 preconfigured Paks. I've only got a handful of them here
just to show you a quick example. This is my standard one, "PolicyPak for WinZip14 and Later," to
get started here.

We'll just go ahead and set some of our key core settings like deliver "Minimum password length" to
"11," and we'll go ahead and we'll "Hide corresponding control in target application" for one
setting and we'll "Disable corresponding control in target application" for another setting. We'll
also go ahead for "Cameras" and "Disable whole tab in target application."

Now, let's make sure we've got the stage set properly. For all of our "East Sales Users," as soon as
Group Policy applies, it's going to first "Deploy WinZip using Specops Deploy" and then "Manage
WinZip using PolicyPak."

Let's go over to this machine. This guy is already logged on. He's "eastsalesuser1," so he's ready
to go. When Group Policy refreshes – and in this case, I happen to be using "gpupdate" – you can
envision the guy logging on for the first time or changing job roles or anything like that. You can
see what happens. The Specops Deploy software kicks into high gear.

It's forced to happen in 15 minutes, but we're not going to wait. We're just going to click "Start
Now," and it's going to go ahead and install. Now, what has already happened is that in the
background, PolicyPak also put its directives there. As soon as WinZip is on there with Specops
Deploy, PolicyPak is already managing the application.

There we go. We've gone ahead and downloaded it. The icon should appear in no time flat. Here we go,
all success and done there. Let's just do nothing but run it. Go ahead and run "WinZip." Because
Specops Deploy deployed the software and PolicyPak managed the software, you can see that we're
delivering these important IT security settings.

Even if a user tries to work around it, the very next time the application is launched, PolicyPak is
always working reinforcing and redelivering the settings. This is why we love tools like Specops
because it gives you the ability to deploy the software, and you can use PolicyPak to then manage
the software.

Let's do a more complex example. Over here on this other machine here, I'm logged on as a guy called
"westsalesuser1," but I don't want to deploy a regular application. This time, I want to deploy an
App-V package. In order to do that, let's go over to my "West Sales Users" and "Create a GPO in this
domain, and Link it here…" and we'll call this "Deploy WinZip using Specops Deploy (AppV)." This
one's a little bit different.

What I'm going to do now is I'm going to go over to my user side, "Policies/Software
Settings/Specops Deploy/Deployments" and pick a "New deployment." This time my package is going to
be an "App-V package," a virtualized package. I'll go over to my
"dcsoftwareWinZip-AppVWinZip14_manifest" file. It tells me how much it's going to download, and I'm
ready to go.

I'll go ahead and pick my package here, pick my "Target" as "All Users" again. Now that Specops
Deploy is deploying the App-V version, here's the best part. You already have the PolicyPak
directive that will manage WinZip using Group Policy. What we're going to do is just simply "Link an
Existing GPO." We'll pick it, which is the "Manage WinZip using PolicyPak." Make sure the order is
right. We want to make sure that the Specops Deploy goes first and managing goes second. That's it.

We'll go ahead and we'll run "gpupdate" on this target computer here. Again, you could just envision
the user logging on for the first time or waiting around and getting the directive. At that point,
the virtualized application is going to be delivered. I'm using App-V on this target machine. There
we go.

We'll click "Start Now," and you can see the "Software changes in progress." We'll give it a minute
and wait for it to be done, and then we'll see that it all works out. Alright, we're all completed.
Perfect. Just what we wanted. Again, here's the trick. Watch in the lower right-hand corner when I
launch "WinZip." When we do this, we see that App-V kicks into high gear. The application is
virtualized.

At this point now, this is where you would be in real trouble if you wanted to deploy and manipulate
actual important security settings. Because this application is sandboxed, there's really no way for
you to deliver the settings to it except if you've got PolicyPak.

The same settings that you've set already to your standard, real-installed apps, they just transfer
over perfectly to your virtualized apps. PolicyPak is able to work with App-V, ThinApp and all the
major players, including Symantec and even some of the other players like Spoon and Citrix.

Long story short: Specops Deploy to deploy your software, PolicyPak to manage that deployed
software. Said another way, if it's important enough to deploy, it's important enough to manage. I
hope this gives you a quick feel for how both Specops Deploy and PolicyPak can work better together.

If you're looking to get started, just click on the download button
([https://policypak.com/webinar/](https://policypak.com/webinar/)).

Thanks so very much.

