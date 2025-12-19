---
title: "Group Policy Preferences: Item Level Targeting"
description: "Group Policy Preferences: Item Level Targeting"
sidebar_position: 280
---

# Group Policy Preferences: Item Level Targeting

Learn how to use **Group Policy Preferences**
[https://www.policypak.com/pp-blog/item-level-targeting](https://www.policypak.com/pp-blog/item-level-targeting)
from former Group Policy MVP Jeremy Moskowitz.

<iframe width="560" height="315" src="https://www.youtube.com/embed/lIt_dPTD0os?si=c2_szR6fjIbcAWnI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Group Policy Preferences: Item Level Targeting Video Transcript

Hi. This is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software. In this
video, I'm going to show you how to use Microsoft's Group Policy Preferences item-level targeting.

Here's the idea. Let's say you've got a Group Policy Object. I'll call this "Test 123." I click
"Edit" on this guy. If we take a look inside and we look at the Group Policy "Preferences" items,
there are a zillion things you can do. As a lot of you know, I have a Group Policy training class on
the Group Policy Preferences.

I want to talk about a very specific piece of it, which is that for every single item you create,
like "Shortcuts," let's say I want to create this shortcut on the "Desktop" and make it a "URL" like
"www.policypak.com." I'll give it a little lock "Icon." If I were to just hit go right here, every
West Sales User is going to get this particular setting because this entry is linked over to my
"West Sales Users." All of my West Sales users are going to get this.

It doesn't have to be that way. I can click on the item, click on "Common" and select "Item-level
targeting." When I do this, the "Targeting" editor appears, and I can hone in where I want and when
I want this to occur.

For instance, if I only want it to occur when it's on a particular "IP Address Range" or when the
"Operating System" is "Windows 7" or "Windows XP." Another one of my favorite ones is just group
membership. They could be in this "Organizational Unit," but then you're filtering based upon if
there a member of a particular "Security Group."

In this way, you can hone in and craft who exactly is going to get this particular item. For this
demonstration, I'm going to use "Computer Name." I'm going to say that I'm going to get this first
shortcut for PolicyPak when "the NetBIOS computer name is" – and here's a little superpower – I'm
going to do "32" so all the computers that have "32" in the name will pick this item up. That's a
little extra bonus.

I'm going to create another one for GPanswers. I'll go to "URL" and go to "Desktop." Go to
"www.GPanswers.com." This time, I'll pick my favorite "Icon," the little tree icon. I only want this
item to appear when the "Computer Name" has "64." It has to have a match of "6" and "4" in the name.

Those are my two items. Normally, both of these would appear on both of my desktops, but that's not
what's going to happen here. If I run "gpupdate" on this computer and I go over here and run
"gpupdate" on that computer, let's go back to the first one. There's the "www.policypak.com" icon,
but we don't get the www.GPanswers.com icon because that didn't match. If I go over to this one, we
get the "www.GPanswers.com" icon but not the www.policypak.com icon.

That's Group Policy Preferences item-level targeting in a nutshell. Hope that helps you out.

Thanks so much, and we'll talk to you soon.


