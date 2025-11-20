---
title: "Force all websites to IE (but have some exceptions)"
description: "Force all websites to IE (but have some exceptions)"
sidebar_position: 30
---
# Force all websites to IE (but have some exceptions)

Using PP Browser router, you can do a magic trick. Have ALL traffic go thru Internet Explorer,
except a handful of websites (called Exceptions.) Here's how to do it. Two tips: If you cannot find
the XML, just ask support. And, if you want to route all traffic thru, say, Firefox or Chrome…
that's possible, but that's a DIFFERENT video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/9nnxysZs1C4" title="PP Browser Router: Force all websites to IE (but have some exceptions)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak Browser Router: Force all websites to IE(but have some exceptions)

Hi. This is Jeremy Moskowitz. In this video, I'm going to show you how you can us Netwrix Endpoint
Policy Manager (formerly PolicyPak) Browser Router to force all websites to go to a particular
browser. In fact, we have two videos. This video is on how to make all sites open in Internet
Explorer, except for maybe two particular websites.

We've done all the thinking for you. It's contained right here in this XML file ("all sites open in
IE"). Let me show you and explain how it works. I actually already have Browser Router set up, and
I'm going to decommission what I'm already doing here.

On my user side here, I actually have a "Browser Router" collection set up that I'm going to
dismantle because I don't want to do this anymore. I'll go ahead and "Delete Collection" first.
That's the first thing. If you already have it set up, you don't want to have a conflict between
what you have and what you want to do.

This GPO is linked up high enough that I'm going to link it over to computers, and that's good
because that's what this XML is made for. You'll click on the computer side, "Browser Router" here
and just drag and drop. You now have this "Collection 1" on the computer side.

Let me just explain what it does here. The first thing is that it's going to make all Internet
traffic go to Internet Explorer ("Internet zone in IE"). So if you're in the wrong browser, it will
automatically switch and that's the number one thing it's going to do.

But if you want to make an exception for certain websites like you're timecard app or some other
weird thing, that's fine. Like in this example, I have Endpoint Policy Manager going to Chrome
("www.policypak.com in CH") and Bing going to Firefox ("www.bing.com in FF").

Then we have this unusual one. This is a two-step thing you need to do here. This last item here
basically says when you open Chrome, at least open the new browser tab ("CH new tab in CH") or else
it's not going to fire off at all. If you don't have this rule in place and you don't have the
homepage set to this string, then that's going to be a problem.

What we'll do is we'll copy that. By the way, if you're in a different country than the U.S., you
might want to put in your country code like ".nz" for New Zealand or whatever your country code is
right here. I'm going to go ahead and copy this and click "OK." That's the first thing I'm going to
do.

The second thing is in "Endpoint Policy Manager Application Settings Manager" here now. Here I
already have some settings for "Mozilla Firefox." I want to actually add something for "Google
Chrome." I want to set the Chrome homepage because it has to work for that same page that we're
expecting to be in Chrome.

When I start Chrome, I want to "Open a specific page or set of pages" and I want it to be that
string. See what I did there? I took that last entry that we have selected for you and I'm saying
any time I start off in Google new tab land, then keep the browser open. If I don't, if I have
anything else, then it's going to force open in Internet Explorer. Those are the two moving parts
you need to do that, the "Collection 1" we provide and also creating a rule in Chrome land.

With that in mind, I'll go ahead and now run GP Update ("gpupdate") and just wait for this to
finish. Now remember, this is on the computer side. So I'm saying for all these computers, go ahead
and do this. You could reproduce all this on the user side, but the XML we've provided is coded for
now anyway on the computer side.

Okay, now that that's done, let's go ahead and close this out and let's give it a whirl. We'll start
off in "Google Chrome" land something like this. Let's say we go to "www.cnn.com." There we go. Let
me show you that again because remember "Google Chrome" we force set the page to be a blank tab.
That part is really important, and that's happening through Endpoint Policy Manager Application
Settings Manager. That's the first thing. Then if you try to go to "www.msnbc.com" or something like
that, we're going to go from Chrome back to Internet Explorer.

Okay, let's go to "Mozilla Firefox" land. After I do these base hits, we'll then do the exceptions.
We'll see that the exceptions work the way we expect. You're doing your thing. You decide to go to
"search.yahoo.com." That doesn't work. That goes to Internet Explorer. So we're forcing everything
to Internet Explorer, including Edge.

If you're in Edge land, you can let Edge start. That's fine. You can do whatever you want here. Then
you click on something and what do we get? Look at that. It goes over to Internet Explorer. So
everything is going to Internet Explorer. That was the homepage feed, but you could also type in
"www.pepsi.com" and what happens? It routes you over to Internet Explorer. So we got everything to
work in Internet Explorer just the way we wanted to.

But we did say we wanted to make two exceptions to the list. The first exception we have is let's
say you decide you want to go over to Endpoint Policy Manager. It's just an exception that we set.
If we go to "www.policypak.com," what do we get? That opens up in Chrome. We'll just wait for that
finish here for a second. If you're over here in Internet Explorer and you go to "www.bing.com,"
we're going to say that's going to open up in Firefox land.

So that's really all there is to it. You can use the XML that we've provided here and you can put
your own exceptions in for your timecard app or your other specialty apps. Basically, that's all
there is to it. Just like that, you're guaranteeing everything goes to Internet Explorer except for
these handful of things.

The only trick about it is about Chrome. If you don't have this last entry and also set it in
"Application Settings Manager," then as soon as you open Chrome it automatically just opens up
Internet Explorer, which is probably not what you want.

That's it. I hope this helps you out and you're ready to get started with Endpoint Policy Manager.  
Take care.


