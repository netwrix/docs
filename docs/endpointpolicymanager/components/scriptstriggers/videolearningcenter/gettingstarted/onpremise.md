---
title: "Use with on-prem Group Policy"
description: "Use with on-prem Group Policy"
sidebar_position: 10
---
# Use with on-prem Group Policy

Netwrix Endpoint Policy Manager (formerly PolicyPak) Scripts Manager goes beyond in-box Group Policy
and enables you to deliver settings MORE than once, use any language you want, and eliminate
[https://www.policypak.com/pp-blog/group-policy-loopback](https://www.policypak.com/pp-blog/group-policy-loopback)
so you can apply scripts to all users on the machine.

<iframe width="560" height="315" src="https://www.youtube.com/embed/WVsQurIIJpY?si=vN94cOUbhE3JqYox" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak Scripts-Use with on-prem Group Policy

Hi. This is Jeremy Moskowitz, former Group Policy MVP and Founder of Endpoint Policy Manager
Software. In this video, you can learn all about Endpoint Policy Manager Scripts Manager with using
Group Policy. Now if you have Endpoint Policy Manager Cloud or Endpoint Policy Manager with your MDM
service, there will be other videos for that. This one is just about using Endpoint Policy Manager
Scripts Manager with Group Policy.

As a former Group Policy MVP, I'm a huge fan of the stuff Microsoft provides. There are a billion
things you can do in "Administrative Templates" and "Preferences," but sometimes every once in a
while there's going to be something you can't do with either the Microsoft stuff or with our stuff,
with Endpoint Policy Manager. In those cases, you may need to script it, so that's why we've created
Endpoint Policy Manager Scripts Manager.

Scripts Manager exists on both the computer side and the user side, and I'm going to show you both
in this video. The first one I'm going to show you is on the user side, "Scripts Manager." We're
going to right click, "Add," either a "New Collection" or a "New Policy." I'm going to start off
with just a "New Policy." A "New Collection" just holds multiple policies.

This is why it's so great and it stands head and shoulders above what Microsoft provides. The first
thing is that Microsoft scripts can only work at startup, shutdown, log on and log off. Ours can run
at multiple times. I'm going to show you that right now.

You can also run pretty much any script type that matters, for instance, a "PowerShell" script. I
have one that's going to create a shortcut. I know you can create a shortcut with Group Policy
Preferences, but I'm doing it here just as an example so you can see a script run and see that it's
"PowerShell."

When this GPO applies to the user, it's going to run this PowerShell script. Here's the other best
part. When the GPO no longer applies, you can run this other script. So you get a script when you
get the GPO, and this is a script you get when you don't get the GPO. So the first script creates a
shortcut, and this script will remove a shortcut. So in this way, you can put what happens on the
positive action and what happens on the negative action, "On apply action" and "On revert action."

Then you can dictate when the script is going to kick in. The default is "Always," which is every
time Group Policy processes. So every time you log on and always in the background with background
Group Policy. You can make it run "Once" and never again, or you can make it run "Once or when
forced" and it will only "Run the script when gpupdate/ force or (our command) ppupdate/ force
runs." I'm going to do it "Always."

I'll go ahead and click "Next" and give it a name, like "User side script policy." Then here's the
other best part. This whole thing can be wrapped around inside "Item Level Targeting." You can say
only do this script ON and OFF when these conditions are true. It will evaluate the condition and do
the ON script when it's true and run the OFF script when it isn't true.

For instance, if you wanted to run this script when you're on this "IP Address Range" and then run
the revert script when you're not on this "IP Address Range," you could do that. You could say only
do this thing when you're on a laptop ("Portable Computer"), or you could say only do it when a
person is in a particular "Security Group" and lots of other conditions as well.

I'm not going to do that here, but it's fantastic and you get the general gist there. I'll go ahead
and click "Finish." With that in mind, let's run over to our endpoint machine here. We can go ahead
and run GP Update ("gpupdate"), and you're looking for a shortcut to appear here not through Group
Policy Preferences but through Endpoint Policy Manager Scripts which is going to use PowerShell.
There you go. It happens in real time just like that.

While this is still cooking, let's go back to our management station and let's make the script fall
out of scope. I'm going to right click and "Delete" the GPO link so the GPO doesn't apply anymore to
our "East Sales Users." When that happens and then they run GP Update ("gpupdate") or log on, watch
the icon right here. We have a remove script that's going to know that that takes effect and runs
the remove script at that point just like that.

If that wasn't awesome enough, Endpoint Policy Manager Scripts has even more superpowers. This is
where it happens on the computer side. Let's go to our "East Sales Desktops" here and we'll "Create
a GPO in this domain, and link it here" called "PP SCRIPTS COMPUTER SIDE."

Now in "PP SCRIPTS COMPUTER SIDE," you have two amazing superpowers. We'll go here and go to the
computer side, "Endpoint Policy Manager /Scripts Manager." You can right click, "Add/New Policy"
script. You have two choices. One is do a system like thing: "Apply this policy to computer." This
applies the policy to the whole computer at large. Like if you wanted to wipe out a folder or kick
off a process or do something on the system, you could do that here.

But my favorite is this guy right here: "Apply this policy to all users who log on to the computer
(switched mode)." So instead of having to worry and think and wrack your brains about how loopback
is going to work and which settings are going to be involved there, no problem. We're going to just
drop a script in and all users who log on to this computer are going to get it just like that.

We'll go ahead and run the "PowerShell" apply script here. We're going to "Run script as user"
because otherwise we wouldn't see the shortcut being created. We'll go ahead and copy that and put
the script in there just like that. When it no longer applies, we're going to run another
"PowerShell script." Again, we'll "Run script as user," and we will run the remove command at that
point.

We can run it "Always," "Once" or "Once or when forced" with "gpupdate/ force or ppupdate/ force."
I'm going to go ahead and run it "Always" here. We can call this "PP Scripts Computer side." You can
also do "Item Level Targeting" and – wait for it – here's the best part. You can say do this script
for all users on the computer except and rather limit based upon who's in a "Security Group." So not
necessarily everybody on the computer like if it's a terminal server. You can make it say only these
particular users when they're on this computer, which is amazing. That is a humongous superpower.

With that in mind, I'm ready to go. Let me go over to my endpoint here. Now I'm ready to run GP
Update ("gpupdate"). Watch right here. You're going to see the exact same thing we saw on the first
part of the video, but this time the script is hitting the computer and each user who logs on to
that computer. That's the amazing part.

Just to prove a point, I'll go ahead and "Sign out" here and log on as a guy that has never logged
on before. I'll go ahead and log on as a guy "eastsalesuser8." I don't know. This guy has probably
never logged on before. Let's wait for the profile to be generated, and the first time the guy logs
on he gets the script. If it no longer applies, the script will peel back just like that.

Endpoint Policy Manager Scripts, new component, it's fantastic and ready for you to use right now.

Thanks so much for watching. If you're using Endpoint Policy Manager Cloud or Endpoint Policy
Manager with your MDM service, we have other videos to show you how that works.

Thanks so very much and talk to you soon.


