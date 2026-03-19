---
title: "Apache"
description: "Apache"
sidebar_position: 10
---

# Apache

In order to integrate the Web Application onto an Apache server, it is first necessary to enter all
of the relevant settings:

## Document directory

The folder from which the Web Application should be operated is entered here. The default folder is
/var/www/html

## SSL certificate path

It is necessary to enter the directory in which the certificate will be saved here.

## SSL certificate key path

Finally, it is necessary to enter where the certificate key is located here.

![apache-en](/images/passwordsecure/9.2/installation/installation_web_application/apache-en.webp)

Once all of the settings have been entered, the Web Application can be created via the button in the
ribbon. The folder in which the ZIP file is located will then open automatically. The archive is now
unzipped and the contents copied to the document directory on the web server.

The configuration for the Apache server has now also been created and can be viewed on the Server
Manager.

![apache-en-2](/images/passwordsecure/9.2/installation/installation_web_application/apache-en-2.webp)

The configuration can be selected using CTRL+A and copied. It is then directly integrated onto the
Apache server.

NOTE: The configuration of the Apache server is always individual. Therefore, it is only possible to
roughly describe the process for a standard installation.

## Standard configuration

The file /etc/apache2/sites-available/default-ssl.conf is (for example "nano") opened. Everything
between`<IfModule mod_ssl.c>`and`<IfModule mod_ssl.c>`is now deleted and replaced by the
configuration from the server. Apache is subsequently restarted via systemctl reload apache.

The Web Application is now ready to use and can be directly started. Further information can be
found at the end of this section under "SCalling up the Web Application".
