---
title: "Quick Start Guide"
description: "Quick Start Guide"
sidebar_position: 30
---

# Quick Start Guide

This guide leads the reader through the steps to quickly install Usercube's bootstrap version.

## Prerequisites

The installation of Usercube requires:

- a certificate named Usercube.pfx
  ([see the Microsoft tool to create a self-signed certificate](https://learn.microsoft.com/en-us/powershell/module/pki/new-selfsignedcertificate?view=windowsserver2022-ps))

    If the certificate is named something other than Usercube.pfx, remember to change the name in
    the Runtime/appsettings.json file too.

- [Database](/docs/identitymanager/6.1/installation-guide/requirements/database-requirements/index.md)-related
  specifications

## Install the Bootstrap Version

**Step 1 –** Go on the [Netwrix portal](https://www.netwrix.com/sign_in.html?rf=my_products.html)
and download the artifacts of the expected version.

![Extranet Artifacts](/images/identitymanager/6.1/migration-guide/extranet_v601.webp)

**Step 2 –** Extract from SDK the folder UsercubeBootstrap anywhere on the computer.

**Step 3 –** Extract the content of Runtime to UsercubeBootstrap.

When extracting UsercubeBootstrap to the root of the computer, it looks like:

![Project Directory](/images/identitymanager/6.1/installation-guide/quick-start/directory_v602.webp)

**Step 4 –** Move or copy your certificate inside the Runtime folder.

**Step 5 –** Create a Sources folder in UsercubeBootstrap.

:::tip
Remember, if you don't have the UsercubeBootstrap folder or if you don't create the Sources
folder, the Path in the Directory connection in the Runtime/appsettings.agent.json must be adapted.
Note that you don't need to have a Directory.xlsx file at the location described by this Path for
now.
:::


**Step 6 –** Create a database named Usercube, using the default options.

:::note
When using a database server other than Microsoft SQL Server or a different database name,
remember to change the connection string accordingly, in the Runtime/appsettings.json file and in
the future command lines.
:::


**Step 7 –** Execute the Runtime/identitymanager.sql file in the database.

**Step 8 –** Open a command prompt and deploy the configuration. See
the[Usercube-Deploy-Configuration](/docs/identitymanager/6.1/integration-guide/executables/references/deploy-configuration/index.md)topic
for additional information.

In our example, the command would be, in the Runtime folder:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
./identitymanager-Deploy-Configuration.exe -s "<data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;>" -d "<C:/identitymanagerBootstrap/Conf>"
```

**Step 9 –** Launch the server. See
the[Usercube-Server](/docs/identitymanager/6.1/integration-guide/executables/references/server/index.md)topic
for additional information.

In our example, the command would be, still in the Runtime folder:

```
./identitymanager-Server.exe
```

**Step 10 –** Open a browser and navigate to http://localhost:5000. Authenticate with administrator
as a username and the password specified in the Runtime/appsettings.json file, in the Authentication
section.

![Authentication Dialog](/images/identitymanager/6.1/installation-guide/quick-start/authentication_v601.webp)

Now you can start using the application.

## Next Steps

From there, you can start setting up Usercube via the **Settings** page which is accessible from the
**Configuration** section of the home page.

![Home Page - Settings](/images/identitymanager/6.1/user-guide/set-up/user-profile-configuration/home_settings_v523.webp)

Then, Netwrix recommends following the user guide to start the configuration of your IGA project
from scratch. See the [User Guide](/docs/identitymanager/6.1/user-guide/index.md)
topic for additional information.
