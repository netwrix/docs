---
title: "Managing IE Proxy server with Advanced settings"
description: "Managing IE Proxy server with Advanced settings"
sidebar_position: 10
---
# Managing IE Proxy server with Advanced settings

IE Proxy server with Advanced settings

<iframe width="560" height="315" src="https://www.youtube.com/embed/GcRNnadBw08" title="Endpoint Policy Manager: Manage different proxy settings, even when offline" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PolicyPak: Managing IE Proxy server with Advanced settings

Hi. This is Jeremy. In this video, we're going to do some advanced work with Internet Explorer 8 and
the proxy server settings.

That's going to live here under "Connections" "LAN settings." There are two ways to use this. I'm
going to show you way number one first and way number two second. Way number one is you click on
"Use a proxy server for your LAN" and put in, for instance, I'll call this "proxy123:8080." This is
going to set the proxy server to "proxy123" for port "8080." Notice, as directed, I'm not doing
anything with the "Port" field. I'm just leaving it at "0." I don't even have anything set. Then
also for "Advanced," I'm not doing anything there either.

If you wanted to – I'm not going to right now – but you could "Disable corresponding control in
target application." Actually, why not? I'm here anyway. I'll disable all three of these buttons,
and I'll also disable the "Proxy server" checkbox. So I'm driving in the setting to make it so that
the UI is under control as well. I'll click "OK," and I'll click "OK" again.

Now there's an advanced scenario, but I just want to do the basic scenario before the advanced
scenario. We'll run GP Update on the endpoint here, and let's just see if we can get this part to
work first. Okay, that's done.

We'll run IE, and we'll go to "Internet options," "Connections," "LAN settings." You can see what
we've done. PolicyPak has driven in the checkbox here, driven in "proxy123," and driven in the
"Port." Remember, we didn't use the "Port" box in the Pak. We used the syntax "proxy123:8080," and
it filled in both things for us.

Now you may have a scenario where you want to use the "Advanced" button and use the stuff underneath
it. In fact, let me show you what that would look like. To actually get started on that, I should
probably make it so that we can see it, so I'm going to uncheck the "Disable corresponding control
in target application." I just want to show you what's underneath the hood for those first.

We'll just go ahead and run GP Update if you give me a quick second here. Alright, I'll go ahead and
close that out and run IE. Let me go over to "Internet options," "Connections," "LAN settings." Now
I've left the "Advanced" button exposed.

Look what it does. It will take what you've put in here and put it for all the items. That's
Internet Explorer just doing this naturally. If you had an advanced scenario where you wanted to
drive in something special for "HTTP," something special for "Secure," something special for "FTP"
and so on, you can do that.

The trick is, well, here's the trick. I'll show it to you. It's not really even a trick. It's just
how it works. Inside the Pak, go to "Connections," "LAN settings." You're going to clear this out
and have no value. So you're going to uncheck "Always reapply this setting." So you're driving in
nothing to "Address," nothing in "Port." In "Advanced" here, we have a "README" thing that describes
the exact syntax that you have to use. Maybe you need to take a screenshot of it, but you have to
get it exactly right or else it doesn't work.

Now I also wanted to point out that we have a little UI bug. See that right there? A kind of weird
bout with the multiple windows? That's fine. We know about it. We're fixing it. Just know that it's
just a cosmetic little bug there.

If we click on "LAN settings" again, we're going to clear this out, uncheck "Always reapply this
setting," and now let's go to "Advanced." The syntax for HTTP would be
"http=hello:8080;https=Hola:9090;ftp=GOODBYE:123." We're going to be driving in three of those guys.
There's also one for "Socks" as well, but I'm not going to do that right now. I'll just go ahead and
click "OK" and click "OK" again here.

It's locked and loaded and ready to go. Now if we go to GP Update here and wait for this to finish,
we'll close that out. Run IE and go to "Internet options," "Connections," "LAN settings." We're not
driving anything in there, but when you click on "Advanced," there we go. It's driving all the
settings in.

If you wanted to, you saw me remove the "Advanced" button. You could do a quick test first to make
sure this all works and then remove the UI so the "Advanced" button isn't available and therefore
users can't work around your settings.

I hope that explains how to use both the basic and advanced. Remember, don't use them both at the
same time. That is not allowed and will cause headaches. I hope this helps you out. If you have any
more questions, you can post them to the "How Do I" sections in the forums.

Thanks. Bye-bye.


