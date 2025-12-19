---
title: "Manage IE Programs Tab"
description: "Manage IE Programs Tab"
sidebar_position: 70
---
# Manage IE Programs Tab

Netwrix Endpoint Policy Manager (formerly PolicyPak): Manage IE Programs Tab

<iframe width="560" height="315" src="https://www.youtube.com/embed/RI-hqYOAIKY?si=R72mqLIzuF6VusAy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager: Manage IE Programs Tab

Hi. This is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software. In this
little series of videos, we're going over how to manage Internet Explorer with PolicyPak Application
Manager. In this video in particular, we're going to deal with "Programs."

This is Internet Explorer 11, therefore it has this special little extra drop-down of "Choose how
you open links," like open "Always in Internet Explorer" – the metro version or whatever that's
called nowadays – or "Always in Internet Explorer on the desktop," or "let Internet Explorer
decide." We're going to set it so that it's "Always in Internet Explorer on the desktop." We also
want to "Open Internet Explorer tiles on the desktop." I'll set those up.

But then more importantly are these "Manage add-ons." I know that you've probably got a bunch of
these add-ons, and you want to make it so that these add-ons are disabled. For instance, you might
have "Java" or "Alexa" or "Shockwave," and you want to get those puppies to be not enabled but
automatically disabled. I'm going to show you how to do that.

Let's do one thing at a time. Let's go ahead and set this up and configure it the way we want to.
Instead of "Let Internet Explorer decide," let's go ahead and make it so that it opens up "Always in
Internet Explorer on the desktop" and "Open Internet Explorer tiles on the desktop."

Here's our Group Policy entry with PolicyPak Application Manager. We'll click on "Programs." Instead
of "Let Internet Explorer decide," we will select "Always in Internet Explorer on the desktop."
While we're here, we're going to right click over and "Disable corresponding control in target
application" so users can't work around it. We're forcing them to use the "right" version of
Internet Explorer. We want to also "Open Internet Explorer tiles on the desktop." We'll also lock
that down with "Disable corresponding control in target application."

We're setting this setting up, and let's go ahead and see if that takes effect. We'll run "gpupdate"
here. Let that finish and then run Internet Explorer. Now if we go to "Internet options,"
"Programs," there we go. We've delivered the setting, configured it and locked it down so users
can't work around it.

Let's take a look at "Manage add-ons" now. Let's say you've got "Shockwave" or "Alexa" or "Flash" or
"Java" or anything, and you want to make sure that if it's installed that it's actually disabled.
Let's take "Shockwave" by way of example. The way you do this is you double click it. You've got to
get its "Class ID," but you can't copy and paste it here. You have to click "Copy" first and go to
"Notepad" or something and paste it in.

You're going to take the "Class ID" and then you're going to go over to your Group Policy Object
with PolicyPak and under "Programs," "Manage add-ons" this is where you're going to copy in the GUID
and select it for, say, "disable." The keywords are "disable" or "enable." I'm just going to
"disable" this first one.

Maybe I will also go back and take this plug-in, "Java Plug-in SSV Helper," and double click it. I
want to take the "Class ID," so I'm selecting "Copy," going to "Notepad," pasting it, taking this
"Class ID" and going back over here and setting it up to "disable." So I'm dictating those in here.

By the way, you could also set up different "Search Providers." If you wanted to add "Google" and
then also specify "Google," you could certainly do that. I'm here already; I might as well do it.
We're disabling two different toolbars and extensions and setting the search provider to Google
right here in one shot.

We'll go back to our Internet Explorer. We'll see again that we haven't run GPUpdate, so these two
guys are still "Enabled." If I were to close this out and run "gpupdate" and just wait a moment,
let's go ahead and run IE now. Go back to "Internet options," and under "Programs," "Manage add-ons"
look at that right there. You can see we've disabled "Shockwave" and we've disabled this "Java"
plug-in. It's just as easy as that. If you change your mind later, all you need to do is know the
Class ID and set it to "Enabled."

But maybe while you're here, you also want to make it so that users can't even get to this "Manage
add-ons." With PolicyPak, it's super easy. Let's just go back over to "Programs," right click over
"Manage add-ons" and "Disable corresponding control in target application." PolicyPak is going to
deliver the setting such that the user can't even get to the button at all. We're ripping the knob
off, basically.

Now that that's finished, rerun IE. Go to "Internet options" here. Go back over to "Programs," and
now PolicyPak is delivering the setting underneath the hood and there's no way for a user to
actually manage those add-ons.

If you like what you see and you're ready to get started, just give us a buzz and we will get you
started here. Or if you are already started and you have a question, you can post in the forums or
ask support.

Thanks so much, and continue on to watching the next video.


