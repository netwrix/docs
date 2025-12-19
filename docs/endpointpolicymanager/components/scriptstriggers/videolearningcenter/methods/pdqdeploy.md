---
title: "Removing Unwanted Windows Apps Using Endpoint Policy Manager and PDQ Deploy"
description: "Removing Unwanted Windows Apps Using Endpoint Policy Manager and PDQ Deploy"
sidebar_position: 20
---
# Removing Unwanted Windows Apps Using Endpoint Policy Manager and PDQ Deploy

Once you have your applications deployed using PDQ, how do you quickly REMOVE in-box junk,
recommended, and advertised apps like Candy Crush, Windows Mail, XBOX apps and so on?  
Easy.  
By using Netwrix Endpoint Policy Manager (formerly PolicyPak) Scripts Manager, and a Endpoint Policy
Manager preconfigured script.

Check out this video to see Endpoint Policy Manager instantly remove junk from the Windows 10
desktop… in no time flat.

<iframe width="560" height="315" src="https://www.youtube.com/embed/HAfS48RAz1I?si=MyV7Bq88X4zOS71-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Shane: Hey, everybody, I'm Shane.

Jeremy: I'm Jeremy.

Shane: What are we going to do here?

Jeremy: Let me ask you. Do you have people who ask you from time to time, "How the heck do you get
rid of all the" – I'm not going to call it crap, I'll call it junk – "how do get rid of all the junk
that Microsoft preinstalls?"Shane: The noise?

Jeremy: The noise, and get down to just maybe the good apps that you want instead of all the stuff
that's preinstalled. Do you get that from time to time?

Shane: I've actually asked that.

Jeremy: Yeah, it's very annoying.

Shane: It was a slam-dunk in previous versions of Windows.

Jeremy: Yeah, but now it's like all this stuff. And there are two types of packages. There are
packages that are preinstalled. Then there are packages that are suggested, and they're kind of like
almost installed. Wouldn't it be amazing if we could get rid of all that stuff all in one fell
swoop?

Shane: Let's do it.

Jeremy: Let's do it. We're going to leave this machine up and running here. I've actually got this
script. You can get this script from Endpoint Policy Manager.com. It's not hard to generate if you
want to do it yourself. Basically, what you're doing is you're getting an AppX package
("Get-AppxPackage"), finding its name, and removing the AppX package ("Remove-AppxPackage").We're
going to take this whole giant script. We've got like, I don't know, 90 things. Then we're going to
use Endpoint Policy Manager Scripts Manager. Endpoint Policy Manager Scripts Manager is a built-in
thing for us. We'll go to "WEB Engineers." We're going to say "PP Uninstall Junk Apps." Maybe
"unwanted apps" is probably the nice way to do it: "uninstall unwanted apps."

Shane: Okay.

Jeremy: Now the thing is, you could do this is a garden-variety Windows script, but then it's going
to run every time, slowing the machine down at log on. Wouldn't it be better if you could deploy it
once and never again? That's the lash-up.

We'll go to user side, "Endpoint Policy Manager" and we'll dive down under "Scripts Manager." We'll
then right click and "Add" a "New Policy." Now here's the other part about this. You might want to
have some packages that are going to be removed, say, when you're on the sales team, but then you
want to get back some packages if you're on the marketing team. So you need an on script and an off
script. I'm not going to do the off script part, but you can use your imagination.

Here's the on script. I'm going to use "PowerShell script," "Run script as user" and paste in all
that stuff. We're going to get rid of all these things in real time. But you can envision that
there's an off script as well, so when I move from sales to marketing I'm turning back on some
packages. I'm installing some things.

Shane: And you have a cheat sheet right there too.

Jeremy: Yeah, you're ready to rock. You could do it "Always." Probably overkill for what we're doing
here, but there could be a script where if the user keeps making a change over and over again,
you're going to keep changing it over and over again. "Oh, really? Who's in charge? Us or the users?
It's us." Or "Once," which is what we're going to do here, or "Once or when forced."Let's just do it
one time and never again. We'll go ahead and click on "Next" here. We'll call this "remove junk
apps," and we're ready to rock. It's just that simple. We'll go over to our endpoint machine which
has all the stuff here, and we'll watch it in real time. We'll go ahead and go to a "Command
Prompt."

Shane: You're going to go ahead and force a GP Update, I take it?

Jeremy: You are reading my mind. Now we're going to run "gpupdate /force," but we're going to watch
it in real time. Now it takes a second or two to kick in, but you'll know it's kicking in when all
of a sudden you're going to start seeing things fly off the Start Menu and fly off the "Recently
added" list. I see some fluttering. I see some activity. There we go. Boom, boom, boom. It's nuking
each of the things off.

Now notice this once category we have here: "Good Apps That won't Delete." That's the kind of stuff
you'd be deploying using PDQ Deploy. In my case, I just put "Notepad" in there. You can see, using
this script, it's substantially taking away all the things that most people don't want in their
builds. And it does it one time and never again.

Shane: Endpoint Policy Manager, baby.

Jeremy: Here for you, guys. Thanks so much.


