---
title: "Open required firewall ports"
description: "Open required firewall ports"
sidebar_position: 10
---
# Open required firewall ports

Use this tip to open the required ports in the client machines' firewalls, so the PP GP Compliance
Reporter can pull data from your endpoints.

<iframe width="560" height="315" src="https://www.youtube.com/embed/P5WS0-Ywzz4" title="PPGPCR: firewall ports" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PPGPCR: firewall ports

Hi. In this video we're going to learn how to open up the required ports on your target machines so
that the group policy compliance reporter can get to the group policy results data. This is a very
common thing that happens when using the group policy compliance reporter. I'll show you an example.
You can have a computer set; you just create a new set and then if you create a snapshot, okay, what
happens is that all your machines, and we're using a standalone mode here – all your machines are
being queried right now to see what their current group policy data is. Now, if the computer is on
and responding or the firewall holes are correctly enabled, then you'll get data. But if you don't
have the required holes, then your computer could be on but it's going to respond as if it's not on,
okay. So, you can see all these computers have connection errors.

Most of these computers are not really live on my network but I know these two guys are –
Win7Computer32, Win7Computer64, and I have Win10Computer over here. The only one that is responding
is this Windows 8 machine and I don't even know why. So, these three other machines should be
responding but they're not so we need to open up the required hole in the firewall in order to make
that happen, okay. So, you can see the only two computers that have responded are, well,
Win8Computer 32 and a computer I'm on that happens to be in a main controller. What we want to do is
use group policy, okay, and I'm going to show you how to do this. I'm going to do this for the whole
domain. You could do it for a gaggle of computers if you wanted to. So, I'm just going to open up
required ports through a firewall. Okay?

I'm doing it at the domain level, okay. You might also want to enforce the setting so that if there
is a block inheritance that it's guaranteed through. So, I'll go ahead and click edit here and the
setting you're after is going to be on the computer side, Policies, Admin templates, and under
Network you're looking for Network Connections, Windows Firewall, Domain Profile. So, Domain Profile
means that when you're here in a domain. Standard Profile means if you're out and about traveling.
So, when you're here on Domain Profile you want to allow inbound remote admin exception – this guy.
Allow inbound remote admin exceptions. Now, there are a couple ways to use this. You can see this
policy has been around for a long time. It works with XP Service Pack 2 and later. If you click
Enabled here, what you can do if you want to is you can put an IP address here from your machine or
a range of computers that your admin stations are on.

If you don't do that it opens up our required ports, which are 135 and 445 for remote administration
from anybody. So, it's up to you if you want to kind of tie it down to allow incoming messages from
these IP ranges. I'm not going to do that. Now, you will have to either wait for group policy to
apply or get group policy to forcefully update on these. There is a way to remote GP Update but I
don't want to show that because it can take up to ten minutes and I just kind of want to get this
demo to work here. Once you know that you've enabled the firewall holes, as I just showed you Port
135 and 445, at that point you're kind of ready to go. So, if you just go back to the Group Policy
Compliance Reporter, okay. Before you saw that when we ran our snapshot we only had two computers
that responded. This time I expect better results. I'm going to right-click and create a snapshot
and now I'm, boom, scrolling through my entire active directory and I'm hoping to get the four
computers that I actually have on to really be on here. I have two Windows 7 computers, a Windows 8,
and a Windows 10 computer here. There's the Win10 computer. There's the Win8 computer and let's see
if I scroll down a little bit. Oh, there we go. There's the two other computers. So, this gives you
the opportunity to use the Group Policy Compliance Reporter and if you want to tie down which IP
addresses will allow this inbound remote admin exception and once you do that, you are able to get
started with the Compliance Reporter and see what's going on there. Use the other videos to figure
out how to create tests and to perform results but, hopefully, that gets you off the starting line
to get going. Thanks so much and we'll talk to you soon.

