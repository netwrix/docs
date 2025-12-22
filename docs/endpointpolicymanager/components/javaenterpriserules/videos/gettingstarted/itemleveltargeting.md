---
title: "Using item Level Targeting to Specify which version of Java to use"
description: "Using item Level Targeting to Specify which version of Java to use"
sidebar_position: 40
---
# Using item Level Targeting to Specify which version of Java to use

Use Netwrix Endpoint Policy Manager (formerly PolicyPak) Java Rules Manager policies and specify
which version of Java you want to run for a website, but vary it by operating system. Learn how to
use Item Level Targeting
([https://www.policypak.com/pp-blog/item-level-targeting](https://www.policypak.com/pp-blog/item-level-targeting))
with Endpoint Policy Manager Java Rules quickly. Making a Java Deployment Rule Set for your
Enterprise has never been easier or more flexible.

<iframe width="560" height="315" src="https://www.youtube.com/embed/A3Tf2zudnd8" title="Endpoint Policy Manager Java Rules Manager: Using item Level Targeting to Specify which version of Java to use" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager Java Rules Manager: Specify which version of Java for which computer

Hi. This is Jeremy Moskowitz. In this video, I'm going to show you how, based on the operating
system or other conditions, you can specify to use a specific version of Java based upon those
conditions. This is slightly different than the first video in this series, so stick with me.

For instance, I have of course the same install I had in the first video. I have "Java 7 Update 51,"
"Java 8 Update 25" and "Java 8 Update 111." I have it both on Windows 10 and my Windows 7 32-bit
machine. I don't have Java Rules Manager going right now so if I were to just go to "java.com,"
what's my expectation? Well, it's going to see the latest version of Java, and it's going to see
"Version 8 Update 111," which is the latest one installed on this machine.

Same thing on this machine. If I were to go to "java.com," I'm going to see what it sees as the
latest version of Java. Just to prove a point here before we get rolling here, just to show you, it
sees "Version 8 Update 111."

But let's say based upon the operating system we wanted the same website to have different values.
How do we do that? Super easy. It couldn't be easier. What we'll do is we'll go create a Group
Policy Object against our "Sales" team which has both of these computers in it. What we'll say is
"PP Java Rule Demo 2 (OS as item level targeting)."

What am I talking about here? What we'll do is we'll go ahead and on the computer side go to
"PolicyPak," find the Java rules node here ("Java Enterprise Deployment Rule Set Manager") and we'll
create a single policy here ("Add/New Policy").

We'll call it "java.com for Win 10." We'll say java.com for Windows 10 is going to get one value.
The value on Windows 10, we want it to be "Java.com on Win 10 = 8 u 25." We'll go ahead and put the
"Location" there: "https://java.com." We'll say "Run" "Java SE 8 Update 25."

But how do we tell it it's Windows 10? That's what this "Item Level Targeting" button does. You can
pick a zillion different types of criteria. For instance, does a particular thing exist on a
machine, or am I on a laptop or a desktop, or is the computer in a "Security Group"? But I'm going
to pick when the "Operating System" is "Windows 10." So I'm going to do this rule when the machine
is Windows 10.

What I'll do is I'll create another rule ("Add/New Policy"), and I'll say "Java 10 7 U 51 for Win
7." I'll go ahead and do that. I'll say "Run" "Java SE 7 Update 51" "Exact." How do I tell it that
it's for a Windows 7 machine? I'll say when the "New Item" type is "Operating System" "Windows 7."

Just like that, we have two rules: one for Windows 10, one for Windows 7. We're going to get
different values. It's a very similar process as the last video. We're just going to run GP Update
("gpupdate") over here. We'll run GP Update ("gpupdate") over here. We'll go ahead and wait for this
to settle in. Then we'll go back to our first machine here. Close this out.

Again, it doesn't matter if we use "Mozilla Firefox" or Internet Explorer for this. If I were to go
to "java.com" on my Windows 10 machine, what version of Java does it show? It shows "Version 8
Update 25." If I go over to my Windows 7 machine (let me close this out), again it doesn't matter
which browser so I'm just interchanging them on purpose here. If I go to "java.com" and I say what
version of Java do I have, what are we going to get on Windows 7? We tied it down using item-level
targeting, and we get "Version 7 Update 51."

This is super powerful. This gets you out of so many different types of troubles. You can also if
you want to make the item-level targeting say when I'm on a Terminal Services machine, then do
something else. For instance, I'm not really going to do it here, but if you wanted to, you could
"Add" a "New Policy" that did the stuff we just talked about but change the "Item Level Targeting"
so that it will affect it when it's a "Terminal Session." So have a different version of Java when
you're on a Terminal Server.

So you get a huge amount of flexibility using item-level targeting, which is threaded throughout all
of PolicyPak. If you're familiar with it in other areas, you're going to love it here. I hope this
helps you out and gets you on the road to getting you started with Java Rules Manager.

Thanks so very much. If you're looking to get started, go ahead and connect with us and we'll get
you the bits and we'll get you started real soon. Thanks.


