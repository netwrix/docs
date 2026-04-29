---
title: "Nuke mode, and why users can avoid your GPprefs settings"
description: "Nuke mode, and why users can avoid your GPprefs settings"
sidebar_position: 200
---

# Nuke mode, and why users can avoid your GPprefs settings

GPPreferences does a great job with drive maps, shortcuts and printers. But when it comes to
managing applications themselves, the GPPrefs Registry extension doesn't go far enough. In this
video, you will learn about GPPreferences' **Nuke** mode, as well as what happens when the computer
goes offline, and you expect settings to be maintained.

<iframe width="560" height="315" src="https://www.youtube.com/embed/bhyMjyIxRqg?si=Ux3eF75dKOg0wSgM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### GPPrefs Registry: Nuke mode, and why users can avoid your GPprefs settings video transcript

Hi, everybody. This is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software.
In this video, I'm going to show you some trips and traps about the Group Policy Preferences, what
they can and what they can't do with regards to delivering and un-delivering registry punches.

Instead of using a real application, I'm just going to use good old Control Panel "mouse." It's just
the application I want to use to hang our hat on. It makes things a little easier. Let's pretend
this was a very important application, and in your very important application you needed to set some
very important registry setting, and you wanted to use the Group Policy Preferences to do it.

"Double-click speed" here, let's take a look at "regedit." We go to regedit, and there we go.
"ComputerHKEY_CURRENT_USERControl PanelMouse" "DoubleClickSpeed" is set to "500." If I move the
user's slider to the left and I refresh, you can see that it goes up to "900." That's almost a full
second. If I go to the "Fast" here, that would be "200" or click-click really fast.

Under no circumstances can this slider get to a particular value that I want it to be. Again, we're
using Mouse. We could be talking about anything. Let's pretend that we want to make this value 604.
It's not possible to do it in the slider, but we can use the Group Policy Preferences to do it.

Let's go ahead and go to our management station. These are my "East Sales Users." I'm in the GPMC
here. Let me "Create a GPO in this domain, and Link it here…" and we'll call this "Prefs: Mouse DCS
= 604."

We'll right click over this guy, we'll click on "Edit" and we'll dive down under "User
Configuration/Preferences/Registry/New/Registry Item." We're going to use this machine as our
example. We go to "HKEY_CURRENT_USER/Control Panel/Mouse" and "DoubleClickSpeed" on this machine is
"500." We don't want it be "500," which is the default. We want it to be "604."

While we're here, we'll also set this value up to "Remove this item when it is no longer applied."
We'll talk about what you probably think it means and what it actually does in just a moment. Now
we're setting the value "DoubleClickSpeed" equals "604."

Let's go over to the target machine. We'll close this window. We'll just run "gpupdate" over here.
We'll get the latest, greatest setting. You can see right this moment it's set to "620." Let's see
what happens after Group Policy Preferences applies.

OK, now that that's over, we'll just hit refresh and "604." It did exactly what we want. If the user
does something they shouldn't do, they go back to "mouse," they move it to something they shouldn't
do and then they close it again and they refresh, it's "200."

As you might expect, when you run "gpupdate" again, the value will once again change from the value
that it shouldn't be to the correct value. This is correct. This is exactly what Group Policy
Preferences is supposed to do.

Let's talk about the first thing that's unfortunate. I'm going to disconnect the network cables
here. I'm doing this off-camera. You can't see it, but you will see Windows react to that. I've
disconnected the network cables, and Windows reacts.

Let's go back to "mouse" here. Let's change the setting to something I shouldn't have. I'm naughty
again as a user. I refresh this, and it's now some value it shouldn't be set to. Now remember, the
computer is offline, so what do you think happens when you run "gpupdate"?

You would think that these settings would be somehow cached and maintained, but it turns out they're
not. Because the Group Policy Preferences can't maintain any settings while offline, having Group
Policy run in the background just simply does nothing. Once the setting is delivered, it's never
redelivered when the user is offline because the Group Policy Preferences commands a domain
controller. If it doesn't have that, it won't make it work.

