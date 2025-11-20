---
title: "Endpoint Policy Manager + FSLogix: Set default browser based upon if the browser is masked or revealed"
description: "Endpoint Policy Manager + FSLogix: Set default browser based upon if the browser is masked or revealed"
sidebar_position: 40
---

# Endpoint Policy Manager + FSLogix: Set default browser based upon if the browser is masked or revealed

Netwrix Endpoint Policy Manager (formerly PolicyPak) + FSLogix: Set default browser based upon if
the browser is masked or revealed.

<iframe width="560" height="315" src="https://www.youtube.com/embed/d-nhpXHv_IM" title="Endpoint Policy Manager + FSLogix: Set default browser based upon if the browser is masked or revealed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak + FSLogix: Set default browser based upon if the browser is masked or revealed

Hi. This is Jeremy Moskowitz, Microsoft MVP, Enterprise Mobility and Founder of PolicyPak Software.
In this video, I'm going to show you how you can quickly dictate the default browser based upon the
browsers that are actually on or not on the machine because of FSLogix.

In this example, this guy is EastSalesUser1, and he is being exposed to "Google Chrome" browser. Let
me go ahead and show you what happens if I were to go to "WordPad" and get an e-mail or just get any
link at all through e-mail, Skype, anything at all. What happens? The default browser of Internet
Explorer opens. That's not what you want. You want "Google Chrome" to be your default browser.

Let me go ahead and "Sign out" here and show you what happens for WestSalesUser1. WestSalesUser1
with FSLogix is being shown only the Firefox browser. Let's see that: "westsalesuser1." Because of
FSLogix, we're only going to see the "Mozilla Firefox" browser, but we're going to have the exact
same problem. If you were to go to "WordPad" or you get a link from Skype or something and you go to
"www.abc.com," what happens? The default browser once again is going to be not the browser you want
but instead Internet Explorer. You can see it's trying to get started over here in the background.

What I'll go ahead and do is log off of this. I'll go ahead and "Sign out" here. I'll go over to my
Group Policy Management Console here and for all of my "Sales" people – which is going to affect
"East Sales" and "West Sales," two completely different OUs here with different people in them – I'm
going to "Use PP and FS to manage browsers." This is going to be the first of a series of little
basic videos, so I'll keep using the same Group Policy Object in the remaining of them.

I'll go ahead and click "Edit" here. What I want to do is I want to say on the user side,
"PolicyPak/Browser Router." I want to have two what's called collections ("New Collection") which
are kind of little thought bubbles. "Collection 1" is "When I have FF" and the second collection is
going to be "When I have Chrome."

How do we detect when we have Firefox or when we have Chrome? It's easy to do. We're going to right
click and "Change Item Level Targeting." We're going to sniff it and see if we actually have it.
We're going to match a "File Match" based upon if Chrome is there or not. I happen to have "chrome"
on this machine to make the demo go a little bit faster. But I'm just saying if Chrome exists on the
endpoint, then that lights up as orange.For this one, "When I have FF," we'll "Change Item Level
Targeting" and say when the "File Match" exists of "Mozilla Firefox" and "firefox," do this stuff
when I have Firefox.

What's the thing we said we wanted to do? We want to quickly and easily add a "New Default Browser"
policy. When we have Firefox, we want to set it to the "Firefox" browser. Just like that, we've set
the default browser of Firefox when they have Firefox.In the Chrome thought bubble, we're going to
set a "New Default Browser" for "Google Chrome" when we see Chrome.

It's just as simple as that. We've created these two little collections. These collections have
little smarts on them. "When I have FF," make Firefox my "Default browser." "When I have Chrome,"
make Chrome my "Default browser."

Let's go ahead and let me log off here and show you what this would look like in your environment,
no magic tricks or anything else up my sleeve. Let me go ahead and "Sign out" here. I'll log on as
"eastsalesuser1" first.

Now that he's there, remember, we have Internet Explorer and Chrome. Ten seconds ago when I went to
www.abc.com, it went to the default browser which was Internet Explorer. Now we're dynamically
setting the default browser to Chrome. Let's see that that actually works. We'll click on this,
click yes, and Chrome appears just the way we would expect because PolicyPak is in charge here.

Let's go ahead and we'll "Sign out" and then I'll log on as "westsalesuser1" who only has Firefox
and Internet Explorer. If I were to go to "WordPad" and go to "www.abc.com," what's going to happen?
We're setting the default browser on the fly based upon the conditions you choose, and FSLogix is
doing the masking of the applications. In our case, it was Chrome and Firefox. In this way, you can
dynamically set the default browser based upon the browsers they actually have.

I hope this helps you out. If you're looking to get started soon, fill out the form and we'll get
you the bits and you can try it out yourself and off to the races.

Thanks so much. We'll talk to you soon.

