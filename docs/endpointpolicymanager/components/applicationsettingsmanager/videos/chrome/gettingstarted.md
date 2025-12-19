---
title: "Manage Google Chrome using Group Policy, SCCM or your own management utility"
description: "Manage Google Chrome using Group Policy, SCCM or your own management utility"
sidebar_position: 10
---
# Manage Google Chrome using Group Policy, SCCM or your own management utility

Netwrix Endpoint Policy Manager (formerly PolicyPak): Manage Google Chrome using Group Policy, SCCM
or your own management utility

<iframe width="560" height="315" src="https://www.youtube.com/embed/hjXlY4a1H2Q?si=hkppxF2cbhnIBmYi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Manage Google Chrome using Group Policy video transcript

Hi, everybody. This is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software.
In this video, I'm going to show you how to manage Chrome using Group Policy or your own systems
management utility.

To get started, let's set the stage. I'm just a guy called "eastsalesuser4," a standard user, no
admin rights. Even a standard user can get into all sorts of mischief. If we go to "Settings" here
for Chrome and take a look at "Show advanced settings," let's take a look at what's available to the
user.

Some of these defaults that Chrome puts in are pretty good like "Enable phishing and malware
protection." That's good, but the user just clicks it, closes out Chrome, and now they're not
protected – not good for you. Just to prove a point here, if I go back to "Settings" here and go
back to "Show advanced settings," you can see that's not being enforced in any meaningful way.

That's thing number one. Thing number two, let's say this idea here, "Offer to save passwords I
enter on the web," not good if it is checked. Let me say that again. If this checkmark is checked,
that's not good because then this machine becomes less secure. The bad guy steals a laptop, and they
can start surfing the websites that your users have used, and then they can get into all sorts of
places that you probably don't want to bad guys to go. You want this unchecked, but how are you
going to do that? That's what we're going to show you next.

Lastly, let's take a look at "Content settings." One of the scariest settings overall is "Ask me
when a site requires access to my camera and microphone." The user can just say, "Yes, I would like
to do that," and the camera turns on, the microphone turns on and your secrets go right out the
door. Instead, wouldn't it be better to "Do not allow sites to access my camera and microphone"? I'm
going to show you how to do that.

Let's go ahead and close this out and go over to the Group Policy editor. We'll "Create a GPO in
this domain, and Link it here…" and we'll call this "Manage Chrome using PolicyPak." Click "Edit"
here, and we'll dive down under user side, "PolicyPak/Applications/New/Application" and there it is
– "PolicyPak for Google Chrome" – as well as lots of other great applications like "Internet
Explorer," "Java," "Lync," "Mozilla Firefox," "Adobe Reader." Actually, we have about 100 Paks, so
you can just snap those in and you're ready to rock.

We'll go ahead and pick "PolicyPak for Google Chrome" here, and let's go ahead and dictate our
settings. If you'll remember, that user unchecked "Enable phishing and malware protection." We're
going to "Always reapply this setting." We're going to just check that checkbox and make sure that
it's always set.

Remember this other guy, "Offer to save passwords I enter on the web"? We want to if it is checked,
uncheck it because when it is checked – which is the default – that means you're less secure, so
we're going to uncheck that checkbox. We're delivering uncheck.

Let's go to "Content Settings," and we'll go all the way to the bottom here. Remember, the default
is for "Ask me when a site requires access to my camera and microphone." Let's go ahead and dictate
"Do not allow sites to access my camera and microphone."

Let's go over to our target machine. We'll run "gpupdate." Now, you don't have to use Group Policy
to manage Chrome with PolicyPak if you don't want to. You can use SCCM. You can use LANDesk, Ghost,
KACE or any other management tool you want. We just happen to be using Group Policy in these
examples.

Now that that's all done, let's go ahead and run "Google Chrome" and see what happens. We'll go over
to our "Settings" here. You can see "Some settings are managed by your administrator."

We'll "Show advanced settings," and let's take a look. "Enable phishing and malware protection" is
checked, and "Offer to save passwords I enter on the web" is unchecked. Excellent. Let's go over to
the "Content Settings." If we go all the way to the bottom, we'll see "Do not allow sites to access
my camera and microphone."

What if a user is naughty here and they decide that they should uncheck this guy and recheck this
guy? PolicyPak is always working. Even if the computer is offline, PolicyPak is always working for
you.

When we rerun "Google Chrome" and go back over to "Settings" here, and we go back to "Show advanced
settings," those two checkboxes are checked and unchecked exactly the way you delivered them.

That's it. If you're looking to get ahold of the bits, we ask that you join us for our webinar
first. Once the webinar is over, we'll hand over the bits and see what kind of trial you want to
start, and we'll get you started.

That's it. If you have any questions, feel free to post them on our support forums. We monitor them
around the clock.

Thanks so much. Talk to you soon.


