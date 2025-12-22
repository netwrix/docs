---
title: "Manage different proxy settings, even when offline"
description: "Manage different proxy settings, even when offline"
sidebar_position: 70
---

# Manage different proxy settings, even when offline

Starting in build 545, you can flip / flop specific settings even when offline. For instance, see in
this video how we change Firefox's Proxy settings — even when there is no DC. You're going to love
this tip !

<iframe width="560" height="315" src="https://www.youtube.com/embed/GcRNnadBw08" title="Endpoint Policy Manager: Manage different proxy settings, even when offline" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak: Manage different proxy settings, even when offline video transcript

Hi, this is Jeremy Moskowitz, former Group Policy MVP and Founder of PolicyPak Software. In this
quick demonstration, I'm going to show you how you can use PolicyPak to when you're on a particular
IP subnet range get a particular proxy server, and when you're not on a particular IP range get a
different proxy server.

I'm going to do this demonstration with Firefox, but it works perfectly well if you're using
PolicyPak in conjunction with Internet Explorer or other utilities that use a proxy. Let's get
started by taking a look. Here's my "Mozilla Firefox" on my target machine. If I go to "Options"
here, the "Home Page" isn't set and also the proxy server isn't set.

What we want to say is, when I'm on a particular IP range – and this particular machine happens to
be on IP range "192.168" – so when I'm on one range, get one set of settings; when I'm on another
range, get a different set of settings. The best part is PolicyPak can dictate those settings
continuously, even when the computer is offline. I'm going to show you that as well.

I'll call this "Firefox Proxy Demo." I'm doing this on the computer side. You could do it on user
side too, but I happen to be doing it on the computer side. Select "New/Application" and I'll pick
"PolicyPak for Mozilla Firefox." Again, this will work perfectly well for anything else that you
want. I just happen to be using Firefox. You can use the PolicyPak Pak for IEE as well.

We'll go ahead and click here. Let's set the "Home Page" to "www.INRANGE.com." For the network
proxy, we'll also set the proxy as "www.inrangePROXY.com," and we'll make this port "81." When we're
in this IP range, we're going to get the home page being one thing and also the proxy being the
same.

The way we're going to do this is we're going to use PolicyPak's item-level targeting. We will
"Enable item-level targeting" and then "Edit item-level targeting filters." What we're going to do
is click on "IP Address Range" and set it up accordingly – "192.168.0.0" to "192.168.255.255." When
I'm in this range, I get this set of settings. There we go.

While we're here, let's go ahead and "Edit Description" in case we need to do some troubleshooting.
We'll call this "ILT = IN RANGE." We're just making a note for ourselves; this is the in-range entry
point.

We'll do another one for "PolicyPak for Mozilla Firefox." This time we will call this
"www.OUTofRANGE.com." We'll do the same thing for the proxy. We'll call this "www.OUT
ofRangePROXY.com," and the port will be "55" or something weird.

Again, you could use "No proxy." That probably makes more sense when users are roaming off of your
network. I just happened to be using manual for this demonstration, but you could use "No proxy," if
you're so inclined.

Once again, we're going to go to "Enable item-level targeting" here under the "Options" button, and
we'll also "Edit item-level targeting filters." Actually, it's quite similar. We'll just set "IP
Address Range." Instead of the IP range being "192.168.0.0" to "192.168.255.255," we actually want
to make it when it "Is Not" that range. The first entry is when it is in range, and the second entry
is when it's not in range. Now that we've done that, we'll go ahead and "Edit Description" here.
We'll call this "ILT = OUT of RANGE."

Alright, so we've got these two entry points. Here's the best part. Let's get the latest, greatest
Group Policy by either logging on or running "gpupdate." Now PolicyPak is special. It's different
than the in-the-box policy. It's different than the in-the-box preference. We'll maintain these
instruction sets, even when offline.

Because of that what we get out of that it, let's go ahead and run "Mozilla Firefox" and see what
happens first. We'll go ahead and go to "Options" here, and  we'll go to "General." There we go. We
are "www.INRANGE.com." If we click on the "Network" proxy, there we go. We're using the
"www.inrangePROXY.com," just the way we expect.

Let's do something funky, and let's actually go off the network. I'm doing this part off camera.
Here we go. I'm changing this "Network connection" to be not on the network anymore. Now I've
traveled to their home or something.

I know when they're really at their home or some other business or something like that, they would
pick up a different IP range. I'm just setting this manually for the purposes of this demo. In real
life, of course, you wouldn't be doing this or they wouldn't have to do this. It's just for the
purposes of this demo: "255.0.0.0," "10.0.0.1" and "10.0.0.111." There we go.

Now I've changed the IP range on this computer, and there's no way that it's going to connect to the
mother ship and get the latest, greatest policy settings. The assumption is that they just got a new
IP range and they're just going to run "Mozilla Firefox." When you do that, magic instantly occurs
with PolicyPak. When you go to the "General" tab, "www.OUTofRANGE.com," because we're no longer in
that IP range anymore. If we look at the "Network" proxy, we set it up exactly what we expected.

This gets you an amazing superpower if you're using either Internet Explorer or Firefox in
conjunction with PolicyPak. There's really no other way to do this unless you're using PolicyPak.
This is a very common ask, so I figured I would show a demonstration of exactly how to do it. If you
have any questions on how to do this, please feel free to post your questions in the PolicyPak
forum.

Thanks so much. Talk to you soon.


