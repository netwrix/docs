---
title: "Manage Java with Java Rules Manager and your MDM service"
description: "Manage Java with Java Rules Manager and your MDM service"
sidebar_position: 50
---
# Manage Java with Java Rules Manager and your MDM service

Open the right browser for the website, then dictate what version of Java to run FOR that website. A
combo made in heaven. See how to do it with Netwrix Endpoint Policy Manager (formerly PolicyPak) MDM
and your MDM service.

<iframe width="560" height="315" src="https://www.youtube.com/embed/VWQq_Yt9fLg" title="Manage Java with Java Rules Manager and your MDM service" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Whitney with PolicyPak Software. If you have a situation where you need to run an old
version of Java on some legacy webpage but you want to make sure to use the latest version
everywhere else, what are you going to do? Do you run for compatibility or for security? With
PolicyPak software, you don't have to make that choice anymore. You can do both at the same time.

Currently on my unmanaged machine, when I go to javatester.org to see what version of Java I'm
running, I get an error and when I go to java.com to do the same thing, I'm told I'm running the
latest version or the latest on the machine. We want to change that behavior, so in a previous
video, we looked at how to create the policies we need to route Java 8, Update 25 to
javatetester.org and we routed Java 7, Update 51 to java.com. What do you do if you want to deploy
using your current MDM service like into Workspace ONE or MobileIron? It's simple.

We're here in the GPO Editor right now, and all I need to do is right-click over this policy and
choose Export as XML. I'm going to save on the desktop and since this is for javatester.com, I'm
going to call this one Java Tester and Save. All I need to do is do the same thing with this second
policy here, and this is for java.com, so I'm just going to call that one Java, Save again. Okay,
time to make that MSI that you can deploy using your MDM service.

We have our XML files but what are we going to do with them and how is that going to become an MSI?
We're going to use the PolicyPak Exporter tool. It installs alongside the Admin Console MSI and can
be found under PolicyPak in the Start menu. We're going to open it up. We're going to create a new
MSI installer, and we're going to add existing files. We can go ahead and grab both of these, open
up. We see that it is installed for the computer since we made this on the computer side, and we're
going to click Next. We could change name or manufacturer at this point, but we'll leave it alone
for now and just click Next. Last thing we need to do is give the MSI an actual name, so we'll just
call it Exported GPOs and Save and finish up. We have our MSI right here.

Now here's where we'll do just a little bit of movie magic. I'm going to pause my video while I get
into my MEM admin center and come right back. Here we are. Now notice that we already have the
client side extension deployed as well as the license file. This is what makes PolicyPak do work.
Now let's go ahead and add the MSI we just created. We'll select Add, then choose the MSI we just
created, and select Open and that's that.

Now I'll do that movie magic thing again where I pause my video while I get everything synced and
we'll come right back. We're back. You can see that I do have the package PolicyPak settings now
installed on this machine. I'm going to go to Internet Explorer and when I get to Java Tester, not
only will it not give me an error anymore but it is expressly running 8.25 just like we told it to.
When I come over to java.com to do the same thing, we see that I am running Version 7, Update 51.

There you have it. We were able to route the right version of Java to the right website and deploy
those policies using your own MDM service. If this is of interest to you, sign up for our webinar
and we'll get you started on a free trial right away. Thanks so much.


