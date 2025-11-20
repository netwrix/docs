---
title: "Using LT for license cleanup"
description: "Using LT for license cleanup"
sidebar_position: 30
---

# Using LT for license cleanup

If you're a renewing customer, take a moment and find your old licenses and clean them out. This
video shows you how.

<iframe width="560" height="315" src="https://www.youtube.com/embed/sxcJgME4HKY" title="Endpoint Policy Manager:  Using LT for license cleanup" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak: Using LT for license cleanup

Hi. This is Jeremy Moskowitz. In this video, I'm going to show you how you can use our licensing
tool to help with old license clean up.

To get started, you're going to download the latest bits and you're going to run what we call new
"LT," so not "LT (OLD)." What you're going to do is try this item out called "View a list of active
PolicyPak licenses" and click "Next." You can do this on any machine you have access to.

There are two methods. There's what we call "Quick Search" and "Full Search." "Quick Search" will
look through all Group Policy Objects that report to us instantly that they have licenses. I'll just
expand this. You can see, I've got a handful of licenses here.

If you have the time, you can go "Back" and click instead to do the "Full Search," which is going to
query every Group Policy Object and look for licenses. Now, we had an old bug, and we can fix that
old bug if you just wait a second and say "Yes" to this. It will automatically fix a slight issue we
had with old licenses.

Once that's done, you can see we have all the licenses here that are available to us. This is where
you can clean up your old licenses. In my example here, I have two or three types of licenses here.
For instance, I have a "GPO" called "demo."

Maybe I'm not using these licenses anymore. Maybe these have expired. In fact, you can just see
based on the date if the date is in the past. If the date is in the past, you can get rid of these
licenses and use just the ones that are new.

By the time this is done, of course, what you're looking to make sure you have is just the right
amount of licenses for what your scenario is. For instance, if I wanted to license all of PolicyPak
for my entire domain, I want to make sure that each of my items is licensed correctly.

I don't need this guy, and I don't need these other guys. This might take a little reading in order
to get through, but I really don't need all these extra license files hanging around doing things
that don't make any sense. By the time it's done, I've just got all my on-premise licenses
("On-Prem") in this one "GPO" that's ready to go.

When I'm done, I can click "Deleting licenses." We should probably rename that to Delete Licenses.
While I'm here, you can optionally "Unlink GPOs from OUs" if you know that you're only using these
GPOs for licensing. If you're not sure, you can leave that unchecked. You don't need to necessarily
"Export GPO names to Notepad" if you don't want to.

I'll click "Deleting licenses" and just like that, we've done a nice cleanup of what's happening in
PolicyPak-land. Now if we were to click "Finish" and just "View a list of active PolicyPak licenses"
again, we can do a "Full Search" and we'll see that in all the Group Policy Objects we have just the
things we need.

Actually, wait a second. I should have all my components. I only see four of my six components.
There are a couple of ways you can do that. My preferred technique – and you've seen me probably do
this in other videos – I'm going to go back to this other machine. I'm going to use the GPMC here.
In that last remaining licensing Group Policy Object here I'm going to right click, click "Edit."

I'll just right click on the "PolicyPak" node, click on "License Management," click "Import," and
find the two items that I don't have. That would be "BrowserRouter" and "PrefsManager." We'll click
"Open" here. We'll add those guys in. That's it. They're imported. We'll click "Close." If we
"Refresh" the report here, that's it. All of our licenses are there, and we're ready to rock.

I hope that helps explain how to clean up old licenses if you happen to have any lying around. If
you have any questions about this, we're here for you on the support forums.

Thanks. Take care.

