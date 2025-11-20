---
title: "Manage Firefox Plug-ins using Endpoint Policy Managerand the Endpoint Policy Manager DesignStudio"
description: "Manage Firefox Plug-ins using Endpoint Policy Managerand the Endpoint Policy Manager DesignStudio"
sidebar_position: 70
---
# Manage Firefox Plug-ins using Endpoint Policy Managerand the Endpoint Policy Manager DesignStudio

Netwrix Endpoint Policy Manager (formerly PolicyPak) can manage your Firefox plugins. And we start
you off with an example Pak. This video shows you how to take this example Pak and make settings for
whatever plugins you want.

<iframe width="560" height="315" src="https://www.youtube.com/embed/fGhbeVQGPqI" title="Endpoint Policy Manager: Manage Firefox Plug-ins Per Website" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Manage Firefox Plugins using Endpoint Policy Manager and the Endpoint Policy Manager DesignStudio Video Transcript

Hi. This is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software. In this
video, I'm going to show you how to use the PolicyPak Design Studio to manage your own Firefox
plug-ins. PolicyPak has the ability to turn off/disable existing plug-ins in Firefox, and I'm going
to show you how to do that.

To get started here, let's take a look at Firefox. If we go to the "Add-ons" tab in Firefox, you can
see I've got a variety pack of plug-ins. As of this recording, PolicyPak can only manage plug-ins.
It cannot manage extensions; it can only manage plug-ins. Coming soon to a theater near you, we will
be doing extensions as well, but right now we can only do plug-ins.

With that in mind, what I'm going to do is I'm going to show you two or three of these guys by
creating a new Pak. This Pak that I'm creating for this video I will call something like the
"Firefox Plugins Example" Pak, and it will be available for download inside the Customer Portal.
That way, you can just keep going if you want to, or you can use this video as a source to create
your own from scratch regardless of what plug-ins you have.

The way I'm going to get started here is I'm going to "Start a new project (Expert Mode)" in the
Design Studio. What I'm going to do next is set the "Project Properties." I'll call this "Mozilla
Firefox Plugins Example." The "Target data type" that we want here is actually the "Mozilla-specific
config file." The default "Data file name" is correct, which is
"%AppData%MozillaFirefoxprofiles.ini."

Then you should put in the "Application name" as well: "Mozilla Firefox." That dialogue box helps us
understand which application because Mozilla actually makes a wide variety of applications, not just
Firefox, but these directions are specific for Firefox.

I'm going to not "Enable predefined Item-Level Targeting" here, which is to say that what we produce
here today should work for all versions of Firefox even really old ones to really new ones. There's
no reason to lock this down such that it will only work for a particular version, so I'm going to
leave it just like this.

The next thing I'm going to do is I'm going to just put a "Check Box" in here. Maybe I'll just do
the "Adobe Acrobat 10.1.0.534." I'll double click here. I'll call this "Check Box" "Adobe Acrobat
10.1 Plugins (Check On for On, Check Off for Off)." There we go. That way, we know what we're doing
here.

Right now, this guy is on. We kind of don't care about the "Default state" or the "Revert state."
That's OK. We'll go ahead and we'll right click. We'll go to the "Configuration Wizard," and we'll
just buzz right through it, so "In a specific config file," which is "Mozilla-specific config file"
here. We'll go ahead and read that. We're reading the Mozilla file.

Now it's saying what's the current state? We're saying "Check On for On, Check Off for Off." The
current state is, in fact, on. This guy, just to prove a point, he's actually on. You would see the
word disabled if it was off, so it's currently on.

Now it's saying go turn it off. Fine. Let's go ahead and turn it off by setting "Never Activate."
You see where it says "disabled" now. Let's just go ahead and close Firefox and really make sure
that thing is really set in the config file and click "Next."

Now we have to look around a little bit and see what we can find here. We're looking for – there we
go. It's a little hard to see, but you can see it says "nppdf," and you can see it's "plugin.state."
All these guys, you're looking for the one that says "plugin.state."

We're going to do this two or three times, so it's really obvious. If you get lost, you're looking
for the changes that happened in Firefox for "plugin.state." You can see that before the capture it
didn't exist, and after the capture it's "0." We'll go ahead and click next.

Now we don't know what the "On" value is. It's currently "undefined," so we're going to try to trap
that as well and figure that out. We're going to say now go and turn it back on. Let's go ahead and
rerun "Mozilla Firefox" here. Now let's go back to "Add-ons/Plugins" and here it is. It's
"disabled," and now we want to make it enabled. Now we're making it re-enabled. We're going to close
out Firefox and really make sure that thing is set in the file and click "Next."

Once again, if you can't find it super-fast, there it is: "plugin.state." You're looking for the one
that changed. Again, if you don't make two changes at once, you'll want to do one at a time. This is
"nppdf." You can see before the capture it was "0," and after the capture it was "1."

If you want to make it unchecked, it's going to set "0"; and if you want to make it checked, it's
going to set "1." There we go, "0" and "1." We'll click "Next." The default state for this guy was
on. That's totally fine. The revert state is on as well. We'll go ahead and click "Finish." That's
it. That's basically how we do it. You can see "plugin.state.nppdf."

