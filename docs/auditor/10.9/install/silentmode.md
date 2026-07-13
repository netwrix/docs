---
title: "Install in Silent Mode"
description: "Install in Silent Mode"
sidebar_position: 20
---

# Install in Silent Mode

Silent installation provides a convenient method for deploying Netwrix Auditor without UI.

Follow the steps to install Auditor in a silent mode.

**Step 1 –** Download the product installation package.

**Step 2 –** Open the command prompt: navigate to Start > Run and type "_cmd_".

**Step 3 –** Enter the following command to extract the msi file into the %Temp% folder:

`Netwrix_Auditor.exe -d%Temp%`

where %Temp% can be replaced with any folder you want to extract the file to.

**Step 4 –** Enter the following command:

`msiexec.exe /i "path to netwrix_auditor_setup.msi" /qn install_all=0`

| Command Line Option | Description                                                                                                                  |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `/i`                | Run installation.                                                                                                            |
| `/q`                | Specify the user interface (UI) that displays during installation. You can append other options, such as `n` to hide the UI. |
| `install_all`       | Specify components to be installed: - 0—Install the Netwrix Auditor client only. - 1—Full installation                       |
