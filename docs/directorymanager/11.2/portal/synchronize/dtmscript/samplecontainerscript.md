---
title: "Sample Container Scripts for Synchronize"
description: "Copy sample Visual Basic .NET container scripts that route new objects to containers by department code with a case statement, an XML file, or an Excel file."
keywords:
  - container script samples
  - object routing
  - DeptCode
  - DTM.Result
  - Synchronize scripts
sidebar_position: 10
---

# Sample Container Scripts for Synchronize

These container scripts set **DTM.Result** to the distinguished name of the container for each new object, based on a department code in the source data.

## Object routing case by case

**Assumptions**:

- Source data contains a **DeptCode** field with 2-character codes.
- Each department has a container to which Synchronize directs new user objects.

    ```
    Select Case DTM.Source("DeptCode")
    Case "SA"
     DTM.Result = "CN=Sales,CN=Users,DC=dc2000,DC=imanami,DC=biz"
    Case "EN"
     DTM.Result = "CN=Engineering,CN=Users,DC=dc2000,DC=imanami,DC=biz"
    Case "AD"
     DTM.Result = "CN=Administration,CN=Users,DC=dc2000,DC=imanami,DC=biz"
    Case Else
     DTM.Result = "CN=Users,DC=dc2000,DC=imanami,DC=biz"
    End Select
    ```

## Object routing via an XML file

**Assumptions:**

- Source data contains a **DeptCode** field.
- Each department has a container to which Synchronize directs new user objects.
- XML file **DeptCodes.xml** contains a root element with **`Department`** child elements. Each child element contains **`<DeptCode>`** and **`<Container>`** attributes that specify the location for the user objects of each department.

    ```
    Dim dsDeptCodes As System.Data.DataSet = New System.Data.DataSet
    dsDeptCodes.ReadXml("C:\temp\DeptCodes.xml")
    Dim Rows As System.Data.DataRow() = _
    dsDeptCodes.Tables[0].Select("DeptCode='" & DTM.Source("DeptCode") & "'")
    If Rows.Length > 0 Then
    DTM.Result = Rows(0)("Container").ToString()
    Else
    DTM.Result = "CN=Users,DC=dc2000,DC=imanami,DC=biz"
    End If
    ```

## Object routing using an Excel file

**Assumptions:**

- Source data contains a **DeptCode** field.
- Each department has a container to which Synchronize directs new user objects.
- Excel file **DeptCodes.xls** contains the columns **DeptCode** and **Container**. They specify the location for the user objects of each department.

    ```
    Dim dtDeptCodes As System.Data.DataTable = New System.Data.DataTable
    Dim sConnString As String = "Provider=Microsoft.Jet.OLEDB.4.0;" & _
    "Data Source=C:\temp\DeptCodes.xls;" & _
    "Persist Security Info=false;" & _
    "Extended Properties='Excel 8.0;HDR=YES'"
    Dim sCmdString As String = "SELECT * FROM [Sheet1$]"
    Dim daExcel As System.Data.OleDb.OleDbDataAdapter = _
    New System.Data.OleDb.OleDbDataAdapter(sCmdString, sConnString)
    daExcel.Fill(dtDeptCodes)
    daExcel.Dispose()
    Dim Rows As System.Data.DataRow() = _
    dtDeptCodes.Select("DeptCode='" & DTM.Source("DeptCode") & "'")
    If Rows.Length > 0 Then
    DTM.Result = Rows(0)("Container").ToString()
    Else
    DTM.Result = "CN=Users,DC=dc2000,DC=imanami,DC=biz"
    End If
    ```
