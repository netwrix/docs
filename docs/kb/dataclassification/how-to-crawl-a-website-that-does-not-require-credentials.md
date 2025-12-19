---
description: >-
  Describes how to resolve a 403 Forbidden error when crawling a website that
  does not require credentials by setting a custom User-Agent in Netwrix Data
  Classification.
keywords:
  - Netwrix Data Classification
  - crawler
  - 403 Forbidden
  - User-Agent
  - Collector Using Agent
  - collector
  - web scanning
  - site crawl
products:
  - data-classification
sidebar_label: How to Crawl a Website That Does Not Require Crede
tags: []
title: "How to Crawl a Website That Does Not Require Crede?"
knowledge_article_id: kA04u000000wnoVCAQ
---

# How to Crawl a Website That Does Not Require Crede?

## Question

When trying to scan a website that does not require credentials to access it, the following error appears:

```text
Version: 5.7.0.58

Instance: abandc-test

Component: Collector Service

Level: Error

Page ID: 443213

CollectorEnumerator.CollectPage

Page Collection Exception

Exception: Location: CollectorEnumerator.CollectPage

A Web Exception 'Forbidden occured during processing -> The remote server returned an error: (403) Forbidden.

Details: Error: AccessDeniedError (-403)

Page Id: 443213

conceptCore.PageCollectionException: Location: CollectorEnumerator.CollectPage

A Web Exception 'Forbidden occured during processing ---> System.Net.WebException: The remote server returned an error: (403) Forbidden.

   at System.Net.HttpWebRequest.GetResponse()

   at conceptHttp.Collection.HttpPageCollector.Get(Boolean forceCollect, Boolean& changedSinceLastCollection)

   at conceptEngine.ServiceFramework.Collection.CollectorEnumerator._()

   --- End of inner exception stack trace ---


Inner Exception: System.Net.WebException: The remote server returned an error: (403) Forbidden.

   at System.Net.HttpWebRequest.GetResponse()

   at conceptHttp.Collection.HttpPageCollector.Get(Boolean forceCollect, Boolean& changedSinceLastCollection)

   at conceptEngine.ServiceFramework.Collection.CollectorEnumerator._() 
```

How to past this error when the site doesn't require any credentials?

## Answer

This error is gone after adding a specific line in the **Collector Using Agent** field. For that:

1. In **Netwrix Data Classification**, navigate to **Config** -> **Collector** -> **Advanced**.
2. Add the following line in the **Collector Using Agent** field:

```text
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Sa   
```

![User-added image](./images/ka0Qk000000DiGA_0EM4u000008pbhE.png)
