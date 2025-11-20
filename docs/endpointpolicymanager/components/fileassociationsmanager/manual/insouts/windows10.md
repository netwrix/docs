---
title: "Managing Windows 10 File Associations with the In-Box Method"
description: "Managing Windows 10 File Associations with the In-Box Method"
sidebar_position: 20
---

# Managing Windows 10 File Associations with the In-Box Method

If you did not 't have Endpoint Policy Manager File Associations Manager, you could still manage
file associations on Windows 10 and later. However, the process can be difficult and is not
particularly user-friendly.

:::note
The following steps outline what you could do without Endpoint Policy Manager File
Associations Manager. Do not perform these steps with Endpoint Policy Manager File Associations
Manager because this will result in conflicts.
:::


The following is the Microsoft-sanctioned way to establish file associations for Windows 8.1 and
Windows 10:

**Step 1 –** Create machine with all applications you might need.

**Step 2 –** Correctly set all of the file associations.

**Step 3 –** Use the built-in command `DISM` and export the associations to an XML file. The command
would be something like:

```
Dism /Online /Export-DefaultAppAssociations:<XML path>\AppAssoc.xml
```

**Step 4 –** Use Group Policy to ensure that specific computers use this XML file.

The exported file from this process might look something like this:

![about_policypak_file_associations_2](/images/endpointpolicymanager/fileassociations/insouts/about_endpointpolicymanager_file_associations_2.webp)

**Step 5 –** Next, you would use the Group Policy setting called **Set a default associations
configuration file**.

![about_policypak_file_associations_3](/images/endpointpolicymanager/fileassociations/insouts/about_endpointpolicymanager_file_associations_3.webp)

The disadvantages of using the in-box method for Windows 10 are as follows:

- You need a perfectly set machine for each new application deployment
- You will likely need different exported XML files, one for each different machine or organization
  type
- You might need to segment your computers into different organizational units (OUs) if you have
  different associations
- You need to follow this process even if you have just one or two applications you want to map
- To get the best experience, you need to do this for all associations a user is ever going to click
  on
- The entire XML file must be perfect and not have any variations

In summary,

- When your needs change, there is nothing dynamic about the process
- This process is entirely manual
- This process requires a lot of effort to build the perfect machine for each different computer
  group, export the files one by one for each group, and ensure all computers get the correct file

All this becomes time consuming every time you update and roll out an application that will be the
registered extension or protocol.


