---
title: "Script Methods and Properties"
description: "Script Methods and Properties"
sidebar_position: 40
---

# Script Methods and Properties

The Query and Working Query objects support the following methods and properties.

## Supported Methods

| Methods                                | Description                                                                                                                                                     |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Execute                                | Executes the object query. Use this to perform the query after setting the source, path, and properties.                                                        |
| Reset                                  | Resets the object’s properties to their original values. Use this if the source, path, or properties have been modified, but the original values are desired.   |
| AddProperty (attributes : string)      | Adds a property to the query. Using the following format: NAME=`<value>`;COLUMN=`<value>`;VALUE=`<reserved>`;DATATYPE=`<datatype>`;SIZE=`<value>`;KEY=`<value>` |
| DeleteProperty (propertyname : string) | Removes a property from a query.                                                                                                                                |

## Supported Properties

| Pproperties                                    | Description                                                                                                                                                                      |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Host : string                                  | Sets or retrieves the current host                                                                                                                                               |
| Source : string                                | Sets or retrieves the data source                                                                                                                                                |
| Path : sting                                   | Sets or retrieves the path                                                                                                                                                       |
| Paths : integer                                | Sets or retrieves the current path for multi-path tasks                                                                                                                          |
| ResultData (Property : string) : Variant       | Sets or retrieves the value for the property specified                                                                                                                           |
| ResultData (PropertyIndex : integer) : Variant | Sets ResultRow to the desired row before accessing this property                                                                                                                 |
| ResultRow : integer                            | Sets or retrieves the current row. For non-enumerated tasks, ResultRow will always be 0.                                                                                         |
| ResultRows : integer                           | Sets or returns the count of rows. Use this to determine the number of rows returned after an enumerated task is executed. Set this property to create a multi-row return value. |
| Message (index : integer, type : string)       | Sets or returns a message in the indicated position. Use MessageCount to determine the number of messages. These messages appear in the job MessageLog.                          |
