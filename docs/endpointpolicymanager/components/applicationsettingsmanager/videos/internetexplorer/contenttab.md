---
title: "Manage IE Content tab"
description: "Manage IE Content tab"
sidebar_position: 40
---
# Manage IE Content tab

Netwrix Endpoint Policy Manager (formerly PolicyPak): Manage IE Content tab

<iframe width="560" height="315" src="https://www.youtube.com/embed/xYUqURrA8hc?si=YJfKVAgFcm-Arxs5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager: Manage IE Content tab

Hi. This is Jeremy Moskowitz, former Group Policy MVP. In this series of videos, we're learning how
to manage Internet Explorer – all versions – using PolicyPak.

In this video, we're talking about the "Content" tab. You can see here, there's this thing called
the "Content Advisor," which would have to be manually set up on each machine. This is Internet
Explorer 8, which shows "Content Advisor." More modern versions of Internet Explorer like 11 don't
show it, but it honors the settings anyway.

I'm going to show you how to set it up very quickly using PolicyPak. Here is our entry in a Group
Policy Object. Just click on the "Content" tab. You need to click to "Turn on Content Advisor for
IE." You can also dictate a "Password" whatever you want. We've got our favorite password set in
there ("p@ssw0rd").

Then you've got the various sites that will be allowed or blocked. By way of example, you can allow
Google with "https" but block it with "http." You can also allow other websites, and you can also
remove a certain website from the "Content Advisor." Therefore, if somebody has put it in, it will
be removed. You can "allow" it, "block" it, or "remove" it – those are the three keywords there.
It's as simple as that.

You can also set up things like right here under "Settings" all these particular "Content Advisor
Ratings," things that will depict "alcohol" and "tobacco" and so on, all these naughty things. You
can make it "Limited" or "None" for depiction of these things and so on and click "OK." These are
all honored in all versions of Internet Explorer.

We'll go ahead and click "OK" here. Now we'll go over to our target machine and we will run
"`gpupdate`." Now if you'll remember, it was disabled. When it's done, I'll show you that it's now
enabled. Let's go ahead and go over there.

Go back to "`Tools/Internet Options`." Go over to "Content," and you can see it's now enabled. You
know it's enabled because it's now the ability to "Disable" it. If you click "Settings," you need
the admin rights first, but then you need the "Password" second. PolicyPak has dictated the
password, and then you can modify these things here if you are so inclined.

Actually, all these things are available, like I said, inside PolicyPak. I think I picked that one
and that one, something like that. I don't know which one it was. Long story short: PolicyPak will
dictate these settings as you want to. That's the key takeaway there for managing "Content."

In Internet Explorer 11 – I don't have Internet access or else I would show it to you – but it does
pick up the settings and will honor them exactly the same way. There's just no need to turn it on
expressly.

If you have any questions about this, be sure to post your questions to the forum or email support
and we'll get you going from there.

Thanks so much. Talk to you soon.


