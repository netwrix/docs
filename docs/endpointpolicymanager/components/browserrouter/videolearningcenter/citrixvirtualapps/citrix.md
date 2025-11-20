---
title: "Using PP Browser Router on Citrix or RDS servers with published browser applications"
description: "Using PP Browser Router on Citrix or RDS servers with published browser applications"
sidebar_position: 10
---
# Using PP Browser Router on Citrix or RDS servers with published browser applications

In this video, learn the best practice for using PPBR and Citrix / RDS servers. Route from browser
to browser very quickly using this technique.

<iframe width="560" height="315" src="https://www.youtube.com/embed/wVAuIOwAUrs" title="Endpoint Policy Manager: Using PP Browser Router on Citrix or RDS servers with published browser applications" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak: Using PP Browser Router on Citrix or RDS servers with published browser applications

In this demonstration, I'm going to show you how you can use Netwrix Endpoint Policy Manager
(formerly PolicyPak) Browser Router to define routes for your customers that are using Citrix
servers.

First things first is that you do need to license and install the "Endpoint Policy Manager
Client-Side Extension" on your Citrix server or your RDP server. It takes about a minute. I've
already done that, and it's ready to go. Just showing you that it's here already installed.

The second thing you would do is actually where your Citrix server lives – I happen to have it in a
OU called "CITRIX" here – what I want to show you is that you would create a new route. We might
call this "Custom Routes for All Users on Citrix."

What you're going to do is define your routes on the computer side. Instead of defining it per user,
you're defining it per computer against the Citrix server. That means you're going to go to computer
side, "Endpoint Policy Manager," click on "Browser Router," and here's where you get to define your
routes.

First of all, they all need to be in a "Collection." You could even ensure that this collection only
fires off if you wanted to by using "Collection Level Targeting" and saying that this collection
will only fire off when it's in a "Terminal Session." That is an extra level if you want to. It's
not necessary in this case because I am defining this policy against the Citrix server's OU
directly, but it's an option if you wanted to.

I'm going to create a "New Policy" here for Browser Router. I'll do "AAA," and I'll say the
"Wildcard" is "\*aaa\*." Whenever I go to a website with AAA, I'm going to always use "Internet
Explorer." I'll create another one for "BBB," and I'll create a "Wildcard" called "\*bbb\*" and I'll
always go to "Firefox." And I'll create a "New Policy" for "CCC" and a "Wildcard" "\*ccc\*" and that
will always go to "Google Chrome."

As an added bonus, you can create a "New Default Browser" and guarantee that when your customers are
using the Citrix server, the three different browsers you might have on it are not fighting for
superiority. You simply define what your default browser is and that's it.

Go over to your Citrix and you could either wait 90 minutes or so until Group Policy takes effect,
or you could go to your Citrix server like I'm doing here and run GP Update. You're going to want to
do a quick preflight test on your Citrix server just to make sure that it all works right.

If you're on the Citrix server and you run "Internet Explorer" here, we said if you go to
"www.bbb.com," you want to launch Firefox. Well, here we go. In fact, we launch Firefox. If you're
in Firefox and you go to "www.ccc.com," you're going to launch Chrome. If you're in Chrome and you
go back to "www.bbb.com," that's going to go back to Firefox. And if you're in Firefox and you go
back to "www.aaa.com," that's going to launch Internet Explorer.

Once you've tested it on your server as if it were just a regular computer endpoint, now you're
ready to go back to your machine that has the Citrix Receiver on it. You could either use it this
way where your programs are hanging out in a folder or if you want to use the Web interface or if
you want to use the "Citrix Receiver" app, any of these work exactly the same way.

For instance, you're in Internet Explorer here. It doesn't matter who you're logged on now to that
server because all users on that server are going to get it. So we'll go ahead and launch Internet
Explorer here. You'll see that it's coming from the Citrix server. Once it launches, we're going to
see if it's routing between everything. If you just keep your eyes open here, we'll go ahead and
close out all these windows to keep it simple here.

Then we'll try to go to "www.bbb.com." What should happen? Well, that should close, and the Firefox
that's on the Citrix server has now launched. If we were to go to "www.ccc.com," it will launch the
Chrome that's on the Citrix server as well. Then going from Chrome, you can go back to Firefox and
finally back to Internet Explorer. So we will route properly even on a Citrix machine on a Citrix
server.

Again, my suggestion is that you do this on the computer side, affect your Citrix machines directly
with those policies. Don't forget to use that "Default browser" as an extra added bonus. Notice how
we never got prompted not once about who should be the default browser when using the browsers on a
Citrix sever.

I hope this video helps you out and you're ready to get started with Browser Router. Thanks.


