---
title: "Deliver Group Policy Admin Templates Using Your MDM Service"
description: "Deliver Group Policy Admin Templates Using Your MDM Service"
sidebar_position: 20
---
# Deliver Group Policy Admin Templates Using Your MDM Service

MDM solutions are awesome, but they don't have real group policy, or extra Windows 10 desktop
management features. Watch this video and learn how to use Netwrix Endpoint Policy Manager (formerly
PolicyPak) to deliver REAL Group Policy settings to all your MDM enrolled Windows 10 machines.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZXp4gGKYgO0" title="Deliver Group Policy Admin Templates Using Your MDM Service" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Whitney with Endpoint Policy Manager Software. Imagine this scenario. You're getting
prepared for having remote workers, people working from home, and you invest in an MDM solution,
maybe MobileIron, Intune, or Workspace ONE, for example. You're all set to deploy applications and
manage your remote machines, but what about group policy ADMX settings? MDM solutions aren't
particularly good at allowing you to deliver every ADMX setting you might want to use, so where does
that leave you? Don't worry. We've got you covered with Endpoint Policy Manager's Admin Templates
Manager used in conjunction with your own MDM solution.

In this video, we're going to trim the Settings page visibility. Here on my non-domain joined
endpoint, let's take a look at the Settings page. Right now, I can see everything here from System
to Update & Security and everything in between. Let's trim this down so all this computer can see is
apps and features and the date and time settings, and we're going to deliver this using an MDM
service. Now, over on my management station, I already have a GPO that I've called Trim Settings
Page, so we're going to Edit this and we'll go over to the computer side and select Admin Templates
Manager, and I'm going to Add a New Policy. Thankfully, the policy that we're looking for is
particularly easy to find. It's just right here.

Now, there are a couple of different ways you can do this. You can either choose to hide certain
items or show only certain items. Since the list of what I want them to see is fairly short, we're
going to choose show only. I have the syntax right here. I'm going to copy and paste it in here.
We're going to show only apps and features and the date and time and choose Okay. Now that the
setting is in place, how do we get it to our MDM enrolled machines? It's easy. We're going to start
by right clicking on the Setting and choose Export as XML, and I'm going to save it right to the
desktop as Settings Page. Alright, now it's time to make that MSI that you can deploy using your MDM
service.

We have our XML file exported, but what are we going to do with it, and how are we going to turn it
into an MSI? We're going to use the Endpoint Policy Manager exporter tool. It installs alongside the
Admin Console MSI and can be found under Endpoint Policy Manager on the Start menu. We are going to
open it up, and we are creating a new MSI installer, so we'll choose Next, and now we're going to
Add Existing Files, so we'll grab that XML, and it's going to be installed for the computer since we
created the policy on the computer side, and so I'm going to choose Next. We could change the name
or the manufacturer at this point, but we're just going to leave it alone for now and just click
Next. The last thing we need to do is give the actual MSI a name. We'll just call it Exported GPOs
and Save.

Alright, so we see I have my MSI right here. Now here is where we'll do just a little bit of movie
magic. I'm going to pause my video while I get into my MEM admin center and come right back. Here we
are. Notice that we already have the Client Side Extension deployed as well as the license file.
This is what makes Endpoint Policy Manager MDM Edition do work. Let's go ahead and add the MSI we
just created. We'll select Add, then choose the MSI we just created, then select Open, and that's
that. Now I'm going to do that movie magic thing while I pause my video while I get everything
synced and then come right back.

We are back. Let's check it out. We now have the file on our endpoint, and it's doing its job. Let's
open up the settings page and boom. All we have are the apps and features and date and time right
here, just like we expected. We were able to deliver real group policy settings to your MDM enrolled
machines using the Admin Templates Manager and then deploying with your existing MDM service. If
this is of interest to you, get signed up for our webinar, and we'll get you started on a 30-day
free trial right away. Thanks so much.


