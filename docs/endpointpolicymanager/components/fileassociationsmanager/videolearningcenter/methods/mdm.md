---
title: "Managing File Associations with an MDM service"
description: "Managing File Associations with an MDM service"
sidebar_position: 10
---
# Managing File Associations with an MDM service

Got PDF? And don't want Edge to open it? Or MP4, and don't want the built-in movie player to open
it? How about protocols like MAILTO: .. want to map those to Outlook? It's drop-dead easy.. with
Netwrix Endpoint Policy Manager (formerly PolicyPak) File Associations Manager. Trying to manage
with "Set a default associations configuration" is for the birds, and isn't flexible. Instead,
manage it quickly using Group Policy, and Endpoint Policy Manager.

<iframe width="560" height="315" src="https://www.youtube.com/embed/7OM2EJkUvsI" title="Endpoint Policy Manager: File Associations Manager ... and Microsoft Endpoint Manager (or any MDM service)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

In a previous video, you saw me send file associations down to the right applications at the right
time for user side and computers using Group Policy. In this video, I'm going to show you how to do
it using your MDM service. Once you've got the file associations you want locked and loaded here in
the Group Policy editor, you're going to export the collection as an XML file. Then I'm going to
just drop it right on the desktop here.

I already have one – no, I guess I don't. I'll do this PPFAM-EXPORT1. Once you've got that, the next
thing you're going to do is wrap it up into an MSI. To get ready to take anything in Endpoint Policy
Manager land or Group Policy and get it ready for MDM, first you have to get those items as an XML.

Then we're going to use our Endpoint Policy Manager exporter utility, as you can see here. We're
going to Create a New MSI Installer. Then we're going to add those files after they've been dropped
down to XML. Then we're going to install them on the computer side.

Typically you want all the settings to hit everybody on the computer, so we're going to install on
the computer side. Then we're going to save this out as a MSI file. There it is, and it's ready to
go.

Next step is to get into Microsoft Endpoint Manager or your MDM service. In this example I've
already got the Client-Side Extension being deployed by Microsoft Endpoint Manager. I've already got
the Endpoint Policy Manager license by Endpoint Manager.

What's next? You need to add the MSI file that you just exported and it's all wrapped up and ready
to go. Now it's time to go over to the client. Microsoft Endpoint Manager or your MDM service is
deploying all three of these things. They're assigned and you're ready to rock.

Let's go over to the endpoint, and it's time to see the result. Here we are on the client. At this
point we're going to just take Microsoft Endpoint Manager or any MDM out of the equation, and you
can see what do we have? We've got Edge currently being the PDF viewer.

We have the inbox video player and still asking questions, how do you want to open files? This is
not what you want to have when the user is on the road. Same thing for mail to; when they
double-click it, they're going to get the inbox Windows mailer. Not what you want. You don't want
these things.

What we're going to do instead is we're going to use MDM to deploy the wrapped up Endpoint Policy
Manager directives. We're going to cut out the middleman for this example. We're going to
double-click on the MSI. You're using your imagination here.

This is where MEM or your MDM service would do the work. Just wait a couple seconds here. Just like
that Endpoint Policy Manager does the magic, and you can see this is now associated with PDF. If we
double-click it, what do we get? You get Adobe Reader pop up, just the way we expect. The document
loads perfectly in Acrobat Reader.

If we go ahead and double-click on this, what do we see? Instead of the inbox video player, we get
our video player that we want, which is VLC Media Player. There we go. There's our happy little
video.

If we double-click on mail to, instead of getting the inbox mailer, we get the mailer of our choice.
I don't have Outlook. I use this thing called Claws Mail instead. You can see there's Claws Mail
running the first time. We're happy campers just like that.

If you want to take your file associations on the road with you to your non domain-joined machines,
you can do it with Endpoint Policy Manager File Associations Manager and your MDM service like
Microsoft Endpoint Manager. Hope this video helps you out. Looking forward to getting you started
real soon. Take care.


