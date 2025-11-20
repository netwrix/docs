---
title: "Using Item Level Targeting"
description: "Using Item Level Targeting"
sidebar_position: 10
---
# Using Item Level Targeting

<iframe width="560" height="315" src="https://www.youtube.com/embed/xJH4MJxMhOo" title="Endpoint Policy Manager: Using Item Level Targeting with Applications Manager" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Whitney with PolicyPak Software. In this video, we are going to talk about the idea of
using item-level targeting with the application settings manager. What that is is a way for you to
target a specific policy to a specific user, or group, or operating system, or time of day, IP
address range, any of a number of different criteria. If you're familiar with the group policy
preferences item level targeting, then you're going to be familiar with this.

What I'm going to be doing is I'm going to be managing WinZip for two different operating systems.
Again, I could be using any of a number of different criteria, but for this video we're going to use
operating system.

I'll hop over here, and we'll take a look at WinZip right now before I turn any policies on. We'll
come over here to configuration. We're going to look at passwords. Let's see. Minimum password link
eight characters, all of these are unchecked. There we go. Let's close this out.

Now, let's come over to a Windows 7 machine and open up WinZip. Let's look at our configuration.
Let's see. Yep, that is the same minimum password, eight characters. Password, none of these are
checked. We're going to go check OK. There we go. Let's close this out.

We have nothing going on on either one of those because we haven't managed it with PolicyPak yet.
Let's get in here. Let's create a new GPO. We'll call it WinZip for W7 and W10. There we go. Let's
click OK.

I'm going to edit. I'm going to manage this on the user side, although you could manage it on the
computer side if you so choose. It's up to you. Let's give this a second. There we go.

We'll start and go down here. We'll choose our WinZip pack there. I'm going to get into here and go
over to passwords. We'll start with the Windows 7 machine. For the minimum password length for my
Windows 7 machine, just to keep it easy, let's make that seven characters. Let's check all of these.
We'll hide the bottom one. Okay, so we've done this.

In order for me to be able to target this just to my Windows 7 machines, I'll need to go down here
to Options. I can choose Edit item-level targeting filters. We're going to go to New Item.

What's going to happen now, like I said, there's a bunch of criteria I could choose from. It could
be anything from let's say disk space to RAM. In this case, like I said, I'm going to use Operating
System. What I want to say is when the operating system is Windows 7, then do that thing. Then
deliver that setting. I say OK. You're going to see Targeting is On.

Let's go ahead and do that again for our Windows 10 machine. Let's go over here. We'll go grab that
Pak. Uh-oh, these look really similar. Hold on, let's keep working. Passwords as before for our
Windows 10 machine. Let's give it ten characters.

Let's do the same thing for both of them here. We're just changing the password length for the two.
Let's hide that bottom control and go over to Options. We're going to Edit those item-level
targeting filters again. We'll go down to New Item and Operating System. This time, when the
operating system is Windows 10, then do the thing. Tell it OK.

Notice these look pretty exactly the same. How are you going to keep them straight? What you can do
is come up here. We know that the first one we did is our Windows 7. We can go down here. We can
Edit Description.

It's a short text. It's just a little tiny description up to 100 characters. You can just say Win 7
WinZip Settings. Tell it OK. Then do the same thing here. We'll Edit Description. This will be our
Win 10 WinZip Settings. There we go. Now we have that under Description.

We will close this out. Real quick, let's go look at this. When we go check the Settings to get
additional information on what's going on in this particular GPO, we'll see this. Let's go ahead and
let's just Show All.

We're going to scroll down here. You're going to notice here that we see the WinZip Policy here. The
Policy, the Description is Win 7 WinZip Settings. We can scroll down and see number two has a
description of Win 10 Win10 WinZip Settings. You can actually see that in the Settings as well as in
the Description when you actually go to edit the GPO itself.

Now that we've done that, let's go over here. We're going to run a GP update on both of these
machines, so that we can get this done more quickly. Then we're going to check out this just to
prove a point, just to show you that we actually did do the thing we said we did.

We'll give this a second to finish up. On our Windows 10 machine, we should come to WinZip. We
should be seeing that the passwords, in particular, are going to say 10 characters. There we go,
great. All of these are checked, and this bottom one is hidden. That's what we expect to see.

When we come over here, we're going to see on our Windows 7 machine. We'll come over to WinZip,
check it out, and there we go. Minimum password length is seven characters on our Windows 7 machine.
All three of these are checked, and this one is hidden.

That is item-level targeting as used with the Application Settings Manager. Hope this helps you out.
Thanks so much.


