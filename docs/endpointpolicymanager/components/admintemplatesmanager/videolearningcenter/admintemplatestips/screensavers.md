---
title: "The Ultimate Guide to Managing Screensavers"
description: "The Ultimate Guide to Managing Screensavers"
sidebar_position: 10
---
# The Ultimate Guide to Managing Screensavers

Let me guess: You have MOST machines that you want to get standard screensaver settings. But SOME
machines where you want to BYPASS getting the screensaver. This video will blow your mind. Only with
Netwrix Endpoint Policy Manager (formerly PolicyPak) !

<iframe width="560" height="315" src="https://www.youtube.com/embed/zuYhG4hbhb8" title="Endpoint Policy Manager: The Ultimate Guide to Managing Screensavers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager: The Ultimate Guide to Managing Screensavers

Hi. This is Jeremy Moskowitz. This video is the ultimate guide to managing the heck out of
screensavers using Endpoint Policy Manager Admin Templates Manager.

To set the stage, you probably have the scenario that a lot of people have. You want pretty much all
computers to get the exact same screensaver policy except for a handful of computers that you want
to skip getting the screensaver policy.

In my lash-up here, I have this computer: "Win10Computer(Gets)." We want it to get it. We have this
"Win7Computer(skips)." We want it to skip it. We have this "Win7Computer64(Gets)." We want it to get
it. We have this "Win10Computer2(Skips)." We also want to skip it.

To get started with Endpoint Policy Manager Admin Templates Manager and this kind of magic trick I'm
going to show you, the first thing you're going to want to do is to have a group. I've created a
group called "ScreenSaverSkippers." I'm going to put the two computers I want in there.

The first computer I want is "Win7Computer(skips)." I'm going to "Add" that guy. You have to change
this from the "Object Types" to "Computers." I want to add "win7computer" here. Let's make sure I
get the right one. "WIN7COMPUTER," that's the first one. The second one I want is
"Win10Computer2(Skips)": "win10computer2." Let's make sure we get the right one. There we go.

Now because I've done this, at least those two computers need to be rebooted so they know their
group membership. I'm also going to be moving these computers actually over to my "East Sales
Desktops." They could live absolutely anywhere the way I'm going to be demonstrating this, but for
the purposes of this I'm actually going to just move it to "East Sales Desktops."

Because I'm doing that, I'm going to pause the video and reboot each of my computers here and then
come back after all of these computers are rebooted and I have re-logged on. I'm going to go ahead
and pause the video, and I'll come back in just two seconds.

It doesn't matter who we're logging onto at this moment. I'm going to do this for all of the
computers in the domain. You don't have to do this. You could, if you want to, get it for "Sales" or
"East Sales," but what I'm going to do is I'm going to say every computer in the domain is going to
get this particular screensaver password policy.

I'll call this "Endpoint Policy Manager ATM Screen Saver Universal Policy." This will affect every
computer. I'll also enforce it ("Enforced"). I don't need to enforce it but in case I have a block
inheritance somewhere, like for instance if somebody on the "East Sales Desktops" had a "Block
Inheritance," I know that this is going to still work. That's why I'm suggesting that if you decide
to do this at the domain level, to make a block inheritance.

The next thing you're going to do is edit the policy. The component we're after is the
"Administrative Templates Manager" component. Admin Templates Manager lives under both user side and
computer side.

Now hold on a second. If you decide you're going to do this on the user side, that means you're
saying that certain users under situation conditions are going to get this password policy. What
we're able to do only using "Administrative Templates Manager" and not using the stuff that's in the
box, we're going to say when a particular computer is in the group, at that point they can skip the
password policy.

To get started here, we're going to click on "Administrative Templates Manager" on the computer
side. We're going to create two collections. We're going to right click here or add a new collection
here. It doesn't really matter. I'm going to "Add Collection" two times. The first collection I'm
going to call "ScreenSaverGetters(computers)." This is all about computers so
"ScreenSaverGetters(computers)."

Then I'll create another one called ScreenSaverSkippers. I'll "Add/New Collection" called
"ScreenSaverSKIPPERS(Computers)." Now here's the magic. The magic is that we're going to ask, "How
do we know which computers are the screensaver skipper computers?" We're going to use "Item Level
Targeting" on this collection, and we're going to say only for when the "Security Group" matches
"the computer is a member of the security group."

Now you have to click the three dots ("…"). That's super important. Then we're going to take a look
at all the groups we have here. We're looking for "ScreenSaverSkippers." Now we're saying this
second collection is only going to apply when the computer is in the "ScreenSaverSkippers" group.
You'll see what will happen is it will light up as orange.

Endpoint Policy Manager will process things in this order. It will do the first one first, the
second one second. By default, we're saying that everyone is about to get all the settings we're
about to give them. Then if they're in the skippers group, we're going to undo some of those
settings. That's the general gist.

The settings that we want for the everyone group are going to be "Add/New Policy" and let's go ahead
and draft what we want to do here. It's going to be under not "Machine Policy." That's the magic
here. We don't want to be setting things that are typically on the computer side. We want to set
things that are typically on the user side for our computers.That's where Endpoint Policy Manager
Admin Templates Manager and Endpoint Policy Manager client side extension has a leg up over what's
in the box by default. We're able to select "User Policy" and dictate user side stuff for computers.

This stuff lives under "Control Panel/Personalization" here. I have a list of them right in front of
me here. The first thing we want to do is "Enable screen saver." That's the very first one. We're
saying by default, everyone is going to get the screensaver "Enabled." Don't worry. Later we're
going to not enable the screensaver for the skippers people. So we're going to enable the
screensaver here. That's the first thing.

