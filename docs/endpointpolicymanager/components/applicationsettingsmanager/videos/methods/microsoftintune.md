---
title: "Perform Desktop Lockdown using Microsoft Intune"
description: "Perform Desktop Lockdown using Microsoft Intune"
sidebar_position: 10
---
# Perform Desktop Lockdown using Microsoft Intune

Microsoft Intune enables you ensure that some key Windows settings are set optimally (Firewall,
Malware protection, etc.)

Microsoft Intune also enables you to deploy 3rd party software. But you still have some big
problems:

- Once the application is deployed, how do you mange, change or configure that application?
- How do you prevent users from working around your important application settings?
- How can you maintain those settings even when the computer is offline?

Microsoft Intune doesn't help you there. But there's good news: that's where Netwrix Endpoint Policy
Manager (formerly PolicyPak) comes in.

Simply take Endpoint Policy Manager directives then utilize Microsoft Intune to deploy those
directives.

Bingo: Instant desktop lockdown, and configuration for applications which have pop-ups, or
constantly nag the users.

Watch this video (exclusively for Microsoft Intune administrators) to see exactly how to manage your
applications Endpoint Policy Manager and Intune:

<iframe width="560" height="315" src="https://www.youtube.com/embed/i35w5oj1_Og?si=mC1Ii7UdVph-c_6C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

If you're a Microsoft Intune customer, you might have 5, 10 or 20 customers that you manage. Here's
the best part: Create your Endpoint Policy Manager directives once, and what you do for one customer
you can implement for all customers, easy peasy.

You can create your own Endpoint Policy Manager for your applications to manage all your customers'
application's settings, or use one of our preconfigured Paks for lots of common applications like
Firefox, WinZip, Office and more.

There's nothing extra to buy – this functionality is *all* included when you're a Endpoint Policy
Manager Professional customer.

Endpoint Policy Manager was designed by former Group Policy MVP Jeremy Moskowitz – who "wrote the
book" on Group Policy, runs GPanswers.com, and lives and breathes Group Policy and desktop
management.

When you're ready to manage your applications and settings using Microsoft Intune, Endpoint Policy
Manager is here for you.

