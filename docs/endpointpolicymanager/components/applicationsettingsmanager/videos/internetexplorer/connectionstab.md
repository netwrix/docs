---
title: "Manage IE Connections tab"
description: "Manage IE Connections tab"
sidebar_position: 30
---
# Manage IE Connections tab

Netwrix Endpoint Policy Manager (formerly PolicyPak): Manage IE Connections tab

<iframe width="560" height="315" src="https://www.youtube.com/embed/dtuO2oFNiZ0?si=VK98Pyv_dnkiEnYX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager: Manage IE Connections tab

Hi. This is Jeremy Moskowitz. In this quick video, we're going to show you how to use PolicyPak
Application Manager to manage the "Connections" tab, specifically this "LAN Settings" button where
you can disable the "Automatically detect settings" and also set up a "Proxy server." I'm going to
go ahead and show you that right now.

Let's go over to PolicyPak Application Manager. Here we are with an entry in a Group Policy Object.
If we double click it, go ahead and click over to "Connections" and over to "LAN Settings," you can
see that the dialogue looks exactly the same.

Let's go ahead and uncheck "Automatically detect settings." While we're here, we can right click and
"Disable corresponding control in target application" so users can't work around it. We'll also go
ahead and click on a "Proxy server" ("Use a proxy server for your LAN"), and we'll call this
"ourproxy."

The way we do this is a little unique. You just do a colon and then put the port in
("ourproxy:8080"). You can see

```
Note: Do not use PORT field. Use Address:Port, 
like proxy:8080 in the Address field." 
So "ourproxy:8080," and we'll leave this "Port" field blank.
```

If we also wanted to, we could right click and "Disable corresponding control in target application"
for the "Port" field over there in Internet Explorer and the "Address" field. Let's go ahead and
just select "Disable corresponding control in target application" for all these guys so users can't
work around them. Let's go ahead and do that, and we'll click "OK."

That's it. We'll go ahead and go over back here. We'll go ahead and run "`gpupdate`." Wait for that
to finish. Then we'll go ahead and run IE. This will work for all versions of IE. If we go to
"Tools/Internet Options," go over to "Connections" and "LAN Settings," you can see we've unchecked
"Automatically detect settings" and now it's grayed out. A user can't mess with that. We've
delivered "ourproxy" with "8080."

Now if we want to go the extra mile as well, we can just rip the knob off so that this "LAN
Settings" button just doesn't even exist. PolicyPak has that superpower. We'll go back over here,
back to "Connections." Right click over "LAN Settings" and "Disable corresponding control in target
application" or "Hide corresponding control in target application." Literally, remove the control so
it's just physically not available at all. We're going to just rip the knob off entirely, so now
there's no way for users to get to these settings from the UI.

Let's go ahead and rerun IE. We'll go to "Tools/Internet Options" and go over to "Connections." The
button is completely gone, courtesy of PolicyPak Application Manager. This shows you how you can
configure those important settings and make sure users can't mess with your intention, and that's
it.

That's it for this little video. Go ahead and continue on to the next one and see how to configure
more stuff.

Thanks.


