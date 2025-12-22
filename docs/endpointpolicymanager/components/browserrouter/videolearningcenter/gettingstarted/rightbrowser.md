---
title: "Ensure users utilize the RIGHT browser for the right website !"
description: "Ensure users utilize the RIGHT browser for the right website !"
sidebar_position: 10
---
# Ensure users utilize the RIGHT browser for the right website !

Everyone knows that not every browser is the right one for all websites. Problem is, users end up
using the WRONG website most of the time. With PP Browser Router, you create policies (or ROUTES)
where specific websites are launched only into the specific browsers. It couldn't be easier. Check
it out.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ACQOzjQcT6A" title="Ensure users utilize the RIGHT browser for the right website !" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Whitney with Netwrix Endpoint Policy Manager (formerly PolicyPak) Software. In this
video, I'm going to show you a gaggle of problems that you can fix using Endpoint Policy Manager's
Browser Router. Let's start with a very simple one. I'm sure you've seen this. Your users launch
Internet Explorer and they get asked that annoying question, would you like to make Internet
Explorer your default browser? Maybe they say yes. Maybe they say no. Then they go to another
browser and what happens? It wants to be the default browser. Again, maybe they say yes. When they
launch the first browser, they'll get asked yet again, do you want this to be the default browser?
That's problem number one that I want to show you how to solve, fixing the browser wars.

Problem number two is, well, as you know, some of the pages only get rendered correctly in the right
browser. Typically, the problems are things that you have internally or that you use with your
vendors. However, for this example, I'm going to create some easy to remember rules with Google,
Microsoft.com and a few others. The problem right now is that every single link that you click on,
if you get them in an email or a Skype message or inside a WordPad document, when you click on it,
it's going to launch whatever the default browser is. In this case, it's Edge but maybe that's not
what you want. If I go and change my default browser to Google, then all of the websites are going
to go into the new default browser which again, may not be what you want either.

What you want to do is route the right URL to the right website and that's what Browser Router does.
I'm going to show you very quickly how you can set up several routes using Browser Router. Now for
the sake of time, I've already created some rules over here on my management station but I'll show
you what I've done. First of all, I have set the default browser to be Chrome. Now while I won't be
demoing this part, I do want to mention that you have the option when you set a default browser to
be always the default browser or you can decide if you want to apply once and then let your users
drift to whatever they choose.

Now I've created some simple rules. Anything with the word Google is going to get opened up in
Chrome. Anything that has the word Mozilla in the URL is going to go to Firefox. Microsoft.com is
going to open up in Internet Explorer. Bing.com is going to open up in Edge. Just for fun, I've gone
ahead and blocked Facebook and created a custom block text that just says, this website it blocked
by company policy. Please contact Support for help. All right, let's close this out. Now I'm going
to connect up the wires and link enable this and we'll go back to the endpoint and run a gpupdate
just to move the hands of time forward a little bit. Then we'll check out what we've done.

All right. Now you'll notice when I open a link that I click on inside of a document or an email or
a Skype message, we're going to see that it's opening up in what is now our default browser of
Chrome. All right. Now let's go to Mozilla.org and you'll notice that Chrome closed and Firefox is
open. Now note that if a browser has multiple tabs open, it's only going to close the one tab, not
the whole browser. By way of example, let's go ahead and open up a new tab and we will go to
Microsoft.com. The tab closes, Firefox is still open but we're going to Microsoft inside of Internet
Explorer. All right. Now let's go to Bing.com. We saw the Internet Explorer close. Edge is open.
Finally, just to close up this daisy chain, let's go to Google.com in Edge. Watch it close and open
up the site in Chrome.

Just to circle back to that Facebook block that I mentioned earlier, let's try to go to
Facebook.com. This website is blocked by company policy. Please contact Support for help. There we
have it. We have set a default browser. We routed particular websites to particular browsers and we
even made sure to block Facebook. If this is of interest to you, sign up for our webinar and we'll
get you started on your free trial right away. Thanks so much.


