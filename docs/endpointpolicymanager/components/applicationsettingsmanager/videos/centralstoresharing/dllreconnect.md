---
title: "Reconnecting DLLs"
description: "Reconnecting DLLs"
sidebar_position: 60
---
# Reconnecting DLLs

This is an advancedNetwrix Endpoint Policy Manager (formerly PolicyPak) topic showing how to
reconnect a DLL if the inner name was changed, and someone deleted the existing DLL.

<iframe width="560" height="315" src="https://www.youtube.com/embed/unz-8F9ohWo" title="Endpoint Policy Manager: Reconnecting DLLs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak: Reconnecting DLLs video transcript

Hi, everyone. This is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software.
Here I'm going to show you an advanced case of if somebody makes a mistake and deletes something
that they shouldn't have. Here's the lashup.

Here you are. You're in the "Group Policy Objects" node. You've got a particular Group Policy Object
here. You can see that inside there, there is a bunch of "WinZip" "PolicyPak Reporting Data." That's
all great.

You go ahead and you click "Edit…" here because you might want to make a change. You dive down under
"PolicyPak/Applications" and you get this message that says, "DLL not found." What it's basically
saying is that you don't have the Pak locally, and it's also not in the Central Store. You need to
get that Pak into the Central Store or locally.

You've seen me do this in other videos before, but let's do it again. Here's the Pak itself, and
this one happens to be a preconfigured Pak. I happen to also have the folder for the "PolicyPak
Central Store" here. I'm just going to "Copy here" that existing DLL into the Central Store. In
doing so here, the very next time I click "Edit…" on that Group Policy Object, I will have cleared
up the problem. In fact, you can see. It connects instantly and says that it's there in "Central
storage."

That's the easy case. Let's go ahead and review the slightly harder case. Let me go ahead and delete
this guy from the Central Store here. Now I'm just going to prove one more time that I'm going to
reproduce that error, just to show you that it's in fact a problem condition right now. There you
go, "DLL not found."

Here's where it gets a little harder. Let's say somebody has gone through and they've deleted the
Pak locally and also in the Central Store. Then somebody goes and in the Design Studio they change
the inner name, the "Project name." We'll call this "WinZip 14 and 15 and Newer" or something like
that. We're changing the internal project name, and we go ahead and we "Save pXML and Compile" it
even if it's the same DLL name, just by changing the inner project name.

That's done now. By doing so, that will show up by default in
"`C:Program FilesPolicyPakExtensions`." There it is. That's the newly compiled one. You think all is
well and good, so you go over here and you click on "\_UAT – WinZip Test" again, click "Edit…," dive
down under "PolicyPak/Applications" and it still says "DLL not found."

The reason why is that you can see here the name doesn't match up with what is in either the local
store or the Central Store, so the inner project name of the PolicyPak is reallyimportant. This was
a problem because, and this is the way it is, up until this point there was no way to reconnect to
that DLL, but there is now.

What you can do is simply right click and "Reconnect PolicyPak DLL," and look at that. We found it
instantly in "Local storage," and you saw that it automatically updated it just like that and it's
ready to go. It even changed the name. You can see that the name is now changed to that new name I
just gave it. You can put it either locally or in the Central Store.

The point of the story is that you can right click and "Reconnect PolicyPak DLL," and it will
instantly reconnect it. If it's not sure which one to use, it will prompt you for a list of DLLs. Be
sure to connect to the right one, and you'll be in the club. That's how you can reconnect to a DLL
if you have "DLL not found" under your extension storage.

I hope that was helpful for you, and I'll talk to you soon.