Click on the following link
[https://www.policypak.com/webinar/evaluate.html](https://www.policypak.com/webinar/evaluate.html)
to get the software and try it out for yourself.

### Perform Desktop Lockdown using Microsoft Intune Video Transcript

Hello, everybody, and welcome. This is Jeremy Moskowitz, former Group Policy MVP and Founder of
PolicyPak Software. In this video, we're going to learn how PolicyPak can get its settings delivered
using Microsoft Intune.

Here I've actually already created a directive using PolicyPak, which is to lock down my important
applications. If you're not familiar with what PolicyPak does, there are lots of videos on the
website that show you exactly what PolicyPak does. In brief, PolicyPak will use by default Group
Policy to deliver settings and lock them down for your important applications.

In this example, for "Adobe Reader X," "Mozilla Firefox" and "WinZip 14 and 15," I've created three
directives inside one Group Policy Object. If I go over to my target machine that happens to be on
the network right now and take a look at the applications, if for instance I go to
"Edit/Preferences…" in this application, you can see I've delivered and locked down this setting.
I've unchecked and locked down that setting, and here for "Updater" I've delivered "Do not download
or install updates automatically" and also locked down that setting.

That's an example. For "Mozilla Firefox," I've also delivered a particular homepage, as you can see
here, and locked down some settings as well. The same thing for "WinZip," I've delivered some
important settings for my "Passwords" tab and grayed out and locked down some of my tabs like
"Cameras."

That's what PolicyPak can do. Now let's figure out how to take our Group Policy directives that we
already have and export them to something we can utilize within Microsoft Intune. What we're going
to do next is pretty simple. All we're going to do is find our "XMLDATA1" folder here. It's
currently blank. It has nothing in it.

Let me just go ahead and right click over this first set of directives and "Export settings to XML
Data File." I've got that folder, "XMLDATA1." I'll call this "Acrobat 1." Those are the settings
inside that PolicyPak. I'll do the same thing for Firefox, "Firefox 1," and lastly for WinZip,
"WinZip 1."

In short, the goal is to get these three files onto the target machine, because PolicyPak can use
Group Policy but it doesn't have to use Group Policy. What we provide is a utility, which I'm going
to show you now, called the PolicyPak Exporter utility. It's under "PolicyPakPolicyPak Exporter"
here. We're going to basically create an MSI to then be delivered using Microsoft Intune.

We'll "Create a new MSI installer from XML data files" that we just created. I'll "Add files." I'll
go ahead and select all of my XML data files. It's super easy. What I'm about to do is use Intune to
deliver this MSI file to my target machine, but I can specify who gets what under what conditions.

For instance, if I want everybody on that machine to get all three files and embrace those settings,
that's it. I'm done. I can click "Next" and move on. Or I can specify that a particular XML data
file can be used for, say, a particular set of "Users & Groups."

For instance, we know that my guy is in fact an East Sales User. So I can pick, if I want to,
"eastsalesuser5" or a group that he's in and either one will work. I can specify exactly who gets
what XML data file under what conditions.

I'll just do it like this. Everyone on the computer will get the Acrobat settings, everyone on the
computer will get the Firefox settings and just that one guy, East Sales User 5, he'll get the
WinZip settings.

Let me go ahead and click "Next" here. I will give this a name. We'll call this "PolicyPak Settings
1." We'll just call this "InHouse Pak Assignments." That's it. We'll go ahead and click "Next" and
"Next" again, and we'll call this "PolicyPakSettings1." There we go, excellent.

Now that we've got this file, we are ready to go into Microsoft Intune. Let me switch gears, and
I'll come back on the Microsoft Intune console. OK, here I am back at the "Microsoft Intune"
console. If you're using Microsoft Intune, you've probably already seen this. This is "Managed
Software." All I've done was "Add Software."

I'll go ahead and go through this really quick. I'll pick "Windows (computer)" and
"C:UsersJeremymDesktopendpointpolicymanagerSettings1.msi" and click "Next." The "Publisher," you can call it
"InHouse Publisher" or whatever you want. There you go. Once that's all done, you can set off all
your "Requirements," the same exact stuff you know and love in Microsoft Intune.

I've already done this, and that's why I have this package here called "PolicyPak Settings 1." It's
ready to get delivered, so let's go ahead and switch gears back to my other machine, which is over
here, "Win7Computer-32." You can now assume that this is a machine that is a traveling user, and
because he's traveling we manage him with Microsoft Intune.

With that in mind, Microsoft Intune takes a little while to get going for software deployment. Let's
go ahead and let's just take a look at our applications really fast. We'll go take a look. See,
"Adobe Reader X" is not configured. If we go to "Edit/Preferences…" here, you can see that user can
work around these settings. That's not good.You don't want that. The user can do all sorts of things
you don't want them to do.

This is what PolicyPak is going to control, and you're going to use Microsoft Intune to make that
happen. You run "Mozilla Firefox" and Firefox isn't configured. That's not good. It's not managed
very well. If you go to "Options" here, they don't have the "Home Page." They can just work around
your "Security" settings. That's not good.

Again, this is because so far the user doesn't yet have the directives that we've locked and loaded
inside Microsoft Intune, so none of your configuration settings are there. I'm going to accelerate
that hands of time a little bit, and I'm going to make Microsoft Intune fire off. Let's see what
happens next.

OK, we're back. PolicyPak has its settings delivered using Microsoft Intune. You saw me upload the
MSI that I created using our PolicyPak directives. Now that Microsoft Intune kicks in, let's go
ahead and run our three applications again. Remember, this guy is not on the regular network. He's
only being serviced using Microsoft Intune.

If I go to "Edit/Preferences…" here, you can see we've delivered the settings just like we expected.
This is going to be for all users. We set up Acrobat Reader for all users here. That's exactly what
we expect.

If we go to "Mozilla Firefox" here, we also set up Firefox to dictate the homepage for all users. We
can go to "Options" here, and the checkmarks are checked, exactly what we expected. "WinZip" for
this particular user, we set up WinZip East Sales User 5 for the configuration. If we were to logon
as a different user, we configured that to not affect other users.

If you're wondering what's happening underneath the hood, let me go ahead and show you. I'm a guy,
"eastsalesuser5." Let me go to a command prompt here. Actually, I need to go to an administrative
command prompt to show you everything that occurred here.

First things first, let's go ahead and take a look at the Microsoft Intune logs. They're under
"C:Program FilesMicrosoftOnlineManagementLogs." We're looking at the log files. The one we're after
here is "updates.log." Let's take a look at "updates.log" here. If we look for "policypak," the
point is PolicyPak is getting its settings delivered using Microsoft Intune.

Then what's happening next is that those XML files are going to a specific place. In case you care,
and we have this all documented in the manual in excruciating detail, but it's under "C:UsersAll
UsersPolicyPakXmlData." We've got one for "Computers," one for "Users" and also it's not seen here
but one for Groups as well, and Groups is selected.

For instance, under "Computer" you saw that I had two XML files, one for "Acrobat1" and one for
"Firefox1," and that's exactly where it got delivered. If I take a look at "Users," you can see that
I've got all the users who have ever logged onto this machine. The one we're after, I think, is this
guy. There it is. So "eastsalesuser5," his CID corresponds to this folder and the MSI installs the
file right there.

The point is that you can quickly use Microsoft Intune to take PolicyPak directives and deliver them
quickly and easily using Microsoft Intune.

If you like what you see here and you're ready to manage your application settings using PolicyPak
and either Group Policy or Microsoft Intune and lock down applications like Firefox, Flash, Java,
Internet Explorer, Office – we've got so many preconfigured Paks or you can create your own using
the PolicyPak Design Studio – it's super easy to do. Just go ahead and click on the
"Webinar/Download" button on the right, and we'll hand over the bits and that's it.

Alright, very good. Thanks so much for watching, and we'll talk to you soon.


