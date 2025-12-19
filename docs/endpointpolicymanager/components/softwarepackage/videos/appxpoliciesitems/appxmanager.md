---
title: "Endpoint Policy Manager Software Package Manager: AppX Manager"
description: "Endpoint Policy Manager Software Package Manager: AppX Manager"
sidebar_position: 10
---

# Endpoint Policy Manager Software Package Manager: AppX Manager

Want to nuke Candy Crush and other pre-installed Windows 10 apps? And would you like to nicely
install Windows Store apps? You've got it with Netwrix Endpoint Policy Manager (formerly PolicyPak)
Software Package Manager and our AppX Manager function.

<iframe width="560" height="315" src="https://www.youtube.com/embed/NT07ngb0aJM" title="Endpoint Policy Manager Software Package Manager: AppX Manager" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz. In this video we're going to talk about adding and removing packages
from the Microsoft Store, also known as AppX packages. You know the drill. Your users think you
don't know about these games, their Soda Crush, their Candy Crush, their Friends Crush. Yeah, don't
worry, users. We know all about this stuff.

The problem is they shouldn't have this stuff. They also probably shouldn't have stuff that is dumb,
preinstalled, and they don't use. There are apps that you do want to install. We're going to conquer
all this using Endpoint Policy Manager Software Manager and our AppX function.

What are we going to do? For all of our e-sales users, we can say Manage Our Windows Store and AppX.
We can right click Edit here. Then we'll dive down under user side under Endpoint Policy Manager.
We're going to find the Apps and Patch Management, then Software Package Manager. Endpoint Policy
Manager has a lot of features, but this is just for Software Package Manager.

Click Add New Windows Store AppX Policy. The first thing, let's go ahead and do this one by one.
Let's Crush Candy Crush Soda. How do we do that? Let's go to Remove here. Let's say when the Name
Matches Wildcard \*Soda\*. Let's go ahead and click OK.

Then we'll go and let's just see that this works. We'll go over here and run GP Update. Let's watch
it in real time. Here are three apps. We said let's just find Soda and Crush Soda. Boom, Soda is
crushed.

You know what? I want to say goodbye to all these things. I want to say goodbye to everything from
this manufacturer. What am I going to do? Well, we're going to use a little utility that we have
that is called the Endpoint Policy Manager Helper utility here.

I'll go to File Explorer, and I will go to my Extras. Let's find our Endpoint Policy Manager Helper
utility here. I'm going to go ahead and run the Endpoint Policy Manager Software Package Manager
Helper. I'm going to find all the stuff that's on this box. I want to make a note of it.

I'm going to take all the things that are on this box here. Look at all this stuff. You can see all
the AppX packages. Let me go ahead and check All. You can see I've got all the other Candy Crush.
Look, there are the publishers, my evil publishers.

I'm going to save this over there on my Management Station, which is //dc2016/share/kill-uwp-2
because I already did this once before today. Let's go ahead and finish that up. What we'll do is
we'll go over back to our Management Station. Right click Add New Windows Store AppX Policy.

This time we want to Kill Everything By KING, which is the name of that manufacturer. We'll go over
to Remove Package. We'll go into import that file, so kill-uwp. Let's go ahead and find – there it
is. There's our publisher, Candy Crush and all of their friends and everything.

Let's just say nuke everything by the publisher. Let's just go ahead and remove everything by that
publisher, which is that string right there. Go ahead and click OK. Let's just go ahead and see that
that works.

Go back over here and run GP Update. We'll watch it happen in real time, secret games IT doesn't
know about, poof, gone. Now that we've got that, we can also remove the dumb applications that we
don't use.

Let's go ahead and pick one more like Duolingo. This is one that was installed by default as part of
Windows. Maybe you don't want that, so let's go ahead and remove that package. We'll go ahead and
Import again that list that we had earlier.

Here is Duolingo. We'll click on that guy. We can match it by Name. We can match it by Publisher. We
can do by either or both. It doesn't really matter or you can even just – even if you don't know,
you just do this, \*duolingo\*. That works too. You don't even have to import it if you don't want
to.

Let's just go ahead and nuke Duolingo, and we'll run GP Update here. Look how fast that does its
thing, bang, gone, awesome. All right, now let's go ahead and do the install.

How do you do installs? You need to know the names of what you want in the store. For instance, if I
wanted to install Slack as an application here, what we'll do is we'll go over to Slack, but not
install it. What we'll is we'll go to Share and we will find the link.

Now that we have the link here, we're ready to go back to Endpoint Policy Manager land, Add a New
Windows Store AppX Policy. Let's say Install Slack. We'll go ahead and install the package here. It
takes a second. We're going to validate that this thing is still true. Give it a second to catch up.

Go ahead and click OK. Let's do one more. Let's do Power BI. Let's go back to the store. We'll get
Power BI Desktop App.

We don't want to install it. What do we want to do? We just want to Share it, get the copy of the
link. Let's go ahead and install our other important apps. Install Power BI. Put the link in there
and click OK. We're killing a bunch of stuff and adding a bunch of stuff.

Let's go ahead and see it all work in real time. We'll run GP Update and watch the magic trick here.
There comes Slack and here comes Power BI Desktop. Just like that, you're off to the races. That's
it.

Check out our other videos if you like Endpoint Policy Manager Package Manager and everything we
have to offer. Thanks very much for watching. We'll talk to you soon.


