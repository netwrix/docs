---
title: "Auto Rules Generator Tool (with SecureRun)"
description: "Auto Rules Generator Tool (with SecureRun)"
sidebar_position: 50
---
# Auto Rules Generator Tool (with SecureRun)

Once PPLPM and SecureRun are on, users are blocked from running unwanted stuff. But how can you
create some rules automatically to ALLOW or ELEVATE applications and installations? Check out this
free tool from Netwrix Endpoint Policy Manager (formerly PolicyPak) !

<iframe width="560" height="315" src="https://www.youtube.com/embed/Jju3eIdqq08" title="PPLPM: Auto Rules Generator Utility" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PPLPM: Auto Rules Generator Utility

Hi. This is Jeremy Moskowitz. In this video, I'm going to show you how you can automatically and
quickly generate rules
for[https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html](https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html)
using our Automatic Rule Generator utility.You're going to find this utility in your download here
in the "PolicyPak Extras" folder. I'm going to go into that in just a minute, but here it is:
"PolicyPak LPM Auto Rule Generator Tool."

Let's set the stage. The stage is that you've got a Group Policy setting with "Least Privilege
Manager" and our "SecureRun policy," just to set the stage here. We already have videos on the
"SecureRun Policy," but when "SecureRun" is turned on, what happens? Only applications that are
owned by these people, "Administrator" or "TrustedInstaller" or "SYSTEM," are going to run. If
they're not installed by the admin, then they're not going to run.

Let's see that as an example. Can we run "Adobe Reader"? Yes, we can because that was installed by
the admin or SCCM or SYSTEM or something like that. What about applications that are downloaded by
the end user like "NotepadP"? That's going to be blocked by SecureRun. Or "CamPlay"? That's going to
be blocked by SecureRun. Or trying to install an application?

Anything is going to be blocked because the owner on the file, if we take a look at "WinZip" here,
the owner, "Security" and if we take a look at "Advanced" and we look, the "Owner" is "SYSTEM" here.
When users download crap off the Internet, they are the owner. If we look at "Security," "Advanced"
here, the user is the "Owner."

Now that's the problem. The problem is as soon as you turn SecureRun on, a lot of things are going
to stop working by design. You don't want users to be able to run these things, run "Scripts" and
all that other stuff. So like I said, a bunch of things aren't going to run.

What we've created is this thing called the Automatic Rule Generator Tool. In fact, let me turn off
SecureRun for now just because I need to be able to run the tool here. Let me go ahead and run GP
Update ("`gpupdate`") to just turn it off for a second here.

Okay, so now SecureRun is off and all sorts of things that were prevented are now going to start
running. "CamPlay" and "NotepadP" and users will get prompted for Process Manager ("Procmon") and
all sorts of things. They can't run it because they're not a local admin.

Let's talk about what the tool does. The tool is going to help you make discoveries. You would often
use this tool for touching your gold image. For instance, we're going to pretend that this machine
that we're on is a gold imagine. I have a bunch of stuff on the desktop just to make it easy for an
example, but you'll see that the Automatic Rule Generator Tool lets you do stuff anywhere.

Here's the "Endpoint Policy Manager LPM Auto Rule Generator Tool." I'll go ahead and run it. Again,
I'm running it as the user. Today, as I make this video, this tool only lets you "Make Rules from
Local Computer." At some point in the future, we're going to be able to "Make Rules from Remote
Computer" and also based on "Event Logs" that happen from either one or multiple machines. But as it
sits right now, this tool works with one computer and lets you create the rules.

By way of example, you can select all sorts of "Locations" where applications are stored. I'm not
going to do that just for the sake of expediency. I'm going to pick a particular location ("Other
Locations") like the "Desktop." Because you saw that on my Desktop I had a bunch of stuff that I had
to make some decisions about. Do I want to allow it? Do I want to run it? Do I want to keep it
blocked? And so on.

Here are the things that SecureRun will prevent. I'll go for everything: executables ("EXE"), "MSI,"
"SCRIPT" and "JAVA Applet." We're working on "UWP/METRO" style apps "Coming soon." Let's go ahead
and "Expand All." This is everything that's on the Desktop. This is everything that's on the Desktop
that qualifies as something that Endpoint Policy Manager can elevate, block or enable.

