---
title: "Manage Firefox Pop-Ups and Permissions using Group Policy"
description: "Manage Firefox Pop-Ups and Permissions using Group Policy"
sidebar_position: 30
---
# Manage Firefox Pop-Ups and Permissions using Group Policy

Want to see how to dictate which websites can allow or block pop-ups? How about permissions like
Camera or Microphone? Only Netwrix Endpoint Policy Manager (formerly PolicyPak) enables you to set
these using Group Policy or the Cloud.

<iframe width="560" height="315" src="https://www.youtube.com/embed/tf9jasissVE?si=WUhMnWS487VxBsOG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager: Manage Firefox Pop-Ups and Permissions using Group Policy

Hi. This is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software. In this
video, we're going to learn how to manage Firefox.

If you go to "Options" here and we take a look at "Block pop-up windows," we're going to manage the
"Exception" to the pop-up windows. There are also a bunch of permissions you can get to if you go to
"about:permissions." The idea is that there are a bunch of permissions here that you can dictate per
website, and that's what we're going to do right now.

I'll go ahead and close this out, and I'll go over to our Group Policy Management Console. Here
under "East Sales Users," we'll go into "Create a GPO in this domain, and link it here." You can do
this for either users or computers. I'm just doing it on the user side. I'll call this "Manage pop
up windows for firefox and permissions using policypak."

Right click, click "Edit" here. Like I said, once again you could do it on the computer side or the
user side. I happen to be doing this for my East Sales Users. If you go to "New/Application" and we
pick "PolicyPak for Mozilla Firefox 23.0," it's really 23.0 and later. We just call it 23.0 here.

If we dive down into "Permissions," we give you a little template. There are two ways to do this.
You can either use "MODE=REPLACE" or "MODE=MERGE." MODE=MERGE says, "We don't care if the user has
settings. If they do, we'll go ahead and leave them there. But if they have anything at all,
MODE=REPLACE says, "Smash down," replacing whatever they have with whatever we put right here.

Let's go ahead and say on policypak.com we want popup, allow. You can see how the template works.
You just go through, give it a name, comma, "popup," comma, "allow" ("policypak.com, popup, allow").

There are these other permissions as well. I'll just use Facebook as the example here. You can see
we've got "camera," "microphone," "install," "pointerLock" and "desktop-notification." These
correspond to the elements we saw on that page.

In fact, if we go back and take a look real quick, if we go back to "about:permissions" here, you
can see that those settings are here and they correspond. We have a little table in the Help and
Read Me files to help you with that. But for now, you can see for instance maybe I want to block
using "Use the Camera" and block "Use the Microphone."

You can see that for most websites it's not set, but for Facebook we're specifically saying "block"
for the "camera" and the "microphone." Some of the other items here are "install," "pointerLock" and
"desktop-notification." There's also geo that helps with tagging and so on. We'll go ahead and click
"OK" here, and we're going to dictate those settings.

If we go to our target machine and run "gpupdate," we're getting the latest, greatest Group Policy
settings. These of course would also occur at logon. Also if you just waited in the background, you
would see that these would occur as well.

Now that that's done, let me close this out. We'll go ahead and run "Mozilla Firefox" here. Let's
head right over to "Options," back to "Content." For "Block pop-up windows," you can see
"policypak.com" is set to "Allow."

If we look and go to "about:permissions" here, you can see that "policypak.com" is dictated, the
permission for "Open Pop-up Windows" is "Allow." Here, "www.facebook.com" is set to "Block" "Use the
Camera" and "Use the Microphone."

What if a user is naughty and says to "Allow" it? The next time that "Mozilla Firefox" is run,
PolicyPak is always automatically working. If we go to "about:permissions" now, you can see that it
has immediately reverted back to "Block." That's PolicyPak dictating the settings for "Open Pop-up
Windows" and also permissions.

For more information about this, check out the Read Me file inside the Firefox Pak which will give
you more information about that.

Thanks so very much, and we'll talk to you soon.


