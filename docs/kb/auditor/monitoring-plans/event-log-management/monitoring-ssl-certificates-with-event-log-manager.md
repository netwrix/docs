---
description: >-
  Learn how to monitor SSL certificate events by creating filters and alerts in
  Event Log Manager for Netwrix Auditor.
keywords:
  - ssl
  - certificates
  - event log manager
  - monitoring
  - alerts
  - Netwrix Auditor
  - event IDs
  - certificate expiration
products:
  - auditor
sidebar_label: Monitoring SSL Certificates with Event Log Manager
tags: []
title: "Monitoring SSL Certificates with Event Log Manager"
knowledge_article_id: kA00g000000PbckCAC
---

# Monitoring SSL Certificates with Event Log Manager

## Events related to SSL certificates

The following is a list of events that are related to SSL Certificates:

- `1001` Certificate Replaced
- `1002` Certificate Expired
- `1003` Certificate Expiration Approaching
- `1004` Certificate Deleted
- `1005` Certificate Archived
- `1006` Certificate Installed

In order to audit these events, create a new filter in Event Log Manager.

**NOTE:** Please follow this guide for fundamental configurations of Event Log Manager in Netwrix Auditor: https://docs.netwrix.com/docs/auditor/10_8/tools/eventlogmanager Failure to do so may result in a delay or absence of audit data.

## Create a filter to audit SSL certificate events

1. If this is your first Event Log Manager plan, enter notification recipients and target servers before continuing.  
   ![Config Filter](https://kb.netwrix.com/wp-content/uploads/2019/11/1-Config-Filter.png)

2. Add a new filter.  
   ![Add new Filter](https://kb.netwrix.com/wp-content/uploads/2019/11/2-Add-new-Filter.png)

3. When an SSL certificate is added to a server, a new event log titled `Microsoft-Windows-CertificateServicesClient-Lifecycle-System/Operational` is created. Enter this log into the **Event Log** text field and set **Write To** to **Both**.  
   ![Event Log and Both](https://kb.netwrix.com/wp-content/uploads/2019/11/3-Event-Log-and-Both.png)

4. Click the **Event Fields** tab and enter the event IDs you wish to audit. The provided example exhibits auditing of all SSL Certificate events.  
   ![Event IDs](https://kb.netwrix.com/wp-content/uploads/2019/11/4-Event-IDs.png)

5. Click **OK** until you are back to the Event Log Manager homepage and then click **Save**.

You will now receive reports for SSL certificate event data.

## Configure alerts for SSL certificate events

If you wish to receive Alerts for this data, repeat the filter configuration steps using the Alert Filter Configuration:

1. Open the Alert Filter Configuration and add a new alert filter as needed.  
   ![Alert](https://kb.netwrix.com/wp-content/uploads/2019/11/5-Alert.png) ![New Alert](https://kb.netwrix.com/wp-content/uploads/2019/11/6-New-Alert.png)

2. Configure the alert filter similarly to the report filter, specifying the same event log and event IDs.  
   ![Alert Filter](https://kb.netwrix.com/wp-content/uploads/2019/11/7-Alert-Filter.png) ![Alert Filter 2](https://kb.netwrix.com/wp-content/uploads/2019/11/8-Alert-Filter-2.png) ![Alert Filter 3](https://kb.netwrix.com/wp-content/uploads/2019/11/8-Alert-Filter-3.png)

3. Click **OK** until you are back to the Event Log Manager homepage and then click **Save**.

The configured Monitoring Plan will now yield reports and alerts for SSL auditing.
