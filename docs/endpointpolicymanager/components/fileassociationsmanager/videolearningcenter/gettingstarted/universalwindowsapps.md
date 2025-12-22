---
title: "Associate Programs to Universal Windows Apps (Metro Apps)"
description: "Associate Programs to Universal Windows Apps (Metro Apps)"
sidebar_position: 30
---
# Associate Programs to Universal Windows Apps (Metro Apps)

Once you have your Windows Universal applications installed on an endpoint, how to manage the file
associations? Watch this video to make it 1-2-3 easy !

<iframe width="560" height="315" src="https://www.youtube.com/embed/7dxQa7n3ekY" title="Endpoint Policy Manager: Associate Programs to Universal Windows Apps (Metro Apps)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager: Associate Programs to Universal Windows Apps (Metro Apps)

Hi. This is Jeremy Moskowitz. In previous videos, you saw me use Endpoint Policy Manager File
Associations Manager to map a file extension like PDF over to Acrobat Reader ("Adobe Reader") or an
MP4 over to "VLC media player." This is a different video. What I'm doing here is demonstrating here
how any user or you can get a universal Windows application like this one, "Metro Media Player Pro,"
installed and when a user double clicks on an MP4 they still get prompted and don't get what they
want.

What I'm going to show you is how to use Endpoint Policy Manager File Associations Manager so that
it's guaranteed to hit the actual application you want, whether that's "Metro Media Player Pro" or
if it's "VLC media player" or whatever. The point is that in this video, I'm going to show you how
to dictate it to a Windows universal application, in fact, not just MP4 but all of the Windows 10
movie types. I'll show you how to do that in one fell swoop. It's very easy.

To get started, your endpoint has to have the application already installed. We're not going to do
that here. I'm going to assume your endpoint already has that. The other key takeaway is that your
machine with the GPMC installed also needs to have that application.

This is you on your machine. If I go to the Windows "Store" here, I'm going to install that "Metro
Media Player Pro." I'll go ahead and wait for this to finish. Now that that's done, we don't even
have to "Launch" it on our machine. That's not really what we need to do here.

What we'll do is we'll just go to our "East Sales Desktops" and "Create a GPO in this domain, and
link it here." We'll call this "PPFAM Windows 10 Movie Type to MMPP." Right click and click "Edit"
here. We'll dive down under computer side, "PolicyPak/File Associations Manager." We'll right click,
"Add/New Policy."

We'll call this "Windows 10 Media Pro for MP4." I'm going to pick the "Windows 10 Category." This is
where we get the dropdown of the entire category. I'm going to pick "Video Player" here. I'm going
to use a "Registered application" because this machine and that machine both have the same
application. I'll pick "Select Program" here.

You can pick "Universal Windows Platform," and you're just going to look for that application. There
it is: "Metro Media Player Pro." As soon as you find it, you can click "OK" here. You can see we
automatically put in the "Associated Program" ID and the "Application Name." It's as simple as that.

Now we'll go over to our endpoint here. When we run GP Update ("gpupdate"), we are not going to see
this instantly take effect. You need to run GP Update and then after GP Update is performed, I'll
log off and log back on. Then you'll see that this application which right this second doesn't know
what to do, once we log back on we'll see that it's all cleared up and should run in the program
that we asked for.

Let's go ahead and close that out. We'll then go ahead and log off ("Sign out"), and we'll go ahead
and log back on. Here we are all logged on. You can even see if you hover over it, it says the video
name will now fire off in "Metro Media Player Pro." There we go. Just double click, it launches and
plays and the video is nice and happy.

Another way to see this is if we were to go to the "Settings" app here and if were to go to click on
"Apps" and click on "Default apps," what we'll see here is that we've now associated the thing we
wanted ("Metro Media Player Pro") as the default "Video player."

If a user were to try to change this during the session, that works fine which is great. But when
the user logs off ("Sign out") and logs back on and now it's time to run it again, it's back
associated with what we had them do.

With that in mind, I hope you get to try out Endpoint Policy Manager File Associations Manager and
get started with it right away. If you're ready to get started, join us for a webinar and we'll hand
over the bits and get started as soon as you can.

Thanks.


