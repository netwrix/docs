---
title: "Use PP Cloud to Manage your browsers and manage your routes to domain joined and non domain joined machines"
description: "Use PP Cloud to Manage your browsers and manage your routes to domain joined and non domain joined machines"
sidebar_position: 20
---
# Use PP Cloud to Manage your browsers and manage your routes to domain joined and non domain joined machines

Deliver your routes to traveling and non-domain joined machines to Use Netwrix Endpoint Policy
Manager (formerly PolicyPak) Cloud to manage your browsers and make routes to your domain joined and
non-domain joined machines.

<iframe width="560" height="315" src="https://www.youtube.com/embed/HsbcWLV1_aQ" title="Endpoint Policy Manager Cloud: Using In-Cloud Editors to Manage Endpoint Policy Manager Browser Router" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz. In this video we're going to use Endpoint Policy Manager Cloud's
in-cloud editors to create browser router routes so that you can get to the right browser, to the
right website lickety-split. What you should probably do first is to create a text file, just sort
of knowing where you're headed, make your little map.

For instance, if I want everything in Mozilla.org or always open in Firefox, Google Chrome, and
Chrome, and so on, you're off to the races. That's what I'm going to do. Let me show you how I got
here in the first place. I'll just go ahead and close this out.

Here I am in the Endpoint Policy Manager Cloud universe. If I click on a group like my Work from
Home Group, I want to Create and Link a New Policy here. I can then pick the policy type. We've got
all the Microsoft Group Policy stuff, all the Endpoint Policy Manager things. We're going to focus
here on Browser Router.

In Browser Router you can put all your ideas into one big policy if you want to or you can break it
up into different policies. That's your choice. I'm going to call this PPBR Demo 1 here. I'm going
to create a New Policy. If I create a New Policy here, the first thing you might want to do is set
your default browser.

For instance, if you want to start off life and say Chrome is our default browser, that's great. If
later you want to go from Chrome to Edge or Firefox to Chrome, whatever you want to do, you can do
that. We also have a special one called User Selectable. We have a special video on User Selectable.
Go ahead and watch that if you want to understand how a user can make their own choice.

Same thing with custom; custom is a little bit special as well. I'm just going to stick to the
basics here, and I'm going to show you Chrome first. Then I'll transfer over to Edge after that.
I'll go click on Save here and I've just set my default browser to Chrome.

The next thing I want to do is I'm going to create a new policy. This is just a standard browser
router policy. This is where you get to make your wishes. If we go back to our Notepad file here, we
want Mozilla.org to go to Firefox. Give it a name like All Things Mozilla to Firefox.

The URL can be very specific or you can make it a wildcard. I actually like wildcards quite a bit.
If you want to say \*Mozilla\* to go to Firefox, there you go. You've just got to click Save and
you're off to the races.

Maybe the next thing that we'll do is we'll go ahead and create a new policy here, a new browser
router policy. Let's see what's next on the list. Google go to Chrome, okay, even though that's our
default. We're going to force it anyway. We can say All Google to Chrome.

We'll do wildcard \*Google\* and Chrome. It's good to have this set because if we change the default
browser later to Edge, at least you know Google will always continue to go to Chrome and not to
Edge. Go to that. Next on the list, why don't we just jump to something unusual, Endpoint Policy
Manager.com. We want to do Internet Explorer in Edge mode and set IE8 mode at the same time. That's
a tall order.

What are we going to do? Let's go ahead and go to New Policy here, New Browser Router Policy. We'll
call this Endpoint Policy Manager Example Site. If you want to use Internet Explorer Special Mode,
you have to give it an exact URL. I'm going to go ahead and give it https://www.policypak.com. It
should work without the https before it, and it should also work without the www before it. That's
all the same there.

If I were to go to Browser Mode and Internet Explorer 8 and I want to open it up in IE in Edge Tab,
very good, I'll go ahead and click Save here. There you go. Let's see; what else do we want to do
here? Let's go to Microsoft.com for Edge. We'll go to New Policy, New Browser Router Policy, so MS
to Edge. That's easy. We'll just go to Microsoft.com. We'll do https://www.microsoft.com. We'll go
to Edge. There we go.

What's our last guy here? Our last guy is MSN.com to Internet Explorer in Standalone mode. Let's do
that. We'll go to a New Policy here for Browser Router, so MSN to IE Standalone. That's going to be
https://www.msn.com, Internet Explorer. Keep that, but we're going to open it in IE Standalone Mode.
We did all the things. We go ahead and click OK. Now we're locked and loaded from our work from home
machines. We've got our browser router stuff set up.

This computer is already ready to rock. He is joined to Endpoint Policy Manager Cloud. All we're
going to do is run ppcloud/sync or you can wait about an hour, and then you're off to the races.
What we're going to do is we're going to make sure we got the setting. There we go, Endpoint Policy
Manager Browser Router Demo 1.

