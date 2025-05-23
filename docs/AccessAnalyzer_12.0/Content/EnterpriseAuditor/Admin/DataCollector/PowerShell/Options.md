---
sidebar_position: 6084
title: "PowerShell:\_Options"
---

# PowerShell: Options

The Options page provides the option to execute the script remotely on the target host.

![PowerShell Data Collector Wizard Options page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/PowerShell/Options.png "PowerShell Data Collector Wizard Options page")

The configurable options are:

* Execute remotely – Remotely executes the script on the target host. If this checkbox is not selected, the script will be executed from the Access Analyzer Console server.
* Use impersonation within server executable – Executes the script with the job credentials

For cmdlets requiring explicit credentials, a single credential set from the job's Connection Profile can be referenced using `Get-Credential` or the `$JobCredential` variable, a `PSCredential` type object. All credentials from the job’s Connection Profile may be accessed via the `$JobCredentials` array.