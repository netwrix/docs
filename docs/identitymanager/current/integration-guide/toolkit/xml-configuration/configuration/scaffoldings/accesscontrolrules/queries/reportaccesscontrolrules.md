---
title: "ReportAccessControlRules"
description: "Generates the permissions to access the report view."
sidebar_position: 2
---

Generates the rights to access the report view.

Gives access to a shortcut on the navigation to access this page.

![Reports](/images/identitymanager/user-guide/administrate/reporting/home_reports_v602.webp)



## Examples


```xml
  <ReportAccessControlRules Profile="Administrator"/>
```


## Properties

|Property|Details|
|---|---|
| Profile required | **Type:** String **Description:** Identifier of the profile involved in the scaffolding. |



## Generated XML

Our example generates the following configuration:

```xml
<AccessControlRule Identifier="Administrator_ReportQuery" DisplayName_L1="Administrator - Report_ReportQuery" DisplayName_L2="Administrator - Rapport_ReportQuery" EntityType="ReportQuery" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Report/GenerateReportFileFromReportQuery/Query" />
</AccessControlRule>

```