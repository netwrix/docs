---
title: "Configuration"
description: "Configuration"
sidebar_position: 20
---

# Configuration

## The Discovery Service module

When this module is opened in Netwrix Password Secure, **there are no entries displayed in the
Discovery Service** module at the beginning. The entries need to be generated using a
[System tasks](/docs/passwordsecure/9.2/configuration/advancedview/mainmenufc/extras/systemtasks/system_tasks.md).

![discovery service entries](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/discoveryservice/configuration/configuration_ds-1-en.webp)

Once a **System Task** has been completed, the data discovered during the search is listed in a
table:

![discovery service entries](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/discoveryservice/configuration/configuration_ds-2-en.webp)

NOTE: The information can be grouped together using the column editor.

## Network Scan

A **Discovery Service Task** is used to add a new [Discovery Service](/docs/passwordsecure/9.2/configuration/advancedview/clientmodule/discoveryservice/discovery_service.md) and
is then correspondingly configured for a **Network Scan**. Depending on the configuration of the
**Network Scan**, the following types are discovered:

- Service accounts
- Active Directory users
- User accounts

## Configuration of a Discovery Service Task

To collect data for the **Discovery Service**, the **Discovery Service Task** needs to be
correspondingly configured for a **Network Scan**.

### General and overview

The following image shows a newly added **Discovery Service Task**.

![new discovery task](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/discoveryservice/configuration/configuration_ds-3-en.webp)

1. Shows information about the **Discovery Service Task**.
2. In the **General** section, the name of the **Discovery Service Task** is entered (optionally
   with a description). The Status is always set to **Activated** by default but it can also be set
   to **Deactivated** in the configuration.
3. The **Overview** shows the activities of the **Discovery Service Task**: Last run: shows the date
   it was last run. Next run: shows the date of the next run.

## Task settings

Password:

1. User name field: Type
2. Password field: Type Multiple password field —> field 1. is used.

This section is used for special entries for the **Discovery Service Task**. After it has been
finished, the **Network Scan** scans the **network** according to these guidelines.

![task settings](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/discoveryservice/configuration/configuration_ds-4-en.webp)

1. **Password** and **Computer scan variants**: The required password must already have been issued
   and it requires corresponding rights for the domain. Active Directory computer: Only those
   computers that are in Active Directory are scanned (there is also the option of using it
   individually or pinging the network). Ping network: A network filter for the configuration of the
   network is displayed.
2. **Network filter**: This defines the network to be scanned: either using an IP range or an IP
   network address. Range: The start IP address and end IP address for the range on the network are
   entered here Network: The network address and corresponding subnet mask for the network are
   entered here
3. **Domain**: The domain to be used for the **network scan** is entered here. In addition, you can
   select that only computers in the entered domain are scanned. A name resolution should work for
   this purpose.
4. **Scan configuration**: The Network Scan for the configuration of Active Directory is defined
   here. Select from either **Active Directory user of services** or **Active Directory user**. The
   second section defines the scan configuration for the local computer. Select from either Local
   user of services or _Local user_.

**CAUTION:** The system executing the scan – on which the Server Manager is installed – is not
scanned!

## Interval / Executing server / Tags

This section is used to enter information about the start of the task and other additional
information.

![Interval / Executing server / Tags](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/discoveryservice/configuration/configuration_ds-5-en.webp)

1. **Interval**: The interval at which the **Discovery Service Task** should be executed is defined
   here. The default setting is hourly, one year after adding the **Discovery Service Task**. The
   interval can be adjusted in minutes or set to be executed only once (optionally with an end
   date).
2. **Executing server (optional)**: Servers with an Server Manager can be entered here that will be
   used to execute the Discovery Service Task if the main server crashes. The Discovery Service Task
   is then automatically taken over and executed by the accessible servers on the list. The list is
   searched from top to bottom to find an accessible server.
3. **Tags**: The use of tags is described in more detail in the section
   [Tag manager](/docs/passwordsecure/9.2/configuration/advancedview/mainmenufc/extras/tag_manager.md). A special tag can be
   entered here for the **Discovery Service Task**.

After the **Discovery Service Task** has been configured, a connection test is performed when the
configuration is saved. The system then indicates whether the configuration is correct or faulty.
Depending on the message, the **Discovery Service Task** may need to be amended.

**CAUTION:** The **default setting** for the **Discovery Service Task** after it has been saved is
**Activated!** It will **immediately actively** scan the network for data. This data is **read** but
not amended!
