---
title: "Endpoint Policy Manager Browser Router User-Selected Default"
description: "Endpoint Policy Manager Browser Router User-Selected Default"
sidebar_position: 60
---
# Endpoint Policy Manager Browser Router User-Selected Default

Netwrix Endpoint Policy Manager (formerly PolicyPak) Browser Router now lets you give some power
back to your end-users. They can specify their browser of choice, and Endpoint Policy Manager will
let them utilize it. Here's how to set up the feature.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Xk9rJpb98mM" title="Endpoint Policy Manager: Endpoint Policy Manager Browser Router User-Selected Default" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak: Set up a default browser using PolicyPak Application Manager

Hi. This is Jeremy Moskowitz. In this video, I'm going to show you how you can use Browser Router's
new feature, which is User Selectable default browser.

Basically, as you know, Browser Router gives you the ability to say when I'm on this website or this
pattern, open up this particular Web page. Well, we've had this ability called "New Default Browser"
for a while, but it has always been able to just say if we don't have a default route specified,
then always use "Internet Explorer" or "Edge" or "Google Chrome" or "Firefox." Now we have a new
thing called "User Selectable." User Selectable basically says let the user decide what their
default browser is.

The way that this works is pretty simple. Let's go ahead and get "Mozilla Firefox" open for instance
also. The user decides that they want Firefox as their default browser. No problem. They can make
that decision themselves. Inside Firefox, they can click on "Options" and select "Make Default," and
we'll remember that the next time Group Policy is updated.

I tell you this in case you're wondering, "Whoa. I tried it. I logged off, I logged back on, and it
didn't work." You have to change the default browser, you have to run GP Update or just wait
naturally for Group Policy to take effect. So there's a little micro caveat there. Under normal
circumstances if the user makes a change, they just wait a little while and Group Policy will take
effect. So this isn't a big deal.

Once we lock in that knowledge of the user's default browser, at this point now we can do some
tests. We can create a little "Write" file, and we can say if we go to "www.microsoft.com" that has
no route, that's going to use the user's default browser. Let's see if that takes effect. We just
said Firefox is the default browser, and we get Firefox as the default browser.

If we were to, however, go to something that does have a route like "www.google.com" that has a
route to Chrome, let's see what happens there. That should open the Chrome browser. In fact, it
does. We have another route to "www.policypak.com," and that should go to Internet Explorer because
we have a route to that.

If you use User Selectable, that says anything we don't have a route for and the user has made a
choice to decide what their default browser is, then honor that. That's a good new feature for
Endpoint Policy Manager customers. I hope you like it. We'll talk to you soon.


