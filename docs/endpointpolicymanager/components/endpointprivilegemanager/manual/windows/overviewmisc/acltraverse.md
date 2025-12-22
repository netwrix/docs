---
title: "Understanding ACL Manage File System and Registry (ACL Traverse)"
description: "Understanding ACL Manage File System and Registry (ACL Traverse)"
sidebar_position: 50
---

# Understanding ACL Manage File System and Registry (ACL Traverse)

Endpoint Policy Manager Least Privilege Manager enables Standard Users to perform operations in the
file system or registry where they would not normally have access. To do this, you’ll assign a
process which, when run, will determine which operations can be performed on a file or portion of
the registry.

Start out by creating a rule. In this case we want to specify an application process, like Notepad,
to perform an operation like Write the HOSTS file.

First specify the process match and signify you want to perform **ACL manage file system and
registry**.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/understanding_acl_manage_file.webp)

Next, specify the path(s) to files or registry and change the Permission (using the dropdown or
**Edit permissions** button.)

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/understanding_acl_manage_file_1.webp)

As a result, when Notepadis run from the specified location it can edit the
`c:\windows\system32\drivers\etc\hosts` file.

:::note
See the
[Endpoint Policy Manager and ACL Traverse: How to give rights to modify HOSTS files and similar](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/acltraverse/modifyhosts.md)
video for a demo on how to use ACL Traverse to modify the hosts file.
:::


:::note
See the
[Endpoint Policy Manager: ACL Traverse to enable users to delete icons on desktop](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/acltraverse/deleteicons.md)
video for a demo on how to use ACL Traverse to delete icons on the desktop.
:::


:::note
See the
[Endpoint Policy Manager ACL and File Traverse: Let any application in Programfiles overcome NTFS permissions](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/acltraverse/ntfspermissions.md)
video for a demo on how to use ACL Traverse to let any application in Programfiles overcome NTFS
permissions.
:::


:::note
See the
[Endpoint Policy Manager: Overcome ACLs in Registry even as Standard User](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/acltraverse/registry.md)
video for a demo of ACL Traverse and Registry.

:::



