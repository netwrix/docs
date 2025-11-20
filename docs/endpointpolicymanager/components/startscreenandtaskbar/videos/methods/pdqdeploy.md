---
title: "Taking Control of Your Taskbar and Start Menu with Endpoint Policy Manager and PDQ Deploy"
description: "Taking Control of Your Taskbar and Start Menu with Endpoint Policy Manager and PDQ Deploy"
sidebar_position: 50
---
# Taking Control of Your Taskbar and Start Menu with Endpoint Policy Manager and PDQ Deploy

When you use PDQ Deploy to get your apps "out there", then how can you automatically and nicely
manage both the Windows 10 Start Screen and Taskbar? Easy, when you add Netwrix Endpoint Policy
Manager (formerly PolicyPak).  
In this video, Kris from PDQ and Jeremy Moskowitz, former Group Policy MVP from Endpoint Policy
Manager Software show you how to get it "out there" and nicely manage that Windows 10 Start Screen
and Taskbar.

<iframe width="560" height="315" src="https://www.youtube.com/embed/-Wid5A4pSbY?si=W3sIaBKmyM96QvRf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Taking Control of Your Taskbar and Start Menu with PolicyPak and PDQ Deploy

Kris: I'm Kris from PDQ.com.

Jeremy: And I'm Jeremy Moskowitz from Endpoint Policy Manager Software.

Kris: We're going to show you how to take control of your Start Menu and your Taskbar utilizing
Deploy…

Jeremy: …and Endpoint Policy Manager.

Kris: Awesome.

Jeremy: Let's take a look at what Windows gives you as a Start Menu. Let me ask you a question. In
support land, do you get a lot of people who like this or not many people who like this?

Kris: "Oh, I like this!" says no one ever.

Jeremy: Says no one ever, right. Wouldn't it be amazing if you could deploy the right software that
you wanted and then customize the Start Screen based upon what the user's experience needs to be?
Wouldn't that be amazing? So let's do that.

I'm going to have you, if you wouldn't mind, use PDQ Deploy. Let's go ahead and get Acrobat, VLC,
Firefox and Chrome deployed. So four packages.

Kris: Let's do that. In fact, with Deploy you can actually deploy multiple packages at the same time
to 1, 10, 100, however many computers you want to do this to.

Jeremy: That's good. So this will be "win10computer2."

Kris: Let's do this.

Jeremy: All right, great.

Kris: It's going to start with those, and it should be pretty quick. We'll have these installed,
we'll have them configured, we'll have users that have all these icons wherever they want them.

Jeremy: That's the thing. Even when this is done – and you know this, but for the sake of our
audience – what's going to happen is that nothing magical is going to show up here (in the Start
Menu). It will be in the alphabetical list. That's fine. But that doesn't really help most of your
users. You have a nurse who wants to log on and get to their Brain Scan 12 app. You want to get it
right there, right in a group.

Kris: In their face.

Jeremy: Right in their face. Or all the Office stuff or all the browsers. Whatever is important to
them. You don't want to waste time having users try to figure it out. So after it's deployed, the
next thing we're going to do is make sure we can get it cleaned up for the user and ready to rock.

Let's go ahead and let's take a look. If you don't mind, I'm going to go to "Control Panel" and see
here. We are in our Deploy.

Kris: We're doing the trust but verify thing right here.

Jeremy: Trust but verify. Let's go to "Uninstall a program" and let's see what's going on. All
right, nothing yet, but I expect it to show up pretty soon.

While we're waiting for that to kick in, let me go over to my management station. On my management
station computer, I actually have the same applications ready to go just to make things go a little
bit faster.

In order to create the policy, I'm going to go to my "WEB Engineers." I'm going to call them "Start
Screen for Engineers." You might have different Start Screens for your HR or whoever. The best part
is they can have the same applications but different categories and groups.

Kris: Perfect. We love organizing stuff. I know I do.

Jeremy: All right, so we'll go ahead and click on "Start Screen for Engineers" here. We can do this
on either the user side or the computer side. I'm going to do this on the user side, but you could
have it on the computer side if you wanted.

