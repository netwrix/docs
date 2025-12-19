---
title: "Software Requirements"
description: "Software Requirements"
sidebar_position: 20
---

# Software Requirements

The following are the software requirements for Netwrix Data Classification installation:

1. **Operating System**
   - Windows 2012 R2 and above Server Operating System Software.

2. **Windows Features**

   **.NET Framework Features**
   - .NET Framework 4.7.2
   - ASP.NET

   **WCF Services**
   - HTTP Activation
   - Named Pipe Activation

   :::note
   To activate these features, select them under **.Net Framework Advanced Services** - **WCF Services** from **Windows Features**.
   :::

   **Web Server Role (IIS)**
   - **Common HTTP Features:**
     - Default Document
     - HTTP Errors
     - Static Content
     - HTTP Redirection
   - **Security:**
     - Windows Authentication
     - Anonymous Authentication

       :::note
       The Anonymous Authentication element is included in the default installation of IIS 7. Make sure you use IIS 7 and above.
       :::
   - **Application Development:**
     - ISAPI Extensions
     - ISAPI Filters

3. **SQL Server**
   - SQL Server 2008 R2 Standard Edition (or later).
   - SQL Server 2016 SP2 recommended (for better performance).

   :::note
   For large environments, SQL Server Enterprise edition may be needed; see [Deployment Planning](/docs/dataclassification/5.7/introduction/deployment/overview.md).
   :::

4. **Visual Studio**
   - Visual C++ Redistributable Packages for Visual Studio 2015 and above.

5. **Other software**
   - **Antivirus:** Netwrix recommends adding NDC Index files to the list of exclusions (white list) of any installed antivirus. These files have `.CSE` extension.

