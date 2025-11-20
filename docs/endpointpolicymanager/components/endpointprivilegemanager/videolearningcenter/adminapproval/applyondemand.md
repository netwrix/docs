---
title: "Least Privilege Manager: Apply On Demand"
description: "Least Privilege Manager: Apply On Demand"
sidebar_position: 120
---
# Least Privilege Manager: Apply On Demand

If you have applications which SHOULD run most of the time with STANDARD RIGHTS, but SOMETIMES with
elevated / admin rights, this is the technique to use.

<iframe width="560" height="315" src="https://www.youtube.com/embed/QZ_uSNABS30" title="Endpoint Privilege Manager: Apply on Demand Rules" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz. In this video, I'm going to show you how you can use Netwrix Endpoint
Policy Manager (formerly PolicyPak) to apply certain rules on demand.

This comes in handy for developers a lot of times where they want to run Visual Studio most of the
time as a standard user, but they need to run it sometimes with elevated rights. It could be any
kind of user, but that's a pretty typical case.

Here's an example of an application that works this way. this is an application called TreeSizeFree.
It will work if you're not running as an Admin. Then if you start doing some stuff, and it says,
look, I can only do my best work when I'm running as an Admin.

By way of example, you can see it's doing its thing, but it still wants to be an Admin for some of
the functions. You need to run it as an Admin some of the time. What are you going to do?

Let's go ahead and create a rule for it. For our East Sales users, we'll do PPLPM Apply On Demand
Example. Then we'll right-click here, click Edit. We'll dive down under User Side, under Least
Privilege Manager, and here we go.

We'll right-click Add. We'll create a new executable policy to make this thing kick off. Now, if we
were to do this normally, I'm going to just use hash to make this go a little faster here. I happen
to have the same app here on my machine, Program Files 1986, jam, TreeSizeFree.

I'm going to say when I see this application, then I want to Run it with elevated privileges. If I
do this, this is going to make it run every single time with elevated privileges. Let's just do this
and see what happens. You already know the drill. It's just going to elevate it.

Let's go ahead and do it anyway for the sake of just understanding the full example here. Again, you
could use the combo rules. You could use any kind of rule you want. I'm just doing it fast because
I'm not really going after rules in this case. I want you to understand the concept of Apply on
Demand.

Now, let's go ahead and run TreeSizeFree. Remember, we've got a rule, which means it's now always
running with Admin rights, which may not be what you want. If we select the Directory here, and
select the Disk, hey, it's running great as an Admin. It depends on your app. Maybe you don't want
it to run as an Admin all the time when you double-click it. See, every time you double-click it,
the rule is going in place.

There's a middle ground. It's called Apply on Demand. What we're going to do is we're going to
double-click in here. We're going to find the little flippity bit that is called Apply on Demand.
What Apply on Demand does is that it gives you the ability to teach your users when they need to
apply this as an Admin to simply right-click and Apply on Demand.

After this is done, what we're seeing now, when they double-click on TreeSizeFree, run as a standard
user. Again, your application like Visual Studio or something like that can run normally as a
Standard User most of the time. Look at that, Standard User, that's great, everything is good. It
still works just fine. You can select a folder, and everything is good.

When you need to run as Admin, no problem. What are you going to do? Right-click and run with
Endpoint Policy Manager, shebang. In this case, now you are applying On Demand. It's running with
Admin rights just when needed, not all the time. That's a great middle ground to help you out of
that jam.

We also have another whole thing called Self Elevate. That's a different thing, different video.
Self Elevate is where users are empowered to install their applications themselves or run as Admin
rights with justification text. That's not this. If you want to check that out, that's another
video. This video is about Apply On Demand. That other video is about Self Elevate.

Hope this helps you out. Looking forward to getting you started with Endpoint Policy Manager real
soon. Take care.


