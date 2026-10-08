---
title: "System Configuration Settings"
description: "System Configuration Settings"
sidebar_position: 50
---

# System Configuration Settings

This section contains information on additional configuration settings specific to different source
types.

- AD Domains Excluded
- Attachments Excluded
- No Index
- Proxy Server
- Suspend Services (Scheduler)

[](#)AD Domains Excluded

Use the AD Domains Excluded list to disable Active Directory expansion for certain domain names.
This is useful in a multi-Domain forest, where the Netwrix Data Classification server doesn't have
access to all domains within the forest.

![configaddomainsexcluded](/images/dataclassification/5.8/configuration/configaddomainsexcluded.webp)

**Attachments Excluded**

When indexing files that potentially contain attachments (SharePoint List Items), the Attachments Excluded list defines the file locations to ignore. You can view and modify the definitions in
this list via the Attachments Excluded form:

![configattachementsexcluded](/images/dataclassification/5.8/configuration/configattachementsexcluded.webp)

The product ignores any file with a path that matches one of these patterns. You can use wildcards
anywhere in the pattern definition, with:

- The asterisk character (\*) matching any sequence of characters
- The question mark character (?) matching any single character

**No Index**

Sometimes an application may want to remove selected documents from all search results. To do this,
specify No Index entries.

![confignoindex](/images/dataclassification/5.8/configuration/confignoindex.webp)

You can enter any number of URLs (or Filenames), and none of these ever appear in search
results. You can use wildcards anywhere in the pattern definition, with:

- The asterisk character (\*) matching any sequence of characters
- The Question mark character (?) matching any single character

**Proxy Server**

Use the Proxy Server form to define a proxy server for crawling websites. The product doesn't use
the proxy server for SharePoint crawling.

![configproxyserver](/images/dataclassification/5.8/configuration/configproxyserver.webp)

Set Bypass Local to Yes to bypass the proxy server for local addresses (localhost etc).

Define any other exclusions that shouldn't go through the proxy server in the Exceptions
list.

**Suspend Services (Scheduler)**

All Netwrix Data Classification services run as Windows services. They are responsible for building
the search index and classifying documents against the registered taxonomies.

It can be useful to suspend these services from running so that they don't impact query performance
during the peak hours of the working day. Sometimes it may be useful to suspend these services for
some lower priority sources but have them continue to process higher priority sources.

![configsuspendservices](/images/dataclassification/5.8/configuration/configsuspendservices.webp)

You can configure service suspensions in the following ways:

- Source—Which source types the suspension is in place for: all source types, specific source types
  (SharePoint, Web etc) or specifically against Re-Indexing operations.
- Service—Which services the suspension affects: All Services, or, a choice of: NDC
  Collector, NDC Indexer, NDC Classifier.
- Day/Times—Lets you configure which days and times the suspension is in place.
