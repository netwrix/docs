---
title: "Manage IE Privacy tab"
description: "Manage IE Privacy tab"
sidebar_position: 60
---
# Manage IE Privacy tab

Netwrix Endpoint Policy Manager (formerly PolicyPak): Manage IE Privacy tab

<iframe width="560" height="315" src="https://www.youtube.com/embed/mBZ1GJTIYjs?si=6b-h5EdOO_c2hPm8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager: Manage IE Privacy tab

Hi. This is Jeremy Moskowitz. In this series of videos, we're learning how to manage Internet
Explorer using PolicyPak Application Manager.

In this short video, we're going to be managing the "Privacy" tab. There are three major things on
the "Privacy" tab. This little slider guy that decides will you accept cookies or not. You can also
dictate which "Sites" you can accept cookies from right here. You can also set the "Pop-up Blocker."
There are three things that you can do here. We're going to configure all three of those using
PolicyPak very quickly.

I'll double click the entry here in PolicyPak. I'll select "Privacy." This slider doesn't actually
do anything here in PolicyPak except it lets you "Disable corresponding control in target
application." That's nice, but you actually set it up here. If you wanted to set "Low," you could
dictate it right there. Now the slider itself will not move up and down, but it does change it to
the right value. You can test that out to make sure I'm not pulling a fast one on you.

The second thing here is the "Sites." Clicking on the "Sites" button doesn't do anything, but here
it is: the "Per Site Privacy." This is what says: "What do you want to deliver into receiving or
blocking cookies?" You can say that "http://www.site1.com" we'll "allow" and "http://www.site2.com"
we'll "block." If it's underlined, that means go.

We've already talked about this in some of our other videos, the idea that there are two modes.
"MODE=REPLACE" says whatever the user already has, we don't care. Just overwrite what they have with
what we've got here. You could also change it to "MODE=MERGE." That's another mode. If you make it
"MODE=MERGE," that says if the user has already established some stuff, then go ahead and leave it
there and add on these settings as well.

The last thing is the "Pop-up Blocker." This is two steps. Step one is you need to "Turn on Pop-up
Blocker." If you don't do this, it won't actually turn it on. Then you click on "Settings" here, and
once again you've got "MODE=REPLACE" or "MODE=MERGE." It's up to you to decide which one you want to
do. You can drive in the exceptions here for Pop-up Blocker: "www.google.com" we're going to "allow"
and if "msdn.microsoft.com" were already there, we would "remove" that. Those are the two keywords
you've got.

We'll go ahead and click "OK," click "OK" again here, and then let's go over to our machines and see
the magic happen. We'll go over to this first machine, which is Windows 7 with Internet Explorer 8.
This machine is Windows 8 with Internet Explorer 11. We'll see it work on both of these machines in
one shot.

Switch back over here, and we'll run Internet Explorer here. We'll go over to "Tools/Internet
Options," go over to "Privacy," and you can see that PolicyPak has delivered. We've disabled the
slider, so users can't even get to that.

If we look at "Sites," however, you can see that we've delivered those sites. You can rip this
button off if you're so inclined as well with PolicyPak. Maybe I'll do that as a final trick before
I say goodbye here. We've delivered the settings in there. For the "Settings" for the "Pop-up
Blocker," you can see we've delivered that setting as well.

That's the first Internet Explorer. If we look at Internet Explorer 11 on Windows 8, we'll see the
exact same thing. If we look at "Privacy" again, it has delivered. Look at "Sites," it has delivered
the right sites. We look at the "Pop-up Blocker," it has done the same thing right there.

Maybe as our final little magic trick, we'll get rid of the "Sites" button and the "Settings" button
so that users can't work around these settings at all. We'll go back over here, double click on this
guy, go back to "Privacy," right click over the button "Sites." If you click on it, it doesn't do
anything, but you can right click and "Disable corresponding control in target application." You can
also right click the "Pop-up Blocker" and "Disable corresponding control in target application" and
the "Settings" button. Now the user can't even access these settings.

Now that we've done that, we'll go ahead and close this out. We'll run "gpupdate" and watch this
take effect. We'll go ahead and run Internet Explorer again. Go to "Tools/Internet Options," back to
"Privacy." "Pop-up Blocker" is set. "Sites" can't be clicked on. You can get rid of these too if you
wanted to. The "Settings" button is also disabled.

That is how you manage the "Privacy" tab using PolicyPak Application Manager.

Thanks so much, and continue on to the next video.


