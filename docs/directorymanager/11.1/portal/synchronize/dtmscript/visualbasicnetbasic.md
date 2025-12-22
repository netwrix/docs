---
title: "Visual Basic .NET for Directory Manager (formerly GroupID)"
description: "Visual Basic .NET for Directory Manager (formerly GroupID)"
sidebar_position: 30
---

# Visual Basic .NET for Directory Manager (formerly GroupID)

This topic discusses some points of information relevant to DTM scripting in Directory Manager. See
[Visual Basic Language Reference](https://docs.microsoft.com/en-us/dotnet/visual-basic/language-reference/)
article for additional information.

## Differences between Visual Basic .NET and other Visual Basic versions

Visual Basic .NET is largely a superset of Visual Basic 6. If you are familiar with Visual Basic
before the advent of .NET technology, you may wish to refer to
[Language Changes in Visual Basic](https://docs.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2008/skw8dhdd(v%3dvs.90)),
and particularly to
[Programming Element Support Changes Summary](https://docs.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2008/kaf4ssya(v%3dvs.90)).
For the most part, statements and constructs that worked in Visual Basic 6, Visual BasicScript, and
Visual BasicA continue to work in Visual Basic .NET.

Important: A key difference, however, is that the Set keyword is no longer used to assign a value to
an object. Simply omit it!

## Declaring variables

Variables must be declared via the Dim keyword prior to, or concurrent with, their first use.
Optionally, you can indicate the data type of the variable in the declaration.

The following declarations are valid:

- Dim Lastname
- Dim Lastname, Firstname
- Dim Lastname, Firstname As String
- Dim Lastname = DTM.Source("sn")
- Dim Lastname As String = DTM.Source("sn")

## Manipulating Strings

The most common use of Synchronize scripting is to dissect and combine strings. String literals are
always enclosed in quotes, and Visual Basic provides the operator for concatenating strings.

```
Dim Fullname = Lastname & ", " & Firstname
```

Visual Basic also provides a host of global functions that perform various string manipulations, for
example:

- Len(Str): e.g.,

    ```
    Dim LengthOfName = Len(Fullname)
    ```

- Left(Str, Length): e.g.,

    ```
    Dim MiddleInitial = Left(DTM.Source("middleName"), 1)
    ```

- Mid(Str, Start, Length): e.g.,

    ```
    Dim SeventhCharacter = Mid(Fullname, 7, 1)
    ```

- LCase(Str): e.g.,

    ```
    Dim LowerCaseName = LCase(Fullname)
    ```

For a list of such string functions, see the
[String Manipulation Summary](https://docs.microsoft.com/en-us/dotnet/visual-basic/language-reference/keywords/string-manipulation-summary)
topic.

As an alternative to global functions (which are handed down from Visual Basic before the advent of
.NET technology) you can instead use the .NET string class and related classes. These methods can
only be applied to a variable if you declare the data type of the variable to be As String (as in
Dim Lastname As String). Unlike global functions, positions within a string are 0-based (that is,
the first character occupies position 0) instead of 1-based (the first character occupies position
1).

- String.Length: e.g.,

    ```
    Dim LengthOfName As Integer = Fullname.Length
    ```

- String.Substring(Start, Length): e.g.,

    ```
    Dim MiddleInitial As String = DTM.Source("middleName").Substring(0, 1)
    ```

- String.ToLower(): e.g.

    ```
    Dim LowerCaseName As String = Fullname.ToLower()
    ```

For a list of such string methods, see
[.NET String Methods](https://msdn.microsoft.com/en-us/library/system.string_methods(v%3dvs.110).aspx).

## Line Continuation

With extensive string manipulation, statement lines frequently become quite long. In order to break
a statement into two or more lines, insert a space followed by an underline (”\_”) just prior to
each line break.

:::note
Be sure to insert the line break characters ("\_") outside of a string literal.
:::


Example:

```
Dim DistinguishedName = "cn=Sales,CN=SF,CN=WestCoast,CN=Users," _
& "OU=corporation,DC=dc2000,DC=imanami,DC=biz"
```

## Decision Structures

You can make decisions in your script using the If-Then or If-Then-Else constructs. These require a
condition clause that evaluates to true or false.

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

To perform one of a number of alternative actions based on the value of a variable, the Select Case
construct comes in handy. In this example, note the use of the global LCase function. This example
illustrates a how to make case-insensitive string comparisons.

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

It is uncommon to use loops in a DTM script, since the script itself is executed in the context of a
single source row (or object) and a single destination row (or object). However, complex string
manipulations may require iterating through the characters of a string. Iteration through the
characters is most easily accomplished using the or Each construct.

**Example:**

Count the number of numeric digits in an alphanumeric ID source field using the IsDigit() shared
function of the .Net Char class.

```
 Dim Count = 0
 For Each ch As Char In DTM.Source("ID")
 If Char.IsDigit(ch) Then
 Count = Count + 1
 End If
 Next
                
```
