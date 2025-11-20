---
title: "Replace the Windows 10 PRO Professional Lock screen"
description: "Replace the Windows 10 PRO Professional Lock screen"
sidebar_position: 20
---
# Replace the Windows 10 PRO Professional Lock screen

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZNhMDhvmMWI" title="Endpoint Policy Manager Scripts: Replace the Windows 10 PRO Professional Lock screen" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak Scripts: Replace the Windows 10 PRO Professional Lock screen

Hi. This is Jeremy Moskowitz, former Group Policy MVP and Founder of Netwrix Endpoint Policy Manager
(formerly PolicyPak) Software. In this video, I'm going to show you how you can use Endpoint Policy
Manager Scripts Manager to change the Desktop background on Windows 10 Professional.

As you may or may not know, there's a policy setting that does this on Enterprise and Education, but
there's no easy-peasy way to do this on Professional except if you've got Endpoint Policy Manager.
So what you can do is use Endpoint Policy Manager Scripts Manager ("PPSCRIPTS to change wallpaper")
to force the wallpaper you want on Professional ("Force wallpaper on Pro").

My lash-up for this is that I already have a wallpaper in a share. I've got it called "dc2016share,"
and it's called "wallpaperHD.jpg." That's the only thing you need to know. We're going to supply the
script for you.

Let me show you what the GPO looks like here. Again, I'm linking it to my "East Sales Desktops"
here. Actually, what I can do is "Delete Policy" and start over so I can show you how the policy is
created. What I'll do is just right click, "Add" a "New Policy" here.

Again, this is on the computer side, so your computer has to be in that OU. I want to "Apply this
policy to computer." That's what I want to do. I want it to apply to the computer, and then all
users are going to pick this up. So that's what I want.

I'm going to make this a "PowerShell script." Again, we supply the script, so I'm going to copy and
paste it in here for you. The only line you need to change is the "Path" to your wallpaper. If it's
over the network, that should be fine for most cases. If you need to copy it locally first, you can
do that also. Maybe you put it in C:temp or whatever first. And that's it. You're ready to go. So
I'll go ahead and click "Next."

This would be an "On revert action." I don't want to specify anything on revert. I'm going to set it
to just go "Once." Once it's set, I'm good to go. I don't see any reason why I need to make it
"Always" apply over and over again. "Once" seems like enough. I'll call this "Force wallpaper on Pro
without GP setting."

And don't forget we also have this amazing "Item Level Targeting" idea where you can say only do
this when the condition is true. Maybe when the "Operating System" matches "Windows 10"
"Professional" version. Maybe you only want this policy setting to hit your Windows 10 Professional
machines. That would work. You could also say when the machine's "Computer Name" is the lab
machines, like "\*lab\*" or something like that. So now when these two conditions are true, that's
when this thing is going to fire off.

I'm not going to do that now, but that should give you some ideas of where you could use item-level
targeting. I'll go ahead and click "Finish." That's all there is to it. Here we are on our machine,
and I want to show you what the typical example might look like for a user.

What I'll do is just go ahead and click and log on here. The user's going about their business,
having a good day and so on. We'll go ahead and let them finish logging on here. Okay, now that
they're finished logging on, nothing really changes for them because we're not talking about their
Desktop. Their Desktop is easily changeable using Group Policy, and we're not trying to solve that.

See this little flutter of activity? You see that little circle going on? That's it. It's doing it
right now as a one-time action, kicking in and doing the work. And that's it. It's done. It happened
silently in the background. Nobody knew anything. But now when they log off, let's see the magic.
Let's go ahead and "Sign out" here.

From this point forward, every user gets the exact same beautiful Desktop background that you want.
That's it. Using Endpoint Policy Manager, coming to the rescue again, saving the day for admins who
are using Windows 10 Professional.

Hope this helps you out. Looking forward to getting you started with a trial real soon. Talk to you
soon.

Thanks so much.


