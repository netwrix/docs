---
title: "Endpoint Policy Manager Scripts and AnyConnect: Run a script after you connect via VPN"
description: "Endpoint Policy Manager Scripts and AnyConnect: Run a script after you connect via VPN"
sidebar_position: 60
---
# Endpoint Policy Manager Scripts and AnyConnect: Run a script after you connect via VPN

Got Cisco AnyConnect? And want to make a specific script run ON connect and another script when the
VPN disconnects? If yes, you're gonna love this !

<iframe width="560" height="315" src="https://www.youtube.com/embed/hJ7YThxdZ4A?si=2OFbH4Bvf7ijnKae" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz, and in this video, I'm going to show you how you can run a script like
map a drive or map a printer or clean up the computer, whatever you want to do, on Cisco AnyConnect
VPN connection. This is part of Netwrix Endpoint Policy Manager (formerly PolicyPak) Scripts and
Triggers. To get started, you should probably have the script that you want to do beforehand. When I
connect over to my any VPN, I don't have a lot going on over there, so I'm going to do it locally,
but it should give you the idea. By way of example, here's a folder called temp2. Let's say when I
connect, I want to do echo aaa >> c:\temp2\a.txt and hey, look at that, I made a file called a.txt.
Then on disconnect, maybe I want to delete c:\temp2\a.txt. Now, basically, what we're saying is that
this is going to be my on script, and this is going to be my off script.

You should make sure your script works before you go to the next step. What we'll do is we'll go
over to group policy land. You can do this in Endpoint Policy Manager Group Policy, you can do this
Endpoint Policy Manager MDM, you can do this in Endpoint Policy Manager Cloud. It doesn't matter.
What we'll do here is we'll get started in the VPN editor here – I'm sorry – in the Endpoint Policy
Manager Scripts Manager here, and what we'll do is we'll right click Add a New Policy here. What
we'll do is we'll use any kind of script. You can use PowerShell, Batch, VB, whatever. I'm going to
use Batch just to keep it simple here.

Like I said, I'm going to take – I'm going to use echo aaa >> c:\temp2\a.txt. That's going to be
what happens when we connect. Now there is no revert action. I'll show you how to do a revert action
in a second. The trigger that we're looking for is VPN connect. You don't have to specify Cisco
AnyConnect. We'll just know that that's what you're using. You can specify a particular server or
any server. I'm going to put a \* for the wildcard in here, and then that's it. That's the on piece.

Now let's go ahead and do the off piece. The off piece would be – we'll make another Batch script,
and we're just going to delete c:\temp2, just like that, a.txt. Then we're – no revert action here.
We're going to say on the trigger of VPN disconnect – ah ha, that's the thing, and any kind of
server. We'll go ahead and say \* here as well. This will work for your Cisco AnyConnect or any
other supported one as well. That's it. Let me go ahead and show you what's next.

Now back on the client, we'll do a quick gpupdate. We'll give this a second to catch up. I've got my
Cisco AnyConnect ready to go over here, and just to make sure I'm not pulling a fast one on you
here, you'll see I've got in the temp2 folder, no file, so let's go ahead and click Connect here.
I'll put in my credentials when I am prompted. Give this a quick second. We've established our
connection and so on, and let's take a look. Great. There's our file. On Cisco AnyConnect, we ran
the script. Now let's go ahead and do a disconnect here. Let's go back to Cisco AnyConnect, and
we'll click Disconnect. Now that's over, let's go ahead and check it out.

If we go back to the temp2 folder, boom, no more file. Just like that, you were able to figure out
whatever script you want in advance, do a quick test drive by first make sure that works. Once
you've got it all set, bring it in to Endpoint Policy Manager Scripts with the Trigger function, and
you can have a nice on script and a nice off script, and you are off to the races with Endpoint
Policy Manager and Cisco AnyConnect. Hope this video helps you out. Looking forward to getting you
started with Endpoint Policy Manager real soon.


