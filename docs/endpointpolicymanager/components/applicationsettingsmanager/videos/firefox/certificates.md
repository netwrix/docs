---
title: "Manage Firefox Certificates"
description: "Manage Firefox Certificates"
sidebar_position: 100
---
# Manage Firefox Certificates

Need to add or remove a certificate dynamically within Firefox? Netwrix Endpoint Policy Manager
(formerly PolicyPak) makes it drop dead easy. Just point to the file and specify the store. Watch
this video to see how it's done.

<iframe width="560" height="315" src="https://www.youtube.com/embed/F31JfOmvKXI?si=jvMj08Zs8p_9KFdn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager: Manage Firefox Certificates

Hi. This is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software. In this
video, we're going to learn how to manage Firefox certificates using PolicyPak.

We're talking about this, the "Certificate Manager" here. We're going to be able to deliver
certificates to various stores here. For instance, if I wanted to deliver something to the root
authority, I can do that.

Let me go ahead and start off with an example here. I've already got my cert ready to go on my
server here. It's in a share called "SHARE" and it's in a folder called "Certs." It has a great name
called "RootCERT."

Let me go ahead and "Create a GPO in this domain, and link it here" and call it "Manage Firefox Cert
using PolicyPak." Right click and click "Edit" here. You can do this for either the "User" or the
"Computer" side. I'm going to do it on the "Computer" side, and therefore it will affect everybody
on this computer. "PolicyPak/Applications/New/Application" and pick "PolicyPak for Mozilla Firefox
23.0." It has an unusual name. It's called "Firefox 23.0," but it's really 23 and later.

Let me go ahead and go right to "Advanced (Certificates)," and we have a little template to help you
get started here. I can show you how it works, but I have a couple of examples prebaked and ready to
go for our little test here.

Basically, you give it a folder that contains the file. It can either be local, or as you can see
here it could be on a share somewhere. You give it the store name, and the store names are
documented in our documentation.

Then you give it a number if you want to check every X number of days. If you only want to validate
that the cert hasn't been updated in two days, you can do that. Or you can do nothing at all, and it
will simply just check every time. And the word "add" or "remove." Add is by giving it the
certificate itself, and remove is by giving it the SHA-1 fingerprint.

To go through our first example here, I've got a certificate ready to go hanging out on the server
under "certs\RootCERT.cer." I'm delivering it directly to "ROOT." I will check every time, so I'm
not giving it a number, and I'm selecting to "add." Let's just make sure that this is working.
That's it. It's just that simple.

If I close out Firefox here, run "gpupdate," let's go ahead and see if these updates take effect
here. Wait for this to finish. There we go. Let's go ahead and close that out. We'll go ahead and
run "Mozilla Firefox" here, and let's take a look at "Options/Certificates/View Certificates." Under
"Authorities," we said the word root. That's a special keyword, so we're looking for the word
"Root." There we go. We've delivered our "Joe's-Software-Emporium." We're delivering that right into
the root.

If we wanted to deliver something to the "Servers" store as well, we can go ahead and do that too.
Let's go ahead and close that out. We'll go ahead and go back to our server here. We'll go with my
second example here, which is to the "TRUSTED." It's called "TRUSTED," but it goes over to Servers.
We'll go ahead and right click over this guy, "Copy" him.

We'll go to "Advanced (Certificates)" and we'll paste him in. Just to be clear, what we're doing
here is we're driving in the certificate into "TRUSTED," which is really the keyword for Servers. If
I really wanted to, I could put a number in front of this like every "2" days if I wanted to. It
goes in this position here, before the keyword. I'm going to check every two days to see that has or
hasn't been updated, and that's about it.

Now let's go over to our target machine. We'll run "gpupdate" here, and let's see that this took
effect. Wait for this to finish here. There we go. Go ahead and close this out. Rerun "Mozilla
Firefox," and take a look at "Options/View Certificates." Now under "Servers," we're looking for
this guy right here. This cert wasn't there before. We've delivered it right here under "Servers,"
and we're ready to go.

Let's do one more. This time, I want to remove a certificate. In order to remove a certificate, it's
actually pretty easy. Let's go ahead and remove this guy. I don't know what he is or what he does.
It doesn't really matter. It's just an example here.

If we "View" the certificate here, we can take his "SHA1 Fingerprint" right there and "Copy" it into
the buffer. The goal is to remove this guy: "Digisign Server ID (Enrich)." Let's go ahead and close
that out.

What we'll do is I'll replace what I was going to do as an example with this fingerprint. There's
the new fingerprint. I'm going to take this guy and set him up to "remove." You have to take the
SHA-1 fingerprint ", remove" and that will blast it out. That's it.

Let's go ahead and take a look. Let's go ahead and close this guy out. We'll run "gpupdate" here.
We'll wait for this to finish. Close this out here. Go ahead and go to "Mozilla Firefox." Back to
"Options/View Certificates." It was right above the "\*.policypak.com" one, and now it's gone. So
that certificate that was here is now gone.

The last thing I want to just talk about ever so briefly is a little troubleshooting step in case
you can't get it to work. One of the things that I made a mistake in doing is just not specifying
that the certificate's name is correct. If you forget to put on .cer or .x509 or whatever the
problem is.

If you do SHIFT+CTL+J, you actually get this browser console and you can see what's happening inside
here. If you look closely, you'll see that "PolicyPak" is doing X, Y, and Z to various certificates.
You'll get a little bit of extra information inside Firefox. It will tell you, "I can't find your
certificate" or so on. That's very helpful.

That's about it. That's managing Firefox certificates using PolicyPak. If you want to get started
right away, you know how to get in touch with us. Just simply click on "Contact Us" and tell us what
you want to do, and we'll get you started in a trial.

Thanks so very much, and we'll talk to you soon.


