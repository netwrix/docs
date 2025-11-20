---
title: "Endpoint Policy Manager Using Endpoint Policy Manager DesignStudio to modify the Java Paks for XP"
description: "Endpoint Policy Manager Using Endpoint Policy Manager DesignStudio to modify the Java Paks for XP"
sidebar_position: 60
---

# Endpoint Policy Manager Using Endpoint Policy Manager DesignStudio to modify the Java Paks for XP

In this video, you will see how to take our existing Java Paks, which only work on Windows 7 and
later, and make them work on WIndows XP.

<iframe width="560" height="315" src="https://www.youtube.com/embed/l6J6cNYsYNc?si=K9ykRUq4uWhAT_Wr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak: Using PolicyPak DesignStudio to modify the Java Paks for XP Video Transcript

Hi. This is Jeremy Moskowitz, Microsoft MVP, Enterprise Mobility and Founder of PolicyPak Software.
In this video, I'm going to show you how to take our existing Java Paks that we ship – so you can
see we've got "Oracle Java Version 7u17," "Oracle Java Version 7u21," "Oracle Java Version 7u25,"
"Oracle Java Version 7u40," "Oracle Java Version 7u45." You can see the only one that we ship for XP
will be the latest one, in this case "Oracle Java Version 7u45 for XP."

Now the good news is that it's very easy to take an existing Pak that would theoretically only work
on Windows 7 and later and make it work for XP. By way of example, let's say you've got "Oracle Java
Version 7u21" out there, but you can see this Pak won't be targeted or working for XP. Let's figure
out how to make this Pak that we ship and flip it so that it will also work for XP.

To get started, I'm going to "Load a project from XML file" into the Design Studio. Let me go ahead
and go over to that folder. Actually, let me take a step back. What we want to do is actually open
up the one that is XP already ("Oracle Java Version 7u45 for XP") because this has the secret sauce
already in it.

The thing about the way XP works is that it stores its "Data root" here under
"%appdata%sunjavadeploymentdeployment.properties." You're going to copy that. You're going to take
the existing Pak that has XP stuff, you're going to go to "notepad" and you're going to copy that
line because this line works for XP.

Then you're going to "Open" up the Pak that you want to make work for XP, so "Oracle Java Version
7u21" for instance. You can see that we've said that it's "for Win 7 and later." The first thing you
may want to do is, like I said, go to "Project Properties." You can see this is a different "Data
root" location. You're going to overwrite that with the one that you saw in XP.

Now the rest is just cleanup work. We'll call this "Windows XP." We're giving the "Project name" a
different name. You may want to "View and Edit ILT conditions" – the internal filters – so that,
first of all, it only affects Java. You can also say that it will also only affect when the
"Operating System" is "Windows XP." This is completely optional, but it doesn't hurt to do that.

This stuff will only work, this Pak that you're about to rename from "Win 7 and later" – in fact,
let me go ahead and do that now. Just in the same directory here, I'll call "for Win XP and later."

Now we've got a new Pak. Let's look at the "Project name." The "Project name" is we've got it called
properly "7u21 (Windows XP)." We've updated the "Data root" with the correct XP location. We've
selected "View and Edit ILT Conditions" to add XP to it.

That's all there is to it. At that point, you would "Save pXML and Compile" your Pak, and you would
be ready to go. That's all there is to it.

Let's take it back again to the 20-yard line. We will be shipping the Paks only going forward for
Windows 7 and later. If you want to take an existing Java Pak that we have and make it work for
Windows XP, you'll take the XP example. You'll go to the "Project Properties" tab. You'll change the
"Project name" accordingly. You'll change the "Data root" to the XP location, and you'll "View and
Edit ILT Conditions" to also specify XP.

That's all there is to it. If you have any questions, do post in the forums about how to do this.
This is a "how do I" question.

[https://policypak.com/resources/thank-you-whitepapers/](https://policypak.com/resources/thank-you-whitepapers/)
so much, and talk to you soon.

