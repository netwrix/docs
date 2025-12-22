---
title: "Script Example 1: Conversion of Data"
description: "Script Example 1: Conversion of Data"
sidebar_position: 70
---

# Script Example 1: Conversion of Data

This script example demonstrates how to perform a query and modify returned data. The script
provides the data collector with the information that would have been provided if the user interface
had been used to design the query. However, in this case it is all done through script. The data
collector returns a value that is then converted and stored by Access Analyzer.

This script starts by defining a query using the Perfmon Data Collector. Notice that the
**WorkingQuery** object is used, not the Query object. This is done to preserve the Query object,
since the Query object will be used to store the results that are different from what the data
collector is providing.

The script then issues the query by calling `WorkingQuery.Execute`. When the query completes,
**WorkingQuery** is set to view the first row of results by setting the **ResultRow** property. The
value within the **System Up Time** property is then transferred into the `REMAINDER` variable so
that it can be more easily manipulated.

The script then takes the value of `REMAINDER`, which is in seconds, and converts it to days, hours,
minutes, and seconds. These values are then recorded in the Query object so that Access Analyzer can
store this data.

:::note
In this task, the hours, minutes, and seconds properties were specified manually using the
task dialog. See the [Script Properties](/docs/accessanalyzer/12.0/admin/datacollector/script/properties.md) topic for additional information.
:::


## Example of Conversion of Data Script

The conversation of data script example is:

```
Sub Task()
Dim DAYS
Dim HRS
Dim MINS
Dim SECS
Dim REMAINDER 
WorkingQuery.Host=Query.Host
WorkingQuery.Source="Perfmon"
WorkingQuery.Paths=1
WorkingQuery.Path(0)="System\System Up Time"
WorkingQuery.AddProperty  "NAME=System Up Time,DATATYPE=NUMERIC,VALUE=,COLUMN=UPTIME"
WorkingQuery.Execute
WorkingQuery.ResultRow=0
REMAINDER=WorkingQuery.ResultData("System Up Time") 
Query.ResultRows=1
Query.ResultRow=0 
'Calculate days/hrs/mins/secs
DAYS=INT(REMAINDER/86400)
REMAINDER=REMAINDER-(DAYS*86400)
HRS=INT(REMAINDER/3600)
REMAINDER=REMAINDER-(HRS*3600)
MINS=INT(REMAINDER/60)
SECS=INT(REMAINDER-(MINS*60)) 
Query.ResultData("SecondsElapsed")=INT(WorkingQuery.ResultData("System Up Time"))
Query.ResultData("Days")=DAYS
Query.ResultData("Hrs")=HRS
Query.ResultData("Mins")=MINS
Query.ResultData("Secs")=SECS
End Sub

```
