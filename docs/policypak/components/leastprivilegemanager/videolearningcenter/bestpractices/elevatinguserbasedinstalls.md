---
title: "Best Practices for Elevating User-Based Installs"
description: "Best Practices for Elevating User-Based Installs"
sidebar_position: 10
---
# Best Practices for Elevating User-Based Installs

Don't provide TOO MANY rights with PP Least Priv manager. This video goes over some best practices
on what to do and what NOT to do with PPLPM and user-self installs with MSIs and EXEs.

<iframe width="560" height="315" src="https://www.youtube.com/embed/6Mhggaly8Z8?si=N5ckfWG5sK6QDags" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PPLPM: Best Practices for Elevating User-Based Installs

Hi. This is Jeremy Moskowitz. This video is a best practices guide for letting users self-install
their own applications. I have a whole slew of little base hit examples to make sure you do the
right thing instead of doing the wrong thing.

Let me show you how this video got generated. Let me show you an example of what we got. For
instance, we got somebody who created a rule that did the following. They created a "New Executable
Policy" because they wanted Google Earth to be installed. So they created a simple rule of a
"Signature." They also had this checkbox ("Apply to child processes") checked which we'll talk about
later, which is the default.

They picked "Select reference file" of "GoogleEarthProSetup" and they clicked "Next." They selected
"Run with elevated privileges." They wanted to "let google earth setup run." This works great except
it's terrible. Don't do what I'm doing here, and I'll show you why. I just want to show you, like I
said, the worst practice first. Then we'll go into the best practice second.

The policy is now applied. We go ahead and run "GoogleEarth" here. And sure enough, Google Earth
will download, install, no rights required now. We've gone and elevated the UAC prompt, and that
part is over. So that part is great. That all worked fine.

But the report that we got was use "Google Chrome." And then what happens when we run that? That
flips out also. What's going on? Well, what that rule says is let everything from Chrome – from the
installers to the applications themselves – absolutely everything run with admin rights.

That's a terrible idea. You don't want to run Chrome with admin rights. You click on a bad thing,
and now the bad guys are running as an admin on the whole box. Terrible idea. Don't do that. Not the
thing you should be doing.

What you should be doing is roping it in and making it a lot more finetuned. Let's go ahead and show
you how you would do this with some other examples, and then we'll come back around to Google
Chrome.

A good example is actually "iTunes." For instance, you try to run "iTunes," and what happens? It
won't let you. In fact, iTunes is special. It's an MSI wrapped inside an executable. It's not really
that special. You go ahead and click "Next" and you click "Install," and it doesn't let you because
you're not a local admin. No problem.

Let's take a look at some characteristics though of iTunes. How can we say we only want to make sure
it's just the iTunes setup that gets installed and not everything by Apple? Well, if you look at the
"Properties" and take a look at the "Details," there are a couple of items here that we can key off
of. This is intrinsically built into the build of iTunes.

One is this thing called "Original filename." We'll talk about that. Then there's the "File version"
and the "Product name" and "Product version." If we take a look at creating a rule for this, instead
of creating a blanket rule that says let everything from Apple run with admin rights, that's not
what you want. What you want instead is to "Use combo rule" to get the rule as fine-grained as
possible.

You want a "Signature" rule, so it's signed by Apple, matching the "File Info" that we just talked
about, the "version" and the "Product Info." You also need to have "Apply to child processes"
automatically checked because, remember, this is an executable wrapped into an MSI. If we don't have
the child processes launched, then it won't be able to continue the setup.

Let's go ahead and pick "Select reference file" "From EXE file" for "iTunes6464Setup." There's the
digital signature. That's great. Then what we want to also select next is the same one, iTunes, and
look. It matches what we saw in the details. What we're looking to see is that the actual insider
"Name," no matter what the actual file is called, but the insider name is going to be called
"iTunesSetup.exe." The "Product Info" "Name" also is called "iTunes" and it has a particular
"Version" match.

Let's look at that one more time and see what it's going to look like inside here in "Details."
Here's the "iTunesSetup.exe" "Original filename." There's the "Product name," and there's the
"Product version" and the "File version" name. All four of those things are listed here and we're
saying as long as that "Equals" or if you want to you can select "Higher or Equals" so they can keep
it updated themselves. Does that make sense? As long as it's iTunesSetup signed by Apple.

So "itunes setup installed by apple," now we're getting somewhere. This is the least rule possible
in order to make it
happen, [Least Privilege Manager](https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html).
Okay, we'll go ahead and close that out and then we'll go ahead and try "iTunes" and see if it all
matched up and all worked. Ten seconds ago, we got a UAC prompt. No more UAC prompt. It continues
onward.

When this install is over, it's not going to run as an admin. It's just installing as an admin.
We're not blanketing and saying everything from Apple run as an admin. Just this particular
installer matched by two criteria. That's the important piece here.

Okay, great. There we go. If we were to try to run "iTunes," again, iTunes itself is not going to be
running with admin rights. It's just running with standard rights. The installer, that's the part we
want to run with admin rights.

Let's go on to another one, a slightly different one. Here's "PowerPointViewer.exe." If we look at
its "Details," look at that. It doesn't have all the same details that iTunes has. I don't know why.
It just doesn't. But you can still use this to your advantage. You can still get kind of close to
the goal.

What we'll do here for the Power Point Viewer installer is make a "New Executable Policy." We'll
"Use combo rule." You can actually use any of these criteria: by name ("Path"), by "Hash," by
"Signature" or by "File Info." We can do three. We can do by "Path," "Signature" and "File Info."
Let's go ahead and "Add," "Add file," which is "PowerPointViewer" first. We'll say that it can be
from anywhere. We don't care where it's launched from.

