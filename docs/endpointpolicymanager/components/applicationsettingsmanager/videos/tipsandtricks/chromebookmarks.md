---
title: "Deliver pre-configured Bookmarks in Chrome"
description: "Deliver pre-configured Bookmarks in Chrome"
sidebar_position: 90
---
# Deliver pre-configured Bookmarks in Chrome

Watch this video to learn how to use Netwrix Endpoint Policy Manager (formerly PolicyPak)
Application managers Google Chrome Pak to deliver pre-configured bookmarks to your endpoints.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Cu3feJgMLU8" title="Endpoint Policy Manager:  Deliver pre-configured Bookmarks in Chrome" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak: Deliver pre-configured Bookmarks in Chrome

Hi. This is Sal from PolicyPak technical support. In this video, we're going to show you how you can
deliver Google Bookmarks using PolicyPak preconfigured Pak for Google Chrome to your endpoints.

The first step is opening up a GPO into the "Group Policy Management Editor" and link it to your
proper location, whether it's the user side or computer side. For my testing, I'm going to deliver
that to the computer side. I'm going to add "PolicyPak for Google Chrome 31 (No JSON)" Pak entry.

I'll go into the "Properties" and I want to go into the "Extras" tab. That's where I'm going to find
"Managed Bookmarks." Here it is. The string which I'm going to put in here is a special string which
we acquired from Google which Google asked us to input in a special format. You will find that
format on the Chromium website, and you can also find it under the video's description link as well.

I'm going to put three URLs. Copy that string, go back to the Pak options, and I'm going to input
that in here. And that's really all from the Group Policy side. Now settings in place, I will go
into my client machine. Just to prove a point, if I launch "Google Chrome" and I see into the
"Bookmarks," there are no managed bookmarks yet.

Let's go ahead and run GP Update ("`gpupdate`"). We will wait for the computer side to get finished.
And now the computer side is finished, so I will launch "Google Chrome." If we go into the
"Bookmarks" section, there are no bookmarks there.

Let's try that again. Sometimes the process keeps open at the backend for Google Chrome, so you
really want to make sure that Google Chrome is closed so it gets the latest settings. Let's launch
it again. If we go into the three dots icon, you'll see that under "Bookmarks" we've got the
"Managed bookmarks" this time with all our required URLs.

Okay, I hope it helps. Thank you.


