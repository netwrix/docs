---
title: "Endpoint Policy Manager Cloud: Use PP Cloud to create a new local user on your endpoints"
description: "Endpoint Policy Manager Cloud: Use PP Cloud to create a new local user on your endpoints"
sidebar_position: 20
---
# Endpoint Policy Manager Cloud: Use PP Cloud to create a new local user on your endpoints

Need to make a new Local User on your endpoints? It's easy with Netwrix Endpoint Policy Manager
(formerly PolicyPak) cloud.

<iframe width="560" height="315" src="https://www.youtube.com/embed/6C8sKekprWw" title="Endpoint Policy Manager Cloud: Use PP Cloud to create a new local user on your endpoints" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak Cloud Use PP Cloud to create a new local user on your endpoints

Hi, this is Jeremy Mosowitz and in this video I am going to show you how you can create a local user
to your endpoints using PolicyPak Cloud. So, let me go ahead and create a brand new group policy
object. I'll call this ‘New Local User Fred' and, again, it doesn't have to be a real AD. I'm just
using my kind of garden variety, you know, offline test lab here. So, go ahead and edit the GPO and
you're going to create a group policy preference for this item, so that's going to live under
Computer Side, Preferences, and then you're going to go to Local Users and Groups. You're going to
create a new local user here and you can give this guy a name such as Fred and give him a password.

Now, you may need to downgrade your GPMC to a version that enables you to put a password field in
here if you want this person to get a password because new versions of the GPMC will NOT permit this
because if this GPO is stored actually in active directory, this password could be revealed but for
the purposes of what we're trying to do, this is actually reasonably safe. So, we'll go ahead and
save this password – we'll save this out here and now let's just see what we've done. We've created
a new local user and that's all there is to it. The next step would be to go to the PolicyPak node
here and you're going to use the PolicyPak export utility here that exists under Preferences
Manager. You will simply at this point run the export wizard, which will then let you find the item
here. There's Fred and we've got no targeting on it, so we'll just go ahead and say next.

We'll pick the place where we're going to go. I'm going to pick it to a folder called Exported.
We'll have some other stuff there and click next and that's all there is to it. So, now in PolicyPak
Cloud land, let's go ahead and log on. Then we'll go to Computer Groups and we'll do this for all
computers if that's what we want to do or you can them for specific computers. I'm going to upload
and link a new XML file here. I'll go ahead and pick my desktop exported folder and pick the Fred
item type. Okay, so I'll call this Add Fred to Local Computers. I'll go ahead and click Add here and
there we go, so now Fred is added to that built-in group. You could do it to a company group as
well. I'll go over to my Cloud machine. He's already joined PolicyPak Cloud in this scenario.

Let me prove to you that I'm not pulling a fast one on you here. If I go to Computer Management just
to show you that there's in local users and groups and users there's no Fred. I'll go ahead and
close this. I'll run `PPCloud/sync` or just wait a little while for PolicyPak to do its magic and
let's take a look. We've got – there you go, add Fred to local computers right there and if all goes
well, all we're going to do, right click, go to computer management here, go to local users and
groups, users – hey, there's Fred. Okay, and that's all there is to it. That's a way for you to
create a local user and set a password. Again, even though that password may not be available in all
versions of the GPMC, you can downgrade to an older version of the GPMC to do this.

Again, normally I wouldn't recommend you do this in Active Directory but because you're making a
temp policy and uploaded it into PolicyPak Cloud, this is generally reasonably safe. Hope this helps
you out and talk to you soon.


