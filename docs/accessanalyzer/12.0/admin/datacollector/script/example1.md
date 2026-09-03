---
title: "Script Example 1: Conversion of Data"
description: "Script Example 1: Conversion of Data"
sidebar_position: 70
---

# Script Example 1: Conversion of Data

This script example demonstrates how to perform a query and modify returned data. The script
provides the data collector with the same information you would provide by using the user
interface to design the query. However, in this case, the script does all of this instead. The
data collector returns a value that Access Analyzer then converts and stores.

This script starts by defining a query using the Perfmon Data Collector. Notice that the script
uses the **WorkingQuery** object, not the Query object. The script preserves the Query object this
way, because it later uses the Query object to store results that differ from what the data
collector provides.

The script then issues the query by calling `WorkingQuery.Execute`. When the query completes, the
script sets **WorkingQuery** to view the first row of results by setting the **ResultRow**
property. The script then transfers the value within the **System Up Time** property into the
`REMAINDER` variable for easier manipulation.

The script then takes the value of `REMAINDER`, which is in seconds, and converts it to days, hours,
minutes, and seconds. The script then records these values in the Query object so that Access
Analyzer can store this data.

:::note
In this task, you specified the hours, minutes, and seconds properties manually using the
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
