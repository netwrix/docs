---
title: "Use Group Policy to remove local admin rights (then Endpoint Policy Manager to enable Least Privilege)"
description: "Use Group Policy to remove local admin rights (then Endpoint Policy Manager to enable Least Privilege)"
sidebar_position: 20
---
# Use Group Policy to remove local admin rights (then Endpoint Policy Manager to enable Least Privilege)

This video shows the one-two combination. Start out by finding where you have local admin rights,
then remove the source using in-box GPpreferences. Then use Netwrix Endpoint Policy Manager
(formerly PolicyPak) to elevate your now-standard-users to keep doing the (admin like) things they
always have.

<iframe width="560" height="315" src="https://www.youtube.com/embed/iD4HSQJjak0" title="Endpoint Policy Manager: Use Group Policy to remove local admin rights (then Endpoint Policy Manager to enable Least Privilege)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager: Use Group Policy to remove local admin rights – then Endpoint Policy Manager to enable Least Privilege

Hi. This is Jeremy Moskowitz, former Group Policy MVP and Founder of Endpoint Policy Manager
Software. In this video, I'm going to show you how you can use Group Policy and Endpoint Policy
Manager to get out of the local admin rights business.

The question I get from time to time is, "I really want to do Least Privilege and I get the general
gist of what the Endpoint Policy Manager
[https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html](https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html)
product does, but how do I actually get to the Promised Land of no local admin rights? How do I do
that?"

Let me set the stage. A person can be an admin on your box for a couple of different reasons. I've
seen this at a lot of companies. I'm not making this up. This could be your company. If you look in
the "Domain Admins" group and look at "Members," you could have people here who are currently domain
admins who shouldn't be domain admins.

Then if you look at who has access rights on the computer, we all know that if you go to "Computer
Management" and take a look at "Local Users and Groups" and "Groups" here and look at
"Administrators," who is a member of the local administrators group? The "Domain Admins" are. So
right there you can get access that way. All these bajillions of "Domain Admins" can have access on
your local box because of that.

You might also be in this situation where you have maybe a ghost factory in the basement and you've
pre-staged a bunch of people to be local admins on the box already or they somehow otherwise have
acquired local admin rights and you need to get out of this business.

Now I understand why you're in this business. Let's make sure we have it straight. You're in this
business because a local admin can do things like go into "Device Manager" and do all the things in
Device Manager and do all the things in Device Manager.

They can run applications. Sometimes they'll get a prompt and then they just hit "Yes" and sail
right through it, which is great as an admin. This isn't work as a standard user.

And of course if you're trying to install software as an admin, everything is going to work because
you're an admin. You get a prompt here, but it will still let you go through. You just click "Yes"
and as an admin you can say "Yes" and install whatever thing you want.

Now how do we get out of the local admin business? The most important thing is to know the two
places that you can get in the club. Let's just do that. Here we are in "Domain Admins Properties."
Let's just go ahead and "Remove" these two people from "Domain Admins" that don't need to be in
there. That's the first thing.

Now the second thing we need to make sure is how do we get rid of the people that are in the
"Computer Management" domain admins group here locally? If you were to try this experiment yourself
and go to "Local Users and Groups" and go back to "Groups" and click on "Administrators," look at
what happens. Actually, all of a sudden you'll see that the SIDs are being demonstrated instead.
That's a little weird. It's because it knows that there's a disturbance in the Force or something.

We've already removed them from a group that they're a member of right now, but the next thing we
need to do is actually to literally go from machine to machine somehow – hang on, we're going to do
this using policy in a minute – and remove all the people from the groups. Does that make sense?
We're going to get rid of all these people.

But inside of you running around to your 200, 2,000, or 20,000 machines, we're going to use the
power of Group Policy Preferences actually – this is not a Endpoint Policy Manager thing – and
deliver the signal to remove the unnecessary people.

Let's see who I have. I have a guy called "admin." I don't know who that guy is. We have the local
"Administrator." That's cool. If you know the internals of Windows, the local "Administrator" is
actually disabled by default on workstation. I have "Domain Admins." That's cool. I want them there.
I have this guy. His name is "a." That's a weird guy. I don't want him there. I don't want
"EastSalesUser1," "EastSalesUser2" or "EastSalesUser3" here.

Really, the only people I want is the "Domain Admins" group. I don't want any of these guys. I don't
know who they are or what their story is. Okay, fine, maybe I'll leave "Administrator" here,
although there's really no good point. Anyway, that's what we're going to do using Group Policy
Preferences and get these guys gone. And you can pretend you have 20,000 machines. It's totally
fine.

What I will do first is I will log off here. I'll go ahead and "Sign out." Then what I'll do is use
the power of Group Policy Preferences. I'll do this for all of my "East Sales Desktops" machines,
for instance. I will "Perform User Group Assignment for Admins." It doesn't matter what the name of
it is.

