---
title: "Endpoint Policy Manager Software Package Manager PLUS Least Privilege Manager: Block any unwanted store apps !"
description: "Endpoint Policy Manager Software Package Manager PLUS Least Privilege Manager: Block any unwanted store apps !"
sidebar_position: 30
---
# Endpoint Policy Manager Software Package Manager PLUS Least Privilege Manager: Block any unwanted store apps !

Want to deploy Windows Store Apps via Software Package Manager, but want to enforce that ONLY
specific UWP apps can run? This is the one-two combination you need to get the job done!

<iframe width="560" height="315" src="https://www.youtube.com/embed/NT07ngb0aJM" title="Endpoint Policy Manager Software Package Manager: AppX Manager" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


In a previous video you saw me use Netwrix Endpoint Policy Manager (formerly PolicyPak)'s Software
Package Manager to deploy Microsoft Windows Store Applications like Slack or Power BI Desktop. You
can see, just double-click on the application and it runs just like that, which is great news. The
thing, however, is that there's always going to be some kind of stray applications on the desktop
that you really can't wiggle out of. There are some things that are not removable.

It turns out, good news, is that you can use Endpoint Policy Manager Least Privilege Manager in
conjunction with the Software Package Manager. Let's also assume that you want to deploy some
package later. Let's get a package kind of staged and ready to rock that we won't deploy yet.

I'm going to do something goofy like Netflix. I know you probably wouldn't really want to deploy
Netflix. That's okay. It doesn't really matter. Let's go ahead and get Netflix just as an option
here.

The way we're going to do this is we're going to Share. You saw me do this in the previous video.
We're going to Copy the link. Then I'm just going to hold it here in Notepad just for a second. I'm
just going to hang onto that for just a moment.

Then the next thing we're going to do is we're going to turn on our Least Privilege Manager UWP
Block Piece. We'll create a new Windows Universal Policy here. This is only available in the
Endpoint Policy Manager Least Privilege Manager Complete Edition.

Then what we'll do is we'll say all UWP apps, no thank you. Deny Execution to all that stuff. We can
also use a customized message like Must Contact IT or whatever. You can put variables and all sorts
of stuff in there. We're not going to do that. Then we'll go ahead and say everything from UWP is
denied.

Let's just go ahead and see this work. Netflix is not delivered. We're going to run GP Update here.
Give this a second to catch up.

What we're going to see is that nothing at all is going to work. Slack is not going to work. Power
BI Desktop is not going to work on purpose. We just told it to put the smack down on it in Microsoft
Store. That's not going to work either.

Everything is going to be completely blocked, including goofy things like Xbox console stuff. Let's
go ahead and check that out and see. Let's go ahead and run Slack. What do we get? Here we go, Must
Contact IT.

If we were to go to, say, the Xbox Console, Must Contact IT. If we were to try to go to the
Microsoft Store, what do we get? Must Contact IT. We really want Slack to work, and we also want to
get our Netflix deployed. What are we going to do?

First thing is that we can go back to the little helper utility I showed you in the last video. We
can go to the Endpoint Policy Manager Extras Folder and find the Software Package Helper utility. If
we take a look at the publishers that are on this box, for instance, Slack, what we can do is take a
look and see who's here. There's Slack and there's the publisher.

What we can do is we can export all of these items here. We're just going to get the XML involved
here. I'm just going to save it to C:/temp or something like that right here on the Desktop. That's
fine. There we go, registered apps.

Let's just take a look at this for two seconds here. What we're after is the Slack publisher. There
we go. Let's get that guy right here. We will take that detail, the Slack publisher, and what we
want to do is add a new UWP Policy that lets us enable Specific UWP Apps from this publisher, which
is going to be Slack just like that.

We will now allow and log execution and allow apps from Slack just like that. Let's go ahead and do
that. That's the first thing we're going to do.

The second thing we're going to do is go back to Software Package Manager, and we're going to deploy
Netflix or whatever other application you want. I just want to prove that even when we're blocking
UWP, the AppX Delivery for Software Package Manager still works. I'm going to Deliver Netflix. I'll
go ahead and put this in here as well.

It would smart for us if we actually got the publisher too. I guess we could do that after we do
this. We'll go ahead and deliver Netflix here. Then we'll come back around on it.

We'll go run GP Update here and what we'll see is that two things will happen. The first thing that
happens is that we're going to be deploying Netflix. The second thing is that we're going to be
allowing Slack.

Go ahead and run Slack. Let's see what happens. Boom, that's permitted. That worked. Now we're just
giving it a moment for Netflix to catch up here. There's Netflix.

Is it going to run? No, we are actively blocking it. Why are we actively blocking it? We're blocking
all UWP apps. You need to specifically say that it's okay to run.

What we'll do, we'll once again get our little helper utility here. We'll go to the File Explorer
here. Go ahead and run our little helper utility in Extras. Get the Software Package Manager helper
tool. Let's take a look at what we've got here.

We'll go for Netflix. There it is. We can go ahead and export this guy again. There we go. We just
need to get that ID.

If we take a look at Registered Apps, there's the Netflix publisher. We could also have done this by
name. That probably would have worked too. I like publisher because it's more strong.

We'll go ahead and do publisher. Then we'll go back to Least Privilege and we'll say Add New
Universal Policy here. We're going to let specific enterprise apps by this publisher. We will say
Allow and Log. Now we're saying Netflix is good. Allow Apps From Netflix.

Now you have got a very tight ship. Let's go ahead and verify that that worked the way we expect.
We'll go ahead and run GP Update here. Give this a second to catch up. Now that we're all wrapped
up, let's review.

Netflix, does it run? Yes, it runs because we said that that publisher is good to go because of
Endpoint Policy Manager Least Privilege Manager. The point of the story is you can use Endpoint
Policy Manager Software Package Manager to deliver any AppX packages you want. You can do a smack
down with Endpoint Policy Manager Least Privilege Manager with our UWP apps and then open up the
little doggy doors to make sure that the applications that you say are valid to run, but the things
that you say are no bueno are still no bueno. You must still contact IT for those things because
some of these items you can't remove.

Because of that, you want to make sure that you have exactly the controls that you want. You can
remove applications. Many of them you can add using Software Package Manager. Then if you want to
put the full smack down on the Least Privilege Manager with our Add New UWP Policy to Deny your UWP
Applications and then Allow the ones that you expressly want to open up, there you go. I hope this
helps you out. Looking forward to getting you started with Endpoint Policy Manager real soon.


