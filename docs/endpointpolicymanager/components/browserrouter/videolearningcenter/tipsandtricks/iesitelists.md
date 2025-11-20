---
title: "Internet Explorer to Endpoint Policy Manager Browser Router Site lists"
description: "Internet Explorer to Endpoint Policy Manager Browser Router Site lists"
sidebar_position: 70
---
# Internet Explorer to Endpoint Policy Manager Browser Router Site lists

Use the in-the-box converter utility to take your existing IE Enterprise Site list files and
immediately use them with Browser Router.

<iframe width="560" height="315" src="https://www.youtube.com/embed/UNvGz-fdJ3M" title="Endpoint Policy Manager: Internet Explorer to Endpoint Policy Manager Browser Router Site lists" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager:  Internet Explorer to Endpoint Policy Manager Browser Router Site lists

Hi. This is Jeremy Moskowitz, former 15-year Group Policy MVP and Founder of Netwrix Endpoint Policy
Manager (formerly PolicyPak) Software. In this video, I'm going to show you how you can take a
Microsoft Enterprise Mode Internet Explorer Site List and quickly convert it to be used in Endpoint
Policy Manager Browser Router.

Here is my "EMIE" file, and you can see the extension is "emie2." Microsoft has a tool to create
these. You might have already done that, and that's sort of the point here. You might have this
list, and now you're going to use Browser Router. What are you going to do?

All we're going to do is "Create a GPO in this domain, and link it here," and I'll call this "GPO
from IE LIST" and we'll click "Edit." We have an interface right inside Browser Router. You can do
this on the user or the computer side.

We'll go to "PolicyPak/Browser Router," right click, "Add." Now instead of creating a "New
Collection" or a "New Policy" singular, you're going to simply create it "From Enterprise Mode Site
List" and you're going to point to that file. I've got that file in "XMLs of all kinds" right there.
There's my little guy right there. You can give it a "New collection" name right there.

We've parsed that file, created a little folder for you, and you can see it does the mapping. Let's
go through these one-by-one and take a look what's happened in the file versus what we did. One of
them says "Open fabrikam.com/products in IE7." Okay, well, there we go: "fabrikam.com/products" open
up in "IE7" "compat-mode."

Okay, well, let's take a look. Did we actually do that? Yeah. You can see, there's the "Url:
fabrikam.com/products." We're going to "Internet Explorer." And then we're opening it up in the
browser called "IE7 Document Mode." We did just that.

If we were to take a look at the next one, the next one is open up "fabrikam.com" in "IE8Enterprise"
mode. Let's see if we do that. And we do. There you go. So you can see we're doing what you said to
do. And if you didn't say anything, for instance, just open up something in "IE," that's fine. We'll
parse that and set it for "Internet Explorer." And we also honor if you decide you want to open up
something particularly in "Edge." You can see this file is saying whenever I go to "www.cpandl.com,"
then go to "Edge." It's just that simple.

So with that in mind, if you have an existing Internet Explorer Site List file and you want to start
using Browser Router right away, you don't have to hand convert it over. We'll do that hard work for
you. There you go. Hope that helps you out.

Thank you very much. Looking forward to getting you started.


