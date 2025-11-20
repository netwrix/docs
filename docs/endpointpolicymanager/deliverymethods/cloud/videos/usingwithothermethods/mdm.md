---
title: "Endpoint Policy Manager Cloud + MDM Services: Install Cloud Client + automatically join PPC Groups and get policy."
description: "Endpoint Policy Manager Cloud + MDM Services: Install Cloud Client + automatically join PPC Groups and get policy."
sidebar_position: 10
---
# Endpoint Policy Manager Cloud + MDM Services: Install Cloud Client + automatically join PPC Groups and get policy.

You can use your existing MDM to deliver the Netwrix Endpoint Policy Manager (formerly PolicyPak)
Cloud client, which will then automatically download the PP Client Side Extension. Then the machine
can automatically join a Endpoint Policy Manager Cloud group, and finally automatically get the
policies within that group. It's awesome and works with any MDM service (or RMM service, actually),
in addition to Autopilot.

<iframe width="560" height="315" src="https://www.youtube.com/embed/QwdIlz0VjZM" title="Endpoint Policy Manager Cloud + MDM Services: Install Cloud Client + automatically join PPC Groups and get policy." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz. In this video I'm going to show you how you can deliver the PolicyPak
Cloud Client and automatically the PolicyPak Cloud Client-Side Extension using your MDM service like
Intune and automatically joining groups. There is a lot to cover here, so stick with me.

Let me give you my lashup of what I've got here. This is a not domain-joined machine. He's not yet
even enrolled in Azure or in MDM service. Who am I? I'm a standard user and my computer name is
Computer MDM 64. That's going to come up a little bit later.

The first thing you might want to do is to actually go over to the cloud service here. This is the
cloud service over here. You want to go to Company Details, and you're going to want to have handy
your Cloud Client Installer. I'll go ahead and download that now.

I'll just chuck it on the desktop just so I know where it is. I'll just put it on the desktop here.
That's the first thing you're going to want to do. The second thing you're going to want to do is to
understand this idea called Join Token. We have other videos on Join Token or Link Join. The basic
gist is that you can automatically connect a computer at install time to one or more groups. The
computer is always going to be in the magical All Group, but in this example we're going to have
this not domain-joined MDM enrolled computer automatically get into our PolicyPak Cloud Work from
Home Group.

The way we do that is we're going to go over to Tools. We're going to go and create a new Join
Token. We're going to Add Join Token. Then the expiration you should set really far off into the
future or maybe a year from now or something like that. There we go.

Then the description is Work from Home Computers. Then we'll select a group or groups. Let's go
ahead and just select Work from Home. If you wanted to go bananas and say these are Work from Home
and maybe your Small Scale Test people, then this computer would go into both of those groups. If
you only wanted to go into one group, you select one group, and you're off to the races.

We have another video just on join token, but if I go ahead and select that, I can click Save. If I
take a look, here is my actual string. There's the string right there. I'll copy that. I'm going to
hang that out here in Notepad, sort of just hanging out ready to go. I'm going to use that in a
minute or two.

Next thing I want to do is I'm going to go over to my MDM service. I'm going to be using Intune in
this example here. What I'm going to do is I'm going to add an app. I'm in Apps, All Apps, Add. I'm
going to add an app type that is a line-of-business app.

Before I do this, I want to talk about some things that you might see in some other videos that are
going to be red herrings or not applicable to you. I know this seems like a weird place to go down,
but stick with me. The first thing is, remember, you're not going to be using your MDM service in
this configuration to be deploying actual settings. That's what you're going to be using PolicyPak
Cloud for.

In this case, you're not going to need to get MDM licenses. This is for another guy, another video,
not you. You're also not going to wrapping up and deploying packaged Group Policy in PolicyPak
settings. Again, that's another guy and another video. That's not you.

What you're going to do here is you're going to add in – you also don't need to deploy the client
side extension. That's automatically handled at the same time of the Cloud Client deployment. Again,
this is not for you either; some other person, some other video, not you.

You're going to simply add in a Windows Line-of-Business App here. You're going to select the app
that we just downloaded, the packaged app from the desktop. We just put it there, the Cloud Client
you just downloaded. Now that we've got the Cloud Client – this is your Cloud Client. We're going to
give this a Publisher name, which could be PP or your own company or whatever, device, very good.

Command Line Arguments, this is where you have a couple of choices. My recommendation is that you
actually do this silently, no restart, and add a log and a join token. What are we going to do? It's
going to do it all for us.

We're going to do /qn, that's quiet. Then we're going to do /norestart, then /log. I'll call this
POCCLOUDINSTALLlog. Then at the end it's no slash, JOINTOKEN="the string you got earlier." It always
ends in an =, and then you close it up with another double quote; so /qn/norestart/log, give it the
name of the log in quotes, space, JOINTOKEN="the string you just got" and close it out.

That's all you've got to do. Those are the things that are required. We'll go ahead and click Next
here. Now let's assign it. We're going to not make it available. We're going to force it, required
to either all devices or you can add it to a group.

I'm going to make it required for a particular group. The group that I'm going to make it to – you
can make it to your autopilot people if you're using autopilot. I'm going to put this with Computers
with "Computer" in the Name. Why is that? Earlier I showed you my computer's name is called Computer
MDM 64.

Because I've got this dynamic group where all my computers have computer in the name and you could
do this for whatever group you want, when the match happens, once you've made the match, it's
required now for Computers with "Computer" in the name. We're going to go ahead and click Next.
We'll go ahead and click Create and that's it.

Your app isn't ready yet, uploading. Give it a second. It doesn't take too long. We're all set. I'm
going to go ahead and refresh just to make sure. I'll go back to apps here.

