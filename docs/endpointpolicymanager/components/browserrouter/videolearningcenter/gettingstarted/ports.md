---
title: "Endpoint Policy Manager Browser Router and Ports"
description: "Endpoint Policy Manager Browser Router and Ports"
sidebar_position: 50
---
# Endpoint Policy Manager Browser Router and Ports

Need to route specific websites to specific browsers based upon ports? Check out this demo.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Zy08Oi7e0ak" title="Endpoint Policy Manager: Browser Router and Ports" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak: Browser Router and Ports

Hi. This is Jeremy Moskowitz, Group Policy MVP and Founder of Netwrix Endpoint Policy Manager
(formerly PolicyPak) Software. In this video, I'm going to show you how if you go to a specific port
on a particular website, you can open up the right browser.

By way of example, I've got a GPO. It's linked over to my "West Sales Users." Here's the GPO. We're
using "Endpoint Policy Manager Browser Router." There's actually a nifty website called PortQuiz. We
can go to "www.portquiz.net." I'll go ahead and go to that URL. If you specify no ports, let's go to
"Internet Explorer."

Then let's create another "New Policy" here. Let's say we want to go to "portquiz.net" on port
"1000" or something like that. If we go to "www.portquiz.net" on port "1000," we're going to go to
"Edge." Now, of course, that Edge browser only exists on Windows 10. If we don't detect the Edge
browser, we fall back and use Internet Explorer.

We'll create another "New Policy" here called "portquiz.net." Let's call it "1001,"
"www.portquiz.net" port "1001." We'll go to "Google Chrome" for that one. Then we'll go to
"portquiz.net" "1002," "www.portquiz.net" port "1002" will go to "Firefox." I'm just setting the
stage for a variety pack of these guys.

Now let's go over to our endpoint. We'll just run GP Update on each of them to get the latest
Endpoint Policy Manager Browser Router routes. We'll wait for this to finish. Okay, that's done.
We'll close that out. We'll go back to our other machine. We'll close that out.

Let's do an easy one. Let's say we get a link and that link is "www.portquiz.net" and we click on
it, remember, that's straight port 80. That means that's going to open up Internet Explorer, and
that's exactly what happens. If we're in Internet Explorer now and we try to go to web port "1000,"
well, that's supposed to be Edge. But this machine doesn't have Edge, so therefore we fall back to
Internet Explorer.

If we go to Windows 10 and we try that in Windows 10, let's do the same thing. We go to
"www.portquiz.net," start that off again here, it's going to launch Internet Explorer. If we're in
Internet Explorer and we go to "portquiz.net:1000," what should happen? Edge launches exactly the
way we expect. That's exactly what we wanted.

Let's go back to our other machine. We're in Internet Explorer. We go to "portquiz.net:1001." We
said that was going to be Chrome, and that's exactly what happens here. Here's Chrome launching. If
we're in Chrome and we go to "portquiz.net:1002," that's going to be Firefox.

That's it. So you can see, on Windows 7 or Windows 10, it doesn't really matter which machine you're
on. If I reopen Internet Explorer here and just give "portquiz.net:1001," it's going to open up the
right browser for the right time.

There you go. That should give you a quick rundown of how to use Endpoint Policy Manager Browser
Router and specific ports. All you have to do is put in the "URL," put in the port and put in the
"Browser." Remember, this does have to be an exact match. That's the deal with URLs. They have to be
an exact match.

With that in mind, if you have any questions about how to use Endpoint Policy Manager Browser
Router, we look forward to answering them and hope you get to take advantage of this real soon.
Thanks.


