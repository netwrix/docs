---
title: "Endpoint Policy ManagerCloud: How to deploy Endpoint Policy Manager specific settings (using in-cloud editors and exporting from on-prem)"
description: "Endpoint Policy ManagerCloud: How to deploy Endpoint Policy Manager specific settings (using in-cloud editors and exporting from on-prem)"
sidebar_position: 50
---
# Endpoint Policy ManagerCloud: How to deploy Endpoint Policy Manager specific settings (using in-cloud editors and exporting from on-prem)

Its easy to do MANY things with Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud's
in-cloud editors. Here's how to use them, how to find more details PER COMPONENT, and also how to
export on-prem items and use them inside PP Cloud.

<iframe width="560" height="315" src="https://www.youtube.com/embed/9YPT1JylmxU" title="Endpoint Policy Manager Cloud: Quickstart with Endpoint Policy Manager Settings (in-cloud editors and exporting from on-prem)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz. In a previous video you saw me use PolicyPak Cloud in-cloud editors to
do Microsoft real Group Policy settings with our create and link a new policy. You saw me use our
in-cloud editors here to do admin templates and preferences and security settings. Here are the
PolicyPak specific settings.

As you can see in this video, there's one, two, three, four, five types of in-cloud editors and more
to come. We're always increasing our depth of coverage. I can't go into all the ideas here of what
you could do in PolicyPak Cloud with our PolicyPak Settings, so I want to give you a tip on the best
practice on how to do that.

Let's pretend for a second. Let's go over to the support section, which is our KB, our Knowledge
Base section. Let's pretend for a moment you wanted to learn about File Associations Manager. Our
recommendation is to learn how to do it first with our Getting Started videos.

You'll do that with your on-prem test lab with your fake domain controller and your domain-joined
machine. Make sure it works the way you want. Then you'll see under File Associations Manager
Methods we have another video that sort of says once you get the gist of how it works, you can then
do what you need to do using PolicyPak Cloud. We have videos like that for just about everything.

Let's do another example. Let's pretend you really wanted to get going with Least Privilege Manager.
Let's find Least Privilege Manager. Let's understand Basics and Getting Started. Again, our
recommendation is to sort of cut out the PolicyPak Cloud middleman, do some small-scale tests with
your fake test lab.

Look at that! There's Methods using the word cloud. You can take a look and see some specifics using
PolicyPak Cloud with your Least Privilege Manager rules. Remember, we don't have in-cloud editors
for everything. We do have some from Browser Router and Least Privilege Manager. We've got five.

They're great and they're really easy to use. There are some tips and tricks for each one that you
might need to get to know. That's why getting to know a little bit on-prem and a little bit of
cloud, add that knowledge together and you're going to be a PolicyPak Cloud expert.

We'll go to a Least Privilege Manager here. Then we'll just go ahead and create a new policy. Let's
call this Enable UAC Overcome for Procmon. If you click on New Policy here, let's go ahead and make
a new Executable Policy for Procmon. This is a trick because if you want to do a Hash rule, we can't
touch that file.

If you go ahead and click Next and we Select Reference File here, let's go to C:\share, Apps to
Manage. Click on DEMOS and let's take Procmon. There we go. We've touched it. Now that we've got
that guy, we're ready to go.

Go ahead and click Next. We can Run with Elevated Privileges. You're off to the races. We've reached
out, touched it, and we've done a Least Privilege thing.

Let's go ahead and check to see that it actually worked. Here's our machine. Let's show no Procmon.
Does it work right now? Do we overcome a UAC prompt by default? No, we do not. Now let's go ahead
and do a ppcloud/sync.

We can see there we go, Enable UAC Overcome for Procmon. Sometimes this takes around ten seconds to
kick in. After you do ppcloud/sync count to ten. Then you can rerun Procmon. Did it work? It sure
did. That's a Least Privilege in-cloud editor.

If we want to do something else like Browser Router as an in-cloud editor, what does that look like?
What we can do is click over here, Work from Home. Create and Link and New Policy here, Browser
Router. Again, these are some base hits. We go over to more details in the section I just described.

If we do Browser Router Test and we want to say a New Policy for Browser Router for PolicyPak to
Chrome, something like that. Then we can say Wildcard \*PolicyPak\*. We'll go to Chrome land and go
ahead and click Save. We're done. We'll go ahead and click OK.

Go back to our test machine here. We'll run ppcloud/sync. Give this a second to wrap up. Okay, let's
make sure we got it, Browser Router Manager Test. I'm just going to open up Notepad file that's
going to represent getting a Teams link or something like that.

If I go to www.policypak.com and I click on it, it's not going to go to my default browser. It's
going to go to the routed browser that I selected using PolicyPak Browser Router. That's going to be
Chrome.

I'm not going to go into every single kind of item type because like implied, once you get the hang
of one, you get the hang of everything. What I do want to point out is that once you have on-prem
directives, again, Browser Router is a perfectly fine one, or File Associations or anything; if
there's not an in-cloud editor, although there are in-cloud editors for Browser Router, just to
prove a point, if you were to take any kind of complex thing you've already set up in your on-prem
test lab, if you were to go to Apps and Browsers and take Browser Router, you can see I've kind of
got a fairly complicated set of stuff going on here in this collection. This collection is ready to
go. I've got a Look & Feel policy. What is that? You have to learn about it.

What's a Default Browser policy? What is that? How do I block things? Again, we've got all this in
the other videos. What you'll do is right-click, you'll View as XML in Notepad, you'll take all this
stuff here, you'll Copy it, and you'll go into PolicyPak Cloud. You'll go ahead and upload and link
a new XML here just in this big old box.

Paste it, and you can call this PPBR from OnPrem 123. Go ahead and click Add. All these guys are all
right there. If you were to look at this policy now and look at the policy settings, they're all
there. You can also Edit Policy if we have an in-cloud editor.

You can see this is exactly what it looks like on-prem. If we don't have an in-cloud editor for
things, and there are some things that we'll never have in-cloud editors for, that is why in the
other section we talk about in excruciating detail why you need that on-prem test lab, that fake
on-prem test lab for you to be able to create directives. Sometimes even if we have an in-cloud
editor, there's some advanced stuff that you can only do in the on-prem editor and then take the
directive, right-click, View as XML in Notepad for a particular policy or on a collection. You can
View as XML in Notepad or you can do it at the root level too sometimes.

The point is that sometimes you need to do the on-prem test lab first between your machine and your
domain controller and your domain-joined machine. Once you have that ready to go, you can then do
tests with PolicyPak Cloud. Hope this video helps you out. Looking forward to getting you started
with PolicyPak real soon. Take care.


