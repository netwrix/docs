---
title: "Endpoint Policy Export Manager with MDM (like Intune)"
description: "Endpoint Policy Export Manager with MDM (like Intune)"
sidebar_position: 30
---
# Endpoint Policy Export Manager with MDM (like Intune)

After you use Netwrix Endpoint Policy Manager (formerly PolicyPak) Export Manager to export your
GPOs, you need to get them to be deployed with your MDM service like Intune or Workspace ONE. Here's
how to do that.

<iframe width="560" height="315" src="https://www.youtube.com/embed/pyVAtIGv10Y" title="Endpoint Policy Export Manager with MDM (like Intune)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

In a previous video, we took our existing Microsoft Group Policy settings and exported them,
security settings, admin templates, and Group Policy preferences items, and we've got them as XMLs.
In this video I'm going to show you how to wrap them up and get them deployed using our MDM service
like Microsoft Intune or VMware Workspace ONE or anything else you might have. What we're going to
do is we're going to run our utility called the Endpoint Policy Manager Exporter utility. What this
does is it enables you to create an MSI from those existing files that we've created in our first
video.

If I go to my desktop here and go to EXPORT1, I'm going to consume all those items. We can do this
for all of Microsoft settings and all of Endpoint Policy Manager settings as well. I'm going to make
it so that this runs for every user on the computer, so those security settings, admin templates,
and shortcuts. I'll go ahead and click Next.

We'll go ahead and give it a name here. I'll go ahead and call this PPEXPORT-MDM1. That's it. We've
taken our existing group policy settings, made them into XML, and now we've wrapped them up into MSI
for use in Intune or your own MDM service. What you need to do is you need to get the license files
deployed. You need to get the Client-Side Extension deployed. Last but not least, you're going to
add in the app that we just created together.

This is considered a line of business app. We'll go ahead and click Next. We'll select our file that
we just created ten seconds ago together here. We'll go to EXPORT1, pick it out here. Go ahead and
click OK.

It's on the device side. We don't care about any of this stuff. What I'm going to do next is make my
assignment. I guess publisher would be Endpoint Policy Manager. Go ahead and click Next.

My assignment, I'm going to make this available for all devices, add all devices. Of course, in real
life you would target it to a particular group of devices, whatever you wanted. In this particular
case I just want this to hit every device right now. We're off to the races.

The very next thing you need to do is go to your MDM service. Go to your client machine and tell it
to synchronize with your MDM service. I'm going to go ahead and do that now. I'll wait for a second
or two for this to catch up. MDM being what it is, sometimes is takes a couple of minutes. When it's
finished, we should see the group policy preferences items here and the remaining items from group
policy translated.

We'll give this a second to catch up. There is our group policy preferences item. Let's go ahead and
take a look at control panel and see if we got our reduced control panel. If we were to go to take a
look at the items, sure enough we got a reduced control panel.

Lastly, if we were to run gpedit.msc here, we went to Windows, security settings here, local
policies, security options, and we've renamed the guest account. If you have any group policy
settings whatsoever, admin templates, group policy preferences, or security settings, all you've got
to do is export them using the Endpoint Policy Manager Exporter that I showed you in the first
video, wrap those guys up into a little MSI file, and then use your MDM service like Intune, like
VMware Workspace ONE and get it deployed to your endpoints. It couldn't be any easier to take your
existing group policy settings and export them for use with your MDM service. Thanks very much and
talk to you soon.


