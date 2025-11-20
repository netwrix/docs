---
title: "Using File Association Manager in the Endpoint Policy Manager Cloud environment"
description: "Using File Association Manager in the Endpoint Policy Manager Cloud environment"
sidebar_position: 40
---
# Using File Association Manager in the Endpoint Policy Manager Cloud environment

When you don't have a "Fake DC" to create file association policies on-prem to export to the cloud,
Endpoint Policy Manager's File Association Manager Helper utility can be used to create the desired
associations on a sample workstation.

<iframe width="560" height="315" src="https://www.youtube.com/embed/DQt5Dkv2YBc" title="Using File Association Manager in the Endpoint Policy Manager Cloud environment" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is John at Endpoint Policy Manager, and in this video, we're going to take a look at
setting up File Association Manager in the cloud. I have here my non-domain joined machine here, and
we can see we have some common files. A PDF file that opens up in Edge. We have an mp4 file that
opens up in the Windows audio/video player, and a mail link that opens up in standard Windows mail.
We want to go ahead and change all of these. One of the problems is that File Association Manager by
default in the cloud is only associated with Microsoft applications, so if we go ahead and create a
New Policy – create a policy here and say we want to register PDFs to open up with Adobe Reader, you
can see we don't have the option here to do that. What we're going to have to do is we're going to
have to go to a machine that has the application installed on it, run the free utility that we give
you called File Association Manager Helper, and we'll import this configuration. I will Cancel this.

Let's start up that application. We want to Export registered applications, and we're going to look
for anything on this computer that opens up in PDF. There'll be readers, the first one – and this
can be any application, Chrome, AdobePRO if you had it. Click on Next. I like to include the icons
in here because why not. We'll call it adobe-pdf. Save and Finish. Okay, now we want to do the next
one. Here we're going to do the mp4 file. We'll apply the filter to see what we have that can open
it, and for this we want to use VLC media player. Browse, then we want to change the file name to
vlc-mp4 and Finish. Here it's created the xml for that particular file. Now we want to do one more.
This time, we're going to find a network protocol mailto. I don't have Outlook installed on here, so
what I'm going to do, I'm just going to choose something else. In this case, I'm just going to
choose Google Chrome, so it's going to open up in Google Chrome now. Click on Next, Browse,
chrome-mailto.

Alright, so now we have all our associations. I can cancel out of this, and I can go back to my
cloud interface. Let's create a new policy again, File Association Manager, New Policy, and I'm
going to go PDF to Adobe, look for PDFs. Again, doesn't show up here because it's not a Microsoft
application. It's a third-party app, so I'm going to import my adobe-pdf, click OK, and now I can
see it's here. It's available for me to select, so I'm going to select that, just confirm
everything's alright, and then click OK. Now we're going to Create a New Policy and import the mp4
to VLC. Type is mp4. Let's find an application. We'll Import vlc-mp4, OK, and there we go. Click OK.
There we have it. Now we'll do our final one, one more policy, Mailto to Chrome. This would normally
be something like Outlook or some other mail application you have. I don't have any installed in my
demo environment, so I'm just going to use this to show that it's actually making the change. This
is a Network Protocol, so we have to make the change here. Mailto, and let's find the applications,
so we'll import chrome-mailto, OK, successful. There we have it here, so we're going to click OK.
Then we have three policies.

Click OK to save these policy. Now we're going to minimize this. We're going to run cloudsync, and
you're going to see these applications change before your very eyes. There we go. Now we've got PDFs
opening up now in Adobe Reader. We've got this little video opening up in VLC now. You can see the
little pylon there. We've got our mailto link opening up in Chrome. It doesn't actually do anything
in Chrome, but the change was made. That's it. Thank you very much for watching.


