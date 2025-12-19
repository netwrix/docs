---
title: "Install Password Policy Enforcer Web"
description: "Install Password Policy Enforcer Web"
sidebar_position: 70
---

# Install Password Policy Enforcer Web

Password Policy Enforcer Web V7.11 is a web server enabling users to change their Windows domain
password from a web browser.

Click the following link to download Password Policy Enforcer Web:

[Password_Policy_Enforcer_WEB_7.11.zip](https://www.netwrix.com/download/commercial/Password_Policy_Enforcer_WEB_7.11.zip)

## The PPE Web Setup Wizard

The Setup Wizard copies the required files onto the server and configures IIS to run the Password
Policy Enforcer Web application.

Follow the steps below to install PPE Web.

**Step 1 –** Start the Password Policy Enforcer Web Setup Wizard (PPEWeb711.exe).

**Step 2 –** If another version of Password Policy Enforcer Web is detected, the Setup Wizard may
required older files to be backed up. Back up these files if the original files have been modified.
Click **Next**.

**Step 3 –** Click **Next**.

**Step 4 –** Read the License Agreement. Click **I accept the terms of the license agreement**, then
click **Next** if you accept all the terms.

**Step 5 –** Click **Browse...** if you want to choose a different folder for the Password Policy
Enforcer Web documentation and tools, then click **Next**.

**Step 6 –** Select an **IIS Web Site** from the dropdown. Change the default Virtual Directory, if
needed.

:::note
Password Policy Enforcer Web should be installed in its own virtual directory.
:::


**Step 7 –** Click **Next** twice.

**Step 8 –** Wait for Password Policy Enforcer Web to install, then click **Finish**.

#### Upgrading from PPE Web V7.x

Some planning is needed to ensure a smooth upgrade from PPE Web V7.x. A trial run on a lab network
is recommended.

#### Before You Begin

The HTML templates and associated images are overwritten during an upgrade. You must back up and
customized HTML templates and images before upgrading. The HTML templates and images are installed
in the `\Inetpub\wwwroot\ppeweb\` folder by default.

:::note
A full backup of the PPE Web server is recommended. This allows you to roll back to the
previous version if the upgrade cannot be completed. You may need to restart Windows after
upgrading.
:::


:::warning
PPE Web V7.11 is only compatible with Password Policy Enforcer V7.0 and later. Upgrade
Password Policy Enforcer to a compatible version if you have enabled Password Policy Enforcer
integration.
:::


#### Upgrading to V7.11

**Step 1 –** Start the PPE Web Setup Wizard and follow the prompts. The Setup Wizard uninstalls the
previous version. There is no need to manually uninstall previous versions.

**Step 2 –** Restore any customized HTML templates and images after upgrading. Do not restore
PPEWeb.dll from the backup as it belongs to the previous version.
