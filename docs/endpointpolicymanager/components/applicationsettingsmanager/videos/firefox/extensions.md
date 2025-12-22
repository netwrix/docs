---
title: "Force Install Firefox Extensions (from URL or file)."
description: "Force Install Firefox Extensions (from URL or file)."
sidebar_position: 40
---
# Force Install Firefox Extensions (from URL or file)

Your users have a ton of (evil?) extensions in Firefox. How did they get there? Who knows. And now
you have some you want them to have, but don't know how to get rid of the junk they put there. Check
out this video to see how to add or remove Firefox extensions using URLs, Flies, or over HTTPS.

<iframe width="560" height="315" src="https://www.youtube.com/embed/0vyJ6SUSKFs?si=CZ7VuXRkS87eFWsJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager: Force Installing Extensions using Group Policy

Hi. This is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software. In this
video, I'm going to show you the Holy Grail of how to manage the heck out of your Firefox add-ons.

Let's set the stage. I bet you already have this problem. Here's a garden-variety end user. If you
look at any of their "Add-ons," they've already got a bunch of stuff that you don't want them to
have. They could click on the "Add-ons for Firefox," click any old thing. You don't know what it is.
It could be good; it could be bad. They click "Install," and it has been installed.

This is terrible news for you because they're not getting what you want and who knows what the
status of these things are. Maybe they're good, maybe they're evil, maybe they're slowing Firefox
down. In a corporate environment, you just don't want to be in this situation. You also might be in
a situation where you want to ensure that you want to dictate very specific add-ons and extensions,
and I'm going to show you exactly how to do that.

First things first, let me close this out. We'll come back to this in a little bit. What I first
want to do is show you that I've got a Group Policy Object linked over to my "Sales" team called "FF
Demos" or Firefox demos, and I've got an entry called "Mozilla Firefox 23.0" and later. I'm going to
click here on the "Add-Ons: Extensions, Appearance, Plugins and Services" tab.

We actually have another video just on this, which is how to enable and disable specific plugins
that are already installed. This video is two parts. First, I'm going to show you how to stop the
bleeding. That's actually this checkbox. I call this the "stop the bleeding" checkbox. This is
"Disable the installation of Firefox extensions." If you right click and "Lockdown this setting
using the system-wide config file," that stops the bleeding.

We'll go ahead and run GP Update on our endpoint machine here. We'll wait for this to finish. When
this is over, that means end users cannot install their own extensions without you being involved.
Let's make sure that's actually working here.

We'll go back over to "Mozilla Firefox." We'll go over to the "Add-ons Manager" here, and we'll
click on some random thing. It doesn't really matter what it is. Look at that: "Software
installation has been disabled by your system administrator." If you try to install other things,
you are not allowed to do that – and by "you," I mean your end users.

That's part one. That stops the bleeding. Now what if you actually had a really important thing you
wanted them to have? I don't know what this "YouTube Video Player Speed" thing is, but let's say
this was super important for you. You can right click and select "Save Link As." If I select "Save
Link As" here, you can see I can download this. That's one choice, and we will permit you to do
that.

You can also "Copy Link Location." If I were to go back over here in the Group Policy Editor, let's
go back over to "Add-Ons: Extensions, Appearance, Plugins and Services," we have this ability for
you to "Force Install or Remove Add-Ons." We have two modes. We have a mode called "REPLACE" and a
mode called "MERGE."

What these two modes do, REPLACE says I don't care what's already there. Remove all that stuff and
smash on just what I want. For instance, this particular add-on here, we have to trim it so we get
it just to the "xpi." We're saying install this guy with that syntax. I'll show you one more time. I
copied the URL from the Firefox download page. It's pointing right to it: the
"video-player-speed/addon" ".xpi" and I put ", install" there.

I just want to point out you can also put it on a "file" share or copy it locally and deliver it
from there. We have the syntaxes for all that right here. If you have that file locally, it would be
"file://C:/path/to/" whatever the add-on is. If you put in a UNC path, it's
"file://///server/share/" then optionally a folder and then the add-on.

I'm not going to do any of this. I'm going to show you how to deliver it directly through "https"
here. Again, the first thing I'm doing is "MODE=MERGE." "MODE=MERGE" says I don't care what's
already there. Leave their stuff there and add just mine.

Let's start that out and let's take a look. Just to prove I'm not pulling a fast one on you here,
this "YouTube Video Player Speed" thing, if I go to "Add-ons," I don't have that right here. It's
not currently installed. That's not in my list.

If I were to close this out and run GP Update, let's go ahead and wait for this to finish. Now let's
go ahead and run "Mozilla Firefox" here. What's happening is Firefox runs, we force installed it,
that installation required a restart of Firefox and it did it all on the fly and there it is.

Not only that, it didn't remove the items that we said we wanted. We just added it to that list.
Does that make sense? We used MODE=MERGE. Let's do another one where this time we're going to
REPLACE. We don't like anything that the user has, but we're going to put on just this one thing
(whatever it is).

I'm going to right click over it and I'm going to "Copy Link Location." I'm going to go back over
here to PolicyPak, and that's it. We're going to put the hammer down. We don't care what the user
has. We're going to say thanks, but no thanks. We're going to "REPLACE."

We like that YouTube thing. It checked out in our test lab just fine and you like it and everything
is good, so what you're going to do is leave that one. You're going to add another line here. This
is for that Norton thing. I have no idea what this is. We'll go ahead and just say install that
Norton thing and install that YouTube thing and that's it. Remember, "REPLACE" is now saying we
don't care what the user has. Remove all that stuff and then put the hammer down.

Let's go ahead and see what happens now. Just to show you the before and after picture, if I go to
"Add-ons" here, you can see I have all the add-ons that are here. We're now saying specifically
replace everything, keep the YouTube thing and put on that Norton thing. Let's see if that actually
works.

Okay, now that that's done, back to "Mozilla Firefox" and there we go. We saw Firefox launch. We had
a plugin that required a reboot. It did that. There we go. It removed all the items that were
installed by the end user and put on just the ones, exactly the things you said you wanted. That's
pretty amazing.

We have one more cherry on top of the sundae, which is users might not need to get in here at all.
Let's just get them out of the business of being able to get into this page. This is the
"about:addons" page. If we were to go back to the Group Policy Editor here, go back into "Add-Ons:
Extensions, Appearance, Plugins and Services," let us just click here to "Hide about:addons page
UI." There you go.

This other little guy if you want to is not that useful. It will reduce what they have access to in
the UI. But this is my favorite. This actually really puts the hammer down and gives them no access
to that page whatsoever.

So last time, let's run GP Update, wait for this to finish. We'll go ahead and we'll close that out.
Let's see how "Mozilla Firefox" reacts. Remember, we have the items that are installed. We see the
"YouTube" one here. That's the "Norton" one there. If we were to go to the "Add-ons" page, there is
no more add-ons page.

That's a wrap. That gives us the Holy Grail of managing the heck out of your extensions. Let's
review. You might have had users that have already installed tons of extensions. If you want to, you
can use PolicyPak to drive in extensions and add them to the things they already have. That's what
we call our MERGE mode.

On the other hand, if you wanted to, you could go to "MODE=REPLACE" and you could replace those
settings, replace all those xpis, with the ones directly that you dictate. You could do it either
through the Internet or you can serve it up through a file share or, if you copy the file locally,
you can point it there as well. Also in another video, you can see how to manipulate different
add-ons and extensions and enable them or disable them.

This is everything you probably ever need to do with regards to Firefox "Add-Ons: Extensions,
Appearance, Plugins and Services." I hope this helps you out. I'm looking forward to getting you
started real soon. Thanks so much.


