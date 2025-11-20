---
title: "Lockdown Microsoft Office Suite 2013"
description: "Lockdown Microsoft Office Suite 2013"
sidebar_position: 160
---

# Lockdown Microsoft Office Suite 2013

We enforce the optimum setting values that you, the administrator, want to have. Netwrix Endpoint
Policy Manager (formerly PolicyPak) sets and remediates your users' applications' settings, so that
they get the same experience, every time they launch it, especially for an ubiquitous application
such as this. Keep your Microsoft Office 2013 configuration settings delivered, enforced and
automatically remediated with Endpoint Policy Manager. Check out this video to see how it's done.

<iframe width="560" height="315" src="https://www.youtube.com/embed/b7MBQBnRn-c?si=9j-EvONdRtaEL2Qz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Lockdown Microsoft Office Suite 2013 Video Transcript

Hi, this is Jeremy Moskowitz, Microsoft MVP, Enterprise Mobility and Founder of PolicyPak Software.
In this video, we're going to learn how to configure some of the Office 2013 applications using
PolicyPak.

Before you get started you want to point out a resource that is also helpful in conjunction with
this video. Our free whitepaper.

What Office 2010 & Office 2013 Admins don't know about Application Management.

Which can be found in our Whitepapers section on the website.

Inside the whitepaper you'll learn where PolicyPak fills in the desktop management gaps where
Microsoft's ADM and ADMX coverage doesn't.

We'll cover some of those here in this video, but the whitepaper is very very detailed.

So in this example, you've already got Office 2013 installed on my computer, and you're just a
regular user here. As you can see, you're logged on as a guy called "eastsalesuser4."

As the user, you can see what happens when he opens up Outlook then goes to Options. Lets examine
the configuration settings a user has access to.

As a network administrator, you should be interested AutoArchive Settings and some of the "Trust
Center Settings" such as "Macro Settings."

If you open up Microsoft Word and review my "Trust Center Settings" you'll see some more tabs that
are important to this application as well such as "Protected View" and
[https://policypak.com/company/privacy/](https://policypak.com/company/privacy/) Options."

Let's go over to our "Task Monitoring," and we'll see that it's "In Progress" here. Let's go over to
my target machine here, and we'll take a look at the Mirage client and it's doing its thing. This is
going to take a little while, so I'm going to pause the demonstration and I'll come back when we're
all set.

Finally, if you open up Microsoft Excel, we have some "Trust Center Settings" here that are common
to many of the Office 2013 applications such as "Protected View" and "ActiveX Settings."

While we're at it, let's pretend that eastsalesuser4 is a registry savvy – the kind of person you
wouldn't want poking around in the registry itself.

To speed things along, I already have the registry location already open for the "Enable Protected
View for files originating from the Internet" to show you.

Now, as the user, let's change the registry value of this setting. Here, you can see that the user
can simply circumvent your desired settings.

Let's see how we can ensure compliance and perform desktop management of settings quickly using
PolicyPak. I'll go ahead and switch over to my Management Station computer.

We'll go ahead and right click over our "East Sales Users", "Create a GPO" and we're going to call
it
[https://policypak.com/lockdown-recordings-portal/](https://policypak.com/lockdown-recordings-portal/)
Office 2013." So this GPO is now associated with the "East Sales Users." you'll right click over it.
You'll click "Edit…" you'll dive down under "User Configuration,"
"PolicyPak/Applications/New/Application." There it is, "PolicyPak for Microsoft Outlook 2013" along
with other applications like "Java," "Flash" "Firefox," "Skype" and lots of other important desktop
applications that your users utilize every day (and you want to make more secure).

Let's start with Outlook once again. Let's go to "Advanced," click "AutoArchive" and let's configure
the "Run AutoArchive every" setting for 10 days. Then let's make sure that "Delete expired items" as
well as "Show archive folder" are always checked. Notice how when you manipulate these using
PolicyPak, that the text becomes underlined. This means that these setting values will be delivered
and automatically enforced by PolicyPak.

Let's next move to "Automatic Downloads" and let's make sure that "Don't download pictures
automatically in HTML e-mail messages or RSS items" is always checked. Then we'll ensure that
"Permit downloads in e-mail messages from Safe Senders and Recipients," is checked and enabled.

Now let's go back to our GPO and let's add the application, Microsoft Word 2013 which will give us
the interface we need to manage that application. Your users frequently download Word files so you
want to ensure that for "Protected View" that "Enable Protected View for files originating from the
Internet" is always checked Now let's right click on our desired setting and select "Perform ACL
Lockdown" which will lock this setting down even within the registry itself. While we're at it, let
go to "Add-ins" and ensure that "Require Application Add-ins to be signed by Trusted Publisher" is
enabled and that "Sign up for the Customer Experience Improvement Program" is unchecked at all
times. We will Perform ACL Lockdown for it as well. This prevents users from possibly working around
our settings at all.

Finally, let's add one last application for now, Microsoft Excel 2013. As you can see, PolicyPak has
PAKs for all of the applications in Office Professional 2013 including OneNote and Access.

You want to make sure that your users have error checking enabled so that their formulas are always
precise and produce accurate financial information. You'll want to select "Check cells containing
formulas that result in an error," and "Inconsistent calculated column formula in tables" also set
to be enabled at all times.

Now you will go back to my client machine, we'll get a command prompt and run "gpupdate." Now you
could envision the user logging on for the very first time, using a Terminal Services or Citrix
machine, using a VDI session, changing job roles, or getting a new computer. I just happen to be
using gpupdate.

Now that that's done, let's go ahead and reopen Outlook. If we return to the "AutoArchive" settings,
we can see that PolicyPak has delivered "Run AutoArchive" and set it to 10 days as we wanted,
"Delete expired items (email folders only), and "Show archive folder in folder list". Additionally
see that within Automatic Download that "Don't download pictures automatically in HTML e-mail
messages or RSS items" are also delivered via PolicyPak.

Now, let's logoff as this current user and log back on as a user called eastsalesuser5 and
demonstrate that PolicyPak enforces settings for all designated users. Now let's open up Word and
look at our "Protected View" settings and we see that "Enable Protected View for files originating
from the Internet" has been enforced with the settings you want. Next we'll go to "Add-ins" and
confirm that "Require Application Add-ins to be signed by Trusted Publishers" took effect as well.

Now let's try to alter the "Enable Protected View for files originating from the Internet" and we'll
see that this attempt has been thwarted by PolicyPak and ACL Lockdown.

Now let's wrap things up with Microsoft Excel. We'll start in "Formulas" and confirm that our two
error checking settings are properly enabled. Those settings are "Cells containing formulas that
result in an error" and "Inconsistent calculated column formula in tables."

And we are done. That is how incredibly easy it is for you to use PolicyPak to manage the Office
2013 suite as well as tons of other desktop applications.

If you're looking for a trial of PolicyPak, just click on the
[https://policypak.com/webinar/](https://policypak.com/webinar/) button on the right.

Thanks so much for watching, and get in touch with us if you're looking to get started. Talk to you
soon.

