---
title: "Endpoint Policy Manager Cloud Groups CSE and Cloud Client Small-Scale Testing and Updates"
description: "Endpoint Policy Manager Cloud Groups CSE and Cloud Client Small-Scale Testing and Updates"
sidebar_position: 30
---
# Endpoint Policy Manager Cloud Groups CSE and Cloud Client Small-Scale Testing and Updates

How do PP Cloud Groups work with regard to CSE versions? Here's how to use them.

<iframe width="560" height="315" src="https://www.youtube.com/embed/0FdczHYKNh4" title="Endpoint Policy Manager Cloud: Perform Small Scale Testing" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy. In this video, we're going to learn how to use PolicyPak Groups to dictate
exactly how to do small scale, medium scale, and large scale testing, so you can do a roll-out with
confidence and know that everything is working before you do a large scale roll-out.

What are we talking about? The idea is that there are two pieces of PolicyPak Cloud to make it go.
Let's review those two pieces. Here is my PolicyPak Cloud endpoint machine. This thing is the
PolicyPak Cloud Client. You get this by clicking on the Company Details and downloading the latest
version.

What if you downloaded this version a year ago, and we have some bug fixes and so on? What are you
going to do? Let's go ahead and like I said, let's take a look at the moving parts first.

This is the Cloud Client piece. The Cloud Client piece, again, has to be installed as an admin.  You
already did this to most of your machines that are out there already. At the same time you
downloaded the Cloud Client, we're going to download the PolicyPak Client Side Extension.

Let's take a look at what happens in Control Panel, so we can just see both things side-by-side at
the same time. If we take a look at PolicyPak here, we can see that there's the Cloud Client and
there's the Client Side Extension. These get upgraded for bug fixes and features from time to time.

How do you roll these out to make sure that your world will keep working perfectly? That is where
the idea of groups and group properties come in. For instance, here's your work from home people.
You want to make sure that those guys are using the latest version only after you've done some small
scale testing.

What we recommend is you create a company group called Guinea Pigs, or Small Scale Test, or
whatever. I'll do Small Scale Test. You can see that the first things first is that you can check
the refresh interval. This is how often computers will connect to PolicyPak Cloud. I think the
minimum is ten or five. The maximum is whatever. We recommend 60, so I'll just leave 60 in here
because that's our recommendation.

Then this is where you get to dictate what Client Side Extension version and Cloud Client they're
using. The idea is that when you move computers in, as soon as they get to this group, and then they
check in, they're going to go, a-ha. You're telling me exactly what version to use.

If you want to test the latest Cloud Client, as you can see, 21.1 is 2021, January 2021. The middle
four digits is the build number, 2680, is newer than this old and crusty version, 20.6 point
whatever the heck it is.

If you want to in your small scale test group to test the latest PolicyPak Cloud Client, that's
great. Same thing with the Client Side Extension Version. You want to have a small scale test where
you can dictate exactly what version is in play here. Once you've done that, now you can move a
computer into your small scale test. You can then add computers here, add, remove computers from
group. Pick a computer that you want.

For the record, a computer can be in multiple groups. If the groups have differing opinions of what
their group Client Side Extension and Cloud Client, it's going to take the latest. Try in this
particular case not to have overlapping computers.

If you want to pick a computer or two to be in your small scale test, we'll go ahead and do that.
Now, bang, they're in your Small Scale Test.

That is how you would dictate a small scale test. If you wanted to do medium scale test, you could
actually pick your squad cars and your West Sales Team. You can edit group there, and you can
dictate the latest or the Client Side Extension once you've done the small scale test for CSC and
Cloud Client.

Last but not least, I want to point out that the special All group is where you would go if you want
to pull the red cord and do it for absolutely everybody. If you were to Edit Group here, and you
were to dictate the Client Side Extension version to be Latest and click Update, groups down the
line can't override that.

Only pull the rip cord when you know that your small scale and medium scale test is good. Then
you're ready to roll out to the remainder of your machines. What you don't want to do is say, yep,
I'm sure it's going to be great and just pull the rip cord. Uh-oh, there's some problem. It could be
hard to unwind if that is the case.

I think that's all I have for this. Just to put a fine point on it, the difference of the stuff, of
where things could be, the Client Side Extension is typically what we talk about when we're talking
about managing policy settings themselves. If you go to Create and Link a New Policy here, and we
have some brand new feature here like VPN Manager or some other feature here.

You're like, I don't know why it's not working. That's probably the Client Side Extension isn't up
to date. If there is something happening with regards to claiming licenses or some special PolicyPak
cloud feature, that's going to be the PolicyPak Cloud client.

Once again, you'll probably want to do a small scale test of both of these things to make sure that
the latest thing is working on a couple of test machines. Run for a little while, then you can
upgrade some medium scale and then finally full scale with the All group.

Hope this video helps you out. Looking forward to getting you started with PolicyPak real soon. Take
care.


