---
title: "Preparing Your PolicyPak Creation Station"
description: "Preparing Your PolicyPak Creation Station"
sidebar_position: 10
---

# Preparing Your PolicyPak Creation Station

To use PolicyPak DesignStudio, you will need the following components installed on
your PolicyPak creation station.

:::note
It's best if the PolicyPak creation station is a machine that you can use
and reuse. We suggest you use a virtual machine loaded with the following components. You can then
restore to go back to this original configuration before creating each AppSet. This idea is borrowed
from creating MSI or App-V packages. You want a clean machine with only the PolicyPak
creation station utilities on it before installing your package and producing an AppSet.
:::


**Step 1 –** The `.NET` Framework can be introduced through `Add/Remove programs`, as shown in
The figure shown.

![policypak_application_settings](/images/policypak/applicationsettings/designstudio/quickstart/endpointpolicymanager_application_settings.webp)

The figure shown. Installing the`.NET`Framework for Windows 10.

**Step 2 –** Next, install Visual Studio Express Edition or later on your PolicyPak
creation station. Any edition later than 2008 will work; you only need one.

- Get C++ 2008 Express Edition by visiting
  [https://www.microsoft.com/en-US/download/details.aspx?id=29](https://www.microsoft.com/en-US/download/details.aspx?id=29).
  Figure 2 shows the installation options for Visual C++ 2008 Express Edition.
- Get C++ 2015, 2017, or 2019 Visual Studio Express Desktop Edition by visiting
  [https://visualstudio.microsoft.com/vs/express/](https://visualstudio.microsoft.com/vs/express/).
  Figure 3 shows the installation options.

![policypak_application_settings_1](/images/policypak/applicationsettings/designstudio/quickstart/endpointpolicymanager_application_settings_1.webp)

The figure shown. The installation options for Visual C++ 2008 Express Edition.

![policypak_application_settings_2](/images/policypak/applicationsettings/designstudio/quickstart/endpointpolicymanager_application_settings_2.webp)

The figure shown. The installation options for 2019 Visual Studio Express Desktop Edition.

**Step 3 –** For this demonstration, we have gone with the C++ 2008 Express Edition. You will see
whichever version you choose to install in your Start menu once installed, as shown In the figure shown.

![policypak_application_settings_3](/images/policypak/applicationsettings/designstudio/quickstart/endpointpolicymanager_application_settings_3.webp)

The figure shown. Visual Studio will appear in your Start menu once installed.

Follow the on-screen instructions to install the edition with the latest service packs and
prerequisites onto your admin workstation. Note that this can take a long time. Also, if prompted,
you do not need to install Silverlight, nor do you need the SQL Express Edition.

Sometimes, on some computers, the web-install version of Visual C++ Express Edition fails to
complete. In those rare cases, you can download the full ISO of all the Express Edition products and
then install it from there. The download of the full ISO is very large and can take a long time. Be
sure to install only the C++ from the download and not the wrong package such as C#, which is not
needed.

**Step 1 –** After Microsoft C++ 2008 or later is installed, install PolicyPak Design
`Studio.msi`. This file contains PolicyPak DesignStudio. This tool allows you to
create AppSets quickly. Users familiar with Visio tools will feel at home with DesignStudio.

**Step 2 –** (Optional) If you wish to create and deploy GPOs from your PolicyPak
Application Settings Manager creation station, be sure that the GPMC is installed and the PolicyPak Admin `Console.msi` is also loaded.

**Step 3 –** After installation is complete, your Start menu should have both the Microsoft Visual
C++ Express Edition node and PolicyPak DesignStudio node (See the figure here).

![policypak_application_settings_4](/images/policypak/applicationsettings/designstudio/quickstart/endpointpolicymanager_application_settings_4.webp)

The figure shown. PolicyPak DesignStudio appears in the Start menu once installed.



