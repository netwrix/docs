---
title: "Mass Deploy the Endpoint Policy Manager CSE using GPSI"
description: "Mass Deploy the Endpoint Policy Manager CSE using GPSI"
sidebar_position: 30
---

# Mass Deploy the Endpoint Policy Manager CSE using GPSI

You have tested out Netwrix Endpoint Policy Manager (formerly PolicyPak) on one machine, and it is
working great. Now you are ready to roll the client side extension (CSE) out to a numberof machines
at once. Watch this video to see how easy this to implement.

<iframe width="560" height="315" src="https://www.youtube.com/embed/GvgnnIbhXfY?si=9iWhea6MliCI-63j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak: Mass Deploy the PolicyPak CSE using GPSI Transcript

Hi, everyone. This is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software.
In this video, I'm going to show you how quick and easy it is to mass deploy the PolicyPak client
side extension to all of your target Windows machines.

To set the stage here, the CSE or client side extension is the moving part that must exist on all
machines that you want PolicyPak to work upon. We extend Group Policy and we extend SCCM and if our
moving part isn't there, we can't work.

We're not an agent. I know what an agent is. You know what an agent is. We're not an agent. We're a
CSE or a client side extension because we hook into the Group Policy infrastructure.

Long story short, we've got to get these two CSEs deployed, and we've got a variety of machines
here. I've got "Win7Computer-32." I've got "Win7Computer-64." I've got a "Win8Computer1" that is
64-bit, and I've got an "XPPRO1SP3"which is 32-bit.

What I'm going to do to get us started here is – this is what you get as part of the download here –
and I'm just going to copy the two client side extensions to a folder on my server called
"SOFTWARE." I'll call this "Build511." You can call it whatever you want. This just happens to be
"Build511." I'll go ahead and copy the two client side extensions right there under "SOFTWARE."

The next thing I want to do is decide where I want this deployed. I've got all my computers right
now hanging out under the regular "Computers" folder. You could deploy the client side extension to
your entire domain. That's perfectly fine, but instead I'm going to go ahead and do this to all of
my East Sales Desktops and Laptops.

To simulate what that looks like, I'm going to take each of these computers one-by-one –
"Win7Computer-32" and "Win7Computer-64" and "Win8Computer1" and "XPPRO1SP3." There we go. I'm going
to take all these guys, and I'm going to shove them into my "East Sales Desktops" just like that.
I'm just moving them over to "East Sales Desktops." Let's just make sure that they're all there at
"East Sales Desktops." Yep, there we go – one, two, three four computers right there.

Then what we'll do is for all of "East Sales Desktops" or if you want all of "East Sales,"which if
you want to affect "East Sales Laptops" and possibly "East Sales Servers," it might be terminal
servers, whatever you want, you can go ahead. I'll do this right over say "East Sales Desktops."
That's fine. I'll "Create a GPO in this domain, and Link it here…" and I'll call this "Deploy
PolicyPak CSE."

Once that's linked over to our East Sales Desktops, let's go ahead and click "Edit…" here and under
computer side "Policies" under "Software Settings," this I'm just going to be using good
old-fashioned GPSI, Group Policy"Software installation," that's built into the box for Windows to
deploy our client side extension.

You'll simply go to "New/Package…" and the trick here is to use a UNC pass. I'm going to use "dc"
under "SOFTWARE," and there's "Build511." I'll go ahead and pick this guy, "PolicyPak CSE Setupx32,"
and I'm going to go to "Advanced."

This takes a second to come on up. It may take up to a minute or so on some slower networks. Once
that pops up, let's go ahead and click over to "Deployment" here. The only thing you need to do is
click on "Advanced…" and we don't want to "Make this 32-bit X86 application available to Win64
machines."

It wouldn't matter anyway. We've got it coded inside the MSI so that it can't by accident be
installed, but just for good measure we're going to uncheck this checkbox for the 32-bit version.
We'll go ahead and click "OK," and now that's assigned.

We'll do "New/Package…" here and in the same Group Policy Object also pick the ""PolicyPak CSE Setup
x64" one. We'll go ahead and click "Advanced" again, and again this takes a minute or two to come
up. Now that that's there, we can actually give it a different name. We could call this, if we want,
"PolicyPak Client Side Extension – 64bit." It doesn't really matter. It just helps us see the
differences there.Under "Deployment/Advanced…" we'll see there is no 32-bit or 64-bit switch, so
this guy will only be deployed to 64-bit. That's it. We'll click "OK."

Let's get it straight. Let's make sure we've got it all set up correctly. We can see that we're
deploying the 32-bit version and we said not to apply to 64-bit machines. It wouldn't anyway. Then
we've got the 64-bit version which will only apply to 64-bit machines.

We've already moved the computer accounts into the right place, which is our "East Sales Desktops."
We do that in "Active Directory Users and Computers." They're all sitting right there. There's
really only one thing left to do which is reboot each of these machines. Let's go ahead and do that.

I'll go ahead and hit "Restart" here. I'll do one-by-one and show you what it looks like. I'll go
ahead and just wait a second. Windows is starting up. Here we go,"Applying computer settings…." You
see that it says, "Installing managed software PolicyPak Client Side Extension…" and then
immediately reboots the machine. That's exactlywhat we want. When PolicyPak installs, it does
require a reboot and does so instantly. When this thing comes back, we'll be all ready to rock.

Here we are starting the second time after the automatic reboot, and we're done. If we were to log
on here on this machine here, let's go over to "Control Panel," go over to "Programs" and take a
look at the "PolicyPak Client Side Extension" here. We can see that the version is "511," just like
what we deployed.

That's the basics. I am going to go through the motion and just show you that it does, in fact, work
for each machine type if you want to stick through the rest of the video and see that. Next one on
the docket is 64bit. Then I'll move on to Windows 8 and, finally, Windows XP.

Here we go with a reboot here, "Applying computer settings…." Now if you don't see that it says,
"Installing managed software PolicyPak Client Side Extension…" but it still reboots, that means it
is happening. I have a little switch set in Windows to give me this more interesting information.

There we go. It took about a second to install. We're stopping and shutting down. I'll go ahead and
move on to Windows 8 and show you this one as well here. I'll go ahead and "Restart," starting up
Windows 8 here. There we go, "Installing managed software PolicyPak Client Side Extension – 64bit…"
and it shuts down and restarts.

Let's go over to our XP machine, and let's see what happens if we do this guy. We'll "Shut Down…"
and "Restart" here. XP is launching. There we go, "Installing managed software PolicyPak Client Side
Extension…," and it should instantly reboot after that. Here we go. It's shutting down, restarting
and coming back up.

There we go. Let's just verify the rest of the operating systems. I verified it on one that it was
there, but I'm going to verify it on all of them just to prove that it actually did, in fact,
install. I'll just do them in the same order I did it in.

I'll go to the 64bit machine, and I'll go to "Control Panel" here. We'll verify that the "PolicyPak
Client Side Extension" is build "511."

I'll go to the Windows 8 machine here and, of course, "Control Panel" is a little harder to get to
on this machine. I'll go to "Uninstall a program" here and show you that the "PolicyPak Client Side
Extension" is there, "511."

On our XP machine, we'll go to "Add or Remove Programs," and there is the "PolicyPak Client Side
Extension." If we "Click here for support information," it's build "511."

There you go. You can see it's super easy to get PolicyPak deployed on your target computers. I
happen to be using Group Policy to do this, but you can use if you have your own systems management
software to deploy any MSI you want and it works just like this. That's it.

I hope this was helpful. Have fun installing PolicyPak and getting more secure. Thanks so much.


