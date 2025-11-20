---
title: "Use your GPOs with Endpoint Policy Manager Cloud"
description: "Use your GPOs with Endpoint Policy Manager Cloud"
sidebar_position: 20
---
# Use your GPOs with Endpoint Policy Manager Cloud

After you've exported your settings via PP Exporter, then upload them straight into Netwrix Endpoint
Policy Manager (formerly PolicyPak) Cloud. As a bonus, you can also continue to edit those policies
within Endpoint Policy Manager Cloud AFTER you've uploaded them. If you want to say goodbye to
on-prem GPOs and use our Endpoint Policy Manager.

<iframe width="560" height="315" src="https://www.youtube.com/embed/iYj9C-sn8P8" title="Endpoint Policy Manager Exporter: Use your GPOs with Endpoint Policy Manager Cloud" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

In a previous video, we exported the three kinds of Group Policy Settings that you wanted to use for
Endpoint Policy Manager Cloud, and we've got them here just hanging out in exported form. It's super
easy to use with Endpoint Policy Manager Cloud. There's two different ways you can get them
uploaded. One is to click on the All Group or a Company Group, and you can upload and link an XML
here, so you can either choose the XML directly – so I'm going to go ahead and do that. Like I said,
I've got it here under Desktop under EXPORT1, and I'm going to pick the Security Setting one and l
just consume it, and we're done, so I'll just go ahead and click Add, and that's one way to do it.
You can just look at it that way, and we've now linked that Security Setting that renames the guest
account over the All Group, and we can see that if we look at Show Policy Settings. We're going to
go ahead and see that we've renamed to ppGuest.

You can also click on your special group, and you can also upload and link a new XML here, so same
idea but instead of picking the file, if you wanted to, you can also look at it in XML format and in
XML format you can copy this and just paste it – the guts right there. We'll go ahead and know what
to do with it and boom, just like that. Those Admin Template settings that we had in Group Policy
land, they just transfer right over here to Endpoint Policy Manager land, and for the last one,
let's go ahead and take a look at it. We'll go to the shortcut one. We'll go ahead and edit and
upload that guy. We'll go ahead and take that. We'll go over here to our All Group. We'll go ahead
and upload and link a new XML here. We'll go ahead and paste it, and that's it. We've taken our
existing Microsoft on-prem Group Policy settings and we've used them in Endpoint Policy Manager
Cloud, so let's go over here and see it work.

This is a machine that's not yet enrolled in Endpoint Policy Manager Cloud. Let's go ahead and
double click on the Cloud Client, and once you do this, you'll get all the Group Policy Settings
from that special All Group that we said. Let's go ahead and give this a second to catch up. There
we go. Remember, it's going to join that special All Group. You could also have it automatically
join your Company Groups if you wanted to, but in this quick demo, I'm just making it get to our
special All Group. The first thing that we're going to see is that Group Policy Preferences shortcut
item show up. Boom, there's the shortcut item, and there we go. We can see that we're in the
Unassigned and also the All Group, and let's go ahead and take a look at the remaining policy
settings. If we're going to take a look at Control Panel here, if we were to take a look at the
icons here, boom. There are just two. We've reduced that. If we were to take a look what's going on
in gpedit.msc here, let's take a look under computer side, Windows Settings, go to Security
Settings, Local Policies, Security Options, and look at that. We've renamed the guest account.

The best part is back here in the editor, if you decide you want to make a change to any of these
Microsoft settings or any Endpoint Policy Manager setting, you just go ahead and you click it and
click on Edit Policy, and we have full in-cloud editors where you can add any policy you want, any
Microsoft Admin Template setting, any kind of Security Setting, most Group Policy Preferences items,
or you can modify the one that you've already uploaded. Instead of showing Sound and Date and Time,
if I just want to show Sound, that's all you've got to do. Go ahead and make your modification or
add to it or whatever you want to do, go back to your cloud machine. You can wait a little while for
the cloud client to do its thing or ppcloud /sync, and this is going to catch up with the newly
changed policies. Just like that, we've got it updated. Let's go ahead and give this a second to
check it out. We'll go back to Control Panel, and there we go, just Sound.

You take your Group Policy Objects, export them, upload them for use in Endpoint Policy Manager
Cloud and continue to keep them updated or edited in Endpoint Policy Manager Cloud. No need to go
back to the Group Policy Editor for most things. Hope this video helps you out. Looking forward to
getting you started with Endpoint Policy Manager Cloud and Endpoint Policy Manager Exporter real
soon. Thanks so much.


