---
title: "Endpoint Policy Manager Configure PARCC Testing Configuration Stations using Endpoint Policy Manager to prevent pop-ups"
description: "Endpoint Policy Manager Configure PARCC Testing Configuration Stations using Endpoint Policy Manager to prevent pop-ups"
sidebar_position: 110
---

# Endpoint Policy Manager Configure PARCC Testing Configuration Stations using Endpoint Policy Manager to prevent pop-ups

PARCC testing is very important. Make it go very smoothly for your students and teacherby
implementing our preconfigured PARCC settings, as seen in this video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/DdFqtP3UT3w?si=zCWSbAlKjd1vGhtW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak Configure PARCC Testing Configuration Stations using PolicyPak to prevent pop ups

Hi. This is Sal from PolicyPak Technical Support. In this video, I'm going to show you how you can
manage Java-related prompts on specific websites using a Mozilla Firefox browser.

Here, I do have a simple website. Just to prove a point, I'm going to launch that and show you the
prompts which we can manage using PolicyPak directives. Here is the website, and I'm going to log in
there.

When I click on "Sign In," the first prompt which I'm going to see is: do you want to enable Java
plug-in for your Mozilla Firefox? Let's assume I do want to "Allow Now." There is what we're going
to manage, obviously, in Mozilla Firefox.

I will click "OK," and the next prompt is going to be: if you have an older version of Java
installed on your client machine, do you want to "Update" that into the recent version? That is what
we are going to manage as well.

Let's say I click on "Later." The third prompt is going to be: "Do you want to run this application"
– the Java application – from that specific website? Do you trust that website? That's what prompt
we are going to get, and that is what we are also going to manage using PolicyPak directives.

I will click "Cancel," and close the Mozilla Firefox. Meanwhile, I will "Delete" the "deployment"
configuration file for Java. I'm just going to launch it again so it will be created again and we
have something to write into. I hope that is created. Yes.

I always want my users to have a uniform experience for all of their online meetings, so let's
ensure they can't alter these settings. I'm going to lock them down with PolicyPak's exclusive ACL
Lockdown feature. I'll just right click over the settings and select "Perform ACL Lockdown." Now,
even if the user has the ability to access the registry, they simply cannot alter these settings
anymore.

Okay, so now I'm going into the Group Policy server, and these are the two Paks which we have. This
is where we are going to deploy our PARCC settings. That's what we are going to deploy here. That is
also available on our customer portal as well. You can download that in XML data format. All you
need to do is get that "Firefox" Pak and then open the "Properties," click on that "Options" button
and select the option "Import XML Settings Data."

I do have that on my "Desktop." First, I will choose that, and what it does is it will "allow" that
website in the "Permissions." It also enables the "Add-Ons" "Extension" for Java 8, Update 25. I
will click "OK" and now time to move on to the "Oracle Java."

Open the "Properties" and I will do the same: "Import XML Settings Data." That is, again, available
on our website. Import that data as well. It unchecked that prompt. It is not going to load that
prompt on the target machine. We enabled a bunch of other options as well. Click "OK." Now the
setting is in place.

I'm going into the target machine, and I'll run GP Update. The policy is finished, so now we'll
launch Mozilla Firefox. We open the same website which has Java content in it. Wait for that website
to be finished, and log in with our credentials.

It kept policy with the first prompt, which is for Firefox to enable the Java plug-in. It did not
check for any object. That prompt is also gone. Then the last prompt where it asks to run that
location from that website for Java, that prompt is also gone.

It will straightaway open the full-screen Java-enabled content website. Actually, it does take some
time to load up all the content from Java. Now you can see that it opened that website successfully.

I hope it helps. Thank you.


