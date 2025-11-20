---
title: "Manage, block and allow Windows Universal (UWP) applications"
description: "Manage, block and allow Windows Universal (UWP) applications"
sidebar_position: 30
---
# Manage, block and allow Windows Universal (UWP) applications



Want to block the Microsoft Store or Edge on your Windows Professional, Enterprise, or Professional
machines? This video shows you how to do it, AND let users still download SOME items from the store
as you see fit. You won't need the Microsoft Store for Business… when you're using this method to
manage your Windows Universal applications.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Tn7xce6nCZg" title="Manage, block and allow Windows Universal (UWP) applications" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Whitney with Netwrix Endpoint Policy Manager (formerly PolicyPak) Software. Are you
tired of your users taking advantage of built-in UWP apps on Windows 10? Do you want to make sure
that your users can't download random games and applications from the Microsoft Store? You've come
to the right place. With Endpoint Policy Manager Software, we make blocking and allowing UWP
applications quick and easy.

Over here on my unmanaged machine, you can see that my users have full access to the Microsoft Store
and could download and run anything that they wanted to, Candy Crush, Gardenscapes, Netflix. You
name it, your users have access to it if it comes from the Store as well as whatever random games
and applications that come preinstalled on the OS. I don't know about you, but I'm exhausted by that
already. Let's manage the heck out of our UWP applications.

First of all, over here on my management station, I'm going to open up my GPMC, and I'm going to
create a New GPO called UWP App Management. Now, I'm going to Edit. Now I'm going to go to the Least
Privilege Manager component on the user side. You can do this on either the computer side or the
user side. It's up to you. I'm going to select New UWP Policy. Now, the first thing I'm going to do
in this video is I'm going to block all UWP apps. We are denying execution. That's going to smack
down the Store as well as the UWP aps that are installed.

Now, when you expressly deny an action, you can choose a standard system message, a silent message,
which means no message at all, or a custom message, which is what we'll be selecting here. You can
choose to place just text here, or you can choose to use variables, so I'm going to click Edit, and
I'm going to say, "This action is denied by" – I'm going to scroll down and choose which variable I
want to use, in this case GPO name – "please contact the helpdesk."

Alright, now let's Save and go back to our endpoint. Alright, so we've just denied all UWP
applications. Let's run a gpupdate just to accelerate what would normally happen on a background
refresh, and as soon as it's done, we'll test it out. Alright. 30 seconds ago, we could get to the
Store, and now "This action is denied by UWP App Management. Please Contact the helpdesk." If I try
to open up the calculator, I get denied, and if I try to open up weather, we're also denied.

Now, what if you want to give your users the opportunity to run certain UWP applications and maybe
even still get some apps from the store but only the ones you dictate? Let's go back over to the
management station, and let's create two new policies. One's going to allow the calculator, and the
other is going to allow the Store to come back. All we have to do is choose Add a New UWP Policy
again. This time we're going to select specific UWP apps, and if  I wanted to be really specific, I
could get the package name for the calculator by using a PowerShell command, but I'm just going to
be moving really quickly for the sake of this video, so we're going to Allow and log and Finish up,
and we're also going to allow the Store as well. We'll use the same wildcard situation, and we'll
Save, and we're good to go. Now we'll come back over here, and we will run our gpupdate one more
time, and we'll see our results.

Alright. Let's go check out calculator again. There we go. We made it work. Now let's go ahead and
try to run the Microsoft Store. It opens up just fine. Now let's say we only want stuff from Adobe,
so let's go look for Adobe here. We're going to select Adobe Reader Touch. Now let's go ahead and
get this. Now, when we try to do this, it's going to go ahead and start downloading, and that's
great, but we know that we've blocked everything that is a Windows Store Application. Now that we
have this installed, let's go ahead and try to launch it here. What do we get? We got blocked. We've
got the Microsoft Store open. We have new applications that users can download, but they won't
actually be able to run them until you sanction that.

There are a couple of ways that you can go forth and sanction it. One way is just do it by name. You
can even use wildcards like we did before or be more specific and use the Get-AppxPackage PowerShell
command to get the proper package name, but if you want to sanction everything from a publisher,
could you do it? Absolutely yes. We'll just go ahead and run that PowerShell command, and at the end
of this list is going to be the last package that I just installed, and it will give me publisher
information as well.

I'm going to grab this publisher information here. This is it. This is it, so I'm going to go
through, and I'm going to copy this, and we'll go back over to our management station, and we're
going to Add another UWP Policy. We will again select Specific Applications, and in this case, we're
going to put the publisher in here, and Adobe has a weird looking publisher, but that's the way it
works. We'll click Next. We're going to Allow and log, and we're going to type in Adobe here. Finish
up.

Now all Windows Universal Apps from Adobe are allowed. I'm going to come back over here. We're going
to run one last gpupdate, and again, ten seconds ago, we saw that the application from Adobe, the
Touch application, was not functioning. Now after the gpupdate has done its thing and we've said let
publishers from Adobe through, now when we go to run Adobe Reader Touch, it runs just fine, and
you're ready to go. This would permit you to now download anything in the Store by the same
publisher, and it will work. You don't have to keep calling the helpdesk. You're just blessing that
whole publisher, and that's it. You're ready to rock.

There you have it. That's how you can manage and allow or block specific UWP applications easily and
efficiently using the Least Privilege Manager. If that's of interest to you, sign up for a one-hour
webinar and we'll hand over the bits and get you started on your 30-day free trial. Thanks so much.


