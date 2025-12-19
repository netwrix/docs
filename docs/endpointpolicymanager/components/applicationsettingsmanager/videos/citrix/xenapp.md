---
title: "Endpoint Policy Manager enhances XenApp with Group Policy"
description: "Endpoint Policy Manager enhances XenApp with Group Policy"
sidebar_position: 50
---
# Endpoint Policy Manager enhances XenApp with Group Policy

You Publish applications in XenApp all day long.

But when your users blow up their applications, get a weird pop-up, or otherwise misconfigure their
settings, you're the one that has to shadow in and fix their session.

But that's all preventable.

Watch this video to see how you can use Group Policy and Netwrix Endpoint Policy Manager (formerly
PolicyPak) to ensure that users' XenApp application settings. Settings will be automatically
deployed and fully locked down with the IT and business settings they need to have:

<iframe width="560" height="315" src="https://www.youtube.com/embed/r_qXQ7nz1Ws?si=PDj2_31_f9DDqbWV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

XenApp is awesome. It enables "Application Anywhere" access. But that "Application Anywhere" access
can come back to bite you if you're not doing all you can to manage those applications.

When users work around that application's settings, that's a support call for you, and an immediate
cost to fix it, and downtime for the user (on every device they own.)

These kinds of costs are easily preventable. Because Endpoint Policy Manager is always ensuring the
application's settings – within XenApp. Endpoint Policy Manager works naturally with Group Policy —
when connected to their XenApps.

Endpoint Policy Manager prevents users from manipulating important settings, but also quietly
reapplies misconfigured settings if a user or application happens to work around them.

In short, Endpoint Policy Manager protects your XenApp investment. And it protects your users from
themselves.

