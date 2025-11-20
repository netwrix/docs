---
title: "Map the Right Website to the Right Browser using your MDM service"
description: "Map the Right Website to the Right Browser using your MDM service"
sidebar_position: 10
---
# Map the Right Website to the Right Browser using your MDM service

Everyone knows that not every browser is the right one for all websites. Problem is, users end up
using the WRONG website most of the time. With PP Browser Router, you create policies (or ROUTES)
where specific websites are launched only into the specific browsers, then deploy those policies
using the MDM service of your choice. It couldn't be easier. Check it out!

<iframe width="560" height="315" src="https://www.youtube.com/embed/D6mVGE4GH5k" title="Map the Right Website to the Right Browser using your MDM Service" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Whitney with Netwrix Endpoint Policy Manager (formerly PolicyPak) Software. In a
previous video, we learned how to use the Browser Router component to create policies to route the
right website to the right browser, and we delivered those settings using our group policy addition,
but what if you're using an MDM service, and you want to deliver those settings that way? You're in
luck. In this video, we're going to learn how to export those policies, wrap them up in an MSI, and
then deploy them to your MDM enrolled machine.

Before we get started on that, though, let's look at our non-domain joined, MDM enrolled machine
here. Just to really drive the point home, let's see that indeed this is not domain joined and is in
a workgroup called, well, WORKGROUP. Now, we can see that I do already have the client-side
extension and the license file already installed on this machine, which we'll also be able to see
when we get ready to deploy the MSI that we're getting ready to create. Okay, so we know we have
this machine ready to receive directives. Now, let's see what our default browser is. When I click
on this link, it opens up in our current default browser, which is Edge. Now, since I don't have any
routes in place, anywhere I try to go in Edge or Firefox or Chrome or what have you, I'm going to,
of course, stay in the same browser I started in. Let's change that behavior.

Now, coming back over to my management station, I've already created policies that set a default
browser and route the right website to the right browser, so let's take a quick look at those. I've
made the route simple and easy to remember, so we've set our default browser as Chrome first of all.
Then I've sent anything Google is going to go to Chrome, and anything Mozilla is going to go to
Firefox. Microsoft.com is going to open up in Internet Explorer. Bing.com will open up in Edge here,
and finally, just for good measure, I've blocked Facebook, and I've given it a block text that says,
"This website is blocked by company policy." Okay, all of that's great, but how do we get it to your
machines. It's simple.

First of all, since this is a collection of policies, I'm going to choose to export the whole
collection rather than a bunch of individual settings. I'm going to just right click over the
collection. I'm going to Export Collection as XML, and I'm going to save it right here on the
desktop as Endpoint Policy Manager Browser Router, PPBR, Save, and there it is. Okay, time to make
the MSI that will manage all of the settings that we were just discussing. We've got our XML file
exported, but what are we going to do with it, and how will it become an MSI file? We're going to
use our Endpoint Policy Manager Exporter Tool. It installs alongside the admin console MSI and can
be found under the Endpoint Policy Manager entry on your Start menu.

We're going to open it up, and we're going to Create a new MSI installer. Click Next, and we are
going to Add Existing Files and grab that XML file we just created. We see that it's installed for
the computer, since we made it on the computer side, and we're going to click Next. At this point,
you can give it a product name, you can specify a manufacturer, but we're just going to leave it as
is and choose Next. Now all we have to do is give the actual MSI file a name, and we'll just call it
Exported GPOs. Alright, and Save. Finish up there.

Alright. Here's where we'll do just a little bit of movie magic. I'm going to pause my video while I
get into my MEM admin center, and I'll come right back. Here we are. Now, notice that we already
have the client-side extension deployed as well as the license file. Remember, we looked at that at
the beginning of the video and saw that those two files already existed on my endpoint. Now we're
going to go ahead and add the MSI we just created. We'll click Add, then choose that MSI we just
created, select Open, and that's that. Now I'm going to do my movie magic thing again where I pause
my video while I get everything synced, and then I'll come right back.

We are back. Let's check it out. We now have the file on our endpoint as well as the license file
and the client-side extension. Okay, let's check this out. When I open up a link, let's notice that
it is going to open up in our current default browser, which is now Chrome. Now, let's go to
mozilla.org, and we see that Chrome closed and Firefox is open. Now, note that if the browser has
multiple tabs open, it will only close the one tab, not the whole browser. By way of example, let's
open up this new tab and go to microsoft.com. The tab closes, and Internet Explorer opens. Now let's
go to bing.com. See Internet Explorer close and Edge open. Finally, to close up this daisy chain,
let's go to google.com in Edge and watch it close and open up in Chrome. Just to circle back to that
Facebook block that I mentioned earlier, let's try to go to facebook.com. It says nope, "This
website is blocked by company policy."

There you have it. We set a default browser. We routed particular websites to particular browsers.
We even made sure to block Facebook. Then after wrapping that all up in an MSI, we delivered the
settings to our MDM enrolled non-domain joined machine. If this is of interest to you, sign up for
our webinar, and we'll get you started on your free trial right away. Thanks so much.


