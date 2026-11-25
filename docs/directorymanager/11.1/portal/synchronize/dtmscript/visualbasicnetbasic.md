---
title: "Visual Basic .NET Scripting for Directory Manager"
description: "Learn the Visual Basic .NET syntax you need for DTM scripts in Synchronize: variables, string functions, decisions, and loops."
keywords:
  - Visual Basic .NET
  - DTM scripting
  - string manipulation
  - Select Case
  - Synchronize transform script
sidebar_position: 30
---

# Visual Basic .NET Scripting for Directory Manager

This topic covers Visual Basic .NET points that matter for DTM scripting in Directory Manager. For more information, see the [Visual Basic Language Reference](https://docs.microsoft.com/en-us/dotnet/visual-basic/language-reference/) article.

## Differences between Visual Basic .NET and other Visual Basic versions

Visual Basic .NET is largely a superset of Visual Basic 6. If you know Visual Basic from before .NET, see [Language Changes in Visual Basic](https://docs.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2008/skw8dhdd(v%3dvs.90)) and, in particular, [Programming Element Support Changes Summary](https://docs.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2008/kaf4ssya(v%3dvs.90)). Most statements and constructs that worked in Visual Basic 6, VBScript, and Visual Basic for Applications continue to work in Visual Basic .NET.

**Important:** A key difference is that the Set keyword is no longer used to assign a value to an object. Omit it.

## Declaring variables

Declare variables with the Dim keyword before, or at the same time as, their first use. Optionally, you can specify the data type of the variable in the declaration.

The following declarations are valid:

- Dim Lastname
- Dim Lastname, Firstname
- Dim Lastname, Firstname As String
- Dim Lastname = DTM.Source("sn")
- Dim Lastname As String = DTM.Source("sn")

## Manipulating strings

The most common use of Synchronize scripting is to dissect and combine strings. String literals are always enclosed in quotes, and Visual Basic provides the `&` operator for concatenating strings.

```
Dim Fullname = Lastname & ", " & Firstname
```

Visual Basic also provides many global functions that manipulate strings, for example:

- Len(Str), for example:

    ```
    Dim LengthOfName = Len(Fullname)
    ```

- Left(Str, Length), for example:

    ```
    Dim MiddleInitial = Left(DTM.Source("middleName"), 1)
    ```

- Mid(Str, Start, Length), for example:

    ```
    Dim SeventhCharacter = Mid(Fullname, 7, 1)
    ```

- LCase(Str), for example:

    ```
    Dim LowerCaseName = LCase(Fullname)
    ```

For a list of such string functions, see the [String Manipulation Summary](https://docs.microsoft.com/en-us/dotnet/visual-basic/language-reference/keywords/string-manipulation-summary) topic.

Instead of global functions, which carry over from Visual Basic before .NET, you can use the .NET string class and related classes. You can apply these methods to a variable only if you declare its data type as As String (as in Dim Lastname As String). Unlike global functions, positions within a string are zero-based (the first character occupies position 0) instead of one-based (the first character occupies position 1).

- String.Length, for example:

    ```
    Dim LengthOfName As Integer = Fullname.Length
    ```

- String.Substring(Start, Length), for example:

    ```
    Dim MiddleInitial As String = DTM.Source("middleName").Substring(0, 1)
    ```

- String.ToLower(), for example:

    ```
    Dim LowerCaseName As String = Fullname.ToLower()
    ```

For a list of such string methods, see [.NET String Methods](https://msdn.microsoft.com/en-us/library/system.string_methods(v%3dvs.110).aspx).

## Line continuation

Extensive string manipulation often makes statement lines long. To break a statement into two or more lines, insert a space followed by an underscore (“\_”) just before each line break.

:::note
Insert the line break characters ("\_") outside of a string literal.
:::

Example:

```
Dim DistinguishedName = "cn=Sales,CN=SF,CN=WestCoast,CN=Users," _
& "OU=corporation,DC=dc2000,DC=imanami,DC=biz"
```

## Decision structures

To make decisions in your script, use the If-Then or If-Then-Else constructs. These require a condition clause that evaluates to true or false.

Example 1:

```
Dim Fullname = DTM.Source("sn")
If Len(DTM.Source("givenName")) > 0 Then
Fullname = Fullname & ", " & DTM.Source("givenName")
End If
```

Example 2:

```
If DTM.Source("Department") = "Sales" Then
DTM.Result = "cn=Sales,CN=Users,DC=dc2000,DC=imanami,DC=biz"
Else
DTM.Result = "CN=Users,DC=dc2000,DC=imanami,DC=biz"
End If
```

To perform one of several alternative actions based on the value of a variable, use the Select Case construct. This example uses the global LCase function to make case-insensitive string comparisons.

```
Select Case LCase(DTM.Source("Department"))
Case "sales"
DTM.Result = "cn=Sales,CN=Users,DC=dc2000,DC=imanami,DC=biz"
Case "engineering"
DTM.Result = "cn=Eng,CN=Users,DC=dc2000,DC=imanami,DC=biz"
Case "admin"
DTM.Result = "cn=Admin,CN=Users,DC=dc2000,DC=imanami,DC=biz"
Case Else
DTM.Result = "CN=Users,DC=dc2000,DC=imanami,DC=biz"
End Select
```

## Loops

Loops are uncommon in a DTM script, because the script runs in the context of a single source row (or object) and a single destination row (or object). However, complex string manipulations might require iterating through the characters of a string. Iteration through the characters typically uses the For Each construct.

**Example:**

Count the number of numeric digits in an alphanumeric ID source field with the IsDigit() shared function of the .NET Char class.

```
 Dim Count = 0
 For Each ch As Char In DTM.Source("ID")
 If Char.IsDigit(ch) Then
 Count = Count + 1
 End If
 Next
                
```
