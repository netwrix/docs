---
title: "Endpoint Policy Manager and Microsoft RDS and RemoteApp – Better Together to Manage Applications' settings"
description: "Endpoint Policy Manager and Microsoft RDS and RemoteApp – Better Together to Manage Applications' settings"
sidebar_position: 70
---
# Endpoint Policy Manager and Microsoft RDS and RemoteApp – Better Together to Manage Applications' settings

Netwrix Endpoint Policy Manager (formerly PolicyPak) combines brilliantly with Microsoft Remote
Desktop Services such as RemoteApp to give you perfect control over your applications' settings.

See how to use them together in this video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/JCIr-2sUD34?si=DXPuoVbHN9_SSFdA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager and Microsoft RDS and RemoteApp – Better Together to Manage Applications' settings video transcript

Hello, everybody. This is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak
Software. In this video, I'm going to show you how PolicyPak can manage and enforce applications
that are deployed using Microsoft's Remote Desktop Services, either using RemoteApp or through a
full session.

To get started, let's take a look. Over here, I've got what's called a Windows "ThinPC." If you're
not familiar with a Windows ThinPC, it's a variant of Windows that Microsoft makes available to
Microsoft SA customers such that they can have these WalkUp stations. That what this is. This is my
WalkUp station here. If I were to log on as "fabrikamwestsalesuser2," I'll get access to my
sessions.

Here you can see the applications that are presented via RemoteApp. You can also see my full Remote
Desktop session. I've got another video on full Remote Desktop sessions. Hopefully, you'll watch
that too. Before we get started and launch these apps, let's go ahead and configure them. To do
that, we're going to use our trusty "Group Policy Management" console.

We'll go ahead and "Create a GPO in this domain, and Link it here…" and we'll call this "Manage
Winzip Remoteapps and RDS apps using PolicyPak." OK, I'm just giving it a fun name. When you click
"Edit" here, you can dive down under user side "PolicyPak/Applications/New/Application," and we'll
go ahead and pick our application.

You can see we've got lots of Paks. We actually have over 100 Paks. These are just some of my
favorites: "Adobe Reader," "Chrome," all the "Internet Explorers," "Lync," "Firefox," and here's
"PolicyPak for WinZip 14 and Later." Let's go ahead and pick that guy.

Let's go ahead and dive into that, and we'll go ahead and pick "Passwords" – my favorite thing to
configure. We'll increase our security here with all of our checkboxes and set the "Minimum password
length." We'll go ahead and "Hide corresponding control in target application" for one setting and
we'll "Disable corresponding control in target application" for another setting. While we're here,
we'll go to "Cameras" and we'll also "Disable whole tab in target application."

PolicyPak also has built in the same thing as the Group Policy Preferences. It's called "item-level
targeting." If you want to ensure that these particular groups of settings only occur under certain
conditions – like for instance, "Terminal Session," when you're coming in over an RDS/Terminal
Server session ("the terminal session is Any") – these settings will only affect the user's
experience when they're coming in over RDS. Now I've selected that "Targeting" is "Yes" and I've
selected RDS.

With that in mind, let's go back over to our "ThinPC." Let's go ahead and run "WinZip 14.0." We'll
give it the credentials we need, which is "fabrikamwestsalesuser2," and we'll give it the
"Password." "RemoteApp" is launching. What we're going to find after this occurs is that WinZip is
being presented via RemoteApp and being managed using PolicyPak.

We've "Connected to RemoteApp" here. Here's "WinZip" here. Let's go ahead and go to
"Options/Configuration," and we can see PolicyPak is doing the work. We see that "Minimum password
length" is set to "11." These checkboxes are checked. "Cameras" is grayed out, and we've removed UI
here as well.

Now remember, PolicyPak has lots of superpowers. One of them is this graying out stuff I just showed
you. The other is that if a user does manage to work around your settings, the very next time the
application is run – let me go ahead and do that now – the settings are maintained.

This is a huge differentiator between the way that regular Group Policy and Group Policy Preferences
works and the way that PolicyPak works. PolicyPak is always ensuring, dictating and consistently
remediating your application settings to ensure a consistent user experience.

