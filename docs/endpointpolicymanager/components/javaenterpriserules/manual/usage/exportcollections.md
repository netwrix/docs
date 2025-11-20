---
title: "Exporting Collections"
description: "Exporting Collections"
sidebar_position: 40
---

# Exporting Collections

Appendix A explains how to use the Endpoint Policy Manager Exporter to wrap up any Endpoint Policy
Manager directives and deliver them using Microsoft Endpoint Manager (SCCM and Intune), KACE, your
own MDM service, or Endpoint Policy Manager Cloud. To export a policy for later use using Endpoint
Policy Manager Exporter or Endpoint Policy Manager Cloud, right-click the collection or the policy
and select **Export to XML**. This will enable you to save an XML file, which you can use later.

![using_policypak_java_rules_13](/images/endpointpolicymanager/javaenterpriserules/using_endpointpolicymanager_java_rules_13.webp)

:::note
Exported collections or policies maintain any Item-Level Targeting that has already been
set. Also, note that Endpoint Policy Manager Java Rules Manager policies are always contained within
collections, even if you export one single policy. In other words, a collection is automatically
created at export time even if you export a single policy.

:::


