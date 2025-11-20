---
title: "Auto-updating the CSE"
description: "Auto-updating the CSE"
sidebar_position: 10
---
# Auto-updating the CSE

Starting in build 545, you can silently update the PP CSE anytime you want. You can drop it into the
Netwrix Endpoint Policy Manager (formerly PolicyPak) Central Store, or a share of your choice. In
this video, we'll explore exactly how to demonstrate the new PP Automatic updates.

<iframe width="560" height="315" src="https://www.youtube.com/embed/_aC6D9hnTeQ" title="Endpoint Policy Manager: Auto-updating the CSE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

:::note
Extra details are covered in Appendix A of the PP Quickstart and User guide.
:::


### PolicyPak: Auto-updating the CSE Video Transcript

Hi, there. This is Jeremy Moskowitz, former Group Policy MVP and Founder of Endpoint Policy Manager
Software. In this video, I'm going to show you how you can utilize Endpoint Policy Manager's
automatic client side extension update feature.

Every once in a while, "Endpoint Policy Manager Client Side Extension," which is the moving part
that's required on every target machine to do our magic, gets an update. Either we fix a bug or
there's a new feature available or we've optimized it or something like that. This trick I'm about
to show you only works if you're already using build 545 and later. I am here. This is "545."

In this demonstration, I'm going to automatically update from 545 to 546 without using a tool like
Group Policy Software Installation or SCCM or anything like that. You can still do that if you want
to. I'm going to show you this automatic update technique to go from a current build to the next
build. It's really easy to do.

What we're going to do is go over to our server. If you've watched other videos on Endpoint Policy
Manager, you're probably familiar with the Endpoint Policy Manager Central Store, which exists under
"sysvol/(domainname.com)/Policies/PolicyPak." This is where, of course, all of your Endpoint Policy
Manager DLLs live.

When it comes time to perform the automatic update of the client side extension, you're going to
create a "New folder" here. It must be named "CSE." In the CSE folder, you're going to take the next
build whatever that build is – and in this case, it's 546 – and we'll take the two client side
extensions that we're using, one for 32 and one for 64, and just copy them into the central store.

That's it. If you did nothing else and just waited around on this machine, build 545 will update to
546 in this example in 16 hours. Let me say that again, if you do nothing else and just wait around,
all your target computers will magically update from the build – old to new – in 16 hours.

You don't have to wait that long if you don't want to. You can run` "ppudate /cseupdatenow"`, and
this will force a queuing of the new build. Watch what happens when I run it. You can see we're
running "545" here. What you're going to see in about two seconds is that right there, the little
rotating circle thing, which is actually the MSI installer updating Endpoint Policy Manager in the
background.

That's it. It's done. In fact, I can prove a point by just running` "ppupdate"` by itself and you
can see it was "545" ten seconds ago. Now it's "546." I'm just a regular user here. I'm not an admin
or have any special rights. If I go to "Control Panel" and go to "Uninstall a program" here, you can
see what was 545 is now "546."

That's option one, simply just throwing the new client side extensions into the` "PolicyPak/CSE"`
folder inside the `SYSVOL`. That's option one. There's another option as well where you can if you
want to use this configuration file called` "update.config."` I've already got it here, and I'm
going to simply "Move here" into the central store.

I'm going to open it to show you what's in there. It's not very mysterious. The hard part about this
is making sure you don't save a text file in there. It needs to be called `"update.config"` or else
it's not going to work. You can see here that it's not a text file; it's and XML file, so it must be
called `"update.config"`.

Now here are some options. We have more in the manual for you to check out. One of the things you
may want to do is to set up a reporting directory. In this example, we have got this thing called
"Reports Root." You can see I've got it set to `"dcReports."`

I've got that share already set up. Let's go ahead and see what happens. Let's go to "C" and go to
"REPORTS" on this machine. It's empty. Let's go ahead and take a step back. I'm going to "Revert to
Snapshot: 545-2" where I was still on 545. We'll rerun this test now that we have the
`update.config` file in place, and it's going to put the reporting on.

Just to prove a point, `"ppupdate,"` I'm running "545." I'll run `"ppupdate /cseupdatenow"`. It will
take a second. You'll see the spinning cursor occur that will demonstrate that it's actually
performing the update. It's done with that.

Because now we have the` "ReportsRoot"` set, look what happened. Inside our` "REPORTS"` folder where
we said `"dcReports"` we now have the report of exactly what occurred. We can see that on this day
and time, the latest client side extension was installed. It's just that easy.

There are some other parameters that you are welcome to read in the manual. For example, if you want
to, you don't have to specify to necessarily use here the client side extension folder. If you
wanted to, all you would have to do is do what's called `"MSIROOT."` This could be "dccses" or
something like that and then `"</MSIROOT>"`. I hope that makes sense. The idea here is that you can
add in the MSIROOT.

There are a handful of other parameters. They're all specified in the manual. I do want to review
one other, which is this "Check For Updates Interval." Here in this demonstration, I've get it set
up for "1" minute. Every minute, it's going to check – probably not what you want to do in real
life. We recommend 60 or 90 or 120 or whatever you want, but not 1. Anyway, for this demonstration,
we're setting it to "1" just to prove a point.

You can see I'm now telling the "update" to use `"MSIROOT"` of `"dccses." `I don't even have that
share. Let me go ahead and create that. Let me go ahead and create a "New folder," "CSEs." Let me
create the share, "Share with/Specific people," and I'll make it "Everyone."

Now I've got a share. I'm going to take the client side extensions that we've got on the fake CD
here and "Copy here" to the new folder. There we go. Instead of using the central store, we're now
going to be using this particular folder to do the pulling from. The "update"` config` file is
pointing toward a server ("dc") and a share ("cses") and the interval is "1" minute.

Let's go ahead and "Save" that. Let's revert back to my previous snapshot here just to prove a
point, and let's see what happens when we wait a whole minute. The trick is that now that we've made
those changes to the config file, we need to wait. We could wait a little while, and it will
actually detect these changes all by itself or we could manually force it to do that.

Just to prove a point here, if I run`"time,"`you can see that the time is "16:02." I can run
`"ppupdate  /cseupdate"`. All this is going to do is simply re-read the config file. You can see
"Manual check for update.config" file. What should happen is that within 1 minute – there it goes
right there right now as I said the word 1 minute – it's performing the install.

This isn't forcing the install. This is just simply re-reading the config file. Our config file said
to do it every minute. It also said to read it from a particular share. It also said to write the
results to the report directory. If we look at the build now, you can see during the time I was
talking it went from "545" to "546" in under a minute. There we go. Excellent.

Let's take a look at the report just to prove one last point here. If we go back over
to` "Computer/C,"` over to `"REPORTS," `and let's take a look at the report folder. There we go. I
have two lines here because a couple minutes ago you saw me force it to perform the update, and now
you see that I've actually done another update right there.

That's the story. It's super easy to do. The hard part is just creating this little XML file. We've
got a sample in the manual to help you out and also on the website you can download. If you have any
questions, we're here for you. Please go to the support forums, and we'll look forward to helping
you out.

Thanks so much. Take care.

