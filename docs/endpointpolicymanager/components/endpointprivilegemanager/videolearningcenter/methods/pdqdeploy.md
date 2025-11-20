---
title: "Deploying Apps that Require Admin Rights Using Endpoint Policy Manager and PDQ Deploy"
description: "Deploying Apps that Require Admin Rights Using Endpoint Policy Manager and PDQ Deploy"
sidebar_position: 30
---
# Deploying Apps that Require Admin Rights Using Endpoint Policy Manager and PDQ Deploy

Not every application plays by the rules. Once PDQ deploys an application, a standard user might not
be able to run it as expected and you get a UAC prompt.

That's why you should check out Netwrix Endpoint Policy Manager (formerly PolicyPak) Least Privilege
Manager. With the Endpoint Policy Manager Least Privilege Manager, the applications you deploy with
PDQ can then run with admin rights. See this video to learn how to elevate applications, the
operating system, and also let users occasionally install their own specialty software when needed.

<iframe width="560" height="315" src="https://www.youtube.com/embed/P9wnfQrEDvY?si=wIBpZ9OzsC8N7PHt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Deploying Apps that Require Admin Rights Using PolicyPak and PDQ Deploy

Brigg: Hi. My name is Brigg, and I'm with PDQ.com.

Jeremy: And I'm Jeremy Moskowitz from PolicyPak Software and GPanswers.com.

Brigg: Today we're going to be discussing Least Privilege Manager or how to elevate something if you
deploy it and you get that little, nasty UAC prompt.

Jeremy: Everybody knows that there are going to be some applications that, even though you can
deploy them all nice and they deploy nicely and they run, for the love of Pete, they still pop that
annoying UAC prompt in your face. There are also parts of the operating system like Device Manager
or the backup manager or whatever that you can't get into when you remove local admin rights.

People are still running with the scissors all the time, and it's finally time to get out of that
business. But when you remove local admin rights, you're in what I like to call "the ditch." What's
the ditch? The ditch is you can't do the things as a standard user that you could do as an admin.

What we're going to do is first is use PDQ Deploy to deploy a common app that runs great except it
throws a UAC prompt in your face when it's time for showtime. Let's go ahead and start with that.

Brigg: Okay. We're going to install "TreeSizeFree," a common app. We're just going to "Deploy Once"
on this. We're just going to deploy it to our computer here.

Jeremy: I could pick Active Directory. I could pick any number of things.

Brigg: Oh, absolutely, yeah. I just used this because it's easy and I love inventory.

Jeremy: Okay, go ahead and "Deploy Now." While that's cooking with gas, let me show the end computer
while this is cooking and some of the other challenges that I see out there a lot.

The first thing is, again, I'm just a standard user and now I'm in the ditch. So if I go to "Device
Manager," what does it say? Device Manager says, "Hey, man, I'd love to help you, but you're just a
standard user. You can look but not touch." This prevents people from doing things like updating
their own printer drivers or installing fonts and other important things.

Brigg: Or removing hardware devices, which I've seen a lot.

Jeremy: Exactly right, disabling devices if you don't want them.

Here's another common thing. Look, I love that PDQ Deploy can deploy just about everything, but
there are going to be sometimes where one or two people at the company need an application and keep
it updated. And you don't want to be the guy constantly being on the phone making the packages and
getting it deployed if it's just a handful of people.

Instead, you can set boundaries or rules that say, by way of example, only the teachers can install
"iTunes" by themselves. But the problem is that when you install things like "iTunes" as a teacher,
here's what happens. This is exactly what happens. There's nothing up my sleeve here. They download
iTunes as a standard user. It tries to unpack. It looks like it's working. They go through a couple
of screens. They go ahead and click on "Next" and then "Install" and what do we get? The UAC prompt
right in our face.

What we're going to do is boundaries, "boundrify" them, ensure that the people who are currently in
the ditch can overcome being in the ditch for just a handful of applications. I just happen to be
using iTunes for this particular example.

Let's go ahead and see if our TreeSizeFree made it over to our computer here. I'm going to go to
"Uninstall a program" and just see if it's here. There it is: "TreeSizeFree." Now let's go ahead and
see it run. Here we go: "TreeSizeFree."

It looks like two versions. It's really two ways to get into TreeSizeFree. One is the standard user.
The thing about TreeSizeFree as a standard user is you can't select the entire hard drive. It
actually won't let you do it. You get access is denied here or if you try to run it here, you get a
UAC prompt.

That's the thing. There's nothing wrong with running TreeSizeFree. What we're going to do is make
sure that the entirety of the application, or any application that throws a UAC prompt in your face,
is elevated and just those applications. So you're not running with the scissors full-time. You're
giving the person who needs the scissors the process elevation with least privilege.

We'll go ahead and go over to our management station over here. Then we'll go ahead and create a new
Group Policy Object for our "WEB_Engineers." We'll go ahead and call this "PP Least Priv demo."
"OK." We'll right click and click "Edit" here.

You can do this for a gaggle of computers or a gaggle of users. I just happen to be doing this for
my gaggle of users here. I like to think about the user. So we go to user side, "PolicyPak." This is
under "Least Privilege Manager" here. I'll conquer all three problems in one fell swoop.

