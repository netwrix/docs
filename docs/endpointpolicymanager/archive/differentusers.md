---
title: "Manage Different Users In The Same OU (And Reduce Number of GPOs) With Endpoint Policy Manager"
description: "Manage Different Users In The Same OU (And Reduce Number of GPOs) With Endpoint Policy Manager"
sidebar_position: 20
---

# Manage Different Users In The Same OU (And Reduce Number of GPOs) With Endpoint Policy Manager

Microsoft MVP Jeremy Moskowitz and Shane from Admin Arsenal demonstrate how it is possible to manage
different users in the same OU using Netwrix Endpoint Policy Manager (formerly PolicyPak).

<iframe width="560" height="315" src="https://www.youtube.com/embed/0A-JsCUug4o?si=d93xPzB3b4oy9-g-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Manage Different Users In The Same OU (And Reduce Number of GPOs) With PolicyPak

- Hey everybody. I'm Shane from Admin Arsenal. We've got Jeremy Moskowitz, Microsoft MVP for group
  policy, also the owner, founder and creator of PolicyPak. What are we going to talk about?
- Well, let me ask you a question. Do you have a lot of customers that have an OU structure where
  they've got a lot of users and groups and they maybe for whatever reason can't manipulate and move
  those users to different OU's?
- Like, they're all in the same OU? Yeah. We get that all the time.
- Yeah. Or they're all hanging out say in the user's or computer's folder. Right?
- It's the default.
- It's very common. There's a lot of reasons why that might be the case so in this scenario you can
  pretend in my standard user's folder I've got here – I've got maybe 500, 1,000 maybe 10,000 users
  and groups all kinda mish mashed in there and you wanna do different things for those different
  user sets.
- since they're all in one OU you can't use that as a filter.
- You can't do that. So, what we're going to do is we're going to create a new GPO here and we're
  going to call this "Manage DEVs vs Users."
- Okay. That sounds good.
- DEVs vs Users, a little bit separately. Okay, we right click and click edit here and we dive down
  under user side, PolicyPak. We've got this idea called the PolicyPak admin template manager. And
  PolicyPak admin template manager gives you the ability to take all the admin templates that you
  know and love inside group policy, the 4,000 best of settings and put smarts around it.
- Awesome.
- So, what we're going to do, let's create two collections or folders and the folders are what have
  the smarts first so we'll call this DEVs, okay?
- Okay.
- We don't really have DEVs. We'll create one called users as well. So, a new collection called
  users. And maybe we'll say users. We'll right click and go to item level targeting and item level
  targeting is a concept from group policy preferences that lets you say "When these conditions are
  true then do the stuff I want." So, for instance, when the security group is – this is users,
  right? So, we're going to call this group one. Okay. So, when it's group one and the users in that
  group then do that stuff. For DEVs we'll change the item level targeting for – let's go to
  security group. It could be IP address. It could be MAC address. It could be MSI query. It could
  be any number of things. Maybe the operating system is Windows 7, 8 or 10. Anyway, the security
  group here we're going to go ahead and say is group 2. Okay? And then what we'll do is now that
  we've got the smarts in there let's go to our users folder and let's say for our users, we don't
  want them to access the control panel.
- Okay.
- Okay. So, add new policy here.
- That's probably a pretty common one.
- Yeah. And we'll go to control panel here and this is the exact same layout as you would get inside
  here. We'll go to prohibit access to the control panel and enable it. Now, if you really wanted to
  you could also do item level targeting at this level so not just for all users, but for these
  specific users under these conditions.
- Users that meet these conditions. Cool.
- Additional conditions. We're not going to do that here. And then under DEVs maybe we'll say for
  DEVs they're so amazing they don't need help and support or something like that.
- Oh, in the start menu?
- Yeah. So, we'll go to start menu and task bar and remove help menu – here we go. Remove help menu
  from start menu. Alright. So, let's make sure we got it straight. We've got two collections. We've
  got one for Users, one for DEVs. When you log on as a user who's in that group? You're going to
  get the control panel killed. And when you log on as a DEV you're going to get the control panel
  back, but you'll have the help and support removed. Sound like the plan?
- Sounds great.
- So, now let's go to computer one. Log on as user one and we'll wait for it to log on here.
- Obviously, it's going to run your other group policies and stuff at the user level.
- Yeah. That's it. Okay. So, we'll right click here and go to personalize. That's also the control
  panel and boom. No control panel. Okay? That's exactly what we expected. Oh, by the way, that's a
  bug that's been in group policy and explorer since the dawn of time. It's been there since XP.
- It's more of a time capsule now.
- Yeah. So, we'll go ahead and log off and now we're going to switch gears and log on as –
- We're going to do user two.
- User two.
- Which is in your scenario – is the developer.
- Is the developer. Okay. So, as soon as PolicyPak – as soon as you log on, group policy logs you
  on. PolicyPak evaluates. What's your story? What group membership are you in and so on? So, what
  do we say? We say now we're a DEV which means we're going to get control panel back.
- Correct.
- Let's see that first. We do and we also said we want to dictate the gift of –
- No help from the – because you know that's going to upset them if they see it.
- And there you go.
- Really it upsets them if they accidentally hit it because now they're like "Oh, now it's
  initialized and people think I've actually used help."
- So, that's the point of admin template manager. Put smarts around either what we call the folder
  level or you can do it against any particular policy level. You can reduce the amount of group
  policy objects because now you can say if you've got GPO's that are doing slightly different
  things under different conditions, have one slightly bigger GPO that has the smarts built in to
  evaluate on the fly.
- Love it. Fantastic.
- [https://www.policypak.com/purchasing/thanks.html](https://www.policypak.com/purchasing/thanks.html) man.
- We'll talk to you guys later.


