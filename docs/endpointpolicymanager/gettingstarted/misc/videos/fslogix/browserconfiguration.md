---
title: "Endpoint Policy Manager + FSLogix: Setting browser configuration based upon which browser you actually have."
description: "Endpoint Policy Manager + FSLogix: Setting browser configuration based upon which browser you actually have."
sidebar_position: 60
---

# Endpoint Policy Manager + FSLogix: Setting browser configuration based upon which browser you actually have.

FSLogix can hide/reveal applications, like browsers. Netwrix Endpoint Policy Manager (formerly
PolicyPak) can actually SET the settings, like homepage and security settings INSIDE your browsers
and KEEP them secure. See how Endpoint Policy Manager + FSLogix can work together.

<iframe width="560" height="315" src="https://www.youtube.com/embed/cgOtzgvnSlc" title="Endpoint Policy Manager + FSLogix: Setting browser configuration based upon which browser you actually have." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak + FSLogix: Setting browser configuration based upon which browser you actually have.

In my previous two videos of PolicyPak and FSLogix better together, you saw me set the default
browser based upon what browser I have on the machine by being exposed to it through FSLogix. For
instance, when I'm exposing Firefox set that as the default browser, and when I expose Chrome set
that as the default browser. You also saw me set up some routes opening up the right browser in the
right website based upon criteria.

This video is a little bit different. In this video, I'm going to use "Application Settings
Manager," part of PolicyPak, to deliver application settings themselves, for instance the browser
homepage and also some security settings.

Let me show you what my Firefox looks like right now just as an example. I have no "Home page" set.
If I go to "Privacy & Security," the default is to "Remember logins and passwords for websites."
Terrible idea because if somebody just opens up the laptop and gets to use this machine, that's not
good. They can just log on to any website that you've saved the password on. Not a good idea. So
we're going to set both of those things immediately. We'll also do the same thing for Chrome.

It's easy enough to do. We're just going to create a new settings Pak for the application. PolicyPak
has 500 preconfigured Paks ready to work for applications you already know and love. I only have a
handful of them snapped in here, but we have a huge battery of them and you just snap them in.

Here's the one for "PolicyPak for Mozilla Firefox 23.0." I'll go ahead and double click it here. The
first thing I'm going to set is my "Home Page." I'm going to set it to "www.cbs.com," a television
station. Then I'm going to go over to "Security" and I'm going to uncheck "Remember passwords for
sites" because it is currently checked. We don't want it checked anymore. I'll go ahead and click
"OK" and it's locked and loaded.

I'll then go and create a new settings Pak for "PolicyPak for Google Chrome 31," and I'll do
something very similar. What I'll do is I'll set the "Home page" here to another TV station,
"www.tbs.com." I want to "Use New Tab Page as homepage." Actually, I can "Check to disable
auto-update Google Chrome" if I want to as well.But then under security settings ("Advanced"), I
want to uncheck "Offer to save passwords I enter on the web." So I'm delivering two things here in
Chrome. It's as simple as that. I'm done.

Just to show you, I'm going to log off here. I'll go ahead and "Sign out" here. Now I'll go ahead
and log back on. I just want to show you how fast this is. Now that we're logged on, let's go ahead
and run "`Mozilla Firefox`." Before, we had no homepage set. Now Firefox will get the homepage that
we expect. If I were to go over to Tools, "Options" here in Firefox land, you can see it's set to
"www.cbs.com."If I were to go to "Privacy & Security," we've unchecked "Remember logins and
passwords for websites."

Now here's the extra special sauce. Let's say you were a super naughty user and you click that
checkbox and you go over to the "Home page" and you set this up as "www.abc.com." Oh, you're so
naughty. You should not do this Mister User. There's no save button here. You just close it and
that's it.

The thing about PolicyPak is we're always working even if the computer goes offline. So the very
next time a user goes to rerun that application, PolicyPak is always working, setting the homepage
the way you expect and also any of your security settings. If we go back to "Privacy & Security,"
we've unchecked that checkbox.

Let's go ahead and "Sign out" here and we'll go ahead and log back in as "eastsalesuser1." Remember,
EastSalesUser1 because of FSLogix is only showing the Chrome browser. Now that we're logged on as
EastSalesUser1, let's see what happens when we run "`Google Chrome`."

We get "www.tbs.com" as the homepage. If we were to try to be naughty and work around this, you can
see that it's locked down right there. "This setting is enforced by your administrator." It can't be
worked around, which is great. The other setting I set, let's see if we can find it pretty easily.
"Passwords and forms," "Offer to save your web passwords," and it's off just the way we would
expect.

Just like that, PolicyPak is enforcing your settings based upon the browser that you have on the
machine because of FSLogix. I hope you like this better together story. If you're looking to get
started soon, just fill out the form and we'll be in touch and we can get started right away.  
Thanks so much.

