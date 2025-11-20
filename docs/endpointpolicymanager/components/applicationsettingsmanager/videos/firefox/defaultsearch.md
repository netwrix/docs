---
title: "Changing the Firefox Default Search Engine in one-click"
description: "Changing the Firefox Default Search Engine in one-click"
sidebar_position: 20
---
# Changing the Firefox Default Search Engine in one-click

Everyone wants to know how to set the Firefox Search Engine from Yahoo to Google or something else
using Group Policy. PolicyPak is the way to do it. Check out this video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/_d-9Tolzh3M?si=HptGx95lPDRmOxI2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager: Set the Firefox Default Search Engine using Group Policy

Hi. This is Jeremy Moskowitz. In this video, I'm going to show you how you can change the default
search engine of Firefox.

As you probably know by now, if you were to type something interesting in to the search dialogue
box, you'd get probably not what you want. You probably want Google, but you could also change it to
Bing or anything else you want using PolicyPak.

Let me show you how to do that quickly and easily and also show you how here under "Options" you can
also make it so that users can't get to the "Search" tab at all, so therefore you don't have to
worry about them changing it. Let's do those two steps.

First thing, we're going to go to our Group Policy Management Console. I already have a GPO linked
over to "Sales" and I have a GPO ready to go here. I want to pick "PolicyPak for Mozilla Firefox
23.0." PolicyPak has over 500 preconfigured apps. I just happen to be using the Firefox Pak for
this. This is really "23.0" and later.

If I go over to "Extras," I'm going to go right over to "Google" just like that. While I'm also
here, I'll go to "About: Preferences" and "Hide Search preferences" tab. That does two things at
once. We're driving Google as the default, and we're also going to remove the UI so that users can't
be naughty and work around your desired configuration later.

Now that that's done, let's relaunch "Mozilla Firefox" and here we go. The very next time we run
Firefox and type in "policypak," you get "Google" to show up. If we were to go as the standard user
and go to "Options," there is no more Search dialogue box. We've made it very difficult for them to
be naughty.

That's it. You might also think, "What if a user goes over here and clicks on the ‘Change Search
Settings'?" Well, they can't. You've nuked it off the map using PolicyPak. If they want to
temporarily change the search engine during their session, they're welcome to do so. But the next
time PolicyPak runs, which again is going to be as soon as the application reruns, we're going to
drive that setting back in. So that's only a temporary value for during that session, and you are
guaranteeing that the next time it runs "Google" or whatever yours of choice is going to be
delivered.

I hope this helps you out. I'm looking forward to getting you started with a PolicyPak trial real
soon. Thanks.


