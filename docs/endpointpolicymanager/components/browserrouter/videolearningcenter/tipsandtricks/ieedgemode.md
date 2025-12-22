---
title: "Endpoint Policy Manager Browser Router: Internet Explorer in Edge mode"
description: "Endpoint Policy Manager Browser Router: Internet Explorer in Edge mode"
sidebar_position: 80
---
# Endpoint Policy Manager Browser Router: Internet Explorer in Edge mode

You've heard about Internet Explorer tabs tucked into Edge. But how can you quickly use Netwrix
Endpoint Policy Manager (formerly PolicyPak) Browser Router to make it happen? Here you'll learn
which versions of Windows / Internet Explorer will permit this function, and which won't work. And
learn about the "65 second rule". Definitely "walk before you run" with IE in Edge mode and PPBR by
watching this video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/yXL35FnSpqg" title="Endpoint Policy Manager Browser Router: Internet Explorer in Edge mode" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz. In this video, we're going to talk about how to do Internet Explorer
in Edge mode using Endpoint Policy Manager Browser Router. There's a lot of details in this video.
I'm sorry. I wish it was just point, click, shoot, done, but there's some stuff you have to know.
That's why we make the video. Let's go over it.

First and foremost, you need to have the latest Endpoint Policy Manager client set extension
setting, so let's go ahead and make sure you have that on your machine. I've downloaded that, and
that's hanging out here, so I'm going to go ahead and put that on first. Okay, this only takes a
minute. Once you have the latest client set extension – don't try this with some old and crusty
client set extension. Make sure you've got this part first. Okay, you can update it any way you
want. I'm just doing it by hand to just make things go a little faster here. Okay, that's the first
thing. You've got to have the latest client set extension.

The second thing is that this will – at the time of the recording of this video, it's only
guaranteed to work on Windows 2004 edition. What the heck is that? That's the one that came out in
2020 around May. They're calling it the 2-0-0-4 edition, okay? If you don't know what that means, if
you go to Winver on any given machine here – okay Winver on any given machine, you'll see
Version 2004. What I'm about to show you again is only guaranteed to work in 2004. It may work in
other operating systems, and I have – I'll put a table up here as well about where it will and where
it won't work as of this recording. There's a bug in Internet Explorer that we trap for, and we
won't do the work if we see the bug exists in a version of Internet Explorer, but because the bug
does not ever exist in 2004 edition, I can safely do the demo here, but here's a chart. Here's a
little chart that says where the bug exists and where the bug doesn't exist. I'll leave this on the
screen for a couple more seconds, and let's move on.

Now what we're going to do is let's go ahead and set our routes. Here's Browser Router here. You've
always been able to right click Add and new policy here, and if you want it to do something like
Endpoint Policy Manager to IE, that's fine. You can go to www.policypak.com to Internet Explorer,
and here is where you get to set if you want to open it up in standalone IE or open it up in IE Edge
tab, so let's go ahead and do that here. What I'm going to also do – I think I've got another
conflicting one. I want to get rid of that one so it doesn't actually conflict. Let me go ahead and
delete that guy. Okay, we should be good to go. Alright, so let's go ahead and do that.

Then what I want to do is run gpupdate to get the command. Then we're going to test it out. Alright,
so let's go ahead and let's give this a second or two to catch up. Now that that's done, we should
see that our original routes work, so if we go to Google, that's going to go over to Chrome, which
I've already got set up. That's all good to go. Here we go. Chrome, happy as a clam. If I were to
click on mozilla.org, I've set that to go to Firefox. That should be good to go. Let's go ahead and
see that. Go ahead and launch. There we go, mozilla.org over to Firefox. Now we said policypak.com
goes to Internet Explorer in the Edge tab, right? Whoops, let's go ahead and – we don't care about
any of that stuff.

Now let's go ahead and click on policypak.com, and remember, I said it's guaranteed working in the
2004 edition. Lo and behold, it's not working right away. What is going on? Why doesn't it work
right away? It doesn't work right away because this is something that's built into Edge and Internet
Explorer, which is the enterprise mode site list, which takes two minutes. Let me go ahead and get
the URL here, and I want to show you this in the documentation so you don't think I'm somehow
magically making this up. Here I've got the document here. I just want to show you that this is not
a Endpoint Policy Manager thing. This is a Microsoft thing. This merging ability is something that's
built into Internet Explorer, and Endpoint Policy Manager takes advantage of it, but again, it only
kicks in one or two minutes later.

If you look on this page for the word "seconds", here's what happens. The internet – IE11 waits 65
seconds and then checks to see if there's a newer version available. I've recommended to Microsoft
that they maybe speed this up if we know the file's local, which is the way we do it, but as it sits
right now, it's about 65 seconds. Let me say this one more time a slightly different way. You can
set up the policy, the very first time here the way I did, and expect it to work perfectly when you
have all the ducks in a row and it's all working fine. It still won't work unless you run Internet
Explorer and then wait 65 seconds. The second time shouldn't be a big deal.

Let's go ahead and close all these browsers out. We don't need them anymore. Now let's go and click
on policypak.com. If it doesn't work, you should close – try to close Edge here and then try it
again here. If you go back to Edge – again, should take 65 seconds or so and there we go. If we go
to policypak.com, we can see Edge is – we're now in Edge, but we're in Internet Explorer mode in
Edge, and what's happening underneath the hood, which I think is pretty interesting – if we go to
Task Manager here and we take a look at Edge, Edge is really running the real Internet Explorer.
That's the magic of how they do that.

A lot of stars need to be aligned for this to work. We're doing all the things we're supposed to do
here, but if you don't see it work, again, the two interlocks or the three interlocks would be one,
latest client set extension, two, make sure you're using a compatible version of Internet Explorer –
again, I'll put the table up here again so that way it's right here so you can check it out. Make
sure you're using a compatible version of Internet Explorer, and then three, if it doesn't work
right away, don't flip out. Just wait for Edge to catch up and know what it's doing, and then 65
seconds later, maybe a little longer, it should kick into high gear. I didn't make any changes. I
didn't do any other fancy stuff. It should just work.

Other things from browser to browser should work as well, no changes there. If you Google for
Endpoint Policy Manager, for instance, so we're Googling for Endpoint Policy Manager, that's fine,
but when you click on Endpoint Policy Manager, bang, what should happen, it goes to Edge inside
Internet Explorer. If we wanted to say open up another Chrome tab and say go to Microsoft, which we
said go to Edge directly, what'll that do? That'll go to Edge directly. That's totally fine Like I
said, you could also have a different style as well, so if you wanted to have different policies for
Internet Explorer like you want amazon.com or some internal webpage, go to amazon.com – and you
wanted that to go to Internet Explorer and you wanted that to open up in standalone IE, that's fine.
That should work too. Go ahead and click OK, and then when the route goes there, it'll kick in.
Remember, if you added new route, computer needs to learn about this, that can take some time.
That's not a Endpoint Policy Manager function. That's an Internet Explorer function. That's just
showbiz.

I hope this give you enough to go on. If you do have any questions, we're here for you. Try to post
them to the forums first, but if you need any one-on-one help, we're happy to help you in the
support channel. Thank you very much, and we'll talk to you soon.


