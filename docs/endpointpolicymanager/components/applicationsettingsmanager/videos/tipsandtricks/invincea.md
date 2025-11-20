---
title: "Endpoint Policy Manager and Invincea Integration Demo"
description: "Endpoint Policy Manager and Invincea Integration Demo"
sidebar_position: 30
---
# Endpoint Policy Manager and Invincea Integration Demo

Invincea is great for Sandboxing the IE, FF, and Chrome browsers. But you can use Netwrix Endpoint
Policy Manager (formerly PolicyPak) to manage all the in-browser settings. Here's a demonstration.

<iframe width="560" height="315" src="https://www.youtube.com/embed/8pye7kyPfNs" title="Endpoint Policy Manager and Invincea Integration" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak and Invincea Integration Demo

Hi, this is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak software. In this
video, we're going to show you how PolicyPak integrates with Invincea. Invincea is a sandboxed
browser for Internet Explorer, Firefox, and Chrome. So, let me just show you. I've already got
Invincea installed. I've got PolicyPak installed too. This is Invincea by itself. The idea is that
Invincea does a great job at protecting the browsers but it has not built-in way to manage
configuration settings for your browsers or for your Acrobat Reader, for instance. So, for instance,
if we were to go to Options here – Internet Options, you can set things yourself like the Homepage
or Advanced Configuration but you probably want to set these things up for your users.

You probably don't want to leave it for them or to chance, because you could actually make it more
secure if you correctly configure your browsers. So, that's the first thing. Let's go ahead and show
Internet Explorer then I'm going to also show you Firefox. In this example here Firefox doesn't have
any configurations either. If I just go to Options here, you see that there's no Homepage and some
extra security settings can be just worked around, which is, you know, again, could make you less
secure. And if we go to, say, Chrome here – okay, go to Chrome here and we go to Options here. We
can see that there's nothing particularly set here, so I'm going to demonstrate some settings into
Chrome.

I'm also going to set up Acrobat Reader and sort of demonstrate some items in there as well. And
when I demonstrate Acrobat Reader, the way Invincea works is that if you were to click on a pdf file
here – so, if I were to click on what Internet Explorer admins don't know about application
management, you can see the Invincea browser kicks into high gear but there are some settings that
you may want to configure correctly and nicely using PolicyPak. So, let's go ahead and check that
out. So, the first thing we will do is we will go over to our Management Station and what I'll do –
I'll do this for the entirely of West Sales, so what I'll go ahead and do is, I'll right-click on my
West Sales guys and I'll create a GPO and I'll call this Manage – got to spell it right – Manage
Browsers for Invincea and Acro using PolicyPak.

So, right-click here, click edit, and then the first thing we'll do is we'll do Internet Explorer
and Chrome, so we'll go to user side PolicyPak here, we'll click on Application Settings Manager,
right-click New Application and we'll pick Internet Explorer 8 and later for windows 7 and later.
So, there's nothing special you need to do in PolicyPak in order to get Invincea stuff to work. You
just go ahead and make this policypak.com and while we're here we will right-click and we will lock
it down, so we'll disable the corresponding control in the target application, thus making it not
possible for you to just change it in the UI. We can also, if we want to – I'm not going to
demonstrate this. You can perform ACL lockdown, which will ensure that if the user goes to the
registry entry or the file involvement here, they can't modify that either.

I'll go to Advanced here and I'll just check a bunch of checkboxes here. It doesn't really matter
what these things do or don't do. That's not really important. The point is that ALL these items are
available to you in both of the regular browser and the Invincea browser. So, just for fun I will
right-click and disable a bunch of the corresponding controls. It kind of doesn't really matter for
the purpose of this demonstration. I'm just sort of proving a point here that we're able to deliver
settings into the Invincea browser and the regular browser and I'll demonstrate both of those. Okay?
So, that's Internet Explorer and while I'm here I'll also do Chrome here. So, I'll take Chrome and
I've got to pick the right one. There we go. I'll double-click that guy here and let's go ahead and
set the specific Homepage. We'll also set this to policypak.com and we'll go over to Advanced and I
like this one.

I want you NOT check offer to save passwords I enter on the web because if the bad guys get into the
computer in the first place and they run Chrome, well then those passwords are saved and that is an
attack vector. Even though the browser is protected it's still an attack vector if somebody gets
into the end-user's machine. So, we uncheck offer to save passwords as I enter them on the web.
Okay, and then lastly we will go, over on the computer side, we'll go to PolicyPak Application
Settings Manager and we'll manage Firefox New Application. Then we'll go to Firefox 23 and Later Pak
and once again we will also drive in the Homepage of policypak.com, right-click, we'll go ahead and
lockdown the setting using the system wide config file.

