---
title: "Endpoint Policy Manager & WVD (Windows Virtual Desktop) Getting Started"
description: "Endpoint Policy Manager & WVD (Windows Virtual Desktop) Getting Started"
sidebar_position: 10
---

# Endpoint Policy Manager & WVD (Windows Virtual Desktop) Getting Started

Before you RUN with Netwrix Endpoint Policy Manager (formerly PolicyPak) & WVD, here's a walk around
our internal test lab, so you can see how Endpoint Policy Manager + WVD followup videos will fit in.

<iframe width="560" height="315" src="https://www.youtube.com/embed/QE76FuIjlp0" title="Endpoint Policy Manager &amp; WVD (Windows Virtual Desktop) Getting Started" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi. This is Jeremy Moskowitz, former 15-year Group Policy MVP and Founder of PolicyPak Software.
This video is sort of a walk before you run video with PolicyPak and Windows Virtual Desktop.

I want you to understand my test lab so you can understand what I'm going to be doing in future
videos. Just to set the stage here, this is my "Virtual machines" playground here. I'm using Windows
Virtual Desktop to host a variety of machines. I have two that are there for full desktop
experience. That's these guys: "w10-wvd-0" and "w10-wvd-1." I've got two that are available for the
just slinging of applications experience ("appl-wvd-0" and "appl-wvd-1"). I also have an equivalent
of my on-prem domain controller called "2016DC-0."

You can see those are represented here. Here's my good old-fashioned on-prem domain controller. I
can see I've got "Active Directory Users and Computers" in my Group Policy management console here.
I've got my "East Sales Desktops," "East Sales Laptops," and "East Sales Users."

None of my Windows Virtual Desktop stuff is in there. Those computers are here hanging out in "WVD."
There they are in WVD land. But of course in real life, I'm going to have some real desktops and
laptops and so on. And in fact, I do. I have this computer called "COMPUTER10." I'll talk about him
in a second.

But these "WVD" computers that are joined to my on-prem AD, here they are. Here's "w10-wvd-0" and
"w10-wvd-1." These are my full desktop experience machines. Here's my application machines for just
slinging applications, "appl-wvd-0" and "appl-wvd-1," as well. These machines are pretty much set up
exactly the same way but, again, two are there for slinging full desktops and two are there for
slinging applications.

But there's one little magic thing I needed to do in addition to putting the applications I wanted
on like "Google Chrome" and "Firefox" and "TreeSizeFree" and a couple of other things I wanted to do
here. The extra little magic moving part is the "PolicyPak Client-Side Extension." "PolicyPak
Client-Side Extension" needs to be installed inside your Windows Virtual Desktop machines, and
that's what makes the PolicyPak magic go. That's important to set the stage for the remaining of the
videos.

The other thing that I wanted to point out is, like I said, in my Active Directory land, not just my
Windows Virtual Desktops, I also have, like I said, real machines hanging out there. I have real
users and real laptops. So I need to represent what that's going to look like for the remaining of
these videos. That is what this machine is all about. This machine is going to represent your laptop
or laptops out in the field.

You know what? It's a good idea to put the PolicyPak Client-Side Extension on those machines as
well, so let's go ahead and do that right now. Normally, you would do this through SCCM or Intune or
however you get software deployed to your machine. But I'm going to do it by hand just to make
things go a little bit faster here.

I'm going to go ahead and install as my admin here. There we go. This is going to install the
client-side extension. But again, you would normally roll this out however you normally install
software. Once this is on the machine, this is the moving part that does magic on your laptops out
in the field.

Now remember, just to make things a little bit faster I've already done this exact same step for all
my Windows Virtual Desktops that are running out in Azure in WVD land. Let's go ahead and let this
finish up here. Okay, and that's it.

Now the last thing we need to do, this comes from Microsoft. This is the "Remote Desktop"
application. Once again, you would install this using whatever tool or tooling you want. I'm just
going to be installing it by hand here just to keep things simple. This is the same thing that
Microsoft gives everybody. The very first time you run it, this is what gives you the ability as a
standard user to then actually connect to your Remote Desktop items.

So let's go ahead and see what happens after we launch it the first time. So here is "Remote
Desktop." If I've got it straight, the first time I log on here I'm going to have to give it some
credentials. I'm going to go ahead and hit "Subscribe." "We're finding our resources associated with
the requested feed" and so on.

I'm going to log on as "eastsalesuser1@fabrikam4000.com." That's the name of my domain. And there's
my password there. Okay, we'll go ahead and we're good to go. As soon as we see this, we should be
up and rolling and we should be able to see Windows Virtual Desktop items. "You're all set!" There
we go.

There's Virtual Desktop doing it's thing, getting all the items here. Here we are. We're off to the
races. Now in future videos, maybe I'll have some other items that are listed here that could be
different. But you can see we're off to the races.

If I were to click on "Firefox" here, this is getting the first time it needs to "Remember me" here.
But after this, you can see that we're connecting to Windows Virtual Desktop. You can see underneath
the hood the way it works that you actually fully log on, and then it slings just the application.
Or if I wanted to, I could click into a full desktop.

I just want to get this thing started just to show you I've got Windows Virtual Desktop working
successfully before I move on to magic tricks using PolicyPak. So far in this video, no PolicyPak
involved.

The other thing while we're waiting for this to cook is that you should also see that the
applications should be here hanging out automatically in the left side of the Start Menu. That's
going to be important for us to talk about really in our first video when we get there.

Okay, here we are. This is the Firefox. You see it's going to ask for "Default Browser" and all
sorts of items. You can see Windows Virtual Desktop doing its thing. We know it's a Windows Virtual
Desktop app with that little right bracket-left bracket thing. So we know that's definitely coming
from Windows Virtual Desktop, and we're off to the races.

So again, for this first video, no PolicyPak involved. Just wanted to get it staged and set up and
off and running so we're all set. But just to recap, we've got Windows Virtual Desktop all up and
running. We have our on-prem "Domain Controllers" ready to go.

We've got our Windows Virtual Desktop machines hanging out here in the "WVD" OU folder. We have our
real desktops and laptops hanging out in another folder. In mine it's called "East Sales Desktops"
and "East Sales Laptops." I've got my "East Sales Users" ready to go.

I've got each of my Windows Virtual Desktops ready to sling applications and full desktop
experiences once my real laptop—this is my real laptop here as you can see—is connecting over to my
Remote Desktop session and getting my applications and my full desktops using Windows Virtual
Desktop.

Okay, that's it for this video. In the next video, you'll see lots of magic tricks using PolicyPak
and Windows Virtual Desktop.

Thank you very much for watching, and talk to you soon.

