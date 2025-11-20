---
title: "Endpoint Policy Managerand Workspace One (Airwatch) MDM: Deploy Group Policy and Endpoint Policy Manager superpowers today"
description: "Endpoint Policy Managerand Workspace One (Airwatch) MDM: Deploy Group Policy and Endpoint Policy Manager superpowers today"
sidebar_position: 50
---
# Endpoint Policy Managerand Workspace One (Airwatch) MDM: Deploy Group Policy and Endpoint Policy Manager superpowers today

Workspace One (Airwatch) is awesome, but it doesn't have real group policy, or extra Windows 10
desktop management features. Watch this video and learn how to useNetwrix Endpoint Policy Manager
(formerly PolicyPak) to deliver REAL Group Policy settings and Endpoint Policy Manager's extra
settings to all your Workspace One (Airwatch) MDM joined Windows 10 machines.

<iframe width="560" height="315" src="https://www.youtube.com/embed/URF_gKbs6kc" title="Endpoint Policy Manager and Workspace One (Airwatch) MDM: Deploy Group Policy and Endpoint Policy Manager superpowers today." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak and Workspace One (Airwatch) MDM: Deploy Group Policy and PolicyPak superpowers today

Hi. This is Jeremy Moskowitz, former Group Policy MVP and Founder of Endpoint Policy Manager
Software. In this video, I'm going to show you how you can get real Group Policy settings –
"Policies," "Preferences" and Endpoint Policy Manager's special settings like "Application Settings
Manager,"
"[https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html](https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html),"
"Java Rules Manager" and so on – all of these settings out to your AirWatch investment and all of
your clients using MDM.

To get started, it couldn't be simpler. There are actually three things you need to upload into your
"AirWatch Console" as applications. The first thing is the "Endpoint Policy Manager Client-Side
Extension." It's a little MSI that gets deployed to all of your endpoints. It's the thing that does
work.

You're also going to upload the license file that we give you (" Endpoint Policy Manager MDM
Licenses for \*@policypak.com") that lights up your client side extension. Basically, what we do is
we say that you're welcome to light up anybody at a particular domain name. In my case, it would be
anyone at the "Endpoint Policy Manager.com" domain name can join AirWatch and get Group Policy
settings or Endpoint Policy Manager special settings.

Then lastly are the actual "Packaged Endpoint Policy Manager Settings" themselves. These are the
actual XML files that do the work, the things you want to accomplish. In this demonstration, for
instance, here are my "XML Examples." I'm managing an application like WinZip, Firefox, Flash,
OpenOffice, Office and so on. So managing applications, I'm using WinZip as the example here.

I'm delivering real policy settings like screensaver settings and locking them down. I'm doing "
Endpoint Policy Manager Browser Router" so I can manage browsers and ensure that the right browser
opens for the right website. I can elevate applications. For instance, if I have an old and crusty
application that requires that we bypass the UAC prompt, I can do that.

We can also deliver real "Microsoft Group Policy Preferences" items like shortcuts, and we can also
do pretty much every Windows security setting. For instance, in this case I'm going to rename the
"guest account."

Now, I've taken these XML files that we've created using the Group Policy editors here, and I've
exported them as XML files and wrapped them up into an MSI file. That's already done for us. All
I've done then is I've uploaded the client side extension, I've uploaded our license file and I've
uploaded the MSI that does all the jobs that I want to do. It couldn't be any easier.

In this case, I said deploy everywhere to every machine that I possibly can, which of course will
only be Windows 10 machines. If I go over to my Windows 10 machine here, it's time to join our MDM
service. In this case, it's going to be AirWatch. And let's see the magic happen.

Actually, before we see the magic happen, let's do a quick before and after. First things first,
again, our first goal is to deploy real Group Policy settings and Endpoint Policy Manager's magic.
So one of the things that you might want to do is, I don't know, set the screensaver such that if
the laptop ever gets stolen, that it's well protected.

What we'll do is we'll go to the "Settings" here and we'll look at the before and after of what will
be here for the screensaver. Click on screensaver settings here, and you can see this device
currently has no screensaver set. That's not good because if this were a laptop and it got stolen,
that would be pretty bad news.

