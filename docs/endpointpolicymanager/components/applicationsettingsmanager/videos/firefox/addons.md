---
title: "Manage Firefox Add-ons using Group Policy"
description: "Manage Firefox Add-ons using Group Policy"
sidebar_position: 120
---
# Manage Firefox Add-ons using Group Policy

Firefox has four types of Add-ons: Extensions, Appearance, Plugins, and Services. And Netwrix
Endpoint Policy Manager (formerly PolicyPak) can manage (enable or disable) ALL of these types.
Watch this video to finally get a handle on how to manage your Firefox Add-ons using Group Policy or
your own systems management utility.

<iframe width="560" height="315" src="https://www.youtube.com/embed/KhgrQluEzuE?si=hhbrZFWS6WSxRfy4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager: Manage Firefox Add-ons using Group Policy

Hi. This is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software. In this
video, I'm going to show you how to use PolicyPak to manage Firefox add-ons.

In Firefox, there are actually four categories of things that are considered add-ons: "Extensions,"
"Appearance (themes and such like that)," "Plugins" and "Services." PolicyPak can independently
manage by disabling or enabling any of these types of add-ons.

Let's go ahead and take a look at what we have here. You can see for "Extensions" here, I've got
this thing called "Clearly" by "Evernote." In "Appearance," I've got a theme called "Firefox 2."
That's why my Firefox looks so old although it's a very new version of Firefox. Then in "Plugins,"
you can see I've got "Adobe Acrobat" and "Java." I've got "Services" here, and this service is a
"Facebook Share 2" service.

To get started with our journey, let's for instance say we wanted to get rid of things that are in
the "Plugins." Let's say we wanted to kill all Plugins. It turns out we have keywords for all of
these guys: "Extensions," "Appearance," "Plugins" and "Services."

Let's go ahead and "Create a GPO in this domain, and link it here" to our "East Sales Laptops."
We'll call this "Manage Firefox Add-Ons using PolicyPak." We'll right click and click "Edit" here.
What I'm going to do is on the "Computer" side: "PolicyPak/Applications/New/Application." You could
do this per user. I'm just going to do this for the entire series of computers here.

Our Pak is called "PolicyPak for Mozilla Firefox 23.0," which is really Firefox 23 and later. If we
then click on "Add-Ons: Extensions, Appearance, Plugins and Services," you can see we have this
example template for you to go on.

For instance, if you do "\*Appearance" and then say "disable," you could do that. You could also do
"\*Plugins", disable"or "\*Service", disable"or "\*Extensions", disable." We also even support
"\*all", disable" if you want to. That would cover the ground for all of these guys. But just for
now, we'll go ahead and do "\*Appearance" and "\*Service" and we'll leave the other two. So just
affecting appearance and service. We're disabling all the items in there.

We'll go ahead and we'll click "OK" here. Now that directive is locked and loaded in my Group Policy
Object. Again, we're going for "Appearance" and "Services." Let's go ahead and close out Firefox
here. We'll go ahead and open and run "gpupdate."

Now, PolicyPak runs when Group Policy runs or through your own systems management software. If you
are logging on for the first time or getting a new VDI session or running a new terminal services
session or changing job roles, anything like that, Group Policy is going to kick in and make this
take effect.

I'll close this out. I'll double click and run "Mozilla Firefox" here. Now let's go over to
"Add-ons," and you can see that the service that was a Facebook service is now completely gone and
disabled. If we look at "Appearance," that's also gone, so we're back to our more modern theme. If
we take a look at "Extensions" and "Plugins," you can see that those guys are still available for us
to us, which is exactly what we expect.

Now, that being said, you might also want to prevent the installation of additional add-ons. I want
to show you how to do that before I go into some advanced topics. Let's say you Googled for
"facebook purity," which is a Firefox Add-On here, and you don't want the user to be able to "Add to
Firefox." That's the goal. Let's see how you would do that very quickly using PolicyPak. Let me
close out Firefox first and show you what that looks like here.

Just double click back in the pak, click on "Add-Ons" and check this checkbox: "Disable the
installation of Firefox extensions." Now, this one requires that it must be done on the computer
side and also you must "Lockdown the setting using the system-wide config file." This will dictate
that users cannot work around this setting and therefore will enforce the value.

