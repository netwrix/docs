---
title: "Using the Helper Utility"
description: "Using the Helper Utility"
sidebar_position: 90
---

# Using the Helper Utility

In the Netwrix Endpoint Policy Manager (formerly PolicyPak) File Associations Manager Quickstart
examples, we recommended that your management station have the same applications as your target
computers. However, that is not always practical. There are likely instances where you do not want
to install an application on your machine just for the sake of making a File Association. For
instance, someone in the Sales department may be the only one who has "Sales Application 123"
installed.

That's where the Endpoint Policy Manager File Associations Manager Helper utility comes in. Run the
Endpoint Policy Manager File Associations Manager Helper on an example endpoint with the application
already installed and to which you want to make a policy association with later.

:::note
For a video overview demonstrating how to use the Endpoint Policy Manager File
Associations Manager Helper utility, watch this video:
[Endpoint Policy Manager File Associations Manager: Helper Application](/docs/endpointpolicymanager/components/fileassociationsmanager/videolearningcenter/tipsandtricks/helperapplication.md).
:::


The Endpoint Policy Manager File Associations Manager Helper is found in the Endpoint Policy Manager
ISO or ZIP download in the Endpoint Policy Manager Extras folder.

![using_the_helper_utility](/images/endpointpolicymanager/fileassociations/using_the_helper_utility.webp)

Follow these steps to setup the Endpoint Policy ManagerPolicyPak File Associations Manager Helper
utility:

**Step 1 –** Launch the 11,000 kB EXE. When you do, the Endpoint Policy Manager File Associations
Manager Export wizard appears.

![using_the_helper_utility_1](/images/endpointpolicymanager/fileassociations/using_the_helper_utility_1.webp)

**Step 2 –** Find a particular file association that already exists on the machine, such as 3mf, and
the application it is already associated with. The application must be registered in order to see it
in the list.

![using_the_helper_utility_2](/images/endpointpolicymanager/fileassociations/using_the_helper_utility_2.webp)

**Step 3 –** Select **Include icons in the file (Can dramatically increase file size)**. This
setting is recommended even though the XML might be bigger. You must also choose to **Show file in
folder after finished** and **Open XML in Notepad when save is complete** for examination.

![using_the_helper_utility_3](/images/endpointpolicymanager/fileassociations/using_the_helper_utility_3.webp)

**Step 4 –** Take the exported file and import it into a Endpoint Policy Manager File Associations
Manager Group Policy Object (GPO). Note that the option to import from an XML is available when you
create a new entry and click **Select Program**.

![using_the_helper_utility_4](/images/endpointpolicymanager/fileassociations/using_the_helper_utility_4.webp)

To import the exported file into a Endpoint Policy Manager File Associations Manager GPO, pull up
the Select Program Association window, and then click on **From XML file** under Import.


