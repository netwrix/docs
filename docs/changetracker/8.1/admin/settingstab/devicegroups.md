---
title: "Device Groups"
description: "Device Groups"
sidebar_position: 30
---

# Device Groups

Click on a Device Group to edit the assigned Device Tracking template and Compliance Report, and to
set the reporting schedule – contact [Netwrix Support](https://www.netwrix.com/support.html) for
more help

- To create a new Device Tracking template, use the **Configuration Templates** page;
- Assigning more than one Device Tracking Policy to a Device Group will result in a single merged
  policy being created;
- To create a new Compliance Report template, use the **Compliance Report Templates** page;
- To add additional Compliance Reports to a Device Group, just click the **Schedule a New Report**
  button;
- Use the ‘Group Name’ box to search and filter Device Groups shown.

![page_guide_27](/images/changetracker/8.1/admin/settings/page_guide_27.webp)

Click on a Device Group name to configure further attributes for the Group, such as:

- Device Tracking Policy
- Compliance Report(s)
- Group Members, with the option to export a list of group Members
- Define the schedule for [Agent Updates](/docs/changetracker/8.1/admin/settingstab/agentsanddevices/agentupdates.md)

![page_guide_28](/images/changetracker/8.1/admin/settings/page_guide_28.webp)

## Agent Discovery/Registration Process

An Agent is a highly automated and intelligent piece of software with extensive capabilities for
monitoring and reporting on your secure endpoints.

It is therefore critical that the agent is securely governed by the controlling system and there are
a range of operations involved when registering and driving the agent.

### First Run – HubDetails.xml File

The Agent configuration settings are controlled by the Hub during operations but the initial
registration necessitates a basic config file for registration with the Hub.

The **HubDetails.xml** file includes some details unique to your deployment of Netwrix Change
Tracker , hence it requiring your intervention to make sure settings are as needed.

The key tags within the file are as follows:

![page_guide_29](/images/changetracker/8.1/admin/settings/page_guide_29.webp)

\*The **Thumbprint** uniquely identifies the Web Server certificate, see the
[How to: Retrieve the Thumbprint of a Certificate](https://msdn.microsoft.com/en-us/library/ms734695(v=vs.110).aspx)
Microsoft article for additional information.

:::note
Agent also supports additional nodes – **NamePrefix** and **NameSuffix**.
:::


Agent does not need the **UseNewHub** node to be defined – this will default to true.

**Step 1 –** Open IIS Manager.

**Step 2 –** Select the server from the list on the left hand side.

**Step 3 –** Select **Server Certificates**.

**Step 4 –** Double click your certificate in the list to open the certificates permissions.

**Step 5 –** Open the **Details** tab.

**Step 6 –** Scroll to the bottom of the list and highlight the **Thumbprint** field.

**Step 7 –** The thumbprint value will then be displayed – transpose this to your **HubDetails.xml**
file.

### Registration

Provided the Agent can connect to the Hub /api page (referenced in the HubDetails.xml), the
registration process takes place. The Agent presents its Username and Password (referenced in the
**HubDetails.xml**) and is authenticated against credentials held at the **Hub** (or **Active
Directory server** if used).

The Agent will then download and run the assigned Registration Report\* which determines the Device
Group that the Device will be assigned to. The Registration Report is like a full Compliance Report
in that it can provision Tracker’s to gather config data from the device and process the returned
data using rule expressions, with the results governing Group assignment.

In this example, the group regex match (`-WEBSERVER-|-EPOS-|-APPSERVER-`) extracts only those
substrings if present, then the `<Replace From lines` substitute in a valid group name for each
possible match (in other words, there must be a group already defined with the Group name being
referenced). This substituted name is then used as the initial group to register the agent into.
Note: if there s no match they ll end up in the default New Devices .

![page_guide_30](/images/changetracker/8.1/admin/settings/page_guide_30.webp)

You can view and edit the Default Registration Report from the **System** page. In conjunction with
the Registration Report, the optional Registration Script parameters can be used, providing a GUI
option for post-processing Registration Report results in order to control group allocation. In the
example below it is assumed the report has a variable called `regvalue_variable` i.e. reading a
value from the registry, and the custom code reads this value and appends it to the text **Custom**.
So, if the registry value contained **WebServer**, the device would be placed in the
**CustomWebServer** group if it exists, falling back on New Devices if it doesn t.

![page_guide_31](/images/changetracker/8.1/admin/settings/page_guide_31.webp)
