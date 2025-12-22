---
description: >-
  Explains why the Netwrix Auditor Application Deployment Service may not appear
  in services.msc, may stop, or be terminated, and why this behavior is
  expected.
keywords:
  - Netwrix Auditor
  - Application Deployment Service
  - services.msc
  - Windows File Server
  - Logon Activity
  - compression service
  - service terminated
products:
  - auditor
sidebar_label: Why Deployment Service Not Start or Terminated
tags: []
title: "Why Does the Netwrix Auditor Application Deployment Service Not Start or Is Terminated upon Launch?"
knowledge_article_id: kA0Qk0000000Ne9KAE
---

# Why Does the Netwrix Auditor Application Deployment Service Not Start or Is Terminated upon Launch?

## Question

Why does the Netwrix Auditor Application Deployment Service not start or is terminated upon launch?

## Answer

There are some Netwrix services that are not shown in **services.msc** snap-in. They run as processes and disappear when finished. For example, the processes to audit **Windows File Server** and **Logon Activity**.

A parent service called **Netwrix Auditor Application Deployment Service** manages them. When you enable a compression service, the Application Deployment service is installed on the target server. Then, the Application Deployment service helps deploying the compression services ("processes") and manages them. Once the Application Deployment service completes its tasks, such as installing the compression service on the target, it goes into idle mode. When needed again, it starts automatically.

Therefore, you do not need to manually start this service or worry if the service gets stopped.
