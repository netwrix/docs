---
title: "Enhanced Security for Server"
description: "Enhanced Security for Server"
sidebar_position: 40
---
# Enhanced Security for Server

Upgrade PPGPCR Compliance Reporter Server and Client for enhanced AD security.

<iframe width="560" height="315" src="https://www.youtube.com/embed/DH5VIDFDcmQ" title="PPGPCR: Enhanced Security for Server" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy, and in this video, I'm going to show you how to upgrade your Compliance Reporter
server for enhanced and increased security. The current problem is that the Compliance Reporter
Admin Console, also known as the client, could up until this build connect to any Compliance
Reporter server without any real authentication, which was not good, so we decided to increase the
security on that. What we're going to do is upgrade two pieces here in this installation.

First thing we're going to do is to upgrade the Compliance Reporter server. We're going to click on
the server first, and when we do, we're going to get a dialogue that may look something like this,
or it may be upgraded in the future, but this is basically saying hey, yes, Jeremy, I understand
that if I'm going to upgrade this server, then I also need to upgrade my Admin Console. Again, the
Admin Console is also known as the client – to the latest version. In other words, we're going to
reject old Admin Consoles immediately when we upgrade the Compliance Reporter server. I'm going go
ahead and say Yes here. I'm going to show you what it looks like if you forget that you need to do
that. Go ahead and click Next here.

This is where the Group Name comes in. This is the group that is now authorized to accept your input
here, so what we'll do is I'm going to go to Active Directory Users and Computers, and I'm going to
create a New Group. I'm going to call it PPGPCR Admins or something like that. This is a group, and
I'm going to add my members in there, so for instance, right now, I'm logged on as Mr. Domain
Administrator, but – well, we'll get to that in a second. I'm creating a group, and I'm adding
myself to it just for now. I'll go ahead and click Change and pick that group, so that's PPGPCR
Admins, and you can see we picked the SID, so even if you rename the group, you're still fine.

We'll go ahead and click Next here, and we'll Keep old database files untouched, and we'll go ahead
and click Install. We'll go ahead and let it automatically close the service and restart. This only
takes a second. Hey look at that. Now you've got updated and enhanced security. I want to go through
all the angles on this, even the things that somebody might do wrong. I just want this to finish
first. I'll go forth and show you some wrong moves and then how to correct all these moves all in
one shot, so I'll pause the camera for a second.

Remember, in a previous screen, we said yes, I am committed to upgrading the Admin Console. Let's
pretend you didn't know that, and you just decided to rerun the Admin Console. What happens? As soon
as you try to rerun the Admin Console here, bang, you get an error, and the error says please update
to the most recent version. Got it. I just wanted to show you what that looks like, and it says hey,
can't connect to the database and so on. You can try to fumfer around in here, but it's not going to
work because this thing is too old now.

Let's go ahead and upgrade now to the latest Admin Console. Again, that's also known as the client.
We know that's a little confusing, but that's showbiz. Now this is the similar screen. This says
hey, are you sure you upgraded your server to the latest version? Yes, I've done that. Now we've got
a match between the server that's been upgraded first and the client that's updated second.

By the way, when the client/Admin Console asks about the database, remember there's a local database
here for the Admin Console for the interrogation mode. I'll just go ahead and click Next, Next,
Next. I'll wait until this is finished, and I'm still not done. There's still one more big step to
accomplish here. It's actually not really a big step. It's a small step. I'll just go ahead and let
this finish here. Okay, so now we've updated the Compliance Reporter Admin Console/client. Let's go
ahead and run it. I can run it here. It doesn't matter. Let's go ahead and run it and see what
happens.

What happens is hey, you're not authorized to access the selected server. You want to try another
one? You're like wait a minute. I thought I am authorized. In fact, you try again. You'll get the
same exact message. It says you're not authorized, but wait a second, you created the group and you
added yourself to it. Why shouldn't it work? The reason why is a very simple one. You just need to
log off and log back on. Remember, when you add yourself to a group membership, your user doesn't
know that until the next logon, so we're just going to refresh the token here by logging on, so
we'll go ahead and log on here, and all we're going to do next is go back to the Compliance
Reporter.

The Compliance Reporter Admin Console/client is now updated. The Compliance Reporter server now
knows that the person's group membership has to be correct, and we can see this here if we take a
look in the Settings. We can see that we've got the allowed group, so now we're saying again, if the
person is in this Allowed group, then using the Compliance Reporter Admin Console, they can connect
to the Compliance Reporter server. If they're not in the Allowed group, they're rejected, and they
can't get to the data.

This is a big, big security enhancement. Hope this helps you out. Thanks for using the Compliance
Reporter. Remember, it's free except for reporting on Microsoft settings, so we want you to be sure
use it as much as possible to make sure your real Group Policy and PolicyPak settings are making its
way out there. Thanks so much and talk to you soon.

