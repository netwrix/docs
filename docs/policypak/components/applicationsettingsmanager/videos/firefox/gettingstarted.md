---
title: "Manage Firefox using Group Policy, SCCM, or your own management tool"
description: "Manage Firefox using Group Policy, SCCM, or your own management tool"
sidebar_position: 10
---
# Manage Firefox using Group Policy, SCCM, or your own management tool

Firefox itself has no native Group Policy support with ADM or ADMX files to control these key
settings. So what are you going to do? It's true there are third party companies like Frontmotion
which will repackage, modify and "re-sell" Firefox —- each and every time an update is created. It's
also true they provide some ADM support with this modified software.  
But there's a better way —- a much better way. See how we do it using this video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/xuWm4jch3qE?si=PSaGf6_nZvN7QsyN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Manage Firefox with Group Policy Video Transcript

Hi, this is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software. In this
video, I'm going to show you how to manage and lockdown Firefox using Group Policy and PolicyPak.

To get started, let's go ahead and take a look at some "Options" that users can manipulate to mess
up, ruin your day and become less secure for your whole company. Let's start off with something
simple like the "Home Page." You probably do want to set this centrally and also perhaps lock it
down. I'm about to show you how to do that.

Same thing with "Security." Let's talk about this for a second. Let's say any user decides they want
to uncheck these three important security settings and click "OK." What have they done? They've just
made your world less secure, and you don't want to be in that situation. You want to make sure that
the settings that you deploy are important to the business and, therefore, are guaranteed to the
user.

Let's see how to do that using PolicyPak and Group Policy. I will "Create a GPO in this domain, and
Link it here…," and I'll call this "Manage Firefox using GP and PolicyPak." Here we go. Then I'll
click "Edit…" here, and I'll dive down under "Computer Configuration"
"PolicyPak/Applications/New/Application."

I'm about to go ahead and pick "PolicyPak for Mozilla Firefox" here, which is at the very bottom,
but take a look at what else is on the list. We've got "Flash" and "Java" and "Acrobat" and
"Office." Actually, we have over 50 preconfigured applications, and they're all on our website for
you to see videos and understand how they all work. When you're a PolicyPak customer, you don't just
get one Pak. You actually get all the Paks, including this one, Firefox.

We'll go ahead and click there, and let's go ahead and manage Firefox. The first thing to notice, it
looks a lot like Firefox so no learning curve required. If you want to set the "Home Page," go to
"www.policypak.com," that's great. But while we're here, let's go the extra mile. Let's lock this
down by right clicking and performing the lockdown setting right there: "Lockdown this setting using
the system-wide config file."

If we go over to "Security" and we want to ensure that these three checkmarks are checked, we'll
just quickly uncheck and recheck them. You can see underline means deliver what's in the checkbox.
In this particular case, I want to ensure that all three of these checkboxes in fact are checked.
While I'm here, once again I will perform lockdown of this particular setting. Here we go: "Lockdown
this setting using the system-wide config file." I'll do that for each of these three guys.

Let's go over to "Tabs." Tabs may be something you want to suggest to a user while they're in a
session, but you might want to let them work around it. For these three guys, these first three
checkmarks, just for fun I'll check them but I won't perform a lockdown upon them. We'll see what
happens when we do that.

That's it for now. Let's go ahead and click "OK," and let's go over to our target machine. I'm about
to run "gpupdate" because I happen to be using Group Policy in this demonstration. You could pretend
that the user is logging on for the first time or changing job roles or getting a new computer or
using a Terminal Services or VDI machine or Citrix machine or roaming. Anything that triggers Group
Policy is going to make this magic happen.

That being said, you don't have to use Group Policy if you don't want to. We have an alternate way
to deliver our settings, and you can do that using SCCM, Altiris, LANDesk, KACE, Windows Intune or
LabTech – anything you want. If you want to not use Group Policy, you don't have to. I just happen
to be using it for this demonstration. Let me go ahead and close this out, and let's go ahead and
now run "Mozilla Firefox" and see what happens on our target machine.

There we go. We see the homepage automatically set instantly, just like that. If I were to go to
"Options" here, you can see the "Security" settings are all locked down just the way we expect. The
checkmarks are checked. If I go to "General" here, we can see that the "Home Page" is in fact
delivered and also locked down.

But remember "Tabs." Tabs we said that we wanted to enable the user to get the checkmarks while
they're in the session but let them work around it. The thing about PolicyPak that's extra special
is that it's always working for you even when the user is offline. Even if there's no connection
back to domain controllers or you're just completely offline, PolicyPak is always working. When you
click back onto "Options" here, those checkmarks are rechecked because PolicyPak is, again, always
working even when offline.

Let's talk about something else. There are a bunch of extra special settings involved in Firefox.
You can see them by going to "about:config" here. You get a little warning that asks you to be
careful here. This is for the highly intense extra settings here. PolicyPak does in fact support
these. We have a handful of them that are in the Preconfigured Pak, but you're actually welcome to
add your own if you want to. You do that using our free PolicyPak Design Studio.

For instance, if there's some accessibility setting or alert or any of these settings that you want,
it's actually really easy to go from here – this list – and add the one or two or three or four you
want to into your PolicyPak, because again the actual Pak itself is editable using our own Design
Studio tool.

That being said, there are a couple that come up kind of frequently, which are these guys:
"network.automatic-ntlm-auth.trusted-uris," "network.negotiate-auth.delegation-uris" and
"network.negotiate-auth.trusted-uris." These come up a lot because they involve websites with
regards to NTLM authentication, so we just put them in the Preconfigured Pak waiting for you. The
question is can PolicyPak deliver these interesting about:config settings, and the answer is yes.
Let me show you how that works. I'm going to go ahead and close out Firefox here.

Let's go back and re-edit our Group Policy here for Firefox. We'll go to the "About:Config" tab.
Like I said, at the time of this recording, we only have three of them in here, but it only took me
two minutes to put these in. Like I said, if you want to add your own additional about:config
settings, you're welcome to do that any time because we give you the tools to do that, to open up
this particular Pak and add in your own settings if that's what you want to.

Just for example here, I'll just do "www.a.com, www.b.com." Over here, I'll do "www.c.com." Here,
I'll do "www.d.com, www.e.com." Just an example just to prove a point here. I'm clicking "OK,"
locking and loading it into the Group Policy Object. I'll go ahead and go back to my client machine.
I'll run "gpupdate," get the latest, greatest settings. Again, you don't have to use Group Policy if
you don't want to. If you want to use your own systems management utility to get these settings
deployed, you're more than welcome to do that.

Now that that's done, let me close this out. We'll then go ahead and run "Mozilla Firefox" again.
Let's go to our special "about:config" and select "I'll be careful, I promise!" Under "Filter,"
we'll go back to the filter here, and there we go. We instantly delivered these special about:config
settings to ensure that these things are configured the way you want to.

PolicyPak is a true settings management system. We don't just manage Firefox. We can manage tons of
your important key applications. If you're looking for a trial for PolicyPak, it's super easy to do.
Just go ahead, go over to policypak.com, click on the "Webinar" download button that's on the right
side. After we see you in a webinar, we'll hand over the bits and you can try this all out for
yourself.

Thanks so much for watching, and we'll talk to you soon.


