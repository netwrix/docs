---
title: "Using Shares to Store Your Paks (Share-Based Storage)"
description: "Using Shares to Store Your Paks (Share-Based Storage)"
sidebar_position: 30
---
# Using Shares to Store Your Paks (Share-Based Storage)

Starting in build 601 of the Netwrix Endpoint Policy Manager (formerly PolicyPak) MMC snap in,
you've got the ability to store Pak files on shares — as well as the traditional Local and Central
stores. This video shows you how it works.

<iframe width="560" height="315" src="https://www.youtube.com/embed/aqCIbaY1TmQ" title="Endpoint Policy Manager: Using Shares to Store Your Paks (Share-Based Storage)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak: Using Shares to Store Your Paks Video Transcript

Hi. This is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software. In this
video, I'm going to show you how to use shares for your Pak storage.

Now traditionally, PolicyPak has had two locations that you can put your PolicyPak Pak files. That
would be the Local Store, which is "Program Files/PolicyPak/Extensions." You can see I've got on Pak
there. Another location is the "PolicyPak Central Store."

Let's just do one thing at a time here. Just to show you what happens if I "Create a GPO in this
domain, and Link it here…." I'll call this "A TEST 1" or something. What we're going to see is that
when we go to "PolicyPak/Applications/New/Application," you can see that the only Pak I've got
available is this "PolicyPak for WinZip 14 and Later." It tells me that it's "Local Storage."

If I were to add a Pak to the Central Store – and the Central Store is replicated to all domain
controllers, and it's still the best solution. You should always try if you have the ability to
create the PolicyPak Central Store under "sysvol"/domain name/"Policies," a folder called
"PolicyPak." What you're going to want to do is take the "PreConfigured PolicyPaks" that you have or
the Paks that you've created, and you're going to take the DLL file and "Copy here" to the Central
Store location.

Now when you do this, if you right click and go to "All Tasks/Re-scan for Available Applications"
here, now we've scanned for the Local and the Central Store. We know that "PolicyPak for WinZip 14
and Later" is "Local Storage." We know that "PolicyPak for Adobe Reader X" is "Central Storage." You
can see that Central Store goes right there.

Now again, the Central Store is the best location, but we had a lot of requests from people telling
us that they can't create the Central Store. They're not a domain admin, and they can't create the
Central Store, and is there a way for us to get share-based storage? And there is.

Let me show you how to do this. First things first, is you've got to have a share. I do have a
share. I will go to my "Computer" here. I happen to have a share called "SHARE." Not very fancy. All
you're going to do is you're going to put the Paks you want – maybe I'll put all the "Autocad" Pak
files here. There's AutoCAD here and AutoCAD this. You get the general idea. I'm just putting the
AutoCAD Pak files into a share of my choosing.

Now that I've done that in a share called "SHARE," all I need to do then is right click over the
"Applications" node, go to "All Tasks" and "Manage Share-Based Central Stores." What you're going to
do at that point is add your share. I've already done this, but you would simply go to
"`\dc\share`," click "Add" and you've been able to do that. You don't need it twice there. I've
added it, and you'll click "OK."

Now that you've done that, you see the scan occurs really fast. We'll go to "New/Application" and
there they are. These "Autodesk" guys are coming from a particular share. If you had more than one
share, that's totally fine. You can specify that, and you can see that we call it "Share-Based
Storage."

That's the general idea here. Just to put a fine point on it, if you make some settings changes here
or whatnot and then you decide you no longer want to use a particular share, by unchecking the
checkbox and clicking "OK" here, the next time you click Edit on the Group Policy Object, however,
if I go back to "A TEST 1" and click "Edit," the very next time you click in you're going to see
that it says "DLL not found."

Why is that? Because the definition, you are not using that share anymore. If you roam to another
machine and you're using the latest management console that supports share-based storage, you might
see "DLL not found." Not a big deal. All you'll need to do is go to "All Tasks/Manage Share-Based
Central Stores" and either type it in or select it if you've already pre-entered it. Click "OK" and
then that's it.

The next time you click edit in the Group Policy Object here, if we go back to "A TEST 1" and click
"Edit," you'll see right there "Share-Based Storage." So you're not losing anything. You just have
no way to get to the changes that you made.

That's it for share-based storage. If you do have questions about the new share-based storage or if
you have questions about the idea where you need to "Re-scan for Available Applications," then do
please post your question to the support forums and we'll be happy to help you out.

Thanks so very much, and we'll talk to you soon.


