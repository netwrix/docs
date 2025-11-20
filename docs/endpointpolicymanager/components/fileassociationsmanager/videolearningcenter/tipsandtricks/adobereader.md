---
title: "Force IE to use Adobe Reader for PDFs"
description: "Force IE to use Adobe Reader for PDFs"
sidebar_position: 10
---
# Force IE to use Adobe Reader for PDFs

Ever wished you could force Internet Explorer to open PDFs in Adobe Reader instead of the IE
browser? Using the Netwrix Endpoint Policy Manager (formerly PolicyPak) Application Manager and File
Associations Manager combo, you can.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Lyc83kCrtQw" title="Endpoint Policy Manager:  Force IE to user Adobe Reader for PDF's" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager: Force IE to user Adobe Reader for PDFs

Hello. This is Sal from Endpoint Policy Manager technical support. In this video, I'm going to show
you how you can set up your Internet browser. Whenever you open a PDF file, it should open in the
Adobe program. It should not open that into the Internet Explorer browser.

Right now, when we click on the link which has a PDF file, it straightaway gets us into the Internet
Explorer browser in a PDF reader. The reason we are seeing that is because if we go into "Manage
add-ons" and if we launch the add-ons "Run without permission," you'll see that "Adobe PDF Reader"
is installed and it is "Enabled." That's the thing which is preventing the Adobe program to launch
whenever there's a PDF file link.

We're going to demonstrate in the next part how we can make the Adobe program launch PDF files. I'll
go into my domain controller. The first thing I'm going to do is under "File Associations Manager
for Windows 10" under "PolicyPak" I'm going to configure a policy where it says whenever there's a
"pdf" "File Extension," open that into "Adobe Acrobat 2017."

Once that is configured, the next thing you want to do is go into the "Application Settings Manager"
and place in the class ID of Adobe PDF Reader add-on. The way you can extract that is if we go back
to the machine and launch IE again, go into "Manage add-ons," "Run without permission," and double
click on "Adobe PDF Reader." Just "Copy" that information, and then you can paste that into
"notepad." We just need to extract that information, "Class ID."

Once you have that on your clipboard, you can close everything out here. Going back to your domain
controller where you are going to configure the policy, go into the "Programs" tab of "Microsoft
Internet Explorer 8 and Later for Windows 7 and Later Settings" preconfigured Pak from Endpoint
Policy Manager. Then go into "Manage add-ons" and that's where you're going to put that Class ID for
Adobe PDF Reader add-on for IE and comma, space, "disable." That's all that you need to do.

Once it's there, you can go back to your machine and run GP Update ("gpupdate"). I'm going to do
that now. Once it's done, you can launch IE again. Just to verify, let's go into "Manage add-ons"
and "Run without permission" and you'll see that "Status" is now "Disabled" for "Adobe PDF Reader."
If now we click on the link to a PDF file, it will now launch that PDF file into the Adobe program
itself.

Okay, I hope it helps. Thank you.


