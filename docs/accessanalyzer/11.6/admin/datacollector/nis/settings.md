---
title: "NIS: NIS Settings"
description: "NIS: NIS Settings"
sidebar_position: 40
---

# NIS: NIS Settings

The NIS Settings page is where the NIS domain and a NIS server are configured for testing. It is a
wizard page for both categories.

![NIS Data Collector Wizard NIS Settings page](/images/accessanalyzer/11.6/admin/datacollector/nis/settings.webp)

Configure the NIS domain and sample NIS server:

- NIS Domain Name – Enter the case-sensitive name of the NIS domain to scan. This is the value
  returned by `/bin/domainname` on UNIX systems.
- (Optional) Sample NIS Server – Enter the host name or IP address of a NIS server for the above
  domain to use for testing. This system should be running the `ypserv` process and be accessible
  from the Enterprise Auditor Console. Then, click **Test**.
- Test – The data collector attempts to connect to the specified server and access information from
  the specified domain. It returns a message indicating success or failure.