Then we'll go ahead and pick the "Signature Condition." We're going to say that it's going to be
signed by "Microsoft." There are probably a billion certificates with this one. Then lastly, let's
go ahead and select the same thing for the "File Info Condition" here. Now we're going to populate
what we can get.

Well, we can't get everything. It can't get the "Name." It can't get the "Product Info." So not a
good candidate for "File Info." That's really what I'm trying to show you here. So "File Info
Condition" is better than just having the "Path Condition." But since we can't do that, we'll just
"Back" out of "File Info" and we'll just say it has to be called PowerPointSetup.exe when it's
digitally signed by Microsoft.

That's about as good as you can get. I mean, you could argue that you have a "Hash" value, but
that's a very specific version of Power Point Viewer. So "PowerPointViewer.exe," "Run with elevated
privileges," "let PPt view install."

Let's go ahead and see that work. We'll go ahead and give this a minute to finish. All right, now
that that's done, "PowerPointViewer," "Click" and "Continue" to install and it does its thing
perfectly well. That's going to be good enough for Power Point Viewer. There's really not a better
way to triangulate against it because we can't get the rules associated with that. In other words,
there's no file-based information.

That leads me on to my next one, which is Google "ChromeSetup" and "GoogleEarthProSetup." This one
is especially weird. If we look at the "Properties" of Google "ChromeSetup" "Details" and we look at
"GoogleEarthProSetup" "Details," look at that. They're exactly the same. That is a little
frustrating. That's a little weird.

What you can say is if the inside "Original filename" is called "GoogleUpdateSetup.exe" and it's
signed by "Google Update," then I'm cool. I'll let it install. But then you could also do it by name
itself of the actual file that's on disk. So we can use all three values, and that's what I'm going
to do right now. So let's go ahead and do that together.

If I were to create a "New Executable Policy" and "Use combo rule" of "Path," "Signature" and "File
Info," – so three vectors – what I'm going to say is "Add," "Add file," and I'm going to pick
"GoogleEarthProSetup." I'll say it can come from anywhere.

I want to then "Select reference file" "From EXE file." As we just saw, it picked up the
"GoogleUpdateSetup.exe" insider "Name." It's weird that both products actually hit the same insider
name. That's kind of weird.

So because there's nothing we can do about that, at the very least we can then set the "Signature
Condition" next. We'll go ahead and pick that one next: "GoogleEarthProSetup." There we go. Then
lastly, we've got the "Path Condition." This is the name of the file: "GoogleEarthProSetup.exe." The
"Signature Condition" is signed here. And then the "File Info Condition" with the insider
information is this or later, "Higher or Equals." So that's three different vectors.

In that case, we'll then "Run with elevated privileges." So we're pretty sure at this point it's
"Let Google Earth install as admin." I already have it installed, but let me prove a point here:
"Uninstall a program" here. I'll go ahead and "Uninstall a program" "Google Earth Pro" first just to
show you that. I'm giving it rights in order to uninstall here.

All right, now I'm going to run GP Update ("gpupdate"). Actually, while I'm here at the same time,
let me go ahead and uninstall Chrome also just so we can do an A-B comparison. So let me "Uninstall
a program" "Google Chrome" as well because that's also from Google land. Okay, no more Chrome.

Okay, so let's take it back to the one-yard line real fast. We created a rule that said only install
"GoogleEarthProSetup" but not "ChromeSetup" as admin. Let's go ahead and double click on
"GoogleEarthProSetup." Let's see it go ahead.Remember, we're using three vectors: the actual name on
disk, the internal name which is called GoogleUpdateSetup and then also the digital signature. If
all things work out, there we go: Google Earth.

Now remember, this is ostensibly the exact same program, but its name is "ChromeSetup." When we go
to double click that, we're not prompted for rights. In this way, it's not the best because both of
these applications are using the same internal name. It would be better if Chrome would fix that and
they would have different internal names. It would be more specific. With that being said, that is
the best practice there.

The last one I want to talk about, which is "SkypeSetup," this one is actually not such a big deal.
If you try to go ahead and "Install" it without admin rights, of course, you get prompted. This is
for most MSIs, what I'm about to show you here. So that is an option if you want to do that, but
this isn't nearly so bad.

If you go ahead and create a "New Windows Installer Policy" and "Use simple rule" with "Signature"
over anything from the "Skype" guys, I don't know, if Skype or this product company has another MSI,
you're basically saying anything that this product company that has an MSI go ahead and let your
users install it. You may want to do that but probably not. The point of the story is, you don't
want to pick an MSI and then have every freaking thing by that publisher be free reign to let that
person install.

I suggest instead that you once again "Use combo rule" and we'll do it by "Signature" and "Product
Info." So here's the "Signature Condition" first. Then the "Product Info Condition," we'll go ahead
and pick the same "SkypeSetup" here.

Now we're basically saying the same basic things. You can marry it to a particular "Product Code" or
you can do "Higher or Equals" a particular version. When you do this, you're just basically saying
let this installer run but not other installers from the same company: "Let skype installer run from
the skype guys."

If we go back over here and run GP Update ("gpupdate"), we'll give this a moment to finish. Close
that out. Now it's time to check out my product MSI, "Next," "Next," "Next," "Install." Now it will
go ahead and install.

That's the best practice video. The point of the story is, you want the most restrictive rule in
order to just get the job done. You don't want other installers from this company to be able to be
installed if you can avoid it. Sometimes it's not avoidable but if you can avoid it, you should.

Then like I said, the most important thing you want to avoid is having some blanket executable rule
so that Firefox or Skype or anything from Microsoft, you don't want any executable blanket rules
like that, that are signature because then everything from that application's vendor will run
elevated, not just the installers for the actual applications themselves.

I hope this clears up some things and helps you get started doing best practice with Least Privilege
Manager.  
Thanks so much.


