---
description: >-
  Shows how to create a custom tracked attributes filter within a Netwrix
  Change Tracker configuration template when no default filter matches your
  requirements.
keywords:
  - Change Tracker
  - custom filter
  - tracked attributes
  - default.xml
  - CustomFilters.xml
  - configuration template
  - file security
  - registry filters
  - hubservice
products:
  - changetracker
knowledge_article_id: kA04u0000000JcSCAU
sidebar_label: Creating a Custom Tracked Attributes Filter
tags: [kb, configuration-and-setup]
title: Creating a Custom Tracked Attributes Filter Within a Configuration Template
---

# Creating a Custom Tracked Attributes Filter Within a Configuration Template

## Overview

This article describes how to create a custom tracked attributes filter when no default filter matches your requirements.

Configuration templates in Netwrix Change Tracker use tracked attributes filters to define which file and registry attributes a tracker monitors. If none of the default filters match your requirements — for example, if you want to track only security setting modifications — create a custom filter with just the attributes you need.

## Instructions

1. On the Change Tracker Hub server, go to the filters directory: `C:\inetpub\wwwroot\Change Tracker Generation 7 (NetCore) Hub\Filters`.

2. Open `default.xml`. This file contains all the standard file and registry filters shown on configuration templates. Configuration templates define each filter as a `<filetrackerchangesfilter>` element with one `true`/`false` attribute per tracked item, for example:

   ```xml
   <filetrackerchangesfilter name="allchanges" description="File attributes (including security)" priority="low" source="globalLow" watchdirectories="false" watchfiles="true" created="false" length="true" lastaccess="false" lastwrite="true" filename="true" directoryname="true" attributes="true" security="true" datastreams="true" content="false" />
   ```

3. Copy the filter section closest to your goal. For example, to create a filter for file security changes only, copy a section of `default.xml` that already tracks the `security` attribute.

4. Open `CustomFilters.xml`, located in the same directory as `default.xml`.

5. Paste the copied section between the root tags in `CustomFilters.xml`, then set each `true`/`false` attribute (such as `security`, `lastwrite`, or `content`) to match what you want the filter to track.

    > **NOTE:** The `description` parameter is the filter name shown on the configuration template. The `name` parameter must be unique among all filters in `CustomFilters.xml`.

6. Save `CustomFilters.xml`.

7. Log back in to the Change Tracker console. Saving `CustomFilters.xml` logs out all active console sessions.

8. Open the configuration template you want to use the filter with. The custom filter now appears in the tracked attributes filter list.
