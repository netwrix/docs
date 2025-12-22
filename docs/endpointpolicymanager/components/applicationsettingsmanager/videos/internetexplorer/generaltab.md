---
title: "Manage IE General tab"
description: "Manage IE General tab"
sidebar_position: 50
---
# Manage IE General tab

Netwrix Endpoint Policy Manager (formerly PolicyPak): Manage IE General tab

<iframe width="560" height="315" src="https://www.youtube.com/embed/tgnolJwqVlU?si=oryodA-yhjPPIsZC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager: Manage IE General tab

Hi. This is Jeremy Moskowitz. In this series of videos, we're learning how to manage Internet
Explorer using PolicyPak Application Manager.

The first thing we're going to do is the secondary start pages. We're going to pick our Pak, which
is the "PolicyPak for Microsoft Internet Explorer 8 and Later for Windows 7 and Later." That
encompasses all versions of Windows and Internet Explorer.

You can see here if we want to do primary and secondary start pages – by way of example,
"www.primary.com" – you can see that when we do something it underlines. Underline means go.

You could do the same thing here. If you want to make those your "Secondary Start Pages" or you want
to replace this with "https://www.policypak.com/," that's great. You can do that as well, and you
can see there that we're going to deliver those settings. You can also, when the policy no longer
applies, you can "Revert this policy setting to (empty string) when it is no longer applied."

Also, the other thing I wanted to mention here is that this particular set of values, the "Secondary
Start Pages," is always set to "REPLACE." If a user already has secondary start pages open, then no
matter what they have we're going to replace it.

While we're here, we can also right click upon the tab and "Disable whole tab in target
application." We'll go ahead and do that as well, and we'll click "OK."

With that in mind, we'll go over to each of these machines here and run "gpupdate." That's going to
get us the latest, greatest Group Policy settings. As soon as that's done, we'll go ahead and take a
look. This machine is a Windows 7 with Internet Explorer 8 on it, and the other machine is Windows
8.1 with Internet Explorer 11 on it.

You can see right there, primary and Google and PolicyPak are all listed there. If we were to go to
"Tools/Internet Options," you can see we've grayed out the "General" tab so now the user can't even
access that. If we go over to this other computer here, which is Internet Explorer 11, you can see
it does the exact same thing. We can go to "Internet Options," and the "General" tab is grayed out.

If we were to make this policy stop working by deleting it or whatnot or moving the user from Sales
to Marketing, the next time the user logs in or Group Policy refreshes – and I'll simulate that with
a "gpupdate" here and a "gpupdate" here – as soon as that occurs, those settings are peeled back and
will no longer apply, which is exactly what you want out of Group Policy.

We'll go ahead and run Internet Explorer 8 over here, and you can see it has removed the secondary
ones and left the primary. If we go back over to this machine here, same idea. Again, this Pak is
universal and should work for all operating systems and all versions of Internet Explorer.

Continue on with the next set of videos to learn more.

Thanks so much.


