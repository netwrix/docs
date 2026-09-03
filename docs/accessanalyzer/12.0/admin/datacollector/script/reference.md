---
title: "Script Reference"
description: "Script Reference"
sidebar_position: 50
---

# Script Reference

Access Analyzer provides extensions to standard Visual Basic Script. These extensions let you
access and manipulate task data, in addition to invoking queries. Access Analyzer implements them
through two objects.

**Query Object**

The Query object provides access to the current query configuration and data. Use this to examine
the results of a query or to manipulate the query before Access Analyzer executes it. Changing
properties of this object changes the way Access Analyzer executes the task.

**Working Query Object**

The Working Query object is identical to the Query object. This object supports the same methods and
properties as the Query object but its properties and methods don't access the current query. Think
of this object as letting you create a task dynamically at runtime. Use this object to perform
queries, while leaving the original task undisturbed. This is valuable when you need to perform
compound queries. See the [Script Example 2: Command Query](/docs/accessanalyzer/12.0/admin/datacollector/script/example2.md) topic for additional
information.