The second thing we're going to do is we're going to go back to "Control Panel/Personalization" and
we're going to do screensaver timeout. Let's do screensaver timeout. I have to click "User Policy."
I have to go to "Control Panel/Personalization" and we're going to do "Screen saver timeout."Double
click that guy and let's set it. We'll keep the defaults. It doesn't really matter. We'll see it
set. So 900 seconds is 15 minutes.

The next thing we're going to do is, of course, password protect the screensaver, so "Add/New
Policy." Again, these are all user side policies ("User Policy") that we're going to try to drive in
to the computer. "Admin Templates/Control Panel/Personalization/Password protect the screen saver,"
there we go. We'll go ahead and say yes to that, select "Enabled" for that guy.

We also want to force a specific screensaver, so we'll "Add/New Policy." We'll go back to the user
side ("User Policy") and we'll dive down into "Control Panel/Personalization/Force specific screen
saver." Now let's pretend you wanted to do the Mystify screensaver. The way you do this is
"%systemroot%system32mystify.scr." Okay, so we have mystify.scr.

Let's set the stage again. Let's go back to "Administrative Templates Manager" and let's make sure
we've got it so far. We have a GPO linked to the whole domain and enforced, so everybody is going to
get this. Everybody is going to get the first thing that we've set here. So the
"ScreenSaverGetters(computers)" are going to get these user side things on the computer side:
"Enable screen saver," "Screen saver timeout," "Password protect the screen saver" and "Force
specific screen saver."

The next part of our journey is for the "ScreenSaverSKIPPERS(Computers)." We have a group that has
computers in it. We have this collection that says only affect the ScreenSaverSkippers. Let's
"Add/Policy" to make these computers skip getting the screensaver.

Again, back on the user side ("User Policy), we're going to go to "Admin Templates/Control
Panel/Personalization" and the first one is "Enable screen saver." But wait a minute. We're not
enabling the screensaver. We're going to disable the screensaver ("Disabled"). Let me finish the
whole thought here, and then you'll see how this works.

I'm going to "Add/New Policy" here. The next one I want is to go to "Admin Templates/Control
Panel/Personalization" and "Password protect the screen saver." We don't want to enable that. We
want to disable that ("Disabled"). So we want to not have that going.

The last thing we want is the screensaver timeout. So we go to "Add/New Policy" and again click on
"User Policy" here, "Admin Templates/Control Panel/Personalization" and "Screen saver timeout." Now
this guy again we're also going to simply disable him ("Disabled").

Let's run through what's going to happen. Remember, this GPO is affecting every computer in the
whole domain. That's cool. We want that. Every computer in the whole domain is going to first get
the "ScreenSaverGetters(computers)" policies, which will "Enable screen saver," do the "Screen saver
timeout," "Password protect the screen saver" and "Force specific screen saver."But the
"ScreenSaverSKIPPERS(Computers)," the ones we've expressly added to the group, are going to have
those exact same policies "Disabled." That's the idea.

Now that those are all set properly, let's see what happens. We'll go through each computer and
we'll see do we get them or do we skip them? On this first computer, we'll go ahead and run GP
Update ("gpupdate"). Okay, let's close this out. Let's go and go back to "Control Panel" here and
let's take a look. If we go to "Change screen saver," this is a computer that's supposed to get it
and it got it. It got all three of the settings we want.

Let's close this out. We'll go over to one of the computers that's supposed to skip it, and I'll go
ahead and run GP Update ("gpupdate"). On this computer, what should happen? It should not get any of
those screensaver policies. That's the point. It's supposed to skip that. So we're pretending that
this computer is a conference computer or a shop floor computer or one of those kinds of things.

Now that that's done, let's take a look. If you right click and go to "Personalize" and go to
"Screen Saver," this should be interesting. Remember, we disabled the policies. The "Screen saver"
can't be changed. Even though this says, "On resume, display logon screen," there is no screensaver.
And "Wait 1 minute" won't actually do anything because there is no screensaver. So ostensibly
because we disabled those settings, we're skipping over getting the screensaver policies.

If we go the next computer, this one is also supposed to skip. Let's run a quick GP Update
("gpupdate") here, get the settings here. Since it's supposed to skip, that means you should see
those same things that we saw in the previous computer that skipped also grayed out and locked down.
Let's see if that's the case here. We'll close this out.

We'll go back to "Control Panel." Wait, we'll go to "Change screen saver." There we go. No "Screen
saver." The checkbox here says, "On resume, display logon screen." It's not checked. It's just a
weird thing that's different between Windows 10 and Windows 7. It still says, "Wait 1 minute," but
it won't kick in any screensaver. So there you go.

Then the last one that is supposed to get it, let's go ahead and run GP Update ("gpupdate") here.
We'll let this finish. Just a second to finish up here. We'll close this out, and we'll go to
"Personalize/Screen Saver." Even though it says "None," "Mystify," "15 minutes," "On resume, display
logon screen."

This give you the firepower you need to set up most computers to get the screensavers except for
crazy conference computers or other computers that you don't want to get the screensaver. You can
only do this magic when you use Endpoint Policy Manager Admin Templates Manager.

The reason why is that Endpoint Policy Manager Admin Templates Manager give you that special ability
to drive in both computer side, which is normal, and user side settings, which is unusual, when the
computer is logging on and in the background with Group Policy. That is the magic that we bring to
the table.I hope this helps you out. This is the ultimate guide to setting your screensavers using
Endpoint Policy Manager.

If you're just getting started with Endpoint Policy Manager and you want to try this out, give us a
buzz and we will get you the bits and you can try it out yourself.

Thanks so much.


