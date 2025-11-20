---
title: "Using Endpoint Policy Manager Cloud and Auditpol.exe to enable Advanced Auditing on non-domain joined computers"
description: "Using Endpoint Policy Manager Cloud and Auditpol.exe to enable Advanced Auditing on non-domain joined computers"
sidebar_position: 40
---
# Using Endpoint Policy Manager Cloud and Auditpol.exe to enable Advanced Auditing on non-domain joined computers

Use Netwrix Endpoint Policy Manager (formerly PolicyPak)'s Scripts and Triggers Manager and
Auditpol.exe to configure advanced auditing on your remote (domain or non-domain joined) computers.

<iframe width="560" height="315" src="https://www.youtube.com/embed/OPnQLVSV3xI?si=xBxA6bnEAu9oDQOW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is John from Endpoint Policy Manager. In this video, we're going to show you how you can
enable advanced auditing for remote domain or nondomain joined computers using Endpoint Policy
Manager Cloud. Local domain joined computers have the ability to create group policy objects to
enable the various auditing policies. Remote, nondomain joined machines do not have this luxury.
Microsoft, however, provides a command line utility called Auditpol to facilitate this option, and
Endpoint Policy Manager provides the vehicle in which to distribute this policy to remote machines
whether domain joined or not. Let's dive in. Let's take a look how Endpoint Policy Manager can help
you enable advanced auditing.

We have our Endpoint Policy Manager Cloud web GUI. We're going to create a policy for my test group.
I'm going to create and link a new policy here, and we're going to scroll down to Scripts Manager
and use this to deliver the policy. I'm going to give it a quick little name, call it Advanced
Auditing. We're going to create a collection because when you're doing this, you're probably not
going to create just one. You're going to create several policies. A collection will give you a way
of grouping them together. You also have the ability if you wanted to add item level targeting, so
if you need to further group these computers by say computer type, computer name, laptops or not,
whether they belong to a certain IP address range or not, you can add this here as well as you can
with most other Endpoint Policy Manager policies.

We're not going to do this right now. We're just going to create our collection, click OK. Then
inside the collection, we're going to create a new policy. Now, this is done on the machine side so
we're going to click on Machine. Under Name, we'll do file system audit. It's going to be enabled,
and of course, we can also add item level targeting here as well. The Apply Action, this is where we
can apply our script. I precreated the script down here. We're just going to copy it and paste it.
This is using the Auditpol set command for the file system subcategory, and I'm going to audit both
success and failures.

Now on the revert action should this machine fall out of scope – it's no longer in that group that
it belongs – I'm going to disable it. Add a Batch Script. Paste in the command, so same command, but
now I am going to disable success and failure audits. Under Policy process mode, you can apply it
Once, Always, or Once or when forced. Once is all we need to do. Once it's applied, it's going to
stay there. It's not going to change, so [03:10]. Click OK, and now we have our policy created.

I'm going to go ahead, and I'm going to temporarily disable this policy, so I don't want it coming
down just yet. Let's take a look here. Here's my command to check on the auditing. See what's set,
what isn't set for the object access. We can see the file system, which is what I set my command, is
not yet set. There's no auditing involved. Come over here to my event viewer, just do a little
refresh. Okay, there's nothing in my event log. I'm going to open up a file, close it up, refresh,
still nothing. Now let's go over, and let's reenable this. Click on it. Enable the policy, Yes.
Minimize that, and we're going to sync up the cloud.

Now you can see the Advanced Auditing, what I just created, is now a policy that's been brought down
from the cloud. I'm going to go and check my get command for Auditpol. I'm now auditing success and
failures for the system, and I come over here and access my file, refresh. I've got a bunch of
audits. You can see here that it's for the file access test file, which is what I opened up. There's
four entries here, all for that one file. We can see that we're able to enable advanced auditing
using Endpoint Policy Manager, using this command line and Scripts Manager.

Now, you know we put a reverse script if this policy's computer is for whatever reason no longer
falls under scope, so we're going to disable the policy and remove the auditing. Let's come back
over here. Disable the policy. Click Yes. This could've been the computer no longer being associated
with this particular group, being put in a different group in a different set of policies, maybe a
different set of auditing. Either way. Minimize that. Let's update the policy. Now you'll see the
policy is no longer there. Query object access, and again, back to no auditing. Let's clear the log.
Open up my file. Close it. Refresh. No logging. Okay, so this is how we can enable advanced auditing
in remote domain or nondomain joined computers. Thanks for watching.


