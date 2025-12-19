---
title: "How to manually update Paks"
description: "How to manually update Paks"
sidebar_position: 10
---
# How to manually update Paks

<iframe width="560" height="315" src="https://www.youtube.com/embed/_0gS-lvuJWk" title="Endpoint Policy Manager: How to manually update Paks" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Whitney with PolicyPak Software and in this video, we are going to talk about the idea
of how to manually update your packs. If you are ever having trouble with a pack and you email us
for it and we tell you you need to upgrade to the most recent pack, well, how are you going to go
about doing that? There are a couple of different options on how to do that, but this video will
focus on the manual option.

Let's imagine – let's come over here and open up our GPMC. Let's create a GPO that's going to be
using an older DLL. Let's call this Firefox GPO. There we go, okay. Let's Edit and for this demo, it
doesn't matter which side we do this on. I'll just hop over to the user side here, go to Application
Settings Manager, and let's go for Firefox; that's our example for today. I'm going to open this up,
and I'll just check a couple of things. Let's say Show a Blank Page and Always Ask Me Where to Save
the Files. Okay, we've made a couple of changes. Alright, so if we look right here, we are going to
see that this extension version is from 2016. That's a little on the old side, so imagine something
doesn't work, or imagine you just need to upgrade your pack for whatever reason. The manual way to
do that is to go to the website and log into the customer portal. Go to the Downloads tab and then
go download a pack and find whichever one you're looking for, or click here to search.

You can do that; I can find Firefox and I can download. Now I've already done this, and I've pulled
the DLL. The new DLL is right here just sitting on my desktop. What I'm going to do is I'm going OT
go to my central store here and that is located under` C:/Windows/sysful`, sysful again, your domain
name, policies, and finally PolicyPak. That's where all those DLLs are kept. Right here, we see that
DLL that we see was last modified in 2016. I'm gogin to just take this. I'm going to drag-and-drop.
You can move or copy. Let's go ahead and replace the file.

Now we see that the DLL was last modified in 2019, much better. Let's close this out and let's close
this out. Now, let's go back and edit this GPO here. We'll go back to the Application Settings
Manager. You're going to notice now that you see right here this extension location, Central
Storage, but if we open this up, it's gogin to say newer. Now it doesn't normally say that, so what
happens now is when I go to try to edit this policy, I'll double-click, and this just says, "This
PolicyPak was created by an obsolete DLL and will be upgraded using a current DLL," and you say
okay, thank you very much.

Then you can make any changes, do whatever you need to do, and then tell it OK. Now you'll notice
that the extension location now just says Central Storage instead of with that newer end parentheses
right there. That is it. That is all you have to do to manually update a pack if you ever have need
to. I hope that helps you out. Thanks.


