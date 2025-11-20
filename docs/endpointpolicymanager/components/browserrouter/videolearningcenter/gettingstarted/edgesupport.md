---
title: "Browser Router now with support for MS Edge"
description: "Browser Router now with support for MS Edge"
sidebar_position: 20
---
# Browser Router now with support for MS Edge

Netwrix Endpoint Policy Manager (formerly PolicyPak) now supports routing FROM EDGE to other
browsers (Firefox, IE, and Chrome.) Its easy, and here's the only small thing you need to know to
make it work perfectly !

<iframe width="560" height="315" src="https://www.youtube.com/embed/1GStIc-hjhw" title="Endpoint Policy Manager: Browser Router now with support for MS Edge" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak: Browser Router now with support for MS Edge

Hi. This is Jeremy Moskowitz. This video is an update to Endpoint Policy Manager Browser Router
where we now introduce full support for Microsoft Edge with regards to Browser Router. So you may
need to already know what Browser Router does. If you don't, you can watch those videos but I'm
going to set the stage here.

I'm going to create a couple of routes, and then I'll show you how Edge support works inside
Endpoint Policy Manager Browser Router. I'm going to create my first "New Policy" here. I'm going to
give it the "Policy Name" "All things Googly to chrome." I'll go to "Wildcard" "\*google\*" and go
to "Google Chrome."

I'm then going to create a "New Policy" that says "FF to FF," "Wildcard" "\*mozilla\*" and we'll go
to "Firefox" here. If I were to go "Add" a "New Policy" that says "GPanswers.com to EDGE," we can
then go to "Url" "GPanswers.com" and go to "Edge." Then if I wanted to create one for Endpoint
Policy Manager to Internet Explorer, "New Policy," "PP to IE" and go to "policypak.com" and go to
"Internet Explorer."

Okay, great, so now we've set that all up just the way we want, and now we're ready to test it out.
I'm going to log on as a user who has never logged on before ("Other user"): "eastsalesuser6." This
person has never logged on before. I'll pause the video be logging on for the very first time for
any user takes a couple seconds. This is just creating a profile, so I'll hold on for ten seconds
here.

Okay, now we're all logged on. Remember, nothing has been run before. "Firefox" has never run.
"Google Chrome" has never been run. Edge has never been run and Internet Explorer. Nothing has ever
been run. Actually, one of the things that can happen which is sort of a pain in the neck is that
different browsers will ask to be the default, so expect that here in this example.

If you want to make that go away in real life, you can simply make a new policy that sets "New
Default Browser" so they never ask. I don't have that set in this video, so you may see that when we
start running some things.

Let me start off with "Internet Explorer" here. We're going to go around the circle here. I'm
starting off life in Internet Explorer here. I don't care about any of this stuff. By the way, all
of these messages can be sent to the bottom of the ocean using Endpoint Policy Manager Application
Manager, but I'm not going to worry about that this minute.

Let's go ahead and get started here. I'm in Internet Explorer. If I were to go to "www.mozilla.org,"
what we're going to see that happens is we're going to close that tab and open up Firefox for the
first time. We'll go ahead and let Firefox do its first-time run thing. That's cool, so now we have
that.

Now if we're in this browser and we say to go to "www.google.com," it's going to go to the Chrome
browser. Then we said if we're in Chrome and we go to "www.gpanswers.com," we want to open up in
Edge. So here comes Edge, and now we're in Edge.

Now here's where finally the new support comes in. If you're in Edge, up until recently there was no
way to go from Edge to another browser. If you wanted to go back to "www.policypak.com," which we
said open up only in Internet Explorer, or www.mozilla.org open up in Firefox, when you click on
Edge the very first time you run Edge it will not actually do what you ask it to do.

Actually, here's that default thing I told you about, which is fine. We can make that go away but
not for the purposes of this video. So if you make a route that would be outside of Edge, Edge
doesn't know how to do that yet. It just goes right to the website and opens it up. For instance, if
I were to go to another route like "www.mozilla.org" or something like that, what you want to see is
it go from Edge to open up Firefox.

Now, here's the support. All you need to do is close Edge and open it up, and the second time is the
charm. That's it. That's all you need to do. So let's do it all again because now I've opened Edge,
closed Edge, and now this user is locked and loaded and we support it.

Let's start again. We'll go from "Google Chrome" to Edge. So we'll go from Chrome and we'll say
"www.gpanswers.com." Here we are in Edge now. We can go to "www.policypak.com." Watch Edge. We will
close Edge and open up Internet Explorer.

If we're in Edge and we want to do some great stuff in Edge here which is fine and have this tab and
then go to "www.mozilla.org," what happens? We close the tab and then we correctly open up Firefox
just like that.

Let's do another one. If we're in a tab in Edge and we want to go to "www.google.com," watch what
happens. We close the tab and open up the right browser just like that.

So that's it. We now fully support Edge as a routable browser in and a routable browser out. Nothing
you need to do in your routes. It's just as simple as that. We've got you covered.

I hope this helps you out. Looking forward to getting you started real soon with Endpoint Policy
Manager Browser Router.


