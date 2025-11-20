---
title: "Endpoint Policy Manager Cloud: Managing File Assocations"
description: "Endpoint Policy Manager Cloud: Managing File Assocations"
sidebar_position: 20
---
# Endpoint Policy Manager Cloud: Managing File Assocations

Got PDF? And don't want Edge to open it? Or MP4, and don't want the built-in movie player to open
it? How about protocols like MAILTO: .. want to map those to Outlook? It's drop dead easy.. with
Endpoint Policy Manager File Associations Manager. Trying to manage with "Set a default associations
configuration" is for the birds, and isn't flexible. Instead, manage it quickly using Group Policy,
and PolicyPak.

<iframe width="560" height="315" src="https://www.youtube.com/embed/wDQX54Omoz4" title="Endpoint Policy Manager File Associations Manager: Use it with Endpoint Policy Manager Cloud" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

If you've got not domain-joined machines, as I have here, and you're using Endpoint Policy Manager
Cloud, how do you use Endpoint Policy Manager File Associations Manager with it? Well, it's super
easy. As you know, we've got the cloud client here. We're going to get to that in a second.

First things first, before you get to Endpoint Policy Manager Cloud, you're going to take your file
associations and simply view as XML in Notepad and here they are just hanging out here, all your
file associations. Copy that. Then go into Endpoint Policy Manager Cloud. You can use whatever group
you want in Endpoint Policy Manager Cloud. I'm going to use the special All group, which is going to
hit every computer. I'm then going to create a link – upload and link a new XML here, and I'll call
this PPFAM All Computers File Allocation. You just hit paste and bam, we recognize it as a File
Associations Manager XML, and you're off to the races. Literally, that's all there is to it. After
you've created your XML, export and upload and you're off to the races.

Let's go over to our not domain-joined machine or even if it is a domain-joined machine, you can see
in this scenario, you can see PDF is still associated with Edge. This is the built-in video player
and the mail-to isn't set yet. Let's go ahead and install the Cloud client. When we do, we're going
to download the latest client site extension. We're then going to also install the policy settings.
Just watch right here, and you should immediately see those items change about five or ten seconds
after it's registered and hits the All group. We'll go ahead and give this a second to finish up.
Boom, just like that, it hit it and we're off and running.

This can be done for all users or if you want to be specific with specific users, you can do that as
well. In this demonstration, I'm just showing all users, but that's the great part about Endpoint
Policy Manager Cloud:  very, very flexible, works with your domain-joined and not domain-joined
machines. Get your file associations as soon as those files you want are available and you're off to
the races. Let me go ahead and just finish that last one here and show that my mail is not the goofy
emailer. Instead, it is the Clause Mail, which is what I wanted.

There you go; that's it. we've done our file associations This is one of the shortest videos ever.
Hope this makes sense and hope you love Endpoint Policy Manager as much as we love bringing it to
you. Thanks so much. Take care.


