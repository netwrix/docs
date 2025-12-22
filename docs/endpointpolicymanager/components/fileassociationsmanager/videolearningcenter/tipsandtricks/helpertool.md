---
title: "File Associations Manager Helper Tool"
description: "File Associations Manager Helper Tool"
sidebar_position: 40
---
# File Associations Manager Helper Tool

What happens if you're using the Netwrix Endpoint Policy Manager (formerly PolicyPak) File
Associations Manager, and you want to associate a file to a program that's not on your management
station? Use the File Associations Manager Helper Tool, then use the resulting XML file to manage
File Associations on your MDM enrolled machine like a boss!

<iframe width="560" height="315" src="https://www.youtube.com/embed/4lutKddiiHs" title="Endpoint Policy Manager MDM: File Associations Manager Helper Tool" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager MDM: File Associations Manager Helper Tool

Hi, this is Whitney with Endpoint Policy Manager Software. In the last video, we learned how to
associate file extensions with applications that were located on both the endpoint and the
management station. But what are you going to do if you have an application on your endpoint that
you want to associate a file extension with, but you can't get that application on your management
station? Well, we have a little helper utility that will help you take care of that.

However, just as a refresher, in order for anything File Associations Manager to work, your endpoint
has to be domain joined. Right here, you can see I am both enrolled in an AirWatch MDM service
("Connected to AirWatchMDM MDM") and I am domain joined as well ("Connected to FABRIKAM AD domain").
Those are very important things for you to know. It has to be domain joined, and it's a self-imposed
Windows limitation that we just can't get around. So that's something you just need to know about.

The next thing we're going to notice is, once again as you saw in the last video, we do have the
"Endpoint Policy Manager Client-Side Extension" and the "Endpoint Policy Manager MDM Licenses for
PolicyPak" installed on this machine. We deployed those using AirWatch, and that just needs to be
there before any MDM directive is going to work. Now I mentioned AirWatch. It's the one that I'm
using, but you can use any MDM solution that you have as this will work with any of them.

Let's close this down. Let's notice I have a zip file right here. Right now it's associated with
WinZip. When I open it up, of course here we go, it pops open in "WinZip." However, what if I want
to associate it with "WinRAR"?

Well, I don't have WinRAR on my management station. In order to fix that, we're going to go into the
"Endpoint Policy Manager Bits" folder. We're going to choose "Endpoint Policy Manager Extras," and
we're going to go look at the "Endpoint Policy Manager File Associations Manager Helper." Now make
sure you get the actual "Application" instead of the "exe.config."

We're going to open this up. Basically, what we're going to do is export the information about the
particular application as an XML file. So we're going to "Export registered applications," and we're
going to click "Next."

It asks us what extension are we looking to associate with an application, so we're going to go with
"zip." We're going to "Apply Filter." When we do that, it's going to show us everything that can
handle zip files. In this case, I want to use "WinRAR," so I'll click "Next."

It asks if we want to "Include icons in file (Can dramatically increase file size)." It's not really
that big a deal, so I recommend going ahead and checking that box. We're going to save it somewhere.
Since my machine is actually domain joined, I'm going to save it to my "SHARE" folder so that I can
access it on my management station. I'm going to save it there. I'm just going to call it "WinRAR"
and "Save" it. Let's create it, "Yes." "Finish" up, and that's that.

Now we're going to go back to our management station. Actually, in that same GPO that we created in
the last video, I'm going to add the WinRAR settings or associations. Let's go ahead and "Edit."
Let's go ahead and go back to where we were before. We'll go back to that same collection. We'll
choose "File Associations Manager for Windows 10" and get inside here.

We're going to "ADD NEW POLICY" just like we did before. I want "Zip to WinRAR." That is a "File
Type" and the "File Extension" is "zip." I'm going to go to "Select Program." Now what it's going to
do is the same thing it did before where it's looking on my management station to see what I have
that can handle zip files.

Well, I don't actually want to use either one of these. I want to use my WinRAR. So I'm going to
"Import" from an XML file. I'm going to go to my "SHARE" folder here and use that XML that we
exported just a couple of minutes ago. Now it's going to pop up and show me, there we go, we have
that "WinRAR." I'll tell it "OK," and that's that.

What we're going to need to do is the same thing we did in that last video. We're going to "Export
Collection as XML." I'm going to put this on the "Desktop." I'm going to call it "FAM Settings2."
We'll "Save" that. We'll close all this out.

Let's go to our exporter tool which installs alongside your admin console MSI. We'll go to the
"Endpoint Policy Manager Exporter Tool." In this case, I don't actually want to "Create a new MSI
installer." I want to modify the previous one. So I'm going to "Open an existing MSI installer
previously generated by this tool for editing."

I'll choose "FAM Settings." We're going to get rid of this old XML, and we're going to add some new.
We'll add the "FAM Settings2" there. Once again, we'll "Install For" the "Computer" with a "Target"
of "All Users" and we'll choose "Next." It versions it for us, so you don't have to do that
yourself. We'll leave it with the same "Product Name." We'll go ahead and click "Next" and "Save"
it. There we go.

The reason we're doing it this way rather than deploying a completely new MSI is because the way
that it's set up, it will actually uninstall the old one to then install the new one. So it just
upgrades it. So we will go ahead and "Finish" up here.

Now this is our new MSI that we just updated. We'll do like we did before where I'm going to pause
the video while I get it uploaded to my MDM console and then get it deployed. Then we'll come right
back once you can see the results. We'll be right back.

And we're back. You'll note that we still have the "FAM Settings" installed here as you saw before,
but note this time it's "Version" "1.0.1" so we know that's the upgraded version. However, we notice
this icon hasn't changed yet. The reason is because we need to log out and log back on before these
settings will take effect. We're going to go ahead and do that, and we'll come right back in just a
moment when it's done.

All right, and we're all logged back in. You can see that did indeed take effect once we logged off
and logged back on. So you can see it, let me just go ahead and open this up just to put a fine
point on it. There we go. We have this opening up in "WinRAR" just like we told it to.

That's how you're going to fix the problem of having an application on your endpoint that you just
can't get on your management station but you still want to associate files to it.

Thanks for watching, and we'll see you in the next video.