Endpoint Policy Manager was designed by former Group Policy MVP Jeremy Moskowitz – who "wrote the
book" on Group Policy
([https://www.mdmandgpanswers.com/book](https://www.mdmandgpanswers.com/book)), runs
MDMandGPanswers.com ([https://www.mdmandgpanswers.com/](https://www.mdmandgpanswers.com/)), and
lives and breathes Group Policy and enterprise software deployments and desktop lockdown.

If you're ready to protect your Citrix XenApp investment we're here for you. Call 800-883-8002 and
let us know you're like a free trial of Endpoint Policy Manager.

### Endpoint Policy Manager enhances XenApp with Group Policy video transcript

Hi, everybody. This is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software.
In this video, I'm going to show you how to use PolicyPak to manage XenApp deployed applications
using Group Policy.

Let's go ahead and get started. Let me go ahead and logon as some guy, "westsalesuser2." Let's take
a look at what stuff he's got. Here's his XenApp world.

Let's say he decides to run "WinZip" for the first time. Sure, we'll go ahead and do all that stuff.
Go ahead and run WinZip for the very first time as the user. The Citrix receiver will do its thing,
as you can see here.Once it's done, what you're going to see immediately is that the settings you
want them to get he's not going to get at all.

For instance, if there's a security setting in this application – and I just happen to be using
WinZip as an example – like setting the "Minimum password length" or ensuring that certain security
settings need to be set, there's really no way to deploy guaranteed settings into your Xen
Appapplications unless you're using PolicyPak.

You might try to use the Group Policy preferences and that might work for some of the cases, but if
your applications don't use registry punches that's going to be a problem. Also, the Group Policy
preferences can't perform UI lockout. We're going to see both of those things in this little
demonstration.

Here, what I want to try to do is I want to dictate some of these important password settings and
also eliminate some of the confusion that a user might have when using this particular application.

Let's also take a look at Firefox as the user, as well. We go ahead and we run "Mozilla Firefox"
here. The Citrix receiver does its thing, downloads a little bit of Firefox here and it's presenting
it to us. Here we go.

Maybe we want to make sure that the "Home Page" is always up-to-date – there's the home page – and
certain "Security" settings aren't worked around. Like if a user does something nasty like that and
they uncheck these settings, that wouldn't be good.

What we're going to do now is we'll go ahead and close out right here on the Citrix receiver. We'll
go to Group Policy here. For all of our "West Sales Users" we're going to "Dictate Winzip and
Firefox settings to XenApp users." We'll do two things at once just to accelerate things a little
bit.

On the user side under "PolicyPak/Applications," it's as simple as right click,
"New/Application."Actually, we have over 35 preconfigured paks, but for this demonstration I'm going
to show you WinZip first and then Firefox second.

Here's "PolicyPak for WinZip14 and 15." Let's go ahead and go right to "Passwords." We'll click all
these checkboxes just to prove a point. We'll right click over this guy and "Hide corresponding
control in target application,"and we'll "Disable corresponding control in target application"for
this second setting.

Not only are we checking the checkboxes, but we're going to literally change the UI in the
application. So no matter what Citrix receiver you're using – if you happen to be using an old XP
machine like I have up here or Win7 machine or an iPad or an iPhone –you're going to get the UI that
you want them to have.

We'll go over to "Cameras," right click over this and "Disable whole tab in target
application."We'll make it hard for them to work around our settings.

Also while we're here, we'll go to "PolicyPak/Applications/New/Application"and we'll go to
"PolicyPak for Mozilla Firefox."Like I said, what we want to do here is we want to for the "Home
Page" we'll do this "www.policypak.com."

Then while we're here, we'll also go to "Security." Well, remember, that user unchecked those
checkboxes. Let's make sure that those checkboxes, those important security things, are in fact
always set.

Now let's go back over to the user. We'll click on our "XPComputer32" machine here. It doesn't
really matter. Any Citrix receiver will work. Go to "westsalesuser2." We'll give credentials,
"Fabrikam.com" here.

We'll go ahead and run "WinZip," and let's see what we see now as a user. We'll go ahead and go to
"Options/Configuration…" and go over to "Passwords," and there we go. We've dictated those important
settings exactly like what we wanted.

Can you see that right there under "Cameras"? "Cameras" is totally grayed out. We've locked out that
portion of the UI so the user can't work around it. If a user does try to work around our settings,
well, the next time Group Policy applies it'll automatically dictate those settings back to them.
But if you wanted to, you could simply gray out those settings for them.

Let's see how Firefox did. Let's go ahead and close our WinZip. We'll run "Mozilla Firefox" now. The
Citrix receiver is doing its thing. There we go. Now we can see we've got the PolicyPak home page
delivered to our Firefox.

If we go to "Options" here and we take a look, sure enough those "Security" settings are
re-dictated. If we uncheck these checkboxes or change the home page to something we shouldn't do –
we'll go to "www.evil.com." I have no idea if that's a real website or not.

If we try to rerun "Mozilla Firefox" at this point, let's go ahead and see what happens. Right back
to PolicyPak. Go to "Options" right there, and we've put the settings right back. Even if a user
does try to work around our settings, at their very next session for Firefox it will come back and
ensure those security settings.

That is the deal. With PolicyPak, you are now able to deliver the settings to any of your
applications no matter what receiver they're running on. If we were to go to another computer here –
"westsalesuser2," same guy or a different guy in the same OU, "Fabrikam.com" – as soon as he runs
"Mozilla Firefox,"for instance, as soon as he runs that application he's going to get the exact same
settings again dictated through Group Policy every single time.

There it is, PolicyPak. If he goes to the "Security" settings, they're guaranteed. If he tries to
uncheck those settings here, no problem. The very next time he tries to run the application, those
settings will return again and again.

Users are not able to work around your preconfigured, set settings. That is the whole point of
PolicyPak. You can deliver settings to installed applications. You can deliver settings to ThinApp
applications. You can deliver settings to App-V applications, and you can deliver settings to XenApp
applications.

PolicyPak basically enables you, using the Group Policy infrastructure you already have, to dictate
settings and lock things down for any application regardless of how that application is delivered.

I hope you had fun watching this demonstration of PolicyPak and XenApp. If you have any questions,
we're happy to help.

Thanks so much, and we'll talk to you soon.


