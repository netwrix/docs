---
title: "Inspecting the FileAssociations.XML File"
description: "Inspecting the FileAssociations.XML File"
sidebar_position: 10
---

# Inspecting the FileAssociations.XML File

Endpoint Policy Manager File Associations Manager will dynamically write the file that Windows needs
to make the file associations. This file is called FileAssociations.XML, and there will be one file
per computer located in `%programdata%\PolicyPak\Common`, as seen in Figure 54.

![troubleshooting](/images/endpointpolicymanager/troubleshooting/fileassociations/troubleshooting.webp)

Figure 54. FileAssocations.xml shows the actions taken by Endpoint Policy Manager File Associations
Manager.

A good first troubleshooting step would be to see what the file contains. When you look inside the
FileAssociations.XML file, you can see which file extensions are mapped to which applications by
PolicyPak File Associations Manager. If you are expecting an application extension to launch an
application, but it does not, first check this file to see if what you expected is here or not. If
the association is absent, then the target computer most likely did not get the policy to make the
association. Fixing that should be your next step.