Usually you have to count to about ten seconds. There are a couple of caveats. The very first time
that somebody gets some browser router routes, what happens is that browser router needs to install
some of our little helper stuff. Just be aware that the very first time there's a little bit of a
runway to sort of get started.

We'll start off in Chrome land. We're going to see if the Chrome extension pops into view here.
We'll give it a second or two to kick in. There we go, new background app added. You only see this
the very first time. We're off to the races here with Chrome land.

Let's go ahead and see what happens. Let's say if we wanted to Google for Mozilla, that's totally
great, Google all day long. When it's time to actually go to Mozilla.org, what's going to happen?
Close the wrong browser and open up the right browser just like that, which is Mozilla.org.

If we wanted to go from Firefox over to Google, what are we going to do? We're going to close the
wrong browser and open up the right browser, just like that. Once again, that worked perfectly. If
we were to be in this browser and we wanted to Google for Endpoint Policy Manager, that's all fine.
You're allowed to do that.

When you click on Endpoint Policy Manager, that's where you should open up the correct browser. We
said this browser is going to be Edge, but not just Edge, Edge in Internet Explorer mode. You notice
that that doesn't happen right away. There's a little bit of a hang time for Internet Explorer to
realize that it can do this function. It's in the documentation for Internet Explorer, and it's the
65-second first time.

You know what? You're a busy IT professional. You don't have 65 seconds. If you know this little
magic trick where you can go to edge://compat/enterprise, you can actually give it a little boost.
You can say give it to me anyway. You can force an update. Once you do that, you should be off to
the races.

Let's try that one more time. We'll go to Chrome land. We'll go Googling for Endpoint Policy
Manager. Let's do that one more time. We'll Google for Endpoint Policy Manager. Then googling is
fine. That's totally fine. When you click on it, what do we want to do? We want to open the right
browser, which we said is going to be Edge but with Internet Explorer mode and also set it to IE 8.
Let's see if we do all the things. Here we are. We're in Edge. You can see Internet Explorer mode,
and we are Internet Explorer 8, doing all the things.

What happens for things where we don't have a route? That's going to go to your default browser. I
don't have a route set up for, say, Amazon.com. When I go to Amazon.com, it's going to go to my
default browser. What is that? We set it to be Chrome.

Let's go ahead and see that. There it is. We can see Chrome opens up and doing what we expect. If we
take a look from the user's perspective of default browser here, go to Default Browser, Choose a
default web browser; what we will do is Endpoint Policy Manager takes over being the default
browser. You can see it says Browser Router. What's that? That's too confusing for your users.
That's not a problem. What we can do is change that.

We'll go back over to Endpoint Policy Manager Cloud. Here's our browser router policy. We'll click
Edit Policy here. We can add what's called a new Look and Feel Policy. If you want to, you can say
Managed by Your IT Department, whatever you want. Then you can also display the default browser name
in parentheses, if that's interesting for you.

Then you can go ahead and click OK. While we're here, why don't we also change the default browser
from Chrome to Edge. Maybe you're migrating in that direction. That's totally fine. Let's set both
of these things up at the same time. We'll go ahead and click OK. We'll go back to our endpoint
machine here and run policypakcloud/sync. Count to ten after you get the latest policy. Make sure it
kicks in. Then you can check both things. The first thing we can do is we can check the default
browser, Choose a Default Web Browser. Let's see if our new Look and Feel Policy took it. Yes,
Managed by Your IT Department Microsoft Edge.

Then lastly, we said when we click on Amazon to go to our default browser. What's that going to be
now? We just changed it over for our work from home people from Chrome to Edge just like that.

With that in mind, this is how quickly and easily you can get Browser Router up and running for your
non domain-joined machines or even your domain-joined machines no matter where they are using
Endpoint Policy Manager Cloud. I have one more little magic trick I want to talk about, which is
taking existing on-prem directives, if you already have some like in this example in my MMC console.
I have already got similar stuff in Browser Router. That's great.

If you want to, you can take your collection, right-click, View as XML in Notepad, take a look at
all the things you've done with your on-prem console. You can Copy that. You can then go back to
Endpoint Policy Manager Cloud and maybe for my west sales team or something I want to not Create and
Link a New Policy, but I want to Upload and Link a New XML here.

What we'll do is when you paste into this block, we're going to recognize all that as Browser Router
directives. We'll do PPBR from OnPrem. We go ahead and click Add here. Now we've done all the
things.

If you like to use the on-prem MMC Editor, that's totally great. You can use that. Just do the work
there. Do your small scale tests with your domain-joined machine, if that's what you want to do.
Then take those directives and slam them into Endpoint Policy Manager Cloud just like that.

Once you've done that, if you want to edit it later, you're more than welcome to using the in-cloud
editor. That way you can take your on-prem directive, if you have them, bring them to Endpoint
Policy Manager Cloud, and continue to edit them here in Endpoint Policy Manager Cloud land. I hope
this video helps you out. Looking forward to getting you started with Endpoint Policy Manager
Browser Router and Endpoint Policy Manager Cloud real soon. Thanks so much.