User side, "Endpoint Policy Manager." We'll go ahead and dive down under the "Start Screen Manager
for Windows 10." We'll do Start Screen first, and we'll do Taskbar second. We're going to "Add" a
"New Collection." The collection is going to be how we're going to define this.

Do you like the idea where we're going to leave everything that Microsoft has and then let users add
their own things plus our things, or should we just nuke everything off the map?

Kris: I like nuking everything. I want control.

Jeremy: All right, nuke everything off the map. But if you wanted to do it yourself, you could leave
what the user or Microsoft has in place and then let people have it. We're going to say "FULL
(REPLACE)" and that's the end of it right there. We'll give you one last shot because we're about to
go nuke it.

Kris: We're doing it.

Jeremy: We're really going to do this thing. So that's how we're establishing that. Then I'm going
to right click and "Add" a "New Group." I'll create two groups. The first group I'll add I'll call
"Biz Apps." Then I'll "Add" a "New Group" called "Browsers" because we deployed four things.

Kris: Does the "Group Name" mean anything? Is it arbitrary, or is it actually going to show up?

JeUremy: This is the name of the group they're going to get.

Kris: Okay, awesome.

Jeremy: We're going to click on "Biz Apps." Inside there, like I said, my machine has these. So I'm
going to point to my machine and "Add" a "New Desktop Application Tile." I'm going to go ahead and
pick the Acrobat Reader on my machine which is the same on their machine. Then I'll go ahead and
click right here.

Kris: It's going to pull those.

Jeremy: Yes, it's pulling all those, and we have a lot on this particular machine. There's "Adobe
Acrobat Reader DC." It's the first one. We'll pick this "Medium" tile here. This is just the "Policy
Name." We'll call it "acro reader." They don't see this part.

Then the second thing we'll do, "Add" another "New Desktop Application Tile" for VLC Media Player,
which I also happen to have on this machine. We'll go ahead. It's probably at the bottom, so I'll
type "vlc." There we go.

Kris: That is really handy right there.

Jeremy: Yep. Click on this guy. While we're here, why don't I put on one of those big Windows apps
like Calculator or Weather or something like that?

Kris: Oh, yeah, gigantic.

Jeremy: Gigantic, yeah, exactly. That's "Add" a "New Universal (UWP) Application Tile." We're going
to pull what's on this machine as well. We'll go ahead and click "Next." It takes a second to
populate what's coming here. I'll pick on "Calculator." The thing about the big applications is that
you can pick a big tile. So I'm going to go ahead and pick one of these big old "Large" tiles right
there. I'll call this "big ol calc."

Kris: That's right. I'm going to take up all the space.

Jeremy: Yes. All right, great. For browsers this is simple too. We just right click and "Add" a "New
Desktop Application Tile." I said Firefox and Chrome. I'll pick this guy. I think it's under M for
Mozilla, but I can't quite remember. Oh, "Firefox," and pick the "Medium" tile. Should we make the
Chrome tile really small?

Kris: Let's do it.

Jeremy: All right.

Kris: Make them work to find Chrome.

Jeremy: Then we'll go ahead and take this guy too and pick this guy and pick "Google Chrome" as our
second guy.

Kris: This looks like a really straightforward and easy process.

Jeremy: We try to make it as hard as possible to get you toward your goal. Okay, so "chrome." We
didn't really talk about it, but I'm sure people saw. You can change not only the size but also the
spacing of where the icons are.

Kris: Oh, wonderful.

Jeremy: We also have a little thing that will best fit it for you if that's something you want to do
as well. That's it. We've created it. Let's go back to your machine. It's all done. Let's go check
it out. We'll go back. I'll hit F5 to refresh, and you are correct, sir.

Now let's do this in real time. Let's set the stage again. You deployed all of your applications
using PDQ. You have predefined or later put on your Endpoint Policy Manager policy settings for your
Start Menu. Here we go. Here's the Start Menu. Let's go back over. We're going to run a handy dandy
GP Update.

Kris: I'm assuming magic is at work here, like you give a little bit of an incantation.

