---
title: "Firefox Remove Specific Elements from about:preferences panel"
description: "Firefox Remove Specific Elements from about:preferences panel"
sidebar_position: 80
---
# Firefox Remove Specific Elements from about:preferences panel

More power than ever before; now you can individually remove specific UI elements from Firefox in
the about:preferences panel. Fine tune exactly what users can see and do (and not see and not do.)

<iframe width="560" height="315" src="https://www.youtube.com/embed/hyMjihq_tcg?si=5AqfenglfR7bVGn9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager: Firefox Remove Specific Elements from about:preferences panel

Hi. This is Jeremy Moskowitz, and in this video I'm going to show you how you can remove particular
element items right off the "about:preferences" panel inside Firefox.

I'm going to show you where this lives in PolicyPak-land first. The idea is that we have a Group
Policy Object. It's linked over to my "Sales" team. It's called "FF Demos" (Firefox demos). Under
"PolicyPak/Application Settings Manager," I have an entry here for "Mozilla Firefox 23.0." It says
23, but it's for of course 23 and later.

We have a tab called "About:Preferences." Here on the left, we actually have a video on this already
where you can just with one click remove a bunch of things, including the "About:Preferences" tab.
But we're not going to do that here.

What we want to do here is remove individual elements. For instance, if you go back here to your
endpoint, I'm just randomly going to pick one. Let's say this "Play DRM content," how do you know
what that element is?

You can go into developer tools, which is SHIFT+CTRL+I, and you can click this little mouse selector
guy and it will turn on this little red highlight. You can see there's a "checkbox id." It's called
"playDRMContent." It has to be spelled exactly right, so I want to type "playDRMContent." I'm
putting a comma there because I'm going to put another element there in a second. So
"playDRMContent," is the first element.

Then the second thing, maybe I'll go to "Security" and I want to get rid of "Use a master password."
I'll go ahead and click the little selector guy here. "Use a master password," you can see the
"checkbox id" down there says "useMasterPassword." So "playDRMContent, useMasterPassword," that's
it. This is a comma delineated list.

When you're done, you just click "OK." That's all there is to it. You've locked and loaded. Let me
go back over to my end machine here. I'll run GP Update and I'll wait for it to finish. Now if
you're not a Group Policy shop and you want to use SCCM or you want to use PolicyPak Cloud or you
want to use your own software deployment tool to get the message that is PolicyPak out there, you
can do that. But in this video, I'm just using Group Policy because it's easiest.

I'll just go ahead and double click "Mozilla Firefox" here. Let's see the result. Here's the same
page. I have it preopening. There's "Security." The Master Password is gone. If you click on
"Content," which is the other guy, "DRM content" is also nuked right off the map.

This gives you incredible flexibility to specifically target elements inside the "about:preferences"
panel. It gives you kind of a middle ground. If you want to, again, we also have the ability to just
completely get rid of this thing called the Australis button or the "hamburger menu." You can
totally nuke off the map and also nuke the "about:preferences" panel too. But if you wanted to get
very fine-grained control over which elements you wanted to rip off, this is how you would do that
using PolicyPak.

Okay, that's it for now. I hope this helps you out. If you're looking to get started with a trial,
give us a buzz or start coming to our webinar. See you then. Thanks. Bye-bye.


