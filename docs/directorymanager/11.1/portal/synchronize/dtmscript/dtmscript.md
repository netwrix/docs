---
title: "Script"
description: "Script"
sidebar_position: 70
---

# Script

Synchronize scripts are written in Visual Basic .NET. A script is run after having established a
current source row (”object”). The script determines a single value--the ”result” value--and assigns
that value to the keyword **DTM.Result**.

The type of script determines the nature of the script result:

- **Transform scripts:** the script result is the value of a destination field.
- **Container scripts:** the script result is the distinguished name of a parent container.

## Examples and Language Overview

- For examples of transform scripts, see the [Sample Transform Scripts](/docs/directorymanager/11.1/portal/synchronize/dtmscript/sampletransformscript.md)
  topic
- For examples of container scripts, see the [Sample Container Scripts](/docs/directorymanager/11.1/portal/synchronize/dtmscript/samplecontainerscript.md)
  topic
- For general information, see
  [Visual Basic .NET for Directory Manager (formerly GroupID)](/docs/directorymanager/11.1/portal/synchronize/dtmscript/visualbasicnetbasic.md) topic
- For general information, see Python for GroupID topic

## DTM keywords

DTM keywords give you access to the data being processed.

- DTM.Source(**`fieldname`**)

    This function has a single string argument: field name. DTM.Source returns the value of the
    specified field (or "attribute") for the current row ("object") in the source data.

- DTM.Result

    This is a write-only property. This script must assign a value to DTM.Result. This type of
    script determines what the value signifies.

    - Transform script – assign to DTM.Result the desired value of the transform’s destination
      field.
    - Container script – assign to DTM.Result the distinguished name of the new object’s container.

    In any script, each branch of execution must assign a value to DTM.Result. Failure to assign a
    value to DTM.Result causes a runtime error, and the destination row ("object") is not updated or
    created . The job still runs to completion.

- DTM.ExpandVariables(**`<text>`**)

    This function has a single string argument: text. It returns the valueof the specified text as a
    string after replacing each environment variable embedded in the text with its string
    equivalent. Environment variables are surrounded by "%" characters, as in "%now%" and
    "%SystemDrive%".

- DTM.CancelRow()

    This subroutine contains no arguments. The current destination row ("object") is not updated or
    created. DTM.CancelRow provides a way to bypass certain objects based on their attributes. (In
    general, using a filter query for this purpose gives better performance.)

- DTM.AddToContext(`<__Key__>`,`<__Value__>`)

    This function has two arguments: Key and Value. When data is to be shared across segments of
    code in different editors supported by the Synchronize job wizard, it needs to be placed in the
    Context. This practice prevents errors and exceptions.

- DTM.Context(`<__Key__>`)

    This property has a single argument: Key. An object that has been added to the Context is
    retrieved by passing its key (identity) to this property.

## Context

The Context plays a central role in the Synchronize job model. In a Synchronize job, assemblies for
Synchronize PowerTools and other third-party libraries can only be referenced in the Global Script
Editor, therefore, manipulating objects of these libraries in other code segments in a job is only
possible by adding them to the Context.

The Context is an implementation of the .NET Hashtable collection, which is an in-memory data
structure that stores and retrieves objects using key/value pairs. The DTM object in the Synchronize
job model provides two members, AddToContext and Context, for adding and retrieving objects from the
Context. To learn more about these two members, please see the previous section on DTM keywords.

Although a Context makes it possible to share objects added to it across different code segments of
a Synchronize job, it is not possible to test code for each segment individually without actually
running the job. For this reason, you may encounter one of the following situations:

- You receive an exception when trying to compile the code in the Script Editor, stating that the
  object reference is not found.
- Testing your script using the built-in Script Tester with random data does not provide the
  expected results, even though the code handles the exception and checks are placed for null object
  references.

## Scripting restrictions enforced by Synchronize

Behind the scenes, Synchronize inserts each script into the body of a subroutine before compiling.
Therefore, any Visual Basic .NET constructs that are only valid outside of a subroutine/function
will fail to compile and will be disallowed.

These restrictions apply to creating a Synchronize script:

- Subroutines, functions, classes, modules, and namespaces are not allowed.
- Module-level statements, such as Import or Option statements, are not permitted.
- Shared (that is, static, and global) variables are not supported.

## Visual Basic options set by Synchronize

Synchronize establishes the following Option statements which apply to all scripts and cannot be
overridden:

- Option Explicit On – all variables must be declared before use via a Dim statement. With Visual
  Basic .Net, it is possible to both declare and assign variables at their first use, as follows:

    ```
    Dim MyVariable = "Hello"
    ```

    ```
    Dim MyObject = New Object()
    ```

- Option Strict Off – data types do not need to be declared for each variable. Conversions between
  types, when possible, are performed implicitly. (By declaring data types, unnecessary conversions
  can be avoided, and performance improved).

## .Net assembly references

Synchronize establishes certain system assembly references before compiling your scripts. These
references apply to all scripts and cannot be overridden.

These references are:

- MsCorLib.dll
- System.dll
- System.Data.dll
- System.Xml.dll

System.DirectoryServices, in particular, is ”off-limits” to your scripts so as to prevent direct
access to Active Directory and other LDAP identity providers. This restriction is desirable, as it
prevents your script from acting in conflict with Synchronize, which, after all, has ultimate
responsibility for updating these providers.

## .Net Namespaces

Synchronize imports certain namespaces when compiling your scripts. These imports apply to all
scripts and cannot be overridden.

These imports are:

- Imports System
- Imports System.Text
- Imports System.Text.RegularExpressions
- Imports System.IO
- Imports System.Math

.Net namespaces other than those listed here can still be accessed by specifying the fully-qualified
namespace. For example, a DataSet (which belongs to the System.Data namespace) can be read from a
file as follows:

```
 Dim ds = New System.Data.DataSet()<br xmlns="http://www.w3.org/1999/xhtml" /> ds.ReadXml("C:\Temp\MyFile.xml")
                
```
