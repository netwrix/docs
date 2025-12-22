---
title: "Endpoint Policy Manager Scripts and YOUR MDM service: Un-real power"
description: "Endpoint Policy Manager Scripts and YOUR MDM service: Un-real power"
sidebar_position: 10
---
# Endpoint Policy Manager Scripts and YOUR MDM service: Un-real power

MDM services cannot deliver scripts and UN-deliver scripts. That's where Netwrix Endpoint Policy
Manager (formerly PolicyPak) Scripts Manager AND your MDM service become awesome. Check out this
video for an overview of WHY you need it and some examples of PP Scripts + MDM in use.

<iframe width="560" height="315" src="https://www.youtube.com/embed/sosYsaPbWSo" title="Endpoint Policy Manager Scripts and YOUR MDM service: Un-real power" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak Scripts and YOUR MDM service-Un-real power

Hi, this is Jeremy Moskowitz, Desktop Management and former Group Policy MVP. In this video, I'm
going to show you first why your MDM solution isn't that good at scripting and how we here at
Endpoint Policy Manager with our Endpoint Policy Manager Script Manager plus your MDM is probably
way better than what your vendor provides by itself.

The first thing is that maybe your vendor doesn't provide any scripting ability in their MDM
solution. Some of them don't. Some of them do. I'm going to talk about the ones that do but if you
don't have any scripting ability, well, now you do with Endpoint Policy Manager Script Manager.

If you're a MobileIron customer, this is an extra add-on. In other words, this thing called
MobileIron Bridge you have to pay into in order to run existing PowerShell scripts that they provide
or you can create yourself. But the point is if you want to do this idea, you have to buy into it as
a MobileIron customer.

A lot of these vendors only let you use one script type. Most of them are restricted to PowerShell
but if you've got some intricate scripts that are already VB or batch file scripts, you're kind of
out of luck. I'll show you how to fix that problem.

These scripts will never update. Typically, these scripts are applied and run only one time unless
the script itself is updated. In our world that's different, and I'll show you how that's different.

These other solutions let you target only computers and not users. That's kind of a bummer because
you might want to do something that affects every user on the machine, and you may want to do things
that affect the system itself. With these other systems, you kind of can only do the latter. You can
only affect the system itself.

All the logic must be contained inside the script. This is a big problem because you might have a
script that you might want to say, "Do this thing when it's a desktop; do this other thing when it's
a laptop." That stinks because then you have to figure out how to determine those conditions being
true, and you have to jam that all into the script. So if you're not a bona fide scripting expert,
that can be pretty hard. I'll show you how to work around that.

Most of these scripts cannot be retriggered. The idea is that if you've deployed a script, then that
script has no way to get rerun. These scripts have no way to get retriggered. So once that script
comes down, there's really no way for you to retrigger that and see that happen again. Typically you
need to just update the script and wait for MDM to redeploy it. There's no way to rerun that script
for testing purposes.

These last four – number 3, 2, 1 and 0 – are kind of all about Intune restrictions. At Microsoft
Ignite this last year, they made a big deal that you can now deploy PowerShell scripts using Intune.
The crowd went wild and that's great, but it should be noted about what the limitations are. I want
to go through that here.

The first thing is that it only lets you do PowerShell scripts. Actually, that's another thing. It
only lets you do PowerShell scripts just like some of the other vendors. If you have things that are
not in PowerShell, you can't do it.

The other key restriction is that the scripts must be very, very small: 10 KB for ACSII or 5 KB for
Unicode, which is really, really small.

The second thing which might even be more important is that you can only use the 32-bit version of
PowerShell. So if you have 64-bit PowerShell cmdlets, those are not a thing you can do inside the
Intune plus PowerShell.

The scripts only run when the computer is actually already pre-associated with a user. If you have
non logon devices like kiosk machines, then MDM plus Intune plus scripting is not a thing you can do
here. It's kind of a major restriction.

Also, the scripts will not run with hybrid scenarios. That is, if the computer is both on-prem
domain joined and Azure domain joined, then it's a no-go. The script will not run in that case.

So how do we overcome all that? We've really thought those problems all the way through and tried to
wrestle them all the way to the ground.

The first thing is that Endpoint Policy Manager Scripts is included with the On-Prem and MDM
edition, and it works across any MDM service.

We can target stuff to both user and computer side. It just works the way you would expect.

We can use all sorts of languages, like VB, JS, BAT and PowerShell as a language.

Scripts can be applied ONCE, ALWAYS, and ONCE plus a retrigger if you want to.

We have no size restrictions.

We can work with kiosk mode.

We can work with hybrid join.

And my favorite two superpowers is this idea where you get an ON script and an OFF script. So when
the policy no longer applies, you're predetermining what's supposed to happen when that policy no
longer applies.

And all of our stuff can be wrapped up inside item-level targeting to make it drop-dead easy. In
other words, if you have a script that you want to say, "Do this thing when it's a laptop," great.
We can figure that out very quickly using item-level targeting.

That's it for the little mini stuff here. Now I'm hoping you watched the previous videos where I
created existing policies here in Endpoint Policy Manager Scripts land. I have one here on the user
side which is going to deliver a shortcut and it's also going to un-deliver a shortcut when the
policy no longer applies.

Here's he "Apply action" that's going to do deliver a shortcut when the policy applies. Here's the
"Revert action" that's going to nuke the shortcut when the policy no longer applies. We talked about
this in other videos that you can wrap the whole thing up in "Item Level Targeting" which is
awesome.

