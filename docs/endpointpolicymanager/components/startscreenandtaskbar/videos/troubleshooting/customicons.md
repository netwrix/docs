---
title: "Endpoint Policy Manager Start Screen Manager and Special Custom Icons"
description: "Endpoint Policy Manager Start Screen Manager and Special Custom Icons"
sidebar_position: 10
---
# Endpoint Policy Manager Start Screen Manager and Special Custom Icons

Tried to deploy custom icons and it didn't work as expected? Here's the workaround.  
ADDITIONAL STEP: Remove the Chrome Shortcut from the following location: You'll need to sign-out and
back in twice to see the changes the first time.

`C:\ProgramData\Microsoft\Windows\Start Menu\Programs`

<iframe width="560" height="315" src="https://www.youtube.com/embed/2A8i7DhKWME" title="Endpoint Policy Manager Start Screen Manager and Special Custom Icons" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager Start Screen Manager and Special Custom Icons

Hi. This is Jeremy Moskowitz. In this video, I'm going to show you how you can use Netwrix Endpoint
Policy Manager (formerly PolicyPak) Start Screen Manager to dictate icons with the correct
iconography on the Start Menu.

Here's the example lash-up. I used Endpoint Policy Manager Start Screen Manager to create a group
for my G Suite resources for my sales team. But, look. They all have exactly the same icon, which is
weird because when I went to create this, I created what's called a "New Desktop Application Tile."
I went to "Custom application" which is where you can give it the items you want. So here's
"chrome," the application.

Then you can see there's the shortcut icon. In fact, let me put this toward a website like
"udel.edu," my university. If you were to "Change Icon" here to something like this guy, you would
think that should just work perfectly, right? I'll go ahead and click "Next" and click "Medium" or
whatever. I'll call this "Access Udel.edu."

Then over in Firefox land, I'm actually going to do the same thing. I've already got one for
"Mozilla" by itself. Let me go ahead and add a "New Desktop Application Tile" for my "Custom
application." I'll pick "c:Program FilesMozilla Firefox," and here's "firefox." I'm going to pick
this, and I'll say go to "abc.com" or something like that. And I'll "Change Icon" to this sketchy
little guy, whatever that is. "OK."

Again, you can change the shortcut icon. It doesn't have to be from this application. But here's the
thing. In both of these cases, it's not going to work. I'm showing you what's not going to work
first. I'm going to say "www.abc.com from FF."

If I go back over here and I run GP Update ("gpupdate"), let me show you what is not happening. The
first thing that we should see after GP Update is done is that we'll have created that new group
called "Firefox Items." And then after that, we're going to see that the icons will be exactly the
same even though I said I wanted different icons.

Okay, so we'll go ahead and click over here, and there we go. We can see I've got my G Suite items
that are all the same even though I said those have different icons, and the Firefox items are
exactly the same even though I said those should have different icons. What is going on?

Well, it turns out that these applications are a little bit funny. Of course, they're both related
in this way, but they each share the characteristic that I found interesting. I'm going to create an
admin command prompt. Both of these applications, like if I go to "Program Files (x86)GoogleChrome"
and I look in the application folder, there's this folder called application name dot
"VisualElementsManifest.xml."

Firefox has one too. The idea is that it tells its DNA what to look like. What we're going to do is
remove this part of the DNA and it will look a little bit different. Let me go ahead and get another
command prompt just to show you here. If I were to go to "cd Program Files (x86)Mozilla Firefox" and
look for the "xml," there it is: "firefox.VisualElementsManifest.xml."

What we want to do is nuke these using Group Policy Preferences file delete. I'm going to show you
how to do that right now. Actually, I'm going to be logged off first because if we're logged on, it
doesn't help us much here. So I'm going to "Sign out."

Then in the same GPO or a different GPO, I'm going to use the Group Policy "Preferences" and I'm
going to go to the "Files" item. I'm going to use the Files item to create a "New" "File" item. In
fact, I'm going to create two of them that are going to "Delete" a specific file. Then the little
magic here is that in this little white box you're going to hit the F3 key and you're going to be
able to find "ProgramFilesDir." The we're going to go to "GoogleChromeapplication."

Actually, maybe this is even easier. If I go to c:Program Files (x86)GoogleChromeApplication," I
happen to have that application on my machine here. There we go: "chrome.VisualElementsManifest." I
want to nuke this guy right off the map. I could do it either by variable or direct, so I might as
well just do it direct. So I'm nuking that file.

Okay, next one would be for Firefox. Let me go ahead and create a "New" "File" item here. Click on
"Delete." Then I want to find "Program Files (x86)/Mozilla Firefox," and I want to find the Firefox
visual element. I don't see it listed here, but I know it's on the target machine. So I'll just type
it in. That's going to be "firefox.VisualElementsManifest.xml." I know it's there: "C:Program Files
(x86)Mozilla Firefoxfirefox.VisualElementsManifest.xml."

All right, that's all she wrote. So in this GPO, I now have the delete items and I have the create
the "Start Screen Manager" items. This might work right away or it might take two logons because it
might have to be deleted before the Start Screen is generated. So if this takes two logons, so be
it. But the point is that this is how to do it. So if it doesn't work the first time, we'll log off
and log back on and we'll see it run the second time.

We have all the right resources for our sales team, and we have all the right resources for our
Firefox things, the special icons, exactly what we want. So again, it's the 1-2 combination. You
have to use the custom tile type in Endpoint Policy Manager Start Screen Manager. Then you have to
nuke those VisualElementsManifest.xmls related to programs that have it.

So we're doing what we need to do, but there's a little trick for some of these applications that
requires you to also nuke those things. Hope this video helps you out and gets you started with
doing custom icons.

Thanks so very much. Talk to you soon.


