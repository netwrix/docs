---
title: "Endpoint Policy Manager Cloud: Deploy Group Policy Admin template settings over the internet"
description: "Endpoint Policy Manager Cloud: Deploy Group Policy Admin template settings over the internet"
sidebar_position: 20
---
# Endpoint Policy Manager Cloud: Deploy Group Policy Admin template settings over the internet

Want to perform real Group Policy settings over the Internet? Check out Netwrix Endpoint Policy
Manager (formerly PolicyPak) cloud (and watch this video.)

<iframe width="560" height="315" src="https://www.youtube.com/embed/mXvgyaRcaY4" title="Endpoint Policy Manager Cloud: Deploy Group Policy Admin template settings over the internet" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Whitney with Endpoint Policy Manager software Are you working with a situation where
you've got roaming computers, people working from home, domain-joined or even nondomain-joined
machines and now you're pulling out your hair trying to figure out how to get real group policy to
those machines right now? Just use Endpoint Policy Manager Cloud with Admin Templates Manager for
any ADMX setting in the box from Microsoft or your own.

Now, here are my two nondomain-joined machines. One is a laptop and one is a desktop. This will be
important later on. Let's get the right ADMX setting to the right machine at the right time. On the
laptop in our Windows Settings, we want to show only Bluetooth settings and the phone settings. On
the desktop, we're going to only show apps and features and the date and time settings. This is just
a simple example to show you how we can target specific settings to any machine type.

Now, over here on my management station, I am already logged into my cloud account and both of my
machines are in this All group. Now I'm going to make one directive, but I'm going to have it do
different things, one for the laptop and one for the desktop. I'm going to select Create and Link a
New Policy. Now I'm going to select Admin Templates Manager and Okay. Let's give this a name, Laptop
and Desktop Settings.

Alright, now let's create a collection. A collection is just a folder that can hold policies and
where I'm going to place the item level targeting. Let's call this  collection Laptops, there we go
right there, and click on Item Level Targeting. Here I have a lot of options but in this demo, I am
going to target just based on computer name. Here, we're going to say that when the word _laptop_
appears anywhere in the compute name, deliver the settings inside this collection or folder. Okay,
okay.

Now that we've created this collection, let's handle the Settings Page Visibility policy. We'll make
sure to select the collection where the policy's going to live and then we're going to click on this
+Policy button. Thankfully, the policy we're looking for is easy to find. It's just right here under
Control Panel. There we go, Settings Page Visibility. Since it is a policy that can go on either the
computer side or the user side, we have to make a choice here. I'm going to chose Computer side or
Machine side, and then enable the policy.

Now remember, for my laptops I want them to only have access to the Bluetooth settings and the phone
settings. There are a couple of different ways you can do this. You can either choose to hide
certain items or show only certain items. Since the list of what I want to see is short, let's show
only. Now, I'm going to go ahead and paste in some syntax right here so that I do not have to type
it all out. Remember, we're doing just Bluetooth and mobile devices, and we will Save.

Now, let's create another collection. This one is going to be for my desktops, so we'll call it
Desktops, and when we add our item level targeting, we will again choose Computer Name and this
time, we'll say if the word _desktop_ appears anywhere in the computer name, then deliver these
settings. Okay and okay.

Now we'll select a policy again. We'll go to Settings Page Visibility, Select, choose Machine side
again, enable, and once again I'm going to paste in the syntax here. We are just showing apps and
features and date and time. Okay.

Now, let's head over to my machines and see what we have done. On each machine, I'm going to run
ppcloud/sync so that it'll be immediately synced with the cloud service. Here we go. Now we can see
on both machines that we did receive laptop and desk top settings, and there we go on both machines.
We did receive that directive.

Now we're going to log off and log back on on both machines here. Alright, so here we are back at
the laptop. Let's check out our settings here. There we go, boom, just seeing our Bluetooth settings
and phone settings just like we anticipated. When we come over to our desktop machine, we'll come
back over here, check out Settings, and boom, we only see the apps and features and our date and
time.

Quickly before we finish, a little side note. Let me show you how to get previously created ADMX
settings from Endpoint Policy Manager's Admin Templates Manager policies onto your cloud machine. On
my management station, I've already got a GPO that's set to remove the clock from the system
notification area. I'm going to go to this policy, right-click, View as XML, and copy this
information. Now I'm going to go back to my cloud service and create a new policy. I'm going to
copy-and-paste the XML into the editor here, and I'm going to change the description to read Hill
Clock and Save. Now this is set to affect all machines.

Now before I log off and log back on, notice the clock is here. Now I'm going to log off, log back
on, and we will see it take effect. Boom, we got the policy and you can see in the tray here that
suddenly, there's no clock just like we specified. Endpoint Policy Manager Cloud also lets you
upload and use your own third-party ADMX settings like Chrome, Firefox, Office, and more. We have
other videos on the website for that.

There you have it. we got real ADMX group policy over to your cloud-joined machines. We used item
level targeting to deliver the right settings to the right machines at the right time If that's of
interest to you, please get signed up for our webinar and we'll hand over the software and get you
started on your free 30-day trial right away. Thanks so much.


