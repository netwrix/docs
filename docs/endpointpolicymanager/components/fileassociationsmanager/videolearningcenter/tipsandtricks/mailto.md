---
title: "Endpoint Policy Manager: How to get mailto: to open in Office 365"
description: "Endpoint Policy Manager: How to get mailto: to open in Office 365"
sidebar_position: 20
---
# Endpoint Policy Manager: How to get mailto: to open in Office 365

Use Endpoint Policy Manager File Associations Manager to use OWA URL links to compose message
directly in Office 365. When done OWA will be the default handler for the mailto protocol in
Windows, so that clicking an email address will open the OWA "Compose message" window. Hope this
helps you out.

<iframe width="560" height="315" src="https://www.youtube.com/embed/3N38DsZY-mo" title="Endpoint Policy Manager: How to get mailto: to open in Office 365" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Code:

```
`@echo off
set address=%1
set address=%address:~7%
rundll32 URL.DLL,FileProtocolHandler "https://outlook.office.com/?path=/mail/action/compose&to=%address%"`
```

### How to get mailto: to open in Office 365

Hi. This is Jeremy Moskowitz. In this video, I'm going to show you how you can make your mailto
handler actually open up a web browser such that it will launch Outlook web access.

Let me show used to the result of what I put together. When you go ahead and click on a mailto like,
it says "Do you want to open this link?" What's it going to do? It's going to open up your default
browser and, provided you've already logged on to Office 365, it's then going to automatically send
that mail to that person. It's just that simple.

How did I perform this magic here? The first thing is that I have a little batch file. I put it in
"temp," and I just called it "`a1.bat`." Let me show you what it does here. The first thing it does
is that it silences it as much as it can ("@echo off").

Then it says "set address=%1" which means it's going to take in the item that you're passing. So
that would be the address: "mailto:jeremym@policypak.com." Then what it does is removes the first
seven characters which would be "mailto:" and then what we do is that we run the default browser
against the special link in "https://outlook.office.com" and then we put in "`%address%`" which is
the address without the "mailto:".

The net result, as you can see, is that when you click it and click "Yes" you do get that very brief
flash of the DOS prompt, but the net result is that you get exactly what you're after here.

Now let me show you how I set this up in File Associations Manager in Endpoint Policy Manager land.
You have to do this on the computer side in "File Associations Manager." Then here is how to do it.
You give it any "Policy Name" you want. You use the "Network Protocol." You have to use "MAILTO."

Then we use a "Custom application." I'm going to say that my custom application is where that batch
file is: "`c:\temp\a1.bat`." Then you're going to pass it "%1." The "Application Name" itself
doesn't really matter, and you can select any "Application Icon." That part is not of real concern.
So this is the "Associated Program" and that is the "Command Line." That's all there is to it.

Once you've done that, you're off to the races. It will automatically associate correctly. All you
have to do is run GP Update ("`gpupdate`"), log off and log back on once, and you're good to go.

Now the next thing about this is that you may want to change the default browser, and that is
totally supported as well. That's going to be in Browser Router. I already have a Browser Router
policy, so I'm just going to modify that guy.

I think my default browser right now is Internet Explorer, but let's go ahead and check it out. If I
were to go to Browser Router, "Endpoint Policy Manager" and go to my "Browser Router" settings here
and if I were to check my "Default browser," it's "Internet Explorer." Let's go ahead and change
that to "Google Chrome" or "Edge" or whatever you want. I'll go ahead and click on "Google Chrome"
here. I'll set that.

Then I'm going to run GP Update ("`gpupdate`") to get my latest directives here. After I do this, my
goal is that I want to launch the mailto again and this time it will automatically go to Chrome. Now
if I haven't logged on to Office 365 in Chrome yet, then it may not automatically open up the Office
page, but you get the gist. It will have opened Office through Chrome, just not having not logged on
yet.

All right, let's go check it out. Let me go ahead and click on the email link and click "Yes." What
do we get? We got Chrome automatically. We can see the log on page here. I just haven't quite logged
on yet, but when I do it will then pass that all the way through, pass the correct items directly to
Office 365.

Therefore, any time you click on a mailto link, you're automatically going to the default browser
and passing in the special characteristics to open up that page in Office 365 and Outlook instead of
a mail program that's local.

If you like what you see here and want to get started with PolicyPak , then go ahead and we'll see
you in the webinar. Then after that, we'll hand over the bits, and you can try it out yourself.

Thanks so very much, and we'll talk to you soon.


