---
title: "Endpoint Policy Manager Scripts and Triggers: Get to understand login script trigger with GP and MDM systems !"
description: "Endpoint Policy Manager Scripts and Triggers: Get to understand login script trigger with GP and MDM systems !"
sidebar_position: 10
---
# Endpoint Policy Manager Scripts and Triggers: Get to understand login script trigger with GP and MDM systems !

No login scripts in MDM and Intune got your down? Looking to have something faster and more reliable
(and something that works offline) for GPO and Netwrix Endpoint Policy Manager (formerly PolicyPak)
cloud? Then check out Endpoint Policy Manager Scripts + Login Script Triggers... right here!

<iframe width="560" height="315" src="https://www.youtube.com/embed/y14Q4qUndxM" title="Endpoint Policy Manager Scripts and Triggers: Get to understand login script trigger with GP and MDM systems !" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz. In this video, we're going to learn how to use triggers with regards
to Endpoint Policy Manager scripts. There's a bunch of problems we want to overcome. The first one
is that if you're using a machine that's connected to an MDM service like this one is, there's no
log-on script. There's also no log-off script. What I'm going to show you how to do is how to create
a trigger for your machines for your MDM service. Another thing we want to solve today is if you are
domain-joined, there's no way to trigger something when a particular application is run. I'm going
to show you both of those things right now with Endpoint Policy Manager Scripts Manager.

What we're going to do is our our east sales users, we're going to create a GPO called Endpoint
Policy Manager Scripts and Triggers. Of course this GPO name could be whatever you want. Then I'll
go ahead and click Edit here and this is just built right into Endpoint Policy Manager. You can do
this on the users side or the computers side, so the idea is that you can say for everybody who logs
on the machine, they're going to get this script, or you can do this script on the computer side.
We'll go ahead and right-click and Add New Policy here. What we'll do is we'll define our script.

For this simple example, I'm going to do a PowerShell script that puts a shortcut icon. Here is the
script that we're going to use, so I'm just going to take it. It's going to put a shortcut icon the
desktop. We're going to run this script as user. If you have a complex or unusual script that you
need to run at system, you can run it with elevated rights, which is pretty nifty. We're going to
skip over this idea of revert action because revert actions are not supported on trigger-based
scripts. What we'll then do is say instead of always, once, or once when forced, now we'll get to
use on trigger. We'll just do a simple log-on trigger. Now log-on, you can also do at shutdown. You
can do it when the session is locked or unlocked for Citrix and terminal server. You can also do
when process starts, stops, or on a particular schedule, which is also incredibly nifty.

I'm just going to do log-on for right now. The other part about log-on is that you can also delay X
number of minutes after log-on. I'm not going to do that. I'm going to have it just fly right away.
Once we've done this log-on trigger script policy here, we're off to the races. Let's go ahead and
check it out. I don't have my item here. What I am going to do is run GP Update just to get the
signal for this policy. Just give this a second to catch up. Now that that's done, let's go ahead
and go over and let's log off. We'll log on here, and now that we're logged on, boom, there it is.
Our scripted activity is right there right at log-on time. Again, if we wanted to push this into X
number of minutes into the future after log-on, we can certainly do that.

Now it's time to save this out for use with MDM. We'll go ahead and export this as XML, call this PP
Export Script 1 here. Remember, we have this little utility that's an MSI wrap-up utility here.
That's the Exporter tool. Then what we want to do is create a new MSI, and we'll add that existing
file here. Let's find my Export Script 1 file and I'm going to change this for use on the computer.
Every user on the computer will now get this script. Then I'll go ahead and click Next and I'll save
it out as an MSI to upload to my MDM service. I'll call it Exported GPOs.

Now it's time to get this into my MDM service like InTune right now. Here we are in Microsoft
InTune, and you can see we've already pre-staged and assigned the Endpoint Policy Manager client set
extension and the Endpoint Policy Manager license. Now it's time to add in the exported group policy
objects. All three of these things are going to make it go. Here we are back on our MDM-enrolled
machine. We've gotten it synchronized. It got the policy. We're all set to go. Only thing that's
left is to sign out, sign back on, and see that our log-on script is now hitting with Endpoint
Policy Manager scripts and triggers.

If we go ahead and log back on here, give it a second to catch up, and here we are. We'll all logged
on. There it is, the Visit Endpoint Policy Manager item, and like I said, if we decide – a user
throws that in the trash and then they log out and log back on, what's going to happen? This is a
log-on script. It's happening through MDM. It's going to happen absolutely every single time because
that's what we said to do. Let's go ahead and log on, see that that's true. There we go. Our log-on
script is running.

If you like the idea of Endpoint Policy Manager scripts and triggers, you're welcome to watch some
more videos on how the triggers work. Thanks so very much and talk to you soon.


