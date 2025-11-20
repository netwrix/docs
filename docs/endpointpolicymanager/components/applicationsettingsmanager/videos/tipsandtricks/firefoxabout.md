---
title: "PPAM: Convert from 2 to 4 AppSet for Firefox About:Config AppSet"
description: "PPAM: Convert from 2 to 4 AppSet for Firefox About:Config AppSet"
sidebar_position: 80
---
# PPAM: Convert from 2 to 4 AppSet for Firefox About:Config AppSet

If you need advice on how to convert Netwrix Endpoint Policy Manager (formerly PolicyPak) 2AppSet
version to the 4AppSet (or more) version, here's the advice.

<iframe width="560" height="315" src="https://www.youtube.com/embed/s1V-uUD51aM" title="PPAM: Convert from 2 to 4 Paks for Firefox About:Config Paks" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PPAM – Convert from 2 to 4 Paks for Firefox About-Config Paks

Hi. This is Jeremy Moskowitz. If you're watching this video, you've probably figured out by now that
we have more Paks that establish the Firefox "about-config" settings. We used to only have two Paks.
If you're watching this video, this video shows four Paks. It might even be more than that in the
future, but right now we have four. You might need to convert your current two Paks over to four
Paks, and that's what this video is all about.

Let's go through it step-by-step. The first thing you're going to want to do is to back up the Group
Policy Object or Objects that have these in there. It's as simple as right clicking and selecting
"Back up" on the GPO.

I'll go ahead and do that now. I have this location, so I'm going to "Back Up" this. I'll put it
here in "C:TEMP" for just now, but you'll put it in a real, good location. I'm backing up all the
GPOs or I'm backing up the one GPO that currently has this in here.

The second thing you're going to want to do is to edit the GPO itself and find those settings in
here. This is the GPO that has my Firefox about-config settings ("FF about-config"). You're going to
want to export these settings through the Options button. I've just configured a handful of random
settings in each of these, and I'm going to save these out for safekeeping in case I need to get
back to these later.

You'll use the "Options" button here inside the Pak, and you'll "Export XML Settings Data." Do it
for each of these that you have. Again, I'm just going to push this in "temp." I'll call this
"PAK1-a-j-export." I'll do the same thing for "J To Z" as well here. Here I am in the second one.
I'm going to go to "Options" inside the Pak and I'm going to "Export XML Settings Data," "PAK2-j-z."
So that's the second thing I wanted to do.

Then after this, another good thing is inside the HTML report, you'll "Refresh" the HTML report,
it's good to have what I call a paper copy of this. You can select "show all" here. You can print
it. Notice how there are a bunch of extra settings here. This is completely expected. That's how
Application Manager works. It's a good idea to right click and "Save Report" as something you can
get to quickly. We'll call this "FF about-config" "HTML File." So that's three kinds of backups we
have so far.

After you've established that, the next thing you're going to do is find the Paks that are in the
Central Store, the ones that already exist. Let's find here "SYSVOL/Policies/PolicyPak." You're
going to find the old Paks. I'm going to rename them for now. I'll put underscores in them so they
won't be seen.

So there's that. I'm getting rid of those, or you can get rid of them in total. So I'm making a
backup of the Paks. Then you'll take the actual Paks, the new Paks, and you'll shove them in place.
I can move them here or copy them here. Here they are. They're staged and ready to go.

Now if I were to go ahead and close this and reopen the Group Policy Object, if I go back to the
configuration here under "PolicyPak/Application Settings Manager," what you're going to see is that
– actually, that shouldn't have done that. Let me actually get rid of the Paks here. Let me dump
them from sight. Get rid of these guys here, move them out. Now they're completely moved out of the
"SYSVOL."

Now let's go ahead and try that again. Let me re-click "Edit" here. Now I'll go back to
"PolicyPak/Application Settings Manager." Okay, great. So now we get "DLL not found," which is what
we expected. We said, "Hey, this doesn't exist anymore."

What you want to do now is go to "New Application" and pick the four Paks that represent what were
the two. For instance, we'll go to "A To D," which is not quite A to I. It's A to D. Then inside A
to D, we can attempt to import the exported settings. Let's see if it wants to cooperate. Now it may
or may not, but we'll check that out.

We'll go ahead and double click in there. Now we'll go ahead and click on "Options" here, "Import
XML Settings Data." We'll take that first Pak, and we'll see if it imports the settings. What we can
do is click "OK" after it's done. "Data imported successfully." Now that it's done, you can see that
it did some work there, which is great.

Then we can do the same thing for the other guy. So the next one is "E To I," which overlaps from "A
To I." We'll do the same thing. We'll go ahead and import the first export that we created. So we'll
do that again: "Options/Import XML Settings Data," the first one here. If I had anything in E to I,
it should come back and sync right up. I don't know if I do or don't, to be honest.

Then you would repeat this process for "J To R" and "S To Z," sucking in the second export. I'll go
ahead and do that here. Why not? So "J to R," and I know you can't see the Options button because
it's out of the camera range, but I'll click on "Options/Import XML Settings Data" and then pick
"j-z." It takes a second to consume it. You can see that it pushed the settings in.

You would do the same thing for the last one, which would be "New Application/S To Z." You would
import that last one here. Again, the Options button may be off camera barely. I will "Import XML
Settings Data" and pick the second export. If I had anything in S to Z or the miscellaneous stuff,
it would get imported right there.

Now you're going to do one final sanity check. Actually, you should be able to delete these at this
point because you have not only the DLLs but you also have the export of the actual settings you
had. So I'm going to go ahead and "Delete" my two original ones that don't make any sense anymore.
We'll say goodbye to those.

Now the one last sanity check here is let's go ahead and "Refresh" the GPO, and you're going to look
at what is here, what is actually imported, versus the paper copy that we took earlier. When you
take a look back in, say, "c:temp" and take a look at the "FF about-config" HTML paper copy that you
did, you're going to make sure that everything that you've got here is represented correctly in the
new world. Because the settings report, that's the gold. When you see that it's here, you've
achieved the goal and that's what's getting delivered.

That's about it. That's how to convert from the two Paks to multiple Paks of the about-config
settings in Firefox. Hope this helps you out.  
Thanks so much.


