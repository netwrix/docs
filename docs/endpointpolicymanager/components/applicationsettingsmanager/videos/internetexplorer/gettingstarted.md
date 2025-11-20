---
title: "Getting Started Managing Internet Explorer"
description: "Getting Started Managing Internet Explorer"
sidebar_position: 10
---
# Getting Started Managing Internet Explorer

Netwrix Endpoint Policy Manager (formerly PolicyPak): Getting Started Managing Internet Explorer

<iframe width="560" height="315" src="https://www.youtube.com/embed/BTHJGamghzk?si=8jc--Za5d8T4u84j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager: Getting Started Managing Internet Explorer

Hi. This is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software. In this
series of short videos, I'm going to show you how to use PolicyPak to manage Internet Explorer, all
versions.

To get started, you need to make sure you're using the latest client side extension. As of this
recording, the latest client side extension is 707. In this case on this Windows 7 computer, I'm
going to load "PolicyPak Application Manager CSE x86." This is a 32-bit machine, so I'll go ahead
and install that here. On this 64-bit machine, I'm going to install the "PolicyPak Application
Manager CSE x64." It doesn't matter which version of Internet Explorer I'm using. The client side
extension will work for both of them.

It takes us just a second to go ahead and install. I'll do this on both sides. In this circumstance,
I'm doing this by hand. You would use our directions to mass install the client side extension.
There are various ways to update using Group Policy and to use not Group Policy to get the client
side extension out there. Just to prove a point, the client side extension 707 or later must be on
the target machine in order for any of the newer magic with the Internet Explorer Pak to work.

That's it for that one. We'll say "Yes" over here. That's done for that one. That's the first step.
Now we don't care what version of Internet Explorer you're running. You're welcome to use any
version. This is Internet Explorer 11 on Windows 8.1, and this is Internet Explorer 8 on Windows 7.
You could be using 9 or 10; it doesn't matter for the purposes of this.

The second piece of the puzzle in order to just get started is you need to get the Pak – the "pp
Microsoft Internet Explorer 8 and Later for Windows 7 and Later" Pak – into the right place. We have
other videos that explain how to do that in our QuickStart Guide. In this example, I'm putting it
into the "sysvol"\domain name. Then we've got what's called a "PolicyPak" central store, and you can
see that it's under "PolicyPak."

Once you've got that all set up, what you'll see then is that, for instance, if you "Create a GPO in
this domain, and link it here" and call it "Manage IE using PPAM" and you right click and click
"Edit," the next Group Policy Object you create on either the user or computer side, if you go to
"New/Application" you're going to see that new Pak: "PolicyPak for Microsoft Internet Explorer 8 and
Later for Windows 7 and Later."

The rest of the videos in the series are going to cover all the features that are new and updated
starting with build 707.

That's it for now. That's the getting started video. I hope that helps you out, and we'll go ahead
and watch the next video.

Thanks.


