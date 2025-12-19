---
title: "Auto-Create Policy from Global Audit event"
description: "Auto-Create Policy from Global Audit event"
sidebar_position: 50
---
# Auto-Create Policy from Global Audit event

In this video learn how to make a workflow between EVENTS in the endpoint event log, and your
management station. Just make the event occur, then copy and paste, and Netwrix Endpoint Policy
Manager (formerly PolicyPak) does the rest.

<iframe width="560" height="315" src="https://www.youtube.com/embed/k7VeeCwKH4E" title="PPLPM: Auto-Create Policy from Global Audit event" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz. In this video I'm going to show you how you can use Global Audit
Policy to turn on auditable events and then take those auditable events and feed it back into Least
Privilege Manager to automatically create your rules.

The idea might be you've got a desktop here that's got a bunch of things on it. Users download stuff
or you know that they have the ability to install things. You want to automatically create rules.
I'm going to focus on these applications here. I've got a bunch of other stuff here, but just to
keep it simple, I'm going to focus on these guys.

Let's pretend for a second that you wanted your users to be able to install dotNetFx45. When you get
this, that's too bad. There's no way for user to overcome this without Endpoint Policy Manager Least
Privilege Manager. You need to have an auditable rule in place that you can track to see if they are
doing this thing. How do you do that?

We've got this idea called Global Audit Policy. You can create GPO, link it over to your computer
side or your user side. I'm going to do this on the computer side. I'm going to Least Privilege
Manager and create what's called a New Global Settings Policy.

What this does when you turn this on, we have four configurable items. In fact, I go over this in
another video. Three of these items, the Applications Requiring Elevation, Audit Elevated
Applications, and Audit Untrusted Applications, when we see that we have rules turned on for these
things, we can then audit for these items that happen. Then feed it back into PolicyPak here right
in this UI and automatically generate a rule to overcome that.

I'm going to turn on this auditing first. You won't get any events in the Event Log unless you do
that first. I'm going to go ahead and run GP Update here. Give that a second to settle in. Then I'm
going to rerun the installation of this dotNetFx45 and show you that even though it still doesn't
let me overcome it, at least I've got an auditable event in the Event Log. In fact, I can show you
that right now.

Now that that's all completed, I'll go ahead and double click on this. No rule to overcome it, but I
do get an event in the Event Viewer. I already have my Event Viewer up and running here, so let me
go ahead and Refresh. Here we go.

This process requires elevation. We can see here's the text. There's the application itself. We can
see that it's digitally signed by Microsoft, and it's also got some internal information around the
file name. This is the best case scenario.

This application has digitally signed, has file information, and so on. What you can do now that
you've got this auditable event, you can right click, and you can Copy the Details as Text. Go back
to your management station and now you can Add a New Policy from Audit Event. We tell you the
instructions here. If you don't want to see that again, you're welcome to say no, thank you.

The idea is you then take this item, bang, and you paste it in. We're going to do as much as we can.
We tell you you should be running this thing with Elevated Privileges. You can Allow and Log it, but
that's not going to help you here. This thing, as we saw, has a UAC prompt and requires Elevated
Privileges.

We also suggest to you that you want to do it By Publisher and you probably also want to do it by
the Version and the File. You probably want to light up all these things. You want to say when it's
this Publisher and this particular Product, this particular File, and it's this Version or Newer.
That would be a best practice to really light it all up in this capacity.

Then we're going to say Apply to Child Processes. Some things require that. Some things don't. We
can't know that out of the gate. That might require some more investigation. Then that's it.

We've created the rule. You can look at it again this way if you want to. You can see we've got File
Name, File Version, and Signature Condition and so on. Now that we fed it back into Endpoint Policy
Manager land, let's go ahead and close this out.

We'll rerun GP Update here. That item that had no ability to overcome a UAC prompt, we tracked for
it. We had an auditable event, and we fed it back in. Let's go ahead and see if we can now launch
dotNetFx. No UAC prompt. Boom, it's just doing its thing. We are off to the races.

We fed that back in based upon the audible rule. Again, this is the best case scenario here. There
are some other cases that you should probably be aware of, items where we don't have complete
information. For instance, here's 7-Zip Installer. You can see it throws a UAC prompt, but you see
it's not digitally signed. It's not digitally signed.

What are we going to do? We can do what we can do. We can only do what's possible. If we were to
refresh this, you can see this 7-Zip requires UAC prompt. What are we going to do?

We can see that we've got the product information, but we don't have it digitally signed. Let's just
see what we can get out of this. We can Copy the Details as Text. We can go back here, and we can
right click Add a New Policy from Audit Event. We'll go ahead and smash it in place.

Go ahead and click Next and run that install with Elevated Privileges. What can we do? We can do it
By Path, which is name. Probably not your best bet. By Hash is pretty good, which says this version,
not an older version, not a newer version, this particular version. That's pretty good. We'll go
with that.

We'll go ahead and run with Child Privileges as well. Let's go ahead and see if we can get this one
to work as well. Again, not every application is a perfect candidate for the best practice, which is
to say digitally signed and also has inside file info rules. When we don't have that information, we
just fall back to whatever is next in there.

Let's go ahead and see if 7-Zip will not work. There we go. We'll go ahead and Install, and you're
off to the races. This version is now officially blessed. You can see it's performed. It's
installed, and there is 7-Zip.

Let's do one more just to show you one more little variation here. Actually, I'm going to go and
take a PowerPoint Viewer. PowerPoint Viewer is kind of interesting. When you go ahead and try to
double click it, it is digitally signed. It has some information, but not everything.

Let's go ahead and go back here to this. We'll go ahead and refresh. Here's PowerPoint Viewer. We
can see that it is – this one's digitally signed, but doesn't have the product information or file
information name in here. You see that combination. There's only so much we can do.

We'll right click. We'll go ahead and copy the details as text. We're going to recommend what we
think is the best for you. We'll go ahead and do New Policy from Audit Event. We'll go ahead and
paste it in here. Click Next. Again, Run with Elevated Privileges.

Here's what we have this time. We know it's digitally signed by Microsoft, but that's not a great
idea because you don't want everything digitally signed by Microsoft. That's a terrible idea because
then all sorts of things are going to be elevated. You don't want to do that.

We can't say By Publisher and by inside information because that inside information isn't present.
We do what we think is best for you, and we suggest that you do it By Hash. We'll go ahead and
enable for Child Processes, and you're off to the races.

We'll go ahead and close this out. We'll GP Update. Then we'll leave it there. There are other
auditable event types that you can use for this, but the basic gist is essentially the same. Once
you have the event trapped, you're then going to paste it in.

We'll let you know if we can make an event from that thing or not. Let's just do PowerPoint Viewer
as our last guy here. Yeah, sure enough we're off to the races; bing, bing, bing. That's about it.
Hopefully this workflow process helps you out. This way you're able to turn on global auditing
policy first.

You can send your events to a centralized logging server if that's what you want to do. Then once
you've got those events all lined up in your event viewer like I just showed you, you can then take
this data, right click, copy the text to the event, and smash it right in. Bang, you've got your
workflow all set up. I hope this video helps you out. Looking forward to getting you started with
Endpoint Policy Manager Least Privilege Manager real soon. Bye-bye.


