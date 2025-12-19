---
title: "ACL Lockdown for Registry Based Applications"
description: "ACL Lockdown for Registry Based Applications"
sidebar_position: 30
---
# ACL Lockdown for Registry Based Applications

When ACL Lockdown™ mode on a Netwrix Endpoint Policy Manager (formerly PolicyPak) element is
selected, Endpoint Policy Manager will "take ownership" of the portion of the user's registry (or
files) involved in the application.  
This literally prevents users (or other applications) from modifying your setting. It provides a
"Steady State" to your application where users are simply not permitted to work around your settings
(online or offline, running or not running.)

<iframe width="560" height="315" src="https://www.youtube.com/embed/bSuxXH10vSA" title="Endpoint Policy Manager: ACL Lockdown for Registry Based Applications" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager: ACL Lockdown for Registry Based Applications video transcript

Hi, this is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software. In this
video, I'm going to show you the ultimate way to ensure that your settings cannot be changed by
users on your target systems. It's a function of PolicyPak called ACL Lockdown. I want to show you
exactly how it works.

To get started, I have to set the stage a little bit. I'll call this"WinZip Lockdown." It's a GPO
I'm creating here. I'll go ahead and "Edit…" that guy. I'll dive down under user side,
"`PolicyPak/Applications/New/Application`" and pick "PolicyPak for WinZip 14 and Later."

Now that I've got the Pak here, you've probably seen me do this particular demonstration before
where I'm setting all four checkboxes and setting a "Minimum password length" to some important
value. You've also probably seen me "Hide corresponding control in target application" and "Disable
corresponding control in target application" and also "Disable whole tab in the target application."
What you haven't seen me do is literally prevent a user from working around your settings.

Let me go ahead and run "`GPUpdate`" to get the latest, greatest settings first, and let's see what
I've done before I continue onward. Let me go ahead and run "WinZip" here now that that's done. Go
to "Options/Configuration…," go over to "Passwords" here and you can see, in fact, PolicyPak has
delivered the settings, removed the UI, and grayed out the UI for "Cameras."

But notice what I've done here. I've also left it such that the user can theoretically modify the
"Minimum password length" and change this to "2" and click "OK." Now while the application is
running, that value continues to survive. PolicyPak has had a feature for some time where if you
rerun WinZip, what happens? That value gets redelivered. If the user is naughty and they change a
value that they shouldn't, while the application is running it stays with them, but when the
application is rerun PolicyPak will redeliver that setting.

That's great, but what if you want to ensure that those settings literally cannot be changed? That
is where the PolicyPak ACL Lockdown comes in. What we'll do, we'll re-edit this Group Policy Object,
go over to "Passwords" and let's right-click over this setting and "Perform ACL Lockdown" and we'll
click "OK." Now let's see what happens.

Let me go ahead and run "`GPUpdate`" to get the latest-greatest setting, the idea that we want to
perform ACL Lockdown. Now that that's done, let's run "WinZip" here. Go to "Options/Configuration…."
Go over to "Passwords." Now it's still "11" but if the user goes to modify this in any way and they
click "OK," remember before what we saw was that during the session it would stay with them. Now
with ACL Lockdown, that particular setting cannot be overridden by the user.

In fact, let's go ahead and go a little further and let's see what's happening in the registry. Let
me go to "regedit" here. I just happen to have the place in the registry that this setting is
stored. This is "Nico Mak Computing" under "Policies." You can see there is "11" right here.

Now, what if you have really smart users or some nefarious application that really shouldn't be
modifying these at all and they click here in the registry? They modify it. They go from "11" to "2"
then they click "OK." PolicyPak is engaged, and you can see it right here: "(PPAclLockdown)."

What we're doing is we're taking ownership of the actual portion of the registry – in this case,
this key here called "Nico Mak Computing/WinZip/Policies" – we're taking ownership of that, and
because of that there's no way for a user to possibly work around your setting.

What we've got here is the representation of what happened beforePolicyPak ACL Lockdown occurred.
When it's time for the Group Policy to go away, we know what to revert back to. Let's go ahead and
check that out right now. Let's go over here. Let's go ahead and unlink the Group Policy Object by
unchecking "Link Enabled," which means it won't apply anymore.

We'll go ahead and run "`GPUpdate`" here. Now let's go back to the "Registry Editor" and refresh.
When we do this, we are no longer in effect. When the user runs "WinZip" here and goes to
"`Options/Configuration`…," they are welcome to manipulate any of the settings in here now because
PolicyPak no longer applies. Just to prove a point, go back in there and those settings stay. You
can see it reflected here in the registry.

That is the demonstration of using ACL Lockdown with a registry-based app. I hope you can see what
this does for you to increase your security. At this point now, there's nothing at all that users
can do once the PolicyPak ACL Lockdown is engaged for users or another application or a script or a
virus or anything bad to happen to that portion of the registry.

Once the PolicyPak is delivered either using Group Policy or if you want to deliver the PolicyPak
using SCCM or LANDesk or KACE whatever you want, it works exactly the same way. I just happen to be
using Group Policy for these demonstrations.

That's it. If you have any questions about how the PolicyPak ACL Lockdown works, we'll be happy to
show you more. Just give us a buzz.

Thanks so much, and I'll talk to you soon.


