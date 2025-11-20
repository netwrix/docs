---
title: "Using Windows Event Forwarding to search for interesting events"
description: "Using Windows Event Forwarding to search for interesting events"
sidebar_position: 40
---
# Using Windows Event Forwarding to search for interesting events

In this video, you'll learn the steps you need to do in order to set up event forwarding. When done,
and by using your existing infrastructure, you can collect interesting events which come out of
Netwrix Endpoint Policy Manager (formerly PolicyPak).

<iframe width="560" height="315" src="https://www.youtube.com/embed/K8AWtkHwUi8" title="Endpoint Policy Manager: Using Windows Event Forward to search for interesting events (PPLPM or anything else)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager: Using Windows Event Forward to search for interesting events

Hi. This is Jeremy Moskowitz. In this video, I'm going to show you how you can do event forwarding
for any kind of application, including Endpoint Policy Manager
[Least Privilege Manager](https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html).
This can help you decide what things you need to make rules for.

By way of example, let's say you have a user who double clicks on something that requires a UAC
prompt. Look at that. They get a prompt. They may or may not get a correct challenge ("Request
Code") and "Response Code" from you the administrator in order for this to go forward.

These interesting events are going to show up here in the "Event Viewer" hanging out on this very
own one singular machine under "Applications and Services Logs" and then under "PolicyPak." You can
see when PolicyPak generates interesting events for Least Privilege Manager or other things, in
Least Privilege Manager case you're going to see it under the "Source" of "Least Privilege Manager
Client – Operational." Let's go to the first thing. The first thing was this process required admin
privileges. That was a "Silverlight install." What was the result of what happened? "Dialog
canceled."

Now if you had 1,000 machines, you might want to know across 1,000 machines when UAC prompts were
required, when dialogues were canceled, and also when challenge and response codes are used
successfully or unsuccessfully. All these are, like I said, detailed in the Event Log automatically.
But what we're able to do is use Microsoft's built in event forwarding system, get it to a
centralized log location, and then you can paw through them yourself and you can make your own
rules.

Let me show you in excruciating detail how to set this up. The first thing you're going to do is
you're going to go to "Create a GPO in this domain, and link it here" and you're going to do this
against your computers. I'm going to do this for my "East Sales Desktops." I'll call this "Event Log
Forwarding Setup." There are a bunch of steps in here, and I'll try to go at a good pace – not too
slow, not too fast. Of course, you can stop the video as you need to.

The first thing we're going to do is use Group Policy "Preferences" on the computer side. On the
computer side in "Services" we need to turn on a service that isn't on already on some endpoints.
We'll click on "New/Service." The "Service name" we want, you can look at the service name on the
bottom right, and we're looking for "WinRM." There it is, "Windows Remote Management" service. We're
going to turn this thing on, on the endpoints. We'll go ahead and do that first.

The second thing we're going to do is add a group to a restricted group. Again, I'm doing this all
in a singular GPO because as far as I'm concerned this single GPO is going to turn on event log
forwarding, and these are the steps that are required to do that.

Under computer side, "Policies," under "Windows Settings," I'm going to use restricted groups.
That's under "Security Settings/Restricted Groups" here. There we go. You're going to "Add Group."
The "Group" you're going to add, you're just going to type it in. Don't click on "Browse" because
that would be for domain based groups. This is for the local groups, so you're going to use "EVENT
VIEWER." Then the "Members of this group," you're going to just type it in. It is "NETWORK SERVICE,"
and that's going to automatically resolve correctly on the endpoint.

The next thing you're going to do is, on this machine which is going to be your event collector,
you're going to go to "Event Viewer" on this machine. If you've never done it before, when you click
on "Subscriptions" it says there's a service that's involved here. Do you want to turn it on and
automatically configure it? "Yes," we do. We'll go ahead and get that started here.

Then the next piece of the puzzle is to continue down the same Group Policy Object and to configure
the endpoints to receive a subscription. That's how this system works. You're going to receive a
subscription. Now this setting is under computer side, "Administrative Templates." And this is going
to be under "Windows Components" and then under "Event Forwarding." The one you're after is this
guy: "Configure target Subscription Manager."

Now this took me a really long time to figure out. The documentation on this is not very clear, so
I'm going to explain how this works. You can see that there's a syntax here and, even though I read
it 19 times, I had a hard time making heads or tails of it the first couple times I did it.
Basically, you have to start with the word "SERVER" or else it doesn't work. So that's the first
part.

Then the next question is, are you using HTTP or HTTPS? For me in all of my tests by default, it was
using HTTP and that says that you're using "port 5985." If you're using HTTPS, that's "5986." So
again, you're going to type in "SERVER=http://," then the name of this machine, the one that is the
collector. That's going to be "dc2016.fabrikam.com:" for me. Then again, I'm doing HTTP so that's
"5985/wsman/SubscriptionManager/WEC."

There's a little optional thing at the end which is ",Refresh=." Now for testing, you may want to
put in "60" which is look for a subscription every 60 seconds after Group Policy applies. It will
tell the system look for the subscription every 60 seconds. In the real world, you probably don't
want to do this. I would recommend only doing this for testing. I think after that, it will do it
every so often, maybe like 15 minutes or something. I'm going to leave it here for right now, but
you can decide if you want to use it for real.

Let's make sure it really stuck. Yeah, that seems like we're good to go. Remember, "SERVER=http://"
the name of your domain. It has to be a fully qualified domain name:
"blahblahblah.whateveritis.com:5985" for HTTP "/wsman" as you can see here
"/SubscriptionManager/WEC." And then the optional piece is ",Refresh=60." So I've now gone ahead and
done that.

The next piece of the puzzle is back again in the Windows Event Viewer. We're going to create a
subscription. So we're going to right click and "Create Subscription" under "Subscriptions." We can
call this "PolicyPak Interesting Events." The name doesn't matter. You can do whatever you want.

The thing we're doing is called "Source computer initiated." In other words, the computers over
there are going to push to this computer over here. The computers that you want, you can either
specify all computers or you can specify specific computers. I'm going to keep it simple and do
"Domain Computers." Now remember, domain computers is actually different than domain controllers, so
most of the time this is the right configuration specifying domain computers.

You can also "Add Certificates." If you want to do something across domains, this is the way you
would do that. I'm not going to show you how to do that in this simple configuration. I'm just going
to go ahead and do all domain computers.

Then the next thing is this idea called "Select Events." Now this would be a little bit easier if
the machine you were on actually had the PolicyPak client-side extension and you had some
interesting events. But this machine in my case happens to be a server or a domain controller, and
it doesn't have the PolicyPak client-side extension. So therefore, when I go to "Select Events" here
and I start poking around here under "Event logs" and look for PolicyPak things, I don't have any
because I don't have the PolicyPak client-side extension. It's not here.

So in order to do this, you have to configure by click, again, "Select Events." Click on "XML,"
"Edit query manually." In the KB article that you probably got to for this in the first place,
you're going to have to paste in a manual query here that will get you the interesting events you
want.

Now you're not beholden to use just these events. This is a demonstration specifically to show how
you would acquire "Least Privilege Manager Client – Operational" logs to then make determinations
about what rules you want to. But this could be anything. This could be a Windows system log. This
could be a security log. This could be just about anything you want. This could be everything in
PolicyPak land if you want it to also. As you can see, I'm limiting it only to "PolicyPak Least
Privilege Manager Client – Operational" log just to keep it simple.

But again, if the machine you were on configuring the world right here had the PolicyPak client-side
extension, you wouldn't have to do this step. You could find it pretty fast using the "Filter"
method. But I don't, so I can't. So I'll go ahead and click "OK" and click "OK" again, and that's
it.

What we're going to do now is I'm going to run GP Update on the machine over there. And what we're
looking for here is the "Source Computers" should go from "0" to 1. So what we'll do is we'll go
back over here. We'll run "gpupdate /force," and it's doing a whole lot of stuff. It's turning on
WinRM. It's configuring that special group that we needed, the event viewers, to have the membership
we needed. And it's starting to deliver subscriptions through Group Policy and accept those
subscriptions here.

So hopefully this just kicks in the very first time and life is good. And once that happens, once
this is all done, what we should see is when Group Policy finishes that the machine has received the
subscription and is ready to rock and we'll see it in the event viewer over there.

All right, so let's go ahead and go over back to our event system here. I'm going to hit F5 to
refresh and "Source Computers" "1." That is what you want. This is the magic. Once you see that
you've got "Source Computers" here, what you should see next is under "Windows Logs/Forwarded
Events," you should start seeing interesting events come across. These events were the ones that we
created just a couple minutes ago, the ones that we selected, and they're ready to rock.

Let's go ahead and create a couple more interesting events just to see some more interesting events
come across. If were to click on "Silverlight install," that's not available to us. So we'll go
ahead and click Escape as a standard user. Or if we go to "Device Manager," that's not available to
us. So we'll hit Escape as a standard user.

Let's go ahead and click on "PowerPointViewer." Then maybe what we'll do is we will say let's get a
"Request Code" from the user. Then we'll go ahead and run the PolicyPak utility that will generate
keys here, which I have under "PolicyPak Extras" and the "PolicyPak LPM Approval Tool." I have this
already configured. You probably saw this happen in some other videos.

Here's my "Request Code." Here's my "Response Code." I'm going to copy that. I'll read it to the
user over the phone. And then maybe I can pick the "Reason" why is "Application: Installation for
User." Let me go ahead and copy that "Response Code." Then I will paste it in here, or the user
reads it over the phone. There we go. The software is now elevated installed.

All this is being logged into the event log system. That's the whole point. But now it's not just
here on this one machine. It's now being forwarded using event forwarding over to our collector
system back over here. I'm done with this. I'll go ahead and close this out. I'll close this out
too.

Okay now, if I hit F5 and I don't see any interesting events, it doesn't mean it's not working. I
think what happens at this point is that event forwarding will now forward stuff every 15 minutes or
so. So what I'm going to do is I'm going to pause the camera and then we'll come back and I'll hit
F5 in a little bit and we'll see those interesting events that occurred during the session. Hang
tight.

Okay, I'm back. As you can see here, the number of events says "4" but "New events available." So if
I hit F5 to refresh, there they are. Now we can paw through the events. You probably want to work
backward. But the point is you can see "Dialog success," "Process requires administrator
privileges," and "Dialog success." And "613" is that they were able to get through because of a
code. And you can see the "Reason" is "Application_installation," what we used earlier. So you can
see there. And the "Code Uses" is "1/1," which is to say it can't be used again.

If we were to go backward some more, you can find some other events that we got started on. "Dialog
canceled," "Process requires administrator privileges." This is the kind of thing that you would use
to create the rules in Least Privilege Manager. And just like that, you're off to the races.

I hope this helps you out with event forwarding and collection. Now you can do this for any process
or if you want to specifically use it for Least Privilege Manager to figure out what processes are
throwing UAC prompts and help you create rules to bypass them, you can do that right now.

Thank you very much for watching, and talk to you soon.

Related
article: [How to forward interesting events for Least Privilege Manager (or anything else) to a centralized location using Windows Event Forwarding.](/docs/endpointpolicymanager/components/endpointprivilegemanager/technotes/eventing/windowseventforwarding.md)
