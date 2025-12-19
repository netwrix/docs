---
title: "Script Example 2: Command Query"
description: "Script Example 2: Command Query"
sidebar_position: 80
---

# Script Example 2: Command Query

The following example illustrates the use of scripts within Enterprise Auditor. This script reads a
database list from SQL Server and then proceeds to the File System Data Collector for the size of
the database file, essentially inventorying the installed databases, their paths, and sizes.

:::note
Because the object instances are not thread-safe, scripts like these that use objects
external to Enterprise Auditor should be run with only one thread.
:::


In this example, a connection is opened with a SQL server. The SQL server name is provided by
Enterprise Auditor during the query. Enterprise Auditor provides the active host to the script using
the **Query.Host** property.

The script then queries the Master database, requesting a **recordset** containing all databases and
proceeds to get the row count. Setting the **Query.ResultRows** property creates a row of storage
for each record in the recordset. It then proceeds to read data from each row by looping row by row.
For each row, the database name, filename, and ID are captured. The script then calls a function to
get the size of the file. The **FileSize** function uses the database filename to construct a query
to the File System Data Collector, which ultimately returns the size of the file.

The data for each database is stored in the Query object.

Finally, the SQL objects are freed.

## Example of Compound Query Script

The compound query script example is:

```
Sub Task() 
Const adOpenStatic = 3
Const adLockPessimistic = 2 
Dim cnnSQL
Dim rstSQL
Dim I
Dim sFilespec, sPath, sFile 
' CONNECT TO THE DATABASE
' **** NOTE *****
' Set Uid and pwd to username and password
' OR set both to blank for trusted connections 
Set cnnSQL = CreateObject("ADODB.Connection")
cnnSQL.Open "Driver={SQL Server};" & _ 
"Server=" & Query.Host & ";" & _
"Database=Master;" & _
"Uid=SA;" & _ 
"Pwd="
Set rstSQL = CreateObject("ADODB.Recordset")
rstSQL.Open "SELECT dbid, name, filename FROM sysdatabases;", cnnSQL, _
adOpenStatic, adLockPessimistic 
' AS LONG AS RECORDS CAME BACK, PROCEED TO CAPTURE DATABASE INFO 
If NOT(rstSQL.EOF) Then
Query.ResultRows=rstSQL.RecordCount
rstSQL.MoveFirst
For i=0 to Query.ResultRows-1
Query.ResultRow=i
Query.ResultData("DbId")=rstSQL.Fields("dbid")
Query.ResultData("Name")=rstSQL.Fields("name")
sFilespec=rstSQL.Fields("filename")
SplitPath sFileSpec, sPath, sFile
Query.ResultData("Path")=sPath 
'GET DB SIZE 
iSize=GetFileSize(Query.Host, sPath, sFile)
Query.ResultData("Size")=iSize 
'MOVE TO NEXT DB
rstSQL.MoveNext 
Next 
End If 
' CLEAN UP 
rstSQL.Close
Set rstSQL = Nothing 
cnnSQL.Close
Set cnnSQL = Nothing 
End Sub 
'--------------------------------------------------------------------- 
Function GetFileSize (sHost, sPath, sFile) 
sFile=Chr(34) & sFile & Chr(34)
sPath=Chr(34) & sPath & Chr(34)
WorkingQuery.Reset
WorkingQuery.Host=Query.Host
WorkingQuery.Source="FILE"
sQueryPath="Type=FILEPATH?FilePath=" & sPath & _
"?Target=FILES?FileSpec=" & sFile & _
"?SubFolders=FALSE?GroupSize=FALSE?Units=Mb"
WorkingQuery.Paths1
WorkingQuery.Path(0)=sQueryPath
WorkingQuery.AddProperty("NAME=Size,DATATYPE=NUMERIC,VALUE=")
WorkingQuery.Execute
WorkingQuery.ResultRow=0 
GetFileSize=WorkingQuery.ResultData("Size") 
End Function 
'--------------------------------------------------------------------- 
Sub SplitPath(sFileSpec, ByRef sPath, ByRef sFile)
Dim iPos
If sFileSpec<>"" then
iPos=instrRev(sFileSpec,"\")
sPath=mid(sFileSpec,1,iPos-1)
sFile=mid(sFileSpec,iPos+1)
End If
End Sub
'---------------------------------------------------------------------

```
