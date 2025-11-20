---
title: "Endpoint Policy Manager Cloud Logs and Automatically Pushing via Email"
description: "Endpoint Policy Manager Cloud Logs and Automatically Pushing via Email"
sidebar_position: 30
---
# Endpoint Policy Manager Cloud Logs and Automatically Pushing via Email

Want to take your Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud log files and get them
into your own SEIM or similar system? Here's how to do it.

Hi, this is Jeremy Moskowitz. In this video I'm going to show you how you can push the PolicyPak
Cloud Immutable Log Data to your own system for further processing. The idea is here you are in the
PolicyPak Cloud console. Here are the company details. If you head over to Customer Log, you'll see
the customer log that gives you all sorts of interesting information. We try to log darn near
everything that happens at PolicyPak Cloud.

Maybe you want to parse this for interesting events that happen. No problem. What you can do then is
you can use what's called our push configuration. You can add a new email address. We might have
other types of push at some point, but right now we have email address.

You can do daily, weekly, or monthly. Daily is going to show you everything that happens today or
one 24-hour period, Weekly for a week, and, of course, monthly for a month. The question might be
when does this stuff actually get sent?

These all send at the same time, which is 10 to 11 UCT, Universal Coordinated Time, daily, so 10 to
11 Universal Coordinated Time daily. Weekly we'll do that about every Monday. Then monthly we'll do
it 10 to 11 UTC every first of the month. This is not configurable. Then the idea here is that let's
say you pick weekly. You can also run a test. The test you run will show you the stuff from this
previous week or previous month or the day. If you want to do weekly, let's go ahead and do that.

I'm going to give it my email address. The thing is, my email address isn't registered here in
PolicyPak Cloud as an admin in this account. We're going to get a little error. When I go ahead and
click OK here, it's going to say Are You Sure You Want to Do This? This guy, I don't know. He seems
a little sketchy. That's okay because you might want to have that inbox not be part of your
PolicyPak Cloud admins. That's totally fine, so just be aware of that.

The other piece about this is that that data is going to be encrypted when we deliver it. It's going
to be an encrypted zip file. Great, how do you know what the password is? You can do what's called
renew the password. This will change the password. I'll go ahead and copy that for now. If you ever
forget what that password is, you can always just come back here and click on Show Password. When
you renew and you've got a new one, Show password will show you what the existing one is.

Now let's do a quick test push. I'll go ahead and do a quick test push. Now that we've done the
push, I'm just going to wait for it to come to my email. Then I'll pause the video and come back,
and we can unpack it. Now we're back. I got the email. Let's go ahead and right click or we'll just
double-click on this guy. Let's drag and drop it. What are we going to get? It's encrypted, so let's
go ahead and hit the password in there. Bang, now it's available to us.

If we were to right click and open in Notepad++ or whatever, these are all the items that have
happened for the week. My week has just started, so I don't have a whole lot. You might have a whole
lot of things in here. The point is that you can do this for the week or for the month or for the
day.

You'll see those actions that have happened for that previous time period. With that being said, all
these events are keyed by [03:00]. Therefore, you can use it in just about any system you want. I
hope this helps you out. Looking forward to getting you started with PolicyPak real soon. Thanks so
much.


