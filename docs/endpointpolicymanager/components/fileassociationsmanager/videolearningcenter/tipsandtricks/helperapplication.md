---
title: "Endpoint Policy Manager File Associations Manager: Helper Application"
description: "Endpoint Policy Manager File Associations Manager: Helper Application"
sidebar_position: 60
---
# Endpoint Policy Manager File Associations Manager: Helper Application

If you have an application you simply cannot install on your own Management Station, then use the
included PPFAM Helper utility to capture the association, then bring the XML file over to your
machine.

<iframe width="560" height="315" src="https://www.youtube.com/embed/0cL1kLhb1K8" title="PPFAM: Helper Application" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager File Associations Manager: Helper Application

Hi. This is Jeremy Moskowitz. In this video, I'm going to show you how you can use the Endpoint
Policy Manager File Associations Manager Helper program if you're in a situation where you only have
a single or handful of machines that have an application installed and you can't get it installed on
your own machine.

In previous examples you saw, and in fact I said quite a bit, Endpoint Policy Manager File
Associations Manager is best when your machine has the same applications installed as your endpoint
machine. Now, there are going to be sometimes when you can't do that. Maybe there's a sales
application or some marketing thing or some wacky application that you cannot get installed on your
machine but yet you need to make the file associations happen for it.

We have a way to do that. It's called the File Associations Manager Helper program. In this example,
I'm going to use "WinRAR." I'm going to pretend for a second that the end user has WinRAR installed
but you can't get WinRAR installed on your machine for whatever reason. Again, we're going to
pretend that this is some kind of wacky application you can't get installed.

On the download, we have this thing in the "Endpoint Policy Manager Extras" folder called "Endpoint
Policy Manager File Associations Manager Helper" "Application." Now don't click on the ".exe" which
is really an XML file. We'll go ahead and double click on that there, and this is the application to
run. We'll go ahead and click "Next."

What you're after here is you're going to find the application by extension, like "RAR" is a
particular thing for WinRAR. You can "Apply Filter" and find "WinRAR" right here because it's on the
endpoint machine. We'll go ahead and click "Next."

You have a couple choices. One is "Include icons in file (Can dramatically increase file size)." I
say go for it because I think there's very little downside in doing that even though the file size
here for the XML is a little bit bigger.

You can "Show file in folder after finished" and you can also "Open XML in Notepad when save is
complete." I'm going to "Browse" and put this in "c:temp" and then I'll call this "RAR-OUT.xml."
"Yes," I'll create it. I'll go ahead and click "Finish" and here's the file.

What we're saying is we want to take the "RAR" "Type" and associate it with "WinRAR" that's on this
machine, and here's the icon. Now the hard part is getting it over to your machine. I'm going to do
a little magic, and I'm going to have this over on my machine in two shakes of a lamb's tail.

Okay, so here is my machine, and here's the "RAR-OUT" file. Again, this is going to help me make
that association. What I'll do is go ahead and create a new GPO or use an existing GPO. It doesn't
really matter. I'll say "PPFAM Use Mapping from XML file."

Now this is a little bit special, this XML file, because you might be familiar with Endpoint Policy
Manager export and import routines. You can just click on computer side, "PolicyPak" here and click
on "File Associations Manager." You would think you could just right click here or "Import
Collection." But it's not a collection. Actually, you have to add your own item first.

So we're going to click "Add/New Policy" here and we'll call this "WinRAR to RAR." You'll type in
"RAR" here. Then you're going to "Select Program." But remember, on your machine you don't have
WinRAR. This is where you "Import." We'll go ahead and click "Import/From XML file." You'll pick the
"RAR-OUT" file you had earlier. There's the icon and so on. You'll double click it, and at this
point you have it locked and loaded and you're ready to go.

That's it. This is how you would take an existing machine that had something you couldn't get on
your machine with the GPMC and you can export an entry and then you can add it in manually using the
Endpoint Policy Manager MMC console.

I hope this helps you out. If you're looking to get started, we're here to help you get started too.
Just join us for the webinar and see you onboard.

Thanks.


