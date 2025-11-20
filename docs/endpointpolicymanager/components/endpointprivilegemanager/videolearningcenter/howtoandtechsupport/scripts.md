---
title: "Elevate (or smack down) scripts and Java JAR files"
description: "Elevate (or smack down) scripts and Java JAR files"
sidebar_position: 10
---
# Elevate (or smack down) scripts and Java JAR files

If you want to prevent WannaCry and other malware, it's pretty easy. Just prevent users from running
all scripts using Netwrix Endpoint Policy Manager (formerly PolicyPak). But then how do you PERMIT
other scripts and also ELEVATE yet other scripts? In this video you'll find out in no time.

<iframe width="560" height="315" src="https://www.youtube.com/embed/dL7RKd6RvQo?si=JK0GR2OomDd9EMh3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak: Elevate scripts and Java JAR files

Hi. This is Jeremy Moskowitz. In this video, I'm going to show you how you can manage the heck out
of your scripts, PowerShell and Java using PolicyPak and
[https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html](https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html).

Here's the example. Let's pretend you are the IT administrator here and you've deployed a couple of
scripts that you want, but these scripts are a little special. When you double click them as a
standard user, you can see "This file is clean from the IT department."

But when they try to run the stuff inside, they can't manage stuff in HKEY_LOCAL_MACHINE. They're a
standard user, so access is denied. They're not allowed to do these things. It doesn't work. You can
see "Access is denied," "Access is denied," "Access is denied." Same thing with the command batch
files that are trying to do things like start and stop services. A standard user can't do that.

Well, what if they could? What if you could have the ability to elevate scripts that you want from a
certain location? Let's go ahead and do that right now. We're going to do some other demos too, but
let's just go ahead and get started here.

For all of our "East Sales Users," we'll do "PPLPM Scripts and Java demo." (PPLPM is PolicyPak Least
Privilege Manager.) I'm doing this on the user side for my "East Sales Users." I could also do this
for my computers as well. I just happened to do this on the user side here.

I'll dive down under user side, "PolicyPak" and pick "Least Privilege Manager." The very first thing
I want to do is "Add" what's called a "New Script Policy." A script policy enables you to pick how
the rules are such that this script will run elevated. I'm going to "Use simple rule." I'm just
going to say where it's located. That's called the "Path." In other words, if I have the script on
my server, there's no way the bad guy or a standard user could get it there, so it must be cool to
run.

So I'm going to say that these two scripts are going to be okay. Let me "Browse" for that location.
That's going to be "`\dc2016share`." Then since I'm coming in over the network, I can go to
"ITScripts." The batch file first, I'll pick this guy first. We're going to pick another one second,
which was the command line. "Browse," and we'll take the command line.

You can see both of these files are coming through the server and the share. If they're going to
run, we want those to "Run with elevated privileges." We're going to give it a "Name" called "Let IT
scripts run elevated," just these particular ones. There we go. Let's just do this one first, and
we'll do some other things.

We'll go to "Command Prompt" here, we'll run GP Update ("`gpupdate`"). We'll give this a second to
bake in. Okay, now that that's done, ten seconds ago the script didn't run because it needed admin
rights to work but now we've elevated this location. Let's see what happens. "Let's try to modify an
HKLM key." "The operation completed successfully." Then if we want to unset the key, we can do that
successfully as well.

These operations that we would be using inside HKEY_LOCAL_MACHINE work now because this script is
elevated. Let's see if we can start and stop services from this second script as well. Yes, sure
enough. We're able to stop a particular service and start a particular service, and it works just
the way we expect.

I know what you're thinking. What if a user were to take this file and copy it to someplace like the
desktop? Does it work here? Well, the script itself runs, but does it actually perform the work? The
answer is no. "Access is denied" because, again, we're saying that the location, the path, must be
dictated from the server. So that's the first thing.

But you know what? I bet you're thinking about, what if we don't want users to be able to run
scripts at all? Let's take a look at the kinds of scripts that a user could download. We're going to
pretend that the user has downloaded all of these scripts off the Internet, all sorts of bad things.
Some things might be good like that script we just tried. It doesn't do anything if they put it to
that location. It doesn't perform the work.

But what if that script were "Malware" or crypto malware? Or you take a "Java" commandlet that could
be "Malware" as well, like this, that "Could have been malware." That's right. Or we take a Java
script, that "Could have been malware." We could click on this. That's malware.

PowerShell if you try to run it, when you just open it, it won't do anything directly. But if you
try to actually right click and "Run with PowerShell" – again this is a standard user, I'm just a
standard user – this is exactly what happens. They get prompted here. They can just say "Yes" or
"Yes to All," and it "Could have been malware."