Let me reconnect the network cables, and then we'll go on to the second thing that I want to talk
about. Great, so my network cables are back in. If we now run "gpupdate," we'll see the Group Policy
Preferences do its thing here. It should set "900" back to "604." There we go. That's the correct
Group Policy Preferences behavior.

Now let's take it to the next step. Remember, we also want it so that when this Group Policy is no
longer used or the user changes job roles or however this policy falls out of scope, we want to make
this setting revert back. Well, I'm sorry, but the Group Policy Preferences cannot do that.

By way of example here, we've set it to "604." We've said "Remove the item when it is no longer
applied." Let's see what that really means. Let's uncheck "Link enabled" here, so we'll remove the
Group Policy Object from being in scope. Then let's run "gpupdate" and see what happens.

Now remember, the default value is 500. Remember that. Let's see what happens once Group Policy
Preferences refreshes. What happens if we go over to "DoubleClickSpeed" here and we hit refresh?
Don't blink. Watch this. Three, two, one – don't blink – did you see what happened? What happened
was it nuked the value entirely. It totally obliterated the value entirely. That, my friends, is
where Group Policy Preferences has a big problem.

You might be thinking, "Oh, wow! Does double-click speed actually work still?" Yeah, you can still
double-click on things. If you decide to manipulate this slider again and hit "Apply," well, in fact
this application is smart enough and will write the value.

Again, we're not really talking about Mouse, are we? We're talking about your important application.
If your application yourself you've obliterated the value, will it keep working? I don't know.
That's problem number one.

Did you notice problem numbers two and three? Did you notice that at no time did the preferences
lock out the UI here? Not to mention, the preferences don't lock out the registry punch. If a user
puts in some value that they shouldn't put in here or a script does it or something else malicious,
you are in trouble here.

Again, I'm just a regular user, no admin rights. The regular user – you can try this yourself – can
manipulate stuff under "ComputerHKEY_CURRENT_USERControl PanelMouse" just as they see fit. That is
the big problem with the Group Policy Preferences with regards to application management.

Let's switch gears. Let's talk about PolicyPak would do this for this application. Again, I just
happen to be using Mouse, but you could be doing whatever you want here. PolicyPak ships with over
100 preconfigured applications ready to rock out of the box, things that are really big and
important like Firefox, Flash, Java, Office and a whole bunch of stuff.

Let's keep using Mouse. I just happen to have a Pak that I was noodling on for Mouse particularly
for this demonstration here. Here's my Pak. I'm going to use it for PolicyPak. It's a one file copy.

Let's go and "Create a GPO in this domain, and Link it here…" called "PolicyPak: Mouse DCS = 604
with Lockdown." Now we're switching gears and we're going to do it the PolicyPak way. Again, we're
just doing this for Mouse. You could do this for just about any application.

Under "PolicyPak/Applications/New/Application," there's our "PolicyPak for Mouse Properties." You
can snap in as many applications as you have in your real environment. I'm just going to go to
"Mouse Properties" here, and let's fix all those problems at once.

Let's go to "Double-click speed" and slide that puppy up to "604." While we're here, remember the
Group Policy Preferences has absolutely no way to actually perform UI lockdown, but we do. We're
going to right click over this guys and "Disable corresponding control in target application." We're
going to gray it out so users can't work around it.

While we're here as well, we can also "Perform ACL Lockdown." Remember, you just saw me as the user
manipulate that value to 10,000 – or if it was a script, it manipulated it to 10,000. It shouldn't
do that. We're going to "Perform ACL Lockdown. You'll see me do that as well.

While we're here, we also want to "Revert this policy setting to the default value when it is no
longer applied." You don't want it nuked; you want it applied back to 500 when the setting no longer
applies. We're doing that for all those things, three different things, on this particular setting.

Let's see it rock. We'll go back to our target machine. We'll run "gpupdate" here. We'll see the
PolicyPak setting kick in. We're setting it also to 604. As soon as Group Policy refreshes, I will
refresh the registry. Now I will refresh, and there it is, "604."

Before we do anything else here, let's just go ahead and run "mouse." Let's see if the UI has
changed. Yes, sure enough. You can see here, there's no way for me to click on that. It is really
locked down.

