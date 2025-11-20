---
title: "Using Least Privilege Manager with your MDM service"
description: "Using Least Privilege Manager with your MDM service"
sidebar_position: 20
---
# Using Least Privilege Manager with your MDM service

Use your own MDM solution to deploy rules which enable Standard Users to do things that only admins
can!

<iframe width="560" height="315" src="https://www.youtube.com/embed/J6_Bg9ZkqPM" title="Endpoint Privilege Manager + Your MDM Service!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Whitney with Netwrix Software. Have you seen all of the great Least Privilege Manager
features and wondered how that works with our MDM edition? We've got you covered. You can create
policies, wrap them up as an MSI, and use your own MDM service to deliver all of the same great
setting you've seen in other videos.

For this video, let's take a look at the idea of elevating a regular business application that would
normally throw a UAC prompt. Before we get to that though, let's take a look at this endpoint. Just
so you know that we've got nothing up our sleeves, this machine is expressly not domain joined. We
are not domain joined, so you know we're not doing anything sneaky.

For our application that throws a UAC prompt, we're going to use Macrium Reflect as an example here.
When I try to open it as a standard user, I get a UAC prompt. Do you want to overcome that? Let's go
over to our management station and fix this problem using your GPMC and our file exporter tool.

Now that we're over here on my management station, here's what we're going to do. We're going to
create a GPO and use Least Privilege Manager to create a policy that elevates Reflect. Then we're
going to export that setting, wrap it up as an MSI, and deliver it to my endpoint using an MDM
service.

I've already got my GPMC open, and I'm going to create a GPO called MDM Settings. I don't have to
create this against any particular OU since we're not going to use Group Policy to deliver the
settings. Let's go ahead and open this up and go over to the computer side to create our policy.

We're going to create a new Exe policy. For this video, we are going to use a combo rule just to be
super safe. Now we get to determine what file condition should be met in order to elevate an
application. We're going to choose both Signature and File Info then click Next. Now it's time for
us to select a reference file.

I'm going to select this file and it's going to ask us if we want to use the same file for the file
info condition. We will say Yes, and we will see that it has automatically pulled all of the
necessary information for both the signature condition and the file info condition. We'll click
Next. We do want to Run with Elevated Privileges and Next again and finish up.

Now what do we do? We are going to right-click on this file and we are going to select Export as
XML. I will save this on my Desktop as Elevate Reflect. There we go.

Now what? We'll close out our GPMC. We don't need this anymore. We're going to use our Endpoint
Policy Manager exporter tool. It installs alongside the admin console MSI and can be found under
Endpoint Policy Manager in your start menu. We are going to Create a New MSI Installer and choose
Next.

Now we are going to Add Exist Files and grab that XML we just created. We will see that it is going
to install for the computer since we made this on the computer side. We're going to choose Next.
Let's give the installer a name so it will show up nicely in our Control Panel when we get it
installed. We're going to say that the manufacturer is Endpoint Policy Manager and click Next.

The last thing we need to do is give the MSI a name. We will just call it Exported GPOs. Go ahead
and Save. That file is sitting right here on my Desktop. We will just do a little bit of movie
magic. I'm going to pause my video while I get into my MEM Admin Center and I'll come right back.

Here we are. Notice that we already have the Client-Side Extension installed as well as the license
files. If we take a second and go back to my endpoint, you'll see that those two files are already
installed on here, so we are good to go there. I'll come back over to my MEM and we are going to add
the file that we just created and go from there.

I'm now going to do that movie magic thing again where I pause my video while I get everything
synced up, and then we'll come right back. We are back. Let's check it out. We now have the file on
our endpoint as well as the license file and the CSC.

Now let's check out Reflect. When we started this video, Reflect would throw a UAC prompt. Now by
using Least Privilege Manager with your own MDM service we managed to elevate this application on a
non domain-joined MDM enrolled machine. If this is as awesome to you as it is to me, sign up for our
webinar, and we'll hand over the bits and get you started on a 30-day free trial right away. Thanks
so much.


