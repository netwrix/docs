---
title: "Using Environment Variables in Paks"
description: "Using Environment Variables in Paks"
sidebar_position: 60
---
# Using Environment Variables in Paks

You might want to deliver settings based upon Windows' environment variables. There are several
types of Env variables, and in this demo, we show you how to find them and some use cases.

<iframe width="560" height="315" src="https://www.youtube.com/embed/xOOKQY-QrfQ" title="Endpoint Policy Manager: Using Environment Variables in Paks" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak: Using Environment Variables in Paks Video Transcript

Hi. This is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software. In this
video, I'm going to show you how you can use environment variables when using PolicyPak.

The way to get started is let's take a look for an application that has the ability to be
configured, such as WinZip here. Now, you can see that WinZip has a bunch of different "Folders."
You might want to declare what the "CheckOut base folder" is. You can see here that it's by default
not configured. You might want to choose maybe the Desktop of %temp or something like that, and it's
easy enough to perform.

The way to do this is inside "PolicyPak" you're just going to create a GPO and link it over to where
you want to. I've already done that, so I'll go to "New/Application" and pick "PolicyPak for WinZip
International LLC WinZip 14 to 17" here.

Now inside here, all you're going to do is – in the Pak definition itself, we've already put
something we think you might want, which is "`%localappdata%temp`." If you were simply to use this
by right clicking and selecting "Always reapply this setting," it will take "`%localappdata%temp`"
and evaluate that on the client.

Let's go ahead and see that in action. If we were to go here and run "gpupdate," and let's go ahead
and run "WinZip" now after getting the update here. If we go over to "Folders," you can see that it
has updated the "CheckOut base folder" to "`C:Userseastsalesuser2AppDataLocaltemp`."

Now again, you can if you want to change this to something else. Like let me go back over here. I'll
go over here and change it to maybe "`%desktop%`." In changing it to "`%desktop%`" and going over to
the target machine and running "`gpupdate`" and rerunning "`WinZip`" here, if we go to
"Options/Configuration…," go back to "Folders," you can see it has declared that the "CheckOut base
folder" for this user is "`C:Userseastsalesuser2Desktop`."

There are a lot of other options here, but let me give you a quick technique to go to the advanced
level here. On every target machine, all these environment variables are declared inside a special
location in the registry. I'm going to show you that location. Actually, I'm going to
"[https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html](https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html)."
This is an advanced technique, so I'm going to run this as administrator here.

I'll type "regedit." I'm looking under
"`HKEY_CURRENT_USER/Software/Microsoft/Windows/Current Version/Explorer/Shell Folders`." These guys,
everything on the left here, is an environment variable that you can use on this machine.

There may be others that are available, for instance, all the things that are available when you
type "set" at a Command prompt. These are all available. Everything that's set inside of Windows is
available. So like "`%PUBLIC%`" as you can see will go to "`C:UsersPublic`." That's available.
"`%HOMEPATH%`" – so all of these evaluate, plus all of these guys in "Shell Folders." For instance,
if you wanted to go to "History" – "History" is this folder that goes all the way down there – you
would just do "`%history%`" and that would evaluate there.

Now, there are a couple of weird ones in this list, so I want to point them out. Take a look at this
guy right here. This guy evaluates to "`C:UsersaDownloads`." So the name for this guy is, well,
let's take a look. We would have to do "`%{374DE290-123F-4565-9164-39C4925E467B}%`." That's
"Downloads."

The reason why is that these handful of guys simply are somewhat different than some of the other
guys. Just to prove a point here to make this "Downloads," I'll copy this guy into my PolicyPak
here. Instead of "`%desktop%`," I'm going to do "`%{374DE290-123F-4565-9164-39C4925E467B}%`" and
that is "Downloads." I know it's a little weird, but that's how it works.

I'll close this out. I'll rerun "`gpupdate`," and we'll see that it works. OK, we'll run "WinZip"
here. We'll go to "Options/Configuration…," go to "Folders" and there's the
"`C:Userseastsalesuser2Downloads`" folder. That would work. You could also use if you wanted to –
I'll do it for this one just to prove a point – you could also use "`%userprofile%downloads`." That
should work also: "`%userprofile%downloads`."

Let's see that that works. It starts off, it's not at "Downloads." Now let's go ahead and run
"`gpupdate`" here, and we'll see if it works. If I run "`WinZip`" here – remember, I'm manipulating
a different folder – there it is. Those are two ways that you could use "Downloads."

There's one other way you might want to use environment variables, and that comes down to using
item-level targeting ("Enable item-level targeting"). We have other videos on item-level targeting.
But if you'll remember, item-level targeting lets you specify certain conditions for when this Pak
entry will hit a target machine.

You may want to use it, for instance, on "File Match." You might want to say when the "File exists"
and put in something like "`%desktop%file123.doc`." In other words, this whole Pak entry won't kick
off unless it see the file called "`file123.doc`" on the Desktop. That's perfectly legal, so that's
how you would use environment variables inside the item-level targeting.

That's it for environment variables. If you have questions on that, we're here for you. Go ahead and
post your questions in the forum, and we'll see you there.

Thanks so much.


