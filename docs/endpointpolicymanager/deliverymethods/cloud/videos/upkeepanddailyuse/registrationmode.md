---
title: "Endpoint Policy Manager Cloud: Strict vs. Loose Computer Registration Mode"
description: "Endpoint Policy Manager Cloud: Strict vs. Loose Computer Registration Mode"
sidebar_position: 20
---
# Endpoint Policy Manager Cloud: Strict vs. Loose Computer Registration Mode

What happens when you nuke the Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud Client
from an endpoint, then re-install the client and re-register your computer with the cloud? There are
a few different options, and this video explains them all!

<iframe width="560" height="315" src="https://www.youtube.com/embed/EjsFul9yGNA" title="Endpoint Policy Manager Cloud: Strict vs. Loose Computer Registration Mode" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak Cloud – Strict vs. Loose Computer Registration Mode

Hi, this is Whitney with PolicyPak Software. In this video, we're going to talk about the "Computer
registration mode" in the PolicyPak Cloud portal.

If you're wondering how to get to this, you're going to want to sign into your cloud account. Then
go to the "Company Details" tab right here, and then you'll see "Computer registration mode." If you
click on it, you'll see that there are three options. There's "Strict" and then two varieties of
"Loose."

What the heck does any of this mean? Here's the situation. Imagine you have a machine that's joined
to your cloud account using the cloud client, and then you nuke that cloud client one way or
another. It gets uninstalled, the machine needs to be formatted or something like that. Then
reinstall that cloud client on your machine and then have it check back in with your cloud instance
here.

The "Strict" versus "Loose" tells you what happens in that kind of a situation. "Strict" means that
it's going to treat that machine as though it has never seen it before, and it's going to put it in
your All and Unassigned "Computer Groups." "Loose" will say, "Oh, yeah. I know you. Come on in," and
leave the computer in its original groups.

Let me show you what I mean by this. If I come over to "Computer Groups" here, right now I have one
machine that is joined to this cloud instance. It is in the "All" group by default, and I've put it
in "East Marketing" and in "East Sales."

Now if I nuke my cloud instance and then I reinstall and rejoin this cloud instance here, what
happens now is dependent on whether or not I have myself in Strict mode or in Loose mode. In Strict
mode, it's going to pull the machine out of these groups ("East Marketing" and "East Sales") and
dump it back in "All" and "Unassigned" because it says, "Hi. I've never met you. Here, join All and
Unassigned."

However, if you have it in Loose mode, then once this computer gets nuked and then comes back the
instance will say, "Oh, yes, we're friends. You go in East Marketing and in East Sales." So while
Loose mode makes it a little bit easier in that instance, Strict mode is a little bit more secure.

Now I want to show you what happens when you're in Strict mode and you nuke your cloud client. It
does something a little bit unusual, but it is expected. Basically, what happens is once the cloud
client gets nuked on your machine, the machine stays in these groups. Let me go ahead and nuke my
client and I'll come back and show you what I mean. I'll pause the video, and we'll come right back.

All right, now I've gotten rid of my cloud client on my endpoint here, and I'm going to go back to
my management station and I'm going to refresh right here. I still see this machine in "East
Marketing" and in "East Sales." Actually, if I click on it, if I go to "Show Computers," that is
still there even though it's no longer joined to the cloud. This is just the ghost of a computer.
It's a dead computer.

Now because I am in Strict mode, when I reinstall my cloud client, it's going to pull it out of
these. It won't be here anymore, and it will only be in "All" and "Unassigned." Let me go reinstall
that cloud client. We'll pause the video and come right back as soon as that's done.

And we're back. Now that we've reinstalled the cloud client here, you see that "This computer is a
member of the following groups: Unassigned, All." Going back to our management station, we're going
to refresh here. You see now that we have "0 computers" in these groups anymore, but we have "1
computer" in the "All" group as expected as well as "1 computer" in the "Unassigned group. That's
what happens when you reinstall the cloud client on Strict mode.

Now I've gone ahead and uninstalled the client again from my cloud machine here, my non-domain
joined machine. We're going to go to the "Company Details" tab and we're going to put this into
"Loose" mode. We'll click "Save." Then I'm going to go reinstall the cloud client, and we'll go to
the "Computer Groups" and see what that does.

First of all, we've uninstalled it. We still have the ghost of the machine in here and in the "All"
group. But now that I'm in Loose mode, when I reinstall the client then it's going to stay in these
groups that the machine is already in. So hold just a second while we do that, and I'll come right
back.

All right, and we're back. We've reinstalled that cloud client. Because we are in Loose mode, you
can see "This computer is a member of the following groups: East Marketing, East Sales, All." That's
the difference between Strict and Loose. When we had it in Strict, it acted like it had never seen
the computer before and just put it into All and Unassigned. Now when we did the same thing, it has
put it back into the groups that it was originally in.

If we come back over here, if we refresh this page right here, you'll see that the computer stayed
in the groups that we had originally put it in because we now have it on Loose mode. So there you
have it. I hope that helps, and I'll see you soon in the next video.


