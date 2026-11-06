---
title: "Post installation"
description: "Check the PingCastle Pro website in IIS and enable HTTPS, which Entra ID authentication requires."
sidebar_position: 30
---

# Post installation

After the installation, check that the PingCastle Pro website is running in IIS. If you use Entra ID authentication, also enable HTTPS, which Entra ID requires.

## Check the website is running

1. Open **Internet Information Services (IIS) Manager**.
2. Check that IIS lists the PingCastlePro website.
3. Look for a black square icon to the right of the PingCastlePro website. The icon means the website is stopped.

   ![IIS Manager showing the PingCastlePro website status icon](/images/pingcastlepro/4.1/proinstall/image27.webp)

   The PingCastlePro website sometimes doesn't start because the Default Web Site is running instead.

4. If the website is stopped, stop the Default Web Site and start the PingCastlePro website.

   ![IIS Manager with the Default Web Site stopped and PingCastlePro website started](/images/pingcastlepro/4.1/proinstall/image28.webp)

## Enable HTTPS

Entra ID authentication requires HTTPS. If you use Windows authentication, HTTPS is optional.

### Add an HTTPS binding

The server needs a certificate installed before you add the binding.

1. Select the PingCastlePro website, then select **Bindings** in the **Actions** pane.

   ![Site Bindings dialog for the PingCastlePro website in IIS](/images/pingcastlepro/4.1/proinstall/image31.webp)

2. Select **Add**.

   ![Site Bindings dialog listing the existing http binding on port 80 and the Add button](/images/pingcastlepro/4.1/proinstall/image32.webp)

3. In **Type**, select **https**, and in **SSL certificate**, select the certificate.

   ![Add Site Binding dialog showing the HTTPS binding and SSL certificate selection](/images/pingcastlepro/4.1/proinstall/image33.webp)

4. Select **OK**.
