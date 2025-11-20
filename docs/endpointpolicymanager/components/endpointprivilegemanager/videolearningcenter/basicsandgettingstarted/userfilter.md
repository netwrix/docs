---
title: "Link to Computer, Filter by User"
description: "Link to Computer, Filter by User"
sidebar_position: 30
---
# Link to Computer, Filter by User

You might want to link policies to a gaggle of computers, but then dole out elevations by USER or by
USER GROUP. See how in this video. (PP CSE 1434 and later).

<iframe width="560" height="315" src="https://www.youtube.com/embed/x9OwtL7-LrQ" title="Endpoint Privilege Manager: Link to Computer, Filter by User" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


### PolicyPak Least Privilege Manager: Link to Computer, Filter by User

Hi. This is Jeremy Moskowitz. In this video, I'm going to show you how you can use Endpoint Policy
Manager
[https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html](https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html)
to dictate who can do what on a desktop in terms of privilege.

In this example, what I want to show you is that I'm a standard user, "eastsalesuser1." If you're
familiar with what Least Privilege Manager does, it will elevate certain applications at certain
times. What I want to show you here is that I can use item-level targeting and say when I'm a
certain person on a computer, then elevate. If I'm not that person, don't elevate.

By way of example, I want to say when I'm eastsalesuser1 on my "East Sales Desktops," I'm going to
"Create a GPO in this domain, and link it here" and say "PPLPM Computer side (with ILT user
filtering)." This GPO will be linked on the computer side, and I'm going to do the work on the
computer side. So I'm going to go to computer side, "Least Privilege Manager."

What I want to show you is if I were to "Add" a "New Executable Policy" here, this would affect
everybody on the computer. But that's not what I want to do. What I want to do is create a new rule
here, and make it a "Hash" rule.

I'm going to pick "Procmon" that I already have handy right here. I'm going to say this version of
Procmon, I want to let it "Run with elevated privileges" but only when I use "Item Level Targeting"
that says I'm a specific user or a group. You can pick either "Security Group" or a "User." When you
do that, it will pick security groups that are on the user side or a user side membership.

I'm going to go ahead and say when "the user is" "eastsalesuser1." Now I've got eastsalesuser1, so
I'll say "Elevate PM WHEN ESU1." The goal is when I'm on the endpoint and I'm eastsalesuser1, it's
going to elevate. When I'm not eastsalesuser1, it's not going to elevate.

Let's check it out. We'll go over to our endpoint here. We've got to run GP Update ("gpupdate
/force") first. Let's get the policy setting all locked and loaded on the computer here. Okay, and
that's it. Let's go ahead and close this out. Now let's go ahead and run "Procmon" as
eastsalesuser1, just like that. It's a way for you to dictate the policy on the computer side and
then filter by the user.

But let's prove a point. Let me go ahead and "Sign out" here and I'm going to log on as
"eastsalesuser2," so not this guy. This guy has never logged on before, so it will take a second or
two. Now that's it. I'm logged on as a different user. I actually have the same Procmon in a folder
called "DEMOS1." Let me show you what happens if you click on "Procmon." Procmon only works as
eastsalesuser1. If I click on it as eastsalesuser2, what happens? It does not elevate properly.

If I wanted to then add eastsalesuser2, that's fine. I can then go to "Item Level Targeting" here,
"Edit" and then add in "User" and make the "Item Options" "Or" the user is "eastsalesuser2." Now I'm
saying if either of these two guys is them, then it should work. All I would need to do is run GP
Update ("gpupdate") here. Give this a second to finish up.

Now that that's done, let's just run "Procmon." Ten seconds ago it didn't run. Now it runs. Using
Endpoint Policy Manager Least Privilege Manager you can link the GPO on the computer side and now
filter based on user or user group membership. So that can give you a lot of amazing superpowers.

I hope this helps you out. If you're looking to get started with Endpoint Policy Manager Least
Privilege Manager, get in touch and we'll get you signed up.


