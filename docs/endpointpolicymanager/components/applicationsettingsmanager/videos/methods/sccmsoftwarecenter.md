---
title: "Perform Desktop Lockdown using Microsoft SCCM and Endpoint Policy Manager"
description: "Perform Desktop Lockdown using Microsoft SCCM and Endpoint Policy Manager"
sidebar_position: 20
---
# Perform Desktop Lockdown using Microsoft SCCM and Endpoint Policy Manager

<iframe width="560" height="315" src="https://www.youtube.com/embed/fO5g-i0a2zA?si=LWjmUvnWUjQ71Gt-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Whitney with PolicyPak Software, and in this video. I am talking specifically to SCCM
folks. If you're an SCCM shop, then you've got a great way to deliver your application, but that
falls just short of being able to actually manage the settings within those applications, so on your
endpoint, your users can get here, and they can get into say Java here, and they can change the
exception site list here, they can change the security levels, they can get into this Advanced tab
and mess around with all kinds of check boxes and radio boxes here and you may or may not want that
or you may just specifically want to lock certain things down.

For example, coming over here to Chrome, you're going to notice I don't have a homepage here, and I
can get into an incognito window. Maybe you don't want that. Come over here to Settings. We're going
to see that when we come over here to Autofill, we go to Passwords, we're going to see that we are
offering to save passwords in Chrome al the time, and maybe you don't want that either. Let's go
ahead and manage those settings using PolicyPak but not Group Policy.

I'm going to come over here to my management station, and I actually have my console open right
here, my Group Policy management console, so I'm going to go ahead and close this out. We actually
have a utility that is designed to create an MSI with XML data in it to be able to manage those
settings, so that is the PolicyPak Exporter Tool, which typically when we talk about it, we talk
about it in terms of those that are using an MDM service, but it works also for the SCCM types.

Let's scroll down. Let's go over down to PolicyPak here, and let's go grab that Exporter Tool, and
we are going to Create a new MSI installer here. I'm going to choose Next, and we are going to
Create a New PolicyPak Application Manager XML data file. This is going to look in my central store
and see what paks I already have copied in there. I've already done the legwork on that. That's
covered in a different video.

I'm going to Create that New XML data file, and we were talking about we wanted to manage Java, so
let's go ahead and do that. Let's double-click on here, and let's go ahead and tear the knob off of
this. Let's don't allow it to update anymore, so let's uncheck that. Let's come over here to the
Security. We are going to set Security to Very High, and we are going to Lock this down using the
system-wide config file, so we're getting very serious with this. If I come over here to Advanced,
we are going to only use TLS 1.2. We are going to uncheck these two, and we can Lock that down using
the system-wide config file as well, and I'm going to right-lick and lock that one down. We're going
to check that we only want to deliver TLS 1.2 as an option. I'll tell that OK.

Now I'm going to do this again, and I'll go find Chrome, and once we open up Chrome, then I can come
over here, and let's see. I can choose to Open a specific set of pages here, or in this case
actually just one. We'll put it to policypak.com. Alright. We're going to come over here to the
Extras, and Extras, you have to scroll down just a little bit to find the setting about the
incognito mode, so there we go. We're going to go ahead and disable that, and when I come over here
to Advanced, I can choose no, do not offer to save passwords. Thank you very much. I'm going to tell
that OK.

I'm going to choose Next, and you can name this whatever you would like. I'm just going to leave it
as Packaged PolicyPak Settings, and I'm going to just go ahead and choose Next on through. I'll just
call this PolicyPak Application Manager for SCCM, and I'm just saving this right on the desktop so I
can get to it pretty quickly. We'll close out here, and that's great.

Now what I need to do is I'm actually going to pause the video. I'm going to get this deployed, and
then we're going to go back over to our endpoint and see the results. I'm going to spare you the
tedium of waiting on it all to happen on video, so we'll pause it right here and come right back.
Alright, and we're back. Just a little movie magic there. Now that that MSI has been deployed on to
this machine, we can go over, and we can check out Java over here. You're going to notice that the
Update tab is gone. That's great. We tore the knob off of that one. Come over to Security, you're
going to notice that I can't click on this at all. That's because we locked it down with that
system-wide config file, and when I come over here to Advanced, I can scroll down and find yep, we
are only using TLS1.2, and we are restricting TLS 1.1 and 1.0.

We did that, and when I come over here to Chrome, you're going to notice there our homepage is
policypak.com just like we asked it to. No incognito mode option anymore, and when I come down to
Settings and I go to that Autofill area – Autofill, Passwords, there we go. You see that this
setting is being enforced by your administrator, and it's grayed out. I cannot click that at all, at
all. That is how you can go about managing the application settings using PolicyPak, but getting rid
of Group Policy and using SCCM instead. If this is of interest to you, get in touch with us. We'll
have you watch a webinar. We'll give you the bits, and you can get started on your trial right away.
Thanks so much.


