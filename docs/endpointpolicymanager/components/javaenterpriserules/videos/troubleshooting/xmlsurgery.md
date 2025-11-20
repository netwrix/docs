---
title: "Endpoint Policy Manager Java Rules Manager: XML Surgery"
description: "Endpoint Policy Manager Java Rules Manager: XML Surgery"
sidebar_position: 10
---
# Endpoint Policy Manager Java Rules Manager: XML Surgery

What do you do if you want to tie a specific version of Java to a specific website, but the version
you want isn't in the MMC? It doesn't happen often, but if it does, just a little bit of XML surgery
does the trick.

<iframe width="560" height="315" src="https://www.youtube.com/embed/YMoI_0BR4qg" title="Endpoint Policy Manager Java Rules Manager: XML Surgery" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Whitney with PolicyPak Software. In this video we're going to do just a little bit of
XML surgery to fix a small problem. It's not something that happens very often, but here's what to
do when this situation happens.

Imagine you're using the Java Rules Manager, as I have right here, and you want to set an exact
version match. When you use the dropdown, the version you're looking for isn't there. Right now, for
example, maybe I want to say that java.com is going to get Java Version 8.221. The dropdown, if I
come right here, looks like it's only going up to 8.202.

If you try to set it at 8.202 and just hope for the best, then you're going to get an error message
like this; application blocked by deployment rule set. We see that Java was blocked. We look right
here. We can that Java Version 8.202 is not available or is incompatible.

In this case, it actually doesn't exist, so that's extra not available. Whatever the case, it's not
what you're looking for. If we come over here and open this back up, we could get away with doing
something like latest on machine or latest in family in this case. As of this recording, Java 8.221
is the latest version.

Let's be more specific. We want to tie Java Version 8.221 specifically to java.com. We're going to
have to do just a little bit of hand editing. We've established that we want to tie java.com to Java
8.221. When we try to find that in the dropdown, it's missing. This is actually not really a
problem.

We're saving it now to 8.202, which we know doesn't work, but it's fine. We're going to go ahead and
close this out. We're going to go to the central store, assuming you're using one. We're going to
find that GPO.

In my case, I have a shortcut here, so I can hop over into my central store into the policies
folder. There's a couple of different ways to know which one is the GPO you want to get into and
edit. Right now because that was the latest GPO that I've created, I can go by date modified and
just go with the most recent one. However, if that's not an option for you, if you go to the GPO
itself and look at the details tab, you're going to see that unique ID.

You don't need to know all of this, just kind of look at maybe the first four or five digits and say
B67FB. We can remember that. Let's come back over here and match that up, B67FB. We're in good shape
there.

Now we're going to do delve in here. We're going to open that up. This is a machine side policy, so
we're going to go into the machine folder here, then inside PolicyPak. We see that there's two
folders here. If you see JER, just the J and R, Java rules, that's how you can remember that. Get in
there and here is the actual XML that we want to edit.

I'm going to right-click and choose Edit or you could choose to Open with Notepad. Now we see some
XML here. You can word wrap this if you want to, although I can see what I'm looking for right now.

We are looking for the Java version, and it's going to look something like 8.0.202 or 8.0_202,
something like that. We can look. Here we go. This is the Java version that we were specifically
telling it to run. We see we have that 8.202, which we know doesn't exist, certainly not on the
machine.

We're just going to change that to the version that we want to see, which is 8.221. There we go. We
fixed that. Let's save it. Close everything out.

Now let's hop back over here. Close out all of this. I'm going to run a gpupdate/force just go make
sure we get all of that information, all two characters of it. Now let's go open up Internet
Explorer again.

We're going to check and see which version of Java we're running on java.com. This time instead of
seeing that error message saying that the version didn't exist, we're going to see that we're
running the specific version that we tied it to by editing that XML just a little bit. There we go.
It is working just like we told it to.

Instead of getting that error popup, we tied this to Version 8 Update 221 just like we told it to.
Again, this doesn't come up very often, but if it every does happen for you, this is an easy way to
fix it. I hope this helps you out. Thank you for watching.


