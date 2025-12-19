---
title: "Endpoint Policy Manager and Edge ‘Special' policies"
description: "Endpoint Policy Manager and Edge ‘Special' policies"
sidebar_position: 40
---
# Endpoint Policy Manager and Edge ‘Special' policies

After you create your Enterprise Mode site lists, you can decide how to handle Edge browser. Do you
want websites to render in Edge or IE? This video shows you how to adjust for your conditions.

<iframe width="560" height="315" src="https://www.youtube.com/embed/hJB0LOFtXSs" title="Endpoint Policy Manager and Edge ‘Special' policies" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Endpoint Policy Manager and Edge ‘Special' policies

Hi. This is Jeremy Moskowitz, Group Policy MVP and Founder of Netwrix Endpoint Policy Manager
(formerly PolicyPak) Software. In this video, I'm going to demonstrate two special policies that we
have for Browser Router. One is called "All Intranet to IE policy" and the other one is called "All
Enterprise from Edge to IE policy."

These are both actually regarding Edge. These items are available as regular garden-variety Group
Policy settings, but we've also got them in Browser Router. Let me demonstrate what they're meant
for and how you would use them.

For instance, because Edge only works Windows 10, that's only going to come into play right here.
Let's say you are in Edge and you decide to go to a site that's on your Enterprise site list. For
instance, in a previous video, I made an Enterprise site list for "www.microsoft.com." You can see
that it's still hanging out in Edge. That's not really what I want.

What I really want is I want all things that are on the Enterprise site list to go from Edge to
Internet Explorer ("All Enterprise from Edge to IE"). When I click "Enabled" here, we're saying that
if we've got any items like this one that's in the Enterprise Mode site list – so I'm making
"www.microsoft.com" force into the "IE8 Enterprise Mode" – when I've done that, at that point now if
I'm in Edge, Edge should force open Internet Explorer.

Let's go ahead and see if that happens. I'll go ahead and run GP Update here. I'll go ahead and
close that out. Let's go back to Edge here, and we'll go to "www.microsoft.com." Edge automatically
force opens up Internet Explorer, and we put it in the site list dynamically. This gives you an
ability from Edge to force open Internet Explorer because it's in the site list.

Now here's another one. Let's say here's the other policy. If we go to "www.msn.com" as an example
here. This isn't on a site list or anything. Let's force it for now for the purposes of this
demonstration here, let me go ahead and force it into "Local intranet." If I click on "Sites" here
and I click "Advanced," I'm going to "Add" in "www.msn.com" into "Local intranet."

Now that I've done that here and, in Edge, if I go to "www.msn.com," right now you can see that it
renders in Edge, which maybe isn't what we want. If we want to instead, we can right click, "Add" a
new special policy that says "All Intranet to IE policy." What this is going to do is, for Edge
only, we're going to open up any item that's currently in the intranet zone and force open Internet
Explorer.

We'll go ahead and run GP Update and see what happens. We'll go ahead and close this out. Now ten
seconds ago, when I went to MSN.com, where did it go? It stayed in Edge. Now, if I go to
"www.msn.com," because we've specified that this is an intranet site, it will force open in Internet
Explorer. So we're force routing the items from Edge directly to Internet Explorer because we're
saying do that for the items that are in intranet zone.

We're taking advantage of something that already exists inside of Group Policy and Microsoft Edge,
but we're putting it in a nice one-stop-shop place for you. This gives you the advantage to create
your dynamic Enterprise Mode site lists using Endpoint Policy Manager Browser Router and also set
the policies you need to do what you need to, to force Edge to open up Internet Explorer under those
conditions.

If you have any questions, we're here for you. I hope you can take advantage of this right away.
Thanks.


