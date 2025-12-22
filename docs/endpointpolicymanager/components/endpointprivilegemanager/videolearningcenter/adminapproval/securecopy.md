---
title: "SecureCopy(TM). Empower users to copy then elevate items"
description: "SecureCopy(TM). Empower users to copy then elevate items"
sidebar_position: 130
---
# SecureCopy(TM). Empower users to copy then elevate items

Netwrix Endpoint Policy Manager (formerly PolicyPak) SecureCopy™ enables you to specify a specific
UNC share (or shares) for users from which to copy .EXEs, .MSIs, and Scripts. Users can then
RIGHT-CLICK and use a command to begin the copy of the item and finally place the item in target
locations on the local computer.

The net result is that applications which need writable locations to perform their installs or runs
may do so in an elevated state; where they would not able to run within the UNC share.

<iframe width="560" height="315" src="https://www.youtube.com/embed/bg--i4NtNxY" title="Endpoint Policy Manager Least Priv Manager: SecureCopy(TM). Empower users to copy then elevate items." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz. In this video, I'm going to talk to you about Endpoint Policy
Manager's Secure Copy and Least Privilege Manager.

Here's a network share. You can see it's got a server and a share here. Let's pretend I'm a standard
user, and I want to do some things that require Admin rights, like run this application like
Procmon. Of course, I can't do that. I don't have Local Admin rights.

If I were to try to run SkypeSetup, an application that has to unpack itself and then run. The
problem there, once again, is a I don't have Local Admin rights. It's going to catch fire, and it's
not going to work.

A user could try to do something. This is you. You set this up for them. A user could try to copy
this to the desktop, but that still doesn't work. They don't have Local Admin rights, the same thing
again with SkypeSetup.

What we can do now is let you create a little store repository for them. I'm going to take this
share, and I'm going to talk to you and show you about Endpoint Policy Manager SecureCopy. The way
that it works is that you use Least Privilege Manager. You can do this on the user or the computer
side. You're going to right-click. Add a new SecureCopy policy.

What this is going to do is you can add a file or a folder. I'm going to add the folder. I'm going
to pick that whole folder here. You can either do just in that folder or recursively. I'll go ahead
and do that. Go ahead and click Next.

Then you can specify where the user can copy it to, and because they can copy it from this location
to this location in the secure method, then it's available for elevation. What we can do is we can
allow the user to choose any target folder, or you can specify that they must and can only copy to
say to c:\temp123, whatever you want. I'm going to let them, for this demonstration, choose any
folder they want.

The second thing is that you can force what's called justification, which makes them explain why
they have to perform the elevation. Of course, we have a bunch of videos on apply to child
processes.

The best practice is to always unclick this, which will say don't apply to child processes, or you
can dial into specific executable types. We have a video just on that. For now, I'm going to leave
this the way we have it for standard. Then we'll go ahead and give this a name. I'll call this PP
SecureCopy1.

The most important part is the context menu name. You can either just say copy with Endpoint Policy
Manager SecureCopy. That's a choice. That's the default, or you can specify to give it anything you
want. If I want to call this PP Custom SecureCopy Command just to show you that I'm doing something
here. That's it. I'll go ahead and click finish.

Let's see it in action. What we'll do is we'll go over to our endpoint. We'll go ahead and run
gpupdate here. We'll give this a second to catch up. Now that that's all done here, what we can do
now is again nothing will change from this perspective.

If they try to go to your share that you set up, this little store for them, and they try to
double-click it, that's not going to work. What they can do now, they can right-click and look at
this, SecureCopy. They can do Endpoint Policy Manager SecureCopy. They can specify where they want
to put it.

Remember, I said they could put it anywhere they want. If I say the Desktop, New Folder, and call
this PP SecureCopy Destination, that's totally fine. Select the folder, and there it is. There's
Procmon. Now because we did the work here, this application is now eligible for elevation.

Let's do the same thing for Skype. We'll right-click Endpoint Policy Manager SecureCopy. We'll go
ahead and put it in the same location. Now that that's done, we can now see if Endpoint Policy
Manager will perform this elevated. Check it out. We'll double-click it and boom.

Oh, haven't done it yet. We have to say, need to run this for the ABC Project, whatever it is. This
is all going to be in the event log. There we go. We're able to perform the elevation. Same thing
for Skype setup, now we just double-click it. We can say, at the hotel; need to install this thing
for my work. That's all logged. Now Skype will install.

The basic rule of thumb here though, and we tell you this in the documentation and also while you're
creating your policy is that you want to make sure that whatever you put in here is stuff that is
valid for them to perform elevation on. That's the idea.

You don't put anything in here in the store that you set up in the share that you wouldn't want them
to do elevation on because they can copy any of these things, and then they can perform the
operation, Endpoint Policy Manager SecureCopy.

I hope this helps you out. This way, if you have stuff on a share, and you want to enable your users
to copy it locally and then perform the elevation process, Endpoint Policy Manager SecureCopy to the
rescue.

Hope this video helps you out. Looking forward to getting you started with Endpoint Policy Manager
real soon. Thanks.


