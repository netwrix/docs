---
title: "How to Un-License any Endpoint Policy ManagerComponent via ADMX or Endpoint Policy Manager Cloud"
description: "How to Un-License any Endpoint Policy ManagerComponent via ADMX or Endpoint Policy Manager Cloud"
sidebar_position: 20
---

# How to Un-License any Endpoint Policy ManagerComponent via ADMX or Endpoint Policy Manager Cloud

If asked by support, you might want to unlicense a specific component. This video shows you how.

<iframe width="560" height="315" src="https://www.youtube.com/embed/UKrfo8KCOlg" title="Endpoint Policy Manager: Unlicensing a Component" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz. In this video we're going to talk about how to unlicensed one
component, if asked by tech support. The idea is that if you were to go to an endpoint and type PP
Update with the latest client side extensions, you're going to see an indication of how you're
licensed. You can see this is a licensing GPO. This is the old school, not the universal license.

I'm going to go into Universal Licenses and then also how to do the same thing with PolicyPak Cloud.
Stay tuned through the whole video if that's you. The basic idea is let's pretend for a second you
were told by us we need you to unlicensed Browser Router. There's two ways to do it. I'm going to
show you both ways.

Again, I'm going to show for the Group Policy, MDM, SCCM, and also the cloud method. Just hang
tight. The first way you would do this is that you're going to go over to your license. I've got two
licenses here, the old school one first. I'll do the universal one second.

Go ahead and click on the old school one. If we take a look at PolicyPak, click on the node,
right-click and go to License Management here; one way to get unlicensed by Browser Router or
PolicyPak Preferences Manager or whatever it is that we ask you to do, you can then go here and say
Delete. When you say goodbye to a particular license and go ahead and click Close here, now that
license isn't there anymore.

If I were to take a look by Refreshing the GPO Report here, I'm not going to see a browser router
license anymore because I've ripped the knob off. There is no more Browser Router license. If I go
back over there and go to GP Update, I'll give this a second to catch up. Now that that's done, if I
were to rerun PP Update command here, you can say now Browser Router is no longer licensed. That's
one method.

Let's do a second method for a different component. I'll pick Java Rules Manager just for fun here.
Let's go with another method to unlicensed it. You could go to, say, Sales on the Computer side. You
can then say Unlicensed PPJRM Only.

What we can do is take a GPO that will go on the Computer side. You can use Admin Templates here,
Policies, Admin Templates. You have to have the PolicyPak ADMX Settings. We have a different video
for how to get that going. Then under Client-Side Extensions, say Java Rules Manager here, you can
prevent the component, PPJRM, from being licensed.

You can go here. You can click Enabled. When enabled, Java Rules Manager ignores any kind of license
keys. We've done that. We'll go over to the endpoint here. We'll run GP Update. Give this a second
to catch up.

Now we'll rerun PP Update to see what the story is for licensing. Hey, look at that! Java Rules
Manager, now the license is valid, but the product was prevented from being licensed by a policy.

Why do you need to know both methods? If you've got universal license keys like this one here, which
is one big fat XML that has all the stuff you're licensed for, if you click on it and go into
License Management, you can see there's no way to explicitly say Java Rules Manager, I don't want to
use you anymore because this is one licensing XML file. You need to know the method that I just
showed you using the ADMX to kill one particular component, if that's what you want to do.

Moving onto PolicyPak Cloud, you basically do the same thing. Let's say for your work from home
computers, you could do the same thing. You would say Create and Link a New Policy here for the
Admin Templates. We'll go ahead and click Okay.

Then let's say Unlicense PolicyPak Preferences or something like that. What you do is create a new
policy here. You're going to look for the PolicyPak ADMX Settings here. Then go to PolicyPak,
Client-Side Extensions. Then find Preferences Manager. Then here we go, Prevent PPP Component from
Being Licensed. We'll double-click it.

Click Select here. Then we will say Enabled. When Enabled, Preferences Manager ignores all the
licenses, and you're done. I don't need to really show that to you actually working because that's
just the same as before. That's the basic gist.

There's two different methods to get unlicensed, which you kind of need to know both of them if you
need to. Typically you would only need to do this if asked. If there's something that you want to do
this for, you can let us know and we can talk through it. I hope this video helps you out. Looking
forward to getting you started with PolicyPak real soon. Bye.

