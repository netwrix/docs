---
title: "Block ALL Java (with some exceptions)"
description: "Block ALL Java (with some exceptions)"
sidebar_position: 30
---
# Block ALL Java (with some exceptions)

We know you hate Java, and want to get rid of it. This video shows you how you can block ALL Java,
but then make exceptions as needed.

<iframe width="560" height="315" src="https://www.youtube.com/embed/l__NsAakT1M" title="Java Rules Manager: Block ALL Java (with some exceptions)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Java Rules Manager: Block ALL Java-with some exceptions

Hi, this is Whitney with PolicyPak Software. In this video, we're going to learn how to block Java
on all your websites by default and then allow a few websites to run Java by exception.

We'll go over to our endpoint and just verify that we are running Java and which version we're
running right now. We can see: "Congratulations! You have the recommended Java installed (Version 8
Update 161)." Now I do actually have a few older versions installed as well, which we will get to in
just a moment.

Let's go back over to our GPMC machine here. I'm going to "Create a GPO in this domain, and link it
here" and we're going to "Block Java" with this. We'll go there. Let's "Edit" this GPO. Now the Java
Rules Manager works on a per computer basis, so we'll do this on the computer side.

We'll select "Java Rules Manager" here. I'm going to right click and choose "Add" a "New Default
Policy." This is what we do to determine what happens by default with Java. Right now, the
"Permissions" will be "Block." We can add a "No-Match Message" here. We can just say we're going to
"Block Java Applets." We'll tell it "OK."

So now by default Java will not run on websites. However, I know there are a few websites that I'd
like to have run Java, so I'm going to "Add" a "New Policy" here. This one is going to be for the
website "JavaTester.org." We are going to give it the URL there. Let me just grab this and make sure
I have the right one. You need to make very sure that the "Location" is accurate right here.

I'm going to tell it I want it to "Run." Since I know I have Java 7 Update 51 on my machine, I'm
going to choose that I want to map "Java 7," "Java SE 7 Update 51" to the JavaTester.org website.
Add that and tell it "OK."

I also want to "Add" a "New Policy" for NASA, so we'll just call that "NASA." Let me go grab the URL
here to make sure I have the correct one. In this case, I'm just going to tell it to "Run" the
"Latest on machine." So it will be running that Java 8 Update 161. So I've told it "OK."

We'll go back over here, close down my instance of Internet Explorer. We're going to run a GP Update
("gpupdate") here. Now normally this would run on a background refresh or on a logon or a startup,
but we don't have time for that. We're going to just move forward the hands of time here real quick.

All right, now let's open up Internet Explorer again and let's look at what we have. With the
"JavaTester.org," we said we wanted it to run Java 7 Update 51. Let's "Test the version of Java used
in this browser." It says we are running Java 7 Update 51 just like we anticipated.

Now we'll go over to the NASA website and see what we have. It is running Java 8 Update 161 just
like we told it to. We said we wanted it to run the latest version here.

However, we did not create an exception for Java.com. So if we go here, we're going to fail because
we told it to block that. Let's "Verify Java Version" here. Here we go. We have "Java Application
Blocked." The "Reason" is "Block Java Applets."

There we have it. We've told it not to run Java if we haven't given it an exception. Then we saw how
to create a couple of exceptions and map a particular version to a particular website.

If that's of interest to you, let us know. We can get you started with a free trial of PolicyPak
Software. We look forward to hearing from you.


