---
title: "Use Endpoint Policy Manager Cloud to deploy PP Least Privilege Manager rules"
description: "Use Endpoint Policy Manager Cloud to deploy PP Least Privilege Manager rules"
sidebar_position: 10
---
# Use Endpoint Policy Manager Cloud to deploy PP Least Privilege Manager rules

Why would you want people using domain joined or non-domain joined machines to have local admin
rights? Is this 1998? No, and with Endpoint Policy Manager Cloud and Endpoint Policy Manager Least
Privelege manager you can remove local admin rights, but ensure that Standard Users can do key tasks
to keep doing their jobs and get into the places you need them to in the operating system.

<iframe width="560" height="315" src="https://www.youtube.com/embed/RDxfSzpZxlM" title="Use Endpoint Policy Manager Cloud to deploy PP Least Privilege Manager rules" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Whitney with Endpoint Policy Manager Software. Have you seen the latest and greatest
Least Privilege Manager features and you're wondering how that works with our Endpoint Policy
Manager Cloud edition? We've got you covered. You can use the Cloud service to deliver all of the
same great settings you've seen in other videos. We've ever got an in-browser editor and a helper
utility to make things easy. For this video, let's look at the idea of elevating a regular business
application that would normally throw a UAC prompt. Before we get to that, though, let's take a look
at this endpoint. Just to make sure you know we've got nothing up our sleeves, this machine is
specifically not domain joined. It's not domain joined, so you know that we got the settings
delivered via the internet through our cloud service.

Okay, for our application that throws the UAC prompt, we'll use Macrium Reflect as an example here.
If I try to open it up as a standard user, then bam, UAC prompt. Do you want to overcome that? Let's
go over to our management station and fix this problem using the in-browser editor and our File
Information Viewer utility. Over here on my management station, I've already logged in and I have my
endpoint already in the group that I'm looking to manage. In this case, East Sales. Now there are a
couple of places where you can create a new policy, but I like to do it right here in computer
groups and select Create and link a new policy, which does exactly what it says on the box. It lets
you create a policy and then automatically links it to whatever computer group you're in at the
moment.

We are going to be creating a new policy, and we're going to go select Endpoint Policy Manager
Settings and then Least Privilege Manager, and now OK. Now let's give it a name. Let's call it Allow
Reflect, and let's add a new policy, an Executable Policy, specifically. Now we'll go through the
wizard. We'll choose Next, and we'll determine what file conditions should be met in order to
elevate an application. Let's be super safe and choose both Signature and File Info. Great. Now
let's click Next. Now here's where you might get confused. How are you supposed to know the digital
signature of a file? How are you supposed to know the internal file information? Don't worry. We
have a tool for that.

Now I happen to have the application in question, Reflect, accessible from my management station,
but you can run this utility on whatever machine has the application that you're trying to elevate.
I am going to use the File Information Viewer tool, which installs alongside of the admin console
MSI and its also a utility in the Extras folder when you download the bits. This is going to show me
all of the information that I need to create a policy that will elevate Reflect.

I'm going to use these three dots to select a reference file, and there we have it, tons of
information popping right up. Now let's copy the Digital Signature and paste it in here where we
were before. Now, let's go look at File Info. We're going to go back into the File Information
Viewer and select the Executable tab. This gives us the internal file info that we need to continue
making our policy, so let's copy this info and paste it into the proper fields here. Alright, let's
grab the Product Name, copy that, and paste it in here. We only selected the File Name and the
Product Name for the sake of time, but you could also choose to base it matched on a particular file
version as well.

Now that we've done this, let's go ahead and choose Next. We are going to run with elevated
privileges. Next again, and we'll finish up. Next, we're going to need to scroll down and choose OK
to save the policy. Now let's go back over to our endpoint. This computer would normally sync with
the cloud every 60 minutes, but we are going to run ppcloud/sync to move quickly forward in time.
When you run ppcloud/sync, not only does it immediately sync your machine to the cloud, but it also
gives you what is effectively an RSoP, so you know what's on the machine.

Here we go. We can see that the policy Allow Reflect is here, so let's go see for ourselves. When we
started this video, Reflect would throw a UAC prompt, and now by using Least Privilege Manager with
the Endpoint Policy Manager Cloud, we have managed to elevate this application on a non-domain
joined machine. If that is of interest to you, sign up for our webinar, and once you're done, we
will hand over the bits and get you started on your 30-day free trial. Thanks so much.


