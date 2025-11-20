---
title: "Manage IE Certificates"
description: "Manage IE Certificates"
sidebar_position: 20
---
# Manage IE Certificates

Netwrix Endpoint Policy Manager (formerly PolicyPak): Manage IE Certificates

<iframe width="560" height="315" src="https://www.youtube.com/embed/Bh74f4V0nTo?si=61GoaSGC3gQBDIxs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager: Manage IE Certificates

Hi. This is Jeremy Moskowitz, former Group Policy MVP. In this video, I'm showing you how to manage
Internet Explorer, specifically "Certificates" within the "Content" tab. This works for any version
of Internet Explorer.

By way of example, let's say you had a certificate you wanted to embrace into Internet Explorer. I'm
going to show you how to do that. You can also remove certificates if you need to as well.

To get started here, let me set my stage. Over here on my server, actually I've got a share called
"share," and I have a cert called "CERT1.cer." I want to get that cert delivered to my client
machines. This is a Group Policy Object, so by using PolicyPak Application Manager we have
certificates tucked under this "Extras" tab.

Let me show you how it works. The idea is that you simply specify where the cert is. By way of
example, I just showed you it's on my "\\dc" in a share called "share" and it's called "cert1.cer."
I think that's what it's called, yeah, "cert1.cer." I want to put it in the "CA" and "add" it.

You could also, if you want to, by the thumbprint remove it, but you have to also know which
certificate store it's in. If you want more documentation on this process on adding and removing
stuff from the certificate store, we do have it in the express documentation specifically for this
Internet Explorer Pak that we have because I know this is kind of a complex issue, but that's the
general idea.

You can declare where it is. It can be local or over the network, provided they can get to it over
the network. Then you declare it based on the thumbprint. Now if you don't know where the thumbprint
is of a certificate, let me just show you how you would. Here in "Internet Options" if you were to
go to "Certificates" and look at any given certificate here – I'm just picking this one at random –
if you look at the "Details," you'll see that there's a thumbprint. You would take this thumbprint
and you would use it to select for removal.

I'm not going to do that now. What we're going to do here is just add this certificate to the "CA"
and click "Add." Now we're driving that in. If we go back over to this machine here and I run
"gpupdate," let's see what happens.

OK, now that we're done, we'll run Internet Explorer. Go back over to "Internet Options," go to
"Content/Certificates," and there it is: "Joe'sSoftwareEmporium." I've now added that to CA. Now
there are vocabulary words for "Personal," "Other People," "Intermediate Certificate Authorities"
and so on. We have it documented.

I hope that gives you a quick demonstration of how you could add and remove certificates using
PolicyPak for Internet Explorer.

Thanks so much for watching.


