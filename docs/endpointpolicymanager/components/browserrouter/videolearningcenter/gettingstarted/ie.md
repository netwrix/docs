---
title: "Manage Internet Explorer 11 and Edge Compatibility, Enterprise Modes and IE-in-Edge Mode"
description: "Manage Internet Explorer 11 and Edge Compatibility, Enterprise Modes and IE-in-Edge Mode"
sidebar_position: 70
---
# Manage Internet Explorer 11 and Edge Compatibility, Enterprise Modes and IE-in-Edge Mode

Use Netwrix Endpoint Policy Manager (formerly PolicyPak) to dynamically set Enterprise and Document
modes, as well as force an Internet Explorer tab to open--inside Edge!

<iframe width="560" height="315" src="https://www.youtube.com/embed/QwQF3a5Dqb0" title="IE 11 Compatibility (Enterprise and Document modes) + IE in Edge mode" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Whitney with Endpoint Policy Manager Software. In other videos, we talked about setting
default browsers, routing the right website to the right browser, and making sure that the naughty
websites are blocked. In this video, we're going to talk about another feature of Browser Router,
the ability to dynamically set Internet Explorer Enterprise, and document modes. We're also going to
look at the idea of being able to open an Internet Explorer tab inside of Edge, but we'll get to
that in a minute.

For this demo, I already have a GPO in place that's dictating that my default browser is Chrome.
Just to show that it's working, let's click on microsoft.com here and see it opening in Chrome, just
as expected. Now, let's go over to my management station, and we're going to create a new policy
here. I'm just going to call it Microsoft to IE, and I'm going to come down here and specify
www.microsoft.com. Now the radio button for Internet Explorer is already selected, but what I really
want to focus on is the Browser Mode drop down here. While, obviously, Microsoft.com doesn't need to
be rendered in one of these document modes, a website you're using might need to be rendered in say
IE 7 Document Mode.

Now that we've selected IE7 Document Mode, I want to mention this idea here of "Don't make a route."
If we check this box, that means that if your user is already in Internet Explorer and goes to
microsoft.com, then render in IE7 Document Mode, but if your user is in any browser, don't make a
route, just open microsoft.com in whatever browser they're already in. If I'm already in IE and I go
to microsoft.com, it would render me in IE7 Document Mode, but if I was in Firefox and went to
microsoft.com, it would just leave me in Firefox. That said, in this case, I do want to make a
route, so I'm going to leave this box unchecked. I'm going to select OK and head back over to the
endpoint. I'll just run a quick gpupdate, and when it's done, we'll see that we've both made a route
ensuring that microsoft.com will open up in Internet Explorer and that it's rendering in the
document mode we specified.

Okay, let's click on that microsoft.com link again. Remember, last time we did this it opened up in
our default browser, which is Chrome. This time, though, it's opening in Internet Explorer, and
notice that it's rendering really, really poorly right now. That's because we currently have it in a
document mode that it's not designed for. However, it is a good visual to see that we did in fact
achieve a different rendering mode. To be more specific, though, if you hit F12, you can see
developer tools, and you can see under the Emulation tab that we are rendering here in IE7 Document
Mode.

Now I want to show you another magic trick. Say you have some website that needs to be opened in
Internet Explorer but you're using Edge as your standard. You might not want to have to flipflop
between browsers all the time, but what can you do? You'll just make Internet Explorer open in Edge.
Let me show you how easy this is. I'm going to go here and edit the policy, and while we can render
an IE page in Edge with a specific document mode, I want to do one thing at a time. Let's put this
back into default mode and change this drop down to Open as IE in Edge tab. Alright. We'll say OK,
come back to the end point, and run one last gpupdate.

Alright, now that that's done, we're going to click on microsoft.com again, and again, last time we
did this, it was opening in Internet Explorer in IE7 Document Mode. This time it's going to open in
Edge as an Internet Explorer tab. Let's see it happen. Here we go. We see that it is opening in Edge
right down here. However, there is your Internet Explorer mode tab. There you have it. That is how
easy it is to set up an Internet Explorer Enterprise or document mode easily and quickly as well as
forcing an Internet Explorer tab open inside of Edge. If this is of interest to you, sign up for our
webinar, and we'll get you started on a free trial right away. Thanks so much.


