---
title: "Browser Router with Custom Browsers"
description: "Browser Router with Custom Browsers"
sidebar_position: 20
---
# Browser Router with Custom Browsers

If you have App-V, ThinApp, or Citrix or RDS published applications, use this trick to route from a
real built-in browser to your virtual / published browser.

<iframe width="560" height="315" src="https://www.youtube.com/embed/0Ch4mQ6Sbf8" title="Endpoint Policy Manager:  Browser Router with Custom Browsers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager \_ Browser Router with Custom Browsers

Hi. In this video I'm going to show you how you can use custom browser router routes to ensure that
the right browser opens for the right time. So, the scenario might be a user might be using the
built-in version of; say; Internet Explorer and they go to a website like policypak.com. You always
want this to fire off, not here in the built-in browser but either in an Appv4 or 5 browsers or a
thin app browser or a Citrix browser. For instance, this browser is hanging out over there on the
Citrix server, so it's connecting to my Citrix server over here. It's real easy to do this. We'll
just create a custom route. There's really only one thing you need to know, which is how to launch
from the command line and once you know that you can create a custom browser router route so I'll
just wait for this to finish here.

So, by way of example, let's say I just right-click over to Mozilla Firefox and go to Properties,
okay. What I'll do is I will take the target here, okay, you can see it launches the Citrix ICA
Client against all this stuff. Just copy that for now. You'll come back to that in a second and
let's go ahead and create a route. So, you can say, you know, custom browser route. All right, we'll
go ahead and click edit here. You can do what I'm about to show you in either the user or computer
side. That's totally fine. I just happened to do this – I'm just going to do this demo on the user
side first. So, you go to user side, Policy Pak, and we'll go to Browser Router here. We have to
create a new collection. You can put item level targeting in here. You can say, for instance, only
do these things WHEN the person is on a machine that matches a computer name or is in a particular
security group or the operating system is whatever.

So, we're not going to do that here but you can get very fine-grained and say this custom route set
will only take effect WHEN those conditions are true. So, now what I'll do is I'll create a new
custom route policy and I'll call this \*Pak\* and I'll say this is a wildcard \*Pak\* and I want to
go to my custom browser. I'm just going to paste it in. Remember, I copied it before. This is the
Citrix ICA launcher for Firefox. Anytime I hit Netwrix Endpoint Policy Manager (formerly PolicyPak)
it will go over there and it says you better make sure that this exists on a local client or else if
it doesn't we're going to fall back and go to Internet Explorer if we don't see it. So, that's the
first thing. Let me go back to that machine also and let's use Appv5 and we'll create a custom route
Appv5, so we'll go ahead and take this version of Firefox here. Okay, this is Appv5 and let's create
one called New Policy. We'll do this \*gpa\* for gp answers so we'll go to \*gpa\* and this will go
to gp answers.

This will go to the Appv5 version of Firefox here, okay. Go ahead and run that and then the last
thing we'll do on this machine is maybe for ThinApp what we'll do is we'll launch the ThinApp
Firefox27 when we go to, say, VMware. So, what we need to do is we need to get it exactly right.
This part is a little trickier because you might want to copy it this way, so now that you've got
the command line exactly right here you can then go back to your GPO, create a new policy, and call
this \*vmware\* and we'll go back to \*vmware\* and we'll make a custom route to the thin app
version of Firefox. Okay? So, there we go. So, now we've got our custom routes. We'll go back to our
endpoint machine. We'll run gpupdate and we'll wait for this to finish. Okay, now that that's done,
let's go over to our built-in browser and we'll go to Endpoint Policy Manager first and we'll see
what happens here. Now that, that is done, let's go ahead and relaunch Internet Explorer and we'll
go over to Endpoint Policy Manager.com and _boom_! What it's doing is it's rerouting. You can see it
rerouted to the – no, that wasn't – there you go. I want to make sure you can see that. So, it's now
launching the ICA Citrix version of Firefox over the network. Okay, so that worked out pretty well.
Now, let's go ahead and back in the browser that's actually ON the machine here, we'll go to
gpanswers.com and this time it's going to route to the Appv5 version of Firefox and I know that this
is the right version actually because even though there's nothing that's presented to the user, the
About… this is Version 27. Okay?

That's correct and if I go to vmware, that's going to launch, _boom_, the thin app version of
Firefox right there. So, if you've got Appv4, Appv5, Thin App or Citrix, using browser router you
can specifically say that when they go to the website using the built-in browsers on their machine,
you will automatically launch the custom browser. Okay? That being said, we do know that if you were
in the custom browser right here and you try to go back to, for instance, policypak.com, this is
where the routes end. We do not route from the custom browsers like thin app or Appv back outward to
your original browser. So, for custom browsers like this, it is a one-way street. For custom routes
for browsers that are actually installed on the machine, it will route between browsers just fine as
you have seen in the previous videos. If you have any questions, we are here for you and we hope you
get started with it soon. Thanks so much.


