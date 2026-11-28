---
title: "Write Synchronize Scripts for Directory Manager"
description: "Learn how Synchronize transform and container scripts work, the DTM keywords, the Context, and the restrictions and options that apply to scripts."
keywords:
  - Synchronize script
  - DTM keywords
  - Visual Basic .NET
  - transform script
  - container script
  - DTM.Result
sidebar_position: 70
---

# Write Synchronize Scripts for Directory Manager

Synchronize scripts are written in Visual Basic .NET. A script runs after Synchronize establishes a current source row ("object"). The script determines a single value (the "result" value) and assigns that value to the keyword **DTM.Result**.

The type of script determines what the script result is:

- **Transform scripts:** the script result is the value of a destination field.
- **Container scripts:** the script result is the distinguished name of a parent container.

## Examples and language overview

- For examples of transform scripts, see the [Sample Transform Scripts for Directory Manager Synchronize](/docs/directorymanager/11.1/portal/synchronize/dtmscript/sampletransformscript.md) topic.
- For examples of container scripts, see the [Sample Container Scripts for Synchronize](/docs/directorymanager/11.1/portal/synchronize/dtmscript/samplecontainerscript.md) topic.
- For general information, see the [Visual Basic .NET for Directory Manager](/docs/directorymanager/11.1/portal/synchronize/dtmscript/visualbasicnetbasic.md) topic.
- For general information, see the Python for Directory Manager topic.

## DTM keywords

DTM keywords give you access to the data being processed.

- DTM.Source(**`fieldname`**)

    This function has a single string argument: field name. DTM.Source returns the value of the specified field (or "attribute") for the current row ("object") in the source data.

- DTM.Result

    This is a write-only property. Your script must assign a value to DTM.Result. The type of script determines what the value means.

    - Transform script: assign to DTM.Result the value you want for the transform’s destination field.
    - Container script: assign to DTM.Result the distinguished name of the new object’s container.

    In any script, each branch of execution must assign a value to DTM.Result. If a branch doesn't, a runtime error occurs, and the destination row ("object") isn't updated or created. The job still runs to completion.

- DTM.ExpandVariables(**`<text>`**)

    This function has a single string argument: text. It replaces each environment variable embedded in the text with its string equivalent and returns the value of the specified text as a string. Environment variables are surrounded by "%" characters, as in "%now%" and "%SystemDrive%".

- DTM.CancelRow()

    This subroutine has no arguments. The current destination row ("object") isn't updated or created. DTM.CancelRow lets you bypass certain objects based on their attributes. In general, a filter query for this purpose gives better performance.

- DTM.AddToContext(`<__Key__>`,`<__Value__>`)

    This function has two arguments: Key and Value. To share data across segments of code in different editors in the Synchronize job wizard, place the data in the Context. This prevents errors and exceptions.

- DTM.Context(`<__Key__>`)

    This property has a single argument: Key. To retrieve an object that you added to the Context, pass its key (identity) to this property.

## Context

The Context is central to the Synchronize job model. In a Synchronize job, you can reference assemblies for Synchronize PowerTools and other third-party libraries only in the Global Script Editor. To manipulate objects of these libraries in other code segments in a job, add them to the Context.

The Context is an implementation of the .NET Hashtable collection, an in-memory data structure that stores and retrieves objects using key/value pairs. The DTM object in the Synchronize job model provides the AddToContext member to add objects to the Context and the Context member to retrieve them. For more information about these two members, see the previous section on DTM keywords.

The Context lets you share objects across different code segments of a Synchronize job. However, you can't test the code for each segment individually without running the job. For this reason, you might encounter one of the following situations:

- You receive an exception when you compile the code in the Script Editor, stating that the object reference isn't found.
- Testing your script with random data in the built-in Script Tester doesn't give the expected results, even though the code handles the exception and checks for null object references.

## Scripting restrictions enforced by Synchronize

Synchronize inserts each script into the body of a subroutine before compiling. Therefore, any Visual Basic .NET constructs that are valid only outside of a subroutine or function fail to compile and aren't allowed.

These restrictions apply when you create a Synchronize script:

- Subroutines, functions, classes, modules, and namespaces aren't allowed.
- Module-level statements, such as Import or Option statements, aren't permitted.
- Shared (static and global) variables aren't supported.

## Visual Basic options set by Synchronize

Synchronize establishes the following Option statements, which apply to all scripts and can't be overridden:

- Option Explicit On: you must declare all variables with a Dim statement before you use them. With Visual Basic .NET, you can declare and assign a variable at its first use, as follows:

    ```
    Dim MyVariable = "Hello"
    ```

    ```
    Dim MyObject = New Object()
    ```

- Option Strict Off: you don't need to declare a data type for each variable. When possible, conversions between types are implicit. Declaring data types avoids unnecessary conversions and improves performance.

## .NET assembly references

Synchronize establishes certain system assembly references before compiling your scripts. These references apply to all scripts and can't be overridden.

The references are:

- MsCorLib.dll
- System.dll
- System.Data.dll
- System.Xml.dll

Your scripts can't use System.DirectoryServices. This prevents direct access to Active Directory and other LDAP identity providers, and stops your script from conflicting with Synchronize, which is responsible for updating these providers.

## .NET namespaces

Synchronize imports certain namespaces when compiling your scripts. These imports apply to all scripts and can't be overridden.

The imports are:

- Imports System
- Imports System.Text
- Imports System.Text.RegularExpressions
- Imports System.IO
- Imports System.Math

To use a .NET namespace that isn't listed, specify the fully qualified namespace. For example, you can read a DataSet (which belongs to the System.Data namespace) from a file as follows:

```
 Dim ds = New System.Data.DataSet()<br xmlns="http://www.w3.org/1999/xhtml" /> ds.ReadXml("C:\Temp\MyFile.xml")
                
```
