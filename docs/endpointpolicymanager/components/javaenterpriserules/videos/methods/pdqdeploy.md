---
title: "Deploy and Manage Java with PDQ Deploy and Endpoint Policy Manager"
description: "Deploy and Manage Java with PDQ Deploy and Endpoint Policy Manager"
sidebar_position: 10
---
# Deploy and Manage Java with PDQ Deploy and Endpoint Policy Manager

Microsoft MVP Jeremy Moskowitz and Shane from Admin Arsenal show how to deploy Java with PDQ Deploy
and manage the group policy with Netwrix Endpoint Policy Manager (formerly PolicyPak).

<iframe width="560" height="315" src="https://www.youtube.com/embed/x3B-I_CqeDM?si=25F5EG3HHNFpbLlb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Deploy and Manage Java with PDQ Deploy and Endpoint Policy Manager

Shane: Hey everybody. I'm Shane from Admin Arsenal. This is Jeremey from PolicyPak, GP Answers. You
guys know this guy. He's a hero. What are we going to do today buddy?

Jeremy: Today, we're going to have you deploy any version of Java. We already have Java 8 Update 25
cued and ready to go. You're going to deploy that using pdq and I am going to manage the heck out of
it using PolicyPak.

Shane: Awesome.

Jeremy: That's the goal.

Shane: Once again I'm just going to type in the names just for demonstration purposes.

Jeremy: Yep.

Shane: Computer 1 okay?

Jeremy: Yeah. Sounds good.

Shane: So, we're going to push out Java 8 Update 25 now. Obviously, there are later updates. As they
come out do you guys stay on top of that?

Jeremy: Yep. Generally, we do and so the idea is if there is a new version of Java or Flash or
Firefox the Pak will either continue to work or will spruce up the existing Pak to give you a new
Pak.

Shane: Okay, well while this is happening do you want to set up anything?

Jeremy: Yeah. I'll tell you the kinds of things people call us for a lot and you tell me if you have
these problems too. Let's start out with manage the heck out of Java with – oh, see, that's a bug in
the GPMC actually. Java with PolicyPak. There's a fix for that. I have it on my blog. Alright, so
we're going to go ahead and create a new GPO and link it. And then what we're going to do – what
we're going to actually manage are three kinda important topics. Topic No. 1, we'll say reduce the
ability for Java to self-update, that annoying pop-up thing that can happen from time to time. The
second thing we're going to do is maybe make it high security.

Shane: Okay.

Jeremy: And then the third thing we're going to do is reduce the ability for regular people to
change their own Java site exceptions list.

Shane: Now, what about those – like I've got some users that have to have administrative rights.

Jeremy: Yep.

Shane: And they like to be pesky. They like to go in there and change things.

Jeremy: Well, we're going to do our best to make it at least pretty freaking annoying for them.

Shane: I like the way you think sir.

Jeremy: So, we'll go to computer side, PolicyPak. We'll die down under application settings manager
and we've got, like I said, more than 400 preconfigured packs. So, we're going to go ahead and pick
the oracle Java 8 – 25 pack. And it's as simple as point and shoot. So, for update, let's say we
don't want to check for updates automatically. We want to make it so that smart admins use a tool
like yours to do the updates when they see fit, not when Java sees fit. We'll go to security and
change this from high to very high.

Shane: Okay.

Jeremy: And then lastly, here we're going to – oh, I forgot. We also want to lock down this setting
using the system wide config files so at least we make it a lot harder. And then lastly we're going
to use this thing called the Java site exceptions list. Now, there's two ways you can use this. The
first way is mode replace. If they've already got something that they've done, just smash over it
with what you want to do here.

Shane: Mm-hmm.

Jeremy: Choice two is you can change this to mode merge and mode merge will say "If they've already
got a list and you've got a list, combine the two."

Shane: Okay. I don't want to do that.

Jeremy: No.

Shane: I want to replace.

Jeremy: No. Of course you do.

Shane: I'm the admin.

Jeremy: You're in charge not them. Now, we're driving in these two settings, PolicyPak and GP
Answers in here, but, wait, there's more. We can say even if a user tries to be super naughty,
perform ACL lockdown ([https://www.policypak.com/lockdown](https://www.policypak.com/lockdown)) thus
taking ownership of that file so the user can't work around your settings.

Shane: After you drop the site exceptions file.

Jeremy: Yep. Exactly right. We'll just click okay and that's it. That's literally all there is to
it. You can do just about everything in Java. We're just doing those three things so let's see if we
hit the goal. Let's take a look and just see if Java's there first. Okay? Go to programs.

Shane: You got it.

Jeremy: You got it. And then what we'll do is just go to any old command prompt and run GP update.
You could just wait to log on the first time. You could reboot the computer. You could just chill
out for a while and group policy will naturally apply. I'm just running GP update to accelerate the
hands of time here a little bit.

Shane: Okay, yeah.

Jeremy: We'll wait for this to finish. That's it. We'll go ahead and close the window here. Oh, wait
a minute, you told me –

Shane: Yep. You're right. Because we were talking about this. In my package I like to force my Java
install into the JRE8 folder not per –

Jeremy: Not the standard folder so the good news is that we can make PolicyPak try anyway by doing
what's called predefined item level targeting off. In other words, if we don't see the package where
we think it's going to be, just try anyway because that's –

Shane: You may as well call that Shane mode.

Jeremy: Shane mode. I think you've now embedded your stuff in my product. Alright. We're going to GP
update again and then we'll make sure that it works.

Shane: I love that video you did on showing how this does not close a remote desktop session with
when you do GP update. That was fantastic.

Jeremy: Is that great?

Shane: If you haven't seen that look for that video.

Jeremy: Worth the price of admission right there, right? So, go ahead and we'll click Java here and
we go to – no. First no update tab. That's important. Then we'll click on security. Boom. Very high.

Shane: And it's grayed out.

Jeremy: And it's grayed out. Users can't work around it. And here's the site exceptions list. We've
driven our settings in. Now, watch this. If you are a standard user you could click in here and you
could remove, remove, right? Notice how it doesn't actually remove.

Shane: I like that.

Jeremy: So, you can't add. You can't remove. You can't do anything because PolicyPak's in charge.
Really, you're in charge not your users. And that's the key takeaway.

Shane: Absolutely.

Jeremy: So, you deploy using PDQ. You manage the heck out of it using PolicyPak. That's the drill.

Shane: And you know talk about the price of admissions, that site exceptions is worth having. That's
the most frequently asked question, I think, for our customers when they say "How can I enforce
this?"

Jeremy: Yeah. Yeah, and like I said, you can either replace or you can merge. PolicyPak's the way to
do it.

Shane: PolicyPak guys. I'm Shane.

Jeremy: Jeremy.

Shane: Talk to you later.


