---
title: "Sample Transform Scripts"
description: "Sample Transform Scripts"
sidebar_position: 20
---

# Sample Transform Scripts

## Assembling a Full Name: `<last name>`, `<first name>`

**Assumptions:**

- Last name is present in a source field named "sn" (for surname)
- First name may or may not be present in a source field named "givenName"

```
If Len(DTM.Source("givenName")) > 0 Then
DTM.Result = DTM.Source("sn") & ", " & DTM.Source("givenName")
Else
DTM.Result = DTM.Source("sn")
End If
```

## Assembling a Full Name: `<last name>`, `<middle initial>`. `<first name>`

**Assumptions:**

- Last name is present in a source field named "sn" (for surname)
- First name may or may not be present in a source field named "givenName"
- Middle name may or may not be present in a source field named "middleName"

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

## Formulating a UserName: 6 chars of last name & first initial, all lower case

**Assumptions:**

- Last name is present in a source field named "sn" (for surname)
- First name is present in a source field named "givenName"

```
DTM.Result = LCase(Left(DTM.Source("sn"), 6) & Left(DTM.Source("givenName"), 1))
```

## Formulating a UserName: Combine first letter of each part of name, all lower case

**Assumptions:**

- Last name is present in a source field named "sn" (for surname)
- First name may or may not be present in a source field named "givenName"
- Middle name may or may not be present in a source field named "middleName"
- Each part of name may be composed of multiple words separated by hyphens, spaces or commas, and
  script must pick out the first character of each word – for example,. "Reginald Howard-Hughes
  Thompson, Jr." converts to "rhhtj".

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

## Code Translation: Translating Case-By-Case

**Assumptions:**

- Source data contains a "DeptCode" field with 2-character codes.
- Corres. destination field data needs full spelling of department name.

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

**See Also**

- [Script](/docs/directorymanager/11.0/welcome/synchronize/dtmscript/dtmscript.md)
- [Visual Basic .NET for GroupID](/docs/directorymanager/11.0/welcome/synchronize/dtmscript/visualbasicnetbasic.md)
- [Sample Container Scripts](/docs/directorymanager/11.0/welcome/synchronize/dtmscript/samplecontainerscript.md)
