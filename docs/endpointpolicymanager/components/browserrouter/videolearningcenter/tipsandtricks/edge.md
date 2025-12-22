---
title: "Route all sites to Edge (with some exceptions)"
description: "Route all sites to Edge (with some exceptions)"
sidebar_position: 60
---
# Route all sites to Edge (with some exceptions)

Using PP Browser router, you can do a magic trick. Have ALL traffic go thru Edge, except a handful
of websites (called Exceptions.) Here's how to do it.

<iframe width="560" height="315" src="https://www.youtube.com/embed/eWmEQIMItRc" title="PPBR: Route all sites to Edge (with some exceptions)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PPBR: Route all sites to Edge (with some exceptions)

Hi. This is Whitney with Netwrix Endpoint Policy Manager (formerly PolicyPak) Software. In this
video, I'm going to show you how you can route all of your Internet traffic, with a couple of
exceptions, through one particular browser. In this video, I'm going to show you how to do that
through Edge.

What we'll do here is we'll first start by creating a GPO and linking it to my "Sales" OU. Let's
call it "All sites to Edge (with exceptions)." We're going to just "Edit" this. Now this particular
XML that I'm going to use is linked over to the computer side, so we'll start there. We'll go to
"Browser Router." I'm just going to take this XML and just drag and drop. It is that easy.

In this, we'll check this out. This is pretty easy to understand. You can see all HTTP and HTTPS
traffic will go through Edge ("HTTP in Edge" and "HTTPS in Edge"). Then you'll see we have a few
exceptions here. The reason we do this is because we do need to be able to have the other browsers
at least open.

If we have all traffic through Edge, then when you try to open any of the other browsers – Internet
Explorer, Chrome, Firefox, etc. – then you're going to end up with it shooting straight over to
Edge, which is expected but not what we want to have happen immediately upon opening a new browser.
So we see we have a couple of websites that are allowed to open in "Internet Explorer" and a few
that are allowed to open in "Google Chrome."

What we're going to do to be able to have these websites work is we need to create a policy in the
Application Settings Manager that means that "Google Chrome" homepage will be "www.gpanswers.com"
and "Internet Explorer" homepage will be this "go.microsoft.com."

Here's what we're going to do. We're going to copy this. We're going to go over to the "Application
Settings Manager." We're going to right click. We're going to go find out "Endpoint Policy Manager
for Microsoft Internet Explorer 8 and Later for Windows 7 and Later." We're just going to make sure
that we set the homepage to be that link we just copied. "Internet Explorer Main Page" right here.
Make sure we "Start with home page." "OK."

Let's go back and see what we had set for Google: "www.gpanswers.com." Let's go ahead and copy this.
We're going to go do the same thing we just did. We're going to set a new homepage for Chrome here.
We're going to "Open a specific page or set of pages" here. There we go, and we're good there.

Now we have where we can open up Internet Explorer and its homepage will be allowed. The same with
Chrome. Its homepage will be allowed. This is what we have going on here. Now what we need to do is
go test it out. We're going to go over to my endpoint here, and we're just going to run a quick GP
Update ("gpupdate"). We'll give it a moment to get through that. All right, let's close this down.

Now when open up "Google Chrome," if you remember, we decided that we were going to allow
GPAnswers.com to open in Chrome and we also made sure that Chrome's homepage was that GPAnswers.com.
Let's open it up and see if it behaves like we expect it to. There we go. It's opening in Chrome on
"www.gpanswers.com" and it's not immediately shutting down and routing us through to Edge because
this is an exception that's allowed to open in Chrome. However, if we try to go to "Google.com,"
we're going to get shut down and routed right through to Edge just like we thought we would.

Let's close this down. Let's open up "Internet Explorer." That "www.msn.com" homepage that we
anticipated is here. If we click on something inside of here, as long as we're staying in
"www.msn.com," which we are, then we're allowed to stay in Internet Explorer. However, if we try
going to "nbc.com," we're shut down and routed through Edge just like we thought.

That is exactly how we expected. We wanted everything to go through Edge with the few exceptions
that we noted earlier. Those exceptions are just options for you. We've created them for you in
advance in that XML. But you can always tweak these or add to them as you see fit. For example, we
don't have any exceptions for Firefox, so you may want to route it so that all Mozilla traffic can
go through Firefox but everything else goes through Edge as we have here.

That's how that works. If this is interesting to you, if you want to try out Endpoint Policy
Manager, just sign up for a webinar and when it's done we will get you all set up with the bits and
you can get started on a trial of your very own.  
Thanks.


