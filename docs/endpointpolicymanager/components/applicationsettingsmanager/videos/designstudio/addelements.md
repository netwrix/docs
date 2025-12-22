---
title: "Using DesignStudio to add elements from an alternate UI"
description: "Using DesignStudio to add elements from an alternate UI"
sidebar_position: 30
---
# Using DesignStudio to add elements from an alternate UI

Quicky and easily add additional bells and whistles to your project. In this quick demo Jeremy shows
you how to add a radio button element that he captures from a different part of the UI.

<iframe width="560" height="315" src="https://www.youtube.com/embed/GfT_A2kIj0g?si=VNLit56WOOtG_qmu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager: Using DesignStudio to add elements from an alternate UI video transcript

Hi, everyone. This is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software.
In this video, I'm going to show you how to add something quite simple to the UI that's not already
in the UI.

Here's an interesting example. Somebody wrote in and said how do I add the "Foxit Reader"? There's
this idea called "Change Toolbar Mode…," and I just want to have to be able to select "Classic
Toolbar Mode" or "Tabbed Toolbar Mode." I thought this might be a good little demonstration for
everybody.

First thing is that UI probably isn't such a good one to capture, but let's see what happens if we
do anyway. What we're going to do first is create a new "New Tab" here, and we'll "Rename" the tab
as "Toolbar Mode." I have no idea if this is going to capture or not, so let's find out.

If I were to "Capture another tab" here and pick the "Foxit Reader" "Change Toolbar Mode" and click
"Finish," go in, go back, click "OK" and, well, it didn't get the picture of what we wanted, but
that's OK. We did get the radio buttons, so let's go ahead and kill these graphics. We don't really
need the graphics anyway. If we really wanted to, we could put the graphics in, but that's OK. We've
got what we really want, which is "Classic Toolbar Mode" or "Tabbed Toolbar Mode," and that's what
we're really after.

Now all we're going to do – this gets pretty quick – we're just going to right click, go to the
"Configuration Wizard…" and "In the Windows Registry" under "Foxit Software," it is currently setup
in the "Classic Toolbar Mode." We're indicating the current checkbox. Then we'll go to "Tabbed
Toolbar Mode." It says, "Foxit Reader must be restarted for toolbar changes to take effect." That's
"OK" for us.

Let's continue onward. Look at that. We just learned that "Classic Toolbar Mode" is "(0)" and
"Tabbed Toolbar Mode" is "(1)." The default value, we'll make it as the "Classic Toolbar Mode," and
the revert value we'll also leave as "Classic Toolbar Mode."That's it. Now we have this feature that
didn't exist just a couple seconds ago and now does inside the Design Studio.

What we'll do just to make sure it looks nice is that we'll go ahead and "Save XML and Compile" and
we'll "Show test PolicyPak when complete," see how that ends up looking. There we go. There's
toolbar mode. We've got it selectable, and I'm sure this will work perfectly the first time we use
it.

That's it. I hope that gives you instruction for how to add simple UI elements, even the ones that
aren't on the regular UI.

Thanks.


