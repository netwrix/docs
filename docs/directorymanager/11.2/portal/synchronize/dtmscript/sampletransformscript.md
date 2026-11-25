---
title: "Sample Transform Scripts for Directory Manager Synchronize"
description: "Copy sample Visual Basic .NET transform scripts that build full names and user names and translate department codes during Synchronize jobs."
keywords:
  - DTM transform script
  - Synchronize sample scripts
  - Visual Basic .NET script
  - full name script
  - user name script
sidebar_position: 20
---

# Sample Transform Scripts for Directory Manager Synchronize

These transform scripts set **DTM.Result** to the value of a destination field, such as a full name, a user name, or a department name.

## Assembling a full name: `<last name>`, `<first name>`

**Assumptions:**

- Last name is present in a source field named "sn" (for surname).
- First name may or may not be present in a source field named "givenName".

```
If Len(DTM.Source("givenName")) > 0 Then
DTM.Result = DTM.Source("sn") & ", " & DTM.Source("givenName")
Else
DTM.Result = DTM.Source("sn")
End If
```

## Assembling a full name: `<last name>`, `<middle initial>`. `<first name>`

**Assumptions:**

- Last name is present in a source field named "sn" (for surname).
- First name may or may not be present in a source field named "givenName".
- Middle name may or may not be present in a source field named "middleName".

```
Dim LastName = DTM.Source("sn")
Dim FirstName = DTM.Source("givenName")
Dim MiddleName = DTM.Source("middleName")
Dim FullName = LastName
If Len(FirstName) > 0 Or Len(MiddleName) > 0 Then
 FullName = FullName & ", "
End If
FullName = FullName & FirstName
If Len(FirstName) > 0 And Len(MiddleName) > 0 Then
 FullName = FullName & " "
End If
If Len(MiddleName) > 0 Then
 FullName = FullName & Left(MiddleName, 1) & "."
End If
DTM.Result = FullName
```

## Formulating a user name: six characters of last name and first initial, all lowercase

**Assumptions:**

- Last name is present in a source field named "sn" (for surname).
- First name is present in a source field named "givenName".

```
DTM.Result = LCase(Left(DTM.Source("sn"), 6) & Left(DTM.Source("givenName"), 1))
```

## Formulating a user name: combine the first letter of each part of the name, all lowercase

**Assumptions:**

- Last name is present in a source field named "sn" (for surname).
- First name may or may not be present in a source field named "givenName".
- Middle name may or may not be present in a source field named "middleName".
- Each part of the name can have multiple words separated by hyphens, spaces, or commas. The script must pick out the first character of each word. For example, "Reginald Howard-Hughes Thompson, Jr." converts to "rhhtj".

```
Dim Fullname As String = DTM.Source("givenName") & " " _
& DTM.Source("middleName") & " " _
& DTM.Source("sn")
Dim Nameparts As String() = Fullname.Split(" ,-".ToCharArray())
Dim Initials As String = ""
For Each Namepart As String In Nameparts
 Initials = Initials & Left(Namepart, 1)
Next 
 DTM.Result = LCase(Initials)
```

## Code translation: translating case by case

**Assumptions:**

- Source data contains a "DeptCode" field with 2-character codes.
- The corresponding destination field data needs the full department name.

```
Select Case DTM.Source("DeptCode")
Case "SA"
  DTM.Result = "Sales"
Case "EN"
  DTM.Result = "Engineering"
Case "AD"
  DTM.Result = "Administration"       
Case Else   
  DTM.Result = "Other"
End Select
```
