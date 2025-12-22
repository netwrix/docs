---
title: "Fix Chrome Revert with PP CSE 1260 or later"
description: "Fix Chrome Revert with PP CSE 1260 or later"
sidebar_position: 60
---
# Fix Chrome Revert with PP CSE 1260 or later

If you have trouble reverting your Chrome settings using Netwrix Endpoint Policy Manager (formerly
PolicyPak) Application Manager, in build 1260 or later, there's an easy fix. This video shows you
how.

<iframe width="560" height="315" src="https://www.youtube.com/embed/a3eILisEaBc" title="Endpoint Policy Manager: Fix Chrome Revert with PP CSE 1260 or later" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak: Fix Chrome Revert with PP CSE 1260 or later

Hi. This is Jeremy Moskowitz. In this video, I'm going to show you how you can use PolicyPak Build
1260 to get out of a little sticky jam with the Chrome Pak that we provide.

Here's the setup. The setup is imagine you have a GPO. I've got it here called "Chrome Example
Settings." You can see that it's linked over to our "Sales" OU. That has "East Sales" users and
computers and "West Sales" users and computers in it.

The setting that I've picked here, let me show you what's inside it. The setting that I've got here
is really two settings. I've selected to "Show Home button" and "Always show the bookmarks bar."
You've probably seen this before where we will "Always reapply this setting."

You can see it says, "Delete this policy setting when it is no longer applied." It's true, but the
Chrome Pak will only actually do this when you nuke the Pak or if the person moves from Sales to
Marketing or you move the GPO out of scope. What it won't do is it won't peel back the setting if
you simply uncheck "Always reapply this setting."

Let me show you what this will look like if you go over to an endpoint. If I just go over to this
computer here and run GP Update ("`gpupdate`") here and this other computer here and run GP Update
("`gpupdate`"), a little bit of bad news is that, again, it won't actually peel back those settings
as you might expect. It only does it if you delete the Pak or move the guy from Sales to Marketing
or make the GPO fall out of scope.

If you run "Google Chrome" here, we're not going to see the peel back of that homepage button, which
is what we want. You can see here if we go to Tool/"Settings" here in Chrome, we can see it's still
locked and that's not what we said to do.

You can see that here in this second computer as well. It's exactly the same on both computers. The
only difference is on this first computer, I'm logged on as somebody from East Sales. On this
computer I'm logged on as somebody in West Sales. I just want to show you that we're setting the
stage exactly equally here before I move on to the next step. See? They're both set. Even though I
said I don't want the "Show Home button" anymore, it's still being set.

How do we get out of this using Build 1260 and PolicyPak? Here's the download. Here's a folder
called "PolicyPak ADMX (Troubleshooting)." Here's the "PolicyDefinitions" folder. If you have a
central store, if you don't have a central store, it doesn't really matter. What you're going to do
is put it in the "SYSVOL," domain name, "Policies," "PolicyDefinitions" here.

You might already have the PolicyPak ADMX files. That's fine. Just overwrite what you already have.
That's exactly what I'm going to do here: "Replace the files in the destination." I've now copied
the latest PolicyPak "PolicyDefinitions" folder over to my "PolicyDefinitions" folder.

In doing so, now what I can do – and I'm going to do this demonstration just for my "West Sales
Users" – I'm going to call this "PP Chrome Auto-Fix for Revert." What I'm going to do is right click
and click "Edit" here. I'm going to teach PolicyPak Application Manager to delete certain registry
settings every time it runs.

Under user side, "Policies/Administrative Templates," under "PolicyPak" node, under "Client-Side
Extensions/Application Manager," you want to use "Delete the specified keys before policy
processing."When you enable it ("Enabled"), you can select what you want to drive in here. For
Chrome, it's going to be "SoftwarePoliciesGoogleChrome."

Now there are other Paks that use this. If you're watching this video as directed by me or somebody
else in the technical team, we'll probably give you the string that you need to set here and the
value to make your Pak work as expected.

I'm doing this on the user side because, again, earlier the Pak I had with my "Chrome Example
Settings" was on the user side. We also have the same setting available on the computer side if
you're doing the settings for Chrome on the computer side. You have to marry them up.

Now because "westsalesuser2" is logged on here, let me go ahead and run GP Update ("`gpupdate`").
Remember, I did this little fix just for my West Sales Users. Now I've already said I don't want the
home button to apply anymore. Okay, so let's just run GP Update.

Now with this registry setting that we'll delete the software policies of Google Chrome at every
run, the next time I run "Google Chrome," let's see my result. If I go to "Settings" here, it's
still set. Why is that? Well, probably if you get this, it's because Chrome is actually still
running in the background. I find that to be super frustrating and annoying.

I'm going to "Exit" that out. I'm going to just kill Chrome for this example and run GP Update
("`gpupdate`") again. This should make it go away, and you would have had this no problem if they
logged off and logged back on.

We'll go back to "Chrome" here and there we go. Because Chrome held that open in the background, we
couldn't clear it out. If we now go to "Settings" here, you can see that the "Show Home button" is
reverted back just the way you expect, but you didn't change your mind on the "Always show the
bookmarks bar."

Just to put a fine point on it, if I were to go back to the original policy setting here and uncheck
the "Always apply this setting" – in other words, you've changed your mind – on this first computer,
nothing is going to happen. It doesn't matter if we have Chrome running or not. Running GP Update
("`gpupdate`") on this first computer for my East Sales Users ("eastsalesuser2") nothing is going to
happen. It's not going to work.

It's only going to work for my West Sales Users ("westsalesuser2") because my West Sales Users have
that special policy setting that will delete the Chrome entries at every run and then reapply them
down. Let's go ahead and see what happens now. We'll go ahead and run "Google Chrome" again. We
changed our mind with the bookmarks bar. If we take a look at "Settings" here, you can see it
reverted back out.

That's it. That's the way you can now use Build 1260 and this new special registry entry called
"Delete the specified keys before policy processing."

Again, if you're doing stuff on the computer side – in this example, I did everything on the user
side – but if you're doing stuff on the computer side, we have a corresponding ADMX entry on the
computer side. You would simply put exactly the same thing in there which would be – I'll just show
you one more time – "SoftwarePoliciesGoogleChrome." When you put that in, that's what's going to
delete the settings at every run.

I hope that helps you out and now you can use Chrome with even more confidence.

Thanks so much and talk to you soon.


