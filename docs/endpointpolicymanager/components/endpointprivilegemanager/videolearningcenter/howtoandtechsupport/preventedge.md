---
title: "Prevent Edge from Launching"
description: "Prevent Edge from Launching"
sidebar_position: 60
---
# Prevent Edge from Launching

Don't remove EDGE from your image. Instead, just block Edge from running. Using Netwrix Endpoint
Policy Manager (formerly PolicyPak). See this video for how to.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ni7G7YPF28Y" title="Endpoint Policy Manager Least Priv Manager: Prevent Edge from Launching" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager Least Priv Manager- Prevent Edge from Launching

Hi. This is Jeremy Moskowitz, former Group Policy MVP and Founder of Endpoint Policy Manager
Software. In this video, I'm going to show you how you can prevent Microsoft Edge from launching at
all.

If you Google around on the Internet, you might find some advice that tells you that you can remove
Edge in your image. I highly advise against that. If you dig a little deeper underneath the hood,
you might find people reporting correctly that sometimes Windows fails to work correctly when
upgrading from version to version. You might find that you've shot yourself in the foot in a very
bad way.

I'm going to show you instead how you can, when you click on Edge, prevent Edge from launching at
all. We're going to do that using Endpoint Policy Manager
[https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html](https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html).
The trick is just knowing the name of "Microsoft Edge" and where it is and how it is launched.

I've already got that name of the application here. Now this middle section may change from time to
time, but right now this is where Edge lives in the operating system. If you try this and it doesn't
work for you, dig a little deeper. You might find where "Microsoft Edge" lives.

Long story short, if you were to go to all of your "East Sales Users" or for all of your "East Sales
Desktops," it doesn't matter, I'll "Create a GPO in this domain, and link it here" called "PPLPM
Kill Edge Dead." I'll click "Edit" here.

I'll dive down under user side here. Again, you could do this on computer side if you wanted to do
it on computer side as well, but I'll do this on user side. Instead of using "Least Privilege
Manager" to elevate, we'll use it to smack down.

We'll "Add" a "New Executable Policy," and we'll "Use simple rule," and we'll do it by "Path." Path
is its name or its location. We're going to specify "Add file" here. I'm just going to pop in the
whole path here. You can hit "Browse" and browse for it. I'm just doing it to save a little time.

So you're browsing for "C:WindowsSystemAppsMicrsoft.MicrosoftEdge." Make sure that this does line up
correctly, and it has to exist on the endpoint. And here you go: "MicrosoftEdge.exe." You can see
we've converted to "%SYSTEMROOT%" and we've got the whole thing there.

We'll go ahead and click on "Next." We don't want to "Run with elevated privileges." We want to
"Deny execution." In doing so, we're going to "Kill Edge Dead." If you also needed to, you might
have a situation where you want some people to have this and other people not to have it. That's
great. You would use "Item Level Targeting."

You could say, for instance, I want all of my standard users to have this, but I want it not to
apply for when they're developers or some other thing like that. I'm not going to do that here, but
that's where you would use "Item Level Targeting."

I'll go ahead and click "Finish," and we're ready to try it out. Let's go over to our endpoint.
We'll go ahead and run GP Update ("gpupdate") here. I'll give this a minute to finish up. Now that
that's done, let's go ahead and run Edge. What happens? "This app has been blocked by your system
administrator." In this way, you're actually leaving Edge on the system, but when it's called it is
automagically blocked and that gets you to your goal.

Hope this helps you out. Looking forward to getting you started with Endpoint Policy Manager real
soon.  
Thanks.


