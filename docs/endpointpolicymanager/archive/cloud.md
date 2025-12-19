---
title: "Deliver Group Policy to Domain Joined and non-Domain Joined machines thru the Cloud"
description: "Deliver Group Policy to Domain Joined and non-Domain Joined machines thru the Cloud"
sidebar_position: 60
---

# Deliver Group Policy to Domain Joined and non-Domain Joined machines thru the Cloud

Microsoft MVP Jeremy Moskowitz and Shane from Admin Arsenal show how you can deploy group policy
settings to domain joined or non-domain joined machines through the cloud with Netwrix Endpoint
Policy Manager (formerly PolicyPak) Cloud.

<iframe width="560" height="315" src="https://www.youtube.com/embed/dUtt2cD4AWw?si=YPFMGIUjZR459WkR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Deliver Group Policy to Domain Joined and non-Domain Joined machines thru the Cloud

Shane: Hey everybody. I'm Shane from Admin Arsenal. This is Jeremy Moskowitz. He's a Microsoft MVP
for GP Answers and PolicyPak.

Jeremy: That's right.

Shane: What are we going to do right now buddy?

Jeremy: Would you find it interesting if you could deploy real, no kidding around group policy
settings, pretty much all of them to domain joined or non-domain machines – wait for it – through
the cloud?

Shane: Through the cloud. Okay, so, A. you had me at non-domain join.

Jeremy: Yep.

Shane: That's fantastic.

Jeremy: Yep.

Shane:And then those that aren't even on my environment here?

Jeremy: Yep.

Shane: Okay. So, obviously we have to get something out to them.

Jeremy: "Correct.

Shane:Alright.

Jeremy: So, let's set the stage first. So, before we even do the thing that we gotta get over to
them, let's go over and take a look at PolicyPak cloud.

Shane: Okay.

Jeremy: Let's do a quick run through here.

Shane: Sweet.

Jeremy: The idea is that we got these ideas called "built-in groups" and "company groups". Built- in
groups – the first one is called "all" and all we've done is we've got a shortcut item on the
desktop as soon as you join PolicyPak Cloud you're instance, of course. I wouldn't expect everybody
else to have the same shortcut.

Shane: Sure.

Jeremy: And then what we'll do is we'll create some other directives, get them into PolicyPak Cloud
and watch the endpoint pick up these directives in PolicyPak Cloud, but you're on the right track.

Shane: Alright.

Jeremy: We've got to get something over to them and that's the cloud client which will join
PolicyPak Cloud.

Shane: Okay.

Jeremy: And that's what you're going to do so I'll let you.

Shane: So, right now this user or this computer is computer 3..

Jeremy: Yep.

Shane: Alright.

Jeremy:Is it domain joined or not domain joined?

Shane: It's not domain joined.

Jeremy:That's right.

Shane: But it is currently here on –

Jeremy:On site.

Shane: Yeah.

Jeremy:Yeah.

Shane: Because I can't deploy my stuff out there so –

Jeremy: Nope. Nope.

Shane: You said it's in PP, right?

Jeremy: Yep.

Shane: There we go. This is the 32 bit computer so I guess we're going to use the cloud client.

Jeremy: Yeah. And notice how it's coded for your company name. So, each customer that we have will
have their own MSI that's unique to them so their computers will join their instance of PolicyPak
Cloud.

Shane: PolicyPak Cloud. Okay, so I just did a right click and said "Install this."

Jeremy: Yep.

Shane: And this is the 32 bit version?

Jeremy: Yep. Yep.

Shane: Let's do this first. Obviously, create a second step for your 64 bit.

Jeremy: Right.

Shane: Alright, now since this is not – I usually deploy using credentials for – I'm just going to
type in computer 3 once I get into non-domain. Now, I can't use my domain credentials.

Jeremy: Right.

Shane: So, I have set up the local admin account for this computer.

Jeremy: Great.

Shane: That's what I'm going to deploy as.

Jeremy: Yep. So, you're going through the local admin and getting them some software.

Shane: Correct.

Jeremy: And that software is our software.

Shane: Mm-hmm.

Jeremy: And if all goes perfectly well, what's going to happen is that the cloud client is going to
install on the endpoint. It's going to automatically, silently make contact to PolicyPak cloud and
we have exactly one directive and that directive right now is to put the PolicyPak icon, just
something to demo, on the desktop.

