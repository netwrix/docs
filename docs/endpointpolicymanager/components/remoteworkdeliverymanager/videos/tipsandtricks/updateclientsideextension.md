---
title: "Using Remote Work Delivery Manager to Update the Endpoint Policy Manager Client Side Extension"
description: "Using Remote Work Delivery Manager to Update the Endpoint Policy Manager Client Side Extension"
sidebar_position: 30
---
# Using Remote Work Delivery Manager to Update the Endpoint Policy Manager Client Side Extension

Want to keep everyone running the same version of the Client Side Extension and then update them all
automatically when you're ready to? Here's how to do that using Remote Work Delivery Manager.

<iframe width="560" height="315" src="https://www.youtube.com/embed/M3Tm1mbK6wg" title="Using Remote Work Delivery Manager to Update the Endpoint Policy Manager Client Side Extension" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is John with Netwrix Endpoint Policy Manager (formerly PolicyPak) Software. Today, we're
going to walk through updating your Endpoint Policy Manager client-side extension using Remote Work
Delivery Manager on a local domain. Now, there are a few prerequisites in order to do this. The
first is obviously you have to have the client-side extension already installed, and it needs to be
at version 2536 or higher. 2536 is when we started using Remote Work Delivery Manager. As well, of
course, the admin console on the service side needs to be at at least that level as well in order to
create a Remote Work Delivery Manager policy.

The second prerequisite is that Remote Work Delivery Manager must be licensed or in trial mode on
the client-side extension. This machine is currently licensed, but to put it in trial mode, all I
have to do is rename it to something with computer with the name. The third and final prerequisite
is that the installation files for the client-side extension need to be on an accessible share to
the endpoint. It needs to be able to get to that file to bring it down in order to install it. Once
all those things are in place, we're ready to go.

First, let's take a look at our client side. I've got a command prompt here. I'm going to type in
ppupdate. We can see that there's stuff going on in the background. We can see that we're at version
20.8.2536, so that's the current version, so that's the minimum we have to be in order to upgrade.
Now let's go over to the server side, and let's create the policy. In my Cloud OU, let's create the
policy Update CSE, and let's Edit this. We're going to do this on the computer side. Let me see what
I'm doing here. We're going to expand Apps and Patch Management and Remote Work Delivery Manager.
We're going to click on that and Add a New Collection, keep it Collection 1, come in here, and we're
going to Add a New Standard Policy. We're just going to copy a single file. We're going to apply to
this computer as the user, so we're going to run it in user mode. This is a loopback with a
loopback.

Here we need to find the file that we're going to send over to the endpoint to update the file. Then
come back over here. Dccore is where it resides. Location CSE, and it is the Endpoint Policy Manager
64 bit. This is the 2592 version that it's going to be upgraded to. When the next version comes out,
I need to make sure that it's named exactly the same thing, place it in exactly the same spot here,
and then the next time gpupdate runs on the endpoint, it's going to update to that version. Anytime
a new version comes out and you want to update all your endpoints, this is where it's done. Simply
rename it to exactly the same thing, place it here, and the update's going to be done automatically
for you.

Click on Open. We've got our path. OK, done. This is the directory on the client side where this is
going to be installed, so – although, generally, it's going to be on the C drive, it could be
anywhere. Put it on the system drive just in case it's not the C, temp\CSE, so it's going to go on
my system drive, C temp, client side extension. That's my file name. It's not going to change. I
want to Access both the source and the destination as the User, not as the computer, not as the
system. I want to do it as the computer. We can see what our source and destination paths are going
to end up being. Everything looks good. Click on Next. We're going to Always apply. It's not Once or
Once when forced. Even though it's not always going to be downloaded, it's going to check to see if
there's any changes to the file. Only if there are changes to that file will it download and
continue on with the installation, not every time, so you don't have to worry about that. We'll keep
it as Always.

Now when it installs, we want to run a process. We need to run our installation script at this
point. I'm going to grab the text copy of the installation script that I have down here because I'm
a horrible typer, place that in there, so it's going to run msiexec.exe because it's MSI that we're
doing it. We're going to do it quietly in the background, /i for installation. Destination is the
combination of the destination path and file name, so that's all we have to put. Click on Next.
Revert actions we're not going to do anything. We could if this was a normal application put in the
uninstall script under the Run process, but in this case, we don't want to do that. Click on Next.

Rename it as something that makes sense, Update CSE. Now we're going to add some item-level
targeting. This is optional, but if you're doing both Win32 and Win64 versions of this software, you
want to make sure that the right endpoint is getting the right version of the software, so we're
going to tell it in this case that our endpoint needs to be a 64-bit machine in order to get this.
Otherwise, it's going to fail. It's not going to get it. To do that, we're going to set an
Environment Variable, and that variable is Processor_Architecture, and the value is going to be
AMD64. That's not just AMD chips, but any 64-bit chip is going to have this value. If it was a
32-bit machine, we'd be putting x86 under the value section here. Click on OK. Now that's done.
Finish, that's it. We're done.

Let's go back over to the endpoint, and let's just run gpupdate. If you remember over here when we
looked, we were running 2536. This is going to automatically run in the background. It's going to
take a minute for the gpupdate to run, to finish what it needs to do. It's downloading the file now.
It's a 68-meg file, so it takes a little bit of time to do. Then in a second, it's going to start
actually installing the file, so you should probably see another command prompt pop up here.
Alright, and it's done already. Now we can see that it's at 20.10.2592. Where it was at 2536, it's
now at 2592. That's it. Thanks for watching and hope this helps.


