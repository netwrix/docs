---
title: "Use Firefox as default for ALL pages, except some pages"
description: "Use Firefox as default for ALL pages, except some pages"
sidebar_position: 40
---
# Use Firefox as default for ALL pages, except some pages

If you want to force Firefox to be the default browser for EVERYTHING, except some sites, then we
have a special XML file and video to help you out.

<iframe width="560" height="315" src="https://www.youtube.com/embed/dz3vVMsi7x0" title="Endpoint Policy Manager Browser Router: Use Firefox as default for ALL pages, except some pages" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak Browser Router: Use Firefox as default for ALL pages, except some pages

Hi. This is Jeremy Moskowitz. In this video, I'm going to show you how you can route all of your
Internet traffic through Firefox except for some exceptions like Internet Explorer or Chrome.

We have a preconfigured XML file for Netwrix Endpoint Policy Manager (formerly PolicyPak) Browser
Router ("all sites open in FF"). Let me show you how it works. I'm going to "Create a GPO in this
domain, and link it here" over to my computers. For instance, if I want to say "All Web traffic to
FF (except for aaa.com and bbb.com)," we're going to have all our stuff go through Firefox land.

There are a couple of things you need to do to configure this to make this perfect, but it's not
hard. This particular guy is configured for the computer side, so I'm going to click on computer
side, "Browser Router" and drag and drop this little preconfigured knowledge ("all sites open in
FF") that we've put together for you here.

It's easy to understand. What you're doing is you're saying all HTTP and HTTPS traffic goes through
Firefox ("HTTP in FF" and "HTTPS in FF"). That's great. Then our exceptions like "aaa.com" to
"Internet Explorer" and "www.bbb.org" to "Google Chrome," that's easy too.

But then there's a little extra fine detail that we have to deal with which is that when you open up
Internet Explorer or Chrome, what will happen is that it will automatically just shoot over to the
browser of our choice here, which is in this case Firefox. That's a problem.

What we need to do is say that at least one website is valid for Internet Explorer and Chrome and
declare that here and then also declare what that page is as our homepage for Internet Explorer and
Chrome automatically.

For instance, in "Internet Explorer" land, this is a perfectly fine link we can use:
"[http://go.microsoft.com/fwlink/p](http://go.microsoft.com/fwlink/p)" as our default. How do we
configure the default? We're going to use "Application Settings Manager" to do that. Right click,
"New application," "Endpoint Policy Manager for Microsoft Internet Explorer 8 and Later for Windows
7 and Later." So this will go all the way up to Internet Explorer 11.

You're going to set the "Home page" right there just like that. Then you also want to say that you
want to "Start with home page." You don't want to "Start with tabs from last session" or else those
guys are going to automatically jam up your Firefox land. We don't want to do that, so we want to
tell it what the default is and start with this particular "Home page." That's it. That's the first
thing.

Then we also need to do the same thing for Chrome land. My recommendation in Chrome land is that you
take this entry which is just "https://www.google.com." We're saying that's cool. If we're in Chrome
and we go to www.google.com, then it's okay.

I'm going to make the recommendation that you do the same thing for Chrome here and set this as your
homepage here. You do that in Chrome land right here. "Open a specific page or set of pages," just
like that. That's it. That's all there is to it. We'll go ahead and click "OK." We're saying that's
a page that we say is valid. That's all there is to it.

We have the rules in "Browser Router" set up that all traffic goes through Firefox. We have some
exceptions. Those exceptions are the real web pages we want to get to, but then also we need some
exceptions for the default pages that are pretty common in Internet Explorer and Chrome. We have a
couple of those here.

Okay, with that in mind, let's go over to our endpoint. Let me go ahead and close this first. Then
I'll go ahead and run GP Update ("gpupdate /force") and give this a moment to finish. Let's go ahead
and close this out, and we're ready to test it out.

Let's start off in "Internet Explorer" land. We've set the homepage, and that's okay in MSN land.
But let's say we go create a new tab here and we go to "www.cnn.com." What do we want to see happen?
We want it to go over to Firefox because we want all traffic to go over to Firefox land. What if we
are in MSN and we start clicking around? Well, I can't remember if we said use child sites or not.
So we click on something that's not in MSN and what happens? It goes over back to Firefox.

Let's check that out also on Chrome land. If we go to "Google Chrome" right here and we were to go
to some website we haven't traveled to yet, look what we're doing. We're setting the homepage with
Application Settings Manager to "https://www.google.com" first. That's fine. It will stay here.
Everything will be cool, no problem. You can do Google searches like "hello world." That's fine.
Everything on Google is fine. But then when you start clicking around, what do we expect? That's
when it closes and opens up the default browser that we said is Firefox land.

Lastly since the car is in the shop already, let's just see it also work for Edge. In Edge land,
let's see what the homepage is set to. I can't remember what it is. Okay, so this is still MSN. Then
let's go ahead and see what happens if we click on one. This is MSN. I think it will stay here. But
then if we were to try to go to some external website, there we go. That went to Internet Explorer
because we had a route to Internet Explorer, so that's not a good example.

Let's do another one because we did say that was cool to do. That's part of our ruleset. Let's go
back over here, and here we go – that's still MSN, MSN, Bing. How about Bing. What should happen is
it closed it there and it's opening it up inside Firefox land. Again, the only reason it was staying
there is that was still on the MSN website and we said anything in MSN is still cool to exist over
there.

So that's it. That's all there is to it. We've got all the traffic going through the one particular
browser of our choice. This works under most circumstances. If you need to tweak this, you're
welcome to do so. This is just advice for you to use, and I hope this video is helpful in your
scenario.

Thanks so much for watching. If you're looking to get started with Endpoint Policy Manager, just go
ahead and join us for a webinar and you can get started right away.  
Thanks.