We should be ready to rock. Now that we're back on our endpoint machine, again, as our standard user
we can see our computer is MDM 64. Because we're a standard user, we're actually in the wrong place.
What we're going to do is we're going to log out here. We can just switch user for now.

We have to be doing this as a local admin on the box. That's the score. You can only join a machine
for full Azure plus MDM enrollment when you're logged on as a local admin.

Then you'll go to MDM here, actually Access Work or School. Then we will click Connect. This is
where you're going to join the device to Azure Active Directory. Don't get fooled by the little
snake pit up there. I really hate that thing. There we go.

I've got [07:40] here. This is where you know you're on the right track when you see this. This is
where you're connecting and making sure that you're all set. This is the actual join part. Nothing
else is correct in terms of MDM. This is the way to actually get through to Azure.

We're all set. We'll go ahead and click Next here. Now we can see this. We can click Info. Now this
could take a little while for Intune to do its thing. I'm going to click on Sync anyway here.

There's a couple things that need to happen from Intune's first or any MDM's first initial setup.
This could take a minute. I'm going to just hang tight and give this a second to sort of catch up
here.

While this is syncing, let me go over real quick to Control Panel Programs and Features and show you
what we have here. Just to prove a point, if I go to Publisher and I look at PolicyPak, we have no
PolicyPak items here. By the time this is done, what we're looking to see is that the PolicyPak
Cloud Client and then also the PolicyPak Client-Side Extension gets downloaded. The Cloud Client is
what you're delivering. The Client-Side Extension comes automatically from PolicyPak Cloud, the
service. It's kind of a package deal.

I'll go ahead and give this a minute to catch up. If I were to go backward here and forward and take
a look, there we go, PolicyPak Cloud Client Enforcement Completed. If I were to hit F5 to refresh,
there we go. There's the Cloud Client.

It's happening in the background right now. There's the Cloud Client. If we just wait a minute or
two, we should also get the PolicyPak Client Side Extension. That should also come down. In the
background it's also going to magically join us to the right group in PolicyPak Cloud.

We'll go ahead and just give this a second to see if it comes alive. Hit Refresh, and there it is,
the Cloud Client and the Client-Side Extension. We have other videos, just for the record, on how to
know which version of the Cloud Client and the Client-Side Extension, just to put a fine point on
that.

If we just go back here, on the group level if you click Edit Group, this is where you dictate the
client side extension version, which is what features you have, what components and so on. If we
have new components, we'll support that. The Cloud Client is if we have some new feature in
PolicyPak Cloud itself. You might want to update automatically from PolicyPak Cloud to the client
version.

That being said, let's go back to our endpoint. You've gotten the thing from MDM. We're good to go.
Let's go and switch user back to our standard guy. Now that we're here on our endpoint, remember,
Procmon didn't work before. Let's go ahead and double-click.

Does it work now? How did that magically happen? Let's review. We used our MDM service. Let's go
back. We used our MDM service to deploy the PolicyPak Cloud Client to our machines.

We gave it the special flags, which was silent, no restart, log, and then we also used the join
token variable. When we did that, we told it to connect to our Work from Home Group. If we look at
Show Computers here, there's our computer magically in Work from Home.

Then the policies automatically came down along with the Client-Side Extension. In this case, I had
one particular policy, which was Overcome the UAC Prompt for one particular thing. There it is.

There's two remaining things. The first thing is that even if you open up a new command prompt and
type ppcloud, it's not going to work until you log off as the guy who's logged on already. That has
happened in the background without this user. If you want to use the ppcloud command with
ppcloud/sync, you're going to have to log off as any user who is logged on during the install
process. That's just sort of the deal.

To just sort of prove a point, re-log on as Standard User. At this point going forward now,
ppcloud/sync should work. You can do some other small scale tests if you need to from that point. If
I were to now open a new Command Prompt, ppcloud, here we go, and you can do /sync, and you can see
what's what to that particular user.

The last piece that I want to talk about is – let's go ahead and sign out here. Let's go re-log back
on as the Admin who did the join through Azure and MDM. What if something doesn't go right? There's
a log file.

Remember, we said what log file it is. Look at that, I spelled it wrong. I said instead of PPCloud
Install, I used POCCloud Install. That's kind of weird.

Where is that? Let's take a look where that lives. It's going to be kind of in a goofy place. It's
in Windows System 32. You could put it in the right place, but I didn't in my command line.

If we take a look at POC log, there it is. If you really needed to see what was going on there,
POCCloud. I hate it when I spell it wrong. This is the full installation or logging of what happened
here.

If something didn't work, if a join token didn't work, if something else caught fire, this is the
log file that you would check. That's why I recommend actually specifying a log file during install
time. MSI Exec is performing this. It's not really up to us by the time it's over.

Let's review. You're installing the Cloud Client. You're automatically getting the client side
extension, which is dictated automatically from the group. The group itself specifies which
client-side extension to get. If it's not configured, we use the latest or what's in your all group.
You can dictate that.

Then using the join token, you're magically connecting to work to your particular group or groups.
Then it's just smooth sailing with using PolicyPak Cloud and getting the directives linked over to
where the computers are. That's really it. You're off to the races.

I hope this video helps you out. This works across all MDMs. I just happen to be using InTune in
this example. This is a great technique if you want to use autopilot and bootstrap your computers or
you want to just use a MDM service to get your PolicyPak Cloud off the ground.

From that point forward you're using the incredibly friendly skies of the PolicyPak Cloud Console to
create and link new policies, any Microsoft Group Policy setting, plus all of PolicyPak's magical
settings. You have combined the two. Remember, we also have another video on how to combine the
client side with Azure to do item level targeting. That's a different video. You can find that as
well, but just a little tip of the hat to that video too. I hope this helps you out. Talk to you
soon. Thanks so much.


