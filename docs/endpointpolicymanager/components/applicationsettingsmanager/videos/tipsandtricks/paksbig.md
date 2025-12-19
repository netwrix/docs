---
title: "Endpoint Policy Manager App Settings Manager: Finding items in big Paks"
description: "Endpoint Policy Manager App Settings Manager: Finding items in big Paks"
sidebar_position: 100
---
# Endpoint Policy Manager App Settings Manager: Finding items in big Paks

Here's a workaround for the lack of a SEARCH feature in PP Application Manager.

<iframe width="560" height="315" src="https://www.youtube.com/embed/T5rI_kg6qPU" title="Endpoint Policy Manager App Settings Manager: Finding items in big Paks" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi. This is Jeremy Moskowitz. In this video, I'm going to show you how you can work around a little
annoyance in PolicyPak which is how to find items in PolicyPak Application Manager.

If you have any Group Policy Objects, like this one I'm creating for PolicyPak Application Manager,
you'll know that sometimes when your screen is only so large you can only get to some of the items,
which is a little bit frustrating. But even more than that, when you're hanging out in "PolicyPak"
"Application Settings Manager" land sometimes finding the thing you're interested in is a little.

So if you were to look at "PolicyPak for Google Chrome," for instance, and you were to look for
add-ons or something like that, when you double click in here it's going to bring up the UI. There
are all these tabs of all these things, and there's no searchable way to look for things you might
want to find. Here's a really long one that's like that as well.

So, for instance, if you wanted to find an item in here, how would you do that? I'm going to show
you how you would do this. What you can do is use the PolicyPak Design Studio. I know this is a
little cumbersome, but this is the way that I do it when people ask me, "Is there a way to do this
thing in PolicyPak land?"

If I go to "PolicyPak," "PolicyPak Design Studio" here, I'm then going to open up a project file. I
already have the "Google Chrome" one ready to go. So I'll select "Load a recent project" and click
"Finish" here. Oh, I guess not. That's the wrong one. Let me go ahead and select "Load a project
from XML file" and let me open it up.

Okay, so I have all the Paks already downloaded here. This is the same exact download you also have.
If you were to go to the "Google Chrome" folder to find the "Google Chrome" Pak, and you wanted to
find all the stuff around, say, printers.

Here you are, this is the actual source for the Pak. What you do is just hit CTRL+F right here and
you can look for things that have the word "printer" in the name. "Show notifications when new
printers are detected on the network," where is that?

Well, that is all the way down on this tab here. You can see there it is under "Google Cloud Print"
and this is the "Advanced" tab. So on the "Advanced" tab under "Google Cloud Print" you would find
"Show notifications when new printers are detected on the network."

Let's see if that's where it is in the Pak. If we were to go back to the GPO here and double click
on this guy and click on "Advanced," there it is. So in this way you can find the settings that you
want even though there's no real find dialogue.

So, again, the Design Studio is your friend. I don't recommend that you just willy-nilly make
changes to the Paks. If you do find something that you would like, let us know about it and we'll
generally try to make those updates for you. If you kind of go off the grid and do your own thing,
that's fine but then the Pak not something that we would know what you're trying to do.

Well, anyway, this is just to help you out to let you know how to find things even though there's no
search capability in Application Settings Manager. Hope this video helps you out.

Thanks very much and talk to you soon.