You can just point and shoot your way to glory and say I'm going to do this ON script when it's a
"Portable Computer" or when the "Operating System" is Windows 10 or when the "CPU Speed" or when the
"IP Address Range," whatever your goal is you can set the targeting filters so that this script will
only fire off when the condition is true. And when the condition isn't true anymore, we're going to
run the OFF script.

I've already done this script. Actually, in a previous video, I dragged it over here to the desktop
in a little folder called "PPSCRIPTS XML." It's right here, the scripts for the user side to make
the shortcut.

The other thing I did in the other video here is I created another script that will rename my
network adapter, so it's going to do a system wide thing. It's going to find the ethernet adapter
and "Rename" it to be called "AwayNet." Just something so you can see me do something on the
computer side.

Like I said, Endpoint Policy Manager can use not just "PowerShell" but it can use "Batch script,"
"VB Script" and "JavaScript." We've got that ON script and that OFF script.

I've already dragged and dropped this over to a file, and it's ready to go. Now we're ready to close
out the policy editor, and now we're ready to convert the XMLs into an MSI. How do you do that?
We're going to go to the "PolicyPak/PolicyPak Exporter Tool." The Endpoint Policy Manager Exporter
utility lets you "Create a new MSI installer" to then upload to your MDM service.

Let's go ahead create those. We're going to "Add Existing Files." Here they are. I'll just go ahead
and "Open" those guys. Now at this point, you can see that the first item here is going to go to
"Users & Groups." Now I haven't declared any users. This would be for users that would be domain
joined, so in hybrid scenarios we would do that.

Because the machine I'm going to be demonstrating on has no domain joined property, I'm going to set
it to "Computer." This is really important. This script, even though it's a user side thing, is
going to hit "All Users" on the "Computer." That's the amazing part. It's going to hit all users on
the computer. This other thing that's a system policy, it's going to rename the network card, that
is on the "Computer" side. That is on the system side, and there's no changing that.

We'll go ahead and click "Next" here, and we'll call this "Packaged Endpoint Policy Manager Settings
for SCRIPTS." Something like that so you know what you're doing here. We'll go ahead and click
"Next" and finish it out. We'll go ahead and save it here in the same folder, and we'll call it
"PPSCRIPTSMSI.msi." There we go. There's our file ready to go.

Let's upload it to our MDM service. The one I happen to be using is "AirWatch." Again, we work with
MobileIron. We work with Intune. We work with other ones. I've already got the "Endpoint Policy
Manager Client-Side Extension" – that's the moving part to make Endpoint Policy Manager do it's
magic – uploaded. I've got our "Licenses" uploaded. I've got some older "Settings" that are
uploaded.

Let me go ahead and "Add Application" here. I'm going to go ahead and find the MSI file we just
generated together. Where is that guy? On the "Desktop," "PPSCRIPTS XML," here we go:
"PPSCRIPTSMSI." We'll go ahead and "Save" it. It's not a "dependency app." Okay, very exciting
stuff.

I'm going to just zip through this whole thing really fast. This only takes a quick second here. I'm
going to go ahead and "Add Assignment" to everybody. We'll go ahead and do everybody here. There we
go. Ready to go. We'll deploy it to all computers here.

Now this is the thing that takes a while, which is to say MDM runs on its own schedule. I've got it
deployed. It's going to everybody. If I take a look at my endpoint here, the first thing is you can
see that I am enrolled in my "AirWatch" or my MDM service. Again, it doesn't matter which one. I'll
go ahead and close that out.

You can also see that my MDM service has deployed my "Endpoint Policy Manager Client-Side
Extension." That's the magic that makes this all go. There are the "Licenses" to light up Endpoint
Policy Manager. I'll leave this open for now.

The last thing is that we want to see the result. The result we're looking for when the script is
finally downloaded by our MDM is service is that it's going to rename the "Ethernet" adapter and
also going to give us a shortcut. That's just a simple script that I created in previous videos.
What I'll do now is I'll pause the video. We'll come back and we'll see the result of the MDM
service.

Okay, I've waited a while. My MDM service and my client have talked to each other, and here are the
results. The first thing is that here is the "Packaged Endpoint Policy Manager Settings for SCRIPTS"
MSI that's automatically downloaded. Again, our MDM service delivered that to us.

And look, we have the shortcut that affects all users on the machine. I did have to hit F5 to
refresh this, but you can see the ethernet adapter has changed from "Ethernet" to "AwayNet." So it's
doing all those things.

And here's the other best part. I'm not going to use MDM to do this part. I'm just going to do this
by hand. But what happens if the script is revoked? Let's go ahead and pretend that using our MDM
service we decide that we don't want this script anymore. I'm going to go ahead and just "Uninstall"
the preconfigured "Packaged Endpoint Policy Manager Settings for SCRIPTS" here.

If I were to go put the password in here, watch what's going to happen here. We've removed it here,
and watch the icon disappear because we have that ON script idea and that OFF script idea. We were
able to deliver the ON script when the policy and MSI applied, and we're able to revoke that policy
with the script when the OFF script was ready to apply just like that.

Again, no other MDM solution can do that. And again, we're not an MDM solution. We hook into and
make your MDM solution even better. I hope this helps you out and gets you a better understanding of
where Endpoint Policy Manager Scripts plus your MDM solution equals way more awesome than you had
five minutes ago.

Thanks so much for watching, and we'll talk to you soon.


