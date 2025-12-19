---
title: "Manage Firefox Bookmarks"
description: "Manage Firefox Bookmarks"
sidebar_position: 50
---
# Manage Firefox Bookmarks

With Netwrix Endpoint Policy Manager (formerly PolicyPak) you can add or remove bookmarks to the
menus or the toolbar. Watch this video to see exactly how to do it.

<iframe width="560" height="315" src="https://www.youtube.com/embed/JGuMqQXqNcY?si=94_raIJ6JLqNTKXG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager: Manage Firefox Bookmarks

Hi. This is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software. In this
video, we're going to learn how to manage Firefox bookmarks using PolicyPak.

There are two kinds of bookmarks. One is here in the menu system. Then there's also a thing called
the "Bookmarks Toolbar" – so two kinds of bookmarks. With PolicyPak, you can either add or remove
stuff. We're going to do both things.

Let's take a look over at our bookmarks here. Maybe you don't want the link for "About Us" here in
Mozilla Firefox land, but you do want to add your own folders and put your own stuff in there. Maybe
you also want to put some stuff on the menu bar.

Let's see how quickly and easily we can do that using PolicyPak. You can do this either on the user
or computer side. It doesn't matter. I'm just going to do it on the user side. I'm going to right
click, "Create a GPO in this domain, and link it here" against my "East Sales Users" and call this
"Manage Firefox Bookmarks."

Right click, click "Edit" here, and we'll dive down under user side
"PolicyPak/Applications/New/Application" and pick "PolicyPak for Mozilla Firefox 23.0." This says
"23.0," but really we mean 23 and later. You can see that we've got pretty much all the big hitters
for Firefox here.

Let's just set the "Home Page" anyway just for fun just so we can also see that working. What we're
interested in here mostly is the "Bookmarks." Let's go ahead and take a look at our format here.
You're going to specify that name of the item, then where the URL goes to, and either is it on the
"toolbar" or is it in the "menu" system, and do you want to "add" or do you want to "remove" it.

If we wanted to add, for instance, PolicyPak within a folder, you would do that. Let's call it
"Folder123\PolicyPak." Now the item "PolicyPak" will live in a folder that we'll create for you
called "Folder123." We'll give it the URL as such. Actually, I want to put this on the "menu" here,
and I want to "add" that. That's the first thing I want to do.

The second thing I want to do – and I have this as one of the pre-canned examples here – is also a
menu item called "Mozilla Firefox\About Us." It has to match perfectly. If you put a dash or an
underscore or something weird in there and not a space, it doesn't match perfectly. The whole thing
– all of it – has to match perfectly. Then if it's in the "menu" system, we'll "remove" it.

While we're here as well, why don't we go ahead and on the toolbar we'll "add" "MSDN" right on the
"toolbar" right there. Then we'll also "add" "Google" right on the "toolbar" too. You can see how
the syntax works. It's pretty easy to follow. Just follow the examples we've given you.

That's it. We'll click "OK" here, go back over here, and we'll run a simple "gpupdate" here. We'll
wait for this to occur, which only takes a moment or so. Now that that's finished, let's close that
out and let's take a look inside "Mozilla Firefox."

If we go over to the bookmarks, you can see there's "Folder123" with "PolicyPak" in it. You can see
if I hover over it, it has the URL. If I look at "Mozilla Firefox," "About Us" has been removed. If
we look here on the toolbar, you can see that "MSDN" and "Google" have been delivered.

It's just that simple. If you want to manipulate Firefox settings, such as the bookmarks, PolicyPak
is the way for you to do that.

Thanks very much, and we'll talk to you soon.