You can also "Hide Firefox UI for installing extensions." Let me show you where that is too before I
click go on this thing, just so you can see a before and after picture here. If I click on "Add-Ons"
here, we're talking about this: "Search all add-ons" and some of the functions that are in here
we're about to obliterate with this second checkbox here.

Let me show you how that works. Just click that second checkbox. You don't have to right click or do
anything fancy here. You do, like I said, on this one. "Disable the installation of Firefox
extensions," this must be right clicked and locked down using the system-wide config file.

We'll go ahead and click "OK" here, and let's see Firefox react to these changes here. We'll run
"gpupdate." We'll go ahead and close this out and rerun "Mozilla Firefox" here. Now let's take a
look at the second checkbox first. If we go to "Add-Ons," you can see that the search bar is not
there. Some of the options are removed, making it somewhat harder for users to be naughty.

Then if we look again for "fb purity" (that's just a garden-variety extension here), we'll pick the
same Web page. We'll try to click "Add to Firefox." "Software installation has been disabled by your
system administrator," so now we're preventing add-ons from even occurring.

Let's switch gears and go to our final topic, which is how to enable or disable very specific
add-ons. If you look at your "Add-Ons" here like maybe, for instance, let's pick this "Java(TM)
Platform SE 8 11.0.2.99." If you wanted to leave "Plugins" enabled, or any of these categories, but
very specifically disable one guy or disable the whole category and enable one guy, how would you do
that? It is an advanced procedure, and that's why I'm covering it last

The first thing you do is, inside Firefox, you click on the category you're interested in. In this
example, I'm using "Plugins." You then hit F12 for developer tools. Down here is a little place for
you to paste some stuff in. What is it that you're going to paste in? You're going to paste in some
code that we give you in the documentation for this pak. Again, you'll find it in our portal. I'm
going to copy it here off camera and try to paste it in.

When you try to paste it in, actually you get a warning that says that you must type the words
"allow pasting," so let's do that first: "allow pasting." Then I'm going to right click and "Paste"
in the code that we're going to give you. It's in the documentation. You just cut and paste it
because it's a file that you can read, and then click "Enter."

When you do, what this is does is that for this category, for "Plugins," we're enumerating the IDs.
Some IDs are in GUID form, and other IDs are in friendly form. If we look, for instance,
"Extensions" here, when you click on the category and then paste that code in, that is what's going
to enumerate the extensions that perform the magic.For instance, "readable@evernote.com." You can
see our "PolicyPak Extension" that we're using to do our own magic here.

If we go back to "Plugins" here and we enumerate all the values here, if we go to "Java(TM) Platform
SE 8" if we want to disable just this one guy, we'll "Copy" the GUID. Actually, we need the brackets
as well. We'll copy the GUID. You just don't need the quotes. Copy that guy.

Go back to the GPO. Go back in. Go to "Add-Ons." Let's say we want to take that particular extension
", disable." Let's click "OK" here. Now, let's go back to Firefox. We'll close out Firefox here.
We've got three "Plugins" as it sits right now.

We'll then run "GPUpdate," get the directive from PolicyPak and watch it perform the work.We'll go
ahead and we'll close this out. Check out "Mozilla Firefox" here. We'll go to "Add-Ons," and you can
see we've dictated very specifically to disable that particular plugin.

Let's reverse this. In fact, let's say we want to disable all things but we want to enable just
"Clearly" or just the other guy that we had. We can do that very quickly. Let's go ahead and go back
here to Firefox. Again, this is some advanced stuff here.

Let's say we want to go to "\*all", disable." Since they're all the disabled, let's in fact decide
we want to "enable" this Java guy that we had a moment ago disabled. So we're disabling everything,
and then we're enabling just this one plugin.

If we go back to Firefox here, we'll run "gpupdate" and get the latest, greatest settings. Close
this out. Go ahead and check out "Mozilla Firefox" this time. There we go. Firefox is starting up.

Go to "Add-Ons" and you can see that we've disabled everything, all the possible plugins except for
the one plugin that we want to be valid.

Just to show you that when you run it again, you won't see any flashing or anything weird. We do
have to have that flash to disable some of those internal plugins. There you go. You can see that
the second time, it's very clean and you are in control now.

I hope this gives you some insight about how to manage Firefox plugins using PolicyPak. Again, all
this is excruciatingly documented in our using the Firefox Pak guide that we have in the PolicyPak
portal as a customer or as someone who is trialing out.

Thank you very much for watching. I look forward to getting you started real soon.

Thanks so much. Bye-bye.


