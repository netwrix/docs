---
title: "Use Endpoint Policy Manager Cloud to choose which version of Java for what website"
description: "Use Endpoint Policy Manager Cloud to choose which version of Java for what website"
sidebar_position: 30
---
# Use Endpoint Policy Manager Cloud to choose which version of Java for what website

Use Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud to deliver Endpoint Policy Manager
Java Rules Manager policies. Configure websites to use the version of Java you choose, or block Java
websites entirely
([https://www.policypak.com/pp-blog/windows-10-block-websites](https://www.policypak.com/pp-blog/windows-10-block-websites))
– even for remote machines via the Cloud. Making a Java Deployment Rule Set for your Enterprise has
never been easier or more flexible.

<iframe width="560" height="315" src="https://www.youtube.com/embed/85lzyp5oTmg" title="Use Endpoint Policy Manager Cloud to choose which version of Java for what website" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Whitney with PolicyPak software. Have you ever had the situation where you were using
some older legacy web app that needs an older version of Java but everywhere else you wanted to run
the latest versions for security? What do you do? With PolicyPak, you don't have to make the choice
between running for compatibility or security; you can do both.

Currently on my unmanaged machine when I go to javatester.org to see what version of Java I'm
running, I get an error. When I go to java.com to verify what version of Java I'm using, it shows me
that I'm running the latest version. In a previous video, we looked at how to create the policy we
need to route Java Version 8, Update 25 to javatester.org, and we routed Java Version 7, Update 51
to java.com right here.

What do you do if you want to deploy using the cloud? It's super simple. We are in the Group Policy
Management Editor here, and these are the polices we created in our last video. All I'm going to do
is right-click. I'm going to view the XML in the Notepad and just copy it. Now I'm already logged in
to my cloud service here, so I'm going to go to the Computer Groups tab and I have my one computer
in the All group here. Since this group is already selected, we'll go ahead and choose Upload and
Link New XML Here.

Now you could export the file and upload it as XML, or you can just copy-and-paste. The description
is not especially helpful, so we are going to call this javatestergets825 and Add. All we'll need to
do is just do the same thing for the second policy. We'll get java.com, get 751, View, Copy, and
come back to here, do the same upload and link, give it a paste. Let's give it a name and let's say
java.comgets751 and Add.

Now that we've done that, let's hop over to our endpoint here, and I'm going to run a quick
ppcloud/sync which will both get us immediately synced and show us that we did get both of those
policies that we just uploaded

Alright, now that we've done that, let's go check out our situation here. Notice not only did we not
error out, we also are specifically running 825 right here on javatester.org. If we come over to
java.com and verify the Java version, it says we're running Version 7, Update 51.

There you have it. We were able to route two different versions of Java to two different website
happening in the same browser at the same time. Every other site that uses Java is automatically
going to fall upward to whatever is latest on the machine. If that's as magical to you as it is to
me, then sign up for our webinar. We will get you started on your 30-day free trial right away.
Thanks so much


