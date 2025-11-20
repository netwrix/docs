---
title: "Take existing GPOs and quickly bring them into PPGPCR (and keep them updated)"
description: "Take existing GPOs and quickly bring them into PPGPCR (and keep them updated)"
sidebar_position: 20
---
# Take existing GPOs and quickly bring them into PPGPCR (and keep them updated)

In PPGPCR you now have a way to take one OU, or multiple OUs and keep your tests updated. This video
shows you how.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Rg40nLHjZ5E" title="PPGPCR: Take existing GPOs and quickly bring them into PPGPCR (and keep them updated)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz, and in this video, I'm going to show you how you can take lots of
different GPOs from across your entire estate here in Active Directory and make them into tests in
Compliance Reporter. You can see here I've got a bunch of GPOs linked to sales and a bunch of GPOs
linked to East Sales. Maybe you want to automatically make them tests inside the Compliance
Reporter. In order to do that, you might think you just right click over here, but it doesn't really
work that way. Under Uncategorized Tests, you'll have to Create a new root folder. You might want to
call these Tests from One OU, something like that. Once you have a folder here, at that point you
can right click, and ah ha, Import tests from OU and link here.

We'll go ahead and grab this. We can grab it from One level, Recursive, or Recursive with preserve
structure. Let's just do One level. I'm going to pick my Sales, East Sales Users. You can see there
are the three tests. There are three GPOs there that I want to convert into tests. I'll just go
ahead and pick those, and there they are, and boom. Sock them right in, and you're off to the races.
We're converting all those right to tests. Then you can see there they are. It's as if we just did
them all by hand.

Let's do another one. Let's go ahead and Create another root folder. Let's do TEST 2. Let's see how
the other ones work. If we were to right click and then Import tests from OU and link here. Let's do
Recursive but without preserving the structure. Let's see what that looks like. If we were to take
the Sales OU, we should get all these guys, Sales, and then also East and West and North if there is
anything there. I don't know if there is or not, but let's go ahead and click on Sales, and those
are all the items that we find all the way across in Sales, including you can see the ones that we
can see down below in East Sales. They're going to just come along for the ride too, so bing, bing,
bing, we're just going to consume all of those just like that. Let's go over the third – you can see
there's Sales without preserving the structure.

Let's do the last one. Let's go ahead and right click and Create another root folder. We'll do TEST
3, and now if – in this one what we want to do is a little bit different. We want to Import tests
and preserve the structure. What's that going to do? Let's go ahead and click on OU Sales, click on
Next here. Ah-ha, see what we're going to do is we're going to create this whole structure for you
all the way preserved all the way throughout. Zip, zip, zip, this'll go ahead and consume all these
GPOs, and now you have them automatically as tests, but wait. This gets better.

Let's pretend for a second – let's just use this first one, just this DPI to 150. You can see here
I'm using a group policy preferences item to set a configuration Control Panel Desktop, LogPixels,
and the value type is 144. Let's go ahead and modify this by hand. Let's go ahead and take this GPO,
and let's Edit the actual contents here. We'll dive down under – I think it's under Preferences and
then Registry. Here we go. Let's go ahead and change this from 90 to – let's go to 088. Now I've
changed the value from 90 to 88, so you can see – we'll actually see some differences here. I'll go
ahead and close that.

Now we'll go back to the Compliance Reporter here. We can right click over the folder and
Synchronize tests with the OU. We'll Synchronize with the linked OU, and then there's some other
features here as well, so you can Sync with the new OU or whatever. We'll just go ahead and
synchronize here. We're looking for Adding tests, Updating existing tests, Deleting tests if they no
longer exist, Deleting tests if they're linked to different OUs and so on. This gives you a whole
wide variety of ways for you to have a round trip method of taking real GPOs and quickly getting
them into your environment. We're going to go ahead and update all three of these because we can see
that they're new. There may not be any changes in these other two, but we're going to update them
anyway, but we are definitely going to update this first one, which is DPI to 150. Zip, zip, zip,
and we're done. Let's go ahead and take a look, and now we can see there we go, 088.

With this in mind, this gives you a whole new way to have real GPOs on-prem doing your thing, and
then when it's time to test for those things, you now have an all-encompassing solution to be able
to round trip take those items and bring them into your test world, and you can go generate your
results, and you're off to the races. Hope this feature helps you out. Looking forward to getting
you started with PolicyPak Group Policy Compliance Reporter real soon. Thanks so much.

