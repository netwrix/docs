---
title: "Least Privilege Manager: Block All Unsigned with SecureRun"
description: "Least Privilege Manager: Block All Unsigned with SecureRun"
sidebar_position: 90
---
# Least Privilege Manager: Block All Unsigned with SecureRun

Unsigned apps? Bah. If they're not signed, make sure they don't run. Use one checkbox and PolicyPak
SecureRun makes it happen.

<iframe width="560" height="315" src="https://www.youtube.com/embed/aComODiEzDk?si=zaDRzbz-w1tOueaC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz, and in this video, we're going to talk about an increased security
feature to PolicyPak SecureRun. In other videos, you saw me turn on PolicyPak SecureRun, which will
automatically block items that are unknown of origin, so for instance, when a standard user tries to
download something off the internet and double click it, we're going to block that. Same thing with
a random PowerShell script or Java malware or any kind of thing at all, we're going to make sure
that PolicyPak to the rescue. We're going to make sure that's all preserved.

However, we did have one case that we wanted to shore up, which is where – here's an example. I've
got this version of CamPlay that the user downloaded, and I have this version of CamPlay that the
admin downloaded. Hey, look at that. That runs. What we didn't have and we do now is this ability to
– I'll show you here in SecureRun – this ability to block all unsigned. What does block all unsigned
do? That application is not digitally signed, so now that I've blocked all unsigned, this
application, because it's not digitally signed, will also automatically blocked even though the
admin placed it there. This is an extra security preventative measure so that way nothing that is
not digitally signed will make it through. Everything is automatically blocked. Now we'll double
click it and bang.

What if you needed to get by that? That's fine. You just create a rule to bypass that. This is
CamPlay-Admin-Owned, so I'm going to just take a look at the filename and just make sure I've got it
straight. CamPlay-Admin-Owned. What I will do is I will create a rule – in this particular case not
a very secure rule. It's just for an example here. I can create a new executable policy to just let
that particular file through. I'm going to make a Path rule. Again, not generally advised, but it's
okay for this example here, and I'll Add a new file, and I'll just say hey, look, if it's called
CamPlay-Admin-Owned – and you can put it in a folder and so on – then go ahead and let it run.
Whoops, I'm going to do \*.exe there. If you've got that name, then let it run.

We'll not run with elevated privileges, just Allow and log it, so it's going to be automatically
blocked because we have the SecureRun enabled plus block all unsigned, but we're now going to let it
through the doggy door because we have a rule here. I'll go ahead and run gpupdate. Give this a
quick second to finish up. Okay, now that this is done, we're now saying go ahead, let this version
of CamPlay, the one that we specifically specify, either in a folder, maybe it's in a server in a
share over there – even though it's admin owned and not digitally signed, let's go ahead and let
that run through anyway, but this version is also going to just be blocked. Okay, so in this way,
you've got your bases covered. Nice new feature helping make your world even more secure than it was
before that. Hope this helps you out. Looking forward to getting you started with PolicyPak real
soon.


