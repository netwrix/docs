---
title: "Endpoint Policy Manager Cloud Event Forwarding to Splunk"
description: "Endpoint Policy Manager Cloud Event Forwarding to Splunk"
sidebar_position: 20
---

# Endpoint Policy Manager Cloud Event Forwarding to Splunk

Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud customers are entitled to have one day of
Endpoint Policy Manager Least Privilege Manager logs stored in Endpoint Policy Manager Cloud for
free. If this is not yet enabled for your Endpoint Policy Manager Cloud tenant, simply open a ticket
to Endpoint Policy Manager Support.

If more than one day of storage is needed, Endpoint Policy Manager Cloud customers must pay a fee.

As an alternative, customers can use the Endpoint Policy Manager Cloud Event Forwarding to Splunk
mechanism, which is free of charge. Follow these steps to configure this option.

**Step 1 –** . Start out by logging into login.splunk.com and get your URL. You will also need you
Splunk Access Token
([https://docs.splunk.com/observability/en/admin/authentication-tokens/api-access-tokens.html](https://docs.splunk.com/observability/en/admin/authentication-tokens/api-access-tokens.html)
and
[https://docs.splunk.com/Documentation/Splunk/9.1.1/Security/Setupauthenticationwithtokens](https://docs.splunk.com/Documentation/Splunk/9.1.1/Security/Setupauthenticationwithtokens)
). You will need both the URL and API Token during these steps.

:::note
These directions will send data to Splunk Cloud, but the process is similar to on-prem
Splunk. Make sure your on-prem Splunk is configured correctly to accept data sources from the
Internet.
:::


**Configure Event Forwarder in PP Cloud**

**Step 2 –** Navigate to [https://cloud.policypak.com/,](https://cloud.policypak.com/) go to
**Company details** > **Event Forwarder List** > **Add Event Forwarder** .

![976_1_1](/images/endpointpolicymanager/cloud/eventcollection/976_1_1.webp)

![976_3_3](/images/endpointpolicymanager/cloud/eventcollection/976_3_3.webp)

**Step 3 –** Configure and save the new **Event Forwarder**. Please be aware that you must be a
**Notification Option Admin**' role member. One-time Password is required for saving **Event
Forwarder** config for extra security.

You may may usethe **Validate** button to check the credentials before saving.

**Step 4 –** Check the forwarding events state in the Collected Events report.

**Step 5 –** InEndpoint Policy Manager Cloud confirm that events are forwarded as expected.

![976_2_2](/images/endpointpolicymanager/cloud/eventcollection/976_2_2.webp)

**Step 6 –** In Endpoint Policy Manager Cloud, go to **Report** > **Computers (Collected Events)** >
**Show event**, and check **Forwarded** state (Scheduled, Forwarded, Error).

**Step 7 –** View the forwarded events in Splunk..

**Step 8 –** To make sure the events are appearing in Splunk, Navigate to Splunk Home  and  enter
the user name and password.

**Step 9 –** Click **Search & Reporting** enter index=**history** filter, then click the **Search**
icon.

![976_4_4](/images/endpointpolicymanager/cloud/eventcollection/976_4_4.webp)

**Step 10 –** Click **Datasets**.

![976_5_5](/images/endpointpolicymanager/cloud/eventcollection/976_5_5.webp)

**Step 11 –** Click **raw_data**.

![976_6_6](/images/endpointpolicymanager/cloud/eventcollection/976_6_6.webp)

**Step 12 –** View the event data


