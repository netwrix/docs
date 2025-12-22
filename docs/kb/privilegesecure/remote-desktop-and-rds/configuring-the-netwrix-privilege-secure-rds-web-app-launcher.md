---
description: >-
  Shows how to deploy and configure the Web App Launcher for Netwrix Privilege
  Secure to publish websites as RemoteApps using Remote Desktop Services,
  including runtime and API settings, directory setup, and launch examples.
keywords:
  - Netwrix Privilege Secure
  - Web App Launcher
  - RDS
  - RemoteApp
  - launch-website.exe
  - appsettings.json
  - NPS
  - API
  - Remote Desktop Services
products:
  - privilege-secure-access-management
sidebar_label: Configuring the Netwrix Privilege Secure RDS Web A
tags: []
title: "Configuring the Netwrix Privilege Secure RDS Web App Launcher"
knowledge_article_id: kA0Qk0000000Kl7KAE
---

# Configuring the Netwrix Privilege Secure RDS Web App Launcher

## Introduction
The Web App Launcher for Netwrix Privilege Secure is an application used to launch websites as RemoteApps using Microsoft Remote Desktop Services (RDS).

See this article) for information about publishing RemoteApps.

## Deployment
The Web App Launcher can be downloaded from [this link](https://dl.netwrix.com/additional/WebAppLauncher.zip).

On the RDS server, extract the files to a directory of your choosing. For the examples in this article, `C:\webapp-launcher\` will be used.

![image.png](./../0-images/ka0Qk0000001EP7_00N0g000004CA0p_0EMQk000001tL01.png)

## Configuration

### Runtime Settings
There are configurable runtime settings that you can apply to the Web App Launcher.

- Full Screen - runs the website in full screen mode
- App Mode - runs the browser with no tabs or menu controls
- Disable Extensions - prevent the browser from running extensions
- Start Maximized - runs the browser maximized
- Command Line Arguments - allows certificate and SSL errors to be ignored when using the Web Launcher

In order to configure these settings, open `appsettings.json` in your Web App Launcher directory. The `ChromeOptions` section contains the above settings. Change the values as required, and save the file.

![image.png](./../0-images/ka0Qk0000001EP7_00N0g000004CA0p_0EMQk000001tH7k.png)

Note that these settings affect all websites launched from this Web App Launcher. If it is necessary to have multiple sets of settings, create another Web App Launcher directory with a different `appsettings.json` configuration, and use the appropriate one in NPS.

### API Settings
In order to use the Web App Launcher, an Application User must be created in NPS. Once this is done, supply the username and API Key into the `AppUser` and `AppSecret` fields, respectively. The certificate should be placed in the Web App Launcher directory, with the directory indicated in the `AppCert` field as indicated:

:::warning
Any backslashes (\\) in the app secret must be escaped with a preceding backslash (\\\\)
:::

![image.png](./../0-images/ka0Qk0000001EP7_00N0g000004CA0p_0EMQk000001tPOb.png)

### Web App Launcher Directories
Ensure that the indicated paths correspond to the chosen Web App Launcher directory.

![image.png](./../0-images/ka0Qk0000001EP7_00N0g000004CA0p_0EMQk000001tlXC.png)

## Launch Options and Examples

### 1. Launching websites and passing in username and password via command line
In this mode, username and password are passed as parameters on the command line. It is important to remember that in a production setting, any command line parameters can be viewed by other users of the RDS host with access to Task Manager. We recommend that this launch option should be used for testing or non-production use.

Usage:

```
launch-website.exe [url] [username] [password]
```

Example:

```
launch-website.exe https://website.com jsmith Password123
```

![image.png](./../0-images/ka0Qk0000001EP7_00N0g000004CA0p_0EMQk000001tMXD.png)

Note that the login account in this example connects to the RDS session running the web app launcher as a remote app. The web app launcher will launch the website under the context of the user and password supplied as command line arguments.

### 2. Launching websites by passing in an NPS token and session ID (NPS 4.1 and above)
In this mode, token and session ID are passed to the launcher. The launcher will use this information to dynamically pull the username and password from the NPS Proxy and pass it to the website.

Usage:

```
launch-website.exe [url] [token] [sessionid]
```

Example:

```
launch-website.exe https://website.com %token% %sessionid%
```

![image.png](./../0-images/ka0Qk0000001EP7_00N0g000004CA0p_0EMQk000001tOSX.png)

Note that the login account in this example both connects to the RDS session running the web app launcher as a remote app, and is used as the credential to be passed to the website.

### 3. Launching websites by specifying a username, with the password pulled via the NPS API
In this mode, a username is passed on the command line to the launcher. The launcher will call the NPS API to get the password stored in the NPS vault and pass it to the website.

The username value can be in the following formats:
- `Domain\username` – if the website account is a managed account in the domain
- `Resource\username` – if the website account is a managed account on a Resource
- `Website Name\username` – if the website account is stored in the Users tab of a website Resource

Usage:

```
launch-website.exe [url] [username]
```

Example:

```
launch-website.exe https://website.com lab\jsmith
```

![image.png](./../0-images/ka0Qk0000001EP7_00N0g000004CA0p_0EMQk000001tLo2.png)

Note that the login account in this example connects to the RDS session running the web app launcher as a remote app. The web app launcher will launch the website under the context of the username provided on the command line. The web app launcher will call the API to get the managed password of the user, and will enter it into the password field of the website.
