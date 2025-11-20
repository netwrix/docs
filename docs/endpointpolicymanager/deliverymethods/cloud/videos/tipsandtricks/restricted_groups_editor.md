---
title: "Endpoint Policy Manager Cloud: Restricted Groups Editor"
description: "Endpoint Policy Manager Cloud: Restricted Groups Editor"
sidebar_position: 40
---
# Endpoint Policy Manager Cloud: Restricted Groups Editor

Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud has a Restricted Groups editor inside it.
Use this video to understand all the details how to take existing GPO Restricted Groups and then use
it in Cloud; then use the in-cloud editors after that.

<iframe width="560" height="315" src="https://www.youtube.com/embed/bNTHcYWgMs0" title="Endpoint Policy Manager Cloud: Restricted Groups Editor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz. In this video, we're going to talk about the Restricted Groups Editor
in PolicyPak Cloud. Now as we do that, we're going to first get started with a little bit of what's
happening in real group policy land first that we've taken to PolicyPak Cloud.

Here in Security Settings, you can see that there's Account Policy, Password Lockout, Curb Rows, and
Event Log V-settings, and there's also stuff like Restricted Groups and Wired and Wireless Policy
and so on. What's happening underneath the hood, actually, is that this entire block of security
settings is kind of one big, blocky thing. Now how do I know that? Well, I put a bunch of settings
in there and let's take a look at them.

For instance, if I were to go to just say Security Settings and rename the guest account, you can
see I got some stuff there. I think I got some stuff here in Lockout Policy and I got some stuff in
– I don't know, got some other stuff around here. If I were to go to Restricted Groups here, I've
actually added a couple of restricted groups items as well. By way of example here, for a group
called Administrators – in fact, I'll go ahead and do this by – I'll just do this whole thing by
hand. Let's start it again.

For instance, if I were to add a group here – and this can work for domain-based groups but in
prospect cloud land, that doesn't make any sense. You'll want to think about in terms of local
groups. If I wanted to add a group called Administrators and if I wanted to make members of this
group, let's go ahead and add some. Now I'm here at directory so when I click Add and click Browse,
I'm looking at the people in fabrikam.com. I can look at and say I wanted to do East Sales User 1 –
actually not sales admin – east sales, rather. East Sales Admins, that makes more sense. I'll put
East Sales Admin 1 and 2 as members of the local administrators group That's easy enough.

If you were to just click Add and put in a particular user name like Frank, who's Frank? If he
doesn't have Fabrikam listed in front of him, that means that it's going to try to look in the local
computers to try to – the local SAM of the target computer, try to drag that into Administrators
group. You may or may not have Frank and if you don't have Frank, well, then that's not going to
work. That's the first thing.

Then the second thing we could do is add another group here. Let's call this – I'll do – I'll call
this – maybe I'll add a group called Remote Workers. Maybe who I want to add to Remote Workers is –
and I want this group to be a member of Guests. Now Guests is a special group that is actually on
the machine, and I'll explain why that's important in a second. If I add another group called Tests,
a group that may or may not be on the machine, these are evaluated differently. Let's go ahead and
continue on, and let me show you what happens now when we go to export all the stuff using
PolicyPak's Security Settings Manager Export Wizard.

I'm going to click here to export. Notice how we've got all the things that we show are exportable
and we also tell you things that are not exportable. We're talking about restrictor groups
specifically, so let's go ahead and leave that as exported. Click on Next and well click on Next
again. I'm going to export this as ppsec4.xml. Then let's look at it because we need to understand
what's happening underneath the hood here. Let's look at this puppy in Notepad. Open with Notepad
here. Let's take a look.

We can see a bunch of the things that are – the account lockout settings that we did, the PP Guest
settings that we talked about earlier. Now here's where we talk about group membership. Gosh, notice
how a lot of stuff here in group membership is just SID-based. Why is that? Because that's how this
works. It doesn't go by name. It goes by SIDs. It's saying that hey, this group is a member of, and
lists nothing. This group's members are Frank and – well, we put in a couple of users. Let's do it
side-by-side. I think this is really important, so let's make sure we really get it.

Let's go back to Restricted Groups here. What we said was – let's see how we can make them match. We
said alright, the group Administrators has Frank; he's listed. Then we also said East Sales User 2 –
East Sales Admin 2 and East Sales Admin 1. Well, that's East Sales Admin 2 and that's East Sales
Admin 1. See how they're listed here as SID? Then we had another group called Remote Workers, and we
made it a member of Tests and Guests. Tests I already said is something that doesn't exist in the
box, but Guests is something that lives in the box. These are called well-known SIDs, so they're
automatically translated.

I know this is a lot to hold in your head. Once you've got the security policy all the way ready to
go and exported, you can copy this. You can go to PolicyPak Cloud and I'm going to create and link a
new policy here. I mean, upload and link a new policy here, so I'll call this ppsec4 and just paste
that whole puppy in and click Add.

Let's go ahead an examine this part first. I go to ppsec4 and go to Show Policy Settings here. First
and foremost, I should see all the things that I set. You can see – there we go. You can see
Administrators has Frank and East Sales Admin 1 and 2. Then you can see Remote Workers has built in
Tests and built in Guests. See that right there? You can see that in the report.

If we were to click on Edit Policy here, this is where it gets a little bit hairy. The idea here is
if you were to click on Restricted Groups here, you can see that the two users that we added here,
the domain-based users, they only show up as SIDs. If you wanted to remove East Sales Admin 1, you
could remove him. If you wanted to add in somebody else, you got to know their SID. There's a bunch
of ways to learn how to get SIDs; I'm not going to show you all of them. One quick way is to do –
you could log on as the guy and do whoami/all, and you can get their SID right here. This is East
Sales User 1, and if you wanted to grab his SID and paste it in here, bang. Now I'm putting in a
particular SID of a user that I want into this group, which is Administrators. I click on Okay.
There we go.

Then if I wanted to look at the other Restricted Groups item where I say Remote Workers has Tests
and Guests, well, group is only going to be valid by SIDs. When you click on Add here, you have to
either give it a name which is a local group if you wanted to do that, or a SID here, so you can
paste in a SID.

That's the basic gist. The editor here, the Restricted Groups Editor, will let you take in existing
Restricted Groups items or you can add your own. If you add your own by hand, you have to know that
the name is local to the machine or the SID is something that's going to be specific to the domain.
Same thing here for Restricted Groups for this group is a member of where you have to put in a
specific name and put in the SID ID.

When that's all done and you're all done editing, like I said, if you take a look at the report
here, we may show some items here, but again most of the time we're going to just show the SID. You
are going to have to know the SID for most of these things. If you wanted to create it from scratch,
again, you could click on a company group, create and link a new policy here. You could go to
Security Settings and here, you could add new regular policy settings that we've already seen or you
could go to Restricted Groups here and here's – like I said, you can click on Add and if you put in
a name like Local Group 1, you could do that. That's valid. As you saw, there's a little drop-down
where we've suggested a couple of different names of users or groups that you could add as members
that are well-known that we thought would be useful here. We might add more here soon. Then same
thing this group is a member of; if you wanted to pick a particular group, we have a couple of
drop-downs here for you, some well-known SIDs or you can put in the name of your special group just
like that.

It's the same exact editor. The only downside is again, because we don't have any contact backed to
your on-prem AD, need to know the SIDs. My suggestion is that you do it on-prem AD first, bootstrap
it and copy it to PolicyPak Cloud and then continue your editing using PolicyPak Cloud.

Okay, I know that was a lot of information to keep in your head. I hope that was clear enough and
hope that helps you out and gets you started real soon. Thanks.


