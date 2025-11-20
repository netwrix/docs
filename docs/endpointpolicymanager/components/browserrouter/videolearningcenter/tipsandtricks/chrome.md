---
title: "Route all sites to Chrome, with some exceptions"
description: "Route all sites to Chrome, with some exceptions"
sidebar_position: 50
---
# Route all sites to Chrome, with some exceptions

Using PP Browser router, you can do a magic trick. Have ALL traffic go thru Chrome, except a handful
of websites (called Exceptions.) Here's how to do it.

<iframe width="560" height="315" src="https://www.youtube.com/embed/8sBeL3s2lyI" title="PPBR: Route all sites to Chrome, with some exceptions" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PPBR: Route all sites to Chrome, with some exceptions

Hi. This is Whitney with Netwrix Endpoint Policy Manager (formerly PolicyPak) software. In this
video, I'm going to talk to you about how you can route all your Internet traffic, with a couple of
exceptions, to one particular browser of your choice. In this case, I'm going to show you how to do
that with Chrome.

We're going to use a piece of advice here in the form of an XML file to do that. Let me show you how
we'll do that. We'll start with "Create a GPO in this domain, and link it here." We'll call it "All
Sites open in Chrome (with exceptions)." All right, there it is.

Now let's go ahead and "Edit" that. This particular piece of advice, an XML, is linked over to the
computer side, so we'll start there. We're going to go down to the "Browser Router" here. We're just
going to drag and drop this bad boy right into here, and we have a "Collection." Let's see what's in
there.

All right, this is actually pretty easy to understand. You see there's your "HTTP" and "HTTPS"
traffic in "Google Chrome." You see we have made a few exceptions for some "Internet Explorer"
options: "msn," "go.microsoft," "about:Tabs" and "policypak.com." Those are all available to use in
"Internet Explorer," which is to say it won't shut down and go into Chrome. It will stay in
Explorer. The same with "Firefox" here. We're going to allow "www.gpanswers.com" to open in
"Firefox" and to stay open in "Firefox."

Now we have to do a little bit of configuration to really get rolling on this. We need to go to the
"Application Settings Manager" and make sure that the homepage of "Internet Explorer" and of
"Firefox" is one of these exceptions that's available to it.

Because if "Internet Explorer" tries to open in Bing.com as a homepage, it's going to close it down
and open it back up in "Google Chrome" because Bing isn't one of those exceptions. The same if
"Firefox" tries to open in a Mozilla homepage, then it's going to close and open up in "Google
Chrome" again and not be able to get us to [www.gpanswers.com](https://www.gpanswers.com).

What we're going to do is copy and paste this homepage right here. Then we're going to go to the
"Application Settings Manager" and we're going to use this "Application Settings Manager" on
"Endpoint Policy Manager for Microsoft Internet Explorer 8 and Later for Windows 7 and Later" and
use this to force set that homepage that we want to see.We'll edit that, that main page. Make sure
that we "Start with home page." We've done that.

Let's go check on "Firefox." We're going to use "www.gpanswers.com." Let's copy that. Let's go make
sure that's our home page for Firefox. There we go. We're going to say "Show my home page." The
"Home Page" we want is that "www.gpanswers.com," and we're good to go there. Now we've got that set
up.

So we've said that the homepage in "Mozilla Firefox" is going to be that GPAnswers.com. We've said
that the homepage on "Microsoft Internet Explorer" will be the Microsoft website. We dragged and
dropped that XML which created these exceptions and this route here. Now all we need to do is go to
our endpoint and test it out.

Let's just do a quick GP Update ("gpupdate"). Give it a second to get through that. All right, let's
close this out. Now let's start by opening "Internet Explorer" here. It's going to open that
Microsoft homepage that we were hoping for. Yes, there we go.

Now if we scroll down and we click on any of these links, we stay in "www.msn.com" which is one of
the exceptions that's allowed to stay in Internet Explorer. So we're here, and that's what we
expect. But if we try to go to "google.com," it shuts us down and opens us back up in Chrome just
like we expected it to.

Let's close Chrome. Let's open up "Mozilla Firefox." It should give us the GPAnswers.com homepage.
There it is. It sure did, "www.gpanswers.com" is loading right now. You can clearly see that it's
not shutting us down and throwing us back into Chrome. Let's try going to "nbc.com." We close down,
and it's going to pop back up in Chrome just like we thought.

As you saw, we had most of our traffic driven through Chrome, but we did have a few exceptions here
and there. Just so you know, the advice we've given you here is just that. It's advice. You can feel
free to go into here and tweak it, add, change, remove, do whatever you want. But this is just a
baseline for you to start with.

If this sounds interesting to you, if you're interested in checking out Endpoint Policy Manager,
then sign up for a webinar. Then when it's done, we'll hand over the bits and you can get well on
your way to a free trial.

Thanks so much.


