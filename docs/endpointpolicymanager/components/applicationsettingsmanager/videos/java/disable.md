---
title: "How to quickly disable Java, everywhere (in an emergency)"
description: "How to quickly disable Java, everywhere (in an emergency)"
sidebar_position: 10
---
# How to quickly disable Java, everywhere (in an emergency)

The Department of Homeland security strongly recommends that you disable Java temporarily. Exactly
how will you do that ? Watch this video to find out.

<iframe width="560" height="315" src="https://www.youtube.com/embed/pMgesKjAmDo?si=S--ubHfdwNIvmE8x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager: Turn off Java immediately on all machines video transcript

Hi, everyone. This is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software.
In this video, I'm going to show you how to very quickly disable Java on all of your machines if
there's an outbreak or something you need to correct for.

As of right now, there's an exploit out there. This can happen for any number of applications. In
this particular example, I'm going to deal with Java. There have been exploits like this for Acrobat
and other types of applications. If you are a PolicyPak customer, you have the fire extinguisher for
when the next problem occurs. This video is going to show you exactly how you would fix that if you
were a PolicyPak customer.

With that in mind, let's make sure I actually have Java running. What I'm going to do is go to the
"Control Panel" on this example machine and go to "java" here. Let's go ahead and go to the "Java"
tab and click "View…." You'll see here I've actually gone the extra mile. I've actually got Java
"1.6" and "1.7" installed, and you can see that right here. What happens if you've got two versions
of Java installed? What are you going to do then? Let's correct all these problems all in one shot
by delivering the setting that will un-"Enable" Java here.

Let's really make sure it's really working and I'm not pulling a fast one on you. What I'm going to
do is I'm going to go to "Internet Explorer" first and I'm going to run "java test." Let's just see
if Java is functioning properly in the two main browsers here. Here's "java test." "How do I test
whether Java is working on my computer?" This is the kind of prompt a user would get. They would
click run, and sure enough, Java is working.

Let's go to "Firefox," and we will also do "java test." Let's see. Is it working here? Yes. You can
see, Java is in fact registering and working. You can see it's listing the Java version right there,
and it's listing the Java version right there.

If you are a PolicyPak customer, it's very simple. Let's go over to our management station. Here on
my management station, I've got all my "PreConfigured PolicyPaks." PolicyPak ships with over 50
preconfigured Paks for popular applications like Flash, Firefox, Acrobat Reader, FileZilla, Office,
Lync – all sorts of applications that if a vulnerability occurs and a manufacturer makes a
suggestion for what to flip on or off, you can deliver and enforce and remediate that setting using
PolicyPak.

I've already gone through the motions and copied in the right file to the right place here. What I'm
going to do is I'm going to do this for my entire domain. For my entire domain, I'm going to "Stop
Java Everywhere." I'm going to right click over and click "Edit…" here. Under computer side
"PolicyPak/Applications/New/Application," here are just some of the Paks that I've slid in in
advance. I've got "Adobe Reader," "Flash," "Chrome," "Firefox" and here's "Java." These are some of
the applications that you could control.

Here's "Java," and we'll go ahead and pick the latest, greatest version here. Now that we're here,
this looks exactly like the Java application itself, the knobs and the switches and such. What
you're going to want to do here is go to the "Miscellaneous" tab here.

The way that this happens to work is that based on the order that you installed each of your Javas
in – for instance, if you did Java 6 first and Java 7 second – you'd be able to enable or disable
each of these guys. What we want to do here is deliver uncheck, and therefore we're going to disable
both "Java 0" and "Java 1," which is both of those Java versions.

Now while we're here, let's go into some other settings here. I want to, for instance, also while
I'm here disable "Shortcut Creation" and also "Lockdown this setting using the system-wide config
file" so users can't work around it. I'll also do the same thing for the "Java Console." I will make
sure that users can't start the Java Console. I'm just doing those extra settings for fun.

All we're going to do next is wait for Group Policy to update. We'll use "gpupdate" in order to do
that here. Now that we're done, let's first go over to "java" here and let's see what occurred.
Let's go over to "Advanced," and you can see here those settings that I specifically set to "Never
allow" and "Do not start console," plus I locked down those features so users can't work around it.

Let's also go over to the "Java" tab and go to "View…," and you can see here that both of those
checkmarks are now disabled. If we were to try to rerun Internet Explorer and we were to go to "java
test" – we'll run it here – you'll get nothing, which is exactly what you need during this emergency
situation. If we go over to "Firefox" and we do the same thing and we run "java test," you can see
once again Java is disabled during this emergency situation. How would you re-enable it? You've got
PolicyPak.

Just to put a fine point on it, like I said, PolicyPak ships with tons of preconfigured Paks for all
sorts of situations. This is not the first time, and certainly not the last time, a vendor will
suggest – or in this case, the Department of Homeland Security suggests – that you disable an
application or a particular checkbox which would involve some kind of threat vector.

With that in mind, I hope this gives you some insight on how you can immediately fix your problem as
the problem is being addressed by the vendor, which can sometimes take days, weeks or sometimes
months.

Thank you very much for watching. If you're looking to get a demo of PolicyPak, come on over and
we'll show you what it's all about. Click on the Webinar/Download button on the right in the
policypak.com website.

Thanks so much, and we'll talk to you soon.


