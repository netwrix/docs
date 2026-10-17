---
title: "Post installation"
description: "Complete the steps that follow a PingCastle Pro installation."
sidebar_position: 30
---

# Post installation

To use Azure authentication, enable HTTPS.

Check that IIS lists the PingCastlePro website.

Sometimes the PingCastlePro website doesn't start because the Default Web Site is running instead. Look for the black square icon to the right of the PingCastlePro website, which indicates that it's stopped.

![IIS Manager showing the PingCastlePro website status icon](/images/pingcastlepro/4.0/proinstall/image27.webp)

If this happens, stop the Default Web Site and start the PingCastlePro
website.

![IIS Manager with the Default Web Site stopped and PingCastlePro website started](/images/pingcastlepro/4.0/proinstall/image28.webp)

Ensure you have a certificate installed. If this isn't the case, you
can create one with the Server Certificates configuration option.

![IIS Server Certificates configuration option](/images/pingcastlepro/4.0/proinstall/image29.webp)

Select "Create Self Signed Certificate" at the right to do so.

![Create Self Signed Certificate option in IIS](/images/pingcastlepro/4.0/proinstall/image30.webp)

Then edit the binding of the website:

![Site Bindings dialog for the PingCastlePro website in IIS](/images/pingcastlepro/4.0/proinstall/image31.webp)

![](/images/pingcastlepro/4.0/proinstall/image32.webp)

Then add an HTTPS binding and be sure to select an SSL certificate, like
the one you created earlier.

![Add Site Binding dialog showing the HTTPS binding and SSL certificate selection](/images/pingcastlepro/4.0/proinstall/image33.webp)
