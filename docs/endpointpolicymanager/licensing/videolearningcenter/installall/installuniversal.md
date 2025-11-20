# How to install UNIVERSAL licenses for NEW Customers (via GPO, SCCM or MDM)

Just got your Netwrix Endpoint Policy Manager (formerly PolicyPak) License File but not sure how to
get it installed? This is your "one-stop shop" video to explain it all. Just get that license file
deployed via GPO, an on-prem tool like SCCM, or an MDM tool like Intune, and... you're done! Once
license... and that's it. We call it the "universal" license!

<iframe width="560" height="315" src="https://www.youtube.com/embed/BXlR3yVoMxQ?si=BHZuzZDTOo9DsXoO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hi, this is Jeremy Moskowitz. In this video, we're going to learn how to install your license files.
This is what your license files should look like. Maybe the file names are a little different, but
this is what you should have.

You should have a universal license that has an XML. You might have also asked for, or we've given
you, an MSI file. If we didn't give you an MSI file, don't worry. I'm going to show you how you can
create one. You don't even need to contact us. I'll show you how to do it. It's very easy.

Basically, we're going to do the group policy method first, or actually the Active Directory method
first, which can do group policy, or it can do SCCM, or if you have other on-prem utility like Case,
or PDQ Deploy, or something like that, you can use that. Then I'm going to move on to how to deploy
the MSI using SCCM or your MDM tool. Let's get started.

The idea is that you asked us for this license, and it has a scope. If we're to just look at it in
Notepad real fast. You don't have to be a technical wiz or anything. You should just spot-check this
and make sure that it has what you asked for.

The first thing you should see is something like Active Directory values and another thing called
UPN values. The idea is that this is going to light up for both Active Directory and for say an MDM
service.

The second thing that you're going to look for is capabilities. You have to specifically ask for the
capabilities you want. If you want to do the group policy method, that's great. If you want to do
the SCCM, or we also call it the XML method, you can do that too. Lastly, if you want to do MDM, you
have to ask for it. The idea is that all three of these capabilities you're entitled to with the
Enterprise or Professional license, but you do have to ask for them.

Then after that, you've going to see the components. The components are what you're licensed for.
Now, if you are an Enterprise customer, you get everything. That's the all-you-can-eat plan. You
just get new stuff when we create it. The Pro plan means that you have to specifically request the
items that you want and pay for those.

These are the licenses. They'll be here. That's how to interpret this. This is the XML file.

What we'll do to get that XML file installed, my recommendation, if you're going to use Group Policy
to get it deployed, create and link a GPO against the entire domain. I'll call this PolicyPak
Licenses for This Year. The idea is that you can just keep using it as long as you want.

The second thing is that we're going to use this license, this GPO, everywhere in the domain even if
you're not lighting up places the entire domain. That's okay. It doesn't matter. You can go ahead,
create, link it, and then enforce it. Enforced means that if you have a block inheritance later down
the line here that it's going to still work.

Creating and linking against the entire domain, that's recommended. If you can't do that, and you
need to do it against, say, your entire sales OU, that's fine. You can also enforce that if that's
what you need to do.

I'm just going to go right-click for the licenses for this year. I've already installed the
PolicyPak MMC Snap, and you can see it here. You're going to left-click here and get into the
computer side PolicyPak node. You're going to left-click again, right-click, and go to License
Management.

It's a little tricky, so let me talk you through that one more time. You're going to left-click on
the word, PolicyPak, right-click and get to License Management. Here is where you're going to import
in your license files.

I've got it in the desktop here. I've got your licenses. Here it is, my XML file. Again, your file
name might be a little bit different. Here's where you get to see the same stuff all over again. You
get to see the methods, GPO, XML, and MDM. You get to see the scope that you're licensed for.

I'm licensed for my entire domain. You get to see the components you're licensed for. If you have a
particular capability, for instance, Least Privilege Manager has standard and complete, you should
see that you've got your capabilities here. Then lastly your scopes, your on-prem scope and your MDM
or Azure AD scope.

Once you're done with that, go ahead and click close. That's it. You are done. How do we know we're
done? I'll show you how you know you're done.

