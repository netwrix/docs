---
title: "Least Privilege Manager: Deny Messages"
description: "Least Privilege Manager: Deny Messages"
sidebar_position: 50
---
# Least Privilege Manager: Deny Messages

If you're blocking a desktop or UWP application, you can now choose to display a standard blocked
message, a custom message, or just block the application silently with no message at all!

<iframe width="560" height="315" src="https://www.youtube.com/embed/c2LmzLuuXtc" title="Endpoint Policy Manager: Least Privilege Manager Deny Messages" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Whitney with Netwrix Endpoint Policy Manager (formerly PolicyPak) Software. In this
video we are going to talk about the ability to create custom messages when you choose to deny a
particular application. This works with UWP applications when you deny those or when you deny
specific desktop applications. You can do that. Right now as of the recording of this video, this
does not apply to things that are blocked with secure run. It only refers to things that you
specifically choose to block.

Right now I have created a GPO where we deny UWP applications. I have attempted to run a UWP
application on my endpoint. Right now this is just a standard Windows 10 block message. You have the
option to leave it there, but if you want to put something more specific, you can absolutely do
that.

Let me come back over to my management station here. I'll grab this GPO. I've created a rule where I
deny all UWP apps. What I'm going to do is when I chose to deny, I had the option to choose how I
wanted to have that fact announced on my endpoints. Right now I'm at the default message.

I have the option though to do this silently so there's no message at all or with a customized
message. Let's go over here and do this. We'll say all UWP applications are denied by company
policy. You could put a phone number on there if you have someone needing to call the help desk or
something like that. It's up to you, of course.

Then I'm going to save this, hop over here. I'll run a GP Update. Then we'll see the new custom
message show up in place of that standard Windows 10 block message. Let's come over here and try to
run the store. We, of course, got blocked, but we also got the custom message. There we go. Now we
know all UWP applications are denied by company policy.

Your other option is to have it run silently. I'm going to edit this rule and we're going to deny
settings. We're going to choose without a message, so we can save that. Then come back over here.
We'll run a GP Update one more time.

Then we'll see it just blocking the application without throwing any sort of message or prompt.
Let's come back over here and try to run the Microsoft Store. It just didn't run. It did that
silently.

That is usually a good idea if you are having someone run a program that may try to update itself
where it might throw a block message even though the user didn't click on anything. You may have
something run silently so that people don't get hit with messages they didn't click on, so that's
that. I hope this video helps you out. Thanks so much.


