---
title: "Manage Firefox Plug-ins Per Website"
description: "Manage Firefox Plug-ins Per Website"
sidebar_position: 40
---
# Manage Firefox Plug-ins Per Website

If you have plugins that you always want to allow, for a specific website, this is the how-to video
for you.

<iframe width="560" height="315" src="https://www.youtube.com/embed/fGhbeVQGPqI" title="Endpoint Policy Manager: Manage Firefox Plug-ins Per Website" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak: Manage Firefox Plug-ins Per Website

Jeremy Moskowitz: Hi. This is Jeremy Moskowitz, former Group Policy MVP and founder of PolicyPak
software. In this video, I'm going to show you how you can use the PolicyPak pack for Firefox to
ensure that any given plug-in will work for a specific website. So the challenge that was posed to
me was, "Hey, if I go to a particular website, like this plug-in is for Citrix Receiver and it's for
Firefox. And we want to say whenever we go to this particular website, we want to make sure that
even if a user clicks here and blocks the plug-in or after it gets installed it's not yet activated,
how do we ensure that that is always available and always accepted?"

Well, let me jump to the end of the story and show you how I was able to solve this problem. And
then we'll jump even further back and I will show you how I figured it out.

So let's go to the Group Policy object that I used to do this here. If we take a look inside – I'll
go ahead extend my screen and see if we can get everything on camera here. Alright, so if I take a
look at the permissions, okay – I know it's a little hard to read because it's italics, but what it
says here is – here's the website http, whatever the website is, comma, then the word plug-in,
colon, the short name of the plug-in and that plug in is NPICAN, allow. So that's going to marry the
NPICAN plug-in to this particular website and say "always allow it", provided, of course, it's
installed.

Now, the question is how did I learn this short name of NPICAN and that's what I'm going to show you
next. So over here on the machine here that has the plug-in and you've already got it set up the way
you want, you can use a utility called the browser for SQLite. And there's a variety pack of these
programs that will let you do this. I'm using the one if you go to Help/About, you can see I'm using
the DB Browser for SQLite. It's easy enough to find on SQLiteBrowser.org.

Anyway, the point is you're going to click "open database" here and go into the profile for Firefox.
Okay, you're going to dive all the way in. You're going to open the "permissions.sqlitedatabase".
When you click on the browse data button here and you're going to go for the table called
"mos.perms" for modern versions of Firefox. There it is. In the origin column you can see there's
the website and there's the plug-in. So my plug-in name is called plug-in, colon, NPICAN. So set
again. After you've got it set up perfectly, and you know what you want to do, you have to track
down this field, which is called plug-in, colon, NPICAN. And then you're going to use PolicyPak to
do the work for you. So in the "permissions" tab, set the webpage, comma, plug-in, colon, NPICAN,
comma, allow. And that will do it. And then every time users go to that webpage, that plug-in is
guaranteed to hit allow.

Hope that helps you out. And thanks again.


