---
title: "Endpoint Policy Manager and MobileIron MDM"
description: "Endpoint Policy Manager and MobileIron MDM"
sidebar_position: 40
---
# Endpoint Policy Manager and MobileIron MDM

MobileIron is awesome, but it doesn't have real group policy or extra Windows 10 desktop management
features. Watch this video and learn how to use Netwrix Endpoint Policy Manager (formerly PolicyPak)
to deliver REAL Group Policy settings and Endpoint Policy Manager's extra settings to all your
MobileIron MDM joined Windows 10 machines.

<iframe width="560" height="315" src="https://www.youtube.com/embed/I3LNSCPlvms" title="Endpoint Policy Manager and MobileIron MDM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak and MobileIron MDM

Hi. This is Jeremy Moskowitz, former Group Policy MVP and Founder of Endpoint Policy Manager
Software. In this video, I'm going to show you how you can take your real Group Policy settings or
your Endpoint Policy Manager settings and get them deployed using your MobileIron MDM service.

If you have real Windows Group Policy settings like "Security Settings," "Security Options," "User
Rights Assignment," "Audit Policy," any of these really complex security settings or "Firewall"
settings or most Group Policy "Preferences" items or any of the "Endpoint Policy Manager" settings
not to mention all the 3,000 "Administrative Templates" settings that you might want to manage here,
you can take just about every stinking policy setting that you can possibly imagine, export it as an
XML, and then wrap them up as an MSI that you can then deploy using MobileIron.

Ialready have a bunch of XMLs ready to go here. I have one that will use "Endpoint Policy Manager
Application Settings Manager" and manage the heck out of "winzip." I have one that will configure
our "screensaver-settings." That's using Endpoint Policy Manager Admin Templates Manager which hooks
into "Microsoft Group Policy Admin Templates." I have one that will do what's called our "Endpoint
Policy Manager Browser Router" that will, if you're in the wrong browser, get you to the right
browser.

I have one that will run an application with elevated rights. If you have an application that won't
let you bypass the UAC prompt, we can do that by elevating the rights using "Endpoint Policy Manager
 [https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html](https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html)."
We can also deploy Group Policy Preferences "shortcut" items or just about every other "Microsoft
Group Policy Preferences" item and also "Microsoft Group Policy Security Settings" where you can
rename a "guest-account."

So we're doing a lot, and we've got it all wrapped up into this little MSI file. How do you wrap
them up? We have an included support utility called the "Endpoint Policy Manager Exporter Utility."
You simply create your own GPO from the ground up, export the settings as XML, wrap that thing up
into an MSI and you're ready to go.

What's next? Over in MobileIron land, we actually have to get three things over into MobileIron
land. The three things are the "Endpoint Policy Manager Client-Side Extension." This is the thing
that does actual work. Without this, Endpoint Policy Manager does nothing.

Then the second thing is the Endpoint Policy Manager Licenses. Without this, the Endpoint Policy
Manager Client-Side Extension will do nothing. You're license file may look just like this
("PP-licenses-for-Mobileiron5") or it may have a slightly different name, but basically you can see
these are both MSIs that we give you to upload.

Then lastly, the "Endpoint Policy Manager -XML-Examples," we have XML examples for you to download
right now or if you want to create your own, you're welcome to do that too. Let's take a look at
what you have to do in MobileIron Land in order to get started with this. It's very, very simple.

All you need to do is click on "Apps," click on "Add" here and you're going to add what's called
"In-House" apps. That's kind of hiding down over here. You're going to add these three things in.
The first thing we're going to add in is the "Endpoint Policy Manager Client-Side Extension." We'll
go ahead and click "Open" here. It's not in that catalog already. Here we are. We're uploading the
file, and there we go.

Now once you upload an MSI to MobileIron, from time to time for some reason it won't actually show
you the "MSI product code," which is kind of a pain in the neck. In order to get around that, we
provide a little utility for you. I'll show you how this works. We provide it in "Endpoint Policy
Manager Extras" and it's called the "MIS Product Code Output Tool."

You just simply touch an MSI file, for instance, I'm going to touch the "Endpoint Policy Manager
Client-Side Extension x64." There's the "Product Code." I'll copy it right there, and then I'll go
into MobileIron and I will paste it in right like that. Very simple to do. We provide that for free
for you.

You have to give it a "Category" here. It doesn't matter. You can call this desktop utilities,
whatever you want. I'm just going to call it "Endpoint Policy Manager." We'll go ahead and click
"Next," and "Next" past that. There's nothing you need to do there.We're going to deploy this to
"Everyone." Go ahead and click "Next" here.

Now what you also need to do here is in the "App Configurations" category here, you're going to
click on "Install Application configuration settings" and specify to "Silently install on Windows
devices." Once you've done that, you have locked and loaded the first thing you need to do, which is
the "Endpoint Policy Manager Client-Side Extension."

I'm going to pause the video here and then have done this exact same procedure for the License file
and also the Example file. So hang tight and give me a quick second. Okay, that didn't take me too
long. Now I have all three of these guys locked and loaded in there and ready to go. In this
example, I deployed it to every computer. So therefore, as soon as they join the service, after some
time it should come down, install these guys and we should see the result.

What I'm going to do is go over to my Windows 10 machine here and I'm going to join the MDM service
here. Let's go ahead and say "mdmuser1@policypak.com." Here's the "Letter from MobileIron" I got as
the example user. It told me when prompted, to run this from a browser to then tell me what to put
here in the server. Let me go ahead and do that.

This is "MobileIron" here saying here's your "Server" address. Copy that guy right there and put it
in there. Let's give it the "Password." Okay, registration has begun. It's doing everything we have
to do, and it says it's almost ready to go.

You can sometimes accelerate things if you want to by clicking here and typing "mdm" again and if
you "Connect to work or school" and find where you're connected, click "Info" and click "Sync."
Sometimes this will make it happen a little faster. Sometimes it doesn't do much at all. What I'll
do is I'll stop the camera, and then I'll come back when I see that it's all installed. So I'll
close this out, and I'll see you in a minute.

Okay, at this point, we are now registered with the MDM service. Endpoint Policy Manager has
deployed this nifty Group Policy Preferences item. Let's show some other real Policy settings that
it has deployed also. We're going to take a look at my "Settings" here and then take a look at my
"Lock screen settings." Endpoint Policy Manager has actually deployed real Group Policy settings.
The "Screen saver settings" here are coming down through the Endpoint Policy Manager Examples right
there.

If we also were to take a look at "gpedit.msc" here, we can see that real Group Policy has been
affected on the computer side Windows "Security Settings." If we take a look at "Local
Policies/Security Options," Endpoint Policy Manager has renamed the guest account. You can see here
that it's dictated and can't be changed.

All these settings, all real Group Policy settings, real Group Policy Preferences and all of
Endpoint Policy Manager settings can be wrapped up into an MSI file, uploaded to your MobileIron
service and then downloaded through the MDM channel. And just like that, you're deploying real Group
Policy settings and Endpoint Policy Manager settings through MobileIron.

I hope this helps you out. If you're looking to get started, just give us a buzz and we can give you
the bits and you can bang on it yourself.

Thanks so much, and we'll talk to you soon.


