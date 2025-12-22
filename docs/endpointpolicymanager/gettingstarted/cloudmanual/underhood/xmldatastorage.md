---
title: "XML Data Storage"
description: "XML Data Storage"
sidebar_position: 10
---

# XML Data Storage

Once the Endpoint Policy Manager Cloud client MSI is installed, the following directories are
produced on the client `%programdata%\PolicyPak\XMLdata `folder, as shown in Figure 154:

- Cloud
- Computer
- Groups
- Users

![underneath_the_hood_and_troubleshooting_624x238](/images/endpointpolicymanager/troubleshooting/cloud/underhood/underneath_the_hood_and_troubleshooting_624x238.webp)

Figure 154. Directories in the XmlData folder.

When the Endpoint Policy Manager Cloud client downloads XML data files from the Endpoint Policy
Manager Cloud service, it puts those files in the Cloud directory, as shown in Figure 155.

![underneath_the_hood_and_troubleshooting_1_624x170](/images/endpointpolicymanager/troubleshooting/cloud/underhood/underneath_the_hood_and_troubleshooting_1_624x170.webp)

Figure 155. Downloaded XML data files.

Note that normal, standard, non-admin users do not have permissions in the
`%programdata%\PolicyPak `folder and cannot delete or change these directives. The Endpoint Policy
Manager system can receive settings from a variety of sources:

- Endpoint Policy Manager Cloud
- Group Policy
- File-based XML data files (wrapped up via Endpoint Policy Manager Exporter and delivered by SCCM
  or placed by hand)

All data sources are additive. This means you can have any number of Group Policy Objects (GPOs),
XML data files, and Endpoint Policy Manager Cloud policies, and they will all merge, unless there's
a conflict between two directives. In that case, there is a precedence order. The specific order
that Endpoint Policy Manager uses to apply data is the following:

**Step 1 –** Endpoint Policy Manager Cloud data is processed first.

**Step 2 –** XML data files are processed next in the following order:

1. Group
2. User
3. Computer

**Step 3 –** Group Policy is processed next in the following order:

1. User side
2. Computer (switched) side
3. Computer (not switched) side (rare case)

Therefore, for instance, if you delivered a setting using Endpoint Policy Manager Cloud for Java,
then undelivered that same setting using an XML data file, and then used Group Policy to re-deliver
that same setting, Group Policy would always win. In short, directives delivered by Endpoint Policy
Manager Cloud have the least precedence, and Group Policy always wins.

