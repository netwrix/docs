---
title: "Using Email / Long Codes"
description: "Using Email / Long Codes"
sidebar_position: 30
---
# Using Email / Long Codes

Want more details about what processes users are attempting to launch? Then use Netwrix Endpoint
Policy Manager (formerly PolicyPak)'s Email / Long codes function. Users send emails. Admins
approve. UAC prompts are overcome. Poof. Easy.

<iframe width="560" height="315" src="https://www.youtube.com/embed/s6qzARZnVGQ" title="Endpoint Privilege Admin Approval: Using Email / Long Codes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz and in this video, I'm going to show you how you can use email to
authorize items using Endpoint Policy Manager Least Privilege Manager. In a previous video, I set up
what's called the admin approval secret where if a user double-clicks  on something that he doesn't
have access to, he can, over the phone, send what's called a request code and get back a response
code. What I'm going to show you now is how to increase that depth so that way, you can do it over
email as well and get some additional information.

What we're going to do is go over to the GPO or the policy that has the admin approval secret in it.
Again, I already have this one set up, or else what I just showed you wouldn't work, and I've got
that already set up in other videos. I'm just finding the policy that does this. Here it is, the
admin approval policy. When you click it the first time here, you're going to now have the option to
set what's called the email method. You can use email and say it's enabled and put the send to maybe
it's helpdesk/fabrikam.com, and then you have a selection to only use email if that's what you want
to do. If you do unchecked, it'll let you do the short code and this email long code.

Now that that's locked and loaded in the GPO, I'm going to head back over to my endpoint. I'm going
to run GP Update and give this a second to finish, up. Now that that's done so now let's go ahead
and double-click on an item that the user would require admin approval for, and you can see now
we've got the field for long response code. User can try to type whatever they want here and that's
not going to work because you haven't given them a response code yet. The idea is that they need to
click here to send a request by email to My Support. You've already figured the to address. This is
my mailer. It says hello, can you please approve the following application? It gives you the
application name and has the request code here. You can see subject Endpoint Policy Manager admin
approval request from the user here. I don't have email set up, so it's going to be a little bit of
cut and paste here. I'm going to copy this request code. I'm pretending I've got email. Now I'm
going to go over and pretend to be my admin who does the approval here, so I'm going to go the
Endpoint Policy Manager admin approval tool here; so there's the admin approval tool, which again I
have already set up in another video. Going to go ahead and type the password to get it warned up
here.

Now that that's open, I can use the Email tab and I can paste in the email that I got for my user.
Here's my request code and looking at that; it lights up and gives me the command that's being run.
It tells me the file name. It tells me that the parent process – it tells me that it's digitally
signed. We're going to be putting the field in here for actually who's done the signature in just a
little bit. It's not in this version, but it's coming soon.

Anyway by the time this is over – you can also change that the reason code, the number of uses and
when it expires and also apply to child processes. I'm not going to deal with any of that right now.
I just want to take it, send an email back to my user and you're going to pretend that I just did
that. Now back at the user who is trying to run the PowerPoint Viewer Install. They get the email
back saying here's the response code to put in for your – to put in. Bang, put that in there and
you're off to the races.

In this way the email version gives you more information and a workflow that you can use to do
anytime. In this way, nobody has to be at the help desk at present in order for this to achieve. You
can do it in asynchronous time. Hope this feature helps you out and looking forward to getting you
started real soon with Endpoint Policy Manager. Thanks.


