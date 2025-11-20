---
title: "Endpoint Policy Manager + WVD: Manage Applications Settings"
description: "Endpoint Policy Manager + WVD: Manage Applications Settings"
sidebar_position: 50
---

# Endpoint Policy Manager + WVD: Manage Applications Settings

WVD is "all about the apps" which is great. Now how do you manage them? We have lots of videos on
our website, but this one shows how quickly and easily you can manage your WVD apps using Netwrix
Endpoint Policy Manager (formerly PolicyPak).

<iframe width="560" height="315" src="https://www.youtube.com/embed/JBBOS6oImFw" title="Endpoint Policy Manager + WVD: Manage Applications Settings" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi. This is Jeremy Moskowitz, former 15-year Group Policy MVP and Founder of PolicyPak Software. In
this video, we're going to learn how you can take your Windows Virtual Desktop applications and
manage them like a boss using PolicyPak Applications Settings Manager.

You can see here's Firefox. This is the Windows Virtual Desktop version. But you know what?
Everybody hates these kind of pop-up things. And, of course, we also want to be able to set our
configuration items.

So if we go to "Tools/Options" here and we take a look, maybe you want to set the "Home page" for
certain users to be the right thing. Or you want to make it so that your security concerns are met.
For instance, you don't want to "Remember logins and passwords for websites." And, of course, you
want to make it so that Firefox isn't always asking for updates. You don't want to "Automatically
install updates." That would be weird. Your users wouldn't know how to handle that situation.

So we're going to configure all these things using PolicyPak. In a previous video, I gave the
lash-up of what we're looking at here. This machine represents our laptop machine, but over here
I've got my domain controller, my on-prem domain controller, and I also have my Windows Virtual
Desktop actual applications here. These are the guys that are slinging applications.

You can see, there's "EastSalesUser1." He's actually still logged on. For this magic to work, I'm
going to actually right click and forcibly "Sign off." Let's go ahead and do that. I'll "Sign out
user." There's no indication that that happens to the user, but that's good to know that you need to
do that.

All right, so back over here on the domain controller in our on-prem domain controller land, what
are we going to do? Well, I'll do this for my "WVD" machines which are here. I'll set it that all my
WVD machines are going to get this. Now just to put a fine point on it, if I take a look and see
which computers are inside "WVD," you can see there they are. The four computers are hanging out
there doing their thing.

I'm going to use the Group Policy Editor. So I'll "Create a GPO in this domain, and link it here."
I'll call this "WVD Manage Firefox with PolicyPak." I'm doing this on the computer side. You could
do this on the user side as well, but I'm going to dictate these settings for the computer side.

I'm going to dive down under computer side and under "PolicyPak" here. I've already got some
preconfigured Paks snapped into the "Application Settings Manager." We've got some other videos on
how to set up your management station on how to do that, but I've already got this ready to go here.

Now I'll just right click, "New Application," and I'll pick "PolicyPak for Mozilla Firefox 23.0."
We'll go ahead and double click on this guy. We have over 500 preconfigured Paks so if there's some
particular application you want to manage, chances are we can do it.

If you want to set the "Home Page" to "www.policypak.com," that's great. While we're here, why don't
we right click and "Lockdown this setting using the same system-wide config file" so users can't be
naughty and work around it. We'll go ahead and do that.

We'll go to "Advanced (Update)" and we want to "Never check for updates." And then we'll also right
click and "Lockdown this setting using the same system-wide config file."

Then for "Security" we want to uncheck "Remember passwords for sites." We don't want users to
remember passwords there. That's not a good idea. That's not really a very secure mechanism.

That's about it, so we'll go ahead and click Enter here and then we're locked and loaded.

Now in real life, we shouldn't need to do this next step. But we do for this demonstration have to
go to our Windows Virtual Desktop machines and run GP Update ("gpupdate") just one time here on
these machines. Why are we doing that? Because we're saying do this thing on the computer side and
because the computer side Group Policy stuff won't get updated for about 90 minutes or so, we're
just sort of moving the hands of time a little bit faster.

Now you wouldn't need to do this in real life. We just need to do this here so that way we can have
a guaranteed result. But it would work just fine if you did nothing in the real world and just
waited for 90 minutes or so.

So here we are back on our "WVD-CLIENT." Let's go ahead and run Firefox off the Taskbar here. if we
are fast enough here, maybe we can see PolicyPak's magic kick in right here. It probably already did
its thing, but the idea is that PolicyPak runs right alongside with Group Policy at logon time. And
when it does, magic occurs.

There you can see, "www.policypak.com" as the default there. If we take a look at some of the other
settings that we set, go to "Tools/Options" here, we can see that we've got the "Home page" locked
down. We can see that we've got "Never check for updates" the way we want to as well. And then if we
go to "Privacy & Security," we've unchecked "Remember logins and passwords for websites."

The only setting that I didn't configure on purpose is that asking for the default thing because I
want to do that with PolicyPak Browser Router. I just wanted to show you in this demonstration how
you can set the actual internals of your applications. It can be Firefox, it can be Office, it can
be Chrome—it can be any number of applications. We have lots and lots of videos on this at the
PolicyPak website. I just wanted to show you how you can do it quickly and easily using PolicyPak
Application Settings Manager and Windows Virtual Desktop.

All right, I hope this video helps you out. Looking forward to getting you started with PolicyPak
real soon.

Thanks.

