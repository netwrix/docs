# How to Request Licenses from Endpoint Policy Manager by Creating a "License Request Key"

Want to get started with Netwrix Endpoint Policy Manager (formerly PolicyPak)? We have to count the
number of computers in on-prem AD and, if desired, in Intune. Here's how to choose which path, and a
walk through of each scenario.

<iframe width="560" height="315" src="https://www.youtube.com/embed/VEfdj8mMM4I" title="How to Request a &quot;License Request Key&quot;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz, and in this video we're going to learn how to request licenses from
PolicyPak. You'll have to do this every year, so it's good to understand how this works.

This is the download. In the download there's going to be a folder called Licensing for All
Products. Go ahead and click on that. Then you're going to double-click on the LT Tool.

The LT Tool is going to ask you a few questions. I'm going to go through the most common scenarios.
Hang tight if you don't see yours. I will get there.

The first thing you're going to probably want to do is find and disable unused computers. This is a
great little tip because the idea is that we don't want to charge you for stuff you're not actually
using. You're welcome to use find and Disable Unused Computers. Look through here and find any
computers you're not using.

By way of example, there's 22 unused computers that haven't ever had log-ons in 90 days. If you
wanted to, you can select all those and we will disable them. We're going to go into Active
Directory and actually disable them.

You can see these are the actual computers there. Go ahead and click there. There are the actual
computers there. The point is that if you wanted to you could disable one, two, three, four five,
whatever you wanted, or you can go bananas and disable all of them.

You can also include computers that have never logged on ever, which is a different statistic. That
number could shoot up to 100 if you've got a bunch of computers. We don't want to charge you for
stuff you're not using. If you decide that you want to reenable them, you can just go back into
Active Directory and reenable them.

The point is that we don't want to count these computers. I'll go ahead and do that. I'll make it so
that these computers, all of them, are going to be not counted toward my count. Just like that,
boom, I've disabled them in Active Directory.

The second thing you're going to want to understand is how to generate a license request key. This
is where the most of the magic happens. The idea is that you need to pick your path.

A very common path is Only Active Directory for use with GPO, or SCCM, or some other on prem domain
join machines. Then you also have Intune only. We also have Hybrid, which is the on-prem active
directory plus Intune. We'll go over that one last.

The first thing we'll do is we'll just do this Only Active Director Joined machines. We're going to
ask you two questions. One is who are you?

If you're a domain admin, you're going to want to select the entire domain. Maybe if you're not a
domain admin, that's fine too. What you'll want to do then is select the top level most OU that you
are the admin for. If you're in charge of the Sales Division, that's great. If you're in charge of
the North Sales Division, that's fine too.

Pick the highest place that you, yourself, or someone on your team can help you to create and link
GPOs. This isn't where you're going to use it. This is just who are you. I'm a domain admin, so I'm
going to go ahead and pick that. That's typically the best choice.

Then the next question is where do you want to use it? If you want to use it for the whole domain,
that's great. You'll go ahead and pick the entire domain. What we're going to do is count all the
computers. See the ones that are disable. Hey, look at that. We've disabled a bunch.

Then we're going to look at the ones that are trial computers. Those are the ones that have computer
in the name. We don't count those either. We don't count things that are not windows. Then we also
add in your Citrix and terminal server connections. We're going to try to count those. In order for
this tool to get the most accurate count, you have to be running it from a machine that can see that
information. You'll get prompted if that's not the case.

Then last but not least, we give you a total count here. We call this your Running Count. Hey, look
at that, you've got 52 computers across your entire domain. What's that? You don't want to do it for
the entire domain? Then don't. Pick just the OU or Peer OUs that you want. Note that you can't
somehow magically unselect some child and have the parent not come along for the ride. The idea is
that once you've selected a parent, all the children have to come along for the ride there too.

Once we've done that, you're off to the races. Go ahead and click Next. You're going to click
Finish. You're going to send this to us. I'll save this out in some new folder here. Desktop, New
Folder, I'll call this LT EXAMPLES1.

You can see it says On-Prem-AD-FABRICAM-LicenseRequestKey. This is the AD-only path.