Let's do another one just so we've got a couple of examples here. Let me go back to "Add-ons." This
time, I'll do "Java Deployment Toolkit 7.0.510.13." I'm going to create a new "Check Box" here. I'll
move it down here. I'll call this "Java 7.0.510 Plugin (Check On for On, Check Off for Off)" just to
make it super-clear.

We'll right click. We'll go to the "Configuration Wizard." We'll go ahead and say "Next, Next,
Next." The current state of this guy, well, he's on. We're go to check because we're saying that
it's on. Then we're going to turn it off. We're going to go to the – I guess I'm really specifying
the "Java Deployment Toolkit," so I guess I'll make an update to the name here. I'll then say "Never
Activate." It's now "disabled."

I'll close out Firefox here. We're looking for the change. There it is: "plugin.state." You can see
it's "npdeployjava." It was nothing, and now it's "0." Now let's go ahead and try to capture the
"On" value here. We'll go ahead and rerun "Mozilla Firefox." We'll go back to "Add-ons."

Now we want to "Ask to Activate," and it changed from not activated to activated. We'll go ahead and
close out Firefox and click "Next." There we go. Now we're looking for the "plugin.state" guy.
Excellent. There we go. We found it. We'll click "Next, Next, Next, Next." Like I said, let me clean
up the name of that guy because that is pretty specific. If I go to "Add-ons," I get "Java
Deployment Toolkit": "Java Deployment Toolkit."

Let's do one more. Let's do this "Java Platform SE 7 U51 10.51.2.13" guy. Let's do that. If I check
this guy and I call him "Java Platform 7 U 51 (Check On for On, Check Off for Off)," right click
over this guy, "Configuration Wizard," this will be the last one I go through here. "Next, Next,
Next" so it's currently on. You can see it doesn't say disabled, so it must be on ("Check On for
On)."

Now we're going to go and check it off by setting to "Never Activate," so now it's set to
"disabled." Close out Firefox, click "Next" and we're looking for "plugin.state." There it is, and
that's this guy. You can see it had a different value. Now just to be on the safe side, why don't we
recapture "On" because the other ones were "0" and "1." This one started off life as "2." Just to be
on the safe side, we'll go ahead and recapture "On."

Now we'll go ahead and rerun it and turn it back on. We'll go to "Add-ons," and we'll go ahead and
"Always Activate." I think the difference is between "Ask to Activate" and "Always Activate." We'll
go ahead and click that. We'll close that guy out, and I'm pretty sure it's going to change to "1."
No, it's not. It's "2." Alright. Good to know. Good. Alright, well, it worked as we expected, so
there we go.

That's the whole point is that capturing it really helps you know exactly what's going on underneath
the hood. Once you've got your Pak here, I'm going to go ahead and "Save" it. I'll save this as
"Firefox Plugins Example." This will be available inside the Customer Portal for you to download.

What you're going to do next is simply go to "Compilation" and go ahead and compile it ("Save pXML
and Compile"). At this point, out pops the Pak. OK, so the Pak is created. I'm now on my management
station. I've moved the Pak into the central store, and I'm ready to test.

Before I do, let's go back over to Firefox and let's just set the stage here. I am just a standard
user. I'm just a guy called "eastsalesuser1." What I want to do is I want to make sure that this
standard user, if they have this plug-in, we want it to not activate. We want to deactivate it. Or
if they have something that isn't activated, maybe we want them to activate it.

Just to prove a point, I'll close out Firefox and just show you that when you reopen it, it's still
"disabled" or deactivated. These other two guys, we want to deactivate them. That's the lash up
here.

We'll go over to our "East Sales Desktops" here. Firefox and Java Paks are best when deployed on the
computer side. I'm going to "Manage Firefox Plugins." Then I'll right click and click "Edit" here.
I'll dive down under computer side, "PolicyPak/Applications/New/Application" and pick "PolicyPak for
Mozilla Firefox Plugins Example."

Now remember, on my target machine, "Adobe Acrobat" was disabled. We want to enable it. That means
we want to check on for on. When PolicyPak has an underline and a checkmark, that means we're going
to be delivering checkmark. For these other two guys, for the "Java Deployment Toolkit" and the
"Java Platform," maybe we want to uncheck them. We want to deliver uncheck, which is to say check
off for off.

Now at this point, we also have another superpower which is we can right click over these guys and
"Lockdown this setting using the system-wide config file." Maybe I'll do that for both of these
guys. If the user wants to, they can work around the "Adobe Acrobat" plug-in, but we want to make
sure they can't work around the two Java plug-ins so I'm locking those guys down.

I'll go ahead. I'll click "OK" here. I'll go back to my target machine. I'll run "gpupdate," and
we'll wait for Group Policy to refresh. Now that that's done, let's go over to "Mozilla Firefox"
again and see the results. We'll go over to "Add-ons."

Remember, "Adobe Acrobat" was manually disabled by the user. It got popped back to active. The two
Java guys that were active were now set to "disabled." Because we're using system-wide lockdown,
even if a user tries to activate it, it doesn't actually work. It doesn't let them do that.

I hope that gives you what you need in order to manage your plug-ins using Firefox. Thanks so much.
If you have questions about this, do post to the community forums. You can do this in either the
Design Studio section or to the Pre-Configured Paks section. But since we don't know what plug-ins
you have, we're obviously not making a Pak for every plug-in on the planet. That's why we give you
the Design Studio.

Thanks so very much, and we'll talk to you soon. Bye-bye.


