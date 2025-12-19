---
title: "How can I open images with Windows Photo Viewer?"
description: "How can I open images with Windows Photo Viewer?"
sidebar_position: 30
---

# How can I open images with Windows Photo Viewer?

Picture this: you have a VDI environment where no Windows Universal/Metro apps are installed, but
you want to use the old Windows Photo Viewer instead of MS Paint for viewing images.  Since WPV is a
DLL and not an application, what are you going to do? It's easy using the Custom app option in File
Associations Manager. Simply create your policy using the information below and your images will
open in Windows Photo Viewer by default.

**Step 1 –** Using File Associations Manager, choose "Add New Policy".

**Step 2 –** Using the information below, create a new policy, add any desired Item Level Targeting,
and save your policy.

**Step 3 –** Once the policy gets to your endpoints, photos will open in Windows Photo Viewer.

:::note
Like other File Associations Manager policies, this does not revert to the Windows default
when the policy falls out of scope.
:::


Policy Name: Open Images in Windows Photo Viewer [Recommended.]

Filter Type: Windows 10 Category - Photo Viewer

App Type: Custom

Associated Program: `%SystemRoot%\System32\rundll32.exe`

Application Name: Windows Photo Viewer

Application Icon: C:\Program Files\Windows Photo Viewer\PhotoViewer.dll,0

Command Line: `"%ProgramFiles%\Windows Photo Viewer\PhotoViewer.dll", ImageView_Fullscreen %1`

![715_1_image-20210421203400-1_950x594](/images/endpointpolicymanager/troubleshooting/fileassociations/715_1_image-20210421203400-1_950x594.jpeg)

![715_2_image-20210421203400-2](/images/endpointpolicymanager/troubleshooting/fileassociations/715_2_image-20210421203400-2.jpeg)


