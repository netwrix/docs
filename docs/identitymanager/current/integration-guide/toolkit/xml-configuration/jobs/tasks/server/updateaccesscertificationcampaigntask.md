---
title: "UpdateAccessCertificationCampaignTask"
description: "Starts or stops the access certification campaigns according to their `StartDate` and `EndDate`."
sidebar_position: 23
---

Starts or stops the access certification campaigns according to their `StartDate` and `EndDate`. The task also computes the Access Certification Items to certify (applying [Access Certification Data Filter](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/access-certification/accesscertificationdatafilter) and [Access Certification Owner Filter](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/access-certification/accesscertificationownerfilter)), and fill the database with them.


## Examples
```xml
  <<UpdateAccessCertificationCampaignTask Identifier="UpdateAccessCertificationCampaign" DisplayName_L1="Starts/Stops access certification campaigns"/>
```


## Properties

|Property|Details|
|---|---|
| DisplayName_L1 required | **Type:** String **Description:** Display name of the task in language 1 (up to 16). |
| Identifier optional | **Type:** String **Description:** Unique identifier of the task. |

