---
title: "Endpoint Policy Manager: Manage Java 7u45 using Group Policy"
description: "Endpoint Policy Manager: Manage Java 7u45 using Group Policy"
sidebar_position: 140
---

# Endpoint Policy Manager: Manage Java 7u45 using Group Policy

Here is an update for Java 7 u 45. Learn how Netwrix Endpoint Policy Manager (formerly PolicyPak)
can manage major settings in Java very quickly.

<iframe width="560" height="315" src="https://www.youtube.com/embed/aQrGCzGk0SQ?si=LgCJ5aTeLS8B9g67" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak: Manage Java 7 u 45 using Group Policy Video Transcript

Hi. This is Jeremy Moskowitz, Microsoft MVP, Enterprise Mobility and Founder of PolicyPak Software.
In this video, I'm going to show you the overhaul that we did for the latest Java Pak here. This is
for Java 7, Update 45 – also known as J7u45.

The first thing I want to show you here – obviously you can just see here's the about – this is the
target machine. So this is the end user's machine here. You can see there's an "Update" tab, and you
almost certainly want to make Java stop updating so you can make it work so you can deliver your own
updates on your schedule and not have users get popups and such like that.

We can also do things like actually turn Java on and off entirely if you're so inclined. We can also
set the sliders in here, and we can also manipulate pretty much all the "Advanced" items that are
here.

I'm going to go over a handful of things that some people want to do in our examples here. Let's go
ahead and get started. Over here on my Management Station here, the first thing I want to note to
you is that for Java, the Java settings can be deployed either per user or per system. If you want
to do it per system, you get a special bonus which is you can do UI lockout.

For these examples for my "East Sales Desktops," I'm going to "Create a GPO in this domain, and Link
it here…" and call it "Manage Java 7u45 with PolicyPak." The first thing to note is that you'll see
that it's not available because I haven't put in the latest, greatest PolicyPak settings.

What you do see here is "PolicyPak for Java Control Panel Version 8 (Windows 7)," which is actually
a future version. They have a prerelease version. We have a Pak for that as well. What I'm going to
show you is the Pak we have for the current version: J7u45.

If we go to our "PreConfigured PolicyPaks Production" – this is part of the download – what you'll
do is you're going to look for is "Oracle Java for Windows 7 Version 7 45." That's what you're after
here. Here are the files there.