Well, is it really, really locked down? Can a user work around the setting and do things that they
shouldn't do in a naughty, naughty fashion? Well, let's go ahead. Here I am. I'll click on it as a
user and go back to "10,000," and the user cannot write the contents value because they are not
allowed. You can see we've got the "PPAclLockdown" here.

The other thing that we can do is, even if I turn off PolicyPak ACL Lockdown – let me go ahead and
turn that off here – if you choose not to use this setting, we have another superpower waiting for
you to be used, which is the automatic remediation of any setting even when offline.

Just to prove a point here, I'm taking off the PolicyPak ACL Lockdown. Now that it's gone, because
it's not locked down, the user can do things like this, which is probably not what you want. That's
OK.

At this point now, let me go ahead and re-disconnect the network cables. You can see Windows kick
into high gear. Remember, "gpupdate" isn't going to work. When the background refresh kicks in, it
will not function. What does that mean? It means this thing won't refresh.

But we have a secret superpower and weapon up our sleeve, which is the very next time the user runs
that actual application itself, just the very act of running it – let me refresh this – we change it
right back.

Let me say that again. The computer is fully offline. The user has somehow figured out a way to work
around the setting. PolicyPak is always working, even when the computer is offline, guaranteeing
those settings so users are continually refreshed with those settings.

You can either do the full smack down with ACL Lockdown, or you can do the medium smack down by
delivering the setting and consistently reinforcing it whenever the application is actually run.

Let's continue. Let me reconnect the network cables. Again, I'm doing that back off-camera. You can
see Windows kicking back in, and that's great. Now let's go on to the final piece. Again, you saw in
the Group Policy Preferences when the item no longer applied, it would remove or nuke the item when
it was no longer applied. You definitely don't want that.

What we're going to do instead is let's go back over to our GPMC. Then we'll simply right click over
the Group Policy Object and uncheck "Link enabled." Or the guy could move from East to West or any
number of things could happen, but the policy setting is no longer supposed to apply to him. What's
our expectation? We don't want it to be nuked, that's for sure. We also want the PolicyPak stuff to
revoke as well. We no longer want to make this UI locked down.

Let's go ahead and close that. We'll run "gpupdate" here. Let's keep your eye on the ball here for
"DoubleClickSpeed." What we want to see happen is not nuke. That's what Group Policy Preferences
does. When we're using PolicyPak, we want to see it revert back to "500." Did you see it? We revert
back instantly to "500" right there.

Let's just finish up by running "mouse." You can see, the PolicyPak restrictions have been removed,
and we're back to our normal behavior letting users do whatever they want to do on the machine.

I hope this has been illuminating for you. I hope what you got out of this is that the Group Policy
Preferences are awesome. They do a fantastic job for delivering things like drive maps and printers
and shortcuts. I love the preferences. As a former Group Policy MVP, I think they're fantastic, but
they are not perfect. They do have limitations.

To reiterate the limitations, thing number one: again, they can deliver settings, but when they try
to un-deliver settings, they simply nuke the value. Not good. There's no UI lockdown with Group
Policy Preferences. The sliders and checkboxes and all that other stuff are simply accessible.
Lastly, if you're counting on having Group Policy Preferences continue to apply even when offline,
sorry. That's not how it works. PolicyPak can, in fact, fix all of those settings.

If this stuff is important to you, let me give you something to do as a homework assignment here.
What I would suggest a couple of good next steps might be is you might want to check out our
"Windows Security Whitepapers." One of the papers that you might find very interesting is "What most
Group Policy (and Desktop Admins) don't know about application management," which goes over what I
just described in a lot of detail.

If you want to try this out for yourself and you take a look under "Integration" or "Products" and
you see things that you might want to control or ways that we integrate with your existing
technology like "Citrix" or "VMWare," that's great. If you're interested after that, then sign up
for one of our webinars. (Click on "Webinar/Download.") After the webinar is over, you'll be able to
download the bits and try it out for yourself and make sure it's right for you.

With that in mind, thanks so very much for watching, and we'll talk to you soon.