Let me go ahead and close this out, and let's do another one here. This time we're going to do
"Mozilla Firefox," but this time instead of doing it on the user side let's do it on the computer
side. I happen to have this computer that is the RDS server – "sComputer2," that's its name –
hanging out under this OU called "Microsoft RDS."

If I want to "Create a GPO in this domain, and Link it here…" called "All Users Firefox settings via
PolicyPak," this time instead of editing it on the user side I'm going to edit it on the computer
side and thus I will affect everybody. This is another PolicyPak superpower. We're taking user side
settings, so therefore everybody who is on the computer is going to get these user side settings.

I'm going to pick "PolicyPak for Mozilla Firefox" for this example here. Let me go ahead and set the
"Home Page" to "www.policypak.com," and I'll make sure that is locked down ("Lockdown this setting
using the system-wide config file") so users can't work around it. I'll also go to "Security" and
make sure these important security settings are always checked and always locked down. I'm going to
"Lockdown this setting using the system-wide config file."

Again, if I wanted to "Enable item-level targeting" to affect and make these configuration
"Settings" changes – for instance, maybe I want to set a proxy server when I'm on an RDS session – I
can do that. But I'm not going to do that right now. I'll just go ahead and click "OK."

The one trick about this is that because we're on the computer side, the computer that's affected is
actually "sComputer2." Now if we just wait for the normal background refresh to occur for Group
Policy, which is about 90 minutes give or take – this would affect all users on the machine. But we
don't want to wait 90 minutes for sComputer2 to get the signal, so I'm accelerating the hands of
time for this one time and running "gpupdate" manually.

Now that that's done, what we'll do is we'll head on over back to our "ThinPC." Here we are. We'll
go ahead and run "Mozilla Firefox." Now remember, this is affecting all users via Remote Desktop. If
we go ahead and give "fabrikamwestsalesuser3" and give it a different person, we'll wait for Firefox
to kick in, we'll watch RemoteApp present the application to the user and then let's see if
PolicyPak did what it was supposed to do.

OK, "Connected to RemoteApp and Desktop Connections" here. There we go. Firefox launches. We'll go
ahead and say no to all that stuff. We'll go to "Firefox/Options," and we can see the "Home Page" is
set correctly, dictated and locked down. Those important "Security" settings that IT needs to
embrace are dictated and locked down just the way we want to.

The last thing I want to show you is instead of using RemoteApp, let's go ahead and use the actual
RDP connection. In this way, I'm going to "Connect" to "sComputer2" and get a full session here.
I'll give my credentials, which would be "fabrikamwestsalesuser3." You just saw me use this guy.

Now we're going to get a full session at this point, so therefore all this stuff will be coming down
from sComputer2 – the mouse and the video and all that will be coming from there. PolicyPak will be
ensuring that the settings that are inside the session for both what you saw for WinZip and for
Firefox will be delivered and consistently maintained.

And that's the point. You can make the choice. If you want to use item-level targeting and say when
they are not using a Remote Desktop, if they're using a desktop or a laptop they get one set of
secure settings, and when they're using a Terminal Server/RemoteApp/RDS session they get a different
set of settings. PolicyPak gives you that enormous flexibility.

Here comes our session. There we go. We're ready to go. Let's go ahead and run "WinZip" first, and
let's see if we get the locked down WinZip settings we expect. There we go. We see "11." We see the
four checkboxes checked. We see "Cameras" grayed out – excellent. Again, if a user tries to do
something naughty and work around these settings, PolicyPak is always working to ensure that what
you set is what they get.

If we go ahead and click "Mozilla Firefox" here just to see what happens here, PolicyPak is once
again ensuring the settings. Again, PolicyPak is working either in a full session as you see here or
when the applications are being deployed using RemoteApp.

If you want to check out PolicyPak for either these two scenarios or the full VDI scenario that we
also support, you're welcome to get started any time. Just go ahead and fill out the
"Webinar/Download" button on the right, and we'll see you in a webinar, get you the bits and you can
see if it's right for you.

Thanks so much, and I'll talk to you soon.