Shane: Yeah.

Jeremy: And so we'll wait for that to occur.

Shane: And so once it's installed it automatically opens or do I have to open it or log in or
anything like that?

Jeremy:Nope. As soon as PolicyPak Cloud is installed it'll join your instance and download your
directives..

Shane: How is this different from the CSE?

Jeremy:So, the cloud client is the first thing. It makes contact and joins PolicyPak cloud and auto
downloads the client side extension. So, we keep that up to date for you.

Shane: Okay, great.

Jeremy:Oh, look at that. That was it. It already happened. That was it. So, now if you take a look
at, say, control panel here just to prove we're not pulling a fast one on anybody. If we go to
programs, uninstall programs just to see what's here, look what happened. You installed the cloud
client and then it made contact and downloaded and got the shortcut icon.

Shane: So, this is a way you can enforce settings even for computers I've got travelling salesmen or
something like that that are always out on the road and they get to a Hilton, they open up and you
can still enforce.

Jeremy:Yep. Yep. Yeah. So, for instance let's just do something very simple. Let's say you want to
guarantee that they can't get into the control panel or some security directive or anything like
that. Let's just do something simple. So, let's go into the group policy editor. We'll create a
group policy object. It doesn't matter if it's live. For instance, a lot of our cloud customers,
they don't even have a real domain anymore. They just have a vm that is a pretend domain controller.
So, it doesn't matter what it's called. It's not being linked anywhere. We'll just create group
policy object. Click at it. So, go ahead and we'll click on the PolicyPak node.

Shane: Alright..

Jeremy:You know that there's a lot of different things that PolicyPak can do. For instance, you saw
that we've got videos on Firefox, Flash and Java. You can just right click any of those directives;
export and boom get them to PolicyPak Cloud.

Shane: Wow.

Jeremy:So, what we're going to do is not do that. We're going to do admin template manager. Okay.
And instead we're just going to create a new policy here and this is the same basic interface that
you've already seen under user side policy's admin template manager. You already know how to do
this. So, go to admin templates, control panel, prohibit access to the control panel and enable it.
Now, again, this is real GPO. We don't want a real GPO. What we want to do is right click and export
to XML and we'll put this on the desktop and we'll call this "No control panel for you." Okay.

Shane: Got it.

Jeremy:Alright. And then what we'll do now that it's on the desktop, we'll go back to PolicyPak
Cloud and we'll just do it for all. For all of our computers in PolicyPak Cloud we'll upload and
link a new XML here. We'll go ahead and browse for that file we just put on the desktop called "No
control panel for you." We'll put a description. Oh, it already does it for you and we'll just say
"No CPL for you." We'll click add and it's linked over to the all group. Now, if you had a lot of
different groups, a lot of different computers, for instance you had roaming sales, roaming
marketing, whatever, you could move computers into groups and get different policy settings for
different groups for different circumstances.

Shane: That's fantastic.

Jeremy:To kinda accelerate things we're not going to do that. And all we're going to do here is
we're going to run ppcloud/sync. Okay. And this is going to connect to PolicyPak Cloud. And you can
see we got the "No CPL for you" policy and if all goes perfectly well we'll just go ahead and close
this. Right click, go to control panel, personalize this control panel and no control panel. By the
way, there's a bug when you do a no control panel. It's an actual Windows bug. Check this out.
That's been there forever. That's literally been there for like ten years. I just love that bug.

And so there's no control panel icon here and we really are doing no kidding around, pretty much
every group policy setting, every group policy preference setting and every group policy security
setting through the cloud by just creating a GPO, exporting the segment you want, uploading it to
PolicyPak Cloud and waiting.

Shane: Wow.

Jeremy:And we'll get all of those settings to all of your roaming computers, domain joined or not.

Shane: That does not suck.

Jeremy:Yep. We live to serve. We love this feature. It's great for MSP's and great for on premise
and roaming people.

Shane: That's fantastic. Hey,
[https://policypak.com/resources/thank-you-whitepapers/](https://policypak.com/resources/thank-you-whitepapers/)
Jeremy.

Jeremy:Thank you man. Appreciate it.

Shane: Alright. Rock on everybody. Thanks.

