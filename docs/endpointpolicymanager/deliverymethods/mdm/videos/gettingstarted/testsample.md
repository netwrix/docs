---
title: "Endpoint Policy Manager and MDM walk before you run"
description: "Endpoint Policy Manager and MDM walk before you run"
sidebar_position: 20
---
# Endpoint Policy Manager and MDM walk before you run

Netwrix Endpoint Policy Manager (formerly PolicyPak) and MDM work awesomely together. But you should
watch this video and WALK BEFORE YOU RUN with Netwrix Endpoint Policy Manager (formerly PolicyPak)
MDM, and try this example.. before using your MDM service to do all the work to deploy the MSI
files. When you test this procedure our first, you will have a lot more of a guarantee of success!

<iframe width="560" height="315" src="https://www.youtube.com/embed/Kojo2mq3JhM?si=1vDNcZm_30k8y9QP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz. In this video we’re going to walk before we run with our MDM service
and PolicyPak. You do need to be a little bit prepared for this. In this example I’ve got my
machine, and it is enrolled into an MDM like InTune. It could be something else like Citrix CEM or
VMware Workspace. That’s all fine. In this case, I’m enrolled into InTune land. That’s the first
piece you need to have done.

Second thing is you need to be prepared with three other things. You’ll need to have the Client-Side
Extension handy and ready to go. You’re going to get this when you download that from the portal. It
will be in the bit section.

You’re going to need the license file that we send you. It should come as an MSI. If it doesn’t,
there’s another video that shows you how to wrap up the XML into an MSI if you need to. We should
give it to you as an MSI.

Then lastly, this thing called the examples; the examples start off as a zip, but you don’t need the
zip. You just need the MSI inside the zip. Where do you get these examples, I hear you cry? That is
going to also be in the portal in the examples or in the manual section. That will be in one or both
of those places.

Let’s recap. You’ve got four things. You are connected to your enrolled MDM service. You’ve got the
PolicyPak Client-Side Extension. You’ve got the license file, and you’ve got some examples to see it
go. When we walk before we run by hand-installing each of these things, we’ll know that all the
things are going to line up and work when you do it for real with your MDM service.

The first thing I’m doing is I’m installing the Client-Side Extension. Let’s go ahead and see that
go. What I’m also going to do is show you in control panel what it looks like when you do these
things. It’s going to look exactly the same when you do deploy it using your InTune or Citrix CEM or
whatever you’re going to do for your MDM service.

If I go to control panel here, let me just show you what it looks like. What do we have? The first
thing that we have is the PolicyPak Client-Side Extension. That’s great.

The second thing is the license file. Let’s go to the license file. We’ll go ahead and that’s it.
That’s all there is to it. No activity whatsoever happens.

Then lastly is the – let’s go back to control panel. Let’s hit F5. Let’s see what we see. There’s
the license file, like I said.

The last thing is the examples. Let’s go ahead and double-click the examples here. If all works
perfectly, in around ten seconds you’re going to see a couple of changes. There we go. There’s the
Group Policy preferences icon here for a shortcut for PolicyPak.

The other thing that we’ve pre-staged is if you were to go to the lock screen settings and go to the
screensaver settings here. We’ve set on the ribbons screensaver to 17 minutes. These two things you
would not normally naturally see in your machine. We know that all the stars aligned. We know that
the license file is working because these example settings are working right now.

That’s basically all there is to it. If I were to open a command prompt and type PP update here,
this command will also tell you what you’re licensed for and how. You can see that your universal
license is for the MDM method. You can see when it expires. We tell you what your scope is, and we
tell you which components you’re licensed for. This is a final backstop and check.

For instance, if you were licensed for Least Privilege Manager Complete but we only sent you a
license for Least Privilege Manager Standard, there you go. You might also see some other items here
where it says you might want to check out these components you don’t have access to. If you’re
entitled with your license, you’re welcome to ask for them, and we’ll cheerfully give them to you.

If you have licensing problems at this point, the best thing to do is to open a support ticket
https://www.netwrix.com/sign_in.html?rf=tickets.html#/open-a-ticket and tell us where in the process
it didn’t work. Basically, this is the Walk Before You Run video. Now you can go onto the other
videos that show you how to use your MDM service like InTune, like VMware Workspace ONE, like Citrix
CEM, and then deploy the three things that we just did.

Let’s go one more time, final checkout into control panel. By the time it’s over, you’re going to be
delivering the Client-Side Extension using your MDM service. You’re going to be delivering the
license file using your MDM service. Finally, the PolicyPak and Group Policy settings wrapped up
into an MSI file using your MDM service.

Hope this video helps you out. Thank you for walking before you run before you try to do this for
real with your MDM service. Thank you very much. Talk to you soon.


