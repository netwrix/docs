---
title: "Script Reference"
description: "Script Reference"
sidebar_position: 50
---

# Script Reference

Access Analyzer provides extensions to standard Visual Basic Script. These extensions allow access
to and manipulation of task data, in addition to invoking queries. They are implemented through two
objects.

**Query Object**

The Query object provides access to the current query configuration and data. Use this to examine
the results of a query or to manipulate the query before it is executed. Changing properties of this
object will change the way the task is executed by Access Analyzer.

**Working Query Object**

The Working Query object is identical to the Query object. This object supports the same methods and
properties as the Query object but its properties and methods do not access the current query. Think
of this object as allowing the ability to create a task on the fly. Use this object to perform
queries, while leaving the original task undisturbed. This is valuable when performing compound
queries isneeded. See the [Script Example 2: Command Query](/docs/accessanalyzer/12.0/admin/datacollector/script/example2.md) topic for additional
information.