What we'll do, we'll go over to our endpoint here. I've already preinstalled the PolicyPak
client-side extension. Again, you download this from the PolicyPak portal and the bits. Once you've
got that installed, this is what you're lighting up.

Now that I'm logged on to my endpoint machine, how do I know if I'm actually licensed? There's this
command, ppupdate, it does a couple things. First thing it does, it will recycle the existing
policies that we've already downloaded.

Two, it will tell you how you're licensed. Here we go. It will tell you, hey, you've got a Universal
License. This is the GPO where it was, PP Licenses for this year. It tells you the methods, which is
group policy, MDM, and XML.

Then it tells you when you're license for, start and expiry date. It tells you the scope, which is
going to be your on-prem scope, like fabrikam.com, and if the machine is capable of being MDM
enrolled and what the requirements are. This will either be a company name, or it will be a UPN name
like this.

The second part is what components are you licensed for. You can see if you're an Enterprise
customer you get all the things. Now, remember, from time to time we come up with new things. As an
Enterprise customer, you get to have those new things. If you're a Professional customer, you have
to buy into those new things.

This enterprise customer is not licensed for PolicyPak Software Package Manager. No problem, just
open a support ticket https://www.netwrix.com/sign_in.html?rf=tickets.html#/open-a-ticket, and we'll
turn around a new license for you as an enterprise customer. If you're a professional customer and
you love this thing, that's not a problem either. You can certainly just buy into it. This is one
method, the group policy method.

The next method is through SCCM, or KACE, or LANDesk, or whatever you use to deploy MSI files.
Remember, you've got the license as an MSI. What, you don't have a license as an MSI? That's okay.
Again, at the end of this video, I'm going to show you how to take that XML and make it into an MSI.
That's fine.

If you have the MSI, all you do is you use SCCM just like this, or if you're using an MDM service,
like Intune, like this. Remember, we're only talking about license file. You can see I've added it
here to my Intune. Now, for completeness, I also wanted to show you that you would also deploy the
client-side extension, and also PolicyPak policy files the same way. It's all the same thing. You've
just got to get them over to your endpoint.

Here we are. I'm back on the endpoint. I've rolled it back. I'm showing that we are not licensed.
There's no PolicyPak license on this machine. Here's the MSI file. I'm going to simulate deploying
this using either SCCM, or Case, or an MDM service of any kind. I'm just going to simulate that.

This would normally just happen in the background. You wouldn't see anything like this. That's it.
You're done. As long you get the file deployed to your Windows 10 machine, you are fully licensed.
After that, you're ready to go. Let's just check it out. I'm going to run ppupdate here, and what do
we get? Now, it says that we are licensed from a file location. We call this the XML method. It's
licensed in this location. That's where the license ends up.

You can see the methods are exactly the same. The start date's exactly the same. The scope is
exactly the same because it's the same exact license file. Here are the components that you're
licensed for. Here's what you're not licensed for. It's as simple as that to get license.

The last thing I said I was going to do is show you how you can create your own MSI if you don't
have one, but all you have is the PolicyPak XML, not a problem. When you install PolicyPak, also the
Admin Consul piece, you'll see that not only do you get the MMC snap-ins, you get a couple little
extra utilities. One of them is called the PolicyPak exporter tool.

All you're going to do is create an MSI here. Add a file. Pick your license file. There it is.
That's handy for me. Pick your license file. It's going to tell you that it's a universal license
type. You don't really have to make any choices or anything at all to do.

You can give it a nice name like My PolicyPak XML License, whatever. Then you're off to the races.
You just save it. You can call it ABC-123 XML, that's fine, or MSI, and you’re done. That's how you
can create an MSI if for some reason we didn't give you one.

With that in mind, that gives you everything you need to know on how to deploy the license file for
the Group Policy slash Active Directory method, which works great if you plan on using Group Policy,
or SCCM, or Case, or LANDesk to get your stuff deployed. If you're going to use an MDM service, you
saw how to do that too.

Long story short, hope this helps you out. Looking forward to getting you started with PolicyPak
real soon. Thank you so much.

