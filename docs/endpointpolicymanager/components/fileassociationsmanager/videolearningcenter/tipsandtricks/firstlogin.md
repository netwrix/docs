---
title: "Endpoint Policy Manager File Associations Manager: Understanding the First Login"
description: "Endpoint Policy Manager File Associations Manager: Understanding the First Login"
sidebar_position: 50
---
# Endpoint Policy Manager File Associations Manager: Understanding the First Login

This isn't a problem with Endpoint Policy Manager File Associations Manager, but it's worth noting
the behavior of what occurs at very first login. Good news: There's a quick fix; just log out and
back on, and then.. boom. Problem solved for good!

<iframe width="560" height="315" src="https://www.youtube.com/embed/PH8zDNUE8XI" title="Endpoint Policy Manager File Associations Manager: Understanding the First Login" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

:::note
This is OLD behavior; Endpoint Policy Manager doesn't require logoff and back on for File
Associations unless the old method is specifically enabled. This would only be requested by Endpoint
Policy Manager support team.
:::


### Endpoint Policy Manager File Associations Manager: Understanding the First Login

Hi. This is Jeremy Moskowitz, former Group Policy MVP and Founder of Endpoint Policy Manager
Software. In a previous video, you saw me use "Endpoint Policy Manager File Associations Manager" to
make a couple of mappings. For instance, mapping "PDF to Acrobat" Reader, mapping "MP4 to VLC
Player," mapping the mailto protocol to Outlook ("Mail in Outlook)" and mapping "XML to Notepad++."

Now what I didn't show in the other video is what happens if a user has never logged on before that
is logging on for the very first time. I'm going to log on as a guy called "eastsalesuser7." Now
when somebody logs on for the very first time, it does take a little longer than usual.

This is not because of PolicyPak, of course. This is because the profile doesn't exist at all and
the Windows 10 profile is bigger than older profiles and, therefore, takes longer to log on. So I'll
pause the camera for a second, wait until this is done logging on, and then we'll continue our
little chat.

Okay, now that this user is fully logged on, they would have no documents because they have nothing.
Let's go ahead. I actually have a couple of documents on the server we can use to verify our example
here. I'm going to map a drive: "net use \* \dc2016share." In the "share" I have a couple of files,
for instance here, my "File Associations Examples."

Now remember, we did all the mapping already. We're logging on for the first time, so Group Policy
has kicked in. In fact, I could drag these to the desktop, which will show the same thing. Here's
what's strange about the very first time you log on. The very first time you log on and then you try
to double click on any of your items here, you still get this annoying popup. There's no way around
it. This is just the way that the darn thing works inside Microsoft's guts.

So you can see that a user will be prompted for this one time. They can even select the wrong thing,
and that's fine. Endpoint Policy Manager will kick in the second time around. For instance, if you
click on this one, it will open up Acrobat "Adobe Reader," and the file is presented.If we were to
click on the XML for Notepad++, we also get the same thing, which is pretty annoying.

Let's just close this for now, and then we'll go ahead and log off and log back on. If we click on
the movie file, however, we can see that works just fine. That one subscribed just perfectly. Then
let's take a look at the mailto one. The real point is what happens when you click on a mailto link.
That one worked just as expected.

So it's sort of a mixed bag at the first time you ever log on. Again, this is not a Endpoint Policy
Manager File Associations Manager problem. It's just we rely upon the guts of what's in the
operating system. But let's see what happens the second time they logon. If they go ahead and log
off here("Sign out") and now that this person has logged on before, let's log them on again. This is
the same guy who was just logged on ten seconds ago.

Now that we're all logged on for the second time, let's see the two problem areas. The first problem
area was the PDF, and no problems the second time. Okay, let's close that out. Now we'll go ahead
and try to run XML to open up Notepad++. What happens there? No problems the second time. And the
other ones worked the first time, so there's really no point in rechecking those.

The point of the story is, though it sometimes depends on the application, it may take two times for
that person to log off and log back on not to see those prompts anymore, so do keep that in mind as
you're using Endpoint Policy Manager File Associations Manager.

I hope this helps you out. Looking forward to getting you started real soon.


