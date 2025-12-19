---
title: "Endpoint Policy Manager + WVD: Browser Router ... the right browser for the right website"
description: "Endpoint Policy Manager + WVD: Browser Router ... the right browser for the right website"
sidebar_position: 70
---

# Endpoint Policy Manager + WVD: Browser Router ... the right browser for the right website

Got multiple browsers with WVD? Great, we have you covered. See how to get the RIGHT browser for the
RIGHT website with Netwrix Endpoint Policy Manager (formerly PolicyPak) Browser Router and Windows
Virtual Desktop !

<iframe width="560" height="315" src="https://www.youtube.com/embed/NpVvCj8TJA8" title="Endpoint Policy Manager + WVD: Browser Router ... the right browser for the right website" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz, Microsoft MVP and founder of PolicyPak Software. In this video we're
going to learn how to get the right browser for the right website. In fact, in previous videos you
saw when I was using Windows Virtual Desktops, when I fired up my Firefox or I fired up, say, my
Chrome, which I'll do at the same time here, you saw that you got an annoying popup. What's that
annoying popup? It asks can I be the default browser?

You can see when Firefox launches, it's going to ask the same thing. Can I be the default browser?
This gets pretty annoying for users because your browsers are dumb objects, and they need to be
trained on what to do. We're going to do that first and foremost with PolicyPak Browser Router.

Then the second thing we're going to want to do is say if I'm in the wrong browser, I want to get
routed over to the right browser. You might know that certain websites only look perfect in the
right browser. For compatibility reasons, you need to Edge or Internet Explorer. Maybe your G suite
only looks best in Google Chrome, that kind of thing. If you need to get to the right browser to the
right website, PolicyPak Browser Router is the tool for you.

I'm going to go ahead and click Not Now so you can see I'm not going to do any funny business here.
I'm also going to not set it as a default here either. The way we're going to do this is in
PolicyPak Browser Router. You can do what I'm about to show you on either the user or the computer
side. Browser Router is very, very flexible.

You can say whenever east sales user one logs on, he's going to get these settings. You can say for
everybody in Windows Virtual Desktops, all the computers, everybody is going to get those same
settings. That's your choice. I'm going to do it on the user side. I'm going to say PolicyPak
Browser Router User Side Demo. Then we'll right-click over here and click Edit.

Again, this is on the user side, so I'm going to dive down under PolicyPak node here. There we go.
I'm going to click on user side, PolicyPak node. Head over to the Browser Router and the right-click
Add. You have to start off with a collection. A collection is a little container that contains other
settings. We'll go ahead and click OK here. In fact, we'll talk about collections at the very end.

We'll go ahead and click in there. The first thing we want to do is add a new default browser
policy. This is where you get to dictate which thing will be the default browser when users click on
URLs that don't have routes and also to just make that problem go away.

If you wanted to make Edge your default browser, that's totally fine. You can do that. We'll just go
ahead and click on Edge and click OK.

There's also this thing called user selectable. We have a video about user selectable on the Browser
Router part of our website. Basically, it enables the user to select their browser and for us to
remember their choices. For this demonstration, I'm going to pick Edge. There we go.

Then the next thing I want to do here is I'm going to add a couple of routes. The routes are going
to be anything Microsoft to Edge. How do we know it's anything Microsoft? That's going to be a
Wildcard \*Microsoft\*. That's going to be Edge.

We don't care what browser we're coming from. We just care what browser we're going to. We're going
to start off in any browser and head on over to Edge land.

Then the next thing we'll do is we'll create another policy route. We'll say anything Google to
Chrome. How do we know it's anything Google? Wildcard \*Google\*, and that's going to be heading
over to Chrome land.

Then just to keep going along the lane here, if we say anything Mozilla to Firefox, how do we know
it's that? It's Wildcard \*Mozilla\* and head on over to Firefox land. Then lastly, we'll add a new
policy here. Let's say udel.edu, which is where I went to college, to IE. Instead of a Wildcard this
time, why don't we do www.udel.edu, a very specific URL. Send that to Internet Explorer.

