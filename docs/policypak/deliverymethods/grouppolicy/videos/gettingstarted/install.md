---
title: "Admin Console And CSE Installation"
description: "Admin Console And CSE Installation"
sidebar_position: 20
---
# Admin Console And CSE Installation

Learn where to download and how to install the Bits that you'll need to get started with PolicyPak
Group Policy Edition!

<iframe width="560" height="315" src="https://www.youtube.com/embed/GLU2bihX354" title="PPGP: Admin Console And CSE Installation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Admin Console And CSE Installation

Hi, this is Whitney with PolicyPak Software. In this video, we're going to look at getting started
with the PolicyPak Group Policy Edition.

In order to get prepared for this video, I went ahead and I went to policypak.com. I went to the
"Customer Login" area and then went ahead and logged in. Once I got there, I went ahead and I went
over to the "Downloads" tab, which should load in just a second here. There we go. I went to this
"Downloads" tab, and I went to the "Latest Bits" and I installed those. These are, as it says right
here, the "downloadables you install."

That's going to be the Admin Console MSI that we're going to need to put on our management station.
And then it's also going to include the client-side extension (CSE) that we need to install on our
endpoint. Now typically, we recommend if you're first getting started you go ahead and download
"Everything." That's going to give you all the basic stuff that you're going to need in order to
have a really comprehensive start. But the "Latest Bits" are the parts, just those little bits of
downloadables that you're going to need to install.

Let's go ahead and look at that. I have it hanging out on my Desktop right here. Actually, before I
install it though, let me show you what it looks like when you don't have it installed. Let me just
grab a random GPO here. When I choose to "Edit," it's going to look just like Group Policy always
looks. You'll see "Policies" and "Preferences" on both the user and the computer side. And, well,
that's that. It's to be expected.

However, let's go ahead and open this PolicyPak build right here, and I'm going to come up to the
"Admin Console MSI." I'm going to install the 64-bit one because that's the one that I need right
now. So I'll go ahead and install that. This looks like any MSI you've ever done before. You just
click through "Next," "Next." It's going to look like it didn't do anything. You'll just click
"Close," and that's that. Did we even do anything?

Well, let's close this out and restart it. Let's grab that same random GPO that we did before. Now
you see we have this "PolicyPak" node that we did not have two minutes ago. So now we have all of
these components on both the computer side and the user side here. So that's just a quick visual way
you can check to make sure you have that Admin Console MSI installed on your management station
here.

Now that we've done that, let's hop over to our endpoint and let's install the client-side
extension. Now normally, you would install this using whatever software deployment you would
normally use, whether that's SCCM or PDQ Deploy or something else in-house. But in this case, I've
gone ahead and downloaded it and put it onto my Desktop right here.

I'm going to go ahead and open this up. This time, I'm going to go to the "Client-Side Extension."
Actually, before I do that let me just prove I'm not pulling a fast one. Let's go ahead and just
look at the "Programs" we have available here, and no. No PolicyPak stuff here. Let's close this
down.

I'm going to install the "Client-Side Extension." Again, I'm installing this by hand, but you would
be able to install it using whatever your normal method is. Let me throw in some admin credentials
here. Once again, it's going to look like you didn't do anything. You're just going to click
"Close." Everything is going to look the same. There we go.

Just to prove a point one more time, let's hop back over to that "Control Panel" and see what we've
got. All right, there we go. "PolicyPak Client-Side Extension." Right over here we see the "Version"
number, "1856." If we ever ask you what version you're running, this would be a quick way for you to
be able to tell. We use the last four digits there.

Finally, let me come back over to my management station here. Let's open up my GPMC one more time. I
have already installed a "License GPO." You would have seen how to do that in a previous video. I've
already installed the licenses. I have my "License GPO" linked and enforced. If we come over and
check the "Settings," we can see that they are there and valid. Let's "show all" real quick.

So you see I've got my various "Licenses" for the "Administrative Templates Manager," "Application
Settings Manager," "Browser Router," and so on. You'll see that the expiration date is "February 10,
2019" so that date is valid.

Let's hop over to this endpoint, and let's just double check and make sure that we're receiving that
GPO, "gpresult." I already have it set up so that I can read computer side settings on my
"gpresult," so let's just double check here. "COMPUTER SETTINGS," "PolicyPak License GPO for
PolicyPak On-Prem (multiple licenses)." So we are receiving that GPO, so we know that it's getting
the license GPO.

Basically, what we've done today is we have installed that Admin Console MSI on our management
station, which is what gave us that PolicyPak node and in our GP editor. We also installed the
client-side extension so that PolicyPak can do work on our endpoint. And we just double checked that
the license GPO that we would have installed from a previous video is there and is getting delivered
to the machine.

So that's really the groundwork and the foundation that you need to lay in order to be able to get
PolicyPak up and running.

In the next video, we're going to talk about some of what the components do and how to work with
PolicyPak itself, so I hope to see you there.

Thank you very much.