I'm going to say "Check All," let's do everything here. Not that we're going to make a rule for
everything, but let's evaluate everything here. If there's something that we didn't want to
evaluate, we don't have to check the checkbox. I'll go ahead and click "Next" here.

This is what we call the "SecureRun Simulator." I want to "Enable" the SecureRun Simulator and take
the defaults. Or if you've added members like your SCCM service or some other third-party thing that
deploys software, you'd want to "Add member" because that's going to evaluate what's going on in the
machine right now.

Now on this machine, of all the files that we said, these are the things that are going to be marked
"Automatic Block" or "Automatic Allow." Actually, let's look at that first line second. But then
look at all these other things that are automatically blocked. In fact, we just saw that. We saw
that "CamPlay" was blocked when SecureRun was on. We saw "NotepadP" was blocked when SecureRun was
on. I tried to run Process Monitor ("`Procmon`") and it was automatically blocked because SecureRun
is going to block absolutely everything.

But let's make some decisions. We know that Process Monitor ("`Procmon`"), we want to actually
"Elevate" that. "CamPlay," that's a cool application, but we don't need to elevate it. We just want
to simply "Allow" it.

Then wait a second. Look at this special one over here. This one says "CamPlay-Admin-Owned." That's
the name of it. I made it that on purpose. You can see I have "CamPlay" and "CamPlay-Admin-Owned."
Let's look at that on the Desktop. Let's see the difference. Here's "CamPlay" and we have one called
"CamPlay-Admin-Owned." What's the difference here?

If we look at "Security" of CamPlay, you can see that "EastSalesUser1" copied that file down onto
the Desktop. If we look at "CamPlay-Admin-Owned" and look at "Security" here, it shows that the
"Administrators" group is the owner of that file. Let's go ahead and take a look back at the
Automatic Rule Generator Tool. It's going to be automatically allowed because that person is inside
a group that's on the "Allow" list.

So if you want to, you can leave it as "Automatic Allow," or you can change it to "Elevate" (I can't
imagine why you would want to) or "Block." You can say that file shouldn't be there. Even though
it's admin copied, I want to block it. I'm going to leave it as "Automatic Allow" just to do
something.

Then you could if you want to put a double smackdown on something. Sure, things will be marked
"Automatic Block," but if you want to, you could put an explicit "Block" rule if you want to as
well. There's no real need if you're automatically blocking it with SecureRun, but it does give you
an option.

So you have "Automatic Allow." You can "Allow," which is simply let it run even though the hard
candy shell is on with SecureRun. You can "Elevate" if you know that there's something that you want
to do. In fact, you can elevate lots of things. For instance, let's do an executable and
"SkypeSetup." We'll go ahead and automatically "Elevate" the "SkypeSetup" routine, and we'll
specifically "Block" "Zoomit" as well. So that will just make a couple of these changes here.

So of the "28" things that we found, we're going to leave one thing "Automatically Allowed," "23"
things will be "Automatically Blocked," "2" things we're going "to make ELEVATE rules," "1" "ALLOW
rule" and "1" "BLOCK rule." So we tell you what we're going to do in advance.

The next question is, how do you want to do this? We recommend you keep the defaults, which are
"Create signature rules for files that are digitally signed" and then secondarily as a second factor
– this is called a combo rule – you want to "Match specific programs by file's information or path"
and "if a file is not signed, create the following types of rule," a "File hash" rule. You could
also just go right to "Path" rules or you can "Create file hash rules for all files." We recommend
you just leave the defaults here.

Go ahead and click "Next" and these are the rules that are going to show up in Group Policy land, or
you can export these if you want to for use with Endpoint Policy Manager Cloud. Here are the rules.
We're saying "Allow" "CamPlay" based on "Hash." Why did it pick hash? Because it's not digitally
signed, so we had to fall back to hash.

For ProcessMonitor ("Procmon"), it picked "Signature + FileInfo," so we're going to get as specific
as possible there. And then same thing for "Skype" as an MSI, use "Signature + FileInfo." For
"Zoomit," we "Block" it with "Signature + FileInfo."

Let's go ahead and click "Next." We need to actually say we want to "Check All." We've got all four
checkboxes checked, and we're ready to actually do something useful. P.S., by the way, there are
some extra little fly-out options here. You an "Open Location." You can "Open as XML rule in
Notepad." If you just want to see what's our thinking here, what are we're going to do, you can just
look inside and see right there what the rule is going to be.

