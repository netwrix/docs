---
title: "Deploy and Manage Firefox with PDQ Deploy and Endpoint Policy Manager"
description: "Deploy and Manage Firefox with PDQ Deploy and Endpoint Policy Manager"
sidebar_position: 50
---
# Deploy and Manage Firefox with PDQ Deploy and Endpoint Policy Manager

Microsoft MVP Jeremy Moskowitz and Shane from Admin Arsenal deploy Firefox with PDQ Deploy and
manage the heck out of it with Netwrix Endpoint Policy Manager (formerly PolicyPak).

<iframe width="560" height="315" src="https://www.youtube.com/embed/NCrZnIMgimE?si=I4STS2IBWiSKftX5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Deploy and Manage Firefox with PDQ Deploy and Endpoint Policy Manager

Shane: Hey everybody. I'm Shane from Admin Arsenal and this is Jeremy from PolicyPak and GP answers.
Now, we're going to extend this video series. We're going to deploy Firefox and then –

Jeremy: Manage the heck out of it.

Shane: That's what I love. So, in PDQ deploy I'm going to go to the package library. I'll just type
in Firefox here, a quick filter. And then we're going to grab the Firefox 4601.

Jeremy: Nice.

Shane: And then we're going to deploy this –

Jeremy: Do you think your internet connection's fast enough here? That was like one second to
download 42 megabytes.

Shane: And now it's copying the files to your repository. And then we're going to deploy this to
computer 1, computer 2 again, right?

Jeremy: Let's do it to computer 1 and computer 2. Why not?

Shane: Alright. So, there is Firefox. We'll hit deploy. Perfect. And hit deploy.

Jeremy: And let's go over here. Let's see it happen in real time. And so I should, again, magically
just see the Firefox icon.

Shane: Actually in this package that we're using we remove the Firefox icon.

Jeremy: Okay.

Shane: But if you want, nothing up our sleeves, you can go check the control panel.

Jeremy: No? Okay.

Shane: If you want to see that it is in fact installed or you can obviously go to the start menu.

Jeremy: Start menu. Sounds great.

Shane: Start menu and it will be right there.

Jeremy: Alright.

Shane: So, we've got a couple of steps here.

Jeremy: Okay.

Shane: It's currently running step four of eight.

Jeremy: Okay. Alright.

Shane: So, it's just rocking and rolling. Now, one thing we do, we also just put a base set of
policies down. Obviously you know how they handle policies.

Jeremy: Yes. But, of course, the thing is once you put them down there's nothing that says a user
can't drift away from that, right?

Shane: Correct.

Jeremy: So, it's great to have stuff that's in the package for deployment, but to keep it fully
managed over the long haul, that's where we're going to come in.

Shane: I'm going to move this over to you sir.

Jeremy: Okay. That's it? We're done?

Shane: Yeah.

Jeremy: That was so fast. I can't – let's see if you're – oh, my gosh. You're so accurate. There it
is. So, we'll run Firefox. Let's take a look and who cares about this first time stuff. We'll just
click through. Make sure it's actually working and let's do a little before and after. We'll go to,
say, the tools options. We call that the hamburger menu by the way.

Shane: Oh, okay.

Jeremy: And maybe we can set the homepage and maybe for security what if a user were to uncheck
these three checkboxes? Would you consider that secure or unsecure?

Shane: For my environment?

Jeremy: Yeah.

Shane: That's an improvement.

Jeremy: An improvement.

Shane: You don't want your users doing that stuff of course.

Jeremy: No and if a user does that, a user unchecks those check boxes, that's it man. They've made
your world less secure. So, what we want to do is just prove that we're going to deliver those
things and lock those suckers down so you just can't' work around it.

Shane: Awesome. Okay.

Jeremy: So, let's go over to our management station which is over here. We're going to go to our
deadwood workstations and we're going to go to our standard computers. We're going to create a new
GPO here and call it "Manage the heck out of Firefox with PolicyPak." How's that for a name?

Shane: How's that for typing?

Jeremy: Yeah.

Shane: I'm used to Lex. He pecks. It takes him 17 minutes just to get that out.

Jeremy: So, we go to computer side, PolicyPak. We'll go to applications settings manager and we can
do a lot in Firefox. A lot of times people come to us because they want to manage the certificates
in Firefox. They want to manage the bookmarks in Firefox. But we'll just go right for things that we
can just touch really quick. But we can do just about do nearly everything. So, if we go to the
homepage here. We'll go to policypak.com and we'll right click on this thing and we will lock down
this setting using the system wide config file. We'll go also over to security and we'll check all
these three checkboxes because we said if the user has the ability to work around these settings
you're in the doghouse.

Shane: And you double-clicked on it. Basically, you want to see the underline.

Jeremy: Yeah. Underline means go in PolicyPak land. So, if you decide you don't want to do something
anymore it's as simple as that, but we're going to go ahead and lock it down. And that's all there
is to it. There's a billion things you could do here to really manage the heck out of Firefox, but
we're done. That's it. Let's go over to our management station. We'll go ahead and run GP update
here. Okay. We'll wait for this to finish.

Shane: You know, Firefox is one that our customers constantly are asking "How can we enforce our
policies?"

Jeremy: Yep.

Shane: And we love to say "PolicyPak."

Jeremy: PolicyPak's the way to go. Let's go ahead and take a look. We'll just go right back over to
Firefox. Go back over to the hamburger menu, also called the Australias. And there we go. There's
the homepage, all locked down. Beautiful. And if we go to security, all locked down. You just can't'
work around it. You want to remove sync? You want to do certificates? We are the way to do just
about everything in Firefox so deploy with those guys, manage it with us guys.

Shane: Rock on. Hey everybody. We'll see you at the next video.

Jeremy: Next video.


