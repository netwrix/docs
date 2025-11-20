---
title: "Deploy Real Group Policy using SCCM or Other Management System!"
description: "Deploy Real Group Policy using SCCM or Other Management System!"
sidebar_position: 20
---

# Deploy Real Group Policy using SCCM or Other Management System!

Do you have endpoints that you'd love to manage using REAL Group Policy, but want to deploy it using
something else? Never fear, Netwrix Endpoint Policy Manager (formerly PolicyPak) is here to save the
day by allowing you to deploy Admin Templates, Preferences, and Security Settings to your endpoints
by using SCCM, KACE, Altiris, or whatever desktop management system you're already in love with!

<iframe width="560" height="315" src="https://www.youtube.com/embed/xwEdISFBM6Q" title="Deploy Real Group Policy using SCCM or Other Management System!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Deploy Real Group Policy using SCCM or Other Management System

Hi, this is Whitney with PolicyPak Software. In this video, we're going to learn how to use
PolicyPak magic to take real Group Policy and Preferences and Security Settings and then be able to
deploy them using not Group Policy. So if you're using SCCM or KACE or some other systems management
that you know and love, you can absolutely do that using PolicyPak magic.

To start off with, I've created a GPO that I'm just calling "GP Settings." I'm going to "Edit" this.
The first thing I want to do is work with some admin templates because I really want to kill off the
Control Panel in my endpoints. So I'm going to come over here and click on the "PolicyPak" node, and
I'm going to go to "Administrative Templates Manager." I'm going to choose to "ADD NEW POLICY" here.

It's actually already highlighted over "Control Panel," so I'm going to go and choose "Prohibit
access to Control Panel and PC settings." Select "Enabled" for that, just like you would if you were
doing regular Group Policy here. I'm going to tell it "OK." Let's "Close" this down.

Now we've created that directive, but we're going to need to export it so we can then eventually
wrap it up into an MSI along with some other settings and deploy that to our machines. So I'm going
to right click here. I'm going to "Export as XML." We're just going to call it "No Control Panel"
and "Save" that. There we go. It just dropped it right on the desktop there.

The next things we're going to do, the Group Policy Preferences and the Security Settings, are a
little bit different. Instead of creating stuff within the "PolicyPak" node, I've done a little
prepro on this and I have created "Shortcuts" over on the computer side. It's just a little
"PolicyPak" shortcut. It's going to take you to "www.policypak.com" and the icon is a little
butterfly.

I've already created that in "Preferences." What PolicyPak now allows me to do is when I go to
"Preferences Manager," I'm not actually creating anything in the "Preferences Manager." I'm just
using PolicyPak to export the settings that I already have up here in the standard "Preferences"
area.

So I'm going to "SHOW WIZARD." This reminds you also that "You do not create new items from this
Wizard, but instead must use existing Group Policy Preferences items within this GPO." I'll click
"Next." It found my shortcut. I do want to do that, so I'll click "Next" again.

I can change the name of it if I want to, and I can also add item-level targeting if I want to do
that as well. I'm actually just going to leave everything as it is and click "Next." Let's give it a
location. I'm just going to drop it right on the "Desktop" again, and there we go. It should pop up
right there.

The last thing we're going to do is the Security Settings. I've actually already created a security
setting where I renamed the guest account. Let's drill down here and look at that: "Local
Policies/Security Options." I've chosen to "Rename guest account" to just "PolicyPakGuest."

Since I've already created that, like with the Preferences Manager, I'm going to do kind of the same
thing where I go and choose "Security Settings Manager" and we'll do the "SHOW WIZARD" business
again.

Now this one actually has a few policy types that are not supported, so "Please note that the
following policy types are not supported." The rest of them are supported and in good shape, so I'll
click "Next." And, indeed, "Local Policies:Security Options." I would like to "Include in Export,"
thank you. "Next."

This is where I could put ILT on there if I wanted to do item-level targeting and filter it in for a
specific security group or whatnot, but I'm going to leave it as is. Let's go ahead and throw this
down on the "Desktop." I'm just going to call it "Rename Guest." There we go. We do want to create
it. Moving right along, here we go.

All right, so we have our XML that we've just created. So we have our kill the Control Panel, we
have a shortcut to deploy and we're renaming the guest account. In order to wrap all this up in an
MSI, what we're going to do is we need to use the PolicyPak Exporter Tool. It installs alongside the
admin console MSI. When I open up my Start Menu, sometimes it's up at the top under "Most used" or
sometimes "Recently installed." If not, just scroll down, find "PolicyPak" and you'll find it right
here.

This actually does a few different things, but right now we want to "Create a new MSI installer."
We'll click "Next," and we're going to "Add Existing Files" here so let's do that. Just let me get
back to the "Desktop" here.

I can do all of these at once actually. So I can choose "Shortcuts_PolicyPak," "Rename Guest" and
"No Control Panel" all at once. There we go. The "No Control Panel" is currently "Install For"
"Users & Groups." I actually just want to put all three of them on the "Computer" side. And the
"Target," of course, will be "All Users." I will click "Next."

We can change the "Product Name," which is what shows up in Uninstall a Program or something like
that. I'll just call it "GP Settings" and "Next," "Next." Keep with that convention: "GP Settings."
Throw it right on the "Desktop." There we go, and we "Finish" up.

Now we have this MSI that has our settings in it. But before I talk about deployment or any of that,
let's go over and look at the settings as they are ungoverned. We'll come over to my endpoint here.
One important thing I do want to point out is that the "PolicyPak Client-Side Extension" is
installed on this machine. So you'll have to have that on your machine in order to be able to have
your settings work. Let's get rid of this.

You can see I can clearly get into the "Control Panel" because I was able to do the "Uninstall a
program" thing. So there we go. I can still get into Control Panel. There's no butterfly shortcut on
here that I can see. If we go to "gpedit" and "Rename guest account," it's still called "Guest."

We're going to hop over here, and for a minute I need you to use your imagination. I'm going to
install this manually, but if you were using SCCM or KACE or LANDESK or whatever, you would be able
to do this and it would all occur silently.

So using our imaginations, I'm just going to drop that in my "SHARE" folder here. I'm going to hop
back over to my endpoint. Let me go grab my "share" file here and go over here and just install this
real quick. Again, this would be done silently in the background if you were using a management
software. I'm just doing it manually for this video.

And here we are. We have the butterfly icon that popped up. If we double click it, it's going to
take us to "policypak.com" just like we said. If I'm trying to get back into that "Control Panel,"
I'm not going to be able to do it. It has been restricted.

Finally, let me just
"[Run as administrator](https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html)"
so we can check out that guest account. All right, let's drill down to "Windows Settings/Security
Settings/Local Policies/Security Options." What do you know? "PolicyPakGuest."

So we were able to create and deploy real Group Policy. We did the Preferences. We did Security
Settings. We exported that as an XML. We wrapped it all up as an MSI and then deployed it using
whatever software you prefer.

If that's interesting to you, get in touch with us and we'll be happy to get you started with a free
trial right away.

I'll see you in the next video. Thanks for watching.

