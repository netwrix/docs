---
title: "Updating Endpoint Policy Manager Central Store"
description: "Updating Endpoint Policy Manager Central Store"
sidebar_position: 20
---
# Updating Endpoint Policy Manager Central Store

Once you've created your Netwrix Endpoint Policy Manager (formerly PolicyPak) Central Store and
populated it, eventually you'll need to update your Paks. This video shows two different ways to
update your Paks and your GPOs.

<iframe width="560" height="315" src="https://www.youtube.com/embed/q-iVP4eF3jA" title="Endpoint Policy Manager: Updating Endpoint Policy Manager Central Store" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager: Updating Endpoint Policy Manager Central Store video transcript

Hi. This is Whitney with PolicyPak Software. In the last video, we looked at creating and updating
the Group Policy central store and we also looked at creating the PolicyPak central store. In this
video, we're going to talk about how to update your PolicyPak central store.

Just to reiterate, that central store is located right here in "C>Windows>SYSVOL>sysvol,' domain
name, "Policies>PolicyPak." That is the central store. Right now, you can actually see the Paks that
I have in here are really old. Some of them are from 2015 or 2016.

I have some policies that I've created with those Paks in them. When I go over here to "Edit" them,
you're going to be able to see that it was compiled with an older version. We've got it right here:
"Compiled With" "1098" here. Again, you can see the "Extension Version" is clearly older since as of
this recording it's 2018.

What I've done is I've gone to the PolicyPak website and I've downloaded all of the Paks that we
have available on the site. To do the actual updating, there are a couple of different ways I can do
this. I can either update it manually, or I can use the GPO Touch Tool. I'll start with manually,
and then we'll talk about the tool.

I'm going to go over here. I have my central store open already. Then I'm going to go to my "New
Paks" folder where I have "Mozilla Firefox." I'm going to grab that. You can see this was modified
recently. We're going to go ahead and grab that "dll" just like when you created it in the first
place. We'll copy it over. We're going to "Replace the file in the destination," and we can close
this stuff out.

Now we're going to go back there, and we'll see what happens. There we go. Let's come back here and
"Application Settings Manager." You'll notice now this says "Extension Location" "Central Storage
(newer)." This means that there is now a newer DLL than what this was originally created with. If I
double click on this to edit it, it's going to just let me know "This PolicyPak was created by an
obsolete DLL and will be upgraded using a current DLL." We'll tell it "OK," and we can go from
there.

That's one way to do this. It's manual and you have to go in there and change it yourself. We also
have a GPO Touch Tool that I'd like to show you. It installs alongside the admin console MSI when
you install that on your management station. I have it under here under my "Most used." If you don't
see it there, you can also go down to the "PolicyPak" folder and grab the "PolicyPak GPO Touch
Tool."

We have a few options here. I am just going to look at "Upgrade both DLLs and Group Policy Objects."
What that does is it goes through and it gets the new DLLs and replaces the old ones. Then it goes
through and modifies the actual Group Policy Objects that have those DLLs in use.

You can "Upgrade only GPOs" if you've already manually moved the files over. Or if you're in a
situation where the DLL maybe got deleted from the central storage, you can go ahead and "Find &
Repair Orphaned Paks within GPOs." Like if you have a GPO that's using a DLL that got deleted, you
can fix that.

But today, we're just going to look at "Upgrade both DLLs and Group Policy Objects." I'm going to
click "Next." It wants to know, where are the DLLs? Where are the latest, greatest Paks? I'm going
to "Choose Directory." I'm going to go with "New Paks" right there. There we go. It has found here
are the "New Paks." "The following PolicyPak DLLs were found in the directory you have selected."
We're going to "Click ‘Next' to see which of these Paks are newer than what you are using now." So
I'll just click "Next."

It looks like three of them are newer than what I'm currently using. It lets me know what the
"Compiled With (Old)" is and what the "Compiled With (New)" is. These are all the same version. I'm
going to choose "Next." It just went through and updated all of those DLLs in my central storage.

The next thing we're going to do is have it look at my GPOs. It's scanning through those and finding
out which one of those GPOs have PolicyPak Paks in them. It lets me know "The following Group Policy
Objects contain outdated PolicyPaks." So it lets me see that.

I can click "Next" and now when I "Finish" up, we can go back to my console and we can see that,
say, I know Google Earth was one of the ones. So let's "Edit" that and take a look at the
"Application Settings Manager." We come right over here, and we see it was "Compiled With" that same
version we looked at a minute ago, "1167." There we go. If we check out "TeamViewer," we're going to
see that it was also compiled with that same 1167. Let's go check this out. There we go:
"TeamViewer" "Compiled With" "1167."

So we've gone through and we've replaced all of the outdated DLLs and replaced them within the GPOs
as well using that GPO Touch Tool. So either way you want to go about it, manually or with the tool,
it's fine. That's how you update your PolicyPak central store. I hope that helps you out.

Thanks so much.


