# Understanding ACL Manage File System and Registry (ACL Traverse)

Endpoint Policy Manager Least Privilege Manager enables Standard Users to perform operations in the file system or registry where they would not normally have access. To do this, you’ll assign a process which, when run, will determine which operations can be performed on a file or portion of the registry.

Start out by creating a rule. In this case we want to specify an application process, like Notepad, to perform an operation like Write the HOSTS file.

First specify the process match and signify you want to perform __ACL manage file system and registry__.

![A screenshot of a computer

Description automatically generated](/static/img/product_docs/policypak/policypak/leastprivilege/understanding_acl_manage_file.png)

Next, specify the path(s) to files or registry and change the Permission (using the dropdown or __Edit permissions__ button.)

![A screenshot of a computer

Description automatically generated](/static/img/product_docs/policypak/policypak/leastprivilege/understanding_acl_manage_file_1.png)

As a result, when Notepadis run from the specified location it can edit the ```c:\windows\system32\drivers\etc\hosts``` file.

__NOTE:__ See the [Endpoint Policy Manager and ACL Traverse: How to give rights to modify HOSTS files and similar](/docs/product_docs/policypak/policypak/video/leastprivilege/acltraverse/modifyhosts.md) video for a demo on how to use ACL Traverse to modify the hosts file.

__NOTE:__ See the [Endpoint Policy Manager: ACL Traverse to enable users to delete icons on desktop](/docs/product_docs/policypak/policypak/video/leastprivilege/acltraverse/deleteicons.md) video for a demo on how to use ACL Traverse to delete icons on the desktop.

__NOTE:__ See the [Endpoint Policy Manager ACL and File Traverse: Let any application in Programfiles overcome NTFS permissions](/docs/product_docs/policypak/policypak/video/leastprivilege/acltraverse/ntfspermissions.md) video for a demo on how to use ACL Traverse to let any application in Programfiles overcome NTFS permissions.

__NOTE:__ See the [Endpoint Policy Manager: Overcome ACLs in Registry even as Standard User](/docs/product_docs/policypak/policypak/video/leastprivilege/acltraverse/registry.md) video for a demo of ACL Traverse and Registry.
