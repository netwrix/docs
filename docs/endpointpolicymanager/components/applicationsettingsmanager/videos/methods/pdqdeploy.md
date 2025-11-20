---
title: "Deploy and Manage WinZip with PDQ Deploy and Endpoint Policy Manager"
description: "Deploy and Manage WinZip with PDQ Deploy and Endpoint Policy Manager"
sidebar_position: 40
---
# Deploy and Manage WinZip with PDQ Deploy and Endpoint Policy Manager

Microsoft MVP Jeremy Moskowitz and Shane from Admin Arsenal show how to easily deploy Winzip with
PDQ Deploy and manage it with Netwrix Endpoint Policy Manager (formerly PolicyPak) for your entire
organization.

<iframe width="560" height="315" src="https://www.youtube.com/embed/LiRqOyVXR60?si=Jo5cmCCyDNMavIdV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Deploy and Manage WinZip with PDQ Deploy and Endpoint Policy Manager

Shane: Hey everybody. I'm Shane from Admin Arsenal. This is Jeremy from PolicyPak and GP Answers.
Rock and Roll. We are going to deploy WinZip 14 to a target computer and I'm going to turn it over
to Jeremy as he's going to explain how you can use PolicyPak, the power of group policy and
PolicyPak to manage, enforce sets of policies on WinZip for your entire organization.

Jeremy: So, you're going to deploy. I'm going to manage it.

Shane: Rock on.

Jeremy: There we go.

Shane: It's a left, right. I built this package in PDQ deploy. We don't offer WinZip because it's a
paid application in the package library. So, I just extracted the MSI. You can see the install – the
parameters that I put right there. Go ahead and refer back to that if you want to build this. And
now I'm just going to deploy it. I'll just type in the computer names. You don't need to do this.
You want to do both?

Jeremy: Yeah. Why not? Let's do computer two also.

Shane: Is spelling important? Alright. So, computer one and computer two.

Jeremy: Yep.

Shane: Hit deploy.

Jeremy: Am I going to magically see the icon just pop up on the screen?

Shane: Define magic?

Jeremy: You're magic. It's your deployment magic. I love it.

Shane: So, now we're deploying right now. Yeah. You should see the icon show up on this target for
computer one.

Jeremy: Okay.

Shane: There it is.

Jeremy: It's a miracle. It's a miracle. I love it. Okay. So, now the problem, of course, is now that
it's deployed with magic how are you going to manage the heck out of it? So, by way of example if
you take WinZip or applications like WinZip and you run it the first time, well, first you have this
to contend with. I'm sure you have a way around that. I'm going to just use evaluation version for
now, but for me I think what's important is managing things that would make an application more
secure or prevent popups like that and things like that. I'm going to go through and manage the heck
out of the passwords to app here.

Shane: Okay.

Jeremy: So much so that users can't work around the settings. So, we're going to deliver all four of
these checkboxes, lock some things down and make it so users can't work around that. Now, in our
last video we staged our PolicyPak admin console such that if we go to our deadwood users – no our
deadwood users. That's where they live. Right click here. Go over here. Right click. New GPO and
we'll call this "Manage WinZip using PolicyPak." Right click. Click edit on the GPO. And we've
already pre-staged the paks in the management console so we're ready to go. User side, PolicyPak –
the node that we're after is application settings manager. You'll find all the applications that we
pre-staged here.

Right click new application. There we go. We manage all sorts of things. Today we're going to do
WinZip. And we'll just double-click on that guy and my favorite part is that it looks just like
WinZip right in the management console. So, we'll go right over to, say, passwords. Check all four
checkboxes here. Jack the minimum password length, say, to eleven and while we're here you can
actually right click and disable the corresponding control in the target application making it so
users really can't work around these settings. We also have some advanced things like perform ACL
lockdown so a naughty, super smart user can't even work around it if they know where the thing lives
in the registry or the file system.

So, we'll go ahead and do that as well. We'll also – I don't know. I'll go ahead and disable this
corresponding control just to show you something else and for cameras I'm going to right click the
entirety of cameras and disable the whole tab in the target application. Like, rip the knob off of
the entirety of cameras. And that's it. Let's go over to our endpoint machine. We could remotely
run, say, GP update if we wanted to, but I'm just going to right click and run GP update. Trixie.
Trixie and just run GP update here. I've typed GP update maybe 40,000 times in my career, but of
course today – today I'm the Utah air.

Shane: When you said "Jack it up to eleven, I thought of Nigel Tuffnel there."

Jeremy: Turn it up to eleven. Wow. You get the extra credit for Nigel Tufman. Alright. So, go ahead
and close this out and that's it.

Shane: Tufnel.

Jeremy: Okay. I don't know what I'm talking about. So, you use an evaluation version. We'll go to
options, config and boom. Passwords delivered all four checkboxes –

Shane: Except cameras.

Jeremy: Cameras? You see any cameras? There we go. Okay.

Shane: It's grayed out.

Jeremy: There you go. So, that's it. It's as simple as that in order to get WinZip and all of your
other applications fully managed.

Shane: Rock on. All your users – your environment taken care of. Go have a beer. It's that simple.

Jeremy: Yep.

Shane: I love it. I love your stuff.

Jeremy: Onto the next video.

Shane: Yes sir.


