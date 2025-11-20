---
title: "How to Manage the security slider in Java"
description: "How to Manage the security slider in Java"
sidebar_position: 40
---
# How to Manage the security slider in Java

A quick update to our Java pak gives you the ability to manage and manipulate the slider on the
security tab and lock it down. See how!

<iframe width="560" height="315" src="https://www.youtube.com/embed/dM-dHbEtcCk?si=jwmT6-3VgJTGBi5B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### How to Manage the security slider in Java 7 video transcript

Hi, everyone. This is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software.
We've been getting some questions about how to manipulate and manage Java with all the nonsense that
came out in January 2013. One of the things that we got asked about is, how do we manage this
"Security" slider and also lock it down so users can't work around it?

As you can see, I'm logged on here as a guy called "westsalesuser4."Of course, what you don't want
to do is let your users reduce their own security. That would not be good, so don't let them do
that. You may also want to update or change this checkmark here. In fact, if you were to do this
with admin rights and you click "Apply," you would see that the user is prompted for admin
credentials – not good.

What you're looking for is a way to manipulate and manage this setting without the use of admin
rights, and PolicyPak can deliver the setting regardless of the status of the user. If I do give
some admin rights here, you can see what happens. It will gray this out. That's all well and good,
but then again a user would need admin rights in order to deal with this. That's very cumbersome and
not very popular.

Instead, what we're going to do is we're going to use PolicyPak to manage these settings and ensure
that this stuff is delivered the way you want – maybe "Very High" security – and also locked down so
users can't work around it. Let's go ahead and do that now.

I've already got the preconfigured Pak for Java ready to rock on my management station. I'm going to
"Manage Java using PolicyPak." We've got some other videos on the website for you to check out to do
some other tricks with Java and PolicyPak, but this is an update video here.

You can do this either on the "User" side or the "Computer" side. We'll go to "New/Application" and
we'll just go ahead and pick "PolicyPak for Java Control Panel (Windows 7)" here. Now you can see
I've got some other cool Paks here like "Adobe Reader" and "Firefox" and "WinZip." There are over 50
other preconfigured Paks, but we're dealing with Java right now.

When we click it, what I want to help you go to is this "Security Main." I have a tab here called
"Security Main." We don't have a slider for that, but what we do have is a drop down. You can see
that we've set "High," "Medium," "Low" and "Very High." When you click on something in PolicyPak
when it underlines, underline means we're going to deliver that setting. Let's just do nothing else.
Let's just deliver that setting just like that.

Just to prove we're not pulling a fast one on you here, if I show you here, you can see it's
currently set to "Medium" as regular user. What I'm going to do is run "gpupdate" here, get the
latest, greatest Group Policy settings. Now I happen to be using Group Policy for this. You don't
have to. You can, if you want to, use SCCM or LANDesk or KACE or Intune or any other technology to
deploy your settings using PolicyPak. I just happen to be using Group Policy.

When I click on "Java" here and I go back to "Security," it's set to "Very High." That's fantastic,
but still a user could work around the setting and just click "Apply." That's not something you want
your users to be able to do. However, one of PolicyPak superpowers is that just by default even if
they're offline PolicyPak will continuously reiterate those settings. Even if the computer is
offline or in a basement or a submarine or something, those settings are always remediated and
ensured.

But actually, we're going to go the extra mile. We're going to lock this puppy down and make sure
that users can't work around it. I'll leave it at "Very High" just to prove a point here. What the
heck? I'll go to "Medium" and we'll do two birds with one stone. I'll go ahead and click "OK" here.

I'll go back. Let's go back to the "Group Policy Management Editor" here and go back to that
"Security Main" tab. What we want to do here is we want to right click and "Lockdown this setting
using the system-wide config file." By doing this setting, what I'm doing is I'm delivering another
change to Java which will lock that whole slider down so users can't work around it.

Now that that's done, let's click back on "Java" here, go back to "Security" and there you go. It's
set to "Very High," and users can't work around it. You may also come up with a situation where you
want to uncheck this checkbox, the "Enable Java Content in the browser." But if you tell you users
to do it, they're going to get prompted with "User Account Control" credentials – not what you want
to do. Instead here, it says "Only disabled for this user." You want to disable it for everybody.

To be on the super clear side to make sure everybody gets this, we're going to use Group Policy and
PolicyPak to do it. Just to prove a point here, it's now currently set. Let's uncheck it and also
lock this setting out so the user cannot work around it to enable it or disable it and don't get the
UAC prompt. Let's go ahead and do that together.

We'll go back here to PolicyPak. We'll go click on the "Security Main." We'll uncheck this checkbox
to "Enable Java Content in the browser." What we'll also do, we'll right click this guy and
"Lockdown this setting using the system-wide config file." By doing that, the next time we run
"gpupdate" on the client system, we're getting the latest, greatest settings using Group Policy to
deliver this, which will react for all users on the system, not just this one particular user.

We'll wait until this is finished, go ahead and rerun "Java," and when we do this – click on
"Security – you can see that it's disabled. It says "Only disabled for this user," but it's not.
It's actually disabled for every user, and I can prove that by logging off and logging on as, say, a
new user, a guy that's never logged on before. Let's go ahead and do that now.

I'm logged on as a guy called "westsalesuser4." Let me go ahead and "Log off" here, and I'm going to
log on as a new guy called "westsalesuser3." Give it a second to log on. Okay, now that we're all
logged on, we're now "westsalesuser3." Let's go over to "Control Panel." We'll type in "java" here.
We'll go over to "Java," take a look at "Security" and you can see that it is in fact set to
uncheckable for that user and also the security is maintained at "Very High."

I hope this helps you out. We have tons of preconfigured Paks for lots of applications. The next
time a big security fire hits if you are a PolicyPak customer, you've got this enormous arsenal to
help remediate and deliver and enforce settings just like you saw it here in the "Java Control
Panel" applet.

Thanks so much. Talk to you soon.


