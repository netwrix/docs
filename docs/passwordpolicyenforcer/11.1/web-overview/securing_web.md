---
title: "Secure Password Policy Enforcer Web"
description: "Secure Password Policy Enforcer Web"
sidebar_position: 50
---

# Secure Password Policy Enforcer Web

Password Policy Enforcer Web is designed to operate securely, but you must ensure that the web
server is also secure. Follow Microsoft's recommendations to secure the web server, and always
install and use an SSL certificate if Password Policy Enforcer Web will be used on an unencrypted
network.

## Install an SSL Certificate

Password Policy Enforcer Web sends passwords to the domain controllers over a secure connection, but
you need to set up SSL (Secure Sockets Layer) encryption for the connection between the web browser
and the web server.

:::warning
Do not use Password Policy Enforcer Web on a production network without SSL encryption.
:::


You can use a self-signed certificate, but most organizations purchase certificates from a
certificate authority. This is a recurring cost, and you will need to complete forms for the
certificate authority to verify your identity. You can install Password Policy Enforcer Web on a
server that already has an SSL certificate if you would rather not purchase another one.

The IIS documentation explains how request, install, and use SSL certificates.

See the
[Configure Server Certificates in IIS 7](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc732230(v=ws.10)?redirectedfrom=MSDN)
Microsoft knowledge base article for additional information.

Ensure that users only access Password Policy Enforcer Web over an encrypted connection after the
SSL certificate is installed. The URL should start with https://. Web browsers can be redirected to
always use the secure URL.
