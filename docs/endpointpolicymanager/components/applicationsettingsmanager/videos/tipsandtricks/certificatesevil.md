---
title: "Wipe Privdog (and other evil certificates) off your network using Group Policy and Endpoint Policy Manager."
description: "Wipe Privdog (and other evil certificates) off your network using Group Policy and Endpoint Policy Manager."
sidebar_position: 20
---
# Wipe Privdog (and other evil certificates) off your network using Group Policy and Endpoint Policy Manager.

You might want to deliver settings based upon Windows' environment variables. There are several
types of Env variables, and in this demo, we show you how to find them and some use cases.

<iframe width="560" height="315" src="https://www.youtube.com/embed/K40cLgikAt8" title="Wipe Privdog and other evil certificates off your network using Group Policy and PolicyPak" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Wipe Privdog (and other evil certificates) off your network using Group Policy and Endpoint Policy Manager.

Hi. This is Sal from PolicyPak technical support. In this video, I'm going to show you how you can
remove certain certificates which might have gotten installed when you installed PrivDog or
Superfish, and your computers are going to be less secure on the Internet.

We can remove that certificate by using PolicyPak's preconfigured Paks for Mozilla Firefox and other
different browsers as well. The first step, we are going to look into the SHA1 fingerprint of that
certificate. The easiest way to get there is by going to the Mozilla Firefox "Options" and
"Advanced/Certificates." Then click on "View Certificates" button, and this is where you're going to
get that certificate SHA1 fingerprint.

All I need to do is to select that, click on "View" button, and that's how you can get that "SHA1
Fingerprint." I will select that, "Copy" into my clipboard. I will "Close" it out, and I will
"Cancel" it out here as well.

Once I have that in my clipboard, I will go into my Group Policy "Server." This is where I'm going
to open the Pak "Properties" in Group Policy Editor. That policy is already linked, so all I need to
do is to go into that option "Advanced (Certificates)" and I already have that fingerprint and I am
also removing ("remove") that from my target machine.

If you have a different browser like "Microsoft Internet Explorer," you can open the "Properties,"
go into "Extras" tab. This is where you can paste the "Certificates" fingerprint and use the same
key like "remove" to remove that.

So I have that option for my two different browsers. Now I will go into my target machine, and this
is where we have that certificate. All I need to do is to run "GP Update" and I will get that
policy. Once it's done, it is going to remove that certificate, and your computers are going to be
secure when they are going to browse the Internet.

We'll wait for user side policy to be finished. The policy finished successfully. Now we'll launch
Mozilla Firefox again, and we'll go under the same place to verify the certificate now is removed.
Now you can see that certificate is no longer on the target machine.

I hope it helps.

Thank you.