Firefox has a slightly different way of doing things. We'll go ahead and go to Security and we want
to check all three of these checkboxes here and lock them all down. Okay, so we're making sure that,
again, even though the browser itself is protected from the bad guys breaking through, we still have
to protect the attack vectors inside the browser itself. So,
[https://www.policypak.com/pp-blog/windows-10-block-websites](https://www.policypak.com/pp-blog/windows-10-block-websites)
and don't remember password for sites. You know, these are the kinds of things you want to make sure
that you still do no matter what your browser situation looks like. Oh, and also, I forgot. While
I'm here also I will right-click New Application and select PolicyPak for Acrobat Reader X, okay.

I'll go ahead and change – I'll make some settings changes here too. So, for instance, Javascript,
we want to uncheck Enable Acrobat Javascript and lock it down and we'll go to – let's see, where's
the guy that I'm looking for here? Let's see – Security Enhanced. I'm sure I'm looking right at it.
There we go, Security Enhanced. Of course you want to Enable Enhanced Security in also lock him
down, so we'll disable the corresponding control. So, we're delivering settings to Acrobat Reader.
What the heck – we'll go to the units, something simple, and we'll change it to millimeters and lock
it down. Now, remember everything in Invincea land, there's kind of two versions. There's the
Invincea browser and the normal browser, or the Invincea version of Acrobat or the normal version of
Acrobat.

All we're going to do is we're going to see both of those items here on the endpoint so let's go
ahead and run GP Update or wait for Group Policy to do its thing here. All right, let's check them
out one by one. Let's start out with Internet Explorer here and remember, the Invincea browser is
going to start up exactly where we want it to because PolicyPak is now in charge. So, we've driven
the Homepage settings in here and if we were to go to Internet Options here, boom, you can see that
Invincea is activated. You can Invincea there. The Homepage is locked down and the items on the
Advanced tab that we said to check and also gray out are, in fact, being delivered correctly just
the way we expected. So, that's the first thing. Now, remember there's two versions of Invincea
browser, so if we go to gotomeeting, which is on the whitelist site, you will also see that those
settings are in fact driven in here as well to the real browser too. So, both the Invincea browser
and the regular browser have those settings baked in. Let's go ahead and start – go to Chrome next,
and you can see the Invincea browser launch.

You can see PolicyPak Homepage being driven in here and you can go to Settings here. You can see the
Homepage and you can see that it's set by – let's just go here. It's not us and you can see that
setting is based upon us, the administrator, and if we were to go to – where the heck is that
security thing? Let me see if I can find that. Advanced Settings and if we go to – here we go.
Uncheck offer to save your web passwords, thus making it more secure. You can see that that's being
delivered by us right there. Okay? So, that's setting Chrome. Let's go ahead and go into Firefox and
see how Firefox reacts to PolicyPak. You can see the Invincea browser getting launched there and,
boom, you can see we've drive the Homepage in – just what we expect and if we go to Options here and
then we go to – you can see the Homepage is locked down and not changeable.

If we go to Security here, you can see all three checkboxes are now checked and users can't work
around it – exactly what we expect and there we go. We are very secure and the last thing is Acrobat
Reader. So, remember in Invincea if you double check just Acrobat Reader by itself, the Invincea
version is not launched but just to prove a point, PolicyPak is working in the not Invincea version,
okay. So, you can see we've checked enable enhanced security and also we've unchecked enable Acrobat
Javascript so if for some reason your users DON'T use the Invincea version and they just go to file
open here, we've got them protected, right, as much as we can do. It's different than what the
Invincea guys can do but the point is that you're protected if you DON'T use the Invincea browser
stuff.

So, if we look at ‘if a user double clicks on a pdf file here,. what happens while the Invincea
version is launched and inside Invincea we shall also see that if we look at Javascript, boom,
that's unchecked and grayed-out users can't work around it and security enhanced is also checked.
Oh, I also forgot to show it before – units is now set to millimeters. So, we're doing ALL the
things PolicyPak said we were going to do, thus, integrating PolicyPak plus Invincea together giving
you the best of both worlds. There's nothing you need to configure or do. If you are already using
Invincea, we will fully support our configurations together. All you need to do is use the latest
version of PolicyPak and keep on going and that's it. Hope that explains our PolicyPak and Invincea
integration. I hope you enjoy it, get to use it, and looking forward to having you try it out and
let us know how it works. Thanks so much. Take care.


