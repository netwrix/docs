---
title: "Events"
description: "Events"
sidebar_position: 10
---
# Events

Learn about the Eventing System in PolicyPak Least Privilege Manger.

<iframe width="560" height="315" src="https://www.youtube.com/embed/v2t3B5rBK6Y" title="Least Privilege Manager: Events" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Transcript:  Least Privilege Manager: Events

Hi. This is Jeremy Moskowitz. In this video, I'm going to give you a quick tour of the event system
around PolicyPak Least Privilege Manager, some of the most common events that people would like to
see.

To get started, I actually have a few rules in place that will do some automatic and also on-demand
elevation. The first one is "PowerPointViewer." You can see it's going to automatically "Elevate"
that. The second one is going to do Process Monitor but only "Elevate (On Demand)." In between
there, I'm going to show you what happens if a user tries to do a challenge and response code.

We'll start off with "PowerPointViewer" here. Again, we have a rule in place, so it just sails on
through. I'll go ahead and click "Continue" and just show you that, in fact, it will run even though
it would normally require admin rights to install.

Once this is all done, let me go ahead and show you the Event Viewer here and give you a quick tour
about the event that occurred when that happened. If I go to "Event Viewer," you can do this as an
admin or a standard user. You can go to "Applications and Services Logs." Give this a second to
populate. Head down to "PolicyPak" and what you're looking for is "PolicyPak Least Privilege Manager
Client - Operational" "Source." That's interesting in case you decide you want to do a custom view
and show just those guys.

Here in the "Source" you can see on "eastsalesuser1" "PowerPointViewer" tried to run. There's the
"Command Line." You can see it was "Elevated with HASH rule." That's the name of the policy. You can
see the GPO, and you can see the "Collection" that it's in which is the root. That's all the
information you get, which is pretty great out of that elevation. You can see it has a particular
"Event ID."

Let's move on to a challenge and response. If I click on "Silverlight install" that doesn't have a
rule, you see I get the "PolicyPak Admin Approval" dialog box. If the user tries to call you and
you're not there, they have to click cancel. Let's see what kind of event they get when that
happens.

If we were to refresh this, we can see "Dialog canceled." Therefore, that was an application that
was attempted to run. That was the "Silverlight install" that tried to run. You can see it was an
"ApplicationInstaller" type. You can see the user, and you can see that it's "Signed." So there's a
bunch of information that's contained here, and that's a particular "Event ID" as well so you can
get right in there.

Now let's continue down the road here. Let's pretend that you are at your desk. They click on
"Silverlight install." They call you up or the help desk or whatever. They give you the "Request
Code." I'm going to use the "Admin Approval Tool" which you've probably seen in other videos. I'll
type it in here, and I want to run this "Once."

I can pick a "Reason" code. Let's say it's "Application: Installation For User." This will come up
in just a second. I'll use this "Once" and it "Expires" "Never." So there's the "Response Code."
When I go ahead and click "OK" as the user, you can see "Silverlight" now goes ahead and does its
installation here. Go ahead and give this a second to finish up, and we're done.

Let's go ahead and see that event in the event system. If I refresh here, you can see "Dialog
Success." This is "Event 613" which is different than the one that we saw earlier. Now we can see
that "Command Line" succeeded. It's an "ApplicationInstaller," and you can see that again it's
"Signed."

"Code Uses: 1/1." Again, if you made it such that this was a reoccurring code, that would show up
here. You could have it one time, five times, ten times, and never expires and so on. Those things
are all listed here, so you can see how many "Code Uses" there are. And also "Apply to Child
Processes" as well which is an important privilege to hand out or to restrict.

That's the second thing I wanted to show. The last thing I wanted to show is this idea of
self-elevation. Going back to the Process Monitor rule here, I have a special condition in place
that would let an advanced user "Apply on demand" or do what's called self-elevation.

This is handy for developers or advanced users who when they click on something maybe you want it to
run standard, but you know that you can teach these special users how to right click and "Run with
PolicyPak." So this is a special apply on demand rule and when you do that the application runs
correctly.

And you probably want this to be logged, so let's go ahead and see what that logging looks like.
We'll go back to Event Viewer here. We'll go ahead and refresh this, and here we go. "The following
process has been allowed. Run with elevated token." That's "Procmon." This is "Event 605." You can
see that was run just the way you would expect here. All the same information you saw earlier, so
that gives you the ability to know when a user has done a self-elevation rule.

That's it for right now. We actually have all the event IDs hanging out in the manual ready for you
to explore. If you are interested, there are other videos on how to take these, round these event
logs up, send them to a collection server or a collection system and then if you wanted to also use
something like Splunk to paw through them and get pretty charts and graphs and so on. But for now,
this is a very quick tour to help you get on your way. Hope this gets you on the right path.

Thank you very much, and talk to you soon.


