---
title: "Google Chrome: Clear Browsing History, Cookies, Password, Images and more"
description: "Google Chrome: Clear Browsing History, Cookies, Password, Images and more"
sidebar_position: 20
---
# Google Chrome: Clear Browsing History, Cookies, Password, Images and more

Of course you want to have nice clean browsing history, download history, cookies and other site and
plug in data, along with Cached images and files, Password and Autofill form data. Use Netwrix
Endpoint Policy Manager (formerly PolicyPak) to manage these items in Chrome.

<iframe width="560" height="315" src="https://www.youtube.com/embed/VviwZSFFrQ4?si=0eAFNyrM-PnWDM6X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Download this video:
[https://www.policypak.com/automation/download.php?vid=VviwZSFFrQ4&pid=policypak-google-chrome-clear-browsing-history-cookies-password-images-and-more](https://www.policypak.com/automation/download.php?vid=VviwZSFFrQ4&pid=policypak-google-chrome-clear-browsing-history-cookies-password-images-and-more)

### Endpoint Policy Manager: Google Chrome: Clear Browsing History, Cookies, Password, Images and more

Hi. This is Jeremy, and in this video I'm going to show you how you can use PolicyPak to remove all
traces of browsing with Google Chrome and PolicyPak. Let's show you the example.

Here's "Google Chrome" doing its thing. Let's, for instance, go to something like "www.cnn.com."
When you're at CNN, of course, you're leaving breadcrumbs behind in your history. If I go take a
look here in "History," you can see I've got a bunch of stuff that I've done in my history,
including something I've just done, which is go to "CNN." You can also see that in CNN-land you've
got a bunch of "Cookies." You can see cookies are being added by the second and so on. If you want
to, you can use PolicyPak now to deliver the settings that will prevent this stuff from
accumulating, and it does it at launch time of Chrome. Let me show you how this works.

What you do is you go to your "GPMC." You can do this on either the user or computer side. I'm going
to do it on my user side. I'm going to say "Delete Browsing History for Chrome PP." We'll click
"Edit" here. We'll dive down under – again, you can do it on user side or computer side; I'm doing
it on user side – "PolicyPak/Application Settings Manager."

You have to have the latest version of the Chrome Pak and also the latest client side extension.
"New Application," here it is: "PolicyPak for Chrome 31." We'll double click it here. The way you
know you have the right one here is that when you double click it and it comes up, you can see that
you've got this thing called "Clear Browsing Data" and it gives you some things that you can check.

I'm going to do two things. The first thing I'm going to do is I'm going to set a specific home page
("Open a specific page or set of pages") just so you can that's actually working. I'm going to go to
"www.abc.com," which everybody is going, "That's a TV show site." I'm setting a specific page here.

Then I also want to go to "Clear Browsing Data," and I'm going to clear "Browsing history" and
"Passwords" and "Cookies and other site and plugin data."

I've done those three things here and, actually, it's not going to work. In fact, I just want to
show you that it's not going to work. I'm going to show you why it's not going to work second and
then how to clear it up, but I really want to show you what's going on here. We'll go ahead and wait
for this to finish.

We'll go back into "Google Chrome." Now like I said, it's not going to work. The question is: why
isn't it going to work? We've done everything correctly here. If we go back to "History," we can see
all this old history stuff. It turns out that Chrome is always running in the background unless you
tell it not to.

We're going to use PolicyPak to force Chrome to not run in the background. When we do that, at that
point the databases and stuff for Chrome will be closed and the next time we launch Chrome we'll be
good to go. I'm walking you down this path on purpose so you don't get caught in this trap here.

We'll go to "Google Chrome 31" here and under "Advanced," we want to uncheck "Continue running
background apps when Google Chrome is closed." We want to uncheck that. That's going to say to
Chrome, "Don't keep running in the background." Let's go ahead and set that. We'll run GP Update
here. We can also just make sure that Chrome is not running. That's the important part.

It's still running, actually, so just to prove a point here, I'm going to "Sign out" and log back
on. Then we should see that we've delivered the signal and it's not a problem anymore. It can take a
little while to get this bootstrapped in your environment, but then after that it's smooth sailing
and will work exactly as you expect.

Now I'm logged back on and no Chrome hiding in the background. Let's go ahead and double click on
"Google Chrome" now. PolicyPak has got the signal to tell Chrome not to do that. There's our home
page setting. If we were to go to our "History" and go to our "History" here, the only thing we see
now is the stuff from this browsing session.

If I were to go to some unusual place like "www.microsoft.com," some new place here, it's
accumulating stuff in the history as you might expect here. If I go back to "History," there's
"Microsoft." When I close out Chrome, as long as Chrome isn't running now in the background which
it's not because we told it using PolicyPak to not do that anymore, the next time we run "Google
Chrome," at that instant that's where we do the reset.

If we go back to "History" and "History" again, you can see just the ideas from this session. The
"Home Depot" is coming up from some ad that's on "ABC" or something like that.

That's the general gist. That's a way for you to clear out all that stuff – that would be cookies
and browser history and other cached items – that you would want to manage using Chrome.

I hope that helps you out, and we'll talk to you soon. Bye-bye.