What's great about using PolicyPak Browser Router and Internet Explorer is that you can set the
browser mode to either an enterprise mode or a document mode. Maybe I'll crank it all the way down
and use Internet Explorer 5 document mode. It doesn't matter what browser I'm starting in. We're
going to end up in Internet Explorer and set the IE 5 document mode accordingly.

One of my other favorite things is you can add a blocking policy. If I want to say no Facebook, I
can do Wildcard \*Facebook\*, and then block Facebook and say no Facebook for you. We're off to the
races. Remember, if you're logged on, if you ran anything in Windows virtual desktop land, you may
be what's considered disconnected.

If that's the case, then Group Policy may not run perfectly. If you want this test to work the very
first time, in real life you wouldn't need to normally do this, but I'm going to go ahead and sign
this person off. In signing them off, we know that Group Policy is going to kick back in, and you
should be off to the races.

Let's go over to our laptop that's running remote desktop. Again, I could launch it from the pretty
icons I have here that I've used with PolicyPak start screen and Task Bar Manager or I can run it
here as well. I'm just going to go ahead and do that. I'm going to fire up both Firefox and Chrome
at the same time. Remember, ten seconds ago we saw that those browsers were asking can I be the
default browser? Because you're setting that information with PolicyPak Browser Router, that
question is now over and should not come up.

Here comes Chrome. Sure enough, no questions from Chrome, which is nice. We'll just give Firefox
another second or two. There we go, kick in, and should be no questions from that browser as well.
There we go.

Now let's do what I like to call a couple of base hits. If we are in this browser – in fact, I'll go
ahead and close Chrome out just so you can see the full demonstration. You're in Firebox land, and
you know that your websites say Google.com only looks best in Chrome.

Watch what we're going to do. We're going to close the wrong browser tab and open up the right
browser tab. Look what's happening. You can see here that it's absolutely coming from Windows
virtual desktop. That's where you want it to be.

If you are in Chrome and you want to go over to Edge, let's go to www.microsoft.com. You're in
Chrome. We're going to close the wrong browser. It takes a second to kick in. It will close the
wrong browser and open up the right browser just like that. We're routing over to the right browser,
to the right website at the right time.

I think the other thing we said we want to do is let's say we're in Firefox again or something.
You're here and you want to go to udel.edu. What are we going to do? We're going to track that URL,
run Internet Explorer from Windows virtual desktop. I feel bad. I made it look terrible, but I did
tell it to render Internet Explorer 5 document mode, and this is what it looks like when you render
Internet Explorer 5 document mode.

Now let's just close the loop. We'll go to www.microsoft.com and we're going to close that browser
and open up the right browser, which is Microsoft Edge. This works not only when you're here with
published applications. Of course, it also works when you're doing full desktop applications as
well.

I'm just going to start this session and show you ever so briefly one browser to the other because
it's all the same thing with PolicyPak. You can see PolicyPak is doing its thing at log on in the
real full session of Windows. It should work exactly the same way. Instead of going through the
entire demonstration, I'll just do one or two browsers just to put a fine point on it.

Here we go. Let me just go ahead – I'll just go from, say, Firefox to Edge just to prove a point
here. Firefox opens up. We have our default page that we set up earlier using PolicyPak Application
Settings Manager. Let's go ahead and open up Microsoft.com.

We said when we do that, close the wrong browser tab, open up the right browser, which is going to
be Edge in this case. If you're in Edge and you want to go to another browser, that's super easy to
do; for instance, www.Google.com. We said if you're in Edge and you go to Google, that's going to
open up the Chrome browser. There we go, just like that, Browser Router doing its thing.

The one thing I forgot to do was to browse for things like Facebook, which we put a block on. Here
we are. We're browsing for Facebook. As you can see, you can do a search for that. When you try to
click on Facebook, that's where Browser Router kicks in and says no Facebook for you.

If we wanted to do the same thing here in a published application here just because I forgot to do
it earlier, let this give a second to finish up here, Chrome. If we were to, same idea, published
application, if we were to type in Facebook here and then try to actually click on a Facebook link,
it doesn't matter what browser we're in. We're going to smack that down.

Again, I hope this video helps you out. I'm looking forward to getting you start with PolicyPak and
Windows virtual desktop and Browser Router real soon. Thank you very much. Take care.

