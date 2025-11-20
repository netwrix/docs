---
title: "Endpoint Policy Manager File Associations: Don't ask questions (even when you did it right)"
description: "Endpoint Policy Manager File Associations: Don't ask questions (even when you did it right)"
sidebar_position: 80
---
# Endpoint Policy Manager File Associations: Don't ask questions (even when you did it right)

How do I get Windows 10 to stop asking me to open PDFs in Microsoft Edge? When you use Endpoint
Policy Manager File Associations Manager, you might have done "everything right" but even then, it
still doesn't work as expected. See this video for a universal fix.

<iframe width="560" height="315" src="https://www.youtube.com/embed/cMioz4JQPYI" title="Endpoint Policy Manager File Associations: Don't ask questions (even when you did it right)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz and if you're watching this video, you're probably wondering why when
you use file associations manager you still get this question. Do you want to open this file? You've
already associated it correctly. You can see that it's correctly going to use Acrobat Reader, but
why does Windows still ask? Well, there's an easy way to make this problem go away. This isn't a
file association manager problem; this is just Windows trying to advertise its own stuff, so let's
go ahead and show you how you can work around this.

I've got a GPO where I like to put things that want to affect all users here, so I'm going to put it
into my General Needs GPO here. What you're going for here is the – under the Policies Admin
Templates, you're looking for Windows Components File Explorer Then you're looking for Do Not Show
the New Application Installed Notifications. Let's set that to enabled. Okay, so now that we've done
this guy here, we'll do a quick AB test. You saw me do that before, so now I'm going to run GP
Update, and you may need to log off and log back on. This'll affect the next time the guy logs on
and every user going forward in the future, so let's go ahead and do that here.

Alright, so I'll go ahead and run GP Update here. There we go. GP Update, give this a second to
finish up, and then we'll go ahead and log off and log back on. Alright, so we're done with that. Go
ahead and sign out. Sign back in, and now let's go ahead and run it and see what happens. Look at
that, no more questions. If we were to log off here and log on as, say, West Sales User 3 – let's go
ahead and do that. Sign out here. We'll sign on as a user that's never even logged on before. If we
do West Sales User 8, give this a second for this guy to log on.

Now that we're logged on, here's that PDF. Go ahead and double-click it, and what do we get? We get
no questions. Hopefully that policy setting helps you out and therefore you can use file
associations manager quickly and easily and no more questions.

Thanks so very much for watching and talk to you soon.


