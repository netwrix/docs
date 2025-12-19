---
title: "Endpoint Policy Manager Least Priv Manager Tools Setup"
description: "Endpoint Policy Manager Least Priv Manager Tools Setup"
sidebar_position: 20
---
# Endpoint Policy Manager Least Priv Manager Tools Setup

Learn how to set up the PP Least Privilege Manager Helper tools, so users can overcome UAC prompts
for Printers, Network Adapters and uninstall software.

<iframe width="560" height="315" src="https://www.youtube.com/embed/3SRE-N6EBuU" title="PP Least Priv Manager: Helper Tools Setup" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy, and in this video, I'm going to show you how you can set up the tools, the
Netwrix Endpoint Policy Manager (formerly PolicyPak) Least Privilege Manager tools using
preconfigured XMLs. In a previous video, you should see how you can use the Least Privilege Manager
tools where you can click on them, double click on say the Printers, application, and then you can
right click and Remove a device or Add a device and so on. Same thing with the Network Card, and
same thing with the Add/Remove Programs, but none of these tools are going to work until they're set
up. For instance, if I wanted to remove fax and click Remove Device, it's not going to work. This
tool itself needs to be elevated. Don't panic. We have a way to do that very quickly.

In the preconfigured downloads of Endpoint Policy Manager we have the XMLs, so when you download
everything in Endpoint Policy Manager land, you'll find the Least Privilege Manager XMLs. We've got
a bunch of preconfigured ones, so we already have some XMLs to make this go pretty fast. We've got
the Network Card Helper Tool, the Printer Helper Tool, and the Add/Remove Helper Tool. The way to do
this – it's pretty simple. You can do this on either the user or the computer side. If I wanted to
do PPLPM Helper Tools Elevate. Right click here and click Edit. We'll go to user side, Endpoint
Policy Manager. Again, you can do this on the computer side as well, but I'm going to just do it on
the user side. Least Privilege Manager, and then what I'll do is I'll just take the tool or tools I
want to elevate – so if I want to do the Network Card one, that's that one. Printer one, that's that
one. Remove Programs Tool, that's that one. Bing, bing bing, just like that.

Okay, so right now these tools aren't operable. They'll run, but you can't do anything in them, so
if you wanted to go to the Properties, you're still going to get a UAC prompt, no problem. Now that
I've got the XMLs all lined up, I'll run gpupdate and give this a second to kick in. Now let's go
ahead and close this out, and now let's rerun the tool. Does the Network Connections one work? Let's
go ahead and double click. Now if we right click and go to Properties, no more UAC prompt. We can do
the stuff we need to in here like disconnect IPV6 or change the IP address directly on a machine,
something like that.

If we wanted to go to the Printers tool, we'll double click that, and you can now [] I'll remove
this – why do I have three OneNote printers? Who knows? Let's go ahead and remove one of the OneNote
printers Are we sure we want to do that? Yep. Boom. There are two OneNote printers. Then if we also
wanted to do the Add/Remove Programs tool – actually it's just the Remove Programs Tool, let's go
ahead and take a look at it. You can see here that this gives us the ability to remove anything at
all, so if we wanted to remove this version of Java, that's fine. Let's go ahead and try that out.
Right click, Uninstall, where before this tool wouldn't work because it wasn't automatically
elevated. Give this a second to clear up, and we're off to the races.

That is the first part of the tool getting it set up is just dragging and dropping in the XMLs to
get those tools enlightened. The second part is if you want to configure this tool, the Endpoint
Policy Manager Programs – the Remove Programs Tool to show only specific publishers or only specific
names. For instance, maybe you don't want to let everybody in the world uninstall everything that
they can. That's not a problem. Let me go ahead and show you how to do that. Let me just wait for
this to finish up.

Now let's pretend what we want to do here, like I said, is limit all the things that can be seen.
For instance, if I want to show only things from Microsoft but only if – but only show the ones that
have C++ in them, how would I do that? Let's go ahead – that's wrong. Now that we've done that,
let's say we want to limit what's possible to uninstall here, so let's do that. Let's for starters
just show stuff from say Microsoft. How would we do that? Again, this is the publisher, so keep your
eye on that. What we'll do is we've got an ADMX setting, so you'll have to copy in the Endpoint
Policy Manager ADMX settings, and then you'll go to user side or computer side, Policies, Admin
Templates, and then you're looking for the Endpoint Policy Manager ADMX settings, and you're looking
for the Snap-in – nope. You're looking for Client-Side Extensions, Least Privilege Manager.

Now this is where we have the two options of configure the names or the publishers that you want, so
if you wanted to configure publishers that you wanted to include, you could say just Show me, say,
\*microsoft\*, and that's a value of 1. That will only show those publishers. Let's just see that
and see how that goes. Let's try that on for size. We'll go back over here. We'll run gpupdate. Give
this a second to kick in. Okay, go ahead and close this out. Now let's rerun the tools – the removal
tool, see what we get. Look, it's nothing but Microsoft. Super-duper.

Now let's say you wanted to hide only the items that have the word C++ in it. What would we do?
Let's go back over to our policies. We're now going to use the Configure the program names to
include or exclude, so let's go ahead and Show, and we'll say something like \*C++\*, and then that
value will be 0, so those guys will be hidden. We're going to nuke all the C++ ideas, so bing, bing,
bing. We'll then go back over here and run gpupdate. Give this a second to finish up. Now that
that's done, let's rerun the programs, and there we go. We just have these items. If we wanted to
right click and Uninstall something, we're allowed to do it because we're permitting those items.
With that in mind, hope this – hope getting the tools set up helps you out. Looking forward to
getting you started real soon. Thanks so much.


