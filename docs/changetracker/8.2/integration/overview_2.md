---
title: "VMWare"
description: "VMWare"
sidebar_position: 50
---

# VMWare

vSphere is VMWare's virtualization platform. Change Tracker includes CIS certified compliance
tracking templates to ensure secure configuration of vSphere clusters and their ESXi nodes.

## vSphere/ESXi

Compliance reports for vSphere clusters and their ESXi nodes are executed in an agentless manor with
the use of a proxy agent that has vSphere clusters (or individual ESXi servers) configured as
proxied devices.

## Requirements for the Proxy Agent's Device

- .NET 6
- PowerShell 7
- PowerShell Module VMWare.PowerCLI
- Gen 7 Agent

## Installation

After installing .NET 6 and the Gen 7 Agent, following the instructions below will ensure the proxy
agent's device is able to communicate with vSphere and ESXi devices.

Open a PowerShell console as Administrator to run the following command:

Install-Module VMware.PowerCLI -Scope AllUsers

Check installation with:

Get-PowerCLIVersion

If self-signed certificates are in use with vCenter, the following command will ignore the errors
this usually raises:

Set-PowerCLIConfiguration -InvalidCertificateAction:Ignore -Scope AllUsers

To disable the customer experience program run the following command:

Set-PowerCLIConfiguration -Scope AllUsers -ParticipateInCEIP $false

## Configuration

Follow the steps to configure ESXi/vCenter credentials:

**Step 1 –** From the Settings menu, select Credentials and scroll down to the ESXi / vCenter
Credentials section.

![esxicredentials](/images/changetracker/8.1/integration/vmware/esxicredentials.webp)

**Step 2 –** Click the Add button and enter the credential information. For vCenter / ESXi
monitoring, it is recommended to use vCenter as the Host Type as it allows for ESXi node discovery,
The ESXi Host Type option enables connections to stand alone ESXi servers.

![esxicredentialform](/images/changetracker/8.1/integration/vmware/esxicredentialform.webp)

## Device Discovery

A vSphere cluster is made up of ESXi nodes. In the past, each ESXi node had to be manually added as
a proxied device. It is now possible to add the vSphere service as a proxied device and
automatically discover all of it's ESXi nodes and add them as proxied devices. This allows for
faster configuration and the ability to keep up with fast changing environments where ESXi nodes are
frequently created, removed or even migrated between clusters.

From the Settings menu, select Device Discovery. Select ESXi / vCenter Discovery from the drop down
to configure the discovery job.

![devicediscoverygrid](/images/changetracker/8.1/integration/vmware/devicediscoverygrid.webp)

Discovery Device is the device running the agent that will execute the commands to discover the ESXi
nodes.

Parent Device in Hub is the proxy device that the proxied devices (that represents the ESXi nodes)
will be registered under. Usually Discovery Device and Parent Device in Hub use the same agent, but
different discovery jobs executed by different proxy agents could be configured to register all of
their discovered nodes under one proxy agent.

The "Assign to Group" drop down is the group the discovered ESXi nodes will be assigned to. There is
no automatic registration so a group must be chosen.

![devicediscoveryform](/images/changetracker/8.1/integration/vmware/devicediscoveryform.webp)

Once configured a discovery job will automatically run and if successful, the devices will be
visible in the grid.

![devicediscoverystarted](/images/changetracker/8.1/integration/vmware/devicediscoverystarted.webp)

![devicediscoveryrunning](/images/changetracker/8.1/integration/vmware/devicediscoveryrunning.webp)

![devicediscoverycompleted](/images/changetracker/8.1/integration/vmware/devicediscoverycompleted.webp)

## Compliance Reporting

Under the Reports tab, it is now possible to configure and run the appropriate compliance report
against the group that contains the ESXi devices.

![esxicompliancereport](/images/changetracker/8.1/integration/vmware/esxicompliancereport.webp)
