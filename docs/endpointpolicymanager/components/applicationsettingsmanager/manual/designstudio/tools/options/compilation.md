---
title: "Compilation Tab"
description: "Compilation Tab"
sidebar_position: 10
---

# Compilation Tab

The Compilation tab controls where your Endpoint Policy Manager source files (pXML) are saved and
where they are compiled. You can see the Compilation tab In the figure shown. The default path for saved
pXML files is`\Documents\PolicyPak Design Studio\Projects.` You can change this to any location you
like. Additionally, the path for compiled DLLs is `C:\Program Files\PolicyPak\Extensions`. This is
the location where the Endpoint Policy Manager Application Settings Manager Group Policy Editor will
look for compiled extensions, so it's best to leave this as it is.

![using_designstudio_tools_2](/images/endpointpolicymanager/applicationsettings/designstudio/tools/options/using_designstudio_tools_2.webp)

The figure shown. The Compilation tab.

:::note
that only administrators can compile AppSets directly to this location. If you are running
Endpoint Policy Manager DesignStudio as a standard user (non-administrator) you are prompted for an
alternate (writable) location. After compiling, you can use an administrator account to copy the
AppSet DLL file to `c:\Program Files\PolicyPak\Extensions` to use it within the Group Policy Editor.
:::


Additionally, you can see the "Preferred C++ Compiler" in the Compilation tab. Endpoint Policy
Manager Application Settings Manager is actually compatible with two compilers: Microsoft Visual C++
2008 (Express and Full Editions) and MinGW compiler. However, it is recommended that you use the
Microsoft Visual C++ 2008 compiler. Lastly, you can also see the Endpoint Policy Manager compiler
location, which should always point toward the file named PXmlParser. This should not be changed
unless specified by technical support.



