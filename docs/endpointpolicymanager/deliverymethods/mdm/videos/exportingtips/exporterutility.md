---
title: "Deploying Endpoint Policy Manager directives without Group Policy (Endpoint Policy Manager Exporter Utility)"
description: "Deploying Endpoint Policy Manager directives without Group Policy (Endpoint Policy Manager Exporter Utility)"
sidebar_position: 30
---

# Deploying Endpoint Policy Manager directives without Group Policy (Endpoint Policy Manager Exporter Utility)

You might want to avoid using Group Policy to deliver Netwrix Endpoint Policy Manager (formerly
PolicyPak) directives if you are using Intune, SCCM, LanDesk, KACE or similar software for software
deployment, and your team doesn't want to use Group Policy but wants to use Endpoint Policy Manager.
See this video to see how it's done.

<iframe width="560" height="315" src="https://www.youtube.com/embed/1yXhbpAz8uI" title="PolicyPak: Deploying Endpoint Policy Manager directives without Group Policy (Endpoint Policy Manager Exporter Utility)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak: Deploying PolicyPak directives without Group Policy(PolicyPak Exporter Utility)

Hi, there. This is Whitney from Endpoint Policy Manager tech support. In this video, I'm going to
show you how to create real Group Policy and Endpoint Policy Manager directives and export them for
use with out not Group Policy method, like your on-prem SCCM or if you're using your own MDM
service.

