---
title: "Endpoint Policy Manager File Associations Manager: Use our preconfigured advice"
description: "Endpoint Policy Manager File Associations Manager: Use our preconfigured advice"
sidebar_position: 50
---
# Endpoint Policy Manager File Associations Manager: Use our preconfigured advice

Endpoint Policy Manager File Associations Manager comes with some preconfigure advice. It's super
easy to use. Here's the how to video, to associate Adobe Reader, Writer and other applications in
Windows 10.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Pukkx08jYPw" title="Endpoint Policy Manager File Associations Manager: Use our preconfigured advice" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager File Associations Manager: Use our preconfigured advice

Hi. This is Jeremy Moskowitz. In previous videos, you saw me associate things like PDF to Acrobat
Reader, but it turns out there's actually more than meets the eye there. In fact, there are a bunch
of things that Acrobat Reader needs in order to get as efficient as possible with regards to when
people send different file types around. We've preconfigured some advice for you. Let me show you
how to get, download and use our preconfigured advice.

What you can do is log into the "Endpoint Policy Manager Portal" and do what's called "Download
Advice XMLs." It's actually a big download because it has a bunch of things in it. The thing you're
after is what's called the "Endpoint Policy Manager File Associations Manager XMLs." Here are some
of them. These are the ones we're starting off with as of this video.

The idea is that we have "Acrobat," "DC," "Classic," "Continuous," "Adobe Reader 11" and so on.
Here's the deal: it's very simple to use. You simply have "Endpoint Policy Manager File Associations
Manager" up and running here inside you're Group Policy Object. You're going to click on "Import
Collection," and then I have this hanging out on the "Desktop" over here. Then you're going to pick
the thing you want. For instance, I have Acrobat Reader 11 on my endpoint, so I'm going to go ahead
and pick "Adobe Reader 11" right there.

When you do this, you see we've got a little collection. Inside the collection are all the proper
associations you need, not just "pdf" but also all sorts of unusual things that you might not have
even known you needed to associate. It's all right there.

What if you also have Acrobat Reader DC? What are you going to do? Very simple. You just click on
"Import Collection" and pick the one you want, "Reader DC (Classic)," and there you go. But how do
you make it so that these things don't collide into each other? That's what the little orange is
about. That's item-level targeting.

If we click on this, you'll see we have preconfigured item-level targeting into it. You can click on
"Collection Level Targeting," and you can see we're looking for Acrobat Reader 11 either in "x86" or
not x86. The point is that Acrobat Reader 11 exists here, and that means you have Acrobat Reader 11.

If we look at this one, and we can look it a different way by clicking on "Edit Collection" or
"Change Item Level Targeting" here, if you look at it, you can see that we're looking for Acrobat
Reader DC which is 2015 in this location. In other words, you can't have both, and if you have
whichever one, we're going to detect it and put it in the right place.

With that in mind, I'm going to go ahead and just leave these two in place and do their thing. Then
I'm just going to run GP Update ("gpupdate"). It will autodetect which collection is the right one
based item-level targeting, perform the associations and the next time we log on we're going to see
this PDF get to the right icon and launch the right application.

Okay, let's go ahead and "Sign out." We'll log back on, and there we go. In fact, let's see all the
associations that it made. If we were to go to here and type in "file" for "Choose a default app for
each type of file," this takes a second so we'll just give it a moment here.  
Now what we're looking to do is find all those items. These are the DOT extensions, and we're
looking for all the Acrobat ones. We're going to go all the way down to P for PDF by way of example.
There we go. There's ".pdf" and ".pdx" and all sorts of other unusual things that have to be done.

If you wanted to, you could certainly go one-by-one and take a look to see if we actually did the
work. We're looking for ".fdf," whatever that is. We can go back and here we go, ".fdf" for "Adobe
Acrobat Forms Document."

So we've done all the hard work for you. We've got the preconfigured advice, and in this way you
know you've got it exactly right the first time. No brain power involved. I hope that helps you out.

If you're looking to get started with Endpoint Policy Manager File Associations Manager, join us for
a webinar, we'll hand over the bits and you can get started right away.

Thanks so much.


