---
title: "Cloud Policy Setup Wizard"
description: "Cloud Policy Setup Wizard"
sidebar_position: 10
---

# Cloud Policy Setup Wizard

**Step 1 –** New Policy: Use the Actions button to start a new Cloud Tracker system set-up.

**Step 2 –** Cloud Report Template: The templates shown here include all Cloud reports available in
your system.

![cloudsystemsetup](/images/changetracker/8.0/cloud/cloudsystemsetup.webp)

**Step 3 –** Create a new Cloud System and Credentials: The Cloud Set-Up Wizard is context-sensitive,
so the Cloud Platform you select determines the Credentials dialogue that appears next.

Google Cloud Platform Credentials example:

![Graphical user interface, text, application, email Description automatically generated](/images/changetracker/8.0/cloud/cloudgoogleplatformcredentials.webp)

:::note
Click the Query icon to get a quick tip on what the Credential field requires.
:::


- Credential Name – Enter a name to uniquely identify these credentials
- Cloud Platform – Select from the dropdown options presented
- Description – Optionally provide a credential description

After you enter the Credentials, Change Tracker automatically selects an Agent to run the
Cloud Compliance Report from and then tests the Credentials. By default, Change Tracker uses
the local Agent on the Hub Server.

:::note
This must always be the latest Net Core Gen 7 Agent. See the
[Netwrix Support](https://www.netwrix.com/support.html) site for more details.
:::


You can change this using the links displayed after the Credentials test completes. If the
Credentials aren't working, you can edit them and verify you entered them correctly.

Cloud security is higher and more complex than standard access credentials for regular servers and
hypervisors, so ask for help if needed.

![cloudcompletedsetup](/images/changetracker/8.0/cloud/cloudcompletedsetup.webp)

You're now ready to run your first Cloud Compliance Report – click the Run Report
button.

AWS Platform Credentials Example:

![cloudaws-credentials](/images/changetracker/8.0/cloud/cloudaws-credentials.webp)

- Credential Name – Enter a name to uniquely identify these credentials Cloud
- Platform – Select from the dropdown options presented
- Description – Optionally provide a credential description
- ARN – AWS Resource Name of a role a user can assume when establishing a trust
  relationship.
- ExternalId – An Id used in establishing the trust relationship
- Root AccessKeyId – The Access Key Id of the AWS user the trust relationship is established for
- Root SecretAccessKey – The Access Key Secret of the AWS user the trust relationship is established
  for

### Special Instructions for AWS Cloud Reporting

The NNT Cloud Tracker feature set uses the Microsoft PowerShell cmdlets for AWS.

You may experience a failure message after the Credentials Test has run: "Can't execute AWS
commands, error: The specified module 'AWSPowerShell. NETCore wasn't loaded because no valid module
file was found in any module directory".

In this case, run the following PowerShell setup on the host running the
Gen7Agent NETCore used for Cloud Tracker work:

**Step 1 –** Install PowerShell NETCore version 7.x (NB this isn't the old PowerShell that ships
with Windows, but a new cross-platform version based on NETCore). See the Microsoft
[Installing the MIS package](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows#installing-the-mis-package)
article for additional information.

Although the agent provides its own PowerShell scripting, you must install this NETCore version of
PowerShell so that you can install the various AWS/Azure PowerShell core support libraries.
Some Change Tracker reports use these libraries to collect data from the cloud
environments.

**Step 2 –** Install AWS Cmdlets for use in AWS compliance reports, run the following in the
PowerShell NETCore command prompt (PowerShell 7(x64) Start menu item, Run As Administrator).

`Install`-Module -name AWSPowerShell.NetCore -scope `AllUsers`

Azure Platform Credentials Example:

![Graphical user interface, text, application Description automatically generated](/images/changetracker/8.0/cloud/cloudazure-credentials.webp)

- Credential Name – Enter a name to uniquely identify these credentials
- Cloud Platform – Select from the dropdown options presented
- Description – Optionally provide a credential description
- Tenant ID – From the Azure portal, click properties and copy the Tenant Id
- Application ID – The Azure application (client) ID
- ClientSecret – The application client secret

### Special Instructions for Azure Cloud Reporting

The NNT Cloud Tracker feature set uses the Microsoft PowerShell cmdlets for AWS.

You may experience a failure message after the Credentials Test has run: "Can't execute Az
commands, error on Import-Module: The specified module 'Az' wasn't loaded because no valid module
file was found".

In this case, run the following PowerShell setup on the host running the
Gen7Agent NETCore used for Cloud Tracker work:

**Step 1 –** Install PowerShell NETCore version 7.x (NB this isn't the old PowerShell that ships
with Windows, but a new cross-platform version based on NETCore). See the Microsoft
[Installing the MIS package](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows#installing-the-mis-package)
article for additional information.

Although the agent provides its own PowerShell scripting, you must install this NETCore version of
PowerShell so that you can install the various AWS/Azure PowerShell core support libraries.
Some Change Tracker reports use these libraries to collect data from the cloud
environments.

**Step 2 –** Install Azure Cmdlets for use in Azure compliance reports, run the following in the
PowerShell NETCore command prompt (PowerShell 7(x64) Start menu item, Run As Administrator):

Install-Module -name Az -`scope` AllUsers
