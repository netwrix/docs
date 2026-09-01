---
title: "FSAA Applet Certificate Management Overview"
description: "FSAA Applet Certificate Management Overview"
sidebar_position: 160
---

# FSAA Applet Certificate Management Overview

Communication between the FSAA Data Collector and the FSAA Applet is secure by default using HTTPS.
For authentication, FSAA requires at least three certificates. You store them in the correct
certificate store managed by the FSAA Data Collector. These three certificates are:

- The certificate authority (stored in the FSAA Certificate Authority Store)
- The server certificate (stored in the FSAA Server Certificate Store)
- The client certificate (stored in the FSAA Client Certificate Store)

:::note
The FSAA Data Collector and Applet server support certificates in both the user’s
certificate store and the computer’s certificate store. Netwrix recommends storing certificates in
the user’s certificate store that is running the FSAA Data Collector or Applet server, because the
computer’s certificate store requires administrative access. When you generate certificates using
the **Automatic** option, FSAA stores them in the user’s certificate store.
:::


![Certificate Exchange Options section of the Applet Settings page](/images/accessanalyzer/12.0/admin/datacollector/fsaa/appletsettingscertificateexchangeoptions.webp)

The FSAA Data Collector provides three Certificate Exchange Options:

- Automatic (Default Option) – The FSAA Data Collector and Applet server entirely handle the
  creation of a self-signed certificate and certificate exchange between them

    - The self-signed CA generated will be valid for two years and the FSAA Data Collector and
      Applet server will also manage expired certificates and remove certificates that are no longer
      valid from the FSAA stores

- Manual – The FSAA Data Collector will expect all certificates to be valid and in their respective
  certificate stores before running a scan

    - To create and store certificates, use the `FSAACertificateManager.exe` tool. This
      application simplifies the process of creating certificates and stores them in the location
      that the FSAA Data Collector and Applet server expect. See the [FSAA Manual Certificate Configuration](/docs/accessanalyzer/12.0/admin/datacollector/fsaa/certificatemanagement/manualcertificate.md) topic for
      additional information.

        The `FSAACertificateManager.exe` tool is located in the
        `StealthAUDIT\PrivateAssemblies\FILESYSTEMACCESS\Applet` directory. For complete
        instructions and examples on how to use the tool, run `FSAACertificateExchangeManager.exe`
        with the `-help` command.

    :::note
    If the FSAA Data Collector and Applet are on separate domains without a trust, you must use
    this option.
    :::


- Provide Certificate Authority – The certificate exchange process is the same as with the Automatic
  option. However, instead of creating a self-signed certificate, the FSAA Data Collector uses a
  certificate you provide through the FSAA Data Collector Wizard. FSAA stores the provided
  certificate in the FSAA Certificate Authority Store.

    :::note
    If the provided certificate isn’t self-signed as the Certificate Authority, you must also
    store the root certificate and the Certificate Authority’s certificate chain in the FSAA
    Certificate Authority Store on both the client and server hosts.
    :::


    :::warning
    The FSAA Applet doesn't support password-protected certificates. Certificates
    generated when you select the Automatic option have no password. When you manually create a
    certificate for use with the FSAA Applet, omit the password parameter.
    :::


Additionally, you can configure the port used for secure certificate exchange by selecting the
Specify certificate exchange port checkbox on the Applet Settings page of the FSAA Data Collector
Wizard. The default port is 8767.
