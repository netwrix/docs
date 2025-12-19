---
title: "FSAA Applet Certificate Management Overview"
description: "FSAA Applet Certificate Management Overview"
sidebar_position: 160
---

# FSAA Applet Certificate Management Overview

Communication between the FSAA Data Collector and the FSAA Applet is secure by default using HTTPS.
For authentication, at least three certificates are required and need to be stored in the correct
certificate store managed by the FSAA Data Collector. These three certificates are:

- The certificate authority (stored in the FSAA Certificate Authority Store)
- The server certificate (stored in the FSAA Server Certificate Store)
- The client certificate (stored in the FSAA Client Certificate Store)

:::note
The FSAA Data Collector and Applet server support certificates in both the user’s
certificate store and the computer’s certificate store. It is recommended to store certificates in
the user's certificate store that is running the FSAA Data Collector or Applet server because
administrative access is required for the computer's certificate store. When certificates are
generated using the Automatic option below, they are stored in the user’s certificate store.
:::


![Certificate Exchange Options section of the Applet Settings page](/images/accessanalyzer/12.0/admin/datacollector/fsaa/appletsettingscertificateexchangeoptions.webp)

There are three Certificate Exchange Options provided by the FSAA Data collector:

- Automatic (Default Option) – The creation of a self-signed certificate and certificate exchange
  between the FSAA Data Collector and Applet are handled entirely by the FSAA Data Collector and
  Applet server

    - The self-signed CA generated will be valid for two years and the FSAA Data Collector and
      Applet server will also manage expired certificates and remove certificates that are no longer
      valid from the FSAA stores

- Manual – The FSAA Data Collector will expect all certificates to be valid and in their respective
  certificate stores prior to running a scan

    - To create and store certificates, the `FSAACertificateManager.exe` tool can be used. This
      application was created to simplify the process of creating certificates and will store the
      certificates in the location that the FSAA Data Collector and Applet server expect them to be
      stored. See the [FSAA Manual Certificate Configuration](/docs/accessanalyzer/12.0/admin/datacollector/fsaa/certificatemanagement/manualcertificate.md) topic for
      additional information.

        The `FSAACertificateManager.exe` tool is located in the
        `StealthAUDIT\PrivateAssemblies\FILESYSTEMACCESS\Applet` directory. For complete
        instructions and examples on how to use the tool, run `FSAACertificateExchangeManager.exe`
        with the `-help` command.

    :::note
    If the FSAA Data Collector and Applet are on separate domains without a trust, this
    option must be used.
    :::


- Provide Certificate Authority – The certificate exchange process is the same as with the Automatic
  option. However, instead of creating a self-signed certificate, the FSAA Data Collector uses a
  certificate you provide through the FSAA Data Collector Wizard. The provided certificate is stored
  in the FSAA Certificate Authority Store.

    :::note
    If the provided certificate is not self-signed as the Certificate Authority, the root
    certificate and the Certificate Authority’s certificate chain must also be stored in the FSAA
    Certificate Authority Store on both the client and server hosts.
    :::


    :::warning
    The FSAA Applet does not support password-protected certificates. Certificates
    generated when the Automatic option is selected have no password. When manually creating a
    certificate for use with the FSAA Applet the password parameter should be omitted.
    :::


Additionally, the port used for secure certificate exchange can be configured by selecting the
Specify certificate exchange port checkbox on the Applet Settings page of the FSAA Data Collector
Wizard. The default port is 8767.
