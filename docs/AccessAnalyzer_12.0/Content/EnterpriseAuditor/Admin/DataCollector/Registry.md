---
sidebar_position: 5615
title: Registry Data Collector
---

# Registry Data Collector

The Registry Data Collector queries the registry and returns keys, key values, and permissions on the keys. The data in the native tables returned by the Registry Data Collector is dependent upon the query configuration. For example, a query could be configured to only show permissions on registry keys in a 32-bit view. Another query could be configured to show a listing of all keys and key values in a 64-bit view. Wildcards can also be used in query configurations.

The Registry Data Collector is a core component of Access Analyzer, but it has been preconfigured within both the Active Directory Solution and the Windows Solution. While the data collector is available with all Access Analyzer license options, these solutions are only available with a special Access Analyzer licenses. See the following topics for additional information:

* [Active Directory Solution](../../Solutions/ActiveDirectory/Overview "Active Directory Solution")
* [Windows Solution](../../Solutions/Windows/Overview "Windows Solution")

Protocols

* Remote Registry
* RPC

Ports

* TCP 135-139
* Randomly allocated high TCP ports

Permissions

* Member of the Local Administrators group

## Registry Query Configuration

The Registry Data Collector is configured through the Registry Browser window.

![Registry Browser window](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/Registry/Browser.png "Registry Browser window")

The configurable options are:

* Sample Host – The host to connect to. If this box is left blank, the connection is to the local host.
* 64-bit view – The default view is 32-bit. Select the **64-bit view** checkbox to switch to a 64-bit view.
* Connect – Connect to host’s registry. If no host is specified in the Sample Host box, the connection is to the local host’s registry.
* Query 32-bit view – Select this checkbox to query the 32-bit view of the registry
* Query 64-bit view – Select this checkbox to query the 64-bit view of the registry
* Name – The key value. Key values can be added to the Selected Properties list by pressing the **ctrl** key, selecting the keys to add, and then clicking the **Add currently selected value** button.
* Type – The key value type
* Data – The key value path
* Root Path – The path to the selected key
* Enumerate child nodes – Select this checkbox to do a recursive search of all child nodes

The button bar provides additional options for selecting keys. See the [Button Bar](#_Registry:_Button_Bar "Button Bar") topic for additional information.

### Button Bar

The button bar is located right above the Selected Properties window. The button bar enables users to do the following:

![Button Bar](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/Registry/ButtonBar.png "Button Bar")

| Icon | Name |
| --- | --- |
| Select all peer keys for this node | Select all peer keys for this node |
| Add name of currently selected key | Add name of currently selected key |
| Add full path of the currently selected key | Add full path of the currently selected key |
| Add last write date/time of currently selected key | Add last write date/time of currently selected key |
| Add security properties for selected key | Add security properties for selected key |
| Enumerate all values for this key | Enumerate all values for this key |
| Add currently selected value | Add currently selected value |
| Delete properties from selection | Delete properties from selection |
| Go to selected key | Go to selected key |