Now let's go ahead and generate a different kind of license request. Let's pretend you wanted to use
PolicyPak exclusively and only with Intune. That's totally fine.

What you'll do is you'll go ahead and click Begin here. We give you some advice. Don't worry, I'm
going to walk you through this anyway.

What happens here is that we're going to download the Intune PowerShell commandlets. These are
Microsoft's PowerShell commandlets. That's important, and you'll see why that's important in a
minute.

Once this is all downloaded on this machine, we're then going to ask you to log on as someone who's
got the ability to check out all the computers that are in your Intune environment. Once we get that
count, that's what we need. We can go off to the races.

That did take a minute to download. That's fully expected. Then you're going to log on. My guy is
frank@fabrikam1000.com. You're going to put your credentials in here. This guy needs to be able to
read. If you've got a Global Reader, that's always good. You can use a Global Admin too, or there
are a bunch of other things that will work too. Global Reader's pretty good. I'll use
frank@fabrikam1000.com.

This guy, he's got two factor authentication turned on. Here we go. I've got to type that in. You
can see we're using the actual Microsoft technique to do this.

You can see what we're doing here. We're using the Microsoft Intune PowerShell commandlets to do
this. All it's doing is it's just reading your AD. We're not doing anything here. We're just reading
your Azure AD, specifically just your Intune accounts. By the time this is over, bang, hey look at
that. We found all the computers that were in Azure AD that were specific, exclusively, for Intune,
and found them.

Now, let's go ahead and click Next. You can see them here. This is just for demonstration. These are
just the computers that we did find. There we go, number of computers. If you want to save this out
to CSV, you can certainly do that. We'll go ahead and click Next.

This is a different request key. This is just for Intune. If you look closely, it says Intune
companyName. You can see what we got there.

Go ahead and click Finish. Go ahead and save this out, IntuneONLY-Fabrikam.com-LicenseRequestKey.
Look at that, we're off to the races.

Let's do the last one, which is Hybrid. We're going to go ahead and Generate a License Request Key.
What does hybrid mean? Hybrid means you've Hybrid Azure AD joined your machines, which means you are
connected to both on-prem AD, and also Azure Ad, but specifically, we're going to acquire the
machines that are exclusively in Intune. We're going to look for your AD machines, and your Intune
machines, and not charge you for both. We're only going to charge you for one instance.

We've already run the tool. Let's go ahead and hit Begin again. Let's see what happens here. I'm
already logged on as Frank. We'll go ahead and do this again.

We found the same 24 machines. How is this different than before? Now, after we find the 24
machines, now it's time to ask the same questions about your on-prem rule. We've got the Intune
world.

Now it's time to ask about the AD and GPO world. It's the thing we talked about earlier. If, for
instance, you are the Sales Admin, you can click that. If you're the Domain Admin here, you can
click that. You're going to count the computers here as well. I'm going as far and wide as possible
here to count all the computers that I can.

The point being is that what I'm looking for is this. We're looking to find the computers that are
some in AD, some in Intune, and which are in both. If you have some that are in both, we're going to
light it up and not make you pay for both. Let me go ahead and expand this here. There we go.

Here's how the licensing works. You've got all the computers in AD. You've got all the computers in
Intune. If you've got Hybrid Azure AD joined computers that are also in Intune, we're going to minus
those guys, so you're not charged twice. Then that's your number. That's how the math works here.

You can save this to CSV, you can save it to Excel. That way you can see what computers are in what,
make it really easy for you. Then we'll go ahead and click Finish here. Then we'll save the key
here, which is Azure AD Hybrid. This is what you're going to send to the sales team.

If you're not using Intune for your MDM, and you're using something else, notice how that's not a
selection yet. With that in mind, just tell your sales team person that you're not using Intune, but
you are using, say, Workspace ONE, or MobileIron, or Citrix Sim. That's totally find. We just have a
second separate set of directions, which involves you going to your environment, taking some screen
shots, and that's good enough for us. Again, those are a different set of directions. These
directions are if you're using exclusively Intune.

Hope this video helps you out. I'm looking forward to getting you started real soon with PolicyPak.
Thanks so much.
