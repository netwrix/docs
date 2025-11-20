---
title: "Disable the following about:config, about:addons, pages, Developer Menu, and any Preferences in one click"
description: "Disable the following about:config, about:addons, pages, Developer Menu, and any Preferences in one click"
sidebar_position: 70
---
# Disable the following about:config, about:addons, pages, Developer Menu, and any Preferences in one click

Need to remove about:config, about:addons, and the Australis button? How about entire menu items
inside Fireofx Preferences? Check out this video. It couldn't be easier.

<iframe width="560" height="315" src="https://www.youtube.com/embed/TR_U_baI-o4?si=smWTP10U6LrN65Yg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager: Remove many common UI elements in Firefox with one click

Hi. This is Jeremy Moskowitz. In this video, I'm going to show you how you can use PolicyPak to nuke
lots of UI items right off of Firefox.

Just a standard user, "eastsalesuser1." If your users are anything like most other companies users,
they're pretty naughty. They'll go on the Internet and read how to do things like go to
"about:config." We do not want them here. This is not a good place for them to be. Or for instance,
the "Add-ons" page, not a good place to be. Or the "Developer" menu items, none of this. You don't
want them to be here. That's a really terrible idea.

What about if you do have this "Options" page open here, maybe you want to trim some of these items.
"Content," "Applications" and "Privacy" and so on, these things are just not there for users to mess
with. I'm going to show you all that right here all in one quick video.

Let's go over to our GPMC here, and for all of my "East Sales" I'm going to "Nuke FF elements off
the map." You probably wouldn't want to name it that in production, but that's the name I'm using
right now. What we'll do is go under computer side or user side, "PolicyPak" and dive down under
"Application Settings Manager."

Now PolicyPak ships with over 500 preconfigured Paks. I've only put a couple of them here on my
management station for us to play with. But if you wanted to install them all, you could. This Pak
is called "PolicyPak for Mozilla Firefox 23.0." It's really 23 and later. Once we click in there,
let's go ahead and see what we can do here.

The first thing I want to do is go to "Add-Ons: Extensions, Appearance, Plugins and Services," and I
want to "Hide about:addons page UI." I have other videos about how to deal with enabling or
disabling add-ons and how to "Force Install or Remove Add-Ons." That's a different video for a
different day.

If I go to the "About:Config" page here, how about "Hide about:config page UI"? That's pretty cool.
One of my favorites is the little "Hamburger Menu" in the first place. That's called the "Australis
button." We can select "Hide Australis button (aka ‘Hamburger Menu')."

We could also hide the developer menu but if I hide the Hamburger button, then you won't be able to
see the developer menu so I'm not going to bother doing that. I'm going to go ahead and just nuke
these three items off the map.

While I'm here also, if I go to "About:Preferences" here, let me go ahead and like I said enable
"Hide Search preferences," "Hide Content preferences" and "Hide Application preferences." By the
way, if you want to change the default Firefox search engine, we have a video and a way to do that
also. That's just not this video. I'll go ahead and click "OK" here and I've just now with one click
nuked all of those items right off the map.

I'll go ahead and run GP Update here. I'll wait for this to finish. If you don't want to use Group
Policy and you want to deploy these settings using SCCM or Altiris or your own management utility,
that's great. I just happen to be using Group Policy in this demonstration. Okay, now that that's
done, I'll close this out.

Let's go ahead and rerun "Mozilla Firefox" and let's see what happens. Okay, so first things first,
no Hamburger/Australis button, so now they can't get to those places. But if they knew what they
were doing and they tried to go to "about:config," that is not allowed anymore. How about
"about:addons"? Also, not permitted. We've just nuked all those items off.

Now how do we get back to the "Options" page? Well, let's be a little less hardcore here. I'll go
ahead and take that setting out. I'll go back to "Extras" here and I uncheck this and say don't
apply anymore. We're now removing the directive to prevent people from getting to the Australis
button. Let me go ahead and run GP Update and get that signal. Then I'll show you the final result,
which is what happened inside the About:Preferences page.

We'll go ahead and double click on "Mozilla Firefox" here, and we get the Australis button back. If
I were to go to "Options" here, so now we're in "about:preferences," we've now one click removed the
items that we don't want users to have access to. We have another video that will demonstrate how to
literally get rid of any particular element inside the "about:preferences" also if you're interested
in doing that.

That gives you a lot of horsepower for you to manage and modify and secure the UI, look and feel,
and security settings of Firefox. If you're looking to get started with PolicyPak and the Firefox
Pak, then attend one of our webinars or get in touch and we'll look forward to seeing you on the
inside.

Thanks so much, and we'll talk to you soon.


