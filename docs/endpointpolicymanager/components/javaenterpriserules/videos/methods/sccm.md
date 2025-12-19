---
title: "Use SCCM, KACE, etc to specify different websites for different Java"
description: "Use SCCM, KACE, etc to specify different websites for different Java"
sidebar_position: 40
---
# Use SCCM, KACE, etc to specify different websites for different Java

Configure websites to use the version of Java you choose, or block Java websites entirely
([https://www.policypak.com/pp-blog/windows-10-block-websites](https://www.policypak.com/pp-blog/windows-10-block-websites))
– this demo uses SCCM, KACE, Altiris, whatever method you like (instead of Group Policy.) Making a
Java Deployment Rule Set for your Enterprise has never been easier or more flexible.

<iframe width="560" height="315" src="https://www.youtube.com/embed/RKUbyiAHIos" title="Endpoint Policy Manager Java Rules Manager: Use SCCM, KACE, etc to specify different websites for different Java" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager Java Rules Manager: Use SCCM, KACE, etc to specify different websites for different Java

Hi. This is Jeremy Moskowitz. In previous videos, we used Group Policy to deliver settings to our
machines that would say when I use this website, use this version of Java. Now, we used Group Policy
to do that, but you don't have to. If you want to, you can use SCCM, Altiris, LANDesk, Intune, KACE
or whatever management system you have. In previous videos, I was using Group Policy. In these
videos, I'm going to be using what I call the "not Group Policy" method. It's very simple to do.

For instance, in a previous video, I said when I'm on Windows 10, I want to use Java 8 U 25 and when
I'm on Windows 7, I want to use Java 7 U 51. Okay, so what you can do is simply right click over
each of these policy settings and select "Export as XML." I'm going to save it right to the
"Desktop," and I'll call this "Java-on-10." Then I will right click this guy here and "Export as
XML" and say "Java-on-7."

Now we provide a little utility called the "PolicyPak Exporter Tool." I'll go ahead and run that and
show you how quickly this works. You've probably seen this maybe in other videos, the "PolicyPak
Exporter Tool." What it does is it will take directives from any PolicyPak product and let you wrap
it up into a friendly MSI file.

I'm going to "Add Existing Files," in fact, the existing files I just exported ten seconds ago, one
for Windows 7 and one for Windows 10. There they are. You can see the "Component" is dictated as the
"Java Enterprise Rule Set Manager," and you can see we have the two settings there.

We'll go ahead and click "Next," "Next" again and we'll just "Save" it out. I'm going to save it in
a share that I've got on this server. It's on a share called "share." I'll call this
"PP-Java-Rules-MSI." That's it. So it just has a simple name. I'll just show you that it's here,
"c:SHARE" and we'll take a look at it. There it is: "PP-Java-Rules-MSI."

Again, in previous videos, we've used the Group Policy method. In this video, I've now shown you the
not Group Policy method. You have to use your imagination for a little bit. I'm not going to
actually deploy using SCCM or Intune or LANDesk or something. I'm going to simply run that MSI
manually.

Now this MSI will run completely silently, but for the purposes of this if I do "net use \*
\dc2016share" and I run the "msi," it's going to prompt me for install. But this would not normally
occur. It's only occurring because I'm doing it interactively. When you use SCCM or Altiris or
whatever, you'll just use the quiet flags and you'll never see that.

I'm also going to do the same thing here on my Windows 7 machine: "net use \* \dc2016share" and run
the "msi." We've wrapped up our rules into an MSI here, and that's it. It installs instantly, and
you should see the effects pretty much instantaneously.

Remember, at the top of the video, Java thought I was using 8 U 111. But now if we go to the website
we said which was "java.com," we've mapped java.com to a different version of Java. So "Do I have
Java?" here, now we'll see that with not using Group Policy, using your deployment tool, we are now
using "Version 8 Update 25" for this website for Windows 10. And on Windows 7, we are using the
previous rule that we created and let's see what we see here: "Version 7 Update 51."

Without using Group Policy, using your own software deployment tool, you can simply export the rules
you create using the Java Rules Manager, wrap them up into an MSI and get them deployed however you
like. It's as simple as that. Yes, our PolicyPak client side extension needs to be on the endpoint
and, yes, it needs to be licensed, but the method is your choice. You don't have to use Group Policy
if you don't want to.

I hope this helps you out and you're ready to get started real soon.

Thanks so much.


