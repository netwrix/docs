---
title: "Endpoint Policy Manager CSE Troubleshooting: Unlicense all components, and re-license the one to isolate"
description: "Endpoint Policy Manager CSE Troubleshooting: Unlicense all components, and re-license the one to isolate"
sidebar_position: 60
---

# Endpoint Policy Manager CSE Troubleshooting: Unlicense all components, and re-license the one to isolate

If directed by Netwrix Endpoint Policy Manager (formerly PolicyPak) support, you might need to set
some computers up to stop processing some directives by actively un-licensing all components, then
re-enabling SOME components. This video shows you how.

<iframe width="560" height="315" src="https://www.youtube.com/embed/FC2WRAbmx-o" title="Endpoint Policy Manager CSE Troubleshooting: Unlicense all components, and re-license the one to isolate." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy. In this video, I'm going to show you how to use the ADMX templates that we have
to narrow down troubleshooting. If you're watching this video, it probably means that we asked you
to try to figure out where some slowdown is happening.

We have some generalized guidance, and then this next step is going to help us narrow it down even
further. Said another way, what we're going to do is we're going to use the ADMX stuff to disable
certain components. You're going to have to create a GPO and link it to where your computers are.

Now, if you're using PolicyPak Cloud or PolicyPak MDM, I'll show you the PolicyPak Cloud way to do
it as well. MDM, you're just going to export this and get it over to some example target machine. If
I wanted to use PP ADMX to target slowdowns or something like that, what we'll do is we'll
right-click, go to click Edit here. You have to have the PolicyPak ADMX settings already in place.
We have another video for that, so I'm not going to spend time on that.

Under Policies, Admin Templates, under the PolicyPak ADMX Settings, under Client Side Extensions,
what we're going to need you to do here to try to figure out why things are slowing down is to
actually actively turn off each component one-by-one. What you can do is you can see that there is
prevent the component, this component, Admin Template Manager from being licensed.

What we recommend you do is you turn it on for each of the components that might be causing the
problem. If you think the problem might be... I'm going to make it up with say, Least Privilege
Manager, fine. Go to Least Privilege Manager, and what you'll do is you will prevent the component
from being licensed.

When you do this, this is going to just kill it dead. It's going to kill this component dead but
leave these other components up and running. A strategy for troubleshooting is to prevent all the
components from being licensed and then unwind it one-by-one.

The idea is like I said, you can then go backward and start making them not configured. In this way,
you're shooting all of the possible problems all at once, and then unwinding and saying, ah, yes,
this is the component. This is what's causing me the problem.

ow would you do this in PolicyPak Cloud land? Very similarly, in PolicyPak Cloud land, again, we
recommend you have a small scale test group. Here, what you would do is move a couple of computers
in. You would create and link a new policy here under Admin Templates.

We already have the PolicyPak Admin template, so if you wanted to prevent item from running,
whatever it is. You click on Policy here. Then you would use the PolicyPak ADMX. Go to the PolicyPak
node, client side extensions, and same basic idea. You would find each one, and you would prevent
the component from being licensed.

Set each of them to enabled, which will kill them all. Then unwind it. You can just keep adding all
the policies you want into this one container here. Bang, you're off to the races.

In this way, you're telling the Client Side Extension for these sample machines, hey look. We're
going to turn off all the Client Side Extensions, and then turn them on one-by-one, and bank. Once
you find the one that's causing a problem, that's probably where the issue is.

Again, isolating the one component that is the problem will probably get us to the goal a lot
faster. We realize and recognize this could be a little bit of work on your side to do. It's an
ounce of prevention worth a pound of cure. In other words, it will be a lot faster for everybody if
we can just get down and figure out exactly which component it is that's causing the problems.

ope this video helps you out. Looking forward to getting you fixed, up and running with PolicyPak
real soon. Thanks so much.

