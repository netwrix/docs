# Testing and Troubleshooting By Renaming an endpoint Computer

If you want to bypass any potential licensing issue, test your Cloud or MDM policies before
exporting them, or set up a home test lab, rename your endpoint to contain the word "computer" in
the name. See this concept at work in this video!

<iframe width="560" height="315" src="https://www.youtube.com/embed/X9KDZacRo08" title="PP (All Versions): Testing and Troubleshooting By Renaming an endpoint Computer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PP (All Versions): Testing and Troubleshooting By Renaming an endpoint Computer

Hi. This is Whitney with PolicyPak Software. In this video, we are going to look at a cool testing
and troubleshooting technique that's going to be great for you whether you are using the Group
Policy Edition, the Cloud Edition, or the MDM Edition.

What is this great troubleshooting step? What you want to do is have a domain-joined computer with
the word "computer" in the name of it. Why would you want to do that? For the Group Policy Edition,
you get to overcome any licensing issue just like that because any endpoint with the word "computer"
in the name acts as though it's fully licensed whether it is or not.

If you're using the Cloud Edition or the MDM Edition, that's basically a way for you to set up a
machine to get quick test results so you can make sure that everything is working in Group Policy
land before you export to cloud or export for an MDM service. Those can take a lot longer to verify,
so if you go ahead and test it in a domain-joined virtual environment, you go ahead and rule out
some problems pretty quickly.

Let me show you what I mean. Right now, I have a GPO right here that sets a Firefox homepage and it
allows Process Monitor to run elevated without getting a UAC prompt. If we come over here, we are
going to see when I run a "gpresult /r" we're going to see that indeed I'm getting that GPO. I also
have the latest "PolicyPak Client-Side Extension" on here. So "1856" is our most recent one as of
this videoing.

So I know I have at least two of the three pieces of the puzzle in play. The GPO is there. The
client-side extension is there. The license may or may not, but let's see. Can we run Process
Monitor ("Procmon") elevated? No. We're getting the UAC prompt.

I'm going to go to "Firefox." What am I seeing here? That certainly isn't the homepage that I had in
my GPO. So clearly something's wrong here, but what are we going to do about it? Well, let me come
over here, and let's go look at the name of "This PC" here. All right, "W10SYSTEM1703."

Let's "Change settings." Let's add the word "computer" to the name and see if we can't get this to
work correctly. Let's "Change" that "Computer name." I'm just going to call it "W10COMPUTER1." All
right, we're going to have to "Restart Now" and reboot this.

But once we reboot this, because we put the word "computer" in the name, we're going to resolve any
licensing issue that may be there and we'll see if that GPO works. Which is, again, great testing
for a Group Policy Edition or for the pre-deployment testing for the Cloud or MDM Editions.

All right, and we are back. Let's check and see if this machine is behaving as though it's licensed.
See if Process Monitor ("Procmon") will run elevated. There we go. It runs elevated just like we
told it to. If we come over to "Firefox," let's see if it takes us to policypak.com homepage that I
set for it. There we go: "Waiting for www.policypak.com." It looks like it's going to take us there,
and there we have it.

All right, so just to prove that I haven't pulled any trickery on you, let's go back and look at my
PC name again. Just check it out and see that it has the "computer" in it there. Yep,
"W10COMPUTER1." And I'm not receiving any kind of license GPO right now. Let me show you "gpresult
/r." There we go.

If we come up here to what I can see on the computer side, that's a Group Policy Compliance
Reporter. That's what that license is. But I'm not receiving any license file right now for the
Group Policy Edition. So we just changed the name of the computer. We bypassed the license issue,
and that allowed us to get that GPO that was doing PolicyPak work even though this machine doesn't
have a license GPO coming to it.

Again, that's a great way to rule out any licensing issue if you're using Group Policy Edition. It's
a great way to test your policies before you deploy them with the Cloud or the MDM Editions. And if
you have permission from Sales, it's a great way to be able to have just like a home test lab to do
some work on.

I hope that helps you out, and we'll talk to you soon. Thanks.