The other thing that I might want to do is set the Group Policy Preferences shortcut here for our
corporate company or whatever. That's a Group Policy Preferences item that I'll be delivering. From
a Group Policy security perspective, let me take a look and run "gpedit.msc" here. "Security
Settings," take a look at "Local Policies/Security Options."

Right now, you can see the "guest account" is currently not renamed to anything in particular. What
I'm going to be doing is showing you an example of how you can us Endpoint Policy Manager to deliver
any Group Policy security setting. I'm going to be just simply renaming the guest account, just
something very simple here.

So we'll come back to that. We'll also take a look at things like "WinZip." Here's a quick before
picture of WinZip. If we take a look at "Settings/Options" here and we take a look at "Passwords,"
none of the configuration is set or delivered. Endpoint Policy Manager is going to deliver a bunch
of configuration stuff and lock it down so users can't be naughty and work around it.

Let's go ahead and close all this out. Now it's time to do an MDM join, and then we'll wait a little
bit and we'll take a look at the after picture. To get started here, we'll put in
"mdmuser1@policypak.com." It needs to know the special "Server URL" here. This is exactly the
process your end users would do in order to join AirWatch or any MDM service here. "Group ID" they
would have gotten in an email. I just copied it here to make it easy on myself.

Here we go. This is performing the actual MDM join into your AirWatch service. But you know what?
The magic actually doesn't happen right away. In fact, it tells you that. It says it's "Almost
finished." You could wait a little while or if you don't want to wait, you can go to the set the MDM
section and click on "Sync."

I'll show you actually how to do that here. What you can do is just click on the Start here. You can
type "settings" for the "Settings" manager and then "mdm." Then find the connection that you've made
here. Click on "Info" and then click "Sync."

At this point, I'm going to pause the video. We're going to wait a little while and when we come
back, we're going to see a couple things. So I walked away, I came back again, I got a cup of
coffee, and here we are basically and look at that. It's all done.

Here's the after picture. As you can see, here's the Group Policy Preferences item here. Let's take
a look at the Group Policy item, which is the screensaver. Let's click back here, and then we can
type "screen." There we go, "Lock screen settings" and take a look at "Screen saver settings" here.
These are real Group Policy settings that we really used from real Group Policy and really exported
and really uploaded it and it really downloaded through AirWatch service.

If we take a look at the other policy setting which will be a security setting, if we look at
"gpedit.msc" here, if we were to take a look again at computer side, "Window Settings/Security
Settings/Local Policies/Security Options" here, it's a little hard to see with this small screen,
but you can see here this icon is different. It has been delivered using Group Policy through
Endpoint Policy Manager through AirWatch, and at this point now it has been renamed as "Endpoint
Policy Manager Guest."

Again, almost every security setting that can be touched using Group Policy can be delivered through
AirWatch because of Endpoint Policy Manager now.

So that was all the policy stuff. If we take a look at other Endpoint Policy Manager superpower
settings, for instance, if we take a look at "WinZip" and we take a look at "Settings/Options" here,
you can see that Endpoint Policy Manager has delivered these settings. And not only can we rip the
knobs off of most applications' UI, we can actually keep things configured and guaranteed if we
can't manipulate the UI. In this case I'm just showing you an example.

This is all Endpoint Policy Manager settings delivered through AirWatch because of the MDM join.

So let's recap. We were able to get real Group Policy settings, real Group Policy Preferences
settings and real Group Policy security settings delivered through AirWatch because of the magic of
Endpoint Policy Manager. We were also able to deliver the other magical Endpoint Policy Manager
settings for applications, not to mention other things that we don't have time to show right here.
But we have plenty of demonstrations on the website of Endpoint Policy Manager's extra magic and
superpowers.

Remember, it's really easy to get started. You just simply have to upload the three pieces in order
to get to your endpoints. You have to get the "Endpoint Policy Manager Client-Side Extension." You
have to light it up with one of our license files. And then you need to get your settings, the Group
Policy or Endpoint Policy Manager settings, uploaded as an MSI into AirWatch.

Again, we provide all this for you, and we have other videos on how to do that, but that's it for
now. If you're looking to get started with Endpoint Policy Manager plus AirWatch equals awesomeness,
give us a buzz. We'll let you get started, you can bang on it and you can try it out for yourself.

Thanks so much, and we'll talk to you soon.


