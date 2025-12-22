---
title: "Firefox: How can I use Endpoint Policy Manager to revert Firefox's Options back to the \"Old Style\" ?"
description: "Firefox: How can I use Endpoint Policy Manager to revert Firefox's Options back to the \"Old Style\" ?"
sidebar_position: 130
---

# Firefox: How can I use Endpoint Policy Manager to revert Firefox's Options back to the "Old Style" ?

Here's a video on how to do that

[Download this video](https://www.policypak.com/automation/download.php?vid=2rhdHskV4tU&pid=how-can-i-use-policypak-to-revert-firefoxs-options-back-to-the-old-style)

### Firefox 28 and Endpoint Policy Manager — Deliver and lockdown settings, and also switch back to old UI for Options

Hi. This is Sal from Netwrix Endpoint Policy Manager (formerly PolicyPak) technical support. In this
video, I'm going to show you different settings, new settings which are now available in Mozilla
Firefox 38 version and how you can deliver those settings using our current existing Mozilla Firefox
Pak.

I have that entry in my GPO, so I will open the "Properties." The new setting which I'm talking
about is now made part of the "Content" tab. Here you can see "DRM content" is available and
"In-content Preferences" is also available. That "In-content Preferences" setting has actually been
available in about:config for a while, and we just make it as a part of our regular Pak as well. So
we will try to deliver these settings.

First, let's go into the "General" tab and change the "Home Page." We are using it under our
computer side, so we can also lock it down, and that's what I'm going to do. So right click and
select "Lockdown this setting using the system-wide config file."

If we go to the "Content" tab, let's uncheck "Play DRM content" and also "Lockdown this setting
using the system-wide config file." "In-content Preferences" by default Mozilla Firefox 38 is going
to show us Options in a tab format, but let's do that as false. So now we are going to get that in
our old window. So we are going to get the options in a window format. That's about it, so I will
click "OK."

Our settings are in place. I will go into my target machine. Before checking our settings, let's see
what version I'm using. I'm using a 38 version. If we go into the "Options," you're going to see
that it opened in a tab format. That's what we are going to avoid. We are going to get these options
in a window format, and also we are going to see a "Home Page." If we go into the "Content," we are
going to see that unchecked.

I will close Firefox and run "GP Update" against my computer side. We will wait for that to be
finished. Once it's done, we will launch "Mozilla Firefox" again. Let's go to the "Options." You can
see that now it opened Options in a window format. If we go to the "General" tab, you see that "Home
Page" is delivered. In "Content," "Play DRM content" option is unchecked and we can also see that it
is not editable.

I hope it helps.

Thank you.