Here are my "East Sales Desktops." I'm going to do this on the computer side. On computer side,
"Preferences" I'm going to go to the one that's called "Local Users and Groups." Again, this is
built right in. You can do "New/Local Group" here. The "Group name" that I want is "Administrators."
It's kind of in the middle. Here's what I'm going to do: "Delete all member users" and "Delete all
member groups." That nukes everybody out.

But wait. I'm going to "Add" back in two key people. You have to hit the three dots. I'm going to
add in "domain admins." And if I want to, I can also "Add" back in the local "administrator." You
see what I'm doing here? I'm adding in the "Domain Admins" back and the local "administrator." I
didn't click the three dots because that's not that guy. This is a local guy.

I'm taking the "Administrators (built-in)" group, nuking who is in there and adding back in exactly
who I want in there. That's it. That's all there is to do.

This is on the computer side, which means I'm going to go ahead and "Restart" in order to make this
happen. Group Policy will kick butt on a restart for the computer side. Let me go ahead and pause
the video while this is restarting.

Okay, here we come back up. Okay, here we are. We're ready to log on again, and let's see what we
can see. First thing is let's go ahead and go to a Command prompt. We'll run "whoami /groups." We
can see that this person is just a "BUILTINUsers" now. He is not a domain admin. He's not a local
admin.

In fact if we were to try to do some local admin things like right click "Command Prompt/Run as
administrator," he can't do that anymore. If we were to go and go to "Device Manager," Device
Manager says I'd love to help you but now you're a "standard user." You need to be an admin in order
to do these things. Or to run certain utilities like Process Monitor ("Procmon") or install Skype,
those kinds of things you can't do unless you have the proper rights.

Now is where Endpoint Policy Manager Least Privilege Manager kicks in. Right here, right now. Let's
go back to our "East Sales Users," people who are no longer running with the scissors all the time.
Now is the time where we can do "PPLPM Elevate when needed." I'm just going to do two little ones.
We have tons of videos. I just want to finish the full end-to-end idea here.

We're going to go on the user side or the computer side if you wanted to. You could say on this
computer you could do that, but I'm going to do this on the user side. For these East Sales Users
that had the rights and they don't anymore, we're going to use "Least Privilege Manager."

The first thing I want to do is enable them to get into Device Manager. Let's right click "New
Control Panel Applet Policy." We're simply going to pick the "Device Manager" right off the tree,
"Next," "Run with elevated privileges," and "let DM Run now." Okay, I'm not running with the
scissors all the time. I just want to let Device Manager run.

The other thing I want to do is a "New Executable Policy." I want to let a very specific version of
an application run: a Process Monitor that didn't run ten seconds ago. If I look at "SHARE," "Apps
to Manage" AND "DEMOS," there's my version of "Procmon." I don't want an older version. I don't want
a newer version. I want this version to "Run with elevated privileges." So everything is happening
now in the user context, but we're elevating just the process. This will be "Let Procmon run."

There we go. We're ready to go. We'll go over to our endpoint. Remember, this guy is still a
standard user. We took away those rights using the in-box Group Policy Preferences method. We
stripped him of his admin right credentials. He doesn't need that anymore. He doesn't need to be
running with the scissors all the time with all that entails and all that badness.

If we close this out, ten seconds ago "Device Manager" prompted us. Now we sail right through to
Device Manager. This process is running as an admin, but the rest of it is not. If we try to go to
"Procmon," this process is running as an admin; others are not.

This video hopefully demonstrated exactly how to use the inbox stuff that you already have with
Group Policy and Group Policy Preferences to find and ferret out and strip exactly what you needed
to, to see and dictate who was a local admin.

Oh, you know what we didn't do? Let me go ahead and "Switch user" and let me log on as a domain
admin. Then we can look at who is, in fact, in the local admins group. Let's see if we actually
succeeded. I forgot to show that part. Let me go ahead and log on here as this guy: "a" is a domain
admin in my world. That's just a little shorthand guy I have.

Okay, now that we're logged on as "a," let's go to "Computer Management." I just want to inspect the
group membership. Let me go to "Local Users and Groups" and "Groups" and "Administrators," and the
policy that we created stripped all the people we didn't want out in one fell swoop and added back
in the people who we did want.

We added in the local "Administrator" even though he has no access by default and the "Domain
Admins" because those people are important. And of course, you saw me earlier strip the membership
of "Domain Admins" so that if this guy happened to be a domain admin, he's not going to be an admin
everywhere.

So that's it. I hope that helps you out and that gets you to the goal with Endpoint Policy Manager
Least Privilege Manager.  
Thanks so much.


