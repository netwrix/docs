---
title: "Transitioning to the Universal Oracle Java AppSet (7 thru 9)"
description: "Transitioning to the Universal Oracle Java AppSet (7 thru 9)"
sidebar_position: 70
---
# Transitioning to the Universal Oracle Java AppSet (7 thru 9)

For years, we here at Netwrix Endpoint Policy Manager (formerly PolicyPak) have been making
AppSet whenever Java has gotten incrementally updated. This is a huge pain in the butt. So now we
are introducing a UNIVERSAL AppSet for Java which works for all versions of Java 7… thru 9.. all
incremental versions. Here is the guidance you need to transition from lots of AppSets down to one
universal AppSet. If you have questions about this feature, PLEASE use the FORUMS.

<iframe width="560" height="315" src="https://www.youtube.com/embed/aa8pFCFqnM0" title="Endpoint Policy Manager: Transitioning to the Universal Oracle Java Pak (7 thru 9)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak: Transitioning to the Universal Oracle Java Pak(7 thru 9)

Hi. This is Jeremy Moskowitz. In this video, I'm going to give you some advice on how to transition
from multiple Paks of Java into what we're calling our universal Pak for Java.

Here's what it might look like for you. You might have one or more "Application Settings Manager"
Pak entries for different versions of Java. You can see I have "7 u 25," "7 u 51" and so on here. If
you look inside here in any given entry, you see that you have maybe unchecke for "Updates" here and
maybe deliver some "Security" settings here and so on.

What you want to try to do and what I'm trying to show you here in this video is how to transition
from multiple Paks into one single universal Pak. We're now shipping a single universal Pak that
will work for Java 7 through 9. It's a universal Pak that will work for everything.

First of all, how do you find it? How do you get it? For instance, if you were to right click
"New/Application," you won't see it in your list because we just shipped it. So what are you going
to do? What you're going to do is download the latest Paks from the Portal. You'll see that there's
a Pak called "Oracle Java Version 7 and later for Windows 7 and later." "Oracle Java Version 7 and
later" means 7 through 9, and "Windows 7 and later" means Windows 7 through 10.

You're going to take this Pak and you're going to put it in your Central Store. We have other videos
on that if you're not familiar with how the Central Store works. Now you have it right here:
"pp-Oracle Java Version 7 to 9 for Windows 7 and Later." Does that make sense? This is now the
universal Pak.

The next thing you would do is inside your one or more Group Policy Objects that already have your
settings in them, you're going to open the Pak entry, click "Options" and "Export XML Settings
Data." I'll call this "exp1." So I've exported the first one. I'm going to do this for all four of
them. It will only take me a quick second here. I'll go ahead and go to "Options/Export XML Settings
Data" and call this "exp2."

I'll go ahead and do it for number three. Each of these actually has slightly different settings in
it. By way of example here, I did this for the third one. Go to "Options/Export XML Settings Data"
and call this "exp3." I'll go ahead and do it for the last one here.

The other thing to note about this is that really it doesn't matter what version of Oracle you have,
which is why we were able to come out with this universal Pak. Once you have one or more versions of
7 or later on the endpoint, you're basically setting all the settings for Java. You're basically
telling the Java engine how to deal with itself. It doesn't really matter what version you have on
it.

Now that I've exported all these and you saw me copy in the latest version to the Central Store,
what you should do next is right click, "All Tasks/Re-scan for Available Applications." That will
find the new Pak that we just put in the Central Store. Go to "New Application" and there it is:
"PolicyPak for Oracle Java Version 7 to 9 for Windows 7 and Later." There we go.

We'll go ahead and double click that. Now at this point, we're going to simply import each one of
these guys. So "Options/Import XML Settings Data." We'll go ahead and pick them one at a time. "Data
imported successfully." Let's see if it actually did the work. Yes, you can see that it did some
work over there.

Let's go ahead and do another one: "Import XML Settings Data." We'll do "exp2." We'll do number
three: "Import XML Settings Data," "exp3." And we'll do the last one: "Import XML Settings Data,"
and we'll do "exp4."

Okay now, here's the thing. It may not be perfect, which is to say that maybe not every single
setting actually got exported correctly and imported correctly. There could be some change between
the Paks, and the translation might not have occurred properly. So before you go and delete what
you've done here, here's my recommendation.

My recommendation is to go into the GPMC here and look at the "Settings" report that actually got
created for the different Pak entries that you had. We'll go ahead and click "Show all" here and you
can see here are all the different Paks and their settings. Here are all the "7 u 25" Paks, here are
the "7 u 51" ones, here are the "8 u 25" ones. You might have different Paks in here.

What you may want to do is right click here, "Save Report" as an "HTML File" because again if
something didn't transfer over properly as expected, at least you have a paper record of it at this
point. Does that make sense? You've got it here for future safekeeping. You can say, "Oh, yeah, that
thing that we thought we had didn't set." Long story short, it has to be here. It has to be in the
Settings Report.

What you may want to do also is look at the stuff that got converted over from 7 to 9. For instance,
actually in this case not a lot got converted over. I guess that's a pretty good demonstration. If
it doesn't convert over, which is what happened in my case, you may have to go back and one-by-one
find the setting and write it down here.

The export and import didn't work in my case. It may or may not work in your case. If it doesn't
work properly, the point is to look here in the HTML Settings Report for each of your Paks. For
instance, if you want to "Enable Logging" or whatever your thing is, the Settings Report here will
describe what is going on.

You would then go back into your Group Policy Object, go back on the computer side,
"PolicyPak/Application Settings Manager." Let's just take a look one more time. It looks like not a
lot actually made it in here. Here's one of the things I like to do which is to uncheck "Check for
Updates Automatically." If that didn't come across, you have to do that.

Let's see one of my other settings. That one did come across. My "Exception Site List" didn't come
across. You can just copy and paste that in here. If you want to set a "Security Level" here.
Whatever the thing is, you might have to redo it if it doesn't come across. Once that's all done and
once you've made all your changes and you feel pretty confident that you've done everything you want
to do, at that point you can right click and "Delete" the entry.

Now remember, you've also made an export. So if everything I'm teaching you here totally doesn't
work, if this new Pak totally doesn't do what it's supposed to do, no big deal. You can go back and
recreate the Pak very easily. You can simply add a "New Application," pick the version of Java you
want and suck back in the one that you've exported.

By way of example, if I were to "Delete" all four of these items that we don't need anymore, now
let's pretend I've gotten down to the universal Pak. It's going to work great if you get all the
settings in, but just go with me for a second. If for some reason it doesn't work out properly and
you want to reintroduce the 7 u 25 settings for whatever reason, you can double click in here.

You can click "Options/Import XML Settings Data" and find the one that correlates which I think was
the first one here. You can see that it actually took effect by going back into the "Settings"
Report and you can see that there's the "7 to 9" stuff and then there's the "7 u 25" stuff.

Between the same Pak version, the thing you're exporting and importing, that's always going to work.
The problem exists between stuff that you're exporting and then getting to this new universal Pak.
If that doesn't translate, again my recommendation is to look and paw through the HTML report here
and write down the settings that you want to do. Then if they didn't import properly, then hand
adjust them inside the 7 to 9 universal Pak.

That's it. Once you have a single, solid universal Pak, you can go to town on your endpoint. It
should all take effect perfectly, and you're off to the races. That's it. That's the new universal
Pak and getting over to the universal Pak for Oracle Java 7 to 9.

I hope this helps you out. If you have any questions, please use the forums for this particular
function.  
Thanks so very much.


