---
title: "Endpoint Policy Manager: Manage GoToMeeting using Group Policy, SCCM or your own management utility"
description: "Endpoint Policy Manager: Manage GoToMeeting using Group Policy, SCCM or your own management utility"
sidebar_position: 100
---

# Endpoint Policy Manager: Manage GoToMeeting using Group Policy, SCCM or your own management utility

Using Netwrix Endpoint Policy Manager (formerly PolicyPak) the sales team can deliver, enforce, and
lock down GoToMeeting settings. Endpoint Policy Manager ensures your users' applications settings,
so that they get the right experience, every time they launch it. Keep your GoToMeeting
configuration settings enforced with Endpoint Policy Manager. Check out this video to see how it is
done.

<iframe width="560" height="315" src="https://www.youtube.com/embed/rPy2hribT6M?si=CFwLG3_V3PdbsDN-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Manage Goto Meetings

Hi. This is Jeremy Moskowitz, Microsoft MVP, Enterprise Mobility and Founder of PolicyPak Software.
In this video, we're going to learn how to manage and
[ lockdown ](https://policypak.com/lockdown-recordings-portal/)GoToMeeting using PolicyPak.

I've already got "GoToMeeting" installed on my target computer, and I'm just a regular user here. As
you can see, I'm logged on as a guy called "EastSales User4." If we open up this application from
the start menu and go to "File/Preferences," we can see a number of settings here for us to
configure.

Let's start in "Meetings" where I've got a number of settings that govern the visibility of meeting
attendees. In "Recording," I have key settings that are important if my organization requires that
virtual meetings are recorded. Finally, "Integrations" manages how this application will integrate
with most of my important Office applications, such as Microsoft Office and, most especially,
Outlook.

Let's see how we can ensure compliance and perform desktop management of settings quickly using
PolicyPak. I'll go ahead and switch over to my management station computer. We'll go ahead, we'll
right click over our "East Sales Users," and "Create a GPO in this domain, and link it here." We're
going to call it "Lockdown GoToMeeting." This GPO is now associated with our East Sales Users.

I'll right click over it, I'll click "Edit," and I'll dive down under "User
Configuration/PolicyPak/Applications/New/Application." There it is: "PolicyPak for GoToMeeting"
along with other Paks like "Java," "Flash," "Firefox," "Skype" and lots of other important desktop
applications that your users utilize every day and you need to make more secure.

Let's start with "Meetings," where I want to make sure that all of these settings, such as "Arrival
and departure messages" and "Organizer promotion messages" are all enabled. Notice how these
settings become underlined as soon as the checkbox values are changed. This means that the setting's
values are going to be delivered through PolicyPak.

I always want my users to have a uniform experience for all of their online meetings, so let's
ensure they can't alter these settings. I'm going to lock them down with PolicyPak's exclusive ACL
Lockdown feature. I'll just right click over the settings and select "Perform ACL Lockdown." Now,
even if the user has the ability to access the registry, they simply cannot alter these settings
anymore.

Next, I'll go to "General." I want to ensure that the "Chat Logs" are always saved to the designated
folder that I've got on everybody's C drive. I'll finish by going to "Integrations" and make sure
that this application always integrates with "Microsoft Outlook." I'll make sure that ACL Lockdown
is protecting that setting as well ("Perform ACL Lockdown").

Let's go back to my client machine. I'll get a command prompt and run "GP Update." Now you can
envision the user logging on for the first time or using a Terminal Server or a Citrix machine or
using a VDI session or changing job roles or getting a new computer. All these things would trigger
Group Policy to perform. I just happen to be using "GP Update."

Now that that's done, let's go ahead and reopen the application. As I click through, we're about to
see that our desired settings on the tabs that we wanted have been delivered. Let's start off with
the "General" tab where the "Save in" settings are delivered with the common "GTM Chat Folder" I
specified while inside the Group Policy Editor.

On the "Meetings" tab, PolicyPak has delivered the settings for "Arrival and departure messages" and
"Organizer promotion messages." Within "Integrations," you can see we've delivered "Use GoToMeeting
with" "Microsoft Outlook."

Delivering settings is half the battle. PolicyPak goes the extra mile and ensures true lockdown.
Let's pretend that this user is very registry savvy and attempts to modify the setting on this tab
through the registry. For this example, I have the registry location for one of these GoToMeeting
settings right here. If a user tries to thwart your policy, PolicyPak ACL Lockdown ensures that
these users will be unable to change the settings within the registry even if they know what they're
doing.

And we're done. That is how incredibly easy it is for you to use PolicyPak and to manage and
lockdown GoToMeeting as well as tons of your other desktop applications. If you're looking for a
trial of PolicyPak, just click on the
[https://policypak.com/webinar/](https://policypak.com/webinar/) button on the right.

[https://policypak.com/resources/thank-you-whitepapers/](https://policypak.com/resources/thank-you-whitepapers/)
so much for watching, and get in touch with us if you're looking to get started. Talk with you soon.