You can click "Next," and these are the rules that we're going to generate. We've selected all "4"
things, and we want to make "2" "Elevate" rules, "1" "Block" rule and "1" "Allow" rule. Because we
had the SecureRun simulator on, let's go ahead and also "Export SecureRun Rule" and turn on
SecureRun in the Group Policy Object of our choosing.

You could if you want to "Export as XML file for later import" for use in Endpoint Policy Manager
Cloud or your own MDM service, or you can go right here and select "Copy rules to PPLPM collection
an existing GPO" and select a "GPO to update."

Now remember, we're running this tool as a standard user. So you're thinking, how can a standard
user update a particular Group Policy Object? No problem. Let's go ahead and "Select GPO." Let's
find the GPO we were working on earlier which is "PPLPM with SecureRun demo." This is the GPO you
saw me create earlier. Click "Next," but we're not going to have edit rights.

We can do this on the user or computer side. I'm going to continue doing it on the user side, but
you can do user or computer. You could also "Add Collection" if you wanted to that says when the
machine is a human resources person or a developer or IT pro. You can make any sort of arrangements
here. I'm not going to do that here, but it's an option if you're so inclined. We'll just go ahead
and create the rules right at the root there and click "Next."

We're going to try to make these rules inside the GPO as a standard user, but what's going to
happen? "You do not have permission to perform this operation." You click "OK," and you can get
prompted for the correct person who can create GPO rights. That might be this guy. We are able to
manipulate the GPO now because you provided the right credentials here.

Now we can "Edit GPO" provided this machine has the RSAT utilities. Actually, let's go on the safe
side here. Let's go ahead and close that GPO we had open earlier so there's no conflict or anything.
Let's go ahead and "Edit GPO" here first. Let's go ahead and click "OK." Let's give it the correct
rights to edit the GPO. You have to have the RSAT utilities in order to do this.

Now if we go to user side, "PolicyPak/Least Privilege Manager," we'll see all the rules we just
created automatically generated. You can click on any of them to see what it looks like. This is the
internal view of it. You can see we have the "Signature" and also the "Product version" information.
That's what we're matching on there. I'll go ahead and close that out.

Let's go ahead and close this GPO here, and let's just see it. Let's right click over the GPO here
in our other admin console. Let's go ahead and "Refresh." We'll see that the report is all there.
Let's just make sure the GPO is all there. Still here. Same exact idea, user side, "PolicyPak." It's
the same GPO but just looking at it from a different computer here. Yes, all the rules are there.

Now we're ready to try it, so let's go ahead and close this out. The rules are in place, so now we
can close this out and we can run GP Update ("`gpupdate`"). Let's see what happens now that we've
applied the rules. We said we wanted to do a handful of things. Let's see if those handful of things
will, in fact, work as we expect. Done.

Let's go ahead and review. We said all of our standard apps are still going to run. We didn't make
any rules about that, so nothing is going to change there. Let's start off. "NotepadP," we've got
SecureRun on. What's going to happen? Blocked, that's what we expect.

"Procmon," we said run elevated, and Procmon runs elevated. We said "CamPlay.exe" to just allow
because we don't need to run that elevated, just allow. That runs fine too. If we take a look at
"SkypeSetup," "SkypeSetup" will now run elevated also because we made an elevate rule.

SecureRun is on doing its thing, blocking everything that we don't have any explicit rules for.
That's its job. If the application is owned by the user, it's not going to run. But if we do have a
rule like in this case for Skype, we're going to elevate it.

Oh, there was one more thing. Remember, we have two versions of CamPlay. We have
"CamPlay-Admin-Owned." Just to prove a point, that's going to run even though there's no rule
because that puppy is owned by the admin. That was allow stuff because the admin put it there.
That's going to run. It's basically the same thing as these applications. These applications are
also going to run just fine because they're placed there by the admin, so there's really just an
implicit allow rule on those.

That's about it for Least Privilege Manager Automatic Rule Generator Tool. There are some advanced
scenarios, but I figure that gets you off to the races and started. That's it. I'm done with Skype.
I can close that out, and I can close this video out too.

Remember, this is a free tool available as part of the download. When you get the ISO, it's just
included inside the download in the "PolicyPak Extras" folder. There you go. I hope this helps you
out. Looking forward to seeing you on board real soon.  
Bye.


