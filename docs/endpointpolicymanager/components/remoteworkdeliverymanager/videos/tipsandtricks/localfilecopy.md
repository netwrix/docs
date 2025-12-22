---
title: "Endpoint Policy Manager: Remote Work Delivery Manager Local File Copy Magic"
description: "Endpoint Policy Manager: Remote Work Delivery Manager Local File Copy Magic"
sidebar_position: 10
---
# Endpoint Policy Manager: Remote Work Delivery Manager Local File Copy Magic

Want to copy files from the same box to a different source? Here's the magic unlock on how to
hand-edit the XML to do that.

<iframe width="560" height="315" src="https://www.youtube.com/embed/u-5BzO1F3QQ" title="Endpoint Policy Manager: Remote Work Delivery Manager Local File Copy Magic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy, and in this video, I'm going to show you how you can take files that live in a
source folder locally and copy them to another local source folder using them Netwrix Endpoint
Policy Manager (formerly PolicyPak) Remote Work Delivery Manager. This isn't something that's
directly supported, so I'm going to show you how to go a little off the beaten path here. Here's my
folder, C:\PDF-SOURCE, and what I want to do is I want to magically automatically copy that to a
folder called the PDF-DEST or something like that on the same machine. There are a lot of uses for
this. I'm just showing you the hard part, which is editing the file.

What we'll do is well create a New Standard Policy here, and I'm going to copy multiple files from
the same directory. If I were to try to put in c:\pdf-source here and go to Next, it doesn't let you
do that. It tells you, "Specified path is not a UNC path. You can only use UNC paths. Don't let that
throw you. What you'll do is you'll just put in a bunch of junk in here". It's fine. Don't worry.
We'll get to that in a minute. Put in two back slashes, a fake server, and a fake path, and if you
want to, you can also put the file names that you want in here like \*.pdf. If you go to Preview,
not going to work because we're not going to be able to find that folder, and it's going to time
out, and it's going to roll over and die. That's expected, right?

Now that that's complete, what we'll do is we'll go ahead and click Next, so we're just staging this
part, and then what we'll do is we'll put the directory in c:\PDF-DEST. If this were any kind of
drive letter at all, that would work as well, like a map drive, anything like that. You can go ahead
and put that there as your destination. Now I'm going to Access the source and destination as the
User. If you have something systemy you want to do, you can Access the source as the Computer,
whatever. These are available to you. We have some other videos on this topic. Then I want to Copy
and keep files updated, and then I want to do this Always or Once. I'll just do it Once for now.
Then I don't want to do a Post-copy action or a Revert action. I just want to show you what I'm
doing here.

The question is how do you fix this problem. It's not so bad. You just take this file, drag it to
the desktop, and I'm going to right click and Edit it with Notepad++. What you're looking for is
your source folder that had the garbage path in it. This will work if you just type in
c:\PDF-SOURCE. That's what I called it, right? Let me take a look and make sure, PDF-SOURCE, yeah.
This will work. We'll go ahead and save that file out here. I'll go ahead and close that out. Save
that guy. Go ahead and close this out.

Alright, so what we'll do now is we'll delete this item that's in the Editor and drag and drop our
newly crafted item in here. The Editor's going to have a little bit of a canary. It's like you can't
do this thing. Editor doesn't know what the client-side extension can do, so this is perfectly
valid, it just won't let you do it in the Editor, so you have to work around the Editor for this.
Let's go ahead and see this work. If we take a look, here's my PDF-SOURCE. I don't have a PDF-DEST
folder, so if I were to run gpupdate here, what we should see is the PDF-DEST get created
immediately, and then it has to churn through the gears of Remote Work Delivery Manager because it
uses the bits protocol. Sometimes files can take a minute or two to copy over, but you can see hey,
there's the folder. I'll just refresh there, so there's PDF-DEST and bang, copied all of our files
in just like that. If you want to copy local to local, you're welcome to do so. You just have to do
a little bit of hand editing there as well.

Let me show you another little magic trick here. Let's pretend you wanted to take all the PDF files
on desktop and copy it over to another destination. How can you do that? You could right click Add a
New Standard Policy here. We'll copy multiple files from the same directory, and this says hey,
you've got to be using a UNC path. Not if you know the magic trick. The magic trick is that I'm
going to put in a variable, %userprofile%\desktop\ here. This will be accepted. It tells you. It
says there's a bit of a warning here, but it does let you move on, so if you want to do \*.pdf of
all the things on the desktop and you wanted to copy that to c:\DEST2 – I think I might already have
a DEST2, so there's DEST2B here, and I'll just copy them both as User, and I'll let that go ahead
and sail through, bing, bing, bing, bing, bing.

Alright. Now that I've got that guy ready to go, let's take a look. If I were to take a look at my
folder structure here, I have a DEST2, but I don't have a DEST2B. I was doing a little practice run
before I did the video here. We'll run gpupdate. We force fed it the special variables here, and
we're not going to copy everything on the desktop, no, no, no, just the PDFs, and we're going to get
those into the DEST2 folder. Let's go ahead and see that. If we take a look here – DEST2B rather.
There it is, DEST2B, and then if we were to take a look at what's inside here, hey look at that.
It's all of our PDFs.

These are some magic tricks in order to copy files locally. Not everything is supported. By way of
example, you can't change the XML such that we will magically go to a server. That's not supported.
You can't just change the destination path to something like \\server\share\123. That's not
permitted. You can trick it locally here with the sources, but you can't trick the destination. That
is not permitted by Remote Work Delivery Manager. Hope this video helps you out, and looking forward
to seeing you in the inside. Take care.


