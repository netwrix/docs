---
title: "Endpoint Policy ManagerCloud and Endpoint Policy Manager OnPremise – Together using PPCloud Licenses"
description: "Endpoint Policy ManagerCloud and Endpoint Policy Manager OnPremise – Together using PPCloud Licenses"
sidebar_position: 20
---
# Endpoint Policy ManagerCloud and Endpoint Policy Manager OnPremise – Together using PPCloud Licenses

You get a free "on premise" license when you consume a Netwrix Endpoint Policy Manager (formerly
PolicyPak) Cloud license. Here is a demonstration video to show you a best practice way to set up
Endpoint Policy Manager cloud AND Endpoint Policy Manager on-premise together.

<iframe width="560" height="315" src="https://www.youtube.com/embed/X65ajrbab-U" title="Endpoint Policy ManagerCloud and Endpoint Policy Manager OnPremise – Together using PPCloud Licenses" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Whitney with PolicyPak software, and in this video I'm going to show you how you can use
your PolicyPak cloud licenses with your existing PolicyPak on-premise machines. It is super easy.

To get started, this is the PolicyPak Cloud Service. Now you've probably been here before if you are
a PolicyPak Cloud trialer or customer. Now the basic idea here is that there are computer groups and
company groups here, and by default we have six example XML files that are all linked over to the
All group where all computers will go.

Now if you're planning on doing this on-site, my recommendation is after you get a feel for all of
these, you go through and just unlink them all from the All group by using the Unlink XML Data Files
from Computer Group button. Now this does not delete any of these; it just unlinks them from that
All group, and they are still going to be fully accessible in the future.

Now, my next suggestion would be for this Company Groups area. I would add two groups over here with
Add Company Group, and I'm going to call this one OnPrem Machines, and then I'm going to create
another company group, and I'm going to call this Roaming Machines. These'll be ones that are out in
the field. Of course, you name this whatever you'd like, something that's meaningful to you and
represents that these are two completely different types of machines.

Then what we'll do is really the same thing on both of our machine types. Over here, this is my
cloud machine, which is not domain-joined at all. Just to really prove a point here, we can see that
this is not domain joined. We're in the workgroup Not Domain Joined. Let's close this out, and what
I'm going to do is go ahead and install the cloud client on this machine. We will go through and
provide some admin credentials when the time comes; there we go. Alright, now, obviously this guy's
not going to be getting group policy The only way he would get any directives is through PolicyPak
Cloud, and we've just taken away all of those directives, so there are no directives for this
machine to have right now.

It goes ahead and syncs with the cloud and tries to download new directives, and there are not any.
We will give him some in just a minute, and then we'll do the same thing for our other machine.
Again, this is going to join the All group and also Unassigned, and again, a whole lot of nothing is
going to happen at this point because again, he has no directives.

Alright, now let's move over to my domain-joined machine. This is the group policy going to get kind
of computer here. We are going to go ahead and again install the cloud client, which includes the
PolicyPak client side extension. We'll hit Next, enter our credentials. The key point here is that
because you've paid a little bit extra for the cloud client and the cloud service, you get an
implied on-premise license automatically. You don't need to additionally license your on-premise
machine. The cloud client license covers your on-premise machine automatically.

Alright, now this machine, even though it's domain-joined, is going to do exactly the same thing as
the non-domain machine, which is what? It's going to join that All group and get a whole lot of
nothing because we haven't told it to get any directives yet. Next, we're going to come back over
here to our management station, and we're going to look back at this Company Groups here.

Now both of these computers have joined. Let's go ahead and take a look. For my on-premise machines,
let's go ahead and Add/Remove Computers from the group. Let's go see the available computers that we
have here. Alright, here's WIN10-Computer-1.fabrikam.com just really driving home that domain-joined
business. I am going to add this machine to the group that we called OnPremise Machines. Alright, so
let's Add. Alright, the Roaming Machines, let's Add/Remove Computers from this group as well.
WIN-10-Computer-1607, we will add that. Now we are in good shape.

Now for my roaming computers, I can add cloud-based items. I can choose to link XML here and I can
choose some of these example polices which, in this case, I'll go ahead and grab the example of
putting a shortcut on the desktop. Let's add that and there we go. We see the Roaming Machines is
going to receive shortcuttopolicypak.com on all desktops.

We'll go back to our cloud machine and I'm going to run ppcloud/sync. What it does is takes a look
out into the cloud and sees what has changed. Just like that, you can see that we got the items that
were linked because my computer is in that Roaming Computers group, and it's going to get this
cloud-based item that I added. There you go; you see we got that shortcut right there, so we know
that happened just the way we expected it to.

What about the on-premise machine? Well, now is where you get to do just exactly what you've likely
seen in a lot of other videos. Just use the on-premise stuff. It is just that easy. You're already
licensed, so if I want to make sure that I get a policy over to my Sales Machines, which is the OU
where this domain-joined machine lives, I will create a GPO and we'll call it winzipsettings and
we'll go ahead and edit. Over here on the user side, I'll go ahead and go to my Application Settings
Manager so that I can do some winzip settings here.

Now, you will have to have the admin console MSI installed on your management station, of course,
but that's free; there's nothing to license there. I am going to come over here and right-click and
choose winzip and open it up. Let's come over here to Passwords. We'll make this 15.  We will check
all of these boxes and do some configuration. Let's hide that control. Let's disable this control
and say Okay.

Alright, now because that's locked and loaded inside of group policy, we're in good shape. Now I
don't have any licenses. I have no license GPOs created right here, but that's fine. I don't need
them because that cloud client embraces the license. If I come back over here and close this out and
run a GP update, I've just got the information from Group Policy because I'm already licensed
through the cloud.

We got our new configurations, which is coming straight from policy land and not from the cloud. If
I just come over here and open up winzip, we'll go over to our options and we can see that. There we
go; we are seeing the 15 characters. We're seeing all of this checked. Now the UI lockout didn't
work because I am recording this at 150% and it can sometimes blow that up, but that is known and
that is a-okay.

The key point of what I've done here is that if I come back over here and go over to the License
Status tab, you can see two consumed licensed, one for my computer that is not domain-joined and
roaming and one for my computer that is domain-joined and is on-premise. Then I created the computer
groups over there. One computer group was for on-premise machines and yes, when you join the cloud
service, you will have to move them to the right group so that they won't get any cloud-based
directives if they are on-prem machines and they will get cloud directives if you want them to
because they are roaming machines.

Hopefully this sheds some light on how to commingle cloud licenses and use them for real, true
machines that are out in the field and roaming and in the cloud and even those that you'll be using
on-premise. If you have questions about this, please post to the forums and we will be happy to help
you out. Thanks so much. We'll talk to you soon.

###
