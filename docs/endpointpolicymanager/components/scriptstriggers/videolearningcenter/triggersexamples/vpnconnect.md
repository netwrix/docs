---
title: "Endpoint Policy Manager Scripts & Triggers: Perform Scripts on VPN Connect and VPN Disconnect"
description: "Endpoint Policy Manager Scripts & Triggers: Perform Scripts on VPN Connect and VPN Disconnect"
sidebar_position: 50
---
# Endpoint Policy Manager Scripts & Triggers: Perform Scripts on VPN Connect and VPN Disconnect

Want to map a drive or perform any other login script when you connect via VPN? Easy. Use Netwrix
Endpoint Policy Manager (formerly PolicyPak) Scripts & Triggers with this awesome way to handle this
problem.

<iframe width="560" height="315" src="https://www.youtube.com/embed/OH6J_qkM0Hk" title="Endpoint Policy Manager Scripts &amp; Triggers: Perform Scripts on VPN Connect and VPN Disconnect" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz, and in this video, I'm going to show you how you can use Endpoint
Policy Manager Scripts and Triggers to map a drive or do any kind of log on script thing you want
after you connect through VPN, and you can do another kind of action like unmap network drives or do
any other kind of script when you disconnect from VPN. Before you get started, you should have your
script ready to go. I don't have anything interesting over on my VPN itself, so I'm going to do some
stuff locally, but this should give you the idea. For instance, when I connect to VPN, wouldn't it
be amazing when I create a file called echo aaa to a file C:\temp\a.txt. Look at that, I've created
a file. Then when I'm disconnecting from the VPN, I want to delete C:\temp\a.txt.

These are my two commands. This is going to be my on connect script, and then my other one will be
my disconnect script, so I'm going to go ahead and copy that. Time to go over to group policy land
or you can do this in Endpoint Policy Manager MDM land, or you can do this in Endpoint Policy
Manager Cloud land. What we'll do is we'll go to PP VPN 123, so we'll go ahead and create this group
policy object here with the Editors, and you can do this on the user or the computer side. I'm going
to dive down under Endpoint Policy Manager on the user side here for this example. Then I'm going to
go to Scripts Manager, and I'm going to plunk in that script.

Add a New Policy here and this policy is going to be a Batch script. If you want to do PowerShell or
one of the other script types, that's totally fine. You can run the script – this script will be
running fine as the user. If you want to run it as system, you can do that. If you need it to run
with a user with elevated rights, we can do that too. You're off to the races. That's going to be
our connect script.

We don't need a revert action. What we need is a trigger that say at VPN connect – at VPN connect
for any server at all or if you want to specify a server you can do that – \* is usually sufficient
for most people. Boom. You're done. On VPN connect, go ahead and make that file happen or map that
drive or anything else you wanted to do. The next thing we want to do is our disconnect script, so
we'll go ahead and make a Batch script. Like I said, very simple script. We're just going to delete
that file after we disconnect, so I'll just paste that in here. Bing, bang, bing. Click Next, and no
revert action. We want to make it a trigger. That trigger is going to be on VPN disconnect, and then
we will once again say on any server disconnected, and then we're off to the races.

That's all there is to it. I'm going to run gpupdate and get my policy here ,and then the next time
I connect to my VPN server, I'll show you that – I'll delete the file first. It is deleted. Then
we'll show you at connection, we'll create the file, and at disconnect, we will automatically remove
the file. Let's go ahead and check that out. Just to prove we're not pulling a fast one on you here,
nothing in the temp folder. Here's my VPN connection. Endpoint Policy Manager trigger will kick in
after the VPN connection is completed, and we'll watch that file get created in real time. Again, if
this was map a drive, run a whole log on script, do anything you want, that's totally fine. I'm just
keeping it simple. There's my file. All automatic. It did the thing.

Now when it's time to disconnect – let me go ahead and disconnect here – we have that second
trigger, which says on VPN disconnect, what are we going to do? Take another directory here and
bang, delete the file. Just like that using Endpoint Policy Manager Scripts and Triggers, you can do
any kind of scripty thing you want on a VPN connection and also a VPN disconnection. Hope this video
helps you out. Looking forward to getting you started with Endpoint Policy Manager real soon. Thank
you very much.


