---
title: "Endpoint Policy Manager Start Screen Manager: Add IE links"
description: "Endpoint Policy Manager Start Screen Manager: Add IE links"
sidebar_position: 50
---
# Endpoint Policy Manager Start Screen Manager: Add IE links

Need to add IE links to the Start Menu? Here's the quick and easy way… With Netwrix Endpoint Policy
Manager (formerly PolicyPak)!

<iframe width="560" height="315" src="https://www.youtube.com/embed/TV9XWZRdV80" title="Endpoint Policy Manager Start Screen Manager: Add IE links" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak Start Screen Manager – Add IE links

Hi. This is Jeremy Moskowitz, former Group Policy MVP and Founder of Endpoint Policy Manager
Software. In this video, I'm going to show you how you can use Endpoint Policy Manager to create
Internet Explorer shortcuts in the Windows 10 start screen using Endpoint Policy Manager Start
Screen Manager. Now we have other videos that are intro videos. This is how to create a custom
shortcut.

Here's how to do that. Let's go ahead and "Create a GPO in this domain, and link it here" called
"PPSSM Demo 2." This is for the Start Screen and Taskbar Manager. Again, we have other getting
started videos. This is a little bit more advanced.

The request came in, how do you create Internet Explorer shortcuts? Because if you look at "Start
Screen Manager" and "Taskbar Manager" here and you were to first "Add" a "New Collection," a
collection defines the behavior. There's "Not Configured." "Not Configured" is by default "PARTIAL
(PRESERVE)" which will leave users' groups in place and then let users add their own. "FULL
(REPLACE)" says nuke what they've got and add your own. I'm going to just leave it "Not Configured"
which, again, will mean it will be "PARTIAL (PRESERVE)."

I'm going to "Add" a "New Group" called "My IE Links." In order to do this, it's really quite
simple. You right click, "Add." There's no Internet Explorer characteristic here. You're going to
"Add" a "New Desktop Application Tile" as a "Custom application." All you have to do here is "Select
application" Internet Explorer. I just did a quick test of this, but you do "C:Program Files
(x86)Internet Explorer."

Then when you click on "iexplore," we're going to jam that in as the "Target Application." Here's
the magic fairy dust. You have to put this part in quotes first for "Target Application" and then
put the URL you want second. So say "www.abc.com." I'll go ahead and capture that for later
actually.

You can "Change icon" if you want to, but I'll leave it say here as Internet Explorer. I will change
the icon size and location. I'll call this "ABC Link with IE." I'll create another one. "Add" a "New
Desktop Application Tile," "Custom application." I will once again "Select application" of Internet
Explorer and then put the whole thing in quotes. Then instead of "www.abc.com" I'll do www.cbs.com.

I'll call this "Shortcut Name" "CBS." Oh, I forgot to do that on the first one. Let me go ahead and
do that. I'll fix the first one since I'm thinking about it. This is "CBS." Let's go ahead and fix
that here. That would be "Desktop Application." The "Shortcut Name" should be the name of the
website, so "ABC.com" or whatever want to call the actual link.

Once you've done that and you go over back to your endpoint here, just to show you it's not there,
what I'll do now is run GP Update ("gpupdate"). You can watch this happen in real time, which is
pretty nifty. What we're looking for is we're going to leave the groups in place, add our group.
There we go: "ABC.com" and "CBS." When you click on "ABC.com," it's going to launch ABC. When you
launch "CBS," it's going to launch CBS.

Now it is going to do this in another window. We can't somehow magically merge the windows together.
But that should get you where you need to go. I hope this video helps you out and you're ready to
get started with Endpoint Policy Manager Start Screen Manager real soon.  
Thanks so much.