The first one we'll do is "Add" a "New Executable Policy." That's going to be for our friend
TreeSizeFree. Now I happen to have TreeSizeFree already on this machine to give an example here, but
I could if I want to remote to another machine to do that too.

I'm going to say any time I see the "Signature" of the TreeSizeFree guys, then they're cool. I know
everything they do is cool to go. So I'm going to pick "From EXE file" and pick "c:\\Program Files
(x86)." I think it's called "JAM Software." There it was. "TreeSizeFree," and pick that.

Brigg: What's the reason why I would like to choose a signature condition rather than say a path or
something like that?

Jeremy: "Path" is an exact name, which is totally fine. Maybe we could do that too. You can do
"Hash," which is a digital fingerprint of a file. You can do "Signature," which is anything that's
signed by your organization. And you can do combinations too, which is what we're going to do for
our last magic trick.

Brigg: So this is more secure than just a path would be because I could be malicious and put in a
wrong path.

Jeremy: Exactly right. Signature is digitally signed and you're good to go there.

Brigg: Excellent.

Jeremy: Go ahead and click "Next." We're going to "Run with elevated privileges." It's just a simple
as that. Say "let tsf run as admin" there.

Brigg: Let it be free.

Jeremy: Let it be free. Next thing we're going to do is "Add" a "New Control Panel Applet Policy."
This one is even easier. You just pick the thing you want off here, "Device Manager," and you're
ready to go. That's it. Click on "Next," "Run with elevated privileges." Then we'll go ahead and
"let dm run."

Now the last thing we said we wanted to do, we could also do a "New Windows Installer Policy," so if
there's an MSI. We can elevate scripts. We can elevate Java policies. Actually, I think the iTunes
is not a Windows installer. I actually think it starts off life as an executable, so we'll do a "New
Executable Policy." That's kind of weird, right?

Brigg: Yeah, they package a lot of things in there.

Jeremy: Let's actually "Use combo rule" because, wait a second, if it's called iTunesSetup and then
we rename BlowMeUp.exe to iTunesSetup, then that's bad. So we don't want to do it by name. So maybe
we'll do it by two things. We'll say if it's called ("Path") iTunesSetup and signed ("Signature") by
Apple – two things.

Brigg: Nice.

Jeremy: The more factors that you use, the stronger this gets. We'll go ahead and click "Next." Then
we'll go ahead and pick "Add file." I happen to have a copy of that file here. I'll "Browse" for it
on my "Desktop" here. There it is: "iTunes64Setup." Actually, that would be a particular location. I
want it anywhere. I don't care where they get this iTunesSetup. That's totally fine by me because it
has to be signed by the Apple guys. Let me go ahead and find it again: "Desktop" and
"iTunes64Setup." That's very strong – name and signed. We'll go ahead and click "Next."

We'll "Run with elevated privileges." P.S., we're not going to show it now but if you wanted to, you
could also put the smackdown on things. If you wanted to say don't let a particular application or
don't let anything from a particular vendor run, so you can say anything digitally signed by this
vendor, put the smackdown on it. We're not going to do that here, but it's another thing you can do.

Brigg: I can imagine a couple of vendors that I would like to do that to.

Jeremy: Now "let itunes install," not let iTunes run elevated, just the iTunes installer. Now we'll
go back to our endpoint here and go ahead and run GP Update ("gpupdate /force"). We'll give this a
minute to finish up.

Let's review. The three things that we want to see happen are TreeSizeFree acting correctly, we want
to get into Device Manager correctly, and we want to let iTunes finish up and install its thing.
We'll go ahead and wait for this policy to wrap it up.

Brigg: Then we'll have happy users out of the ditch.

Jeremy: Happy users out of the ditch, exactly right. Get out of the ditch. Exactly right. Now that
this is almost done, we'll go ahead and close that window out. Now it's time to go ahead and run
"TreeSizeFree" right here. Now no more admin thing. If we were to "Select Directory" the whole
computer here, the whole drive, there we go. No more UAC prompt. No problem there. We've elevated
just this process, not running with the scissors all the time.

If we were to go to "Device Manager" as our second thing, before we had a UAC prompt and it said you
are a standard user. None of that now. If we needed to update a particular driver, if we needed to
install our own printers, in another scenario we can install our own fonts, all of this is available
to you.

Then the last thing we said is a particular application for a particular subset of users, we wanted
to enable them to do it without having to call the help desk and get that all through the pipeline.
Let's go ahead and see if iTunes this time wants to cooperate. You can see inside there's an MSI,
but it started off life as an executable.

Brigg: Yes, that's frequent. That happens a lot of times.

Jeremy: We'll go ahead and click on "Next" here. The UAC prompt that was there, no more there. There
we go. That's it. Well, PDQ Deploy doing its thing.

Brigg: Yes. PolicyPak doing its thing. Really, just from a system administration standpoint, this is
wonderful. In the space of how many minutes did this take?

Jeremy: Four or five?

Brigg: We did something that used to back when I started doing this would take hours.

Jeremy: If at all.

Brigg: So this is wonderful stuff.

Jeremy: Thanks so very much.

Brigg: Thank you.