What you then need to do is get them into your PolicyPak system. For those familiar with it, we're
going to use the Central Store. All you do is copy one file, which is the DLL, right there ("Copy
here") and you're ready to go. With that in mind, let's go back to our Group Policy Object, click
"New/Application" and there it is: "PolicyPak for Java Control Panel 7u45 (Windows 7 and later)."

Now, what I want to show you is that it looks a little bit differently because Java updated their
world a little bit differently. If we go back to the target machine, what I want to show you here is
you can see here's "Advanced" and there's a whole lot of stuff here.

What we try to do in this Pak is try to make it pretty similar. If you go to "Adv/Adv1," you'll see
most of those first settings there. Go to "Adv/Adv2," you'll see most of those settings there. You
want to go to the "Adv/Secure Execution Environment" here, there are all those settings there and
also "Adv/Adv Sec." They are all here.

There are also some settings that have been retired, and I put them here in "Retired Settings in
u45" in case you need them. Technically the latest version of Java won't honor these settings, but
they're here anyway.

Let's take a look and try to do some things out of the gate. First thing, let's get rid of
"Updates." First and foremost where it says "Check for updates and notify me before installing," we
want to specifically "Never check for updates, never check for updates automatically." When we
select it in PolicyPak, it underlines and therefore it will be delivered. That's the first thing
that we want to do.

The second thing we want to do, let's take a look inside Java. I got the memo here that a lot of
people want to change these settings: "Perform certificate revocation checks on" "Publisher's
certificate only" and also "Check for certificate revocation using" "Certificate Revocation Lists
(CRLs)." You can see the defaults here, and we're going to deliver those using PolicyPak.

Let's go ahead and do that now. That is going to live under "Adv/Cert Rev Checks." We want to
deliver "Publisher's certificate only" and "Certificate Revocation Lists (CRLs)." Let's just start
right there and see that those settings are deployed.

We'll go ahead and click "OK" and go over here. Our machine is in the right OU to pick these up. It
doesn't matter what user we're logged in as because PolicyPak will pick up the directive because
we're deploying this on the computer side. Let's just see that these directives took hold before we
continue onward.

OK, let's go ahead and rerun "Java" here. The first thing, you can see the "Updates" tab is
completely gone. Now you know that Java is not going to be prompting users for auto-updates. If you
don't see the tab, you know you've done that part right.

If we go to "Advanced here," we can go down to those two things that we delivered: "Perform
certificate revocation checks on." PolicyPak has delivered the right setting for each of those guys.

Let's pretend to be naughty and work around the settings there. In fact, you can see these settings
are related. If you do something like this, which is naughty and which you don't want the users to
do, the next time "Java" is run PolicyPak is always working and will automatically redeliver those
settings. I didn't have to do anything. PolicyPak is just always working for you.

I'll show you again just to show you one more time. The user is being naughty doing this naughty
thing they shouldn't do changing it to something like that. The next time "Java" runs or Group
Policy reapplies, it puts it right back. That's the first piece.

The second thing that I wanted to demonstrate is the ability to deploy UI lockdown for not all but
many of the settings here in the "Advanced" tab here. Let me go ahead and do that. What I'll do is
I'll go back to my configuration, and I'll just pick a couple of things to just get started on here.

For instance, if I wanted to go to "Adv/Adv 1" just to pick a couple to hang our hats on, let's say
I wanted to enable "Debugging" and I wanted to lockdown these settings down, you check on the
checkbox or the radio button and right click and "Lockdown this setting using the system-wide config
file." I'll do that for two of those three settings.

Another popular setting is here in "Adv/Adv Sec": "Use certificates in keys and browser keystore."
If you want to guarantee that setting is in fact checked, you can check it, underline it and
"Lockdown this setting using the system-wide config file." I'll do that and also do "Use SSL 3.0."

That's it for now. I'll go ahead and click those guys, click back over here and run "gpupdate" and
let's see that the effects took hold. We'll go ahead and click on "Java" here and click on advanced.
You can see we've delivered them, and we've locked down those settings here. If we go down, there we
go. We've delivered "Use certificates and keys in browser keystore" and "Use SSL 3.0," and they're
locked out and users can't work around it.

Again, most – not all – of the settings are available for system-wide lockout as I've described. If
you need more information on which ones are and which ones aren't, just read the Read Me file.
Hopefully, this gives you some idea of how to use it.

If you want, you can sign off now. This is the "how to use it." If you're interested in what's going
on underneath the hood in this video here, I'm going to continue onward here. In order to do that,
I'm going to run the PolicyPak Design Studio. Some people may be interested in understanding one key
element here, which is the restrictions. How do we know this is always going to work only on, say,
Windows 7 and later for a particular Java.

What I'm going to do is "Load a project from XMIL file" here. Again, you have access to all these as
well. We'll go to the download. We'll go to "Oracle Java for Windows 7 Version 7 45" and open it up.

We have this idea inside the project of this thing called internal or "Predefined Item-Level
Targeting" filters. What I'm doing is I'm specifying that this will only fire off when the right
version of Java is there. This version of Java is 45, so it really expands to version "7.0.450.0"
and who knows what the next version will be. I've tied down the project specifically here with
internal item-level targeting filters so that it must match the right version of Java or the
settings don't get applied.

What's that I hear you crying? You don't like that? You want to try to make these settings work
regardless? You're welcome to clear out the filters, recompile the Pak and it will work that way.
Again, this is somewhat on a technical side. This gets into the Pak about why the Pak will deliver
settings expressly and only to Java 7u45.

If you take a look at the older Paks, the ones that are before this one just to go a little earlier,
it should really say version 7 40 and earlier. First of all, the Pak looks a lot different. For this
latest version, we've made it look a lot more closely. But underneath the hood, the predefined
conditions just checked that the operating system is Windows 7.

I'm telling you this so that many of the settings in the old Pak will work perfectly going forward,
but this time we made a decision to specify with internal or "Predefined Item-Level Targeting"
filters for the latest Pak, the 45 Pak, to only apply when the machine actually has that version of
Java and not any sooner.

I hope that gives you some idea of what's going on underneath the hood and gives you some ammunition
to get started. Sorry for the extra-long video here, but Java is one of those things that people
really, really want to see and understand, and I thought it might be worth going through a little
bit of extra time and effort going through that.

Thanks so very much. If you have any questions about any of our preconfigured Paks – about how they
work, why, what's going on – the first place to get started is the community forum. Please post your
"how do I" questions, especially about preconfigured Paks, to the community forum and we will answer
them, and the answers we provide there will help everybody.

Thanks so very much, and we'll talk to you soon.


