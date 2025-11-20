---
title: "Understanding and fixing Endpoint Policy Manager DLL Orphans"
description: "Understanding and fixing Endpoint Policy Manager DLL Orphans"
sidebar_position: 50
---
# Understanding and fixing Endpoint Policy Manager DLL Orphans

If a DLL that supports a GPO is removed, you need a way to discover and quickly fix it. The Netwrix
Endpoint Policy Manager (formerly PolicyPak) GPOTouch utility has a function called Find & Repair
Orphaned Paks within GPOs. Here's how it works.

<iframe width="560" height="315" src="https://www.youtube.com/embed/zBlHNLLB7oo" title="Endpoint Policy Manager: Understanding and fixing Endpoint Policy Manager DLL Orphans" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak: Understanding and fixing PolicyPak DLL Orphans video transcript

Hi, this is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software. In this
video, we're going to talk about a phenomenon called PolicyPak orphans.

Let me show you how an orphan can get created. Let's say you've got a Pak that you're using. I'm
going to just use this unusual one for Mouse. I'm going to go ahead and copy it into my "PolicyPak
Central Store" here. Now here it is hanging out. I've copied in the Pak into the Central Store, and
I'm ready to use it.

Let me go ahead and create a new Group Policy Object. I'll call it "AAA." It doesn't really matter
for the purposes of this talk. I'll go ahead and create a new definition based upon the "PolicyPak
for Mouse Properties." It doesn't really matter what settings I make in here. I'll change that guy.
I'll "Disable corresponding control in target application" for him and do all sorts of things.

You can see that it's hanging out right now in the "Central Storage." What happens if I were to go
into the "PolicyPak Central Store" itself and remove the Pak definition from the Central Store and
then try to re-edit that Pak? When you go to "Edit…" the Pak, you've now created an orphan situation
where it says, "DLL not found."

Now if you actually knew where it was, if you happened to remember where it was, you can if you want
to manually "Reconnect PolicyPak DLL…." This is perfectly fine. It will look in your central and
local store for that file. You look, and none of these look like Mouse. You can do something you
shouldn't do which is kind of like jam the square peg in the round hole. You could say this mouse
properties is really"adobe-reader," which it isn't, so don't do that.

What you need to do is you need to figure out a way to quickly find all the Paks you have and ensure
that it's automatically updated. Well, good news! We have a tool for that to make it super easy.
I'll go ahead and close this out.

Remember, my Pak is really hiding here under "Mouse Settings." What I'm going to do is we've got a
utility called the "PolicyPakGPO Touch Utility." I've got some other videos on how to update all of
your Group Policy Objects all in one shot if you've got a lot to update, but we're going to talk
about "Find & Repair Orphaned Paks within GPOs." This is the last setting here.

When I click "Next," it's going to look for that condition in the Group Policy Objects. It's going
through looking for orphans that are already there. There it is. The "AAA"Group Policy Object is
missing "Mouse Properties." You can see I also have it twice. I have the condition two times and a
third time with WinZip.

If I click "Next" here, I can then "Choose Directory" that has "My Paks." This can either be the
Paks that we deliver or a Pak that you've created. We'll click "OK" here, and you can see the Mouse
Pak is there. It's going to touch all of the GPOs. It says, "The selected paks will be copied
to""Central Store" or "Local Storage." Might as well put it in the "Central Store" if you've got
one.

Click on "Next" and then at this point it's going to find all the GPOs that have that orphaned
condition, rescan and ask you if you would like to update them, thus fixing the condition. There we
go. We're done. It's actually saying that it's finished: "All of the repaired orphans are already
up-to-date." Let's go ahead and see if that's actually true.

We'll go back, take a look at the "AAA"Group Policy Object, go to "PolicyPak/Applications" and that
orphaned condition is now updated with the latest, greatest "Mouse Properties" DLL. Now you can edit
it (click on "Properties…") just like that, and all of your settings that you made are all there.

I hope this helps understand the condition of orphans. If you ever need some help, we're here for
you.

Thanks so much.


