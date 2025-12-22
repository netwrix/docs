---
title: "How to create a DC for editing purposes"
description: "How to create a DC for editing purposes"
sidebar_position: 20
---
# How to create a DC for editing purposes

In this video, learn how to create a DC in order to build GPOs that you can export then upload to
Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud or your MDM provider.

<iframe width="560" height="315" src="https://www.youtube.com/embed/0P33KNFBNsY" title="How to create a DC for editing purposes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager (all versions): How to create a DC for editing purposes

Hi. This is Whitney with Endpoint Policy Manager Software. In this video, we're going to talk about
how we set up a fake DC so that we can leverage the in-the-box Group Policy to create the directives
that you will then export as XML and then deploy using the Endpoint Policy Manager Cloud service.

You need to start by having a server. It can be VMware. It can be Hyper-V. It doesn't have to be a
real server. It can be anything. I'm actually using Winders Server 2016, although you can use 2012
if you want. I'm using this in a virtual machine, so I'm using VMware.

The way I'm going to do this I'm going to start by going to my "Server Manager." We're going to go
over here to where it says "Manage," and we're going to "Add Roles and Features." We'll go ahead and
click "Next" here. We'll leave this as "Role-based or feature-based installation." "Next." This is
the only server I have. There's no "Server Pool," so we're just picking this one.

What we're going to do is we're going to check "Active Directory Domain Services." This is going to
pop up. You want to keep the defaults, so we'll just click "Add Features" and we'll go to "Next."
Here you have the option to add ".NET Framework 3.5 Features." You can do that if you want. I'm
going to go ahead and do that, so we'll click "Next." We'll go ahead and click through here, and now
we're going to "Install."

You see this warning sign here? You can ignore it. Go ahead and just click "Install." This is going
to take a couple of minutes, so I'll pause the video here and then we'll come back when it's done
installing.

This is installed now. You'll notice that it says, "Configuration required." We're going to take
care of that in just a minute. You'll also notice that there's no other window, pop-up or
notification that let's you know that it's installed other than that this bar is full and it says,
"Installation succeeded."

Let's go do that required configuration. We'll click "Close." We're going to go up here to where
there's this little notification, and we're going to "Promote this server to a domain controller."
It's super easy. We'll just pop open this wizard and go from there.

Let's start here. We're going to "Add a new forest." This can be a completely fake domain. I'm
making one just out of my own name, so we'll go with that. We'll click "Next." We're going to go and
choose a "Password," and we'll click "Next" again. We'll ignore this warning. Just go ahead and
click through, clicking "Next." This is going to populate on its own. It just usually takes a second
to do that. We'll click "Next" again. Leave those defaults, click "Next," "Next" again.

You'll notice it appears that we have notifications here, but we see that "All prerequisite checks
passed successfully" and that's really what we're interested in. Also, please note that "If you
click install, the server automatically reboots at the end of the promotion operation." That will
happen, and it will be just fine. I'm going to click "Install." I'm going to pause the video, and
then we'll come back once my machine has restarted and I'll show you what we've done.

And we're back. Now this server is actually a DC, and you have the GPMC available to be able to edit
Group Policy on which we will do in order to then export as XML as we've said before and then upload
that to the cloud so you can then push these directives out to your non-domain joined machines.

You can get to the Group Policy Management Console by going to "Tools" and going to "Group Policy
Management" here. You can also do it by making it a snap-in in MMC, or you can select "Start + R,"
type "gpmc.msc," and then click "OK." That will open it up too. Any of a number of ways to get to
it.

Let's look. If we create a test GPO just so we can look at the nodes here, we're going to look at
this. We're going to choose "Edit." You're going to see we have the nodes. We have all of our
"Administrative Templates," however many thousand of them. They're all hidden up in here.

But you're going to notice that we don't have a Endpoint Policy Manager node, so we can't do
Endpoint Policy Manager magic yet. What we need here is go to "www.policypak.com." We're going to go
to this "Customer Login" here. In this particular case, it's going to take us to the "Endpoint
Policy Manager CLOUD Login" and the "CUSTOMER PORTAL & CUSTOMER SUPPORT LOGIN."

In this particular case, we're going to need to go to the "Portal," not the cloud, login. Let's log
in. Once we're in, we're going to go to "Downloads" here. What we need to download are the "Latest
Bits." You're going to choose that and click "Download Latest Bits." Then you'll read this EULA
here, agree to it, and then you'll download as either a ZIP or an ISO file. I went with a ZIP file,
so let's go and find that right now.

Let's go here. What we need to look at is the "Admin Console MSI." We'll go ahead and close this
down. We'll open this up. This is a standard MSI just like any other. Pick whichever one is proper
for your system and then install just like any other MSI. Click through, "I Agree," "Next." Just
give it a second to install, and we're done.

Let's close this down. Let's go back to "Tools/Group Policy Management" Console here. Let's go back
to that "Test" GPO we looked at a moment before. Now we have that "Endpoint Policy Manager" node, so
we have all of the Endpoint Policy Manager superpowers available to us now without even doing a
reboot. It took just a couple seconds to download and install that MSI, and now we have that
Endpoint Policy Manager magic right here so that we can deploy real Group Policy and Endpoint Policy
Manager magic through the cloud to your non-domain joined machines.

That's how you go about setting up a fake DC to be able to create those directives to work with the
Cloud edition. In the next videos, we'll talk about how to create and upload those directives. We'll
talk about what the portal looks like, and we'll go on a complete journey of what Endpoint Policy
Manager Cloud is.

Thanks for watching this video, and keep watching.
