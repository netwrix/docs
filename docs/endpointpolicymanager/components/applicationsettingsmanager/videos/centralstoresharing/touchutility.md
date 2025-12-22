---
title: "GPOTouch Utility"
description: "GPOTouch Utility"
sidebar_position: 70
---
# GPOTouch Utility

Updating your Pak DLLs and GPOs to a newer version manually can be a pain in the neck. So we created
this utility to automatically update your GPOs with Netwrix Endpoint Policy Manager (formerly
PolicyPak) data to the latest versions. It installs alongside DesignStudio.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ggYBVfzniro" title="Endpoint Policy Manager GPO Touch Utility" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak: GPOTouch Utility video transcript

Hi, this is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software. In this
video, I'm going to talk to you about the new PolicyPak GPO Touch Utility.

Let me explain what the GPO Touch Utility does. It's really only for PolicyPak customers. Here's the
problem. Let's say you've got some Group Policy Objects that are using some older version of a Pak
that you've already got in place.

In this GPO, I've got "FileZilla" and it's compiled with "493," but 493 isn't the latest version. As
of this recording, the latest version is 507, and it's probably later by the time you'll watch this.
If I go over to this particular Group Policy Object, I'll see that this one has three PolicyPaks in
there and these are all version "504."

The trick is, of course, let's say you've got your "Preconfigured PolicyPaks – 507" and you have to
get them to certain places. They may exist in the "PolicyPak Central Store." You might have put them
there. This could be a variety of different versions that you have. You could also have them locally
under "`C:Program FilesPolicyPakExtensions`." We don't recommend that you keep them locally, but
it's possible that you have them here. You've got three places that you need to update, and updating
all these places manually has been a pain in the neck. We're going to make that problem go away.

We've got this program for you now called the "PolicyPakGPO Touch Utility."What it's going to do is
you've got two paths. Let's go over the first path first. This says, "Upgrade both DLLs and Group
Policy Objects." What we're going to do is we're going to look for all the older PolicyPak DLL files
that you have, either in the program files or the central store.

We're going to update those DLLs from your latest, greatest version and then search for the Group
Policy Objects that actually contain your older Paks and then update those Group Policy Objects for
the latest settings that you have in your Paks.

Alternatively if you want to, you can just say I've already manually copied where I want to. I just
want to "Upgrade only GPOs." But I think most people will want to do both steps, so that's what this
does here.

Let's go ahead and click "Next" and see how it works. First thing first, "Choose Directory…" that
has your latest, greatest PolicyPaks. If you're downloading the latest version from us, we'll
provided it in a preconfigured folder just like this.

I'm going to go ahead and select that guy right there, "Preconfigured PolicyPaks – 507," as of right
now. You can see it traverses the directory and finds all the PolicyPaks in there ready to go.
That's step one. Step two is then it now looks through all of the places that PolicyPaks are stored,
either in the central store or locally stored.

We show you the older version and the newer version. So we show the "Compiled With (Old)" version
number and what you're about to upgrade it to, the "Compiled With (New)" version number. If for some
reason you want to use an old version – I can't imagine why you'd want to do this; we don't
recommend you do this – you can unselect a particular one and click "Next."

Now that we've done that, we've now updated all the files in the central store and local store.
Let's go ahead and take a look, and you'll see that all of them are now uniformly updated – except
for this one that I said I didn't want – to now so that these are all now coming automatically from
the latest, greatest directory that you specified.

That's great. That's step number one, and we do that again for both the central store and also the
local store. You can see it has all been updated to today's date and it's all ready to go. That's
half the battle, just copying those files in the right place. You don't have to worry about did I
get the right file.

The "Next" thing we're going to do is we're going to update the actual Group Policy Objects. What
we're doing here is we're going through every Group Policy Object and seeing does this GPO have
PolicyPak data in it. If the answer is yes, we're going to show you all the GPOs that have PolicyPak
data.

Here we are. We give you the name of each of the Group Policy Objects. These are all the GPOs I have
which have PolicyPak stuff in them. You can see, I showed you this guy here that has three different
Paks in the same GPO and a bunch of the other ones. The point of the story is that you can see how
some of them have really old versions. Some are using "493." Some are using "504." Some are using
"505," but the latest version as of this one is "507."

What we're going to do is we're going to click "Next," and it's going to just blast on through and
update all of your Group Policy Objects with the latest, greatest data provided the project name
matches. It's not about the DLL name; it's about the project name. We match on project name. Now if
there's a conflict between version numbers, say 507 and another one that's also using 507, we then
do a tiebreaker on date, but we don't have any of those here. That's it. We're all done.

If we go back to our Group Policy Object here and click "Edit…" on both of these two examples we got
started with, when we dive down under ""PolicyPak/Applications," what was an older version, 504, is
now updated automatically to "507." We didn't have to go in and manually touch these Group Policy
Objects. We just used the PolicyPak GPO Touch Utility, and you can see right there we've updated all
the Group Policy Objects to the latest version using that utility.

I hope that helps. I know it helps me out a lot when I help customers, and I hope it will help you
out too.

Thanks so very much.


