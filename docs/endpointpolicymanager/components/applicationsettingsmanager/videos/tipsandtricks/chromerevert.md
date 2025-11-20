---
title: "Chrome Revert Tips (Pre-CSE 1260)"
description: "Chrome Revert Tips (Pre-CSE 1260)"
sidebar_position: 50
---
# Chrome Revert Tips (Pre-CSE 1260)

Reverting settings using theNetwrix Endpoint Policy Manager (formerly PolicyPak) Chrome Pak is a
little special. Here's the video how-to.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Nn6Tgbwo7xU" title="Endpoint Policy Manager: Chrome Revert Tips (Pre-CSE 1260)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak: Chrome Revert Tips (Pre-CSE 1260)

Hi. This is Jeremy Moskowitz. In this video, I'm going to show you the current state of affairs when
it comes to the strange "un-application" of Chrome settings.  
We have two Chrome Paks. They're ostensibly the same at this point. They started off life a little
different, but they're ostensibly the same. I'm going to demonstrate what happens when if you try to
remove settings. I'm going to show you also how to work around it.

Very often, people will get started with a Chrome Pak. I'm going to just set two arbitrary settings
here and show you what happens. Let's say you want to "Show Home button" and "Always show the
bookmarks bar." If you right click, you'll see that by default – in fact, it's not changeable – it
says it will "Delete this policy setting when it is no longer applied." If you also right click
this, you'll see this setting is the same way. I'm just pointing that out for right now.

When you click "OK" here, let's go ahead and go to our endpoint and log on for the first time here.
Let's go ahead and run "Google Chrome." I will tell you that if you're going to be doing these
tests, one of the thing you might want to do is either through PolicyPak or temporarily at least you
want to not let Google Chrome in the background because if you run GP Update, it won't actually
update the settings.

In fact, that is changeable inside the Pak. I might as well just do it now and get it over with
because it's actually a very good setting to have on there. That's in "Advanced" and then I want to
uncheck "Continue running background apps when Google Chrome is closed."

Okay, what I want to do is show you if I take a look at "Settings" here, those are the two settings.
Let's pretend now you want to back out of one of those settings. Let's say you want to uncheck "Show
Home button." Fine.

You might think that if you go back to the Pak here and simply uncheck the "Show Home button" and
also right click "Always reapply this setting" (in other words, underline means go and no underline
means don't go) so therefore you would think that you're not setting it anymore. Well, with regards
to the Chrome Pak as it sits right now that's not precisely how it works.

Let me just prove a point here. I'll show you that it is not going to take effect the way we expect.
I'll go ahead and close this out and run "Google Chrome." If we take a look at "Settings," you can
see it's still set.

So what does that mean when it says "Delete this policy setting when it is no longer applied"? With
regards to the Chrome Pak, what we're talking about is this will only revert properly when the Group
Policy Object itself no longer applies. When the GPO itself no longer applies, then it will behave
the way you expect. In fact, let's go ahead and just see what happens.

Let's go ahead and run GP Update ("`gpupdate`") here. Okay, we'll close this out. Rerunning "Google
Chrome." Remember, I had two settings checked. Both of those settings had the flag called "Delete
this policy setting when it is no longer applied." If we take a look at the "Settings" now, the
second one got deleted but the first one actually remained. Why is that? Because a couple minutes,
remember, we unchecked that checkbox and also de-underlined it.

Long story short, what you need to do if you need to remove stuff from the Pak items here is – let's
go ahead and relink back into it here – you would have the settings checked that you want. Let's go
ahead and do that. Let's check both of them. You'll see that "Delete this policy setting when it is
no longer applied" is there.

Then what you should do is get all the settings recognized on the endpoint (by running
"`gpupdate`"). Now we're redelivering both of those checkboxes. There they are. Let's say you only
want to get rid of this first one. How do you do that?

Because they're both set right now, the proper thing to do is like this. It's to simply uncheck
"Link Enabled" for the GPO, which will revert all the settings in the Pak. Let's go ahead and see
that (run "`gpupdate`").

Now at this point, we're expecting both of those two settings to peel back. Let's go ahead and see
if that's true…and it is.

If you only want the first one to be unchecked, you go back to the Pak. You recheck "Link Enabled"
for your GPO, and you change the configuration now inside the entry. If we go over to this guy and
we don't want this one to take effect anymore, now we're saying goodbye to that one setting. We're
leaving this setting in place, and we're saying no more to this setting.

The net result here will be when we run GP Update ("`gpupdate`") we'll have the one checkbox we want
and not get the other checkbox we don't want. Let's rerun "Google Chrome" here, and that's exactly
what we wanted.

The point of the story is when it says "Delete this policy setting when it is no longer applied,"
we're talking about the Pak not the particular setting, so the whole Pak has to fall out of scope.
This means you could either make the GPO unlinked, you could move the guy from "Sales" to marketing
– any number of things to make it fall out of scope. That's when the Chrome Pak will revert itself.

That's the state of affairs right now. We know that it needs some improvement, but we're working on
it and it's on our roadmap.

Thanks so very much, and we'll talk to you soon.