Jeremy: Hopefully not. That's the whole point. Hopefully no incantation needed. We're just going to
run "gpupdate /force," get the latest, greatest policy settings. If all goes well, in real time,
we're going to nuke the Start Menu and put just the two groups that we declared on and only those
guys.

Kris: This is one of those amazing things. Oh, my goodness. There it is.

Jeremy: Oh, "Missing Application." What's missing. Well, that's actually a feature, so we might as
well see what's missing: "firefox."

Kris: You know what?

Jeremy: What's that?

Kris: I just realized my folly. I saw Mozilla and stopped reading on our PDQ Deploy.

Jeremy: Well, this is great. I'm super happy about this. This is perfect. This is a feature that you
can only do in Endpoint Policy Manager land. We told you that we wanted to do Firefox, and this is
great. You made a mistake, but you had it on the Start Menu.

Now let's just do this in real time. Go ahead and use PDQ, deploy Firefox, and then we'll run GP
Update and see the magic happen.

Kris: Let's do it.

Jeremy: You might have to log off and log back on, but let's see what happens.

Kris: Let's see what happens. I think I grabbed Thunderbird rather than Firefox. Let's go grab that
real quick. It's a small download.

Jeremy: Great. I love it.

Kris: Let's go find it. I see "Thunderbird." Let's do Firefox. This should be a quick one. It looks
like we're on "Version" "59." I've done that. It is there.

Jeremy: Okay, and get it over to that machine, right?

Kris: Yep. That was "win10computer2." Let's do it.

Jeremy: While we're getting there, why don't we talk about the Taskbar. Wouldn't it be interesting
to put some of your important applications also in the Taskbar to guarantee that they're right there
in the face of users?

Kris: Yes, please.

Jeremy: Okay, yes, please. Let's go ahead and put Chrome and Calc.

Kris: Okay.

Jeremy: Okay, great. Let's go back over to our GPMC machine. We're going to put it in the same GPO.
That's totally fine. We're looking for the "Taskbar Manager for Windows 10." Right click. Again, we
try to make it as hard as possible. We "Add Collection." Wait. I think last time we nuked. Why don't
this time we just let people add stuff.

Kris: Okay.

Jeremy: So we'll leave what's in place and we'll merge, so we'll leave "Merge" in place. "Merge"
says go ahead and leave what the user has in place and put your own stuff.

Now we're going to go ahead and "Add" a "New Universal (UWP) Application," which we'll be Calc
first. Why not? Although it doesn't look big there, I suppose. I'll go ahead and pick "Calculator."
Then we'll say "calc on taskbar."

Then the second thing we'll do is Chrome. So "Add" a "New Desktop Application." That's a "Registered
application." Then we'll go ahead and pick "Google Chrome" and click "Next" and type "chrome." There
we go.

Now for this policy setting to kick in, we're going to do another GP Update ("gpupdate /force"). But
this puppy only kicks in when you log off and log back on. So you won't see any change immediately,
but you will the very next time you log on.

Now I'm sure Firefox is done, but let's go to the Start Menu and double-check. Oh, there it is. See
that?

Kris: Oh, my goodness!

Jeremy: Hey, come on!

Kris: That's amazing.

Jeremy: That's the whole point, right? Now let's go through that again. We deployed some stuff using
PDQ, but we made a small mistake. No problem. Endpoint Policy Manager told us as the end user to
tell you, the admin, about the mistake. You then fixed the mistake with PDQ Deploy, and your Start
Menu is all rectified. That was pretty awesome.

Kris: That was pretty awesome.

Jeremy: Now what we'll do is we'll go ahead and log off. We're going to go ahead and "Sign out" just
to see the Taskbar for the very last mile here. We'll find "WIN10COMPUTER2." We'll go ahead and
double click and log back on. Here we are. Go ahead and watch the Taskbar. There we go. It's merging
and adds in both Calculator and Chrome just like that.

Kris: That's wonderful. That takes a very complex process for the Taskbar and makes it really easy.

Jeremy: Yep.

Kris: That is fantastic.

Jeremy: Well, thanks for having me on the video.

Kris: Yeah. Thanks for watching.

Jeremy: Thanks, guys.