In all these examples, these are just things that the user could have downloaded off the Internet
and been totally naughty, and you would have been encrypted and WannaCry and all that stuff. You
want to get out of that business. How are we going to do that? We're going to use what's called
PolicyPak's SecureRun feature. You might have seen this in other videos where we showed how you can
prevent executables, but now PolicyPak has the ability to also block most script types.

We're just going to lay down the new "SecureRun Policy." SecureRun says if the person who is trying
to run it is not on this list, then they can't run it at all. They're not going to be an
"Administrator." They're not going to be the "SYSTEM." They're not going to be "TrustedInstaller."
Because of that, as soon as we make that rule and put that down, we're smacking down all unknown,
unsanctioned and unusual stuff that you have not said is good to go.

Now that that's all done, let's go ahead and close that out. The scripts that we said are coming in
over the network that we sanctioned are cool. In fact, they run with elevated rights. That's all
cool and all works.

But what happens if we try to take any given script? You saw before, I did the demo where I took
this file, copied it to the desktop and the script ran. It didn't do anything, but let's see if it
actually even runs at all. Now we're getting it blocked very specifically. ("This app has been
blocked by your system administrator.")

What about all these other things that they downloaded themselves? What about this "Malware" "BAT"
file? Blocked. What about the command "Malware"? Blocked. What about the "JAVA-Malware"? Blocked.
What about the "JS-Malware"? Blocked. What about the PowerShell "Malware"? What if we right click
and "Run with PowerShell"? Blocked. Everything is blocked. All these script types are blocked
automatically.

Now you're thinking, okay, that's pretty cool. But what if I have specific things that I do want to
sanction? Well, you saw me do that earlier, and that thing still runs. So the things that we send
over the network will run. But maybe you have scripts that you don't want to run with admin rights.
For instance, I have these scripts here that are digitally "Signed." What you can do is open the
doggy doors for cleanly digitally signed things.

Let me go over here. I'm going to "Add" a "New Script Policy" here. I'm going to say if it's signed
by the IT department, then it must be good because those are good. I'll go ahead and take the
"Signature," and I'm going to "Select script file" from my IT department here. I've got it in
"ITScripts/Signed." It doesn't really matter. I'll pick any of them. They're all signed by my IT
department all exactly the same way.

If it's signed by my IT department, I don't need to elevate all that stuff. I just need to let it
run standard. I'm just going to "Allow and log" it. I'll go ahead and click "Next" and say "Let
scripts signed by my IT dept run" and click "Finish."

Now let's give it a go. Let me go ahead and run GP Update ("`gpupdate`") again. This is all done.
I'll close this out. Now these "Scripts" that are not signed are going to be blocked. We saw that
before. But the ones that are signed, something magical happens and now if I were to right click on
this PowerShell one that's signed and tried to "Run with PowerShell," what do we get? We still get
prompted. We'll click "a" here, and "This file is clean from the IT department."

But that other script, that script that we don't know what it is, if you try to right click that
PowerShell script and try to "Run with PowerShell," it is blocked. Only the stuff that now is
"Signed" is good to go. If you click on the "JS" file, "This file is clean from the IT department"
and so on.

But we still have a little problem with Java that we need to fix here. If we have Java that's
"Malware" or if it's "Not Malware," the thing is it's great that it will block stuff that's malware
but it also blocks stuff that's not malware. Even if it's "Signed" here, it's still being blocked
because we need a special rule just for Java.

Let's go ahead and fix that. In order to do that, we're going to "Add" a "New Java (JAR) Policy"
here. We're going to say once again if it's digitally signed by us ("Signature") in "ITScripts" in
"Signed," I want to take that same signature. I could have copied and pasted it, but I didn't.

I can click "Next" here. I just want to "Allow and log" it. I'll go ahead and now say "Let Signed
JAVA run from my IT dept." I'll click "Finish" and there we go.It's time to run GP Update
("`gpupdate`") one last time. Now that that's finished, I'll close this out. It opens up correctly
because it's signed from the IT department.

That's it. If you want to elevate scripts or smack them all down because they're not from you – so
all the stuff that would have come through email and people sharing files, all that stuff – you
could have the sanctioned applications run, the sanctioned scripts run but smack down everything
else because they're not coming from you, the IT department. That's PolicyPak Least Privilege
Manager with SecureRun.

Just sign up for the webinar and once the webinar is over, we'll hand over the bits and you can try
it out yourself.

Thanks so very much, and we'll talk to you soon.