By now, you've probably seen a lot of great videos showing you a bunch of awesome things that
Endpoint Policy Manager can do: delivering settings using Group Policy, giving single applications
elevated rights for standard users, you can
[https://www.policypak.com/pp-blog/windows-10-block-websites](https://www.policypak.com/pp-blog/windows-10-block-websites)
– all kinds of great things.

But what if you aren't using Group Policy? What if you're using SCCM or KACE or LANDESK or you have
some other reason for wanting to get Endpoint Policy Manager directives and settings on your
workstations but you don't want to use Group Policy to do it? Lucky for us, Endpoint Policy Manager
works with whatever you're running, and I'm going to show you how. You can also find this
information in the Advanced Concepts manual, specifically in the section called Deploying Endpoint
Policy Manager On-Prem Suite Directives Without Group Policy.

We will be working with the GPMC to create GPOs with the settings that you want, but then we're
going to export those settings, wrap them up in an MSI file, and then you can deploy them using
whatever method you prefer. No Group Policy necessary.

Each component of Endpoint Policy Manager Suite – the Application Settings Manager, the Admin
Templates Manager, Browser Router and so on – has a slightly different way to export their settings.
So let's walk through that quickly. For the sake of this video, I've created a GPO with a few
settings in each component, so let's go look at how to export the settings on each component.

For the "Application Settings Manager," which allows you to manage your users' applications, I've
created a directive here for "WinZip" 14 just as a very simple example. I am going to dictate that
the "Minimum password length" is "11" "characters." All of these complexity boxes are checked. We've
right clicked here. We want to "Hide corresponding control in target application" from our users so
they won't even be able to see it. From the "Cameras" tab, right click. We've selected "Disable
whole tab in target application." So we've created that directive and we're done.

Now we need to export that as XML, so we can right click here and can "Export settings to XMLData
File." I've created a folder here for my "XML Files." We'll call that "WinZip Settings." Now it's
done.Let's quickly run through the rest of the components and how to export their settings.

For the "Administrative Templates Manager," which allows you to consolidate existing Group Policy
settings and deploy user side Group Policy settings to computers, I've created a collection of
directives. Here I can either right click on a single directive and "Export as XML" or I can right
click here and I can "Export Collection as XML" or I can right click here and choose "Export
Collections as XML." There are options.Let's right click here, let's "Export Collection as XML" and
call it "Screensavers" and we're done.

For the "Preferences Manager," this node is actually specifically designed to allow you to deploy
Group Policy Preferences using not Group Policy, whether that's SCCM or KACE or what have you.
You'll need to create your settings in your Group Policy "Preferences" here like I have done. I've
created a "Shortcut" that's going to show up on my desktop.

Now I go down to the "Preferences Manager" and I have two options. I can either right click here and
"Export this GPO's User-Side GPPrefs settings for Endpoint Policy Manager Exporter and Endpoint
Policy Manager Cloud" or I can "SHOW WIZARD." Either one takes you to the same thing.

We'll click "Next." This is the directive, so we'll go ahead and click "Next" here. Here we can
change the name if we like. I'm happy with this one. You also have the option to do item-level
targeting here as well to allow you to choose where it applies or does not apply. We'll click "Next"
and choose where we want to have it. Click "Next" and that's it. We're done.

Now for the "Security Settings Manager," this allows you to do essentially the same thing as with
the Preferences Manager only with security settings instead. You'll need to go down to
"Policies/Windows Settings/Security Settings," and I've created "Software Restriction Policies" with
"Trusted Publishers" here.

Now that I've done that, we will go to "Security Settings Manager" and again right click and "Export
this GPO's User-Side Security Settings for Endpoint Policy Manager Exporter and Endpoint Policy
Manager Cloud" or "SHOW WIZARD." Now please note right here that the following policy types are not
supported. Now let's click "Next." We see that my settings are in fact "Exportable," so let's click
"Next" again.

Here we have the option to do item-level targeting again. I'm not going to do that today, so we'll
go ahead and click "Next" once again. As before, we'll choose where we want to put this: "Security
Settings," "Save." "Do you want to create it?" "Yes." "Next" and we're done.

Moving right along, for "Browser Router," which allows us to route the right website to the right
browser and block the naughty websites, I've already created a couple of collections here that route
certain websites to certain browsers and blocks other websites. I can either right click on the
collection itself as before and "Export Collection as XML," I can "EXPORT COLLECTION" here, I can
right click and "Export Collections as XML." Since I have two, I'll go ahead and do that. We'll
"Save" and we're done.

With
"[https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html](https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html),"
which allows you to kill local admin rights and elevate only the applications you need, you'll
create your directives like I've done here. Again, we can right click and "Export as XML," we can
"EXPORT COLLECTION," or we can right click and "Export Collections as XML." If we do this, this will
export all of our directives here. We'll call this "LPM" and we're done one more time.

The "Java Rules Manager," which allows you to configure websites to use the version of Java that you
choose or block Java websites altogether, works just like the rest of them but it only works on a
per computer basis so you need to do this on the computer side. I have my directive created here.
Just as before, right click and "Export as XML," we can also "EXPORT COLLECTION," or we can right
click and "Export Collections as XML." Let's do this, "JRM" and we're done.

"File Associations Manager," like the "Java Rules Manager," only works on a per computer basis as
well, so you'll need to create your directives on the computer side here too. "File Associations
Manager" allows you to configure which program runs which particular types of files or protocols.
You'll create your directives or collections, then export them the same way as you did with "Java
Rules Manager." Let's go ahead and "Export as XML." "FAM," "Save" it and we're done.

Now that we've exported these XML files, what are we're going to do with them? Well, since we want
to deploy our directives using the not Group Policy method, we need to use the Endpoint Policy
Manager Exporter Utility. This will wrap up your XML files into a neat little MSI package that can
then be deployed using whatever software you're the most comfortable with, again, whether that be
KACE, SCCM, Intune, MobileIron or whatever you have.

We're going to open up "Endpoint Policy Manager Exporter Tool" found in the Endpoint Policy Manager
node within the Start menu. Then we're going to choose to "Create a new MSI installer." We'll click
"Next." Here we have a couple of different options, but the one we're going to choose is "Add
Existing Files," which will be those "XML Files" that we created a little earlier.

I'm going to choose "WinZip Settings" by way of example, but you can add multiple XML files here.
You don't have to do just one. Here you can also install for "Users & Groups." Because I created my
directive on the user side, it automatically wants to go to "Users & Groups," but I'm going to
switch it over to "Computer" here.

If you didn't specify item-level targeting when you created the directive in the first place, you
can double click on the file here, go to "Options/Enable item-level targeting" and then go to "Edit
item-level targeting filters." Here you'll have to choose from a number of filters designating who
the directive does and does not apply to. When you do that, you'll see that the word under "ILT"
here will change from "No" to "Yes" but since I didn't do that, it stays at "No."

We'll click "Next" again. Here we can give it a "ProductName." I'm going to call it "WinZip
Settings," and we'll click "Next." Next it will ask where we want to "Save" it. I'm going to save it
on my "SHARE" folder here. I'll call it "WinZip Settings" and "Save," and we're done. That was it.

We've wrapped this up into a really neat little MSI that you can deploy however you would like to,
whatever method is most preferential for you. In this particular video, I'm going to install it by
hand but like I said, anyway you want is the best way.

Next we're going to go to my workstation here, and I'm going to show you what "WinZip" looks like
before we deploy the MSI file and what it looks like afterwards.Let's go to "Passwords," "8"
"characters," none of these are checked, and we can get to the "Cameras" tab.

Let's close this out. Let's go to our "share" folder here. We'll open this up, give it some
credentials. That was it. It happened that fast. Let's close this out, let's open up "WinZip" and
see what we're looking at now. There we are. "Minimum password length" is now "11." These are all
checked, and this one you can't even see. You'll see this "Cameras" tab is grayed out. We can't even
access it anymore. It's just that easy.

One last thing before we finish up here. I want to show you how the Exporter Tool can also edit an
MSI that you've already created. Maybe you had an MSI with a gaggle of settings and now you've got a
new program that you want to manage or your standards changed so you need to update that MSI.

We'll just open up that " Endpoint Policy Manager Exporter Tool" again. We'll choose "Open an
existing MSI installer previously generated by this tool for editing." I'm going to choose the one I
had already. Here you can do as you could before. You can edit your item-level targeting, you can
import new XML files. You can also, if you choose of course with your new ones, to install for
"Computer" or Users & Groups and so on. We'll click "Next" again.

Endpoint Policy Manager automatically versions this for you. Also, let's note that the MSIs deployed
as an upgrade will automatically uninstall old file versions," which is pretty handy. We'll click
"Next" again, decide where we want to "Save" it, and we're finished once again.

If you're looking to get started with Endpoint Policy Manager, the best first step is to sign up for
webinar to learn all of the things Endpoint Policy Manager can do. Then we'll hand over the bits,
and you'll be off to the races for your very own trial of Endpoint Policy Manager.

Thanks, and we'll see you in the next video.


